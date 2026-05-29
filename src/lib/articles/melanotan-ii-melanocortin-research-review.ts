import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "melanotan-ii-melanocortin-research-review",
  title: "Melanotan II: Melanocortin Research Review",
  description:
    "A comprehensive research review of Melanotan II — cyclic heptapeptide structure, MC1R/MC3R/MC4R binding affinity, melanogenesis mechanism, sexual arousal via MC4R/PVN oxytocin, tanning study data, nausea profile, IP/SC dosing protocols, and storage considerations.",
  category: "Compound Profiles",
  readMinutes: 9,
  publishedAt: "2026-05-29",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Melanotan II (MT-II) is a synthetic cyclic heptapeptide analog of alpha-melanocyte-stimulating hormone (alpha-MSH) that has occupied a central position in melanocortin receptor pharmacology research since its development at the University of Arizona in the early 1990s. Initially investigated as a potential photoprotective tanning agent — a way to induce eumelanin pigmentation without ultraviolet exposure — MT-II rapidly attracted broader research interest when its high-affinity, non-selective melanocortin receptor agonism revealed effects spanning melanogenesis, sexual behavior, appetite suppression, and cardiovascular function.",
    },
    {
      type: "paragraph",
      text: "This review covers MT-II's chemical structure, its binding profile across the five melanocortin receptor subtypes, the molecular mechanisms underlying its two most-studied effects (melanogenesis and central arousal signaling), key published study data, the compound's side-effect profile with a focus on nausea and cardiovascular effects, preclinical dosing protocols, and handling considerations for researchers.",
    },
    {
      type: "heading",
      text: "Chemical Structure and Identity",
    },
    {
      type: "paragraph",
      text: "MT-II is a cyclic lactam heptapeptide with the sequence Ac-Nle-cyclo[Asp-His-D-Phe-Arg-Trp-Lys]-NH2. Several structural features distinguish it from its linear precursor alpha-MSH and account for its enhanced potency and metabolic stability:",
    },
    {
      type: "list",
      items: [
        "Cyclic lactam backbone: Cyclization between the Asp and Lys side chains creates a constrained ring structure that rigidifies the pharmacophore and dramatically increases receptor binding affinity compared to the linear peptide",
        "Norleucine (Nle) substitution at position 4: Replaces the oxidation-susceptible Met4 residue of alpha-MSH, eliminating a major metabolic liability and improving chemical stability",
        "D-Phenylalanine at position 7: The D-stereoisomer at this position enhances receptor binding affinity and confers resistance to proteolytic degradation by most endopeptidases",
        "N-terminal acetylation: Further reduces N-terminal protease vulnerability",
        "Molecular weight: 1024.2 g/mol",
        "CAS number: 121062-08-6",
        "Solubility: Freely soluble in water and dilute acetic acid",
        "Appearance: Lyophilized white powder",
      ],
    },
    {
      type: "paragraph",
      text: "These modifications collectively produce a peptide with substantially higher melanocortin receptor affinity than endogenous alpha-MSH, lower receptor subtype selectivity (broad activity across MC1R, MC3R, and MC4R), and a longer plasma half-life. The cyclic structure is considered essential for the compound's full pharmacological activity — linearization by ring-opening results in dramatic potency loss.",
    },
    {
      type: "heading",
      text: "Melanocortin Receptor Binding Profile",
    },
    {
      type: "paragraph",
      text: "The melanocortin system comprises five G protein-coupled receptors (MC1R–MC5R) activated by POMC-derived peptides. MT-II is a non-selective agonist with activity at MC1R, MC3R, and MC4R, and minimal activity at MC2R (the ACTH receptor, expressed on adrenal cortex) and MC5R (sebaceous glands). This selectivity profile is critical to understanding both its effects and its side-effect liabilities:",
    },
    {
      type: "list",
      items: [
        "MC1R (skin melanocytes, immune cells): Primary target for melanogenesis; MT-II EC50 ~0.1–0.2 nM, substantially higher potency than alpha-MSH (EC50 ~1 nM). Activation drives cAMP/PKA/MITF/tyrosinase cascade and eumelanin synthesis",
        "MC3R (hypothalamus, limbic system, periphery): Modulates energy homeostasis and feeding behavior; MT-II activation at MC3R contributes to appetite suppression and may mediate some CNS effects. Also expressed on area postrema neurons — critically important for the nausea side effect",
        "MC4R (hypothalamus, brainstem, PVN): Primary mediator of central arousal and sexual behavior signaling; also involved in energy regulation and GI motility. MT-II EC50 at MC4R ~1–2 nM",
        "MC2R: Negligible MT-II binding — no adrenal activation, no cortisol elevation (a key distinction from non-selective ACTH)",
        "MC5R: Minimal MT-II activity — limited impact on exocrine gland function at typical research doses",
      ],
    },
    {
      type: "paragraph",
      text: "Comparative receptor binding studies (Dorr 1996, Al-Obeidi 1998) established that MT-II's cyclic lactam structure produces approximately 10-100-fold higher affinity at MC1R and MC3R/MC4R compared to the linear alpha-MSH(4-10) sequence. This explains both its utility as a research pharmacological tool and the clinical challenge it presented: the lack of receptor subtype selectivity makes it difficult to dissociate desired effects from side effects without subtype-selective antagonists as controls.",
    },
    {
      type: "heading",
      text: "Melanogenesis Mechanism",
    },
    {
      type: "paragraph",
      text: "Melanin pigmentation is regulated by the MC1R signaling cascade in epidermal melanocytes. Under physiological conditions, alpha-MSH (derived from POMC processing in pituitary corticotrophs and keratinocytes) binds MC1R and drives eumelanin synthesis. MT-II activates this same pathway with greater potency and duration:",
    },
    {
      type: "subheading",
      text: "MC1R/cAMP/MITF Signaling Cascade",
    },
    {
      type: "paragraph",
      text: "MT-II binding to MC1R activates Gs protein, which stimulates adenylyl cyclase and elevates intracellular cAMP. Elevated cAMP activates protein kinase A (PKA), which phosphorylates CREB (cAMP response element-binding protein). pCREB then drives transcription of MITF (microphthalmia-associated transcription factor) — the master regulator of melanocyte differentiation and melanin synthesis.",
    },
    {
      type: "paragraph",
      text: "MITF directly transcriptionally activates the three melanogenic enzymes: tyrosinase (TYR, rate-limiting step), tyrosinase-related protein 1 (TYRP1), and dopachrome tautomerase (DCT/TYRP2). Together, these enzymes drive the conversion of tyrosine → DOPA → dopaquinone → eumelanin. The result is increased deposition of black-brown eumelanin in keratinocytes.",
    },
    {
      type: "paragraph",
      text: "An important mechanistic detail: the eumelanin:pheomelanin ratio is critical. Eumelanin (the pigment MC1R signaling promotes) is photoprotective — it absorbs and dissipates UV radiation effectively. Pheomelanin (produced when cysteine diverts dopaquinone) offers poor UV protection and may generate reactive oxygen species under UV exposure. MT-II's ability to shift this ratio toward eumelanin was the original rationale for its development as a potential skin cancer prevention agent.",
    },
    {
      type: "heading",
      text: "Tanning Research Data",
    },
    {
      type: "paragraph",
      text: "The most rigorous early clinical data on MT-II's melanogenic effects came from trials conducted by Dorr et al. at the University of Arizona (1996–1998). These studies used controlled UV exposure with reflectometry-based melanin quantification and minimal erythema dose (MED) testing — the gold standard for documenting photoprotection.",
    },
    {
      type: "subheading",
      text: "Dorr 1998 Phase I/II Trial (JACI)",
    },
    {
      type: "paragraph",
      text: "The pivotal Dorr 1998 study (Journal of the American Academy of Dermatology) enrolled subjects with Fitzpatrick skin types I–II (highest UV sensitivity) and administered MT-II or placebo via SC injection on alternating days for 2 weeks with controlled twice-weekly UV exposures. Key findings:",
    },
    {
      type: "list",
      items: [
        "Skin reflectometry: MT-II-treated subjects showed statistically significant melanin index increases vs placebo (p < 0.01)",
        "MED testing: MT-II-treated skin required approximately 2× the UV dose to produce minimal erythema — a direct measure of photoprotection",
        "Erythema reduction: ~50% reduction in erythema response at standard UV doses in MT-II-treated subjects",
        "Pigmentation onset: Detectable increases in melanin index within 5–7 days of treatment initiation",
        "Persistence: Pigmentation persisted for 3–5 weeks after treatment cessation without additional UV exposure",
        "Dose used: 0.025 mg/kg SC (approximately 1.75 mg for a 70 kg individual)",
      ],
    },
    {
      type: "paragraph",
      text: "These findings demonstrated proof-of-concept for pharmacological melanization without UV-dependent tanning. However, the development program was ultimately not advanced to Phase III for this indication, partly due to the nausea side effect burden (detailed below) and partly due to the commercial entry of PT-141 as a more subtype-selective derivative for a different therapeutic indication.",
    },
    {
      type: "heading",
      text: "Sexual Arousal: MC4R and PVN Oxytocin",
    },
    {
      type: "paragraph",
      text: "MT-II's central melanocortin effects on sexual behavior were first characterized when Wessells et al. (1998, Neuroscience) administered MT-II to conscious male rats via intracerebroventricular (ICV) injection and observed dose-dependent increases in erections, yawning, and stretching — a behavioral constellation consistent with MC4R-mediated central arousal. Subsequent research established the pathway in detail:",
    },
    {
      type: "subheading",
      text: "MC4R in the Paraventricular Nucleus (PVN)",
    },
    {
      type: "paragraph",
      text: "MC4R is expressed at high density in the hypothalamic paraventricular nucleus (PVN), a region that serves as a critical integrator of autonomic, endocrine, and behavioral outputs. MT-II binding to PVN MC4R activates oxytocinergic neurons in this region, promoting local oxytocin release. PVN-derived oxytocin projects to the brainstem and spinal cord via oxytocinergic descending pathways, where it modulates autonomic tone and facilitates pro-erectile and arousal-related neural signaling.",
    },
    {
      type: "paragraph",
      text: "Critically, this is a centrally-mediated effect that does not depend on peripheral vascular mechanisms. This distinguishes MT-II and its derivative PT-141 from PDE5 inhibitors (sildenafil, tadalafil), which act entirely peripherally on vascular smooth muscle and require pre-existing sexual stimulation and intact nitric oxide signaling in penile vasculature. MT-II appears to act upstream, modulating the hypothalamic drive toward arousal itself.",
    },
    {
      type: "subheading",
      text: "Preclinical Rodent Data",
    },
    {
      type: "paragraph",
      text: "In male rat models, subcutaneous MT-II administration (0.1–1 mg/kg) produced dose-dependent increases in ex copula penile erections, with peak effects observed at 30–60 minutes post-injection. ICV microinjection studies into the PVN (doses in the nanogram range) confirmed the hypothalamic locus of action. MC4R antagonist pretreatment (SHU9119 — a MC3R/MC4R antagonist) blocked erections but not the peripheral melanization effects, providing receptor-level evidence for the dissociation between these two activities.",
    },
    {
      type: "paragraph",
      text: "In female rodent models, MT-II administration increased lordosis quotient and proceptive behaviors in hormone-primed animals, consistent with MC4R-mediated female sexual facilitation. These preclinical findings directly supported the clinical development of the more MC4R-selective PT-141 (bremelanotide) for female hypoactive sexual desire disorder.",
    },
    {
      type: "heading",
      text: "Nausea Side Effect: MC3R and Area Postrema",
    },
    {
      type: "paragraph",
      text: "The most consistently reported and dose-limiting side effect of MT-II in human research is nausea, occurring in 60–80% of subjects at doses used for tanning research (0.025 mg/kg SC). Understanding the mechanism of this side effect is both scientifically important and essential for appropriate research design:",
    },
    {
      type: "paragraph",
      text: "The area postrema is a circumventricular organ in the brainstem that serves as the brain's principal emetic chemoreceptor trigger zone. It lies outside the blood-brain barrier, allowing it to sample circulating blood directly. MC3R is expressed on neurons in the area postrema, and MC3R activation has been linked to emetic signaling in multiple species. MT-II's high affinity for MC3R is the most likely mechanistic explanation for its robust emetogenic activity.",
    },
    {
      type: "paragraph",
      text: "In the RECONNECT clinical trials for PT-141 (a more MC4R-selective MT-II derivative), nausea incidence was ~40% — substantially lower than with MT-II, but still the primary adverse effect limiting dose escalation. MT-II's additional MC3R potency is believed to account for the higher nausea rates in MT-II vs PT-141 studies.",
    },
    {
      type: "paragraph",
      text: "For research purposes, MT-II studies typically include antiemetic pretreatment considerations and clearly characterize nausea incidence across dose levels as part of the study design. The nausea side effect is mechanistically informative — it provides a functional readout of MC3R engagement that can be used as a pharmacodynamic marker distinct from MC1R (melanization) and MC4R (arousal) effects.",
    },
    {
      type: "heading",
      text: "Cardiovascular Effects",
    },
    {
      type: "paragraph",
      text: "MT-II and PT-141 both produce transient increases in blood pressure following administration. In the PT-141 clinical program, mean systolic BP increases of 6–10 mmHg and diastolic increases of 4–6 mmHg were documented at the 1.75 mg dose, peaking at approximately 30 minutes and resolving within 12 hours. The mechanism appears to involve MC3R/MC4R-mediated sympathetic activation and direct melanocortin effects on cardiovascular MC4R in the brainstem.",
    },
    {
      type: "paragraph",
      text: "For MT-II, which lacks the MC4R selectivity of PT-141 and has higher MC3R affinity, cardiovascular effects are potentially more pronounced. Research protocols studying MT-II in subjects or animal models with cardiovascular pathology should include appropriate monitoring parameters and may require dose-ranging studies to establish cardiovascular safety windows.",
    },
    {
      type: "heading",
      text: "Reconstitution Protocol",
    },
    {
      type: "paragraph",
      text: "MT-II is supplied as a lyophilized powder. Standard reconstitution uses bacteriostatic water (0.9% benzyl alcohol in sterile water for injection), which provides preservation for multi-use vials. Key steps:",
    },
    {
      type: "list",
      items: [
        "Add desired volume of bacteriostatic water slowly via syringe down the vial wall — do not inject directly onto the lyophilized cake",
        "Swirl gently; do not vortex — the cyclic structure is stable but aggressive agitation can denature the peptide",
        "Allow 2–3 minutes for complete dissolution; the solution should be clear and colorless",
        "Standard research concentration: 1–2 mg/mL (e.g., 10 mg vial + 5 mL BAC water = 2 mg/mL)",
        "Use amber vials or wrap in foil — MT-II solutions are light-sensitive due to the His residue",
        "Label with compound name, concentration, reconstitution date, and expiry (reconstituted: 4 weeks refrigerated)",
      ],
    },
    {
      type: "heading",
      text: "Storage Requirements",
    },
    {
      type: "list",
      items: [
        "Lyophilized: Store at −20°C, protected from light. Stable for 24 months properly stored",
        "Refrigerated (2–8°C): Acceptable for short-term lyophilized storage up to 3 months if freezer cycling is inconvenient",
        "Reconstituted: 2–8°C, protected from light, stable for 4 weeks. Do not freeze reconstituted MT-II — benzyl alcohol may crystallize and the peptide may aggregate on thawing",
        "Light sensitivity: Unlike many peptides, MT-II has heightened light sensitivity due to the His residue; amber vials or foil wrapping are strongly recommended for reconstituted solutions",
        "Avoid repeat freeze-thaw cycles of lyophilized material — each cycle risks moisture infiltration and progressive degradation",
      ],
    },
    {
      type: "heading",
      text: "Preclinical Dosing Protocols",
    },
    {
      type: "subheading",
      text: "Tanning / Melanogenesis Models",
    },
    {
      type: "paragraph",
      text: "In rodent melanization studies, SC administration of 0.5–2 mg/kg in C57BL/6 mice (which have functional MC1R and high melanogenic capacity) produces dose-dependent coat darkening detectable within 7–10 days. For transgenic or knockout mouse lines studying MC1R pathway biology, doses of 1 mg/kg SC daily × 14 days represent a well-established protocol. Reflectometry or spectrophotometry of shaved skin areas provides objective quantification.",
    },
    {
      type: "subheading",
      text: "Sexual Behavior / MC4R Models",
    },
    {
      type: "paragraph",
      text: "For ex copula erection studies in male Sprague-Dawley or Wistar rats, SC administration of 80–160 mcg/kg produces consistent erection responses peaking at 30–60 minutes. ICV administration (PVN cannula) requires nanogram quantities (10–100 ng in 1 µL vehicle). Female proceptivity studies typically use hormone-primed (estrogen + progesterone) ovariectomized rats with 100 mcg/kg SC MT-II and behavioral scoring at 30, 60, and 90-minute timepoints.",
    },
    {
      type: "subheading",
      text: "Appetite / Energy Balance Models",
    },
    {
      type: "paragraph",
      text: "In diet-induced obesity (DIO) or genetically obese rodent models, IP or SC administration of 1–3 mg/kg MT-II produces acute hypophagia (4–8 hours) and modest weight loss in short-term protocols. These studies typically use pair-fed controls to dissect direct metabolic effects from food intake reduction, and include MC4R-null mice as receptor specificity controls.",
    },
    {
      type: "heading",
      text: "Research Design Considerations",
    },
    {
      type: "list",
      items: [
        "Receptor selectivity controls are essential: Use subtype-selective antagonists (SHU9119 for MC3R/MC4R, agouti signal protein for MC1R/MC3R/MC4R) alongside MT-II to dissect which receptor mediates each observed effect",
        "Separate readouts for each receptor subtype: Design assays to simultaneously monitor melanogenesis (MC1R), behavior/arousal (MC4R), feeding (MC3R/MC4R), and nausea correlates (MC3R) — this creates a complete pharmacodynamic profile",
        "Fitzpatrick skin type consideration in any in vitro melanocyte work: MC1R loss-of-function variants (common in red-haired/fair-skinned individuals) can substantially alter melanogenic response to MT-II",
        "Dose-response design: MT-II shows non-linear dose-response relationships across receptor subtypes; narrow dose ranges may miss the full response curve",
        "Vehicle controls: Acetic acid vehicle (0.1–0.5%) is commonly used for MT-II; include vehicle-only controls to separate peptide effects from acid effects on tissues",
        "Cardiovascular monitoring: Include blood pressure and heart rate telemetry or spot measurements in any in vivo MT-II study at doses above 100 mcg/kg",
        "Nausea behavioral scoring in rodents: Pica (kaolin consumption) in rats is a validated proxy for nausea and should be included in any MT-II in vivo study as a MC3R engagement biomarker",
      ],
    },
    {
      type: "heading",
      text: "MT-II vs PT-141: Research Context",
    },
    {
      type: "paragraph",
      text: "MT-II serves as the parent compound and pharmacological comparator from which PT-141 was derived. The key structural difference is that PT-141 is a ring-opened (linear) analog of MT-II — specifically, it is cyclo(7-aminoheptanoyl-His-D-Phe-Arg-Trp-Glu), with the lactam ring replaced by an amide-closed ring of different geometry. This modification shifts receptor selectivity toward MC4R and reduces MC3R engagement, which is why PT-141 has lower nausea rates.",
    },
    {
      type: "paragraph",
      text: "For research purposes, MT-II remains valuable precisely because of its broader receptor profile: studies using MT-II to activate MC1R+MC3R+MC4R simultaneously can identify pleiotropic melanocortin system effects that would be missed with more selective compounds. Comparing MT-II responses to PT-141 responses in the same model system can itself serve as a tool for dissecting MC3R-specific contributions to observed phenotypes.",
    },
    {
      type: "paragraph",
      text: "Researchers should note that MT-II and PT-141 are often conflated in popular literature. From a rigorous pharmacology standpoint, they are distinct research compounds with overlapping but not identical receptor profiles. Dose-matching across studies requires careful attention to EC50 values at each relevant receptor subtype rather than simple mass equivalence.",
    },
    {
      type: "disclaimer",
      text: "Melanotan II is supplied strictly for in vitro and preclinical research purposes. It has not been approved by the FDA or any regulatory authority for human therapeutic use. This content is intended solely for qualified researchers and does not constitute medical advice.",
    },
  ],
};
