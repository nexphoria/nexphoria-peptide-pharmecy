import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "cognitive-peptide-stack-semax-selank-dihexa-cerebrolysin-research-guide",
  title: "Cognitive Peptide Stack: Semax, Selank, Dihexa & Cerebrolysin — A Researcher's Guide",
  description:
    "A mechanistic and protocol-oriented review of the leading cognitive-enhancement peptides used in research: Semax, Selank, Dihexa, Cerebrolysin, and supporting compounds. Covers BDNF, HIF-1α, PAI-1 inhibition, and research design considerations for stacking.",
  category: "Nootropics",
  readMinutes: 12,
  publishedAt: "2026-06-09",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Among the most studied areas of peptide neuroscience research is the cluster of compounds capable of modulating neurotrophic factor expression, cortical blood flow, GABAergic tone, and synaptic plasticity. Four compounds — Semax, Selank, Dihexa, and Cerebrolysin — represent distinct but often complementary mechanisms for enhancing neurological function in preclinical models. Researchers exploring cognitive endpoints are increasingly designing multi-compound protocols that leverage each compound's unique mechanism without receptor-target overlap.",
    },
    {
      type: "paragraph",
      text: "This guide examines each compound individually, maps their mechanistic distinctions, and outlines considerations for research protocol design when studying combinations.",
    },
    {
      type: "divider",
    },
    {
      type: "heading",
      text: "Semax: ACTH-Analog and BDNF/NGF Inducer",
    },
    {
      type: "subheading",
      text: "Molecular Identity",
    },
    {
      type: "paragraph",
      text: "Semax is a synthetic heptapeptide derived from the ACTH(4–7) sequence — Met-Glu-His-Phe-Pro-Gly-Pro — originally developed in Russia by the Institute of Molecular Genetics. Unlike full ACTH, Semax lacks melanocortin receptor activity and does not stimulate cortisol or adrenal axis responses. Its activity profile is primarily neurotrophin-mediated.",
    },
    {
      type: "subheading",
      text: "Mechanism: BDNF and NGF Upregulation",
    },
    {
      type: "paragraph",
      text: "The most replicated finding in Semax research is its ability to rapidly upregulate BDNF (brain-derived neurotrophic factor) and NGF (nerve growth factor) expression in cortical and hippocampal tissue. BDNF binds the TrkB receptor and activates downstream MAPK/ERK and PI3K/Akt cascades — pathways governing synaptic plasticity, long-term potentiation, and neuronal survival. A 2011 study by Dolotov et al. showed intranasal Semax produced a 2.5x increase in hippocampal BDNF within 24 hours in rats, with effects persisting for several days after single administration.",
    },
    {
      type: "subheading",
      text: "HIF-1α Pathway and Ischemic Neuroprotection",
    },
    {
      type: "paragraph",
      text: "Semax also appears to stabilize HIF-1α (hypoxia-inducible factor 1-alpha), a transcription factor that activates genes for angiogenesis, glycolysis, and erythropoiesis under low-oxygen conditions. This mechanism is of particular interest in stroke and ischemia research. Semax received regulatory approval in Russia for ischemic stroke treatment in 2011, based on clinical evidence of improved outcomes in acute cerebrovascular events.",
    },
    {
      type: "subheading",
      text: "N-Acetyl Semax Amidate Variant",
    },
    {
      type: "paragraph",
      text: "The N-acetylated, amidated variant (NA-Semax-Amidate) is increasingly used in research settings due to significantly enhanced bioavailability via intranasal delivery. The modifications at the N-terminus (acetylation) and C-terminus (amidation) substantially reduce enzymatic degradation by aminopeptidases in nasal mucosa. Comparative data suggests roughly 3–5x greater CNS penetration for the modified form versus standard Semax.",
    },
    {
      type: "divider",
    },
    {
      type: "heading",
      text: "Selank: Tuftsin Analog and GABAergic Anxiolytic",
    },
    {
      type: "subheading",
      text: "Molecular Identity",
    },
    {
      type: "paragraph",
      text: "Selank is a synthetic hexapeptide (Thr-Lys-Pro-Arg-Pro-Gly) based on Tuftsin — an immunomodulatory tetrapeptide derived from IgG. The addition of the -Pro-Gly-Pro C-terminal extension stabilizes the molecule against enzymatic degradation and confers anxiolytic properties not present in the parent tuftsin sequence.",
    },
    {
      type: "subheading",
      text: "Mechanism: GABA-A Modulation Without Receptor Binding",
    },
    {
      type: "paragraph",
      text: "Selank's anxiolytic effect is mediated through an atypical mechanism: it appears to enhance the activity of endogenous GABA-A receptor agonists without directly binding GABA-A receptors itself. Unpublished Russian clinical data and preclinical studies suggest Selank acts as an 'enkephalinase inhibitor' — reducing degradation of endogenous anxiety-buffering neuropeptides. This distinguishes it from benzodiazepines, which bind directly to the GABA-A chloride channel complex and carry sedation and dependency risks.",
    },
    {
      type: "subheading",
      text: "IL-6 and Cytokine Modulation",
    },
    {
      type: "paragraph",
      text: "Selank's immunomodulatory lineage from Tuftsin is reflected in consistent findings showing IL-6 downregulation and IL-2/IL-4 modulation in animal models. Because IL-6 is a pro-inflammatory cytokine that crosses the blood-brain barrier and contributes to neuroinflammation, Selank's cytokine-regulatory properties may contribute to its observed cognitive-clarity effects beyond pure anxiolysis.",
    },
    {
      type: "subheading",
      text: "BDNF Expression: Complementary to Semax",
    },
    {
      type: "paragraph",
      text: "Like Semax, Selank upregulates BDNF expression — but through a different signaling pathway. This creates an additive (rather than redundant) BDNF-elevation profile when the two compounds are co-administered in research protocols, making them a mechanistically coherent pairing.",
    },
    {
      type: "divider",
    },
    {
      type: "heading",
      text: "Dihexa: HGF Activator and Synaptogenesis Catalyst",
    },
    {
      type: "subheading",
      text: "Molecular Identity and Origin",
    },
    {
      type: "paragraph",
      text: "Dihexa (N-hexanoic-Tyr-Ile-(6) aminohexanoic amide) is a synthetic angiotensin IV analog developed at Washington State University in the lab of Joseph Harding, PhD. It is a highly potent activator of the hepatocyte growth factor (HGF)/MET receptor system — a pathway critically involved in synaptogenesis and dendritic spine formation.",
    },
    {
      type: "subheading",
      text: "Mechanism: HGF/MET Receptor Potentiation",
    },
    {
      type: "paragraph",
      text: "Dihexa's primary mechanism involves binding to HGF and enhancing its interaction with the MET receptor tyrosine kinase. This activation drives downstream signaling through Ras/MAPK and PI3K/Akt pathways, which directly stimulate formation of new dendritic spines and synaptic connections in hippocampal neurons. In an Alzheimer's disease model, Harding's team demonstrated that Dihexa was approximately 10 million-fold more potent than BDNF in restoring cognitive function in aged rats — a striking finding that has driven significant research interest.",
    },
    {
      type: "subheading",
      text: "PAI-1 Inhibition and Plasminogen Activation",
    },
    {
      type: "paragraph",
      text: "Dihexa also inhibits PAI-1 (plasminogen activator inhibitor-1), which normally suppresses tPA (tissue plasminogen activator). Elevated PAI-1 is associated with reduced synaptic plasticity, impaired LTP, and cognitive decline. By relieving PAI-1-mediated suppression of tPA, Dihexa may facilitate the extracellular matrix remodeling required for new synapse formation.",
    },
    {
      type: "subheading",
      text: "Research Cautions",
    },
    {
      type: "paragraph",
      text: "Dihexa research is substantially more limited than Semax or Selank — most published work comes from a single research group, human clinical data is absent, and questions about long-term safety profiles remain open. Some researchers note theoretical concern about MET receptor over-activation and its relationship to oncogenic signaling pathways, though no carcinogenic findings have been published for Dihexa itself.",
    },
    {
      type: "divider",
    },
    {
      type: "heading",
      text: "Cerebrolysin: Neurotrophic Peptide Mixture",
    },
    {
      type: "subheading",
      text: "Composition and Origin",
    },
    {
      type: "paragraph",
      text: "Cerebrolysin is a standardized preparation of low-molecular-weight peptide fragments derived from enzymatic hydrolysis of porcine brain proteins. It contains approximately 25% active peptide fragments (including short sequences that mimic BDNF, NGF, and CNTF activity) and 75% free amino acids. It is manufactured by EVER Neuro Pharma in Austria and is approved as a medication in multiple countries for stroke and dementia treatment.",
    },
    {
      type: "subheading",
      text: "Mechanism: Multi-Target Neurotrophic Mimicry",
    },
    {
      type: "paragraph",
      text: "The neurotrophic peptide fractions in Cerebrolysin activate TrkA (NGF receptor), TrkB (BDNF receptor), and CNTFR (ciliary neurotrophic factor receptor) through direct or indirect mechanisms. This multi-receptor engagement stimulates neuronal survival, axonal sprouting, and anti-apoptotic signaling across several brain regions simultaneously. Unlike single-target compounds, Cerebrolysin's broad mechanism may explain its clinical efficacy across diverse neurological indications.",
    },
    {
      type: "subheading",
      text: "Clinical Evidence Summary",
    },
    {
      type: "paragraph",
      text: "Cerebrolysin has the most extensive human clinical dataset of any compound in this stack — with randomized controlled trials in Alzheimer's disease (showing MMSE and ADAS-Cog improvements at 30mL IV dosing), ischemic stroke (functional recovery endpoints), and vascular dementia. A 2020 Cochrane review found statistically significant improvements in global clinical impression and cognitive endpoints in Alzheimer's trials, though effect sizes were modest.",
    },
    {
      type: "divider",
    },
    {
      type: "heading",
      text: "Supporting Compounds for Cognitive Research Protocols",
    },
    {
      type: "subheading",
      text: "NAD+ / NMN: Mitochondrial and Sirtuin Support",
    },
    {
      type: "paragraph",
      text: "NAD+ is required for SIRT1 and SIRT3 deacetylase activity — sirtuins that regulate mitochondrial biogenesis (via PGC-1α), stress resistance, and DNA repair in neurons. Declining NAD+ levels in aging neural tissue reduce sirtuin activity, impairing the cellular maintenance systems that underpin long-term cognitive function. NMN or IV NAD+ administration is frequently included in cognitive research protocols as a foundational metabolic support compound.",
    },
    {
      type: "subheading",
      text: "SS-31 (Elamipretide): Mitochondrial Targeting",
    },
    {
      type: "paragraph",
      text: "SS-31 is a cell-permeable tetrapeptide that concentrates in the inner mitochondrial membrane, binding cardiolipin and stabilizing electron transport chain complexes. In neurodegenerative models, SS-31 reduces mitochondrial ROS production, protects against cytochrome c release, and preserves ATP synthesis in stressed neurons — providing a mitochondria-specific neuroprotective layer not covered by neurotrophic compounds.",
    },
    {
      type: "divider",
    },
    {
      type: "heading",
      text: "Research Protocol Design Considerations",
    },
    {
      type: "subheading",
      text: "Mechanism Non-Overlap Assessment",
    },
    {
      type: "table",
      headers: ["Compound", "Primary Receptor/Target", "Key Downstream Effect", "Overlap Risk"],
      rows: [
        ["Semax", "HIF-1α / TrkB (indirect)", "BDNF/NGF upregulation, cortical blood flow", "Low (distinct from Selank)"],
        ["Selank", "GABA-A (modulatory) / IL-6", "Anxiolysis, BDNF via separate pathway", "Low"],
        ["Dihexa", "HGF/MET receptor", "Synaptogenesis, dendritic spine formation", "Minimal"],
        ["Cerebrolysin", "TrkA, TrkB, CNTFR (mixture)", "Broad neurotrophic support", "Partial BDNF overlap with Semax/Selank"],
        ["NAD+/NMN", "SIRT1/SIRT3 (cofactor)", "Mitochondrial biogenesis, DNA repair", "None"],
        ["SS-31", "Cardiolipin / inner mitochondrial membrane", "ROS reduction, ATP preservation", "None"],
      ],
    },
    {
      type: "subheading",
      text: "Route of Administration in Cognitive Protocols",
    },
    {
      type: "paragraph",
      text: "Semax and Selank are most commonly studied via intranasal administration due to direct olfactory-nerve transport to CNS tissue, bypassing the blood-brain barrier. Dihexa is highly lipophilic and demonstrates significant oral and transdermal absorption in animal models — unusual for peptides. Cerebrolysin requires parenteral administration (IV or IM) as it is a mixture that does not survive oral enzymatic degradation intact. NAD+ is best studied via IV or subcutaneous routes in research contexts. SS-31 is administered subcutaneously or IV in published studies.",
    },
    {
      type: "subheading",
      text: "Temporal Sequencing Rationale",
    },
    {
      type: "paragraph",
      text: "When designing a multi-compound cognitive protocol, temporal separation between neurotrophic inducers (Semax, Cerebrolysin) and baseline-support compounds (NAD+, SS-31) is logical but not strictly required — their mechanisms operate on different timescales. Semax peaks in CNS effect within 3–6 hours of intranasal administration. Cerebrolysin requires IV courses of 10–20 days for sustained clinical effect in human trials. NAD+ IV provides acute metabolic benefit within 2–4 hours. Selank's anxiolytic effect is typically observed within 30–60 minutes intranasally.",
    },
    {
      type: "divider",
    },
    {
      type: "heading",
      text: "Cognitive Research Endpoints to Consider",
    },
    {
      type: "list",
      items: [
        "BDNF and NGF serum/plasma levels (before/after compound administration)",
        "Cognitive battery testing: MoCA, MMSE, Digit Span, Trail Making Test A/B",
        "EEG measures of theta/alpha coherence and event-related potentials (ERP)",
        "Cytokine panels: IL-6, TNF-α, IL-10 for neuroinflammation markers",
        "fMRI or PET imaging of prefrontal and hippocampal activation",
        "IGF-1 levels (sensitive to GH-axis compounds if included in protocol)",
        "Telomere length and epigenetic aging clocks (if longevity dimension is included)",
      ],
    },
    {
      type: "divider",
    },
    {
      type: "disclaimer",
      text: "All compounds discussed in this article are for research purposes only. This content is written for researchers and scientists in relevant academic and laboratory settings. None of these compounds are approved by the FDA for human use as cognitive enhancers. This is not medical advice.",
    },
  ],
};
