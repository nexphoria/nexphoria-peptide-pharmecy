import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "semax-cognitive-enhancement-neuroprotection-research-protocols",
  title: "Semax for Cognitive Enhancement and Neuroprotection: Mechanisms, Protocols, and Study Design",
  description:
    "A comprehensive research guide to Semax — ACTH(4-7)PGP pharmacology, BDNF/VEGF upregulation mechanisms, cognitive and neuroprotective preclinical data, intranasal vs IP delivery, and full study design considerations for nootropic and stroke research.",
  category: "Nootropics",
  readMinutes: 11,
  publishedAt: "2026-06-01",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Semax is a synthetic heptapeptide developed at the Institute of Molecular Genetics of the Russian Academy of Sciences in the 1980s. It was designed as a metabolically stable analog of ACTH(4-7) — the tetrapeptide Met-Glu-His-Phe — with a Pro-Gly-Pro C-terminal extension to improve stability, and is classified in Russia as a nootropic and neuroprotective drug (trade name Semax). Unlike its structural predecessor ACTH, Semax lacks adrenocorticotropic activity: it does not activate MC2R (the ACTH receptor on adrenal cortex), does not elevate cortisol, and does not influence the HPA axis at therapeutic doses. This dissociation makes it particularly useful in research contexts where ACTH-mediated confounds would contaminate results.",
    },
    {
      type: "divider",
    },
    {
      type: "heading",
      text: "Pharmacology and Mechanism of Action",
    },
    {
      type: "subheading",
      text: "ACTH(4-7)PGP: Melanocortin Binding Without Adrenocortical Activation",
    },
    {
      type: "paragraph",
      text: "The ACTH(4-7) tetrapeptide core binds melanocortin receptors MC1R, MC3R, MC4R, and MC5R, but not MC2R. This is pharmacologically significant: MC2R is the sole receptor that mediates cortisol secretion from the adrenal cortex, and its absence from Semax's target profile is what separates the cognitive/neuroprotective actions from the adrenal axis. MC4R in the hypothalamus and MC3R in limbic regions are the primary CNS targets for the memory-enhancing and neuroprotective phenotypes attributed to ACTH(4-7) analogs. The downstream signaling of MC4R involves Gs/cAMP/PKA/CREB — a cascade that directly converges on BDNF promoter IV activation.",
    },
    {
      type: "paragraph",
      text: "The Pro-Gly-Pro C-terminal extension adds more than metabolic stability. PGP (Pro-Gly-Pro) itself has been characterized as an endogenous neuropeptide with anti-inflammatory properties — it is released from extracellular matrix collagen by MMPs during tissue injury and acts as a CXCR1/CXCR2 ligand to modulate neutrophil migration. Whether this contributes meaningfully to Semax's in vivo effects at the doses used in research is debated, but the extension increases functional half-life from approximately 2 minutes (ACTH 4-7 native) to roughly 20–30 minutes in plasma, and longer after intranasal administration due to olfactory depot formation.",
    },
    {
      type: "divider",
    },
    {
      type: "heading",
      text: "BDNF and VEGF Upregulation: The Core Neurotrophic Mechanism",
    },
    {
      type: "subheading",
      text: "Dolotov 2006: BDNF Elevation in the Hippocampus and Frontal Cortex",
    },
    {
      type: "paragraph",
      text: "The most cited mechanistic study for Semax is Dolotov et al. (2006, Journal of Neurochemistry), which characterized intranasal Semax-induced BDNF upregulation in rat brain. At 50 mcg/kg intranasal, Semax produced a 2–3-fold increase in BDNF mRNA in the hippocampus and frontal cortex within 1–6 hours, with protein elevation lagging by approximately 12–24 hours. The BDNF elevation was blocked by K252a (TrkB kinase inhibitor), suggesting both initial TrkB-independent transcriptional induction and downstream TrkB-dependent autocrine amplification. BDNF acts at TrkB receptors to activate PI3K/Akt (survival), MAPK/ERK (differentiation and synaptic plasticity), and PLCγ/IP3/Ca2+ (neurotransmitter release and LTP).",
    },
    {
      type: "paragraph",
      text: "Importantly, Semax's BDNF induction was observed without the CNS inflammatory markers (TNF-α, IL-1β) that typically accompany LPS or injury-based BDNF elevation. This makes Semax a useful tool for studying 'clean' neurotrophic stimulation in the absence of neuroimmune confounds — a distinct advantage over neuroinflammation-based BDNF induction models.",
    },
    {
      type: "subheading",
      text: "Agapova 2007: VEGF Upregulation and Ischemic Preconditioning",
    },
    {
      type: "paragraph",
      text: "Agapova et al. (2007, Regulatory Peptides) demonstrated that intranasal Semax (50 mcg/kg × 3 days) induced VEGF mRNA elevation in the hippocampus and cortex, with a peak at 6–12 hours post-dose. The VEGF elevation was sufficient to produce measurable angiogenic protection in a rat MCAO (middle cerebral artery occlusion) model: Semax pretreatment for 3 days reduced infarct volume by approximately 35–45% and improved neurological deficit scores (mNSS) at 24 hours post-occlusion. This neuroprotective effect required intact VEGFR2 signaling — treatment with the VEGFR2 inhibitor SU5416 abrogated the infarct-reducing effect, confirming the VEGF-dependent mechanism.",
    },
    {
      type: "paragraph",
      text: "The BDNF and VEGF upregulation mechanisms share a common upstream node: CREB (cAMP response element-binding protein), which is activated downstream of MC4R/Gs/cAMP/PKA. Both BDNF (promoter IV) and VEGF (HRE and CRE sites) contain CREB binding elements. The coordinate induction of both neurotrophic factors from a single CREB activation event explains why Semax produces complementary neuroprotective phenotypes — BDNF for synaptic/neuronal survival and VEGF for vascular support.",
    },
    {
      type: "divider",
    },
    {
      type: "heading",
      text: "Cognitive Enhancement Data",
    },
    {
      type: "subheading",
      text: "Memory Consolidation and Attention Research",
    },
    {
      type: "paragraph",
      text: "Semax has been evaluated in rodent learning and memory paradigms since the 1990s. In Kaplan et al. (1996, Bulletin of Experimental Biology and Medicine), intranasal Semax (50 mcg/kg) improved acquisition and retention in the Morris Water Maze in both young and aged rats. Latency to find the hidden platform decreased by 25–30% at days 2–4 of acquisition, with the most pronounced effect in the aged cohort where baseline BDNF levels are lower. In the passive avoidance paradigm, Semax increased the step-through latency on retention testing from approximately 180 seconds (vehicle) to >300 seconds (Semax) — consistent with enhanced fear memory consolidation.",
    },
    {
      type: "paragraph",
      text: "More mechanistically, Ivanova et al. (2016, Neuropeptides) demonstrated that IP Semax (100 mcg/kg × 5 days) increased hippocampal synaptophysin expression (a presynaptic vesicle marker for synaptic density) by approximately 40%, and increased NR2B subunit expression of NMDA receptors — the synaptic plasticity-associated 'learning' subunit. This suggests Semax enhances the structural substrate for long-term potentiation (LTP), not merely acute neurotransmission.",
    },
    {
      type: "subheading",
      text: "Clinical Trial Data: MCI and Attention",
    },
    {
      type: "paragraph",
      text: "Kaplan et al. (1996) also conducted a small human pilot (n=18) in mild cognitive impairment (MCI), administering intranasal Semax (600 mcg/day × 5 days). Neuropsychological testing showed improvements in attention (Schulte tables performance), short-term working memory (digit span), and processing speed at 1-week post-treatment follow-up. Effect sizes were moderate (d = 0.4–0.6), consistent with a neurotrophic mechanism that requires time for protein expression. These data are preliminary (small n, Russian-language trial registry), but align with the BDNF mechanism which predicts delayed but sustained cognitive benefit rather than immediate stimulant-like enhancement.",
    },
    {
      type: "divider",
    },
    {
      type: "heading",
      text: "Neuroprotection: Stroke and Ischemia Research",
    },
    {
      type: "subheading",
      text: "MCAO Model Protocols and Published Data",
    },
    {
      type: "paragraph",
      text: "The strongest neuroprotective evidence for Semax comes from transient MCAO (tMCAO) rat models. The standard protocol uses Sprague-Dawley or Wistar rats with 90-minute intraluminal filament occlusion followed by reperfusion. Semax administered intranasally at 50–150 mcg/kg during the reperfusion window (0–6 hours post-occlusion) consistently reduces infarct volume by 30–45% at 24 hours by TTC staining, with corresponding improvements in mNSS neurological deficit scoring. The therapeutic window extends to approximately 6 hours post-ischemia — longer than rtPA's 4.5-hour window — which is an interesting translational observation for future research design.",
    },
    {
      type: "paragraph",
      text: "Mechanistically, the post-ischemic protection involves: (1) VEGF-driven angiogenesis in the peri-infarct penumbra (CD31/VEGF IHC at 7 days), (2) BDNF-mediated anti-apoptotic signaling in penumbral neurons (Bcl-2/Bax ratio improvement, reduced TUNEL+ nuclei), and (3) suppression of post-ischemic neuroinflammation (reduced Iba-1 microglial activation, decreased TNF-α at 24–72 hours). The combination of neurotrophic + anti-apoptotic + anti-inflammatory mechanisms distinguishes Semax from single-mechanism neuroprotective peptides.",
    },
    {
      type: "divider",
    },
    {
      type: "heading",
      text: "Delivery Routes: Intranasal vs IP",
    },
    {
      type: "paragraph",
      text: "Semax was specifically developed for intranasal delivery, and this route is the most pharmacologically relevant for CNS endpoints. Intranasal Semax reaches the olfactory bulb and immediately adjacent cortex within 15–30 minutes via axonal transport along olfactory nerve fibers (olfactory transmucosal pathway), bypassing the BBB. Systemic bioavailability from intranasal administration is low (estimated 5–15%), meaning CNS effects from IN Semax are largely attributable to direct olfactory delivery rather than peripheral-to-CNS transport.",
    },
    {
      type: "table",
      text: "Semax Delivery Route Comparison",
      headers: ["Parameter", "Intranasal", "IP", "IV"],
      rows: [
        ["CNS pathway", "Direct olfactory/trigeminal", "Peripheral → vagal/BBB", "Peripheral → BBB (1-10%)"],
        ["Tmax (brain)", "15–30 min", "30–60 min", "15–30 min"],
        ["Bioavailability (CNS)", "High (direct delivery)", "Moderate", "Low (<10% BBB penetrant)"],
        ["Preferred for", "Cognitive/neuroprotection endpoints", "Peripheral immune/systemic effects", "Acute PK studies"],
        ["Mouse dose", "50–200 mcg/kg (5 μL/nostril)", "100–300 mcg/kg", "50–100 mcg/kg"],
        ["Rat dose", "50–150 mcg/kg (20–25 μL/nostril)", "100–300 mcg/kg", "50–100 mcg/kg"],
        ["Reconstitution vehicle", "Isotonic saline pH 4.5–5.5", "Saline or PBS", "Sterile saline only"],
      ],
    },
    {
      type: "paragraph",
      text: "For IP administration, an important dissection experiment involves comparing IN Semax (CNS-primary) vs IP Semax (peripheral-primary) with bilateral olfactory bulbectomy as a structural control. If IP Semax produces cognitive effects that are absent in bulbectomized animals, this implicates olfactory-limbic circuit involvement even for systemically administered peptide — a finding observed with several nootropic peptides.",
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
      text: "Semax Published Preclinical Dosing Reference",
      headers: ["Model", "Species", "Dose", "Route", "Frequency", "Duration", "Primary Endpoint"],
      rows: [
        ["Cognitive (MWM)", "Rat", "50–100 mcg/kg", "IN", "Once daily", "5–14 days", "Latency, probe trial"],
        ["Passive avoidance", "Rat", "50 mcg/kg", "IN", "Single or × 3d", "1–3 days", "Step-through latency"],
        ["BDNF induction", "Rat", "50 mcg/kg", "IN", "Single dose", "Acute (6h post)", "BDNF mRNA/protein"],
        ["MCAO neuroprotection", "Rat", "50–150 mcg/kg", "IN", "q12h × 3 days", "3 days post-reperfusion", "Infarct volume, mNSS"],
        ["VEGF preconditioning", "Rat", "50 mcg/kg", "IN", "Once daily × 3d pre-MCAO", "3 days pre-ischemia", "Infarct %, VEGF IHC"],
        ["Aged cognitive", "Rat (20–24 mo)", "100–200 mcg/kg", "IN", "Once daily × 7–14d", "1–2 weeks", "MWM, BDNF hippocampus"],
        ["Neuroinflammation", "Mouse", "100–300 mcg/kg", "IP", "Once daily × 5d", "5 days", "TNF-α, IL-1β, Iba-1"],
        ["Depression (FST)", "Mouse", "100–200 mcg/kg", "IP", "Once daily × 7d", "7 days", "Immobility time"],
      ],
    },
    {
      type: "divider",
    },
    {
      type: "heading",
      text: "Comparison With Selank: Complementary Mechanisms",
    },
    {
      type: "paragraph",
      text: "Semax and Selank are frequently studied together as the two flagship Russian research nootropics. Their mechanisms are largely non-overlapping, providing a rationale for combination studies. Semax drives neurotrophic signaling (BDNF via CREB/MC4R, VEGF via HIF-1α/CREB) and provides neuroprotection in ischemia models. Selank drives anxiolysis (presynaptic GABA enhancement, enkephalinase inhibition) and immune modulation (IL-6/IL-8 normalization via tuftsin receptor macrophages). The combination produces additive — or potentially synergistic — effects on stress-resilience + cognitive function endpoints because anti-anxiety effects reduce corticosterone-mediated BDNF suppression (Semax BDNF induction is partially constrained by stress-axis activation), while Semax BDNF elevates the neurotrophic substrate that Selank's anxiolytic state allows to be fully expressed.",
    },
    {
      type: "table",
      text: "Semax vs Selank: Mechanistic Differentiation",
      headers: ["Parameter", "Semax", "Selank"],
      rows: [
        ["Core structure", "ACTH(4-7)PGP", "Tuftsin(1-4)PGP"],
        ["Primary receptor", "MC1R/MC3R/MC4R/MC5R (not MC2R)", "Tuftsin receptor (macrophage/neutrophil)"],
        ["Downstream pathway", "Gs/cAMP/PKA/CREB", "Presynaptic GABA, tuftsin-R"],
        ["BDNF mechanism", "Direct CREB → BDNF promoter IV", "Indirect (stress reduction → BDNF disinhibition)"],
        ["Primary CNS effect", "Cognitive enhancement, neuroprotection", "Anxiolysis, stress resilience"],
        ["VEGF upregulation", "Yes (Agapova 2007)", "Not established"],
        ["Cortisol/HPA axis", "No activation (MC2R absent)", "Suppressive (tuftsin anti-inflammatory)"],
        ["Primary delivery", "Intranasal (CNS direct)", "Intranasal or IP"],
        ["Ischemia models", "Strong data (35–45% infarct reduction)", "Not a primary model"],
        ["Anxiety models (EPM/OFT)", "Moderate effects", "Primary effect (GABA modulation)"],
      ],
    },
    {
      type: "divider",
    },
    {
      type: "heading",
      text: "Endpoint Selection Guide",
    },
    {
      type: "table",
      text: "Semax Research Endpoint Reference",
      headers: ["Endpoint", "Method", "Timing Post-Dose", "What It Measures"],
      rows: [
        ["BDNF mRNA (hippocampus)", "RT-qPCR, Taqman BDNF probe", "1–6 hours IN", "Primary transcriptional induction"],
        ["BDNF protein (hippocampus/cortex)", "ELISA (R&D Systems DBD00)", "12–24 hours", "Protein elevation (lags mRNA)"],
        ["pTrkB (Tyr706/707)", "Western blot, cell signaling #4621", "30–60 min post-BDNF peak", "Receptor activation confirmation"],
        ["pCREB (Ser133)", "Western blot, IHC", "30–90 min post-dose", "Upstream transcriptional activation"],
        ["VEGF mRNA/protein", "RT-qPCR + ELISA (R&D MVE00)", "6–12 hours IN", "Angiogenic signaling"],
        ["Morris Water Maze", "60s trials × 5 days, probe day 6", "During dosing period", "Spatial memory acquisition/retention"],
        ["Passive avoidance", "Step-through latency, 24h retention", "Single or × 3d dosing", "Fear memory consolidation"],
        ["Infarct volume (TTC)", "2% TTC, 2mm coronal sections, 24h", "Post-MCAO 24h", "Neuroprotection magnitude"],
        ["mNSS score", "11-point neurological deficit scale", "24h, 72h, 7d post-MCAO", "Functional recovery"],
        ["Iba-1 IHC (microglial activation)", "DAB IHC, threshold morphometry", "24–72h post-MCAO", "Neuroinflammation suppression"],
      ],
    },
    {
      type: "divider",
    },
    {
      type: "heading",
      text: "Critical Pharmacological Controls",
    },
    {
      type: "paragraph",
      text: "Well-designed Semax studies include the following controls to attribute effects to specific mechanisms:",
    },
    {
      type: "table",
      text: "Pharmacological Controls for Semax Research",
      headers: ["Control Agent", "Dose", "Route", "Mechanism Probed"],
      rows: [
        ["K252a (TrkB inhibitor)", "25–50 mcg/kg IP", "IP", "Dissects TrkB-dependent vs CREB-direct effects"],
        ["SU5416 (VEGFR2 inhibitor)", "25 mg/kg IP", "IP", "Confirms VEGFR2-mediated neuroprotection"],
        ["HS014 (MC4R antagonist)", "1 mg/kg IP", "IP", "Confirms MC4R as primary BDNF/VEGF driver"],
        ["ANA-12 (TrkB antagonist)", "0.5 mg/kg IP", "IP", "Full TrkB pathway blockade"],
        ["ACTH(4-7) without PGP", "Equimolar dose", "IN or IP", "Dissects PGP extension contribution"],
        ["MC2R-selective compound", "— (structural control)", "—", "Confirms no adrenocortical activation"],
        ["L-NAME (NOS inhibitor)", "25–50 mg/kg IP", "IP", "Tests eNOS-NO contribution to neuroprotection"],
        ["Vehicle control", "Isotonic saline pH 4.5–5.5", "IN matched", "Baseline reference"],
        ["Positive control (MWM)", "Donepezil 1 mg/kg PO", "PO", "Validates assay sensitivity"],
      ],
    },
    {
      type: "divider",
    },
    {
      type: "heading",
      text: "Reconstitution and Storage",
    },
    {
      type: "paragraph",
      text: "Semax is typically supplied as a lyophilized powder. For intranasal administration in rodents, reconstitute in isotonic saline (0.9% NaCl) adjusted to pH 4.5–5.5. The slightly acidic pH improves mucosal absorption, reduces aggregation risk, and matches the nasal mucosal pH. Do not use BAC water for intranasal delivery — benzyl alcohol is a nasal mucosal irritant and will confound behavioral results by producing avoidance responses. For IP administration, isotonic saline at physiological pH (7.0–7.4) is acceptable. Avoid DMSO: Semax does not require organic co-solvents and DMSO has independent CNS effects that would confound behavioral data.",
    },
    {
      type: "paragraph",
      text: "Reconstituted Semax in saline at 4°C is stable for approximately 14–21 days. Lyophilized powder stored at −20°C is stable for 12–24 months. Protect from light (amber vials). Intranasal delivery volume: 5 μL per nostril for mice (total 10 μL), 20–25 μL per nostril for rats (total 40–50 μL). Use a Hamilton syringe or gel-loading pipette tip for controlled nasal instillation. Subject should be held at 45° head-up angle for 60 seconds post-instillation to prevent drainage into the nasopharynx.",
    },
    {
      type: "divider",
    },
    {
      type: "heading",
      text: "Research Design Considerations",
    },
    {
      type: "paragraph",
      text: "Six key design factors for Semax studies:",
    },
    {
      type: "paragraph",
      text: "**1. Intranasal delivery standardization.** Nasal delivery volume consistency is the single largest source of inter-animal variability in IN Semax studies. Standardize Hamilton syringe volume, delivery rate (<1 μL/sec), head angle, and nasal anatomy (exclude animals with visible turbinate blockage). Train the experimenter before data collection begins. Consider video recording delivery for blinded QC review.",
    },
    {
      type: "paragraph",
      text: "**2. Timing of BDNF measurement.** BDNF mRNA peaks at 1–6 hours post-IN Semax; protein peaks at 12–24 hours. If measuring protein and the experiment shows no elevation, this is often a timing problem rather than a true negative. Pre-specify the measurement window in the protocol.",
    },
    {
      type: "paragraph",
      text: "**3. Behavioral test order effects.** Behavioral test batteries (MWM → passive avoidance → EPM) each impose procedural stress that influences subsequent tests. Counterbalance test order across groups or run independent cohorts for each behavioral endpoint. Do not run MWM and forced swim test in the same cohort within 72 hours.",
    },
    {
      type: "paragraph",
      text: "**4. MC4R pathway controls.** For mechanism attribution, include the MC4R antagonist HS014 (1 mg/kg IP) as a parallel group. If HS014 fully blocks Semax's cognitive or neuroprotective effects, this confirms MC4R as the primary effector. A partial blockade suggests additional MCR subtype contributions.",
    },
    {
      type: "paragraph",
      text: "**5. Aged animal selection.** Semax's neurotrophic effects are consistently stronger in aged animals than young adults — reflecting lower baseline BDNF and greater opportunity for fold-change induction. For translational relevance, aged cohorts (20–24 month C57BL/6J or Sprague-Dawley) sourced from NIA Aged Rodent Colonies are preferred. Allow 4-week acclimatization before baseline testing.",
    },
    {
      type: "paragraph",
      text: "**6. Sex differences.** Female rodents have higher basal BDNF expression due to estrogen-mediated TrkB upregulation. This may reduce the fold-change BDNF response to Semax in female vs male cohorts. NIH SABV mandates sex-stratified groups (n ≥ 5 per sex) for neuroscience studies. Analyze sex as an independent factor and report sex × treatment interaction statistics.",
    },
    {
      type: "divider",
    },
    {
      type: "heading",
      text: "Combination Protocols: Semax + Selank Stack",
    },
    {
      type: "paragraph",
      text: "A full factorial 4-group design (vehicle / Semax alone / Selank alone / Semax + Selank) with CUMS (chronic unpredictable mild stress) as the stressor model is the recommended combination protocol design. CUMS reduces hippocampal BDNF by approximately 30–40% (Duman 2001) and produces anxiety/depressive phenotypes measurable across EPM, OFT, sucrose preference, and FST. The hypothesis: Selank's anxiolysis reduces corticosterone-driven BDNF suppression, while Semax directly induces BDNF — the combination producing a larger BDNF elevation and greater behavioral rescue than either alone. Interaction effect (statistically, F-interaction in 2-way ANOVA) is the primary endpoint, requiring n ≥ 10 per group for 80% power at expected CV% = 35%.",
    },
    {
      type: "divider",
    },
    {
      type: "paragraph",
      text: "**Research Use Only.** Semax is not approved for human use in the United States. All information on this page is intended for pre-clinical research purposes only, in compliance with institutional IACUC protocols and applicable regulations. This content does not constitute medical advice, diagnosis, or treatment recommendations.",
    },
  ],
};
