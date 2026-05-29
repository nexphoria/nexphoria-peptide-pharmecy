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

  await forwardWebhook(env.WAITLIST_WEBHOOK_URL, {
    email,
    source: source || 'web',
    timestamp: new Date().toISOString(),
  });
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
  const hasSubscription = items.some((item) => (item.subscriptionMonths || 1) > 1);

  const cycleLabel = (months) =>
    months === 6 ? '6-Month Research Cycle' : months === 3 ? '3-Month Research Cycle' : '';

  let session;

  if (hasSubscription) {
    const lineItems = items.map((item) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: `${item.name}${item.size ? ` (${item.size})` : ''} — ${cycleLabel(item.subscriptionMonths)}`,
          description: `Research-grade peptide compound — ${item.format === 'pen' ? 'Pre-loaded Pen' : 'Lyophilized Vial'} | Billed monthly`,
        },
        unit_amount: Math.round(item.price * 100),
        recurring: { interval: 'month', interval_count: 1 },
      },
      quantity: item.quantity,
    }));

    session = await stripeClient.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: lineItems,
      ...(customerEmail && { customer_email: customerEmail }),
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout/cancel`,
    });
  } else {
    const lineItems = items.map((item) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: `${item.name}${item.size ? ` (${item.size})` : ''}`,
          description: `Research-grade peptide compound — ${item.format === 'pen' ? 'Pre-loaded Pen' : 'Lyophilized Vial'}`,
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
      // Default (root or /checkout): Stripe checkout session.
      return await handleCheckout(request, env);
    } catch (err) {
      return json({ error: err && err.message ? err.message : 'server_error' }, 500);
    }
  },
};
