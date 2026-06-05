import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "angiotensin-peptides-raas-cardiovascular-research-guide",
  title: "Angiotensin Peptides and the RAAS: Cardiovascular Research Guide",
  description:
    "The renin-angiotensin-aldosterone system (RAAS) is one of the most drug-targeted pathways in medicine. This research guide covers angiotensin I through angiotensin-(1-7), receptor pharmacology, ACE2 biology, and experimental protocols for cardiovascular, renal, and metabolic research.",
  category: "Research Fundamentals",
  readMinutes: 12,
  publishedAt: "2026-06-05",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "The renin-angiotensin-aldosterone system (RAAS) is the central hormonal axis governing blood pressure, fluid balance, and cardiovascular remodeling. Its peptide cascade — spanning angiotensin I through Ang-(1-7) and beyond — has been the target of more approved drugs than almost any other biological pathway, from ACE inhibitors and ARBs to the newer neprilysin inhibitors. Yet the peptide biology underlying this system continues to yield new research insights, particularly around ACE2 and the counter-regulatory arm of the RAAS, which has attracted intense study since its role in SARS-CoV-2 entry was established.",
    },
    {
      type: "heading",
      text: "The RAAS Cascade: Peptide Hierarchy",
    },
    {
      type: "paragraph",
      text: "The cascade begins with renin — a protease secreted by juxtaglomerular cells of the kidney in response to reduced renal perfusion pressure, hyponatremia, or sympathetic activation. Renin cleaves the precursor angiotensinogen (a liver-derived glycoprotein) to generate angiotensin I (Ang I), a 10-amino-acid biologically inactive peptide. Ang I is then processed by angiotensin-converting enzyme (ACE) on pulmonary and vascular endothelium to yield angiotensin II (Ang II), the principal bioactive effector of the classic RAAS.",
    },
    {
      type: "table",
      headers: ["Peptide", "Sequence / Length", "Primary Generating Enzyme", "Main Receptor(s)"],
      rows: [
        ["Angiotensinogen", "452 aa (human)", "—", "Substrate only"],
        ["Angiotensin I (Ang I)", "DRVYIHPFHL (10 aa)", "Renin cleaves angiotensinogen", "Minimal direct activity"],
        ["Angiotensin II (Ang II)", "DRVYIHPF (8 aa)", "ACE removes C-terminal His-Leu", "AT1R (primary), AT2R"],
        ["Angiotensin III (Ang III)", "RVYIHPF (7 aa)", "Aminopeptidase A removes Asp", "AT1R, AT2R"],
        ["Angiotensin IV (Ang IV)", "VYIHPF (6 aa)", "Aminopeptidase N removes Arg", "AT4R / IRAP"],
        ["Ang-(1-7)", "DRVYIHP (7 aa)", "ACE2 cleaves Ang II; NEP cleaves Ang I", "MasR, AT2R"],
        ["Ang-(1-9)", "DRVYIHPFH (9 aa)", "ACE2 cleaves Ang I", "ACE substrate → Ang-(1-7)"],
        ["Almandine", "ARPGYKPP analog", "Decarboxylation of Ang-(1-7)", "MrgD receptor"],
      ],
    },
    {
      type: "heading",
      text: "Angiotensin II: Biology and AT1R/AT2R Pharmacology",
    },
    {
      type: "paragraph",
      text: "Angiotensin II acts primarily through two GPCR subtypes: AT1R and AT2R. These receptors mediate opposing physiological actions, and the AT1R/AT2R balance is a critical determinant of cardiovascular disease outcomes.",
    },
    {
      type: "subheading",
      text: "AT1R — The Hypertensive Arm",
    },
    {
      type: "paragraph",
      text: "AT1R couples primarily to Gq/11 and Gi proteins, activating PLC-IP3-DAG signaling to increase intracellular calcium and PKC activity. Its downstream effects include vasoconstriction, aldosterone secretion, sodium retention, sympathetic activation, cardiac hypertrophy, and pro-fibrotic remodeling via TGF-β upregulation. AT1R is the target of ARB drugs (losartan, valsartan, telmisartan) used widely in hypertension and heart failure.",
    },
    {
      type: "subheading",
      text: "AT2R — The Counter-Regulatory Arm",
    },
    {
      type: "paragraph",
      text: "AT2R couples to Gi, stimulates phosphatases, and activates the NO-cGMP pathway and bradykinin release. Its actions — vasodilation, anti-proliferation, anti-fibrosis, and natriuresis — oppose AT1R. AT2R is highly expressed during fetal development and downregulated postnatally, but re-expressed in disease states. Research tools including the selective AT2R agonist C21 (compound 21) have enabled characterization of AT2R's role in cardiac protection, renal injury attenuation, and anti-inflammatory effects.",
    },
    {
      type: "heading",
      text: "ACE2 and the Counter-Regulatory RAAS",
    },
    {
      type: "paragraph",
      text: "ACE2 is a carboxypeptidase that removes the C-terminal phenylalanine from Ang II to generate Ang-(1-7), or removes the C-terminal leucine from Ang I to generate Ang-(1-9). Its discovery by Donoghue et al. and Tipnis et al. in 2000 established the existence of a counter-regulatory RAAS axis that limits Ang II accumulation and promotes protective Ang-(1-7) signaling.",
    },
    {
      type: "paragraph",
      text: "ACE2 activity gained global attention during the COVID-19 pandemic due to its role as the cellular entry receptor for SARS-CoV-2 spike protein. Spike binding to ACE2 reduces its membrane expression, impairing the ACE2/Ang-(1-7)/MasR axis — a mechanism proposed to contribute to COVID-19 cardiovascular and pulmonary pathology.",
    },
    {
      type: "subheading",
      text: "Ang-(1-7) and the MasR",
    },
    {
      type: "paragraph",
      text: "Ang-(1-7) signals through the Mas receptor (MasR, also known as proto-oncogene Mas), a GPCR that activates eNOS-dependent NO production, inhibits ACE, and suppresses AT1R signaling at multiple levels. Research in multiple preclinical models has demonstrated that Ang-(1-7)/MasR activation opposes cardiac and renal fibrosis, reduces blood pressure in hypertensive models, improves insulin sensitivity in metabolic syndrome models, and attenuates neuroinflammation.",
    },
    {
      type: "callout",
      text: "Alamandine — the decarboxylated form of Ang-(1-7) — acts on a distinct receptor, MrgD, and has been shown to have cardiovascular protective effects independent of MasR. Its discovery (Lautner et al., 2013) further expanded the RAAS peptide landscape and represents an emerging area of cardiovascular research.",
    },
    {
      type: "heading",
      text: "Angiotensin IV and AT4R / IRAP",
    },
    {
      type: "paragraph",
      text: "Angiotensin IV (the hexapeptide VYIHPF) acts on the AT4 receptor, now identified as insulin-regulated aminopeptidase (IRAP / LNPEP). AT4R/IRAP is highly expressed in the brain (hippocampus, cortex) and is involved in memory and cognitive function. Ang IV and related analogs improve spatial memory in rodent models and have been studied as potential research tools for Alzheimer's disease models. The overlap between RAAS peptide biology and cognitive neuroscience represents an underexplored intersection.",
    },
    {
      type: "heading",
      text: "Key Research Models and Endpoints",
    },
    {
      type: "paragraph",
      text: "RAAS research employs a wide range of in vitro and in vivo models. Endpoint selection should match the specific RAAS arm and receptor subtype under investigation.",
    },
    {
      type: "list",
      items: [
        "In vivo hypertension: Angiotensin II infusion via osmotic minipump (400–1000 ng/kg/min, 2–4 weeks) — standard model of Ang II-dependent hypertension in rodents",
        "Cardiac hypertrophy: Left ventricular wall thickness, myocyte cross-sectional area, BNP/ANP gene expression, Masson's trichrome for fibrosis",
        "Renal endpoints: Urine albumin-to-creatinine ratio, GFR, renal cortex ACE/ACE2 activity, kidney histology (PAS staining)",
        "AT1R/AT2R binding: Radioligand binding assays using ¹²⁵I-Ang II with receptor-selective competitors; receptor density by Bmax/Kd analysis",
        "ACE2 activity: Fluorometric assay with Mca-APK(Dnp) substrate; expressed as RFU/min/μg protein",
        "Ang-(1-7) measurement: LC-MS/MS or validated RIA — ELISA cross-reactivity with Ang II must be verified",
      ],
    },
    {
      type: "heading",
      text: "Notable Preclinical Research Findings",
    },
    {
      type: "table",
      headers: ["Peptide / Target", "Model", "Key Finding"],
      rows: [
        ["Ang II / AT1R", "Rat chronic infusion", "4-week Ang II infusion at 400 ng/kg/min produces reproducible hypertension, cardiac hypertrophy, and renal fibrosis"],
        ["Ang-(1-7) / MasR", "Spontaneously hypertensive rat (SHR)", "Chronic Ang-(1-7) infusion reduced systolic BP by 20–30 mmHg; attenuated LV hypertrophy"],
        ["ACE2 overexpression", "Diabetic nephropathy model (db/db mouse)", "Cardiac ACE2 overexpression reduced albuminuria, fibrosis, and cardiac dysfunction vs. controls"],
        ["AT2R agonist C21", "Myocardial infarction (rat)", "C21 post-MI reduced infarct size by ~30%; improved EF at 4 weeks vs. vehicle"],
        ["Ang IV", "Morris water maze (rat)", "ICV Ang IV (50 pmol) improved spatial memory retrieval; blocked by AT4R antagonist Divalinal"],
        ["Alamandine / MrgD", "Murine pressure overload", "Alamandine infusion attenuated cardiac fibrosis and improved diastolic function vs. vehicle"],
      ],
    },
    {
      type: "heading",
      text: "RAAS Peptides in Metabolic Research",
    },
    {
      type: "paragraph",
      text: "Beyond cardiovascular endpoints, the RAAS has important metabolic intersections. AT1R activation promotes adipogenesis, impairs insulin signaling, and drives adipose tissue inflammation. The counter-regulatory Ang-(1-7)/MasR axis has been shown to improve insulin-stimulated glucose uptake in skeletal muscle, reduce hepatic lipogenesis, and enhance pancreatic β-cell function in multiple rodent models of type 2 diabetes and metabolic syndrome.",
    },
    {
      type: "paragraph",
      text: "This metabolic dimension explains the observed benefit of ACE inhibitors and ARBs beyond blood pressure reduction — and has driven interest in Ang-(1-7) and ACE2 activators as potential therapeutic strategies for metabolic disease, an active area of preclinical investigation.",
    },
    {
      type: "heading",
      text: "Handling and Storage for Research Use",
    },
    {
      type: "paragraph",
      text: "Angiotensin peptides are short, linear sequences with no disulfide bonds, making them relatively stable compared to cyclic or disulfide-bridged peptides — but they remain susceptible to protease degradation in biological matrices.",
    },
    {
      type: "list",
      items: [
        "Store lyophilized angiotensin peptides at -80°C for long-term storage; -20°C acceptable for ≤6 months",
        "Reconstitute Ang II in 0.1% acetic acid; Ang-(1-7) in PBS or saline; avoid alkaline pH",
        "For in vivo infusion via osmotic minipump, prepare in sterile saline; verify concentration stability at 37°C for pump duration",
        "For plasma or tissue measurement: include protease inhibitors (PMSF, EDTA, captopril) in collection tubes to prevent ex vivo degradation",
        "Ang II half-life in plasma is ~30 seconds without inhibitors; up to several hours when properly preserved",
        "Verify peptide identity by mass spec before use — truncated or oxidized analogs show altered receptor selectivity",
      ],
    },
    {
      type: "heading",
      text: "Research Landscape and Future Directions",
    },
    {
      type: "paragraph",
      text: "Despite decades of research and multiple approved drug classes targeting the RAAS, the system continues to yield new biology. Key active research areas include: the role of tissue RAAS (local Ang II generation in heart, kidney, brain, and adipose tissue independent of circulating RAAS); the ACE2/Ang-(1-7)/MasR axis as a therapeutic target in cardiovascular and metabolic disease; the intersection of RAAS with inflammation and immunity (Ang II drives NLRP3 inflammasome activation and macrophage polarization); and the emerging pharmacology of alamandine/MrgD and its potential as a cardiovascular-protective signaling axis with distinct features from the Ang-(1-7)/MasR arm.",
    },
    {
      type: "disclaimer",
      text: "This article is intended for research informational purposes only. Angiotensin peptides and RAAS-targeting compounds discussed here are research tools, not approved therapies for conditions other than those with existing regulatory approval. All research should be conducted in compliance with applicable institutional and regulatory frameworks.",
    },
  ],
};
