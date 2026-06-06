import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "where-to-buy-aod-9604-research-guide",
  title: "Where to Buy AOD-9604: A Researcher's Sourcing Guide",
  description:
    "What researchers need to know before sourcing AOD-9604 — the lipolytic HGH fragment's structural characteristics, purity benchmarks, COA documentation requirements, and how to evaluate supply quality for metabolic research.",
  category: "Quality & Testing",
  readMinutes: 8,
  publishedAt: "2026-06-06",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "AOD-9604 (Anti-Obesity Drug 9604) is a synthetic fragment of human growth hormone corresponding to amino acids 177–191 of the hGH C-terminus, modified with a tyrosine at the N-terminus. Its sequence is Tyr-Leu-Arg-Ile-Val-Gln-Cys-Arg-Ser-Val-Glu-Gly-Ser-Cys-Gly-Phe with a molecular weight of approximately 1817.1 Da. The peptide contains an intramolecular disulfide bond between Cys residues at positions 7 and 15 — a structural feature that directly determines biological activity and introduces specific synthesis and quality verification challenges that set AOD-9604 apart from linear peptides.",
    },
    {
      type: "paragraph",
      text: "Originally developed by Metabolic Pharmaceuticals (Melbourne, Australia) and reaching Phase II/III clinical trials before development was discontinued, AOD-9604 has accumulated a meaningful body of preclinical evidence on lipolysis, adipocyte differentiation, and fat metabolism mechanisms. This guide covers what researchers need to verify when sourcing AOD-9604 for experimental work.",
    },
    {
      type: "heading",
      text: "The Disulfide Bond Problem: Why AOD-9604 Sourcing Is Different",
    },
    {
      type: "paragraph",
      text: "The intramolecular disulfide bond between Cys7 and Cys15 in AOD-9604 is not merely a structural curiosity — it is required for the peptide's bioactive conformation. The disulfide constrains the C-terminal region of the fragment into a cyclic structure that is essential for receptor interaction. Linear (reduced) AOD-9604 — where the disulfide has not formed or has been broken — retains the correct sequence but lacks the bioactive three-dimensional structure.",
    },
    {
      type: "paragraph",
      text: "This creates a verification problem that does not exist for purely linear peptides: HPLC purity can look acceptable even if the disulfide bond is absent, partially formed, or incorrectly formed (inter-molecular crosslinking rather than intra-molecular). Mass spectrometry is the critical verification tool here — the mass of correctly cyclized AOD-9604 (with the disulfide bond intact, -2 Da relative to the fully reduced form) must be confirmed to validate that the correct oxidized structure has been synthesized.",
    },
    {
      type: "heading",
      text: "Purity Standards for AOD-9604 Research",
    },
    {
      type: "paragraph",
      text: "Research-grade AOD-9604 should meet ≥98% HPLC purity with mass spectrometry confirmation of the disulfide-bonded form. The HPLC trace should show a single dominant peak consistent with the correctly cyclized peptide. Broader peaks, shoulder peaks, or reduced-form contamination (detectable by the +2 Da mass shift in MS) all indicate quality problems that will compromise experimental outcomes in lipolysis and adipocyte differentiation assays.",
    },
    {
      type: "paragraph",
      text: "The disulfide bond also affects stability in solution. Reducing agents present in some reconstitution buffers — including some formulations of bacteriostatic water containing preservatives — can degrade the disulfide bond over time. Researchers should use plain sterile water for reconstitution of AOD-9604, and validate that buffer conditions in cell assays do not include beta-mercaptoethanol, DTT, or other reducing agents that would break the disulfide and inactivate the peptide.",
    },
    {
      type: "heading",
      text: "What a Complete AOD-9604 COA Must Include",
    },
    {
      type: "list",
      items: [
        "HPLC chromatogram with ≥98% purity, retention time, and method parameters",
        "Mass spectrometry confirming MW of ~1817.1 Da with disulfide bond formation (oxidized form) — the single most critical data point for AOD-9604 quality verification",
        "Appearance: white to off-white lyophilized powder",
        "Water content by Karl Fischer titration — enables accurate peptide content calculation from nominal label weight",
        "Endotoxin testing (LAL method) with <1.0 EU/mg result",
        "Lot number, synthesis date, and testing date for batch traceability",
        "Independent third-party laboratory attribution",
      ],
    },
    {
      type: "heading",
      text: "AOD-9604 vs HGH Fragment 176-191: Sourcing Implications",
    },
    {
      type: "paragraph",
      text: "AOD-9604 is sometimes conflated with HGH Fragment 176-191, which covers an overlapping but distinct sequence region (residues 176-191 without the additional Tyr). The two compounds are structurally different, have different molecular weights, and may have different receptor interaction profiles despite their related origins. Researchers should verify that what they receive is specifically AOD-9604 (with the N-terminal Tyr modification) versus HGH Fragment 176-191 — both compounds are available in the research market and are not interchangeable in study design.",
    },
    {
      type: "paragraph",
      text: "This distinction also means that mass spectrometry data is doubly important for AOD-9604 verification: not only to confirm disulfide bond formation, but to confirm the molecular weight corresponds to AOD-9604 rather than the related but non-identical Fragment 176-191.",
    },
    {
      type: "heading",
      text: "Research Applications and Study Design Considerations",
    },
    {
      type: "paragraph",
      text: "AOD-9604's primary research applications involve adipocyte lipolysis and lipogenesis models, body composition endpoints in rodent obesity models, and mechanistic studies examining the separation of fat-mobilizing and growth-promoting activities within the hGH C-terminal domain. The peptide binds to adipocyte receptors involved in fat mobilization without the insulin-resistance effects associated with full-length GH — this selective activity is what drove its pharmaceutical development, and it is the central research hypothesis that preclinical study designs are designed to interrogate.",
    },
    {
      type: "paragraph",
      text: "For in vitro applications in 3T3-L1 adipocyte differentiation assays — one of the most common experimental models for AOD-9604 — the disulfide bond integrity is directly tied to assay signal. The cyclized, bioactive form produces concentration-dependent effects on triglyceride accumulation and lipase activity; the reduced linear form does not. Researchers using an incorrectly synthesized product will observe weak or absent activity and may falsely conclude negative pharmacology rather than recognizing the supply quality failure.",
    },
    {
      type: "heading",
      text: "Stability and Cold-Chain Requirements",
    },
    {
      type: "paragraph",
      text: "Lyophilized AOD-9604 is stable at -20°C for 24+ months in sealed vials protected from light. The disulfide bond in the peptide is stable in the dry lyophilized state but becomes susceptible to oxidative degradation (further oxidation of sulfur beyond the intended disulfide to sulfoxide or sulfone) under ambient temperature or light exposure in solution. Cold-chain shipping with refrigerants is required — ambient-temperature shipping over standard transit timelines introduces meaningful degradation risk, particularly for lot testing that occurs months before final use.",
    },
    {
      type: "heading",
      text: "Red Flags When Sourcing AOD-9604",
    },
    {
      type: "list",
      items: [
        "No mass spectrometry data showing the oxidized (disulfide-bonded) form — this is the most critical quality gap for AOD-9604",
        "MS data showing only the reduced form or a mixture of oxidized/reduced — the bioactive disulfide structure is not confirmed",
        "HPLC purity below 98% without explanation",
        "COA that doesn't differentiate between AOD-9604 and HGH Fragment 176-191",
        "No endotoxin testing result",
        "Ambient-temperature shipping without cold-pack",
        "Internal vendor COA without independent laboratory attribution",
      ],
    },
    {
      type: "heading",
      text: "Why Nexphoria",
    },
    {
      type: "paragraph",
      text: "Nexphoria's AOD-9604 is synthesized with verified disulfide bond formation confirmed by mass spectrometry on every lot. HPLC purity ≥99%, LAL endotoxin testing, and independent third-party COA documentation are standard — not upgrades. Cold-pack shipping is included on every order. For researchers working in adipocyte biology or metabolic research where the disulfide structure is the entire pharmacological basis, the quality verification standard we apply is not optional. We know what's required, and we don't ship product that doesn't meet it.",
    },
    {
      type: "disclaimer",
      text: "AOD-9604 is sold by Nexphoria strictly for in vitro and preclinical research use. It is not approved for human consumption, therapeutic use, or veterinary application. All purchases require agreement to our research-use-only terms.",
    },
  ],
};
