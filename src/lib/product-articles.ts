/**
 * Product → Related Articles Mapping
 * Maps each product slug to up to 3 related blog article slugs.
 * Used by the RelatedArticles component on product detail pages.
 */

export const PRODUCT_ARTICLES: Record<string, string[]> = {
  // Repair / Recovery
  "bpc-157": [
    "peptide-research-cardiovascular-fibrosis-tgfbeta-bpc157-ghk-cu-myofibroblast",
    "bpc-157-mechanism-deep-dive-no-vegf-fak-signaling",
    "bpc-157-gut-health-research-gi-protection-leaky-gut-intestinal-repair",
  ],
  "tb-500": [
    "tb-500-mechanism-deep-dive-g-actin-sequestration-thymosin-beta-4-biology",
    "tb-500-thymosin-beta-4-researchers-complete-guide",
    "peptide-cardiac-protection-research-bpc157-tb500-glp1",
  ],
  "follistatin-344": [
    "follistatin-344-igf-1-independent-muscle-research",
    "peptide-research-skeletal-muscle-hypertrophy-repair-performance-endpoints",
    "myostatin-inhibition-follistatin-actriiib-protocols",
  ],
  "ghk-cu": [
    "peptide-research-cardiovascular-fibrosis-tgfbeta-bpc157-ghk-cu-myofibroblast",
    "collagen-synthesis-research-ghk-cu-tgf-beta-pathway-deep-dive",
    "ghk-cu-wound-healing-research-protocols-study-design",
  ],

  // GH Axis
  "ipamorelin": [
    "protein-synthesis-skeletal-muscle-mtor-s6k-eif4e-gh-axis-research",
    "gpcr-pharmacology-biased-agonism-peptide-research",
    "mk-677-vs-ipamorelin-vs-cjc-1295-which-gh-secretagogue-research",
  ],
  "cjc-1295": [
    "protein-synthesis-skeletal-muscle-mtor-s6k-eif4e-gh-axis-research",
    "ghrh-biology-pulsatile-gh-secretagogues-deep-dive",
    "cjc-1295-ipamorelin-gh-axis-stack-deep-dive",
  ],
  "cjc-1295-no-dac": [
    "protein-synthesis-skeletal-muscle-mtor-s6k-eif4e-gh-axis-research",
    "ghrh-biology-pulsatile-gh-secretagogues-deep-dive",
    "cjc-1295-ipamorelin-gh-axis-stack-deep-dive",
  ],
  "cjc-1295-ipamorelin": [
    "protein-synthesis-skeletal-muscle-mtor-s6k-eif4e-gh-axis-research",
    "mk-677-vs-ipamorelin-vs-cjc-1295-which-gh-secretagogue-research",
    "cjc-1295-ipamorelin-gh-axis-stack-deep-dive",
  ],
  "sermorelin": [
    "ghrh-biology-pulsatile-gh-secretagogues-deep-dive",
    "sermorelin-ghrh-analog-anti-aging-research",
    "cjc-1295-no-dac-vs-cjc-1295-dac-choosing-right-ghrh-analog",
  ],
  "mk-677": [
    "peptide-research-sleep-circadian-rhythms-dsip-mk677-epitalon",
    "mk-677-vs-ipamorelin-vs-cjc-1295-which-gh-secretagogue-research",
    "mk-677-ibutamoren-oral-gh-secretagogue-guide",
  ],
  "tesamorelin": [
    "ghrh-biology-pulsatile-gh-secretagogues-deep-dive",
    "tesamorelin-ghrh-analog-visceral-fat-research",
    "cjc-1295-no-dac-vs-cjc-1295-dac-choosing-right-ghrh-analog",
  ],

  // GLP-1 / Metabolic
  "semaglutide": [
    "semaglutide-dosing-timing-protocol-design-researchers-reference",
    "peptide-research-kidney-health-renoprotection-glp1-bpc157",
    "glp-1-receptor-agonists-complete-research-landscape",
  ],
  "tirzepatide": [
    "tirzepatide-research-dosing-guide-glp1-gip-dual-agonism-protocols",
    "retatrutide-vs-tirzepatide-triple-vs-dual-agonist-research-comparison",
    "peptide-research-liver-health-nash-hepatic-steatosis-glp1-data",
  ],
  "retatrutide": [
    "retatrutide-triple-agonist-research-guide",
    "retatrutide-vs-tirzepatide-triple-vs-dual-agonist-research-comparison",
    "peptide-research-liver-health-nash-hepatic-steatosis-glp1-data",
  ],
  "aod-9604": [
    "aod-9604-lipolytic-fragment-research-guide",
    "hgh-fragment-176-191-vs-aod-9604-difference",
    "glp1-receptor-agonists-complete-research-landscape",
  ],
  "mots-c": [
    "mots-c-mitochondria-derived-peptide-metabolic-research",
    "humanin-shlp2-mitochondrial-derived-peptides-mots-c",
    "mitophagy-research-ss31-nad-plus-pink1-parkin-pathway",
    "peptide-stacking-longevity-nad-epitalon-ss31-ghk-cu",
  ],

  // Longevity
  "nad-plus": [
    "nad-plus-research-protocols-dosing-routes-study-design",
    "nad-precursors-nmn-nr-vs-direct-nad-injection-research",
    "peptide-biomarkers-monitoring-research-protocols-what-to-track-when",
  ],
  "epitalon": [
    "sleep-peptides-dsip-gh-axis-circadian-biology-research",
    "peptide-research-sleep-circadian-rhythms-dsip-mk677-epitalon",
    "epitalon-pineal-peptide-longevity-research-review",
  ],
  "ss-31": [
    "ss-31-elamipretide-mitochondria-targeted-peptide-research",
    "mitophagy-research-ss31-nad-plus-pink1-parkin-pathway",
    "peptide-research-immune-senescence-inflammaging-nad-thymosin-alpha1",
  ],

  // Nootropics / Neuro
  "selank": [
    "selank-semax-nootropic-peptide-research-overview",
    "blood-brain-barrier-peptide-cns-delivery-research",
    "adamax-dsip-selank-nad-nootropic-stack-protocol-deep-dive",
  ],
  "semax": [
    "selank-semax-nootropic-peptide-research-overview",
    "blood-brain-barrier-peptide-cns-delivery-research",
    "cerebrolysin-neurotrophic-peptide-research-review",
  ],
  "dsip": [
    "sleep-peptides-dsip-gh-axis-circadian-biology-research",
    "peptide-research-sleep-circadian-rhythms-dsip-mk677-epitalon",
    "dsip-delta-sleep-inducing-peptide-sleep-research-review",
  ],
  "oxytocin": [
    "testosterone-hpg-axis-peptide-research-kisspeptin-lh-hormone-endpoints",
    "oxytocin-research-neuropeptide-guide",
    "blood-brain-barrier-peptide-cns-delivery-research",
  ],

  // Melanocortin
  "pt-141": [
    "pt-141-bremelanotide-melanocortin-research-review",
    "melanotan-ii-melanocortin-research-review",
    "oxytocin-research-neuropeptide-guide",
  ],
  "melanotan-ii": [
    "melanotan-ii-melanocortin-research-review",
    "pt-141-bremelanotide-melanocortin-research-review",
    "kpv-immunomodulatory-tripeptide-research-guide",
  ],
  "kpv": [
    "kpv-immunomodulatory-tripeptide-research-guide",
    "peptide-research-pain-inflammation-bpc157-kpv-opioid-nociception",
    "peptide-research-immune-senescence-inflammaging-nad-thymosin-alpha1",
  ],

  // Immunology
  "thymosin-alpha-1": [
    "thymosin-alpha-1-immune-peptide-research-guide",
    "peptide-research-immune-senescence-inflammaging-nad-thymosin-alpha1",
    "klw-stack-kpv-ll37-thymosin-alpha1-triple-immune-modulation-research-guide",
  ],
  "ll-37": [
    "ll-37-antimicrobial-wound-healing-protocols",
    "klw-stack-kpv-ll37-thymosin-alpha1-triple-immune-modulation-research-guide",
    "ll-37-human-host-defense-peptide-research-guide",
  ],

  // Reproductive / Hormonal
  "kisspeptin": [
    "testosterone-hpg-axis-peptide-research-kisspeptin-lh-hormone-endpoints",
    "kisspeptin-10-vs-kisspeptin-54-research-protocol-differences",
    "kisspeptin-lh-surge-reproductive-neuroendocrinology-research",
  ],

  // Cosmetic
  "snap-8": [
    "snap-8-anti-wrinkle-peptide-research-guide",
    "peptide-research-skin-health-ghk-cu-snap8-cosmetic-peptides-study-design",
    "ghk-cu-copper-peptide-research-review",
  ],

  // Blends
  "wolverine-blend": [
    "wolverine-blend-bpc157-tb500-ghk-cu-triple-combination-guide",
    "bpc-157-tb-500-recovery-stack-deep-dive",
    "ghk-cu-copper-peptide-research-review",
  ],
  "glow-blend": [
    "glow-stack-ghk-cu-epitalon-nad-longevity-protocol-research-guide",
    "peptide-stacking-longevity-nad-epitalon-ss31-ghk-cu",
    "ghk-cu-copper-peptide-research-review",
  ],
  "klw-blend": [
    "klw-stack-kpv-ll37-thymosin-alpha1-triple-immune-modulation-research-guide",
    "peptide-immunology-research-tlr-signaling-cytokine-assays-nfkb-endpoints",
    "kpv-immunomodulatory-tripeptide-research-guide",
  ],
};

/**
 * Returns up to `max` related article slugs for a given product slug.
 * Falls back to the primer + COA articles if no mapping exists.
 */
export function getRelatedArticleSlugs(productSlug: string, max = 3): string[] {
  const slugs = PRODUCT_ARTICLES[productSlug];
  if (slugs && slugs.length > 0) return slugs.slice(0, max);
  // Default fallback for unmapped products
  return [
    "what-are-peptides-researchers-primer",
    "understanding-coas-how-to-read-certificate-of-analysis",
    "cold-chain-shipping-why-it-matters-for-peptide-integrity",
  ].slice(0, max);
}
