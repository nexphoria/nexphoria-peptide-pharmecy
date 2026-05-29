/**
 * Protocol Pairings
 * Maps a product slug to a recommended companion compound.
 * Used in the "Complete Your Protocol" section on product detail pages.
 */

export type ProtocolPairing = {
  slug: string;          // companion product slug
  rationale: string;     // 1-sentence research rationale shown to user
  label: string;         // short label like "Synergistic Stack" or "Recovery Pair"
};

export const PROTOCOL_PAIRINGS: Record<string, ProtocolPairing> = {
  // Recovery & Healing stack
  "bpc-157": {
    slug: "tb-500",
    rationale: "BPC-157 and TB-500 target complementary repair pathways — combining both covers angiogenesis, actin dynamics, and connective tissue regeneration in the same cycle.",
    label: "Classic Recovery Stack",
  },
  "tb-500": {
    slug: "bpc-157",
    rationale: "TB-500's actin-binding activity pairs with BPC-157's VEGF upregulation to create a comprehensive tissue repair protocol studied extensively in preclinical models.",
    label: "Classic Recovery Stack",
  },

  // GH axis stacks
  "cjc-1295-ipamorelin": {
    slug: "ipamorelin",
    rationale: "CJC-1295 (DAC) provides a sustained GHRH signal; adding Ipamorelin triggers clean, selective GH pulses through a separate receptor pathway for amplified somatotropic response.",
    label: "Full GH Axis Protocol",
  },
  "ipamorelin": {
    slug: "cjc-1295",
    rationale: "Ipamorelin's GHS-R1a pulse pairs cleanly with CJC-1295's GHRH receptor activation — dual-pathway stimulation without cortisol or prolactin co-secretion.",
    label: "Full GH Axis Protocol",
  },
  "cjc-1295": {
    slug: "ipamorelin",
    rationale: "CJC-1295 without DAC has a shorter half-life ideal for pulsatile dosing alongside Ipamorelin for a physiological GH secretion pattern.",
    label: "Pulsatile GH Stack",
  },
  "sermorelin": {
    slug: "ipamorelin",
    rationale: "Sermorelin's GHRH analog activity combines with Ipamorelin's ghrelin-mimetic action to stimulate GH secretion through independent, complementary receptor pathways.",
    label: "Dual GH Stimulation",
  },
  "tesamorelin": {
    slug: "ipamorelin",
    rationale: "Tesamorelin provides potent GHRH receptor activation; Ipamorelin adds a synergistic GHS-R1a pulse without the prolactin side effects of older secretagogues.",
    label: "GH Amplification Stack",
  },
  "cjc-1295-no-dac": {
    slug: "ipamorelin",
    rationale: "CJC-1295 No DAC's short half-life is designed for precise pulsatile pairing with Ipamorelin to mimic the natural GHRH/ghrelin co-secretion cycle.",
    label: "Pulsatile GH Protocol",
  },

  // Metabolic stacks
  "semaglutide": {
    slug: "aod-9604",
    rationale: "Semaglutide's GLP-1 receptor activation combines with AOD-9604's lipolytic signaling for a dual-mechanism metabolic research protocol.",
    label: "Metabolic Research Stack",
  },
  "tirzepatide": {
    slug: "aod-9604",
    rationale: "Tirzepatide's dual GLP-1/GIP agonism pairs with AOD-9604's fat metabolism pathway for comprehensive metabolic research.",
    label: "Advanced Metabolic Stack",
  },
  "retatrutide": {
    slug: "aod-9604",
    rationale: "Retatrutide's triple receptor activity and AOD-9604's lipolytic mechanism cover distinct and complementary aspects of adipose tissue research.",
    label: "Metabolic Research Stack",
  },
  "aod-9604": {
    slug: "semaglutide",
    rationale: "AOD-9604's lipolytic fragment pairs with Semaglutide's GLP-1 signaling for a multi-pathway metabolic and satiety research design.",
    label: "Metabolic Research Stack",
  },

  // Longevity/anti-aging stacks
  "epitalon": {
    slug: "nad-plus",
    rationale: "Epitalon's telomerase activation and NAD+ precursor supplementation target parallel longevity pathways — one epigenetic, one metabolic.",
    label: "Longevity Protocol",
  },
  "nad-plus": {
    slug: "epitalon",
    rationale: "NAD+ restoration supports mitochondrial efficiency while Epitalon's telomere-preserving activity addresses epigenetic aging markers in research models.",
    label: "Longevity Protocol",
  },
  "ghk-cu": {
    slug: "epitalon",
    rationale: "GHK-Cu's collagen-stimulating and wound-healing properties complement Epitalon's anti-aging epigenetic effects in longevity research protocols.",
    label: "Anti-Aging Stack",
  },
  "mots-c": {
    slug: "nad-plus",
    rationale: "MOTS-c activates AMPK and mimics exercise-signaling; paired with NAD+ to support mitochondrial biogenesis across complementary pathways.",
    label: "Mitochondrial Protocol",
  },

  // Cognitive/nootropic stacks
  "selank": {
    slug: "semax",
    rationale: "Selank's anxiolytic profile combined with Semax's BDNF-upregulating nootropic activity creates a cognitive-enhancement and stress-adaptation research stack.",
    label: "Cognitive Performance Stack",
  },
  "semax": {
    slug: "selank",
    rationale: "Semax's BDNF elevation and ACTH-analog effects pair with Selank's enkephalin-stabilizing activity for dual cognitive and mood-regulation research.",
    label: "Cognitive Performance Stack",
  },
  "dsip": {
    slug: "selank",
    rationale: "DSIP's sleep-induction and stress-modulation properties complement Selank's anxiolytic effects for comprehensive neuromodulatory research.",
    label: "Neuromodulation Stack",
  },
  "snap-8": {
    slug: "ghk-cu",
    rationale: "Snap-8's SNAP-25 inhibition targets expression lines while GHK-Cu stimulates collagen and tissue repair — a comprehensive skincare research combination.",
    label: "Skin Research Protocol",
  },

  // Immune stacks
  "thymosin-alpha-1": {
    slug: "ll-37",
    rationale: "Thymosin Alpha-1's T-cell modulation pairs with LL-37's innate immune activation for a multi-arm immunomodulatory research protocol.",
    label: "Immune Research Stack",
  },
  "ll-37": {
    slug: "thymosin-alpha-1",
    rationale: "LL-37's antimicrobial and innate immune signaling complements Thymosin Alpha-1's adaptive immune modulation in comprehensive immune research.",
    label: "Immune Research Stack",
  },
  "kpv": {
    slug: "bpc-157",
    rationale: "KPV's anti-inflammatory and gut-barrier properties synergize with BPC-157's cytoprotective effects for gastrointestinal research protocols.",
    label: "Gut Health Protocol",
  },

  // Sexual health
  "pt-141": {
    slug: "kisspeptin",
    rationale: "PT-141's melanocortin receptor activation and Kisspeptin's GnRH-stimulating activity represent complementary pathways in sexual function and hormone axis research.",
    label: "Hormonal Research Stack",
  },
  "kisspeptin": {
    slug: "pt-141",
    rationale: "Kisspeptin's pulsatile GnRH signaling pairs with PT-141's central melanocortin pathway for a dual-mechanism hormonal and libido research protocol.",
    label: "Hormonal Research Stack",
  },
  "oxytocin": {
    slug: "pt-141",
    rationale: "Oxytocin's prosocial and bonding receptor activity complements PT-141's melanocortin pathway in research on social behavior and sexual function.",
    label: "Neuropeptide Research Stack",
  },

  // Blends
  "wolverine-blend": {
    slug: "tb-500",
    rationale: "Wolverine Blend's multi-compound healing formula is often studied alongside standalone TB-500 to compare single-compound vs. blended recovery responses.",
    label: "Recovery Research Stack",
  },
  "glow-blend": {
    slug: "ghk-cu",
    rationale: "GLOW Blend's skin-focused peptide formula pairs with GHK-Cu's copper-peptide collagen stimulation for comprehensive skin biology research.",
    label: "Skin Research Protocol",
  },
  "klw-blend": {
    slug: "nad-plus",
    rationale: "KLW Blend's longevity peptide combination is complemented by NAD+ to address mitochondrial energy metabolism alongside epigenetic aging markers.",
    label: "Longevity Stack",
  },

  // Reconstitution supplies
  "sterile-water-3ml": {
    slug: "bpc-157",
    rationale: "Sterile water is required to reconstitute lyophilized peptides. BPC-157 is one of the most commonly ordered research compounds to reconstitute.",
    label: "Research Essentials",
  },
  "sterile-water-10ml": {
    slug: "tb-500",
    rationale: "The 10mL sterile water vial is ideal for reconstituting larger peptide vials like TB-500 for extended research cycles.",
    label: "Research Essentials",
  },
};
