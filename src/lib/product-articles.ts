/**
 * Product → Related Articles Mapping
 * Maps each product slug to up to 3 related blog article slugs.
 * Used by the RelatedArticles component on product detail pages.
 */

export const PRODUCT_ARTICLES: Record<string, string[]> = {
  // Repair / Recovery
  "bpc-157": [
    "peptide-research-muscle-recovery-bpc157-tb500-ghk-cu-complete-protocol",
    "bpc-157-angiogenesis-vegf-enos-vascular-research-protocols",
    "bpc-157-mechanism-deep-dive-no-vegf-fak-signaling",
  ],
  "tb-500": [
    "peptide-research-muscle-recovery-bpc157-tb500-ghk-cu-complete-protocol",
    "tb-500-mechanism-deep-dive-g-actin-sequestration-thymosin-beta-4-biology",
    "bpc-157-tb-500-recovery-stack-deep-dive",
  ],
  "follistatin-344": [
    "follistatin-344-igf-1-independent-muscle-research",
    "peptide-research-skeletal-muscle-hypertrophy-repair-performance-endpoints",
    "myostatin-inhibition-follistatin-actriiib-protocols",
  ],
  "ghk-cu": [
    "peptide-research-muscle-recovery-bpc157-tb500-ghk-cu-complete-protocol",
    "ghk-cu-neuroprotection-brain-health-bdnf-nrf2-cognitive-research-protocols",
    "collagen-synthesis-research-ghk-cu-tgf-beta-pathway-deep-dive",
  ],

  // GH Axis
  "ipamorelin": [
    "ipamorelin-fat-loss-ghsr1a-lipolysis-body-composition-research-protocols",
    "protein-synthesis-skeletal-muscle-mtor-s6k-eif4e-gh-axis-research",
    "mk-677-vs-ipamorelin-vs-cjc-1295-which-gh-secretagogue-research",
  ],
  "cjc-1295": [
    "protein-synthesis-skeletal-muscle-mtor-s6k-eif4e-gh-axis-research",
    "ghrh-biology-pulsatile-gh-secretagogues-deep-dive",
    "cjc-1295-ipamorelin-gh-axis-stack-deep-dive",
  ],
  "cjc-1295-no-dac": [
    "sermorelin-vs-cjc-1295-no-dac-vs-cjc-1295-dac-ghrh-analog-research-guide",
    "ghrh-biology-pulsatile-gh-secretagogues-deep-dive",
    "cjc-1295-ipamorelin-gh-axis-stack-deep-dive",
  ],
  "cjc-1295-ipamorelin": [
    "ipamorelin-fat-loss-ghsr1a-lipolysis-body-composition-research-protocols",
    "mk-677-vs-ipamorelin-vs-cjc-1295-which-gh-secretagogue-research",
    "cjc-1295-ipamorelin-gh-axis-stack-deep-dive",
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
    "peptide-research-metabolic-syndrome-insulin-resistance-dyslipidemia-protocol-design",
    "semaglutide-weight-loss-plateau-mechanisms-protocol-adjustments",
    "semaglutide-dosing-timing-protocol-design-researchers-reference",
  ],
  "tirzepatide": [
    "peptide-research-metabolic-syndrome-insulin-resistance-dyslipidemia-protocol-design",
    "tirzepatide-lean-mass-preservation-gipr-body-composition-study-design",
    "tirzepatide-research-dosing-guide-glp1-gip-dual-agonism-protocols",
  ],
  "retatrutide": [
    "peptide-research-metabolic-syndrome-insulin-resistance-dyslipidemia-protocol-design",
    "retatrutide-pleiotropic-mechanisms-hepatic-cardiac-cns-beyond-weight-loss",
    "retatrutide-triple-agonist-research-guide",
  ],
  "aod-9604": [
    "aod-9604-lipolytic-fragment-research-guide",
    "hgh-fragment-176-191-vs-aod-9604-difference",
    "glp1-receptor-agonists-complete-research-landscape",
  ],
  "mots-c": [
    "peptide-research-metabolic-syndrome-insulin-resistance-dyslipidemia-protocol-design",
    "mots-c-mitochondria-derived-peptide-metabolic-research",
    "humanin-shlp2-mitochondrial-derived-peptides-mots-c",
  ],

  // Longevity
  "nad-plus": [
    "nad-plus-circadian-biology-nampt-sirt1-clock-genes-research-protocols",
    "nad-plus-research-protocols-dosing-routes-study-design",
    "nad-precursors-nmn-nr-vs-direct-nad-injection-research",
  ],
  "epitalon": [
    "sleep-peptides-dsip-gh-axis-circadian-biology-research",
    "peptide-research-sleep-circadian-rhythms-dsip-mk677-epitalon",
    "epitalon-pineal-peptide-longevity-research-review",
  ],
  "ss-31": [
    "ss-31-aging-muscle-sarcopenia-mitochondrial-quality-control-research-protocols",
    "peptide-research-neuroprotection-bpc157-ss31-nad-semax",
    "ss-31-elamipretide-mitochondria-targeted-peptide-research",
  ],

  // Nootropics / Neuro
  "selank": [
    "selank-semax-nootropic-peptide-research-overview",
    "blood-brain-barrier-peptide-cns-delivery-research",
    "adamax-dsip-selank-nad-nootropic-stack-protocol-deep-dive",
    "peptide-research-neuroprotection-bdnf-gdnf-neurotrophic-signaling",
  ],
  "semax": [
    "peptide-research-neuroprotection-bpc157-ss31-nad-semax",
    "selank-semax-nootropic-peptide-research-overview",
    "blood-brain-barrier-peptide-cns-delivery-research",
    "peptide-research-neuroprotection-bdnf-gdnf-neurotrophic-signaling",
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
    "peptide-research-autoimmune-inflammatory-conditions-kpv-thymosin-ll37-bpc157",
    "peptide-research-pain-inflammation-bpc157-kpv-opioid-nociception",
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
