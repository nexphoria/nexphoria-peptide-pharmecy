// Central resolver for the Cloudflare Worker endpoints. This site is a static
// export, so all server-side work (Stripe checkout, contact, waitlist) is
// handled by the Worker rather than Next.js route handlers.
//
// Override the base via NEXT_PUBLIC_CHECKOUT_URL (or NEXT_PUBLIC_WORKER_URL).
const RAW_BASE =
  process.env.NEXT_PUBLIC_WORKER_URL ||
  process.env.NEXT_PUBLIC_CHECKOUT_URL ||
  "https://nexphoria-checkout.chiya-b60.workers.dev";

// Normalise: drop a trailing slash and a trailing "/checkout" so we can append
// specific paths consistently.
const WORKER_BASE = RAW_BASE.replace(/\/+$/, "").replace(/\/checkout$/, "");

export const CHECKOUT_URL = `${WORKER_BASE}/checkout`;
export const CRYPTO_ORDER_URL = `${WORKER_BASE}/crypto-order`;
export const CONTACT_URL = `${WORKER_BASE}/contact`;
export const WAITLIST_URL = `${WORKER_BASE}/waitlist`;
export const RESTOCK_NOTIFY_URL = `${WORKER_BASE}/restock-notify`;
