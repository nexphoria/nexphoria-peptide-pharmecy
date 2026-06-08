import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "how-to-start-peptide-research-complete-guide",
  title: "How to Start Peptide Research: A Complete Step-by-Step Guide (2026)",
  description:
    "A practical, step-by-step guide for researchers starting their first peptide study. Covers compound selection, supplier evaluation, reconstitution, storage, protocol design, and documentation best practices.",
  category: "Getting Started",
  readMinutes: 10,
  publishedAt: "2026-06-08",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Starting peptide research can feel daunting. The compound list is long, the quality variability among suppliers is significant, and the gap between poorly designed protocols and well-designed ones can be the difference between meaningful data and noise. This guide walks through the process step by step — from defining your research question through receiving your first order and running your first protocol.",
    },
    {
      type: "heading",
      text: "Step 1: Define Your Research Question",
    },
    {
      type: "paragraph",
      text: "Every good research protocol starts with a specific, testable question. Vague objectives like 'I want to study healing' produce unfocused protocols and uninterpretable results. A well-framed question specifies the model system, the compound, the dose range, the duration, and the endpoints.",
    },
    {
      type: "paragraph",
      text: "Example of a poorly framed question: 'Does BPC-157 help with healing?'",
    },
    {
      type: "paragraph",
      text: "Example of a well-framed question: 'Does subcutaneous BPC-157 at 10 mcg/kg/day for 14 days improve histological markers of tendon repair in a Sprague-Dawley rat Achilles tenotomy model compared to saline vehicle controls?'",
    },
    {
      type: "paragraph",
      text: "The specificity forces you to make decisions about your model, your compound, your route, your dose, your duration, and your measurement endpoints — all before you order anything.",
    },
    {
      type: "heading",
      text: "Step 2: Review the Existing Literature",
    },
    {
      type: "paragraph",
      text: "Before designing your protocol, review what has already been published. PubMed (pubmed.ncbi.nlm.nih.gov) is the primary database. Search for your compound name combined with your model system and endpoint. For most research peptides, you will find:",
    },
    {
      type: "list",
      items: [
        "Dose ranges already studied (useful as anchors for your own protocol)",
        "Model systems that have been validated (so you are not starting from scratch)",
        "Known confounders and limitations (saving you from common pitfalls)",
        "Prior findings to contextualize your results against",
      ],
    },
    {
      type: "paragraph",
      text: "For major compounds like BPC-157, semaglutide, ipamorelin, GHK-Cu, and thymosin alpha-1, the existing literature is extensive. For newer or less-studied compounds, you may need to broaden your search to related compounds in the same class.",
    },
    {
      type: "heading",
      text: "Step 3: Select Your Compound(s)",
    },
    {
      type: "paragraph",
      text: "Match your research question to the most relevant compound. Key considerations:",
    },
    {
      type: "subheading",
      text: "One Compound to Start",
    },
    {
      type: "paragraph",
      text: "If this is your first peptide research project, work with a single compound. Combinations (stacks) are appropriate for more experienced researchers who have characterized individual compound effects in their model system. Adding multiple variables simultaneously makes causal attribution impossible.",
    },
    {
      type: "subheading",
      text: "Compound Selection by Research Focus",
    },
    {
      type: "table",
      headers: ["Research Focus", "Primary Compounds to Consider"],
      rows: [
        ["Tissue/tendon repair", "BPC-157, TB-500"],
        ["GH axis / body composition", "Ipamorelin, CJC-1295 (no DAC), sermorelin, MK-677"],
        ["Metabolic / obesity", "Semaglutide, tirzepatide, AOD-9604"],
        ["Neuroprotection / cognition", "Selank, semax, dihexa, SS-31"],
        ["Longevity / mitochondria", "Epithalon, GHK-Cu, SS-31, MOTS-c, NAD+"],
        ["Immune modulation", "Thymosin alpha-1, KPV, LL-37"],
        ["Skin / wound healing", "GHK-Cu, BPC-157, KPV, SNAP-8"],
        ["Sleep quality", "DSIP, MK-677 (SWS enhancement)"],
      ],
    },
    {
      type: "heading",
      text: "Step 4: Evaluate and Select a Supplier",
    },
    {
      type: "paragraph",
      text: "Supplier quality is one of the most underappreciated variables in peptide research. A poorly manufactured peptide — low purity, incorrect sequence, endotoxin contamination — will produce confounded or misleading results regardless of how well your protocol is designed.",
    },
    {
      type: "subheading",
      text: "Minimum Quality Requirements",
    },
    {
      type: "list",
      items: [
        "HPLC purity report: ≥98% purity for research applications; anything below 95% is concerning",
        "Mass spectrometry confirmation: verifies molecular identity (not just purity)",
        "Lot-specific CoA: the certificate must correspond to your specific lot number, not a generic batch",
        "LAL endotoxin test: required for any injectable application; endotoxin contamination confounds in vivo inflammatory endpoints",
        "Third-party testing preferred: independent lab testing is more credible than in-house only",
      ],
    },
    {
      type: "subheading",
      text: "Red Flags",
    },
    {
      type: "list",
      items: [
        "No lot-specific CoA (only generic or upon request documentation)",
        "HPLC data presented without a chromatogram",
        "No mass spec data on CoA",
        "No LAL testing",
        "Prices significantly below market — peptide synthesis has real costs; implausibly cheap products should raise quality concerns",
        "No information about synthesis location or QC process",
      ],
    },
    {
      type: "heading",
      text: "Step 5: Place Your Order and Verify Upon Receipt",
    },
    {
      type: "paragraph",
      text: "When your order arrives, before reconstituting or using anything:",
    },
    {
      type: "list",
      items: [
        "Verify the lot number on the vial matches the lot number on the CoA",
        "Inspect the lyophilized powder: it should appear as a white to off-white cake or powder; discoloration or unusual appearance warrants caution",
        "Record the lot number, receipt date, and storage conditions in your research notebook",
        "Transfer to appropriate storage immediately: -20°C for long-term, 2–8°C if use is planned within 4 weeks",
      ],
    },
    {
      type: "heading",
      text: "Step 6: Reconstitute Correctly",
    },
    {
      type: "paragraph",
      text: "Improper reconstitution is one of the most common sources of error in new peptide research. Follow this protocol:",
    },
    {
      type: "list",
      items: [
        "Allow the peptide vial to equilibrate to room temperature before opening (prevents moisture condensation from destabilizing the lyophilized material)",
        "Use bacteriostatic water (BAC water) for most research applications — the benzyl alcohol preservative allows the reconstituted solution to be stored for up to 28 days at 2–8°C",
        "Calculate your target concentration first: determine how much solvent to add based on the peptide quantity and your desired working concentration",
        "Add solvent slowly: inject the BAC water down the inside wall of the vial, not directly onto the peptide cake",
        "Do not shake: swirl gently or let the vial sit at room temperature until fully dissolved",
        "Confirm complete dissolution before use: the solution should be clear with no visible particulates",
      ],
    },
    {
      type: "subheading",
      text: "Concentration Calculation Example",
    },
    {
      type: "paragraph",
      text: "If you have a 5 mg vial and want a 1 mg/mL concentration, add 5 mL of BAC water. If you want 500 mcg/mL (0.5 mg/mL), add 10 mL. Work out your target concentration before opening the vial.",
    },
    {
      type: "heading",
      text: "Step 7: Design Your Protocol Documentation",
    },
    {
      type: "paragraph",
      text: "Document your protocol in writing before you begin. A complete protocol document should include:",
    },
    {
      type: "list",
      items: [
        "Research question and hypothesis",
        "Model system (species, strain, age, weight, sex)",
        "Compound(s): name, lot number, supplier, purity, reconstitution details",
        "Groups: treatment group(s) and control group(s) (minimum: vehicle-only control)",
        "Dosing: compound, dose (weight-based preferred), route, frequency, timing",
        "Duration: total protocol length, assessment time points",
        "Endpoints: what you are measuring, when, and with what method",
        "Statistical plan: sample sizes and intended analysis method",
      ],
    },
    {
      type: "heading",
      text: "Step 8: Run Your Baseline Measurements",
    },
    {
      type: "paragraph",
      text: "Before administering any compound, collect your baseline measurements. This establishes the pre-treatment state that you will compare against during and after the protocol. Baseline measurements are especially critical for endpoints that have high individual variability: body weight, blood panels, behavioral assays, inflammatory markers.",
    },
    {
      type: "heading",
      text: "Step 9: Execute and Document",
    },
    {
      type: "paragraph",
      text: "During the protocol, maintain a consistent and detailed research log. Record:",
    },
    {
      type: "list",
      items: [
        "Exact date and time of each administration",
        "Dose administered (calculated from body weight if weight-based)",
        "Route and injection site (if applicable)",
        "Any observable changes in behavior, appetite, or physical appearance",
        "Storage conditions checked periodically (temperature logs if available)",
        "Any deviations from the original protocol and reasons",
      ],
    },
    {
      type: "heading",
      text: "Step 10: Analyze and Contextualize Your Results",
    },
    {
      type: "paragraph",
      text: "After collecting your endpoint data, analyze results against your baseline and vehicle control. When interpreting findings:",
    },
    {
      type: "list",
      items: [
        "Distinguish statistical significance from biological significance — a result can be statistically significant but biologically trivial (or vice versa in underpowered studies)",
        "Consider confounders: any differences between groups other than the compound (stress, handling, diet) could explain your results",
        "Compare to published data: does your result direction and magnitude align with what other researchers have found?",
        "Be conservative: preclinical results do not automatically translate to humans or other model systems",
      ],
    },
    {
      type: "heading",
      text: "Common Beginner Mistakes to Avoid",
    },
    {
      type: "list",
      items: [
        "No control group: controls are non-negotiable; without them, you cannot attribute effects to your compound",
        "Shaking the vial: damages peptide structure; always swirl gently",
        "Storing reconstituted peptides at room temperature: use 2–8°C; room temperature dramatically accelerates degradation",
        "Multiple compounds in the first protocol: adds confounders; start with one",
        "Ignoring lot numbers: if your CoA lot number doesn't match your vial, you have no quality documentation for what's in your vial",
        "Skipping LAL testing documentation: for in vivo work, lack of endotoxin data means inflammatory endpoints are uninterpretable",
        "Not calculating doses by body weight: fixed doses in animal models ignore the biology of drug distribution",
      ],
    },
    {
      type: "heading",
      text: "Resources for Continuing Your Research Education",
    },
    {
      type: "paragraph",
      text: "The Nexphoria blog library contains over 700 detailed research guides covering individual compounds, protocol design, quality standards, and mechanistic science. Key starting points for new researchers include the compound-specific complete guides (BPC-157, ipamorelin, CJC-1295, GHK-Cu), the protocol design fundamentals series, and the vendor evaluation guide.",
    },
    {
      type: "disclaimer",
      text: "Research peptides are intended exclusively for laboratory and preclinical research use. They are not approved by the FDA for human use, are not dietary supplements, and should not be used for personal health interventions. All information in this article is provided for educational and research purposes only.",
    },
  ],
};
