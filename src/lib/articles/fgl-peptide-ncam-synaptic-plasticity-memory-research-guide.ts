import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "fgl-peptide-ncam-synaptic-plasticity-memory-research-guide",
  title: "FGL Peptide: NCAM-Derived Mimetic and Synaptic Plasticity Research",
  description:
    "FGL is a synthetic peptide derived from the fibronectin type III (FNIII) module of Neural Cell Adhesion Molecule (NCAM). This guide reviews its proposed mechanisms, preclinical findings in synaptic plasticity and cognitive research, and handling considerations for researchers.",
  category: "Compound Profiles",
  readMinutes: 10,
  publishedAt: "2026-06-09",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "FGL (also referred to as FG Loop or NCAM-FGL) is a 15-amino acid synthetic peptide derived from the second fibronectin type III homology domain (FN2) of Neural Cell Adhesion Molecule (NCAM). NCAM is a cell-surface glycoprotein expressed throughout the brain and peripheral nervous system that plays a foundational role in synaptic formation, maintenance, and plasticity. FGL was designed to mimic the binding properties of NCAM's FN2 module — specifically its interaction with the fibroblast growth factor receptor (FGFR) — while bypassing the need for direct cell-cell contact.",
    },
    {
      type: "paragraph",
      text: "Unlike growth factors or classical peptide hormones, FGL does not bind a G-protein–coupled receptor. Its mechanism is structural: it mimics the NCAM-derived loop sequence that engages FGFR1, triggering downstream neurotrophic signaling. This makes it an unusual and mechanistically distinct research tool compared to peptides like NGF, BDNF, or the GH secretagogues.",
    },
    {
      type: "heading",
      text: "Molecular Background: NCAM and the FN2 Module",
    },
    {
      type: "paragraph",
      text: "NCAM exists in multiple isoforms (NCAM-120, NCAM-140, NCAM-180) and mediates both homophilic (NCAM–NCAM) and heterophilic adhesion, including interactions with heparan sulfate proteoglycans, collagen, and growth factor receptors. The fibronectin type III (FNIII) repeats of NCAM — of which there are two in the NCAM ectodomain — contribute to receptor-mediated signaling rather than simple adhesion.",
    },
    {
      type: "paragraph",
      text: "The FG loop of FN2 (the sequence from which FGL is derived) was identified in structural studies as a key binding interface for FGFR1. FGFR1 engagement activates PLC-γ, which releases IP3 and DAG, ultimately leading to intracellular Ca²⁺ mobilization and PKC activation — a cascade linked to long-term potentiation (LTP) and synaptic strength.",
    },
    {
      type: "heading",
      text: "Mechanism of Action",
    },
    {
      type: "subheading",
      text: "FGFR1 Activation and Downstream Signaling",
    },
    {
      type: "paragraph",
      text: "The primary proposed mechanism of FGL is binding to FGFR1 at a distinct site from FGF ligands — an allosteric or co-receptor interaction rather than direct agonism of the canonical FGF binding site. This interaction has been shown in cell-free binding assays and confirmed by the ability of FGFR inhibitors to block FGL's effects in cell culture. Downstream of FGFR1, FGL activates PLCγ → PKCβ → ERK1/2 signaling, a pathway associated with dendritic spine remodeling and synaptic plasticity.",
    },
    {
      type: "subheading",
      text: "NCAM Polysialylation and Synaptic Remodeling",
    },
    {
      type: "paragraph",
      text: "NCAM in the adult brain is regulated in part by polysialic acid (PSA) — a carbohydrate modification that loosens NCAM-mediated adhesion and enables synaptic remodeling. FGL appears to modulate this pathway indirectly: by engaging FGFR1, it activates signaling that influences PSA expression and thus synapse dynamics. In aged rodents, where PSA-NCAM expression is reduced, FGL administration has been studied as a potential tool to restore plasticity-permissive conditions.",
    },
    {
      type: "heading",
      text: "Preclinical Research Findings",
    },
    {
      type: "subheading",
      text: "Cognitive Function and Memory",
    },
    {
      type: "paragraph",
      text: "Several preclinical studies have examined FGL in rodent models of learning and memory, particularly in aged animals where age-related synaptic decline is present. Key findings include:",
    },
    {
      type: "list",
      items: [
        "Improved performance in the Morris Water Maze spatial learning task in aged rats (Walmod et al. context; Secher et al. 2009)",
        "Enhanced object recognition memory in middle-aged mice following systemic FGL administration",
        "Increased density of dendritic spines in hippocampal CA1 neurons — a structural correlate of memory encoding",
        "Elevated expression of synaptic proteins including PSD-95 and synaptophysin in treated animals",
        "Improved AMPA receptor trafficking, linked to synaptic strengthening via LTP mechanisms",
      ],
    },
    {
      type: "paragraph",
      text: "The Secher et al. study (2009, published in PNAS) is among the most-cited preclinical FGL papers. The group administered FGL peripherally (subcutaneous injection) in aged rats and observed significant improvements in hippocampus-dependent memory tasks, along with increased PSA-NCAM expression and dendritic spine density in CA1. This is notable because it suggests peripheral delivery can achieve CNS effects — likely because FGL, as a small peptide, can cross the blood-brain barrier (BBB) to at least a limited degree.",
    },
    {
      type: "subheading",
      text: "Neuroprotection and Neuroinflammation",
    },
    {
      type: "paragraph",
      text: "Beyond plasticity, FGL has been studied in models of neuroinflammation and excitotoxicity. In lipopolysaccharide (LPS)-induced neuroinflammation models, FGL treatment reduced microglial activation markers and pro-inflammatory cytokines (IL-1β, TNF-α, IL-6) in hippocampal tissue. In kainic acid-induced excitotoxicity models, FGL-treated animals showed reduced neuronal loss in the CA1 and CA3 regions compared to controls.",
    },
    {
      type: "paragraph",
      text: "These neuroprotective effects are thought to involve multiple mechanisms: (1) direct anti-inflammatory signaling downstream of FGFR1 activation, (2) upregulation of endogenous BDNF and NGF expression, and (3) reduction of oxidative stress markers in neuronal tissue. The anti-inflammatory pathway is particularly relevant given growing recognition that neuroinflammation is a key driver of age-related cognitive decline.",
    },
    {
      type: "subheading",
      text: "Peripheral Nervous System Research",
    },
    {
      type: "paragraph",
      text: "FGL's neurotrophic properties are not limited to the CNS. Preclinical work has examined FGL in models of peripheral nerve injury and neuropathic pain. In sciatic nerve crush models, FGL treatment accelerated nerve regeneration and improved functional motor recovery compared to vehicle controls. The proposed mechanism involves FGFR1-mediated Schwann cell activation and increased expression of growth-associated protein 43 (GAP-43), a marker of axonal sprouting and regeneration.",
    },
    {
      type: "heading",
      text: "Human Research Context",
    },
    {
      type: "paragraph",
      text: "FGL has reached early-phase human research. NeuroTransmitter Technologies (NTT) conducted Phase I and Phase IIa trials examining intranasal FGL in older adults with mild cognitive complaints. The compound was branded as Fibryn in these trials. Published Phase IIa data (reported at ICAD 2008 and in a 2009 proceedings abstract) suggested improved cognitive scores on neuropsychological testing (including Rey Auditory Verbal Learning Test) in the treatment group versus placebo, with a favorable safety profile.",
    },
    {
      type: "paragraph",
      text: "These trials used intranasal delivery — a route that circumvents BBB limitations and enables direct delivery to olfactory neurons projecting into hippocampal circuitry. Intranasal FGL represents a methodologically important delivery approach for CNS-targeted peptide research. However, the Phase IIa results were preliminary, the sample sizes modest, and the compound has not advanced to large-scale Phase III trials based on publicly available information.",
    },
    {
      type: "heading",
      text: "Peptide Specifications",
    },
    {
      type: "paragraph",
      text: "FGL has the amino acid sequence Lys-Ser-Val-Arg-Gly-Asn-Pro-Ala-Tyr-Gly-Lys-Ile-Thr-Trp (KSVRGSPAYKIT in some literature variants; the exact sequence used varies across research groups and relates to different FG loop residues). The molecular weight is approximately 1,600–1,700 Da depending on the specific sequence and modifications used. It is typically synthesized as a linear peptide amide, is water-soluble, and maintains stability in lyophilized form under standard cold-chain conditions.",
    },
    {
      type: "heading",
      text: "Research Handling Considerations",
    },
    {
      type: "list",
      items: [
        "Reconstitution: Dissolve lyophilized FGL in sterile water or PBS. The peptide is water-soluble and does not require DMSO or organic co-solvents.",
        "Storage: Lyophilized powder should be stored at -20°C in a dessicated environment. Reconstituted solutions are best used within 24–48 hours or stored at -80°C for longer periods.",
        "Concentration range: Preclinical studies have used doses ranging from 0.1 to 10 mg/kg in rodents, with subcutaneous and intranasal routes both employed.",
        "BBB penetration: Intranasal delivery is preferred in CNS-targeted protocols due to more direct olfactory-hippocampal access. Systemic (SC/IP) delivery achieves CNS effects but at lower efficiency.",
        "Stability in solution: FGL is moderately stable in aqueous solution at neutral pH. Avoid repeated freeze-thaw cycles; aliquot prior to storage if multiple experiments are planned.",
      ],
    },
    {
      type: "heading",
      text: "Comparison to Related Neurotrophic Peptides",
    },
    {
      type: "paragraph",
      text: "FGL occupies a distinct niche among neurotrophic peptides. Unlike BDNF or NGF (which are full-length neurotrophins with complex pharmacokinetics and poor BBB penetration), FGL is a small synthetic peptide with more tractable physicochemical properties. Unlike Dihexa (another NCAM/HGF-axis peptide), FGL acts specifically via FGFR1 rather than MET receptor signaling. Unlike Semax or Selank (which are ACTH/tuftsin analogs with nootropic properties), FGL targets a synaptic adhesion mechanism rather than modulatory receptor systems.",
    },
    {
      type: "paragraph",
      text: "This mechanistic specificity makes FGL particularly useful as a research tool for dissecting NCAM-FGFR1 signaling contributions to synaptic plasticity, separately from other neurotrophic pathways.",
    },
    {
      type: "heading",
      text: "Research Limitations and Open Questions",
    },
    {
      type: "list",
      items: [
        "Species translation: Most data comes from rodent models; the translational relevance to human NCAM-FGFR1 synaptic biology requires further investigation.",
        "Dosing optimization: Optimal dose, timing, and delivery route for CNS effects in preclinical models are not fully established across the literature.",
        "Mechanism confirmation: FGFR1 as the primary binding target is well-supported, but off-target binding to other FGFR isoforms or co-receptors has not been fully characterized.",
        "Long-term effects: Chronic administration studies are limited; potential receptor desensitization or adaptive changes with prolonged exposure are not well characterized.",
        "Human PK/PD: Pharmacokinetic data in humans is sparse; bioavailability, half-life, and CNS exposure after various delivery routes require formal Phase I characterization.",
      ],
    },
    {
      type: "divider",
    },
    {
      type: "disclaimer",
      text: "This article is written for research and educational purposes only. FGL peptide is a research compound not approved for human therapeutic use by the FDA or equivalent regulatory authorities. All information presented reflects preclinical and early-phase research. Researchers must comply with all applicable institutional, local, and national regulations governing peptide research.",
    },
  ],
};
