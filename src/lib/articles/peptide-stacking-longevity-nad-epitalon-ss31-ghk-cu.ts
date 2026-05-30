import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "peptide-stacking-longevity-nad-epitalon-ss31-ghk-cu",
  title: "Peptide Stacking for Longevity: NAD+, Epitalon, SS-31, and GHK-Cu",
  description:
    "A mechanistic deep dive into the four-compound longevity research stack: NAD+ (sirtuin/mitochondrial biogenesis), Epitalon (telomerase/melatonin), SS-31 (cardiolipin/mitochondrial ETC), and GHK-Cu (Nrf2/collagen/gene expression). Covers synergy rationale, full factorial study design, endpoint selection, dosing protocols, and research design considerations.",
  category: "Longevity",
  readMinutes: 10,
  publishedAt: "2026-05-30",
  ogImage: "/og/products/nad-plus.png",
  body: [
    {
      type: "paragraph",
      text: "Longevity research has moved beyond single-compound interventions. The most informative preclinical studies now combine agents that target distinct but interconnected hallmarks of aging — mitochondrial dysfunction, telomere attrition, loss of proteostasis, and altered intercellular communication. Four compounds have emerged as a mechanistically coherent longevity stack: NAD+ (or its precursors), Epitalon, SS-31 (Elamipretide), and GHK-Cu. Each targets a different node of the aging network, and their combination creates overlapping redundancy without significant receptor competition or pharmacokinetic interference.",
    },
    {
      type: "heading",
      text: "Why These Four? The Mechanistic Logic",
    },
    {
      type: "paragraph",
      text: "The rationale for this particular combination rests on three principles: (1) orthogonal primary mechanisms — each compound acts on a fundamentally different molecular target; (2) convergent downstream effects — all four ultimately influence mitochondrial function, oxidative stress, and cellular repair capacity, providing pathway amplification; and (3) absence of receptor competition — none of the four share primary receptors, minimizing pharmacokinetic interference and allowing simultaneous or temporally staggered dosing.",
    },
    {
      type: "heading",
      text: "NAD+: The Sirtuin Activator and Mitochondrial Fuel",
    },
    {
      type: "paragraph",
      text: "NAD+ (nicotinamide adenine dinucleotide) declines approximately 50% between young adulthood and middle age across multiple tissues in rodents and humans (Gomes 2013, Cell; Rajman 2018, Cell Metabolism). This decline impairs the sirtuin family of NAD+-dependent deacylases — particularly SIRT1, SIRT3, and SIRT6 — which regulate mitochondrial biogenesis (via PGC-1α deacetylation), oxidative stress response (via SOD2 and IDH2 activation), and nuclear genome stability (via H3K9ac and H4K16ac histone control).",
    },
    {
      type: "paragraph",
      text: "In the landmark Gomes 2013 study, IP administration of NMN (500 mg/kg/day × 7 days) in aged C57BL/6J mice restored muscle mitochondrial morphology, mitochondrial copy number, and oxygen consumption rate to levels indistinguishable from young controls. The mechanism was SIRT1→HIF-1α→pseudohypoxia axis reversal. SIRT3 activation via NAD+ replenishment additionally deacetylates and activates IDH2 (NADPH regeneration) and SOD2 (superoxide dismutation), reducing mitochondrial ROS by 40–60% in aged animals (Hirschey 2011, Cell Metabolism). For longevity stack research, IP NAD+ (250–500 mg/kg) or IP NMN (500 mg/kg/day) provides the most reliable plasma NAD+ elevation for acute and chronic protocols respectively.",
    },
    {
      type: "heading",
      text: "Epitalon: Telomerase Activation and Pineal Restoration",
    },
    {
      type: "paragraph",
      text: "Epitalon (Ala-Glu-Asp-Gly, CAS 307297-39-8) is a synthetic tetrapeptide bioregulator derived from the bovine pineal gland. Its primary documented mechanism is telomerase (TERT) activation: Khavinson 2003 demonstrated a 2.4-fold increase in telomerase activity by TRAP assay in human embryonic fibroblasts, with corresponding telomere elongation of 200–500 base pairs after 14-day treatment. TERT mRNA upregulation in peripheral lymphocytes provides a measurable in vivo endpoint.",
    },
    {
      type: "paragraph",
      text: "Epitalon's secondary mechanism is melatonin pathway restoration. Aged pineal glands show reduced AANAT (arylalkylamine N-acetyltransferase) expression and diminished nocturnal melatonin secretion — a process that accelerates circadian disruption, reduces antioxidant coverage during sleep, and impairs immune function. Epitalon upregulates AANAT expression, restoring physiological melatonin amplitude in aged rodents. This can be dissected experimentally with luzindole (melatonin receptor antagonist, 10 mg/kg IP) to isolate the AANAT/melatonin contribution from the telomerase contribution.",
    },
    {
      type: "paragraph",
      text: "Long-term rodent data: CBA/NJ and C57BL/6 mice receiving pulsatile 10-day courses of Epitalon (1 µg/mouse SC) showed 12–20% lifespan extension with preserved splenic and thymic cellularity. The C3H/He mammary tumor model showed a 24% reduction in cancer incidence — an important long-term safety endpoint for any longevity compound stack.",
    },
    {
      type: "heading",
      text: "SS-31 (Elamipretide): Cardiolipin Protection and ETC Stabilization",
    },
    {
      type: "paragraph",
      text: "SS-31 (D-Arg-2',6'-Dmt-Lys-Phe-NH₂) is a Szeto-Schiller tetrapeptide that accumulates ~1000-fold in the inner mitochondrial membrane (IMM) driven by alternating cationic/aromatic residues. Its primary molecular target is cardiolipin — the bis-phosphatidylglycerol phospholipid unique to the IMM that scaffolds respiratory supercomplexes (Complexes I, III, IV) and cytochrome c. Age-related cardiolipin peroxidation by mitochondrial ROS destabilizes these supercomplexes, reducing electron transport efficiency and increasing ROS leak.",
    },
    {
      type: "paragraph",
      text: "SS-31 binds cardiolipin via a non-sacrificial electrostatic and hydrophobic interaction, physically protecting it from peroxidation without being consumed. The functional result, as quantified by Szeto 2014, is restoration of Complex I electron transfer rates in aged mitochondria by 40–60%, with commensurate reductions in superoxide generation (MitoSOX, Amplex Red endpoints). In skeletal muscle aging, Siegel 2013 (Aging Cell) showed that SS-31 restored mitochondrial respiratory capacity in aged mouse muscle without increasing mitochondrial biogenesis markers — demonstrating that the mechanism is quality restoration, not quantity compensation. This is mechanistically distinct from NAD+/SIRT3's biogenesis-oriented pathway, making them ideal combination partners.",
    },
    {
      type: "heading",
      text: "GHK-Cu: Nrf2 Activation, Collagen Synthesis, and Gene Expression Reprogramming",
    },
    {
      type: "paragraph",
      text: "GHK-Cu (glycyl-l-histidyl-l-lysine copper chelate) operates through the broadest transcriptional mechanism of the four compounds. Lois Pickart's gene expression database analysis identified >2,000 genes regulated by GHK-Cu treatment, with the predominant pattern being restoration of gene expression profiles from aged to younger phenotypes. Key pathways include: TGF-β1/SMAD2-3/COL1A1 collagen synthesis (via TGF-β receptor transactivation), lysyl oxidase copper-dependent ECM crosslinking, and Nrf2/Keap1 antioxidant response element activation.",
    },
    {
      type: "paragraph",
      text: "The Nrf2 activation by GHK-Cu is particularly relevant to this stack. Nrf2 upregulates GCLC (glutamate-cysteine ligase catalytic subunit), the rate-limiting enzyme for glutathione synthesis, as well as NQO1, HO-1, and thioredoxin reductase. The GHK-Cu → Nrf2 → GSH pathway is orthogonal to the SS-31 → cardiolipin → IMM-ROS suppression pathway, and orthogonal again to the NAD+ → SIRT3 → SOD2 pathway. This means the three oxidative stress arms of the stack operate via distinct mechanisms without upstream competition, providing redundant protection against the mitochondrial-nuclear ROS axis central to the aging phenotype.",
    },
    {
      type: "heading",
      text: "Synergy Architecture: How the Four Compounds Interact",
    },
    {
      type: "paragraph",
      text: "The synergy within this stack operates at three levels. First, antioxidant pathway redundancy: SS-31 suppresses IMM superoxide at the source (cardiolipin/ETC), GHK-Cu upregulates Nrf2/GSH for cytosolic and nuclear ROS, and NAD+/SIRT3 deacetylates and activates SOD2 for matrix superoxide dismutation. These three mechanisms collectively reduce oxidative damage across all cellular compartments without competing for the same molecular target.",
    },
    {
      type: "paragraph",
      text: "Second, mitochondrial quality enhancement: NAD+/SIRT1 drives PGC-1α-mediated biogenesis (more mitochondria), while SS-31 restores ETC quality per mitochondrion. This biogenesis-quality orthogonality was directly demonstrated by Siegel 2013 — SS-31 did not change mitochondrial mass or biogenesis markers, while NAD+ replenishment increases mitochondrial number via SIRT1→PGC-1α. Combined, they address both the quantity and quality axes of the mitochondrial aging phenotype.",
    },
    {
      type: "paragraph",
      text: "Third, genomic stability and repair: Epitalon's telomerase activation reduces replicative senescence risk in dividing cells, while NAD+/SIRT6 deacetylates H3K9 and H4K16 at DNA damage sites, enhancing NHEJ and HR repair. GHK-Cu's gene expression reprogramming includes DNA repair pathway upregulation in Pickart's dataset. These three mechanisms address different branches of genomic integrity maintenance without molecular conflict.",
    },
    {
      type: "heading",
      text: "Recommended Research Protocol Design",
    },
    {
      type: "paragraph",
      text: "For a rigorous preclinical study, a full 2×2×2×2 factorial design (16 groups) provides the statistical power to detect interaction effects between compounds. In practice, most published longevity combination studies use a reduced factorial with the combination arm versus individual arms versus vehicle (5 groups minimum). The following dosing protocol represents published doses from individual compound studies:",
    },
    {
      type: "paragraph",
      text: "NAD+/NMN: 500 mg/kg/day IP (Gomes 2013, Yoshino 2011). Alternatively, oral NMN via gavage at 300–400 mg/kg/day for chronic (>4 week) studies. Epitalon: 1 µg/mouse SC or 40–50 µg/kg rat, administered in 10-day courses (days 1–10, then repeat at day 30, 60, etc.) to mimic the pulsatile pineal bioregulator hypothesis. SS-31: 3 mg/kg SC daily for chronic aging studies (Siegel 2013); 2 mg/kg IP for acute cardiac protection endpoints. GHK-Cu: 1–5 mg/kg/day SC for tissue repair and longevity endpoints (Pickart); topical 0.1–2% for skin/wound endpoints.",
    },
    {
      type: "heading",
      text: "Endpoint Selection",
    },
    {
      type: "paragraph",
      text: "Recommended endpoints for the full stack study: (1) Mitochondrial respiration: Seahorse XF Analyzer OCR (basal, maximal, spare capacity) in freshly isolated muscle fibers or liver mitochondria. (2) NAD+/NADH ratio: enzymatic cycling assay (BioAssay Systems NADH kit) in liver and muscle. (3) Telomere length: Q-FISH or qPCR T/S ratio in peripheral blood lymphocytes. (4) Oxidative stress: plasma 8-OHdG (ELISA), MitoSOX in isolated mitochondria, GSH/GSSG ratio (enzymatic). (5) Protein homeostasis: Western for SIRT1/SIRT3 acetyl substrates (acetyl-PGC-1α, acetyl-SOD2). (6) ECM quality: hydroxyproline collagen content in tail tendon, skin tensile strength. (7) Functional aging: grip strength, rotarod, voluntary wheel running (distance/velocity). (8) Healthspan: body composition (EchoMRI), fasting glucose/GTT, CBC/CMP.",
    },
    {
      type: "heading",
      text: "Research Design Considerations",
    },
    {
      type: "paragraph",
      text: "1. Age of animals: Aged mice (18–24 months C57BL/6J) are essential — this stack targets aging-related phenotypes that are absent or minimal in young animals. Young mouse comparator arms provide the 'ideal' target phenotype for benchmarking. 2. Vehicle and control design: NAD+ (sterile saline/PBS), Epitalon (sterile saline — no BAC water), SS-31 (sterile saline — no DMSO, which opens mPTP), GHK-Cu (sterile saline — no reducing agents). Each compound has incompatible vehicle restrictions; separate vehicle controls per compound in the single-compound arms are required. 3. NAM contamination: High-dose NAD+/NMN generates NAM as a metabolite, which is a SIRT1 inhibitor (Ki ~50–100 µM at tissue concentrations). Include NAM vehicle controls and verify tissue NAM levels by HPLC to rule out autoinhibition confound. 4. Epitalon pulsatile vs chronic: The published lifespan data used pulsatile 10-day courses, not daily dosing. Chronic daily SC injection may produce tachyphylaxis or receptor downregulation. Design should mirror the pulsatile administration schedule, not convert to daily continuous. 5. GHK-Cu copper controls: Include free CuSO₄ equimolar to GHK-Cu copper content and free GHK (copper-free tripeptide) as separate control arms to dissect which effects require the intact copper chelate. 6. Interaction effect power: A full 16-group 2×2×2×2 factorial requires >8 animals/group (n=128 total) to detect medium interaction effects at 80% power. If resources are limited, a 5-group design (vehicle + 4 singles + combination) with n=12/group is the practical minimum.",
    },
    {
      type: "paragraph",
      text: "Reconstitution and storage summary: NAD+ dissolves in sterile PBS (10 mg/mL stock); protect from light (amber vial essential — nicotinamide ring absorbs UV at 259 nm); prepare fresh or freeze aliquots at −80°C for multi-day use. Epitalon dissolves in sterile saline (0.5–1 mg/mL); store at −20°C lyophilized, 4°C reconstituted ≤14 days; no BAC water (benzyl alcohol may interact with the tetrapeptide at low concentrations). SS-31 dissolves in sterile saline (1–5 mg/mL); no DMSO or detergents; store at −20°C lyophilized, 4°C reconstituted ≤7 days. GHK-Cu dissolves in sterile saline (1–10 mg/mL); blue-violet color confirms intact copper complex; store at −20°C lyophilized, 4°C reconstituted ≤14 days; no EDTA, DTT, or acidic buffers.",
    },
    {
      type: "paragraph",
      text: "This longevity stack represents the current frontier of mechanistically coherent multi-compound aging research. The orthogonal mechanisms, convergent downstream effects, and absence of receptor competition make it an ideal model for investigators interested in combination synergy within the hallmarks-of-aging framework. All compounds are available with lot-specific COAs and HPLC ≥99% purity from the Nexphoria catalog.",
    },
  ],
};
