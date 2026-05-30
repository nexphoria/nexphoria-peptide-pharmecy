import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "bpc-157-tb-500-how-to-dosing-protocol-guide",
  title: "How to Use BPC-157 and TB-500 Together: Dosing, Timing, and Protocol Design",
  description:
    "A step-by-step research protocol guide for the BPC-157 + TB-500 stack — covering published rodent doses, reconstitution walkthrough, timing rationale, injection sites, weekly schedule template, 3-month cycle design, and biomarker tracking.",
  category: "Research Fundamentals",
  readMinutes: 9,
  publishedAt: "2026-05-29",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "BPC-157 and TB-500 are the two most-studied tissue-repair peptides in preclinical literature, and they are almost always used in combination in well-designed recovery studies. The reason is mechanistic complementarity: BPC-157 operates primarily through the nitric oxide (NO/eNOS) and VEGFR2/FAK angiogenic pathway, while TB-500 (Thymosin Beta-4) sequesters G-actin and activates the ILK/Akt/NF-κB pathway to reduce inflammation and mobilize progenitor cells. These pathways do not compete — they address different phases of tissue repair at different times.",
    },
    {
      type: "paragraph",
      text: "This guide covers how to use both compounds in a structured 3-month research protocol: the published dose data that informs practical amounts, how to prepare each vial using bacteriostatic water, timing and injection site rotation, a weekly schedule template, and the biomarkers worth tracking.",
    },
    {
      type: "callout",
      text: "Research Use Only. BPC-157 and TB-500 are for in vitro and preclinical in vivo research purposes only. This guide references doses from published rodent studies. Neither compound is approved for human use.",
    },
    {
      type: "heading",
      text: "Step 1: Understand the Published Dose Data",
    },
    {
      type: "paragraph",
      text: "Before preparing any solution, understanding what doses appear in published research is critical. Using amounts far outside the published range makes your results non-comparable to the literature.",
    },
    {
      type: "subheading",
      text: "BPC-157 Published Rodent Doses",
    },
    {
      type: "paragraph",
      text: "Sikiric et al. published the most frequently cited BPC-157 rodent protocols. The standard intraperitoneal (IP) dose range is 10–100 µg/kg body weight, with the 10 µg/kg once-daily dose appearing most consistently across tendon, ligament, and gastrointestinal studies. In a 250 g rat, this corresponds to approximately 2.5 µg absolute. For subcutaneous (SC) administration, some protocols use slightly higher doses (100 µg/kg) to account for variable bioavailability.",
    },
    {
      type: "subheading",
      text: "TB-500 (Thymosin Beta-4) Published Rodent Doses",
    },
    {
      type: "paragraph",
      text: "Thymosin Beta-4 (Tβ4) studies by Bock-Marquette and colleagues used 150–600 µg/kg SC in mice, typically administered 2–3 times per week rather than daily. The lower end of this range (150 µg/kg) was effective in the cardiac injury models; the 500–600 µg/kg range was used in Ehrlich's wound healing models and musculoskeletal studies. TB-500's longer biological half-life (actin-bound depot) means daily administration is generally not necessary.",
    },
    {
      type: "table",
      headers: ["Compound", "Standard Dose", "Route", "Frequency", "Reference"],
      rows: [
        ["BPC-157", "10 µg/kg", "IP / SC", "Once daily", "Sikiric et al. 2003–2018"],
        ["BPC-157 (high)", "100 µg/kg", "SC", "Once daily", "Sikiric et al. (GI models)"],
        ["TB-500 (low)", "150 µg/kg", "SC", "2–3× / week", "Bock-Marquette 2004"],
        ["TB-500 (standard)", "500 µg/kg", "SC", "2–3× / week", "Ehrlich & Bhatt 2010"],
        ["TB-500 (high)", "600 µg/kg", "SC / IM", "2× / week", "Musculoskeletal models"],
      ],
    },
    {
      type: "heading",
      text: "Step 2: Reconstitute Each Vial",
    },
    {
      type: "paragraph",
      text: "Both BPC-157 and TB-500 are lyophilized (freeze-dried) peptides that require reconstitution with bacteriostatic water (BAC water, 0.9% benzyl alcohol in sterile water for injection) before use. Do not use plain sterile water for multi-dose vials — benzyl alcohol is the antimicrobial preservative that prevents bacterial growth between uses.",
    },
    {
      type: "subheading",
      text: "Reconstitution Walkthrough (Using the Calculator)",
    },
    {
      type: "list",
      items: [
        "Navigate to the Nexphoria Reconstitution Calculator at /tools/reconstitution-calculator",
        "For a 5 mg BPC-157 vial: enter 5 mg vial size, desired concentration of 500 µg/mL → calculator outputs 10 mL BAC water needed",
        "For a 10 mg TB-500 vial: enter 10 mg vial size, desired concentration of 1,000 µg/mL → calculator outputs 10 mL BAC water needed",
        "Wipe the rubber stopper of the peptide vial with an alcohol swab and allow to dry",
        "Inject BAC water slowly against the inner wall of the vial — never shoot directly onto the lyophilized cake",
        "Gently swirl (never vortex) until the cake dissolves completely — BPC-157 typically dissolves in 30–60 seconds; TB-500 may take 1–2 minutes",
        "Allow the solution to equilibrate for 2–3 minutes before drawing doses",
      ],
    },
    {
      type: "callout",
      text: "Volume Tip: For rodent studies, many researchers prefer a 1 mg/mL (1,000 µg/mL) concentration for TB-500 because it minimizes injection volume per dose while keeping the vial multi-use. For BPC-157, 500 µg/mL allows precise dosing at the 10 µg/kg range without requiring sub-µL syringes.",
    },
    {
      type: "heading",
      text: "Step 3: Understand the Timing Rationale",
    },
    {
      type: "paragraph",
      text: "The timing difference between BPC-157 and TB-500 is not arbitrary — it reflects their different roles in the repair cascade.",
    },
    {
      type: "subheading",
      text: "Why Daily vs 2–3×/Week?",
    },
    {
      type: "paragraph",
      text: "BPC-157 appears to have a relatively short plasma half-life (estimated 1–4 hours in rodents), which supports daily or twice-daily administration to maintain tissue-level concentrations. The compound exerts its primary effects during active tissue remodeling via continuous eNOS upregulation and VEGFR2 signaling.",
    },
    {
      type: "paragraph",
      text: "TB-500 (Tβ4) binds G-actin in a 1:1 complex that acts as a tissue-level depot, extending its biological activity well beyond its plasma half-life. Published protocols consistently use 2–3× weekly dosing with equivalent or superior outcomes to daily administration in rodent models. Overdosing frequency with TB-500 does not improve outcomes and increases cost.",
    },
    {
      type: "subheading",
      text: "Phase-Matched Protocol Design",
    },
    {
      type: "table",
      headers: ["Repair Phase", "Duration", "Primary Driver", "BPC-157 Role", "TB-500 Role"],
      rows: [
        ["Inflammatory", "Days 1–5", "Macrophage/neutrophil response", "NO/eNOS anti-inflammatory support", "NF-κB suppression, actin mobilization"],
        ["Proliferative", "Days 5–21", "Fibroblast/angiogenesis", "VEGFR2 angiogenesis, FAK cell migration", "ILK/Akt progenitor cell recruitment"],
        ["Remodeling", "Weeks 3–12", "Collagen crosslinking/maturation", "Continued eNOS support, tendon remodeling", "Reduced; maintenance doses may suffice"],
      ],
    },
    {
      type: "heading",
      text: "Step 4: Injection Site Rotation",
    },
    {
      type: "paragraph",
      text: "When running both compounds simultaneously, injection site rotation becomes important — particularly in small rodent subjects where abdominal SC sites are limited. Published rodent protocols typically use anterior and posterior SC abdominal quadrants in rotation.",
    },
    {
      type: "list",
      items: [
        "BPC-157 SC sites (rodent): Rotate anterior-left, anterior-right, posterior-left, posterior-right abdominal SC quadrants on a 4-site cycle",
        "TB-500 SC sites (rodent): Use dorsal/neck scruff SC sites for TB-500 (commonly used in Bock-Marquette protocols) to separate from BPC-157 injection zones",
        "Allow 48+ hours before re-using any individual injection site",
        "For IP administration of BPC-157: lower-left abdominal quadrant is standard; tilt animal head-down to move viscera",
        "Inspect injection sites at each administration for any nodule formation or inflammation indicating poor technique",
      ],
    },
    {
      type: "paragraph",
      text: "Visit the Nexphoria Injection Site Diagram tool at /tools/injection-site-diagram for visual guides to both SC abdominal and SC dorsal injection techniques.",
    },
    {
      type: "heading",
      text: "Step 5: Weekly Schedule Template (3-Month Protocol)",
    },
    {
      type: "paragraph",
      text: "The following schedule is derived from published multi-compound rodent protocols and represents a practical integration of both compounds over a 12-week (3-month) research cycle.",
    },
    {
      type: "table",
      headers: ["Day", "BPC-157 (10 µg/kg SC)", "TB-500 (500 µg/kg SC)", "Notes"],
      rows: [
        ["Monday", "✓ Inject", "✓ Inject", "Week start — log weights, note observations"],
        ["Tuesday", "✓ Inject", "—", "BPC-157 only"],
        ["Wednesday", "✓ Inject", "✓ Inject", "Midweek TB-500 dose"],
        ["Thursday", "✓ Inject", "—", "BPC-157 only"],
        ["Friday", "✓ Inject", "✓ Inject", "End-of-week TB-500 dose"],
        ["Saturday", "✓ Inject", "—", "BPC-157 only"],
        ["Sunday", "—", "—", "Rest day (optional BPC-157 if 7-day protocol)"],
      ],
    },
    {
      type: "paragraph",
      text: "This yields approximately 6 BPC-157 doses/week and 3 TB-500 doses/week, consistent with published study designs. Adjust BPC-157 to 7-day daily if your research question involves GI mucosal models (where daily dosing has the most evidence).",
    },
    {
      type: "subheading",
      text: "Phase Adjustments",
    },
    {
      type: "list",
      items: [
        "Weeks 1–4 (loading/acute): Use full doses of both compounds — this covers the inflammatory and early proliferative phases",
        "Weeks 5–8 (active remodeling): Continue BPC-157 daily; optionally reduce TB-500 to 2× / week if acute inflammation has resolved",
        "Weeks 9–12 (late remodeling): Some protocols reduce BPC-157 to 5 days/week at the original dose; others maintain daily. TB-500 can continue at 2× / week",
        "Washout (post-cycle): Allow 4-week minimum washout (≥10× half-life) before any repeat cycle or crossover design",
      ],
    },
    {
      type: "heading",
      text: "Step 6: Biomarkers to Track",
    },
    {
      type: "paragraph",
      text: "Biomarker selection should be driven by your research endpoint, but several panels are broadly applicable across tissue-repair BPC-157 + TB-500 studies.",
    },
    {
      type: "table",
      headers: ["Biomarker", "What It Measures", "Timing", "BPC-157 Effect", "TB-500 Effect"],
      rows: [
        ["CBC (WBC, neutrophils, lymphocytes)", "Immune/inflammatory status", "Baseline, weeks 4, 8, 12", "Mild lymphocyte modulation", "NF-κB — reduced neutrophil infiltrate"],
        ["CMP (ALT, AST, BUN, creatinine)", "Hepatic and renal safety", "Baseline, weeks 6, 12", "Gastroprotective — may lower ALT in ulcer models", "Generally neutral"],
        ["IGF-1", "Growth factor signaling", "Baseline, weeks 6, 12", "Mild indirect elevation via VEGF crosstalk", "Modest elevation via ILK/PI3K axis"],
        ["VEGF (serum or tissue)", "Angiogenesis marker", "Baseline, endpoint necropsy", "Primary inducer via VEGFR2", "Secondary contributor via ILK/Akt"],
        ["Collagen content (tissue assay)", "Repair quality marker", "Necropsy endpoint", "Increases collagen organization", "Increases collagen crosslinking"],
        ["Inflammatory cytokines (IL-6, TNF-α)", "Acute phase response", "Baseline, weeks 2, 4, 8", "Reduces IL-6/TNF-α", "Reduces NF-κB-driven cytokines"],
      ],
    },
    {
      type: "paragraph",
      text: "Use the Nexphoria Biomarker Reference tool at /tools/biomarker-reference for normal ranges, optimal testing frequencies, and compound-specific effects across 32 biomarkers.",
    },
    {
      type: "heading",
      text: "Step 7: Storage and Vial Management",
    },
    {
      type: "list",
      items: [
        "Lyophilized (unreconstituted) BPC-157 and TB-500: Store at −20°C, protected from light and moisture. Shelf life: 18–24 months lyophilized",
        "Reconstituted vials: Store at 2–8°C (refrigerator) in the dark. Use within 28 days of reconstitution",
        "Never freeze a reconstituted vial — ice crystal formation causes aggregation and peptide bond stress",
        "Label each reconstituted vial with: compound name, concentration (µg/mL), reconstitution date, expiry date (28 days post-reconstitution)",
        "Use the Nexphoria Vial Inventory Tracker at /tools/vial-inventory-tracker to track reconstitution dates, expiry, and remaining vials",
      ],
    },
    {
      type: "heading",
      text: "Step 8: Research Design Considerations",
    },
    {
      type: "list",
      items: [
        "Include a vehicle control arm (BAC water only) in addition to individual compound arms and the combination arm — a full factorial 2×2 design (BPC-157±, TB-500±) with 4 groups is ideal for attribution",
        "Standardize injury timing relative to compound administration — most published protocols begin dosing on the day of injury induction (Day 0) or Day 1 post-injury",
        "Use the same reconstitution concentration across all groups — preparing BPC-157 at different concentrations across groups introduces injection volume as a confound",
        "Blind the study — have an assistant prepare and label syringes so the administering researcher is unaware of group assignment",
        "Include both sexes if possible — BPC-157 and TB-500 both show sex-linked differences in GI and cardiac models respectively",
        "Document injection sites and technique systematically — site-related variability is a common source of noise in rodent SC studies",
      ],
    },
    {
      type: "heading",
      text: "Building Your Protocol",
    },
    {
      type: "paragraph",
      text: "Once you understand the doses, timing, and design principles above, the fastest way to generate a complete printable protocol is through the Nexphoria Protocol Template Generator at /tools/protocol-template-generator. Select BPC-157 and TB-500, enter your doses and cycle length, and the tool generates a formatted study protocol with reconstitution notes, weekly schedule, biomarker tracking section, and a full RUO disclaimer.",
    },
    {
      type: "paragraph",
      text: "For weekly injection scheduling in detail, use the Dosing Frequency Planner at /tools/dosing-frequency-planner to auto-distribute injections across days of the week with per-day dose totals. To track costs across cycle lengths, the Cost Per Dose Calculator at /tools/cost-per-dose-calculator outputs weekly, monthly, and vial-duration estimates for both compounds.",
    },
    {
      type: "disclaimer",
      text: "Research Use Only. BPC-157 (Body Protection Compound-157) and TB-500 (Thymosin Beta-4 fragment) are sold for research purposes only. They are not approved by the FDA for human use. All dosing information in this article references published preclinical rodent data and is intended for study design reference only.",
    },
  ],
};
