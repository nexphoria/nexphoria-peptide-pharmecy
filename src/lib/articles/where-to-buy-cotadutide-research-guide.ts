import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "where-to-buy-cotadutide-research-guide",
  title: "Where to Buy Cotadutide for Research: A Sourcing Guide",
  description:
    "Cotadutide is a GLP-1/glucagon dual receptor agonist developed by AstraZeneca for MASH/NASH and metabolic disease research. This guide covers cotadutide's research applications, quality standards for sourcing, mass spec verification requirements, and what to look for in a COA.",
  category: "Sourcing Guides",
  readMinutes: 6,
  publishedAt: "2026-06-14",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Cotadutide (MEDI0382) is a once-daily injectable peptide dual agonist that activates both the GLP-1 receptor (GLP-1R) and the glucagon receptor (GCGR). Originally developed by AstraZeneca and MedImmune, cotadutide generated substantial research interest for its hepatic effects — the glucagon receptor component provides hepatic-specific metabolic activity (glycogenolysis, fatty acid oxidation, thermogenesis) complementary to GLP-1's peripheral insulin-sensitizing and satiety effects. This dual mechanism makes it particularly relevant for NASH/MASLD research models.",
    },
    {
      type: "heading",
      text: "Why Researchers Source Cotadutide",
    },
    {
      type: "paragraph",
      text: "Cotadutide occupies a distinct research niche among GLP-1/glucagon dual agonists. While survodutide (BI 456906) and retatrutide (LY3437943, a triple agonist) have emerged as more advanced clinical candidates, cotadutide's Phase 2 dataset — including liver histology endpoints from the NASH trial program — provides a well-characterized research reference point for investigators studying:",
    },
    {
      type: "list",
      items: [
        "Hepatic steatosis and NASH/MASLD preclinical models — cotadutide's GCGR-driven hepatic fatty acid oxidation provides a mechanistically distinct liver effect vs. pure GLP-1R agonism",
        "Comparative pharmacology of GLP-1/GCG dual agonism vs. GLP-1 monotherapy",
        "Body composition research — dual agonism produces more robust lean mass preservation signals in some models compared to GLP-1R agonism alone",
        "Energy expenditure endpoints — GCGR activation drives thermogenic brown adipose tissue activity",
        "Hepatic glycogenolysis and its interaction with fasting glucose endpoints in metabolic syndrome models",
      ],
    },
    {
      type: "heading",
      text: "Cotadutide: Structural and Pharmacological Reference",
    },
    {
      type: "paragraph",
      text: "Cotadutide is a 30-amino acid peptide based on the oxyntomodulin backbone with modifications for receptor binding selectivity and extended half-life. Key properties relevant to research and quality verification:",
    },
    {
      type: "list",
      items: [
        "Molecular formula: Verified by high-resolution LC-MS/MS",
        "Approximate molecular weight: ~3,500 Da",
        "Half-life: ~12–16 hours with subcutaneous administration (suitable for once-daily dosing in research protocols)",
        "GLP-1R:GCGR activity ratio: Approximately equal potency at both receptors (balanced dual agonist)",
        "Sequence modifications: C-terminal amidation and specific amino acid substitutions for DPP-4 resistance",
      ],
    },
    {
      type: "heading",
      text: "Quality Standards for Research-Grade Cotadutide",
    },
    {
      type: "paragraph",
      text: "Cotadutide is a modified peptide with sequence-specific modifications that are critical to its receptor binding properties. Sourcing for research requires verification beyond simple HPLC purity. Key quality parameters:",
    },
    {
      type: "subheading",
      text: "Mass Spectrometry (LC-MS) — Required",
    },
    {
      type: "paragraph",
      text: "Given cotadutide's 30-residue sequence with specific modifications, mass spectrometric confirmation of molecular weight is essential. A complete COA should include high-resolution mass spec data showing the correct [M+nH]n+ charge state envelope. Absence of LC-MS data in a vendor's COA is a significant red flag for any modified research peptide of this complexity.",
    },
    {
      type: "subheading",
      text: "HPLC Purity — Minimum Standard",
    },
    {
      type: "paragraph",
      text: "HPLC purity ≥98% by reversed-phase HPLC is the baseline standard for research-grade cotadutide. Given the complexity of the sequence and modification chemistry, a purity chromatogram showing a single major peak without substantial late-eluting impurities (which can indicate incomplete deprotection byproducts) is important.",
    },
    {
      type: "subheading",
      text: "Endotoxin (LAL) Testing",
    },
    {
      type: "paragraph",
      text: "For in vivo administration in animal research models, LAL endotoxin testing is essential. Acceptable limit: ≤1 EU/mg for subcutaneous/intraperitoneal administration. Vendors who do not provide batch-specific LAL results are not appropriate sources for in vivo research.",
    },
    {
      type: "subheading",
      text: "Lyophilization and Storage State",
    },
    {
      type: "paragraph",
      text: "Research-grade cotadutide should be provided as a lyophilized (freeze-dried) powder, not in solution. Liquid peptide formulations with prolonged shelf exposure are significantly more prone to degradation, aggregation, and loss of biological activity — particularly for longer-sequence modified peptides.",
    },
    {
      type: "heading",
      text: "What to Avoid When Sourcing Cotadutide",
    },
    {
      type: "list",
      items: [
        "Vendors who provide HPLC-only COAs without mass spec data for a 30-residue modified peptide",
        "Liquid formulations without documented cold-chain shipping and storage temperature logs",
        "Sources that cannot provide batch-specific (lot-specific) COAs on request",
        "Suppliers without documented endotoxin testing for in vivo research applications",
        "Vendors who use generic sequence data rather than synthesized cotadutide with verified modifications",
      ],
    },
    {
      type: "heading",
      text: "Cotadutide Research Protocol Considerations",
    },
    {
      type: "paragraph",
      text: "Researchers designing cotadutide studies should account for its dual receptor pharmacology in endpoint selection. Key considerations:",
    },
    {
      type: "list",
      items: [
        "Liver-specific endpoints (ALT, AST, hepatic triglycerides, liver histology) are particularly relevant given the GCGR-driven hepatic mechanism",
        "Energy expenditure measurements (indirect calorimetry, Vo2/VCO2 RER) can differentiate GCG-mediated thermogenic effects",
        "Glucagon receptor activity can transiently elevate fasting glucose before the GLP-1-mediated insulin sensitization produces net glucose lowering — design glucose assay schedules accordingly",
        "Lean mass preservation endpoints (DEXA, MRI body composition) differentiate dual agonism from pure GLP-1 monotherapy",
      ],
    },
    {
      type: "heading",
      text: "Comparison: Cotadutide vs. Other GLP-1/GCG Dual Agonists",
    },
    {
      type: "table",
      headers: ["Compound", "GLP-1R:GCGR Ratio", "Clinical Stage", "Primary Indication"],
      rows: [
        ["Cotadutide", "~1:1 (balanced)", "Phase 2 (discontinued)", "NASH / T2D"],
        ["Survodutide (BI 456906)", "GLP-1 biased, GCGR activity", "Phase 3", "Obesity / MASH"],
        ["Retatrutide (LY3437943)", "Triple (GLP-1/GIP/GCG)", "Phase 3", "Obesity / MASH"],
        ["NN9277", "GLP-1/GCG balanced", "Phase 1/2", "Obesity / MASH"],
      ],
    },
    {
      type: "heading",
      text: "Finding Research-Grade Cotadutide",
    },
    {
      type: "paragraph",
      text: "Cotadutide is a specialized research compound. As it is not available through pharmaceutical channels for research purposes, investigators must source through research peptide suppliers with demonstrated capacity for complex modified peptide synthesis. The key differentiator in supplier evaluation is the quality of analytical documentation — specifically the combination of high-resolution LC-MS identity confirmation, HPLC purity by UV-area normalization, and LAL endotoxin data on a per-batch basis.",
    },
    {
      type: "paragraph",
      text: "Nexphoria specializes in HPLC and LC-MS verified research peptides, with publicly posted COA documentation for every batch. For GLP-1/glucagon dual agonist research, we also stock survodutide and related compounds. Contact us for current catalog availability on specialized research peptides.",
    },
    {
      type: "callout",
      text: "Sourcing checklist for cotadutide: (1) LC-MS confirmation of molecular weight ✓ (2) HPLC purity ≥98% with chromatogram ✓ (3) LAL endotoxin test result ✓ (4) Lyophilized format ✓ (5) Cold-chain shipping ✓ (6) Batch-specific COA ✓",
    },
    {
      type: "disclaimer",
      text: "This article is for educational and research purposes only. Cotadutide is an investigational compound. All content is based on published clinical and preclinical research data. Not for human use.",
    },
  ],
};
