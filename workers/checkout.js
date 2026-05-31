const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...CORS },
  });

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function forwardWebhook(url, payload) {
  if (!url) return;
  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch {
    // Non-blocking — a webhook failure must not fail the submission.
  }
}

async function handleContact(request, env) {
  const body = await request.json();
  const { name, email, institution, inquiryType, message } = body || {};

  if (!name || !email || !message) return json({ error: 'missing_fields' }, 400);
  if (!EMAIL_RE.test(email)) return json({ error: 'invalid_email' }, 400);

  const entry = {
    name: String(name).trim(),
    email: String(email).trim().toLowerCase(),
    institution: String(institution || '').trim(),
    inquiryType: String(inquiryType || '').trim(),
    message: String(message).trim(),
    timestamp: new Date().toISOString(),
  };

  await forwardWebhook(env.CONTACT_WEBHOOK_URL, entry);
  return json({ success: true }, 201);
}

async function handleWaitlist(request, env) {
  const body = await request.json();
  const email = (body?.email || '').toString().trim().toLowerCase();
  const source = (body?.source || '').toString().trim();

  if (!email || !EMAIL_RE.test(email)) return json({ error: 'invalid_email' }, 400);

  const entry = {
    email,
    source: source || 'web',
    subscribedAt: new Date().toISOString(),
  };

  // Store in Cloudflare KV (key = email, value = JSON entry)
  if (env.SUBSCRIBERS) {
    try {
      // Avoid duplicate entries
      const existing = await env.SUBSCRIBERS.get(email);
      if (!existing) {
        await env.SUBSCRIBERS.put(email, JSON.stringify(entry));
        // Also append to an index list for easy bulk export
        const indexKey = 'index:emails';
        const index = JSON.parse((await env.SUBSCRIBERS.get(indexKey)) || '[]');
        index.push({ email, subscribedAt: entry.subscribedAt });
        await env.SUBSCRIBERS.put(indexKey, JSON.stringify(index));
      }
    } catch {
      // KV failure must not fail the response
    }
  }

  // Forward to n8n webhook if configured
  await forwardWebhook(env.WAITLIST_WEBHOOK_URL, entry);
  return json({ success: true }, 201);
}

async function handleCheckout(request, env) {
  const { items, customerEmail } = await request.json();

  if (!items || items.length === 0) {
    return json({ error: 'No items' }, 400);
  }

  const stripe = await import('stripe');
  const stripeClient = new stripe.default(env.STRIPE_SECRET_KEY);

  const origin = request.headers.get('origin') || 'https://nexphoria.pages.dev';
  const subscriptionItems = items.filter((item) => (item.subscriptionMonths || 1) > 1);
  const oneTimeItems = items.filter((item) => (item.subscriptionMonths || 1) <= 1);
  const hasSubscription = subscriptionItems.length > 0;

  const formatLabel = (item) =>
    item.format === 'pen' ? 'Pre-loaded Pen' : 'Lyophilized Vial';

  const cycleLabel = (months) =>
    months === 6 ? '6-Month Research Cycle' : months === 3 ? '3-Month Research Cycle' : '';

  let session;

  if (hasSubscription) {
    // Stripe subscription mode: subscription items get recurring pricing,
    // one-time items in the same cart are added as non-recurring line items.
    const lineItems = [];

    for (const item of subscriptionItems) {
      lineItems.push({
        price_data: {
          currency: 'usd',
          product_data: {
            name: `${item.name}${item.size ? ` (${item.size})` : ''} — ${cycleLabel(item.subscriptionMonths)}`,
            description: `Research-grade peptide compound — ${formatLabel(item)} | Billed monthly`,
          },
          unit_amount: Math.round(item.price * 100),
          recurring: { interval: 'month', interval_count: 1 },
        },
        quantity: item.quantity,
      });
    }

    // One-time items added without recurring (charged once at checkout).
    for (const item of oneTimeItems) {
      lineItems.push({
        price_data: {
          currency: 'usd',
          product_data: {
            name: `${item.name}${item.size ? ` (${item.size})` : ''}`,
            description: `Research-grade peptide compound — ${formatLabel(item)}`,
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      });
    }

    session = await stripeClient.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: lineItems,
      ...(customerEmail && { customer_email: customerEmail }),
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout/cancel`,
    });
  } else {
    const lineItems = oneTimeItems.map((item) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: `${item.name}${item.size ? ` (${item.size})` : ''}`,
          description: `Research-grade peptide compound — ${formatLabel(item)}`,
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }));

    session = await stripeClient.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: lineItems,
      ...(customerEmail && { customer_email: customerEmail }),
      shipping_address_collection: { allowed_countries: ['US'] },
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout/cancel`,
    });
  }

  return json({ url: session.url, sessionId: session.id });
}

