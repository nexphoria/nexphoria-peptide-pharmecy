// Launch SKU Product Data for Nexphoria E-Commerce Rebuild
// 6 core products with volume pricing and conversion-focused data

export type VolumePricing = {
  qty: 1 | 3 | 6;
  label: string;
  pricePerUnit: number;
  totalPrice: number;
};

export type LaunchProduct = {
  slug: string;
  name: string;
  dosage: string;
  category: string;
  basePrice: number; // Price for qty 1
  volumePricing: VolumePricing[];
  tagline: string;
  description: string;
  casNumber: string;
  formula: string;
  molecularWeight: string;
  purity: string;
  researchApplications: string[];
  storage: string;
  reconstitution: string;
  faq: {
    question: string;
    answer: string;
  }[];
  relatedSlugs: string[];
  // COA data
  coa: {
    batchNumber: string;
    reportNumber: string;
    purityPercent: string;
    dateTested: string;
  };
};

export const launchProducts: LaunchProduct[] = [
  {
    slug: "bpc-157",
    name: "BPC-157",
    dosage: "10mg",
    category: "Recovery & Healing",
    basePrice: 120,
    volumePricing: [
      { qty: 1, label: "Buy 1", pricePerUnit: 120, totalPrice: 120 },
      { qty: 3, label: "Research Kit (3)", pricePerUnit: 114, totalPrice: 342 },
      { qty: 6, label: "Lab Protocol (6+)", pricePerUnit: 108, totalPrice: 648 },
    ],
    tagline: "Stable pentadecapeptide. Tissue repair research compound.",
    description:
      "BPC-157 (Body Protection Compound 157) is a synthetic pentadecapeptide consisting of 15 amino acids. Characterized by exceptional stability in plasma, gastric acid, and intestinal secretions. Promotes angiogenesis through upregulation of VEGF expression and modulation of the nitric oxide (NO) system.",
    casNumber: "137525-51-0",
    formula: "C₆₂H₉₈N₁₆O₂₂",
    molecularWeight: "1419.53 g/mol",
    purity: "≥99.2%",
    researchApplications: [
      "Connective tissue repair and musculoskeletal healing",
      "Accelerated tendon, ligament, and muscle recovery",
      "Gastrointestinal cytoprotection and epithelial healing",
      "Angiogenic and anti-inflammatory pathway research",
    ],
    storage: "−20°C, desiccated, protect from light. Stable 24 months lyophilized.",
    reconstitution:
      "Reconstitute with sterile or bacteriostatic water. Add solvent slowly along vial wall. Gently swirl; do not vortex. Typical working concentration: 500 μg/mL. Reconstituted solution stable 30 days at 4°C, 6 months at −20°C.",
    faq: [
      {
        question: "What is BPC-157 used for in research?",
        answer:
          "BPC-157 is extensively studied in preclinical models for connective tissue and musculoskeletal repair. Research documents accelerated healing of tendons, ligaments, and skeletal muscle tissue.",
      },
      {
        question: "What purity level is guaranteed?",
        answer:
          "This BPC-157 is verified at ≥99.2% purity using reverse-phase HPLC analysis with UV detection and ESI-MS identity confirmation.",
      },
      {
        question: "How should I store this compound?",
        answer:
          "Store lyophilized powder at −20°C in a desiccated environment, protected from light. Stable for 24 months when properly stored.",
      },
      {
        question: "Is this for human consumption?",
        answer:
          "No. This product is intended for qualified research use only. It is not approved for human therapeutic use by the FDA or any regulatory authority.",
      },
    ],
    relatedSlugs: ["tb-500", "ghk-cu"],
    coa: {
      batchNumber: "BPC-2025-041",
      reportNumber: "RPT-041-2025",
      purityPercent: "99.47%",
      dateTested: "2025-04-15",
    },
  },
  {
    slug: "ghk-cu",
    name: "GHK-Cu",
    dosage: "50mg",
    category: "Anti-Aging",
    basePrice: 96,
    volumePricing: [
      { qty: 1, label: "Buy 1", pricePerUnit: 96, totalPrice: 96 },
      { qty: 3, label: "Research Kit (3)", pricePerUnit: 91, totalPrice: 273 },
      { qty: 6, label: "Lab Protocol (6+)", pricePerUnit: 86, totalPrice: 516 },
    ],
    tagline: "Copper peptide complex. Extracellular matrix and regeneration research.",
    description:
      "GHK-Cu (Copper Peptide GHK) is a naturally occurring copper complex of the tripeptide glycyl-L-histidyl-L-lysine. First isolated from human plasma albumin in 1973. Demonstrates high affinity for Cu(II) ions (Ka ≈ 10¹⁷ M⁻¹). Modulates TGF-β signaling, promoting collagen synthesis while reducing matrix metalloproteinase activity.",
    casNumber: "89030-95-5",
    formula: "C₁₄H₂₃CuN₆O₄",
    molecularWeight: "403.92 g/mol",
    purity: "≥99.0%",
    researchApplications: [
      "Collagen synthesis and extracellular matrix remodeling",
      "Wound healing and tissue regeneration studies",
      "Antioxidant defense and Cu/Zn-SOD delivery",
      "Genomic effects on tissue maintenance pathways",
    ],
    storage: "2–8°C, protect from light. Avoid freeze-thaw cycles. Stable 18 months.",
    reconstitution:
      "Highly water-soluble. Dissolve in sterile water, phosphate-buffered saline (PBS, pH 7.4), or cell culture media. For topical research formulations, can be dissolved directly in aqueous carriers. Stable in solution for 30 days at 4°C. Blue-green coloration indicates intact copper chelation.",
    faq: [
      {
        question: "What is GHK-Cu used for in research?",
        answer:
          "GHK-Cu is studied across dermatology, wound healing, and anti-aging research contexts. Topical application studies demonstrate increased collagen and glycosaminoglycan synthesis in human fibroblast cultures.",
      },
      {
        question: "What purity level is guaranteed?",
        answer:
          "This GHK-Cu is verified at ≥99.0% purity using reverse-phase HPLC analysis with UV detection and ESI-MS identity confirmation.",
      },
      {
        question: "How should I store this compound?",
        answer:
          "Store at 2–8°C refrigerated, protected from light. Avoid freeze-thaw cycles. Stable for 18 months when properly stored.",
      },
      {
        question: "Is this for human consumption?",
        answer:
          "No. This product is intended for qualified research use only. It is not approved for human therapeutic use by the FDA or any regulatory authority.",
      },
    ],
    relatedSlugs: ["bpc-157", "epitalon"],
    coa: {
      batchNumber: "GHK-2025-038",
      reportNumber: "RPT-038-2025",
      purityPercent: "99.21%",
      dateTested: "2025-04-12",
    },
  },
  {
    slug: "nad-plus",
    name: "NAD+",
    dosage: "500mg",
    category: "Wellness",
    basePrice: 240,
    volumePricing: [
      { qty: 1, label: "Buy 1", pricePerUnit: 240, totalPrice: 240 },
      { qty: 3, label: "Research Kit (3)", pricePerUnit: 228, totalPrice: 684 },
      { qty: 6, label: "Lab Protocol (6+)", pricePerUnit: 216, totalPrice: 1296 },
    ],
    tagline: "Nicotinamide adenine dinucleotide. Essential metabolic coenzyme and sirtuin substrate.",
    description:
      "Nicotinamide adenine dinucleotide (NAD⁺) is an essential pyridine nucleotide coenzyme present in all living cells. As a hydride acceptor and electron carrier, NAD⁺ participates in over 500 enzymatic reactions. Serves as substrate for sirtuins (SIRT1–7), poly-ADP-ribose polymerases (PARP1/2), and cyclic ADP-ribose synthases.",
    casNumber: "53-84-9",
    formula: "C₂₁H₂₇N₇O₁₄P₂",
    molecularWeight: "663.43 g/mol",
    purity: "≥99.5%",
    researchApplications: [
      "Cellular energy metabolism and mitochondrial function",
      "DNA repair and PARP activation studies",
      "Sirtuin-mediated gene expression and longevity research",
      "Age-related NAD⁺ decline and restoration studies",
    ],
    storage: "−20°C, anhydrous conditions. Highly hygroscopic — minimize atmospheric exposure. Stable 24 months.",
    reconstitution:
      "Dissolve in sterile water, PBS (pH 7.4), or appropriate research buffer. NAD⁺ is stable in neutral pH at room temperature for several hours. For long-term use, prepare concentrated stock, aliquot, and store at −80°C. Avoid repeated freeze-thaw cycles.",
    faq: [
      {
        question: "What is NAD+ used for in research?",
        answer:
          "NAD⁺ precursor supplementation research has demonstrated tissue NAD⁺ elevation across multiple human clinical trials. Direct NAD⁺ administration studies have examined pharmacokinetics and tissue distribution.",
      },
      {
        question: "What purity level is guaranteed?",
        answer:
          "This NAD+ is verified at ≥99.5% purity using reverse-phase HPLC analysis with UV detection and ESI-MS identity confirmation.",
      },
      {
        question: "How should I store this compound?",
        answer:
          "Store at −20°C in anhydrous conditions. NAD+ is highly hygroscopic, so minimize atmospheric exposure. Stable for 24 months when properly stored.",
      },
      {
        question: "Is this for human consumption?",
        answer:
          "No. This product is intended for qualified research use only. It is not approved for human therapeutic use by the FDA or any regulatory authority.",
      },
    ],
    relatedSlugs: ["epitalon", "mots-c"],
    coa: {
      batchNumber: "NAD-2025-042",
      reportNumber: "RPT-042-2025",
      purityPercent: "99.68%",
      dateTested: "2025-04-18",
    },
  },
  {
    slug: "tb-500",
    name: "TB-500",
    dosage: "5mg",
    category: "Recovery & Healing",
    basePrice: 90,
    volumePricing: [
      { qty: 1, label: "Buy 1", pricePerUnit: 90, totalPrice: 90 },
      { qty: 3, label: "Research Kit (3)", pricePerUnit: 86, totalPrice: 258 },
      { qty: 6, label: "Lab Protocol (6+)", pricePerUnit: 81, totalPrice: 486 },
    ],
    tagline: "Thymosin beta-4 fragment. Actin-binding regenerative peptide.",
    description:
      "TB-500 is the synthetic form of a conserved region of thymosin beta-4 (Tβ4), an ubiquitous 43-amino acid protein found in virtually all human and animal cells. The biologically active fragment (amino acids 17–23: LKKTETQ) retains primary actin-binding activity. Sequesters monomeric G-actin, modulating local actin dynamics.",
    casNumber: "77591-33-4",
    formula: "C₂₁₂H₃₅₀N₅₆O₇₈S",
    molecularWeight: "4963.50 g/mol",
    purity: "≥98.5%",
    researchApplications: [
      "Wound healing and cardiac repair models",
      "Musculoskeletal regeneration and collagen deposition",
      "Angiogenesis and neovascularization studies",
      "Anti-apoptotic activity under oxidative stress",
    ],
    storage: "−20°C, desiccated. Lyophilized powder stable 24 months.",
    reconstitution:
      "Reconstitute with bacteriostatic water or sterile saline. Add 1–2 mL solvent per 10 mg vial. Gently invert to mix; do not vortex. Working concentration typically 2 mg/mL. Store reconstituted solution at 4°C for up to 5 days or −20°C for up to 3 months.",
    faq: [
      {
        question: "What is TB-500 used for in research?",
        answer:
          "TB-500 has been extensively studied in preclinical wound healing, cardiac repair, and musculoskeletal regeneration models. Research documents improved angiogenesis and neovascularization.",
      },
      {
        question: "What purity level is guaranteed?",
        answer:
          "This TB-500 is verified at ≥98.5% purity using reverse-phase HPLC analysis with UV detection and ESI-MS identity confirmation.",
      },
      {
        question: "How should I store this compound?",
        answer:
          "Store lyophilized powder at −20°C in a desiccated environment. Stable for 24 months when properly stored.",
      },
      {
        question: "Is this for human consumption?",
        answer:
          "No. This product is intended for qualified research use only. It is not approved for human therapeutic use by the FDA or any regulatory authority.",
      },
    ],
    relatedSlugs: ["bpc-157", "ghk-cu"],
    coa: {
      batchNumber: "TB5-2025-039",
      reportNumber: "RPT-039-2025",
      purityPercent: "98.91%",
      dateTested: "2025-04-14",
    },
  },
  {
    slug: "mots-c",
    name: "MOTS-c",
    dosage: "10mg",
    category: "Wellness",
    basePrice: 240,
    volumePricing: [
      { qty: 1, label: "Buy 1", pricePerUnit: 240, totalPrice: 240 },
      { qty: 3, label: "Research Kit (3)", pricePerUnit: 228, totalPrice: 684 },
      { qty: 6, label: "Lab Protocol (6+)", pricePerUnit: 216, totalPrice: 1296 },
    ],
    tagline: "Mitochondrial-derived peptide. Metabolic regulation and longevity research.",
    description:
      "MOTS-c (Mitochondrial ORF of the 12S rRNA-c) is a 16-amino acid peptide encoded by the mitochondrial genome. Discovered in 2015, it represents a novel class of mitochondrial-derived peptides (MDPs). Regulates metabolic homeostasis by targeting skeletal muscle and enhancing glucose metabolism through AMPK activation.",
    casNumber: "1627580-64-6",
    formula: "C₁₀₁H₁₅₂N₂₈O₂₂S₂",
    molecularWeight: "2174.60 g/mol",
    purity: "≥98.0%",
    researchApplications: [
      "Metabolic regulation and insulin sensitivity studies",
      "AMPK activation and glucose metabolism research",
      "Age-related metabolic decline and mitochondrial function",
      "Exercise mimetic effects and energy expenditure",
    ],
    storage: "−20°C, desiccated, protected from light. Lyophilized stable 24 months.",
    reconstitution:
      "Reconstitute with sterile water or bacteriostatic water. Add 1 mL per 10 mg vial for 10 mg/mL stock solution. Stable at 4°C for 14 days after reconstitution. For longer storage, aliquot and store at −20°C for up to 6 months.",
    faq: [
      {
        question: "What is MOTS-c used for in research?",
        answer:
          "MOTS-c is studied in metabolic research contexts, particularly for insulin sensitivity, glucose metabolism, and age-related metabolic decline. Research shows it enhances metabolic homeostasis through AMPK activation.",
      },
      {
        question: "What purity level is guaranteed?",
        answer:
          "This MOTS-c is verified at ≥98.0% purity using reverse-phase HPLC analysis with UV detection and ESI-MS identity confirmation.",
      },
      {
        question: "How should I store this compound?",
        answer:
          "Store lyophilized powder at −20°C in a desiccated environment, protected from light. Stable for 24 months when properly stored.",
      },
      {
        question: "Is this for human consumption?",
        answer:
          "No. This product is intended for qualified research use only. It is not approved for human therapeutic use by the FDA or any regulatory authority.",
      },
    ],
    relatedSlugs: ["nad-plus", "epitalon"],
    coa: {
      batchNumber: "MTC-2025-040",
      reportNumber: "RPT-040-2025",
      purityPercent: "98.34%",
      dateTested: "2025-04-16",
    },
  },
  {
    slug: "epitalon",
    name: "Epitalon",
    dosage: "10mg",
    category: "Anti-Aging",
    basePrice: 120,
    volumePricing: [
      { qty: 1, label: "Buy 1", pricePerUnit: 120, totalPrice: 120 },
      { qty: 3, label: "Research Kit (3)", pricePerUnit: 114, totalPrice: 342 },
      { qty: 6, label: "Lab Protocol (6+)", pricePerUnit: 108, totalPrice: 648 },
    ],
    tagline: "Pineal tetrapeptide. Telomerase activation and circadian regulation research.",
    description:
      "Epitalon (Epithalon) is a synthetic tetrapeptide (Ala-Glu-Asp-Gly) corresponding to the active sequence of epithalamin, a polypeptide bioregulator derived from the bovine pineal gland. Activates telomerase (hTERT) in somatic cells, promoting telomere elongation. Normalizes circadian melatonin secretion by restoring pineal gland function.",
    casNumber: "307297-39-8",
    formula: "C₁₄H₂₂N₄O₉",
    molecularWeight: "390.34 g/mol",
    purity: "≥99.3%",
    researchApplications: [
      "Telomerase activation and telomere maintenance",
      "Circadian rhythm regulation and melatonin secretion",
      "Longevity and cellular senescence research",
      "Hypothalamic-pituitary axis modulation",
    ],
    storage: "−20°C, desiccated. Lyophilized powder stable 24 months. Protect from moisture.",
    reconstitution:
      "Reconstitute with sterile water for injection. Add 1 mL per 10 mg for a 10 mg/mL solution, or 5 mL for a 2 mg/mL working concentration. Stable at 4°C for 30 days, −20°C for 6 months. Avoid multiple freeze-thaw cycles.",
    faq: [
      {
        question: "What is Epitalon used for in research?",
        answer:
          "Epitalon is studied for telomerase activation, telomere elongation in cells, circadian rhythm normalization, and longevity effects in multiple animal species documented over decades of research.",
      },
      {
        question: "What purity level is guaranteed?",
        answer:
          "This Epitalon is verified at ≥99.3% purity using reverse-phase HPLC analysis with UV detection and ESI-MS identity confirmation.",
      },
      {
        question: "How should I store this compound?",
        answer:
          "Store lyophilized powder at −20°C in a desiccated environment, protected from moisture. Stable for 24 months when properly stored.",
      },
      {
        question: "Is this for human consumption?",
        answer:
          "No. This product is intended for qualified research use only. It is not approved for human therapeutic use by the FDA or any regulatory authority.",
      },
    ],
    relatedSlugs: ["nad-plus", "ghk-cu"],
    coa: {
      batchNumber: "EPI-2025-043",
      reportNumber: "RPT-043-2025",
      purityPercent: "99.58%",
      dateTested: "2025-04-20",
    },
  },
];

export function getLaunchProduct(slug: string): LaunchProduct | undefined {
  return launchProducts.find((p) => p.slug === slug);
}

export function getRelatedLaunchProducts(slugs: string[]): LaunchProduct[] {
  return slugs
    .map((s) => launchProducts.find((p) => p.slug === s))
    .filter(Boolean) as LaunchProduct[];
}
