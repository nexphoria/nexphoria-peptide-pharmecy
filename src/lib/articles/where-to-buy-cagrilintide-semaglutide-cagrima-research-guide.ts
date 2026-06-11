import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "where-to-buy-cagrilintide-semaglutide-cagrima-research-guide",
  title: "Where to Buy Cagrilintide + Semaglutide (CagriSema): A Researcher's Sourcing Guide",
  description:
    "CagriSema — the combination of cagrilintide (amylin analog) and semaglutide — is one of the most compelling obesity research combinations in 2026. This guide covers what researchers need to know about sourcing, purity standards, and study design.",
  category: "Compound Profiles",
  readMinutes: 10,
  publishedAt: "2026-06-11",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "CagriSema is the research designation for the combination of cagrilintide (a long-acting amylin receptor agonist) and semaglutide (a GLP-1 receptor agonist). The combination emerged from clinical development at Novo Nordisk and has shown exceptional weight reduction results — with some trials reporting up to 22–25% body weight loss in participants with obesity. For researchers studying the dual amylin/GLP-1 axis in metabolic disease models, this combination represents a high-priority investigation target in 2026.",
    },
    {
      type: "heading",
      text: "What Is Cagrilintide?",
    },
    {
      type: "paragraph",
      text: "Cagrilintide is a long-acting amylin analog designed for once-weekly subcutaneous dosing. Amylin (islet amyloid polypeptide, IAPP) is co-secreted with insulin from pancreatic beta cells and acts centrally to reduce food intake, slow gastric emptying, and suppress glucagon. Native amylin has a very short half-life and aggregation tendencies; cagrilintide addresses these limitations through structural modifications that confer a 7–10 day half-life.",
    },
    {
      type: "heading",
      text: "Mechanism: Why Combine Amylin + GLP-1?",
    },
    {
      type: "paragraph",
      text: "GLP-1 receptor agonists (like semaglutide) primarily act in the hypothalamus and brainstem to reduce appetite and in the pancreas to enhance insulin secretion. Amylin receptors (calcitonin receptor + RAMP2/3 complexes) are distributed in complementary brain regions — the area postrema and nucleus accumbens — and reduce appetite through partially non-overlapping circuitry. Dual engagement of these pathways produces greater satiety signaling than either alone, without simply doubling the GLP-1 dose (which would increase GI side effects).",
    },
    {
      type: "subheading",
      text: "Key Receptor Biology",
    },
    {
      type: "list",
      items: [
        "GLP-1R: Expressed in hypothalamus (ARC, PVN), brainstem (NTS), vagal afferents, pancreatic beta cells",
        "Amylin/CGRP receptor complex: Area postrema, nucleus accumbens, lateral hypothalamus",
        "Complementary circuits: Additive satiety without proportionally additive nausea",
        "Glucagon suppression: Both GLP-1 and amylin independently suppress glucagon; combination amplifies this",
      ],
    },
    {
      type: "heading",
      text: "CagriSema Research Data Overview",
    },
    {
      type: "paragraph",
      text: "Phase 2 clinical data published in 2023 showed ~15% weight loss at 32 weeks vs. ~10% for semaglutide alone and ~9% for cagrilintide alone at matched doses. Phase 3 REDEFINE trials are ongoing. In preclinical diet-induced obesity (DIO) rodent models, CagriSema combinations have demonstrated superior fat mass reduction, preservation of lean mass relative to GLP-1 monotherapy, and improved lipid profiles.",
    },
    {
      type: "heading",
      text: "Sourcing Cagrilintide for Research: What to Look For",
    },
    {
      type: "paragraph",
      text: "Cagrilintide is a modified peptide with a fatty acid chain for albumin binding (enabling long half-life). This structural complexity means synthesis difficulty and purity challenges are higher than for smaller peptides like BPC-157. Researchers should apply especially stringent sourcing standards.",
    },
    {
      type: "subheading",
      text: "Minimum Purity Requirements",
    },
    {
      type: "list",
      items: [
        "HPLC purity ≥98% (given synthesis complexity, ≥99% preferred)",
        "LC-MS/MS for sequence verification — critical for modified peptides where incorrect acylation produces inactive analogs",
        "Endotoxin testing (LAL assay): <1 EU/mg — essential for in vivo studies",
        "Certificate of Analysis (COA) specific to the lot you receive, not a generic document",
        "Independent third-party testing — internal COAs from manufacturers with no external verification are insufficient",
      ],
    },
    {
      type: "subheading",
      text: "Red Flags for Cagrilintide Sourcing",
    },
    {
      type: "list",
      items: [
        "Pricing significantly below market (complex modified peptides have high synthesis costs)",
        "COA showing only UV-based purity without mass spec confirmation",
        "Suppliers who cannot provide lot-specific documentation",
        "No endotoxin data (particularly problematic for a long-acting compound)",
        "Vendors who ship cagrilintide without proper cold-chain packaging",
      ],
    },
    {
      type: "heading",
      text: "Reconstitution and Storage",
    },
    {
      type: "subheading",
      text: "Cagrilintide",
    },
    {
      type: "paragraph",
      text: "Cagrilintide is typically lyophilized. Due to its acylated structure, reconstitution often requires a small percentage of organic co-solvent (e.g., 10% DMSO in bacteriostatic water, or acetic acid solution) depending on the formulation. Always consult the supplier COA for specific reconstitution guidance. Once reconstituted, store at 2–8°C and use within 14 days; avoid repeated freeze-thaw cycles which can degrade the fatty acid chain.",
    },
    {
      type: "subheading",
      text: "Semaglutide",
    },
    {
      type: "paragraph",
      text: "Semaglutide for research is also a long-acting acylated GLP-1 analog. Standard reconstitution uses bacteriostatic water or sterile saline. Cold-chain shipping (2–8°C) is required for both compounds.",
    },
    {
      type: "heading",
      text: "Research Protocol Design: CagriSema Combination Studies",
    },
    {
      type: "subheading",
      text: "Animal Model",
    },
    {
      type: "paragraph",
      text: "Diet-induced obesity (DIO) C57BL/6J mice (fed 60% kcal fat for 8–12 weeks prior to treatment initiation) are the standard model for GLP-1 and amylin combination research. These animals have established metabolic syndrome phenotypes — hyperglycemia, insulin resistance, and hepatic steatosis — that respond robustly to GLP-1 axis interventions.",
    },
    {
      type: "subheading",
      text: "Dosing Approach",
    },
    {
      type: "list",
      items: [
        "Cagrilintide: 0.1–1.0 nmol/kg subcutaneous, once weekly (extrapolated from clinical pharmacology)",
        "Semaglutide: 3–30 nmol/kg subcutaneous, once weekly in rodent models",
        "Combination: Use lower end of individual doses to capture synergy without masking additive vs. synergistic effects",
        "Duration: 8–12 weeks for body composition endpoints; 4 weeks for acute metabolic markers",
      ],
    },
    {
      type: "subheading",
      text: "Key Endpoints",
    },
    {
      type: "list",
      items: [
        "Body weight (daily or 3x weekly)",
        "Food intake (measured by hopper weight difference)",
        "Body composition by MRI or DEXA (fat mass vs. lean mass)",
        "Fasting glucose, insulin, HbA1c surrogate (fructosamine in mice)",
        "Oral glucose tolerance test (OGTT) at mid-study",
        "Plasma GLP-1, peptide YY, glucagon levels",
        "Liver weight and histology (NAFLD activity score)",
      ],
    },
    {
      type: "heading",
      text: "Nexphoria's Position on Cagrilintide",
    },
    {
      type: "paragraph",
      text: "Nexphoria offers cagrilintide and semaglutide as independent research peptides, both with lot-specific HPLC COAs, mass spectrometry confirmation, and LAL endotoxin testing. Given the complexity of these modified peptides, we apply stricter internal QC thresholds than we do for standard peptides — rejecting lots that fall below 98.5% HPLC purity regardless of manufacturer claims.",
    },
    {
      type: "disclaimer",
      text: "All content is for research and educational purposes only. Cagrilintide and semaglutide are research compounds. This article does not constitute medical advice or an endorsement of human use.",
    },
  ],
};
