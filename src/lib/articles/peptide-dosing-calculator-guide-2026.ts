import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "peptide-dosing-calculator-guide-2026",
  title: "Peptide Dosing Calculator Guide: Concentration, Volume, and Reconstitution Math",
  description:
    "A practical reference for research peptide dosing calculations — how to compute concentration after reconstitution, calculate injection volumes for specific doses, and avoid the most common dilution errors in peptide research protocols.",
  category: "Research Resources",
  readMinutes: 8,
  publishedAt: "2026-06-16",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Dosing errors are among the most preventable sources of variability in peptide research, yet they occur with surprising frequency. The arithmetic is not complex — but it requires consistent application of a clear framework. This guide provides that framework: how concentration is established during reconstitution, how to calculate the injection volume for any target dose, and how to avoid the unit-conversion errors that consistently trip up researchers working with microgram-scale peptide doses.",
    },
    {
      type: "heading",
      text: "Step 1: Understanding What You Have — Vial Contents",
    },
    {
      type: "paragraph",
      text: "Research peptides are supplied as lyophilized (freeze-dried) powder. The vial label specifies the total mass of peptide present — typically expressed in milligrams (mg). Common vial sizes include 2 mg, 5 mg, and 10 mg, though this varies by compound and supplier.",
    },
    {
      type: "paragraph",
      text: "Important: the vial may also contain excipients (typically mannitol or trehalose used as lyoprotectants during freeze-drying). These are inert but add mass to the vial. The labeled peptide mass refers specifically to the active compound, not the total powder weight.",
    },
    {
      type: "heading",
      text: "Step 2: Choosing Your Reconstitution Volume",
    },
    {
      type: "paragraph",
      text: "When you add bacteriostatic water (or your chosen diluent) to the vial, you establish the concentration. The relationship is direct:",
    },
    {
      type: "callout",
      text: "Concentration = Peptide Mass ÷ Diluent Volume\nExample: 5 mg peptide + 2 mL bacteriostatic water = 2.5 mg/mL = 2,500 mcg/mL",
    },
    {
      type: "paragraph",
      text: "Choose your reconstitution volume based on the injection volumes you want to work with. Smaller volumes produce higher concentrations, which means smaller injection volumes per dose — useful for subcutaneous administration where injection site discomfort increases with volume. Larger reconstitution volumes produce lower concentrations, which provides finer resolution when measuring small doses, reducing pipetting error.",
    },
    {
      type: "table",
      headers: ["Vial Size", "Diluent Added", "Resulting Concentration"],
      rows: [
        ["5 mg", "1 mL", "5 mg/mL = 5,000 mcg/mL"],
        ["5 mg", "2 mL", "2.5 mg/mL = 2,500 mcg/mL"],
        ["5 mg", "5 mL", "1 mg/mL = 1,000 mcg/mL"],
        ["2 mg", "1 mL", "2 mg/mL = 2,000 mcg/mL"],
        ["2 mg", "2 mL", "1 mg/mL = 1,000 mcg/mL"],
        ["10 mg", "2 mL", "5 mg/mL = 5,000 mcg/mL"],
        ["10 mg", "10 mL", "1 mg/mL = 1,000 mcg/mL"],
      ],
    },
    {
      type: "heading",
      text: "Step 3: Calculating Injection Volume for a Target Dose",
    },
    {
      type: "paragraph",
      text: "Once concentration is established, calculating the injection volume is straightforward:",
    },
    {
      type: "callout",
      text: "Injection Volume = Target Dose ÷ Concentration\nExample: Target dose = 250 mcg; Concentration = 2,500 mcg/mL\n250 ÷ 2,500 = 0.10 mL = 10 units on a U-100 insulin syringe",
    },
    {
      type: "paragraph",
      text: "Researchers using U-100 insulin syringes (the most common choice for subcutaneous peptide administration in animal studies) can convert mL to syringe units directly: 1 mL = 100 units on a U-100 syringe. This conversion is useful because insulin syringes are calibrated in units, not mL.",
    },
    {
      type: "table",
      headers: ["Target Dose", "Concentration", "Volume (mL)", "U-100 Syringe Units"],
      rows: [
        ["100 mcg", "1,000 mcg/mL", "0.10 mL", "10 units"],
        ["200 mcg", "1,000 mcg/mL", "0.20 mL", "20 units"],
        ["250 mcg", "2,500 mcg/mL", "0.10 mL", "10 units"],
        ["500 mcg", "2,500 mcg/mL", "0.20 mL", "20 units"],
        ["1 mg (1,000 mcg)", "5,000 mcg/mL", "0.20 mL", "20 units"],
        ["300 mcg", "3,000 mcg/mL", "0.10 mL", "10 units"],
        ["500 mcg", "5,000 mcg/mL", "0.10 mL", "10 units"],
      ],
    },
    {
      type: "heading",
      text: "Unit Conversion Reference",
    },
    {
      type: "paragraph",
      text: "Most peptide doses are specified in micrograms (mcg) or milligrams (mg). Keeping these straight is essential:",
    },
    {
      type: "list",
      items: [
        "1 mg = 1,000 mcg (micrograms)",
        "1 mcg = 0.001 mg",
        "1 mL = 100 units on a U-100 insulin syringe",
        "0.1 mL = 10 units on a U-100 syringe",
        "0.01 mL = 1 unit on a U-100 syringe",
      ],
    },
    {
      type: "paragraph",
      text: "The most common error: mixing mg and mcg in the same calculation without converting. If your dose is specified in mcg and your concentration is in mg/mL, convert one of them before dividing. 500 mcg ÷ 5 mg/mL does not equal 100 mL — it equals 0.1 mL (after converting 5 mg/mL to 5,000 mcg/mL).",
    },
    {
      type: "heading",
      text: "Worked Examples by Compound",
    },
    {
      type: "subheading",
      text: "Example 1: BPC-157 at 250 mcg per injection",
    },
    {
      type: "list",
      items: [
        "Vial: 5 mg BPC-157",
        "Reconstitution: add 2 mL bacteriostatic water → concentration = 2,500 mcg/mL",
        "Target dose: 250 mcg",
        "Volume: 250 ÷ 2,500 = 0.10 mL = 10 units on U-100 syringe",
        "Doses per vial: 5,000 mcg total ÷ 250 mcg per dose = 20 doses",
      ],
    },
    {
      type: "subheading",
      text: "Example 2: Ipamorelin at 200 mcg per injection",
    },
    {
      type: "list",
      items: [
        "Vial: 2 mg Ipamorelin",
        "Reconstitution: add 2 mL bacteriostatic water → concentration = 1,000 mcg/mL",
        "Target dose: 200 mcg",
        "Volume: 200 ÷ 1,000 = 0.20 mL = 20 units on U-100 syringe",
        "Doses per vial: 2,000 mcg total ÷ 200 mcg per dose = 10 doses",
      ],
    },
    {
      type: "subheading",
      text: "Example 3: Semaglutide at 500 mcg per injection",
    },
    {
      type: "list",
      items: [
        "Vial: 5 mg Semaglutide",
        "Reconstitution: add 1 mL bacteriostatic water → concentration = 5,000 mcg/mL",
        "Target dose: 500 mcg",
        "Volume: 500 ÷ 5,000 = 0.10 mL = 10 units on U-100 syringe",
        "Doses per vial: 5,000 mcg total ÷ 500 mcg per dose = 10 doses",
      ],
    },
    {
      type: "heading",
      text: "Common Calculation Errors to Avoid",
    },
    {
      type: "list",
      items: [
        "Adding too much diluent: if you intend to add 2 mL but overshoot to 2.5 mL, your concentration is lower than planned — all subsequent doses will be underdosed by ~20%",
        "Forgetting to convert units: always confirm mg vs. mcg before dividing; this is the single most common arithmetic error",
        "Misreading syringe markings: U-100 syringes have units marked on the barrel; confirm whether your syringe is U-100 or U-40 (different scale) before use",
        "Using the wrong vial size in the calculation: double-check the labeled peptide mass before calculating — a 5 mg vial and a 2 mg vial reconstituted with the same volume will have very different concentrations",
        "Not accounting for multiple freeze-thaw cycles: if you are working from a previously reconstituted vial, concentration does not change with freeze-thaw, but peptide integrity may degrade; use vial tracking to record how many thaw cycles have occurred",
      ],
    },
    {
      type: "heading",
      text: "Printable Quick-Reference Formula",
    },
    {
      type: "callout",
      text: "CONCENTRATION = Peptide Mass (mcg) ÷ Diluent Volume (mL)\nVOLUME TO DRAW = Target Dose (mcg) ÷ Concentration (mcg/mL)\nU-100 SYRINGE UNITS = Volume (mL) × 100\n\nVerification check: Units × Concentration ÷ 100 = Dose in mcg",
    },
    {
      type: "paragraph",
      text: "For any calculation involving a new compound, vial size, or reconstitution volume, work through all three steps from scratch rather than extrapolating from a prior protocol. The arithmetic is fast; errors from assumptions are not.",
    },
    {
      type: "disclaimer",
      text: "All products are sold strictly for research purposes only. Not for human consumption. This guide is provided as a technical reference for laboratory researchers. Nexphoria does not provide medical advice.",
    },
  ],
};
