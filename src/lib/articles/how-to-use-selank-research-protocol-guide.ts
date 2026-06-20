import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "how-to-use-selank-research-protocol-guide",
  title: "How to Use Selank: Research Protocol Guide",
  description:
    "A researcher's reference for Selank (tuftsin analog) — mechanism of action, reconstitution, intranasal administration protocols, dosing ranges from the published literature, anxiolytic models, and storage requirements.",
  category: "Research Protocols",
  readMinutes: 8,
  publishedAt: "2026-06-20",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Selank is a synthetic hexapeptide analog of tuftsin, the naturally occurring tetrapeptide (Thr-Lys-Pro-Arg) derived from the Fc fragment of IgG immunoglobulin. Developed at the Institute of Molecular Genetics in Moscow in the 1990s, Selank extends the native tuftsin sequence with a C-terminal addition (Pro-Gly) that stabilizes it against rapid degradation by serum endopeptidases. The result is a compound with substantially longer biological activity than tuftsin itself — studied primarily for anxiolytic effects, BDNF modulation, and immunomodulatory properties.",
    },
    {
      type: "heading",
      text: "What Is Selank?",
    },
    {
      type: "paragraph",
      text: "Selank's amino acid sequence is Thr-Lys-Pro-Arg-Pro-Gly-Pro. Its molecular weight is approximately 751.9 g/mol. It is water-soluble and compatible with both intranasal and parenteral administration in research settings. Selank was registered in Russia as an anxiolytic drug under the brand name Selank nasal drops, primarily studied for generalized anxiety disorder (GAD) and as a cognitive enhancer under stress conditions.",
    },
    {
      type: "paragraph",
      text: "Outside Russia, Selank is exclusively a research compound. There are no FDA approvals or EMA authorizations for any therapeutic use in Western regulatory jurisdictions.",
    },
    {
      type: "heading",
      text: "Proposed Mechanisms of Action",
    },
    {
      type: "subheading",
      text: "GABAergic Modulation",
    },
    {
      type: "paragraph",
      text: "The primary mechanism proposed for Selank's anxiolytic effects involves modulation of the GABAergic system. Studies have shown Selank potentiates GABA-A receptor signaling — the primary inhibitory neurotransmitter system — in a manner that reduces anxiety behavior in rodent models (elevated plus maze, open field test, light-dark box) without producing the sedation or cognitive impairment associated with benzodiazepines. This GABAergic potentiation appears to be indirect rather than direct receptor binding.",
    },
    {
      type: "subheading",
      text: "BDNF and Serotonin System Interaction",
    },
    {
      type: "paragraph",
      text: "Like Semax, Selank has been shown to upregulate BDNF expression — particularly in frontal cortex and limbic structures. It also modulates serotonin metabolism: studies have documented increased serotonin turnover in striatal and limbic regions following Selank administration, which may contribute to both anxiolytic and mood-stabilizing effects. The dual action on BDNF (neuroplasticity) and serotonin (mood regulation) gives Selank a mechanistic profile distinct from classical benzodiazepines or SSRIs.",
    },
    {
      type: "subheading",
      text: "Immunomodulatory Effects",
    },
    {
      type: "paragraph",
      text: "Selank's tuftsin ancestry gives it documented immunomodulatory properties. Tuftsin is known to activate macrophages and stimulate phagocytosis; Selank preserves some of these immune-activating properties while adding CNS-directed effects. Research has shown Selank regulates expression of interleukins (particularly IL-6, IL-1β) and influences T-helper cell differentiation. This dual CNS/immune profile makes Selank a research tool of interest in stress-immune interaction models.",
    },
    {
      type: "heading",
      text: "Reconstitution Protocol",
    },
    {
      type: "paragraph",
      text: "Selank is supplied as a lyophilized powder and is highly water-soluble. Reconstitution is straightforward but should follow standard peptide handling practice to ensure reproducibility.",
    },
    {
      type: "list",
      items: [
        "Equilibrate sealed vial to room temperature before opening (15–20 minutes from frozen storage)",
        "Use bacteriostatic water (0.9% benzyl alcohol) for multi-dose preparations; sterile water for single-dose use",
        "Inject diluent slowly along the inner vial wall to avoid direct impact on the lyophilized cake",
        "Gently swirl until fully dissolved; do not vortex",
        "For intranasal research: target concentration of 150–300 mcg per 50 µL (roughly 3–6 mg/mL solution) for standard rodent intranasal volumes",
        "For human research reference concentrations: 0.15% solution (150 mcg per 100 µL) is the concentration used in registered Russian pharmaceutical preparations",
      ],
    },
    {
      type: "heading",
      text: "Administration Routes in Research",
    },
    {
      type: "subheading",
      text: "Intranasal Administration",
    },
    {
      type: "paragraph",
      text: "Intranasal delivery is the primary route validated in both Russian clinical trials and preclinical rodent studies. The rationale mirrors that for Semax: the olfactory nerve provides a direct CNS delivery pathway, achieving limbic and hippocampal tissue concentrations rapidly while minimizing systemic exposure. In human clinical studies, Selank was administered as nasal drops bilaterally, with effects typically assessed 20–40 minutes post-administration in behavioral paradigms.",
    },
    {
      type: "subheading",
      text: "Intraperitoneal and Subcutaneous Routes",
    },
    {
      type: "paragraph",
      text: "IP and SC administration have been used in rodent models, particularly when precise dose control is needed or when the study involves very small subjects where intranasal delivery is unreliable. IP onset is faster than SC due to the peritoneal vascular density. Both routes produce CNS effects in rodent models, confirming that peripheral administration can produce central activity — likely through receptor populations outside the CNS and via partial BBB penetration.",
    },
    {
      type: "heading",
      text: "Dosing Ranges in Published Research",
    },
    {
      type: "table",
      headers: ["Study Type", "Route", "Dose Range", "Frequency", "Duration"],
      rows: [
        ["Anxiety models (human, GAD)", "Intranasal", "200–600 mcg/day", "2–3×/day", "14–28 days"],
        ["Acute stress/cognitive (human)", "Intranasal", "250–500 mcg", "Single dose", "Acute"],
        ["Elevated plus maze (rodent)", "IP", "100–300 mcg/kg", "30–60 min pre-test", "Acute or 5–14 days"],
        ["BDNF upregulation (rodent)", "IP/SC", "50–300 mcg/kg", "1×/day", "7–21 days"],
        ["Immune modulation (rodent)", "SC", "100–500 mcg/kg", "1×/day", "7–14 days"],
      ],
    },
    {
      type: "paragraph",
      text: "Dosing references are from published animal and clinical research. Protocol design should be calibrated to the specific endpoint and model system. The above ranges are provided for study design reference only.",
    },
    {
      type: "heading",
      text: "Behavioral Models Commonly Used with Selank",
    },
    {
      type: "list",
      items: [
        "Elevated Plus Maze (EPM): standard anxiolytic screening assay; open arm time/entries measure anxiolytic effect",
        "Open Field Test (OFT): measures locomotor activity and anxiety (center time vs. periphery); important for ruling out non-specific sedation",
        "Light-Dark Box: measures anxiolytic effect via time spent in lit compartment",
        "Morris Water Maze (MWM): spatial learning and memory; Selank has been studied in stress-impaired memory models",
        "Forced Swim Test (FST): despair/depression model; Selank has shown antidepressant-like effects in some studies",
        "Social interaction test: measures social anxiety-like behavior in rodent dyads",
      ],
    },
    {
      type: "heading",
      text: "Key Experimental Design Considerations",
    },
    {
      type: "subheading",
      text: "Distinguishing Anxiolytic from Sedative Effects",
    },
    {
      type: "paragraph",
      text: "A critical design issue for any anxiolytic candidate is demonstrating that observed behavioral effects reflect genuine anxiolysis rather than motor suppression or sedation. Selank research consistently addresses this by including locomotor activity measurements in the open field test alongside EPM data. Unlike diazepam, Selank does not reduce locomotor activity at anxiolytic doses in rodent models — an important phenotypic distinction that should be replicated and verified in any new study design.",
    },
    {
      type: "subheading",
      text: "Stress Induction Protocols",
    },
    {
      type: "paragraph",
      text: "Many Selank studies examine its efficacy specifically under stress conditions, not just baseline anxiety. Common stress induction methods used in combination with Selank include restraint stress, social defeat stress, and unpredictable chronic mild stress (UCMS) paradigms. Study designs that include a stressed vs. non-stressed comparison group are more informative about Selank's regulatory mechanisms than studies using only naïve (non-stressed) subjects.",
    },
    {
      type: "heading",
      text: "Storage and Stability",
    },
    {
      type: "list",
      items: [
        "Lyophilized Selank: stable for 12–24 months at -20°C in original sealed vials; 3–6 months at 2–8°C",
        "Reconstituted solution: refrigerate at 2–8°C immediately; use within 3–4 weeks",
        "Avoid freeze-thaw cycles of reconstituted solution — aliquot into single-use volumes if extended use is planned",
        "Protect from light; store in amber or opaque vials",
        "The C-terminal Pro-Gly-Pro modification significantly improves stability vs. native tuftsin, but standard peptide handling practices still apply",
        "Label vials with compound ID, lot number, reconstitution date, concentration, and researcher initials",
      ],
    },
    {
      type: "heading",
      text: "Summary",
    },
    {
      type: "paragraph",
      text: "Selank is a tuftsin-derived hexapeptide with a well-documented research profile in anxiety modulation, BDNF upregulation, and immune regulation. Intranasal delivery is the primary validated route, with IP/SC used in rodent models. Key experimental design requirements include separating anxiolytic from sedative effects via locomotor controls and considering stress-induction protocols that reveal the compound's regulatory rather than suppressive action. Reconstitution in bacteriostatic water, immediate refrigeration, and avoidance of freeze-thaw cycling are the core handling requirements.",
    },
    {
      type: "disclaimer",
      text: "For research purposes only. Not intended for human use. All experiments involving research peptides should be conducted under applicable institutional oversight and regulatory frameworks.",
    },
  ],
};
