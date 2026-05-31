import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: 'peptide-research-neuroprotection-bpc157-ss31-nad-semax',
  title: 'Peptide Research for Neuroprotection: BPC-157, SS-31, NAD+, and Semax',
  description:
    "A researcher's guide to neuroprotective peptide protocols: mechanisms, published data, model selection, and multi-compound study design covering BPC-157, SS-31, NAD+/NMN, and Semax.",
  category: 'Compound Profiles',
  readMinutes: 11,
  publishedAt: '2026-05-31',
  ogImage: '/og/products/bpc-157.png',
  body: [
    {
      type: 'paragraph',
      text: 'Neuroprotection research spans several mechanistic territories — mitochondrial integrity, neuroinflammation, neurotrophic signaling, and oxidative stress — and no single peptide covers all of them. A growing body of preclinical literature suggests that BPC-157, SS-31, NAD+/NMN, and Semax each address distinct nodes in the neuroprotective cascade. This guide walks through each compound\'s mechanism and published data, then offers a framework for multi-compound neuroprotection study design.',
    },
    {
      type: 'callout',
      text: 'All compounds discussed are for Research Use Only (RUO). Not for human use. Protocol parameters should be validated for your laboratory conditions and IACUC-approved procedures.',
    },
    {
      type: 'heading',
      text: 'The Four Axes of Neurodegeneration',
    },
    {
      type: 'paragraph',
      text: 'Neurodegeneration research identifies four converging injury pathways addressable by research peptides: (1) Mitochondrial dysfunction — impaired oxidative phosphorylation, increased mitochondrial ROS, cardiolipin peroxidation, and mPTP opening drive neuronal energy failure; SS-31 directly targets cardiolipin on the inner mitochondrial membrane. (2) Neuroinflammation — activated microglia (M1 polarization, NLRP3 inflammasome priming), astrogliosis, and SASP create a pro-inflammatory CNS environment; BPC-157 suppresses iNOS/NO-mediated inflammatory amplification and reduces TNF-α/IL-6 in CNS injury models. (3) Neurotrophic deficit — BDNF, NGF, and VEGF decline with age and injury; Semax upregulates BDNF and VEGF via melanocortin receptor binding; NAD+/SIRT1 activates BDNF promoter IV via histone deacetylation. (4) Oxidative stress — SOD and catalase decline, 8-OHdG accumulates, and GSH/GSSG ratio falls; NAD+/SIRT3 upregulates SOD2; GHK-Cu activates Nrf2/Keap1 for cytosolic GSH synthesis; SS-31 prevents cardiolipin peroxidation at the mitochondrial ROS source.',
    },
    {
      type: 'heading',
      text: 'BPC-157: CNS Injury and Anti-Inflammatory Neuroprotection',
    },
    {
      type: 'paragraph',
      text: "BPC-157's neuroprotective data comes primarily from traumatic brain injury (TBI) and excitotoxicity models. In rodent controlled cortical impact (CCI) models, BPC-157 administered at 10 μg/kg IP (starting 30 minutes post-injury) produced statistically significant improvements in Neurological Severity Score (NSS) at 24h and 7-day endpoints. Mechanistically, iNOS and TNF-α mRNA were suppressed in the perilesional cortex — L-NAME partial abrogation distinguishes eNOS anti-inflammatory from iNOS-driven inflammatory contribution.",
    },
    {
      type: 'paragraph',
      text: 'In rat spinal cord contusion models (T9 level, 25 mm height), BPC-157 at 10 μg/kg IP beginning 1h post-injury improved hindlimb locomotor rating (BBB scale) by 2.3–3.1 points at 28 days vs. vehicle. VEGFR2/VEGF mRNA upregulation was confirmed in perilesional tissue by RT-PCR, supporting angiogenic BBB microvasculature repair as the primary neuroprotective mechanism alongside anti-inflammation.',
    },
    {
      type: 'heading',
      text: 'SS-31 (Elamipretide): Mitochondrial Neuroprotection',
    },
    {
      type: 'paragraph',
      text: "SS-31's neuroprotective profile is rooted in its cardiolipin-binding mechanism on the inner mitochondrial membrane (IMM). Neurons are among the most metabolically demanding cells in the body — mitochondrial integrity is directly linked to neuronal survival. In MCAO stroke models, SS-31 at 3 mg/kg SC daily (×7 days starting 1h post-MCAO) reduced infarct volume by 40–50% vs. vehicle. MitoSOX staining confirmed reduced mitochondrial superoxide in perilesional tissue, and calcium retention capacity (CRC) assay indicated delayed mPTP opening.",
    },
    {
      type: 'paragraph',
      text: 'In 3×Tg-AD mice, SS-31 treatment reduced mitochondrial fragmentation in hippocampal neurons (DRP1 localization reduced ~35%), preserved Complex I activity, and improved Morris water maze performance. In 24-month C57BL/6J mice, Siegel 2013 found that SS-31 reversed qualitative mitochondrial dysfunction without increasing biogenesis markers — the "quality vs. quantity" distinction is critical for study design, as SS-31\'s effects are independent of PGC-1α and mtDNA copy number.',
    },
    {
      type: 'heading',
      text: 'NAD+/NMN: Neuronal Energy, SIRT1/BDNF, and PARP Competition',
    },
    {
      type: 'paragraph',
      text: 'NAD+ has three primary neuroprotective mechanisms: (1) SIRT1-mediated BDNF transcription — SIRT1 deacetylates histone H3K14 at BDNF promoter IV, upregulating activity-dependent BDNF expression; in NAD+-depleted neurons (FK866), BDNF mRNA falls ~60–70% and is rescued by NMN supplementation. (2) SIRT3-mediated SOD2 activation — Lys68/Lys122 deacetylation activates mitochondrial SOD2, reducing superoxide alongside SS-31\'s cardiolipin protection. (3) PARP1 competition — in ischemic/traumatic CNS injury, PARP1 hyperactivation causes rapid NAD+ depletion and parthanatos; 500 mg/kg IP NMN delays this and extends the therapeutic window (Alano 2010).',
    },
    {
      type: 'paragraph',
      text: 'Stein and Imai 2014 showed NMN IP dosing (500 mg/kg/day × 12 months) in aged mice preserved hippocampal NAD+ levels, improved Seahorse OCR in isolated hippocampal mitochondria, and correlated with better Y-maze alternation. Critical note: do not use BAC water for NAD+. Reconstitute in sterile saline or PBS (pH 6.5–7.4), use amber vials (259 nm photosensitivity), and freeze single-use aliquots at −80°C for serial CNS studies.',
    },
    {
      type: 'heading',
      text: 'Semax: BDNF Upregulation via Melanocortin Receptors',
    },
    {
      type: 'paragraph',
      text: 'Semax is an ACTH(4–7)PGP heptapeptide that binds MC4R and MC3R without activating the HPA axis — no cortisol/ACTH response, which is critical for CNS studies where corticosterone confounds behavioral outcomes. Dolotov 2006 demonstrated that Semax (50 μg/kg SC) produced a 2–3× increase in BDNF mRNA in rat hippocampus at 1–3h, returning to baseline by 24h. This pulsatile BDNF response may be preferable to continuous osmotic delivery, which can cause synaptic downscaling.',
    },
    {
      type: 'paragraph',
      text: 'Agapova 2007 showed that intranasal Semax (50 μg/rat × 5 days before MCAO) significantly upregulated VEGF mRNA in perilesional cortex and hippocampus vs. vehicle, with associated reduction in infarct volume at 24h TTC staining. For intranasal delivery: 5–10 μL per nostril at 1 mg/mL in isotonic saline pH 4.5–5.5, using a Hamilton syringe or gel-loading tip with 45° head tilt; allow 15–30 minutes before behavioral testing for olfactory/trigeminal transport.',
    },
    {
      type: 'heading',
      text: 'Multi-Compound Neuroprotection Study Design',
    },
    {
      type: 'paragraph',
      text: "Given non-overlapping primary targets, BPC-157, SS-31, NAD+, and Semax can be combined without receptor competition. BPC-157 targets eNOS/VEGFR2/FAK (angiogenic repair, anti-neuroinflammation). SS-31 targets cardiolipin/IMM (mitochondrial ROS source suppression). NAD+/NMN targets SIRT1/SIRT3 (BDNF transcription, SOD2). Semax targets MC4R/MC3R (BDNF upregulation, VEGF preconditioning).",
    },
    {
      type: 'table',
      headers: ['Group', 'Compound(s)', 'Dose', 'Route', 'Frequency'],
      rows: [
        ['1', 'Vehicle', '—', 'IP/SC', 'Daily'],
        ['2', 'BPC-157', '10 μg/kg', 'IP', 'Daily'],
        ['3', 'SS-31', '3 mg/kg', 'SC', 'Daily'],
        ['4', 'NAD+ / NMN', '500 mg/kg', 'IP', 'Daily'],
        ['5', 'Semax', '50 μg/kg', 'SC or IN', 'Daily'],
        ['6', 'BPC-157 + SS-31', 'As above', 'IP + SC', 'Daily'],
        ['7', 'BPC-157 + SS-31 + NAD+', 'As above', 'IP + SC', 'Daily'],
        ['8', 'All four compounds', 'As above', 'IP + SC + IN', 'Daily'],
      ],
    },
    {
      type: 'paragraph',
      text: 'n = 8–10 per group (80% power, CV% ≈ 25–35% for NSS and infarct volume endpoints). Total animals: 64–80. For 3-compound designs with budget constraints, BPC-157 + SS-31 + NAD+ covers three orthogonal nodes with the strongest individual compound support.',
    },
    {
      type: 'heading',
      text: 'Endpoint Selection',
    },
    {
      type: 'table',
      headers: ['Endpoint', 'Method', 'Phase', 'Primary Compound'],
      rows: [
        ['Infarct volume', 'TTC staining (24h)', 'Acute', 'BPC-157, SS-31'],
        ['NSS / BBB score', 'Standardized scoring', '24h–28d', 'BPC-157'],
        ['BDNF protein', 'ELISA (R&D Systems DBD00)', '24h, 7d', 'Semax, NAD+'],
        ['MitoSOX', 'Flow cytometry (isolated mito)', '24h', 'SS-31, NAD+'],
        ['Calcium retention capacity (CRC)', 'Spectrofluorometry', '24h', 'SS-31'],
        ['Seahorse OCR/SRC', 'Seahorse XFe96 (synaptosomes)', '7d, 28d', 'SS-31, NAD+'],
        ['VEGF mRNA', 'RT-PCR (perilesional)', '24h, 72h', 'BPC-157, Semax'],
        ['Tissue NAD+/NADH', 'EnzyFluo EFNADH', '7d', 'NAD+'],
        ['8-OHdG', 'ELISA (Cayman 589320)', '7d, 28d', 'NAD+, SS-31'],
        ['Morris water maze / Y-maze', 'Behavioral testing', '28d, 90d', 'All'],
        ['Iba-1 IHC', 'Microglia activation', '7d', 'BPC-157'],
      ],
    },
    {
      type: 'heading',
      text: 'Reconstitution and Storage Summary',
    },
    {
      type: 'table',
      headers: ['Compound', 'Solvent', 'Concentration', 'Storage (Lyophilized)', 'Storage (Reconstituted)'],
      rows: [
        ['BPC-157', 'BAC water', '0.5–1 mg/mL', '−20°C', '4°C, ≤14 days'],
        ['SS-31', 'Sterile saline (NEVER BAC water)', '1–5 mg/mL', '−20°C', '4°C, ≤7 days; do NOT freeze'],
        ['NAD+/NMN', 'Sterile saline or PBS pH 6.5–7.4', '50–100 mg/mL', '−20°C amber', '−80°C aliquots, thaw fresh'],
        ['Semax', 'Isotonic saline pH 4.5–5.5', '1 mg/mL (IN)', '−20°C', '4°C, ≤14 days, amber vials'],
      ],
    },
    {
      type: 'heading',
      text: 'Research Design Considerations',
    },
    {
      type: 'list',
      items: [
        'Model selection: MCAO produces ischemic penumbra where SS-31 and BPC-157 show strongest data. TBI/CCI has prominent axonal stretch-injury and BBB disruption where Semax neurotrophic priming and BPC-157 angiogenic repair are most relevant.',
        'Timing window: BPC-157 and SS-31 benefit when initiated within 1–4h of acute CNS injury. Semax preconditioning requires multi-day pre-treatment. NAD+ is effective in both acute (500 mg/kg IP within 1h) and chronic contexts.',
        'Anesthesia artifacts: Isoflurane is neuroprotective via mitochondrial mechanisms overlapping with SS-31. For infarct studies, use ketamine/xylazine or urethane to avoid confounding of SS-31 effects. Consistent anesthetic protocol is critical across all groups.',
        'Behavioral endpoint sensitivity: NSS and BBB scores have ceiling/floor effects at 28+ day endpoints. Use more sensitive tests: rotarod, Y-maze spontaneous alternation, Morris water maze (probe trial latency and path length). Power calculations should use CV% from behavioral, not infarct, data.',
        'Sex differences: Female rats show smaller infarct volumes post-MCAO due to E2-mediated neuroprotection (Dubal 1999). Power for sex×treatment interaction if sex differences are a study question; otherwise use same-sex cohorts and disclose in methods.',
        'BBB penetration verification: For SC and IP routes, verify CNS compound exposure via post-mortem brain tissue assay — LC-MS/MS for Semax; SIRT1 deacetylase activity in cortical homogenate for NAD+; SS-31 mass spec in isolated brain mitochondrial fraction. Route-of-exposure confirmation substantially elevates publication quality.',
      ],
    },
    {
      type: 'disclaimer',
      text: 'All Nexphoria compounds are sold for Research Use Only. Not for human use, diagnosis, or treatment. All protocols must comply with IACUC and applicable institutional regulations.',
    },
  ],
};
