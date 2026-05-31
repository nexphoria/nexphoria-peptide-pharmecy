/**
 * Nexphoria Subscription Layer
 *
 * Platform abstraction for Recharge / Skio subscription checkout.
 * Cadence types and per-SKU configs live in src/lib/products.ts.
 *
 * Platform recommendation:
 *   Skio  — preferred for new Shopify 2.0+ stores; cleaner API, better
 *            analytics, native headless/storefront support.
 *   Recharge — preferred when migrating an existing subscriber base.
 *
 * Integration checklist (Skio):
 *   1. Add Skio app to Shopify store.
 *   2. Create Selling Plan Groups per product in the Skio dashboard.
 *   3. Fetch sellingPlanId per cadence via Skio Storefront API at runtime.
 *   4. POST buildSubscriptionPayload() to /api/checkout with platform='skio'.
 *
 * Integration checklist (Recharge):
 *   1. Install @rechargeapps/storefront-client.
 *   2. Map SubscriptionLineItem.intervalDays → Recharge charge_interval_frequency.
 *   3. POST buildSubscriptionPayload() to /api/checkout with platform='recharge'.
 */

import {
  SubscriptionCadence,
  SUBSCRIPTION_CADENCE_CONFIG,
  getSubscriptionCadences,
} from './products';

// Re-export for consumers that only import from subscriptions.ts
export type { SubscriptionCadence };
export { SUBSCRIPTION_CADENCE_CONFIG, getSubscriptionCadences };

// ---------------------------------------------------------------------------
// Checkout payload — Recharge / Skio compatible
// ---------------------------------------------------------------------------

/**
 * A subscription line in platform-agnostic form.
 *
 * Recharge mapping:
 *   charge_interval_frequency = intervalDays
 *   order_interval_unit       = "day"
 *   order_interval_frequency  = intervalDays
 *
 * Skio mapping:
 *   sellingPlanId from the Skio selling plan group for this product/cadence.
 *   Fetch at runtime via Skio Storefront API after Shopify variant IDs are set.
 */
export interface SubscriptionLineItem {
  productSlug: string;
  /** Shopify variant ID — populate once commerce backend is wired */
  variantId?: string;
  cadence: SubscriptionCadence;
  intervalDays: number;
  quantity: number;
  unitPrice: number;
  discountedUnitPrice: number;
}

export interface SubscriptionPayload {
  platform: 'recharge' | 'skio' | 'mock';
  lines: SubscriptionLineItem[];
  oneTimeLines: Array<{
    productSlug: string;
    variantId?: string;
    quantity: number;
    unitPrice: number;
  }>;
}

/**
 * Builds the checkout payload from cart items.
 * POST this to /api/checkout once a commerce backend is wired.
 *
 * @example
 * const payload = buildSubscriptionPayload(cartItems, 'skio');
 * await fetch('/api/checkout', {
 *   method: 'POST',
 *   body: JSON.stringify(payload),
 * });
 */
export function buildSubscriptionPayload(
  cartItems: Array<{
    product: { slug: string };
    quantity: number;
    monthlyPrice: number;
    subscriptionMonths: number;
    subscriptionCadence?: SubscriptionCadence;
    selectedDosage?: { price: number };
  }>,
  platform: SubscriptionPayload['platform'] = 'mock',
): SubscriptionPayload {
  const lines: SubscriptionLineItem[] = [];
  const oneTimeLines: SubscriptionPayload['oneTimeLines'] = [];

  for (const item of cartItems) {
    const basePrice = item.selectedDosage?.price ?? item.monthlyPrice;
    if (item.subscriptionCadence) {
      const config = SUBSCRIPTION_CADENCE_CONFIG[item.subscriptionCadence];
      lines.push({
        productSlug: item.product.slug,
        cadence: item.subscriptionCadence,
        intervalDays: config.intervalDays,
        quantity: item.quantity,
        unitPrice: basePrice,
        discountedUnitPrice: item.monthlyPrice,
      });
    } else {
      oneTimeLines.push({
        productSlug: item.product.slug,
        quantity: item.quantity,
        unitPrice: item.monthlyPrice,
      });
    }
  }

  return { platform, lines, oneTimeLines };
}
