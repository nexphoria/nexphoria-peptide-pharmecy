import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "twelve-week-recomposition-stack-literature-protocol",
  title: "The 12-Week Recomposition Stack: A Literature-Grounded Protocol",
  description:
    "A structured 12-week research protocol combining GH-axis secretagogues, tissue repair peptides, and metabolic modulators — each selection grounded in preclinical literature on body composition endpoints.",
  category: "Protocols",
  readMinutes: 14,
  publishedAt: "2026-07-27",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Body composition research — the study of simultaneous fat reduction and lean mass maintenance or accrual — is one of the most practically significant areas of peptide research. The mechanisms involved span multiple biological systems: GH secretion and downstream IGF-1, lipolysis signaling, tissue repair and protein synthesis, and metabolic rate regulation. Designing a protocol that engages these systems coherently requires selecting compounds with complementary mechanisms and compatible timing.",
    },
    {
      type: "paragraph",
      text: "This protocol is designed for preclinical research contexts. It draws on published literature examining each compound's effects on body composition endpoints in animal models, and is structured to minimize interference between compounds while targeting the biological pathways most relevant to recomposition outcomes.",
    },
    {
      type: "callout",
      text: "This protocol is intended for research use only. All compounds referenced are research peptides not approved for human use. This is not medical advice.",
    },
    {
      type: "heading",
      text: "Protocol Rationale: Why These Compounds",
    },
    {
      type: "paragraph",
      text: "Recomposition research requires addressing three interconnected challenges: stimulating GH/IGF-1-mediated anabolic signaling, supporting lipolysis without compromising lean mass, and maintaining tissue repair capacity during caloric or metabolic stress. No single peptide addresses all three simultaneously with strong preclinical evidence. The protocol below combines compounds with distinct, non-overlapping mechanisms.",
    },
    {
      type: "heading",
      text: "Core Stack Components",
    },
    {
      type: "subheading",
      text: "CJC-1295 (No DAC) + Ipamorelin — GH Axis Stimulation",
    },
    {
      type: "paragraph",
      text: "CJC-1295 without DAC is a GHRH analog with a half-life of approximately 30 minutes, producing a GH pulse that mimics physiological patterns. Ipamorelin is a selective GHSR agonist that amplifies GH release with minimal effect on cortisol or prolactin — a selectivity profile that distinguishes it from earlier GHRPs.",
    },
    {
      type: "paragraph",
      text: "The combination targets both arms of GH regulation simultaneously: GHRH (stimulatory) and ghrelin receptor (amplifying). Research in rodent models has documented synergistic GH release when GHRH analogs and GHRPs are co-administered, with downstream effects on IGF-1 production, lean mass, and lipolysis.",
    },
    {
      type: "list",
      items: [
        "CJC-1295 (no DAC): 100 mcg per administration, 2x daily (morning and pre-sleep)",
        "Ipamorelin: 100-200 mcg per administration, co-administered with CJC-1295",
        "Timing: 45-60 minutes post-prandial or fasted to avoid insulin-mediated GH blunting",
        "Frequency: 5 days on, 2 days off to reduce receptor desensitization risk",
      ],
    },
    {
      type: "subheading",
      text: "AOD-9604 — Lipolytic Targeting",
    },
    {
      type: "paragraph",
      text: "AOD-9604 is a fragment of the GH molecule (residues 176-191) that retains GH's lipolytic properties but does not activate IGF-1 production or bind the GH receptor responsible for growth-promoting effects. This selective lipolytic activity was characterized in early studies at Monash University, where the fragment was found to stimulate fat metabolism in obese animal models without the hyperglycemic effects associated with full-length GH.",
    },
    {
      type: "paragraph",
      text: "Its inclusion in a recomposition protocol is mechanistically distinct from the CJC/ipamorelin component — it acts through adipocyte beta-3 adrenergic-like signaling rather than the GH/IGF-1 axis, potentially allowing additive effects on body composition without receptor competition.",
    },
    {
      type: "list",
      items: [
        "AOD-9604: 300 mcg per administration, once daily in the morning",
        "Timing: fasted administration (pre-exercise or morning) to align with peak lipolytic responsiveness",
        "Note: AOD-9604 does not affect glucose metabolism in published studies, distinguishing it from full GH",
      ],
    },
    {
      type: "subheading",
      text: "BPC-157 — Tissue Repair and GI Protection",
    },
    {
      type: "paragraph",
      text: "During caloric restriction or intensive exercise protocols, tissue repair demand increases and gastrointestinal stress is common. BPC-157's preclinical profile is most consistent with cytoprotective and tissue repair functions: upregulation of angiogenesis via VEGF, modulation of the FAK-paxillin pathway, and demonstrated protective effects on gastric mucosa in rodent models.",
    },
    {
      type: "paragraph",
      text: "In the context of a recomposition protocol, BPC-157 serves as a protective element — supporting recovery from exercise-induced tissue stress, maintaining GI integrity under dietary manipulation, and potentially contributing to the tendon and connective tissue maintenance that becomes relevant in high-training contexts.",
    },
    {
      type: "list",
      items: [
        "BPC-157: 250-500 mcg per administration, once daily",
        "Timing: post-exercise or with first meal; oral or subcutaneous depending on research target (GI vs systemic)",
        "Cycle: continuous through the 12-week protocol",
      ],
    },
    {
      type: "heading",
      text: "12-Week Protocol Timeline",
    },
    {
      type: "subheading",
      text: "Weeks 1-4: Establishment Phase",
    },
    {
      type: "paragraph",
      text: "The first four weeks prioritize consistent administration, baseline measurement collection, and acclimation of the biological system to the compounds. GH axis stimulation typically requires 2-4 weeks before IGF-1 levels reach a new steady state in animal models.",
    },
    {
      type: "list",
      items: [
        "All three compounds administered at protocol doses",
        "Baseline measurements: body weight, composition (DEXA or caliper-based), IGF-1, glucose, insulin",
        "Week 2 and Week 4 intermediate measurements to assess trajectory",
        "No modifications to compound selection or dosing during this phase",
      ],
    },
    {
      type: "subheading",
      text: "Weeks 5-8: Active Phase",
    },
    {
      type: "paragraph",
      text: "The active phase represents peak protocol intensity. GH axis stimulation is established, lipolytic signaling is consistent, and tissue repair support is ongoing. This phase is where the primary body composition measurements are most informative.",
    },
    {
      type: "list",
      items: [
        "Continue all compounds at established doses",
        "Week 6 midpoint measurements: full body composition panel, IGF-1, metabolic markers",
        "Document any observations of appetite, activity level, and recovery quality (relevant biomarkers in rodent models)",
        "Maintain consistent caloric and macronutrient conditions in the animal model to isolate peptide effects",
      ],
    },
    {
      type: "subheading",
      text: "Weeks 9-12: Completion Phase",
    },
    {
      type: "paragraph",
      text: "The final phase extends the protocol to capture the full trajectory of effects and allows for washout observations if a cessation arm is included in the study design.",
    },
    {
      type: "list",
      items: [
        "Continue all compounds through Week 12",
        "End-of-protocol measurements: full body composition, IGF-1, glucose, insulin, triglycerides",
        "Optional: 2-week washout with continued measurement to assess durability of effects",
        "Tissue collection at sacrifice (if rodent model): adipose mass, muscle mass, liver for metabolic markers",
      ],
    },
    {
      type: "heading",
      text: "Biomarkers to Track",
    },
    {
      type: "paragraph",
      text: "A body composition protocol without measurement is not a protocol — it's an administration schedule. The following measurements are standard for recomposition research in rodent models:",
    },
    {
      type: "table",
      headers: ["Marker", "Frequency", "Relevance"],
      rows: [
        ["Body weight", "2x/week", "Primary endpoint tracking"],
        ["Body composition (DEXA or MRI)", "Baseline, Week 4, Week 8, Week 12", "Fat mass vs lean mass changes"],
        ["IGF-1 (serum)", "Baseline, Week 4, Week 8, Week 12", "GH axis activation confirmation"],
        ["Fasting glucose", "Baseline, Week 6, Week 12", "Metabolic safety monitoring"],
        ["Fasting insulin", "Baseline, Week 6, Week 12", "Insulin sensitivity tracking"],
        ["Triglycerides", "Baseline, Week 12", "Lipid metabolism marker"],
        ["Food intake", "Weekly average", "Controls for dietary confounding"],
      ],
    },
    {
      type: "heading",
      text: "Timing Considerations",
    },
    {
      type: "paragraph",
      text: "Peptide timing in animal models requires careful standardization across groups. Key considerations:",
    },
    {
      type: "list",
      items: [
        "GH is secreted in pulses; CJC/ipamorelin timing relative to the natural nocturnal GH surge (in rodents) can affect total GH exposure",
        "AOD-9604's lipolytic effects appear most pronounced in a fasted or post-exercise state — consistent with beta-adrenergic mechanisms that are blunted by insulin",
        "BPC-157 timing is less critical mechanistically, but consistent timing relative to feeding maintains experimental consistency",
        "All injections should occur at the same time each day in group-matched pairs to minimize circadian variability",
      ],
    },
    {
      type: "heading",
      text: "What the Literature Supports — And What It Doesn't",
    },
    {
      type: "paragraph",
      text: "It is important to be precise about what is and is not established in the preclinical literature for each component.",
    },
    {
      type: "subheading",
      text: "Well-Supported",
    },
    {
      type: "list",
      items: [
        "CJC-1295 + GHRP combinations consistently elevate GH and IGF-1 in rodent models",
        "Ipamorelin shows favorable GH selectivity with minimal cortisol/prolactin elevation in animal studies",
        "AOD-9604 reduces adipose mass in obese animal models in multiple published studies",
        "BPC-157 demonstrates consistent tissue repair and cytoprotective effects in preclinical models",
      ],
    },
    {
      type: "subheading",
      text: "Limited or Absent Data",
    },
    {
      type: "list",
      items: [
        "Direct combination studies of all three stack components simultaneously in a recomposition model are not published",
        "Long-term (>12 week) human safety data does not exist for most of these compounds",
        "The specific contribution of each component in a multi-peptide stack cannot be isolated without individual-arm controls",
        "Dose-response relationships for AOD-9604 in lean vs obese animal models differ; extrapolation between models requires care",
      ],
    },
    {
      type: "heading",
      text: "Study Design Considerations",
    },
    {
      type: "paragraph",
      text: "For a well-controlled recomposition study using this protocol, researchers should include:",
    },
    {
      type: "list",
      items: [
        "Vehicle control group (same volume, same routes, no active compounds)",
        "Individual-compound arms if budget allows (CJC/ipamorelin only; AOD-9604 only; BPC-157 only; full stack)",
        "Positive control if available (a compound with known body composition effects in the model being used)",
        "Standardized diet with matched caloric intake across groups",
        "Randomization and blinding of researchers performing measurements",
        "Power calculation based on expected effect size from published literature",
      ],
    },
    {
      type: "heading",
      text: "Summary",
    },
    {
      type: "paragraph",
      text: "This 12-week protocol represents a literature-grounded approach to body composition research using three mechanistically distinct compounds. CJC-1295/ipamorelin targets GH axis stimulation; AOD-9604 targets selective lipolysis; BPC-157 provides tissue repair and GI support. Each selection has a preclinical evidence base, and the combination is designed for additive rather than redundant effects. Measurement frequency is built into the protocol to ensure the data generated is interpretable and publishable.",
    },
    {
      type: "disclaimer",
      text: "This article is for educational and research planning purposes only. Nexphoria products are sold for research use only and are not intended for human consumption, therapeutic use, or veterinary application.",
    },
  ],
};
