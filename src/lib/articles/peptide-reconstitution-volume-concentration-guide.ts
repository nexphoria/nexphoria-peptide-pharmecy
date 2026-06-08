import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "peptide-reconstitution-volume-concentration-guide",
  title: "Peptide Reconstitution Volume and Concentration: The Complete Reference Guide",
  description:
    "Step-by-step guide to calculating reconstitution volumes and concentrations for research peptides. Covers bacteriostatic water math, dilution protocols, common mistakes, and per-dose volume calculations for major research compounds.",
  category: "Research Protocols",
  readMinutes: 10,
  publishedAt: "2026-06-08",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Reconstitution volume determines the concentration of your peptide solution — and concentration errors are one of the most common, and most consequential, mistakes in peptide research protocols. An error in reconstitution math means every subsequent dose is wrong by the same factor. This guide covers the core calculation framework, worked examples for commonly researched peptides, and practical protocols for maintaining accuracy across multi-dose preparations.",
    },
    {
      type: "heading",
      text: "The Core Reconstitution Formula",
    },
    {
      type: "paragraph",
      text: "Peptide concentration after reconstitution is determined by one equation:",
    },
    {
      type: "callout",
      text: "Concentration (mcg/mL) = Peptide mass in vial (mcg) ÷ Volume of diluent added (mL)",
    },
    {
      type: "paragraph",
      text: "Most research peptides are supplied in vials expressed in milligrams (mg). Convert to micrograms by multiplying by 1,000 before applying the formula. A 5 mg vial contains 5,000 mcg.",
    },
    {
      type: "paragraph",
      text: "Example: A 5 mg BPC-157 vial reconstituted with 2.5 mL bacteriostatic water produces a concentration of 5,000 mcg ÷ 2.5 mL = 2,000 mcg/mL (or 2 mg/mL).",
    },
    {
      type: "heading",
      text: "Choosing Your Target Concentration",
    },
    {
      type: "paragraph",
      text: "Target concentration should be selected based on the per-dose volume you intend to administer. For subcutaneous administration in rodent models, typical injection volumes are 0.1–0.5 mL. For larger target doses, a lower concentration reduces the injection volume to a convenient fraction of a standard insulin syringe.",
    },
    {
      type: "subheading",
      text: "Working Backwards from Dose",
    },
    {
      type: "paragraph",
      text: "If your protocol calls for a specific dose (e.g., 500 mcg), decide what injection volume is convenient for your model (e.g., 0.25 mL for a rat SC injection), then calculate the required concentration:",
    },
    {
      type: "callout",
      text: "Required concentration = Dose (mcg) ÷ Injection volume (mL) = 500 mcg ÷ 0.25 mL = 2,000 mcg/mL",
    },
    {
      type: "paragraph",
      text: "Then calculate how much diluent to add to the vial: Diluent volume = Peptide mass in vial (mcg) ÷ Required concentration = 5,000 mcg ÷ 2,000 mcg/mL = 2.5 mL",
    },
    {
      type: "heading",
      text: "Standard Reconstitution Volumes for Common Research Peptides",
    },
    {
      type: "paragraph",
      text: "The following table provides commonly used reconstitution volumes and resulting concentrations for frequently researched peptides. These are reference starting points — actual protocol concentrations should be calculated for the specific vial size, dose, and model requirements.",
    },
    {
      type: "table",
      headers: ["Peptide", "Vial Size", "Diluent Volume", "Concentration", "Dose/0.1 mL"],
      rows: [
        ["BPC-157", "5 mg", "2.5 mL BW", "2,000 mcg/mL", "200 mcg"],
        ["BPC-157", "5 mg", "5.0 mL BW", "1,000 mcg/mL", "100 mcg"],
        ["TB-500", "5 mg", "2.5 mL BW", "2,000 mcg/mL", "200 mcg"],
        ["Ipamorelin", "5 mg", "2.5 mL BW", "2,000 mcg/mL", "200 mcg"],
        ["CJC-1295 no DAC", "5 mg", "2.5 mL BW", "2,000 mcg/mL", "200 mcg"],
        ["Semaglutide", "2 mg", "1.0 mL BW", "2,000 mcg/mL", "200 mcg"],
        ["Tirzepatide", "5 mg", "2.5 mL BW", "2,000 mcg/mL", "200 mcg"],
        ["GHK-Cu", "50 mg", "5.0 mL BW", "10,000 mcg/mL", "1,000 mcg"],
        ["NAD+", "500 mg", "5.0 mL sterile water", "100,000 mcg/mL", "10,000 mcg"],
        ["PT-141", "10 mg", "2.0 mL BW", "5,000 mcg/mL", "500 mcg"],
        ["Selank", "5 mg", "5.0 mL BW", "1,000 mcg/mL", "100 mcg"],
        ["Epithalon", "10 mg", "2.0 mL BW", "5,000 mcg/mL", "500 mcg"],
      ],
    },
    {
      type: "heading",
      text: "Syringe Selection and Volume Accuracy",
    },
    {
      type: "paragraph",
      text: "For small injection volumes (0.05–0.5 mL), insulin syringes (1 mL, 28–31 gauge) provide the best volume accuracy. Standard syringes calibrated in 0.1 mL or 0.2 mL increments introduce significant error at small volumes.",
    },
    {
      type: "subheading",
      text: "Reading Insulin Syringe Markings",
    },
    {
      type: "paragraph",
      text: "Insulin syringes are typically marked in units (U) rather than mL. The conversion depends on the syringe type:",
    },
    {
      type: "list",
      items: [
        "U-100 syringe: 100 units = 1 mL; therefore 10 units = 0.1 mL",
        "U-40 syringe: 40 units = 1 mL; therefore 4 units = 0.1 mL",
        "Most modern insulin syringes sold in the US are U-100",
        "Verify your syringe type before calculating draw volumes",
      ],
    },
    {
      type: "heading",
      text: "Bacteriostatic Water vs. Sterile Water",
    },
    {
      type: "paragraph",
      text: "Bacteriostatic water (BW) contains 0.9% benzyl alcohol as a preservative, inhibiting bacterial growth in multi-use vials. It is the appropriate diluent for most research peptides when the vial will be accessed multiple times.",
    },
    {
      type: "paragraph",
      text: "Sterile water (no preservative) is appropriate for single-use preparations or when benzyl alcohol compatibility is a concern. A small number of peptide sequences may be sensitive to benzyl alcohol at the concentrations present in BW — check literature for any compounds with documented benzyl alcohol incompatibility.",
    },
    {
      type: "paragraph",
      text: "For peptides with poor aqueous solubility (particularly hydrophobic sequences, some IGF variants), initial dissolution in 0.6% acetic acid followed by dilution to target concentration with bacteriostatic water or PBS may improve solution clarity and uniformity.",
    },
    {
      type: "heading",
      text: "Adding Diluent to the Vial",
    },
    {
      type: "paragraph",
      text: "Technique during reconstitution affects peptide integrity:",
    },
    {
      type: "list",
      items: [
        "Swab the vial septum with 70% isopropyl alcohol and allow to dry before inserting the syringe",
        "Direct the diluent stream against the glass vial wall rather than directly onto the lyophilized powder — this reduces mechanical shear and foam formation",
        "Do not shake the vial — gentle rotation or swirling is sufficient and less likely to cause aggregation",
        "Allow the powder to dissolve fully before drawing; most peptides dissolve within 30–120 seconds with gentle movement",
        "If the solution remains cloudy after several minutes of gentle agitation, the peptide may require a different diluent or slightly warmed BW (not hot)",
      ],
    },
    {
      type: "heading",
      text: "Common Reconstitution Errors",
    },
    {
      type: "subheading",
      text: "Wrong Unit Conversion",
    },
    {
      type: "paragraph",
      text: "The most common error is failing to convert vial size from mg to mcg before dividing by volume. Adding 1 mL to a 5 mg vial does not produce 5 mcg/mL — it produces 5,000 mcg/mL (5 mg/mL). Verify unit conversions before calculating dose volumes.",
    },
    {
      type: "subheading",
      text: "Syringe Type Mismatch",
    },
    {
      type: "paragraph",
      text: "Using a U-40 syringe while calculating doses for a U-100 syringe (or vice versa) produces a 2.5x dosing error. Confirm syringe type at the start of each reconstitution.",
    },
    {
      type: "subheading",
      text: "Overfilling vs. Underfilling",
    },
    {
      type: "paragraph",
      text: "Adding more diluent than calculated reduces concentration proportionally; adding less increases it. Record the exact volume added at reconstitution so subsequent dose calculations reference the actual concentration, not an assumed one.",
    },
    {
      type: "subheading",
      text: "Freeze-Thaw Concentration Change",
    },
    {
      type: "paragraph",
      text: "Repeated freeze-thaw cycles can cause aggregation and apparent concentration reduction in reconstituted solutions. If the research protocol requires extended duration, prepare aliquots at reconstitution and freeze individual-use volumes rather than freezing and thawing a single vial repeatedly.",
    },
    {
      type: "heading",
      text: "Concentration Stability After Reconstitution",
    },
    {
      type: "table",
      headers: ["Storage Condition", "Expected Stability (Reconstituted)"],
      rows: [
        ["-20°C (single-use aliquots)", "3–6 months for most peptides"],
        ["-20°C (multi-use, minimal freeze-thaw)", "4–8 weeks; varies by sequence"],
        ["4°C (refrigerator, multi-use)", "3–6 weeks typical"],
        ["Room temperature", "Hours to days; avoid for research use"],
        [">25°C", "Rapid degradation; not acceptable"],
      ],
    },
    {
      type: "paragraph",
      text: "Peptides containing methionine (TB-500 at position 6), cysteine, tryptophan, or asparagine residues are more susceptible to oxidation and deamidation at 4°C — for these compounds, the lower end of stability estimates applies.",
    },
    {
      type: "heading",
      text: "Worked Example: BPC-157 Research Protocol",
    },
    {
      type: "paragraph",
      text: "Protocol requirement: 250 mcg BPC-157 per dose, subcutaneous, 0.1 mL injection volume, 5 mg vial.",
    },
    {
      type: "list",
      items: [
        "Step 1 — Convert vial to mcg: 5 mg × 1,000 = 5,000 mcg",
        "Step 2 — Determine required concentration: 250 mcg ÷ 0.1 mL = 2,500 mcg/mL",
        "Step 3 — Calculate diluent volume: 5,000 mcg ÷ 2,500 mcg/mL = 2.0 mL bacteriostatic water",
        "Step 4 — Verify per-dose draw: at 2,500 mcg/mL using a U-100 insulin syringe, 0.1 mL = 10 units",
        "Step 5 — Record: note '5 mg BPC-157, reconstituted with 2.0 mL BW, concentration 2,500 mcg/mL, date [X]' in lab notebook",
      ],
    },
    {
      type: "heading",
      text: "Documentation Best Practice",
    },
    {
      type: "paragraph",
      text: "For every reconstitution event, record: peptide identity and lot number, vial mass, diluent type and volume added, calculated concentration, date of reconstitution, and planned storage condition. This documentation is essential for reproducibility and for identifying the source of any between-experiment variability.",
    },
    {
      type: "divider",
    },
    {
      type: "disclaimer",
      text: "This guide is for research purposes only. All peptides referenced are for laboratory investigation and are not intended for human administration.",
    },
  ],
};
