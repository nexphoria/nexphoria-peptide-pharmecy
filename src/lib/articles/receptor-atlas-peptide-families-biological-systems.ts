import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: 'receptor-atlas-peptide-families-biological-systems',
  title: 'The Receptor Atlas: How Peptide Families Map to Biological Systems',
  description:
    'A systems-level reference mapping the major research peptide families to their receptor targets, signaling pathways, and primary biological systems. Understand why peptides produce the effects they do — and how to select compounds rationally for your research question.',
  category: 'Research Guides',
  readMinutes: 14,
  publishedAt: '2026-06-22',
  ogImage: '/og-image.jpg',
  body: [
    {
      type: 'paragraph',
      text: 'Peptide research is often presented compound by compound — one peptide, one mechanism, one outcome. In reality, biological systems are organized around receptor families and signaling networks. Understanding which receptor families each peptide class engages, and how those receptor families connect to physiological systems, allows researchers to select compounds rationally, predict interaction effects, and design protocols that address the right biological layer for their question.',
    },
    {
      type: 'paragraph',
      text: 'This guide organizes the major research peptide categories by receptor family, maps each family to the primary biological systems it governs, and provides a working reference for connecting compound selection to experimental design.',
    },
    {
      type: 'callout',
      text: 'This article is a research reference. All compounds discussed are peptides for qualified laboratory use only. Nothing herein constitutes medical advice or guidance for human use.',
    },
    {
      type: 'heading',
      text: 'Framework: How to Read This Atlas',
    },
    {
      type: 'paragraph',
      text: 'Most peptides exert their primary effects through G protein-coupled receptors (GPCRs) — the largest receptor superfamily, accounting for approximately 800 genes in the human genome and the target of roughly 34% of approved pharmaceuticals. A smaller but significant set of research peptides act through receptor tyrosine kinases (RTKs), nuclear receptors, ion channels, or intracellular binding partners. Understanding which receptor class a peptide engages shapes predictions about signaling kinetics, desensitization, off-target effects, and combination logic.',
    },
    {
      type: 'table',
      headers: ['Receptor Class', 'Signaling Mechanism', 'Key Peptide Families'],
      rows: [
        ['GPCRs — Gs-coupled', 'cAMP elevation → PKA → CREB', 'GLP-1 analogs, secretin family, GHRH analogs'],
        ['GPCRs — Gi-coupled', 'cAMP reduction → Gi-effectors', 'Opioid peptides, somatostatin analogs, DSIP targets'],
        ['GPCRs — Gq-coupled', 'PLC → IP3/DAG → PKC/Ca²⁺', 'Oxytocin/vasopressin, angiotensin, GnRH/kisspeptin'],
        ['RTKs — IGF/insulin family', 'PI3K-Akt-mTOR, RAS-MAPK', 'IGF-1, IGF-1 LR3, insulin analogs'],
        ['Cytokine receptors — JAK/STAT', 'JAK1/2 → STAT phosphorylation', 'GH (somatotropin), thymosin Alpha-1'],
        ['Nuclear / intracellular', 'Direct transcriptional regulation', 'Thyroid hormone peptides, some bioregulators'],
        ['Intracellular / actin-binding', 'G-actin sequestration, cytoskeletal remodeling', 'TB-500 (Thymosin Beta-4), cytoskeletal peptides'],
        ['Multi-pathway / structural', 'NO pathway, VEGF, FAK signaling', 'BPC-157, GHK-Cu, tissue-remodeling peptides'],
      ],
    },
    {
      type: 'heading',
      text: 'Family 1: GH Axis Peptides — GHRH Analogs and GHS',
    },
    {
      type: 'subheading',
      text: 'Receptor Targets: GHRH-R (Gs-coupled GPCR), GHSR-1a (Gq/Gi-coupled GPCR)',
    },
    {
      type: 'paragraph',
      text: 'The growth hormone axis peptides divide into two mechanistically distinct subclasses: GHRH analogs (which activate the GHRH receptor on pituitary somatotrophs) and growth hormone secretagogues (GHS), which activate the ghrelin receptor GHSR-1a. Both ultimately increase GH pulse amplitude, but through different receptor families with different physiological consequences.',
    },
    {
      type: 'list',
      items: [
        'GHRH analogs (Sermorelin, CJC-1295 no-DAC, CJC-1295 with DAC, Tesamorelin): Bind GHRH-R → Gs → adenylyl cyclase → cAMP → PKA → CREB phosphorylation → GH gene transcription and secretion. Physiologically pulsatile when using short-acting analogs; tonically elevated with DAC forms.',
        'GH Secretagogues / GHRPs (Ipamorelin, Hexarelin, GHRP-2, GHRP-6, MK-677): Bind GHSR-1a → Gq-coupled calcium mobilization and Gi-mediated cAMP suppression → GH release synergistic with endogenous GHRH. MK-677 is an oral non-peptide GHS acting on the same receptor.',
        'Synergy logic: GHRH analogs + GHS act on different receptors with complementary signal amplification — explaining why CJC-1295/Ipamorelin stacks produce supra-additive GH pulses compared to either compound alone.',
        'Downstream biology: elevated GH → IGF-1 production in liver → mTOR/PI3K/Akt activation → protein synthesis, lipolysis, anti-fibrosis. Also GHRP-specific effects: GHSR-1a expressed in heart, gut, brain — explaining cardioprotective (Hexarelin), appetite (GHRP-6), and cognitive effects beyond GH axis.',
      ],
    },
    {
      type: 'heading',
      text: 'Family 2: GLP-1 / Incretin Peptides — Gs-Coupled GPCR System',
    },
    {
      type: 'subheading',
      text: 'Receptor Targets: GLP-1R, GIPR, GcgR (all Gs-coupled GPCRs)',
    },
    {
      type: 'paragraph',
      text: 'The incretin axis peptides represent the most pharmacologically advanced research peptide category, with approved clinical analogs providing a deep evidence base for the underlying biology. GLP-1R is a Gs-coupled GPCR that, upon activation, elevates intracellular cAMP in pancreatic beta-cells (enhancing glucose-stimulated insulin secretion), hypothalamic neurons (suppressing appetite via arcuate and dorsal vagal complex signaling), and a wide range of peripheral tissues including cardiovascular tissue, kidney, liver, and brain.',
    },
    {
      type: 'table',
      headers: ['Compound', 'Receptor Profile', 'Primary Research Systems'],
      rows: [
        ['Semaglutide', 'GLP-1R agonist', 'Metabolic, cardiovascular, CNS, renal'],
        ['Tirzepatide', 'GLP-1R + GIPR dual agonist', 'Metabolic, body composition, cardiovascular'],
        ['Retatrutide', 'GLP-1R + GIPR + GcgR triple agonist', 'Metabolic, hepatic, BAT thermogenesis, cardiovascular'],
        ['Liraglutide', 'GLP-1R agonist (shorter half-life)', 'Metabolic, neuroprotection, cardiovascular'],
        ['Cagrilintide', 'Amylin receptor (AMY1/2/3) + CT receptor', 'Satiety, energy expenditure — combination studies'],
      ],
    },
    {
      type: 'paragraph',
      text: 'The biological scope of GLP-1R signaling extends well beyond glucose regulation. GLP-1R is expressed in dopamine neurons (addiction research), microglia (neuroinflammation and Parkinson\'s models), cardiomyocytes (cardioprotection in ischemia models), glomerular cells (renal protection), and hepatocytes (NASH/NAFLD models). This explains the active research frontier using GLP-1 analogs in CNS, cardiovascular, and oncology contexts.',
    },
    {
      type: 'heading',
      text: 'Family 3: Tissue Repair and Cytoprotective Peptides',
    },
    {
      type: 'subheading',
      text: 'Receptor Targets: Multi-pathway — NO/VEGF/FAK, G-actin, Cu²⁺ coordination',
    },
    {
      type: 'paragraph',
      text: 'The tissue repair peptides do not fit neatly into a single receptor class — which is part of what makes them scientifically interesting and mechanistically complex. BPC-157, TB-500, and GHK-Cu each engage different molecular targets with converging downstream effects on angiogenesis, inflammation resolution, and tissue matrix remodeling.',
    },
    {
      type: 'list',
      items: [
        'BPC-157 (Body Protection Compound-157): No confirmed canonical receptor identified. Primary mechanisms involve upregulation of eNOS and nNOS (NO system activation), VEGF-independent angiogenesis via FAK-paxillin pathway, and GABAergic/dopaminergic modulation. Research consistently demonstrates anti-inflammatory and healing effects in musculoskeletal, GI, and CNS models.',
        'TB-500 (Thymosin Beta-4 synthetic fragment): Mechanism via G-actin sequestration — TB-500 binds free G-actin in a 1:1 complex, maintaining the pool of unpolymerized actin available for directed cell migration and cytoskeletal remodeling. Downstream: upregulates anti-inflammatory Lck kinase pathway, promotes endothelial and smooth muscle cell migration, reduces fibrosis.',
        'GHK-Cu (Glycine-Histidine-Lysine-Copper): Functions as a copper-transport tripeptide that coordinates Cu²⁺ and delivers it to copper-dependent enzymes including lysyl oxidase (collagen crosslinking), superoxide dismutase (oxidative stress defense), and cytochrome c oxidase (mitochondrial respiration). GHK also functions as a signaling molecule activating over 4,000 genes in human genome studies (Pickart et al., 2012).',
      ],
    },
    {
      type: 'heading',
      text: 'Family 4: Immune-Modulating Peptides — Thymic and Innate Immune Systems',
    },
    {
      type: 'subheading',
      text: 'Receptor Targets: TCR co-stimulation (TA-1), TLR pathways (LL-37), formyl peptide receptors',
    },
    {
      type: 'paragraph',
      text: 'The immune-modulating peptide family targets different layers of immune regulation. Thymosin Alpha-1 (TA-1) is an endogenous thymic hormone that enhances T-cell differentiation and function — it promotes Th1-polarized responses, increases dendritic cell maturation, and upregulates MHC class II expression, making it relevant to immune senescence, cancer immunology, and chronic infection research.',
    },
    {
      type: 'list',
      items: [
        'Thymosin Alpha-1 (TA-1): Activates TLR2 and TLR9 signaling; enhances NK cell function; promotes Th1 cytokine (IL-2, IFN-γ) over Th2 profile. Clinically studied in hepatitis B/C, sepsis, and cancer immunotherapy adjuvant roles.',
        'LL-37 (Cathelicidin): Antimicrobial host-defense peptide engaging formyl peptide receptor-like 1 (FPRL1) and TLR4 antagonism. Membrane-disrupting effect against bacteria and biofilm; immunomodulatory role promoting wound healing and suppressing excessive LPS-driven inflammation.',
        'KPV (Lys-Pro-Val): C-terminal MSH fragment engaging melanocortin receptors (MC1R, MC3R) expressed on macrophages and intestinal epithelium. Anti-inflammatory via inhibition of NF-κB nuclear translocation. Research focus: IBD, gut permeability, skin inflammation.',
        'Thymulin: Zinc-dependent thymic hormone required for T-cell maturation markers (Thy-1, Lyt antigens). Falls with age; research interest in immune senescence and thymus regeneration models.',
      ],
    },
    {
      type: 'heading',
      text: 'Family 5: Neuropeptides — CNS Signaling and Neuromodulation',
    },
    {
      type: 'subheading',
      text: 'Receptor Targets: CRF-R, MC4R, OTR, V1/V2, sigma-1, dopamine/serotonin modulators',
    },
    {
      type: 'paragraph',
      text: 'The neuropeptide research category encompasses compounds that modulate central neurotransmitter systems, stress-response circuits, and cognitive function via peptidergic signaling pathways distinct from classical small-molecule neuropharmacology. Unlike monoamine reuptake inhibitors, most neuropeptides act on specific GPCRs in discrete neural circuits with receptor distributions that predict their behavioral effects.',
    },
    {
      type: 'table',
      headers: ['Compound', 'Primary CNS Receptor', 'Research Focus'],
      rows: [
        ['Selank', 'Uncertain; potentiates GABAergic signaling; inhibits enkephalin degradation', 'Anxiety, stress HPA axis, cognitive performance'],
        ['Semax (N-Acetyl-Semax)', 'BDNF/TrkB pathway upregulation; sigma-1 receptor interactions', 'Neuroprotection, BDNF induction, cognitive enhancement'],
        ['Oxytocin', 'OTR (Gq-coupled GPCR) — amygdala, hypothalamus, nucleus accumbens', 'Social behavior, trust, autism models, stress'],
        ['PT-141 (Bremelanotide)', 'MC3R/MC4R in hypothalamus', 'Sexual arousal circuits, melanocortin pathway'],
        ['Epithalon', 'Indirect: telomerase activation, pineal regulation', 'Aging, sleep-wake, circadian, telomere research'],
        ['DSIP', 'Uncertain; likely opioid-adjacent and sigma receptor interactions', 'Sleep architecture, SWS promotion, stress buffering'],
        ['Dihexa', 'HGF/Met receptor potentiation; PAI-1 inhibition', 'Cognitive enhancement, BDNF/HGF axis, memory models'],
      ],
    },
    {
      type: 'heading',
      text: 'Family 6: Metabolic and Longevity Peptides — Mitochondria and Redox Systems',
    },
    {
      type: 'subheading',
      text: 'Receptor Targets: Mitochondrial membrane (SS-31), AMPK pathway (MOTS-c), NAD⁺ biosynthetic enzymes',
    },
    {
      type: 'paragraph',
      text: 'The mitopeptide and metabolic peptide class targets intracellular energy regulation at the mitochondrial level — mechanistically distinct from the GPCR-mediated peptides described above. This family includes peptides endogenously derived from the mitochondrial genome (MOTS-c, Humanin, SHLP2) as well as synthetic mitochondria-targeted compounds (SS-31/Elamipretide).',
    },
    {
      type: 'list',
      items: [
        'SS-31 (Elamipretide): Cardiolipin-targeting tetrapeptide that selectively concentrates in the inner mitochondrial membrane. Mechanism: stabilizes cardiolipin-cytochrome c interaction, reduces ROS generation from Complex I/III, and preserves mitochondrial cristae morphology during ischemia-reperfusion. Research in cardiac, skeletal muscle, renal, and age-related disease models.',
        'MOTS-c: Encoded by the mitochondrial 12S rRNA gene; activates AMPK and downstream metabolic reprogramming. Promotes glucose uptake independently of insulin signaling. Research focus: insulin resistance, exercise mimetics, skeletal muscle metabolic health, aging.',
        'NAD+ and precursors (NMN, NR): Not peptides in the strict sense, but often studied alongside peptide protocols. NAD+ is the cofactor for sirtuins (SIRT1–7), PARP enzymes, and CD38. Declining with age; restoration research relevant to sirtuin-mediated epigenetic regulation, DNA repair, and mitochondrial biogenesis.',
        'Humanin / SHLP2: Mitochondrial-derived peptides with neuroprotective and insulin-sensitizing properties. Engage formyl peptide receptor-2 (FPR2) and CNTF receptor complex. Decline with age; research in neurodegeneration and metabolic syndrome.',
      ],
    },
    {
      type: 'heading',
      text: 'Practical Application: Matching Receptor Family to Research Question',
    },
    {
      type: 'paragraph',
      text: 'The receptor atlas framework provides a structured approach to protocol design. Rather than selecting compounds by name or popularity, a rational approach begins with the biological question, maps it to the relevant receptor system, and then selects the compound most appropriate for that system given the experimental model.',
    },
    {
      type: 'table',
      headers: ['Research Question', 'Primary Receptor System', 'Candidate Compounds'],
      rows: [
        ['Tissue healing in a tendon injury model', 'NO/VEGF/FAK pathway + G-actin remodeling', 'BPC-157, TB-500, or BPC-157/TB-500 combination'],
        ['GH axis stimulation without exogenous GH', 'GHRH-R + GHSR-1a', 'CJC-1295/Ipamorelin, Sermorelin + GHRP-2'],
        ['Metabolic syndrome insulin resistance', 'GLP-1R, GIPR, AMPK', 'Semaglutide, MOTS-c, Tirzepatide'],
        ['Anxiety and HPA axis attenuation', 'GABAergic modulation, enkephalin system', 'Selank, Semax, BPC-157 (GABAergic pathway)'],
        ['Mitochondrial protection in ischemia model', 'Cardiolipin stabilization, Complex I/III', 'SS-31 (Elamipretide), NAD+'],
        ['Immune senescence reversal', 'TLR signaling, thymic axis', 'Thymosin Alpha-1, Thymulin, LL-37'],
        ['Collagen synthesis and skin aging', 'Cu-dependent enzymes, NRF2 pathway', 'GHK-Cu, Snap-8'],
        ['Longevity multi-target protocol', 'Telomerase, mitochondria, sirtuin, immune', 'Epithalon, NAD+, SS-31, GHK-Cu, TA-1'],
      ],
    },
    {
      type: 'heading',
      text: 'Interaction Considerations When Combining Receptor Families',
    },
    {
      type: 'paragraph',
      text: 'Combining compounds from different receptor families generally produces additive or complementary effects, since the mechanisms are non-redundant. The primary considerations in multi-compound protocols are: receptor desensitization (relevant for GHRPs with chronic GHSR-1a activation — see cycling protocols), downstream pathway convergence (GLP-1R and GH axis both feed IGF-1/mTOR — monitoring for supra-additive anabolic signals), and competition for the same biological substrate (multiple antioxidant peptides may not add linearly if oxidative stress load is already maximally addressed).',
    },
    {
      type: 'paragraph',
      text: 'The receptor atlas is not a clinical protocol guide — it is a mechanistic framework for hypothesis generation and experimental design. The value of understanding receptor biology is that it constrains the space of plausible mechanisms, guides biomarker selection for outcomes, and helps interpret unexpected results in terms of underlying receptor pharmacology.',
    },
    {
      type: 'disclaimer',
      text: 'All compounds discussed are research peptides for qualified laboratory use only. Receptor pharmacology described is based on preclinical and mechanistic literature. Nothing in this article constitutes medical advice, clinical guidance, or endorsement for human use.',
    },
  ],
};
