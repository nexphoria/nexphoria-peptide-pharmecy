import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "peptide-dosing-math-mcg-iu-syringe-calculations-research-guide",
  title: "Peptide Dosing Math: mcg, IU, and Syringe Calculations for Researchers",
  description:
    "A practical research reference for peptide dosing calculations — converting mcg to IU, calculating reconstitution concentrations, reading insulin syringes, and designing accurate dosing protocols.",
  category: "Research Fundamentals",
  readMinutes: 9,
  publishedAt: "2026-06-10",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "One of the most common sources of variability in peptide research — independent of peptide quality — is dosing error. Inaccurate reconstitution concentrations, misread syringe markings, and mcg-to-IU conversion mistakes can introduce substantial dose uncertainty into an experimental protocol. This guide provides a working reference for the calculations researchers encounter most frequently.",
    },
    {
      type: "callout",
      text: "For research purposes only. All calculations here are provided for experimental design reference. None of this constitutes medical advice or guidance for human use.",
    },
    {
      type: "heading",
      text: "The Basics: mcg, mg, and IU",
    },
    {
      type: "subheading",
      text: "Mass Units: mcg and mg",
    },
    {
      type: "paragraph",
      text: "Research peptides are almost universally dosed in micrograms (mcg or μg), not milligrams (mg). The relationship is straightforward: 1 mg = 1,000 mcg. A vial labeled '5 mg' contains 5,000 mcg of peptide. This distinction matters when converting between what's written on a vial and what you intend to administer per protocol.",
    },
    {
      type: "list",
      items: [
        "1 gram (g) = 1,000 milligrams (mg)",
        "1 milligram (mg) = 1,000 micrograms (mcg / μg)",
        "1 microgram (mcg) = 1,000 nanograms (ng)",
        "Standard peptide vial sizes: 2 mg, 5 mg, 10 mg (= 2,000 / 5,000 / 10,000 mcg)",
      ],
    },
    {
      type: "subheading",
      text: "IU (International Units)",
    },
    {
      type: "paragraph",
      text: "Some compounds — particularly growth hormone, insulin, and hCG — are measured in International Units (IU) rather than mass units. An IU is a biological activity measurement standardized against a reference preparation; it does not have a fixed mass equivalent. The IU-to-mass relationship varies by compound and must be looked up for the specific substance. For example, for recombinant human GH, 1 IU ≈ 0.33 mg. For insulin, 1 IU of regular insulin corresponds to approximately 34.7 mcg. For GHSs and GHRH analogs like CJC-1295 and Ipamorelin, dosing is by mass (mcg), not IU.",
    },
    {
      type: "heading",
      text: "Reconstitution: Calculating Peptide Concentration",
    },
    {
      type: "paragraph",
      text: "When a lyophilized peptide is reconstituted with bacteriostatic water (BAC water) or sterile water, the resulting concentration depends on how much solvent is added to the vial. Getting this right determines how much volume you draw per dose.",
    },
    {
      type: "subheading",
      text: "The Core Formula",
    },
    {
      type: "paragraph",
      text: "Concentration (mcg/mL) = Total peptide amount (mcg) ÷ Volume of solvent added (mL). Example: A 5 mg (5,000 mcg) vial reconstituted with 2 mL of BAC water yields a concentration of 2,500 mcg/mL. To administer 250 mcg, you would draw 0.1 mL (100 μL).",
    },
    {
      type: "table",
      headers: ["Vial Size", "BAC Water Added", "Resulting Concentration", "Volume per 100 mcg dose"],
      rows: [
        ["2 mg (2,000 mcg)", "1 mL", "2,000 mcg/mL", "0.05 mL (5 units on U100)"],
        ["2 mg (2,000 mcg)", "2 mL", "1,000 mcg/mL", "0.10 mL (10 units on U100)"],
        ["5 mg (5,000 mcg)", "2 mL", "2,500 mcg/mL", "0.04 mL (4 units on U100)"],
        ["5 mg (5,000 mcg)", "5 mL", "1,000 mcg/mL", "0.10 mL (10 units on U100)"],
        ["10 mg (10,000 mcg)", "5 mL", "2,000 mcg/mL", "0.05 mL (5 units on U100)"],
      ],
    },
    {
      type: "paragraph",
      text: "Choosing your reconstitution volume affects measurement precision. Lower BAC water volumes produce higher concentrations — meaning smaller drawn volumes per dose, which reduces accuracy on standard insulin syringes. Researchers typically reconstitute to achieve doses that fall in the 5–50 unit range on a U100 syringe, where marking precision is highest.",
    },
    {
      type: "heading",
      text: "Reading Insulin Syringes",
    },
    {
      type: "paragraph",
      text: "Insulin syringes (U100 — 100 units per mL) are the standard tool for drawing research peptides. Understanding their markings is essential for accurate dosing.",
    },
    {
      type: "subheading",
      text: "U100 Syringe Conversion",
    },
    {
      type: "paragraph",
      text: "On a U100 insulin syringe, each unit equals 0.01 mL (10 μL). A reading of 10 units = 0.10 mL. A reading of 50 units = 0.50 mL. This linear relationship makes U100 syringes convenient for peptide research because volume calculations simplify to: Volume in units = Dose (mcg) ÷ Concentration (mcg/mL) × 100.",
    },
    {
      type: "table",
      headers: ["Syringe Reading (units)", "Volume (mL)", "Volume (μL)"],
      rows: [
        ["5 units", "0.05 mL", "50 μL"],
        ["10 units", "0.10 mL", "100 μL"],
        ["20 units", "0.20 mL", "200 μL"],
        ["50 units", "0.50 mL", "500 μL"],
        ["100 units", "1.00 mL", "1,000 μL"],
      ],
    },
    {
      type: "subheading",
      text: "Common Syringe Sizes",
    },
    {
      type: "list",
      items: [
        "1 mL / 100-unit syringe — standard for most peptide research protocols",
        "0.5 mL / 50-unit syringe — useful for smaller dose volumes; finer graduations",
        "0.3 mL / 30-unit syringe — most precise; ideal for low-concentration small doses",
        "Needle gauge: 28–31G is standard for subcutaneous research administration",
      ],
    },
    {
      type: "heading",
      text: "Worked Examples",
    },
    {
      type: "subheading",
      text: "Example 1: BPC-157 at 250 mcg",
    },
    {
      type: "paragraph",
      text: "Vial: 5 mg BPC-157. Reconstitution: 2.5 mL BAC water. Concentration: 5,000 mcg ÷ 2.5 mL = 2,000 mcg/mL. Target dose: 250 mcg. Volume needed: 250 ÷ 2,000 = 0.125 mL = 12.5 units on a U100 syringe.",
    },
    {
      type: "subheading",
      text: "Example 2: Ipamorelin at 100 mcg",
    },
    {
      type: "paragraph",
      text: "Vial: 2 mg Ipamorelin. Reconstitution: 2 mL BAC water. Concentration: 2,000 mcg ÷ 2 mL = 1,000 mcg/mL. Target dose: 100 mcg. Volume needed: 100 ÷ 1,000 = 0.10 mL = 10 units on a U100 syringe.",
    },
    {
      type: "subheading",
      text: "Example 3: CJC-1295 (no DAC) at 100 mcg",
    },
    {
      type: "paragraph",
      text: "Vial: 2 mg CJC-1295. Reconstitution: 1 mL BAC water. Concentration: 2,000 mcg/mL. Target dose: 100 mcg. Volume needed: 100 ÷ 2,000 = 0.05 mL = 5 units on a U100 syringe.",
    },
    {
      type: "heading",
      text: "Common Calculation Errors to Avoid",
    },
    {
      type: "list",
      items: [
        "Confusing mg and mcg — a 10x or 1,000x error depending on context",
        "Adding the wrong volume of BAC water and not recalculating concentration",
        "Misreading syringe half-unit markings (e.g., reading 10.5 as 10 or 11)",
        "Using a U40 syringe (common in some countries) where U100 is assumed in your calculation",
        "Forgetting that lyophilized vials have negligible volume — the full water volume sets the concentration",
      ],
    },
    {
      type: "heading",
      text: "Protocol Design Tip: Choose Concentrations That Minimize Syringe Error",
    },
    {
      type: "paragraph",
      text: "When designing a protocol, select reconstitution volumes so your per-dose draw falls between 10–50 units on your chosen syringe. Draws below 5 units amplify small positional errors into significant dose inaccuracies. Draws above 80 units leave minimal room for multi-dose use from a single reconstituted vial. The sweet spot for reproducibility is a 10–30 unit draw per administration.",
    },
    {
      type: "heading",
      text: "Summary",
    },
    {
      type: "paragraph",
      text: "Accurate peptide dosing requires understanding four things: your vial's total peptide content in mcg, the volume of solvent you add, the resulting concentration, and how to translate that into syringe units. Errors in any of these steps introduce dose uncertainty that cannot be corrected at the analysis stage. Getting the math right before reconstitution is the simplest form of experimental quality control.",
    },
    {
      type: "disclaimer",
      text: "For research purposes only. Not intended for human use. Calculations provided for experimental design reference only.",
    },
  ],
};
