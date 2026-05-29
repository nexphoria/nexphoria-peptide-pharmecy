const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
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
      // Default (root or /checkout): Stripe checkout session.
      return await handleCheckout(request, env);
    } catch (err) {
      return json({ error: err && err.message ? err.message : 'server_error' }, 500);
    }
  },
};
