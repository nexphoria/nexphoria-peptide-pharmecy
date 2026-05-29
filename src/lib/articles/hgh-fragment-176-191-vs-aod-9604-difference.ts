import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "hgh-fragment-176-191-vs-aod-9604-difference",
  title: "HGH Fragment 176-191 vs AOD-9604: What's the Difference?",
  description:
    "A research clarification on HGH Fragment 176-191 and AOD-9604 — naming conventions, structural differences, lipolytic mechanism, divergent research data, and which designation to use in your protocol.",
  category: "Compound Profiles",
  readMinutes: 7,
  publishedAt: "2026-05-29",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "If you have spent any time in the peptide research literature, you have almost certainly encountered both 'HGH Fragment 176-191' and 'AOD-9604' used to describe what appears to be the same compound. The overlap causes genuine confusion — and for good reason. The two names refer to closely related but not identical sequences, and understanding the distinction matters for experimental design, literature comparison, and sourcing specificity.",
    },
    {
      type: "paragraph",
      text: "This article clarifies the naming conventions, structural differences, mechanism of action, divergent research data, and which compound is most appropriate for common research applications.",
    },
    {
      type: "heading",
      text: "The Naming Problem",
    },
    {
      type: "paragraph",
      text: "The confusion originates from how the compound was developed and marketed. In the early 1990s, researchers at Monash University in Australia — led by Professor Frank Ng — began work on isolating the lipolytic properties of human growth hormone (hGH) from its anabolic and diabetogenic effects. The goal was a fragment that retained fat-mobilizing activity without the side effects of full-length GH therapy.",
    },
    {
      type: "paragraph",
      text: "The native hGH sequence contains amino acids 176–191 at its C-terminus that appeared responsible for lipolytic activity in early structure-activity studies. This native fragment became known colloquially as 'HGH Fragment 176-191' in the research community. When the Monash group developed a modified version for clinical development — adding an N-terminal tyrosine residue to the sequence starting at position 177 of hGH (creating Tyr-hGH177–191) — it was named Anti-Obesity Drug 9604, or AOD-9604.",
    },
    {
      type: "paragraph",
      text: "In practice, the term 'HGH Fragment 176-191' is used loosely in supplier catalogs and informal research contexts to refer to both sequences interchangeably. Strictly speaking, however, they differ by one residue: position and sequence number.",
    },
    {
      type: "heading",
      text: "Structural Comparison",
    },
    {
      type: "list",
      items: [
        "HGH Fragment 176-191 (native): amino acids 176–191 of hGH — Tyr-Leu-Arg-Ile-Val-Gln-Cys-Arg-Ser-Val-Glu-Gly-Ser-Cys-Gly-Phe (16 amino acids; Tyr176 is the native N-terminus of this segment)",
        "AOD-9604 (Tyr-hGH177-191): a synthetic analog beginning at position 177 of hGH with an added N-terminal tyrosine — effectively Tyr-[hGH177-191], making it 16 amino acids as well, but with an extra Tyr prepended to the native 176-191 start site",
        "Molecular weight: HGH Fragment 176-191 ≈ 1817.1 g/mol; AOD-9604 ≈ 1815.1 g/mol (the minor MW difference reflects the Leu vs Tyr at position 176 in the native sequence)",
        "CAS number: AOD-9604 is listed under CAS 221231-10-3; HGH Fragment 176-191 native sequence is sometimes listed separately under CAS 66004-57-7",
        "Disulfide bridge: Both contain a Cys-Cys disulfide bond between positions 7 and 14 in the 16-aa sequence, which constrains the peptide into a loop structure critical for activity",
      ],
    },
    {
      type: "paragraph",
      text: "In the published literature, the majority of well-designed pharmacological studies — especially those with clinical data — used AOD-9604 (the Monash-developed synthetic analog). When papers cite 'HGH Fragment 176-191' as the experimental compound, it is almost always synonymous with the Tyr-modified sequence in practice, because that is what was synthesized and characterized commercially.",
    },
    {
      type: "heading",
      text: "Mechanism of Action",
    },
    {
      type: "paragraph",
      text: "Both HGH Fragment 176-191 and AOD-9604 share the same proposed mechanism of action, centered on stimulating lipolysis in adipose tissue through a pathway independent of the growth hormone receptor (GHR). This is the defining feature that separates them from full-length hGH.",
    },
    {
      type: "subheading",
      text: "Beta-3 Adrenergic Receptor Activation",
    },
    {
      type: "paragraph",
      text: "The leading mechanistic hypothesis is that AOD-9604 activates the beta-3 adrenergic receptor (β3-AR), which is selectively expressed in adipose tissue and plays a key role in the 'fight or flight' lipolytic response. β3-AR activation leads to cAMP elevation, PKA activation, and phosphorylation of hormone-sensitive lipase (HSL) — the enzyme that hydrolyzes stored triglycerides into free fatty acids and glycerol for energy use.",
    },
    {
      type: "paragraph",
      text: "Critically, this pathway does not require GHR binding, which explains why AOD-9604 lacks the anabolic, IGF-1 elevating, and insulin-resistance effects of full-length GH. Clamp studies and IGF-1 assay data consistently show no significant elevation of circulating IGF-1 at research doses — a key differentiator that makes the compound useful as a selective lipolysis probe.",
    },
    {
      type: "subheading",
      text: "Adipogenesis Inhibition",
    },
    {
      type: "paragraph",
      text: "Beyond stimulating fat breakdown, AOD-9604 has also been shown to inhibit adipogenesis — the conversion of preadipocytes into mature fat cells. This appears to occur through downregulation of PPAR-γ and C/EBPα, the master transcription factors that drive adipocyte differentiation. In cell culture models, AOD-9604 treatment reduces lipid accumulation in differentiating 3T3-L1 preadipocytes at physiologically relevant concentrations.",
    },
    {
      type: "heading",
      text: "Key Research Data",
    },
    {
      type: "subheading",
      text: "Diet-Induced Obesity (DIO) Rodent Studies",
    },
    {
      type: "paragraph",
      text: "Heffernan et al. published foundational data in 1999 using DIO mouse and obese Zucker rat models treated with subcutaneous AOD-9604. The results showed significant reductions in body fat without changes in lean mass or blood glucose — consistent with a selective lipolytic mechanism. An important observation from this work was dose-response non-linearity: intermediate doses (5–25 nmol/kg) produced greater fat loss than either lower or higher doses, suggesting receptor saturation or counter-regulatory mechanisms at high concentrations. This non-linear dose response has been replicated in subsequent rodent studies and is an important consideration when designing preclinical protocols.",
    },
    {
      type: "paragraph",
      text: "Additional studies using DEXA body composition analysis confirmed that fat mass reduction was the primary outcome, with no significant effect on bone mineral density or lean muscle mass — further distinguishing AOD-9604 from full-length GH.",
    },
    {
      type: "subheading",
      text: "Oral Bioavailability and the METABOLICA Trial",
    },
    {
      type: "paragraph",
      text: "One of the more unusual aspects of AOD-9604's development history is that it was pursued as an oral pharmaceutical — despite being a peptide, which are typically degraded in the GI tract before reaching systemic circulation. The METABOLICA Phase 2b clinical trial tested oral AOD-9604 in overweight and obese adults at doses ranging from 1 mg to 30 mg per day over 24 weeks.",
    },
    {
      type: "paragraph",
      text: "Results were disappointing compared to preclinical predictions: statistically significant weight loss was observed at some doses but effect sizes were modest and the dose-response relationship was not consistent. The oral route achieved far lower systemic exposure than subcutaneous injection in animal models, and inter-subject variability in absorption was high. The compound did not advance past Phase 2 clinical development for obesity.",
    },
    {
      type: "paragraph",
      text: "This translational gap — strong DIO rodent data, moderate clinical outcomes — is a common theme in metabolic peptide research and underscores the importance of rigorous preclinical characterization before extrapolating to human effect sizes.",
    },
    {
      type: "heading",
      text: "Divergent Data: Where the Compounds Differ",
    },
    {
      type: "paragraph",
      text: "While HGH Fragment 176-191 and AOD-9604 are functionally similar, there are areas where published data diverges, largely due to different synthesis batches, purity standards, and route/dose variations across labs:",
    },
    {
      type: "list",
      items: [
        "Potency: Some studies using the native 176-191 sequence (without added N-terminal Tyr) report slightly lower potency in β3-AR binding assays versus AOD-9604, though this comparison is complicated by variable purity across reagent-grade sources",
        "IGF-1 elevation: A small number of studies using 'HGH Fragment 176-191' sourced from uncharacterized vendors reported minor IGF-1 elevations — likely attributable to contamination with GH-active fragments during synthesis, not an inherent property of the peptide",
        "Cartilage/joint research: Some researchers have explored hGH fragment peptides in OA and cartilage models; AOD-9604 specifically received FDA GRAS (Generally Recognized As Safe) status for food use in 2014 and was later studied in osteoarthritis models (AODP/Kensey Nash data) — a research direction not pursued with the native 176-191 sequence",
        "Oral vs SC activity: Virtually all oral bioavailability data exists for AOD-9604 from the METABOLICA trial program; the native 176-191 sequence has no comparable oral human data",
      ],
    },
    {
      type: "heading",
      text: "Which to Use and When",
    },
    {
      type: "paragraph",
      text: "For most standard lipolytic mechanism research in rodent models, either sequence will produce comparable results because the structural difference is minor and the disulfide-constrained loop structure — critical for activity — is identical in both. The practical guidance is:",
    },
    {
      type: "list",
      items: [
        "If replicating or comparing to METABOLICA, Heffernan 1999, or other published AOD-9604 studies: use AOD-9604 (Tyr-hGH177-191, CAS 221231-10-3) to ensure mechanistic consistency",
        "If following literature that cites 'HGH Fragment 176-191': verify the CAS number and sequence your supplier provides — most vendors supply AOD-9604 under the 176-191 name",
        "For β3-AR binding studies or receptor selectivity experiments: confirm sequence by LC-MS before use regardless of supplier labeling, as the two differ in one amino acid position",
        "For IGF-1 independence verification (a common research control): always run IGF-1 ELISA alongside GH secretagogue comparison arms; AOD-9604 should show no significant IGF-1 elevation at standard doses (5–50 nmol/kg SC in rodents)",
        "Avoid oral route if quantitative systemic exposure is required: subcutaneous delivery provides predictable PK; oral bioavailability is highly variable",
      ],
    },
    {
      type: "heading",
      text: "Reconstitution and Storage",
    },
    {
      type: "paragraph",
      text: "Both sequences are water-soluble at physiological pH. Standard reconstitution procedure:",
    },
    {
      type: "list",
      items: [
        "Reconstitute in bacteriostatic water (0.9% benzyl alcohol) for multi-use vials; sterile water for single-use",
        "Target concentration: 1–2 mg/mL for standard rodent dosing; lower concentrations acceptable for cell culture work",
        "Inject BAC water gently down the vial wall; do not vortex — the disulfide bridge makes this peptide somewhat aggregation-prone at high shear",
        "Swirl gently until clear; solution should be colorless to slightly opalescent",
        "Do not freeze reconstituted peptide — benzyl alcohol precipitates at −20°C and repeated freeze-thaw degrades the disulfide bridge",
        "Lyophilized: stable at −20°C for 24+ months; store away from light and humidity",
        "Reconstituted at 4°C: stable approximately 4–6 weeks in BAC water",
      ],
    },
    {
      type: "heading",
      text: "Research Design Considerations",
    },
    {
      type: "list",
      items: [
        "Confirm disulfide integrity: Use Ellman's reagent (DTNB) to verify free thiol absence before dosing — reduced (open) disulfide forms have significantly diminished activity",
        "Non-linear dose-response: Design with at least 3 dose arms; Heffernan 1999 data suggests the optimal SC dose in mice is approximately 10–25 nmol/kg. Do not assume linear effects",
        "β3-AR positive control: Include a known β3-AR agonist (e.g., BRL-37344 or CL-316,243) to validate the receptor pathway in your model system",
        "GHR-independence control: Run an arm with full-length hGH at growth-promoting doses; if AOD-9604 produces comparable IGF-1 elevation, suspect contamination",
        "DEXA body composition endpoints: Scale-weight alone is insufficient for detecting fat-specific changes; dual-energy X-ray absorptiometry (DEXA) or MRI body composition is strongly recommended",
        "Pair-fed controls: AOD-9604 may have mild anorectic effects at high doses in some models; pair-feeding a control arm separates caloric restriction effects from direct lipolytic effects",
      ],
    },
    {
      type: "paragraph",
      text: "In summary: HGH Fragment 176-191 and AOD-9604 are closely related research peptides with nearly identical activity profiles. The terms are used interchangeably in informal contexts, but AOD-9604 is the better-characterized form with the most robust published dataset. For rigorous research, confirm your compound's exact sequence and CAS number before designing experiments, and apply the same disulfide-integrity verification regardless of which designation your source uses.",
    },
    {
      type: "disclaimer",
      text: "For Research Use Only. Not for human consumption. Not FDA approved. All data referenced is from peer-reviewed preclinical research or published clinical trials and is provided for educational and research reference purposes only.",
    },
  ],
};
