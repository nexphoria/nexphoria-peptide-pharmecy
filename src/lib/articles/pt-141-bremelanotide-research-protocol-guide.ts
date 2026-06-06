import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "pt-141-bremelanotide-research-protocol-guide",
  title: "PT-141 (Bremelanotide) Research Protocol Guide: Dosing, Timing, and Endpoints",
  description:
    "A researcher's protocol reference for PT-141 (bremelanotide) — covering melanocortin receptor pharmacology, published dose-response data, SC vs. intranasal administration comparison, relevant behavioral and physiological endpoints, and study design considerations for MC3R/MC4R-mediated research.",
  category: "Research Protocols",
  readMinutes: 10,
  publishedAt: "2026-06-06",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "PT-141 (bremelanotide; formerly PT-141 in development nomenclature, CAS 189691-06-3) is a cyclic heptapeptide melanocortin receptor agonist derived from Melanotan II via removal of the C-terminal amide group that produces the latter's tanning activity. Unlike Melanotan II, PT-141's key research interest lies primarily in central nervous system modulation of arousal-relevant behaviors via MC3R and MC4R engagement rather than MC1R-mediated melanogenesis.",
    },
    {
      type: "paragraph",
      text: "As of 2026, bremelanotide is the only melanocortin-based compound that has completed Phase 3 clinical trials and received FDA approval (as Vyleesi for hypoactive sexual desire disorder in premenopausal women, approved 2019). This clinical validation history makes PT-141 one of the better-characterized peptides from a pharmacokinetic and receptor pharmacology standpoint — a useful basis for researchers designing CNS or neuroendocrine studies involving melanocortin axis modulation.",
    },
    {
      type: "heading",
      text: "Receptor Pharmacology: MC3R, MC4R, and CNS Targets",
    },
    {
      type: "paragraph",
      text: "PT-141 binds with nanomolar affinity to melanocortin receptors 1 through 4, with highest functional relevance at MC3R (Ki ~2 nM) and MC4R (Ki ~1.5 nM). Its structural modification relative to Melanotan II — the absence of the C-terminal amide — reduces MC1R activity (the receptor responsible for eumelanin synthesis in melanocytes) while preserving hypothalamic and limbic melanocortin receptor engagement.",
    },
    {
      type: "paragraph",
      text: "MC4R is densely expressed in the hypothalamic paraventricular nucleus (PVN), medial preoptic area (MPOA), ventromedial hypothalamus (VMH), and several limbic structures including the nucleus accumbens and dorsal raphe. MC3R is expressed in arcuate nucleus neurons (including those co-expressing AgRP and POMC), hypothalamic nuclei regulating energy balance, and limbic structures. The behavioral consequences of MC3R/MC4R activation are diverse and include modulation of motivated behaviors, autonomic nervous system outflow, penile erection and female genital blood flow in rodent models, and energy expenditure.",
    },
    {
      type: "heading",
      text: "Pharmacokinetics and Bioavailability",
    },
    {
      type: "subheading",
      text: "Subcutaneous Administration",
    },
    {
      type: "paragraph",
      text: "Following subcutaneous injection in healthy human subjects, PT-141 achieves peak plasma concentrations (Cmax) within 60–90 minutes. Bioavailability via SC injection is approximately 100% relative to IV dosing. The elimination half-life is approximately 2.7 hours, with a mean AUC0-∞ of approximately 48 ng·h/mL at the 1.75 mg approved clinical dose. In rodent pharmacokinetic studies, SC absorption is similarly rapid with shorter absolute half-lives consistent with higher metabolic rates in rodents.",
    },
    {
      type: "subheading",
      text: "Intranasal Administration",
    },
    {
      type: "paragraph",
      text: "PT-141 was originally developed as an intranasal agent — the IN route was the formulation that entered Phase 2/3 trials before the SC autoinjector format was ultimately approved. Intranasal bioavailability in Phase 2 studies was approximately 59–64% relative to SC, with Cmax achieved at 30–45 minutes post-administration. The lower bioavailability via IN is offset by faster Cmax timing and potential direct olfactory-CNS delivery pathways that SC injection does not utilize.",
    },
    {
      type: "paragraph",
      text: "For researchers comparing routes, relevant differences include: IN delivery provides faster peak CNS exposure onset (~30 min vs. 60–90 min SC) but lower total systemic exposure; SC provides more predictable dose-response characteristics and is more suitable for quantitative pharmacokinetic studies; IN is more appropriate for behavioral paradigms where precise timing of CNS peak exposure is the primary variable.",
    },
    {
      type: "heading",
      text: "Published Dose-Response Data",
    },
    {
      type: "subheading",
      text: "Rodent Studies",
    },
    {
      type: "paragraph",
      text: "The most cited dose-response work for PT-141 in rodent models was published by Wessells et al. and by the Diamond/Haber group at multiple institutions through the 2000s. Key findings:",
    },
    {
      type: "list",
      items: [
        "Penile erection frequency in rats: effective dose range 0.03–1 mg/kg IP or SC, with near-maximal response at 0.3 mg/kg; ceiling effects seen above 1 mg/kg in some models",
        "Female sexual receptivity (lordosis quotient) in ovariectomized estrogen-primed rats: dose-response established at 0.1–1 mg/kg SC, with maximal lordosis at 0.3–1 mg/kg",
        "Hypothalamic cFos activation: dose-dependent increase in PVN and MPOA c-Fos immunoreactivity at 0.1–1 mg/kg IV, consistent with central mechanism rather than peripheral origin",
        "Nausea/emesis (ferret and mink models): emetic responses recorded at ≥1 mg/kg in species with functional emetic reflexes; rats (which lack an emetic reflex) cannot be used to model this important side effect",
        "Hyperpigmentation (MC1R): reduced vs. Melanotan II but not absent at high doses; relevant for long-term dosing protocols where eumelanin accumulation may confound other readouts",
      ],
    },
    {
      type: "subheading",
      text: "Human Clinical Trial Data",
    },
    {
      type: "paragraph",
      text: "Phase 2 and Phase 3 clinical data for bremelanotide provide useful anchor points for researchers designing rodent models intended to translate to human-relevant pharmacology:",
    },
    {
      type: "list",
      items: [
        "Approved SC dose: 1.75 mg administered approximately 45 minutes before anticipated activity",
        "Maximum frequency: not more than once per 24 hours, no more than 8 times per month (FDA-approved label)",
        "Dose-response in premenopausal women (RECONNECT trials): significant improvement on desire and distress endpoints vs. placebo at 1.75 mg SC; 0.75 mg was studied but showed less consistent efficacy",
        "Transient blood pressure increase: mean increase of ~6 mmHg systolic at Cmax; resolved within 12 hours; relevant for cardiovascular endpoint studies",
        "Nausea: most common adverse event at 40% incidence at 1.75 mg; flushing at 20%; hyperpigmentation (facial/genital/breast) with chronic use",
      ],
    },
    {
      type: "heading",
      text: "Study Design Considerations",
    },
    {
      type: "subheading",
      text: "Behavioral Endpoints in Rodent Models",
    },
    {
      type: "paragraph",
      text: "For researchers studying PT-141's CNS effects in rodent models, the most validated behavioral readouts include:",
    },
    {
      type: "list",
      items: [
        "Male copulatory behavior: mount, intromission, and ejaculation latency/frequency in paired mating trials; requires sexually experienced males and hormonally receptive females",
        "Ex copula penile erection: scored in isolated animals in a neutral environment; counts spontaneous erections post-injection without confounding social/behavioral variables",
        "Female solicitation and proceptivity: measured in ovariectomized, estrogen/progesterone-primed females; lordosis quotient (LQ) = lordosis responses/mounts received × 100",
        "Elevated plus maze and open field: useful as secondary endpoints to confirm absence of anxiolytic or anxiogenic confounds at the doses used in primary paradigms",
        "Sucrose preference and social interaction: relevant for researchers studying MC4R modulation of motivation broadly (reward/anhedonia circuitry)",
      ],
    },
    {
      type: "subheading",
      text: "Neuroendocrine and Cardiovascular Endpoints",
    },
    {
      type: "paragraph",
      text: "Beyond behavioral readouts, PT-141 research frequently incorporates:",
    },
    {
      type: "list",
      items: [
        "Plasma ACTH and cortisol (or corticosterone in rodents): MC2R-independent but MC4R-mediated HPA axis activation is a documented PT-141 effect; important covariate to control in behavioral studies",
        "Blood pressure telemetry: particularly relevant given the transient pressor response; required for cardiovascular safety characterization in any new model",
        "c-Fos immunohistochemistry: hypothalamic region mapping of neuronal activation; provides spatial validation of CNS engagement at the tested dose",
        "POMC and AgRP mRNA: RT-PCR from arcuate nucleus tissue; relevant for energy balance and feeding behavior downstream of MC3R/MC4R",
      ],
    },
    {
      type: "subheading",
      text: "Receptor Selectivity Controls",
    },
    {
      type: "paragraph",
      text: "Because PT-141 is a pan-melanocortin agonist with activity at MC1R–MC4R, properly controlled studies include receptor-selective antagonists to attribute observed effects to specific receptor subtypes. Key pharmacological tools include:",
    },
    {
      type: "list",
      items: [
        "SHU9119 (MC3R/MC4R antagonist): widely used to confirm that PT-141's behavioral effects are MC3R/MC4R mediated; administering SHU9119 prior to PT-141 should abolish the behavioral response if mediated through these receptors",
        "HS014 (selective MC4R antagonist): allows dissection of MC4R vs. MC3R contributions",
        "Agouti protein (pan-MCR antagonist): less receptor-selective but useful for total melanocortin blockade controls",
        "Intracranial site-specific injection: microinjection of PT-141 into the PVN, MPOA, or NAc with cannula placement to localize the locus of action; more surgically demanding but provides anatomically precise data",
      ],
    },
    {
      type: "heading",
      text: "Protocol Template: Basic Rodent Copulatory Behavior Study",
    },
    {
      type: "paragraph",
      text: "A standard protocol template for researchers new to PT-141 behavioral studies:",
    },
    {
      type: "list",
      items: [
        "Animal model: Male Sprague-Dawley or Wistar rats (250–350g); sexually experienced (minimum 3 prior successful copulatory tests)",
        "Habituation: 7-day housing in study room; 12:12 light-dark cycle; behavioral testing in dark phase",
        "Treatment groups: vehicle (saline SC), PT-141 0.1 mg/kg, 0.3 mg/kg, 1.0 mg/kg; n=8–10/group for adequate power",
        "Injection timing: SC injection 30 minutes prior to behavioral testing (accounts for SC Cmax timing in rats)",
        "Test setup: pair male with ovariectomized, hormone-primed receptive female in neutral test cage (not home cage); 30-minute observation window",
        "Endpoints scored: ejaculation latency (primary), mount and intromission frequency, post-ejaculatory interval, seminal emission",
        "Washout between tests: minimum 7-day washout for within-subject designs; 14-day washout preferred",
        "Vehicle and blinding: 0.9% saline vehicle; all behavioral scoring by blinded observer or automated tracking software (EthoVision or similar)",
      ],
    },
    {
      type: "heading",
      text: "Known Limitations and Confounds",
    },
    {
      type: "paragraph",
      text: "Researchers working with PT-141 should account for several model-specific limitations:",
    },
    {
      type: "list",
      items: [
        "Stress confound: PT-141's effects on HPA axis (ACTH/corticosterone increase) can interfere with behavioral measures in stress-sensitive animals; basal corticosterone should be matched across groups",
        "Tolerance: repeated dosing with MC4R agonists can produce receptor desensitization in some paradigms; weekly or biweekly dosing is preferable to daily administration in chronic studies",
        "Species differences: PT-141's emetic effects are prominent in primates and ferrets but absent in rats/mice; this limits translatability of the GI side-effect profile",
        "Hyperpigmentation at high doses: confounds visual endpoint scoring in some paradigms; use doses where MC1R activation is minimal (≤0.3 mg/kg in rodents)",
        "Sex × steroid hormone interaction: PT-141's efficacy in female models is heavily dependent on circulating estrogen levels; ovariectomized animals require careful hormone priming standardization",
      ],
    },
    {
      type: "callout",
      text: "PT-141 (bremelanotide) is a research compound. Nexphoria supplies PT-141 exclusively for licensed researchers and research institutions. This compound is not intended for personal use, self-administration, or any therapeutic purpose outside of supervised clinical protocols. All research must comply with applicable institutional, IACUC, and regulatory requirements.",
    },
    {
      type: "heading",
      text: "Summary",
    },
    {
      type: "paragraph",
      text: "PT-141 is one of the most pharmacologically characterized research peptides in the melanocortin class, benefiting from a completed clinical development program that provides well-established pharmacokinetic and safety anchors for preclinical researchers. Its primary research utility lies in CNS melanocortin axis modulation — specifically MC3R/MC4R-mediated behavioral, neuroendocrine, and autonomic effects.",
    },
    {
      type: "paragraph",
      text: "Researchers should use SC injection for pharmacokinetic precision, intranasal for rapid CNS Cmax studies, carefully match hormone environments in female models, and include MC4R-selective antagonists (SHU9119, HS014) to attribute effects to specific receptor subtypes. The dose range 0.1–0.3 mg/kg SC in rats provides the most reproducible behavioral window with manageable off-target signal from MC1R.",
    },
    {
      type: "disclaimer",
      text: "This article is for research and educational purposes only. PT-141 is sold by Nexphoria strictly for in vitro and preclinical research use by qualified investigators. It is not a drug, supplement, or therapeutic product.",
    },
  ],
};
