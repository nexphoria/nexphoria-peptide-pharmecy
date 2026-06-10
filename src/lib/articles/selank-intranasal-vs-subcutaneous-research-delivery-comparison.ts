import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "selank-intranasal-vs-subcutaneous-research-delivery-comparison",
  title: "Selank: Intranasal vs. Subcutaneous Delivery in Research Models",
  description:
    "A research-focused comparison of intranasal and subcutaneous Selank administration — pharmacokinetics, CNS bioavailability, protocol design considerations, and what the evidence shows about route-dependent differences.",
  category: "Research Protocols",
  readMinutes: 8,
  publishedAt: "2026-06-10",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Selank (Thr-Lys-Pro-Arg-Pro-Gly-Pro) is a synthetic heptapeptide studied primarily for anxiolytic and nootropic properties. Unlike most research peptides, Selank has been administered in clinical contexts via intranasal delivery rather than subcutaneous injection — a distinction that carries meaningful pharmacokinetic implications for researchers designing experimental protocols.",
    },
    {
      type: "heading",
      text: "Why Route of Administration Matters for CNS-Active Peptides",
    },
    {
      type: "paragraph",
      text: "Peptides face a fundamental challenge when targeting central nervous system endpoints: the blood-brain barrier (BBB). The BBB selectively restricts the passage of large, polar molecules from systemic circulation into brain tissue. Most peptides above a certain molecular weight and hydrophilicity profile have poor passive BBB permeability — meaning the route of administration determines not just bioavailability but CNS access.",
    },
    {
      type: "paragraph",
      text: "For Selank specifically, CNS delivery is the research goal. The compound's primary studied effects — anxiolytic activity, BDNF modulation, cognitive effects — require CNS access. This makes the choice between intranasal and subcutaneous routes more consequential than for peripherally-acting compounds.",
    },
    {
      type: "heading",
      text: "Intranasal Delivery: Mechanism and Advantages",
    },
    {
      type: "subheading",
      text: "The Olfactory Pathway",
    },
    {
      type: "paragraph",
      text: "Intranasal drug delivery can access the CNS through two main anatomical pathways: the olfactory nerve route (direct transport along olfactory neurons from the nasal epithelium to the olfactory bulb) and the trigeminal nerve route (transport along the trigeminal nerve to the brainstem). Both pathways bypass the BBB, enabling compounds to reach CNS tissue without systemic circulation as an intermediate step.",
    },
    {
      type: "list",
      items: [
        "Bypasses hepatic first-pass metabolism — compound reaches CNS before liver processing",
        "Partially bypasses the BBB via olfactory and trigeminal pathways",
        "Rapid CNS delivery — onset of CNS effects faster than subcutaneous for some compounds",
        "Lower systemic exposure — potentially reduces peripheral side effects",
        "Clinical precedent — Russian pharmaceutical Selank (approved) uses intranasal delivery",
      ],
    },
    {
      type: "subheading",
      text: "Limitations of Intranasal Delivery",
    },
    {
      type: "list",
      items: [
        "Dose variability — nasal mucosa absorption is affected by congestion, mucus clearance rate, and administration technique",
        "Limited dose volume — human nasal capacity is ~0.1–0.2 mL per nostril; animal models require specialized apparatus",
        "Mucosal enzyme activity — some peptide degradation occurs at the nasal epithelium prior to absorption",
        "Difficult to quantify CNS fraction — what proportion actually enters via olfactory vs. systemic absorption is not always characterized",
      ],
    },
    {
      type: "heading",
      text: "Subcutaneous Delivery: Mechanism and Considerations",
    },
    {
      type: "paragraph",
      text: "Subcutaneous (SC) injection delivers Selank into the interstitial tissue beneath the skin, where it diffuses into local capillaries and enters systemic circulation. From there, CNS access depends on Selank's ability to cross the BBB from blood.",
    },
    {
      type: "subheading",
      text: "BBB Permeability of Selank",
    },
    {
      type: "paragraph",
      text: "Research suggests Selank has modest but measurable BBB permeability via systemic routes, particularly at higher doses. As a relatively small heptapeptide (MW ~863 Da), it falls within a size range where some passive and carrier-mediated BBB transport is possible. However, the fraction that crosses the BBB from systemic circulation is lower than that achieved via olfactory pathway delivery — meaning SC doses required to achieve equivalent CNS concentrations may be higher than intranasal doses.",
    },
    {
      type: "subheading",
      text: "Advantages of SC Delivery in Research",
    },
    {
      type: "list",
      items: [
        "Dose precision — SC injection volumes are accurately measured using standard insulin syringes",
        "Reproducibility — eliminates variability from nasal absorption differences across subjects",
        "Standard for preclinical models — most rodent peptide studies use SC or IP routes",
        "Simpler technique — no specialized intranasal delivery apparatus required",
        "Well-characterized pharmacokinetic profile — standard SC absorption curves are well understood",
      ],
    },
    {
      type: "heading",
      text: "Published Evidence on Route-Dependent Effects",
    },
    {
      type: "paragraph",
      text: "The majority of Russian-language clinical research on Selank has used intranasal delivery, which is the approved pharmaceutical route (Zadaxin-class clinical use; Selank nasal drops at 0.15% solution). Preclinical animal studies have used intraperitoneal (IP), subcutaneous, and intranasal routes, with anxiolytic and nootropic endpoints measurable across all routes.",
    },
    {
      type: "paragraph",
      text: "A key finding from preclinical comparisons is that the dose required to produce equivalent behavioral outcomes differs by route, with intranasal administration typically effective at lower absolute doses. This is consistent with the olfactory pathway providing more direct CNS access than systemic circulation. However, the magnitude of this difference varies significantly across outcome measures and model systems.",
    },
    {
      type: "heading",
      text: "Protocol Design Recommendations",
    },
    {
      type: "table",
      headers: ["Factor", "Intranasal", "Subcutaneous"],
      rows: [
        ["CNS access pathway", "Olfactory/trigeminal (direct)", "BBB permeation (systemic)"],
        ["Dose precision", "Moderate", "High"],
        ["First-pass avoidance", "Yes", "Partial (avoids hepatic, not peripheral)"],
        ["Standard in animal models", "Requires apparatus", "Standard practice"],
        ["Clinical research precedent", "High (approved route)", "Limited for Selank specifically"],
        ["Inter-subject variability", "Higher", "Lower"],
      ],
    },
    {
      type: "callout",
      text: "For in vitro and cell-based studies, route is irrelevant — Selank can be added directly to culture media. Route selection primarily matters for in vivo research where CNS vs. systemic endpoint distinction is meaningful.",
    },
    {
      type: "paragraph",
      text: "Researchers examining CNS-specific endpoints (anxiety paradigms, BDNF expression in hippocampal tissue, cognitive outcomes) may achieve more relevant translational data with intranasal delivery, as this mirrors the clinical evidence base. Researchers primarily interested in peripheral immune endpoints (NK cell activity, T-cell modulation — consistent with Selank's tuftsin ancestry) may find SC delivery more practical and reproducible.",
    },
    {
      type: "heading",
      text: "Storage and Handling for Research-Grade Selank",
    },
    {
      type: "list",
      items: [
        "Lyophilized form preferred for storage at -20°C; stable for 12–24 months",
        "Reconstitute in sterile saline (0.9% NaCl) or bacteriostatic water",
        "For intranasal research: reconstitute to 0.15–1.5 mg/mL depending on model",
        "For SC research: standard reconstitution to 1–5 mg/mL",
        "Reconstituted solution: store at 2–8°C, use within 2–4 weeks, protect from light",
        "Confirm ≥98% HPLC purity and MS identity verification before use",
      ],
    },
    {
      type: "heading",
      text: "Summary",
    },
    {
      type: "paragraph",
      text: "The choice between intranasal and subcutaneous Selank delivery is not merely logistical — it has implications for CNS bioavailability, dose calibration, and the translational relevance of findings. Intranasal delivery more closely mirrors the clinical evidence base and achieves direct CNS access via the olfactory pathway. Subcutaneous delivery offers greater precision and reproducibility in preclinical rodent protocols. The optimal choice depends on the specific endpoints being measured and the degree of clinical translatability required.",
    },
    {
      type: "disclaimer",
      text: "For research purposes only. Not intended for human use. All information reflects published preclinical and clinical research literature.",
    },
  ],
};
