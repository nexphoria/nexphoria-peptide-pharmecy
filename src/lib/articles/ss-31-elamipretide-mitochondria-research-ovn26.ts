import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "ss-31-elamipretide-mitochondria-targeted-peptide-research-guide",
  title: "SS-31 (Elamipretide): Mitochondria-Targeted Peptide Research Guide",
  description:
    "A comprehensive research guide to SS-31 (elamipretide), the mitochondria-targeted tetrapeptide. Covers mechanism of action, cardiolipin binding, ATP production, preclinical data, and research protocols for aging, cardiac, and neurodegenerative models.",
  category: "Compound Profiles",
  readMinutes: 11,
  publishedAt: "2026-06-22",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "SS-31 (elamipretide, also known as MTP-131 or Bendavia) is a tetrapeptide with the sequence D-Arg-2'6'-Dmt-Lys-Phe-NH2. Unlike most peptides that act on cell-surface receptors, SS-31 is specifically designed to concentrate within the inner mitochondrial membrane, where it exerts its primary biological effects by stabilizing cardiolipin and supporting electron transport chain (ETC) function.",
    },
    {
      type: "paragraph",
      text: "First synthesized by Hazel Szeto and Peter Schiller at Weill Cornell Medicine, SS-31 belongs to the Szeto-Schiller (SS) family of mitochondria-targeted peptides. It has since become one of the most studied compounds in the field of mitochondrial medicine and is currently in clinical development for heart failure, primary mitochondrial myopathy, and aging-related conditions.",
    },
    {
      type: "heading",
      text: "Mechanism: Cardiolipin Stabilization",
    },
    {
      type: "paragraph",
      text: "The key target of SS-31 is cardiolipin — a unique phospholipid found almost exclusively in the inner mitochondrial membrane (IMM). Cardiolipin comprises approximately 20% of the IMM lipid content and plays critical structural roles: it stabilizes the complexes of the electron transport chain (Complexes I–IV), maintains the integrity of ATP synthase (Complex V), supports cytochrome c binding, and helps maintain mitochondrial cristae architecture.",
    },
    {
      type: "paragraph",
      text: "During cellular stress, aging, or ischemia, cardiolipin can become oxidized. Oxidized cardiolipin loses its binding affinity for cytochrome c, causing it to dissociate from the IMM and translocate to the outer mitochondrial membrane — a key early step in apoptosis. Additionally, disruption of cardiolipin destabilizes the ETC supercomplexes (respirasomes), reducing electron flow efficiency and increasing superoxide radical production.",
    },
    {
      type: "paragraph",
      text: "SS-31 binds selectively to cardiolipin via electrostatic interactions between its two positively charged residues (D-Arg and Lys) and the negatively charged phosphate headgroups of cardiolipin. The aromatic residues (2'6'-Dmt and Phe) insert into the lipid bilayer, anchoring the peptide at the IMM. This binding prevents cardiolipin peroxidation, stabilizes cytochrome c association with the membrane, and restores supercomplex assembly.",
    },
    {
      type: "heading",
      text: "Effects on Electron Transport Chain and ATP Production",
    },
    {
      type: "paragraph",
      text: "By stabilizing cardiolipin and restoring supercomplex organization, SS-31 has been shown in preclinical studies to improve electron flow through the ETC, reduce electron leak to oxygen (decreasing superoxide production), restore ATP synthesis rates under stress conditions, and reduce mitochondrial membrane potential dissipation.",
    },
    {
      type: "paragraph",
      text: "A landmark 2019 study by Chavez et al. demonstrated that SS-31 treatment in aged mouse skeletal muscle restored mitochondrial cristae density, improved Complex I–IV assembly into supercomplexes, and significantly increased both State 3 respiration (ADP-stimulated) and ATP production rates — essentially reversing age-associated mitochondrial dysfunction at the structural level.",
    },
    {
      type: "heading",
      text: "Cardiovascular Research",
    },
    {
      type: "paragraph",
      text: "The most extensively studied application of SS-31 is cardiovascular protection. Multiple preclinical studies have examined its effects in ischemia-reperfusion (IR) injury models, heart failure, and diabetic cardiomyopathy.",
    },
    {
      type: "subheading",
      text: "Ischemia-Reperfusion Injury",
    },
    {
      type: "paragraph",
      text: "In rodent IR models, pre-treatment or post-conditioning with SS-31 (at doses of 3–5 mg/kg IV) has been shown to reduce infarct size by 30–60% compared to vehicle controls. The proposed mechanism involves prevention of the mitochondrial permeability transition pore (mPTP) opening during reperfusion — a critical event that triggers cardiomyocyte death. By stabilizing cardiolipin and preserving IMM integrity, SS-31 appears to raise the threshold for mPTP activation.",
    },
    {
      type: "subheading",
      text: "Heart Failure Models",
    },
    {
      type: "paragraph",
      text: "In a transverse aortic constriction (TAC) model of pressure-overload heart failure in mice, chronic SS-31 treatment (3 mg/kg/day, subcutaneous) significantly attenuated left ventricular hypertrophy, preserved ejection fraction, reduced cardiac fibrosis, and improved mitochondrial morphology. The LARIAT clinical trial examined elamipretide in patients with HFrEF (heart failure with reduced ejection fraction), demonstrating safety, favorable pharmacokinetics, and trends toward improved cardiac structure and exercise tolerance.",
    },
    {
      type: "heading",
      text: "Aging and Sarcopenia Research",
    },
    {
      type: "paragraph",
      text: "Skeletal muscle mitochondrial dysfunction is a central driver of sarcopenia — the age-related loss of muscle mass and strength. SS-31 has been studied as a potential intervention in this context with compelling preclinical results.",
    },
    {
      type: "paragraph",
      text: "In aged mouse models (24–26 months), subcutaneous SS-31 (3 mg/kg/day for 8 weeks) restored skeletal muscle oxidative capacity, improved maximal force production, reduced mtDNA mutation load, and increased satellite cell activation — suggesting potential regenerative effects. Mitochondrial morphology shifted from fragmented to elongated networks, consistent with restoration of fusion-fission balance.",
    },
    {
      type: "paragraph",
      text: "The SPEED trial examined elamipretide in patients with Primary Mitochondrial Myopathy, a genetic condition characterized by severe mitochondrial dysfunction. Patients showed significant improvements in 6-minute walk distance and patient-reported fatigue measures, supporting the relevance of mitochondrial-targeted approaches in clinical muscle disease.",
    },
    {
      type: "heading",
      text: "Neurological Research",
    },
    {
      type: "paragraph",
      text: "Given the high energetic demands of neurons and the well-established role of mitochondrial dysfunction in neurodegeneration, SS-31 has been studied in models of Alzheimer's disease, Parkinson's disease, and traumatic brain injury.",
    },
    {
      type: "paragraph",
      text: "In AD mouse models (APP/PS1), SS-31 treatment reduced amyloid plaque burden, tau hyperphosphorylation, synaptic protein loss, and cognitive deficits in Morris water maze testing. The proposed mechanism involves mitochondrial rescue upstream of amyloid and tau pathology — supporting the 'mitochondrial cascade hypothesis' of Alzheimer's disease.",
    },
    {
      type: "paragraph",
      text: "In MPTP-induced Parkinson's models, SS-31 (5 mg/kg, IP) protected dopaminergic neurons in the substantia nigra and preserved striatal dopamine levels, with associated improvements in rotarod performance. The protection correlated with reduced mitochondrial superoxide production and preservation of mitochondrial membrane potential in substantia nigra neurons.",
    },
    {
      type: "heading",
      text: "Renal Research",
    },
    {
      type: "paragraph",
      text: "Kidney tubular epithelial cells are highly dependent on mitochondrial ATP generation due to their active transport functions. SS-31 has been studied in models of acute kidney injury (AKI) from cisplatin nephrotoxicity, renal IR injury, and contrast-induced nephropathy. In cisplatin AKI models, SS-31 pre-treatment significantly reduced tubular necrosis, preserved GFR, and reduced urinary KIM-1 and NGAL biomarkers of renal injury.",
    },
    {
      type: "heading",
      text: "Research Protocols and Dosing Considerations",
    },
    {
      type: "paragraph",
      text: "SS-31 is water-soluble and typically administered subcutaneously or intraperitoneally in preclinical research. Common dose ranges in rodent studies are 3–10 mg/kg/day (subcutaneous) for chronic protocols, or 1–5 mg/kg as a single dose for acute IR injury protection protocols. The peptide has a relatively short half-life (~2 hours in plasma) but concentrates in mitochondria-rich tissues for extended periods due to its high affinity for cardiolipin.",
    },
    {
      type: "list",
      items: [
        "SS-31 is water-soluble and stable in bacteriostatic water at 4°C for several weeks",
        "Subcutaneous administration in rodents: typical dose 3 mg/kg/day for chronic aging studies",
        "Acute IR protection: 3–5 mg/kg IV or IP 30 minutes before ischemia, or immediately at reperfusion",
        "The compound preferentially accumulates in tissues with high mitochondrial density: heart, kidney, brain, skeletal muscle",
        "SS-31 does not cross the blood-brain barrier efficiently after systemic injection in intact animals — intracerebroventricular or intranasal routes are used for direct CNS studies",
      ],
    },
    {
      type: "heading",
      text: "Key Biomarkers for SS-31 Research",
    },
    {
      type: "table",
      headers: ["Biomarker", "What It Measures", "Expected Direction with SS-31"],
      rows: [
        ["Mitochondrial oxygen consumption (Seahorse XF)", "ETC complex activity, spare respiratory capacity", "Increase"],
        ["ATP production rate", "Overall mitochondrial output", "Increase"],
        ["Superoxide (MitoSOX)", "Mitochondrial ROS generation", "Decrease"],
        ["Cytochrome c (IHC/western)", "Apoptosis pathway activation", "Decrease/retained at IMM"],
        ["Cardiolipin peroxidation (NAO staining)", "Cardiolipin oxidation status", "Decrease"],
        ["mPTP opening (TMRM loss assay)", "Mitochondrial permeability transition", "Decrease"],
        ["Mitochondrial cristae density (TEM)", "Structural morphology", "Increase"],
      ],
    },
    {
      type: "heading",
      text: "SS-31 vs. Other Mitochondria-Targeted Peptides",
    },
    {
      type: "paragraph",
      text: "SS-31 is the most potent and well-characterized member of the SS peptide family. SS-20 (Phe-D-Arg-Phe-Lys-NH2) lacks the antioxidant 2'6'-Dmt residue but retains cardiolipin binding. MOTS-c is a mitochondrial-derived peptide (MDP) with distinct mechanisms involving AMPK activation and nuclear gene regulation rather than direct cardiolipin binding. NAD+ precursors (NMN, NR) work upstream by restoring NAD+/NADH ratios and sirtuin activity rather than directly stabilizing ETC architecture.",
    },
    {
      type: "heading",
      text: "Clinical Development Status",
    },
    {
      type: "paragraph",
      text: "Elamipretide (SS-31) is under clinical development by Stealth BioTherapeutics (now part of Mitobridge/Astellas) for multiple conditions. Phase 2 data from the SPEED trial (Primary Mitochondrial Myopathy) showed clinically meaningful improvements in walk distance and fatigue. The MMPOWER-3 trial in Barth syndrome (a cardiolipin remodeling disorder caused by tafazzin mutations) showed strong effects in platelet cardiolipin composition and cardiac function. Multiple other trials in heart failure, diabetic cardiomyopathy, and age-related mitochondrial dysfunction are ongoing or completed.",
    },
    {
      type: "callout",
      text: "For Research Use Only: SS-31 (elamipretide) is a research peptide used in preclinical and translational studies. It is not approved for human therapeutic use outside of clinical trial settings. All information presented here is for educational purposes about ongoing scientific research.",
    },
    {
      type: "heading",
      text: "Summary",
    },
    {
      type: "paragraph",
      text: "SS-31 (elamipretide) represents a mechanistically distinct approach to addressing mitochondrial dysfunction — acting directly at the inner mitochondrial membrane rather than through receptor pathways or upstream metabolic precursors. Its selective cardiolipin binding, restoration of ETC supercomplex organization, and reduction of mitochondrial ROS generation make it a valuable research tool for studying age-related bioenergetic decline, ischemic injury, cardiomyopathy, neurodegeneration, and sarcopenia. Ongoing clinical trials continue to characterize its therapeutic potential across multiple disease contexts.",
    },
    {
      type: "disclaimer",
      text: "This article is for informational and educational purposes only. SS-31 is a research compound. All research involving peptides must comply with applicable institutional and regulatory guidelines.",
    },
  ],
};
