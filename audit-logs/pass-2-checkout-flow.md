# Audit Pass 2: Checkout Flow
**Date:** 2026-05-29
**Focus:** Cart → Checkout → Stripe → Success/Cancel

## Files Audited
- `src/lib/cart.ts` — Zustand cart store
- `src/components/cart/CartDrawer.tsx` — Slide-out cart drawer
- `src/app/checkout/page.tsx` — Checkout page
- `src/app/checkout/success/page.tsx` — Order confirmation
- `src/app/checkout/cancel/page.tsx` — Order cancelled
- `workers/checkout.js` — Cloudflare Worker (Stripe session creation)
- `src/lib/endpoints.ts` — Worker URL config
- `src/lib/product-images.ts` — Product thumbnail helpers
- `src/app/globals.css` — Global styles
- `src/components/header.tsx` — Cart icon in header

## Issues Found & Fixed

### 1. CRITICAL: `.text-secondary` CSS = invisible white text
**File:** `globals.css:201`
**Bug:** Defined as `rgba(255,255,255,0.55)` — nearly invisible on light backgrounds.
**Impact:** Success/cancel page body text and lists completely unreadable.
**Fix:** Changed to `var(--color-text-secondary)` (#555555).

### 2. CRITICAL: Success page broken CSS variable
**File:** `checkout/success/page.tsx:51`
**Bug:** `var(--dark-panel)` doesn't exist. Correct var is `--color-dark-panel`.
**Impact:** "What happens next" box had no background color.
**Fix:** Replaced with explicit `backgroundColor: "#F7F5F0"` (light card bg, appropriate for light page).

### 3. Success page `border-border` class doesn't exist
**File:** `checkout/success/page.tsx:51`
**Bug:** `border-border` references `--color-border` which isn't in the @theme.
**Fix:** Replaced with explicit `borderColor: "#ECEAE4"` (card-border).

### 4. Success/cancel pages: `text-primary` / `text-acid-green` utility issues
**Fix:** Replaced Tailwind utility classes with explicit inline styles to guarantee correct colors on these standalone pages.

### 5. CRITICAL: Worker — mixed subscription + one-time items all charged as subscriptions
**File:** `workers/checkout.js:95-146`
**Bug:** If ANY item had `subscriptionMonths > 1`, ALL items (including one-time purchases) were given `recurring` pricing. One-time items would be billed monthly forever.
**Fix:** Split items into `subscriptionItems` and `oneTimeItems`. In subscription mode, only subscription items get `recurring`; one-time items are added without it (charged once at checkout).

### 6. Checkout page: unused shipping address form
**File:** `checkout/page.tsx`
**Bug:** Collected firstName, lastName, address, city, state, zip — but never sent any of it. Stripe handles address collection via `shipping_address_collection`. Confusing UX with dead form fields.
**Fix:** Replaced entire shipping form with a note explaining address is collected securely on Stripe's payment page.

### 7. Free gift threshold mismatch
**Files:** `CartDrawer.tsx` vs `checkout/page.tsx`
**Bug:** CartDrawer used dollar thresholds ($100/$150/$250). Checkout page used item count thresholds (3/5/7 items). Inconsistent — user could qualify in drawer but not at checkout.
**Fix:** Aligned checkout page to use dollar thresholds matching CartDrawer ($100/$150/$250).

### 8. CartDrawer: misleading "Add to Order" on supplies
**File:** `CartDrawer.tsx:357-383`
**Bug:** Bacteriostatic Water and Syringe Kit showed "Add to Order" text but had no onClick handler. Users would click expecting action — nothing happened.
**Fix:** Removed fake CTA, kept as informational price display with a note about availability at checkout and free recon water over $100.

### 9. Price formatting: cents truncated
**Files:** `CartDrawer.tsx:328`, `checkout/page.tsx:384`
**Bug:** Used `.toFixed(0)` for line item totals, truncating cents (e.g., $149.50 → $149).
**Fix:** Changed to `.toFixed(2)` for accurate pricing display.

### 10. Checkout button styling inconsistency
**File:** `checkout/page.tsx`
**Bug:** "Place Order" button used inline styles instead of `btn-acid` class from design system.
**Fix:** Applied `btn-acid` class to both desktop and mobile sticky buttons.

## Build Result
✅ `npm run build` passes — 72/72 static pages generated successfully.

## Not Changed (by design)
- Cart store logic (Zustand + localStorage persistence) — working correctly
- Stripe Worker URL configuration — correct
- Cart drawer open/close, body scroll lock, escape key — all working
- Header cart badge — functional
- Recommended products section — working (uses getRelatedProducts correctly)
