import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "where-to-buy-ghrelin-acylated-des-acyl-research-guide",
  title: "Where to Buy Ghrelin (Acylated & Des-Acyl): A Researcher's Sourcing Guide",
  description:
    "Ghrelin research sourcing: the critical distinction between acylated ghrelin and des-acyl ghrelin, structural requirements for GHS-R1a activity, purity standards for metabolic and appetite studies, and what a research-grade COA must document.",
  category: "Quality & Testing",
  readMinutes: 10,
  publishedAt: "2026-06-18",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Ghrelin is a 28-amino-acid peptide hormone produced primarily in the oxyntic glands of the gastric fundus. It was identified in 1999 by Kojima et al. as the endogenous ligand for the growth hormone secretagogue receptor 1a (GHS-R1a) — the same receptor activated by synthetic GHS peptides such as GHRP-6 and Hexarelin. Since its discovery, ghrelin has been recognized as the primary orexigenic (appetite-stimulating) peptide and a major regulator of the growth hormone axis, energy homeostasis, and glucose metabolism.",
    },
    {
      type: "paragraph",
      text: "For researchers, the most critical distinction in sourcing ghrelin is between its two principal circulating forms: acylated ghrelin (AG) and des-acyl ghrelin (DAG). These are not simply active and inactive forms of the same molecule — they have divergent biological activities, distinct receptor profiles, and different structural requirements. Confusing them in study design produces invalid data.",
    },
    {
      type: "heading",
      text: "Acylated Ghrelin vs. Des-Acyl Ghrelin: The Essential Distinction",
    },
    {
      type: "paragraph",
      text: "Ghrelin's unique structural feature is an n-octanoic acid modification (C8 fatty acid chain) esterified to the serine residue at position 3 (Ser3) of its amino acid sequence. This acylation is performed post-translationally by the enzyme ghrelin O-acyltransferase (GOAT). The acyl group is not decorative — it is absolutely required for binding to and activating GHS-R1a.",
    },
    {
      type: "list",
      items: [
        "Acylated ghrelin (AG): the Ser3-octanoylated form; MW ~3,371 Da; GHS-R1a agonist; stimulates GH release, appetite, and gastric motility; predominant in studies of GH axis, energy intake, and metabolic regulation",
        "Des-acyl ghrelin (DAG): lacks the Ser3 acyl modification; MW ~3,247 Da; does not activate GHS-R1a; yet demonstrates independent biological activity including anti-inflammatory effects, cardioprotection, cell survival signaling, and in some models, opposing effects on metabolism to acylated ghrelin",
        "Circulating ratio: in fasted humans, approximately 10–20% of total circulating ghrelin is acylated; the remainder is des-acyl — this means DAG is the predominant form in vivo and has major biological relevance independent of GHS-R1a",
        "Acylation stability: the octanoyl ester bond is chemically labile; hydrolysis in aqueous solution converts acylated ghrelin to des-acyl ghrelin, which is a critical handling consideration for research-grade supply",
      ],
    },
    {
      type: "callout",
      text: "Critical sourcing alert: Acylated ghrelin is chemically unstable in aqueous solution and at elevated temperatures. Improper storage converts it to des-acyl ghrelin — producing a product that cannot activate GHS-R1a. Vendors supplying acylated ghrelin must document storage under acidic conditions (pH 3–5 in acetic acid) to stabilize the octanoyl ester. A standard mass spec COA showing correct MW does not confirm intact acylation if it was run post-conversion.",
    },
    {
      type: "heading",
      text: "Structural Specifications for Research-Grade Ghrelin",
    },
    {
      type: "paragraph",
      text: "The full amino acid sequence of human ghrelin is: Gly-Ser(n-octanoyl)-Ser-Phe-Leu-Ser-Pro-Glu-His-Gln-Arg-Val-Gln-Gln-Arg-Lys-Glu-Ser-Lys-Lys-Pro-Pro-Ala-Lys-Leu-Gln-Pro-Arg-NH₂. Several structural points are relevant for sourcing:",
    },
    {
      type: "list",
      items: [
        "Molecular formula (acylated): C₁₄₉H₂₄₉N₄₇O₄₂ with the C8 acyl group; CAS 258279-04-8",
        "Molecular formula (des-acyl): C₁₄₁H₂₃₆N₄₆O₄₁; CAS 449758-36-5",
        "C-terminal amidation: human ghrelin has a C-terminal amide (-NH₂) rather than a free carboxyl — this is required for correct receptor pharmacology",
        "Species variants: rat and mouse ghrelin differ by 2 amino acids from human ghrelin (Arg11 → Gln, Glu14 → Asp in rodent vs. human); use species-matched ghrelin for in vivo rodent studies where appropriate",
        "Acylation variants: some research applications use ghrelin analogs with alternative acyl chain lengths (C6, C10, C12) to probe the chain-length requirements for GHS-R1a activation",
      ],
    },
    {
      type: "heading",
      text: "What a Complete Ghrelin COA Must Include",
    },
    {
      type: "paragraph",
      text: "A certificate of analysis for research-grade acylated or des-acyl ghrelin should document all of the following elements, with lot numbers cross-referencing the product vial:",
    },
    {
      type: "list",
      items: [
        "Lot number matching the product vial",
        "Identity confirmation: human ghrelin acylated (CAS 258279-04-8) or des-acyl ghrelin (CAS 449758-36-5), with species noted if rodent variant",
        "Molecular weight: acylated ~3,371.0 Da; des-acyl ~3,247.9 Da — confirmed by ESI-MS or MALDI-TOF",
        "Acylation confirmation for acylated ghrelin: mass spectrometry must confirm the octanoyl group specifically — a mass delta of +126 Da relative to des-acyl form confirms intact C8 acylation",
        "HPLC purity: ≥98% by reverse-phase HPLC; chromatogram must be provided with retention time, peak area percentage, gradient conditions, and UV wavelength (220 nm standard)",
        "Peptide content (%): moisture and TFA/acetate salt content corrected; determined by nitrogen combustion or amino acid analysis",
        "Storage conditions: for acylated ghrelin, lyophilized storage at -20°C; reconstitution and solution stability data in 10 mM HCl or dilute acetic acid (pH 3–4) to stabilize acyl ester",
        "Endotoxin testing: LAL assay ≤1 EU/mg for any in vivo application",
      ],
    },
    {
      type: "callout",
      text: "Red flag: A COA that lists ghrelin without specifying acylated vs. des-acyl, or provides only HPLC data without mass spectrometry confirmation of the acyl group, is insufficient for GHS-R1a activation studies. Always request mass spec data showing the +126 Da mass shift confirming the C8 octanoyl modification.",
    },
    {
      type: "heading",
      text: "Primary Research Applications",
    },
    {
      type: "subheading",
      text: "Acylated Ghrelin Applications",
    },
    {
      type: "paragraph",
      text: "GHS-R1a-dependent research requires acylated ghrelin. Primary applications include:",
    },
    {
      type: "list",
      items: [
        "GH axis stimulation: ghrelin + GHRH synergism at the pituitary; dose-response characterization of GH pulse amplitude",
        "Appetite and energy intake: hypothalamic NPY/AgRP pathway activation; rodent feeding behavior models",
        "Gastric motility: ghrelin's role as a prokinetic agent via GHS-R1a in enteric neurons; gastroparesis research models",
        "Glucose metabolism: acylated ghrelin opposes insulin secretion and peripheral glucose uptake; type 2 diabetes and obesity model applications",
        "GHS-R1a pharmacology: ligand competition assays, receptor internalization studies, biased agonism characterization",
      ],
    },
    {
      type: "subheading",
      text: "Des-Acyl Ghrelin Applications",
    },
    {
      type: "paragraph",
      text: "Des-acyl ghrelin is increasingly recognized as a biologically active molecule in its own right, operating through GHS-R1a-independent mechanisms that remain an active area of mechanistic research:",
    },
    {
      type: "list",
      items: [
        "Cardioprotection: DAG has demonstrated protective effects against ischemia-reperfusion injury in isolated heart preparations and in vivo rodent models, independent of GH/IGF-1",
        "Anti-apoptotic signaling: DAG activates PI3K/Akt survival pathways in cardiomyocytes and skeletal muscle cells",
        "Metabolic effects: paradoxically to acylated ghrelin, DAG has shown insulin-sensitizing and anti-obesity effects in some models — hypothesized through a distinct, uncharacterized receptor",
        "Cancer biology: DAG has demonstrated anti-proliferative effects in some tumor models, a mechanistically distinct application from acylated ghrelin",
        "Control conditions: DAG is the appropriate control when studying acylated ghrelin effects through GHS-R1a, confirming receptor specificity",
      ],
    },
    {
      type: "heading",
      text: "Protocol Considerations: Handling and Stability",
    },
    {
      type: "paragraph",
      text: "Ghrelin, and acylated ghrelin in particular, requires careful handling to preserve research integrity:",
    },
    {
      type: "list",
      items: [
        "Reconstitution diluent: acylated ghrelin should be reconstituted in 10 mM HCl or 1% acetic acid (not standard bacteriostatic water) to maintain ester stability; neutral or alkaline aqueous buffers accelerate deacylation",
        "Working solution stability: acylated ghrelin solutions should be prepared fresh or from aliquots stored at -80°C; avoid repeated freeze-thaw; acidified solutions at 4°C are stable for up to 48–72 hours only",
        "Adsorption: ghrelin can adsorb to polypropylene and glass surfaces at low concentrations; add 0.1% BSA to working solutions or use low-binding tubes for concentrations below 100 nM",
        "In vivo dosing: plasma ghrelin has a very short half-life (~10–30 min in rodents); continuous infusion via osmotic minipump is often used for steady-state studies rather than bolus injection",
        "Monitoring degradation: if experimental results show unexpected loss of GH-releasing activity over a study, run a parallel mass spec check — acyl-to-des-acyl conversion is the most common cause",
      ],
    },
    {
      type: "heading",
      text: "Sourcing Checklist for Ghrelin Research",
    },
    {
      type: "paragraph",
      text: "Before committing to a ghrelin source for experimental use, confirm the following:",
    },
    {
      type: "list",
      items: [
        "Form is specified: acylated (for GHS-R1a studies) vs. des-acyl (for non-GHS-R1a studies or controls) — both clearly labeled",
        "Mass spectrometry confirms correct MW and, for acylated form, presence of octanoyl group (+126 Da)",
        "HPLC purity ≥98% with chromatogram provided and lot-specific",
        "Peptide content corrected for TFA/acetate salt content (raw HPLC purity ≠ actual peptide content)",
        "Storage documentation confirms lyophilized storage at -20°C or below, with clear guidance for reconstitution in acidic media for acylated form",
        "Species variant specified if ordering rodent ghrelin vs. human ghrelin",
        "C-terminal amide confirmed (not free acid) for GHS-R1a studies",
      ],
    },
    {
      type: "heading",
      text: "Why COA Verification Matters More for Ghrelin Than Most Peptides",
    },
    {
      type: "paragraph",
      text: "Ghrelin occupies a distinct category among research peptides because its bioactivity is uniquely dependent on a post-translational modification — the Ser3 octanoylation — that is not encoded in the amino acid sequence. A peptide can be 99% pure by HPLC, have the correct amino acid sequence confirmed by MS/MS, and yet be entirely inactive at GHS-R1a if the acyl group has hydrolyzed. This makes ghrelin one of the few peptides where basic HPLC + sequence verification is genuinely insufficient to confirm research utility.",
    },
    {
      type: "paragraph",
      text: "Vendors who supply acylated ghrelin without explicit acylation-state verification in their COA documentation are providing incomplete quality assurance. Research-grade supply requires MS confirmation of the intact octanoyl group on a lot-specific basis. For studies where GHS-R1a activation is the experimental endpoint, this is non-negotiable.",
    },
    {
      type: "paragraph",
      text: "At Nexphoria, lot-specific COA documentation includes mass spectrometry with explicit confirmation of the acylation state for acylated ghrelin shipments, with public COA posting allowing researchers to verify data before use. Lyophilized product is stored under validated cold conditions, and stability data for acidic reconstitution buffers is available upon request.",
    },
    {
      type: "paragraph",
      text: "For any ghrelin-based protocol — whether studying GH secretagogue pharmacology, appetite neurobiology, or the independent cardiovascular effects of des-acyl ghrelin — sourcing decisions directly determine data quality. Start with the COA.",
    },
  ],
};
