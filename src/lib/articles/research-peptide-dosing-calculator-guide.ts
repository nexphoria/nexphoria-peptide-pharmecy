import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "research-peptide-dosing-calculator-guide",
  title: "Peptide Dosing Calculator: How to Calculate Research Concentrations",
  description:
    "A practical guide to calculating peptide research concentrations — how to reconstitute lyophilized peptides, compute mcg-per-unit volumes, and design consistent dosing across research protocols. Includes worked examples for common compounds.",
  category: "Research Fundamentals",
  readMinutes: 9,
  publishedAt: "2026-06-05",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Accurate peptide dosing calculations are foundational to reproducible research. An error in concentration preparation propagates through every subsequent measurement in the protocol — dose-response curves become meaningless, between-study comparisons fail, and results cannot be replicated. This guide covers the math clearly: how to calculate reconstitution volumes, how to determine unit volumes for target doses, and how to avoid the common errors that compromise research integrity.",
    },
    {
      type: "heading",
      text: "Core Concept: Concentration = Amount ÷ Volume",
    },
    {
      type: "paragraph",
      text: "Every peptide dosing calculation is a variant of one equation: Concentration = Amount ÷ Volume. The units matter. Research peptides are typically supplied in milligrams (mg), with doses discussed in micrograms (mcg). 1 mg = 1000 mcg. Volumes are typically in milliliters (mL), with administration volumes discussed in microliters (µL). 1 mL = 1000 µL.",
    },
    {
      type: "paragraph",
      text: "Mixing these units without conversion is the most common source of 10x or 1000x dosing errors. Establish your unit framework at the start of any protocol and stay consistent throughout.",
    },
    {
      type: "heading",
      text: "Step 1: Reconstitution — How Much Solvent to Add",
    },
    {
      type: "paragraph",
      text: "Lyophilized peptides arrive as dry powder in sealed vials. The first decision is how much bacteriostatic water (or sterile water for single-use) to add, which determines your stock concentration.",
    },
    {
      type: "subheading",
      text: "The Standard Formula",
    },
    {
      type: "paragraph",
      text: "Stock Concentration (mcg/mL) = Peptide Amount (mcg) ÷ Solvent Volume (mL)",
    },
    {
      type: "paragraph",
      text: "Common convention in peptide research is to prepare a 1000 mcg/mL (1 mg/mL) stock, which provides convenient math for downstream dilutions. To achieve this:",
    },
    {
      type: "list",
      items: [
        "2 mg vial: add 2 mL solvent → 1000 mcg/mL",
        "5 mg vial: add 5 mL solvent → 1000 mcg/mL",
        "10 mg vial: add 10 mL solvent → 1000 mcg/mL",
      ],
    },
    {
      type: "paragraph",
      text: "For vials with unusual amounts (e.g., 2.5 mg, 7.5 mg), the same principle applies: add solvent volume in mL equal to the peptide amount in mg to achieve 1000 mcg/mL.",
    },
    {
      type: "subheading",
      text: "Why 1000 mcg/mL Is Convenient",
    },
    {
      type: "paragraph",
      text: "At 1000 mcg/mL, the volume needed for any dose in mcg is simply that dose divided by 1000, expressed in mL. A 100 mcg dose = 0.1 mL = 100 µL. A 200 mcg dose = 0.2 mL = 200 µL. No complex math; volumes are easy to measure accurately with a standard insulin syringe.",
    },
    {
      type: "heading",
      text: "Step 2: Calculating Dose Volumes from Stock",
    },
    {
      type: "paragraph",
      text: "Once you have a stock solution, the dose volume formula is: Volume (mL) = Target Dose (mcg) ÷ Stock Concentration (mcg/mL)",
    },
    {
      type: "heading",
      text: "Worked Examples for Common Research Peptides",
    },
    {
      type: "subheading",
      text: "Example 1: BPC-157 at 250 mcg",
    },
    {
      type: "paragraph",
      text: "Setup: 5 mg BPC-157 reconstituted in 5 mL bacteriostatic water → 1000 mcg/mL stock.",
    },
    {
      type: "paragraph",
      text: "Target dose: 250 mcg. Calculation: 250 mcg ÷ 1000 mcg/mL = 0.25 mL = 250 µL. On a U-100 insulin syringe (100 units per mL), 0.25 mL = 25 units on the syringe.",
    },
    {
      type: "subheading",
      text: "Example 2: CJC-1295 (no-DAC) + Ipamorelin at 100 mcg Each",
    },
    {
      type: "paragraph",
      text: "Setup: Both compounds reconstituted to 1000 mcg/mL (2 mg each in 2 mL bacteriostatic water).",
    },
    {
      type: "paragraph",
      text: "Target dose: 100 mcg of each. Calculation per compound: 100 mcg ÷ 1000 mcg/mL = 0.1 mL = 100 µL = 10 units on U-100 syringe. Both can be drawn into the same syringe sequentially for a combined 0.2 mL injection volume.",
    },
    {
      type: "subheading",
      text: "Example 3: Semaglutide at 0.25 mg (250 mcg)",
    },
    {
      type: "paragraph",
      text: "Setup: 5 mg semaglutide vial. Target stock: 2.5 mg/mL (to keep injection volumes practical for a weekly dose). Reconstitution: 5 mg ÷ 2.5 mg/mL = 2 mL solvent.",
    },
    {
      type: "paragraph",
      text: "At 2.5 mg/mL = 2500 mcg/mL: for a 250 mcg dose, volume = 250 ÷ 2500 = 0.1 mL = 100 µL = 10 units on U-100 syringe.",
    },
    {
      type: "subheading",
      text: "Example 4: Epithalon at 5 mg (5000 mcg)",
    },
    {
      type: "paragraph",
      text: "Some peptides used in research use higher absolute dose amounts. For a 5 mg full-vial protocol: if the entire 5 mg vial is the research dose, reconstitute in a small volume — e.g., 1 mL — for a 5000 mcg/mL stock, and administer the full 1 mL. Alternatively, reconstitute in 2.5 mL for a 2000 mcg/mL stock, and administer 2.5 mL in split volumes.",
    },
    {
      type: "heading",
      text: "Syringe Reading: U-100 Insulin Syringe Conversion",
    },
    {
      type: "paragraph",
      text: "Insulin syringes are calibrated in 'units' (U) rather than mL. A U-100 syringe holds 1 mL and has 100 units total, so 1 unit = 0.01 mL = 10 µL. The conversion table:",
    },
    {
      type: "table",
      headers: ["Volume (mL)", "Volume (µL)", "Units on U-100 Syringe"],
      rows: [
        ["0.05 mL", "50 µL", "5 units"],
        ["0.10 mL", "100 µL", "10 units"],
        ["0.20 mL", "200 µL", "20 units"],
        ["0.25 mL", "250 µL", "25 units"],
        ["0.50 mL", "500 µL", "50 units"],
        ["1.00 mL", "1000 µL", "100 units"],
      ],
    },
    {
      type: "paragraph",
      text: "For doses that require sub-10-unit volumes (under 100 µL), higher-concentration stock solutions may be preferable to improve measurement accuracy. At 0.01 mL (1 unit), pipetting error becomes a more significant proportion of the total volume.",
    },
    {
      type: "heading",
      text: "Preparing Dilutions from High-Concentration Stock",
    },
    {
      type: "paragraph",
      text: "If working with doses that would require impractically small injection volumes from a 1000 mcg/mL stock, prepare a working dilution. The C1V1 = C2V2 formula applies:",
    },
    {
      type: "paragraph",
      text: "C1 = starting concentration, V1 = starting volume to take, C2 = target concentration, V2 = final volume of dilution.",
    },
    {
      type: "paragraph",
      text: "Example: You have 1000 mcg/mL stock and need a 100 mcg/mL working solution for small-dose protocols. For 5 mL of working solution: V1 = (100 mcg/mL × 5 mL) ÷ 1000 mcg/mL = 0.5 mL of stock + 4.5 mL diluent = 5 mL total at 100 mcg/mL.",
    },
    {
      type: "heading",
      text: "Common Errors to Avoid",
    },
    {
      type: "list",
      items: [
        "mg/mcg confusion — always convert before calculating; 2 mg = 2000 mcg, not 2",
        "mL/µL confusion — 0.1 mL = 100 µL; do not mistake 100 on a syringe as 100 mL",
        "Wrong solvent volume — adding 1 mL to a 2 mg vial gives 2000 mcg/mL, not 1000; verify your target concentration before proceeding",
        "Not accounting for dead volume — syringes have hub dead volume (typically 0.01–0.08 mL); this is not a dosing error per se, but inconsistent dead volume handling reduces between-injection reproducibility",
        "Reconstituting too early — reconstituted peptides have limited stability; prepare stocks only for the volumes needed within the storage stability window",
        "Using sterile water for multi-use vials — sterile water without preservative allows bacterial growth after the first puncture; use bacteriostatic water for any vial accessed more than once",
      ],
    },
    {
      type: "heading",
      text: "Documentation Best Practices",
    },
    {
      type: "paragraph",
      text: "Research reproducibility requires that concentration calculations be documented precisely in lab notebooks or electronic records. For every stock preparation, record:",
    },
    {
      type: "list",
      items: [
        "Compound name, lot number, and supplier COA purity",
        "Vial weight (mg) from product label",
        "Solvent type and volume added (mL)",
        "Calculated stock concentration (mcg/mL)",
        "Date and time of reconstitution",
        "Storage location and conditions",
        "Expiration date for reconstituted stock",
      ],
    },
    {
      type: "paragraph",
      text: "This documentation is not bureaucratic overhead. It is what makes the difference between a result you can replicate and a result you cannot explain when a later experiment gives different numbers.",
    },
    {
      type: "heading",
      text: "Quick Reference: Reconstitution Calculator",
    },
    {
      type: "table",
      headers: ["Vial Size (mg)", "Solvent to Add (mL)", "Stock Concentration"],
      rows: [
        ["2 mg", "2 mL", "1000 mcg/mL"],
        ["5 mg", "5 mL", "1000 mcg/mL"],
        ["10 mg", "10 mL", "1000 mcg/mL"],
        ["2 mg", "1 mL", "2000 mcg/mL"],
        ["5 mg", "2.5 mL", "2000 mcg/mL"],
        ["2 mg", "4 mL", "500 mcg/mL"],
        ["5 mg", "10 mL", "500 mcg/mL"],
      ],
    },
    {
      type: "divider",
    },
    {
      type: "disclaimer",
      text: "This guide is provided for researchers working with peptides in qualified laboratory settings. All compounds referenced are for research use only. Dosing information is intended to support accurate laboratory preparation, not to provide guidance on any clinical or non-research application.",
    },
  ],
};
