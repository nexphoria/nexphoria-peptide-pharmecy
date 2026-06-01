import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "pcos-glp1-kisspeptin-androgen-pathway-research-protocols",
  title: "Peptide Research for PCOS: GLP-1 Agonists, Kisspeptin, and Androgen Pathway Study Design",
  description:
    "A comprehensive research guide covering PCOS pathophysiology, GLP-1 agonist efficacy data, kisspeptin LH pulsatility normalization, androgen pathway endpoints, and preclinical letrozole model study design for polycystic ovary syndrome research.",
  category: "Compound Profiles",
  readMinutes: 11,
  publishedAt: "2026-06-01",
  ogImage: "/og/products/semaglutide.png",
  body: [
    {
      type: "paragraph",
      text: "Polycystic ovary syndrome (PCOS) affects 5–12% of reproductive-age women globally, making it the most common endocrine disorder in this population. Its hallmarks — hyperandrogenism, oligo/anovulation, and polycystic ovarian morphology — arise from a convergence of neuroendocrine dysfunction, insulin resistance, and altered hypothalamic-pituitary-ovarian (HPO) axis signaling. Peptide research targeting GLP-1 receptors and the kisspeptin/GnRH system offers mechanistically distinct, complementary approaches to studying and potentially reversing PCOS-related phenotypes. This guide covers the essential pharmacology, published clinical and preclinical data, validated model protocols, and critical study design considerations.",
    },
    {
      type: "heading",
      text: "PCOS Pathophysiology: The Neuroendocrine Core",
    },
    {
      type: "paragraph",
      text: "The primary neuroendocrine defect in PCOS is accelerated GnRH pulse frequency. Normally, arcuate nucleus (ARC) KNDy neurons (co-expressing kisspeptin, neurokinin B, and dynorphin) set the GnRH pulse generator to ~1 pulse/90 minutes in the follicular phase and ~1 pulse/4 hours in the luteal phase. In PCOS, LH pulse frequency exceeds 1 pulse/hour — a rate that preferentially stimulates LH over FSH production, driving theca cell androgen production while suppressing follicular granulosa cell aromatase-mediated estrogen conversion.",
    },
    {
      type: "paragraph",
      text: "Insulin resistance exacerbates androgen excess via two mechanisms: (1) elevated insulin directly stimulates ovarian theca cell CYP17A1 (17α-hydroxylase/17,20-lyase) via the IGF-1R/IRS-1 pathway, increasing androgen synthesis; (2) insulin suppresses hepatic SHBG production, elevating free testosterone bioavailability. Together, these defects create a self-reinforcing cycle of hyperandrogenism, adiposity, and anovulation. Targeting insulin resistance with GLP-1 receptor agonists therefore addresses multiple upstream drivers simultaneously.",
    },
    {
      type: "heading",
      text: "GLP-1 Agonists in PCOS Research",
    },
    {
      type: "subheading",
      text: "Semaglutide: PCOS-PADS Trial Data",
    },
    {
      type: "paragraph",
      text: "The PCOS-PADS randomized controlled trial (2023) provided the most comprehensive GLP-1 agonist efficacy data in PCOS to date. At 0.5–2.4 mg semaglutide SC weekly for 32 weeks vs. placebo, the semaglutide arm demonstrated: body weight –15.7% vs. –2.1% (p<0.001); total testosterone –25% (p<0.001); HOMA-IR –40% (p<0.001); LH pulse frequency normalization (–38% pulses/hour); menstrual cycle restoration in 60% vs. 12% of amenorrheic participants. The androgen reduction was only partially explained by weight loss — analysis attributed ~40–50% of the testosterone reduction to direct GLP-1R-mediated suppression of ovarian steroidogenesis (via reduced insulin tone on CYP17A1 + possible direct GLP-1R ovarian signaling).",
    },
    {
      type: "subheading",
      text: "Liraglutide Ovulation and Androgen Data",
    },
    {
      type: "paragraph",
      text: "Jensterle et al. (2015) demonstrated that liraglutide 1.2 mg SC daily in metformin-resistant PCOS women (n=32) produced significant androgen reduction (total testosterone –18%, free androgen index –23%), ovulation induction (34% ovulation rate vs. 11% placebo at week 12), and HOMA-IR improvement (–31%). Critically, the ovulation benefit persisted after controlling for weight loss in multivariate analysis, suggesting a GLP-1R-mediated HPO axis effect beyond metabolic improvement.",
    },
    {
      type: "subheading",
      text: "GIPR Mechanism: Tirzepatide and Adipose Androgen Conversion",
    },
    {
      type: "paragraph",
      text: "For dual GIP/GLP-1 receptor agonists such as tirzepatide, an additional androgen pathway exists: adipose tissue GIPR-mediated HSL/ATGL lipolysis reduces adipose mass, thereby lowering peripheral dihydrotestosterone (DHT) production. Adipose stromal cells express CYP17A1 and HSD3B1, converting adrenal DHEA and androstenedione to testosterone and DHT. Reducing adipose mass via GIPR-driven lipolysis is therefore expected to provide additive androgen reduction beyond GLP-1R-mediated insulin suppression. This hypothesis warrants direct experimental testing with GIPR-KO or GLP-1R-specific agonist comparator arms.",
    },
    {
      type: "heading",
      text: "Kisspeptin in PCOS: LH Pulsatility Normalization",
    },
    {
      type: "subheading",
      text: "KNDy Neuron Dysfunction in PCOS",
    },
    {
      type: "paragraph",
      text: "The ARC KNDy neuron accelerated pulse frequency in PCOS is driven by deficient progesterone feedback — PCOS women are chronically anovulatory and therefore progesterone-deficient, eliminating the luteal-phase dynorphin-mediated GnRH pulse suppression. This creates a constitutively high-frequency GnRH drive. Kisspeptin-10 administered exogenously at pulse-mimicking doses (rather than continuous infusion, which causes desensitization) can re-entrain LH pulsatility toward normal frequency.",
    },
    {
      type: "subheading",
      text: "Kisspeptin-10 LH Pulsatility Data",
    },
    {
      type: "paragraph",
      text: "Skorupskaite et al. (2014, JCEM) demonstrated that kisspeptin-10 infusion in PCOS women normalized LH pulse frequency: at physiological KP-10 doses (0.3 nmol/kg/h IV), pulse frequency decreased from 1.1 ± 0.2 pulses/hour to 0.7 ± 0.1 pulses/hour (approaching normal follicular-phase frequency of 0.6–0.8/h). This was accompanied by elevated FSH/LH ratio (from 0.42 → 0.68), suggesting improved gonadotropin balance conducive to follicular development. The mechanism is partly paradoxical — endogenous kisspeptin is chronically elevated in PCOS (ARC hyperactivity), but exogenous pulsatile KP-10 at physiological amplitude appears to normalize rather than exacerbate the pulse pattern, potentially via GPR54 resensitization during inter-pulse intervals.",
    },
    {
      type: "heading",
      text: "Preclinical PCOS Model Selection",
    },
    {
      type: "table",
      headers: ["Model", "Induction Protocol", "Phenotype Fidelity", "Key Strengths", "Key Limitations"],
      rows: [
        ["Letrozole (rat/mouse)", "1 mg/kg/day oral gavage × 21 days", "High: hyperandrogenism, anovulation, PCO morphology, insulin resistance", "Best translational relevance; PCOS-PADS/semaglutide studies use this model", "Aromatase inhibition → non-androgen mechanism; requires recovery washout for reversal studies"],
        ["DHEA (rat)", "6 mg/day SC × 20 days from prepuberty (postnatal day 21–40)", "Moderate: cystic follicles, elevated LH, androgen excess", "Developmental PCOS model, less invasive", "No insulin resistance; follicle cysts less consistent"],
        ["DHT pellet (mouse)", "DHT pellet implant (5 mg, 90-day release) at 4–8 weeks", "High: chronic hyperandrogenism, anovulation, adiposity; good for mechanistic AR studies", "Clean androgen model; AR antagonist controls straightforward", "Less HPG-axis GnRH pulse disruption vs. letrozole"],
        ["Prenatal DHT (sheep/rat)", "DHT/testosterone injection to pregnant dam (gestational days 60–90)", "Very high for neuroendocrine defects", "Recapitulates developmental origin hypothesis; GnRH pulse frequency data", "Large animal cost; complex; rat prenatal DHT less validated"],
        ["Neonatal testosterone (rat)", "Testosterone propionate 1.25 mg SC on postnatal day 1–5", "Moderate: anovulation, polycystic ovaries, LH excess", "Simple induction; LH frequency elevation validated", "Irreversible; limited metabolic phenotype"],
      ],
    },
    {
      type: "paragraph",
      text: "For GLP-1 agonist and kisspeptin combination studies, the letrozole model is strongly preferred. It recapitulates hyperandrogenism, insulin resistance, anovulation, and neuroendocrine dysfunction in a single model, making it ideal for evaluating multi-target interventions. The letrozole dose in rodents is typically 1 mg/kg/day oral gavage × 21 days; in mice, 0.5 mg/kg/day × 21 days. Allow 72 hours post-last-dose before beginning treatment to avoid direct aromatase inhibition interference with endpoint estrogen measurements.",
    },
    {
      type: "heading",
      text: "GnRH and LH Pulsatile Sampling Protocol",
    },
    {
      type: "paragraph",
      text: "Capturing LH pulse frequency is the gold standard neuroendocrine endpoint in PCOS research. The established protocol uses ultrasensitive sandwich ELISA (Crystal Chem #80552 for LH; sensitivity <0.2 ng/mL) with 6–10 minute interval blood collection from an indwelling jugular or tail vein catheter. Serial sampling at ZT2–4 (early light phase) is standard, as LH pulsatility in rodents is most consistent during this window. A 3-hour sampling period captures 6–10 pulses in normal animals; PCOS models typically yield 10–16 pulses in the same window.",
    },
    {
      type: "paragraph",
      text: "Pulse detection uses the Santen-Bardin or Cluster 8.0 algorithm (minimum pulse amplitude ≥2× nadir baseline, confirmed over ≥2 consecutive time points). GnRH pulse measurement requires hypothalamic push-pull perfusion or in vitro arcuate nucleus slice electrophysiology — LH pulse frequency is the standard validated proxy for GnRH pulse frequency in intact animals.",
    },
    {
      type: "heading",
      text: "Androgen Endpoint Panel",
    },
    {
      type: "table",
      headers: ["Biomarker", "Method", "Platform/Kit", "Key Notes"],
      rows: [
        ["Total testosterone", "LC-MS/MS (gold standard)", "MPI Research; Shimadzu LCMS-8060", "ELISA adequate at >1 ng/mL; prefer LC-MS/MS below this; ZT2–4 sampling"],
        ["SHBG (sex hormone-binding globulin)", "ELISA", "R&D Systems #DSHBG0", "Mouse SHBG 5–50× lower than human; use species-matched kit"],
        ["Free testosterone index", "Calculated: TT / SHBG × 100", "From above", "Functional androgen bioavailability proxy"],
        ["DHEA-S", "ELISA", "ALPCO #11-DHEHU-E01", "Adrenal androgen contribution; elevated in DHEA-model studies"],
        ["Androstenedione", "LC-MS/MS or RIA", "Cayman Chemical #582301", "Ovarian intermediate; elevated in CYP17A1 hyperactivity"],
        ["17β-HSD1 / CYP17A1 mRNA", "RT-qPCR", "Ovarian tissue; GAPDH/β-actin normalization", "Mechanistic enzyme-level confirmation"],
        ["SHBG mRNA (liver)", "RT-qPCR", "Hepatic SHBG gene expression; GLP-1R hepatic mechanism readout", "Confirms insulin-mediated SHBG restoration"],
        ["Estradiol (E2)", "ELISA", "Crystal Chem #80132", "Aromatase activity proxy; estrous-cycle-phase-matched sampling required"],
      ],
    },
    {
      type: "heading",
      text: "Ovarian Morphology Endpoints",
    },
    {
      type: "paragraph",
      text: "Ovarian histomorphometry is the definitive endpoint in rodent PCOS models. Fixed ovaries (10% NBF, 24h) are paraffin-embedded, serially sectioned at 5 μm every 20 μm, and stained with hematoxylin & eosin. Endpoint panel: (1) Antral follicle count (AFC) — healthy antral follicles per section, averaged across 5 sections; (2) Atretic follicle scoring — TUNEL-positive granulosa cells per follicle, Billig scoring system (Grade I–III atresia); (3) Cystic follicle identification — follicle diameter >250 μm in mice, >500 μm in rats, with flattened/absent granulosa layer; (4) Corpus luteum count — evidence of ovulation; (5) Granulosa cell proliferation — Ki-67 IHC (Abcam ab15580), positivity rate per section; (6) Theca cell CYP17A1 IHC — quantify steroidogenic enzyme in theca interna.",
    },
    {
      type: "heading",
      text: "5-Arm Letrozole Study Design",
    },
    {
      type: "table",
      headers: ["Group", "n", "Induction", "Treatment", "Primary Endpoints"],
      rows: [
        ["1. Lean Vehicle Control", "8", "Vehicle gavage × 21d", "PBS SC daily", "Baseline LH pulse freq; ovarian morphology; testosterone; HOMA-IR"],
        ["2. PCOS Vehicle", "10", "Letrozole 1 mg/kg/day × 21d", "PBS SC daily", "Full PCOS phenotype confirmation"],
        ["3. Semaglutide", "10", "Letrozole 1 mg/kg/day × 21d", "Semaglutide 0.1 mg/kg SC 1×/week", "Weight; testosterone; LH freq; HOMA-IR; ovarian morphology"],
        ["4. Kisspeptin-10", "10", "Letrozole 1 mg/kg/day × 21d", "KP-10 1 nmol/kg SC twice-daily", "LH pulse freq; FSH/LH ratio; estrous cyclicity; ovarian morphology"],
        ["5. Combination (Sema + KP-10)", "10", "Letrozole 1 mg/kg/day × 21d", "Semaglutide 0.1 mg/kg SC 1×/week + KP-10 1 nmol/kg SC twice-daily", "All above endpoints; interaction effect on testosterone + LH pulsatility"],
      ],
    },
    {
      type: "paragraph",
      text: "Treatment duration: 8 weeks post-letrozole induction. Total study duration: 11 weeks (3-week induction + 8-week treatment). Blood sampling: baseline (day 0), week 4, week 8 for serial hormone measurements. Pulsatile LH sampling at week 8 only (to minimize stress burden per IACUC). Necropsy: ZT4–6 after 6-hour fast; ovaries + uterus + liver + WAT collected. Include pair-fed sub-group (n=6) matched to semaglutide group caloric intake to dissect weight-independent vs. weight-dependent androgen/LH effects.",
    },
    {
      type: "heading",
      text: "Preclinical Dosing Reference",
    },
    {
      type: "table",
      headers: ["Compound", "Species", "Dose", "Route", "Frequency", "Published Reference"],
      rows: [
        ["Semaglutide", "Mouse (C57BL/6J DIO/letrozole)", "0.03–0.1 mg/kg", "SC", "1×/week", "Beiroa 2014; PCOS-PADS rat equivalent"],
        ["Semaglutide", "Rat (Sprague-Dawley letrozole)", "0.05–0.2 mg/kg", "SC", "1×/week", "Letrozole model equivalent dosing"],
        ["Tirzepatide", "Mouse (DIO)", "0.03–0.3 mg/kg", "SC", "1×/week", "Jastreboff 2022 rodent protocol"],
        ["Kisspeptin-10", "Mouse", "1–10 nmol/kg", "SC or IN", "Twice-daily pulse", "Dhillo 2005 allometric equivalent; Piet 2015"],
        ["Kisspeptin-10", "Rat (letrozole)", "3–10 nmol/kg", "SC", "Twice-daily pulse", "Skorupskaite 2014 allometric equivalent"],
        ["Kisspeptin-54", "Mouse/rat", "100–500 nmol/kg/day", "SC (osmotic minipump)", "Continuous", "NOT recommended: receptor downregulation at continuous >1 nmol/kg/h"],
        ["GnRH positive control", "Rat", "10 ng/rat ICV or 100 ng/kg IP", "ICV or IP", "Single bolus", "Pfaus 1997; LH surge induction control"],
      ],
    },
    {
      type: "heading",
      text: "Reconstitution and Storage",
    },
    {
      type: "table",
      headers: ["Compound", "Reconstitution Solvent", "Working Concentration", "Storage (Lyophilized)", "Storage (Reconstituted)", "Notes"],
      rows: [
        ["Semaglutide", "BAC water (0.9% benzyl alcohol)", "5 mg/mL stock → dilute to dose volume", "-20°C lyophilized", "4°C up to 4 weeks, amber vial", "Low-bind Eppendorf at <0.1 mg/mL; no PP tubes"],
        ["Tirzepatide", "BAC water (0.9% benzyl alcohol)", "5 mg/mL stock", "-20°C lyophilized", "4°C up to 4 weeks, amber vial", "Same as semaglutide; low-bind tubes for dilute solutions"],
        ["Kisspeptin-10", "Isotonic saline (0.9% NaCl)", "1 mg/mL stock; dilute to dose volume", "-20°C lyophilized", "4°C up to 7 days; fresh preferred", "Stable in saline; low-bind tubes; avoid repeated freeze-thaw of reconstituted"],
        ["Kisspeptin-54", "Isotonic saline or PBS pH 7.4", "0.5–1 mg/mL stock", "-20°C lyophilized", "4°C up to 5 days", "Short reconstituted half-life — prepare fresh for chronic SC dosing; consider osmotic minipump fill fresh"],
      ],
    },
    {
      type: "heading",
      text: "10-Endpoint Selection Guide",
    },
    {
      type: "table",
      headers: ["Endpoint", "Method", "Target Compound", "Sampling Timing"],
      rows: [
        ["Body weight + weekly curve", "Digital scale", "Semaglutide/tirzepatide", "Weekly throughout"],
        ["HOMA-IR (fasting glucose × insulin)", "Crystal Chem #80066 + #80575", "Semaglutide/tirzepatide", "Week 0/4/8; ZT0 after 6h fast"],
        ["LH pulse frequency (pulses/hour)", "Crystal Chem #80552 ELISA, q6-min × 3h", "Kisspeptin-10", "ZT2–4; week 8 only"],
        ["FSH/LH ratio", "Crystal Chem #80015 + #80552", "Kisspeptin-10", "Same sampling session as LH pulsatility"],
        ["Total testosterone (LC-MS/MS)", "MPI Research platform", "Semaglutide + kisspeptin-10", "ZT2–4; week 0/4/8"],
        ["Free androgen index (TT/SHBG × 100)", "Calculated from above + SHBG ELISA", "Semaglutide + kisspeptin-10", "Same as testosterone"],
        ["Estrous cycle regularity (vaginal cytology)", "Daily wet smear, microscopy", "All groups", "Daily throughout 8-week treatment"],
        ["Antral follicle count (AFC) + cystic follicles", "H&E serial sections, 5 levels", "All groups", "Necropsy week 11"],
        ["Corpus luteum count", "H&E ovarian sections", "Kisspeptin-10 + combination", "Necropsy week 11"],
        ["Ovarian CYP17A1 IHC", "Abcam ab75517; TSA amplification", "Semaglutide (insulin pathway)", "Necropsy week 11"],
      ],
    },
    {
      type: "heading",
      text: "Critical Controls",
    },
    {
      type: "paragraph",
      text: "Several pharmacological and biological controls are essential for mechanistic interpretation: (1) GPR54 antagonist P-234 (25–100 nmol/kg IP, 30 min before KP-10) — confirms kisspeptin effects are GPR54-mediated; (2) Ex-9-39 GLP-1 receptor antagonist (250 nmol/kg IP, 15 min before semaglutide) — confirms effects are GLP-1R-mediated and not off-target; (3) Pair-fed group — essential for attributing semaglutide androgen/LH effects to receptor pharmacology vs. caloric restriction alone; (4) GPR54-KO mice (B6;129-Kiss1rtm1Lex/Mmcd, MMRRC stock) — confirms on-target specificity of kisspeptin compound; (5) GnRH agonist positive control (buserelin 5 μg/kg SC or leuprolide 100 μg/kg SC) — triggers complete LH surge for assay validation; (6) Anastrozole aromatase inhibitor control — separates androgen excess from estrogen deficit in androgen-driven models.",
    },
    {
      type: "heading",
      text: "HOMA-IR Confound: Pair-Fed Design Requirement",
    },
    {
      type: "paragraph",
      text: "GLP-1 agonists reduce food intake 15–40% in letrozole PCOS rodent models. In the absence of pair-fed controls, it is impossible to determine whether HOMA-IR improvement (–40%), androgen reduction (–25%), or LH pulse frequency normalization is attributable to: (a) direct GLP-1R insulin sensitization / ovarian steroidogenesis suppression, or (b) caloric restriction-induced weight loss. Published data suggest ~40–50% of androgen reduction is weight-independent in PCOS-PADS, but preclinical models require pair-fed arms to make this attribution rigorously. Pair-fed rodents should receive matched calories to the semaglutide group, with dark-phase food delivery to normalize caloric distribution.",
    },
    {
      type: "heading",
      text: "Sex-Specific Considerations and NIH SABV",
    },
    {
      type: "paragraph",
      text: "PCOS is inherently a female reproductive disorder, but NIH SABV policy does not require male arms for disease-specific models when the condition is sex-limited. However, parallel male studies examining GLP-1 agonist testosterone effects (hypogonadism, HPG axis modulation) may be co-registered for completeness. For female subjects, note that OVX + hormone replacement (E2 + progesterone) can be used to standardize hormonal milieu for mechanistic studies, eliminating cycle-dependent variation at the cost of physiological relevance. Non-OVX rodents require estrous cycle phase monitoring (vaginal cytology) and group-balanced phase distribution at randomization.",
    },
    {
      type: "heading",
      text: "Research Design Considerations",
    },
    {
      type: "paragraph",
      text: "**1. Letrozole vs. DHEA model selection:** For GLP-1 agonist studies targeting insulin resistance + androgen excess, the letrozole model is required — it is the only rodent PCOS model with consistent insulin resistance and is the translational standard. DHEA models lack insulin resistance and are not appropriate for GLP-1 agonist evaluation. DHT pellet models are better suited for AR-pathway studies without metabolic endpoints.",
    },
    {
      type: "paragraph",
      text: "**2. LH pulsatile sampling:** Sample at ZT2–4 only. LH pulsatility varies dramatically across the light-dark cycle; off-ZT sampling produces uninterpretable pulse data. Tail-vein cannulation (Micro-Renathane, 0.04″OD) allows conscious serial sampling. Allow 60-minute catheter insertion recovery before sampling begins. Use EDTA-coated tubes (2 μL blood per sample in 8 μL dilution buffer for Crystal Chem LH ELISA).",
    },
    {
      type: "paragraph",
      text: "**3. HOMA-IR confound:** Pair-fed controls are mandatory for any GLP-1 agonist study that claims direct HPG axis effects. Without this arm, androgen reduction cannot be attributed to receptor pharmacology. Power calculation: n=10 per group achieves 80% power to detect 30% testosterone reduction at CV=35% (Cohen's d ~0.85, two-tailed α=0.05).",
    },
    {
      type: "paragraph",
      text: "**4. Estrous cycle standardization:** Track vaginal cytology daily in all non-OVX groups. Report estrous cycle regularity as primary non-hormonal ovarian endpoint (days in proestrus/estrus/diestrus/metestrus per 21-day period). Block randomization by estrous phase at study entry.",
    },
    {
      type: "paragraph",
      text: "**5. LH:FSH ratio as secondary endpoint:** In PCOS, elevated LH/FSH ratio (>2:1) is a neuroendocrine fingerprint of GnRH pulse frequency acceleration. Single-point LH:FSH ratio at ZT2–4 provides a simpler complement to the full pulsatile sampling protocol for timepoints where resource constraints limit q6-min serial sampling.",
    },
    {
      type: "paragraph",
      text: "**6. NIH SABV note on male equivalents:** There is no recognized male equivalent of PCOS. Male letrozole + DHT models develop hypogonadism and metabolic dysfunction, which is a different phenotype. Male arms are not required by SABV for PCOS-specific models, but should be added when the research question extends to GLP-1 agonist HPG axis effects in male hypogonadism research.",
    },
    {
      type: "heading",
      text: "Reconstitution Quality Checklist",
    },
    {
      type: "paragraph",
      text: "Before beginning any injection session: (1) Verify semaglutide/tirzepatide vial clarity — should be colorless to pale yellow, no precipitate; (2) Confirm kisspeptin-10 in isotonic saline — clear, colorless; any turbidity indicates aggregation (discard and re-prepare at lower concentration or with gentle rotation); (3) Prepare kisspeptin-10 fresh daily for twice-daily injection studies — stability at 4°C is adequate for intra-day use but not overnight; (4) For combination dosing: inject semaglutide and kisspeptin-10 in separate sites (alternate flanks); do not co-formulate; (5) Document lot numbers, reconstitution dates, and researcher initials on each vial per IACUC record-keeping requirements.",
    },
    {
      type: "paragraph",
      text: "RESEARCH USE ONLY. All compounds discussed in this article are for in vitro and preclinical in vivo research purposes only. Not for human use, veterinary use, or any application outside of controlled research settings. Nexphoria compounds are not FDA-approved for any therapeutic use.",
    },
  ],
};
