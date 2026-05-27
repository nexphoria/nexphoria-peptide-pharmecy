export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
    }

    const { items, customerEmail } = await request.json();

    if (!items || items.length === 0) {
      return new Response(JSON.stringify({ error: 'No items' }), { status: 400 });
    }

    const stripe = await import('stripe');
    const stripeClient = new stripe.default(env.STRIPE_SECRET_KEY);

    const origin = request.headers.get('origin') || 'https://nexphoria.pages.dev';

    const hasSubscription = items.some(item => (item.subscriptionMonths || 1) > 1);

    let session;

    if (hasSubscription) {
      const lineItems = items.map(item => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: `${item.name}${item.size ? ` (${item.size})` : ''} — ${item.subscriptionMonths || 1} Month Plan`,
            description: `Research-grade peptide compound — ${item.format === 'pen' ? 'Pre-loaded Pen' : 'Lyophilized Vial'}`,
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
      const lineItems = items.map(item => ({
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

    return new Response(JSON.stringify({ url: session.url, sessionId: session.id }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  },
};
