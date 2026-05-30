/**
 * compound-tags.ts
 * 
 * Derives compound tag → article slug mappings from PRODUCT_ARTICLES.
 * Used by /blog/tag/[tag] pages to show all articles mentioning a compound.
 * 
 * Also extends the mapping with additional article associations beyond
 * the product's primary 3 related articles.
 */

import { PRODUCT_ARTICLES } from './product-articles';

/** Human-readable display names for compound slugs */
export const COMPOUND_DISPLAY_NAMES: Record<string, string> = {
  "bpc-157": "BPC-157",
  "tb-500": "TB-500",
  "ghk-cu": "GHK-Cu",
  "follistatin-344": "Follistatin 344",
  "wolverine-blend": "Wolverine Blend",
  "glow-blend": "GLOW Blend",
  "klw-blend": "KLW Blend",
  "ipamorelin": "Ipamorelin",
  "cjc-1295": "CJC-1295 (DAC)",
  "cjc-1295-no-dac": "CJC-1295 No DAC",
  "cjc-1295-ipamorelin": "CJC-1295 / Ipamorelin",
  "sermorelin": "Sermorelin",
  "tesamorelin": "Tesamorelin",
  "mk-677": "MK-677 (Ibutamoren)",
  "hexarelin": "Hexarelin",
  "semaglutide": "Semaglutide",
  "tirzepatide": "Tirzepatide",
  "retatrutide": "Retatrutide",
  "aod-9604": "AOD-9604",
  "nad-plus": "NAD+",
  "epitalon": "Epitalon",
  "ss-31": "SS-31 (Elamipretide)",
  "mots-c": "MOTS-c",
  "selank": "Selank",
  "semax": "Semax",
  "dsip": "DSIP",
  "thymosin-alpha-1": "Thymosin Alpha-1",
  "kpv": "KPV",
  "ll-37": "LL-37",
  "kisspeptin": "Kisspeptin",
  "oxytocin": "Oxytocin",
  "pt-141": "PT-141 (Bremelanotide)",
  "melanotan-ii": "Melanotan II",
  "snap-8": "Snap-8",
};

/**
 * Extended mapping: compound slug → ALL article slugs mentioning that compound.
 * Starts from PRODUCT_ARTICLES (each product's 3 primary articles),
 * then adds additional cross-references from the broader article corpus.
 */
