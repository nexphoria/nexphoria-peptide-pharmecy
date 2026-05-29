# Purchase Flow Verification & Fixes — May 29, 2026

## Summary
Full purchase flow verified and fixed. All prices match MSRP+20% table. Discount logic corrected. Build clean at 153 pages.

---

## Step 1: Price Verification ✅

**Source:** `/Users/chiyayosopov/.openclaw/workspace/nexphoria/pricing-msrp-table.md`

All 34 products verified against MSRP+20% formula:

### Key Products Verified:
- **BPC-157:** 5mg=$50, 10mg=$90 ✓
- **TB-500:** 5mg=$54, 10mg=$96 ✓
- **Semaglutide:** 5mg=$78, 10mg=$132 ✓
- **Tirzepatide:** 10mg=$120, 30mg=$300 ✓
- **Retatrutide:** 10mg=$210 ✓
- **AOD-9604:** 5mg=$53 ✓
- **GHK-Cu:** 50mg=$66, 100mg=$102 ✓
- **Sermorelin:** 5mg=$52, 10mg=$72 ✓
- **MK-677:** $66 ✓
- **Selank:** 10mg=$38 ✓
- **Semax:** 5mg=$34 ✓
- **NAD+:** 100mg=$30, 500mg=$102 ✓
- **PT-141:** 10mg=$54 ✓
- **Melanotan II:** 10mg=$48 ✓
- **Epitalon:** 10mg=$60 ✓
- **Thymosin Alpha-1:** 5mg=$66 ✓
- **LL-37:** 5mg=$72 ✓
- **MOTS-c:** 10mg=$144 ✓
- **SS-31:** 10mg=$84 ✓
- **Tesamorelin:** 5mg=$62, 10mg=$88 ✓
- **DSIP:** 10mg=$66 ✓
- **Kisspeptin:** 5mg=$50 ✓
- **Oxytocin:** 5mg=$42 ✓
- **KPV:** 10mg=$58 ✓
- **Wolverine Blend:** $78 ✓
- **GLOW Blend:** $180 ✓

**Result:** All prices in `src/lib/products.ts` match MSRP+20% table exactly. ✅

---

## Step 2: BuyBox Discount Logic — FIXED ❌→✅

**File:** `src/components/product/BuyBox.tsx`

### Issue Found:
BuyBox was calculating discounts correctly but NOT passing them to the cart:
- One-Time volume discounts: 1 vial=0%, 3 vials=5%, 6 vials=10%
- Subscribe discount: 5%
- But `addItem()` calls didn't include the discount parameter

### Fix Applied:
```typescript
// BEFORE:
const handleAddToOrder = () => {
  if (purchaseMode === 'one-time') {
    for (let i = 0; i < selectedVolume.qty; i++) {
      addItem(product, selectedFormat, selectedDosage, 1);
    }
  } else {
    addItem(product, selectedFormat, selectedDosage, 3);
  }
  openDrawer();
};

// AFTER:
const handleAddToOrder = () => {
  if (purchaseMode === 'one-time') {
    // One-time: apply volume discount
    for (let i = 0; i < selectedVolume.qty; i++) {
      addItem(product, selectedFormat, selectedDosage, 1, volumeDiscount);
    }
  } else {
    // Subscribe: apply 5% subscription discount
    addItem(product, selectedFormat, selectedDosage, 3, SUBSCRIBE_DISCOUNT);
  }
  openDrawer();
};
```

**Verified Discount Structure:**
- One-Time: `volumeDiscount` (0, 0.05, or 0.10)
- Subscribe: `SUBSCRIBE_DISCOUNT` (0.05)
- **Subscribe + volume should NOT stack** (correct as-is)

---

## Step 3: Cart Logic — FIXED ❌→✅

**File:** `src/lib/cart.ts`

### Issues Found:
1. Cart was applying 8%/12% discounts instead of 5%/10%
2. Cart interface referenced `subscriptionDiscount` (wrong semantics)
3. `addItem()` didn't accept a discount parameter

### Fixes Applied:

**1. Interface Update:**
```typescript
// BEFORE:
subscriptionDiscount: number; // fractional discount applied (0, 0.08, or 0.12)

// AFTER:
discount: number; // fractional discount applied (0, 0.05, or 0.10)
```

**2. addItem Signature:**
```typescript
// BEFORE:
addItem: (product: Product, format?: 'vial' | 'pen', selectedDosage?: {...}, subscriptionMonths?: number) => void;

// AFTER:
addItem: (product: Product, format?: 'vial' | 'pen', selectedDosage?: {...}, subscriptionMonths?: number, discount?: number) => void;
```

