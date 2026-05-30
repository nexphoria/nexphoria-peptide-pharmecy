/**
 * Nexphoria — Google Analytics 4 / GA4 E-commerce Helpers
 *
 * Measurement ID is read from NEXT_PUBLIC_GA_MEASUREMENT_ID.
 * All calls are no-ops when the ID is absent (dev / staging).
 *
 * Events implemented:
 *  - page_view         (automatic via gtag config)
 *  - view_item         (product detail page)
 *  - view_item_list    (product listing page)
 *  - add_to_cart       (BuyBox, ProductCard)
 *  - remove_from_cart  (CartDrawer remove)
 *  - view_cart         (CartDrawer open)
 *  - begin_checkout    (checkout page submit)
 *  - purchase          (checkout success page)
 *  - search            (search modal)
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

// ─── Low-level event emitter ─────────────────────────────────────────────────

function gtag(...args: unknown[]): void {
  if (typeof window === "undefined") return;
  if (!GA_MEASUREMENT_ID) return;
  window.dataLayer = window.dataLayer ?? [];
  (window.dataLayer as unknown[]).push(args);
  window.gtag?.(...args);
}

export function trackEvent(
  eventName: string,
  params: Record<string, unknown> = {}
): void {
  if (typeof window === "undefined" || !GA_MEASUREMENT_ID) return;
  try {
    gtag("event", eventName, params);
  } catch {
    // Silently ignore tracking errors — never break the purchase flow
  }
}

// ─── Shared item shape ────────────────────────────────────────────────────────

export interface GA4Item {
  item_id: string;       // product slug
  item_name: string;
  item_category: string;
  price: number;
  quantity?: number;
  item_variant?: string; // "vial" | "pen"
  discount?: number;     // absolute dollar discount per unit
}

export function buildItem(opts: {
  slug: string;
  name: string;
  category: string;
  price: number;
  quantity?: number;
  format?: string;
  discount?: number;
}): GA4Item {
  return {
    item_id: opts.slug,
    item_name: opts.name,
    item_category: opts.category,
    price: opts.price,
    quantity: opts.quantity ?? 1,
    item_variant: opts.format,
    discount: opts.discount ?? 0,
  };
}

// ─── E-commerce events ────────────────────────────────────────────────────────

/** Fire on product detail page load */
export function trackViewItem(item: GA4Item): void {
  trackEvent("view_item", {
    currency: "USD",
    value: item.price,
    items: [item],
  });
}

/** Fire when a product list/grid is rendered (e.g. /products page) */
export function trackViewItemList(
  items: GA4Item[],
  listName = "Product List"
): void {
  trackEvent("view_item_list", {
    item_list_name: listName,
    items,
  });
}

/** Fire when a product is added to cart */
export function trackAddToCart(item: GA4Item): void {
  trackEvent("add_to_cart", {
    currency: "USD",
    value: item.price * (item.quantity ?? 1),
    items: [item],
  });
}

/** Fire when a product is removed from cart */
export function trackRemoveFromCart(item: GA4Item): void {
  trackEvent("remove_from_cart", {
    currency: "USD",
    value: item.price * (item.quantity ?? 1),
    items: [item],
  });
}

/** Fire when the cart drawer is opened */
export function trackViewCart(items: GA4Item[], totalValue: number): void {
  trackEvent("view_cart", {
    currency: "USD",
    value: totalValue,
    items,
  });
}

/** Fire when checkout is initiated */
export function trackBeginCheckout(
  items: GA4Item[],
  totalValue: number,
  coupon?: string
): void {
  trackEvent("begin_checkout", {
    currency: "USD",
    value: totalValue,
    coupon,
    items,
  });
}

/**
 * Fire on the /checkout/success page.
 * transaction_id should be unique per order. We derive a client-side ID from
 * the session timestamp when the Stripe session ID is not surfaced in the URL.
 */
export function trackPurchase(opts: {
  transactionId: string;
  items: GA4Item[];
  value: number;
  shipping?: number;
  tax?: number;
  coupon?: string;
}): void {
  trackEvent("purchase", {
    transaction_id: opts.transactionId,
    currency: "USD",
    value: opts.value,
    shipping: opts.shipping ?? 0,
    tax: opts.tax ?? 0,
    coupon: opts.coupon,
    items: opts.items,
  });
}

/** Fire on search modal query */
export function trackSearch(searchTerm: string): void {
  trackEvent("search", { search_term: searchTerm });
}
