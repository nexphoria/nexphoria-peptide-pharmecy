import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "dihexa-cognitive-peptide-hgf-met-signaling-research-ovn18",
  title: "Dihexa: HGF/Met Signaling and Cognitive Research Applications",
  description:
    "Dihexa is a potent hepatocyte growth factor (HGF) activator and cognitive-enhancing peptide with preclinical data showing synaptogenic effects that exceed BDNF by orders of magnitude. Research review, mechanisms, and protocol design.",
  category: "Compound Profiles",
  readMinutes: 10,
  publishedAt: "2026-06-22",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Dihexa (N-hexanoic-Tyr-Ile-(6) aminohexanoic amide) is a small, orally bioavailable heptapeptide analog derived from angiotensin IV (Ang IV). Originally developed at Washington State University by Joseph Harding and colleagues, Dihexa was designed to potentiate hepatocyte growth factor (HGF) signaling by binding to HGF and facilitating its interaction with the Met receptor — a mechanism distinct from most growth factors and nootropic peptides in the research literature.",
    },
    {
      type: "heading",
      text: "The HGF/Met Signaling Axis",
    },
    {
      type: "paragraph",
      text: "Hepatocyte growth factor (HGF) is not merely a liver growth factor. In the central nervous system, HGF/Met signaling plays a critical role in neuronal survival, axonal growth, synaptogenesis, and plasticity. The HGF receptor (Met) is expressed widely in hippocampal neurons, cortical neurons, and cerebellar Purkinje cells — all regions implicated in learning and memory.",
    },
    {
      type: "list",
      items: [
        "HGF activates Met tyrosine kinase receptor → downstream PI3K/AKT, RAS/MAPK, and STAT3 pathways",
        "Met signaling drives dendritic spine formation and synaptic density",
        "HGF/Met is upregulated following CNS injury as part of the brain's repair response",
        "Age-related decline in HGF/Met signaling correlates with reduced synaptic plasticity",
        "Dihexa acts as an HGF 'super-agonist' by binding HGF and enhancing its affinity for Met",
      ],
    },
    {
      type: "heading",
      text: "Extraordinary Potency: BDNF Comparison",
    },
    {
      type: "paragraph",
      text: "The research data that brought Dihexa to broad attention was a 2013 publication from the Harding lab demonstrating that Dihexa was approximately 10⁷ times (ten million times) more potent than BDNF in promoting synaptogenesis in hippocampal culture models. This is not a performance claim — it reflects the molar concentration required to achieve equivalent effects in an in vitro assay. The practical implication for researchers is that Dihexa produces measurable synaptogenic effects at picomolar concentrations.",
    },
    {
      type: "callout",
      text: "Context note: The 10 million-fold potency comparison refers to molar dosing in hippocampal culture assays, not a direct claim about clinical effects. Potency in vitro does not translate linearly to in vivo or human outcomes.",
    },
    {
      type: "heading",
      text: "Preclinical Cognitive Research",
    },
    {
      type: "table",
      headers: ["Study Focus", "Model", "Finding"],
      rows: [
        ["Spatial memory", "Scopolamine-impaired rats (Morris Water Maze)", "Dihexa restored performance to non-impaired baseline; dose-dependent effect"],
        ["Object recognition", "Aged cognitively impaired rats", "Significant improvement vs. vehicle; effect persisted weeks after dosing cessation"],
        ["Synaptogenesis", "Primary hippocampal neuron culture", "Dendritic spine density increased; Met-dependent (blocked by Met inhibitor PHA665752)"],
        ["Alzheimer's model", "APP/PS1 transgenic mice", "Reduced amyloid-associated synaptic loss; improved novel object recognition"],
        ["Oral bioavailability", "Rat PK study", "Dihexa shows meaningful CNS penetration after oral dosing — unusual for peptides of its class"],
        ["Stroke/TBI recovery", "MCAO rat model", "Accelerated functional recovery; enhanced axonal sprouting in peri-lesional cortex"],
      ],
    },
    {
      type: "heading",
      text: "Oral Bioavailability: A Key Differentiator",
    },
    {
      type: "paragraph",
      text: "Most research peptides are degraded in the GI tract and require parenteral administration. Dihexa is structurally modified (N-terminal acylation with hexanoic acid + C-terminal amide) to resist proteolysis and enhance lipophilicity. This design produces meaningful oral bioavailability and blood-brain barrier penetration — documented in rat pharmacokinetic studies. This makes Dihexa useful in oral gavage models where injection paradigms are impractical, and also explains the interest in transdermal formulations for certain research designs.",
    },
    {
      type: "heading",
      text: "Research Protocols",
    },
    {
      type: "subheading",
      text: "Cognitive Impairment Models",
    },
    {
      type: "paragraph",
      text: "Dihexa has been studied in scopolamine-induced impairment models, aged rodent models, and transgenic Alzheimer's models. Published protocols give researchers a methodological starting point.",
    },
    {
      type: "table",
      headers: ["Variable", "Preclinical Range", "Notes"],
      rows: [
        ["Route", "IP, SC, or oral gavage", "All routes documented; oral gavage for GI absorption studies"],
        ["Dose range", "1–10 mg/kg", "Lower doses effective due to extreme potency; higher doses not linearly more effective"],
        ["Frequency", "Daily or alternate days", "Chronic dosing in cognitive models; acute single-dose in pharmacological studies"],
        ["Duration", "2–6 weeks", "Sustained effects observed even after washout in memory models"],
        ["Vehicle", "Sterile PBS or 10% DMSO/saline for SC/IP; water or 0.5% methylcellulose for oral", "Verify solubility in chosen vehicle before scale-up"],
        ["Storage", "-20°C lyophilized; -4°C reconstituted short-term", "Light-sensitive; protect from UV exposure"],
      ],
    },
    {
      type: "heading",
      text: "Cognitive Behavioral Endpoints",
    },
    {
      type: "paragraph",
      text: "Researchers designing Dihexa studies should select behavioral endpoints matched to the cognitive domain of interest:",
    },
    {
      type: "list",
      items: [
        "Morris Water Maze (MWM): hippocampal-dependent spatial learning and memory; standard for Alzheimer's and aging models",
        "Novel Object Recognition (NOR): declarative memory; minimal training required",
        "Radial Arm Maze: working vs. reference memory dissociation",
        "Barnes Maze: spatial memory with lower stress than MWM (no immersion)",
        "Passive Avoidance: aversive memory; useful in cholinergic impairment models",
        "Y-maze spontaneous alternation: rapid screen for spatial working memory",
      ],
    },
    {
      type: "subheading",
      text: "Molecular Endpoints",
    },
    {
      type: "list",
      items: [
        "Synaptophysin and PSD-95 immunofluorescence (synaptic density markers)",
        "Met phosphorylation (pMet/total Met ratio by Western blot)",
        "BDNF and NGF ELISA from hippocampal tissue",
        "Dendritic spine density (Golgi stain or DiI labeling + confocal microscopy)",
        "Hippocampal LTP (long-term potentiation) by electrophysiology",
        "Neuroinflammatory panel (IL-1β, TNF-α, IL-6 by multiplex)",
      ],
    },
    {
      type: "heading",
      text: "Safety Profile in Preclinical Studies",
    },
    {
      type: "paragraph",
      text: "Toxicology data for Dihexa is limited compared to more extensively studied peptides. Available preclinical safety data shows:",
    },
    {
      type: "list",
      items: [
        "No acute toxicity observed at research doses in rodent models (up to 10 mg/kg)",
        "No gross histopathological changes in liver, kidney, or CNS reported at standard doses",
        "Dihexa does not bind Met directly — it potentiates HGF binding — which may reduce receptor overstimulation risk vs. direct agonists",
        "Long-term or high-dose toxicology studies have not been published as of 2026",
        "No carcinogenicity studies published; HGF/Met pathway has oncogenic roles — researchers should consider this in study design",
      ],
    },
    {
      type: "callout",
      text: "Research flag: HGF/Met signaling has known oncogenic roles in certain cancer types (hepatocellular carcinoma, gastric cancer, lung cancer). Dihexa research in cancer-prone models or long-duration studies should include tumor surveillance as a safety endpoint.",
    },
    {
      type: "heading",
      text: "Sourcing Requirements",
    },
    {
      type: "list",
      items: [
        "Sequence: N-hexanoyl-Tyr-Ile-(6-aminohexanoic acid)-amide (confirm sequence before ordering)",
        "Purity: ≥98% HPLC; verify with RP-HPLC trace (C18 column) in CoA",
        "Mass confirmation: ESI-MS or MALDI-TOF; MW ≈ 604.8 Da",
        "LAL endotoxin <1 EU/mg for in vivo use",
        "Lyophilized form preferred for stability; store at -20°C or -80°C",
        "Not widely available from all peptide suppliers — confirm supplier synthesis capability before ordering",
      ],
    },
    {
      type: "disclaimer",
      text: "Dihexa is a research compound not approved for human use. All preclinical data is from animal models. This article is for research and educational purposes only. Not for human consumption or therapeutic application.",
    },
  ],
};
