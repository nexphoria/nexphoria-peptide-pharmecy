import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "peptide-research-depression-mood-stress-selank-semax-bpc157-nad-protocol",
  title: "Peptide Research for Depression, Mood, and Stress: Selank, Semax, BPC-157, and NAD+ Protocol Design",
  description:
    "A comprehensive research protocol guide for studying depression, mood disorders, and stress biology with peptides. Covers Selank, Semax, BPC-157, and NAD+ mechanisms, validated behavioral models, endpoint selection, and multi-compound study design.",
  category: "Nootropics",
  readMinutes: 12,
  publishedAt: "2026-06-01",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Depression is one of the most researched yet least mechanistically understood neuropsychiatric conditions in biomedicine. The monoamine hypothesis — the foundation of SSRIs and SNRIs — explains only a subset of treatment responses and fails entirely for a substantial proportion of patients. This treatment gap has driven renewed interest in peptidergic and neurotrophic mechanisms: BDNF deficit, HPA axis dysregulation, neuroinflammation, mitochondrial dysfunction, and gut-brain axis disruption. Research peptides address several of these axes simultaneously, making them valuable tools for dissecting the molecular architecture of depressive-like states beyond what serotonin or norepinephrine pharmacology can illuminate.",
    },
    {
      type: "paragraph",
      text: "This article provides a practical research protocol guide covering the four compounds most studied in depression-adjacent research: Selank (anxiolytic/BDNF/GABAergic), Semax (BDNF/VEGF/dopaminergic), BPC-157 (HPA axis normalization/gut-brain/dopamine/serotonin), and NAD+ (SIRT1/BDNF/mitochondrial function). It covers animal models, behavioral endpoint selection, multi-compound study design, pharmacological controls, and reconstitution notes for depression and mood disorder research.",
    },
    {
      type: "divider",
    },
    {
      type: "heading",
      text: "Mechanistic Rationale: Why Peptides for Depression Research",
    },
    {
      type: "subheading",
      text: "The Four Axes of Depressive-Like Biology",
    },
    {
      type: "paragraph",
      text: "Modern depression research increasingly recognizes four non-exclusive biological axes underlying treatment-resistant and melancholic phenotypes. First, the BDNF/TrkB neurotrophic deficit hypothesis (Duman & Monteggia, 2006): reduced hippocampal BDNF correlates with depressive severity in human post-mortem and animal CUMS data, and BDNF infusion into the dentate gyrus is sufficient to produce antidepressant-like behavioral effects independent of monoamine systems. Semax and Selank both upregulate BDNF via distinct receptor mechanisms, placing them in the neurotrophic axis. Second, HPA axis hyperactivation: chronic stress elevates CRH, ACTH, and corticosterone, producing glucocorticoid receptor downregulation in the hippocampus and prefrontal cortex. BPC-157 has demonstrated HPA dampening effects in multiple rodent stress models independent of classical antidepressants. Third, neuroinflammation: elevated IL-6, TNF-α, and IL-1β are found in clinically depressed patients and preclinical CUMS models; Selank's IL-6 suppression via tuftsin receptor-mediated macrophage modulation is directly relevant. Fourth, mitochondrial dysfunction: a growing body of evidence links impaired OXPHOS, depleted NAD⁺/SIRT1 signaling, and reduced hippocampal neurogenesis — NAD⁺ replenishment (NMN 500 mg/kg IP, Gomes et al., 2013) restores PGC-1α/BDNF coupling in aged animals and has been studied in stress-exposed rodents.",
    },
    {
      type: "divider",
    },
    {
      type: "heading",
      text: "Compound Profiles: Mechanisms Relevant to Depression Research",
    },
    {
      type: "subheading",
      text: "Selank: GABAergic Anxiolytic + BDNF Upregulation + Immune Normalization",
    },
    {
      type: "paragraph",
      text: "Selank (Thr-Lys-Pro-Arg-Pro-Gly-Pro) is a heptapeptide tuftsin analog developed at the Institute of Molecular Genetics of the Russian Academy of Sciences. Its primary mechanism in CNS research is presynaptic GABAergic enhancement: Selank increases GABA release probability at presynaptic terminals without directly binding GABA-A receptor or benzodiazepine sites, confirmed by flumazenil non-blockade and bicuculline partial attenuation (Kozlovskaya et al., 2002). This makes Selank useful for studying anxiety-depression comorbidity without the receptor occupancy confounds of benzodiazepines. Secondly, Selank upregulates hippocampal BDNF mRNA 1.8–2.4× at intranasal doses of 50–200 mcg/kg (Semenova et al., 2010), with downstream pTrkB and pCREB activation. Thirdly, it normalizes elevated IL-6 and IL-8 in rodent stress paradigms via tuftsin receptor-mediated macrophage modulation — a direct anti-neuroinflammatory mechanism relevant to depression-neuroinflammation co-occurrence. Enkephalinase (neutral endopeptidase, NEP) inhibition extends Leu/Met-enkephalin half-life, contributing to analgesia and stress resilience endpoints.",
    },
    {
      type: "subheading",
      text: "Semax: BDNF/VEGF Upregulation + Dopaminergic Enhancement + MC4R Activation",
    },
    {
      type: "paragraph",
      text: "Semax (ACTH(4-7)PGP: Met-Glu-His-Phe-Pro-Gly-Pro) binds MC4R and MC3R without MC2R activation — no ACTH secretion, no cortisol elevation — making it distinct from endogenous MSH-family peptides for HPA-sensitive studies. Semax upregulates BDNF mRNA 2–3× in hippocampus and frontal cortex within 30–60 minutes of intranasal delivery at 50 mcg/kg (Dolotov et al., 2006), with VEGF elevation contributing to neurogenesis and cerebrovascular support. Its dopaminergic circuit effects — demonstrated in conditioned place preference and open field locomotion data — are relevant to anhedonia research, a core feature of melancholic depression that serotonergic compounds address poorly. CREB is the shared upstream transcription factor for both BDNF and VEGF induction, explaining the coordinate neurotrophic effect from a single receptor engagement.",
    },
    {
      type: "subheading",
      text: "BPC-157: HPA Axis Normalization + Dopamine/Serotonin Modulation + Gut-Brain Axis",
    },
    {
      type: "paragraph",
      text: "BPC-157 (Body Protection Compound-157, GEPPPGKPADDAGLV) has demonstrated antidepressant-like effects in the forced swimming test (FST), tail suspension test (TST), and sucrose preference test in multiple independent rodent studies — and critically, these effects are partially independent of classical monoamine systems (no full blockade by naloxone, no complete loss in 6-OHDA dopamine-depleted models, suggesting non-dopaminergic backup pathways). BPC-157 normalizes HPA axis responses to chronic restraint stress, reducing elevated corticosterone AUC and preventing glucocorticoid receptor downregulation in prefrontal cortex. The gut-brain axis mechanism is particularly relevant: BPC-157's cytoprotective mucosal effects (ZO-1/occludin tight junction preservation, eNOS/NO synthesis, ENS neuronal protection) may normalize gut-derived serotonin precursor availability and reduce systemic LPS burden from leaky gut — a mechanism increasingly recognized in clinical depression. BPC-157 also modulates dopamine D1/D2 receptor density in ventral striatum and prefrontal cortex in chronic stress models, with implications for reward circuit depression research.",
    },
    {
      type: "subheading",
      text: "NAD⁺: SIRT1/BDNF Promoter + Mitochondrial Function + Circadian Normalization",
    },
    {
      type: "paragraph",
      text: "NAD⁺ replenishment — most commonly via NMN (500 mg/kg IP, Gomes et al., 2013) or direct NAD⁺ injection — activates SIRT1 in hippocampus and prefrontal cortex, deacetylating BDNF promoter IV at H3K9ac/H3K56ac marks and increasing BDNF transcription. This represents a distinct upstream epigenetic mechanism for neurotrophic support compared to Semax (MC4R/CREB) or Selank (TrkB/pCREB indirect). SIRT3 mitochondrial deacetylation restores OXPHOS and ATP availability in hippocampal pyramidal neurons — critical for adult neurogenesis (neurogenesis is OXPHOS-dependent in quiescent NPCs). NAD⁺/NMN has also been shown to normalize circadian rhythms in aged and stress-disrupted animals, with NAMPT/CLOCK/BMAL1 E-box-dependent NAD⁺ oscillation driving SIRT1/PER2 deacetylation in the master circadian loop — relevant because circadian disruption and depression are highly comorbid in clinical and preclinical data.",
    },
    {
      type: "divider",
    },
    {
      type: "heading",
      text: "Animal Models for Depression and Mood Research",
    },
    {
      type: "table",
      headers: ["Model", "Phenotype Induced", "Key Readouts", "Duration", "Notes"],
      rows: [
        ["CUMS (Chronic Unpredictable Mild Stress)", "Anhedonia, reduced sucrose preference, coat deterioration, passive coping", "SPT, bodyweight, fur state, corticosterone, BDNF", "21–28 days stressor exposure", "Gold standard for anhedonia; CUMS protocol variability requires standardization"],
        ["CRS (Chronic Restraint Stress)", "HPA hyperactivation, anxiety-depression, hippocampal atrophy", "FST immobility, corticosterone, hippocampal volume, BDNF mRNA", "14–21 days × 6h/day", "Best model for HPA axis and glucocorticoid receptor studies"],
        ["LPS (Lipopolysaccharide) Sickness Behavior", "Neuroinflammation-driven depressive behavior, IL-6/TNF-α elevation", "FST, SPT, IL-6, TNF-α, Iba-1 IHC", "Acute 2–24h or subchronic", "Best for neuroinflammation-depression research; endotoxin controls essential"],
        ["Social Defeat Stress (CSD)", "Social withdrawal, submissive posture, anhedonia, mesolimbic dysfunction", "Social interaction ratio, sucrose preference, corticosterone, NAc ΔFosB", "10 days attacks + 24h isolation", "Best for social defeat/reward circuit; male C57BL/6J vs aggressor CD-1"],
        ["FSL (Flinders Sensitive Line) Rats", "Genetic hypercholinergic depression phenotype", "FST immobility, REM latency, bodyweight, ACTH response", "No induction required", "Pharmacological model; high face validity for antidepressant screening"],
        ["6-OHDA Dopamine Depletion", "Anhedonia via mesolimbic dopamine depletion", "SPT, progressive ratio, locomotion, TH+ IHC", "Acute unilateral or bilateral striatal injection", "Best for anhedonia/reward circuit; not HPA-mediated"],
        ["Olfactory Bulbectomy (OBX)", "Hyperactivity, cognitive deficits, HPA activation, neuroinflammation", "Open field hyperactivity, passive avoidance, ACTH, IL-6", "14-day post-OBX stabilization", "Highest LPS/immune relevance; BPC-157 specifically studied here"],
      ],
    },
    {
      type: "divider",
    },
    {
      type: "heading",
      text: "Behavioral Endpoint Selection",
    },
    {
      type: "subheading",
      text: "Primary Endpoints by Research Goal",
    },
    {
      type: "table",
      headers: ["Endpoint", "What It Measures", "Protocol Notes", "Relevant Compounds", "Validated For"],
      rows: [
        ["Sucrose Preference Test (SPT)", "Anhedonia (reduced hedonic response)", "2-bottle 1% sucrose vs water, 24h/week preference ratio; ≥65% = non-anhedonic threshold", "All 4 compounds", "CUMS, CSD, 6-OHDA"],
        ["Forced Swimming Test (FST)", "Passive coping / behavioral despair", "15-min pre-swim day 1, 5-min test day 2, 25°C water; score immobility latency + duration", "BPC-157, Selank, Semax", "CRS, CUMS, FSL"],
        ["Tail Suspension Test (TST)", "Passive coping / behavioral despair (mice)", "6-min session, automated infrared or visual scoring; immobility ≥2 consecutive seconds", "BPC-157, Selank, Semax", "All acute models"],
        ["Open Field Test (OFT)", "Anxiety-like behavior + locomotion", "10-min 50×50cm arena, center zone time + total distance; habituated 30-min prior to behavioral battery", "Selank, Semax", "All models"],
        ["Elevated Plus Maze (EPM)", "Anxiety-like behavior", "5-min test, open:closed arm ratio + open arm time; illuminate standardized 30 lux open arms", "Selank, Semax", "CRS, CUMS, FSL"],
        ["Social Interaction Test", "Social withdrawal / social defeat behavior", "10-min resident-intruder ratio; social interaction ratio ≥1.0 = non-susceptible", "Selank, Semax, NAD+", "CSD, OBX"],
        ["Novelty-Suppressed Feeding (NSF)", "Anxiety with latency-to-approach", "16h food deprivation, 5-min test with familiar chow in novel arena; latency to eat is primary", "Selank", "CUMS, chronic stress"],
        ["Progressive Ratio Breakpoint", "Hedonic motivation / reward deficit", "PR schedule with 5% sucrose; breakpoint = last completed ratio; measures effort-based reward", "Semax, BPC-157, NAD+", "Social defeat, 6-OHDA"],
        ["Corticosterone AUC (stress reactivity)", "HPA axis function", "Serial tail-nick 0/15/30/60/120 min post-restraint, ZT3–5 baseline; Cayman #501320 EIA", "BPC-157, Selank, NAD+", "CRS, CUMS"],
        ["EEG/Polysomnography (sleep architecture)", "Depression-linked sleep disruption (REM latency, SWS)", "DSI telemetry implant, 72h baseline, 7-day stress, 7-day recovery; delta power spectral density", "Selank, NAD+", "CUMS, CRS"],
      ],
    },
    {
      type: "divider",
    },
    {
      type: "heading",
      text: "Molecular and Biomarker Endpoints",
    },
    {
      type: "subheading",
      text: "Key Molecular Panel for Depression Protocol Research",
    },
    {
      type: "table",
      headers: ["Biomarker", "Tissue", "Method", "Compounds Affected", "Timing"],
      rows: [
        ["BDNF protein", "Hippocampus, PFC", "Promega BDNF ELISA G7611; 50 mg tissue in lysis buffer", "Selank, Semax, NAD+", "48h post-last injection; ZT4-6"],
        ["pTrkB (Tyr706/707)", "Hippocampus", "Cell Signaling #4621 WB; requires fresh frozen tissue", "Selank, Semax", "30-90 min post-injection"],
        ["pCREB (Ser133)", "Hippocampus, PFC", "Cell Signaling #9198 WB + IHC co-staining", "Selank, Semax, NAD+", "30-60 min post-injection"],
        ["Corticosterone (plasma)", "Plasma (EDTA)", "Cayman #501320 EIA; ZT3-5 baseline, post-restraint serial", "BPC-157, Selank, NAD+", "ZT3-5 fasted; multiple timepoints for AUC"],
        ["IL-6 (plasma)", "Plasma (EDTA)", "R&D Systems M6000B; Luminex multiplex preferred for multi-cytokine panels", "Selank, BPC-157", "ZT4-6; EDTA snap-freeze; no serum (platelet activation artifact)"],
        ["TNF-α, IL-1β (plasma/tissue)", "Plasma + hippocampus", "R&D Systems DuoSet or BioLegend LEGENDplex 10-plex", "BPC-157, Selank", "ZT4-6; batch same plate"],
        ["NAD⁺/NADH ratio (hippocampus)", "Hippocampus", "BioAssay Systems EnzyFluo NAD+/NADH Kit EFND-100", "NAD+", "Snap-freeze in liquid N2; process same-day"],
        ["SIRT1 deacetylase activity", "Nuclear extract (hippocampus)", "Enzo BML-AK555; nuclear isolation step required", "NAD+", "Fresh tissue only; ZT6-8"],
        ["BDNF promoter IV H3K9ac (ChIP)", "Hippocampus", "EZ-ChIP Millipore #17-408; anti-H3K9ac Abcam ab4441; 100 mg tissue minimum", "NAD+", "Steady-state sampling day 28"],
        ["GR (glucocorticoid receptor) density", "Hippocampus, PFC", "Western blot Cell Signaling #3660; IHC NeuN/GR co-staining", "BPC-157, NAD+", "Post-CUMS endpoint"],
        ["Hippocampal neurogenesis (BrdU/Ki67/DCX)", "Dentate gyrus (SGZ)", "BrdU 200 mg/kg IP × 5d injection; anti-BrdU Abcam ab6326; Ki67 for endogenous; DCX for immature neurons", "Semax, NAD+", "Sacrifice 28d post-BrdU"],
        ["Iba-1 (microglia activation)", "Hippocampus, PFC", "Wako 019-19741 IHC; cell density + morphology (arborization complexity)", "BPC-157, Selank", "Post-LPS or post-CUMS endpoint"],
      ],
    },
    {
      type: "divider",
    },
    {
      type: "heading",
      text: "Pharmacological Controls",
    },
    {
      type: "subheading",
      text: "Receptor Specificity and Pathway Dissection Controls",
    },
    {
      type: "table",
      headers: ["Control Agent", "Target", "Dose / Route", "Purpose"],
      rows: [
        ["K252a", "TrkB kinase inhibitor (blocks BDNF signaling)", "25 ng icv or 0.5 mg/kg IP, 30 min before compound", "Confirm BDNF/TrkB requirement for behavioral effects (Selank, Semax, NAD+)"],
        ["ANA-12", "TrkB selective antagonist", "0.5 mg/kg IP daily × 7d", "TrkB-dependent behavioral effect dissection; fewer off-target effects than K252a"],
        ["Flumazenil", "GABA-A BZD site antagonist", "5 mg/kg IP, 30 min before Selank", "Confirm non-benzodiazepine mechanism of Selank; flumazenil should NOT block anxiolytic effect"],
        ["Bicuculline", "GABA-A competitive antagonist", "1 mg/kg IP, 30 min before Selank", "Partial attenuation confirms GABAergic involvement (but Selank pre-synaptic — incomplete block expected)"],
        ["HS014 (MC4R antagonist)", "MC4R selective blocker", "10 nmol icv or 2 mg/kg IP, 30 min before Semax", "Confirm MC4R requirement for Semax BDNF/behavioral effects"],
        ["FK866 / APO866 (NAMPT inhibitor)", "Depletes NAD⁺ via NAMPT inhibition", "10 mg/kg IP × 3 days pre-treatment", "Confirm NAD⁺-dependent mechanism; rescue experiment: FK866 + NMN/NAD⁺ should restore behavior"],
        ["Sirtinol / EX-527", "Pan-sirtuin inhibitor / SIRT1-selective", "10 mg/kg IP (sirtinol); 10 mg/kg IP (EX-527)", "Confirm SIRT1 requirement for NAD⁺ behavioral effects; BDNF promoter IV H3K9ac endpoint"],
        ["RU486 (mifepristone)", "GR antagonist", "20 mg/kg IP × 7d", "Dissect glucocorticoid receptor-mediated component of stress effects; useful in CRS/CUMS dissection"],
        ["L-NAME (NOS inhibitor)", "Non-selective NOS inhibitor", "10 mg/kg IP, 30 min before BPC-157", "Partial NO-dependent dissection for BPC-157 gut-brain and HPA effects"],
        ["Fluoxetine (positive control)", "SERT inhibitor", "10 mg/kg IP or oral daily × 21d", "Standard antidepressant positive control for FST/SPT/CUMS; requires 2–3 week chronic dosing for effect"],
        ["Imipramine (positive control)", "TCA — NE + 5-HT reuptake", "10–20 mg/kg IP, acute or 5d", "Acute control for FST/TST; not suitable for CUMS anhedonia model (chronic only)"],
        ["Scrambled ACTH(4-7) (negative control)", "Structural scramble of Semax", "Equimolar dose, same route as Semax", "Vehicle-matched negative control confirming sequence specificity"],
      ],
    },
    {
      type: "divider",
    },
    {
      type: "heading",
      text: "Study Design: Multi-Compound Depression Research Protocol",
    },
    {
      type: "subheading",
      text: "Recommended 8-Group CUMS Study Design",
    },
    {
      type: "table",
      headers: ["Group", "Treatment", "n/group", "Primary Readouts"],
      rows: [
        ["1 (Positive control)", "No CUMS + Vehicle (non-stressed control)", "10", "Baseline SPT, corticosterone, BDNF — defines non-depressed phenotype"],
        ["2 (CUMS vehicle)", "CUMS × 21d + Isotonic saline/vehicle", "10", "Depressive-like phenotype confirmation; SPT < 65%, elevated corticosterone, reduced BDNF"],
        ["3 (Fluoxetine control)", "CUMS × 21d + Fluoxetine 10 mg/kg IP daily from Day 14", "10", "Classical antidepressant positive control; confirms assay sensitivity"],
        ["4 (Selank)", "CUMS × 21d + Selank 50 mcg/kg IN BID from Day 14", "10", "Anxiolytic-BDNF axis; compare SPT/EPM/IL-6/hippocampal BDNF vs CUMS vehicle"],
        ["5 (Semax)", "CUMS × 21d + Semax 50 mcg/kg IN daily from Day 14", "10", "BDNF/VEGF/dopaminergic axis; SPT/FST/neurogenesis BrdU/pTrkB"],
        ["6 (BPC-157)", "CUMS × 21d + BPC-157 10 mcg/kg IP daily from Day 14", "10", "HPA normalization/gut-brain; corticosterone AUC/GR density/sucrose preference/L-NAME dissection cohort"],
        ["7 (NAD⁺/NMN)", "CUMS × 21d + NMN 500 mg/kg IP daily from Day 14", "10", "SIRT1/BDNF promoter/mitochondrial axis; NAD⁺ ratio/H3K9ac ChIP/SIRT1 activity/SPT/Seahorse OCR"],
        ["8 (Combination Selank+Semax)", "CUMS × 21d + Selank 50 mcg/kg IN + Semax 50 mcg/kg IN from Day 14", "10", "Non-competing GABAergic+MC4R combination; BDNF summing effect (Test for synergy vs additivity)"],
      ],
    },
    {
      type: "paragraph",
      text: "Total animals: n=80 (C57BL/6J male or sex-stratified with equal female cohort for NIH SABV compliance). CUMS stressor battery should include: wet bedding 12h (overnight), cage tilt 45° 12h, overnight illumination, 2h food deprivation, restraint 1h, social isolation, novel object introduction, and housing in soiled bedding — randomized daily to prevent adaptation. Confirmation of anhedonic phenotype at Day 14 (before treatment) by SPT ≥20% below Day 0 baseline in CUMS groups before randomizing to treatment arms.",
    },
    {
      type: "divider",
    },
    {
      type: "heading",
      text: "Preclinical Dosing Protocols",
    },
    {
      type: "table",
      headers: ["Compound", "Dose (Mouse)", "Dose (Rat)", "Route", "Frequency", "Key Reference"],
      rows: [
        ["Selank", "50–200 mcg/kg IN; 0.5 mg/kg IP", "50–300 mcg/kg IN; 1 mg/kg IP", "IN preferred for CNS; IP for systemic/immune endpoints", "2× daily (IN); 1× daily (IP)", "Kozlovskaya et al., 2002; Semenova et al., 2010"],
        ["Semax", "50–150 mcg/kg IN; 100–300 mcg/kg IP", "50–200 mcg/kg IN; 100–500 mcg/kg IP", "IN for CNS/BDNF; IP for systemic", "1–2× daily", "Dolotov et al., 2006; Agapova et al., 2007"],
        ["BPC-157", "10 mcg/kg IP; 10 mcg/kg oral gavage", "10 mcg/kg IP; 10 mcg/kg oral", "IP or oral (equivalent efficacy)", "Once daily", "Šikiriḉ et al., 2016; multiple lab replications"],
        ["NMN (NAD⁺ precursor)", "500 mg/kg IP", "500 mg/kg IP", "IP (direct blood NAD⁺); oral for chronic (lower plasma elevation)", "Once daily; or acute dose pre-stress", "Gomes et al., 2013 Cell; Yoshino et al., 2011 Cell Metabolism"],
        ["Direct NAD⁺", "250–500 mg/kg IP", "250–500 mg/kg IP", "IP; fresh daily preparation only (amber vials, sterile saline)", "Once daily; prepare fresh each use", "Pencina et al., 2023 Nature Aging"],
        ["Fluoxetine (positive control)", "10 mg/kg IP", "10 mg/kg IP", "IP (chronic 21d minimum for CUMS; acute for FST only)", "Daily for chronic models", "Standard antidepressant control"],
      ],
    },
    {
      type: "divider",
    },
    {
      type: "heading",
      text: "Critical Design Considerations",
    },
    {
      type: "subheading",
      text: "Common Pitfalls in Depression Research with Peptides",
    },
    {
      type: "paragraph",
      text: "1. Handling stress confounds: C57BL/6J mice are highly stress-reactive. Daily IP injection itself elevates corticosterone significantly. All groups must receive equal handling time and sham injections to match stress exposure — a failure mode common in budget-constrained studies. For intranasal delivery, standardize mouse head position (45° tilt), delivery rate (≤1 μL/s), and volume precisely. Unequal IN delivery produces 30–50% variability in CNS exposure.",
    },
    {
      type: "paragraph",
      text: "2. Test order matters: Behavioral tests must be ordered from least to most stressful within the same week. Recommended order: OFT (locomotion baseline) → EPM (anxiety) → SPT (anhedonia, 24h) → NSF (anxiety-latency, after 16h food deprivation) → FST/TST (despair, most stressful, last). Running FST before EPM invalidates EPM data via residual immersion-stress elevation.",
    },
    {
      type: "paragraph",
      text: "3. Circadian timing: All behavioral tests should be conducted at ZT2–6 (2–6 hours after lights-on, corresponding to early inactive phase for nocturnal mice). HPA sampling should be at ZT3–5 for baseline and ZT3–5 for restraint-stress challenge (peak cortisol amplitude in this window). Selank and Semax intranasal delivery should be 30–60 minutes before behavioral testing window.",
    },
    {
      type: "paragraph",
      text: "4. Sex differences: Female rodents show higher anxiety-like behavior at baseline and more pronounced HPA reactivity (E2 upregulates OTR, GR, and BDNF receptor density). NIH SABV requires sex-stratification (equal n male/female). For C57BL/6J, females require shorter CRS duration to achieve equivalent HPA dysregulation (10 vs 14 days). Power calculation should assume sex × treatment interaction as a primary statistical test.",
    },
    {
      type: "paragraph",
      text: "5. CUMS protocol variability: The CUMS battery must be rigorously standardized. Stressor intensity calibration (water temp for swim stress: 23–25°C), restraint duration (60 ± 5 min), cage tilt angle (45°), and social isolation timing must be documented and applied identically across cohorts. Inter-laboratory CUMS failure rate is high; confirm phenotype induction at day 14 by SPT in all CUMS groups before randomizing to treatment.",
    },
    {
      type: "paragraph",
      text: "6. NAD⁺ vehicle controls: NAM (nicotinamide) is a SIRT1 inhibitor at supraphysiological concentrations. NMN and NR both generate NAM as a metabolite. The NAM vehicle control group (equimolar NAM to account for NAM generated from NMN metabolism) is essential to confirm that observed effects are NAD⁺-mediated via SIRT1, not confounded by NAM. At 500 mg/kg IP NMN, equivalent NAM vehicle would be ~200 mg/kg IP.",
    },
    {
      type: "divider",
    },
    {
      type: "heading",
      text: "Reconstitution and Storage",
    },
    {
      type: "table",
      headers: ["Compound", "Reconstitution Solvent", "Working Concentration", "Storage (Lyophilized)", "Storage (Reconstituted)", "Special Notes"],
      rows: [
        ["Selank", "Isotonic saline pH 4.5–5.5 (IN); isotonic saline (IP)", "1–5 mg/mL stock; dilute for IN (0.1–0.5 mg/mL)", "-20°C, amber vials, minimize freeze-thaw", "4°C, 7–14 days; re-aliquot for IN use", "No BAC water for IN delivery (benzyl alcohol is retinotoxic/nasal irritant)"],
        ["Semax", "Isotonic saline pH 4.5–5.5 (IN); isotonic saline (IP)", "0.1–1 mg/mL (IN); 1–5 mg/mL (IP)", "-20°C, amber vials", "4°C, 7–14 days; aliquot single-dose for IN", "No BAC water for IN; single-nostril volumes ≤5 μL mouse, ≤25 μL rat"],
        ["BPC-157", "BAC water (IP/oral); sterile saline for oral (no BAC water for mucosal)", "500 mcg/mL stock; dilute to working in saline", "-20°C lyophilized; 4°C short-term", "4°C, 7–14 days (BAC water reconstituted)", "For oral gut-brain studies: sterile saline only — benzyl alcohol disrupts mucosal endpoints"],
        ["NMN (for NAD⁺)", "Sterile saline or PBS pH 7.0–7.4", "100–500 mg/mL stock (IP volumes)", "-20°C, avoid light exposure", "4°C, prepare fresh daily if possible; max 48h refrigerated", "No BAC water; no acidic conditions; no DMSO; amber vials essential (UV-sensitive)"],
        ["NAD⁺ (direct)", "Sterile saline only; neutral pH", "50–100 mg/mL; prepare fresh each use", "-20°C lyophilized; discard at any discoloration", "Use same-day only; never store reconstituted NAD⁺ > 4h at 4°C", "Extreme light sensitivity (259 nm); prepare under red-light conditions; discard if yellow/brown"],
      ],
    },
    {
      type: "divider",
    },
    {
      type: "heading",
      text: "Conclusions and Protocol Selection Guide",
    },
    {
      type: "paragraph",
      text: "For researchers designing depression and mood disorder studies, the choice of compound(s) should be matched to the mechanistic question. If the hypothesis centers on neurotrophic deficit (BDNF/TrkB): Semax or Selank with K252a/ANA-12 dissection controls and BDNF ELISA/ChIP endpoints. If the hypothesis centers on HPA dysregulation and gut-brain axis: BPC-157 in CRS or CUMS with corticosterone AUC, GR density, and tight junction endpoints. If the hypothesis centers on mitochondrial NAD⁺ and epigenetic mechanisms: NMN/NAD⁺ with SIRT1 activity, H3K9ac ChIP, and Seahorse OCR endpoints. For neuroinflammation-depression comorbidity: LPS/CUMS combined model with Selank (IL-6 suppression) and Iba-1 IHC endpoints. The multi-compound CUMS design above with 8 groups allows simultaneous mechanistic dissection across axes without requiring separate experiments — the ideal approach for hypothesis-generating grant-funded research.",
    },
    {
      type: "paragraph",
      text: "All compounds described herein are sold for Research Use Only (RUO). None have approved clinical indications for depression in the United States. Data from preclinical studies should not be extrapolated to human therapeutic use.",
    },
  ],
};
