import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "where-to-buy-melanotan-1-research-guide",
  title: "Where to Buy Melanotan 1: A Researcher's Sourcing Guide",
  description:
    "What researchers need to know before sourcing Melanotan 1 (afamelanotide) — how it differs from Melanotan II, purity requirements, COA documentation, stability considerations, and what separates research-grade supply from commodity product.",
  category: "Quality & Testing",
  readMinutes: 9,
  publishedAt: "2026-06-07",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Melanotan 1 (MT-1), also known by its INN afamelanotide, is a synthetic analog of alpha-melanocyte-stimulating hormone (α-MSH) that has been studied extensively in photoprotection, erythropoietic protoporphyria, and melanocortin receptor biology. It has a distinct pharmacological profile from Melanotan II — a difference that is frequently misunderstood in sourcing discussions, and one with direct implications for experimental design and quality evaluation.",
    },
    {
      type: "paragraph",
      text: "This guide covers the key considerations for researchers purchasing Melanotan 1: its chemistry, purity standards, COA requirements, storage conditions, and how to identify quality supply in a market where MT-1 and MT-II are often conflated or mislabeled.",
    },
    {
      type: "heading",
      text: "MT-1 vs. MT-II: Why the Distinction Matters for Sourcing",
    },
    {
      type: "paragraph",
      text: "Melanotan 1 and Melanotan II are structurally related but pharmacologically distinct compounds, and the difference matters enormously for research applications. MT-1 is a linear analog of α-MSH — it retains the full 13-residue sequence (Ac-Ser-Tyr-Ser-Nle-Glu-His-D-Phe-Arg-Trp-Gly-Lys-Pro-Val-NH₂) in linear form. MT-II is a cyclic heptapeptide with a lactam bridge that dramatically increases its potency and changes its receptor selectivity profile.",
    },
    {
      type: "paragraph",
      text: "MT-1 shows relative selectivity for MC1R (melanocortin-1 receptor), which drives melanogenesis in melanocytes — the basis for its use in photoprotection research. MT-II is a non-selective agonist with significant MC3R, MC4R, and MC5R activity in addition to MC1R. MC4R activity is responsible for MT-II's well-documented effects on sexual function and appetite — effects that are absent or markedly reduced with MT-1. Researchers studying photoprotection, melanogenesis, or MC1R-specific biology need MT-1, not MT-II. A supplier who conflates these compounds — whether through mislabeling or insufficient QC — provides material that cannot be used for the intended research purpose.",
    },
    {
      type: "heading",
      text: "Chemistry and Synthesis Considerations",
    },
    {
      type: "paragraph",
      text: "MT-1 is a 13-residue linear peptide with molecular weight 1646.86 Da and molecular formula C₇₈H₁₁₁N₂₁O₁₉. The critical structural feature is the D-phenylalanine (D-Phe) at position 7, which replaced the native L-Phe in α-MSH and is responsible for the increased metabolic stability of the analog. This D-amino acid substitution must be correctly incorporated during solid-phase peptide synthesis — racemization at this position would produce a compound with reduced or altered MC1R affinity.",
    },
    {
      type: "paragraph",
      text: "MT-1 also features an N-terminal acetylation (Ac-) and C-terminal amidation (-NH₂), both of which contribute to its stability relative to the native hormone. These terminal modifications must be verified in any quality COA — their absence would indicate a non-standard synthesis that may have different pharmacological properties.",
    },
    {
      type: "heading",
      text: "Purity Standards for MT-1 Research",
    },
    {
      type: "paragraph",
      text: "Research-grade Melanotan 1 should meet ≥98% HPLC purity by peak area at 220 nm. Given the size and complexity of the 13-residue sequence, synthesis byproducts are more varied than with shorter peptides — including deletion sequences (peptides missing one residue), truncated fragments, and oxidized tryptophan-containing species. These impurities can have partial MC1R activity, which complicates dose-response interpretation.",
    },
    {
      type: "paragraph",
      text: "Mass spectrometry confirmation of the correct molecular weight (1646.86 Da) is essential — and should be interpreted alongside the HPLC purity, not as a substitute for it. A compound can have the correct molecular weight while still containing significant impurity from deletion sequences at similar molecular weights. Both measurements together provide the confidence baseline for reproducible research.",
    },
    {
      type: "heading",
      text: "What a Complete MT-1 COA Should Include",
    },
    {
      type: "list",
      items: [
        "HPLC chromatogram with method parameters (C18 column, TFA/acetonitrile gradient, UV at 220 nm), retention time, and percent peak area",
        "Mass spectrometry data confirming 1646.86 Da molecular weight, with confirmation of D-Phe incorporation and terminal modifications",
        "Appearance: white to off-white lyophilized powder",
        "Water content by Karl Fischer titration — allows calculation of actual peptide mass vs. label claim",
        "Endotoxin testing (LAL, <1.0 EU/mg) for in vivo research applications",
        "Lot number with synthesis date for batch traceability",
        "Third-party independent laboratory header — internal COAs from the vendor are not acceptable as primary quality documentation",
      ],
    },
    {
      type: "heading",
      text: "Stability and Storage Requirements",
    },
    {
      type: "paragraph",
      text: "Lyophilized MT-1 is stable at -20°C for 24+ months in sealed vials. The compound contains tryptophan (position 9) which is susceptible to oxidation, and tyrosine residues (positions 2 and 4) which can undergo nitration or oxidative modification under adverse conditions. Storage in amber or opaque vials protects against photodegradation — clear vials shipped without light protection should be treated as suspect.",
    },
    {
      type: "paragraph",
      text: "Once reconstituted, MT-1 solutions should be stored at 4°C and used within 3–4 weeks. Bacteriostatic water extends this window relative to sterile water by inhibiting microbial growth, which is the primary stability concern once the lyophilized barrier is broken. Freeze-thaw cycling after reconstitution degrades peptide integrity — aliquoting into single-use volumes before the first freeze is standard practice for multi-week protocols.",
    },
    {
      type: "heading",
      text: "Red Flags in the MT-1 Supply Market",
    },
    {
      type: "list",
      items: [
        "Products listed as 'Melanotan' without clear specification of MT-1 or MT-II — these are pharmacologically distinct compounds and ambiguous labeling indicates poor QC discipline",
        "COA without mass spectrometry — for a 13-residue peptide, MS verification is non-negotiable for identity confirmation",
        "No explicit confirmation of D-Phe7 incorporation — some suppliers omit this verification step, which matters for both potency and receptor selectivity",
        "Purity below 98% or stated as a range rather than a measured value from the lot",
        "Absence of third-party laboratory attribution — internal testing provides no independent quality assurance",
        "Cold-chain gaps during shipping — MT-1 shipped at ambient temperature in warm months is subject to degradation before it arrives",
        "Pricing significantly below market — 13-residue peptides with non-standard amino acids have real synthesis costs that underpriced product cannot credibly support",
      ],
    },
    {
      type: "heading",
      text: "Research Applications Driving MT-1 Demand",
    },
    {
      type: "paragraph",
      text: "The primary research interest in MT-1 centers on three areas. First, photoprotection: MT-1's MC1R-selective agonism stimulates melanogenesis through the α-MSH/MC1R/cAMP/MITF pathway, and preclinical research has documented increased UV tolerance in melanocyte models. Clinical work in erythropoietic protoporphyria (EPP) — a disorder in which heme synthesis defects cause extreme photosensitivity — has used afamelanotide as an investigational tool. Second, melanocortin receptor biology more broadly: MT-1 serves as a reference agonist for MC1R pharmacology studies, providing a relatively selective tool compound that MT-II cannot. Third, immune modulation: MC1R is expressed on macrophages, dendritic cells, and other immune populations, and MT-1 has been investigated in inflammatory models where its selectivity profile is advantageous.",
    },
    {
      type: "paragraph",
      text: "For any of these applications, receptor selectivity is a central experimental variable — which is why sourcing compound that is unambiguously MT-1 (and not MT-II or an MT-1/MT-II mixture) matters for research integrity.",
    },
    {
      type: "heading",
      text: "Why Nexphoria",
    },
    {
      type: "paragraph",
      text: "Nexphoria's Melanotan 1 is synthesized with verified D-Phe incorporation and both N-terminal acetylation and C-terminal amidation confirmed by mass spectrometry on every lot. HPLC purity is ≥99% with third-party COA documentation publicly accessible by batch number. We do not co-list MT-1 and MT-II under a shared 'Melanotan' SKU — they are distinct compounds with distinct research applications, and our catalog reflects that.",
    },
    {
      type: "paragraph",
      text: "For researchers working in photoprotection, melanocortin receptor biology, or MC1R-selective pharmacology, MT-1 quality directly determines whether the experimental results are attributable to MC1R activity or to off-target effects from impurity or receptor cross-reactivity. We supply the compound to support the former.",
    },
    {
      type: "disclaimer",
      text: "Melanotan 1 is sold by Nexphoria strictly for in vitro and preclinical research use. It is not approved for human use, cosmetic application, or self-administration. All purchases require agreement to our research-use-only terms.",
    },
  ],
};
