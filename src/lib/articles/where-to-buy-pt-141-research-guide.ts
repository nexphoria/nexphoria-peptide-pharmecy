import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "where-to-buy-pt-141-research-guide",
  title: "Where to Buy PT-141 (Bremelanotide): A Researcher's Sourcing Guide",
  description:
    "PT-141 (bremelanotide) is the only melanocortin-pathway peptide with an FDA-approved therapeutic indication — making research-grade sourcing more nuanced than most compounds. This guide covers purity standards, COA requirements, and red flags in the PT-141 supply market.",
  category: "Quality & Testing",
  readMinutes: 9,
  publishedAt: "2026-06-06",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "PT-141 (bremelanotide) is a cyclic heptapeptide that acts as a non-selective agonist at melanocortin receptors MC1R, MC3R, MC4R, and MC5R. Its primary mechanism of interest in the research literature involves MC4R-mediated modulation of the hypothalamic dopaminergic pathways that regulate sexual arousal and appetitive behavior.",
    },
    {
      type: "paragraph",
      text: "In 2019, the FDA approved a nasal spray formulation of bremelanotide (Vyleesi, AMAG Pharmaceuticals) for hypoactive sexual desire disorder (HSDD) in premenopausal women — making PT-141 one of the only research peptides with a direct path to approved therapeutics. This regulatory history makes it a particularly valuable compound for studying melanocortin pharmacology and hypothalamic sexual function circuits.",
    },
    {
      type: "heading",
      text: "Structure and Synthesis Complexity",
    },
    {
      type: "paragraph",
      text: "PT-141 is a cyclic peptide (MW ~1025 Da) derived from melanotan II with the N-terminal acetyl group removed. Its cyclic disulfide bridge between Cys4 and Cys10 is critical for receptor binding — linear or incorrectly cyclized analogs will not produce the expected pharmacological activity. Synthesis of the correctly cyclized compound requires oxidative cyclization under controlled redox conditions following solid-phase synthesis of the linear precursor.",
    },
    {
      type: "paragraph",
      text: "The practical implication: a vendor supplying PT-141 with HPLC purity of 95% but without mass spec confirmation of the cyclic structure may be providing a mixture of cyclic product and linear precursor. Both species can be present in an HPLC trace without adequate resolution depending on the gradient.",
    },
    {
      type: "heading",
      text: "Minimum COA Requirements for PT-141",
    },
    {
      type: "list",
      items: [
        "HPLC purity ≥98% with full chromatogram (not just a percentage number)",
        "ESI-MS or MALDI-TOF confirming MW ~1025.2 Da and cyclization (mass shift vs. linear precursor)",
        "Lot-specific certificate from a third-party analytical laboratory",
        "LAL endotoxin test result for research applications requiring subcutaneous administration",
        "Synthesis facility country of origin disclosed",
        "Acetic acid content disclosure if applicable (lyophilized peptides often contain residual acetate from HPLC purification)",
      ],
    },
    {
      type: "callout",
      text: "Critical check: The molecular weight difference between linear PT-141 precursor and correctly cyclized bremelanotide is 2 Da (loss of two protons in disulfide bond formation). Only ESI-MS with adequate resolution can reliably distinguish these species. HPLC alone is insufficient for confirming cyclization.",
    },
    {
      type: "heading",
      text: "Storage and Reconstitution",
    },
    {
      type: "paragraph",
      text: "PT-141 is supplied as a lyophilized white powder. It should be stored at -20°C prior to reconstitution. The compound is typically reconstituted in bacteriostatic water (0.9% benzyl alcohol) for subcutaneous injection in research settings. Sterile water may also be used for immediate-use preparations.",
    },
    {
      type: "paragraph",
      text: "PT-141 solutions are stable at 4°C for approximately 4–6 weeks after reconstitution. The cyclic disulfide structure is vulnerable to reducing agents — avoid reconstitution in any buffer containing DTT, beta-mercaptoethanol, or TCEP, as these will cleave the disulfide bond and destroy biological activity.",
    },
    {
      type: "heading",
      text: "Market Red Flags",
    },
    {
      type: "list",
      items: [
        "No mass spec confirmation of correct cyclization in the COA",
        "Pricing below $40–60 per 10mg vial — synthesis of correctly cyclized bremelanotide at ≥98% HPLC cannot be done legitimately at lower margins",
        "Vendor describes PT-141 as 'melanotan II without the alpha-MSH sequence' — this is inaccurate and signals poor product knowledge",
        "Generic COA with no lot number or third-party lab name",
        "No LAL endotoxin result",
        "Claims of 'pharmaceutical' or 'clinical grade' without corresponding documentation",
        "No cold-chain shipping on orders containing PT-141 in warm months",
      ],
    },
    {
      type: "heading",
      text: "Research Landscape: What PT-141 Is Used to Study",
    },
    {
      type: "paragraph",
      text: "Beyond HSDD — the indication that drove FDA approval — PT-141 is actively studied in the following research contexts:",
    },
    {
      type: "list",
      items: [
        "MC4R pathway mapping in hypothalamic sexual function circuits (mouse and rat models)",
        "Male sexual dysfunction pathways independent of PDE5 inhibitors",
        "Melanocortin system interactions with dopamine D1/D2 signaling",
        "Potential applications in erectile dysfunction research via central (non-vascular) mechanisms",
        "Comparative melanocortin agonism studies alongside Melanotan II, alpha-MSH, and gamma-MSH",
        "Appetite and energy regulation via MC3R/MC4R crosstalk studies",
      ],
    },
    {
      type: "paragraph",
      text: "The FDA approval for Vyleesi was based on two Phase 3 randomized trials (RECONNECT studies) that enrolled 1,247 premenopausal women. Researchers studying HSDD-related circuits can reference this data for translational endpoints and response rate benchmarks.",
    },
    {
      type: "heading",
      text: "What Nexphoria Provides",
    },
    {
      type: "paragraph",
      text: "Nexphoria provides PT-141 (bremelanotide) as a lyophilized research peptide with lot-specific COA documentation including HPLC purity data, ESI-MS molecular weight confirmation verifying correct cyclization, and LAL endotoxin results. Cold-chain packaging is standard for all PT-141 shipments regardless of season.",
    },
    {
      type: "paragraph",
      text: "PT-141 supplied by Nexphoria is strictly for laboratory research purposes. It is not intended for human therapeutic use outside of properly authorized clinical settings. Researchers should consult applicable IRB and IACUC guidelines before initiating any in vivo study.",
    },
    {
      type: "disclaimer",
      text: "This article is for informational and educational purposes only. PT-141/bremelanotide as a research compound is distinct from the FDA-approved Vyleesi prescription medication. Research peptides are not approved for human use outside of authorized clinical trials. This content does not constitute medical advice.",
    },
  ],
};
