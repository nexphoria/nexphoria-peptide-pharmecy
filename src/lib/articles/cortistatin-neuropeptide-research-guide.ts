import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "cortistatin-neuropeptide-research-guide",
  title: "Cortistatin: The Anti-Inflammatory Neuropeptide Researchers Should Know",
  description:
    "A research-focused guide to cortistatin, a somatostatin-related neuropeptide with potent immunosuppressive, neuroprotective, and sleep-modulating properties. Covers mechanism, receptor pharmacology, and in vivo study design.",
  category: "Compound Profiles",
  readMinutes: 10,
  publishedAt: "2026-06-15",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "disclaimer",
      text: "All compounds discussed are research chemicals for use by licensed researchers and scientific educators only. This content does not constitute medical advice.",
    },
    {
      type: "paragraph",
      text: "Cortistatin (CST) is a cyclic neuropeptide structurally related to somatostatin that has attracted increasing research attention for its anti-inflammatory properties, neuroprotective effects, and complex regulation of sleep and cortical activity. Despite being discovered in 1996 and characterized as a potent immune modulator, cortistatin remains underutilized in mainstream peptide research — partly due to limited commercial availability — making it a compound with significant untapped research potential.",
    },
    {
      type: "heading",
      text: "Structure and Isoforms",
    },
    {
      type: "paragraph",
      text: "Cortistatin exists in two principal isoforms in humans: CST-17 (17 amino acids) and CST-29 (29 amino acids), cleaved from a common prepropeptide. In rodents, the primary active form is cortistatin-14 (CST-14). The peptide shares approximately 11 of 14 amino acids with somatostatin at its core active sequence, including the critical FWKT motif responsible for somatostatin receptor (SSTR) binding.",
    },
    {
      type: "paragraph",
      text: "However, cortistatin is not simply a somatostatin analog. It diverges structurally at positions that allow it to interact with additional receptor targets not shared by somatostatin, including the ghrelin receptor (GHSR), MrgX2, and a cortistatin-specific receptor (CST receptor, or CSTR) whose full characterization is ongoing. This expanded receptor profile explains many of cortistatin's distinct effects, particularly in the immune system and brain.",
    },
    {
      type: "heading",
      text: "Receptor Pharmacology",
    },
    {
      type: "subheading",
      text: "Somatostatin Receptors (SSTR1–5)",
    },
    {
      type: "paragraph",
      text: "Cortistatin binds all five somatostatin receptor subtypes (SSTR1–5) with high affinity, similar to somatostatin. This produces overlap with somatostatin's effects: inhibition of growth hormone secretion, suppression of gut hormone release, and neuromodulatory activity. For researchers familiar with somatostatin biology, cortistatin shares these SSTR-dependent effects.",
    },
    {
      type: "subheading",
      text: "Ghrelin Receptor (GHSR)",
    },
    {
      type: "paragraph",
      text: "Unlike somatostatin, cortistatin binds the ghrelin receptor (GHSR-1a) with nanomolar affinity and functions as a functional antagonist in most studied contexts — inhibiting ghrelin-stimulated GH release and feeding behavior. This GHSR activity distinguishes cortistatin pharmacologically from somatostatin and opens research directions relevant to appetite, GH pulsatility, and metabolic regulation.",
    },
    {
      type: "subheading",
      text: "MrgX2 and Immune Cells",
    },
    {
      type: "paragraph",
      text: "MrgX2 (Mas-related G protein-coupled receptor X2) is expressed on mast cells and mediates some of cortistatin's anti-inflammatory actions in immune cells. This receptor is also activated by various neuropeptides and substance P, and its activation by cortistatin suppresses mast cell degranulation — potentially relevant for research on allergic and neurogenic inflammation.",
    },
    {
      type: "heading",
      text: "Anti-Inflammatory Mechanisms",
    },
    {
      type: "paragraph",
      text: "Cortistatin's most researched and arguably most therapeutically relevant property is its potent, broad-spectrum anti-inflammatory activity. This has been extensively characterized by Mario Delgado and Doreen Bhatt's laboratories.",
    },
    {
      type: "subheading",
      text: "Macrophage and Monocyte Modulation",
    },
    {
      type: "paragraph",
      text: "In LPS-stimulated macrophages, cortistatin potently suppresses the production of pro-inflammatory cytokines (TNF-α, IL-6, IL-12, IFN-γ) and chemokines (MIP-1α, MIP-1β, MCP-1) while simultaneously upregulating anti-inflammatory IL-10 and TGF-β. This macrophage deactivation profile is one of the most potent seen for any endogenous peptide — cortistatin doses in the low nanomolar range produce near-complete cytokine suppression in in vitro models.",
    },
    {
      type: "paragraph",
      text: "The mechanisms involve multiple converging pathways: inhibition of NF-κB activation, upregulation of MAPK phosphatase (MKP-1), reduction of iNOS expression, and promotion of cAMP signaling through SSTR-linked Gs-coupled pathways in some cell types.",
    },
    {
      type: "subheading",
      text: "T Cell Regulation",
    },
    {
      type: "paragraph",
      text: "Cortistatin inhibits Th1 differentiation and function while promoting regulatory T cell (Treg) activity — a balance critical for autoimmune disease models. In experimental autoimmune encephalomyelitis (EAE), the rodent model of multiple sclerosis, cortistatin administration reduced disease severity, demyelination, and CNS immune infiltration. Similar results have been reported in collagen-induced arthritis (CIA) and DSS colitis.",
    },
    {
      type: "subheading",
      text: "Sepsis and Acute Inflammatory Models",
    },
    {
      type: "paragraph",
      text: "In cecal ligation and puncture (CLP) sepsis models, cortistatin administration significantly improved survival rates and reduced systemic cytokine storm markers. Given that sepsis mortality is largely driven by cytokine cascade and organ failure, cortistatin's ability to restrain the acute inflammatory response without globally suppressing immune function is particularly notable.",
    },
    {
      type: "heading",
      text: "CNS and Neurological Research",
    },
    {
      type: "subheading",
      text: "Sleep Architecture Modulation",
    },
    {
      type: "paragraph",
      text: "Cortistatin's name reflects its originally described property: modulation of cortical activity to produce a state resembling sleep. Unlike benzodiazepines or barbiturates, which produce non-physiological sedation, ICV (intracerebroventricular) or intranasal cortistatin in rodents increases slow-wave sleep (SWS) duration while preserving REM architecture. This sleep-promoting effect is mediated through SSTR-dependent suppression of cholinergic neurons in the basal forebrain, reducing the drive to wakefulness.",
    },
    {
      type: "paragraph",
      text: "For researchers studying sleep-related peptides, cortistatin offers a mechanistically distinct tool compared to DSIP (delta sleep inducing peptide) or MK-677 — one that engages different receptor systems and cortical circuits.",
    },
    {
      type: "subheading",
      text: "Neuroprotection",
    },
    {
      type: "paragraph",
      text: "Cortistatin shows neuroprotective activity in models of excitotoxicity, neuroinflammation, and ischemic injury. In cortical neuron cultures challenged with glutamate or NMDA, cortistatin reduces apoptosis through PI3K/Akt signaling. In rodent stroke models, central cortistatin administration reduces infarct volume and neurological deficit scores. The overlap between its anti-inflammatory and direct neuronal protection activities makes it interesting for neurodegenerative disease models.",
    },
    {
      type: "subheading",
      text: "Parkinson's Disease Models",
    },
    {
      type: "paragraph",
      text: "Multiple groups have investigated cortistatin in 6-OHDA and MPTP Parkinson's disease models. Key findings include: reduced dopaminergic neuron loss, attenuated microglial activation and neuroinflammation in the substantia nigra, and improved motor performance on rotarod and cylinder tests. These effects appear to involve both direct neuroprotection (anti-apoptotic signaling in dopaminergic neurons) and indirect protection via microglial suppression.",
    },
    {
      type: "heading",
      text: "Research Protocol Considerations",
    },
    {
      type: "subheading",
      text: "Routes and Doses",
    },
    {
      type: "table",
      headers: ["Research Area", "Route", "Dose Range", "Reference Duration"],
      rows: [
        ["Systemic anti-inflammatory (arthritis, colitis)", "IP", "50–200 nmol/kg (daily)", "14–28 days; co-administered with disease induction"],
        ["Sepsis survival", "IP", "0.5–2 nmol per animal (bolus)", "Single dose at CLP or 1h post-CLP"],
        ["CNS / Sleep", "ICV", "0.1–1 nmol per injection", "Acute; measure sleep 0–6h post-injection"],
        ["Neuroprotection (6-OHDA)", "ICV or IP", "50–100 nmol/kg daily", "7–14 days peri-lesion"],
        ["In vitro (macrophage / immune)", "Media", "1–100 nM range", "Pre-treatment 1h before LPS stimulation"],
      ],
    },
    {
      type: "subheading",
      text: "Isoform Selection",
    },
    {
      type: "paragraph",
      text: "For most immunological and peripheral studies, CST-17 (human) or CST-14 (rodent) are the primary choices. CST-29 shows broadly similar activity with a longer potential half-life due to its larger size but is less studied in most disease models. For CNS studies in rodents, CST-14 matches the endogenous species and is the logical starting point. When using human-sequence CST-17 in rodent studies, consider the minor sequence differences at the N-terminus may affect some receptor interactions — designing studies that control for this is advisable.",
    },
    {
      type: "subheading",
      text: "Controls and Comparators",
    },
    {
      type: "list",
      items: [
        "Somatostatin (at matched SSTR-occupancy doses) — to isolate SSTR-independent cortistatin effects",
        "GHSR-specific antagonists — to assess the contribution of ghrelin receptor antagonism to observed effects",
        "IL-10 knockout or neutralization — to determine how much of cortistatin's anti-inflammatory effect is IL-10-dependent",
        "SSTR subtype-specific antagonists (SSTR2: CYN154806; SSTR5: BN81658) — for receptor dissection studies",
      ],
    },
    {
      type: "heading",
      text: "Stability, Storage, and Synthesis Notes",
    },
    {
      type: "paragraph",
      text: "Cortistatin is a cyclic peptide, cyclized via a disulfide bond between cysteine residues — the same architecture as somatostatin. This cyclization is critical for biological activity; linear variants show dramatically reduced potency. Verify cyclic form integrity by mass spectrometry (reduced vs oxidized species have a 2 Da mass difference) before use. Store lyophilized at -20°C. Reconstitute in sterile saline or PBS; avoid DMSO for in vivo studies due to its own immunological effects. Aliquot and store at -80°C to avoid activity loss from freeze-thaw cycling.",
    },
    {
      type: "heading",
      text: "Why Cortistatin Is Underutilized",
    },
    {
      type: "paragraph",
      text: "Despite compelling preclinical data, cortistatin remains relatively obscure in the broader research community compared to somatostatin or VIP (another anti-inflammatory neuropeptide). Several factors contribute: limited commercial availability until recently, the complexity of its receptor pharmacology requiring careful experimental controls, and the dominance of small-molecule immunosuppressant paradigms in translational research pipelines. As peptide research infrastructure matures — with better mass spec quantitation, nanoparticle delivery systems, and more vendors offering verified supply — cortistatin is positioned for significantly greater research attention.",
    },
    {
      type: "callout",
      text: "Nexphoria is one of the few research compound suppliers offering cortistatin with verified disulfide cyclization by mass spectrometry and independent HPLC purity certification. Contact us for availability on specific isoforms.",
    },
    {
      type: "divider",
    },
    {
      type: "disclaimer",
      text: "Research compounds only. Not for human use. All protocols referenced are for preclinical in vitro and in vivo research contexts.",
    },
  ],
};
