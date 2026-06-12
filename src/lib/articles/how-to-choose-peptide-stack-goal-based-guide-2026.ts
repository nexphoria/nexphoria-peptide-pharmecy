import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "how-to-choose-peptide-stack-goal-based-guide-2026",
  title: "How to Choose a Peptide Stack: A Goal-Based Selection Guide (2026)",
  description:
    "A systematic framework for selecting research peptide stacks based on primary objectives — recovery, longevity, metabolic health, cognitive performance, and more — with compound rationale, sequencing logic, and sourcing criteria.",
  category: "Research Guides",
  readMinutes: 11,
  publishedAt: "2026-06-12",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "The research peptide space has expanded from a handful of compounds studied by a small community to a catalog of hundreds of molecules with overlapping mechanisms and complementary effects. For a researcher entering this space, the question is no longer 'what exists?' — it is 'what should I run, in what combination, and why?' This guide provides a structured answer.",
    },
    {
      type: "callout",
      text: "All compounds referenced are research chemicals for laboratory and investigative use only. Not intended for human therapeutic administration. Consult a physician before making any health decisions.",
    },
    {
      type: "heading",
      text: "The Stack Selection Framework",
    },
    {
      type: "paragraph",
      text: "Effective stack selection follows a four-step framework: (1) identify the primary research objective, (2) select the anchor compound with the strongest mechanistic alignment, (3) add one complementary compound that addresses a secondary pathway without mechanistic conflict, and (4) add optional support compounds only after establishing a stable baseline with the primary stack. This prevents the common error of overloading protocols with too many variables simultaneously.",
    },
    {
      type: "heading",
      text: "Stack Profiles by Primary Objective",
    },
    {
      type: "subheading",
      text: "1. Tissue Recovery and Physical Repair",
    },
    {
      type: "paragraph",
      text: "The tissue recovery category has the deepest preclinical literature in the peptide research space, anchored by BPC-157 and TB-500 (Thymosin Beta-4). These two compounds address complementary mechanisms — BPC-157 primarily through nitric oxide signaling, VEGF-mediated angiogenesis, and FAK-paxillin cytoskeletal effects; TB-500 through G-actin sequestration and systemic cell migration. The combination is supported by separate bodies of preclinical literature for musculoskeletal, gastrointestinal, and neurological repair contexts.",
    },
    {
      type: "table",
      headers: ["Role", "Compound", "Mechanism", "Research Dose Reference"],
      rows: [
        ["Anchor", "BPC-157", "NO/VEGF/FAK signaling, GI cytoprotection", "250–500 mcg/day (preclinical)"],
        ["Complementary", "TB-500", "G-actin sequestration, systemic cell migration", "2.0–2.5 mg 2x/week (preclinical)"],
        ["Optional support", "GHK-Cu", "TGF-β, collagen synthesis, anti-inflammatory", "0.5–2 mg/day"],
      ],
    },
    {
      type: "subheading",
      text: "2. Longevity and Healthy Aging",
    },
    {
      type: "paragraph",
      text: "Longevity stacks target multiple hallmarks of aging simultaneously — mitochondrial dysfunction, epigenetic drift, telomere shortening, cellular senescence, and chronic inflammation. No single compound addresses all of these, which is why the longevity category benefits most from a multi-compound approach. The anchor compounds are those with the most mechanistic breadth: NAD+ (supporting sirtuins, PARP, and mitochondrial function) and GHK-Cu (gene expression modulation via NRF2, collagen and anti-inflammatory pathways).",
    },
    {
      type: "table",
      headers: ["Role", "Compound", "Hallmarks Addressed", "Research Dose Reference"],
      rows: [
        ["Anchor", "NAD+", "Mitochondrial function, DNA repair, sirtuin activation", "250–500 mg IV/subQ 2–3x/week"],
        ["Anchor", "GHK-Cu", "Epigenetic, anti-inflammatory, collagen, NRF2", "0.5–2 mg/day subQ or topical"],
        ["Complementary", "Epitalon", "Telomerase activation, pineal function, circadian", "5–10 mg/day cycles"],
        ["Complementary", "SS-31 (Elamipretide)", "Mitochondrial inner membrane, ROS reduction", "0.5–5 mg/day subQ"],
        ["Optional", "MOTS-c", "AMPK activation, metabolic flexibility, exercise mimetic", "5–15 mg/day subQ"],
      ],
    },
    {
      type: "paragraph",
      text: "Not all researchers need every compound in this list. Start with NAD+ and GHK-Cu as the core. Add Epitalon if telomere and circadian biology are a focus. Add SS-31 if mitochondrial dysfunction is a documented concern. MOTS-c is best reserved for metabolically active research contexts.",
    },
    {
      type: "subheading",
      text: "3. Metabolic Health and Body Composition",
    },
    {
      type: "paragraph",
      text: "The metabolic health category is currently dominated by GLP-1 receptor agonist research — semaglutide, tirzepatide (GLP-1/GIP dual agonist), and retatrutide (GLP-1/GIP/glucagon triple agonist). These compounds have the most robust preclinical and clinical literature in the peptide space, with published data on weight, insulin sensitivity, lipid parameters, and cardiovascular endpoints. BPC-157 serves as a complementary compound addressing GI integrity and reducing the GI side effect burden common with GLP-1 class compounds in rodent models.",
    },
    {
      type: "table",
      headers: ["Role", "Compound", "Mechanism", "Research Dose Reference"],
      rows: [
        ["Anchor (weight focus)", "Semaglutide", "GLP-1 receptor agonism, appetite suppression, insulin secretion", "0.25–2.4 mg/week titrated"],
        ["Anchor (advanced)", "Tirzepatide", "GLP-1 + GIP dual agonism, superior weight and glycemic data", "2.5–15 mg/week titrated"],
        ["Anchor (triple pathway)", "Retatrutide", "GLP-1 + GIP + glucagon triple agonism", "1–12 mg/week titrated"],
        ["Complementary", "BPC-157", "GI cytoprotection, vagus nerve support", "250 mcg/day during GLP-1 use"],
        ["Optional", "AOD-9604", "HGH fragment, lipolytic effects in preclinical models", "300–500 mcg/day"],
      ],
    },
    {
      type: "subheading",
      text: "4. Cognitive Performance and Neuroprotection",
    },
    {
      type: "paragraph",
      text: "Cognitive research stacks center on anxiety reduction, stress resilience, BDNF upregulation, and mitochondrial support in neural tissue. The Russian-developed nootropic peptides Selank and Semax have the most established preclinical literature in this category, with complementary mechanisms: Selank through enkephalin metabolism and GABA modulation; Semax through ACTH analog signaling and BDNF induction. NAD+ and SS-31 provide the metabolic substrate for sustained neuronal function.",
    },
    {
      type: "table",
      headers: ["Role", "Compound", "Mechanism", "Research Dose Reference"],
      rows: [
        ["Anchor (anxiety/stress)", "Selank", "Enkephalin modulation, GABA-A, BDNF", "250–500 mcg intranasal 1–2x/day"],
        ["Anchor (cognitive boost)", "Semax", "ACTH analog, BDNF, NGF induction", "200–600 mcg intranasal"],
        ["Complementary", "NAD+", "Neuronal mitochondrial support, DNA repair", "250–500 mg IV/subQ 2–3x/week"],
        ["Advanced", "Dihexa", "HGF/c-Met pathway, synaptogenesis", "Research dosing under study"],
        ["Advanced", "Cerebrolysin", "BDNF/GDNF neurotrophic activity", "5–10 mL IV per session"],
      ],
    },
    {
      type: "paragraph",
      text: "For most researchers, Selank alone represents the most efficient cognitive entry point — it has the strongest anxiolytic and stress-buffer evidence, requires no injection (intranasal delivery), and integrates easily into daily use. Semax adds complementary BDNF-upregulation activity and can be layered after establishing a Selank baseline.",
    },
    {
      type: "subheading",
      text: "5. Sleep Optimization",
    },
    {
      type: "paragraph",
      text: "Sleep research with peptides spans multiple mechanisms: direct delta-wave induction (DSIP), GH-axis stimulation with downstream sleep architecture effects (MK-677, CJC-1295/Ipamorelin), and circadian regulation (Epitalon). These mechanisms are complementary and can be combined with minimal conflict risk in most research contexts.",
    },
    {
      type: "table",
      headers: ["Role", "Compound", "Mechanism", "Research Dose Reference"],
      rows: [
        ["Anchor", "MK-677", "Ghrelin receptor agonism, GH pulse, SWS enhancement", "12.5–25 mg oral nightly"],
        ["Complementary", "DSIP", "Delta-wave induction, direct sleep architecture effect", "0.25–1 mg subQ before sleep"],
        ["Complementary", "Epitalon", "Pineal regulation, melatonin, circadian rhythm support", "5–10 mg/day cycles"],
        ["Optional", "CJC-1295/Ipamorelin", "GH pulse optimization, improved sleep quality", "100–200 mcg combined, pre-sleep"],
      ],
    },
    {
      type: "heading",
      text: "Stack Construction Rules",
    },
    {
      type: "list",
      items: [
        "Rule 1: Start with one anchor compound for at least 4 weeks before adding anything else",
        "Rule 2: Never add more than one new compound per 2-week period — attribution requires isolation",
        "Rule 3: Avoid stacking compounds with overlapping receptor targets at full doses simultaneously",
        "Rule 4: GH secretagogues (MK-677, CJC-1295, Ipamorelin, Hexarelin, GHRP-2) should generally not be stacked with each other at full doses — receptor desensitization risk",
        "Rule 5: GLP-1 analogs (Semaglutide, Tirzepatide, Retatrutide) should not be combined — redundant mechanism, compounded GI side effect risk",
        "Rule 6: Establish baseline biomarkers before any stack — you cannot measure what you did not start from",
        "Rule 7: Plan your off-cycle before you start — most peptide researchers use 8–12 weeks on, 4 weeks off as a general framework",
      ],
    },
    {
      type: "heading",
      text: "What to Avoid When Building a Stack",
    },
    {
      type: "paragraph",
      text: "Forum-driven stacking often reflects anecdote rather than mechanism. The most common errors: combining multiple GH secretagogues without understanding receptor desensitization, layering peptides across incompatible solubility requirements (some peptides require acetic acid for reconstitution, which cannot be mixed with BAC-water reconstituted compounds in the same syringe), and adding longevity compounds to recovery stacks without a clear objective rationale.",
    },
    {
      type: "heading",
      text: "Sourcing Stack Components",
    },
    {
      type: "paragraph",
      text: "Stack quality is only as good as the weakest compound. A single mislabeled or underdosed vial invalidates the entire protocol's attributable data. Source all stack components from a single vendor with independent third-party COA documentation — this eliminates the variable of cross-vendor quality inconsistency and ensures your entire protocol is built on verified material.",
    },
    {
      type: "paragraph",
      text: "Nexphoria provides HPLC, mass spectrometry, and LAL endotoxin testing on all lots with published COA data. For multi-compound stacks, this consistency across the full catalog is a meaningful advantage over sourcing individual compounds from multiple vendors with different testing standards.",
    },
    {
      type: "disclaimer",
      text: "This content is intended for educational and research information purposes only. All compounds discussed are research chemicals not approved for human therapeutic use by the FDA or equivalent regulatory bodies. Nothing in this article constitutes medical advice. Always consult a licensed healthcare professional.",
    },
  ],
};