// ---------------------------------------------------------------------------
// Crypto order handler — creates a pending order, returns wallet addresses
// and a checkout reference. Crypto is the documented backup payment rail
// (AllayPay primary, Stripe secondary, crypto backup). Actual on-chain
// confirmation is done out-of-band by the fulfillment desk; the order moves
// to fulfilled once a manual or automated reconciliation step matches the
// txid against this reference.
// ---------------------------------------------------------------------------
async function handleCryptoOrder(request, env) {
  const body = await request.json();
  const { items, customerEmail, shippingMethod, asset } = body || {};

  if (!items || !Array.isArray(items) || items.length === 0) {
    return json({ error: 'No items' }, 400);
  }
  if (!customerEmail || !EMAIL_RE.test(customerEmail)) {
    return json({ error: 'invalid_email' }, 400);
  }

  const assetUpper = String(asset || 'BTC').toUpperCase();
  if (!['BTC', 'ETH'].includes(assetUpper)) {
    return json({ error: 'unsupported_asset' }, 400);
  }

  // Wallet addresses must be configured in worker env. If not configured we
  // refuse — we never want to display a placeholder address.
  const btcAddress = (env.CRYPTO_BTC_ADDRESS || '').trim();
  const ethAddress = (env.CRYPTO_ETH_ADDRESS || '').trim();
  const walletAddress = assetUpper === 'BTC' ? btcAddress : ethAddress;

  if (!walletAddress) {
    return json(
      { error: 'crypto_unavailable', message: 'Crypto payment is not currently configured. Please use card checkout or contact orders@nexphoria.com.' },
      503,
    );
  }

  // Compute total in USD from the line items the client supplied.
  const subtotal = items.reduce((sum, item) => {
    const qty = Number(item.quantity || 1);
    const price = Number(item.price || 0);
    return sum + qty * price;
  }, 0);

  const shipping = shippingMethod === 'overnight' ? 38 : subtotal >= 200 ? 0 : 15;
  const totalUsd = Math.round((subtotal + shipping) * 100) / 100;

  // Generate a short, human-friendly order reference. Crypto orders carry the
  // CR- prefix so reconciliation can tell them apart from Stripe sessions.
  const reference = `CR-${Date.now().toString(36).toUpperCase()}-${Math.random()
    .toString(36)
    .slice(2, 6)
    .toUpperCase()}`;

  const order = {
    type: 'nexphoria_crypto_order',
    reference,
    asset: assetUpper,
    walletAddress,
    totalUsd,
    subtotalUsd: Math.round(subtotal * 100) / 100,
    shippingUsd: shipping,
    shippingMethod: shippingMethod || 'standard',
    customerEmail: customerEmail.toLowerCase(),
    items: items.map((item) => ({
      productSlug: item.productSlug || null,
      name: item.name,
      size: item.size || null,
      format: item.format || null,
      quantity: Number(item.quantity || 1),
      unitPriceUsd: Number(item.price || 0),
      subscriptionMonths: Number(item.subscriptionMonths || 1),
    })),
    status: 'awaiting_payment',
    createdAt: new Date().toISOString(),
  };

  // Persist to KV so the success page + back office can look it up later.
  if (env.SUBSCRIBERS) {
    try {
      await env.SUBSCRIBERS.put(`crypto:${reference}`, JSON.stringify(order), {
        expirationTtl: 60 * 60 * 24 * 365,
      });
      const indexKey = 'index:crypto_orders';
      const index = JSON.parse((await env.SUBSCRIBERS.get(indexKey)) || '[]');
      index.push({
        reference,
        email: order.customerEmail,
        asset: order.asset,
        totalUsd: order.totalUsd,
        createdAt: order.createdAt,
      });
      await env.SUBSCRIBERS.put(indexKey, JSON.stringify(index));
    } catch {
      // KV failure must not block the response
    }
  }

  // Notify fulfillment desk via the same webhook lane Stripe orders use, so a
  // single n8n workflow can fan out (email confirmation, slack alert, etc.).
  await forwardWebhook(env.ORDER_WEBHOOK_URL, order);

  return json({
    success: true,
    reference,
    asset: order.asset,
    walletAddress: order.walletAddress,
    totalUsd: order.totalUsd,
    instructionsUrl: `/checkout/crypto?ref=${encodeURIComponent(reference)}&asset=${order.asset}`,
  });
}

