import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "cjc-1295-ipamorelin-growth-hormone-research-stack",
  title: "CJC-1295 + Ipamorelin: Growth Hormone Research Stack",
  description:
    "A research-focused overview of the CJC-1295 and Ipamorelin combination — mechanisms, published data, and what the science says about this growth hormone secretagogue stack.",
  category: "Compound Profiles",
  readMinutes: 9,
  publishedAt: "2026-06-02",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Among the most studied peptide combinations in growth hormone research, the CJC-1295 and Ipamorelin stack occupies a unique position. These two compounds act on separate but complementary pathways within the somatotropic axis, and their co-administration has been a recurring subject in pre-clinical and clinical investigation.",
    },
    {
      type: "heading",
      text: "Understanding the Somatotropic Axis",
    },
    {
      type: "paragraph",
      text: "Before examining either compound, it helps to understand the system they act on. Growth hormone (GH) secretion is regulated by two primary hypothalamic signals: Growth Hormone-Releasing Hormone (GHRH), which stimulates GH release, and somatostatin, which inhibits GH release. A third pathway — the ghrelin receptor (GHS-R1a) — provides an independent stimulatory signal. Compounds targeting different nodes in this system can produce synergistic rather than merely additive effects.",
    },
    {
      type: "heading",
      text: "CJC-1295: A GHRH Analog",
    },
    {
      type: "paragraph",
      text: "CJC-1295 is a synthetic analog of GHRH. Its distinguishing feature is a Drug Affinity Complex (DAC) modification in its most studied form, which covalently binds to circulating albumin. This extends its half-life from minutes to approximately 6–8 days, enabling sustained elevation of GH secretion patterns.",
    },
    {
      type: "subheading",
      text: "Key Research Findings",
    },
    {
      type: "paragraph",
      text: "A 2006 study published in the Journal of Clinical Endocrinology & Metabolism (Teichman et al.) administered CJC-1295 to healthy adult subjects. Key observations included dose-dependent increases in plasma GH up to 10-fold above baseline in some subjects, sustained IGF-1 elevation lasting 9–11 days after a single dose, and preservation of pulsatile GH release. CJC-1295 appeared to amplify rather than replace endogenous GH secretion rhythms — a notable distinction from exogenous GH administration, which typically suppresses endogenous production.",
    },
    {
      type: "table",
      headers: ["Parameter", "CJC-1295 (DAC)"],
      rows: [
        ["Target", "GHRH receptor (GHRHR) on somatotroph cells"],
        ["Effect", "Stimulates GH synthesis and release"],
        ["Half-life (DAC form)", "~6–8 days"],
        ["Half-life (without DAC)", "~30 minutes"],
      ],
    },
    {
      type: "heading",
      text: "Ipamorelin: A Selective GHS",
    },
    {
      type: "paragraph",
      text: "Ipamorelin is a pentapeptide growth hormone secretagogue (GHS) and selective agonist of the ghrelin receptor (GHS-R1a). It was developed as a research compound due to its high selectivity — unlike earlier GHS compounds, Ipamorelin shows minimal effect on cortisol, prolactin, or ACTH at studied doses.",
    },
    {
      type: "subheading",
      text: "Key Research Findings",
    },
    {
      type: "paragraph",
      text: "Research on Ipamorelin, primarily in animal models, has documented robust GH pulse stimulation comparable to GHRP-6 at equivalent molar doses, reduced off-target hormone release, and potential effects on gastric motility. A study by Elbrønd et al. (1999) in swine demonstrated significant, dose-dependent GH release with a favorable selectivity profile compared to GHRP-2.",
    },
    {
      type: "table",
      headers: ["Parameter", "Ipamorelin"],
      rows: [
        ["Target", "GHS-R1a (ghrelin receptor)"],
        ["Effect", "Stimulates GH release via pathway independent of GHRH receptor"],
        ["Half-life", "~2 hours"],
        ["Selectivity", "High for GH; minimal cortisol/prolactin effect at research doses"],
      ],
    },
    {
      type: "heading",
      text: "The Rationale for Stacking CJC-1295 and Ipamorelin",
    },
    {
      type: "paragraph",
      text: "The combination of a GHRH analog with a GHS targets two independent but synergistic pathways. CJC-1295 activates the GHRH receptor, promoting GH synthesis, while Ipamorelin activates GHS-R1a, triggering GH release. Together, they create a double signal — one that increases available GH and one that triggers its secretion.",
    },
    {
      type: "paragraph",
      text: "Studies examining co-administration of GHRH analogs with GHS compounds have consistently shown greater GH output than either compound alone — a pattern consistent with synergistic rather than simply additive interaction. Additionally, GHS-R1a agonism has been shown to suppress somatostatin tone, reducing the inhibitory brake on GH release and further augmenting the response to concurrent GHRH stimulation.",
    },
    {
      type: "heading",
      text: "Research Dosing Protocols (Pre-Clinical Context)",
    },
    {
      type: "paragraph",
      text: "The following reflects protocols described in research literature — not clinical recommendations.",
    },
    {
      type: "table",
      headers: ["Parameter", "CJC-1295 (DAC)", "Ipamorelin"],
      rows: [
        ["Typical research dose", "1–2 mg/week", "200–300 mcg per injection"],
        ["Administration", "Subcutaneous", "Subcutaneous"],
        ["Frequency", "1–2x weekly", "2–3x daily"],
        ["Research context", "Human clinical trials", "Animal and pre-clinical models"],
      ],
    },
    {
      type: "heading",
      text: "Limitations and Research Gaps",
    },
    {
      type: "list",
      items: [
        "Most Ipamorelin data is from animal models — robust human trials remain limited",
        "Long-term effects of sustained GH elevation are not well characterized at research doses",
        "IGF-1 as a surrogate marker for GH axis activity does not fully capture downstream effects",
      ],
    },
    {
      type: "heading",
      text: "Summary",
    },
    {
      type: "paragraph",
      text: "The CJC-1295 + Ipamorelin combination represents one of the better-characterized dual-pathway approaches to GH axis modulation in the research literature. The mechanistic rationale is sound: targeting independent nodes in the somatotropic axis produces greater signal amplification than either compound alone. Ongoing research continues to characterize the safety profile and potential applications of this stack in pre-clinical settings.",
    },
    {
      type: "disclaimer",
      text: "For research purposes only. Not intended for human use.",
    },
  ],
};
