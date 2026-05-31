/**
 * Product → Related Articles Mapping
 * Maps each product slug to up to 3 related blog article slugs.
 * Used by the RelatedArticles component on product detail pages.
 */

export const PRODUCT_ARTICLES: Record<string, string[]> = {
  // Repair / Recovery
  "bpc-157": [
    "bpc-157-mechanism-deep-dive-no-vegf-fak-signaling",
    "peptide-research-skeletal-muscle-hypertrophy-repair-performance-endpoints",
    "bpc-157-tb-500-recovery-stack-deep-dive",
  ],
  "tb-500": [
    "tb-500-mechanism-deep-dive-g-actin-sequestration-thymosin-beta-4-biology",
    "peptide-research-skeletal-muscle-hypertrophy-repair-performance-endpoints",
    "tb-500-thymosin-beta-4-researchers-complete-guide",
  ],
  "follistatin-344": [
    "follistatin-344-igf-1-independent-muscle-research",
    "peptide-research-skeletal-muscle-hypertrophy-repair-performance-endpoints",
    "myostatin-inhibition-follistatin-actriiib-protocols",
  ],
  "ghk-cu": [
    "ghk-cu-wound-healing-research-protocols-study-design",
    "ghk-cu-vs-ghk-copper-complex-chemistry-research-guide",
    "wolverine-blend-bpc157-tb500-ghk-cu-triple-combination-guide",
  ],

  // GH Axis
  "ipamorelin": [
    "mk-677-vs-ipamorelin-vs-cjc-1295-which-gh-secretagogue-research",
    "ipamorelin-dosing-timing-protocol-design-researchers-reference",
    "ghrp-desensitization-tachyphylaxis-research-review",
  ],
  "cjc-1295": [
    "ghrh-biology-pulsatile-gh-secretagogues-deep-dive",
    "cjc-1295-ipamorelin-gh-axis-stack-deep-dive",
    "cjc-1295-no-dac-vs-cjc-1295-dac-choosing-right-ghrh-analog",
  ],
  "cjc-1295-no-dac": [
    "ghrh-biology-pulsatile-gh-secretagogues-deep-dive",
    "cjc-1295-ipamorelin-gh-axis-stack-deep-dive",
    "cjc-1295-no-dac-vs-cjc-1295-dac-choosing-right-ghrh-analog",
  ],
  "cjc-1295-ipamorelin": [
    "mk-677-vs-ipamorelin-vs-cjc-1295-which-gh-secretagogue-research",
    "cjc-1295-ipamorelin-gh-axis-stack-deep-dive",
    "ipamorelin-dosing-timing-protocol-design-researchers-reference",
  ],
  "sermorelin": [
    "ghrh-biology-pulsatile-gh-secretagogues-deep-dive",
    "sermorelin-ghrh-analog-anti-aging-research",
    "cjc-1295-no-dac-vs-cjc-1295-dac-choosing-right-ghrh-analog",
  ],
  "mk-677": [
    "mk-677-vs-ipamorelin-vs-cjc-1295-which-gh-secretagogue-research",
    "mk-677-ibutamoren-oral-gh-secretagogue-guide",
    "peptide-water-retention-electrolyte-research-study-design",
  ],
  "tesamorelin": [
    "ghrh-biology-pulsatile-gh-secretagogues-deep-dive",
    "tesamorelin-ghrh-analog-visceral-fat-research",
    "cjc-1295-no-dac-vs-cjc-1295-dac-choosing-right-ghrh-analog",
  ],

  // GLP-1 / Metabolic
  "semaglutide": [
    "semaglutide-dosing-timing-protocol-design-researchers-reference",
    "glp1-agonists-neurodegeneration-parkinsons-alzheimers-tbi-research",
    "peptide-water-retention-electrolyte-research-study-design",
  ],
  "tirzepatide": [
    "tirzepatide-research-dosing-guide-glp1-gip-dual-agonism-protocols",
    "retatrutide-vs-tirzepatide-triple-vs-dual-agonist-research-comparison",
    "adiponectin-leptin-metabolic-hormone-endpoints-peptide-research",
  ],
  "retatrutide": [
    "retatrutide-triple-agonist-research-guide",
    "retatrutide-vs-tirzepatide-triple-vs-dual-agonist-research-comparison",
    "adiponectin-leptin-metabolic-hormone-endpoints-peptide-research",
  ],
  "aod-9604": [
    "aod-9604-lipolytic-fragment-research-guide",
    "hgh-fragment-176-191-vs-aod-9604-difference",
    "glp1-receptor-agonists-complete-research-landscape",
  ],
  "mots-c": [
    "mots-c-mitochondria-derived-peptide-metabolic-research",
    "adiponectin-leptin-metabolic-hormone-endpoints-peptide-research",
    "ss-31-elamipretide-mitochondria-targeted-peptide-research",
  ],

  // Longevity
  "nad-plus": [
    "nad-precursors-nmn-nr-vs-direct-nad-injection-research",
    "nad-plus-research-protocols-dosing-routes-study-design",
    "peptide-research-anti-aging-longevity-biomarkers-study-design",
  ],
  "epitalon": [
    "epitalon-pineal-peptide-longevity-research-review",
    "peptide-research-anti-aging-longevity-biomarkers-study-design",
    "glutathione-peptides-oxidative-stress-research-overview",
  ],
  "ss-31": [
    "ss-31-elamipretide-mitochondria-targeted-peptide-research",
    "peptide-research-anti-aging-longevity-biomarkers-study-design",
    "glutathione-peptides-oxidative-stress-research-overview",
  ],

  // Nootropics / Neuro
  "selank": [
    "selank-semax-nootropic-peptide-research-overview",
    "peptide-synergy-stacking-science-of-combining-research-compounds",
    "adamax-dsip-selank-nad-nootropic-stack-protocol-deep-dive",
  ],
  "semax": [
    "selank-semax-nootropic-peptide-research-overview",
    "cerebrolysin-neurotrophic-peptide-research-review",
    "oxytocin-research-neuropeptide-guide",
  ],
  "dsip": [
    "dsip-delta-sleep-inducing-peptide-sleep-research-review",
    "selank-semax-nootropic-peptide-research-overview",
    "oxytocin-research-neuropeptide-guide",
  ],
  "oxytocin": [
    "oxytocin-research-neuropeptide-guide",
    "oxytocin-research-protocols-intranasal-vs-ip-administration-deep-dive",
    "peptide-administration-routes-sc-ip-iv-intranasal-guide",
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
    "peptide-immunology-research-tlr-signaling-cytokine-assays-nfkb-endpoints",
    "thymosin-alpha-1-immune-peptide-research-guide",
  ],

  // Immunology
  "thymosin-alpha-1": [
    "thymosin-alpha-1-immune-peptide-research-guide",
    "peptide-immunology-research-tlr-signaling-cytokine-assays-nfkb-endpoints",
    "ll-37-human-host-defense-peptide-research-guide",
  ],
  "ll-37": [
    "ll-37-antimicrobial-wound-healing-protocols",
    "peptide-immunology-research-tlr-signaling-cytokine-assays-nfkb-endpoints",
    "ll-37-human-host-defense-peptide-research-guide",
  ],

  // Reproductive / Hormonal
  "kisspeptin": [
    "kisspeptin-10-vs-kisspeptin-54-research-protocol-differences",
    "kisspeptin-lh-surge-reproductive-neuroendocrinology-research",
    "oxytocin-research-neuropeptide-guide",
  ],

  // Cosmetic
  "snap-8": [
    "snap-8-anti-wrinkle-peptide-research-guide",
    "ghk-cu-copper-peptide-research-review",
  ],

  // Blends
  "wolverine-blend": [
    "wolverine-blend-bpc157-tb500-ghk-cu-triple-combination-guide",
    "bpc-157-tb-500-recovery-stack-deep-dive",
    "ghk-cu-copper-peptide-research-review",
  ],
  "glow-blend": [
    "ghk-cu-copper-peptide-research-review",
    "snap-8-anti-wrinkle-peptide-research-guide",
  ],
  "klw-blend": [
    "kisspeptin-lh-surge-reproductive-neuroendocrinology-research",
    "ll-37-human-host-defense-peptide-research-guide",
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
