// Protocol Advisor pricing model.
//
// Subscription (Monthly Auto-Ship) is THE price the researcher sees.
// One-time is presented as a quieter upcharge. No discount language,
// no crossed-out prices — the lower subscription number simply IS the price.

export const SUBSCRIPTION_MULTIPLIER = 1.2;
export const ONE_TIME_MULTIPLIER = 1.44;

export function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

export function subscriptionUnitPrice(msrp: number): number {
  return Math.round(msrp * SUBSCRIPTION_MULTIPLIER);
}

export function oneTimeUnitPrice(msrp: number): number {
  return Math.round(msrp * ONE_TIME_MULTIPLIER);
}

// Volume tiers keyed on total vials shipped across the full cycle
// (stack size × cycle months): 5% at 3 vials, 10% at 6+.
export function volumeRate(totalVials: number): number {
  if (totalVials >= 6) return 0.1;
  if (totalVials >= 3) return 0.05;
  return 0;
}

export type ProtocolPricing = {
  cycleMonths: number;
  totalVials: number;
  volumeRate: number;
  // Volume-adjusted per-shipment subscription unit price, aligned to input order.
  monthlyPerItem: number[];
  // One-time per-shipment unit price, aligned to input order.
  oneTimePerItem: number[];
  monthlyTotal: number; // per-shipment subscription subtotal
  oneTimeTotal: number; // per-shipment one-time subtotal
  cycleTotal: number; // monthlyTotal × cycle months
};

export function priceProtocol(msrps: number[], cycleMonths: number): ProtocolPricing {
  const totalVials = msrps.length * cycleMonths;
  const rate = volumeRate(totalVials);

  const monthlyPerItem = msrps.map((m) => round2(subscriptionUnitPrice(m) * (1 - rate)));
  const oneTimePerItem = msrps.map((m) => oneTimeUnitPrice(m));

  const monthlyTotal = round2(monthlyPerItem.reduce((a, b) => a + b, 0));
  const oneTimeTotal = round2(oneTimePerItem.reduce((a, b) => a + b, 0));
  const cycleTotal = round2(monthlyTotal * cycleMonths);

  return {
    cycleMonths,
    totalVials,
    volumeRate: rate,
    monthlyPerItem,
    oneTimePerItem,
    monthlyTotal,
    oneTimeTotal,
    cycleTotal,
  };
}
