import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "ace2-peptide-fragments-cardiovascular-research-guide",
  title: "ACE2 Peptides & RAAS Modulation: Cardiovascular Research Guide for 2026",
  description:
    "A research-focused review of ACE2-derived peptides, diminazene aceturate (DIZE), and small-molecule ACE2 activators in the context of renin-angiotensin system modulation, cardiac protection, pulmonary research, and post-viral inflammatory models.",
  category: "Compound Profiles",
  readMinutes: 14,
  publishedAt: "2026-06-08",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Angiotensin-Converting Enzyme 2 (ACE2) is a type I transmembrane metallocarboxypeptidase that sits at a critical regulatory node within the renin-angiotensin-aldosterone system (RAAS). Its discovery in 2000 (Donoghue et al., Science) as a functional homolog of ACE but with distinct substrate specificity and opposing biological effects fundamentally reframed how researchers understand RAAS-mediated cardiovascular, renal, and pulmonary physiology. The subsequent identification of ACE2 as the entry receptor for SARS-CoV and SARS-CoV-2 brought this protein to global attention, but its significance in cardiovascular and metabolic research extends far beyond viral biology. This guide reviews ACE2 biology, ACE2-derived peptides and activators studied in research models, and the mechanistic rationale for their investigation in cardiovascular, pulmonary, and metabolic disease contexts.",
    },
    {
      type: "heading",
      text: "The RAAS: A Two-Arm Regulatory System",
    },
    {
      type: "paragraph",
      text: "Classical understanding of the RAAS positioned ACE and angiotensin II as the primary drivers of the system. Renin cleaves angiotensinogen to Ang I; ACE converts Ang I to Ang II; Ang II acts on AT1 receptors to produce vasoconstriction, aldosterone release, sodium retention, and pro-fibrotic, pro-inflammatory signaling throughout the cardiovascular system. This 'classical arm' of the RAAS is the target of ACE inhibitors and AT1 receptor blockers (ARBs), two of the most widely used drug classes in medicine.",
    },
    {
      type: "paragraph",
      text: "ACE2 defines a counter-regulatory 'protective arm' of the RAAS. ACE2 cleaves the C-terminal phenylalanine from Ang II, converting it to Angiotensin-(1-7) [Ang-(1-7)]. Ang-(1-7) then acts on the MAS receptor (MAS1), a G protein-coupled receptor, to produce effects that are broadly opposite to Ang II at AT1R: vasodilation, anti-inflammation, anti-fibrosis, and antithrombosis. ACE2 also directly converts Ang I to Ang-(1-9), a precursor substrate that can be further metabolized to Ang-(1-7) by ACE. The net effect of increased ACE2 activity is to shift the RAAS balance from the pro-pathological Ang II/AT1R axis toward the protective Ang-(1-7)/MAS axis.",
    },
    {
      type: "table",
      headers: ["Component", "Pathway", "Primary Effects"],
      rows: [
        ["Angiotensin II (Ang II)", "Classical ARM (ACE/AT1R)", "Vasoconstriction, inflammation, fibrosis, oxidative stress"],
        ["Angiotensin-(1-7)", "Protective arm (ACE2/MAS)", "Vasodilation, anti-inflammation, anti-fibrosis, cardioprotection"],
        ["ACE", "Classical enzyme", "Converts Ang I → Ang II"],
        ["ACE2", "Protective enzyme", "Converts Ang II → Ang-(1-7); Ang I → Ang-(1-9)"],
        ["AT1R", "Classical receptor", "Mediates Ang II pathological effects"],
        ["MAS receptor", "Protective receptor", "Mediates Ang-(1-7) protective effects"],
      ],
    },
    {
      type: "heading",
      text: "ACE2-Derived Peptides and Analogs",
    },
    {
      type: "paragraph",
      text: "The research interest in ACE2 as a therapeutic target has generated several classes of compounds: direct ACE2 activators, Ang-(1-7) analogs/peptide mimetics, and recombinant ACE2 protein. Each approach has distinct pharmacological and delivery characteristics.",
    },
    {
      type: "subheading",
      text: "Angiotensin-(1-7): The Endogenous Peptide",
    },
    {
      type: "paragraph",
      text: "Ang-(1-7) is the primary ACE2 product and MAS receptor agonist. It is a 7-amino acid peptide (Asp-Arg-Val-Tyr-Ile-His-Pro) with a half-life of approximately 30 seconds to a few minutes in plasma due to rapid degradation by ACE and various peptidases. This short half-life has historically limited its utility as a research tool via systemic injection. Several approaches have been developed to extend Ang-(1-7) bioavailability for research purposes.",
    },
    {
      type: "paragraph",
      text: "Cyclothioether-bridged Ang-(1-7) analogs — where the linear sequence is stabilized by cyclization — have been studied as longer-acting MAS receptor agonists. The compound sometimes designated c[A(1-7)] or cyclic Ang-(1-7) has shown protection in cardiac hypertrophy, heart failure, and pulmonary hypertension models in rodents. Intranasal delivery of Ang-(1-7) has also been explored, with some evidence of CNS effects including effects on blood pressure regulation and cognitive endpoints via direct access to the brain.",
    },
    {
      type: "subheading",
      text: "AVE 0991 and Non-Peptide MAS Agonists",
    },
    {
      type: "paragraph",
      text: "AVE 0991 is a non-peptide MAS receptor agonist structurally distinct from Ang-(1-7) but with similar receptor activity. Developed at Sanofi Aventis and extensively used as a pharmacological tool, AVE 0991 has provided substantial mechanistic evidence for the Ang-(1-7)/MAS axis in preclinical research. Because it is not a peptide, it is not subject to the rapid proteolytic degradation that limits native Ang-(1-7), making it a more tractable research tool for prolonged in vivo studies. Its effects in heart failure models, diabetic nephropathy, and cerebrovascular ischemia models have been consistently protective.",
    },
    {
      type: "subheading",
      text: "Diminazene Aceturate (DIZE): ACE2 Activator",
    },
    {
      type: "paragraph",
      text: "DIZE (diminazene aceturate) is an antiprotozoal drug used in veterinary medicine that was identified in a 2010 screening study as an ACE2 activator (Ferreira et al., FASEB Journal). DIZE does not directly bind the ACE2 active site; it appears to stabilize a conformational state that enhances ACE2 catalytic activity. In rodent models of pulmonary arterial hypertension, heart failure, and acute lung injury, DIZE treatment increased ACE2 activity, elevated Ang-(1-7) levels, and produced cardiopulmonary protection.",
    },
    {
      type: "paragraph",
      text: "Importantly, DIZE-induced ACE2 activation in hypertension models has been shown to reduce right ventricular pressure, reduce pulmonary vascular remodeling, and improve right heart function — effects that are largely abolished by the MAS receptor antagonist A779, confirming on-target mechanism. DIZE has been used extensively as a positive control and pharmacological probe in ACE2 research due to its well-characterized profile.",
    },
    {
      type: "heading",
      text: "Cardiovascular Research Applications",
    },
    {
      type: "subheading",
      text: "Heart Failure Models",
    },
    {
      type: "paragraph",
      text: "Reduced cardiac ACE2 expression is documented in multiple heart failure models and in human end-stage failing heart tissue. This reduction is thought to shift the myocardial RAAS balance toward Ang II/AT1R dominance, promoting further ventricular remodeling, fibrosis, and inflammation. Preclinical studies using either Ang-(1-7) infusion, ACE2 overexpression via adeno-associated virus, or DIZE administration have consistently shown attenuation of adverse remodeling in pressure overload, myocardial infarction, and genetic cardiomyopathy models. Endpoints include reduced left ventricular hypertrophy, improved ejection fraction, reduced collagen deposition, and lower BNP/NT-proBNP levels.",
    },
    {
      type: "subheading",
      text: "Hypertension and Vascular Biology",
    },
    {
      type: "paragraph",
      text: "In SHR (spontaneously hypertensive rat) models and angiotensin II infusion models, ACE2 upregulation or MAS agonism reduces blood pressure, improves endothelial function (measured by acetylcholine-induced vasodilation), and reduces vascular oxidative stress. These effects are mechanistically distinct from ACE inhibition: they do not prevent Ang II synthesis but rather counterbalance it through enhanced degradation and MAS-mediated vasodilation. The combination of ACE inhibitor + MAS agonism in some models produces additive blood pressure reduction, suggesting non-redundant mechanisms.",
    },
    {
      type: "subheading",
      text: "Pulmonary Arterial Hypertension (PAH)",
    },
    {
      type: "paragraph",
      text: "ACE2 is highly expressed in the lung, and its role in pulmonary vascular biology has been intensively studied. In monocrotaline-induced PAH and hypoxic PAH models in rodents, ACE2 expression is downregulated in the pulmonary vasculature, correlating with disease severity. ACE2 activation or MAS agonism in these models reduces right ventricular systolic pressure, pulmonary vascular resistance, and vascular smooth muscle cell proliferation. The Ang-(1-7)/MAS axis appears to oppose the pro-proliferative, pro-constrictive signaling of Ang II in pulmonary vascular smooth muscle cells via inhibition of ERK1/2 and MAPK signaling pathways.",
    },
    {
      type: "heading",
      text: "ACE2 Peptides in Post-Viral Inflammatory Research",
    },
    {
      type: "paragraph",
      text: "The identification of ACE2 as the SARS-CoV-2 receptor in 2020 introduced a new research dimension: viral SARS-CoV-2 spike protein binding to ACE2 causes receptor internalization and shedding, effectively downregulating surface ACE2 activity in infected tissues. This downregulation — documented in the lungs, heart, kidney, and gut — may shift the local RAAS toward Ang II/AT1R dominance and contribute to the cardiovascular and inflammatory complications of acute COVID-19 and post-acute sequelae (long COVID).",
    },
    {
      type: "paragraph",
      text: "Research published in 2021–2023 documented that circulating Ang II levels were elevated in severely ill COVID-19 patients and inversely correlated with plasma ACE2 activity. This finding provided mechanistic rationale for investigating ACE2 restoration strategies — either via recombinant ACE2 protein, ACE2 activators, or Ang-(1-7) analogs — in COVID-19 related inflammatory models. Several academic groups have published data showing that exogenous Ang-(1-7) attenuates spike protein-induced endothelial dysfunction in ex vivo vascular models.",
    },
    {
      type: "heading",
      text: "Recombinant Human ACE2 (rhACE2)",
    },
    {
      type: "paragraph",
      text: "Recombinant human ACE2 protein (rhACE2) offers a different mechanistic approach: rather than activating endogenous ACE2 or mimicking Ang-(1-7) at the MAS receptor, rhACE2 directly catalyzes Ang II conversion at the circulating and tissue level. It also acts as a soluble decoy receptor for SARS-CoV-2 spike protein. A phase II trial (ARTICLES, NCT01597635) evaluated rhACE2 in patients with acute respiratory distress syndrome (ARDS) and showed that infusion rapidly lowered plasma Ang II and elevated Ang-(1-7) — confirming target engagement. A more recent investigator-initiated trial of rhACE2 in severe COVID-19 (Zoufaly et al., Lancet Respir Med, 2020) demonstrated similar RAAS parameter normalization in a single case report with favorable clinical outcome.",
    },
    {
      type: "heading",
      text: "Renal and Metabolic Applications",
    },
    {
      type: "paragraph",
      text: "ACE2 is highly expressed in the kidney proximal tubule, where it plays roles in amino acid transport (as a co-receptor for neutral amino acid transporters) as well as RAAS regulation. In diabetic nephropathy models, ACE2 expression is downregulated in parallel with disease progression. ACE2 overexpression or MAS agonism reduces proteinuria, mesangial expansion, and glomerular TGF-β signaling in diabetic mouse models. The renoprotective effects of ACE inhibitors and ARBs in diabetic nephropathy may be partially mediated by secondary effects on the ACE2/Ang-(1-7) axis.",
    },
    {
      type: "paragraph",
      text: "In metabolic research, Ang-(1-7)/MAS signaling has been implicated in insulin sensitivity. MAS knockout mice exhibit impaired insulin receptor substrate-1 (IRS-1) phosphorylation in skeletal muscle and adipose tissue, and Ang-(1-7) treatment in obese rodent models improves insulin sensitivity and reduces visceral adiposity. Whether these metabolic effects are direct or secondary to improved blood flow and reduced tissue inflammation remains an active research question.",
    },
    {
      type: "heading",
      text: "Study Design Considerations for ACE2 Pathway Research",
    },
    {
      type: "list",
      items: [
        "Measure both ACE and ACE2 activity in parallel: RAAS balance is more informative than either enzyme alone",
        "Use A779 (MAS receptor antagonist) as a pharmacological control to confirm MAS-mediated effects",
        "Quantify Ang I, Ang II, and Ang-(1-7) by mass spectrometry — ELISA-based assays are subject to cross-reactivity issues with this peptide family",
        "ACE2 shedding (soluble serum ACE2) is mechanistically distinct from membrane ACE2 activity — distinguish these when interpreting results",
        "ACE2 peptide analogs have short plasma half-lives; continuous infusion models more accurately capture steady-state receptor engagement than bolus dosing",
        "The ACE2/MAS axis shows marked tissue-specific expression patterns — cardiac, pulmonary, renal, and brain effects may not extrapolate across tissues",
        "Consider sex differences: estrogen upregulates ACE2 expression, and female rodents generally show higher baseline ACE2 activity with different RAAS balance profiles",
      ],
    },
    {
      type: "heading",
      text: "Summary",
    },
    {
      type: "paragraph",
      text: "ACE2-related peptides — primarily Ang-(1-7) and its analogs — represent one of the most mechanistically well-characterized counter-regulatory axes in cardiovascular biology. The ACE2/Ang-(1-7)/MAS receptor arm of the RAAS provides a compelling therapeutic target across heart failure, hypertension, pulmonary arterial hypertension, diabetic nephropathy, and post-viral inflammatory models. The intersection with SARS-CoV-2 biology has further accelerated research into ACE2 activators like DIZE and recombinant ACE2 protein. Researchers working in cardiovascular, pulmonary, or renal biology will find the ACE2 axis a productive and increasingly well-evidenced area of investigation.",
    },
    {
      type: "disclaimer",
      text: "This article is for educational and research purposes only. ACE2 pathway compounds including Ang-(1-7) analogs and ACE2 activators are research tools, not approved therapeutics (except where specifically noted). Nothing in this article constitutes medical advice.",
    },
  ],
};
