import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "where-to-buy-petrelintide-research-guide",
  title: "Where to Buy Petrelintide for Research: Zealand Pharma Amylin Analog Sourcing Guide",
  description:
    "Petrelintide (ZP8396) is Zealand Pharma's long-acting amylin analog in Phase II development for obesity. This guide covers petrelintide's mechanism (amylin receptor agonism, CALCR/RAMP pathway), why it's not a commodity research peptide, what amylin-pathway research tools ARE available (pramlintide, rat/human amylin, CGRP fragments), COA requirements for amylinomimetic peptides, and how to design preclinical amylin axis obesity studies.",
  category: "Compound Profiles",
  readMinutes: 10,
  publishedAt: "2026-06-17",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Petrelintide (ZP8396) is a long-acting amylin receptor agonist developed by Zealand Pharma (Nasdaq: ZEAL) for obesity treatment, currently in Phase II clinical development including co-administration studies with semaglutide. Amylin (IAPP — islet amyloid polypeptide) is a 37-amino acid peptide co-secreted with insulin from pancreatic β-cells that signals satiety via the area postrema and suppresses glucagon secretion. Petrelintide represents a major advance in amylin pharmacology: unlike pramlintide (the only approved amylin mimetic, requiring 3× daily injection due to its short half-life), petrelintide is engineered for once-weekly subcutaneous dosing — making it a viable partner for once-weekly GLP-1 agonists like semaglutide. If you're searching 'where to buy petrelintide for research,' this guide provides the answer and maps what amylin-pathway research tools are legitimately available."
    },
    {
      type: "heading",
      text: "Petrelintide: Mechanism and Development Context"
    },
    {
      type: "paragraph",
      text: "Amylin signals through a heterodimeric receptor complex composed of the calcitonin receptor (CALCR) combined with receptor activity-modifying proteins (RAMP1, RAMP2, RAMP3). The CALCR/RAMP1 complex = amylin receptor 1 (AMY1); CALCR/RAMP3 = AMY3. Amylin binding activates this complex in the area postrema (a circumventricular organ lacking a blood-brain barrier), driving cAMP/PKA signaling that reduces food intake, slows gastric emptying, and suppresses postprandial glucagon. Native human amylin (hIAPP) has two major pharmacological liabilities: (1) it self-aggregates into amyloid fibrils at therapeutic concentrations — a key contributor to β-cell toxicity in T2D — and (2) its plasma half-life is ~15–20 minutes."
    },
    {
      type: "paragraph",
      text: "Zealand's engineering approach to petrelintide addresses both: the sequence is based on rat/salmon amylin (which unlike human IAPP does not aggregate — the HHSSS region critical for human amylin fibrillation is absent in rat amylin), with additional modifications to extend half-life through protease resistance, reduced renal clearance, and potentially fatty acid conjugation for albumin binding. Published Phase II data from Zealand (H1 2026) showed approximately 9-11% weight loss at 26 weeks with petrelintide monotherapy — comparable to semaglutide 1.0 mg — and combination with semaglutide is expected to show substantially higher weight loss consistent with the complementary mechanisms (GLP-1R + amylin receptor)."
    },
    {
      type: "table",
      headers: ["Feature", "Human Amylin (hIAPP)", "Pramlintide", "Cagrilintide", "Petrelintide (ZP8396)"],
      rows: [
        ["Half-life", "~15-20 min", "~48 min", "~7 days (once-weekly)", "~7 days (once-weekly, estimated)"],
        ["Aggregation", "High (amyloid-forming)", "Low (Pro substitutions)", "Low (novel sequence)", "Low (rat/salmon-based)"],
        ["Dosing frequency", "N/A (endogenous)", "3× daily SC", "Once weekly SC", "Once weekly SC"],
        ["Receptor selectivity", "AMY1/AMY3/CGRP-R", "AMY1/AMY3 (similar to native)", "AMY1/AMY3 (potent)", "AMY1/AMY3 (potent)"],
        ["Approval status", "Endogenous", "FDA-approved (T1D/T2D adjunct)", "Phase III (in CagriSema)", "Phase II monotherapy + combo"],
        ["Company", "Endogenous", "AstraZeneca (Symlin)", "Novo Nordisk", "Zealand Pharma"]
      ]
    },
    {
      type: "heading",
      text: "Why Petrelintide Is Not Available From Research Peptide Suppliers"
    },
    {
      type: "paragraph",
      text: "Petrelintide is Zealand Pharma's proprietary clinical compound. The exact sequence has not been published in the peer-reviewed literature as of the writing of this article (Zealand protects the full structure as a trade secret during clinical development). Without a disclosed sequence, no third-party supplier can synthesize the authentic compound. Moreover, even if the sequence were known, petrelintide likely incorporates proprietary fatty acid conjugation or unnatural amino acid substitutions that are not reproducible via standard SPPS without specific synthesis protocols."
    },
    {
      type: "paragraph",
      text: "Any supplier listing 'petrelintide' for sale is selling an unknown compound — potentially pramlintide (a structurally similar amylin mimetic that is defined and available), rat amylin, or a fabricated product. For legitimate amylin axis research, the compounds described below provide full pharmacological coverage of the pathway with published, verified sequences and COA standards."
    },
    {
      type: "heading",
      text: "Amylin-Pathway Research Compounds Available for Preclinical Research"
    },
    {
      type: "paragraph",
      text: "The amylin research field is supported by several well-characterized compounds with published preclinical protocols. Understanding the receptor pharmacology of each helps select the right tool for a given research question."
    },
    {
      type: "table",
      headers: ["Compound", "Receptor Activity", "Half-Life", "Key Research Use", "Availability"],
      rows: [
        ["Rat amylin (rIAPP)", "AMY1/AMY3 full agonist; non-aggregating", "~15-20 min (same as hIAPP; no fatty acid conjugation)", "Area postrema activation, satiety circuits, food intake suppression in DIO rodents; gold standard amylin receptor probe for functional studies", "Research peptide suppliers (SPPS; MW ~3924 Da); lower synthesis difficulty than hIAPP"],
        ["Human amylin (hIAPP)", "AMY1/AMY3/CGRP-R full agonist; aggregation-prone", "~15-20 min", "Amyloid aggregation research, β-cell toxicity models, T2D IAPP pathology studies", "Research peptide suppliers with aggregation-handling protocols; must specify monomeric preparation"],
        ["Pramlintide (Symlin analog)", "AMY1/AMY3 agonist; 3× Pro substitution vs. hIAPP", "~48 min", "Postprandial glucagon suppression, gastric emptying research, T2D adjunct mechanism studies; established pharmacokinetics available", "Research peptide suppliers; sequence is public (25-28-29 Pro substitutions); FDA-approved drug = defined structure"],
        ["AC187 (CGRP 8-37 analog)", "AMY1/AMY3 antagonist; competes with amylin at CALCR", "~30-60 min", "Pharmacological blockade control; confirms amylin receptor specificity in experimental designs", "Some specialized research peptide suppliers; academic synthesis reported"],
        ["CGRP (α-CGRP 1-37)", "CGRP-R > AMY1/AMY3; vasodilator", "~15-25 min", "Cardiovascular amylin axis research; distinguishes AMY vs. CGRP receptor contributions to vasoactive effects", "Research peptide suppliers (widely available; 37 aa, SPPS-synthesizable)"],
        ["Salmon calcitonin (sCT)", "CALCR direct agonist; no RAMP requirement", "~60-90 min", "CALCR pathway activation without RAMP-dependent selectivity; bone resorption research; appetite suppression (CNS calcitonin receptors)", "Research peptide suppliers; FDA-approved drug structure (Miacalcin analogue)"]
      ]
    },
    {
      type: "heading",
      text: "COA Requirements for Amylinomimetic Peptides"
    },
    {
      type: "paragraph",
      text: "Amylin analogs present specific quality challenges. Human amylin (hIAPP) and to a lesser extent rat amylin are highly aggregation-prone — and aggregated amylin is biologically inactive at the receptor while potentially cytotoxic. Standard HPLC purity measurements report on monomeric peptide but do not detect early oligomers. When ordering amylin pathway peptides, require:"
    },
    {
      type: "list",
      items: [
        "HPLC purity: RP-HPLC ≥98% by area (C18 column; water/acetonitrile/0.1% TFA gradient). The chromatogram should show a single dominant peak with no trailing aggregation shoulder.",
        "Mass spectrometry: ESI-MS or MALDI-TOF confirming molecular weight. Human amylin MW = 3903.3 Da; rat amylin MW = 3924.4 Da; pramlintide MW = 3949.4 Da. Verify [M+H]⁺, [M+2H]²⁺, [M+3H]³⁺ charge states — all should be present and consistent.",
        "Disulfide bond confirmation: Human and rat amylin have a Cys2-Cys7 disulfide. Request Ellman's reagent (DTNB) or Raman/NMR confirmation of disulfide integrity. Free thiols = uncyclized inactive form.",
        "Aggregation assessment: ThT (Thioflavin T) fluorescence assay on freshly dissolved peptide. Request that the supplier provide pre-dissolution ThT data showing <10× background fluorescence. For hIAPP, insist on freshly synthesized lots — stored mIAPP dissolves into pre-aggregated state.",
        "Endotoxin: LAL assay <1.0 EU/µg. Area postrema (the key amylin target organ) lacks full blood-brain barrier — intracerebroventricular or systemic IV administration routes heighten endotoxin risk.",
        "Certificate of dissolution: For amyloid-prone peptides, request supplier protocol for reconstitution — typically DMSO pre-dissolution (2-5% v/v) followed by aqueous dilution to target concentration. This reduces aggregation artifacts in bioactivity assays."
      ]
    },
    {
      type: "heading",
      text: "Designing a Preclinical Amylin Axis Obesity Study"
    },
    {
      type: "paragraph",
      text: "The most translatable preclinical model for petrelintide-relevant research is a DIO mouse or rat model with rat amylin or pramlintide as the primary compound, supplemented with GLP-1 co-administration to mimic the combination being evaluated clinically. Here is a validated study design:"
    },
    {
      type: "list",
      items: [
        "Model: DIO C57BL/6J male mice (60% HFD × 14 weeks; body weight ≥40g). Sprague-Dawley DIO rats are preferred if gastric emptying measurements are planned (larger body allows gavage methodology).",
        "Amylin arm: Rat amylin (rIAPP) at 5 µg/kg SC twice daily × 28 days (published DIO mouse dose). Prepare freshly dissolved in 10 mM sodium acetate buffer pH 4.0 + 0.9% NaCl; inject within 30 min of dissolution. Use pre-chilled (4°C) solutions to minimize aggregation.",
        "Combination arm: Rat amylin 5 µg/kg SC BID + semaglutide 40 nmol/kg SC once weekly. This models the GLP-1/amylin combination mechanism relevant to petrelintide + semaglutide clinical development.",
        "Control arm: Include AC187 (amylin receptor antagonist, 300 µg/kg SC prior to amylin dosing) to confirm AMY receptor specificity; vehicle SC BID; semaglutide monotherapy arm.",
        "Primary endpoints: Body weight daily, food intake by metabolic cage (CLAMS), body composition EchoMRI at baseline/day 14/day 28, gastric emptying (acetaminophen absorption assay at study end — oral acetaminophen 0.1 g/kg, plasma at 15/30/60 min), and postprandial glucagon by ELISA (at day 28, 30-min post-IP glucose 2 g/kg).",
        "CNS endpoint: c-Fos IHC in area postrema (AP) and nucleus tractus solitarius (NTS) at 1-hour post-dose (terminal, n=3/group). Confirms central amylin receptor engagement.",
        "Statistical: Two-way ANOVA for time × treatment effects on body weight and food intake. Tukey's post-hoc for pairwise comparisons. n=8-10/group based on power analysis (effect size d=1.0 from published rat amylin DIO data)."
      ]
    },
    {
      type: "heading",
      text: "The Petrelintide + GLP-1 Combination: Why It Matters"
    },
    {
      type: "paragraph",
      text: "The scientific rationale for amylin + GLP-1 combinations is compelling and supported by preclinical and clinical data. GLP-1 receptors are expressed primarily in the nodose ganglion, hypothalamic nuclei (ARC, PVN, DMH), and brainstem NTS. Amylin receptors (AMY1/AMY3) are densely expressed in the area postrema and NTS — partially overlapping but not identical distributions. The combination activates complementary satiety circuits: GLP-1R drives hypothalamic NPY/AgRP suppression and increases insulin secretion, while amylin receptor activation suppresses glucagon, slows gastric emptying via vagal mechanisms, and drives area postrema-mediated satiety signals. Published clinical data for cagrilintide + semaglutide (CagriSema) showed 22.7% weight loss at 68 weeks vs. ~17% for semaglutide alone — a 33% additive effect. Petrelintide is engineered as a long-acting competitor in this same mechanistic space."
    },
    {
      type: "heading",
      text: "Summary"
    },
    {
      type: "paragraph",
      text: "Petrelintide (ZP8396) is a clinical-stage Zealand Pharma compound with an undisclosed proprietary sequence and is not available from research peptide suppliers. For preclinical amylin axis research, use rat amylin (rIAPP — the primary non-aggregating AMY1/AMY3 agonist for functional studies), pramlintide (defined sequence, FDA-approved structure, 48-min half-life), or salmon calcitonin (CALCR direct agonist, longer half-life) from verified research suppliers. For combination studies modeling GLP-1 + amylin, combine rat amylin + semaglutide following published DIO rodent protocols. Require HPLC ≥98%, ESI-MS identity, disulfide confirmation, ThT aggregation testing, and LAL endotoxin ≤1.0 EU/µg from all amylinomimetic peptide suppliers. Nexphoria meets all COA standards for amylin-pathway research compounds."
    },
    {
      type: "disclaimer",
      text: "This article is intended for licensed researchers and academic scientists. Nexphoria compounds are for in vitro and preclinical research use only. Not for human consumption. Petrelintide (ZP8396) is an investigational compound under active clinical development by Zealand Pharma; it has not received FDA approval for any indication as of the publication date of this article."
    }
  ]
};
