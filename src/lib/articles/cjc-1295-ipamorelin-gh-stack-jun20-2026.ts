import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "cjc-1295-ipamorelin-gh-stack-jun20-2026",
  title: "CJC-1295 + Ipamorelin Stack: GH Axis Research Guide",
  description:
    "A research-focused overview of the CJC-1295 and Ipamorelin combination stack. How GHRH analog + GHS dual-pathway stimulation works, what preclinical studies show, and protocol considerations for researchers.",
  category: "Growth Hormone Research",
  readMinutes: 10,
  publishedAt: "2026-06-20",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "The combination of CJC-1295 (a GHRH analog) and Ipamorelin (a growth hormone secretagogue) is one of the most studied pairings in the GH axis research literature. The rationale is mechanistic complementarity: the two peptides work through distinct receptor pathways to produce a synergistic pulse of growth hormone release that more closely mimics physiological pulsatility than either compound alone.",
    },
    {
      type: "heading",
      text: "The GH Axis: Relevant Biology",
    },
    {
      type: "paragraph",
      text: "Growth hormone (GH) secretion from the anterior pituitary is regulated by two primary hypothalamic signals operating in opposition and coordination.",
    },
    {
      type: "list",
      items: [
        "GHRH (Growth Hormone-Releasing Hormone): Stimulates GH synthesis and secretion via GHRH receptor (GHRHR)",
        "Somatostatin: Inhibits GH release; maintains the pulsatile pattern by suppressing between peaks",
        "Ghrelin/GHSs: A third pathway via GHS-R1a receptors that amplifies GH pulses independently of GHRH",
      ],
    },
    {
      type: "paragraph",
      text: "Physiological GH secretion is pulsatile — with major pulses occurring primarily during slow-wave sleep — rather than continuous. This pulsatility is important for downstream IGF-1 production, anabolic signaling, and avoiding receptor desensitization.",
    },
    {
      type: "heading",
      text: "CJC-1295: Mechanism and Profile",
    },
    {
      type: "paragraph",
      text: "CJC-1295 is a synthetic GHRH analog. The 'No-DAC' formulation (also called Mod GRF 1-29) is a modified 29-amino acid fragment of GHRH with substitutions at positions 2, 8, 15, and 27 that improve metabolic stability without the long-acting albumin binding of the DAC version.",
    },
    {
      type: "subheading",
      text: "Key pharmacological properties of CJC-1295 (No-DAC):",
    },
    {
      type: "list",
      items: [
        "Half-life approximately 30 minutes — produces a defined, contained GH pulse",
        "Acts at GHRHR on somatotrophs to stimulate GH release",
        "Does not directly suppress somatostatin — preserves the inhibitory counterregulation",
        "Requires co-administration with a GHS for maximal pulse amplitude in most research protocols",
        "Well-characterized in rodent and primate studies; human GH secretagogue trial data available",
      ],
    },
    {
      type: "heading",
      text: "Ipamorelin: Mechanism and Profile",
    },
    {
      type: "paragraph",
      text: "Ipamorelin is a pentapeptide GH secretagogue (GHS) acting at the GHS-R1a (ghrelin receptor). It was developed as a selective GHS with a particularly clean receptor profile — minimal effect on cortisol, prolactin, or ACTH at GH-stimulating doses.",
    },
    {
      type: "subheading",
      text: "Key properties of Ipamorelin:",
    },
    {
      type: "list",
      items: [
        "Half-life approximately 2 hours — slightly longer than CJC-1295 No-DAC",
        "Acts at GHS-R1a on somatotrophs independently of the GHRHR pathway",
        "Also suppresses somatostatin release from the hypothalamus, amplifying net GH pulse",
        "High selectivity for GH release vs. other pituitary hormones — favorable for research protocol design",
        "Well-documented in preclinical rodent models; human studies available from the growth hormone deficiency literature",
      ],
    },
    {
      type: "heading",
      text: "Why the Combination? Dual-Pathway Synergy",
    },
    {
      type: "paragraph",
      text: "When CJC-1295 and Ipamorelin are co-administered, they activate two distinct intracellular signaling cascades in somatotrophs simultaneously.",
    },
    {
      type: "list",
      items: [
        "CJC-1295 activates the cAMP/PKA pathway via GHRHR → increases GH synthesis and release",
        "Ipamorelin activates PLC/PKC and IP3/DAG pathways via GHS-R1a → amplifies calcium-dependent GH exocytosis",
        "Ipamorelin additionally suppresses hypothalamic somatostatin → removes inhibitory brake",
        "Combined: significantly larger GH pulse amplitude than either compound alone in rodent models",
      ],
    },
    {
      type: "callout",
      text: "Research note: The synergy of GHRH + GHS combinations was first systematically characterized by Bowers et al. and Pandya et al. in the 1990s–2000s. CJC-1295 + Ipamorelin replicates this dual-pathway approach with improved metabolic stability over native GHRH.",
    },
    {
      type: "heading",
      text: "Research Evidence",
    },
    {
      type: "subheading",
      text: "GH Pulse Amplitude",
    },
    {
      type: "paragraph",
      text: "Preclinical studies consistently show that GHRH + GHS combinations produce GH pulses 2–5 times the amplitude of either peptide alone. The timing of co-administration matters: simultaneous injection produces the largest pulse, while staggered administration (GHS first, then GHRH 15–30 minutes later) produces a more sustained but smaller response.",
    },
    {
      type: "subheading",
      text: "IGF-1 Downstream Effects",
    },
    {
      type: "paragraph",
      text: "Sustained GH pulse elevation (through repeated daily or twice-daily administration in animal models) produces measurable increases in circulating IGF-1. IGF-1 elevation is the primary downstream mediator of many growth, repair, and metabolic effects attributed to GH secretagogue protocols.",
    },
    {
      type: "subheading",
      text: "Sleep Architecture",
    },
    {
      type: "paragraph",
      text: "In human GHD (growth hormone deficiency) research, GHS administration at bedtime has been shown to amplify the physiological GH pulse associated with slow-wave sleep onset. Ipamorelin's timing-sensitivity to endogenous somatostatin troughs makes evening administration a commonly studied protocol design choice.",
    },
    {
      type: "heading",
      text: "Protocol Considerations for Researchers",
    },
    {
      type: "table",
      headers: ["Parameter", "CJC-1295 (No-DAC)", "Ipamorelin"],
      rows: [
        ["Receptor target", "GHRHR", "GHS-R1a"],
        ["Half-life", "~30 minutes", "~2 hours"],
        ["GH pulse timing", "Acute, defined pulse", "Amplifies/extends pulse"],
        ["Selectivity", "GH-specific", "High GH selectivity, minimal cortisol/prolactin"],
        ["Reconstitution", "Bacteriostatic water", "Bacteriostatic water"],
        ["Storage (reconstituted)", "2–8°C, 4–6 weeks", "2–8°C, 3–4 weeks"],
      ],
    },
    {
      type: "paragraph",
      text: "In most published combined-protocol research, the two compounds are co-administered subcutaneously at the same time point. Pre-meal or pre-sleep timing is most commonly studied, reflecting the natural pulsatility of endogenous GH secretion and the fasted-state amplification of GHS response.",
    },
    {
      type: "heading",
      text: "Somatostatin Considerations",
    },
    {
      type: "paragraph",
      text: "A key practical consideration in GH secretagogue research is somatostatin tone. Immediately postprandial, somatostatin levels are elevated, which blunts GH pulse response to any secretagogue. Most research protocols therefore specify fasted administration (overnight fast, or at least 1–2 hours post-meal) to maximize GH pulse amplitude.",
    },
    {
      type: "heading",
      text: "Summary",
    },
    {
      type: "paragraph",
      text: "The CJC-1295 + Ipamorelin combination represents a well-characterized dual-pathway approach to GH axis modulation in preclinical research. The mechanistic rationale — simultaneous GHRHR and GHS-R1a activation with somatostatin suppression — produces consistently larger GH pulses than either compound alone. Protocol design decisions around timing, administration route, and fasting state significantly influence response characteristics and should be considered carefully in study design.",
    },
    {
      type: "disclaimer",
      text: "For research purposes only. Not intended for human use.",
    },
  ],
};
