import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "where-to-buy-humanin-research-guide",
  title: "Where to Buy Humanin: A Researcher's Sourcing Guide",
  description:
    "What researchers need to know before sourcing Humanin — the mitochondria-derived neuroprotective peptide's synthesis requirements, purity standards, COA documentation, stability characteristics, and how to evaluate supply for aging and neuroprotection research.",
  category: "Quality & Testing",
  readMinutes: 9,
  publishedAt: "2026-06-06",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Humanin is a 21-amino acid peptide (MAPRGFSCLLLLTSEIDLPVK) originally identified by Nishimoto et al. (2000) in a cDNA library screen for sequences that rescued neurons from Alzheimer's disease-associated cell death. Like MOTS-c, it is encoded within the mitochondrial genome — specifically within the 16S ribosomal RNA gene — making it a founding member of the mitochondria-derived peptide (MDP) family. Humanin's neuroprotective, cytoprotective, and metabolic regulatory functions have generated sustained research interest across neurodegenerative disease biology, aging science, and ischemia-reperfusion research.",
    },
    {
      type: "paragraph",
      text: "Sourcing verified Humanin for research is not trivial. The peptide's 21-residue sequence contains a cysteine at position 8 that requires careful handling during synthesis, and the research literature includes both native Humanin and a synthetic analog (HNG — Ser14Gly-substituted) with enhanced potency. This guide covers what researchers need to evaluate when purchasing Humanin for preclinical study.",
    },
    {
      type: "heading",
      text: "The Cysteine Problem: Why Humanin Synthesis Is Technically Demanding",
    },
    {
      type: "paragraph",
      text: "The cysteine residue at position 8 of Humanin is its most challenging synthesis element. Free thiols in peptide synthesis are prone to disulfide bond formation during workup and purification — a side reaction that produces Humanin homodimers (linked Cys-Cys) as synthesis byproducts. These dimers may have altered receptor activity and represent a common contamination in poorly controlled Humanin batches.",
    },
    {
      type: "paragraph",
      text: "High-quality Humanin synthesis requires orthogonal cysteine protection during SPPS (typically Trt or Acm protecting groups), careful deprotection under reducing conditions, and purification under conditions that prevent adventitious oxidation. Suppliers who produce Humanin at scale without managing the thiol chemistry produce batches with varying dimer content — detectable by non-reducing SDS-PAGE or mass spectrometry, but invisible under standard HPLC analysis run under oxidizing conditions.",
    },
    {
      type: "paragraph",
      text: "Researchers should specifically ask whether the COA confirms that the measured product is monomeric Humanin, not the disulfide-linked homodimer.",
    },
    {
      type: "heading",
      text: "Native Humanin vs. HNG (S14G-Humanin): Know What You're Ordering",
    },
    {
      type: "paragraph",
      text: "The published Humanin literature includes two main compounds: native Humanin (MAPRGFSCLLLLTSEIDLPVK) and HNG, a synthetic analog with serine replaced by glycine at position 14 (MAPRGFSCLLLLTGEIDLPVK). HNG has approximately 1000-fold greater cytoprotective potency than native Humanin in neuronal cell death assays — not because the Ser14→Gly substitution is inherently potent, but because it appears to enhance the peptide's interaction with the tripartite Humanin receptor complex (WSX-1/IL-6ST/CNTFR) by modifying the structural flexibility of the receptor-binding region.",
    },
    {
      type: "paragraph",
      text: "These are different compounds that require different experimental designs and dosing. Researchers must specify which they intend to use. COAs for native Humanin should confirm MW 2590.1 Da; COAs for HNG should confirm MW 2548.0 Da. Some vendors mislabel HNG as 'Humanin' without the S14G designation — a documentation failure that compromises study reproducibility.",
    },
    {
      type: "heading",
      text: "Purity Standards for Humanin Research",
    },
    {
      type: "paragraph",
      text: "≥98% HPLC purity by UV peak area at 220 nm is the accepted standard for research-grade Humanin. Given the Cys dimer issue discussed above, HPLC purity should be measured under reducing conditions (with DTT or TCEP in the mobile phase) to ensure the reported purity reflects monomeric peptide content and not a dimer that co-elutes with the main peak under non-reducing conditions.",
    },
    {
      type: "paragraph",
      text: "Mass spectrometry confirmation is essential for two reasons: confirming the correct molecular weight (2590.1 Da for native, 2548.0 Da for HNG) and identifying the presence of +2 Da or +0 Da mass variants that indicate cysteine oxidation state. The reduced form (free thiol) is the intended research compound; the oxidized form (intramolecular disulfide, -2 Da) has different receptor binding characteristics.",
    },
    {
      type: "heading",
      text: "What a Complete Humanin COA Should Include",
    },
    {
      type: "list",
      items: [
        "HPLC chromatogram under reducing conditions — confirm it was run with DTT/TCEP to distinguish monomer from dimer",
        "Mass spectrometry data confirming MW: 2590.1 Da (native) or 2548.0 Da (HNG); verify free-thiol vs. oxidized form in the MS interpretation",
        "Explicit identification as native Humanin or HNG (S14G) — ambiguous labeling is a disqualifying red flag",
        "Appearance: white to off-white lyophilized powder",
        "Water content (Karl Fischer) for accurate peptide mass calculation",
        "Endotoxin testing (LAL, <1.0 EU/mg) for in vivo applications",
        "Lot number, synthesis date, third-party laboratory attribution",
      ],
    },
    {
      type: "heading",
      text: "Research Context: Neuroprotection and Aging Biology",
    },
    {
      type: "paragraph",
      text: "Humanin research spans three primary application areas. In neuroprotection, it has been studied in Alzheimer's disease models (amyloid-beta toxicity rescue), Parkinson's disease models (MPTP-induced dopaminergic cell death), and ischemic stroke models (reduction of infarct volume in MCAO rodent models). The consistency of neuroprotective effects across multiple independent laboratories makes it one of the better-supported protective peptides in the preclinical CNS literature.",
    },
    {
      type: "paragraph",
      text: "In metabolic and aging biology, Humanin concentrations in human cerebrospinal fluid and serum decline with age — establishing it as an age-associated biomarker and suggesting a potential role in age-related vulnerability to neurodegenerative disease. This bidirectional research interest (Humanin both as an intervention target and as a biological readout) means that researchers across several fields may need verified supply for different experimental purposes.",
    },
    {
      type: "paragraph",
      text: "Reproductive biology represents an emerging application: Humanin is expressed in granulosa cells and Sertoli cells, and has been examined as a regulator of germ cell survival during spermatogenesis. Researchers in this domain typically need native Humanin rather than HNG, making variant-specific sourcing accuracy especially important.",
    },
    {
      type: "heading",
      text: "Stability and Storage Requirements",
    },
    {
      type: "paragraph",
      text: "Lyophilized Humanin is stable at -20°C for 24+ months in sealed, desiccated vials under inert atmosphere. The free cysteine thiol is the primary degradation risk — exposure to air during storage causes progressive oxidation to the intramolecular disulfide form. Storage under nitrogen or argon atmosphere extends shelf life; vials that have been opened and resealed multiple times should be tested before use in critical experiments.",
    },
    {
      type: "paragraph",
      text: "Reconstitution should be performed in degassed sterile water to minimize dissolved oxygen exposure. Prepared solutions should be stored at 4°C under nitrogen-sealed conditions if multi-week use is planned, or aliquoted into single-dose volumes and stored at -80°C for long-term stability.",
    },
    {
      type: "heading",
      text: "Red Flags in the Humanin Market",
    },
    {
      type: "list",
      items: [
        "COA does not specify native Humanin vs. HNG — these are different compounds and the distinction must be explicit",
        "HPLC run without reducing agent — cannot confirm monomeric purity vs. dimer contamination",
        "No mass spectrometry data — cysteine oxidation state and compound identity both require MS confirmation",
        "No endotoxin data for in vivo use — given Humanin's primary application in animal neurotoxicity models, endotoxin testing is essential",
        "Purity stated as ≥95% — below the 98% research standard for a compound with documented synthesis complexity",
        "No third-party laboratory attribution — vendor-internal COAs lack independent verification",
        "Pricing that implies no synthesis quality premium — cysteine-containing peptides with correct thiol chemistry have real manufacturing cost",
      ],
    },
    {
      type: "heading",
      text: "Why Nexphoria",
    },
    {
      type: "paragraph",
      text: "Nexphoria's Humanin is synthesized under reducing conditions with orthogonal Cys protection, verified by HPLC under reducing conditions and mass spectrometry for both MW confirmation and cysteine oxidation state. We explicitly document whether each lot is native Humanin or HNG on the COA — both variants are available, and the documentation distinguishes them unambiguously.",
    },
    {
      type: "paragraph",
      text: "Mitochondria-derived peptide research is still establishing its foundational protocols. The compounds are harder to synthesize correctly than standard research peptides, and the stakes for verified quality are correspondingly higher. We've built our Humanin supply chain to meet the standards the biology demands.",
    },
    {
      type: "disclaimer",
      text: "Humanin is sold by Nexphoria strictly for in vitro and preclinical research use. It is not approved for human consumption, therapeutic use, or veterinary application. All purchases require agreement to our research-use-only terms.",
    },
  ],
};
