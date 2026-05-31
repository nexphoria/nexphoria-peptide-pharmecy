import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: 'humanin-shlp2-mitochondrial-derived-peptides-mots-c',
  title: 'Humanin and SHLP2: The Mitochondrial-Derived Peptides Beyond MOTS-c',
  description:
    'A research guide to the full MDP family — Humanin, SHLP2, and MOTS-c. Covers 16S/12S rRNA origins, cytoprotective receptor pharmacology, aging-decline data, DIO metabolic research, and preclinical dosing protocols.',
  category: 'Longevity',
  readMinutes: 9,
  publishedAt: '2026-05-31',
  ogImage: '/og-image.jpg',
  body: [
    {
      type: 'paragraph',
      text: 'The mitochondrial genome — all 16,569 base pairs of it — was long assumed to encode only 13 proteins, 22 tRNAs, and 2 ribosomal RNAs. That assumption collapsed over the past decade with the discovery of short open reading frames (sORFs) embedded within those ribosomal RNA genes. The peptides they encode, collectively called mitochondrial-derived peptides (MDPs), are now recognized as a distinct class of cytoprotective and metabolic regulators. MOTS-c (from 12S rRNA) has received the most research attention. But two earlier-discovered MDPs — Humanin and SHLP2 — have equally compelling research profiles and represent independent therapeutic targets with orthogonal mechanisms.',
    },
    {
      type: 'heading',
      text: 'The MDP Family: Three Peptides, Three Origins',
    },
    {
      type: 'paragraph',
      text: 'Humanin (HN) is a 21-amino acid peptide encoded in the 16S mitochondrial ribosomal RNA gene, first identified by Hashimoto et al. in 2001 (PNAS) via a cDNA survival screen in neurons exposed to familial Alzheimer\'s disease gene products. SHLP2 (small humanin-like peptide 2) is one of six SHLP family members encoded in the 12S rRNA region, characterized by Cobb et al. in 2016 (Journal of Biological Chemistry). MOTS-c, the most recently studied MDP, is also encoded in the 12S rRNA coding region (Lee et al. 2015, Cell Metabolism). All three are cytoprotective. None share a primary receptor. Their mechanisms are orthogonal — making combination protocols an active area of preclinical investigation.',
    },
    {
      type: 'heading',
      text: 'Humanin: Structure, Receptors, and Pharmacology',
    },
    {
      type: 'paragraph',
      text: 'Humanin is a 21-amino acid peptide (MAPRGFSCLLLLTSEIDLPVK) with a critical Cys at position 8. The analog IM-HN (S14G substitution) is approximately 1,000-fold more potent than native Humanin and is used in most published preclinical studies. Humanin signals through at least three receptor complexes: (1) FPRL1 (formyl peptide receptor-like 1, a Gαi-coupled GPCR activated by nanomolar concentrations of IM-HN), (2) a heterotrimeric receptor complex of CNTFR-α/WSX-1/gp130 (activating JAK/STAT3 signaling, considered primary for cytoprotective data), and (3) intracellular binding to IGFBP-3 (displacing IGF-1 and increasing free IGF-1 bioavailability) and to the pro-apoptotic protein tBID.',
    },
    {
      type: 'paragraph',
      text: 'The CNTFR-α/WSX-1/gp130 complex is the same heterotrimeric receptor used by CNTF (ciliary neurotrophic factor) and CT-1 (cardiotrophin-1). Humanin binding activates JAK1/JAK2-mediated STAT3 phosphorylation at Tyr705, driving nuclear translocation and Bcl-2/Mcl-1 anti-apoptotic gene expression. This pathway explains Humanin\'s broad cytoprotective effects across neuronal, cardiomyocyte, and hepatocyte models.',
    },
    {
      type: 'callout',
      text: 'Use IM-HN (S14G analog) for all in vivo research — approximately 1,000-fold more potent than native Humanin. Native HN requires impractical doses (~1-10 mg/kg) and is prone to aggregation at concentrations above 100 μg/mL due to the Cys-8 residue. IM-HN is the standard in published literature.',
    },
    {
      type: 'heading',
      text: 'Humanin: Key Published Research Data',
    },
    {
      type: 'paragraph',
      text: 'Three research lines define the current evidence base:\n\nNeuroprotection (Hashimoto 2001, PNAS): Humanin was originally isolated as a cDNA that suppressed Alzheimer-associated neuronal death. It inhibits Abeta(1-42)-induced apoptosis in PC12 cells and primary cortical neurons via FPRL1/Gαi/PKC pathway, with EC50 approximately 1-5 μM for native HN vs 1-5 nM for IM-HN. The FAD gene products PSAPP/APPV717I-induced cell death was fully suppressed by 1 μM IM-HN in primary neurons.\n\nIGF-1 bioavailability (Hoang 2012, Aging Cell): Humanin competes with IGF-1 for IGFBP-3 binding (Kd approximately 10 nM for IM-HN/IGFBP-3 complex), displacing IGF-1 and increasing free IGF-1 bioavailability. Plasma Humanin positively correlates with circulating total and free IGF-1 in a centenarian cohort, suggesting Humanin-mediated IGF-1 liberation may contribute to longevity phenotypes.\n\nMetabolic effects (Brown 2013, Cell Metabolism): IM-HN at 1 mg/kg/day IP for 4 weeks in C57BL/6J DIO mice improved insulin tolerance (ITT AUC -28% vs vehicle), improved glucose tolerance (GTT AUC -21%), and reduced hepatic triglyceride accumulation (Oil Red O staining -35%). Serum STAT3 phosphorylation in liver was reduced, suggesting hepatic JAK/STAT3-mediated insulin resistance as a mechanism. Note: pair-fed controls were not included in Brown 2013, leaving direct metabolic effects vs secondary weight-loss attribution incompletely dissected.',
    },
    {
      type: 'heading',
      text: 'Humanin Aging Decline: The Epidemiological Data',
    },
    {
      type: 'paragraph',
      text: 'Sha et al. (2021, PNAS) provided the most comprehensive human aging data for Humanin. Key findings: (1) Plasma Humanin declines approximately 50% from age 25 to age 75 in a cross-sectional human cohort. (2) In C57BL/6J mice, serum Humanin at 24 months was approximately 40% of 3-month baseline levels. (3) Centenarians (age 97-110) showed paradoxically elevated Humanin relative to 70-90 year-olds — suggesting Humanin maintenance may be a survival biomarker. (4) Offspring of centenarians showed approximately 45% higher Humanin vs age-matched controls without centenarian ancestry. This aging-decline pattern mirrors MOTS-c (Young 2021, Nature Aging) and supports both as mechanistic longevity biomarkers rather than simple epiphenomena.',
    },
    {
      type: 'heading',
      text: 'SHLP2: Structure and Apoptosis-Inhibitory Mechanism',
    },
    {
      type: 'paragraph',
      text: 'SHLP2 is a 12-amino acid peptide from the 12S rRNA region, first characterized by Cobb et al. (2016, Journal of Biological Chemistry). The SHLP family has 6 members (SHLP1-6); SHLP2 and SHLP3 show the strongest published bioactivity. SHLP2 mechanism of action: (1) inhibits mitochondria-mediated apoptosis via XIAP stabilization and Bcl-2/Bax ratio preservation; (2) reduces cytochrome c release from the IMM under oxidative stress; (3) preserves mitochondrial membrane potential (JC-1 assay, ΔΨm protection) under H2O2 challenge; (4) activates Akt/mTOR pro-survival signaling. The primary SHLP2 receptor has not been fully characterized as of 2026 — receptor identification remains an active research gap.',
    },
    {
      type: 'heading',
      text: 'SHLP2: Published Research Data',
    },
    {
      type: 'paragraph',
      text: 'Key published findings for SHLP2:\n\nApoptosis inhibition (Cobb 2016, J Biol Chem): SHLP2 at 100 nM inhibited staurosporine-induced apoptosis by approximately 60% in HeLa cells, reduced caspase-3/7 activation (Caspase-Glo assay), and preserved mitochondrial membrane potential (JC-1 red/green ratio). The effect was partially blocked by Bcl-2 inhibitor ABT-737 (approximately 40% attenuation), implicating Bcl-2 as a key downstream effector.\n\nLipotoxicity protection (Cobb 2016): In 3T3-L1 adipocytes treated with palmitate (lipotoxicity model), SHLP2 at 1 μM reduced lipid-induced caspase-3 activation by approximately 45% and improved mitochondrial respiration (OCR/ECAR ratio improved +30% at 100 nM) vs vehicle. Dose-response was biphasic, with maximal effect at 100 nM-1 μM and attenuated effect at 10 μM — a pattern consistent with receptor saturation or downstream feedback.\n\nAging decline: Serum SHLP2 declines approximately 40% in aged C57BL/6J mice (24 vs 3 months). In vitro, exogenous SHLP2 partially restores mitochondrial OCR and JC-1 red/green ratio in aged mouse cardiomyocytes toward levels approaching young controls, suggesting supplementation can compensate for endogenous decline.',
    },
    {
      type: 'heading',
      text: 'MDP Mechanistic Comparison: MOTS-c vs Humanin vs SHLP2',
    },
    {
      type: 'paragraph',
      text: 'Understanding the mechanistic distinctions guides protocol design and control group selection:',
    },
    {
      type: 'table',
      headers: ['Parameter', 'Humanin (IM-HN)', 'SHLP2', 'MOTS-c'],
      rows: [
        ['rRNA Origin', '16S rRNA', '12S rRNA', '12S rRNA'],
        ['Length', '21 aa', '12 aa', '16 aa'],
        ['Primary Receptor', 'FPRL1 / gp130-CNTFR', 'Not characterized', 'AMPK (intracellular)'],
        ['Primary Mechanism', 'STAT3 cytoprotection', 'Bcl-2/caspase inhibition', 'AMPK/GLUT4 nuclear'],
        ['Metabolic Data', 'DIO ITT/GTT, hepatic lipid', 'Adipocyte OCR/lipotoxicity', 'Skeletal muscle AMPK, insulin sensitization'],
        ['Aging Decline (human/rodent)', '~50% from age 25 to 75', '~40% in mouse 3→24 mo', '~40% from age 20 to 50 (Young 2021)'],
        ['IGF-1 Interaction', 'IGFBP-3 competition (↑ free IGF-1)', 'None reported', 'None reported'],
        ['Published IP Dose (mouse)', '1–2 mg/kg/day', '0.5–1.0 mg/kg/day', '5–15 mg/kg/day'],
        ['Primary Reference', 'Brown 2013, Cell Metabolism', 'Cobb 2016, J Biol Chem', 'Lee 2015, Cell Metabolism'],
      ],
    },
    {
      type: 'paragraph',
      text: 'The three mechanisms are non-competing: Humanin operates at the receptor/STAT3/IGFBP-3 level; SHLP2 at the mitochondrial apoptotic inner-membrane level (Bcl-2/caspase); MOTS-c at the AMPK/nuclear metabolic signaling level. This orthogonality provides the rationale for combination protocol design in aging and longevity research.',
    },
    {
      type: 'heading',
      text: 'Synergy Rationale for MDP Combination Protocols',
    },
    {
      type: 'paragraph',
      text: 'Three mechanistic synergy hypotheses have been proposed for MDP combinations:\n\n1. Temporal cytoprotection layering: In acute cellular stress (ischemia-reperfusion, oxidative burst), SHLP2 acts upstream to prevent caspase activation, while Humanin reduces downstream STAT3-mediated inflammatory amplification. MOTS-c operates on a longer timescale via AMPK activation and gene expression changes. Together, they address the acute, intermediate, and chronic phases of mitochondrial stress response.\n\n2. Metabolic-cytoprotective integration: MOTS-c improves mitochondrial function and AMPK-mediated glucose uptake. SHLP2 prevents apoptosis of cells experiencing mitochondrial stress during the metabolic adaptation period. Humanin maintains IGF-1 bioavailability via IGFBP-3 competition to support anabolic signaling throughout the protocol.\n\n3. Aging-reversal complementarity: All three MDPs decline with age. Restoring all three simultaneously may address more hallmarks of aging (mitochondrial dysfunction, cellular apoptosis, metabolic decline) than any single MDP alone. The combination with NAD+ (SIRT1/SIRT3 pathway) and SS-31 (cardiolipin/IMM mechanism) creates a 5-compound longevity stack with five distinct non-overlapping mitochondrial mechanisms.',
    },
    {
      type: 'heading',
      text: 'Preclinical Dosing Protocols',
    },
    {
      type: 'paragraph',
      text: 'Published and extrapolated dosing for preclinical rodent studies:\n\nHumanin (IM-HN preferred over native HN):\n- Mouse: 1–2 mg/kg SC or IP, once daily\n- Rat: 0.5–1.0 mg/kg SC or IP, once daily\n- Reconstitution: sterile saline or PBS pH 7.0–7.4 (avoid BAC water — benzyl alcohol may interact with Cys-8 at high pH); low-bind microtubes required at concentrations below 100 μg/mL\n- Storage: −20°C lyophilized; 4°C reconstituted ≤7 days; protect from light\n\nSHLP2:\n- Mouse: 0.5–1.0 mg/kg IP, once daily or every other day\n- Rat: 0.25–0.5 mg/kg IP\n- Reconstitution: sterile saline pH 7.0–7.4, low-bind tubes\n- Storage: −20°C lyophilized; 4°C ≤5 days reconstituted\n\nCombination studies: Use separate reconstitution vials — do not pre-mix. SC dorsal scruff (Humanin/SHLP2) is preferred for chronic studies; IP is acceptable for acute challenge models. Rotate injection sites for daily protocols. MOTS-c can be co-administered on the same daily schedule.',
    },
    {
      type: 'heading',
      text: 'Endpoint Selection',
    },
    {
      type: 'paragraph',
      text: 'Appropriate endpoints by research goal:\n\nCytoprotection/apoptosis (SHLP2-relevant): Caspase-3/7 activity (Caspase-Glo assay), TUNEL staining, cytochrome c cytosol Western blot, Annexin V/PI flow cytometry, Bcl-2/Bax protein ratio by Western blot.\n\nMitochondrial function: JC-1 or TMRM membrane potential, Seahorse XF OCR/ECAR, mtDNA copy number (RT-qPCR), MitoSOX ROS.\n\nMetabolic (Humanin-relevant): HOMA-IR, GTT/ITT, EchoMRI body composition, hepatic triglycerides (Folch extraction), serum adiponectin, fasting insulin (Crystal Chem).\n\nIGF-1 axis (Humanin-specific): Compare free IGF-1 vs total IGF-1 using acid-ethanol-extracted (total) vs native serum (free) ELISA; Crystal Chem #80574 with acid-ethanol extraction for total. Free IGF-1 increase with IM-HN treatment should be detectable without changes in total IGF-1 production.\n\nAging/longevity: Serum MDP levels by ELISA (BioVendor or USCN Science kits), grip strength, rotarod performance, telomere qPCR T/S ratio.',
    },
    {
      type: 'heading',
      text: 'Six Research Design Considerations',
    },
    {
      type: 'list',
      items: [
        'Use IM-HN, not native Humanin. The S14G substitution provides approximately 1,000-fold potency improvement. Native HN studies require doses that are impractical and prone to aggregation-related artifacts. Verify IM-HN purity ≥98% and correct MW by ESI-MS before starting.',
        'SHLP2 receptor characterization gap. The primary receptor for SHLP2 has not been fully characterized as of 2026. This limits pharmacological specificity controls. Use scrambled SHLP2 sequence as negative control, and ABT-737 (Bcl-2 inhibitor, 25 mg/kg IP) to partially dissect the mechanism.',
        'Aged animal requirement. MDP research is most meaningful in aged animals (18–24 month C57BL/6J) or in stress-challenge models (H2O2/staurosporine/Abeta in vitro; I/R, DIO, cisplatin in vivo). Young healthy animals typically show minimal response — MDP biology fundamentally addresses the consequences of declining endogenous MDP levels with age.',
        'Aggregation monitoring for Humanin. Native Humanin (not IM-HN) aggregates above 100 μg/mL due to Cys-8. Use DLS or SEC to verify monomeric state before injection in any native HN study. IM-HN aggregation is less severe but still concentration-dependent above 1 mg/mL.',
        'Serum MDP measurements as biomarker confirmation. Include baseline and endpoint serum Humanin/MOTS-c quantification to confirm the observed decline in your aging cohort and verify exogenous supplementation did not fully suppress endogenous production. Validate ELISA kits with peptide spike-recovery controls before the study.',
        'Pair-fed controls for metabolic endpoints. The Brown 2013 Cell Metabolism IM-HN study did not include pair-fed controls. Any metabolic study using IM-HN should include pair-fed controls to attribute improvements in HOMA-IR, GTT, or hepatic lipid to direct Humanin receptor pharmacology vs secondary changes from reduced food intake.',
      ],
    },
    {
      type: 'heading',
      text: 'The Broader MDP Research Horizon',
    },
    {
      type: 'paragraph',
      text: 'Beyond Humanin, SHLP2, and MOTS-c, at least 12 additional putative MDPs have been identified via ribosome profiling (Ribo-seq) and systematic sORF analysis of the mitochondrial genome. Most remain pharmacologically uncharacterized. The common theme across all characterized MDPs — cytoprotection against stress-induced apoptosis, metabolic improvement, age-related decline in circulating levels, and restoration of function by exogenous supplementation — suggests the mitochondrial genome encodes a broader paracrine/endocrine signaling system than previously recognized. The therapeutic implications for aging-related disease research are substantial, and the field remains largely open for systematic preclinical investigation.',
    },
    {
      type: 'disclaimer',
      text: 'This article is for research and educational purposes only. Humanin, SHLP2, and MOTS-c are research-use-only compounds. They are not approved drugs and are not intended for human use. All dosing and protocol information refers to preclinical animal research models.',
    },
  ],
};
