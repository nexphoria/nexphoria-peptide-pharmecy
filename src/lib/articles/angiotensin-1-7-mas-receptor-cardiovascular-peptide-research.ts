import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "angiotensin-1-7-mas-receptor-cardiovascular-peptide-research",
  title: "Angiotensin-(1-7) and the MAS Receptor: Cardiovascular Peptide Research",
  description:
    "A research-focused overview of Angiotensin-(1-7), the ACE2/MAS receptor axis of the renin-angiotensin system, and its roles in cardiovascular protection, anti-fibrotic signaling, neurological function, and metabolic regulation — covering published preclinical and clinical data.",
  category: "Compound Profiles",
  readMinutes: 11,
  publishedAt: "2026-06-18",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "The renin-angiotensin system (RAS) is one of the central regulatory axes in cardiovascular and renal physiology. The classical RAS pathway — renin → angiotensinogen → Angiotensin I → ACE → Angiotensin II (Ang II) — acts primarily through the AT1 receptor to produce vasoconstriction, sodium retention, and aldosterone secretion. For decades, this was the dominant conceptual framework. The discovery of ACE2 by Donoghue et al. in 2000, and the subsequent identification of the G-protein coupled receptor MAS as the primary receptor for Angiotensin-(1-7), revealed a counter-regulatory arm of the RAS with substantially different — often opposite — physiological actions.",
    },
    {
      type: "heading",
      text: "The ACE2/Ang-(1-7)/MAS Axis",
    },
    {
      type: "paragraph",
      text: "Angiotensin-(1-7) [Ang-(1-7)] is a seven-amino-acid peptide with the sequence Asp-Arg-Val-Tyr-Ile-His-Pro. It is generated primarily by the cleavage of Angiotensin II by ACE2 (which removes the C-terminal phenylalanine), and also by cleavage of Angiotensin I by neprilysin (NEP), prolylcarboxypeptidase (PRCP), and other endopeptidases. The MAS receptor (encoded by the MAS1 gene), an orphan G-protein coupled receptor identified in the late 1980s, was established as the primary signaling receptor for Ang-(1-7) by Santos et al. (2003) through genetic and pharmacological approaches.",
    },
    {
      type: "list",
      items: [
        "Ang-(1-7) sequence: Asp-Arg-Val-Tyr-Ile-His-Pro; MW ~899 Da",
        "Primary generation: ACE2 cleaves C-terminal Phe from Ang II → Ang-(1-7)",
        "Alternative generation: NEP, PRCP act on Ang I → Ang-(1-7) directly",
        "Primary receptor: MAS1 GPCR — Gi-coupled; activates NO, PI3K/Akt, Nrf2 pathways",
        "Additional receptor: MAS-related GPCR D (MrgD) — mediates some Ang-(1-7) effects, particularly via alamandine (the decarboxylated analog)",
        "Degradation: ACE cleaves Ang-(1-7) → Ang-(1-5), a functionally inactive fragment",
      ],
    },
    {
      type: "heading",
      text: "Cardiovascular Research: Vasodilation and Blood Pressure",
    },
    {
      type: "paragraph",
      text: "The most extensively characterized effect of Ang-(1-7) in cardiovascular research is vasodilation. Santos et al. and subsequent groups demonstrated that Ang-(1-7) stimulates endothelial nitric oxide synthase (eNOS) via the MAS receptor, increasing NO production and thereby promoting vasodilation. This effect is abolished by the selective MAS antagonist A-779 (D-Ala7-Ang-(1-7)) and by L-NAME, confirming the NO-dependent mechanism.",
    },
    {
      type: "paragraph",
      text: "In animal models of hypertension — including SHR rats, two-kidney one-clip renovascular hypertension, and DOCA-salt models — chronic Ang-(1-7) infusion (via osmotic mini-pump) consistently produces antihypertensive effects, typically in the range of 15–25 mmHg systolic BP reduction. The effect is associated with reduced oxidative stress in vascular tissue, decreased AT1 receptor expression, and improved baroreflex sensitivity.",
    },
    {
      type: "paragraph",
      text: "The clinical translation has been explored through TXA127 (a cyclic form of Ang-(1-7)) and inhaled formulations. A phase I trial in healthy volunteers confirmed cardiovascular tolerability and dose-dependent hemodynamic effects. The clinical development program has been complicated by the short plasma half-life of the linear peptide (~30 seconds due to ACE cleavage), driving interest in pegylated, cyclized, and non-peptide MAS agonists.",
    },
    {
      type: "heading",
      text: "Anti-Fibrotic Research: Cardiac and Renal Fibrosis",
    },
    {
      type: "paragraph",
      text: "Cardiac fibrosis — the pathological accumulation of extracellular matrix in the myocardium — is driven largely by TGF-β/Smad signaling and angiotensin II-mediated activation of cardiac fibroblasts. Ang-(1-7)/MAS axis activation counter-regulates this process. Mechanistically, Ang-(1-7) attenuates TGF-β-induced Smad2/3 phosphorylation, reduces expression of connective tissue growth factor (CTGF), and decreases collagen I/III synthesis by cardiac fibroblasts in vitro.",
    },
    {
      type: "paragraph",
      text: "Ferreira et al. and subsequent groups demonstrated that in mouse models of pressure-overload cardiac hypertrophy (transverse aortic constriction, TAC), Ang-(1-7) treatment attenuated fibrosis, preserved left ventricular compliance, and improved diastolic function. Importantly, these effects were largely preserved in hearts where ACE inhibition had removed Ang II-driven pro-fibrotic stimulation, suggesting that Ang-(1-7) has direct anti-fibrotic activity rather than merely opposing Ang II.",
    },
    {
      type: "paragraph",
      text: "In renal research, diabetic nephropathy models have shown that Ang-(1-7) reduces glomerulosclerosis, attenuates mesangial expansion, and preserves podocyte architecture — effects associated with improved insulin signaling in the kidney and reduction in TGF-β-driven matrix accumulation. The interplay between Ang-(1-7), AMPK activation, and glucose handling in renal tissue is an active research area.",
    },
    {
      type: "heading",
      text: "Cardiac Function: Antiarrhythmic and Inotropic Effects",
    },
    {
      type: "paragraph",
      text: "The heart expresses MAS receptors and both generates and responds to locally produced Ang-(1-7). Research findings in isolated perfused heart preparations and in vivo models have demonstrated that Ang-(1-7) exhibits antiarrhythmic properties — reducing vulnerability to reperfusion-induced ventricular fibrillation and attenuating ischemia-reperfusion injury. The proposed mechanisms involve NO-mediated modulation of cardiac ion channel activity and reduction of mitochondrial permeability transition pore opening.",
    },
    {
      type: "heading",
      text: "Metabolic Research: Insulin Sensitivity and Obesity",
    },
    {
      type: "paragraph",
      text: "ACE2-knockout mice develop insulin resistance and dyslipidemia on high-fat diets compared to wild-type controls, implicating the Ang-(1-7)/MAS axis in metabolic homeostasis. Mechanistically, Ang-(1-7) activates Akt and AMPK in skeletal muscle, promoting glucose transporter GLUT4 translocation and improving insulin-stimulated glucose uptake. In adipose tissue, Ang-(1-7) attenuates TNF-α-mediated inhibition of insulin receptor substrate-1 (IRS-1) signaling.",
    },
    {
      type: "paragraph",
      text: "Ang-(1-7) infusion in obese rodent models improves glucose tolerance, reduces plasma triglycerides, and attenuates adipose tissue inflammation — with effects partially mediated through MAS-dependent stimulation of brown adipose tissue thermogenesis. The clinical relevance was supported by Grobe et al. and Ferrario et al., who demonstrated that ACE2/Ang-(1-7) pathway activity correlates inversely with insulin resistance biomarkers in human cohort studies.",
    },
    {
      type: "heading",
      text: "Neurological Research: Cognition and Neuroinflammation",
    },
    {
      type: "paragraph",
      text: "MAS receptors are expressed in the hippocampus, cortex, brainstem, and cerebellum. Central Ang-(1-7) signaling has been studied in models of Alzheimer's disease, stroke, and traumatic brain injury. In APP/PS1 transgenic mice, intracerebroventricular Ang-(1-7) infusion attenuated amyloid-beta plaque burden, reduced neuroinflammatory markers (IL-1β, TNF-α, COX-2), and improved spatial memory performance in the Morris water maze — effects antagonized by A-779.",
    },
    {
      type: "paragraph",
      text: "The central anti-inflammatory effects of Ang-(1-7) are proposed to involve NF-κB inhibition in microglia and astrocytes, mediated through MAS-Gi coupling and downstream PI3K/Akt/Nrf2 activation. Research in stroke models has demonstrated reduced infarct volume and improved neurological outcome scores with Ang-(1-7) treatment when delivered within the reperfusion window — though therapeutic window and delivery method remain active research questions.",
    },
    {
      type: "heading",
      text: "ACE2 as the Upstream Regulator",
    },
    {
      type: "paragraph",
      text: "Since ACE2 is the primary enzyme generating Ang-(1-7) from Ang II, strategies to upregulate or mimic ACE2 activity have attracted substantial research attention — particularly following the role of ACE2 as the SARS-CoV-2 entry receptor. Viral entry via ACE2 reduces surface ACE2 expression, shifting the local RAS balance toward Ang II. This 'ACE2 theft' hypothesis has been proposed to contribute to the cardiovascular and pulmonary pathology in COVID-19. Research into recombinant ACE2, ACE2 activators, and inhaled Ang-(1-7) formulations accelerated considerably in 2020–2022.",
    },
    {
      type: "heading",
      text: "Research Tools: Peptide Forms and Receptor Pharmacology",
    },
    {
      type: "list",
      items: [
        "Linear Ang-(1-7): Asp-Arg-Val-Tyr-Ile-His-Pro; short half-life in plasma (~30 sec); requires infusion for in vivo studies",
        "Cyclic Ang-(1-7) [TXA127]: stable against ACE cleavage; longer half-life; used in clinical trials",
        "A-779 [D-Ala7-Ang-(1-7)]: selective MAS antagonist; essential negative control for mechanism studies",
        "AVE0991: orally active small-molecule MAS agonist; used in rodent studies to confirm receptor specificity",
        "Alamandine (Ala1-Ang-(1-7)): decarboxylated Ang-(1-7) analog; acts at MrgD; separate from MAS pharmacology",
        "ACE2 activators (DIZE, compound 1): small molecules studied in animal models; not validated for human use",
      ],
    },
    {
      type: "heading",
      text: "Study Design Considerations",
    },
    {
      type: "paragraph",
      text: "In vitro: Ang-(1-7) is water-soluble and stable in neutral pH buffers. Researchers should include A-779 (MAS antagonist) as a control to confirm receptor specificity, and L-NAME where NO-dependent mechanisms are being investigated. The short peptide is stable lyophilized; reconstituted solutions should be aliquoted and used promptly. For ex vivo vascular ring preparations, endothelial integrity is critical — denuded rings will not show the canonical vasodilatory response.",
    },
    {
      type: "paragraph",
      text: "In vivo: The short plasma half-life of linear Ang-(1-7) necessitates continuous infusion (osmotic mini-pump) for most rodent studies. Doses ranging from 25 to 576 µg/kg/day (i.v. or s.c. infusion) have been used in published murine cardiovascular studies. Cyclic Ang-(1-7) and AVE0991 allow for bolus dosing designs. When interpreting MAS-dependent results, genetic controls (MAS1 knockout mice, available from Jackson Laboratory) provide the definitive pharmacological specificity test.",
    },
    {
      type: "callout",
      text: "Angiotensin-(1-7) peptide is supplied for research use only. This article is not medical advice and does not constitute guidance for any clinical or therapeutic application. All in vivo work requires appropriate IACUC/ethics board approval.",
    },
    {
      type: "heading",
      text: "Key Literature",
    },
    {
      type: "list",
      items: [
        "Santos RAS et al. (2003). Angiotensin-(1-7) is an endogenous ligand for the G protein-coupled receptor Mas. PNAS 100:8258–8263.",
        "Donoghue M et al. (2000). A novel angiotensin-converting enzyme-related carboxypeptidase (ACE2) converts angiotensin I to angiotensin 1-9. Circ Res 87:E1–E9.",
        "Ferrario CM et al. (2005). Effect of angiotensin-converting enzyme inhibition and angiotensin II receptor blockers on cardiac angiotensin-converting enzyme 2. Circulation 111:2605–2610.",
        "Oudit GY et al. (2009). ACE2 — a novel cardiovascular target. J Mol Med 87:1–11.",
        "Patel VB et al. (2012). Loss of angiotensin-converting enzyme-2 exacerbates diabetic cardiovascular complications and leads to systolic and vascular dysfunction. Am J Physiol Heart Circ Physiol 302:H173–H183.",
        "Bikkavilli RK et al. (2018). Angiotensin-(1-7) and the MAS receptor: biology and therapeutic potential. Curr Opin Endocrinol Diabetes Obes 25:89–96.",
      ],
    },
    {
      type: "disclaimer",
      text: "For research purposes only. Not for human consumption or therapeutic use. All statements are based on published scientific literature and do not constitute medical advice.",
    },
  ],
};
