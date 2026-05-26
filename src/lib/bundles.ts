import { products } from "./products";

export type Bundle = {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  productSlugs: string[];
  totalPrice: number;
  savings: number;
  tags: string[];
};

export const bundles: Bundle[] = [
  {
    slug: "recovery-stack",
    name: "Recovery Stack",
    eyebrow: "MOST POPULAR",
    description:
      "Accelerate tissue repair, reduce inflammation, and support cellular regeneration",
    productSlugs: ["bpc-157", "tb-500", "ghk-cu"],
    totalPrice: 289,
    savings: 24,
    tags: ["Post-Surgery", "Sports Recovery", "Joint Health"],
  },
  {
    slug: "longevity-stack",
    name: "Longevity Stack",
    eyebrow: "BEST VALUE",
    description:
      "Turn back the clock with telomere support, cellular energy, and skin rejuvenation",
    productSlugs: ["epitalon", "nad-plus", "ghk-cu"],
    totalPrice: 279,
    savings: 42,
    tags: ["Anti-Aging", "Cellular Health", "Skin"],
  },
  {
    slug: "cognitive-stack",
    name: "Cognitive Stack",
    eyebrow: "BEST VALUE",
    description:
      "Enhance focus, memory, and mental clarity with research-backed nootropic peptides",
    productSlugs: ["selank", "semax", "nad-plus"],
    totalPrice: 237,
    savings: 30,
    tags: ["Focus", "Memory", "Anxiety Relief"],
  },
  {
    slug: "performance-stack",
    name: "Performance Stack",
    eyebrow: "BEST VALUE",
    description:
      "Maximize growth hormone, recovery, and lean muscle development",
    productSlugs: ["cjc-1295-ipamorelin", "tb-500", "bpc-157"],
    totalPrice: 333,
    savings: 50,
    tags: ["Muscle", "Recovery", "GH Optimization"],
  },
];

export function getBundleProducts(bundle: Bundle) {
  return bundle.productSlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean);
}

export function getBundlesForProduct(productSlug: string): Bundle[] {
  return bundles.filter((b) => b.productSlugs.includes(productSlug));
}
