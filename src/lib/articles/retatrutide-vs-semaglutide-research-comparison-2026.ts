import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "retatrutide-vs-semaglutide-research-comparison-2026",
  title: "Retatrutide vs. Semaglutide: Triple vs. Dual Agonist Research Comparison 2026",
  description:
    "A 2026 research comparison of retatrutide (GLP-1/GIP/glucagon triple agonist) and semaglutide (GLP-1 mono-agonist) — covering mechanisms, published clinical and preclinical data, and protocol design differences.",
  category: "Compound Profiles",
  readMinutes: 12,
  publishedAt: "2026-06-09",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "disclaimer",
      text: "All compounds discussed are research chemicals for use by licensed researchers and scientific educators only. Not for medical use.",
    },
    {
      type: "paragraph",
      text: "The GLP-1 research space has evolved rapidly. Semaglutide — a GLP-1 receptor mono-agonist — established the clinical and mechanistic benchmark. Retatrutide represents the next generation: a triple agonist targeting GLP-1R, GIP receptor (GIPR), and glucagon receptor (GCGR) simultaneously. Understanding the mechanistic differences is essential for designing meaningful comparative research.",
    },
    {
      type: "heading",
      text: "Mechanism of Action: The Core Difference",
    },
    {
      type: "paragraph",
      text: "Semaglutide acts exclusively at GLP-1R, driving its effects through a single receptor pathway: GLP-1R stimulation reduces gastric emptying, increases insulin secretion in a glucose-dependent manner, suppresses glucagon, and acts centrally to reduce appetite via hypothalamic circuits.",
    },
    {
      type: "paragraph",
      text: "Retatrutide adds two additional axes. GIPR co-agonism has been debated — early research suggested GIPR agonism might blunt weight loss, but evidence from tirzepatide and retatrutide research has clarified that GIPR agonism in the context of GLP-1R co-agonism appears additive for weight reduction. GCGR agonism adds hepatic gluconeogenesis suppression and thermogenesis stimulation, which may drive retatrutide's more pronounced metabolic effects.",
    },
    {
      type: "heading",
      text: "Published Clinical Data Comparison",
    },
    {
      type: "subheading",
      text: "Semaglutide",
    },
    {
      type: "paragraph",
      text: "Semaglutide 2.4 mg weekly (STEP trials) produced ~15% mean weight loss over 68 weeks in subjects with obesity. The SELECT cardiovascular outcomes trial demonstrated 20% reduction in major adverse cardiovascular events, establishing GLP-1R agonism as cardioprotective beyond weight loss. It also has advanced Phase 3 data in NASH and emerging evidence for neurodegeneration (FLOW trial in CKD, EVOKE trial in Alzheimer's).",
    },
    {
      type: "subheading",
      text: "Retatrutide",
    },
    {
      type: "paragraph",
      text: "Phase 2 data (Jastreboff et al., NEJM 2023) showed retatrutide 12 mg weekly producing ~24.2% mean weight loss at 48 weeks — the highest weight loss ever documented in a pharmacological agent in a Phase 2 trial at that time. Phase 3 trials (TRIUMPH program) are ongoing. Retatrutide also showed significant reductions in liver fat by MRI-PDFF in subjects with MASLD.",
    },
    {
      type: "heading",
      text: "Receptor Profile Implications for Research",
    },
    {
      type: "table",
      headers: ["Parameter", "Semaglutide", "Retatrutide"],
      rows: [
        ["Primary receptor(s)", "GLP-1R only", "GLP-1R + GIPR + GCGR"],
        ["GI side effect profile", "Moderate", "Comparable or slightly higher"],
        ["Thermogenic component", "Minimal", "Significant (GCGR)"],
        ["Hepatic effect", "Moderate", "Strong (GCGR-driven)"],
        ["Study design complexity", "Simpler (single target)", "More complex (triple pathway)"],
      ],
    },
    {
      type: "heading",
      text: "Protocol Design Considerations",
    },
    {
      type: "paragraph",
      text: "When designing comparative studies, researchers must account for dose equivalence challenges — retatrutide's EC50 at each receptor differs from semaglutide's at GLP-1R, making direct dose matching problematic. Studies should use pharmacodynamically matched doses (similar GLP-1R activation levels) to isolate the contribution of GIPR and GCGR agonism to observed differences.",
    },
    {
      type: "callout",
      text: "Nexphoria provides research-grade retatrutide and semaglutide with HPLC ≥99% purity, MS confirmation, and cold-chain shipping.",
    },
  ],
};
