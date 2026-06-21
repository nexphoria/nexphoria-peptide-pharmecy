import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "ss-31-elamipretide-mitochondrial-cardioprotection-research-2026",
  title: "SS-31 (Elamipretide): Mitochondria-Targeted Peptide Research Guide 2026",
  description:
    "A comprehensive research guide to SS-31 (elamipretide) — its mechanism of action targeting cardiolipin in the inner mitochondrial membrane, published clinical and preclinical data, and what researchers need to know about sourcing and protocols.",
  category: "Peptide Research",
  readMinutes: 11,
  publishedAt: "2026-06-21",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "SS-31, known clinically as elamipretide and by the research name MTP-131, is a tetrapeptide that selectively concentrates in the inner mitochondrial membrane (IMM). Unlike most peptides that operate through surface receptors, SS-31 acts directly inside the cell — binding to cardiolipin, a phospholipid critical to mitochondrial function, and modulating the electron transport chain. This mechanism makes it one of the most studied mitochondria-targeted compounds in longevity and cardiac research.",
    },
    {
      type: "heading",
      text: "What Is SS-31?",
    },
    {
      type: "paragraph",
      text: "SS-31 belongs to the Szeto-Schiller family of mitochondria-targeted peptides, developed initially by Hazel Szeto at Cornell University. Its full sequence is D-Arg-Dmt-Lys-Phe-NH2, where Dmt (2',6'-dimethyltyrosine) is a modified amino acid that enhances membrane affinity. The alternating cationic/aromatic motif allows the peptide to accumulate at the inner mitochondrial membrane at concentrations several hundredfold higher than the surrounding cytoplasm — a unique biophysical property driven by the large negative membrane potential (approximately -180 mV) of respiring mitochondria.",
    },
    {
      type: "callout",
      text: "Key identity: D-Arg-Dmt-Lys-Phe-NH2 | MW ~640 Da | Mitochondrial accumulation ratio: 100–1000x above cytoplasm",
    },
    {
      type: "heading",
      text: "Mechanism: Cardiolipin and the Electron Transport Chain",
    },
    {
      type: "paragraph",
      text: "Cardiolipin is a dimeric phospholipid found almost exclusively in the inner mitochondrial membrane, where it plays a structural and functional role in organizing respiratory supercomplexes (Complexes I, III, and IV). During oxidative stress, aging, or ischemic injury, cardiolipin is peroxidized by cytochrome c — a reaction that disrupts supercomplex architecture and reduces electron transport efficiency.",
    },
    {
      type: "paragraph",
      text: "SS-31's primary mechanism is binding to cardiolipin and preventing its peroxidation. By protecting cardiolipin's structural integrity, SS-31 preserves respiratory supercomplex organization, improves electron flux efficiency, reduces electron leak to reactive oxygen species (ROS), and maintains the ATP synthesis capacity of the mitochondria. In aging models, these effects translate to measurable improvements in mitochondrial bioenergetics in tissues with high energy demand: cardiomyocytes, skeletal muscle, and neurons.",
    },
    {
      type: "heading",
      text: "Key Research Areas",
    },
    {
      type: "subheading",
      text: "Cardiac Ischemia-Reperfusion Injury",
    },
    {
      type: "paragraph",
      text: "The most robust preclinical data for SS-31 centers on cardiac ischemia-reperfusion (I/R) injury — the cellular damage that occurs when blood flow is restored to ischemic tissue. The Szeto laboratory and others have demonstrated consistent reductions in infarct size, improved left ventricular function, and reduced cardiomyocyte apoptosis in SS-31-treated rodents following experimental MI. The compound has progressed furthest in cardiac research, with clinical trials examining its role in percutaneous coronary intervention (PCI) and heart failure with preserved ejection fraction (HFpEF).",
    },
    {
      type: "subheading",
      text: "Heart Failure with Preserved Ejection Fraction (HFpEF)",
    },
    {
      type: "paragraph",
      text: "REWARD-HFpEF (NCT02914665) was a Phase II randomized controlled trial examining elamipretide (44 mg/day subcutaneous) in patients with HFpEF. Published in 2020, the trial did not meet its primary endpoint (6-minute walk distance) but demonstrated improvements in biomarkers of cardiac structure and significant improvements in quality of life measures and secondary endpoints. This outcome has informed subsequent trial design, with ongoing research exploring optimal patient selection and dosing windows.",
    },
    {
      type: "subheading",
      text: "Sarcopenia and Skeletal Muscle Aging",
    },
    {
      type: "paragraph",
      text: "Skeletal muscle mitochondrial function declines with aging (sarcopenia), contributing to reduced exercise capacity, insulin resistance, and increased fall risk. Preclinical data from aged rodent models shows SS-31 treatment restoring mitochondrial membrane potential, ATP production capacity, and muscle fiber contractile function. The SPRINTT trial in Italy has examined SS-31 in the context of physical frailty, though large-scale human data in this population remains limited.",
    },
    {
      type: "subheading",
      text: "Kidney (Renal) Protection",
    },
    {
      type: "paragraph",
      text: "Renal tubular cells have extraordinarily high mitochondrial density, making them particularly vulnerable to mitochondrial dysfunction. SS-31 has been studied in models of acute kidney injury (AKI), contrast nephropathy, and chronic kidney disease (CKD). Multiple Phase I/II clinical studies have examined intravenous elamipretide in the context of renal artery stenosis and contrast-induced nephropathy.",
    },
    {
      type: "heading",
      text: "Selected Published Studies",
    },
    {
      type: "list",
      items: [
        "Szeto HH et al. (2014) — Slowing mitochondrial aging by SS-31: reversing mitochondrial dysfunction in aged rat skeletal muscle. Nature Aging precursor publications.",
        "Dai DF et al. (2014) — SS-31 reverses aging-associated cardiac hypertrophy and mitochondrial ultrastructural changes in aged mice. JACC Basic to Translational Science.",
        "Daubert MA et al. (2017) — Novel mitochondria-targeting peptide in heart failure treatment (Phase II REVEAL-HFpEF); SS-31 improves 6MWD and quality of life. JACC Heart Failure.",
        "Sweetwyne MT et al. (2017) — The mitochondria-targeted peptide SS-31 and the mitochondria-targeted antioxidant MitoQ both improve aging phenotypes of kidney tubular cells in culture. Aging Cell.",
        "Kloner RA et al. (2016) — Elamipretide in ischemia-reperfusion: reduced infarct size in porcine model. JACC Cardiovascular Interventions.",
      ],
    },
    {
      type: "heading",
      text: "Dosing Protocols in Research",
    },
    {
      type: "paragraph",
      text: "Note: The following represents protocols used in published research, not clinical recommendations.",
    },
    {
      type: "table",
      headers: ["Model / Setting", "Route", "Dose Range", "Duration"],
      rows: [
        ["Rodent cardiac I/R", "IV or IP", "1–5 mg/kg", "Single dose at reperfusion"],
        ["Rodent aged skeletal muscle", "SC", "3 mg/kg/day", "8–28 days"],
        ["Human HFpEF (REWARD trial)", "SC infusion", "44 mg/day", "4 weeks"],
        ["Human renal artery stenosis", "IV infusion", "0.05 mg/kg/hr", "30 minutes"],
      ],
    },
    {
      type: "paragraph",
      text: "Subcutaneous administration is the primary route studied in chronic use models. The peptide is typically reconstituted in sterile saline for injection. Half-life is approximately 2 hours in plasma, with mitochondrial retention longer due to binding affinity.",
    },
    {
      type: "heading",
      text: "Comparison to Other Mitochondria-Targeted Compounds",
    },
    {
      type: "table",
      headers: ["Compound", "Mechanism", "Primary Target", "Evidence Level"],
      rows: [
        ["SS-31 (Elamipretide)", "Cardiolipin binding, ROS reduction", "Inner mitochondrial membrane", "Phase II clinical data"],
        ["MitoQ", "Ubiquinone delivery to mitochondria", "Complex I/III", "Phase I/II data"],
        ["NAD+ precursors (NMN/NR)", "Sirtuin activation, PARP substrate", "Mitochondrial biogenesis", "Phase II data"],
        ["MOTS-c", "AMPK activation, mitochondrial retrograde signaling", "Metabolic regulation", "Preclinical + early human"],
        ["Urolithin A", "Mitophagy induction", "Mitochondrial quality control", "Phase I/II data"],
      ],
    },
    {
      type: "heading",
      text: "Sourcing Considerations for Researchers",
    },
    {
      type: "paragraph",
      text: "SS-31 presents synthesis challenges that make sourcing quality particularly important. The D-amino acid configuration (D-Arg) and the non-standard Dmt residue require specialized solid-phase peptide synthesis capabilities and additional verification steps. When sourcing SS-31 for research:",
    },
    {
      type: "list",
      items: [
        "Verify sequence confirmation via mass spectrometry — SS-31 contains D-arginine, which must be confirmed as the correct stereoisomer",
        "HPLC purity ≥98% minimum; ≥99% preferred for mechanistic studies",
        "LAL endotoxin testing required for any injection-based protocols",
        "Cold-chain handling essential — lyophilized SS-31 should be stored at -20°C",
        "Avoid suppliers who cannot provide third-party verified COAs",
      ],
    },
    {
      type: "heading",
      text: "What Researchers Should Know in 2026",
    },
    {
      type: "paragraph",
      text: "SS-31 remains one of the few peptides with genuine Phase II clinical trial data supporting its mitochondrial mechanism in humans. The REWARD-HFpEF results, while not meeting primary endpoints, validated the compound's safety and provided meaningful biomarker and quality-of-life data. Ongoing trials in frailty, CKD, and primary mitochondrial diseases represent the leading edge of human evidence.",
    },
    {
      type: "paragraph",
      text: "For basic researchers, SS-31 is a validated tool for studying mitochondrial dysfunction in aging models. The compound's selectivity for the inner mitochondrial membrane, well-characterized mechanism, and substantial literature base make it useful for dissecting the contribution of mitochondrial function to disease phenotypes across tissues.",
    },
    {
      type: "heading",
      text: "Summary",
    },
    {
      type: "paragraph",
      text: "SS-31 (elamipretide) is a mitochondria-targeted tetrapeptide that binds cardiolipin in the inner mitochondrial membrane, protecting respiratory supercomplex organization and reducing oxidative damage. Supported by extensive preclinical data and Phase I/II clinical trials in cardiac and renal applications, it represents one of the most mechanistically validated compounds in mitochondrial medicine research. Proper sourcing with sequence verification is essential given the non-standard amino acid composition.",
    },
    {
      type: "disclaimer",
      text: "For research purposes only. Not intended for human use.",
    },
  ],
};
