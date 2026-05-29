import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "hexarelin-forgotten-ghrp-cardiac-effects",
  title: "Hexarelin: The Forgotten GHRP with Cardiac Effects",
  description:
    "A research-focused review of Hexarelin — a synthetic GHRH secretagogue with unique GHSR-1a and CD36 dual receptor pharmacology, superior GH release potency among GHRPs, documented cardiac cytoprotective effects, and a distinct tachyphylaxis profile that shapes research design decisions.",
  category: "GH Axis",
  readMinutes: 8,
  publishedAt: "2026-05-29",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Among the family of synthetic growth hormone-releasing peptides (GHRPs), Hexarelin occupies a paradoxical position: it is arguably the most potent GH secretagogue in the class, yet it is also the least commonly discussed in contemporary research circles. Where Ipamorelin has become the default 'clean' GHRP for protocol design, and GHRP-2 and GHRP-6 have retained their following, Hexarelin's unique dual receptor pharmacology — including significant CD36 binding with documented cardiac protective effects — makes it a distinct research subject that warrants dedicated attention.",
    },
    {
      type: "paragraph",
      text: "This review covers Hexarelin's structure and pharmacology, GH release potency versus other GHRPs, the CD36-mediated cardiac effects that distinguish it from the rest of the class, its neuroendocrine side-effect profile, tachyphylaxis kinetics, and preclinical dosing considerations.",
    },
    {
      type: "heading",
      text: "Structure and Pharmacological Identity",
    },
    {
      type: "paragraph",
      text: "Hexarelin (also designated EP-23905) is a synthetic hexapeptide with the sequence His-D-2-methylTrp-Ala-Trp-D-Phe-Lys-NH₂. Its defining structural feature is a D-2-methyltryptophan residue at position 2 — the same alpha-methyl modification introduced to increase conformational rigidity, improve receptor affinity, and confer resistance to peptidase degradation. This same rationale drives the use of D-amino acid substitutions throughout the GHRP class; Hexarelin's particular modification confers notably enhanced binding kinetics at GHSR-1a compared with the straight-chain D-Trp substitutions used in GHRP-2 and GHRP-6.",
    },
    {
      type: "paragraph",
      text: "Hexarelin was developed by Europeptides and extensively characterized in the 1990s through collaborations including the research groups of Cyril Bowers and Ezio Ghigo. It represented an effort to maximize GHSR-1a agonism while retaining the favorable pharmacokinetic properties of a short synthetic hexapeptide. The result was a compound with the highest intrinsic GH-releasing potency of any GHRP studied in human subjects — at the cost of a more pronounced neuroendocrine side-effect signature and an accelerated tachyphylaxis curve.",
    },
    {
      type: "heading",
      text: "GHSR-1a Agonism and GH Release Potency",
    },
    {
      type: "paragraph",
      text: "All GHRPs exert their primary GH-releasing action through agonism at the growth hormone secretagogue receptor type 1a (GHSR-1a), a 366-amino acid Gq/11-coupled receptor expressed on somatotroph cells of the anterior pituitary and in multiple hypothalamic nuclei including the arcuate and ventromedial nuclei. GHSR-1a activation triggers PLC-beta/IP3 signaling, intracellular Ca²⁺ mobilization, and GH granule exocytosis.",
    },
    {
      type: "paragraph",
      text: "Hexarelin has consistently produced the highest GH peak responses in comparative studies among the synthetic GHRPs. Ghigo et al. (1994) demonstrated that IV Hexarelin at 2 mcg/kg produced mean GH peaks of 70–90 ng/mL in healthy young subjects, significantly exceeding GHRP-6 (40–50 ng/mL) and GHRP-2 (50–70 ng/mL) at equivalent molar doses. This enhanced potency reflects both superior GHSR-1a binding affinity and a partial hypothalamic component — Hexarelin also stimulates hypothalamic GHRH release, adding a second tier to its GH-releasing activity.",
    },
    {
      type: "paragraph",
      text: "The elevated GH peaks come with a corresponding elevation in downstream IGF-1, though the absolute IGF-1 response is moderated by the same feedback mechanisms that limit all GHRP protocols: rising somatostatin tone and receptor desensitization with repeated dosing.",
    },
    {
      type: "heading",
      text: "Cortisol, Prolactin, and ACTH Activation",
    },
    {
      type: "paragraph",
      text: "Unlike Ipamorelin, which achieves pituitary selectivity and does not appreciably stimulate cortisol or ACTH at research doses, Hexarelin shares the neuroendocrine activation profile of GHRP-2 and GHRP-6. IV Hexarelin (2 mcg/kg) in healthy subjects produces measurable ACTH responses (~1.5–2.5x baseline at 30 min) and cortisol elevation (~1.4–1.8x baseline at 60 min), as well as modest prolactin increases. These effects are GHSR-1a-mediated via hypothalamic CRH/arginine-vasopressin pathways and are consistent across the 'non-selective' GHRP class.",
    },
    {
      type: "paragraph",
      text: "For research designs where isolated GH/IGF-1 assessment is the endpoint, co-administration with GHRH analogs (CJC-1295 No DAC, Sermorelin) allows a partial dissociation: the GHRH analog amplifies the GH signal while Hexarelin GHSR-1a agonism provides the primary pulse trigger. If neuroendocrine confounders are relevant to the model, Ipamorelin's selectivity profile is preferred; if maximum GH pulse amplitude is the research variable, Hexarelin's potency advantage becomes the deciding factor.",
    },
    {
      type: "heading",
      text: "CD36 Dual Receptor Binding: Cardiac Mechanism",
    },
    {
      type: "subheading",
      text: "Discovery of CD36 as a Hexarelin Target",
    },
    {
      type: "paragraph",
      text: "The most scientifically distinctive feature of Hexarelin is its binding to CD36 (cluster of differentiation 36), a class B scavenger receptor expressed on cardiomyocytes, monocytes/macrophages, endothelial cells, and adipocytes. CD36 is better known as a fatty acid translocase and oxidized LDL receptor; its identification as a functional Hexarelin target was initially surprising and has driven a substantial subset of the Hexarelin literature toward cardiovascular research.",
    },
    {
      type: "paragraph",
      text: "Bodart et al. (1999, Circulation Research) first demonstrated that Hexarelin exerts direct cardiac effects in the isolated perfused rat heart that could not be blocked by a GHSR-1a antagonist and persisted in GH-deficient (dwarf rat) models — arguing for a GH-independent cardiac action. Subsequent work by the same group identified CD36 as the mediating receptor through which Hexarelin produces positive inotropic responses and cardioprotective signaling in ventricular myocytes.",
    },
    {
      type: "subheading",
      text: "CD36-Mediated Cardioprotection in Ischemia Models",
    },
    {
      type: "paragraph",
      text: "In multiple rodent cardiac ischemia-reperfusion (I/R) injury models, Hexarelin pretreatment significantly reduced infarct size and preserved ventricular function. Torsello et al. (2003) demonstrated that IV Hexarelin (80–160 mcg/kg, administered 10 minutes before LAD occlusion in rats) reduced infarct area by 35–45% and attenuated the post-ischemic decline in left ventricular developed pressure. These effects were reproduced with a GH-deficient hypopituitary rat model, confirming that the protection was not GH-mediated.",
    },
    {
      type: "paragraph",
      text: "The proposed CD36-dependent mechanism involves Hexarelin-triggered activation of cardiac PI3K/Akt survival signaling, mitochondrial KATP channel opening (a canonical preconditioning mediator), and suppression of cytochrome c release — a pathway convergent with SS-31 cardiolipin protection but mechanistically distinct. Hexarelin's ability to trigger protective preconditioning-like signaling without requiring ischemic stress has attracted interest as a potential pharmacological preconditioning strategy.",
    },
    {
      type: "paragraph",
      text: "Bresciani et al. (2008) extended these findings to a doxorubicin cardiotoxicity model, showing that Hexarelin co-administration attenuated the cardiomyocyte apoptosis and LV dysfunction typical of anthracycline treatment. This finding may have translational relevance for research into chemotherapy-associated cardiomyopathy.",
    },
    {
      type: "heading",
      text: "Tachyphylaxis: The Primary Research Limitation",
    },
    {
      type: "paragraph",
      text: "Hexarelin's most significant practical limitation in research design is its rapid tachyphylaxis — a progressive attenuation of the GH response with repeated dosing that occurs faster and more completely than for other GHRPs. Ghigo et al. (1996) demonstrated that twice-daily Hexarelin (2 mcg/kg IV) over 4 weeks produced a 75–80% reduction in peak GH response by week 4, whereas equivalent GHRP-2 regimens maintained approximately 50–60% of initial response. Subcutaneous administration shows a similar trajectory.",
    },
    {
      type: "paragraph",
      text: "The mechanism of Hexarelin tachyphylaxis is believed to involve both pituitary GHSR-1a downregulation/desensitization and enhanced hypothalamic somatostatin tone. The somatostatin component appears particularly prominent with Hexarelin compared with other GHRPs, potentially due to its stronger hypothalamic GHRH-stimulating activity generating a steeper somatostatin counter-regulatory response.",
    },
    {
      type: "paragraph",
      text: "For research protocols, this means Hexarelin is most informative in acute dose-response designs, pharmacological preconditioning paradigms, or short-duration comparative GH peak studies rather than chronic GH/IGF-1 elevation protocols. Two-week washout periods are recommended between repeat exposure studies to allow partial GHSR-1a resensitization, though full recovery of GH response magnitude is not reliably achieved at four weeks.",
    },
    {
      type: "heading",
      text: "Preclinical Dosing Protocols",
    },
    {
      type: "paragraph",
      text: "Standard preclinical research doses for Hexarelin in rodent models are 80–160 mcg/kg via subcutaneous or intravenous injection. For GH pulse studies, single-dose SC at 100 mcg/kg in mice produces peak GH levels at 15–30 min post-injection (measured by RIA or ELISA); IGF-1 responses are typically assessed at 4–8 hours. For cardiac I/R preconditioning protocols, pre-ischemic IV dosing at 80–160 mcg/kg administered 15 minutes before LAD occlusion is the established paradigm from the published literature.",
    },
    {
      type: "paragraph",
      text: "Hexarelin is typically formulated in sterile saline (0.9% NaCl) at 200–500 mcg/mL and stored at −20°C lyophilized; reconstituted solutions should be used within 7 days under refrigeration and protected from light. Unlike some GHRP analogs, Hexarelin does not require acetic acid or DMSO as a co-solvent at research concentrations.",
    },
    {
      type: "heading",
      text: "Research Design Considerations",
    },
    {
      type: "paragraph",
      text: "GH-deficient model controls (dwarf rat, hypophysectomized mouse) are essential for distinguishing CD36-mediated cardiac effects from GH-dependent effects in cardiovascular Hexarelin studies. Without this control, attributing cardioprotection to CD36 binding versus elevated circulating GH is methodologically untenable. Where pharmacological GHSR-1a blockade is available (D-Lys³-GHRP-6 is a widely used GHSR-1a antagonist), its inability to block Hexarelin's cardiac effects in GH-intact animals provides additional mechanistic evidence for CD36 involvement.",
    },
    {
      type: "paragraph",
      text: "For neuroendocrine studies where cortisol/ACTH elevation is a confound, Ipamorelin remains the appropriate control arm. For maximal acute GH pulse amplitude studies, Hexarelin serves as the positive control standard. Tachyphylaxis should be explicitly controlled by randomizing dose order and incorporating washout periods in within-subject designs. Baseline corticosterone measurement at each dose day is recommended to quantify stress-axis activation magnitude across the tachyphylaxis curve.",
    },
    {
      type: "paragraph",
      text: "Hexarelin's underutilization in contemporary research may partly reflect availability constraints and the dominance of Ipamorelin/CJC-1295 combination protocols in popular research usage. However, for investigators specifically interested in GHSR-1a pharmacology, GHRP potency comparisons, or CD36-mediated cardiac biology, it remains a compound with a well-documented mechanism and a reproducible preclinical evidence base that few GHRPs can match.",
    },
  ],
};
