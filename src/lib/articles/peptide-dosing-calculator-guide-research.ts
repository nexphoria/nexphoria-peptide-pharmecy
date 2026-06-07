import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "peptide-dosing-calculator-guide-research",
  title: "Peptide Dosing Calculations for Researchers: A Practical Reference",
  description:
    "A step-by-step reference for calculating peptide doses in research settings — unit conversions, reconstitution math, concentration calculations, and how to account for animal model weight scaling.",
  category: "Research Protocols",
  readMinutes: 11,
  publishedAt: "2026-06-07",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Accurate dosing calculation is foundational to peptide research. An error in reconstitution math or unit conversion doesn't just affect one data point — it can invalidate an entire experiment by exposing subjects to the wrong dose, making results uninterpretable or contradictory to the existing literature. This reference covers the core calculations researchers need, with worked examples.",
    },
    {
      type: "disclaimer",
      text: "This content is intended exclusively for researchers working in licensed preclinical settings. All compounds referenced are for research use only and are not approved for human administration.",
    },
    {
      type: "heading",
      text: "Unit Basics: mcg, mg, IU, and nmol",
    },
    {
      type: "paragraph",
      text: "Peptide quantities in research are typically expressed in micrograms (mcg or μg) or milligrams (mg). Some peptides — particularly growth hormone and related compounds — are also expressed in International Units (IU), which reflect biological activity rather than mass. Converting between these units requires knowing the specific potency factor, which varies by compound.",
    },
    {
      type: "table",
      headers: ["Unit", "Equivalent", "Common Use"],
      rows: [
        ["1 mg", "1,000 mcg", "Vial quantities, bulk ordering"],
        ["1 mcg", "0.001 mg", "Individual doses, animal dosing"],
        ["1 IU (HGH)", "~0.33 mg", "Growth hormone dosing"],
        ["1 nmol", "Compound-specific (MW dependent)", "Molar dosing in cell studies"],
      ],
    },
    {
      type: "heading",
      text: "Reconstitution: Calculating Peptide Concentration",
    },
    {
      type: "paragraph",
      text: "Reconstitution converts a lyophilized peptide (dry powder) into a liquid solution by adding a diluent — typically bacteriostatic water or sterile saline. The resulting concentration depends on two variables: the amount of peptide (in mg or mcg) and the volume of diluent added (in mL).",
    },
    {
      type: "subheading",
      text: "The Basic Formula",
    },
    {
      type: "paragraph",
      text: "Concentration (mcg/mL) = Total peptide quantity (mcg) ÷ Volume of diluent added (mL)",
    },
    {
      type: "subheading",
      text: "Worked Example: BPC-157",
    },
    {
      type: "paragraph",
      text: "Starting vial: 5 mg (5,000 mcg) of BPC-157. Diluent added: 2 mL bacteriostatic water.",
    },
    {
      type: "paragraph",
      text: "Concentration = 5,000 mcg ÷ 2 mL = 2,500 mcg/mL",
    },
    {
      type: "paragraph",
      text: "To deliver a 250 mcg dose from this solution: Volume needed = 250 mcg ÷ 2,500 mcg/mL = 0.1 mL (100 μL on an insulin syringe).",
    },
    {
      type: "subheading",
      text: "Reading an Insulin Syringe",
    },
    {
      type: "paragraph",
      text: "Insulin syringes are calibrated in Units (U), not mL, because they were designed for insulin at 100 IU/mL. However, 1 mL = 100 U on a standard U-100 insulin syringe. This means 0.1 mL corresponds to 10 U on the syringe. For a 250 mcg dose from the 2,500 mcg/mL solution above, draw to the 10 U mark.",
    },
    {
      type: "table",
      headers: ["Syringe Reading (U)", "Volume (mL)", "Volume (μL)"],
      rows: [
        ["10 U", "0.10 mL", "100 μL"],
        ["20 U", "0.20 mL", "200 μL"],
        ["50 U", "0.50 mL", "500 μL"],
        ["100 U", "1.00 mL", "1000 μL"],
      ],
    },
    {
      type: "heading",
      text: "Animal Model Dose Scaling",
    },
    {
      type: "paragraph",
      text: "Peptide doses in published literature are typically expressed as mcg/kg or μg/kg body weight, allowing translation across different animal sizes. The calculation is straightforward:",
    },
    {
      type: "paragraph",
      text: "Dose for subject = Dose (mcg/kg) × Animal weight (kg)",
    },
    {
      type: "subheading",
      text: "Mouse Dosing Example",
    },
    {
      type: "paragraph",
      text: "Published BPC-157 dose: 10 mcg/kg. Mouse weight: 25 g (0.025 kg). Dose for this mouse = 10 × 0.025 = 0.25 mcg.",
    },
    {
      type: "paragraph",
      text: "Using the 2,500 mcg/mL solution from above: Volume = 0.25 mcg ÷ 2,500 mcg/mL = 0.0001 mL = 0.1 μL. This volume is too small to administer practically with standard equipment.",
    },
    {
      type: "paragraph",
      text: "Solution: Dilute the stock solution. Dilute 1:100 (add 1 part stock to 99 parts diluent) to get 25 mcg/mL. Then: 0.25 mcg ÷ 25 mcg/mL = 0.01 mL = 10 μL. This is administrable via 10 μL Hamilton syringe.",
    },
    {
      type: "subheading",
      text: "Rat Dosing Example",
    },
    {
      type: "paragraph",
      text: "Published TB-500 dose: 50 mcg/kg. Rat weight: 300 g (0.3 kg). Dose = 50 × 0.3 = 15 mcg. Using a 500 mcg/mL solution: Volume = 15 ÷ 500 = 0.03 mL = 30 μL. Easily administrable subcutaneously.",
    },
    {
      type: "heading",
      text: "Allometric Scaling: Human-to-Rodent Dose Translation",
    },
    {
      type: "paragraph",
      text: "When designing protocols informed by clinical data, allometric scaling allows rough translation of doses across species based on body surface area (BSA) rather than simple weight. The FDA-recommended method for converting human doses to rodent equivalents uses the following conversion factors:",
    },
    {
      type: "table",
      headers: ["Species", "Km Factor", "BSA Conversion from Human"],
      rows: [
        ["Human (60 kg)", "37", "Reference"],
        ["Rat (150 g)", "6", "Multiply human mg/kg by 6.2"],
        ["Mouse (20 g)", "3", "Multiply human mg/kg by 12.3"],
        ["Rabbit (1.8 kg)", "12", "Multiply human mg/kg by 3.1"],
      ],
    },
    {
      type: "paragraph",
      text: "Mouse equivalent dose (mg/kg) = Human dose (mg/kg) × (37 ÷ 3) = Human dose × 12.3. This means a 1 mg/kg human dose corresponds to approximately 12.3 mg/kg in mice when scaled by BSA — a commonly overlooked factor that explains why rodent doses often appear high relative to clinical equivalents.",
    },
    {
      type: "heading",
      text: "Molar Concentration: nmol/L and μM",
    },
    {
      type: "paragraph",
      text: "In vitro cell culture work often requires concentrations expressed in molar units (nanomolar, nM; micromolar, μM) rather than mass per volume. Converting requires the peptide's molecular weight (MW).",
    },
    {
      type: "paragraph",
      text: "Molar concentration (μM) = [Mass concentration (mg/mL) ÷ MW (g/mol)] × 1,000,000",
    },
    {
      type: "subheading",
      text: "Example: BPC-157 at 1 mg/mL",
    },
    {
      type: "paragraph",
      text: "BPC-157 MW = 1419.53 g/mol. Concentration (μM) = (1 ÷ 1419.53) × 1,000,000 = 704.5 μM. To prepare a 10 μM solution: dilute 704.5-fold from 1 mg/mL stock.",
    },
    {
      type: "heading",
      text: "Common Calculation Errors and How to Avoid Them",
    },
    {
      type: "list",
      items: [
        "Mixing mcg and mg without converting: Always standardize to one unit before calculating. 5 mg ≠ 5 mcg; the difference is 1000-fold.",
        "Forgetting to account for syringe dead volume: Small-volume syringes have measurable dead space. Factor this into dose calculations for sub-10 μL volumes.",
        "Assuming all IU conversions are the same: IU conversions are compound-specific. 1 IU of hGH ≠ 1 IU of insulin. Never apply one compound's IU factor to another.",
        "Not accounting for benzyl alcohol volume in bacteriostatic water: This is negligible for dosing calculations in most cases but relevant for osmolality calculations in cell culture.",
        "Serial dilution math errors: When making dilutions, verify the dilution factor at each step. A 1:10 dilution means 1 part stock + 9 parts diluent, not 1 part stock + 10 parts diluent.",
      ],
    },
    {
      type: "heading",
      text: "Quick Reference: Common Research Peptide Molecular Weights",
    },
    {
      type: "table",
      headers: ["Peptide", "Molecular Weight (g/mol)", "Common Dose Range (mcg/kg, animal models)"],
      rows: [
        ["BPC-157", "1419.53", "10–100 mcg/kg"],
        ["TB-500 (TB4 fragment)", "4963.44", "50–200 mcg/kg"],
        ["CJC-1295 (no DAC)", "3367.97", "1–5 mcg/kg"],
        ["Ipamorelin", "711.85", "100–300 mcg/kg"],
        ["Selank", "751.87", "300–1000 mcg/kg"],
        ["Hexarelin", "887.04", "50–300 mcg/kg"],
        ["Epithalon", "390.35", "50–100 mcg/kg"],
        ["GHK-Cu", "402.97 (free peptide)", "0.5–5 mg/kg"],
      ],
    },
    {
      type: "heading",
      text: "Summary",
    },
    {
      type: "paragraph",
      text: "Dosing calculation errors are among the most common and consequential sources of error in peptide research. Establishing a calculation workflow — standardize units, calculate reconstitution concentration, determine volume for target dose, verify with a second calculation pass — prevents the bulk of these errors. For animal studies, allometric scaling from published doses and confirmation that the calculated volume is administrable are both essential checks before any experiment begins.",
    },
  ],
};
