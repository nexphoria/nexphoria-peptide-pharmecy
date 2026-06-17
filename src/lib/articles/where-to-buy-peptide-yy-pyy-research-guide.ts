import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "where-to-buy-peptide-yy-pyy-research-guide",
  title: "Where to Buy Peptide YY (PYY): A Researcher's Sourcing Guide",
  description:
    "Peptide YY research sourcing: PYY 1-36 vs. PYY 3-36, NPY receptor selectivity differences, the critical role of DPP-IV cleavage in converting active forms, purity requirements for satiety and metabolic studies, and what a complete COA must document.",
  category: "Quality & Testing",
  readMinutes: 9,
  publishedAt: "2026-06-18",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Peptide YY (PYY) is a 36-amino-acid gut hormone secreted by enteroendocrine L-cells of the distal ileum, colon, and rectum in response to nutrient ingestion — particularly fats and proteins. First characterized by Tatemoto and Mutt in 1982, PYY is named for the tyrosine (Y in single-letter code) residues at both its N- and C-termini. It is a member of the neuropeptide Y (NPY) family, which includes NPY and pancreatic polypeptide (PP), and signals through a family of Y receptors (Y1–Y5).",
    },
    {
      type: "paragraph",
      text: "PYY is one of the primary postprandial satiety signals, suppressing appetite and slowing gastric motility via a 'ileal brake' mechanism. It has attracted substantial research interest in obesity pharmacology, gut-brain axis signaling, and metabolic disease. For researchers, the most important distinction in sourcing PYY is between its two principal circulating forms: PYY 1-36 and PYY 3-36.",
    },
    {
      type: "heading",
      text: "PYY 1-36 vs. PYY 3-36: The Key Distinction",
    },
    {
      type: "paragraph",
      text: "PYY is released from L-cells as PYY 1-36 (the full-length peptide). In circulation, the enzyme dipeptidyl peptidase IV (DPP-IV) rapidly cleaves the first two residues (Tyr-Pro) from the N-terminus, converting PYY 1-36 to PYY 3-36. This N-terminal truncation fundamentally changes the peptide's receptor selectivity profile:",
    },
    {
      type: "list",
      items: [
        "PYY 1-36 (full length): MW ~4,310 Da; CAS 118160-54-6; activates Y1, Y2, Y4, and Y5 receptors with relatively broad selectivity — particularly potent at Y1 and Y2",
        "PYY 3-36 (DPP-IV truncated): MW ~4,049 Da; CAS 132507-10-3; preferentially selective for Y2 receptors, with substantially reduced Y1 activity; the predominant circulating form in the postprandial state (constitutes ~40% of total plasma PYY)",
        "Physiological relevance: PYY 3-36 is the biologically dominant form during normal satiety signaling; central Y2 receptor activation in the arcuate nucleus (NPY/AgRP neurons) mediates its anorectic effect",
        "Research context determines form: Y1-dependent studies (vasoconstriction, gut motility, sympathetic nervous system) use PYY 1-36; satiety/appetite and hypothalamic circuit studies typically use PYY 3-36",
      ],
    },
    {
      type: "callout",
      text: "Sourcing alert: PYY 1-36 is rapidly converted to PYY 3-36 in biological fluids by DPP-IV. For ex vivo or in vivo studies requiring PYY 1-36 activity, DPP-IV inhibitors (sitagliptin, saxagliptin) must be included in experimental conditions to prevent conversion. Vendors should specify which form is supplied. A COA listing only 'PYY' without specifying the active fragment is insufficient for experimental design.",
    },
    {
      type: "heading",
      text: "Structural Requirements for Research-Grade PYY",
    },
    {
      type: "paragraph",
      text: "Both PYY forms share the C-terminal amide characteristic of the NPY family (-NH₂ at Arg36 position), which is required for receptor binding:",
    },
    {
      type: "list",
      items: [
        "PYY 1-36: full 36-residue sequence beginning Tyr-Pro-Ile-Lys-...-Arg-NH₂; C-terminal amide essential; MW ~4,310 Da",
        "PYY 3-36: 34-residue sequence beginning Ile-Lys-...-Arg-NH₂; C-terminal amide essential; MW ~4,049 Da",
        "Disulfide bonds: PYY does not contain disulfide bonds — a structural simplification relative to some other gut hormones, but C-terminal amidation verification remains critical",
        "Species variants: human PYY sequence is conserved across many species; rat and mouse PYY are identical to human — species-specific variants are not routinely required",
        "Receptor binding assay relevance: for Y2 selectivity studies, PYY 3-36 binding affinity should be confirmed vs. NPY to validate receptor competition paradigms",
      ],
    },
    {
      type: "heading",
      text: "What a Complete PYY COA Must Include",
    },
    {
      type: "paragraph",
      text: "A certificate of analysis for research-grade PYY 1-36 or PYY 3-36 should document all of the following, tied to the specific lot number:",
    },
    {
      type: "list",
      items: [
        "Lot number cross-referenced to product vial",
        "Identity: PYY 1-36 (CAS 118160-54-6) or PYY 3-36 (CAS 132507-10-3) — clearly specified, not just 'peptide YY'",
        "Molecular weight confirmation: ~4,310 Da for PYY 1-36 or ~4,049 Da for PYY 3-36; confirmed by ESI-MS or MALDI-TOF",
        "C-terminal amide confirmation: mass spectrometry should confirm the amidated (-NH₂) C-terminus, distinguishing it from the free-acid form (MW +1 Da difference per residue)",
        "HPLC purity: ≥98% by reverse-phase HPLC; chromatogram with retention time, peak area, UV detection at 220 nm",
        "Peptide content (%): corrected for TFA/acetate counterion content and residual water; amino acid analysis or nitrogen combustion preferred",
        "Endotoxin testing for in vivo applications: LAL assay ≤1 EU/mg",
        "Storage specification: lyophilized, -20°C; reconstitution guidance in standard research buffers (PBS, 0.1% BSA in PBS for anti-adsorption)",
      ],
    },
    {
      type: "heading",
      text: "Primary Research Applications",
    },
    {
      type: "subheading",
      text: "Satiety and Appetite Regulation (PYY 3-36)",
    },
    {
      type: "paragraph",
      text: "PYY 3-36 is central to the investigation of peripheral satiety signal → hypothalamic integration pathways. Key research applications include:",
    },
    {
      type: "list",
      items: [
        "Arcuate nucleus signaling: PYY 3-36 inhibits NPY/AgRP neurons via Y2 receptors, reducing orexigenic drive; in vivo rodent feeding studies quantify food intake suppression following peripheral administration",
        "Obesity pharmacology: PYY 3-36 + GLP-1 combinations (both L-cell products) are studied for additive anorectic effects; relevant to dual-target satiety compound research",
        "Bariatric surgery mechanisms: post-gastric bypass patients show dramatically elevated postprandial PYY 3-36; research models use exogenous PYY 3-36 to mimic the post-bypass hormonal environment",
        "Gut-brain axis: vagal afferent activation by PYY 3-36 at Y2 receptors in the nodose ganglion; studies using subdiaphragmatic vagotomy to dissect peripheral vs. central mechanisms",
        "Pancreatic function: PYY 3-36 inhibits pancreatic exocrine secretion via Y2 receptors; relevant to pancreatitis and digestive physiology models",
      ],
    },
    {
      type: "subheading",
      text: "Vascular and Autonomic Research (PYY 1-36)",
    },
    {
      type: "paragraph",
      text: "PYY 1-36's broader Y1/Y2/Y4 receptor profile makes it the appropriate form for research contexts beyond satiety signaling:",
    },
    {
      type: "list",
      items: [
        "Vasoconstriction: Y1 receptor activation by PYY 1-36 mediates vasoconstriction in peripheral vascular beds; relevant to hypertension and vascular tone research",
        "Sympathetic nervous system: Y1 receptors modulate norepinephrine release at sympathetic nerve terminals; PYY 1-36 modulates cardiovascular sympathetic tone",
        "Intestinal motility: the 'ileal brake' slowing of upper GI transit involves both Y1 and Y2 mechanisms; full-length PYY 1-36 is used to probe both receptor populations",
        "NPY family pharmacology: competitive binding studies at all five Y receptor subtypes use PYY 1-36 as a broad pan-Y-receptor radioligand or reference compound",
      ],
    },
    {
      type: "heading",
      text: "Protocol Considerations for PYY Research",
    },
    {
      type: "list",
      items: [
        "DPP-IV inhibition for PYY 1-36 studies: include DPP-IV inhibitor in plasma collection tubes (BD P800 tubes contain a DPP-IV inhibitor) and experimental buffers to prevent ex vivo conversion to PYY 3-36",
        "Plasma stability: PYY 3-36 is substantially more stable in plasma than PYY 1-36 due to resistance to DPP-IV cleavage; this influences the choice of form for in vivo experiments",
        "Anti-adsorption: PYY adsorbs to polypropylene at low concentrations; working solutions should contain 0.1% BSA or equivalent blocking protein when working below 1 μM",
        "Radioimmunoassay cross-reactivity: many commercial RIA and ELISA kits for PYY measure total PYY (1-36 + 3-36) or PYY 3-36 specifically — confirm assay specificity matches experimental form being administered",
        "Dose range in rodent studies: physiological postprandial PYY 3-36 plasma levels in rodents are approximately 50–200 pmol/L; pharmacological doses commonly used in feeding studies range 1–100 nmol/kg body weight subcutaneously",
      ],
    },
    {
      type: "heading",
      text: "Sourcing Checklist for PYY Research",
    },
    {
      type: "list",
      items: [
        "Active fragment specified: PYY 1-36 or PYY 3-36 — not just 'peptide YY'",
        "C-terminal amide confirmed in COA mass spectrometry data",
        "HPLC purity ≥98% with lot-specific chromatogram",
        "Peptide content corrected for salt and moisture (not just raw HPLC purity percentage)",
        "Endotoxin data provided if intended for in vivo administration",
        "Storage and reconstitution guidance provided — including DPP-IV inhibitor recommendations for PYY 1-36 studies",
        "Lot number matches vial label and all COA data",
      ],
    },
    {
      type: "heading",
      text: "Nexphoria Standards for PYY Research Supply",
    },
    {
      type: "paragraph",
      text: "PYY sourcing requires vendors who understand not just peptide synthesis but the downstream biology that determines which form to supply. The PYY 1-36 / PYY 3-36 distinction is not a labeling technicality — it determines receptor selectivity, plasma stability, appropriate DPP-IV inhibitor co-treatment protocols, and the correct assay for measuring experimental outcomes.",
    },
    {
      type: "paragraph",
      text: "Nexphoria supplies both PYY 1-36 and PYY 3-36 with lot-specific COA documentation including mass spectrometry identity confirmation, C-terminal amide verification, and HPLC purity data posted publicly for researcher verification. Compound form is explicitly labeled with CAS number to eliminate ambiguity in protocol documentation.",
    },
    {
      type: "paragraph",
      text: "For researchers investigating satiety pharmacology, gut-brain axis circuits, or NPY receptor pharmacology, a correctly specified and verified PYY source is the foundation of reproducible data.",
    },
  ],
};
