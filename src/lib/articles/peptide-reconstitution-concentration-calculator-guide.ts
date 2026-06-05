import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "peptide-reconstitution-concentration-calculator-guide",
  title: "Peptide Reconstitution & Concentration Calculator: A Researcher's Math Guide",
  description:
    "Step-by-step calculations for reconstituting peptides to any target concentration — covering dilution math, solvent volumes, unit conversions (mg, mcg, IU, nmol), and common dosing errors to avoid.",
  category: "Handling & Storage",
  readMinutes: 8,
  publishedAt: "2026-06-05",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Reconstituting peptides at the wrong concentration is one of the most common — and consequential — errors in preclinical research. A 10× concentration mistake means every subsequent dose is either 10 times too high or too low, invalidating weeks of experimental data. This guide provides the exact math needed to reconstitute any peptide to a precise target concentration, with worked examples for the most commonly researched compounds.",
    },
    {
      type: "callout",
      text: "For research use only. All calculations assume standard vials supplied lyophilized. Always verify vial contents on the Certificate of Analysis before reconstitution.",
    },
    {
      type: "heading",
      text: "Core Formula: The C1V1 = C2V2 Principle",
    },
    {
      type: "paragraph",
      text: "Every reconstitution problem reduces to one equation: C1V1 = C2V2, where C1 is the starting concentration (mass ÷ solvent volume you'll add), and C2V2 is your desired working concentration and volume. In practice, since you're starting from dry powder, C1 = mass of peptide ÷ volume of solvent added. This means: Volume to add (mL) = Mass in vial (mg) ÷ Target concentration (mg/mL).",
    },
    {
      type: "paragraph",
      text: "Example: A vial contains 5 mg of BPC-157 and you want a concentration of 500 mcg/mL (0.5 mg/mL). Volume to add = 5 mg ÷ 0.5 mg/mL = 10 mL of bacteriostatic water. Each 0.1 mL (100 µL) drawn will then contain 50 mcg of BPC-157.",
    },
    {
      type: "heading",
      text: "Unit Conversions Cheat Sheet",
    },
    {
      type: "paragraph",
      text: "Peptide research uses mg, mcg, IU, and nmol interchangeably depending on the compound and publication source. Mastering conversions prevents dosing confusion.",
    },
    {
      type: "table",
      headers: ["From", "To", "Multiply by"],
      rows: [
        ["mg", "mcg (µg)", "× 1,000"],
        ["mcg", "mg", "÷ 1,000"],
        ["mg/mL", "mcg/mL", "× 1,000"],
        ["mg", "nmol", "÷ (MW in g/mol) × 1,000,000"],
        ["IU (GH)", "mg", "IU ÷ 3 (approx. 1 IU ≈ 0.33 mg for many GH peptides)"],
      ],
    },
    {
      type: "heading",
      text: "Worked Examples for Common Research Peptides",
    },
    {
      type: "subheading",
      text: "BPC-157 (5 mg vial)",
    },
    {
      type: "paragraph",
      text: "Target: 500 mcg/mL for a standard rodent IP dosing protocol (typical research dose 10 mcg/kg in a 250 g rat = 2.5 mcg per injection = 5 µL from a 500 mcg/mL solution). Calculation: 5 mg ÷ 0.5 mg/mL = 10 mL bacteriostatic water. Result: 500 mcg/mL, 10 mL total volume. Each 0.1 mL = 50 mcg. For a 250 g rat at 10 mcg/kg: inject 0.005 mL (5 µL). Note: 5 µL is difficult to measure reliably with standard insulin syringes. A preferred approach: add only 2 mL to get 2,500 mcg/mL, then dilute 0.1 mL in 0.9 mL saline to get 250 mcg/mL, and inject 0.1 mL per 250 g rat for 25 mcg/kg dosing.",
    },
    {
      type: "subheading",
      text: "TB-500 (5 mg vial)",
    },
    {
      type: "paragraph",
      text: "Target: 1 mg/mL stock. Calculation: 5 mg ÷ 1 mg/mL = 5 mL bacteriostatic water. Result: 1 mg/mL, 5 mL total. Each 0.1 mL = 100 mcg. For published rodent doses of 100–500 mcg/kg in a 300 g rat (30–150 mcg): inject 0.03–0.15 mL from this stock. This volume range is practical with a standard U-100 insulin syringe.",
    },
    {
      type: "subheading",
      text: "Semaglutide (2 mg vial)",
    },
    {
      type: "paragraph",
      text: "Target: 100 mcg/mL (for subcutaneous dosing in rodent models). Calculation: 2 mg ÷ 0.1 mg/mL = 20 mL. This creates a large volume. Preferred alternative: reconstitute at 1 mg/mL (2 mg in 2 mL), then dilute 0.1 mL into 0.9 mL saline before use = 0.1 mg/mL (100 mcg/mL) in 1 mL working solution. Working solution should be used within 24–48 hours; stock at 1 mg/mL can be stored frozen.",
    },
    {
      type: "subheading",
      text: "Ipamorelin (2 mg vial)",
    },
    {
      type: "paragraph",
      text: "Target: 200 mcg/mL for mouse research (typical dose 100–200 mcg/kg in 25 g mouse = 2.5–5 mcg per injection). Calculation: 2 mg ÷ 0.2 mg/mL = 10 mL bacteriostatic water. Each 0.1 mL = 20 mcg. For a 25 g mouse at 100 mcg/kg: inject 0.0125 mL — again too small. Better: reconstitute at 2 mg/mL (add 1 mL), store as stock, dilute to working concentration before each use.",
    },
    {
      type: "heading",
      text: "Syringe Volume Guide by Insulin Syringe Type",
    },
    {
      type: "table",
      headers: ["Syringe Type", "Total Volume", "Smallest Graduation", "Min. Practical Draw"],
      rows: [
        ["U-100, 1 mL", "1.0 mL", "0.01 mL (1 unit)", "0.02 mL"],
        ["U-100, 0.5 mL", "0.5 mL", "0.005 mL (0.5 unit)", "0.01 mL"],
        ["U-100, 0.3 mL", "0.3 mL", "0.005 mL (0.5 unit)", "0.01 mL"],
        ["Hamilton 10 µL", "10 µL", "0.2 µL", "1 µL"],
      ],
    },
    {
      type: "paragraph",
      text: "For injection volumes below 10 µL, use a Hamilton microsyringe or volumetrically dilute the stock to bring the injection volume above 20–25 µL. Anything below 10 µL introduces unacceptable dosing variance with standard lab syringes.",
    },
    {
      type: "heading",
      text: "Two-Stage Dilution Protocol (Recommended for High-Potency Peptides)",
    },
    {
      type: "paragraph",
      text: "When target doses require sub-10 µL injection volumes, use a two-stage dilution: Stage 1 — Reconstitute at high concentration (e.g., 5 mg/mL) in bacteriostatic water. Store as master stock at -20°C. Stage 2 — On the day of dosing, dilute master stock with sterile 0.9% saline to working concentration. Use working solution within 6–8 hours. Discard remainder. This approach maintains stock stability (concentrated solutions store better) while enabling precise, practical injection volumes.",
    },
    {
      type: "heading",
      text: "Concentration Calculator Table: Common Vial Sizes",
    },
    {
      type: "table",
      headers: ["Vial Content", "Add This Volume", "Resulting Concentration", "Per 0.1 mL Draw"],
      rows: [
        ["2 mg", "1 mL BW", "2,000 mcg/mL", "200 mcg"],
        ["2 mg", "2 mL BW", "1,000 mcg/mL", "100 mcg"],
        ["2 mg", "4 mL BW", "500 mcg/mL", "50 mcg"],
        ["5 mg", "1 mL BW", "5,000 mcg/mL", "500 mcg"],
        ["5 mg", "2 mL BW", "2,500 mcg/mL", "250 mcg"],
        ["5 mg", "5 mL BW", "1,000 mcg/mL", "100 mcg"],
        ["5 mg", "10 mL BW", "500 mcg/mL", "50 mcg"],
        ["10 mg", "2 mL BW", "5,000 mcg/mL", "500 mcg"],
        ["10 mg", "5 mL BW", "2,000 mcg/mL", "200 mcg"],
        ["10 mg", "10 mL BW", "1,000 mcg/mL", "100 mcg"],
      ],
    },
    {
      type: "heading",
      text: "Common Reconstitution Errors and How to Avoid Them",
    },
    {
      type: "list",
      items: [
        "Adding bacteriostatic water too quickly: jet the solvent directly onto the peptide cake and it can denature. Always angle the syringe so solvent runs down the vial wall, not directly onto the lyophilized cake.",
        "Shaking the vial: peptides aggregate and denature under mechanical shear. Roll or gently swirl only. Never vortex.",
        "Reconstituting in plain sterile water: without a bacteriostatic agent, solutions degrade within 24–48 hours at 4°C. Use bacteriostatic water (0.9% benzyl alcohol) for storage-stable solutions.",
        "Storing reconstituted peptides at room temperature: even with bacteriostatic water, store at 4°C (use within 30 days) or -20°C (use within 3 months). Avoid freeze-thaw cycles — aliquot before freezing.",
        "Forgetting to factor in dead space: insulin syringes typically have 5–10 µL of dead space. For very small draws, this is significant. Use low dead-space syringes or add 5–10% volume to compensate.",
        "Assuming IU = mg: for most research peptides, IU designations are not standardized. Always check the vendor's COA or published literature for mass-based dosing.",
      ],
    },
    {
      type: "heading",
      text: "Practical Workflow: Reconstitution Checklist",
    },
    {
      type: "list",
      items: [
        "Verify vial contents against COA (mass, purity, lot number) before reconstitution.",
        "Allow refrigerated vials to reach room temperature (~15 min) before opening to prevent condensation from entering the vial.",
        "Wipe rubber septum with 70% isopropyl alcohol and allow to dry 30 seconds.",
        "Draw calculated volume of bacteriostatic water into syringe. Insert needle at 45° angle into vial septum.",
        "Slowly introduce solvent down the vial wall — do not jet onto peptide cake.",
        "Gently swirl (do not shake) until fully dissolved. Most peptides dissolve in 30–60 seconds.",
        "Label vial immediately: compound name, concentration, reconstitution date, lot number.",
        "Aliquot into single-use volumes if long-term storage is needed. Store at -20°C.",
        "Document in lab notebook: vial mass, solvent volume added, resulting concentration, expected dose volume.",
      ],
    },
    {
      type: "divider",
    },
    {
      type: "disclaimer",
      text: "All content is for educational purposes related to licensed preclinical research. Peptides described are research compounds not approved for human use. Nexphoria supplies research-grade peptides for laboratory and academic research only.",
    },
  ],
};
