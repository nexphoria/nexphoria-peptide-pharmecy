import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "humanin-mitochondrial-derived-peptide-cardioprotection-research",
  title: "Humanin: The Mitochondrial-Derived Peptide Reshaping Cardioprotection Research",
  description:
    "A deep-dive into Humanin (HN), a mitochondrial-encoded peptide with documented cytoprotective, anti-apoptotic, and cardioprotective effects in preclinical models. Covers mechanism, receptor pharmacology, analogs, age-related decline, and current research protocols.",
  category: "Longevity Research",
  readMinutes: 10,
  publishedAt: "2026-06-18",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Humanin (HN) is a 21-amino acid peptide encoded within the mitochondrial 16S ribosomal RNA gene — making it one of a small family of mitochondrial-derived peptides (MDPs) discovered to have potent extracellular signaling activity. First identified in 2001 by Hashimoto et al. while screening for factors that suppress neuronal cell death in Alzheimer's disease models, Humanin has since been characterized as a broadly cytoprotective peptide with documented anti-apoptotic, insulin-sensitizing, cardioprotective, and anti-inflammatory effects across multiple organ systems.",
    },
    {
      type: "paragraph",
      text: "What makes Humanin a compelling research target is its dual identity: it functions both as a mitochondrial signal (produced during metabolic stress to coordinate cellular survival) and as a circulating hormone-like peptide detectable in plasma, CSF, and saliva. Its age-related decline — plasma Humanin levels fall progressively from the third decade onward — connects mitochondrial function to the systemic physiology of aging in a way that few peptides can claim.",
    },
    {
      type: "heading",
      text: "Mitochondrial Origin and Biogenesis",
    },
    {
      type: "paragraph",
      text: "Humanin is encoded by an open reading frame (ORF) within the 16S rRNA gene of the mitochondrial genome (mtDNA). This is unusual — most mitochondrial-encoded genes produce components of the electron transport chain (Complexes I, III, IV, V), not secreted signaling peptides. The existence of an ORF producing a functional extracellular peptide within a ribosomal RNA gene suggests a non-canonical translation mechanism, likely involving cytoplasmic translation of a nuclear-encoded transcript that shares sequence with the mitochondrial 16S rRNA region.",
    },
    {
      type: "paragraph",
      text: "Humanin's circulating form differs from the intracellular precursor: it undergoes processing and secretion through a pathway that involves the endoplasmic reticulum. Secretion is upregulated by cellular stressors including ischemia, oxidative stress, chemotherapy exposure, and amyloid-beta peptide — consistent with a stress-response signaling role. Plasma Humanin is detectable by ELISA at concentrations of approximately 0.1–1 ng/mL in healthy young adults and declines with age.",
    },
    {
      type: "heading",
      text: "Receptor Pharmacology: FPRL1, CNTFR Complex, and Intracellular Targets",
    },
    {
      type: "paragraph",
      text: "Humanin signals through at least two extracellular receptor systems. The primary characterized receptor is a trimeric complex comprising CNTFR (ciliary neurotrophic factor receptor alpha), WSX-1 (also known as IL-27 receptor alpha), and gp130 — the same gp130 co-receptor used by IL-6 family cytokines. This receptor complex activates JAK1/2 and STAT3 downstream, explaining Humanin's anti-apoptotic effects through upregulation of Bcl-2 family members and suppression of BAX mitochondrial translocation.",
    },
    {
      type: "paragraph",
      text: "A second receptor pathway involves formyl peptide receptor-like 1 (FPRL1/FPR2), a G protein-coupled receptor expressed on immune cells and neurons. FPRL1 activation by Humanin mediates anti-inflammatory effects including inhibition of LPS-induced cytokine release and modulation of microglial activation. This receptor distinguishes Humanin from most anti-apoptotic peptides, which typically act intracellularly.",
    },
    {
      type: "paragraph",
      text: "Intracellularly, Humanin interacts directly with IGFBP-3 (insulin-like growth factor binding protein 3), preventing IGFBP-3-induced apoptosis, and with BAX, where it blocks BAX conformational activation at the mitochondrial membrane — effectively acting as a molecular brake on the intrinsic apoptosis pathway.",
    },
    {
      type: "heading",
      text: "Cardioprotection: Ischemia-Reperfusion and Cardiac Apoptosis",
    },
    {
      type: "paragraph",
      text: "The cardioprotection data for Humanin is among the most compelling in its literature. In rodent ischemia-reperfusion (IR) models, pre-ischemic IP administration of Humanin (0.1–1 mg/kg) significantly reduces infarct size, attenuates troponin release, and improves post-reperfusion ventricular function. The mechanisms are multi-layered: STAT3 activation reduces cardiomyocyte apoptosis during the reperfusion phase; AMPK pathway activation by Humanin preserves mitochondrial integrity during ischemia; and anti-inflammatory effects reduce neutrophil-mediated reperfusion injury.",
    },
    {
      type: "paragraph",
      text: "Post-ischemic administration is less effective but still attenuates injury when given within the first 30 minutes of reperfusion — a therapeutically relevant window that has driven interest in Humanin as a candidate for acute cardioprotection protocols. Doxorubicin-induced cardiomyopathy is a second cardiac model where Humanin demonstrates protective activity: pre-treatment with HNG (a synthetic analog, see below) reduces doxorubicin-triggered cardiomyocyte apoptosis and preserves left ventricular ejection fraction in rodent studies.",
    },
    {
      type: "callout",
      text: "Research Highlight: Humanin plasma levels are significantly lower in patients with documented coronary artery disease compared with age-matched controls in epidemiological studies (Lee et al., 2019; JAMA Cardiology). This correlation does not establish causation but has strengthened interest in Humanin as both a biomarker and therapeutic target in cardiovascular aging research.",
    },
    {
      type: "heading",
      text: "HNG: The High-Potency Synthetic Analog",
    },
    {
      type: "paragraph",
      text: "The native Humanin sequence has limited pharmacological utility due to rapid plasma degradation (half-life < 5 minutes). A single amino acid substitution — replacing serine at position 14 with glycine — produces HNG (Humanin with Glycine substitution), which demonstrates approximately 100–1000-fold greater potency than native HN in cytoprotection assays while retaining the same receptor engagement profile.",
    },
    {
      type: "paragraph",
      text: "HNG is the preferred research form for most in vivo and in vitro protocols due to its stability advantage. Additional analogs have been synthesized — including AGA-(C8R)HNG17 for enhanced BBB penetration — but HNG remains the most widely published form. Most research-grade Humanin sold for in vitro and rodent studies is HNG or the native 21-mer; investigators should confirm which form they are purchasing and use equivalent concentrations accordingly.",
    },
    {
      type: "heading",
      text: "Aging, Longevity, and the MDP Family",
    },
    {
      type: "paragraph",
      text: "Humanin belongs to a growing family of mitochondrial-derived peptides including MOTS-c (mitochondrial open reading frame of the 12S rRNA type-c), SHLP1-6 (small humanin-like peptides), and Epitalon-adjacent targets. Among these, Humanin and MOTS-c have the strongest published aging phenotype data.",
    },
    {
      type: "paragraph",
      text: "Centenarian studies have reported elevated plasma Humanin levels compared with their offspring and age-matched controls — a finding that has been interpreted as either a longevity biomarker or a direct contributor to exceptional longevity (Yen et al., 2020). Humanin levels are reduced in Alzheimer's disease, insulin-resistant states, and following glucocorticoid exposure. Transgenic mice overexpressing Humanin show metabolic protection and modestly extended median lifespan in some strains.",
    },
    {
      type: "paragraph",
      text: "The age-related decline in circulating Humanin has been proposed as a contributory mechanism to increased cardiovascular risk, reduced insulin sensitivity, and impaired neuroprotection in aging populations. Whether Humanin supplementation can rescue these age-associated phenotypes in primates is an active research question without definitive published data as of mid-2026.",
    },
    {
      type: "heading",
      text: "Neuroprotective Activity and Alzheimer's Models",
    },
    {
      type: "paragraph",
      text: "Humanin was originally identified as a neuroprotective factor — specifically as a peptide that suppressed cell death induced by familial Alzheimer's disease-associated genes (V642I-APP, M146L-PS1, N141I-PS2). In APP/PS1 transgenic mice (a standard Alzheimer's model), intranasally administered HNG reduces amyloid plaque burden, improves performance on Morris Water Maze and novel object recognition tasks, and suppresses neuroinflammation markers including activated microglia and elevated IL-1β in hippocampal tissue.",
    },
    {
      type: "paragraph",
      text: "The neuroprotection mechanism involves both direct anti-apoptotic activity in neurons (via STAT3/Bcl-2 pathways) and indirect effects through modulation of microglia and astrocyte activation states. The interaction with IGFBP-3 is particularly relevant in the brain, where IGF-1 signaling plays roles in neuronal survival and synaptic plasticity.",
    },
    {
      type: "heading",
      text: "Research Protocol Design Notes",
    },
    {
      type: "list",
      items: [
        "Form selection: Use HNG (S14G-Humanin) for in vivo studies requiring systemic delivery. Native HN is appropriate for in vitro receptor binding and signaling pathway studies where degradation kinetics are controlled.",
        "Delivery routes: IP, IV, and intranasal routes all have published precedent. Subcutaneous dosing is less established due to absorption variability. ICV delivery is used for CNS-specific studies.",
        "Dose range: HNG in vivo cardioprotection studies: 0.1–5 mg/kg IP or IV. HNG neuroprotection (intranasal): 5–50 µg/animal in rodent models. Adjust based on endpoint sensitivity.",
        "Timing: Pre-treatment yields stronger effects in IR models. For chronic aging studies, daily or every-other-day dosing for 4–16 weeks is the standard window.",
        "Controls: Include STAT3 inhibitors (e.g., Stattic) and gp130 blocking antibodies to confirm receptor-mediated vs. non-specific effects. BAX knockout cells serve as intracellular mechanism controls.",
        "Biomarker endpoints: Plasma Humanin by ELISA (Phoenix Pharmaceuticals kit is most validated), STAT3 phosphorylation (pY705), Bcl-2/BAX ratio, troponin I (cardiac models), caspase-3 activation.",
      ],
    },
    {
      type: "heading",
      text: "Summary",
    },
    {
      type: "paragraph",
      text: "Humanin occupies a unique position at the intersection of mitochondrial biology, aging research, and cardioprotection. Its mitochondrial origin, dual intracellular/extracellular receptor pharmacology, documented age-related decline, and protective effects across cardiac, neuronal, and metabolic systems make it one of the more mechanistically rich peptides in the longevity research space. The availability of the stabilized HNG analog has made in vivo work more tractable, and the growing MDP family literature provides comparative context for interpreting CST results.",
    },
    {
      type: "divider",
    },
    {
      type: "disclaimer",
      text: "This article is intended for research and educational purposes only. Humanin and HNG are research peptides not approved for human therapeutic use. All referenced data is from peer-reviewed preclinical and observational studies. Nexphoria supplies research-grade peptides for licensed laboratory use only.",
    },
  ],
};