const EXTENDED_COMPOUND_ARTICLES: Record<string, string[]> = {
  "bpc-157": [
    "bpc-157-mechanism-deep-dive-no-vegf-fak-signaling",
    "bpc-157-researchers-complete-guide",
    "bpc-157-tb-500-recovery-stack-deep-dive",
    "wolverine-blend-bpc157-tb500-ghk-cu-triple-combination-guide",
    "peptide-synergy-stacking-science-of-combining-research-compounds",
    "bpc-157-tb-500-how-to-dosing-protocol-guide",
    "peptide-dosing-calculator-bpc-157-tb-500-together",
    "peptide-administration-routes-sc-ip-iv-intranasal-guide",
    "peptide-storage-temperatures-cold-chain-reference",
    "peptide-reconstitution-complete-step-by-step-guide",
  ],
  "tb-500": [
    "tb-500-mechanism-deep-dive-g-actin-sequestration-thymosin-beta-4-biology",
    "thymosin-beta-4-systemic-vs-local-effects-research",
    "tb-500-thymosin-beta-4-researchers-complete-guide",
    "bpc-157-tb-500-recovery-stack-deep-dive",
    "wolverine-blend-bpc157-tb500-ghk-cu-triple-combination-guide",
    "bpc-157-tb-500-how-to-dosing-protocol-guide",
    "follistatin-344-igf-1-independent-muscle-research-guide",
    "peptide-synergy-stacking-science-of-combining-research-compounds",
    "peptide-storage-temperatures-cold-chain-reference",
    "peptide-administration-routes-sc-ip-iv-intranasal-guide",
  ],
  "ghk-cu": [
    "ghk-cu-wound-healing-research-protocols-study-design",
    "ghk-cu-vs-ghk-copper-complex-chemistry-research-guide",
    "wolverine-blend-bpc157-tb500-ghk-cu-triple-combination-guide",
    "ghk-cu-copper-peptide-research-review",
    "peptide-stacking-longevity-nad-epitalon-ss31-ghk-cu",
    "glutathione-peptides-oxidative-stress-research-overview",
    "peptide-storage-temperatures-cold-chain-reference",
  ],
  "semaglutide": [
    "semaglutide-dosing-timing-protocol-design-researchers-reference",
    "semaglutide-vs-tirzepatide-research-comparison",
    "glp1-receptor-agonists-complete-research-landscape",
    "retatrutide-vs-tirzepatide-triple-vs-dual-agonist-research-comparison",
    "glp1-agonists-cardiovascular-research-select-leader-trials",
    "glp1-agonists-brain-central-mechanisms-beyond-weight-loss",
    "peptide-research-2026-glp1-revolution-semaglutide-tirzepatide-retatrutide",
    "adiponectin-leptin-metabolic-hormone-endpoints-peptide-research",
  ],
  "tirzepatide": [
    "tirzepatide-research-dosing-guide-glp1-gip-dual-agonism-protocols",
    "retatrutide-vs-tirzepatide-triple-vs-dual-agonist-research-comparison",
    "semaglutide-vs-tirzepatide-research-comparison",
    "glp1-receptor-agonists-complete-research-landscape",
    "glp1-agonists-cardiovascular-research-select-leader-trials",
    "peptide-research-2026-glp1-revolution-semaglutide-tirzepatide-retatrutide",
    "adiponectin-leptin-metabolic-hormone-endpoints-peptide-research",
  ],
  "retatrutide": [
    "retatrutide-triple-agonist-research-guide",
    "retatrutide-vs-tirzepatide-triple-vs-dual-agonist-research-comparison",
    "glp1-receptor-agonists-complete-research-landscape",
    "peptide-research-2026-glp1-revolution-semaglutide-tirzepatide-retatrutide",
  ],
  "ipamorelin": [
    "mk-677-vs-ipamorelin-vs-cjc-1295-which-gh-secretagogue-research",
    "ipamorelin-dosing-timing-protocol-design-researchers-reference",
    "cjc-1295-ipamorelin-gh-axis-stack-deep-dive",
    "ipamorelin-vs-ghrp2-vs-ghrp6-growth-hormone-secretagogue-comparison",
    "complete-blood-panel-guide-peptide-researchers",
    "igf-1-peptide-research-key-biomarker",
    "igf-1-vs-growth-hormone-downstream-mediator-explained",
    "peptide-half-life-optimization-strategies-extend-compound-activity",
  ],
  "cjc-1295-no-dac": [
    "cjc-1295-ipamorelin-gh-axis-stack-deep-dive",
    "cjc-1295-no-dac-vs-cjc-1295-dac-choosing-right-ghrh-analog",
    "mk-677-vs-ipamorelin-vs-cjc-1295-which-gh-secretagogue-research",
    "ipamorelin-dosing-timing-protocol-design-researchers-reference",
    "peptide-half-life-optimization-strategies-extend-compound-activity",
  ],
  "cjc-1295": [
    "cjc-1295-ipamorelin-gh-axis-stack-deep-dive",
    "cjc-1295-no-dac-vs-cjc-1295-dac-choosing-right-ghrh-analog",
    "ipamorelin-dosing-timing-protocol-design-researchers-reference",
    "peptide-half-life-optimization-strategies-extend-compound-activity",
  ],
  "cjc-1295-ipamorelin": [
    "cjc-1295-ipamorelin-gh-axis-stack-deep-dive",
    "mk-677-vs-ipamorelin-vs-cjc-1295-which-gh-secretagogue-research",
    "ipamorelin-dosing-timing-protocol-design-researchers-reference",
    "cjc-1295-no-dac-vs-cjc-1295-dac-choosing-right-ghrh-analog",
  ],
  "sermorelin": [
    "sermorelin-ghrh-analog-anti-aging-research",
    "cjc-1295-no-dac-vs-cjc-1295-dac-choosing-right-ghrh-analog",
    "ipamorelin-dosing-timing-protocol-design-researchers-reference",
    "igf-1-peptide-research-key-biomarker",
  ],
  "tesamorelin": [
    "tesamorelin-ghrh-analog-visceral-fat-research",
    "cjc-1295-no-dac-vs-cjc-1295-dac-choosing-right-ghrh-analog",
    "sermorelin-ghrh-analog-anti-aging-research",
  ],
  "mk-677": [
    "mk-677-vs-ipamorelin-vs-cjc-1295-which-gh-secretagogue-research",
    "mk-677-ibutamoren-oral-gh-secretagogue-guide",
    "igf-1-vs-growth-hormone-downstream-mediator-explained",
    "igf-1-peptide-research-key-biomarker",
    "peptide-half-life-optimization-strategies-extend-compound-activity",
  ],
  "hexarelin": [
    "hexarelin-forgotten-ghrp-cardiac-effects",
    "ipamorelin-vs-ghrp2-vs-ghrp6-growth-hormone-secretagogue-comparison",
    "mk-677-vs-ipamorelin-vs-cjc-1295-which-gh-secretagogue-research",
  ],
  "nad-plus": [
    "nad-plus-cellular-energy-sirtuins-longevity-research",
    "nad-plus-research-protocols-dosing-routes-study-design",
    "nad-precursors-nmn-nr-vs-direct-nad-injection-research",
    "peptide-stacking-longevity-nad-epitalon-ss31-ghk-cu",
    "glutathione-peptides-oxidative-stress-research-overview",
    "adamax-dsip-selank-nad-nootropic-stack-protocol-deep-dive",
    "mots-c-mitochondria-derived-peptide-metabolic-research",
    "peptide-storage-temperatures-cold-chain-reference",
  ],
  "epitalon": [
    "epithalon-telomere-peptide-research-guide",
    "epitalon-pineal-peptide-longevity-research-review",
    "peptide-stacking-longevity-nad-epitalon-ss31-ghk-cu",
    "glutathione-peptides-oxidative-stress-research-overview",
  ],
  "ss-31": [
    "ss-31-elamipretide-mitochondria-targeted-peptide-research",
    "peptide-stacking-longevity-nad-epitalon-ss31-ghk-cu",
    "glutathione-peptides-oxidative-stress-research-overview",
    "peptide-storage-temperatures-cold-chain-reference",
  ],
  "mots-c": [
    "mots-c-mitochondria-derived-peptide-metabolic-research",
    "nad-plus-cellular-energy-sirtuins-longevity-research",
    "peptide-stacking-longevity-nad-epitalon-ss31-ghk-cu",
  ],
  "selank": [
    "selank-semax-nootropic-peptide-research-overview",
    "adamax-dsip-selank-nad-nootropic-stack-protocol-deep-dive",
    "peptide-synergy-stacking-science-of-combining-research-compounds",
    "peptide-administration-routes-sc-ip-iv-intranasal-guide",
  ],
  "semax": [
    "selank-semax-nootropic-peptide-research-overview",
    "peptide-administration-routes-sc-ip-iv-intranasal-guide",
  ],
  "dsip": [
    "dsip-delta-sleep-inducing-peptide-sleep-research-review",
    "adamax-dsip-selank-nad-nootropic-stack-protocol-deep-dive",
  ],
  "thymosin-alpha-1": [
    "thymosin-alpha-1-immune-peptide-research-guide",
    "ll-37-human-host-defense-peptide-research-guide",
    "kpv-immunomodulatory-tripeptide-research-guide",
  ],
  "kpv": [
    "kpv-immunomodulatory-tripeptide-research-guide",
    "thymosin-alpha-1-immune-peptide-research-guide",
    "ll-37-human-host-defense-peptide-research-guide",
  ],
  "ll-37": [
    "ll-37-antimicrobial-wound-healing-protocols",
    "ll-37-human-host-defense-peptide-research-guide",
    "thymosin-alpha-1-immune-peptide-research-guide",
  ],
  "kisspeptin": [
    "kisspeptin-10-vs-kisspeptin-54-research-protocol-differences",
    "kisspeptin-lh-surge-reproductive-neuroendocrinology-research",
  ],
  "oxytocin": [
    "oxytocin-research-neuropeptide-guide",
    "oxytocin-research-protocols-intranasal-vs-ip-administration-deep-dive",
    "peptide-administration-routes-sc-ip-iv-intranasal-guide",
  ],
  "pt-141": [
    "pt-141-bremelanotide-melanocortin-research-review",
    "melanotan-ii-melanocortin-research-review",
  ],
  "melanotan-ii": [
    "melanotan-ii-melanocortin-research-review",
    "pt-141-bremelanotide-melanocortin-research-review",
  ],
  "aod-9604": [
    "aod-9604-lipolytic-fragment-research-guide",
    "hgh-fragment-176-191-vs-aod-9604-difference",
    "adipotide-ftpp-experimental-adipose-targeted-research-peptide",
  ],
  "snap-8": [
    "snap-8-anti-wrinkle-peptide-research-guide",
    "ghk-cu-copper-peptide-research-review",
  ],
  "follistatin-344": [
    "follistatin-344-igf-1-independent-muscle-research-guide",
    "follistatin-myostatin-inhibition-peptide-research-protocols",
    "tb-500-mechanism-deep-dive-g-actin-sequestration-thymosin-beta-4-biology",
  ],
  "wolverine-blend": [
    "wolverine-blend-bpc157-tb500-ghk-cu-triple-combination-guide",
    "bpc-157-tb-500-recovery-stack-deep-dive",
    "ghk-cu-copper-peptide-research-review",
    "bpc-157-mechanism-deep-dive-no-vegf-fak-signaling",
  ],
};

/**
 * Get all article slugs tagged with a given compound slug.
 * Falls back to PRODUCT_ARTICLES[slug] if no extended mapping exists.
 */
export function getArticlesByCompoundTag(compoundSlug: string): string[] {
  const extended = EXTENDED_COMPOUND_ARTICLES[compoundSlug];
  if (extended && extended.length > 0) return extended;
  const basic = PRODUCT_ARTICLES[compoundSlug];
  return basic ?? [];
}

/**
 * Returns all compound slugs that have at least 1 article.
 */
export function getAllCompoundTags(): string[] {
  return Object.keys(EXTENDED_COMPOUND_ARTICLES).filter(
    (slug) => (EXTENDED_COMPOUND_ARTICLES[slug]?.length ?? 0) > 0
  );
}

/**
 * Get the display name for a compound slug.
 */
export function getCompoundDisplayName(slug: string): string {
  return COMPOUND_DISPLAY_NAMES[slug] ?? slug;
}
