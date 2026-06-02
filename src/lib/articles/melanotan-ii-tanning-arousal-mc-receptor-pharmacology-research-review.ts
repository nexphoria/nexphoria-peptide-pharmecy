import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "melanotan-ii-tanning-arousal-mc-receptor-pharmacology-research-review",
  title: "Melanotan II Research Review: Tanning, Arousal, and MC Receptor Pharmacology",
  description:
    "Comprehensive research review of Melanotan II: MC1R/MC3R/MC4R binding with EC50 data, eumelanin tanning mechanism, Dorr 1998 JACI clinical data, MC4R/PVN arousal pathway vs PDE5 inhibitors, MT-II vs PT-141 comparison, rodent dosing protocols (80-160 mcg/kg SC), area postrema nausea mechanism, amber vial storage requirements, and six research design considerations.",
  category: "Compound Profiles",
  readMinutes: 9,
  publishedAt: "2026-06-01",
  ogImage: "/og/products/bpc-157.png",
  body: [
    {
      type: "paragraph",
      text: "Melanotan II (MT-II) is a synthetic cyclic heptapeptide analog of α-melanocyte-stimulating hormone (α-MSH) developed at the University of Arizona in the late 1980s. Unlike the linear α-MSH parent peptide, Melanotan II is cyclized via a lactam bridge and contains structural modifications that dramatically extend plasma half-life and enhance melanocortin receptor potency. MT-II became one of the most pharmacologically characterized melanocortin ligands in preclinical research, offering a tool to investigate pigmentation biology, sexual arousal circuits, appetitive behavior, and melanocortin receptor pharmacology across multiple receptor subtypes.",
    },
    {
      type: "paragraph",
      text: "MT-II is classified as a research-use-only (RUO) compound and is not approved for clinical use. However, its receptor pharmacology and preclinical data have informed the development of more selective melanocortin compounds, including PT-141 (bremelanotide), which advanced to FDA approval for hypoactive sexual desire disorder. MT-II thus occupies a historically important position in melanocortin research as a broad-spectrum agonist that enabled systematic mapping of MC receptor biology.",
    },
    {
      type: "heading",
      text: "Structure and Receptor Pharmacology",
    },
    {
      type: "paragraph",
      text: "Melanotan II has the structure Ac-Nle-cyclo[Asp-His-D-Phe-Arg-Trp-Lys]-NH₂. Key structural features include: (1) N-terminal acetylation for stability, (2) Nle4 substitution replacing the oxidation-susceptible Met4 of native α-MSH, (3) D-Phe7 substitution increasing receptor binding affinity by approximately 10-fold compared to natural L-Phe, and (4) a cyclic lactam bridge between Asp5 and Lys10 that constrains the pharmacophore into a bioactive conformation and provides resistance to peptidase degradation.",
    },
    {
      type: "paragraph",
      text: "MT-II binds with high affinity to MC1R, MC3R, and MC4R, and with lower affinity to MC5R. It does not bind MC2R (which is exclusively occupied by ACTH). Published EC50 values vary by assay system: MC1R EC50 ≈ 0.2–0.5 nM (cAMP accumulation in HEK293 cells), MC3R EC50 ≈ 0.5–1.0 nM, MC4R EC50 ≈ 0.5–2.0 nM (hypothalamic cell lines). The non-selective multi-receptor profile is both a strength (capturing broad melanocortin biology) and a limitation (making receptor-specific mechanism attribution difficult without selective antagonist controls).",
    },
    {
      type: "table",
      headers: ["Receptor", "Location", "MT-II EC₅₀", "Primary Function", "MT-II-Relevant Effect"],
      rows: [
        ["MC1R", "Melanocytes, macrophages, epidermis", "0.2–0.5 nM", "Pigmentation, inflammation", "Eumelanin synthesis, UCP1 thermal protection"],
        ["MC3R", "Hypothalamus, adipose, gut", "0.5–1.0 nM", "Energy balance, feeding", "Appetite suppression, nausea (area postrema)"],
        ["MC4R", "PVN, limbic, spinal cord", "0.5–2.0 nM", "Arousal, satiety, erectile function", "Sexual behavior, erections, anorexia"],
        ["MC5R", "Exocrine glands, immune cells", ">10 nM (low affinity)", "Exocrine secretion", "Minimal at research doses"],
      ],
    },
    {
      type: "heading",
      text: "MC1R Tanning Mechanism: Eumelanin vs Pheomelanin",
    },
    {
      type: "paragraph",
      text: "The tanning biology of Melanotan II is mediated primarily through MC1R on melanocytes. MC1R activation by MT-II triggers Gαs/adenylyl cyclase/cAMP/PKA signaling, which phosphorylates and activates CREB (cAMP-response element-binding protein). CREB drives transcription of MITF (microphthalmia-associated transcription factor), the master regulator of melanocyte identity and melanogenesis. MITF in turn upregulates the melanin biosynthesis enzymes tyrosinase (TYR), tyrosinase-related protein 1 (TYRP1), and DCT (dopachrome tautomerase).",
    },
    {
      type: "paragraph",
      text: "The critical outcome of sustained MC1R activation is a shift from pheomelanin to eumelanin production. Pheomelanin is a reddish-yellow, sulfur-containing polymer generated in the absence of MC1R signaling; it offers poor UV protection and may actually sensitize melanocytes to UV-induced DNA damage via reactive oxygen species. Eumelanin is a dark brown-black polymer that provides robust UV photoprotection by absorbing UVA/UVB photons and dissipating energy as heat.",
    },
    {
      type: "paragraph",
      text: "Clinically relevant UV protection data: Dorr 1998 JACI study tested Melanotan II in 10 fair-skinned human subjects (Fitzpatrick skin types I-II) using subcutaneous injections of 0.025 mg/kg. Results showed: visible melanin darkening onset at 5–7 days, approximately 2× increase in minimal erythemal dose (MED) at peak response, and 50% reduction in UV-induced erythema response at equivalent UV exposures. Subjects with functional MC1R polymorphisms (red/blonde phenotype) showed blunted responses. These results established MT-II as a functional melanogenesis activator in vivo.",
    },
    {
      type: "heading",
      text: "MC4R/PVN Arousal Pathway vs PDE5 Inhibitor Mechanism",
    },
    {
      type: "paragraph",
      text: "The sexual arousal effects of Melanotan II operate through an entirely different pathway from PDE5 inhibitors (sildenafil, tadalafil). PDE5 inhibitors act peripherally in genital vasculature by preventing cGMP degradation, amplifying the NO/cGMP signal generated during sexual arousal. They require pre-existing sexual desire to produce a functional response. MT-II, by contrast, acts centrally through MC4R receptors in the hypothalamic paraventricular nucleus (PVN) to directly initiate arousal signaling.",
    },
    {
      type: "paragraph",
      text: "The MC4R/PVN mechanism involves: (1) MT-II binds MC4R in parvocellular PVN neurons, activating Gαq/IP3/Ca²⁺ signaling (note: MC4R couples to both Gαs/cAMP and Gαq depending on cell type and assay conditions), (2) PVN oxytocinergic neurons are activated, releasing oxytocin into both the posterior pituitary (peripheral) and directly onto hypothalamic/limbic targets via dendrites, (3) mesolimbic dopamine circuits in VTA/NAc receive oxytocin and MC4R input, generating appetitive reward motivation, (4) spinal autonomic pathways mediate penile erection (pro-erectile efferent neurons in the thoracolumbar and sacral cord, activated downstream of PVN).",
    },
    {
      type: "paragraph",
      text: "Molinoff 2003 published preclinical rodent data on MT-II showing significant facilitation of copulatory behavior (mount latency –40-60%, intromission frequency +30-50%, ejaculation latency reduction) in male Sprague-Dawley rats at 80–160 mcg/kg SC. Similar pro-copulatory data were obtained in female rodents (lordosis quotient increases, proceptive behavior). The arousal effects were blocked by HS014 (selective MC4R antagonist) but not by MC1R-selective interventions, establishing MC4R as the primary mediator.",
    },
    {
      type: "heading",
      text: "MT-II vs PT-141: Comparative Research Pharmacology",
    },
    {
      type: "paragraph",
      text: "PT-141 (bremelanotide) is a cyclic heptapeptide derived from Melanotan II via hydrolysis of the C-terminal amide, yielding a free carboxylic acid at the C-terminus. This single structural change produces a meaningfully different pharmacological and safety profile. Comparing the two compounds is essential for researchers designing melanocortin studies.",
    },
    {
      type: "table",
      headers: ["Parameter", "Melanotan II (MT-II)", "PT-141 (Bremelanotide)"],
      rows: [
        ["Structure", "Cyclic lactam, C-terminal amide", "Cyclic lactam, C-terminal free acid"],
        ["MC1R affinity", "High (0.2–0.5 nM EC50)", "Reduced (1.5–3.0 nM)"],
        ["MC3R affinity", "High (0.5–1.0 nM)", "Moderate (2–5 nM)"],
        ["MC4R affinity", "High (0.5–2.0 nM)", "Moderate (1–3 nM)"],
        ["Tanning activity", "Strong (MC1R potent)", "Weak (MC1R reduced affinity)"],
        ["Arousal activity", "Strong (central MC4R)", "Strong (central MC4R)"],
        ["Nausea incidence", "60–80% in clinical studies", "~40% (RECONNECT trial)"],
        ["BP effects", "Transient elevation 3–10 mmHg", "Transient elevation 2–6 mmHg"],
        ["Half-life", "~40–80 min (SC)", "~2.7 h (SC)"],
        ["FDA status", "Not approved (RUO)", "FDA approved 2019 (Vyleesi)"],
        ["Primary research use", "MC receptor pharmacology, pigmentation", "Selective sexual behavior studies"],
      ],
    },
    {
      type: "paragraph",
      text: "For researchers specifically studying MC4R-mediated arousal without tanning confounds, PT-141 offers a more selective tool due to its reduced MC1R affinity. For studying pigmentation biology or full melanocortin receptor engagement, MT-II remains the preferred compound. For research requiring the highest potency pan-MC agonist as a reference standard, MT-II is appropriate. Researchers should use selective antagonists (HS014 for MC4R, AGRP for MC3R/MC4R competition, agouti protein for MC1R/MC3R/MC4R) to dissect which receptor mediates observed effects.",
    },
    {
      type: "heading",
      text: "MC3R/Area Postrema Nausea Mechanism",
    },
    {
      type: "paragraph",
      text: "The high nausea incidence with MT-II (60–80% in human studies) is mechanistically distinct from PDE5 inhibitor side effects. MT-II activates MC3R receptors in the area postrema (AP), a circumventricular organ that lacks the blood-brain barrier and directly senses circulating emetic signals. MC3R activation in the AP triggers the emetic reflex through projections to the nucleus tractus solitarius (NTS) and dorsal motor nucleus of the vagus.",
    },
    {
      type: "paragraph",
      text: "In rodents, nausea-like behavior is measured as pica (consumption of kaolin clay) because rodents cannot vomit. MT-II at 160 mcg/kg SC reliably produces pica in rats, which is blocked by SB-269970 (5-HT3R antagonist, partial blockade) and by MC3R selective antagonists, confirming the AP/MC3R mechanism. Nausea typically peaks at 30–90 minutes post-injection and resolves within 3–4 hours. Dose-dependent nausea is a key consideration in study design: doses ≥ 160 mcg/kg may confound behavioral endpoints through malaise-induced behavioral suppression rather than true central arousal effects.",
    },
    {
      type: "heading",
      text: "Preclinical Rodent Dosing Protocols",
    },
    {
      type: "paragraph",
      text: "Published rodent dosing for MT-II varies by research application. The most common protocols are subcutaneous injection in the dorsal scruff or subcutaneous injection into the lower abdominal area. Typical doses and applications are summarized below.",
    },
    {
      type: "table",
      headers: ["Application", "Dose (mcg/kg)", "Route", "Frequency", "Key Citation"],
      rows: [
        ["Pigmentation/tanning", "80–160", "SC dorsal scruff", "Daily × 5-7 days", "Dorr 1998 (human 0.025 mg/kg SC)"],
        ["Sexual behavior (male)", "80–160", "SC", "Single injection, 30-45 min pre-test", "Molinoff 2003; Dorr 1996"],
        ["Sexual behavior (female)", "40–80", "SC or ICV", "Single injection pre-test", "Pfaus 1995; Waldbillig 2000"],
        ["MC4R anorexia", "0.5–2.0 nmol ICV", "Intracerebroventricular", "Single injection", "Benoit 2000 Endocrinology"],
        ["Blood pressure (BP telemetry)", "80–160", "SC or IP", "Single injection with telemetry", "Bremelanotide data; Cai 2005"],
        ["Nausea/pica measurement", "100–200", "SC or IP", "Single injection + 24h kaolin access", "Rodent pica model protocol"],
      ],
    },
    {
      type: "heading",
      text: "Reconstitution and Storage Protocol",
    },
    {
      type: "paragraph",
      text: "Melanotan II requires careful reconstitution and storage to maintain activity and structural integrity. Key considerations arise from the compound's aromatic residues (His, Trp, D-Phe) which are susceptible to oxidative degradation, and the cyclic lactam structure which requires correct disulfide-free configuration (MT-II does not have a disulfide bridge, unlike GHK-Cu or AOD-9604 — its cyclic structure is a lactam bond).",
    },
    {
      type: "paragraph",
      text: "Reconstitute MT-II with bacteriostatic water (0.9% benzyl alcohol) at a stock concentration of 1–2 mg/mL. Inject the BAC water down the vial wall gently; swirl to mix — do NOT vortex. Store lyophilized MT-II at –20°C in amber vials protected from light. Reconstituted MT-II should be stored at 4°C in amber vials and used within 3–4 weeks. Avoid freeze-thaw cycling of reconstituted solution. Amber vials are essential: MT-II's aromatic residues (His, Trp) undergo photodegradation upon UV/visible light exposure, leading to oxidative breakdown products and loss of potency.",
    },
    {
      type: "paragraph",
      text: "Color indicator: MT-II solutions are colorless to very pale yellow. Any yellow-brown discoloration indicates oxidative degradation and the compound should be discarded. Unlike GHK-Cu (which has a diagnostic blue-violet color from the copper complex), MT-II has no color that indicates quality — color change is a red flag, not a positive indicator.",
    },
    {
      type: "heading",
      text: "Critical Research Design Considerations",
    },
    {
      type: "list",
      items: [
        "MC receptor subtype dissection is mandatory: MT-II's pan-MC agonism makes it essential to include selective antagonists in any mechanistic study. Use HS014 (MC4R-selective, 1 mg/kg SC/IP) for arousal endpoints, agouti protein or AGRP (MC3R/MC4R dual antagonist, ICV or SC) for feeding/energy endpoints, and anti-Nle4-D-Phe7-α-MSH antibodies or MC1R-knockout mice (B6-Mc1re/e, Jackson Lab #000055) for pigmentation studies.",
        "Pica measurement is required in rodent behavioral studies: Since rodents cannot vomit, kaolin clay consumption (pica) must be measured 24h post-MT-II injection to quantify nausea as a confound. Provide a dish of kaolin clay alongside standard chow at the time of injection. Pica consumption >0.5 g/24h is considered a positive nausea response. Dose-dependent nausea may suppress arousal behaviors via general malaise rather than true central anesthesia of motivation circuits.",
        "Sex differences and hormonal priming: MT-II's arousal effects in female rodents are strongly modulated by estrogen status. Ovariectomized (OVX) females show blunted lordosis and proceptive behavior responses to MT-II; OVX+E2 (estradiol benzoate 10 mcg SC 48h pre-test) restores responsiveness. Male rodents show robust responses without hormone priming but testosterone levels and housing conditions (group vs isolated) significantly affect baseline copulatory drive.",
        "Dose-response non-linearity and inverted-U: MT-II arousal effects show an inverted-U dose-response curve. Sub-threshold doses (<40 mcg/kg SC) show no effect; optimal range is 80–160 mcg/kg SC; doses ≥200 mcg/kg SC may suppress behavior through high-intensity nausea/malaise. Include at least 3 dose levels in initial studies to characterize the response curve.",
        "BP monitoring for cardiovascular endpoints: MT-II produces transient elevations in blood pressure (3–10 mmHg systolic in rats, 5–15 mmHg in human studies at comparable doses) via MC4R sympathetic activation. For behavioral studies, this transient BP effect is typically not a confound. However, in cardiac research or studies measuring hemodynamic parameters, continuous telemetry (Data Sciences International transmitters or tail-cuff with time-matched measurements) is required to account for MT-II-induced pressor effects.",
        "Amber vials and light protection throughout: Store and handle all MT-II solutions in amber vials or foil-wrapped clear vials. Prepare injections under indirect/dim light. In studies requiring multiple daily assessments, pre-aliquot daily doses into amber microcentrifuge tubes and store at –20°C (dry; not reconstituted) until same-day reconstitution. Photodegradation of His and Trp residues produces biologically inactive oxidation products that may act as competitive antagonists at melanocortin receptors, confounding dose-response relationships.",
      ],
    },
    {
      type: "heading",
      text: "Research Applications Summary",
    },
    {
      type: "paragraph",
      text: "MT-II remains a valuable pharmacological tool for: (1) mapping melanocortin receptor pharmacology using receptor-selective antagonists to dissect MC1R/MC3R/MC4R contributions; (2) studying the central mechanisms of pigmentation induction and UV photoprotection; (3) investigating hypothalamic arousal circuitry including PVN oxytocinergic pathways; (4) characterizing nausea mechanisms via area postrema MC3R biology; (5) providing a reference agonist for in vitro melanocortin assay development and radioligand binding studies.",
    },
    {
      type: "paragraph",
      text: "For researchers whose primary interest is selective MC4R arousal pharmacology with minimal tanning and nausea, PT-141 provides a more targeted profile. For research requiring comprehensive melanocortin receptor activation across MC1R/MC3R/MC4R simultaneously, or for pigmentation-focused research, MT-II remains the standard research tool.",
    },
    {
      type: "disclaimer",
      text: "Melanotan II is sold strictly for research use only (RUO) and is not approved for human consumption, therapeutic use, or veterinary use. All research must comply with applicable IACUC and institutional guidelines. All in vitro work must follow laboratory safety protocols. This article is for scientific educational purposes only.",
    },
  ],
};
