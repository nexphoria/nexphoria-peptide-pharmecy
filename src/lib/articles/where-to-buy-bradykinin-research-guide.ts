import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "where-to-buy-bradykinin-research-guide",
  title: "Where to Buy Bradykinin for Research: A Sourcing Guide",
  description:
    "Bradykinin and kallidin research sourcing: understanding B1 vs. B2 receptor pharmacology, des-Arg metabolite distinctions, purity requirements for pain and cardiovascular studies, and what a complete bradykinin COA must document.",
  category: "Quality & Testing",
  readMinutes: 8,
  publishedAt: "2026-06-11",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Bradykinin is a 9-amino acid vasoactive peptide (Arg-Pro-Pro-Gly-Phe-Ser-Pro-Phe-Arg) generated from kininogen precursors by the serine protease kallikrein. It is a principal mediator of inflammation, pain sensitization, vascular permeability, and vasodilation, acting through two G-protein coupled receptor subtypes — B1 (BDKRB1) and B2 (BDKRB2) — with substantially different pharmacology and expression patterns. Bradykinin and its downstream metabolite des-Arg9-bradykinin are widely used as research tools in cardiovascular, pain, inflammatory, and pulmonary biology models.",
    },
    {
      type: "paragraph",
      text: "Research use of bradykinin spans cardiac ischemia, endothelial function, nociceptor sensitization, ACE inhibitor mechanism studies, and hereditary angioedema models. Sourcing research-grade bradykinin requires understanding the critical distinctions between native bradykinin and its B1-selective metabolite, receptor subtype pharmacology, and stability requirements for a peptide that is rapidly inactivated in biological systems.",
    },
    {
      type: "heading",
      text: "Bradykinin vs. des-Arg9-Bradykinin vs. Kallidin: Non-Interchangeable Compounds",
    },
    {
      type: "paragraph",
      text: "Three structurally related kinins are frequently confused in research sourcing contexts:",
    },
    {
      type: "list",
      items: [
        "Bradykinin (BK): 9-residue Arg-Pro-Pro-Gly-Phe-Ser-Pro-Phe-Arg; MW ~1,060 Da; primarily activates B2 receptors (constitutively expressed on endothelium, neurons, smooth muscle); mediates acute vascular and pain responses",
        "des-Arg9-Bradykinin (DABK): C-terminal Arg removed by carboxypeptidase N or M; 8-residue peptide; MW ~904 Da; selective B1 receptor agonist (B1 is induced/upregulated by inflammation, not constitutively expressed); mediates chronic inflammatory pain and post-injury vasodilation",
        "Kallidin (Lys-bradykinin): N-terminally extended 10-residue kinin generated from low-molecular-weight kininogen; MW ~1,188 Da; activates both B1 and B2 but with kinetics differing from BK; used in tissue kallikrein pathway studies",
        "des-Arg10-Kallidin: B1-selective agonist derived from kallidin; relevant for tissue kallikrein-specific B1 activation studies distinct from plasma kallikrein pathways",
      ],
    },
    {
      type: "callout",
      text: "These four compounds are not interchangeable. B2 receptor pharmacology studies require intact bradykinin (with C-terminal Arg intact). B1 receptor studies require des-Arg9-bradykinin. A vendor who cannot confirm which form is in the vial — or who supplies degraded bradykinin (partially converted to des-Arg9-BK during storage) — will produce invalid receptor selectivity data.",
    },
    {
      type: "heading",
      text: "What a Complete Bradykinin COA Must Include",
    },
    {
      type: "paragraph",
      text: "A certificate of analysis for research-grade bradykinin should document all of the following, tied to a lot number matching the product vial:",
    },
    {
      type: "list",
      items: [
        "Lot number matching the vial label",
        "Compound identity: bradykinin (CAS 58-82-2) — distinguished from des-Arg9-bradykinin (CAS 31980-43-5) and kallidin (CAS 1701-02-6)",
        "Molecular weight confirmation: bradykinin ~1,060.2 Da (free base); ~1,101.2 Da as trifluoroacetate salt",
        "HPLC purity: ≥98% with chromatogram — retention time, peak area, UV at 220 nm, gradient conditions; identify any des-Arg9 degradation peak (elutes separately from intact BK on RP-HPLC)",
        "Mass spectrometry: ESI-MS confirming [M+H]⁺ = 1,061.2 Da for intact bradykinin; distinguishing from des-Arg9-BK [M+H]⁺ = 905.0 Da",
        "Counter-ion specification: TFA vs. acetate salt affects biological activity in some assay systems; acetate salt preferred for in vivo use",
        "Endotoxin (LAL) testing ≤1 EU/mg for in vivo cardiovascular and pain model use",
        "Peptide content by amino acid analysis or nitrogen combustion",
        "Third-party laboratory name and verifiable contact information",
      ],
    },
    {
      type: "heading",
      text: "Active Research Domains",
    },
    {
      type: "paragraph",
      text: "Bradykinin is a research tool across multiple high-activity areas:",
    },
    {
      type: "list",
      items: [
        "Pain and nociception: bradykinin activates and sensitizes TRPV1, TRPA1, and TTX-resistant sodium channels on primary afferent nociceptors via B2 receptor-PLC-PKC signaling; ICV and intraplantar injection models are well-established for studying central and peripheral sensitization",
        "Cardiovascular and endothelial function: bradykinin is a potent endothelium-dependent vasodilator via B2 receptor-eNOS activation; used to probe NO-dependent vasodilation, endothelial function assessment, and ACE inhibitor mechanism studies (ACE is a principal kinin-degrading enzyme — ACE inhibitor effects on BK levels are studied in cardiovascular models)",
        "ACE inhibitor research: ACE inhibitors increase bradykinin levels by reducing kinin degradation; bradykinin administration is used as a positive control and mechanistic tool in ACE inhibitor cardiovascular studies",
        "Hereditary angioedema (HAE) models: HAE type III is associated with mutations in the FXII-kallikrein-kinin pathway; bradykinin overproduction mediates the edematous attacks; rat and mouse HAE models use exogenous BK to characterize attack pharmacology and test B2 receptor antagonists (icatibant)",
        "Inflammatory permeability: bradykinin is a primary mediator of vascular hyperpermeability in acute inflammation; Miles assay and other permeability models use intradermal bradykinin injection to establish permeability baselines",
        "Pulmonary research: bradykinin causes bronchoconstriction in some species (guinea pig, human); inhalation and IV challenge models are used to study airway hyperresponsiveness and the contribution of kinins to asthma-related inflammation",
        "Renal function: B2 receptors on renal tubules modulate water and sodium reabsorption; bradykinin is used in isolated perfused kidney models and in vivo renal function assays",
      ],
    },
    {
      type: "heading",
      text: "Storage and Stability",
    },
    {
      type: "paragraph",
      text: "Bradykinin is unstable in biological fluids due to rapid inactivation by kininases (ACE, carboxypeptidase N/M) — relevant for in vivo dose design, not laboratory storage. For storage:",
    },
    {
      type: "list",
      items: [
        "Lyophilized powder: store at -20°C in sealed vials under inert atmosphere if possible; stable 18–24 months",
        "Reconstitute in 0.1% acetic acid or sterile 0.9% saline; avoid phosphate-buffered solutions at neutral pH for long-term storage (promotes aggregation at neutral-basic pH)",
        "Do not reconstitute in biological fluids — kininases in serum and plasma will degrade bradykinin within minutes at 37°C",
        "Reconstituted stock (1 mg/mL in 0.1% acetic acid): stable 7–10 days at 4°C; aliquot and freeze at -80°C for longer periods",
        "Peptide adsorption: bradykinin adsorbs to polypropylene and glass at concentrations below 1 µg/mL; add 0.1% BSA to prevent adsorption in dilute working solutions",
        "TFA salt form is standard from most peptide synthesis; TFA can interfere with some in vivo cardiovascular assays — exchange to acetate form by lyophilizing from 0.1% acetic acid if TFA-free material is required",
      ],
    },
    {
      type: "heading",
      text: "Dosing Context for Research Protocol Design",
    },
    {
      type: "paragraph",
      text: "Bradykinin doses in published preclinical models vary widely by route and endpoint. Intraplantar injection in mouse/rat pain models: 0.1–10 nmol in 25–50 µL. Intradermal injection for permeability assays: 10–100 ng in 50 µL. Intravenous bolus for vasodilation studies in rats: 0.1–10 µg/kg. Isolated aortic ring pharmacology: 10 nM–10 µM concentration-response curves for B2 receptor characterization. Researchers designing bradykinin challenge protocols must account for the peptide's very short in vivo half-life (~15–30 seconds in plasma); infusion protocols are standard for sustained vasodilatory or pain sensitization endpoints. Kininase inhibitors (thiorphan, captopril) are sometimes co-administered to extend in vivo activity.",
    },
    {
      type: "heading",
      text: "Why Nexphoria for Bradykinin Research",
    },
    {
      type: "paragraph",
      text: "Nexphoria supplies bradykinin with lot-specific COAs that clearly document intact BK (C-terminal Arg confirmed by MS), distinguish it from des-Arg9-bradykinin contamination, confirm HPLC purity (≥98%), specify salt form (TFA or acetate as ordered), and include endotoxin testing for in vivo cardiovascular protocols. Every lot COA is publicly posted for independent verification. Cold-chain shipping is standard on every order.",
    },
    {
      type: "callout",
      text: "For research use only. Bradykinin is a research-only compound. All institutional and regulatory requirements for vasoactive peptide research must be met prior to use.",
    },
    {
      type: "divider",
    },
    {
      type: "disclaimer",
      text: "This article is intended for researchers and scientific professionals. All compounds referenced are for laboratory and preclinical research purposes only. Not for human consumption. Nexphoria does not provide medical advice.",
    },
  ],
};
