import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "tesamorelin-visceral-fat-hiv-research-guide",
  title: "Tesamorelin: GHRH Analog, Visceral Fat Reduction & HIV-Associated Lipodystrophy Research",
  description:
    "Tesamorelin is a synthetic GHRH analog with FDA approval for HIV-associated lipodystrophy. This guide covers its mechanism, preclinical and clinical data, visceral adipose tissue endpoints, and what researchers need to know about protocol design.",
  category: "Compound Profiles",
  readMinutes: 11,
  publishedAt: "2026-06-05",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Tesamorelin is a stabilized synthetic analogue of growth hormone-releasing hormone (GHRH) — specifically, the full 44-amino acid GHRH sequence conjugated to a trans-2-hexenoic acid group at the N-terminus. This modification significantly extends its half-life compared to native GHRH while preserving full receptor binding and biological activity. It is the first and, as of writing, only GHRH analog to receive FDA approval, cleared in 2010 under the brand name Egrifta for the reduction of excess abdominal fat in HIV-infected patients with lipodystrophy.",
    },
    {
      type: "heading",
      text: "Mechanism of Action",
    },
    {
      type: "paragraph",
      text: "Tesamorelin binds to pituitary GHRH receptors (GHRHR) and stimulates pulsatile growth hormone secretion through the same physiologic pathway as endogenous GHRH. Unlike exogenous GH administration, tesamorelin preserves the natural pulsatile pattern of GH release and maintains feedback regulation via IGF-1 and somatostatin — an important distinction for researchers concerned about desensitization or axis suppression.",
    },
    {
      type: "list",
      items: [
        "Binds pituitary GHRHR with high affinity — Kd comparable to native GHRH(1-44)",
        "Stimulates GH pulse amplitude rather than basal secretion",
        "IGF-1 elevation is downstream and dose-dependent",
        "Somatostatin feedback preserved — reduced risk of axis blunting vs. exogenous GH",
        "Half-life ~30 minutes (native GHRH <10 min) due to N-terminal modification",
      ],
    },
    {
      type: "heading",
      text: "Visceral Adipose Tissue (VAT) Reduction: Clinical Evidence",
    },
    {
      type: "paragraph",
      text: "The pivotal trials supporting FDA approval were two Phase 3 randomized controlled trials (LIPO-010 and LIPO-011) enrolling HIV-infected adults on stable antiretroviral therapy with confirmed lipodystrophy by CT-measured VAT. The primary endpoint was change in VAT area from baseline at 26 weeks.",
    },
    {
      type: "list",
      items: [
        "LIPO-010 (n=412): tesamorelin 2mg/day SQ reduced VAT by ~18% vs placebo at 26 weeks (p<0.0001)",
        "LIPO-011 (n=615): consistent VAT reduction of ~15-17% confirmed the primary endpoint",
        "IGF-1 levels increased ~70-80% from baseline in treated subjects",
        "Trunk-to-limb fat ratio improved; subcutaneous fat relatively preserved",
        "VAT reduction was durable at 52 weeks with continued dosing",
        "On discontinuation, VAT returned toward baseline over 12–26 weeks",
      ],
    },
    {
      type: "paragraph",
      text: "CT-based VAT quantification (cross-sectional area at L4-L5) is the gold-standard endpoint for tesamorelin research. DEXA is useful for body composition but less sensitive for visceral depot specificity.",
    },
    {
      type: "heading",
      text: "Metabolic Endpoints Beyond VAT",
    },
    {
      type: "paragraph",
      text: "Tesamorelin's effects extend beyond visceral fat reduction. Several secondary endpoints in the clinical program and subsequent investigator-initiated studies have explored metabolic and cardiovascular markers.",
    },
    {
      type: "subheading",
      text: "Triglycerides and Lipid Panel",
    },
    {
      type: "paragraph",
      text: "In subjects with elevated baseline triglycerides (≥200 mg/dL), tesamorelin produced statistically significant reductions in fasting triglycerides vs. placebo. The effect was most pronounced in individuals with the highest baseline TG burden. LDL and HDL changes were modest and variable across studies.",
    },
    {
      type: "subheading",
      text: "Glucose and Insulin Resistance",
    },
    {
      type: "paragraph",
      text: "Unlike direct GH administration, tesamorelin's glucose effects are mixed. In Phase 3 data, fasting glucose and insulin resistance (HOMA-IR) were not significantly worsened vs. placebo, though transient GH-mediated insulin antagonism is a theoretical concern at higher IGF-1 levels. Researchers designing glycemic endpoints should include HOMA-IR, fasting insulin, and 2-hour OGTT at baseline and key timepoints.",
    },
    {
      type: "subheading",
      text: "Carotid Intima-Media Thickness (cIMT)",
    },
    {
      type: "paragraph",
      text: "A randomized trial by Lo et al. (JAMA 2010) found that tesamorelin 2mg/day for 26 weeks significantly reduced carotid intima-media thickness in HIV-positive subjects with lipodystrophy compared to placebo, suggesting a potential cardioprotective effect beyond VAT reduction. This cardiovascular endpoint warrants replication in non-HIV metabolic syndrome models.",
    },
    {
      type: "heading",
      text: "Cognitive Research: Emerging Data",
    },
    {
      type: "paragraph",
      text: "An intriguing area of active research involves tesamorelin's effects on cognition. The IGF-1 axis has established roles in hippocampal neurogenesis, synaptic plasticity, and neuroprotection. Investigators at UCSF and elsewhere have run prospective trials examining tesamorelin's effect on cognition in older adults and HIV-positive individuals.",
    },
    {
      type: "list",
      items: [
        "Ramirez et al. (2024): tesamorelin improved verbal memory and executive function in HIV+ adults vs. placebo over 36 weeks",
        "IGF-1 elevation correlated with cognitive improvement magnitude",
        "MRI endpoints showed preserved hippocampal volume in treated vs. placebo groups",
        "Non-HIV elderly cohort data (Friedman et al.) showed trends but not significance — ongoing",
      ],
    },
    {
      type: "heading",
      text: "Dosing and Protocol Design",
    },
    {
      type: "paragraph",
      text: "All published tesamorelin research uses subcutaneous injection to the abdomen as the administration route. The approved clinical dose is 2mg/day. Researchers exploring dose-response should consider monitoring IGF-1 as a surrogate for engagement; target IGF-1 in the upper-normal range for the subject's age is a common titration reference.",
    },
    {
      type: "list",
      items: [
        "Standard dose: 2mg subcutaneous once daily",
        "Administration: abdomen preferred; rotate sites",
        "Reconstitute with provided sterile water immediately before use",
        "Monitor IGF-1 at baseline, 8 weeks, and every 12 weeks thereafter",
        "Monitor glucose/HOMA-IR if cardiometabolic endpoints are primary",
        "Washout: VAT returns to near-baseline within 12–26 weeks of cessation",
      ],
    },
    {
      type: "heading",
      text: "Contraindications and Exclusion Criteria for Research Models",
    },
    {
      type: "list",
      items: [
        "Active malignancy or recent history — GH axis stimulation may promote tumor growth",
        "Hypopituitarism-related GH deficiency where pituitary GHRHR is absent",
        "Pregnancy (potential fetal risk via IGF-1 elevation)",
        "Pre-existing type 2 diabetes — heightened glucose monitoring required",
        "Subjects on somatostatin analogs (octreotide, lanreotide) — antagonize GHRHR",
      ],
    },
    {
      type: "heading",
      text: "Comparison to Other GHRH Analogs in Research",
    },
    {
      type: "table",
      headers: ["Compound", "Structure", "Half-Life", "FDA Status", "Key Research Focus"],
      rows: [
        ["Tesamorelin", "GHRH(1-44) + trans-2-hexenoic acid", "~30 min", "Approved (HIV-LD)", "VAT, cognition, CVD"],
        ["Sermorelin", "GHRH(1-29)", "~10 min", "Approved (pediatric GHD) — discontinued", "GH axis, anti-aging"],
        ["CJC-1295 no-DAC", "GHRH(1-29) analog", "~30 min", "Research only", "GH pulse, body comp"],
        ["CJC-1295 DAC", "GHRH(1-29) + Drug Affinity Complex", "~7 days", "Research only", "Extended GH elevation"],
      ],
    },
    {
      type: "paragraph",
      text: "Tesamorelin's full-length sequence (44 AA vs. sermorelin's 29 AA) provides more complete receptor engagement. Researchers looking for a clinically validated GHRH reference compound should prefer tesamorelin; those designing long-duration studies requiring less frequent dosing may consider CJC-1295 DAC with appropriate washout considerations.",
    },
    {
      type: "heading",
      text: "Sourcing and Quality Considerations",
    },
    {
      type: "paragraph",
      text: "Tesamorelin is a 44-amino acid peptide — longer and more complex to synthesize than most research compounds. Researchers should demand HPLC chromatograms confirming ≥99% purity, mass spectrometry to verify molecular weight (MW ~5135 Da), and endotoxin testing via LAL assay. Lyophilized tesamorelin is stable at -20°C; reconstituted solution should be used within 3 hours or stored at 4°C for no more than 24 hours per pharmaceutical guidance.",
    },
    {
      type: "heading",
      text: "Summary",
    },
    {
      type: "paragraph",
      text: "Tesamorelin is the most clinically validated GHRH analog in the research literature, with Phase 3 randomized controlled trial data supporting visceral fat reduction, lipid improvement, and emerging cognitive endpoints. Its preserved pulsatile GH physiology, clear VAT mechanism, and favorable safety profile relative to exogenous GH make it a valuable reference compound for metabolic, cardiometabolic, and neuroendocrine research designs. Researchers should prioritize vendors supplying mass-spec confirmed, ≥99% purity product with documented cold-chain handling.",
    },
    {
      type: "disclaimer",
      text: "For research purposes only. Not intended for human use, diagnosis, or treatment.",
    },
  ],
};
