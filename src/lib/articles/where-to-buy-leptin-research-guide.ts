import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "where-to-buy-leptin-research-guide",
  title: "Where to Buy Leptin for Research: Sourcing Standards and Study Design Notes",
  description:
    "Leptin is the primary adipose-derived satiety hormone and a critical tool in obesity, neuroendocrine, and metabolic research. This guide covers what to look for when sourcing research-grade leptin, form factors, purity requirements, and key study design considerations.",
  category: "Compound Profiles",
  readMinutes: 7,
  publishedAt: "2026-06-14",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Leptin is a 167-amino-acid protein hormone encoded by the LEP gene, primarily secreted by white adipose tissue in proportion to fat mass. Discovered in 1994 by Zhang and colleagues through positional cloning of the ob (obese) gene in mice, leptin is the canonical adipokine — the long-sought signal communicating peripheral energy stores to the central nervous system. For researchers studying obesity, metabolic disease, reproductive biology, neuroendocrinology, and immune regulation, leptin is a foundational experimental tool. Sourcing verified, biologically active leptin is critical to the validity of any study design using this protein.",
    },
    {
      type: "heading",
      text: "About Leptin: Research Context",
    },
    {
      type: "paragraph",
      text: "Leptin acts primarily through the leptin receptor (LepR/Ob-R), a class I cytokine receptor expressed most abundantly in the hypothalamus — particularly the arcuate nucleus, ventromedial nucleus, and dorsomedial nucleus. Hypothalamic LepR signaling activates POMC/CART neurons (which suppress appetite and increase energy expenditure) and inhibits NPY/AgRP neurons (which drive hunger). The net effect is reduced food intake and increased metabolic rate in energy-replete states.",
    },
    {
      type: "paragraph",
      text: "Beyond appetite regulation, leptin has documented roles in: reproductive axis regulation (leptin deficiency causes infertility in ob/ob mice, reversed by exogenous leptin), immune function (leptin promotes pro-inflammatory cytokine production and T-cell activation), bone metabolism, angiogenesis, and cardiovascular function. These pleiotropic effects make leptin a valuable tool across multiple research domains.",
    },
    {
      type: "callout",
      text: "Leptin is a protein hormone (not a short peptide), which means sourcing considerations differ from small synthetic peptides. Biological activity, glycosylation status, and endotoxin levels are particularly critical quality checkpoints for leptin research reagents.",
    },
    {
      type: "heading",
      text: "Forms of Research-Grade Leptin",
    },
    {
      type: "subheading",
      text: "Recombinant Human Leptin (rhLeptin)",
    },
    {
      type: "paragraph",
      text: "The majority of research-grade leptin is produced as recombinant human leptin (rhLeptin) expressed in E. coli expression systems. E. coli-derived rhLeptin is non-glycosylated (human leptin is minimally glycosylated in vivo, and this does not substantially affect LepR binding), which is acceptable for most in vitro and in vivo research applications. Molecular weight of the non-glycosylated form is approximately 16.0 kDa. For studies specifically investigating post-translational modifications or studying leptin in physiological glycosylation contexts, mammalian cell-expressed leptin (CHO or HEK293-derived) may be appropriate.",
    },
    {
      type: "subheading",
      text: "Recombinant Mouse Leptin",
    },
    {
      type: "paragraph",
      text: "For studies in ob/ob mice — the primary in vivo model of complete leptin deficiency — recombinant mouse leptin is the preferred form for exogenous replacement experiments. Human leptin does have cross-reactivity with the mouse leptin receptor, but using species-matched leptin is generally preferred for physiological dose-response studies and avoids potential immunogenic complications in chronic dosing protocols.",
    },
    {
      type: "heading",
      text: "What to Look for When Sourcing Leptin",
    },
    {
      type: "list",
      items: [
        "HPLC purity ≥95% — leptin is a larger protein than most research peptides; SDS-PAGE should show a clean band at ~16 kDa with no major contaminating bands",
        "Endotoxin (LAL) data is essential — leptin activates immune signaling pathways, so contaminating LPS would confound any immunological or inflammatory endpoint",
        "Biological activity confirmation via receptor binding or functional assay (e.g., STAT3 phosphorylation in leptin-responsive cell lines) is the gold standard over purity testing alone",
        "Species confirmation — human vs. mouse leptin differ in amino acid sequence; verify the correct species for your model system",
        "Lot-specific CoA with HPLC trace, endotoxin reading (should be <1 EU/μg), and protein identity (N-terminal sequencing or mass spec)",
        "Cold-chain shipping with temperature monitoring — lyophilized leptin is stable, but verify cold-chain integrity for reconstituted solutions",
      ],
    },
    {
      type: "heading",
      text: "Reconstitution and Storage Protocol",
    },
    {
      type: "paragraph",
      text: "Leptin lyophilized powder (commonly supplied at 0.5–1 mg per vial) should be stored at -20°C in the original sealed vial. Upon receipt, do not open the vial until needed. For reconstitution, allow the vial to equilibrate to room temperature before opening to prevent moisture condensation. Reconstitute in sterile PBS (pH 7.4) or sterile water at a stock concentration of 0.1–1 mg/mL. Leptin has moderate solubility; if solubility issues are encountered, a small amount of carrier protein (0.1% BSA) can be added.",
    },
    {
      type: "paragraph",
      text: "Once reconstituted, aliquot immediately into single-use volumes to avoid repeated freeze-thaw cycles. Store aliquots at -80°C for long-term use or at -20°C for up to 4 weeks. Avoid storing reconstituted leptin at 4°C for extended periods — biological activity degrades within days at refrigerator temperatures. Protect from repeated light exposure.",
    },
    {
      type: "heading",
      text: "In Vivo Dosing Reference (Rodent Models)",
    },
    {
      type: "paragraph",
      text: "Published in vivo protocols for exogenous leptin in rodent studies vary widely by experimental context. The table below summarizes common reference ranges from the literature:",
    },
    {
      type: "table",
      headers: ["Model", "Route", "Dose Range", "Frequency", "Purpose"],
      rows: [
        ["ob/ob mouse (leptin deficiency)", "Subcutaneous", "0.5–2 mg/kg/day", "Daily × 14–28 days", "Leptin replacement, obesity reversal"],
        ["Diet-induced obesity mouse", "Subcutaneous", "1–3 mg/kg/day", "Daily × 7–21 days", "Central resistance testing"],
        ["Normal rodent (acute)", "Intraperitoneal", "0.1–1 mg/kg", "Single or BID", "Acute appetite/energy expenditure"],
        ["Hypothalamic circuit studies", "ICV infusion", "0.01–0.1 μg/site", "Bolus", "Central receptor mapping"],
        ["Leptin resistance studies", "Continuous s.c. infusion", "0.5–1 mg/kg/day", "Mini-osmotic pump", "Chronic exposure protocols"],
      ],
    },
    {
      type: "heading",
      text: "Key Experimental Endpoints",
    },
    {
      type: "list",
      items: [
        "Body weight and food intake by metabolic cage",
        "Body composition via DEXA or MRI (fat mass reduction in ob/ob rescue studies is the classic endpoint)",
        "Fasting and fed plasma leptin concentrations (ELISA — note that exogenous leptin elevates measured levels, requiring careful baseline design)",
        "Plasma insulin, glucose, and adiponectin for metabolic outcomes",
        "Hypothalamic signaling markers: pSTAT3 (the canonical LepR phosphorylation target), SOCS3 (leptin resistance marker), and pAMPK",
        "POMC and NPY/AgRP mRNA expression in arcuate nucleus samples",
        "Indirect calorimetry for energy expenditure changes",
        "Reproductive endpoints in leptin deficiency models: LH pulsatility, gonadal weight, fertility restoration",
      ],
    },
    {
      type: "heading",
      text: "Leptin Resistance: An Important Research Consideration",
    },
    {
      type: "paragraph",
      text: "A critical design consideration for in vivo leptin research is leptin resistance. Common diet-induced obesity (DIO) mouse models are characteristically leptin resistant — they have high endogenous leptin levels but blunted hypothalamic LepR signaling. Exogenous leptin administration in DIO mice often produces attenuated or absent responses compared to lean controls. Researchers should verify the leptin responsiveness of their model system before drawing mechanistic conclusions, or explicitly study resistance mechanisms using SOCS3 knockout models, fasting-mediated leptin sensitization protocols, or co-treatment approaches designed to restore LepR responsiveness.",
    },
    {
      type: "heading",
      text: "Regulatory and Compliance Notes",
    },
    {
      type: "paragraph",
      text: "Research-grade leptin is not an FDA-approved therapeutic (though a modified leptin analog, metreleptin, is approved for lipodystrophy treatment under the brand name Myalept). Recombinant leptin supplied as a research reagent is for in vitro and preclinical in vivo research only, subject to standard institutional animal care and use committee (IACUC) protocols for in vivo applications and standard laboratory biosafety practices for in vitro work.",
    },
    {
      type: "disclaimer",
      text: "This article is intended for research purposes only. Leptin supplied as a research reagent is not for human therapeutic use. All in vivo applications require appropriate IACUC approval and compliance with applicable animal research regulations.",
    },
  ],
};