// ---------------------------------------------------------------------------
// Restock reminder — sign up to be notified when a product is back in stock.
// POST /restock-notify  { email, productSlug, productName }
// ---------------------------------------------------------------------------
async function handleRestockNotify(request, env) {
  const body = await request.json();
  const email = (body?.email || '').toString().trim().toLowerCase();
  const productSlug = (body?.productSlug || '').toString().trim();
  const productName = (body?.productName || '').toString().trim();

  if (!email || !EMAIL_RE.test(email)) return json({ error: 'invalid_email' }, 400);
  if (!productSlug) return json({ error: 'missing_product_slug' }, 400);

  const entry = {
    email,
    productSlug,
    productName: productName || productSlug,
    subscribedAt: new Date().toISOString(),
  };

  if (env.SUBSCRIBERS) {
    try {
      const key = `restock:${productSlug}:${email}`;
      const existing = await env.SUBSCRIBERS.get(key);
      if (!existing) {
        await env.SUBSCRIBERS.put(key, JSON.stringify(entry), {
          expirationTtl: 60 * 60 * 24 * 180,
        });
        const productIndexKey = `index:restock:${productSlug}`;
        const productIndex = JSON.parse((await env.SUBSCRIBERS.get(productIndexKey)) || '[]');
        productIndex.push({ email, subscribedAt: entry.subscribedAt });
        await env.SUBSCRIBERS.put(productIndexKey, JSON.stringify(productIndex));
        const globalIndexKey = 'index:restock_all';
        const globalIndex = JSON.parse((await env.SUBSCRIBERS.get(globalIndexKey)) || '[]');
        globalIndex.push({ email, productSlug, subscribedAt: entry.subscribedAt });
        await env.SUBSCRIBERS.put(globalIndexKey, JSON.stringify(globalIndex));
      }
    } catch {
      // KV failure must not block the user
    }
  }

  await forwardWebhook(env.RESTOCK_WEBHOOK_URL, { type: 'restock_signup', ...entry });
  return json({ success: true }, 201);
}

// ---------------------------------------------------------------------------
// Restock trigger — admin endpoint to fire notifications for a product.
// POST /restock-trigger  { productSlug, productName, secret }
// Retrieves all subscriber emails, forwards to RESTOCK_WEBHOOK_URL for
// downstream email delivery (n8n / Make.com).
// ---------------------------------------------------------------------------
async function handleRestockTrigger(request, env) {
  const body = await request.json();
  const secret = (body?.secret || '').toString().trim();
  const productSlug = (body?.productSlug || '').toString().trim();
  const productName = (body?.productName || productSlug).toString().trim();

  if (!env.RESTOCK_ADMIN_SECRET || secret !== env.RESTOCK_ADMIN_SECRET) {
    return json({ error: 'unauthorized' }, 401);
  }
  if (!productSlug) return json({ error: 'missing_product_slug' }, 400);

  let emails = [];

  if (env.SUBSCRIBERS) {
    try {
      const productIndexKey = `index:restock:${productSlug}`;
      const productIndex = JSON.parse((await env.SUBSCRIBERS.get(productIndexKey)) || '[]');
      emails = productIndex.map((e) => e.email);
      if (emails.length > 0) {
        // Clear per-product index (one-shot notify) so users can re-subscribe
        await env.SUBSCRIBERS.put(productIndexKey, JSON.stringify([]));
        await Promise.all(
          emails.map((email) => env.SUBSCRIBERS.delete(`restock:${productSlug}:${email}`))
        );
      }
    } catch {
      // Proceed even on partial KV failure
    }
  }

  const payload = {
    type: 'restock_trigger',
    productSlug,
    productName,
    emails,
    count: emails.length,
    triggeredAt: new Date().toISOString(),
  };

  await forwardWebhook(env.RESTOCK_WEBHOOK_URL, payload);
  return json({ success: true, count: emails.length, emails }, 200);
}

