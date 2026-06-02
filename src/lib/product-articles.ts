/**
 * Product → Related Articles Mapping
 * Maps each product slug to up to 3 related blog article slugs.
 * Used by the RelatedArticles component on product detail pages.
 */

export const PRODUCT_ARTICLES: Record<string, string[]> = {
  // Repair / Recovery
  "bpc-157": [
    "peptide-research-cardiac-hypertrophy-heart-failure-bpc157-tb500-ss31-ghkcu",
    "bpc-157-angiogenesis-vegf-enos-vascular-research-protocols",
    "bpc-157-mechanism-deep-dive-no-vegf-fak-signaling",
  ],
  "tb-500": [
    "peptide-research-cardiac-hypertrophy-heart-failure-bpc157-tb500-ss31-ghkcu",
    "tb-500-cardiac-research-thymosin-beta-4-ikk-myocardial-repair-protocols",
    "tb-500-mechanism-deep-dive-g-actin-sequestration-thymosin-beta-4-biology",
  ],
  "follistatin-344": [
    "follistatin-344-vs-myostatin-propeptide-comparative-inhibition-research",
    "follistatin-344-igf-1-independent-muscle-research",
    "myostatin-inhibition-follistatin-actriiib-protocols",
  ],
  "ghk-cu": [
    "peptide-research-cardiac-hypertrophy-heart-failure-bpc157-tb500-ss31-ghkcu",
    "ghk-cu-skin-aging-collagen-elastin-clinical-research-review",
    "senolytic-peptides-cellular-senescence-epitalon-nad-ghk-cu-research",
  ],

  // GH Axis
  "ipamorelin": [
    "cjc-1295-ipamorelin-combination-research-guide",
    "ipamorelin-fat-loss-ghsr1a-lipolysis-body-composition-research-protocols",
    "peptide-research-comprehensive-recovery-stack-bpc157-tb500-ghk-cu-ipamorelin-protocol",
  ],
  "cjc-1295": [
    "protein-synthesis-skeletal-muscle-mtor-s6k-eif4e-gh-axis-research",
    "ghrh-biology-pulsatile-gh-secretagogues-deep-dive",
    "cjc-1295-ipamorelin-gh-axis-stack-deep-dive",
  ],
  "cjc-1295-no-dac": [
    "cjc-1295-ipamorelin-combination-research-guide",
    "sermorelin-vs-cjc-1295-no-dac-vs-cjc-1295-dac-ghrh-analog-research-guide",
    "ghrh-biology-pulsatile-gh-secretagogues-deep-dive",
  ],
  "cjc-1295-ipamorelin": [
    "cjc-1295-ipamorelin-combination-research-guide",
    "ipamorelin-fat-loss-ghsr1a-lipolysis-body-composition-research-protocols",
    "mk-677-vs-ipamorelin-vs-cjc-1295-which-gh-secretagogue-research",
  ],
  "sermorelin": [
    "sermorelin-vs-cjc-1295-no-dac-vs-cjc-1295-dac-ghrh-analog-research-guide",
    "sermorelin-ghrh-analog-anti-aging-research",
    "ghrh-biology-pulsatile-gh-secretagogues-deep-dive",
  ],
  "mk-677": [
    "mk-677-sleep-quality-research-gh-pulse-sws-copinschi-data",
    "mk-677-vs-ipamorelin-vs-cjc-1295-which-gh-secretagogue-research",
    "mk-677-ibutamoren-oral-gh-secretagogue-guide",
  ],
  "tesamorelin": [
    "sermorelin-vs-cjc-1295-no-dac-vs-cjc-1295-dac-ghrh-analog-research-guide",
    "tesamorelin-ghrh-analog-visceral-fat-research",
    "ghrh-biology-pulsatile-gh-secretagogues-deep-dive",
  ],

  // GLP-1 / Metabolic
  "semaglutide": [
    "peptide-research-metabolic-syndrome-insulin-resistance-hypertension-dyslipidemia",
    "glp1-appetite-regulation-hypothalamic-circuits-ghrelin-hunger-endpoints",
    "semaglutide-weight-loss-plateau-mechanisms-protocol-adjustments",
  ],
  "tirzepatide": [
    "peptide-research-metabolic-syndrome-insulin-resistance-hypertension-dyslipidemia",
    "glp1-appetite-regulation-hypothalamic-circuits-ghrelin-hunger-endpoints",
    "tirzepatide-lean-mass-preservation-gipr-body-composition-study-design",
  ],
  "retatrutide": [
    "glp1-appetite-regulation-hypothalamic-circuits-ghrelin-hunger-endpoints",
    "retatrutide-pleiotropic-mechanisms-hepatic-cardiac-cns-beyond-weight-loss",
    "glp1-agonist-discontinuation-rebound-washout-reinitiation-research",
  ],
  "aod-9604": [
    "aod-9604-lipolysis-complete-research-protocol-guide",
    "hgh-fragment-176-191-vs-aod-9604-difference",
    "glp1-receptor-agonists-complete-research-landscape",
  ],
  "mots-c": [
    "nad-plus-skeletal-muscle-atrophy-metabolism-research-protocols",
    "mots-c-mitochondria-derived-peptide-metabolic-research",
    "epigenetic-aging-clocks-horvath-grimage-peptide-research",
  ],

  // Longevity
  "nad-plus": [
    "nad-plus-skeletal-muscle-atrophy-metabolism-research-protocols",
    "sirt1-sirt3-nad-dependent-sirtuin-research-guide",
    "nad-plus-dna-repair-parp1-sirtuins-genome-stability-research",
  ],
  "epitalon": [
    "peptide-research-longevity-complete-multi-target-protocol-guide",
    "epigenetic-aging-clocks-horvath-grimage-peptide-research",
    "epitalon-pineal-peptide-longevity-research-review",
  ],
  "ss-31": [
    "peptide-research-cardiac-hypertrophy-heart-failure-bpc157-tb500-ss31-ghkcu",
    "ss-31-aging-muscle-sarcopenia-mitochondrial-quality-control-research-protocols",
    "sirt1-sirt3-nad-dependent-sirtuin-research-guide",
  ],

  // Nootropics / Neuro
  "selank": [
    "selank-anxiety-stress-research-mechanisms-protocols",
    "peptide-research-depression-mood-stress-selank-semax-bpc157-nad-protocol",
    "selank-semax-nootropic-peptide-research-overview",
    "adamax-dsip-selank-nad-nootropic-stack-protocol-deep-dive",
  ],
  "semax": [
    "semax-cognitive-enhancement-neuroprotection-research-protocols",
    "peptide-research-depression-mood-stress-selank-semax-bpc157-nad-protocol",
    "peptide-research-neuroprotection-bpc157-ss31-nad-semax",
    "selank-semax-nootropic-peptide-research-overview",
  ],
  "dsip": [
    "sleep-peptides-dsip-gh-axis-circadian-biology-research",
    "peptide-research-sleep-circadian-rhythms-dsip-mk677-epitalon",
    "dsip-delta-sleep-inducing-peptide-sleep-research-review",
  ],
  "oxytocin": [
    "pt141-vs-oxytocin-sexual-behavior-arousal-research-protocols",
    "testosterone-hpg-axis-peptide-research-kisspeptin-lh-hormone-endpoints",
    "oxytocin-research-neuropeptide-guide",
  ],

  // Melanocortin
  "pt-141": [
    "pt141-vs-oxytocin-sexual-behavior-arousal-research-protocols",
    "pt-141-bremelanotide-melanocortin-research-review",
    "melanotan-ii-melanocortin-research-review",
  ],
  "melanotan-ii": [
    "melanotan-ii-melanocortin-research-review",
    "pt-141-bremelanotide-melanocortin-research-review",
    "kpv-immunomodulatory-tripeptide-research-guide",
  ],
  "kpv": [
    "peptide-research-arthritis-joint-inflammation-bpc157-kpv-tb500-protocol",
    "kpv-immunomodulatory-tripeptide-research-guide",
    "peptide-research-inflammation-cox2-nfkb-anti-inflammatory-protocols",
  ],

  // Immunology
  "thymosin-alpha-1": [
    "thymosin-alpha-1-immune-peptide-research-guide",
    "peptide-research-autoimmune-inflammatory-conditions-kpv-thymosin-ll37-bpc157",
    "klw-stack-kpv-ll37-thymosin-alpha1-triple-immune-modulation-research-guide",
  ],
  "ll-37": [
    "peptide-research-autoimmune-inflammatory-conditions-kpv-thymosin-ll37-bpc157",
    "ll-37-antimicrobial-wound-healing-protocols",
    "klw-stack-kpv-ll37-thymosin-alpha1-triple-immune-modulation-research-guide",
  ],

  // Reproductive / Hormonal
  "kisspeptin": [
    "pcos-glp1-kisspeptin-androgen-pathway-research-protocols",
    "testosterone-hpg-axis-peptide-research-kisspeptin-lh-hormone-endpoints",
    "kisspeptin-10-vs-kisspeptin-54-research-protocol-differences",
  ],

  // Cosmetic
  "snap-8": [
    "snap-8-anti-wrinkle-peptide-research-guide",
    "peptide-research-skin-health-ghk-cu-snap8-cosmetic-peptides-study-design",
    "ghk-cu-copper-peptide-research-review",
  ],

  // Blends
    "wolverine-blend": [
    "peptide-research-muscle-recovery-bpc157-tb500-ghk-cu-complete-protocol",
    "wolverine-blend-bpc157-tb500-ghk-cu-triple-combination-guide",
    "bpc-157-tb-500-recovery-stack-deep-dive",
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
