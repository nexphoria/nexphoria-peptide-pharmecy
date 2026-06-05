import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "pituitary-peptides-complete-research-guide",
  title: "Pituitary Peptides: Complete Research Guide to ACTH, TSH, FSH, LH, and Anterior Pituitary Hormones",
  description:
    "A comprehensive research reference covering all major anterior and posterior pituitary peptide hormones — ACTH, TSH, FSH, LH, prolactin, GH, ADH, and oxytocin — with receptor biology, downstream axes, and research protocol design for pituitary-axis studies.",
  category: "Research Fundamentals",
  readMinutes: 16,
  publishedAt: "2026-06-05",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "The pituitary gland — a pea-sized structure at the base of the brain — is the master endocrine regulator, orchestrating hormonal axes that govern metabolism, stress response, reproduction, growth, and fluid balance. Every major pituitary peptide hormone acts as both a downstream effector and an upstream regulator within complex negative-feedback systems. For peptide researchers, understanding pituitary hormones is foundational: virtually every growth hormone secretagogue, GnRH analog, CRH antagonist, or reproductive peptide studied ultimately exerts its effects through modulation of pituitary peptide secretion or pituitary receptor sensitivity. This guide provides a systematic reference for all major pituitary peptides, their receptors, axes, and research applications.",
    },
    {
      type: "heading",
      text: "Overview: Anterior vs Posterior Pituitary",
    },
    {
      type: "paragraph",
      text: "The pituitary has two functionally distinct lobes with different embryological origins and secretory mechanisms.",
    },
    {
      type: "subheading",
      text: "Anterior Pituitary (Adenohypophysis)",
    },
    {
      type: "paragraph",
      text: "The anterior pituitary synthesizes and secretes its own peptide hormones under hypothalamic control. Hypothalamic releasing hormones (GHRH, GnRH, TRH, CRH, dopamine) travel through the hypophyseal portal vasculature to regulate anterior pituitary secretion. The major anterior pituitary peptides are: Growth Hormone (GH), Adrenocorticotropic Hormone (ACTH), Thyroid-Stimulating Hormone (TSH), Follicle-Stimulating Hormone (FSH), Luteinizing Hormone (LH), and Prolactin (PRL).",
    },
    {
      type: "subheading",
      text: "Posterior Pituitary (Neurohypophysis)",
    },
    {
      type: "paragraph",
      text: "The posterior pituitary does not synthesize hormones itself. Instead, it stores and releases peptides produced in hypothalamic nuclei (supraoptic and paraventricular nuclei) and transported via axonal projections. The posterior pituitary releases Arginine Vasopressin (ADH/AVP) and Oxytocin.",
    },
    {
      type: "heading",
      text: "ACTH (Adrenocorticotropic Hormone)",
    },
    {
      type: "subheading",
      text: "Structure and Origin",
    },
    {
      type: "list",
      items: [
        "Amino acids: 39 (full-length active peptide)",
        "Molecular weight: ~4.54 kDa",
        "Derived from: POMC (pro-opiomelanocortin) precursor, cleaved in corticotroph cells",
        "POMC also gives rise to: β-endorphin, α-MSH, β-MSH, γ-MSH — all with melanocortin receptor activity",
        "Regulated by: CRH (stimulatory), cortisol (inhibitory via negative feedback), AVP (permissive)",
        "Secretion pattern: pulsatile, circadian (peak at 6–8 AM, nadir at midnight)",
      ],
    },
    {
      type: "subheading",
      text: "Receptor and Mechanism",
    },
    {
      type: "paragraph",
      text: "ACTH binds MC2R (melanocortin-2 receptor) on adrenocortical cells — a Gαs-coupled GPCR that raises cAMP and activates PKA, which phosphorylates StAR (steroidogenic acute regulatory protein) to initiate cholesterol transport into mitochondria, the rate-limiting step of steroidogenesis.",
    },
    {
      type: "list",
      items: [
        "Acute effect (minutes): StAR activation → increased cholesterol transport → cortisol surge",
        "Chronic effect (days–weeks): adrenal cortex hypertrophy, increased steroidogenic enzyme expression",
        "Target zones: zona fasciculata (cortisol), zona reticularis (DHEA) — not zona glomerulosa (aldosterone, regulated by angiotensin II)",
        "Feedback: cortisol inhibits CRH at hypothalamus and ACTH at pituitary via GR (glucocorticoid receptor) nuclear receptor",
      ],
    },
    {
      type: "subheading",
      text: "Research Applications",
    },
    {
      type: "list",
      items: [
        "Cosyntropin stimulation test: standard HPA axis function assessment in adrenal insufficiency research",
        "ACTH-dependent Cushing's research: pituitary adenoma (Cushing's disease) vs. ectopic ACTH models",
        "Melanocortin biology: ACTH fragment ACTH(1-24) retains full adrenal activity; ACTH(4-10) has neurotrophic properties without steroidogenic activity",
        "Anti-inflammatory research: ACTH has MC1R/MC3R-mediated anti-inflammatory effects independent of adrenal activation",
        "Stress axis modeling: ACTH measurement as a validated HPA activation biomarker in rodent stress models",
      ],
    },
    {
      type: "heading",
      text: "TSH (Thyroid-Stimulating Hormone / Thyrotropin)",
    },
    {
      type: "subheading",
      text: "Structure and Origin",
    },
    {
      type: "list",
      items: [
        "Structure: heterodimer — α-subunit (common to TSH, FSH, LH, hCG) + unique TSH β-subunit",
        "Molecular weight: ~28 kDa (glycoprotein)",
        "Produced by: thyrotroph cells of anterior pituitary",
        "Regulated by: TRH (stimulatory), T3/T4 (inhibitory), somatostatin (inhibitory), dopamine (inhibitory)",
        "Secretion: pulsatile with minor circadian rhythm; nocturnal surge in some species",
      ],
    },
    {
      type: "subheading",
      text: "TSHR (TSH Receptor) Biology",
    },
    {
      type: "paragraph",
      text: "TSHR is a Gαs-coupled GPCR expressed on thyroid follicular cells. TSH binding triggers cAMP elevation → PKA activation → phosphorylation of thyroglobulin synthesis machinery, iodine uptake (NIS upregulation), thyroid peroxidase (TPO) activity, and ultimately T3/T4 synthesis and secretion. High-dose TSH also activates Gαq/IP3 pathways contributing to thyroid cell proliferation.",
    },
    {
      type: "list",
      items: [
        "Acute: stimulates T3/T4 release from stored thyroglobulin",
        "Chronic: increases thyroid gland size (goitrogenic at supraphysiological levels)",
        "TSHR is the autoantigen in Graves' disease — stimulatory autoantibodies (TSAb) mimic TSH",
        "In Hashimoto's thyroiditis: blocking TSHR autoantibodies or cytotoxic T-cell destruction",
        "Recombinant human TSH (rhTSH/Thyrogen): used in differentiated thyroid cancer management protocols",
      ],
    },
    {
      type: "subheading",
      text: "Research Relevance",
    },
    {
      type: "list",
      items: [
        "TSH serves as an ultrasensitive marker of thyroid hormone sufficiency — small T3/T4 changes produce large inverse TSH shifts",
        "TSH receptor extrathyroidal expression: adipocytes, bone, heart, brain — expanding beyond thyroid biology",
        "Adipocyte TSHR activation: promotes lipogenesis and inhibits lipolysis — relevant to body composition research",
        "Bone TSHR: direct anti-osteoclastic effect independent of thyroid hormones — separate from T3/T4 bone effects",
        "Research model: congenital hypothyroid (hyt/hyt mice with TSHR loss-of-function) vs. hyperactive TSHR transgenic models",
      ],
    },
    {
      type: "heading",
      text: "FSH (Follicle-Stimulating Hormone) and LH (Luteinizing Hormone)",
    },
    {
      type: "subheading",
      text: "Structure",
    },
    {
      type: "list",
      items: [
        "Both are glycoprotein heterodimers sharing the common α-subunit with TSH and hCG",
        "FSH: ~25–32 kDa; LH: ~28 kDa (glycosylation-dependent molecular weight variation)",
        "Produced by: gonadotroph cells of anterior pituitary",
        "Regulated by: GnRH (stimulatory for both), sex steroids (positive and negative feedback depending on sex and cycle phase), inhibin/activin (FSH-selective regulation)",
        "Pulsatile secretion is obligatory: continuous GnRH leads to FSHR/LHR desensitization (the basis of GnRH agonist medical castration)",
      ],
    },
    {
      type: "subheading",
      text: "FSH Biology",
    },
    {
      type: "list",
      items: [
        "FSHR: Gαs-coupled GPCR on granulosa cells (female) and Sertoli cells (male)",
        "Female: stimulates follicular development, granulosa cell aromatase activity (androgen → estrogen conversion), inhibin B secretion",
        "Male: stimulates Sertoli cell proliferation, supports spermatogenesis (sperm maturation support), inhibin B secretion",
        "FSH receptor mutations: gain-of-function → spontaneous ovarian hyperstimulation; loss-of-function → azoospermia (male), primary ovarian failure (female)",
        "FSH in bone metabolism: direct osteoclast-stimulating effects — postmenopausal FSH elevation contributes to bone loss independent of estrogen decline",
      ],
    },
    {
      type: "subheading",
      text: "LH Biology",
    },
    {
      type: "list",
      items: [
        "LHR: Gαs-coupled GPCR on theca cells (female), Leydig cells (male), luteal cells (female), and some extragonadal sites",
        "Female: triggers ovulation (LH surge → oocyte meiosis resumption), luteinization of granulosa/theca cells, progesterone production from corpus luteum",
        "Male: stimulates Leydig cell testosterone biosynthesis — primary testicular androgen driver",
        "hCG (human chorionic gonadotropin): structurally homologous to LH, binds LHR with high affinity — used pharmacologically in research and fertility protocols",
        "LH pulse frequency: regulated by kisspeptin/NKB/dynorphin (KNDy) neurons — pulses every 60–90 min in men",
        "Gonadorelin (native GnRH): pulsatile administration stimulates LH/FSH; continuous infusion suppresses (used in research and medical castration protocols)",
      ],
    },
    {
      type: "heading",
      text: "GH (Growth Hormone) and the GH Axis",
    },
    {
      type: "paragraph",
      text: "Growth hormone is the most extensively researched pituitary peptide in the context of performance and aging research. While GH itself is not typically a research peptide vendor offering, understanding the GH axis is essential for interpreting growth hormone secretagogue (GHS) data.",
    },
    {
      type: "list",
      items: [
        "Structure: 191 amino acids; ~22 kDa (predominant isoform) and ~20 kDa (splice variant)",
        "Produced by: somatotroph cells (~50% of anterior pituitary cells)",
        "Regulation: GHRH (stimulatory) from hypothalamus; somatostatin (inhibitory); ghrelin/GHSR-1a system (stimulatory); IGF-1 feedback (inhibitory)",
        "GHR (GH receptor): JAK2-STAT5 signaling (primary); also activates MAPK, PI3K, and PLC pathways",
        "Primary anabolic actions: hepatic IGF-1 production, protein synthesis, lipolysis, glucose counterregulation",
        "Research agents targeting GH axis: CJC-1295, Sermorelin (GHRH analogs); Ipamorelin, Hexarelin, GHRP-2, GHRP-6 (GHSR-1a agonists); MK-677 (oral GHSR-1a agonist); Tesamorelin (HIV-related lipodystrophy-approved GHRH analog)",
      ],
    },
    {
      type: "heading",
      text: "Prolactin (PRL)",
    },
    {
      type: "list",
      items: [
        "Structure: 199 amino acids; ~22–23 kDa (multiple isoforms exist via post-translational modification)",
        "Produced by: lactotroph cells of anterior pituitary",
        "Unique regulation: tonically inhibited by dopamine (D2 receptor) from hypothalamus — unlike most pituitary hormones which require positive hypothalamic input",
        "Stimulated by: TRH, VIP, oxytocin, nipple stimulation, sleep, stress",
        "Primary actions: mammary gland development, milk production, luteal phase support, immunomodulation",
        "Prolactin receptor (PRLR): JAK2-STAT5 signaling, similar to GHR (structural homologs)",
        "Research relevance: hyperprolactinemia models, lactation biology, immune peptide interactions, dopaminergic regulation",
        "Dopamine agonists (bromocriptine, cabergoline): reduce PRL — used in research models of PRL-secreting adenomas",
      ],
    },
    {
      type: "heading",
      text: "Posterior Pituitary Peptides: ADH and Oxytocin",
    },
    {
      type: "subheading",
      text: "ADH / Arginine Vasopressin (AVP)",
    },
    {
      type: "list",
      items: [
        "Structure: 9 amino acids (nonapeptide); differs from oxytocin at positions 3 and 8",
        "Produced in: supraoptic nucleus (SON) — primarily for ADH function; also paraventricular nucleus",
        "Primary stimulus: plasma osmolality (primary), blood volume/pressure (secondary), stress, pain",
        "V1aR: Gαq/PLC/IP3 pathway → vasoconstriction (smooth muscle), platelet activation, hepatic glycogenolysis",
        "V1bR (V3R): pituitary corticotrophs — synergizes with CRH to amplify ACTH secretion",
        "V2R: Gαs/cAMP/PKA → aquaporin-2 insertion in renal collecting duct → water reabsorption (antidiuretic effect)",
        "Research tools: desmopressin (DDAVP) — V2-selective agonist for fluid balance research; terlipressin — V1a-selective for portal hypertension models",
      ],
    },
    {
      type: "subheading",
      text: "Oxytocin",
    },
    {
      type: "list",
      items: [
        "Structure: 9 amino acids — identical to ADH at 7 positions, diverges at 3 and 8",
        "Produced in: paraventricular nucleus (PVN) and SON",
        "Primary peripheral roles: uterine contraction (labor), milk ejection (let-down reflex)",
        "OTR (oxytocin receptor): Gαq/PLC/IP3 signaling; also Gαi in some tissues",
        "CNS actions: social bonding, trust, anxiety reduction, pair bonding, maternal behavior, appetite suppression",
        "Intranasal delivery: bypasses BBB via olfactory/trigeminal routes — used in CNS oxytocin research protocols",
        "Research focus: autism spectrum disorder (ASD), PTSD, social cognition, addiction, eating behavior",
        "See dedicated Nexphoria article: Oxytocin Research Protocols — Intranasal vs. IP Administration",
      ],
    },
    {
      type: "heading",
      text: "Pituitary Axis Summary Table",
    },
    {
      type: "table",
      headers: ["Hormone", "Origin", "Hypothalamic Control", "Primary Target", "Receptor Type", "Key Research Agent"],
      rows: [
        ["GH", "Somatotrophs", "GHRH (+), SST (-), Ghrelin (+)", "Liver, muscle, adipose", "GHR → JAK2/STAT5", "CJC-1295, MK-677, Ipamorelin"],
        ["ACTH", "Corticotrophs (POMC)", "CRH (+), cortisol (-)", "Adrenal cortex", "MC2R → cAMP/PKA", "Cosyntropin (ACTH 1-24)"],
        ["TSH", "Thyrotrophs", "TRH (+), T3/T4 (-)", "Thyroid follicular cells", "TSHR → Gαs/cAMP", "Recombinant TSH (Thyrogen)"],
        ["FSH", "Gonadotrophs", "GnRH (+), Inhibin B (-)", "Granulosa / Sertoli cells", "FSHR → Gαs/cAMP", "Recombinant FSH (Gonal-F)"],
        ["LH", "Gonadotrophs", "GnRH (+), sex steroids (±)", "Theca / Leydig cells", "LHR → Gαs/cAMP", "hCG, Gonadorelin"],
        ["Prolactin", "Lactotrophs", "Dopamine (-), TRH (+)", "Mammary gland", "PRLR → JAK2/STAT5", "Cabergoline (antagonism model)"],
        ["ADH/AVP", "SON/PVN neurons", "Osmolality, volume", "Renal collecting duct / vessels", "V2R → Gαs; V1aR → Gαq", "Desmopressin (DDAVP)"],
        ["Oxytocin", "PVN/SON neurons", "Sensory afferents, social cues", "Uterus, breast, CNS", "OTR → Gαq", "Intranasal oxytocin"],
      ],
    },
    {
      type: "heading",
      text: "Research Protocol Design: Pituitary Axis Studies",
    },
    {
      type: "subheading",
      text: "Dynamic Function Testing",
    },
    {
      type: "list",
      items: [
        "Insulin tolerance test (ITT): GH and ACTH axis stimulation via hypoglycemia — gold standard for combined anterior pituitary reserve",
        "GHRH/arginine stimulation: GH axis testing without hypoglycemia risk",
        "CRH stimulation test: distinguishes pituitary from adrenal or ectopic Cushing's etiology",
        "GnRH stimulation test: evaluates gonadotroph reserve for FSH/LH secretory capacity",
        "TRH stimulation: assesses TSH reserve, distinguishes hypothalamic from pituitary hypothyroidism",
      ],
    },
    {
      type: "subheading",
      text: "Key Hormone Measurement Considerations",
    },
    {
      type: "list",
      items: [
        "Pulsatile secretion: single time-point measurements of GH, LH, FSH may miss peak levels — frequent sampling protocols (every 20 min) provide more accurate assessment",
        "Binding proteins: GH-binding protein (GHBP) affects free GH measurement; SHBG complicates LH/FSH-testosterone relationships",
        "Cortisol circadian sampling: always pair ACTH with cortisol and time of sampling for meaningful HPA interpretation",
        "Species differences: rat GH, LH, FSH epitopes differ from human — assays must be species-validated",
        "Matrix effects: plasma vs. serum vs. tissue homogenate requires matched calibration standards",
      ],
    },
    {
      type: "callout",
      text: "Research Note: When designing multi-axis pituitary studies, simultaneous measurement of hypothalamic releasing hormones, pituitary hormones, and peripheral effector hormones (cortisol, IGF-1, testosterone, T3/T4) provides essential context for interpreting results at any single level of the axis.",
    },
    {
      type: "heading",
      text: "Peptide Research Compounds with Pituitary Targets",
    },
    {
      type: "paragraph",
      text: "Many peptides available through Nexphoria and other research vendors directly target pituitary hormone axes. Understanding the pituitary-level mechanism is essential for protocol design.",
    },
    {
      type: "list",
      items: [
        "GH axis (GHSR-1a agonists): Ipamorelin, GHRP-2, GHRP-6, Hexarelin, MK-677 — stimulate GH pulses from somatotrophs",
        "GH axis (GHRH analogs): CJC-1295 (with and without DAC), Sermorelin, Tesamorelin — act on GHRH-R at somatotroph cells",
        "HPG axis (GnRH analogs): Gonadorelin (native GnRH), Triptorelin — modulate LH/FSH release depending on pulsatile vs continuous administration",
        "Kisspeptin: upstream regulator of GnRH pulse generator — Kisspeptin-10 and -54 stimulate LH surges",
        "HPA axis (upstream): Selank, Semax — modulate CRH/ACTH-driven stress responses in preclinical models",
        "Thyroid axis: no direct thyroid-stimulating peptides currently in research vendor catalogs — research typically uses TSH or TRH directly",
      ],
    },
    {
      type: "disclaimer",
      text: "All compounds referenced are intended for laboratory research use only. Not for human consumption. Pituitary hormone modulation carries significant physiological consequences — research protocols should be designed by qualified investigators with appropriate institutional oversight.",
    },
  ],
};