async function handleSupport(request, env) {
  const body = await request.json();
  const { name, email, question, online, submittedAt } = body || {};

  if (!name || !email || !question) return json({ error: 'missing_fields' }, 400);
  if (!EMAIL_RE.test(email)) return json({ error: 'invalid_email' }, 400);

  const entry = {
    name: String(name).trim(),
    email: String(email).trim().toLowerCase(),
    question: String(question).trim(),
    online: Boolean(online),
    submittedAt: submittedAt || new Date().toISOString(),
  };

  if (env.SUBSCRIBERS) {
    try {
      const key = `support:${entry.email}:${Date.now()}`;
      await env.SUBSCRIBERS.put(key, JSON.stringify(entry), { expirationTtl: 60 * 60 * 24 * 365 });
      const indexKey = 'index:support';
      const index = JSON.parse((await env.SUBSCRIBERS.get(indexKey)) || '[]');
      index.push({ email: entry.email, name: entry.name, submittedAt: entry.submittedAt });
      await env.SUBSCRIBERS.put(indexKey, JSON.stringify(index));
    } catch {
      // KV failure must not fail the response
    }
  }

  await forwardWebhook(env.SUPPORT_WEBHOOK_URL, entry);
  return json({ success: true }, 201);
}

async function handleWholesale(request, env) {
  const body = await request.json();
  const { name, institution, email, monthlyVolume, compounds, message } = body || {};

  if (!name || !email) return json({ error: 'missing_fields' }, 400);
  if (!EMAIL_RE.test(email)) return json({ error: 'invalid_email' }, 400);

  const entry = {
    name: String(name).trim(),
    institution: String(institution || '').trim(),
    email: String(email).trim().toLowerCase(),
    monthlyVolume: String(monthlyVolume || '').trim(),
    compounds: String(compounds || '').trim(),
    message: String(message || '').trim(),
    submittedAt: new Date().toISOString(),
  };

  // Store in KV if available
  if (env.SUBSCRIBERS) {
    try {
      const key = `wholesale:${entry.email}:${Date.now()}`;
      await env.SUBSCRIBERS.put(key, JSON.stringify(entry), { expirationTtl: 60 * 60 * 24 * 365 });
      // Append to wholesale index
      const indexKey = 'index:wholesale';
      const index = JSON.parse((await env.SUBSCRIBERS.get(indexKey)) || '[]');
      index.push({ email: entry.email, name: entry.name, submittedAt: entry.submittedAt });
      await env.SUBSCRIBERS.put(indexKey, JSON.stringify(index));
    } catch {
      // KV failure must not fail the response
    }
  }

  await forwardWebhook(env.WHOLESALE_WEBHOOK_URL, entry);
  return json({ success: true }, 201);
}

