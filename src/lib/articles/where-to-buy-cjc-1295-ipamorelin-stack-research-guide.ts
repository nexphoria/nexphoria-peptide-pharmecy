import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "where-to-buy-cjc-1295-ipamorelin-stack-research-guide",
  title: "Where to Buy CJC-1295 + Ipamorelin Stack: Research Sourcing Guide",
  description:
    "Sourcing guide for the CJC-1295 + Ipamorelin research stack — covering the rationale for combination vs. single-compound sourcing, purity standards for each component, COA requirements, and quality markers for both GHRH analog and GHRP.",
  category: "Quality & Testing",
  readMinutes: 10,
  publishedAt: "2026-06-07",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "The CJC-1295 + Ipamorelin combination is one of the most studied growth hormone axis research protocols in peptide biology. The theoretical basis is well-established: CJC-1295 (a GHRH analog, specifically the DAC-modified version providing sustained release, or the no-DAC version mimicking natural pulsatile GHRH release) acts on GHRH receptors on pituitary somatotrophs to stimulate GH synthesis and secretion. Ipamorelin, a selective GHRP and ghrelin receptor agonist, acts on GHSR1a receptors to potentiate GH release through a complementary pathway. The dual-pathway mechanism produces a GH pulse that is quantitatively larger than either compound produces alone.",
    },
    {
      type: "paragraph",
      text: "For researchers designing GH axis studies, this combination is standard. But it also creates a specific sourcing challenge: you need two distinct peptides, both at research grade, from a supplier who can provide lot-specific COA documentation for each compound independently. This guide addresses how to evaluate sourcing for the stack as a whole and what analytical requirements apply to each component.",
    },
    {
      type: "heading",
      text: "CJC-1295 No-DAC vs. CJC-1295 with DAC: Which Are You Sourcing?",
    },
    {
      type: "paragraph",
      text: "CJC-1295 exists in two commercially significant forms, and the distinction matters for both analytical verification and study design. CJC-1295 no-DAC (also called Modified GRF 1-29 or Mod GRF 1-29) is a 29-amino-acid GHRH analog with four amino acid substitutions that increase stability relative to native GHRH(1-29). It has a relatively short half-life of approximately 30 minutes and produces a physiological GH pulse when administered.",
    },
    {
      type: "paragraph",
      text: "CJC-1295 with DAC (Drug Affinity Complex) adds a lysine-maleimide conjugation at the C-terminal that enables covalent binding to serum albumin in vivo, dramatically extending the half-life to approximately 7–8 days. This version produces sustained elevation of GH and IGF-1 rather than the natural pulsatile pattern. The two forms have fundamentally different pharmacokinetic profiles, and their combination rationale with Ipamorelin differs accordingly.",
    },
    {
      type: "paragraph",
      text: "From an analytical standpoint, the DAC-modified form has a substantially higher molecular weight (~3647 Da vs. ~3367 Da for no-DAC) and a distinct mass spectrometry fingerprint. A COA for CJC-1295 with DAC must confirm the DAC-modified molecular weight; a COA showing the no-DAC molecular weight on a product labeled 'CJC-1295 with DAC' is an identity error. Researchers should confirm which form they are receiving and verify the corresponding mass spectrometry data.",
    },
    {
      type: "heading",
      text: "Ipamorelin: What to Verify",
    },
    {
      type: "paragraph",
      text: "Ipamorelin is a synthetic pentapeptide (Aib-His-D-2-Nal-D-Phe-Lys-NH₂) with molecular weight approximately 711.86 g/mol. It is distinguished from earlier GHRPs (GHRP-2, GHRP-6, hexarelin) by its high selectivity for the GHSR1a receptor and its minimal effect on cortisol and prolactin compared to less selective GHRPs. This selectivity makes it the preferred GHRP for most GH axis research protocols when researchers want to isolate GH responses without confounding hormonal effects.",
    },
    {
      type: "paragraph",
      text: "Ipamorelin contains D-amino acids (D-2-naphthylalanine, D-phenylalanine), which is characteristic of many synthetic GHRPs and critical for their stability and receptor selectivity. Standard peptide synthesis produces a defined sequence with defined stereochemistry; poor synthesis or racemization during synthesis can produce L/D mixtures with altered receptor binding. Mass spectrometry confirms molecular weight, but does not directly confirm stereochemistry at each residue. Suppliers should confirm that synthesis protocols maintain D-amino acid configuration, and the COA should reference the intended stereochemistry.",
    },
    {
      type: "heading",
      text: "COA Requirements: Per-Compound Documentation",
    },
    {
      type: "paragraph",
      text: "For the stack, separate COA documentation is required for each compound. A combined single-page COA covering 'CJC-1295 + Ipamorelin' as a blended product is not acceptable for research use — the blend ratio cannot be verified analytically, each peptide has different stability characteristics, and dose-response analysis requires knowing precise individual concentrations. All documentation below applies independently to each component:",
    },
    {
      type: "list",
      items: [
        "HPLC purity: ≥98% by HPLC for each compound separately, with full chromatogram and peak table. The chromatographic method must adequately resolve each peptide from its related substances and degradation products",
        "Mass spectrometry: ESI-MS or MALDI-MS confirming molecular weight for each compound. CJC-1295 no-DAC: ~3367 Da; CJC-1295 with DAC: ~3647 Da; Ipamorelin: ~711.86 Da. Significant deviation from expected MW indicates wrong compound or major impurity",
        "Amino acid analysis: confirms correct peptide sequence at the composition level; particularly useful for verifying the DAC modification on CJC-1295",
        "Specific stereocenters: documentation confirming D-amino acid configuration in Ipamorelin synthesis (D-2-Nal, D-Phe residues)",
        "Residual moisture: Karl Fischer titration for each compound — accurate dosing in mg requires knowing free-base content per vial",
        "Endotoxin (LAL): required for in vivo research applications of both compounds",
        "Lot/batch numbers specific to each shipped vial with independent third-party laboratory verification",
      ],
    },
    {
      type: "heading",
      text: "Why Pre-Blended Stacks Are Problematic for Research",
    },
    {
      type: "paragraph",
      text: "Some suppliers offer pre-blended CJC-1295 + Ipamorelin in a single vial at a predetermined ratio (commonly 2mg CJC + 2mg Ipamorelin per vial). While convenient for some applications, pre-blended products create several problems for research use. Analytical verification of the blend ratio requires HPLC methods that can resolve both peptides simultaneously and quantify each independently — a more complex analytical problem than single-compound purity verification. If the method is inadequate, one component may be under-dosed or over-dosed relative to the stated label claim.",
    },
    {
      type: "paragraph",
      text: "Additionally, CJC-1295 and Ipamorelin have different stability profiles under storage conditions. Any conditions that degrade one compound preferentially alter the effective dose ratio in the blend. For research protocols requiring precise, reproducible dose ratios, separate vials with independent purity documentation and consistent dosing calculations is the more defensible approach.",
    },
    {
      type: "heading",
      text: "Storage Considerations: Two Compounds, One Cold Chain",
    },
    {
      type: "paragraph",
      text: "Both CJC-1295 and Ipamorelin should be stored lyophilized at -20°C with desiccant. Lyophilized shelf life is typically 24 months for both compounds under proper conditions. CJC-1295 with DAC may have slightly different stability considerations due to the maleimide-albumin binding moiety, and some data suggests avoiding freeze-thaw cycling of reconstituted DAC-modified material. Consult COA and supplier documentation for lot-specific stability guidance.",
    },
    {
      type: "paragraph",
      text: "Reconstituted solutions of both peptides should be refrigerated at 2–8°C and used within 7–14 days under sterile conditions, or aliquoted at -20°C to minimize freeze-thaw cycles. Reconstitute each compound separately in bacteriostatic water or sterile saline; do not pre-mix reconstituted solutions unless the study design requires it, as this eliminates flexibility in dose adjustments for each compound.",
    },
    {
      type: "heading",
      text: "Evaluating Suppliers: Stack-Specific Considerations",
    },
    {
      type: "paragraph",
      text: "Not all suppliers that offer CJC-1295 and Ipamorelin individually handle the combined sourcing request equally. Key questions for evaluating suppliers when sourcing for GH axis stack research: Does the supplier provide separate, lot-specific COAs for each compound as shipped? Are the COAs from independent third-party laboratories (not internal QC only)? Can the supplier confirm which form of CJC-1295 (no-DAC vs. with DAC) is being supplied, with mass spectrometry data confirming the appropriate molecular weight? Does the supplier offer endotoxin testing for both compounds?",
    },
    {
      type: "heading",
      text: "Red Flags When Sourcing the CJC-1295 + Ipamorelin Stack",
    },
    {
      type: "list",
      items: [
        "Pre-blended vial with a single COA that cannot separate individual compound purities — inadequate for research-grade documentation",
        "COA does not specify which CJC-1295 form (no-DAC vs. DAC) or provides mass data inconsistent with the stated form",
        "Ipamorelin COA does not confirm D-amino acid residues or references only nominal sequence without stereochemical data",
        "No HPLC chromatogram for either compound — stated purity numbers without supporting trace are unverifiable",
        "Single supplier COA without identifiable third-party laboratory — internal QC only is insufficient for research-grade supply",
        "No endotoxin data for products marketed for in vivo research",
        "Molecular weight data that does not match expected values — indicates wrong compound or structural modification",
        "No lot/batch numbers specific to shipped vials — cannot trace retest or reorder the same lot",
      ],
    },
    {
      type: "heading",
      text: "Sourcing CJC-1295 and Ipamorelin for Research",
    },
    {
      type: "paragraph",
      text: "For GH axis research requiring the CJC-1295 + Ipamorelin combination, the sourcing priority is separate, independently verified COA documentation for each compound — not the convenience of a pre-blended vial. Analytical confidence in each component independently is the foundation of reproducible dose-response data and valid research conclusions.",
    },
    {
      type: "paragraph",
      text: "Nexphoria supplies both CJC-1295 (no-DAC and with DAC forms available separately) and Ipamorelin with lot-specific COAs that include HPLC chromatograms, ESI-MS molecular weight confirmation (verifying the appropriate CJC-1295 form), amino acid analysis, LAL endotoxin results, and independent third-party laboratory verification. Cold-chain packaging applies to all orders.",
    },
    {
      type: "callout",
      text: "For Research Use Only. CJC-1295 and Ipamorelin as supplied are not intended for human use. All information on this page is provided for educational and research context only.",
    },
  ],
};
