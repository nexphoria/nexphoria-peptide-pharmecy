import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "kisspeptin-54-vs-kisspeptin-10-clinical-research",
  title: "Kisspeptin-54 vs. Kisspeptin-10: Structure, Activity, and Protocol Differences in Reproductive Research",
  description:
    "Kisspeptin-54 and kisspeptin-10 are the two primary isoforms studied in reproductive neuroendocrinology research. This guide compares their pharmacokinetics, LH surge data, study design considerations, and which isoform to select for specific research applications.",
  category: "Compound Profiles",
  readMinutes: 10,
  publishedAt: "2026-06-05",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Kisspeptin (KISS1 gene product) is a neuropeptide that serves as the master regulator of the hypothalamic-pituitary-gonadal (HPG) axis. All kisspeptin isoforms share a C-terminal decapeptide sequence (the RF-amide motif) that is essential for KISS1R (GPR54) receptor binding and activation. Two isoforms dominate the human research literature: kisspeptin-54 (KP-54), the 54-amino acid full-length secreted form; and kisspeptin-10 (KP-10), the minimal biologically active fragment comprising the 10 C-terminal amino acids.",
    },
    {
      type: "heading",
      text: "Structural Overview",
    },
    {
      type: "table",
      headers: ["Feature", "Kisspeptin-54 (KP-54)", "Kisspeptin-10 (KP-10)"],
      rows: [
        ["Amino acids", "54", "10"],
        ["Molecular weight", "~6087 Da", "~1302 Da"],
        ["KISS1R binding domain", "C-terminal 10 AA shared", "Full sequence = binding domain"],
        ["KISS1R affinity (IC50)", "Lower — intermediate peptidase susceptibility", "Higher — compact, rapidly metabolized"],
        ["Plasma half-life (IV)", "~29 minutes", "~3–4 minutes"],
        ["Primary source", "Hypothalamic KNDy neurons", "Proteolytic cleavage in vivo"],
      ],
    },
    {
      type: "paragraph",
      text: "The biological activity of both isoforms is mediated through the same C-terminal RF-amide motif. The N-terminal extension of KP-54 does not contribute to KISS1R binding but confers resistance to peptidases — particularly neutral endopeptidase (NEP/neprilysin) — significantly extending its half-life relative to KP-10.",
    },
    {
      type: "heading",
      text: "LH Surge and Gonadotropin Endpoints",
    },
    {
      type: "paragraph",
      text: "The primary pharmacodynamic endpoint for kisspeptin research is LH secretion. Both isoforms stimulate robust LH pulses; however, their temporal profiles differ substantially due to pharmacokinetic differences.",
    },
    {
      type: "subheading",
      text: "Kisspeptin-54 IV/Subcutaneous Data",
    },
    {
      type: "paragraph",
      text: "George et al. (J Clin Invest, 2011) established that IV KP-54 infusion in healthy men produced sustained LH elevation over the infusion period, with peak LH at approximately 60–90 minutes post-infusion. Subcutaneous KP-54 (6.4 nmol/kg) produced LH peaks at ~90 minutes with a broader response curve — consistent with depot absorption. In women, KP-54 during the late follicular phase reliably triggered an LH surge (Dhillo et al., J Clin Endocrinol Metab, 2007), and this property is the basis for its investigation as a trigger for oocyte maturation in IVF research.",
    },
    {
      type: "subheading",
      text: "Kisspeptin-10 IV Data",
    },
    {
      type: "paragraph",
      text: "KP-10 administered IV produces rapid but transient LH elevation. The shorter half-life (~3 minutes) results in a sharp peak followed by a rapid return to baseline. Repeated IV bolus dosing (pulsatile) can sustain LH elevation but requires a delivery system or frequent injection. KP-10 is less practical for sustained reproductive axis stimulation but serves as the preferred tool for acute receptor pharmacology studies due to precise dose-response kinetics.",
    },
    {
      type: "heading",
      text: "Reproductive Research Applications",
    },
    {
      type: "subheading",
      text: "IVF Oocyte Trigger",
    },
    {
      type: "paragraph",
      text: "The most clinically advanced application of kisspeptin research is as an alternative LH surge trigger in IVF, replacing hCG to reduce ovarian hyperstimulation syndrome (OHSS) risk. The Hammersmith IVF trial (Abbara et al., J Clin Invest, 2020) used KP-54 54 nmol/kg SC as trigger — achieving mature oocyte yields comparable to hCG with significantly reduced OHSS incidence. This is a uniquely KP-54 application; KP-10's short half-life makes it unsuitable for reliable LH surge triggering without pump delivery.",
    },
    {
      type: "subheading",
      text: "Hypothalamic Amenorrhea",
    },
    {
      type: "paragraph",
      text: "Hypothalamic amenorrhea (HA) is characterized by reduced GnRH pulsatility. Both KP isoforms have been used to probe HPG axis responsiveness in HA patients. Studies by Jayasena et al. showed that twice-daily KP-54 SC injection restored LH pulsatility and, in a subset, menstrual cycles in women with HA — establishing proof-of-concept for kisspeptin as a clinical reproductive axis stimulant.",
    },
    {
      type: "subheading",
      text: "Male Hypogonadotropic Hypogonadism",
    },
    {
      type: "paragraph",
      text: "In men with hypogonadotropic hypogonadism due to congenital hypogonadism or Kallmann syndrome, IV KP-54 infusion produced a robust LH response, confirming preserved GnRH neuron function upstream of the pituitary defect. KP-10 pulsatile infusion has been used to map GnRH pulse generator activity in these models.",
    },
    {
      type: "heading",
      text: "Protocol Design: Choosing Between KP-54 and KP-10",
    },
    {
      type: "table",
      headers: ["Objective", "Preferred Isoform", "Rationale"],
      rows: [
        ["Acute KISS1R pharmacology / receptor kinetics", "KP-10", "Short half-life = precise dose-response windows"],
        ["Sustained LH elevation / axis priming", "KP-54", "Extended half-life supports durable response"],
        ["IVF oocyte maturation trigger model", "KP-54", "Only isoform with validated human clinical data"],
        ["HA restoration / pulsatility studies", "KP-54 SC BID", "Published efficacy in HA restoration trials"],
        ["In vitro KISS1R binding assay", "KP-10", "Minimal structure, easier synthesis, rapid turnover"],
        ["Rodent HPG axis mapping", "Either — match published precedent", "Protocol-specific"],
      ],
    },
    {
      type: "heading",
      text: "Dosing Reference",
    },
    {
      type: "paragraph",
      text: "Published human kisspeptin dosing spans a wide range depending on isoform, route, and endpoint. The table below summarizes key published doses; researchers should treat these as reference anchors rather than fixed protocols.",
    },
    {
      type: "list",
      items: [
        "KP-54 IV bolus (LH endpoint): 0.4–4.0 nmol/kg body weight",
        "KP-54 SC (IVF trigger): 54 nmol/kg single dose",
        "KP-54 SC BID (HA): 6.4 nmol/kg per injection, twice daily for 8 weeks in published trials",
        "KP-10 IV bolus: 1–10 nmol/kg; rapid peak LH at 15–30 min post-injection",
        "KP-10 pulsatile IV (90-min interval): 0.2–1.0 nmol/kg/pulse to simulate endogenous pulsatility",
      ],
    },
    {
      type: "heading",
      text: "Monitoring Parameters",
    },
    {
      type: "list",
      items: [
        "LH: primary PD endpoint; frequent sampling (every 10–20 min) required to capture full pulse profile",
        "FSH: secondary gonadotropin; responds more slowly than LH",
        "Testosterone (males) / Estradiol (females): downstream axis confirmation",
        "GnRH pulse frequency (via LH pulsatility analysis, deconvolution software)",
        "In female IVF trigger models: oocyte maturity rate, fertilization rate, OHSS grade",
        "Safety: blood pressure (KP-54 has shown mild transient increases at high doses in early studies)",
      ],
    },
    {
      type: "heading",
      text: "Sourcing and Quality",
    },
    {
      type: "paragraph",
      text: "KP-54 synthesis is technically demanding — 54 amino acids with potential for racemization at multiple sites. Researchers must require HPLC ≥99% purity and mass spectrometry verification (expected MW ~6087 Da). Endotoxin testing via LAL assay is non-negotiable for any in vivo reproductive endpoint study given the pituitary's heightened sensitivity to inflammatory signals. KP-10 is substantially easier to synthesize and validate; however, the same quality standards apply.",
    },
    {
      type: "heading",
      text: "Summary",
    },
    {
      type: "paragraph",
      text: "KP-54 and KP-10 are pharmacologically distinct tools for probing the same receptor and pathway. KP-54's extended half-life makes it the preferred isoform for clinical translation, sustained HPG axis stimulation, and IVF trigger research. KP-10 remains the workhorse for acute receptor pharmacology, in vitro assays, and rodent pulse-generator mapping. Researchers should select isoform based on kinetic requirements, not convenience, and demand synthesis quality commensurate with reproductive biology endpoints — where endotoxin contamination and racemized amino acids can confound results.",
    },
    {
      type: "disclaimer",
      text: "For research purposes only. Not intended for human use, diagnosis, or treatment.",
    },
  ],
};
