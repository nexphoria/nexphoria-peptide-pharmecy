import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "melanotan-1-afamelanotide-mc1r-melanocortin-research-guide",
  title: "Melanotan 1 (Afamelanotide): MC1R Agonism, Photoprotection & Melanocortin Research Guide",
  description:
    "A comprehensive research review of Melanotan 1 (afamelanotide), the selective MC1R agonist with an established clinical trial record. Covers melanocortin receptor biology, photoprotection mechanisms, erythropoietic protoporphyria research, and what distinguishes MT-1 from MT-2.",
  category: "Compound Profiles",
  readMinutes: 13,
  publishedAt: "2026-06-08",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Melanotan 1 (MT-1), now known in clinical literature as afamelanotide, is a synthetic analog of alpha-melanocyte stimulating hormone (α-MSH) developed with a specific focus on photoprotective and melanogenic applications. Unlike its more widely known counterpart Melanotan 2 (MT-2), afamelanotide has progressed through formal clinical trials and received regulatory approval in the European Union (as Scenesse) for the prevention of phototoxicity in adults with erythropoietic protoporphyria (EPP) — making it one of the few melanocortin peptides with an approved clinical indication. This history gives researchers a substantial evidence base to draw from that extends well beyond preclinical rodent data.",
    },
    {
      type: "paragraph",
      text: "This guide covers what MT-1 is, how it differs from α-MSH and MT-2, its receptor pharmacology, the photoprotection and pigmentation research, the EPP clinical program, and what researchers working with melanocortin biology need to know about it.",
    },
    {
      type: "heading",
      text: "What Is Melanotan 1?",
    },
    {
      type: "paragraph",
      text: "Alpha-MSH is a 13-amino acid neuropeptide cleaved from proopiomelanocortin (POMC) in the pituitary and other tissues. Its natural sequence is Ac-Ser-Tyr-Ser-Met-Glu-His-Phe-Arg-Trp-Gly-Lys-Pro-Val-NH2. Melanotan 1 is a cyclic, superpotent synthetic analog of α-MSH. Its sequence incorporates two key modifications relative to natural α-MSH: substitution of the methionine at position 4 with a norleucine residue (Nle⁴, which improves oxidative stability) and replacement of the natural phenylalanine at position 7 with a D-phenylalanine (D-Phe⁷, which confers greater receptor binding affinity and prolongs biological activity). The resulting compound is [Nle⁴, D-Phe⁷]-α-MSH, also designated NDP-MSH.",
    },
    {
      type: "paragraph",
      text: "These two substitutions — chemically modest but functionally significant — produce a peptide approximately 1,000-fold more potent than natural α-MSH at melanocortin receptors, with substantially greater resistance to enzymatic degradation. The compound has a molecular weight of approximately 1,647 Da and is water-soluble, like most short peptides.",
    },
    {
      type: "heading",
      text: "Melanocortin Receptor Pharmacology",
    },
    {
      type: "paragraph",
      text: "Five melanocortin receptors (MC1R–MC5R) are expressed across different tissue distributions, and each subtype mediates distinct physiological functions. MT-1's pharmacological profile is defined by its affinity and selectivity pattern across this receptor family.",
    },
    {
      type: "subheading",
      text: "MC1R — The Primary Target for Pigmentation",
    },
    {
      type: "paragraph",
      text: "MC1R is the primary melanocortin receptor on melanocytes — the pigment-producing cells of the skin. Activation of MC1R triggers a cAMP-mediated signaling cascade that upregulates tyrosinase activity, the rate-limiting enzyme in melanin synthesis. Critically, MC1R activation shifts melanin production from the lighter pheomelanin (yellow-red pigment, associated with UV sensitivity) toward the darker eumelanin (brown-black pigment, associated with UV protection). This switch in melanin type, not merely increased total melanin, is considered the primary mechanism by which MC1R agonism provides photoprotection.",
    },
    {
      type: "paragraph",
      text: "Melanotan 1 binds MC1R with high affinity (Ki approximately 0.1–1.0 nM in receptor binding assays) and acts as a full agonist. This potency substantially exceeds that of natural α-MSH and is sustained longer due to the peptide's improved metabolic stability.",
    },
    {
      type: "subheading",
      text: "MC3R and MC4R — Central Effects",
    },
    {
      type: "paragraph",
      text: "MT-1 also binds MC3R and MC4R, which are expressed centrally in the hypothalamus and limbic regions. MC4R is a critical regulator of energy homeostasis — its activation suppresses appetite and increases energy expenditure, and its blockade is associated with hyperphagia and obesity. The sexual arousal and erectile effects associated more prominently with MT-2 are also mediated through central melanocortin receptors, particularly MC4R in the medial preoptic area and spinal cord.",
    },
    {
      type: "paragraph",
      text: "While MT-1 does bind these receptors, its clinical formulation (the subcutaneous implant used in EPP patients) is designed to produce more peripheral, sustained MC1R stimulation. The lower affinity ratio for MC4R relative to MT-2, combined with the pharmacokinetic profile of the implant delivery system, is thought to reduce the incidence of centrally mediated side effects like nausea and spontaneous erection compared to bolus MT-2 injection — though head-to-head mechanistic comparisons remain limited in published literature.",
    },
    {
      type: "heading",
      text: "Photoprotection Research",
    },
    {
      type: "paragraph",
      text: "The central research question for MT-1 has been whether pharmacological melanocyte stimulation can provide clinically meaningful protection against UV-induced DNA damage, independent of behavioral sun avoidance or topical sunscreens. This is particularly relevant for populations with defective endogenous MC1R signaling — including individuals with fair skin, red hair, or loss-of-function MC1R variants — and for those with photodermatoses where UV exposure is genuinely dangerous.",
    },
    {
      type: "subheading",
      text: "Eumelanin vs. Pheomelanin: The Quality Problem",
    },
    {
      type: "paragraph",
      text: "A conceptually important insight from melanocortin research is that the protective capacity of a tan is not simply a function of how much pigment is present. Eumelanin (the dark pigment) acts as a photoprotective UV screen and free radical quencher. Pheomelanin, by contrast, can actually sensitize the skin to UV — it generates reactive oxygen species upon photon absorption rather than quenching them. MC1R loss-of-function variants (common in Northern European populations, associated with red hair and fair skin) are associated with a constitutive shift toward pheomelanin production, which may explain some of the disproportionate melanoma risk in these individuals beyond simple UV sensitivity.",
    },
    {
      type: "paragraph",
      text: "Afamelanotide, by potently activating MC1R regardless of endogenous signaling status, shifts melanin toward eumelanin production and may thereby provide a qualitatively different kind of protection than merely a behavioral tan. Animal studies and ex vivo human skin models have confirmed this eumelanin shift, and it has been proposed as the mechanistic basis for the compound's clinical benefit in EPP patients beyond just the visible darkening of the skin.",
    },
    {
      type: "subheading",
      text: "UV Protection Studies",
    },
    {
      type: "paragraph",
      text: "Early phase I and II trials demonstrated that subcutaneous afamelanotide increased skin pigmentation in a dose-dependent manner across Fitzpatrick skin types. Minimal erythemal dose (MED) — the UV threshold at which redness appears — was measured before and after treatment in several studies. Treated subjects showed increases in MED, suggesting genuine photoprotection beyond the cosmetic tan. A phase II crossover study in healthy volunteers found that afamelanotide treatment significantly increased MED compared to placebo, an effect attributed to increased epidermal eumelanin content as measured by reflectance spectrophotometry.",
    },
    {
      type: "heading",
      text: "Erythropoietic Protoporphyria (EPP): The Clinical Program",
    },
    {
      type: "paragraph",
      text: "EPP is a rare inherited metabolic disorder caused by mutations in the ferrochelatase gene (FECH), resulting in pathological accumulation of protoporphyrin IX in red blood cells, plasma, and the liver. Protoporphyrin IX is a photosensitizer — it absorbs light in the Soret band (~400–410 nm) and generates reactive oxygen species upon visible light exposure. This causes severe, immediate phototoxic reactions in EPP patients upon sun exposure: intense burning pain, erythema, edema, and urticaria that can persist for hours to days. The condition dramatically impairs quality of life, causing patients to severely restrict sun exposure throughout their lives.",
    },
    {
      type: "paragraph",
      text: "The rationale for afamelanotide in EPP is not to reduce protoporphyrin levels (the underlying metabolic defect) but to provide a photon-absorbing 'shield' of eumelanin in the epidermis, thereby reducing the amount of visible light reaching the deeper dermis where photosensitized blood vessels are found. This is a purely photoprotective mechanism — afamelanotide does not affect FECH activity or porphyrin metabolism.",
    },
    {
      type: "subheading",
      text: "Phase III Trial Evidence",
    },
    {
      type: "paragraph",
      text: "Two pivotal phase III randomized controlled trials (NCT00979745 and NCT01605136) evaluated afamelanotide implants (16 mg, subcutaneous) in EPP patients. In the European trial (Biolcati et al., JAMA Dermatology, 2015), patients receiving afamelanotide spent significantly more time in direct sunlight without triggering a phototoxic reaction compared to placebo — 69.4 minutes vs. 40.8 minutes of pain-free sun exposure as a median during the 60-day study period. The US trial (Langendonk et al., NEJM, 2015) replicated this finding and also demonstrated improvements in quality of life measures.",
    },
    {
      type: "paragraph",
      text: "These trials led to EMA approval of Scenesse (afamelanotide 16 mg subcutaneous implant) in 2014 for EPP photoprotection, making it the first POMC-pathway drug to reach market approval. FDA approval followed in the United States in 2019.",
    },
    {
      type: "heading",
      text: "MT-1 vs. MT-2: Key Distinctions for Researchers",
    },
    {
      type: "table",
      headers: ["Parameter", "Melanotan 1 (MT-1 / Afamelanotide)", "Melanotan 2 (MT-2)"],
      rows: [
        ["Full chemical name", "[Nle⁴, D-Phe⁷]-α-MSH (linear)", "Cyclo[Nle⁴, Asp⁵, D-Phe⁷, Lys¹⁰]-α-MSH(4–10)"],
        ["Structure", "Linear 13-aa peptide", "Cyclic 7-aa peptide"],
        ["MC1R selectivity", "High; binds all MCRs but designed for MC1R", "Less selective; potent at MC3R, MC4R"],
        ["Primary research focus", "Photoprotection, pigmentation, EPP", "Sexual function (MC4R), tanning, appetite"],
        ["Clinical approval", "Yes (EU/US — EPP indication)", "No approved indication"],
        ["Spontaneous erection risk", "Lower (less MC4R-mediated)", "Higher (central MC4R activation)"],
        ["Half-life", "~1–2 hours IV; days with implant", "~1–2 hours SC injection"],
        ["Delivery in approved form", "Subcutaneous biodegradable implant", "SC injection (research only)"],
      ],
    },
    {
      type: "heading",
      text: "Beyond Pigmentation: Expanded Melanocortin Research",
    },
    {
      type: "paragraph",
      text: "The melanocortin system extends well beyond skin pigmentation. MC1R is expressed not only on melanocytes but also on immune cells, including macrophages, neutrophils, and dendritic cells. Activation of MC1R on these cells modulates inflammatory cytokine production, and α-MSH fragments have well-documented anti-inflammatory effects in preclinical models. This has generated interest in melanocortin peptides — including MT-1 — for inflammatory dermatological conditions beyond EPP.",
    },
    {
      type: "subheading",
      text: "Vitiligo and Melanocyte-Loss Conditions",
    },
    {
      type: "paragraph",
      text: "Pilot studies have examined afamelanotide in combination with narrowband UVB phototherapy for vitiligo repigmentation. The hypothesis is that afamelanotide stimulates the residual melanocytes at vitiligo margins to proliferate and migrate, while NB-UVB provides the activating signal. A pilot RCT (Lim et al., JAMA Dermatology, 2015) showed that the combination produced faster and more extensive repigmentation than NB-UVB alone in patients with darker baseline skin phototype. This represents a distinct application for MT-1 compared to MT-2.",
    },
    {
      type: "subheading",
      text: "Inflammation and Immune Modulation",
    },
    {
      type: "paragraph",
      text: "Preclinical models of inflammatory bowel disease, neuroinflammation, and sepsis have demonstrated protective effects of α-MSH analogs including MT-1. These effects appear to be mediated through MC1R on peripheral immune cells and possibly through MC3R/MC4R signaling centrally. NF-κB suppression, reduced IL-6 and TNF-α production, and enhanced IL-10 release have all been documented. While these findings are largely preclinical, they broaden the theoretical scope of melanocortin peptide research beyond tanning.",
    },
    {
      type: "heading",
      text: "Handling and Stability Notes for Researchers",
    },
    {
      type: "paragraph",
      text: "As a linear peptide of 13 amino acids, MT-1 is more susceptible to protease degradation than the cyclic MT-2. The Nle⁴ substitution was specifically designed to address oxidative instability of the natural Met⁴ residue, and the D-Phe⁷ substitution significantly improves resistance to proteolytic cleavage. Nonetheless, researchers should follow standard peptide handling practices.",
    },
    {
      type: "list",
      items: [
        "Store lyophilized MT-1 at -20°C in a desiccated, light-protected container",
        "Reconstitute with sterile bacteriostatic water; avoid vortexing — gentle inversion preferred",
        "Reconstituted solutions are stable for 2–4 weeks at 4°C; minimize freeze-thaw cycles",
        "Protect from UV light throughout handling — photooxidation can degrade the peptide",
        "Verify purity via HPLC and mass spectrometry; the Nle/D-Phe substitutions should be confirmed in the COA",
        "Endotoxin testing is essential if using in vivo models — standard LAL assay",
      ],
    },
    {
      type: "heading",
      text: "Regulatory and Research Context",
    },
    {
      type: "paragraph",
      text: "In the United States, afamelanotide (Scenesse) is an FDA-approved drug for EPP. As a result, MT-1 occupies a more complex regulatory space than many research peptides — it is both an approved pharmaceutical (in implant form at 16 mg) and a research compound studied in its injectable form. Researchers using it for non-EPP studies should be aware that it is classified as a drug substance in the US and EU, which carries different import and handling implications compared to novel research peptides without approved indications.",
    },
    {
      type: "paragraph",
      text: "For research purposes outside the approved indication, MT-1 is studied under standard research peptide frameworks, with appropriate IRB oversight for any human studies. Its status as an approved drug in the EU/US provides a significant advantage: an unusually detailed published safety and pharmacokinetic database that informs research study design.",
    },
    {
      type: "heading",
      text: "Summary",
    },
    {
      type: "paragraph",
      text: "Melanotan 1 (afamelanotide) is a synthetic [Nle⁴, D-Phe⁷]-α-MSH analog and potent MC1R agonist with the most extensive clinical evidence base of any melanocortin peptide. Its approved indication for EPP photoprotection, a published record of phase III efficacy, and an emerging research literature on vitiligo, inflammation, and immune modulation make it a uniquely well-characterized compound. Researchers working in melanocortin biology, photodermatology, or inflammatory signaling will find MT-1 a valuable and mechanistically tractable tool — one with a pharmacological profile meaningfully distinct from MT-2 in both receptor selectivity and safety profile.",
    },
    {
      type: "disclaimer",
      text: "This article is intended for research and educational purposes only. Melanotan 1 / afamelanotide is approved as a pharmaceutical in specific jurisdictions for a specific indication (EPP). It is not approved for general tanning, weight management, or cosmetic use. Any use outside the approved indication should occur only under appropriate research oversight. Nothing in this article constitutes medical advice.",
    },
  ],
};