// ---------------------------------------------------------------------------
// Stripe webhook handler — verifies signature, processes order events
// ---------------------------------------------------------------------------
async function handleStripeWebhook(request, env) {
  const signature = request.headers.get('stripe-signature');
  if (!signature) {
    return new Response('Missing stripe-signature header', { status: 400 });
  }

  const body = await request.text();
  let event;

  // Verify webhook signature using Web Crypto (no Node.js crypto available)
  try {
    event = await verifyStripeWebhook(body, signature, env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return new Response(`Webhook signature verification failed: ${err.message}`, { status: 400 });
  }

  // Process relevant events
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const orderData = {
      type: 'nexphoria_order',
      sessionId: session.id,
      customerEmail: session.customer_email || session.customer_details?.email,
      amountTotal: session.amount_total,
      currency: session.currency,
      status: session.payment_status,
      shippingAddress: session.shipping_details?.address || null,
      createdAt: new Date(session.created * 1000).toISOString(),
    };

    // Store order in KV
    if (env.SUBSCRIBERS) {
      try {
        const key = `order:${session.id}`;
        await env.SUBSCRIBERS.put(key, JSON.stringify(orderData), { expirationTtl: 60 * 60 * 24 * 365 * 2 });
        const indexKey = 'index:orders';
        const index = JSON.parse((await env.SUBSCRIBERS.get(indexKey)) || '[]');
        index.push({ sessionId: session.id, email: orderData.customerEmail, createdAt: orderData.createdAt });
        await env.SUBSCRIBERS.put(indexKey, JSON.stringify(index));
      } catch { /* KV failure must not fail webhook ack */ }
    }

    // Forward to n8n if configured
    await forwardWebhook(env.ORDER_WEBHOOK_URL, orderData);
  }

  if (event.type === 'payment_intent.payment_failed') {
    const pi = event.data.object;
    await forwardWebhook(env.ORDER_WEBHOOK_URL, {
      type: 'nexphoria_payment_failed',
      paymentIntentId: pi.id,
      amount: pi.amount,
      lastError: pi.last_payment_error?.message,
      createdAt: new Date().toISOString(),
    });
  }

  return new Response(JSON.stringify({ received: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

// Stripe webhook signature verification using HMAC-SHA256 via Web Crypto API
async function verifyStripeWebhook(payload, sigHeader, secret) {
  if (!secret) throw new Error('STRIPE_WEBHOOK_SECRET not configured');

  // Parse the stripe-signature header
  const parts = {};
  for (const part of sigHeader.split(',')) {
    const [k, v] = part.split('=');
    parts[k.trim()] = v.trim();
  }
  const timestamp = parts['t'];
  const signature = parts['v1'];
  if (!timestamp || !signature) throw new Error('Invalid stripe-signature format');

  // Check timestamp tolerance (5 minutes)
  const tolerance = 300;
  const now = Math.floor(Date.now() / 1000);
  if (Math.abs(now - parseInt(timestamp, 10)) > tolerance) {
    throw new Error('Timestamp outside tolerance window');
  }

  // Compute expected signature
  const signedPayload = `${timestamp}.${payload}`;
  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const signatureBuffer = await crypto.subtle.sign('HMAC', keyMaterial, enc.encode(signedPayload));
  const expected = Array.from(new Uint8Array(signatureBuffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');

  if (expected !== signature) throw new Error('Signature mismatch');

  return JSON.parse(payload);
}

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: CORS });
    }

    if (request.method !== 'POST') {
      return json({ error: 'Method not allowed' }, 405);
    }

    const path = new URL(request.url).pathname.replace(/\/+$/, '');

    try {
      if (path.endsWith('/contact')) return await handleContact(request, env);
      if (path.endsWith('/waitlist')) return await handleWaitlist(request, env);
      if (path.endsWith('/wholesale')) return await handleWholesale(request, env);
      if (path.endsWith('/support')) return await handleSupport(request, env);
      if (path.endsWith('/crypto-order')) return await handleCryptoOrder(request, env);
      if (path.endsWith('/restock-notify')) return await handleRestockNotify(request, env);
      if (path.endsWith('/restock-trigger')) return await handleRestockTrigger(request, env);
      if (path.endsWith('/webhook')) return await handleStripeWebhook(request, env);
      // Default (root or /checkout): Stripe checkout session.
      return await handleCheckout(request, env);
    } catch (err) {
      return json({ error: err && err.message ? err.message : 'server_error' }, 500);
    }
  },
};
