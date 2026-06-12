import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "how-long-does-melanotan-1-take-to-work-research-timeline",
  title: "How Long Does Melanotan 1 (Afamelanotide) Take to Work? Research Timeline & What Studies Show",
  description:
    "Melanotan 1 (afamelanotide) produces measurable melanogenesis within days of administration in preclinical models, with peak tanning effects at 1–3 weeks. This guide covers the research timeline for MC1R agonism, photoprotection endpoints, and erythropoietic protoporphyria studies.",
  category: "Research Protocols",
  readMinutes: 7,
  publishedAt: "2026-06-12",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Melanotan 1 (MT-1), now clinically known as afamelanotide, is a linear α-MSH (alpha-melanocyte-stimulating hormone) analog with selective affinity for the melanocortin-1 receptor (MC1R). Unlike Melanotan II, which is a cyclic analog with broad melanocortin receptor activity, MT-1's primary mechanism is MC1R-specific melanogenesis induction. This selectivity shapes both its research applications and its timeline of effects — understanding onset windows is essential for designing credible photoprotection and pigmentation studies.",
    },
    {
      type: "heading",
      text: "Mechanism Overview: MC1R and Melanogenesis",
    },
    {
      type: "paragraph",
      text: "MC1R activation by afamelanotide triggers the cAMP-PKA-MITF signaling cascade, upregulating tyrosinase and related melanogenic enzymes within melanocytes. The result is increased eumelanin production — the brown/black pigment associated with UV-protective tanning. This intracellular signaling cascade begins within hours, but visible pigmentation changes require melanin to be synthesized, transported to keratinocytes, and oxidized — a process that takes days. Importantly, afamelanotide does not require UV exposure to initiate melanogenesis, a critical distinction from natural tanning.",
    },
    {
      type: "heading",
      text: "Acute Phase: Hours 1–24",
    },
    {
      type: "subheading",
      text: "MC1R Receptor Activation and cAMP Elevation (Onset: Hours)",
    },
    {
      type: "paragraph",
      text: "Following subcutaneous administration, afamelanotide reaches peak plasma concentration within 1–3 hours in human pharmacokinetic studies (half-life approximately 2.5 hours for the non-depot formulation). MC1R engagement and downstream cAMP elevation in melanocytes occur rapidly. In vitro studies of human melanocyte cultures show measurable tyrosinase mRNA upregulation within 4–8 hours of afamelanotide exposure.",
    },
    {
      type: "subheading",
      text: "Anti-Inflammatory Signaling",
    },
    {
      type: "paragraph",
      text: "Beyond pigmentation, MC1R agonism activates anti-inflammatory pathways in melanocytes and immune cells. NF-κB suppression and reduced pro-inflammatory cytokine release (IL-1β, TNF-α) have been measured within 6–12 hours of afamelanotide treatment in keratinocyte and monocyte cell culture models. This rapid anti-inflammatory effect is believed to underlie some of the acute UV-protective properties documented in clinical EPP studies.",
    },
    {
      type: "heading",
      text: "Early Phase: Days 3–10",
    },
    {
      type: "subheading",
      text: "Visible Melanogenesis Onset (Days 3–7)",
    },
    {
      type: "paragraph",
      text: "In human clinical studies of healthy volunteers, measurable increases in skin melanin content (measured via reflectance spectrophotometry) appear within 3–5 days of afamelanotide dosing. This initial pigmentation represents newly synthesized eumelanin reaching the skin surface. In Fitzpatrick skin type I–II subjects (lightest skin types), visible pigmentation changes are typically first detectable at day 5–7. Darker skin types may show measurable changes earlier due to higher baseline melanocyte activity.",
    },
    {
      type: "subheading",
      text: "Early Photoprotection Signal",
    },
    {
      type: "paragraph",
      text: "In erythropoietic protoporphyria (EPP) clinical trials — the primary approved indication for afamelanotide (Scenesse®) in Europe — patients reported reduced photosensitivity symptoms within the first week of treatment during open-label extension studies. Objective measurements of phototoxic thresholds (minimum phototoxic dose) show improvement by days 7–10 in EPP subjects.",
    },
    {
      type: "heading",
      text: "Intermediate Phase: Weeks 2–4",
    },
    {
      type: "subheading",
      text: "Peak Pigmentation and Photoprotection",
    },
    {
      type: "paragraph",
      text: "Peak melanin density increase — the maximum measurable pigmentation response — occurs at approximately 2–3 weeks post-administration in the non-depot formulation and 3–4 weeks with the sustained-release implant (Scenesse PLGA implant). Randomized controlled trials in EPP (Minder et al., Lancet 2010; Wensink et al.) show the largest treatment-versus-placebo differences in sun exposure tolerance between weeks 2 and 8, with maximum effects at weeks 3–6.",
    },
    {
      type: "subheading",
      text: "Vitiligo Research Endpoints",
    },
    {
      type: "paragraph",
      text: "In vitiligo research models, afamelanotide combined with narrow-band UVB phototherapy shows repigmentation responses emerging at weeks 4–8. Studies by Lim et al. and Grimes et al. document statistically significant VASI (Vitiligo Area Scoring Index) improvements by week 6, with continued improvement to week 24. The timeline for vitiligo repigmentation is longer than non-pathological melanogenesis because functional melanocytes must first migrate into depigmented follicular reservoirs.",
    },
    {
      type: "heading",
      text: "Depot vs. Standard Formulation Timeline Differences",
    },
    {
      type: "table",
      headers: ["Formulation", "Tmax", "Visible Onset", "Duration of Action"],
      rows: [
        ["Standard SC injection", "1–3 hours", "Days 3–7", "2–5 days"],
        ["PLGA implant (Scenesse)", "36 hours", "Days 5–10", "~60 days"],
        ["In vitro cell culture", "Minutes", "Hours (mRNA)", "Duration of exposure"],
      ],
    },
    {
      type: "heading",
      text: "EPP Clinical Trial Timeline: Key Findings",
    },
    {
      type: "paragraph",
      text: "The most controlled clinical timeline data for afamelanotide comes from EPP trials. In Phase 3 trials (ClinicalTrials.gov NCT01315977, NCT01096498), the primary endpoint was 'time spent outdoors without pain' measured over 60-day implant cycles. Key timeline findings include: significant improvement in pain-free sun exposure time beginning at week 2 of the 60-day cycle; maximum effect at weeks 3–6; gradual return toward baseline in the final 2 weeks as implant is depleted. This cycle-based timeline has directly informed dosing intervals for the approved product.",
    },
    {
      type: "heading",
      text: "Timeline by Research Application",
    },
    {
      type: "table",
      headers: ["Research Application", "Primary Endpoint", "Onset Window"],
      rows: [
        ["General melanogenesis", "Skin melanin content increase", "Days 3–7"],
        ["EPP photoprotection", "Pain-free sun exposure time", "Days 7–14"],
        ["Vitiligo repigmentation (+ NB-UVB)", "VASI score improvement", "Weeks 6–12"],
        ["Anti-inflammatory (UV model)", "Erythema reduction", "Days 3–7"],
        ["MC1R signaling (in vitro)", "Tyrosinase mRNA upregulation", "Hours 4–8"],
        ["Skin cancer prevention (rodent)", "UV-induced lesion incidence", "Weeks 4–12"],
      ],
    },
    {
      type: "heading",
      text: "Key Takeaways for Study Design",
    },
    {
      type: "list",
      items: [
        "Melanin content endpoint: Plan spectrophotometric measurements at days 7, 14, 21 for full kinetic curve",
        "EPP models: Primary photoprotection endpoints require 2–4 weeks of dosing; peak effects at weeks 3–6",
        "Vitiligo studies: Plan for 12–24 week observation window when combining with phototherapy",
        "Anti-inflammatory endpoints: Acute effects measurable within 24–72 hours of single administration",
        "Depot formulation: 60-day pharmacokinetic window changes experimental design significantly vs. injection protocols",
        "No UV requirement: Unlike psoralen + UVA, melanogenesis occurs without UV trigger — important for photoprotection study controls",
      ],
    },
    {
      type: "disclaimer",
      text: "Melanotan 1 (afamelanotide) is approved in the European Union as Scenesse® for erythropoietic protoporphyria. In most other markets it remains a research compound. All timeline data cited reflects clinical trial publications and preclinical research. Nexphoria supplies Melanotan 1 strictly for in vitro and preclinical research purposes only.",
    },
  ],
};
