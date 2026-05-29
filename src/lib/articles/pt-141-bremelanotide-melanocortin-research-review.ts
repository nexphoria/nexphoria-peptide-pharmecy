import type { BlogArticle } from '../blog-types';

export const article: BlogArticle =   {
    slug: "pt-141-bremelanotide-melanocortin-research-review",
    title: "PT-141 (Bremelanotide): Melanocortin Research Review",
    description:
      "A research-focused review of PT-141 (bremelanotide) — MC1R/MC4R pharmacology, hypothalamic arousal signaling versus PDE5 inhibitors, RECONNECT trial data, preclinical rodent studies, SC vs intranasal bioavailability, dosing protocols, and side-effect profile.",
    category: "Compound Profiles",
    readMinutes: 9,
    publishedAt: "2026-05-29",
    ogImage: "/og/products/pt-141.png",
    body: [
      {
        type: "paragraph",
        text: "PT-141, chemically known as bremelanotide, is a synthetic cyclic heptapeptide and the first melanocortin receptor agonist to reach clinical approval for a central nervous system-mediated sexual dysfunction indication. Unlike phosphodiesterase-5 (PDE5) inhibitors — which act peripherally on vascular smooth muscle — PT-141 acts centrally in the hypothalamus to modulate melanocortin signaling pathways associated with sexual arousal. This mechanistic distinction makes it a unique pharmacological research tool and has driven substantial preclinical and clinical investigation over the past two decades.",
      },
      {
        type: "paragraph",
        text: "This article covers PT-141's receptor pharmacology, the hypothalamic pathway through which it acts, how its mechanism compares to PDE5 inhibitors, key study data including the pivotal RECONNECT trials, preclinical rodent studies, bioavailability comparison between subcutaneous and intranasal routes, dosing protocols used in research, and the compound's side-effect profile.",
      },
      {
        type: "heading",
        text: "What Is PT-141?",
      },
      {
        type: "paragraph",
        text: "PT-141 is a cyclic analog of alpha-melanocyte-stimulating hormone (alpha-MSH), derived from the melanocortin peptide Melanotan II with structural modifications that eliminate the potent skin-tanning activity of its parent compound while retaining and optimizing central melanocortin receptor agonism. Its IUPAC name is cyclo-[Nle4, D-Phe7]-alpha-MSH(4-10), reflecting that it corresponds to the 4-10 fragment of alpha-MSH with a norleucine substitution at position 4 and a D-phenylalanine substitution at position 7.",
      },
      {
        type: "list",
        items: [
          "Chemical name: Cyclo(7-aminoheptanoyl-His-D-Phe-Arg-Trp-Glu) — bremelanotide",
          "Molecular weight: 1025.2 g/mol",
          "CAS number: 189691-06-3",
          "Mechanism: Melanocortin receptor agonist (MC1R, MC3R, MC4R)",
          "Primary target for arousal signaling: MC4R in the hypothalamus and limbic system",
          "FDA approval: Vyleesi (bremelanotide injection 1.75 mg) — approved June 2019 for HSDD in premenopausal women",
          "Appearance: Lyophilized white to off-white powder",
        ],
      },
      {
        type: "heading",
        text: "Melanocortin Receptor Pharmacology",
      },
      {
        type: "paragraph",
        text: "The melanocortin system comprises five G protein-coupled receptors (MC1R through MC5R) that are activated by peptides derived from proopiomelanocortin (POMC): alpha-MSH, beta-MSH, gamma-MSH, and ACTH. Each receptor subtype has a distinct tissue distribution and functional role. PT-141 is an agonist at MC1R, MC3R, and MC4R, with highest affinity for MC4R — the subtype most critical for its central effects.",
      },
      {
        type: "subheading",
        text: "MC1R: Pigmentation and Beyond",
      },
      {
        type: "paragraph",
        text: "MC1R is expressed primarily in melanocytes, where it regulates eumelanin (dark pigment) production. PT-141's structural modifications versus Melanotan II significantly reduce MC1R affinity relative to MC4R, which is why PT-141 produces minimal tanning effect compared to its precursor. However, some MC1R activation persists, which is mechanistically linked to the transient nausea and skin flushing observed in clinical studies — MC1R is also expressed in areas of the brain involved in nausea signaling (area postrema) and in dermal vasculature.",
      },
      {
        type: "subheading",
        text: "MC4R: The Central Arousal Pathway",
      },
      {
        type: "paragraph",
        text: "MC4R is expressed abundantly in the hypothalamus, particularly in the paraventricular nucleus (PVN), lateral hypothalamic area (LHA), and the medial preoptic area (mPOA) — all regions critically involved in the regulation of sexual behavior and motivation. MC4R is also expressed in the amygdala, hippocampus, and brainstem nuclei, giving the melanocortin system broad reach into circuits governing emotion, motivation, and autonomic function.",
      },
      {
        type: "paragraph",
        text: "When PT-141 binds MC4R in the hypothalamus, it activates Gs-coupled adenylate cyclase signaling, increasing intracellular cAMP. In the PVN, MC4R activation promotes release of oxytocin and downstream activation of spinal erection centers. In the mPOA and LHA, it modulates dopaminergic tone in circuits that drive sexual motivation and appetitive behavior. The net effect — observed reliably across multiple species in preclinical models — is increased sexual motivation and facilitated arousal at the central level, independent of peripheral vascular state.",
      },
      {
        type: "heading",
        text: "Hypothalamic Pathway vs. PDE5 Inhibitors: A Mechanistic Comparison",
      },
      {
        type: "paragraph",
        text: "The mechanistic distinction between PT-141 and PDE5 inhibitors (sildenafil, tadalafil, vardenafil) is fundamental to understanding PT-141's research value and clinical rationale. PDE5 inhibitors act peripherally: they prevent the breakdown of cyclic GMP (cGMP) in vascular smooth muscle, prolonging nitric oxide-mediated vasodilation in penile and clitoral vasculature. This produces the hemodynamic conditions necessary for erection or engorgement, but only in the presence of sexual stimulation — they do not initiate arousal.",
      },
      {
        type: "paragraph",
        text: "PT-141 operates through a completely orthogonal mechanism: it initiates the central motivational component of sexual arousal through hypothalamic melanocortin signaling, increasing the drive toward sexual activity. The peripheral vascular response — erection or clitoral engorgement — follows as a downstream consequence of central arousal signal transmission to spinal autonomic centers, not as a direct pharmacological effect on penile vasculature.",
      },
      {
        type: "paragraph",
        text: "This distinction has two important research implications: first, PT-141 retains activity in conditions where PDE5 inhibitors are ineffective — specifically, desire/motivation disorders where the problem is central (insufficient arousal drive) rather than peripheral (inability to respond to arousal). Second, PT-141's effects include subjective desire and arousal, not just physiological response, which PDE5 inhibitors do not reliably produce.",
      },
      {
        type: "callout",
        text: "PDE5 inhibitors require sexual stimulation to produce effects — they enable response to arousal signals. PT-141 acts centrally to generate the arousal signal itself. This is the core mechanistic difference with clinical and research significance.",
      },
      {
        type: "heading",
        text: "Clinical Evidence: The RECONNECT Trials",
      },
      {
        type: "subheading",
        text: "Study Design",
      },
      {
        type: "paragraph",
        text: "The pivotal clinical dataset for PT-141 (bremelanotide) in humans comes from the RECONNECT program — two parallel phase 3 randomized, double-blind, placebo-controlled trials (Kingsberg et al., 2019, Obstetrics & Gynecology) evaluating bremelanotide 1.75 mg subcutaneous injection for hypoactive sexual desire disorder (HSDD) in premenopausal women. Both trials enrolled women aged 18-55 with a DSM-5 diagnosis of HSDD and similar baseline characteristics.",
      },
      {
        type: "paragraph",
        text: "Subjects administered bremelanotide (or placebo) subcutaneously approximately 45 minutes before anticipated sexual activity, using a reusable autoinjector. The primary endpoints were change from baseline in the Female Sexual Function Index desire domain score and a patient-reported distress measure (Female Sexual Distress Scale-Desire/Arousal/Orgasm, FSDS-DAO).",
      },
      {
        type: "subheading",
        text: "Key Findings",
      },
      {
        type: "paragraph",
        text: "Across both RECONNECT trials, bremelanotide produced statistically significant improvements in the co-primary endpoints versus placebo. The mean change in desire domain score was significantly greater with bremelanotide (+0.5 to +0.7 score improvement on a 1-6 scale vs placebo). The FSDS-DAO distress score improved significantly versus placebo. Approximately 25% more responders in the bremelanotide group met the minimum clinically important difference threshold versus placebo across both trials.",
      },
      {
        type: "paragraph",
        text: "The mean number of satisfying sexual events per month increased 0.5-0.7 more than placebo — modest in absolute terms, but statistically significant and accompanied by meaningful patient-reported improvements in distress. The effect sizes are small-to-moderate by Cohen's d conventions, which is typical for HSDD trials where placebo response is substantial due to the expectation effect in sexual behavior research.",
      },
      {
        type: "subheading",
        text: "Side Effect Profile from RECONNECT",
      },
      {
        type: "paragraph",
        text: "The RECONNECT side effect data established bremelanotide's clinical risk profile. Nausea was the most common adverse event, reported in 40% of bremelanotide subjects versus 1% of placebo — the single most important clinical limitation of the compound. Flushing occurred in approximately 20% of subjects. Transient blood pressure increase (mean systolic +2-4 mmHg, lasting approximately 12 hours after injection) was documented. Headache was reported in approximately 11% of treated subjects. These effects were predominantly mild-to-moderate and transient.",
      },
      {
        type: "paragraph",
        text: "The nausea mechanism is thought to involve MC1R activation in the area postrema combined with peripheral emetic signaling from histamine release. In the clinical program, prophylactic ondansetron administration did not meaningfully reduce nausea frequency, suggesting the emetic signal originates from a receptor source not susceptible to 5-HT3 antagonism at standard doses.",
      },
      {
        type: "heading",
        text: "Preclinical Rodent Studies",
      },
      {
        type: "paragraph",
        text: "Before the RECONNECT trials, bremelanotide's efficacy signal was established primarily in rodent models. These preclinical data are valuable for researchers studying melanocortin biology in the context of sexual neuroscience, motivation circuits, or hypothalamic physiology.",
      },
      {
        type: "subheading",
        text: "Male Models: Erection and Motivation",
      },
      {
        type: "paragraph",
        text: "Melanocortin peptides including MT-II and PT-141 have been shown to dose-dependently increase erection frequency and duration in male rats following intracerebroventricular (ICV) administration — demonstrating a CNS-mediated mechanism. The active site is primarily the PVN: direct PVN microinjection of MT-II and bremelanotide analogs is sufficient to produce erection, and PVN lesion abolishes systemic melanocortin-induced erection responses. Dopamine agonists and oxytocin signaling appear to mediate PVN output to spinal erection centers.",
      },
      {
        type: "subheading",
        text: "Female Models: Proceptive Behavior",
      },
      {
        type: "paragraph",
        text: "In female rat models, bremelanotide analogs (particularly MT-II and early PT-141 iterations) increase proceptive behaviors (soliciting, darting) that are used as measures of sexual motivation. Studies by Pfaus et al. and Molinoff et al. demonstrated that subcutaneous PT-141 significantly increased the number of proceptive responses and conditioned place preference for sexual activity in ovariectomized rats with and without estrogen priming — suggesting the effects are partially independent of gonadal hormone levels.",
      },
      {
        type: "paragraph",
        text: "This finding is mechanistically important: the proceptive effects in ovariectomized animals indicates PT-141 is not simply amplifying an estrogen-driven system but engaging MC4R circuits that maintain some sexual motivation function in the absence of normal hormonal background. This has implications for research in hypoestrogenic states (menopause models, surgical ovariectomy).",
      },
      {
        type: "heading",
        text: "Subcutaneous vs. Intranasal: Bioavailability Comparison",
      },
      {
        type: "paragraph",
        text: "PT-141 has been studied via both subcutaneous injection and intranasal delivery. The subcutaneous route was ultimately selected for the FDA-approved formulation (Vyleesi), but the intranasal route remains a subject of preclinical and translational research. Understanding the pharmacokinetic differences between routes is essential for study design.",
      },
      {
        type: "subheading",
        text: "Subcutaneous Pharmacokinetics",
      },
      {
        type: "paragraph",
        text: "Following subcutaneous injection of bremelanotide, Tmax (time to peak plasma concentration) is approximately 1 hour. Bioavailability is high (>100% relative to IV due to depot absorption dynamics in some studies). The elimination half-life is approximately 2.7 hours, with most of the compound cleared within 12 hours. The sustained blood pressure elevation following SC injection correlates with the absorption-distribution phase, explaining why the hemodynamic effect peaks at 1-2 hours and resolves within 12 hours.",
      },
      {
        type: "subheading",
        text: "Intranasal Pharmacokinetics",
      },
      {
        type: "paragraph",
        text: "Intranasal PT-141 was studied in early phase clinical trials with doses of 7.5 mg and higher — substantially larger than the SC dose — due to lower and more variable intranasal bioavailability (estimated 20-40% of the SC bioavailability). Tmax via intranasal route is faster (approximately 30-45 minutes) but Cmax is substantially lower. The early clinical data suggested the intranasal route produced efficacy signals for arousal but with higher total dose requirements, which increased the burden of side effects per efficacious dose.",
      },
      {
        type: "paragraph",
        text: "For preclinical rodent studies, both intranasal and SC routes have been used. Intranasal PT-141 in rats shows rapid olfactory epithelium absorption with some evidence for direct nose-to-brain transport of melanocortin peptide — a route that may allow meaningful CNS exposure while bypassing systemic circulation. This makes the intranasal route potentially interesting for mechanistic CNS studies in rodents, where nose-to-brain peptide delivery can be studied directly.",
      },
      {
        type: "heading",
        text: "Blood Pressure Effects",
      },
      {
        type: "paragraph",
        text: "The transient blood pressure elevation associated with PT-141 is one of its most significant safety considerations and a methodological variable in research design. In clinical studies, SC bremelanotide 1.75 mg produces a mean systolic blood pressure increase of approximately 3-6 mmHg and a diastolic increase of 2-4 mmHg, peaking at approximately 1 hour and resolving within 12 hours. These changes are generally modest in normotensive subjects, but can be clinically significant in subjects with pre-existing hypertension.",
      },
      {
        type: "paragraph",
        text: "The mechanism involves MC1R and MC3R activation in vascular endothelium and autonomic regulatory centers — melanocortin receptor activation in the NTS (nucleus tractus solitarius) and RVLM (rostral ventrolateral medulla) modulates sympathetic outflow. In preclinical rodent models, higher doses can produce more pronounced pressor responses, which should be accounted for in cardiovascular phenotyping studies.",
      },
      {
        type: "callout",
        text: "PT-141's blood pressure effect is a pharmacological property relevant to rodent study design. In cardiovascular or hypertension models, baseline and continuous blood pressure monitoring is recommended when using PT-141 as a pharmacological tool. The effect is dose-dependent and resolves within 12 hours at clinical doses.",
      },
      {
        type: "heading",
        text: "Dosing Protocols in Preclinical Research",
      },
      {
        type: "list",
        items: [
          "Male rat erection models: 0.1-1 mg/kg SC; peak erection response at approximately 0.3-0.5 mg/kg in published studies; ICV for CNS-specific studies at 1-10 nmol per injection",
          "Female rat proceptive behavior: 0.1-1 mg/kg SC or IP approximately 30-60 minutes before behavioral testing",
          "PVN microinjection (mechanistic studies): 50-200 pmol per site, 0.5 uL volume, stereotaxic injection in anesthetized or awake animals",
          "Intranasal rodent studies: 0.5-2 mg/kg; volume limited to 5 uL per nostril to prevent overflow",
          "Dose-response characterization: recommended before committing to single-dose protocols; erection and proceptive endpoints show bell-shaped dose-response curves in some models at high doses",
          "Frequency: single-dose acute studies for most behavioral endpoints; chronic protocols (daily administration) for desensitization or receptor regulation studies",
          "Vehicle: sterile water or saline for aqueous reconstitution; no organic solvents typically required",
        ],
      },
      {
        type: "heading",
        text: "Reconstitution and Handling",
      },
      {
        type: "paragraph",
        text: "PT-141 is supplied as a lyophilized powder and is water-soluble at physiologically relevant concentrations. Standard reconstitution uses sterile or bacteriostatic water.",
      },
      {
        type: "list",
        items: [
          "Allow vials to reach room temperature before opening to prevent condensation moisture ingress",
          "Add sterile or bacteriostatic water slowly to the vial wall — not directly onto the powder",
          "Gently swirl or invert to dissolve; do not vortex",
          "Typical working concentration: 1-2 mg/mL for injection protocols in rodent studies",
          "Reconstituted solutions at 4°C: stable 3-4 weeks in bacteriostatic water; 5-7 days in sterile water",
          "Lyophilized storage: -20°C for 24+ months in sealed, desiccated vials",
          "Aliquot reconstituted solutions for single-use to avoid repeated freeze-thaw cycling",
        ],
      },
      {
        type: "heading",
        text: "Research Design Considerations",
      },
      {
        type: "list",
        items: [
          "Receptor selectivity controls: include a selective MC4R antagonist (e.g., HS024, SHU9119) to confirm MC4R-mediated effects in your model; this validates mechanism and excludes MC1R/MC3R contributions to your endpoint",
          "Timing: PT-141's peak CNS effect in rodents occurs approximately 30-60 minutes post-injection; behavioral testing window should be within this timeframe",
          "Hormonal background: proceptive behavior studies in females should document estrogen/progesterone status; ovariectomized animals show different baseline and PT-141-stimulated behavior than intact animals",
          "Blood pressure monitoring: essential in cardiovascular models; even in standard behavioral studies, note that PT-141 produces a pressor response that peaks at the same time as the behavioral effect",
          "Tolerance and desensitization: MC4R undergoes desensitization with repeated agonist exposure; for chronic studies, characterize receptor expression and downstream signaling at endpoint",
          "CNS delivery for mechanism studies: for questions requiring isolated CNS melanocortin effects, ICV or PVN microinjection provides cleaner mechanistic data than peripheral SC administration",
          "Species notes: rats show the most robust and well-characterized melanocortin erection response; mice are used more commonly for genetic models (MC4R knockout, conditional knockouts) but require higher molar doses per kg",
        ],
      },
      {
        type: "heading",
        text: "Open Research Questions",
      },
      {
        type: "paragraph",
        text: "Several areas remain active in the melanocortin/PT-141 literature and represent opportunities for rigorous preclinical investigation:",
      },
      {
        type: "list",
        items: [
          "Sex differences in MC4R signaling: the clinical program focused on women; comparatively less is published on PT-141's mechanism and dose-response in female versus male preclinical models at the circuit level",
          "Non-sexual MC4R biology: MC4R is also involved in energy homeostasis, anxiety-like behavior, and pain modulation; PT-141 as a pharmacological tool for these systems remains less explored than its GLP-1 or GHS analogs",
          "Combination with PDE5 inhibitors: mechanistic synergy between central melanocortin activation and peripheral PDE5 inhibition has been proposed but not rigorously characterized in preclinical models",
          "MC3R contributions: MC3R is expressed in hypothalamic energy sensing circuits; PT-141's MC3R agonism may contribute to effects beyond MC4R, particularly in metabolic studies",
          "Nose-to-brain delivery: direct olfactory transport of PT-141 after intranasal administration in rodents is an underexplored delivery mechanism that could provide cleaner mechanistic access to hypothalamic targets",
        ],
      },
      {
        type: "callout",
        text: "Nexphoria supplies PT-141 (bremelanotide) at >=99% HPLC purity with identity confirmation by mass spectrometry and third-party COA. CAS 189691-06-3. Supplied as lyophilized powder. For catalog details and current lot availability, see the product page.",
      },
      {
        type: "heading",
        text: "Regulatory Note",
      },
      {
        type: "paragraph",
        text: "PT-141 (bremelanotide) is sold as a research chemical for laboratory use only. While bremelanotide is FDA-approved under the trade name Vyleesi for clinical use in HSDD, the research compound supplied by Nexphoria is not the approved pharmaceutical product and is not intended for human therapeutic use. This guide is provided for scientific informational purposes only. Researchers are responsible for compliance with applicable laws, institutional protocols, and regulations.",
      },
    ],
  };
