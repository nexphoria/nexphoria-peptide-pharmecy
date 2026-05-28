// Products that have real photography available
export const PHOTO_SLUGS = [
  'bpc-157',
  'tb-500',
  'ghk-cu',
  'nad-plus',
  'mots-c',
  'epitalon'
] as const;

export function hasProductPhoto(slug: string): boolean {
  return PHOTO_SLUGS.includes(slug as any);
}

export function getProductImagePath(slug: string): string {
  return `/products/${slug}.png`;
}
