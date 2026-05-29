import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "adamax-dsip-selank-nad-nootropic-stack-protocol-deep-dive",
  title: "Adamax (DSIP + Selank + NAD+): Nootropic Protocol Deep Dive",
  description:
    "A research-oriented deep dive into the Adamax nootropic stack: DSIP (sleep/SWS induction), Selank (anxiolytic/BDNF/IL-6 modulation), and NAD+ (SIRT1/SIRT3 neuroprotection/mitochondrial function). Covers non-competing mechanisms, temporal protocol design, published data for each compound, and combination research design considerations.",
  category: "Nootropics",
  readMinutes: 9,
  publishedAt: "2026-05-29",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "The so-called 'Adamax' stack — combining Delta Sleep-Inducing Peptide (DSIP), Selank, and NAD+ — represents one of the more mechanistically coherent multi-compound nootropic research protocols to gain traction in the peptide research literature. Each component acts on a distinct molecular axis: DSIP modulates hypothalamic sleep gating and HPA suppression; Selank targets GABAergic-independent anxiolysis, BDNF upregulation, and cytokine regulation; and NAD+ underpins mitochondrial energy metabolism, sirtuin-mediated neuroprotection, and PARP1/CD38 DNA-repair signaling. Critically, the three compounds do not share receptor targets, binding sites, or primary effector pathways — making them genuinely additive rather than potentially competitive or redundant when used in combination.",
    },
    {
      type: "paragraph",
      text: "This review covers the published mechanistic and preclinical data for each compound individually, explains the rationale for combining them in a temporal protocol, and outlines research design considerations for investigators studying multi-compound nootropic stacking.",
    },
    {
      type: "divider",
    },
    {
      type: "heading",
      text: "Compound 1: DSIP — Sleep Architecture and HPA Modulation",
    },
    {
      type: "subheading",
      text: "Mechanism of Action",
    },
    {
      type: "paragraph",
      text: "DSIP (Trp-Ala-Gly-Gly-Asp-Ala-Ser-Gly-Glu; MW 848.8 Da) is a nine-amino-acid nonapeptide first isolated in 1977 from the thalamo-cortical perfusate of sleeping rabbits by Monnier and colleagues. ICV and IV administration in rodents and humans increases delta-wave (0.5–3.5 Hz) EEG power, shortens sleep onset latency, and increases the proportion of slow-wave sleep (SWS, stages 3–4 equivalent) without producing the flat, sedated EEG profile seen with classical hypnotics. Behavioral arousal thresholds during DSIP-induced sleep are preserved — a characteristic consistent with physiological sleep induction rather than pharmacological suppression.",
    },
    {
      type: "paragraph",
      text: "DSIP does not bind directly to GABA-A receptors. Its sleep-promoting mechanism is thought to involve modulation of adenosinergic tone in the basal forebrain (A1 receptor sensitivity), potentiation of GABAergic interneurons in the thalamic reticular nucleus, and possible direct signaling at hypothalamic sleep-active neuronal populations. The identity of a high-affinity DSIP-specific receptor remains unconfirmed, though displacement binding studies suggest a distinct recognition site from known peptide receptors.",
    },
    {
      type: "paragraph",
      text: "Beyond sleep, DSIP significantly suppresses HPA axis activity. In a double-blind crossover study (Schneider-Helmert, 1988), insomnia patients receiving IV DSIP showed not only improved sleep continuity but also normalized urinary cortisol excretion — suggesting that DSIP-associated sleep improvement may be mechanistically coupled to HPA dampening rather than direct sleep-gating alone. This HPA-suppressive effect has relevance to the combination protocol: elevated baseline cortisol reliably interferes with BDNF synthesis and sirtuin activity, making DSIP a potential upstream enabler for the other two compounds.",
    },
    {
      type: "subheading",
      text: "Preclinical Dosing Data",
    },
    {
      type: "paragraph",
      text: "In rodent studies, effective doses for SWS promotion range from 1–10 nmol ICV to 250–500 mcg/kg IV or IP. Intranasal administration (100–300 mcg/kg) has been explored and shows partial central bioavailability, likely via olfactory transport. In the Adamax stack, DSIP is typically administered at bedtime (2–4 hours before target sleep onset), consistent with its role as a sleep-phase primer. Half-life is estimated at 2–4 hours in plasma, with a D-Ala-containing variant showing extended stability.",
    },
    {
      type: "divider",
    },
    {
      type: "heading",
      text: "Compound 2: Selank — Anxiolysis, BDNF, and Immune Modulation",
    },
    {
      type: "subheading",
      text: "Mechanism of Action",
    },
    {
      type: "paragraph",
      text: "Selank (TP-7, Thr-Lys-Pro-Arg-Pro-Gly-Pro; MW 751.9 Da) is a synthetic heptapeptide analog of the endogenous immunomodulatory tetrapeptide tuftsin. The three C-terminal residues (Pro-Gly-Pro) added by researchers at the Institute of Molecular Genetics (Moscow) dramatically extend metabolic stability from ~2 minutes (tuftsin) to ~20–30 minutes (Selank; Semenova et al., 2010), while preserving and enhancing central nervous system activity.",
    },
    {
      type: "paragraph",
      text: "Selank's anxiolytic profile is its most replicated characteristic. In elevated plus maze (EPM) and open-field paradigms, doses of 100–300 mcg/kg (intranasal or SC) in rodents consistently reduce anxiety-related behavior without sedation, ataxia, tolerance, or withdrawal — a profile that distinguishes it sharply from benzodiazepines. Mechanistically, Selank does not directly bind GABA-A receptors, but has been shown to enhance GABAergic transmission indirectly through increased GABA release from presynaptic terminals (Kozlovskaya et al., 2002). The non-sedating, non-GABAergic anxiolysis is one of the primary reasons Selank is studied as an experimental tool for parsing anxiolytic signaling pathways.",
    },
    {
      type: "paragraph",
      text: "Selank also upregulates BDNF (brain-derived neurotrophic factor) mRNA and protein in the hippocampus. BDNF is the primary mediator of long-term potentiation (LTP), synaptic plasticity, and neurogenesis in the dentate gyrus — functions directly relevant to learning, memory encoding, and cognitive resilience. In the context of the Adamax stack, BDNF upregulation by Selank synergizes with the NAD+/SIRT1 axis: SIRT1 deacetylates and activates the BDNF promoter IV, and NAD+ availability is rate-limiting for SIRT1 activity. This creates a plausible substrate-to-effector synergy.",
    },
    {
      type: "paragraph",
      text: "A third major action of Selank is immunomodulatory. At doses of 100–300 mcg/kg IP in rodents, Selank suppresses IL-6 and TNF-α production in response to LPS challenge while preserving — and in some models enhancing — anti-inflammatory IL-10. This pattern mirrors the IL-6/TNF-α suppression seen with KPV but through a different receptor pathway (tuftsin site vs MC1R/MC3R). In the context of neuroinflammation research, this makes Selank potentially useful for models where microglial IL-6 overactivation impairs hippocampal neurogenesis.",
    },
    {
      type: "subheading",
      text: "Preclinical Dosing Data",
    },
    {
      type: "paragraph",
      text: "Published rodent studies use SC or IP doses of 100–300 mcg/kg/day. Intranasal delivery is commonly used in clinical-adjacent research, with dose equivalents of 250–600 mcg total per administration. In temporal protocol design for the Adamax stack, Selank is administered in the morning, consistent with its anxiolytic/cognitive-enhancement role during active waking hours and the timing of maximal BDNF synthesis in hippocampal models.",
    },
    {
      type: "divider",
    },
    {
      type: "heading",
      text: "Compound 3: NAD+ — Mitochondrial Function, Sirtuins, and Neuroprotection",
    },
    {
      type: "subheading",
      text: "Mechanism of Action",
    },
    {
      type: "paragraph",
      text: "Nicotinamide adenine dinucleotide (NAD+; MW 663.4 Da) is a universal redox coenzyme functioning in over 500 enzymatic reactions. In the brain, NAD+ serves three primary roles relevant to nootropic research: (1) as a substrate for sirtuin deacetylases (SIRT1, SIRT3, SIRT6) that regulate transcriptional programs governing neuroplasticity, mitochondrial biogenesis, and DNA repair; (2) as a required substrate for PARP1/PARP2 (poly ADP-ribose polymerases), enzymes critical for single-strand DNA repair; and (3) as the direct electron carrier in oxidative phosphorylation, making NAD+ concentration rate-limiting for mitochondrial ATP production in neurons.",
    },
    {
      type: "paragraph",
      text: "In the brain, SIRT1 is the primary NAD+-dependent deacetylase relevant to cognitive function. SIRT1 deacetylates p53 (reducing apoptotic signaling in stressed neurons), PGC-1α (activating mitochondrial biogenesis programs), NF-κB (suppressing neuroinflammation), and — critically — the BDNF promoter IV. This last point creates a direct mechanistic link to Selank in the Adamax stack: Selank increases BDNF mRNA, but the translation efficiency of that mRNA and the chromatin accessibility of the BDNF gene are regulated in part by SIRT1 activity, which is NAD+-dependent.",
    },
    {
      type: "paragraph",
      text: "NAD+ declines with age in all tissues, including the brain (Rajman et al., 2018, Cell Metabolism). In the hypothalamus specifically, NAD+ depletion has been linked to dysregulated circadian rhythmicity (Satoh et al., 2013). Since DSIP's sleep-promoting actions interface with the circadian clock (SCN-mediated sleep-wake gating), restoring hypothalamic NAD+ availability may potentiate DSIP's efficacy — a second mechanistic synergy within the Adamax stack.",
    },
    {
      type: "subheading",
      text: "Preclinical Dosing Data",
    },
    {
      type: "paragraph",
      text: "Murine NAD+ studies use a wide dose range depending on route. IP administration: 500 mg/kg/day (Gomes et al., 2013, Cell; Canto et al., 2012, Cell Metabolism). SC administration for sustained elevation: 200–400 mg/kg/day. IV infusion in clinical studies (Pencina et al., 2023): 100–300 mg/hour. For stack protocol design in rodents, IP doses of 250–500 mg/kg/day in the morning are standard. IV NAD+ in human research typically uses 250–500 mg infused over 2–4 hours.",
    },
    {
      type: "divider",
    },
    {
      type: "heading",
      text: "The Combination Rationale: Non-Competing Mechanisms and Temporal Design",
    },
    {
      type: "subheading",
      text: "Why These Three Work Together",
    },
    {
      type: "paragraph",
      text: "The Adamax stack's mechanistic coherence rests on three non-overlapping receptor/pathway axes: (1) DSIP → adenosine/GABAergic thalamic circuitry + HPA axis (bedtime); (2) Selank → tuftsin receptor/presynaptic GABA enhancement + BDNF upregulation + IL-6 suppression (morning); (3) NAD+ → SIRT1/SIRT3/PARP1 + mitochondrial electron transport chain (morning, with food). There is no shared receptor among the three, no competitive displacement risk, and no known pharmacokinetic interaction. This means the combination does not require receptor competition controls in the same way that two GHRPs would.",
    },
    {
      type: "paragraph",
      text: "The synergies are biochemically plausible rather than merely additive by default: (A) DSIP suppresses cortisol → lower cortisol reduces hippocampal BDNF suppression → Selank's BDNF upregulation operates on a lower-interference substrate; (B) Selank upregulates BDNF mRNA → SIRT1 (NAD+-activated) enhances BDNF promoter IV accessibility → combined BDNF protein expression is potentially greater than either compound alone; (C) NAD+ restores hypothalamic energy and circadian signaling → DSIP's sleep-gating actions interface more effectively with a properly entrained SCN.",
    },
    {
      type: "subheading",
      text: "Temporal Protocol Design",
    },
    {
      type: "table",
      headers: ["Compound", "Timing", "Route", "Rationale"],
      rows: [
        ["DSIP", "Bedtime (2–4 h before sleep)", "SC / intranasal", "Aligns with SWS-onset window; HPA suppression during overnight cortisol nadir"],
        ["Selank", "Morning (fasted, 30 min before activity)", "SC / intranasal", "Anxiolytic effect during waking hours; BDNF peak synthesis in AM in rodent models"],
        ["NAD+", "Morning (with breakfast / post-morning injection)", "SC / IP / IV", "Mitochondrial demand peaks during active waking phase; circadian entrainment of SIRT1"],
      ],
    },
    {
      type: "paragraph",
      text: "In practice, DSIP and Selank are not co-administered, which simplifies reconstitution and eliminates any possibility of injection-site competition or degradation cross-contamination. NAD+ is typically administered separately given its distinct preparation requirements (lyophilized powder for IV reconstitution vs BAC water for peptides).",
    },
    {
      type: "divider",
    },
    {
      type: "heading",
      text: "Research Design Considerations",
    },
    {
      type: "subheading",
      text: "Control Arms",
    },
    {
      type: "paragraph",
      text: "A full factorial design for the Adamax triple stack requires eight groups (2³): vehicle only, DSIP alone, Selank alone, NAD+ alone, DSIP+Selank, DSIP+NAD+, Selank+NAD+, and all three. This is resource-intensive but necessary to attribute any observed cognitive, sleep, or biomarker effects to the correct component(s). Researchers with limited animal cohorts should at minimum include vehicle, each compound alone (3 groups), and the full triple combination (5 groups), accepting that pairwise interaction terms cannot be fully resolved.",
    },
    {
      type: "subheading",
      text: "Endpoint Selection",
    },
    {
      type: "list",
      items: [
        "Sleep architecture: EEG/EMG polysomnography in rodents — delta power %, SWS bout duration, total sleep time, REM latency",
        "HPA axis: AM plasma corticosterone (rodents), 24h urinary cortisol, ACTH pulsatility (if DSIP-specific HPA suppression is being tested)",
        "BDNF: Hippocampal BDNF protein (ELISA), BDNF mRNA (qRT-PCR), TrkB phosphorylation (Western)",
        "NAD+ metabolism: Tissue NAD+/NADH ratio (enzymatic cycling assay), SIRT1 deacetylase activity (acetylated p53 vs total p53 ratio), PGC-1α mRNA",
        "Cognitive: Morris water maze (spatial memory), novel object recognition (working memory), Barnes maze, fear conditioning",
        "Neuroinflammation: Hippocampal IL-6, TNF-α, IL-10 (Luminex or ELISA), microglial Iba-1 IHC",
        "Mitochondrial: Seahorse XF analyzer (OCR/ECAR in hippocampal neurons), complex I–IV activity",
      ],
    },
    {
      type: "subheading",
      text: "Potential Confounders",
    },
    {
      type: "paragraph",
      text: "Circadian timing confounds are particularly important for this stack. DSIP's sleep effects are sensitive to administration time relative to the dark phase in rodents (nocturnal animals). Researchers must standardize administration timing across all groups and relative to lights-on/lights-off. NAD+ also has circadian-phase-dependent effects on SIRT1 (which is highest during the subjective day in most tissues). Misaligned administration windows could attenuate or exaggerate interaction effects artificially.",
    },
    {
      type: "paragraph",
      text: "Stress level of animal housing is a second major confounder: individually housed rodents have chronically elevated corticosterone compared to group-housed animals. Since DSIP's primary pharmacological value in this stack is HPA dampening, stress protocol standardization (housing density, handler familiarization, cage enrichment) should be reported as a method variable rather than treated as incidental.",
    },
    {
      type: "paragraph",
      text: "For intranasal delivery of both DSIP and Selank, volume and administration technique must be standardized: 5 µL per nare in mice (10 µL total), 10 µL per nare in rats (20 µL total), administered while the animal is briefly anesthetized or manually restrained. Aspiration rate and head tilt affect olfactory vs nasopharyngeal deposition and substantially alter bioavailability reproducibility.",
    },
    {
      type: "divider",
    },
    {
      type: "heading",
      text: "Reconstitution and Storage Notes",
    },
    {
      type: "subheading",
      text: "DSIP",
    },
    {
      type: "paragraph",
      text: "DSIP is reconstituted in sterile water or phosphate-buffered saline (PBS, pH 7.4) at 1–2 mg/mL. BAC water is acceptable for multi-dose vials. Lyophilized powder is stable at −20°C for 24+ months. Reconstituted solution should be used within 14 days at 4°C; avoid repeated freeze-thaw cycles, which degrade the Trp residue (oxidation to kynurenine or N-formylkynurenine under oxidative stress conditions). Store away from light.",
    },
    {
      type: "subheading",
      text: "Selank",
    },
    {
      type: "paragraph",
      text: "Selank is reconstituted in sterile water or BAC water at 1–5 mg/mL. For intranasal delivery, use sterile water rather than BAC water to avoid mucosal irritation from benzyl alcohol. Lyophilized powder is stable at −20°C for 24+ months. Reconstituted solution: 7–14 days at 4°C. Selank is susceptible to adsorption to plastic tube surfaces at low concentrations — use 0.1% BSA in carrier or polypropylene tubes for dilute stock solutions.",
    },
    {
      type: "subheading",
      text: "NAD+",
    },
    {
      type: "paragraph",
      text: "NAD+ is typically supplied as lyophilized free acid or sodium salt powder. For IV infusion, reconstitute in sterile saline (0.9% NaCl) or 5% dextrose immediately before administration — NAD+ is relatively unstable in solution at room temperature (>10% degradation within 4 hours at 25°C). Lyophilized NAD+ should be stored at −20°C, protected from moisture. For IP/SC injection in rodents, reconstitute in sterile PBS at 50–100 mg/mL and use within 1 hour of preparation.",
    },
    {
      type: "divider",
    },
    {
      type: "callout",
      text: "Research Use Only. All compounds referenced in this article are intended solely for in vitro and preclinical research applications. They are not approved for human use by any regulatory authority. This article is for educational and research purposes only.",
    },
  ],
};
