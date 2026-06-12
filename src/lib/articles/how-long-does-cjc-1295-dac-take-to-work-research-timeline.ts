import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "how-long-does-cjc-1295-dac-take-to-work-research-timeline",
  title: "How Long Does CJC-1295 DAC Take to Work? Research Timeline Guide",
  description: "A research-based timeline for CJC-1295 with DAC (Drug Affinity Complex), covering the unique pharmacokinetics of its albumin-binding mechanism, IGF-1 trajectory, and body composition endpoint windows.",
  category: "Research Fundamentals",
  readMinutes: 10,
  publishedAt: "2026-06-12",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "CJC-1295 with DAC (Drug Affinity Complex) is a modified GHRH analog that incorporates a maleimidoproprionic acid (MPA) lysine modification enabling covalent binding to endogenous albumin. This albumin-binding mechanism extends its plasma half-life from the ~30-minute window of CJC-1295 No-DAC to an extraordinary 6–8 days — fundamentally altering both its pharmacokinetic profile and the research timelines applicable to it.",
    },
    {
      type: "paragraph",
      text: "For researchers studying GH axis restoration, somatopause biology, or sustained GH secretagogue protocols, CJC-1295 DAC's extended half-life creates distinct advantages and challenges versus pulsatile GHRH analogs. Understanding its unique temporal profile is essential for study design, biomarker selection, and endpoint timing.",
    },
    {
      type: "callout",
      text: "Important: All information presented here is for research and educational purposes only. CJC-1295 with DAC is a research peptide. Research use should comply with applicable institutional and regulatory frameworks.",
    },
    {
      type: "heading",
      text: "The DAC Mechanism: Why Timeline Differs from CJC-1295 No-DAC",
    },
    {
      type: "paragraph",
      text: "Standard GHRH analogs (Sermorelin, CJC-1295 No-DAC) are cleared from plasma within minutes to hours, producing pulsatile GH stimulation with each dose. CJC-1295 DAC's albumin-binding moiety allows the peptide to hitchhike on circulating albumin — creating a depot that slowly releases active GHRH peptide over days. The result is a sustained, near-continuous GHRH receptor stimulation rather than discrete pulses.",
    },
    {
      type: "subheading",
      text: "Physiological vs. Pharmacological GH Stimulation",
    },
    {
      type: "paragraph",
      text: "The distinction has meaningful consequences for study design. Endogenous GH secretion is pulsatile — large nocturnal pulses separated by low-GH troughs. This pulsatility appears to be important for physiological receptor sensitivity and downstream IGF-1 regulation. CJC-1295 DAC creates a 'GH bleed' pattern — near-constant low-level GHRH receptor stimulation producing sustained (non-pulsatile) elevated GH. Published Phase I/II data from Teichman et al. (2006, Journal of Clinical Endocrinology & Metabolism 91:799–805) documented this 'GH bleed' profile and its IGF-1 consequences.",
    },
    {
      type: "heading",
      text: "Acute and Early Phase: Days 1–7 (First Dose Kinetics)",
    },
    {
      type: "paragraph",
      text: "Following a single subcutaneous CJC-1295 DAC injection, serum GH and IGF-1 begin rising within the first 24 hours as albumin-bound peptide gradually activates pituitary GHRH receptors. Unlike Sermorelin's sharp 30-minute GH spike, CJC-1295 DAC's GH elevation is gradual and sustained.",
    },
    {
      type: "subheading",
      text: "GH Elevation Kinetics After First Injection",
    },
    {
      type: "paragraph",
      text: "In the Teichman et al. Phase I study (healthy adults, single-dose pharmacokinetics), a single CJC-1295 DAC injection produced a mean GH increase above baseline that persisted for 6 days. GH Area Under the Curve (AUC) over the first 7 days post-injection showed 2–10-fold increases depending on dose (30–60 mcg/kg). This single-injection GH elevation profile is fundamentally unlike any short-acting GHRH analog.",
    },
    {
      type: "subheading",
      text: "IGF-1 Trajectory: First Week",
    },
    {
      type: "paragraph",
      text: "Teichman et al. documented that a single CJC-1295 DAC injection produced statistically significant IGF-1 elevation above baseline within 3–4 days, with peak IGF-1 occurring at approximately Day 4–6 post-injection. The magnitude of IGF-1 elevation correlated with dose. This means CJC-1295 DAC achieves measurable IGF-1 elevation faster than once-daily pulsatile Sermorelin (which typically shows measurable IGF-1 elevation at 2–3 weeks of daily dosing).",
    },
    {
      type: "list",
      items: [
        "GH elevation onset: Within 24 hours of injection (gradual rise, not sharp spike)",
        "Peak GH elevation: Day 2–4 post-injection (single dose)",
        "IGF-1 detectable elevation: Day 3–4 post-injection (single dose)",
        "Peak IGF-1: Day 4–6 post-injection (single dose)",
        "GH/IGF-1 return toward baseline: Day 7–10+ post-injection (dose-dependent)",
      ],
    },
    {
      type: "heading",
      text: "Steady-State Window: Weeks 2–6",
    },
    {
      type: "paragraph",
      text: "With once or twice-weekly CJC-1295 DAC administration, GH and IGF-1 reach steady-state elevation by Week 2–3. This represents the primary research window for most GH axis endpoints — lean mass accretion, fat mobilization, and downstream anabolic/metabolic effects.",
    },
    {
      type: "subheading",
      text: "IGF-1 Steady State",
    },
    {
      type: "paragraph",
      text: "The Teichman et al. multi-dose Phase II arm documented that once-weekly CJC-1295 DAC administration maintained IGF-1 at 1.5–3x above baseline during steady-state dosing. IGF-1 stayed consistently elevated above pre-dose levels throughout dosing intervals, confirming that once-weekly injection is sufficient to maintain suprabasal IGF-1 in most research subjects.",
    },
    {
      type: "subheading",
      text: "Body Composition Endpoints: Weeks 4–12",
    },
    {
      type: "paragraph",
      text: "Lean body mass improvement and fat mass reduction from elevated IGF-1 and GH typically emerge at 4–6 weeks of steady-state CJC-1295 DAC dosing. The timeline is similar to or slightly faster than pulsatile Sermorelin protocols because CJC-1295 DAC achieves higher tonic IGF-1 elevation — more similar to sustained GH infusion studies than to physiological pulsatile GH replacement.",
    },
    {
      type: "table",
      headers: ["Endpoint", "Earliest Signal", "Meaningful Change", "Steady State / Plateau"],
      rows: [
        ["GH elevation", "24 hrs post-first injection", "Day 2–4 (single dose)", "Week 2 with once-weekly dosing"],
        ["IGF-1 elevation", "Day 3–4 post-first injection", "Day 4–6 (single dose)", "Week 2–3 with once-weekly dosing"],
        ["Sleep quality (subjective)", "Week 1–2", "Week 2–4", "Maintained with steady state"],
        ["Energy/vitality markers", "Week 2–3", "Week 3–6", "Week 6–10"],
        ["Body fat reduction", "Week 4–6", "Week 6–10", "Week 10–20"],
        ["Lean mass increase", "Week 4–6", "Week 6–12", "Week 12–24"],
        ["Skin/collagen quality", "Week 6–8", "Week 10–16", "Week 16–28"],
        ["Bone formation markers (P1NP)", "Week 4–6", "Week 8–12", "Month 4–6"],
        ["Bone mineral density (DEXA)", "Month 3–4 (early markers precede)", "Month 6–9", "Month 9–18"],
      ],
    },
    {
      type: "heading",
      text: "Long-Term Window: Months 3–6+",
    },
    {
      type: "paragraph",
      text: "Extended CJC-1295 DAC research — 3 to 6 months — captures the full cumulative GH axis restoration endpoint suite. This window is particularly relevant for bone mineral density, immune function, and skin architecture endpoints that require sustained IGF-1 elevation over months rather than weeks.",
    },
    {
      type: "subheading",
      text: "A Critical Concern: Tonic vs. Pulsatile GH and Receptor Sensitivity",
    },
    {
      type: "paragraph",
      text: "The sustained non-pulsatile GH stimulation from CJC-1295 DAC raises long-term receptor sensitivity concerns not present with short-acting GHRH analogs. Prolonged receptor activation can induce GHRH receptor downregulation — reducing pituitary responsiveness. Published evidence on this in CJC-1295 DAC protocols is limited, but the pharmacological parallel to desensitization effects documented with continuous GHRH infusion in clinical studies warrants cycling strategies in long-term research designs.",
    },
    {
      type: "subheading",
      text: "Recommended Long-Term Cycling Protocol",
    },
    {
      type: "paragraph",
      text: "Most preclinical and observational research designs using CJC-1295 DAC employ 8–12 week active phases followed by 4–8 week rest periods. This cycling approach is intended to preserve GHRH receptor sensitivity and maintain response magnitude across extended study timelines. IGF-1 monitoring at 4-week intervals allows identification of plateau or decline in response that may indicate receptor adaptation.",
    },
    {
      type: "heading",
      text: "CJC-1295 DAC vs. CJC-1295 No-DAC vs. Sermorelin: Timeline Comparison",
    },
    {
      type: "paragraph",
      text: "These three GHRH analogs occupy different points on the pulsatility-continuity spectrum, with direct implications for timeline:",
    },
    {
      type: "list",
      items: [
        "Sermorelin (GHRH 1-29): Half-life ~10–20 min; requires twice-daily or pre-sleep daily dosing; IGF-1 elevation detectable at 2–4 weeks of daily dosing; most physiologically pulsatile",
        "CJC-1295 No-DAC: Half-life ~30–45 min; daily or twice-daily dosing typical; produces somewhat larger and more sustained GH pulse than Sermorelin; IGF-1 elevation detectable at 1–3 weeks",
        "CJC-1295 DAC: Half-life 6–8 days; once or twice-weekly dosing sufficient; IGF-1 detectable elevation from single dose within 3–4 days; fastest to measurable IGF-1 change; least physiologically pulsatile",
      ],
    },
    {
      type: "paragraph",
      text: "For timeline purposes: CJC-1295 DAC achieves measurable IGF-1 elevation significantly faster than daily pulsatile GHRH analogs when measured from first injection. However, this comes with reduced physiological pulsatility and theoretical long-term receptor sensitivity trade-offs.",
    },
    {
      type: "heading",
      text: "Key Variables Affecting CJC-1295 DAC Timeline",
    },
    {
      type: "list",
      items: [
        "Baseline IGF-1/GH status: GH-deficient or aged subjects show larger relative response vs. young subjects with normal GH axis",
        "Dose: Teichman et al. tested 30–60 mcg/kg; clinical response is non-linear at higher doses and plateau-dependent on receptor capacity",
        "Dosing interval: Once-weekly maintains IGF-1 steady-state; some protocols use twice-weekly for faster attainment of higher IGF-1 plateau",
        "Somatostatin tone: Elevated somatostatin (stress, hyperglycemia, obesity) reduces GHRH receptor responsiveness; managing somatostatin tone improves CJC-1295 DAC response",
        "Combination with GHS: Adding Ipamorelin or GHRP-2 provides synergistic GH stimulation via independent receptor (GHS-R1a); amplifies GH pulse magnitude and potentially accelerates body composition endpoints",
        "Albumin levels: DAC mechanism relies on albumin binding for extended half-life; hypoalbuminemia would reduce half-life and alter pharmacokinetics",
        "Fasted state: Less critical for CJC-1295 DAC vs. pulsatile analogs due to sustained delivery mechanism",
      ],
    },
    {
      type: "heading",
      text: "Recommended Biomarkers for CJC-1295 DAC Research Protocols",
    },
    {
      type: "list",
      items: [
        "IGF-1 (serum): Primary efficacy endpoint; measure at baseline, Day 4–6 post-first injection (acute confirmation), then every 4 weeks during steady-state",
        "GH (serum): Best measured at Day 2–3 post-injection for peak documentation; random GH is unreliable during DAC steady-state due to sustained elevation",
        "IGFBP-3: Rises proportionally with IGF-1; useful confirmation biomarker",
        "DEXA body composition: Baseline, Week 6–8, Week 12, and end of protocol",
        "Fasting glucose/insulin: GH counter-regulatory insulin effects warrant monitoring, particularly in metabolically compromised models",
        "Bone formation markers (P1NP, osteocalcin): For bone endpoint protocols; measure at 8-week intervals",
        "GHRH receptor sensitivity (GH stimulation test): If assessing receptor adaptation in long-term protocols, test responsiveness to exogenous GHRH challenge at 8–12 week intervals",
      ],
    },
    {
      type: "heading",
      text: "Where to Source CJC-1295 DAC for Research",
    },
    {
      type: "paragraph",
      text: "Research-grade CJC-1295 with DAC requires HPLC purity verification (≥98%) and mass spectrometry confirmation of both the GHRH analog sequence and the DAC modification. The maleimidoproprionic acid moiety is critical to albumin binding and extended half-life — suppliers providing CJC-1295 without verifying the DAC modification intact may deliver a compound with short-acting kinetics that does not replicate published DAC pharmacology.",
    },
    {
      type: "paragraph",
      text: "Nexphoria provides HPLC-verified, MS-confirmed CJC-1295 with DAC modification confirmed in batch-specific CoA documentation, supporting GH axis research requiring validated pharmacokinetics from compound selection through endpoint measurement.",
    },
    {
      type: "disclaimer",
      text: "This article is for research and educational purposes only. CJC-1295 with DAC is a research peptide not approved by the FDA for human therapeutic use. Nothing here constitutes medical advice. All research use should comply with applicable institutional, state, and federal regulations.",
    },
  ],
};
