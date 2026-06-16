import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "peptide-dosing-math-beginners-guide-2026",
  title: "Peptide Dosing Math: The Beginner's Complete Guide (2026)",
  description:
    "Struggling with peptide reconstitution math? This complete guide covers mcg-to-IU conversions, syringe markings, dilution calculations, and common dosing errors — with worked examples for BPC-157, semaglutide, ipamorelin, and more.",
  category: "Research Protocols",
  readMinutes: 9,
  publishedAt: "2026-06-16",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "The most common source of error in peptide research isn't purity, vendor selection, or storage. It's math. Dosing calculation mistakes — wrong reconstitution volume, unit conversion errors, incorrect syringe readings — are responsible for more failed experiments and inconsistent results than any other single factor. This guide eliminates that problem.",
    },
    {
      type: "heading",
      text: "The Fundamental Units",
    },
    {
      type: "paragraph",
      text: "Before any calculation, you need to know these units and their relationships:",
    },
    {
      type: "list",
      items: [
        "1 gram (g) = 1,000 milligrams (mg) = 1,000,000 micrograms (mcg or µg)",
        "1 mg = 1,000 mcg",
        "1 mcg = 0.001 mg",
        "Peptide vials are typically labeled in mg (e.g., 5mg vial of BPC-157)",
        "Doses are typically specified in mcg (e.g., 250 mcg per injection)",
        "Insulin syringes measure in International Units (IU) — 1 IU = 0.01 mL on a 100-IU/mL syringe",
      ],
    },
    {
      type: "callout",
      text: "Critical: IU is a unit of volume measurement on the syringe, not a measure of biological activity. On a U-100 insulin syringe, 10 IU = 0.1 mL = 100 µL. Do not confuse IU (syringe markings) with International Units of biological activity used in hormone assays.",
    },
    {
      type: "heading",
      text: "The Reconstitution Calculation",
    },
    {
      type: "paragraph",
      text: "The central calculation in peptide research: you have a vial of lyophilized peptide (mass known) and you add a volume of bacteriostatic water. You need to know the resulting concentration, then calculate what volume to draw to get your target dose.",
    },
    {
      type: "subheading",
      text: "Formula",
    },
    {
      type: "list",
      items: [
        "Concentration = Peptide mass in vial ÷ Reconstitution volume",
        "Volume to inject = Target dose ÷ Concentration",
      ],
    },
    {
      type: "heading",
      text: "Worked Example 1: BPC-157",
    },
    {
      type: "paragraph",
      text: "Setup: 5 mg vial of BPC-157. Researcher adds 2.5 mL of bacteriostatic water. Target dose: 250 mcg.",
    },
    {
      type: "list",
      items: [
        "Step 1: Convert vial mass to mcg. 5 mg × 1,000 = 5,000 mcg in the vial.",
        "Step 2: Calculate concentration. 5,000 mcg ÷ 2.5 mL = 2,000 mcg/mL.",
        "Step 3: Calculate injection volume. 250 mcg ÷ 2,000 mcg/mL = 0.125 mL.",
        "Step 4: Convert to syringe units. On a U-100 insulin syringe: 0.125 mL × 100 = 12.5 IU.",
        "Answer: Draw to the 12.5 IU line on a U-100 syringe.",
      ],
    },
    {
      type: "heading",
      text: "Worked Example 2: Ipamorelin",
    },
    {
      type: "paragraph",
      text: "Setup: 2 mg vial of Ipamorelin. Researcher adds 1 mL of bacteriostatic water. Target dose: 100 mcg.",
    },
    {
      type: "list",
      items: [
        "Step 1: Convert. 2 mg × 1,000 = 2,000 mcg.",
        "Step 2: Concentration. 2,000 mcg ÷ 1 mL = 2,000 mcg/mL.",
        "Step 3: Volume needed. 100 mcg ÷ 2,000 mcg/mL = 0.05 mL.",
        "Step 4: Syringe units. 0.05 mL × 100 = 5 IU.",
        "Answer: Draw to the 5 IU line.",
      ],
    },
    {
      type: "heading",
      text: "Worked Example 3: Semaglutide (Lower Dose Protocol)",
    },
    {
      type: "paragraph",
      text: "Setup: 5 mg vial of semaglutide. Researcher adds 2.5 mL bacteriostatic water. Target dose for first injection: 250 mcg (0.25 mg) — a typical research starting dose.",
    },
    {
      type: "list",
      items: [
        "Step 1: Convert. 5 mg × 1,000 = 5,000 mcg.",
        "Step 2: Concentration. 5,000 mcg ÷ 2.5 mL = 2,000 mcg/mL.",
        "Step 3: Volume needed. 250 mcg ÷ 2,000 mcg/mL = 0.125 mL.",
        "Step 4: Syringe units. 0.125 × 100 = 12.5 IU.",
        "Note: If reconstituted in 1 mL instead (concentration = 5,000 mcg/mL), the same 250 mcg dose = 0.05 mL = 5 IU.",
      ],
    },
    {
      type: "callout",
      text: "Key insight: Changing your reconstitution volume changes your concentration — which changes how much you draw for the same dose. Always recalculate when you change your reconstitution volume. Never assume a previous calculation still applies.",
    },
    {
      type: "heading",
      text: "Quick Reference Table",
    },
    {
      type: "table",
      headers: ["Vial Size", "Recon Volume", "Concentration", "250 mcg dose", "500 mcg dose"],
      rows: [
        ["5 mg", "1 mL", "5,000 mcg/mL", "5 IU", "10 IU"],
        ["5 mg", "2 mL", "2,500 mcg/mL", "10 IU", "20 IU"],
        ["5 mg", "2.5 mL", "2,000 mcg/mL", "12.5 IU", "25 IU"],
        ["2 mg", "1 mL", "2,000 mcg/mL", "12.5 IU", "25 IU"],
        ["2 mg", "2 mL", "1,000 mcg/mL", "25 IU", "50 IU"],
        ["10 mg", "2 mL", "5,000 mcg/mL", "5 IU", "10 IU"],
        ["10 mg", "5 mL", "2,000 mcg/mL", "12.5 IU", "25 IU"],
      ],
    },
    {
      type: "heading",
      text: "Weight-Based Dosing",
    },
    {
      type: "paragraph",
      text: "Many preclinical peptide studies express doses per kilogram of body weight (e.g., 10 mcg/kg). To apply this to a 250g rat or a 70kg human study subject:",
    },
    {
      type: "list",
      items: [
        "Rat (250g = 0.25 kg): 10 mcg/kg × 0.25 kg = 2.5 mcg total dose",
        "Human study equivalent (70 kg): 10 mcg/kg × 70 = 700 mcg total dose",
        "Mouse (25g = 0.025 kg): 10 mcg/kg × 0.025 = 0.25 mcg total dose",
      ],
    },
    {
      type: "paragraph",
      text: "Note: Direct allometric scaling from rodent to human dosing is scientifically complex. Rodents have higher metabolic rates, different body composition, and different pharmacokinetic profiles. Researchers should use appropriate allometric scaling formulas — not simple kg extrapolation — when attempting to translate preclinical data.",
    },
    {
      type: "heading",
      text: "Common Dosing Errors — And How to Avoid Them",
    },
    {
      type: "list",
      items: [
        "Error: Using mL and IU interchangeably without converting → Always specify which unit you're working in; recalculate explicitly",
        "Error: Adding too much or too little reconstitution water from memory → Measure water volume with a calibrated syringe, not by eye",
        "Error: Calculating concentration from mg but the syringe dose target is in mcg, or vice versa → Convert all values to the same unit before dividing",
        "Error: Rounding too aggressively → 12.5 IU is achievable; don't round to 10 IU without acknowledging the 20% underdosing",
        "Error: Assuming reconstitution volume = previous batch → If vial size or intended concentration changes, recalculate from scratch",
        "Error: Not recording reconstitution date → Reconstituted peptide has a limited shelf life; always label with reconstitution date",
      ],
    },
    {
      type: "heading",
      text: "Choosing the Right Syringe",
    },
    {
      type: "paragraph",
      text: "For most peptide research dosing, insulin syringes are the standard tool. Key specifications:",
    },
    {
      type: "list",
      items: [
        "U-100 insulin syringe: 100 IU = 1 mL; 1 IU = 0.01 mL. Smallest readable increment: 1 IU (0.01 mL). Best for doses ≥50 mcg with standard concentrations.",
        "0.5 mL U-100 syringe: Same concentration, smaller barrel. Best for volumes ≤0.5 mL (50 IU). Easier to read for small doses.",
        "0.3 mL U-100 syringe: Best for small volume doses ≤0.3 mL. Most precise for low-dose protocols.",
        "1 mL luer lock syringe: Not calibrated in IU; use mL markings directly. 0.01 mL increments. Useful for larger volumes.",
      ],
    },
    {
      type: "callout",
      text: "Recommendation: Use 0.3 mL or 0.5 mL U-100 syringes for standard peptide research dosing. The shorter barrel makes small volume markings easier to read accurately. 29–31 gauge needles are appropriate for subcutaneous administration in most research protocols.",
    },
    {
      type: "heading",
      text: "Summary Cheat Sheet",
    },
    {
      type: "list",
      items: [
        "1 mg = 1,000 mcg",
        "Concentration (mcg/mL) = Vial mass (mcg) ÷ Recon volume (mL)",
        "Injection volume (mL) = Target dose (mcg) ÷ Concentration (mcg/mL)",
        "IU (U-100 syringe) = Injection volume (mL) × 100",
        "Always label reconstituted vials with date and concentration",
        "Always recalculate when changing reconstitution volume",
      ],
    },
    {
      type: "paragraph",
      text: "Master this math and one major source of experimental error disappears entirely. All Nexphoria vials are labeled with peptide mass and batch number to support accurate COA-matched dosing calculations. Full COA documentation available at nexphoria.com.",
    },
    {
      type: "disclaimer",
      text: "All compounds are for research use only. This content does not constitute medical advice. Consult primary literature for preclinical protocol parameters.",
    },
  ],
};
