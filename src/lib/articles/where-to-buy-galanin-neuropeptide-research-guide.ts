import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "where-to-buy-galanin-neuropeptide-research-guide",
  title: "Where to Buy Galanin: A Researcher's Sourcing Guide",
  description:
    "Galanin research sourcing: understanding human vs. porcine sequence differences, GALR1/GALR2/GALR3 receptor subtype requirements, purity standards for pain and cognitive studies, and what a complete galanin COA must document.",
  category: "Quality & Testing",
  readMinutes: 8,
  publishedAt: "2026-06-11",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Galanin is a 29-amino acid neuropeptide (30 residues in humans) widely distributed in the central and peripheral nervous systems, with expression in the hypothalamus, dorsal root ganglia, locus coeruleus, hippocampus, and gastrointestinal enteric nervous system. First isolated from porcine intestine by Tatemoto et al. in 1983, it was subsequently found to exert regulatory effects on pain transmission, cognition, feeding behavior, mood, and autonomic function. It signals through three distinct G-protein coupled receptors: GALR1, GALR2, and GALR3 — each with different tissue distributions and downstream signaling profiles.",
    },
    {
      type: "paragraph",
      text: "Galanin research has expanded considerably in recent years due to its emerging role in neurodegeneration, with galanin overexpression observed in Alzheimer's disease-affected cholinergic neurons and pain-sensitized dorsal root ganglia. Sourcing research-grade galanin requires understanding the critical sequence differences between species, receptor subtype pharmacology, and purity standards specific to peptidergic neurotransmitter research.",
    },
    {
      type: "heading",
      text: "Human vs. Porcine Galanin: Non-Interchangeable Sequences",
    },
    {
      type: "paragraph",
      text: "Human galanin (30 residues; MW ~3,158 Da) and porcine galanin (29 residues; MW ~3,047 Da) differ significantly:",
    },
    {
      type: "list",
      items: [
        "Porcine galanin: Gly-Trp-Thr-Leu-Asn-Ser-Ala-Gly-Tyr-Leu-Leu-Gly-Pro-His-Ala-Ile-Asp-Asn-His-Arg-Ser-Phe-His-Asp-Lys-Tyr-Gly-Leu-Ala-NH2 (29 residues)",
        "Human galanin: 30 residues with insertion of Pro17; several additional substitutions at positions 16, 17, 18 relative to porcine sequence; extended C-terminus in humans is not amidated in some isoforms",
        "Species cross-reactivity: porcine galanin retains activity at human GALR1 and GALR2 but with altered potency at GALR3; for mechanistic studies targeting specific receptor subtypes, confirm which species' peptide the published EC50 data references",
        "Rat galanin (29 residues) is identical to porcine galanin — relevant when comparing in vitro receptor data with in vivo rodent model data",
      ],
    },
    {
      type: "callout",
      text: "Species sequence confusion is the most common sourcing error in galanin research. A vendor who supplies porcine galanin when human galanin is specified — or who cannot confirm which sequence is in the vial — creates an immediate problem for receptor selectivity studies and any protocol referencing human GALR3 pharmacology.",
    },
    {
      type: "heading",
      text: "What a Complete Galanin COA Must Include",
    },
    {
      type: "paragraph",
      text: "A certificate of analysis for research-grade galanin should document all of the following, tied to a lot number matching the product vial:",
    },
    {
      type: "list",
      items: [
        "Lot number matching the vial label",
        "Compound identity: human galanin (CAS 103980-44-5) OR porcine galanin (CAS 88813-36-9) — clearly specified",
        "Molecular weight confirmation: human galanin ~3,157.6 Da; porcine galanin ~3,047.5 Da",
        "HPLC purity: ≥98% with chromatogram — retention time, peak area, UV at 220 nm, gradient conditions",
        "Mass spectrometry: ESI-MS or MALDI-TOF confirming correct MW — distinguishing human from porcine is the primary validation requirement",
        "C-terminal amidation confirmation: galanin is C-terminally amidated (-Ala-NH2); non-amidated forms have significantly reduced GALR1/GALR2 potency; MS fragmentation data or functional assay should confirm amide integrity",
        "Peptide content by amino acid analysis or nitrogen combustion",
        "Endotoxin (LAL) testing ≤1 EU/mg for in vivo use",
        "Third-party laboratory name and verifiable contact information",
      ],
    },
    {
      type: "heading",
      text: "Active Research Domains",
    },
    {
      type: "paragraph",
      text: "Galanin intersects several active areas of preclinical and translational research:",
    },
    {
      type: "list",
      items: [
        "Pain research: galanin in the dorsal horn and DRG modulates nociceptive transmission in a dose-dependent bidirectional manner — low-dose galanin is antinociceptive (GALR1/GALR3 mediated); high-dose is pronociceptive (GALR2 mediated); ICV and intrathecal administration models are well-established in rodents",
        "Neurodegeneration and Alzheimer's disease: galanin is overexpressed in surviving cholinergic neurons in the nucleus basalis of Meynert in AD; galanin receptor antagonists are studied as potential procognitive targets to reverse galanin-mediated suppression of ACh release",
        "Cognition and memory: galanin inhibits long-term potentiation in the hippocampus; GALR1/GALR2 antagonism improves performance in spatial memory tasks in aged rodents; relevant to cognitive aging research",
        "Feeding behavior: galanin promotes feeding via hypothalamic circuits, particularly in response to fat intake; interactions with leptin, NPY, and orexin signaling pathways are studied in obesity models",
        "Depression and anxiety: galanin/5-HT and galanin/NE interactions in the dorsal raphe and locus coeruleus are studied in stress models; GALR2 activation has anxiolytic-like effects in some paradigms",
        "GI motility: galanin is expressed in enteric neurons and modulates intestinal smooth muscle tone; relevant to IBS and gut dysmotility research models",
      ],
    },
    {
      type: "heading",
      text: "Storage and Stability",
    },
    {
      type: "list",
      items: [
        "Lyophilized powder: store at -20°C in sealed vials; stable 24 months under appropriate conditions",
        "Galanin does not contain disulfide bonds — simpler than Orexin-A in terms of redox stability; avoid strong oxidizing conditions nonetheless",
        "Reconstitute in 0.1% acetic acid or sterile saline; acidic pH (4–5) improves solubility and stability in solution",
        "Working stocks: stable 7–14 days at 4°C; aliquot and store at -80°C for longer-term use",
        "Peptide adsorption to polypropylene surfaces is significant at concentrations below 100 ng/mL; add 0.1% BSA as carrier in dilute working solutions",
        "Typical vial size: 0.5–1 mg; reconstitute at 1 mg/mL for stock concentration",
      ],
    },
    {
      type: "heading",
      text: "Dosing Context for Research Protocol Design",
    },
    {
      type: "paragraph",
      text: "Rodent in vivo doses for galanin are highly route- and endpoint-dependent. ICV administration in mice for pain studies typically ranges from 0.03–3 nmol. Intrathecal administration in rats for spinal antinociception uses 1–10 nmol. Hypothalamic microinjection for feeding studies uses 0.3–3 nmol. For in vitro receptor binding at GALR1, published Ki values for human galanin range from 0.3–2 nM depending on radioligand and assay format. Researchers should note that the bidirectional pain modulatory effects of galanin are dose-dependent — protocol design must confirm whether low-dose (antinociceptive) or higher-dose (pronociceptive) effects are the intended research target.",
    },
    {
      type: "heading",
      text: "Why Nexphoria for Galanin Research",
    },
    {
      type: "paragraph",
      text: "Nexphoria supplies galanin with lot-specific COAs that clearly specify human or porcine sequence, confirm molecular weight by mass spectrometry, verify C-terminal amidation, and document HPLC purity (≥98%). Endotoxin testing is performed for all in vivo-grade orders. Every lot COA is publicly posted for independent verification. Cold-chain shipping is standard on every order, preserving lyophilized peptide integrity from synthesis to the researcher's freezer.",
    },
    {
      type: "callout",
      text: "For research use only. Galanin is a research-only neuropeptide. All institutional and regulatory requirements for peptidergic neurotransmitter research must be met prior to use.",
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
