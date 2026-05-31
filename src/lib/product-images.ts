// All products now have consistent .webp product photography
// Generated via FAL Flux Pro — matching pharmaceutical vial style

const ALL_PRODUCT_SLUGS = [
  'bpc-157',
  'tb-500',
  'ghk-cu',
  'nad-plus',
  'mots-c',
  'epitalon',
  'tirzepatide',
  'retatrutide',
  'ipamorelin',
  'pt-141',
  'aod-9604',
  'semaglutide',
  'selank',
  'semax',
  'melanotan-ii',
  'thymosin-alpha-1',
  'll-37',
  'ss-31',
  'tesamorelin',
  'cjc-1295-no-dac',
  'dsip',
  'kisspeptin',
  'oxytocin',
  'kpv',
  'wolverine-blend',
  'glow-blend',
  'klw-blend',
  'snap-8',
  'sterile-water-3ml',
  'sterile-water-10ml',
  'cjc-1295',
  'cjc-1295-ipamorelin',
  'sermorelin',
  'mk-677',
] as const;

export function hasProductPhoto(slug: string): boolean {
  return ALL_PRODUCT_SLUGS.includes(slug as any);
}

export function getProductImagePath(slug: string): string {
  return `/products/${slug}.webp`;
}

export function getProductImagePathPng(slug: string): string {
  return `/products/${slug}.png`;
}
