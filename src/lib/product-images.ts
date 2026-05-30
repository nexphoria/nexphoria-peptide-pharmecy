// Products that have real photography available (.webp)
export const PHOTO_SLUGS = [
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
] as const;

// Products that have AI-generated imagery (-gen.jpg)
export const GEN_SLUGS = [
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
] as const;

export function hasProductPhoto(slug: string): boolean {
  return PHOTO_SLUGS.includes(slug as any) || GEN_SLUGS.includes(slug as any);
}

export function getProductImagePath(slug: string): string {
  if (GEN_SLUGS.includes(slug as any)) {
    return `/products/${slug}-gen.jpg`;
  }
  return `/products/${slug}.webp`;
}

export function getProductImagePathPng(slug: string): string {
  return `/products/${slug}.png`;
}
