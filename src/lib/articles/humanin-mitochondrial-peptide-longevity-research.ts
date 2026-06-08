import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "humanin-mitochondrial-peptide-longevity-research",
  title: "Humanin: Mitochondria-Derived Peptide and Longevity Research",
  description:
    "A deep-dive into Humanin, the mitochondria-encoded peptide linked to cytoprotection, insulin signaling, and longevity research. Covers mechanism, study findings, stacking considerations, and researcher protocols.",
  category: "Compound Profiles",
  readMinutes: 11,
  publishedAt: "2026-06-08",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Humanin is a 21-amino-acid peptide encoded not by the nuclear genome, but by the mitochondrial 16S ribosomal RNA gene — making it one of a growing family of mitochondria-derived peptides (MDPs) with systemic biological activity. First identified in 2001 by Hashimoto and colleagues during a screen for factors protecting neurons from Alzheimer's disease-related cell death, Humanin has since attracted substantial interest as a potential longevity biomarker and cytoprotective research compound.",
    },
    {
      type: "paragraph",
      text: "Circulating Humanin levels decline with age in both rodents and humans, and higher levels correlate with longevity in centenarian offspring cohorts — positioning it as both a research target and a potential interventional compound in aging and metabolic disease models.",
    },
    {
      type: "heading",
      text: "Molecular Identity and Variants",
    },
    {
      type: "paragraph",
      text: "The canonical Humanin sequence is MAPRGFSCLLLLTSEIDLPVKRRA (21 amino acids, MW ~2.8 kDa). Multiple isoforms have been identified through research, with [Gly14]-Humanin (HNG) — a single serine-to-glycine substitution at position 14 — showing approximately 1,000-fold greater potency than the native sequence in several neuroprotective assays. This variant is the form most commonly used in preclinical studies where researchers need robust, measurable effects at lower doses.",
    },
    {
      type: "paragraph",
      text: "Humanin is water-soluble and relatively stable compared to many short peptides. As a mitochondria-encoded sequence, it does not undergo the same translational modifications as nuclear-encoded proteins, but post-translational processing in the cytoplasm (including signal peptide cleavage) generates the mature secreted form detected in serum and CSF.",
    },
    {
      type: "heading",
      text: "Mechanisms of Action",
    },
    {
      type: "subheading",
      text: "Receptor-Mediated Signaling",
    },
    {
      type: "paragraph",
      text: "Humanin signals through at least two distinct receptor complexes. The primary high-affinity receptor is a trimeric complex consisting of CNTFR-α, WSX-1 (IL-27 receptor α), and gp130 — components of the cytokine receptor superfamily. Binding this receptor activates STAT3 and MAPK/ERK pathways, driving anti-apoptotic gene expression in neurons, cardiomyocytes, and other cell types.",
    },
    {
      type: "paragraph",
      text: "A second, lower-affinity interaction involves formyl peptide receptor-like 1 (FPRL1, also known as FPR2), which has been implicated in Humanin's anti-inflammatory effects in macrophage and endothelial models. This dual receptor engagement may explain why Humanin's effects span both metabolic and neurological endpoints.",
    },
    {
      type: "subheading",
      text: "Mitochondrial Protection",
    },
    {
      type: "paragraph",
      text: "At the cellular level, Humanin appears to stabilize mitochondrial membrane potential under stress conditions and inhibit cytochrome c release — a key trigger for the intrinsic apoptotic cascade. In models of ischemia-reperfusion injury, Humanin pre-treatment reduces mitochondrial ROS generation and preserves ATP production. This positions it as a candidate for study in contexts where mitochondrial dysfunction drives pathology: neurodegeneration, cardiac ischemia, and metabolic aging.",
    },
    {
      type: "subheading",
      text: "Insulin Sensitization and Metabolic Effects",
    },
    {
      type: "paragraph",
      text: "Humanin interacts with the insulin signaling axis at multiple levels. Research by Lee and colleagues demonstrated that Humanin potentiates insulin receptor substrate-1 (IRS-1) phosphorylation and downstream PI3K/Akt activation in hepatocytes and muscle cells. In diabetic mouse models, exogenous Humanin administration improves glucose tolerance and reduces hepatic gluconeogenesis. Notably, Humanin levels are inversely correlated with insulin resistance markers in human population studies, suggesting it may serve as an endogenous regulator of metabolic homeostasis.",
    },
    {
      type: "heading",
      text: "Longevity and Aging Research",
    },
    {
      type: "paragraph",
      text: "Perhaps the most compelling body of Humanin research concerns its relationship with lifespan. In C. elegans models, Humanin signaling through the PAPP-A/IGF-1 axis extends lifespan in a manner partially dependent on DAF-16 (FOXO transcription factor). In mammalian models, growth hormone receptor knockout mice (which are long-lived) have significantly elevated circulating Humanin compared to wild-type littermates.",
    },
    {
      type: "paragraph",
      text: "Human data from the Longevity Genes Project showed that offspring of centenarians — who have a genetic advantage in reaching extreme old age — have measurably higher serum Humanin levels than age-matched controls without centenarian parents. This human epidemiological finding drives much of the translational interest in Humanin as a longevity-related intervention candidate.",
    },
    {
      type: "callout",
      text: "Research Note: Humanin levels can be measured via ELISA in serum, CSF, and tissue homogenates. Circulating levels are typically in the low nanomolar range and decline approximately 4-fold from young adulthood to elderly age in human studies.",
    },
    {
      type: "heading",
      text: "Neuroprotection Studies",
    },
    {
      type: "paragraph",
      text: "Humanin was originally discovered specifically for its neuroprotective properties. In the foundational 2001 paper, it was identified by expression cloning from a surviving neuron library in an Alzheimer's model — meaning it was enriched in cells that resisted amyloid-beta toxicity. Subsequent work confirmed that Humanin and HNG block Aβ1-42-induced neuronal death at nanomolar concentrations in culture, and that this protection extends to in vivo models of hippocampal injection.",
    },
    {
      type: "paragraph",
      text: "In Parkinson's disease models using 6-OHDA dopaminergic lesions, Humanin reduced dopaminergic neuron loss and partially preserved motor function on rotarod testing in rats. This broad cytoprotective profile across diverse neurotoxic stressors has made it a persistent target in neurodegeneration research, though no human clinical trials have been conducted as of current literature.",
    },
    {
      type: "heading",
      text: "Stacking and Combination Research Considerations",
    },
    {
      type: "paragraph",
      text: "Researchers studying longevity peptides often examine Humanin in combination with other MDPs, particularly MOTS-c and SS-31 (Elamipretide). This 'mitochondrial peptide stack' rationale stems from the complementary mechanisms: MOTS-c primarily targets AMPK activation and nuclear gene expression related to metabolic stress; SS-31 localizes to the inner mitochondrial membrane and prevents cardiolipin oxidation; Humanin operates at the receptor level with systemic cytoprotective signaling.",
    },
    {
      type: "paragraph",
      text: "When designing combination studies, researchers must control for overlapping downstream pathways — particularly STAT3 and PI3K/Akt — to avoid interpretive ambiguity. Each compound should be validated individually with dose-response curves before combination experiments are designed.",
    },
    {
      type: "heading",
      text: "Handling, Reconstitution, and Storage",
    },
    {
      type: "paragraph",
      text: "Humanin peptide is typically supplied as a lyophilized powder. For research use, reconstitution in sterile water or PBS at 1 mg/mL stock concentration is standard. Working aliquots should be prepared at the target concentration and stored at -20°C to avoid repeated freeze-thaw cycles, which degrade peptide integrity over time.",
    },
    {
      type: "paragraph",
      text: "Stability studies show lyophilized Humanin retains activity for 12+ months at -20°C when sealed under inert atmosphere. Reconstituted solutions have a shorter working window — typically 1-2 weeks at 4°C. For in vivo dosing schedules requiring longer-term storage, single-use aliquots are recommended.",
    },
    {
      type: "list",
      items: [
        "Reconstitute in sterile water or PBS — do not use acetic acid (unlike some hydrophobic peptides)",
        "Preferred stock concentration: 1 mg/mL",
        "Working aliquots: store at -20°C; avoid more than 2 freeze-thaw cycles",
        "Lyophilized powder: stable 12+ months sealed at -20°C",
        "Use HNG variant ([Gly14]-Humanin) for studies requiring lower dose or higher potency",
        "Verify purity by HPLC ≥95% before initiating in vivo experiments",
      ],
    },
    {
      type: "heading",
      text: "Dosing Ranges in Published Preclinical Research",
    },
    {
      type: "paragraph",
      text: "Dose ranges in published rodent studies vary considerably depending on the endpoint and route. Neuroprotection studies using intracerebroventricular (ICV) injection have used doses as low as 0.1 µg/kg. Systemic (IP or SC) administration in metabolic models has used 1–10 mg/kg. The potent HNG analog shows efficacy at 10-100× lower doses across equivalent endpoints.",
    },
    {
      type: "callout",
      text: "Regulatory Context: Humanin and its analogs are research-use compounds. As of 2026, no FDA-approved therapeutic application exists. All administration should comply with institutional IACUC protocols and applicable regulations for peptide research compounds.",
    },
    {
      type: "heading",
      text: "Measuring Research Endpoints",
    },
    {
      type: "paragraph",
      text: "Given Humanin's multi-system activity, endpoint selection is critical for meaningful study design. Recommended primary endpoints by research focus:",
    },
    {
      type: "list",
      items: [
        "Neuroprotection: cell viability (MTT/LDH), caspase-3 activation, TUNEL staining, behavioral testing (MWM, rotarod)",
        "Metabolic: IPGTT/ITT, fasting glucose/insulin, HOMA-IR, hepatic gluconeogenic gene expression (PEPCK, G6Pase)",
        "Cardiovascular/mitochondrial: mitochondrial membrane potential (JC-1), ROS (MitoSOX), ATP content, infarct size (TTC staining)",
        "Longevity biomarkers: p16/p21 senescence markers, IGF-1 axis hormones, mtDNA copy number",
        "Circulating Humanin: serum ELISA (validated kits available from multiple suppliers, confirm cross-reactivity for HNG vs native)",
      ],
    },
    {
      type: "heading",
      text: "Summary",
    },
    {
      type: "paragraph",
      text: "Humanin stands out among research peptides for its mitochondrial origin, its inverse correlation with aging in human population data, and its mechanistically diverse cytoprotective effects. The availability of a potent analog (HNG) with 1,000-fold increased potency makes it tractable for preclinical study at reasonable doses. For researchers building longevity or neuroprotection study protocols, Humanin and its analogs represent a well-characterized starting point with a substantial published literature to benchmark against.",
    },
    {
      type: "disclaimer",
      text: "This article is for informational and research purposes only. Humanin peptides are research compounds not approved for human therapeutic use. All research must comply with applicable institutional, state, and federal regulations.",
    },
  ],
};
