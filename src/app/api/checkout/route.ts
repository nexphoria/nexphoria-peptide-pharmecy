import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

interface CartItem {
  productSlug: string;
  name: string;
  price: number; // monthly price in dollars
  quantity: number;
  size?: string;
  format: "vial" | "pen";
  subscriptionMonths?: number; // 1, 3, or 6
}

export async function POST(request: NextRequest) {
  try {
    const { items, customerEmail } = await request.json() as {
      items: CartItem[];
      customerEmail?: string;
    };

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: "No items in cart" },
        { status: 400 }
      );
    }

    const origin = request.headers.get("origin") || "http://localhost:3000";

    // Check if any items are subscriptions
    const hasSubscription = items.some(item => (item.subscriptionMonths || 1) > 1);

    if (hasSubscription) {
      // Create subscription checkout
      const lineItems = items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: `${item.name}${item.size ? ` (${item.size})` : ""} — ${item.subscriptionMonths || 1} Month Plan`,
            description: `Research-grade peptide compound — ${item.format === "pen" ? "Pre-loaded Pen" : "Lyophilized Vial"} | Ships monthly`,
          },
          unit_amount: Math.round(item.price * 100),
          recurring: {
            interval: "month" as const,
            interval_count: 1,
          },
        },
        quantity: item.quantity,
      }));

      const sessionParams = {
        mode: "subscription" as const,
        payment_method_types: ["card" as const],
        line_items: lineItems,
        ...(customerEmail && { customer_email: customerEmail }),
        subscription_data: {
          metadata: {
            source: "nexphoria-web",
            plan_months: String(items[0]?.subscriptionMonths || 1),
          },
        },
        success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/checkout/cancel`,
        metadata: {
          source: "nexphoria-web",
          type: "subscription",
          itemCount: String(items.length),
        },
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const session = await stripe.checkout.sessions.create(sessionParams as any);
      return NextResponse.json({ url: session.url, sessionId: session.id });

    } else {
      // One-time payment checkout
      const lineItems = items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: `${item.name}${item.size ? ` (${item.size})` : ""}`,
            description: `Research-grade peptide compound — ${item.format === "pen" ? "Pre-loaded Pen" : "Lyophilized Vial"}`,
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      }));

      const sessionParams = {
        mode: "payment" as const,
        payment_method_types: ["card" as const],
        line_items: lineItems,
        ...(customerEmail && { customer_email: customerEmail }),
        shipping_address_collection: {
          allowed_countries: ["US" as const],
        },
        shipping_options: [
          {
            shipping_rate_data: {
              type: "fixed_amount" as const,
              fixed_amount: { amount: 1500, currency: "usd" },
              display_name: "Standard Shipping (Cold Chain)",
              delivery_estimate: {
                minimum: { unit: "business_day" as const, value: 3 },
                maximum: { unit: "business_day" as const, value: 5 },
              },
            },
          },
          {
            shipping_rate_data: {
              type: "fixed_amount" as const,
              fixed_amount: { amount: 2999, currency: "usd" },
              display_name: "Priority Overnight (Cold Chain)",
              delivery_estimate: {
                minimum: { unit: "business_day" as const, value: 1 },
                maximum: { unit: "business_day" as const, value: 2 },
              },
            },
          },
        ],
        success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/checkout/cancel`,
        metadata: {
          source: "nexphoria-web",
          type: "one-time",
          itemCount: String(items.length),
        },
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const session = await stripe.checkout.sessions.create(sessionParams as any);
      return NextResponse.json({ url: session.url, sessionId: session.id });
    }
  } catch (error) {
    console.error("Stripe checkout error:", error);
    const message = error instanceof Error ? error.message : "Checkout failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
