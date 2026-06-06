import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "peptide-dosing-guide-beginners-research",
  title: "Peptide Dosing for Beginners: A Research Protocol Reference",
  description:
    "New to peptide research? This guide covers the foundational dosing concepts every researcher needs to understand — units, concentrations, reconstitution math, and protocol design fundamentals.",
  category: "Research Protocols",
  readMinutes: 12,
  publishedAt: "2026-06-06",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "One of the most common points of confusion for researchers entering the peptide field is dosing arithmetic. Units, concentrations, reconstitution volumes, and injection calculations are straightforward once you understand the underlying logic — but the literature is full of inconsistent notation that can create real errors.",
    },
    {
      type: "paragraph",
      text: "This guide covers the core concepts that every peptide researcher should have locked down before beginning any protocol.",
    },
    {
      type: "heading",
      text: "Understanding Peptide Units",
    },
    {
      type: "paragraph",
      text: "Peptide quantities are measured in two ways in research: by mass and by molar quantity.",
    },
    {
      type: "list",
      items: [
        "**Milligrams (mg):** Mass-based measurement. A 5 mg vial contains 5 milligrams of lyophilized peptide by weight.",
        "**Micrograms (mcg or μg):** 1 mg = 1,000 mcg. Many peptide doses are expressed in micrograms — particularly for GHRP/GHRH compounds like Ipamorelin (commonly 100–300 mcg per dose in preclinical models).",
        "**International Units (IU):** Biologically-defined potency units. Used for growth hormone and some hormonal peptides. Not directly interchangeable with mcg without compound-specific conversion factors.",
      ],
    },
    {
      type: "paragraph",
      text: "For most synthetic research peptides (BPC-157, TB-500, CJC-1295, Selank, etc.), mass-based units (mg/mcg) are standard. IU notation is primarily relevant when working with GH itself or peptide hormones like insulin.",
    },
    {
      type: "heading",
      text: "The Reconstitution Calculation",
    },
    {
      type: "paragraph",
      text: "Reconstitution is the process of dissolving lyophilized peptide in bacteriostatic water (or another appropriate diluent) to produce a solution of known concentration. Getting this calculation right is foundational.",
    },
    {
      type: "subheading",
      text: "The Core Formula",
    },
    {
      type: "paragraph",
      text: "Concentration (mcg/mL) = Total peptide mass (mcg) ÷ Volume of diluent added (mL)",
    },
    {
      type: "paragraph",
      text: "Example: A 5 mg (5,000 mcg) vial reconstituted with 2 mL of bacteriostatic water produces a concentration of 2,500 mcg/mL.",
    },
    {
      type: "subheading",
      text: "Calculating Injection Volume for a Target Dose",
    },
    {
      type: "paragraph",
      text: "Injection volume (mL) = Desired dose (mcg) ÷ Concentration (mcg/mL)",
    },
    {
      type: "paragraph",
      text: "Example: To deliver 250 mcg from a 2,500 mcg/mL solution: 250 ÷ 2,500 = 0.1 mL (10 units on an insulin syringe).",
    },
    {
      type: "callout",
      text: "Always double-check your reconstitution math before drawing from a vial. A 10x error in concentration produces a 10x error in dose — either over or under. Calculate on paper before proceeding.",
    },
    {
      type: "heading",
      text: "Reading Insulin Syringe Units",
    },
    {
      type: "paragraph",
      text: "Most peptide research uses insulin syringes for subcutaneous or intraperitoneal administration. Insulin syringes are calibrated in 'units' (U) based on 100 units = 1 mL.",
    },
    {
      type: "table",
      headers: ["Syringe Reading", "Volume (mL)", "Notes"],
      rows: [
        ["10 units", "0.10 mL", "Common for small peptide doses"],
        ["20 units", "0.20 mL", ""],
        ["50 units", "0.50 mL", "Half of a 1 mL syringe"],
        ["100 units", "1.00 mL", "Full 1 mL syringe"],
      ],
    },
    {
      type: "paragraph",
      text: "When calculating injection volumes, express your answer in mL first, then convert: units = mL × 100. So 0.1 mL = 10 units on the syringe.",
    },
    {
      type: "heading",
      text: "Dosing Frequency and Protocol Duration",
    },
    {
      type: "paragraph",
      text: "Research protocols vary widely by compound. Some key concepts for protocol design:",
    },
    {
      type: "subheading",
      text: "Acute vs. Chronic Dosing",
    },
    {
      type: "paragraph",
      text: "Acute dosing studies examine short-term, often single-dose effects. Chronic dosing studies examine effects of repeated administration over days to weeks. Most published peptide research uses chronic protocols to assess cumulative biological effects — especially for regenerative compounds like BPC-157, TB-500, and GHK-Cu.",
    },
    {
      type: "subheading",
      text: "Daily Dose Timing",
    },
    {
      type: "paragraph",
      text: "For GH secretagogues (Ipamorelin, CJC-1295, GHRP-2), administration timing relative to fasting state and circadian GH pulsatility affects experimental results. Most published studies use early morning or late evening dosing to align with natural GH pulse timing.",
    },
    {
      type: "subheading",
      text: "On/Off Cycling",
    },
    {
      type: "paragraph",
      text: "Some GHS compounds show receptor desensitization with continuous use. Research protocols for GHRP-class compounds often incorporate cycling to prevent tachyphylaxis. Compounds like BPC-157 and TB-500 are typically studied in continuous protocols without cycling.",
    },
    {
      type: "heading",
      text: "Common Preclinical Dose Reference Ranges",
    },
    {
      type: "paragraph",
      text: "The following are published preclinical (rodent) dose ranges from peer-reviewed literature. These are reference data points for research protocol design only — not dosing recommendations for any purpose.",
    },
    {
      type: "table",
      headers: ["Compound", "Typical Research Range", "Route", "Frequency"],
      rows: [
        ["BPC-157", "10–100 mcg/kg", "SC or IP", "Once daily"],
        ["TB-500 (Thymosin β4)", "150–500 mcg/kg", "SC or IP", "2–3x/week"],
        ["Ipamorelin", "100–500 mcg/kg", "SC or IP", "Once to twice daily"],
        ["CJC-1295 (no DAC)", "100–300 mcg/kg", "SC", "Once daily"],
        ["GHK-Cu", "0.1–1 mg/kg", "SC or topical", "Once daily"],
        ["Epithalon", "0.1–1 mg/kg", "SC or IP", "Once daily"],
        ["Selank", "0.1–0.5 mg/kg", "Intranasal or IP", "Once to twice daily"],
        ["Semaglutide", "10–100 nmol/kg", "SC", "Once weekly"],
      ],
    },
    {
      type: "callout",
      text: "These ranges reflect published animal studies and do not constitute dosing guidance for human use. Research protocols should be designed based on peer-reviewed literature for the specific compound and experimental model.",
    },
    {
      type: "heading",
      text: "Diluent Selection",
    },
    {
      type: "paragraph",
      text: "Bacteriostatic water (BW) — sterile water with 0.9% benzyl alcohol — is the standard diluent for most research peptides. It is multi-use safe due to the preservative action of benzyl alcohol and is appropriate for subcutaneous and intraperitoneal injection.",
    },
    {
      type: "paragraph",
      text: "Some peptides require alternative diluents:",
    },
    {
      type: "list",
      items: [
        "**Poorly soluble peptides (e.g., some follistatins):** May require small amounts of 0.1–1% acetic acid to achieve initial dissolution, followed by dilution with BW or sterile saline.",
        "**Cell culture applications:** Use sterile water without benzyl alcohol (benzyl alcohol is cytotoxic); prepare fresh or aliquot and store at -80°C.",
        "**Intranasal formulations:** Typically use 0.9% saline or purpose-formulated intranasal carriers.",
      ],
    },
    {
      type: "heading",
      text: "Record-Keeping for Research Integrity",
    },
    {
      type: "paragraph",
      text: "Every research protocol should include a dosing log with the following entries for each administration:",
    },
    {
      type: "list",
      items: [
        "Date and time of administration",
        "Compound name, lot/batch number, and source",
        "Vial concentration and calculated injection volume",
        "Actual volume drawn (note any air bubbles or errors)",
        "Administration route and site",
        "Subject identifier and weight (for weight-based dosing adjustment)",
        "Observer initials",
      ],
    },
    {
      type: "paragraph",
      text: "Thorough records protect research integrity, support reproducibility, and provide documentation required if results are submitted for publication.",
    },
    {
      type: "heading",
      text: "Summary",
    },
    {
      type: "paragraph",
      text: "Dosing fundamentals in peptide research come down to three core skills: understanding mass/concentration units, performing the reconstitution and injection volume calculations accurately, and designing protocols aligned with published literature for the specific compound being studied. Master these, and the quantitative side of peptide research becomes straightforward.",
    },
    {
      type: "disclaimer",
      text: "For research purposes only. Not intended for human use. All dosing information references published preclinical literature.",
    },
  ],
};