**3. Discount Logic:**
```typescript
// BEFORE:
const subscriptionDiscount =
  subscriptionMonths >= 6 ? 0.12 :
  subscriptionMonths >= 3 ? 0.08 : 0;

const monthlyPrice = subscriptionDiscount > 0
  ? +(basePrice * (1 - subscriptionDiscount)).toFixed(2)
  : basePrice;

// AFTER:
// Apply the discount passed from BuyBox (volume or subscription)
const monthlyPrice = discount > 0
  ? +(basePrice * (1 - discount)).toFixed(2)
  : basePrice;
```

**Result:** Cart now correctly applies 5%/10% discounts as passed from BuyBox. ✅

---

## Step 4: CartDrawer Display ✅

**File:** `src/components/cart/CartDrawer.tsx`

### Verified Components:
- ✅ Shows correct unit price via `getItemUnitPrice(item)`
- ✅ Displays subscription label via `getCadenceLabel(item.subscriptionMonths)`
- ✅ Shows "/mo" suffix for subscriptions
- ✅ Quantity controls update cart state correctly
- ✅ Total price calculated via `getTotalPrice()` (sum of `monthlyPrice × quantity`)
- ✅ Free gift thresholds: $100 (recon water), $200 (shipping), $300 (cold-pack)
- ✅ Progress bar animates correctly
- ✅ Recommended products shown
- ✅ Estimated delivery date (+3 business days)
- ✅ Trust badges: "99%+ Purity", "COA Included", "Cold Shipped"

**No changes needed.** ✅

---

## Step 5: Checkout Page ✅

**File:** `src/app/checkout/page.tsx`

### Verified Components:
- ✅ Order summary with all cart items
- ✅ Correct pricing: `unitPrice × quantity`
- ✅ Subscription labels: "3-Month Research Cycle" or "6-Month Research Cycle"
- ✅ Shows "/month" suffix for subscriptions
- ✅ Included supplies based on cart total ($100/$200/$300 thresholds)
- ✅ Shipping: $15 if under $200, else free
- ✅ Promo code input (UI only, not functional backend)
- ✅ Total calculation: `subtotal + shipping`
- ✅ Trust badge grid: "256-bit Encryption", "30-Day Guarantee", "Cold-Chain Shipped", "COA Enclosed"
- ✅ Stripe redirect via `CHECKOUT_URL` (Cloudflare Worker)
- ✅ Email validation before checkout
- ✅ Mobile sticky CTA bar

**No changes needed.** ✅

---

## Step 6: Build Verification ✅

```bash
npx next build
```

**Result:**
- ✓ Compiled successfully
- ✓ TypeScript checks passed
- ✓ 153 pages generated
- ✓ Zero errors
- ✓ Zero warnings (except Node.js experimental localStorage in build workers)

---

## Full Purchase Flow Summary

### Pricing Tier (Correct):
1. **One-Time Purchase:**
   - 1 vial: full price (MSRP+20%)
   - 3 vials (Research Kit): 5% off each
   - 6 vials (Lab Protocol): 10% off each

2. **Subscribe (Auto-Ship):**
   - 5% off
   - Ships monthly
   - No volume stacking

### Examples:

**BPC-157 10mg ($90 base):**
- One-Time 1 vial: $90
- One-Time 3 vials: $85.50 each = $256.50 total
- One-Time 6 vials: $81 each = $486 total
- Subscribe: $85.50/month

**Semaglutide 5mg ($78 base):**
- One-Time 1 vial: $78
- One-Time 3 vials: $74.10 each = $222.30 total
- One-Time 6 vials: $70.20 each = $421.20 total
- Subscribe: $74.10/month

---

## Files Modified

1. **src/lib/cart.ts** — Fixed discount logic, updated interface
2. **src/components/product/BuyBox.tsx** — Pass discount to addItem

---

## Test Checklist

- [x] All product prices match MSRP+20% table
- [x] BuyBox calculates discounts correctly
- [x] BuyBox passes discounts to cart
- [x] Cart applies correct discount (5%/10%)
- [x] CartDrawer displays correct prices
- [x] CartDrawer shows subscription labels
- [x] Checkout page shows correct totals
- [x] Checkout includes correct shipping ($15 or free)
- [x] Build completes without errors
- [x] 153 pages generated

---

## Status: ✅ COMPLETE

All pricing verified. Purchase flow fixed. Build clean.
