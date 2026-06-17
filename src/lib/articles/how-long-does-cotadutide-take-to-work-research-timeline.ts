import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "how-long-does-cotadutide-take-to-work-research-timeline",
  title: "How Long Does Cotadutide Take to Work? Research Timeline Guide",
  description:
    "Cotadutide is AstraZeneca's GLP-1/glucagon dual agonist developed specifically for NASH (MASH), NAFLD, and metabolic liver disease. This research timeline guide covers Phase 2 hepatic and metabolic timeline data, the unique role of glucagon receptor co-agonism in liver fat reduction, and how cotadutide's onset profile compares to GLP-1 monotherapy and tirzepatide.",
  category: "GLP-1 Research",
  readMinutes: 10,
  publishedAt: "2026-06-17",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Cotadutide (MEDI0382) is AstraZeneca's dual GLP-1 receptor/glucagon receptor (GLP-1R/GcgR) agonist, designed with a specific therapeutic focus on nonalcoholic steatohepatitis (NASH, now termed MASH) and metabolic dysfunction-associated steatotic liver disease (MASLD). Unlike most GLP-1 pipeline agents that primarily target obesity and type 2 diabetes, cotadutide was engineered to leverage glucagon receptor co-agonism for direct hepatic fatty acid oxidation effects — making it one of the first GLP-1-class agents where liver-specific mechanisms, rather than just downstream weight loss, drive the primary therapeutic hypothesis. Understanding cotadutide's research timeline requires understanding both the GLP-1R and GcgR components and how they interact on different timescales.",
    },
    {
      type: "callout",
      text: "Cotadutide is an investigational compound. It is not approved by the FDA, EMA, or any regulatory authority for human use. All timeline and efficacy data referenced in this guide are derived from AstraZeneca's published and presented Phase 1 and Phase 2 clinical trial results.",
    },
    {
      type: "heading",
      text: "The GLP-1R / GcgR Dual Mechanism and Its Implications for Timeline",
    },
    {
      type: "paragraph",
      text: "Cotadutide's dual agonism combines two pharmacologically distinct receptor systems that operate on different biological timescales and through different effector pathways:",
    },
    {
      type: "subheading",
      text: "GLP-1 Receptor Agonism (Layer 1: Early Onset)",
    },
    {
      type: "list",
      items: [
        "Mechanism: Glucose-dependent insulinotropic effects, gastric emptying inhibition, hypothalamic satiety signaling",
        "Onset of effects: Days 3–7 (GI symptoms: nausea, appetite suppression); glycemic effects detectable within days of first dose",
        "Timeline contribution: Drives the early weight loss signal and glycemic improvement seen in the first 4–8 weeks of treatment",
        "Hepatic role: Indirect — weight loss and improved insulin sensitivity from GLP-1R activation reduce hepatic de novo lipogenesis over weeks to months",
      ],
    },
    {
      type: "subheading",
      text: "Glucagon Receptor Agonism (Layer 2: Hepatic-Specific, Faster Liver Effect)",
    },
    {
      type: "list",
      items: [
        "Mechanism: Direct hepatic glucagon signaling activates PKA/cAMP pathways in hepatocytes, promoting fatty acid beta-oxidation, mitochondrial uncoupling, and glycogenolysis",
        "Onset of hepatic effects: Liver fat reduction may occur more rapidly with GcgR co-agonism than with GLP-1 monotherapy — measurable changes in hepatic steatosis by MRI-PDFF detectable as early as weeks 4–8",
        "Timeline contribution: Cotadutide's primary differentiation is the direct hepatic fat reduction driven by GcgR activation, which operates partly independent of body weight changes",
        "Critical tradeoff: GcgR agonism raises glucose via hepatic glucose output — cotadutide's GLP-1R component must provide sufficient insulinotropic effect to offset hyperglycemic risk, which is the fundamental pharmacological balance challenge of GLP-1/GcgR dual agonists",
      ],
    },
    {
      type: "heading",
      text: "Phase 2 Data: Hepatic and Metabolic Timeline",
    },
    {
      type: "paragraph",
      text: "AstraZeneca's Phase 2a trial (NCT03235375, published in Lancet 2021) and subsequent Phase 2b PROTON-T2DM trial provide the primary timeline data for cotadutide in NASH/metabolic liver disease. Key findings by timepoint:",
    },
    {
      type: "list",
      items: [
        "Week 4: Statistically significant reductions in liver fat (MRI-PDFF) versus placebo — hepatic fat reduction detectable before meaningful body weight changes in some cohorts, supporting the direct hepatic GcgR mechanism",
        "Week 8: ~10–15% relative reduction in hepatic fat content in therapeutic dose cohorts; concurrent body weight reduction of ~2–3%",
        "Week 12: ~20–25% relative reduction in MRI-PDFF liver fat in 100 µg/day and higher dose groups; body weight −4 to −6% versus baseline",
        "Week 26 (6 months): ~30–35% relative reduction in hepatic fat in highest responders; body weight −6 to −9%; improvements in ALT and AST liver enzymes consistent with reduced hepatic inflammation",
        "Histology endpoint (subset, Phase 2b): In participants with biopsy-confirmed MASH at baseline, NAS (NAFLD Activity Score) improvements ≥2 points in approximately 30–40% of the active arm versus ~10% placebo — histological improvement typically requires ≥24 weeks of treatment",
      ],
    },
    {
      type: "callout",
      text: "Research note: Cotadutide's Phase 2 data demonstrated the fastest liver fat reduction timeline of any GLP-1-class agent studied in NASH at the time of publication — with statistically significant MRI-PDFF changes at week 4, preceding body weight changes. This supports the hypothesis that direct GcgR-mediated hepatic fatty acid oxidation, not just downstream weight-loss effects, contributes meaningfully to the liver fat signal.",
    },
    {
      type: "heading",
      text: "Comparative Timeline: Cotadutide vs. Semaglutide vs. Tirzepatide for Liver Fat",
    },
    {
      type: "table",
      headers: ["Parameter", "Cotadutide (GLP-1R/GcgR)", "Semaglutide (GLP-1R only)", "Tirzepatide (GLP-1R/GIPR)"],
      rows: [
        ["Primary liver mechanism", "Direct GcgR + indirect GLP-1", "Indirect (weight loss + IR)", "Indirect (weight loss + IR, GIPR adipokine effects)"],
        ["Liver fat onset (detectable)", "Week 4", "Week 12–16", "Week 8–12"],
        ["Liver fat at 6 months", "~30–35% relative reduction", "~25–30% relative reduction", "~30–40% relative reduction"],
        ["Histologic improvement (NASH)", "~30–40% NAS responders at 24 weeks", "~40% NAS responders at 72 weeks (ESSENCE trial)", "Pending Phase 3 MASH data"],
        ["Weight loss at 6 months", "~6–9%", "~10–12% (2.4 mg)", "~15–18% (15 mg)"],
        ["Development status (2026)", "Phase 2 completed; AZ divested in 2023", "Phase 3 MASH (ESSENCE) ongoing", "Phase 3 MASH ongoing"],
      ],
    },
    {
      type: "heading",
      text: "Week-by-Week Research Timeline: What to Expect",
    },
    {
      type: "subheading",
      text: "Week 1–2: GLP-1 Component Activation",
    },
    {
      type: "paragraph",
      text: "In the first two weeks, cotadutide's GLP-1R agonist activity dominates the clinical picture. Subjects in Phase 2 trials experienced nausea (the most common adverse event, occurring in ~40–60% of participants during dose escalation), reduced appetite, and mild gastric emptying inhibition. Glycemic markers (fasting glucose, postprandial glucose) begin to improve within days in subjects with elevated baseline glucose. Body weight changes in week 1–2 are modest (0.5–1%) and predominantly reflect reduced caloric intake and mild fluid shifts from glycogen depletion.",
    },
    {
      type: "subheading",
      text: "Week 3–8: GcgR Hepatic Activation Builds",
    },
    {
      type: "paragraph",
      text: "By week 3–4, measurable hepatic fat reduction is detectable by MRI-PDFF in Phase 2 participants. The GcgR-mediated hepatic fatty acid oxidation signal compounds over this period as steady-state plasma concentrations are established (cotadutide's t½ is approximately 70–80 hours, with steady-state reached by ~day 14–21 of daily SC dosing). ALT begins to decline in week 4–8 in subjects with elevated baseline levels, consistent with reduced hepatic lipotoxic stress. Body weight reduction of 2–4% is typically observed by week 8.",
    },
    {
      type: "subheading",
      text: "Week 8–24: Hepatic and Metabolic Consolidation",
    },
    {
      type: "paragraph",
      text: "From week 8 to week 24, both the GLP-1R-driven weight loss signal and the GcgR-driven hepatic signal mature. MRI-PDFF liver fat continues declining, with the steepest slope in weeks 4–12 and a gradual plateau thereafter in most subjects. Histological improvements in MASH require sufficient time (≥16–24 weeks) for hepatocyte turnover, inflammatory resolution, and fibrosis regression — the biological processes underlying NAS score improvement cannot be accelerated beyond the pace of liver cell renewal, irrespective of how rapidly fat content decreases.",
    },
    {
      type: "heading",
      text: "Pharmacokinetic Parameters Relevant to Timeline",
    },
    {
      type: "list",
      items: [
        "Route: Subcutaneous injection (daily dosing in Phase 2)",
        "Half-life: ~70–80 hours (~ 3 days) — intermediate between short-acting GLP-1 agonists and weekly semaglutide",
        "Tmax: ~12–24 hours post SC injection",
        "Steady-state: Reached at approximately 14–21 days of daily dosing",
        "Dose tested in Phase 2b: Up to 100 µg/day SC; dose escalation protocol over 4–6 weeks to improve GI tolerability",
        "GLP-1R:GcgR activation ratio: Cotadutide is designed with approximately equal potency at both receptors at therapeutic doses — the balance is critical to avoid net hyperglycemia from unopposed GcgR activation",
      ],
    },
    {
      type: "heading",
      text: "Development Status and Research Implications (2026)",
    },
    {
      type: "paragraph",
      text: "AstraZeneca divested cotadutide to Inversago Pharma in 2023, citing portfolio prioritization. Inversago subsequently conducted additional Phase 2 work. As of mid-2026, cotadutide has not advanced to Phase 3 and is not commercially available. However, its scientific legacy is significant for the MASH research field:",
    },
    {
      type: "list",
      items: [
        "It provided the first human Phase 2 evidence that GLP-1/GcgR dual agonism can reduce hepatic fat faster than GLP-1 monotherapy, partly independent of body weight reduction",
        "The cotadutide program established the MRI-PDFF endpoint as a sensitive and reproducible early-phase biomarker for liver fat changes in GLP-1-class compound research",
        "It informed the design of subsequent GLP-1/GcgR programs including survodutide (Roche/Zealand), which has advanced into Phase 3 for MASH",
        "The GcgR co-agonism-induced hepatic changes at week 4 — before significant weight loss — remain the strongest human evidence for direct glucagon receptor mediation of liver fat reduction in MASLD",
      ],
    },
    {
      type: "heading",
      text: "Sourcing Note for Researchers",
    },
    {
      type: "paragraph",
      text: "Cotadutide (MEDI0382) is a peptide compound that has been made available through specialized research peptide suppliers. Researchers using cotadutide in preclinical models should verify peptide identity and purity (HPLC ≥98%, MS confirmation) and note that the biological activity profile — particularly the GLP-1R:GcgR activation ratio — should be validated in cellular assays before use in complex in vivo metabolic models. Cold-chain shipping (2–8°C transit, −20°C storage) is required due to the peptide nature of the compound.",
    },
    {
      type: "disclaimer",
      text: "This article is written for licensed researchers and is intended for informational and educational purposes only. Cotadutide is an investigational compound that has not been approved by any regulatory authority for human therapeutic use. Any research use of cotadutide must comply with applicable institutional and regulatory requirements.",
    },
  ],
};
