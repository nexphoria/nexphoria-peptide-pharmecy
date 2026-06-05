import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "relaxin-peptide-fibrosis-cardiovascular-research-guide",
  title: "Relaxin Peptides: Fibrosis, Cardiovascular, and Reproductive Research",
  description:
    "A research-focused review of relaxin-1, relaxin-2, relaxin-3, and INSL3 — the relaxin family peptides. Covers receptor pharmacology, anti-fibrotic mechanisms, cardiovascular hemodynamics, and current pre-clinical and early clinical research.",
  category: "Compound Profiles",
  readMinutes: 11,
  publishedAt: "2026-06-05",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Relaxin was originally identified in 1926 as a hormone of pregnancy that relaxes the pubic symphysis ligament to facilitate parturition. That limited characterization persisted for decades. Over the past twenty years, the broader relaxin peptide family has emerged as one of the most pharmacologically interesting groups in pre-clinical research — with documented roles in fibrosis reversal, cardiovascular hemodynamics, angiogenesis, renal protection, and neurological function that extend far beyond reproductive biology.",
    },
    {
      type: "paragraph",
      text: "For researchers studying fibrosis, acute heart failure, tissue remodeling, or reproductive endocrinology, the relaxin family offers mechanistically distinct peptide tools. This guide covers the family's members, receptor pharmacology, key research findings, and active investigation areas.",
    },
    {
      type: "heading",
      text: "The Relaxin Peptide Family",
    },
    {
      type: "paragraph",
      text: "The human relaxin family comprises seven members, all sharing structural homology with insulin: a two-chain (A and B chain) structure stabilized by three disulfide bonds. The functionally most studied members are:",
    },
    {
      type: "table",
      headers: ["Peptide", "Gene", "Primary Receptors", "Primary Research Focus"],
      rows: [
        ["Relaxin-1 (H1 relaxin)", "RLN1", "RXFP1", "Reproductive tract; limited unique pharmacology vs. relaxin-2"],
        ["Relaxin-2 (H2 relaxin)", "RLN2", "RXFP1 (primary)", "Anti-fibrosis, cardiovascular hemodynamics, angiogenesis — the most studied member"],
        ["Relaxin-3", "RLN3", "RXFP3, RXFP4 (also RXFP1/2 at high concentrations)", "Neuropeptide: appetite, stress, memory, arousal"],
        ["INSL3 (Insulin-like peptide 3)", "INSL3", "RXFP2", "Male reproductive development; testicular descent; Leydig cell function"],
      ],
    },
    {
      type: "paragraph",
      text: "Relaxin-2 is the clinically best-characterized member. Serelaxin — a recombinant form of relaxin-2 — was studied in Phase III trials for acute heart failure (RELAX-AHF program). While RELAX-AHF-1 showed 35% reduction in dyspnea and reduced 6-month all-cause mortality, RELAX-AHF-2 failed to confirm mortality benefit, leaving the clinical development picture complex.",
    },
    {
      type: "heading",
      text: "RXFP Receptor Family",
    },
    {
      type: "paragraph",
      text: "Relaxin family peptide receptors (RXFP1–4) are leucine-rich repeat-containing GPCRs — structurally distinct from most other GPCR families, with large extracellular leucine-rich repeat domains that mediate ligand binding. Key pharmacology:",
    },
    {
      type: "list",
      items: [
        "RXFP1 (primary relaxin-2 receptor): Couples primarily to Gs (adenylyl cyclase activation, cAMP elevation). Also activates PI3K, eNOS (nitric oxide synthase), and MAP kinase pathways depending on cell type. Widely distributed: heart, lungs, kidney, liver, brain, uterus, vasculature.",
        "RXFP2 (INSL3 receptor): Also Gs-coupled. Expression concentrated in testis (Leydig cells), gubernaculum, ovary, bone.",
        "RXFP3 (relaxin-3 receptor): Gi-coupled — inhibits adenylyl cyclase. Primarily CNS expression: hippocampus, septum, hypothalamus, cortex. Mediates relaxin-3's neurological effects.",
        "RXFP4 (INSL5 receptor): Gi-coupled. Gut-enriched expression; involved in appetite regulation via interaction with INSL5 from colon L-cells.",
      ],
    },
    {
      type: "heading",
      text: "Anti-Fibrotic Mechanisms: The Core Research Case",
    },
    {
      type: "paragraph",
      text: "Relaxin-2's anti-fibrotic profile is among its most extensively documented properties and remains the primary driver of research interest beyond reproductive biology. Fibrosis — the pathological accumulation of extracellular matrix (ECM), primarily collagen, in response to injury — is a central pathological process in heart failure, liver cirrhosis, pulmonary fibrosis, renal disease, and skin conditions.",
    },
    {
      type: "paragraph",
      text: "Proposed mechanisms by which relaxin-2 attenuates fibrosis include:",
    },
    {
      type: "list",
      items: [
        "Myofibroblast inhibition: Relaxin prevents differentiation of fibroblasts into myofibroblasts (the primary collagen-producing cells in fibrosis) and induces apoptosis of existing myofibroblasts — a particularly valuable property given that most anti-fibrotic approaches only prevent new fibrosis formation.",
        "MMP upregulation: Relaxin increases expression of matrix metalloproteinases (MMP-1, MMP-2, MMP-9, MMP-13) and suppresses their tissue inhibitors (TIMPs), shifting the ECM balance toward degradation of existing collagen.",
        "TGF-β1 antagonism: Relaxin reduces TGF-β1 signaling, the primary pro-fibrotic cytokine, by downregulating SMAD2/3 phosphorylation and increasing SMAD7 expression.",
        "RXFP1-mediated NO production: Nitric oxide upregulation downstream of RXFP1-eNOS coupling contributes to vascular relaxation and may independently modulate fibroblast activity.",
      ],
    },
    {
      type: "callout",
      text: "Unlike most anti-fibrotic compounds, relaxin-2 has shown capacity to reverse established fibrosis (not merely prevent it) in multiple pre-clinical models — including cardiac, renal, and hepatic fibrosis. This reversal capacity distinguishes it mechanistically from TGF-β pathway inhibitors that primarily block new ECM production.",
    },
    {
      type: "heading",
      text: "Cardiovascular Research",
    },
    {
      type: "paragraph",
      text: "The cardiovascular pharmacology of relaxin-2 is the basis for its clinical development in acute heart failure. Relaxin-2 produces systemic and renal vasodilation primarily through NO-dependent mechanisms, and has documented effects on:",
    },
    {
      type: "list",
      items: [
        "Renal hemodynamics: Relaxin markedly increases renal plasma flow and glomerular filtration rate (GFR) in animal models and humans — an effect mediated at least partly through renal afferent arteriolar dilation and upregulation of endothelin ETB receptors.",
        "Cardiac output: Reduces systemic vascular resistance and cardiac filling pressures; increases cardiac output without inotropic action — a hemodynamic profile sometimes described as \"physiological\" vasodilation.",
        "Angiogenesis: Relaxin promotes VEGF expression and capillary formation in infarcted myocardium in pre-clinical models; potential regenerative application in ischemic cardiomyopathy.",
        "Arrhythmia protection: Some pre-clinical data suggests relaxin modulates cardiac ion channels and may have anti-arrhythmic properties — an area of ongoing investigation.",
      ],
    },
    {
      type: "heading",
      text: "Relaxin-3 and the CNS",
    },
    {
      type: "paragraph",
      text: "Relaxin-3 occupies a distinct niche as the predominant CNS member of the family. It is expressed almost exclusively in the nucleus incertus (NI) of the brainstem — a region with wide projections to hippocampus, septum, hypothalamus, and cortex. Pre-clinical research implicates relaxin-3 (via RXFP3) in:",
    },
    {
      type: "list",
      items: [
        "Stress and anxiety responses: RXFP3 agonism in rodents increases stress-related behaviors; RXFP3 antagonism has shown anxiolytic effects in some models.",
        "Memory consolidation: Hippocampal RXFP3 signaling appears involved in spatial memory — relaxin-3 activation of GABAergic interneurons modulates theta rhythm generation.",
        "Appetite regulation: ICV relaxin-3 stimulates feeding behavior in rats; this effect is partially dissociable from the relaxin-2 feeding effects observed through RXFP1.",
        "HPA axis modulation: Relaxin-3/RXFP3 signaling interacts with CRH neurons and may regulate corticotropin release — connecting this peptide to the broader stress response system.",
      ],
    },
    {
      type: "heading",
      text: "Reproductive and Endocrine Research",
    },
    {
      type: "paragraph",
      text: "The traditional reproductive biology of relaxin remains an important research area. Relaxin-2 is produced by the corpus luteum during pregnancy, and its circulating levels peak in the first trimester. INSL3 research has focused on:",
    },
    {
      type: "list",
      items: [
        "Testicular descent: INSL3/RXFP2 signaling is essential for gubernaculum development and testicular descent — deficiency causes cryptorchidism in rodent models.",
        "Leydig cell function: INSL3 is a sensitive biomarker of Leydig cell mass and function; declining INSL3 with age may serve as an index of gonadal aging.",
        "Male fertility: INSL3 is being investigated as a complement to testosterone measurement in evaluating male gonadal function.",
      ],
    },
    {
      type: "heading",
      text: "Current Research Directions (2026)",
    },
    {
      type: "table",
      headers: ["Area", "Approach", "Evidence Stage"],
      rows: [
        ["Hepatic fibrosis", "Recombinant relaxin-2 or long-acting analogs in NASH/cirrhosis models", "Pre-clinical (promising)"],
        ["Pulmonary fibrosis", "IPF models; anti-TGF-β synergy with pirfenidone/nintedanib", "Pre-clinical"],
        ["Cardiac fibrosis", "Post-MI remodeling prevention; combination with GLP-1 research", "Pre-clinical to early clinical"],
        ["Acute heart failure", "Serelaxin (Phase III failed to confirm mortality endpoint — mechanism studies ongoing)", "Mixed clinical data"],
        ["Renal protection", "CKD progression; IgA nephropathy models via RXFP1 renal vasodilation", "Pre-clinical"],
        ["RXFP3 pharmacology", "CNS-selective RXFP3 agonists/antagonists for anxiety, addiction, memory", "Early pre-clinical"],
        ["INSL3 as biomarker", "Gonadal aging biomarker in men; testosterone supplementation monitoring", "Clinical research ongoing"],
      ],
    },
    {
      type: "heading",
      text: "Technical Considerations for Researchers",
    },
    {
      type: "list",
      items: [
        "Relaxin-2 has a relatively short plasma half-life (~10–20 minutes for native peptide). For in vivo studies requiring sustained exposure, continuous infusion protocols are standard. Longer-acting relaxin analogs are under development for research use.",
        "RXFP1 receptor downregulation has been observed with prolonged relaxin exposure — relevant for experimental design in chronic administration models.",
        "Both relaxin-2 and relaxin-3 require accurate mass spectrometry identity confirmation due to structural complexity (two chains, three disulfide bonds). Single-chain synthetic analogs with mutations disabling inter-chain bonds have different activity profiles and should not be considered equivalent.",
        "For fibrosis research, key endpoints include hydroxyproline content (collagen quantification), Sirius Red histology, and gene expression (Col1A1, Col3A1, ACTA2, TGF-β1, MMP/TIMP ratios).",
      ],
    },
    {
      type: "disclaimer",
      text: "Relaxin family peptides are research compounds for pre-clinical and in vitro investigation only. Serelaxin has undergone clinical trials; however, research peptide forms are not approved therapeutic agents. All research use must comply with applicable institutional and regulatory requirements.",
    },
    {
      type: "heading",
      text: "Summary",
    },
    {
      type: "paragraph",
      text: "The relaxin peptide family presents a mechanistically rich research toolkit spanning anti-fibrosis, cardiovascular hemodynamics, renal protection, and CNS biology. Relaxin-2's capacity to reverse established fibrosis through myofibroblast apoptosis and MMP induction distinguishes it from most other anti-fibrotic compounds. Relaxin-3's neurological role via RXFP3 represents a largely separate research domain with implications for stress, memory, and appetite. For researchers entering this area, rigorous peptide characterization — including two-chain identity verification, purity ≥98%, and endotoxin testing — is foundational to reliable experimental results.",
    },
  ],
};
