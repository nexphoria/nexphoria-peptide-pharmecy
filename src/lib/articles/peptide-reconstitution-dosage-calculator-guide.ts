import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "peptide-reconstitution-dosage-calculator-guide",
  title: "Peptide Reconstitution & Dosage Calculator: Step-by-Step Math Guide",
  description:
    "A complete researcher's reference for calculating peptide concentrations, reconstitution volumes, and per-dose measurements. Includes worked examples for common vial sizes and dosing scenarios.",
  category: "Handling & Storage",
  readMinutes: 10,
  publishedAt: "2026-06-12",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "One of the most common sources of error in peptide research is not compound quality or storage — it is calculation mistakes during reconstitution and dose preparation. An error in concentration math translates directly into incorrect dose delivery, confounded results, and wasted compound. This guide provides a systematic framework for reconstitution calculations that any researcher can apply regardless of vial size, target concentration, or injection volume.",
    },
    {
      type: "heading",
      text: "Core Concepts Before You Calculate",
    },
    {
      type: "subheading",
      text: "Units You Will Work With",
    },
    {
      type: "list",
      items: [
        "mg (milligrams) — mass of lyophilized peptide in the vial",
        "mcg (micrograms) — 1 mg = 1,000 mcg; used for smaller doses",
        "mL (milliliters) — volume of reconstitution solvent added",
        "IU (international units) — used for HGH and some biologics; not applicable to most research peptides",
        "mg/mL — concentration after reconstitution (mass per volume)",
        "mcg/mL — same, expressed in micrograms",
      ],
    },
    {
      type: "subheading",
      text: "The Fundamental Formula",
    },
    {
      type: "paragraph",
      text: "Concentration (mg/mL) = Total peptide mass (mg) ÷ Volume of solvent added (mL). From this, per-dose volume = Desired dose (mg) ÷ Concentration (mg/mL). That is the entire mathematical foundation. Everything else is applied arithmetic.",
    },
    {
      type: "heading",
      text: "Step-by-Step Reconstitution Calculation",
    },
    {
      type: "subheading",
      text: "Step 1: Identify Your Vial Size",
    },
    {
      type: "paragraph",
      text: "Research peptides are most commonly supplied in lyophilized vials of 2 mg, 5 mg, 10 mg, or custom sizes. The vial label should state total peptide mass. Confirm this before proceeding — different vial sizes require different reconstitution volumes to achieve the same working concentration.",
    },
    {
      type: "subheading",
      text: "Step 2: Choose a Target Concentration",
    },
    {
      type: "paragraph",
      text: "Target concentration determines how much solvent you add. A common working concentration for injectable peptide research is 1 mg/mL (= 1,000 mcg/mL) because it yields easy-to-handle injection volumes on a standard insulin syringe. However, if your research protocol calls for very small doses (e.g., 100 mcg), you might prefer 0.5 mg/mL to avoid dealing with sub-5-unit volumes on a 100-unit syringe.",
    },
    {
      type: "subheading",
      text: "Step 3: Calculate Solvent Volume",
    },
    {
      type: "paragraph",
      text: "Volume of bacteriostatic water (mL) = Peptide mass (mg) ÷ Target concentration (mg/mL). Examples: For a 5 mg vial at 1 mg/mL → add 5 mL BW. For a 5 mg vial at 2 mg/mL → add 2.5 mL BW. For a 10 mg vial at 1 mg/mL → add 10 mL BW. For a 2 mg vial at 1 mg/mL → add 2 mL BW.",
    },
    {
      type: "subheading",
      text: "Step 4: Calculate Per-Dose Draw Volume",
    },
    {
      type: "paragraph",
      text: "Once reconstituted, per-dose volume (mL) = Desired dose (mg) ÷ Concentration (mg/mL). In practical syringe terms, you will typically be working with a U-100 insulin syringe where 100 units = 1 mL, meaning 1 unit = 0.01 mL = 10 mcg at 1 mg/mL concentration.",
    },
    {
      type: "heading",
      text: "Worked Examples",
    },
    {
      type: "subheading",
      text: "Example 1: BPC-157, 5 mg Vial, 250 mcg Dose",
    },
    {
      type: "list",
      items: [
        "Vial: 5 mg BPC-157",
        "Add 5 mL bacteriostatic water → Concentration = 1 mg/mL = 1,000 mcg/mL",
        "Desired dose: 250 mcg",
        "Draw volume: 250 ÷ 1,000 = 0.25 mL = 25 units on a U-100 syringe",
        "Total doses from vial: 5,000 mcg ÷ 250 mcg = 20 doses",
      ],
    },
    {
      type: "subheading",
      text: "Example 2: TB-500, 5 mg Vial, 500 mcg Dose",
    },
    {
      type: "list",
      items: [
        "Vial: 5 mg TB-500",
        "Add 5 mL bacteriostatic water → Concentration = 1 mg/mL = 1,000 mcg/mL",
        "Desired dose: 500 mcg",
        "Draw volume: 500 ÷ 1,000 = 0.50 mL = 50 units on a U-100 syringe",
        "Total doses from vial: 5,000 mcg ÷ 500 mcg = 10 doses",
      ],
    },
    {
      type: "subheading",
      text: "Example 3: Ipamorelin, 2 mg Vial, 100 mcg Dose",
    },
    {
      type: "list",
      items: [
        "Vial: 2 mg Ipamorelin",
        "Add 2 mL bacteriostatic water → Concentration = 1 mg/mL = 1,000 mcg/mL",
        "Desired dose: 100 mcg",
        "Draw volume: 100 ÷ 1,000 = 0.10 mL = 10 units on a U-100 syringe",
        "Total doses from vial: 2,000 mcg ÷ 100 mcg = 20 doses",
      ],
    },
    {
      type: "subheading",
      text: "Example 4: CJC-1295 No-DAC, 2 mg Vial, 100 mcg Dose (Double Concentration)",
    },
    {
      type: "list",
      items: [
        "Vial: 2 mg CJC-1295 No-DAC",
        "Add 1 mL bacteriostatic water → Concentration = 2 mg/mL = 2,000 mcg/mL",
        "Desired dose: 100 mcg",
        "Draw volume: 100 ÷ 2,000 = 0.05 mL = 5 units on a U-100 syringe",
        "Practical note: 5-unit draws are manageable but require careful syringe reading; 10 mL vials are often preferable for very small doses",
      ],
    },
    {
      type: "subheading",
      text: "Example 5: Semaglutide, 5 mg Vial, 0.25 mg Starting Dose",
    },
    {
      type: "list",
      items: [
        "Vial: 5 mg Semaglutide",
        "Add 2.5 mL bacteriostatic water → Concentration = 2 mg/mL = 2,000 mcg/mL",
        "Desired dose: 0.25 mg = 250 mcg",
        "Draw volume: 250 ÷ 2,000 = 0.125 mL = 12.5 units on a U-100 syringe",
        "Total doses from vial (at starting dose): 5,000 mcg ÷ 250 mcg = 20 doses",
      ],
    },
    {
      type: "heading",
      text: "Concentration Reference Table",
    },
    {
      type: "table",
      headers: ["Vial Size", "BW Added", "Concentration", "100 mcg = X units", "250 mcg = X units", "500 mcg = X units"],
      rows: [
        ["2 mg", "1 mL", "2 mg/mL (2,000 mcg/mL)", "5 units", "12.5 units", "25 units"],
        ["2 mg", "2 mL", "1 mg/mL (1,000 mcg/mL)", "10 units", "25 units", "50 units"],
        ["5 mg", "2.5 mL", "2 mg/mL (2,000 mcg/mL)", "5 units", "12.5 units", "25 units"],
        ["5 mg", "5 mL", "1 mg/mL (1,000 mcg/mL)", "10 units", "25 units", "50 units"],
        ["10 mg", "5 mL", "2 mg/mL (2,000 mcg/mL)", "5 units", "12.5 units", "25 units"],
        ["10 mg", "10 mL", "1 mg/mL (1,000 mcg/mL)", "10 units", "25 units", "50 units"],
      ],
    },
    {
      type: "heading",
      text: "Reading an Insulin Syringe: U-100 Reference",
    },
    {
      type: "paragraph",
      text: "Standard U-100 insulin syringes are calibrated in units, where 100 units = 1 mL. Each small graduation typically represents 1 or 2 units depending on syringe capacity. The relationship: 10 units = 0.10 mL, 20 units = 0.20 mL, 50 units = 0.50 mL, 100 units = 1.00 mL.",
    },
    {
      type: "paragraph",
      text: "At 1 mg/mL working concentration: 1 unit on syringe = 10 mcg of peptide. At 2 mg/mL: 1 unit = 20 mcg. This single conversion makes dose calculation intuitive once you fix your working concentration.",
    },
    {
      type: "heading",
      text: "Common Calculation Mistakes to Avoid",
    },
    {
      type: "list",
      items: [
        "Confusing mg and mcg: 1 mg = 1,000 mcg. Dividing by 1 when you should divide by 1,000 results in 1000x overdose calculations on paper.",
        "Adding solvent volume to total vial volume: The peptide powder is negligible in volume. Add only solvent volume to calculate concentration.",
        "Forgetting to account for multiple draws degrading volume: As you draw doses, track remaining volume to avoid drawing air when the vial is nearly empty.",
        "Using different concentration across studies: Document reconstitution parameters and use consistent concentrations across experimental replicates.",
        "Not accounting for dead volume in syringe: Standard insulin syringes have ~0.05 mL dead volume. For precision dosing, calibrate your actual syringe or use low-dead-volume models.",
      ],
    },
    {
      type: "heading",
      text: "Reconstitution Best Practices",
    },
    {
      type: "paragraph",
      text: "Always inject bacteriostatic water slowly down the side of the vial, not directly onto the lyophilized cake — this minimizes mechanical disruption to peptide structure. Gently roll the vial between palms to dissolve; do not vortex or shake. Allow several minutes for complete dissolution, particularly for longer peptide sequences. If the solution does not clear completely, check whether an alternative solvent (e.g., dilute acetic acid for insoluble peptides) is indicated for that compound.",
    },
    {
      type: "paragraph",
      text: "Label every reconstituted vial with: compound name, lot number, concentration, date reconstituted, and storage temperature. Reconstituted peptides stored in bacteriostatic water at 2–8°C are typically stable for 4–6 weeks depending on compound — check compound-specific stability data when available.",
    },
    {
      type: "heading",
      text: "Converting Between mg and IU (HGH Context)",
    },
    {
      type: "paragraph",
      text: "For researchers working with recombinant human growth hormone, note that HGH is often quantified in IU rather than mg. The conversion is approximately 1 mg ≈ 3 IU (this varies slightly by product and manufacturer). Standard reconstitution for 10 IU HGH vials typically uses 1 mL bacteriostatic water for a 10 IU/mL concentration. Always confirm the specific conversion factor stated on the product's certificate of analysis.",
    },
    {
      type: "callout",
      text: "Quality note: Calculation accuracy begins with verified peptide mass. All Nexphoria peptides ship with lot-specific COAs confirming peptide content and purity by HPLC. The mass stated on your vial label is the mass you can calculate with.",
    },
    {
      type: "heading",
      text: "Quick Reference Formula Summary",
    },
    {
      type: "list",
      items: [
        "Concentration (mg/mL) = Peptide mass (mg) ÷ Solvent added (mL)",
        "Dose volume (mL) = Desired dose (mg) ÷ Concentration (mg/mL)",
        "Dose volume (mL) = Desired dose (mcg) ÷ Concentration (mcg/mL)",
        "Units on U-100 syringe = Dose volume (mL) × 100",
        "mcg per unit (at 1 mg/mL) = 10 mcg per syringe unit",
        "Total doses per vial = Total peptide (mcg) ÷ Dose per administration (mcg)",
      ],
    },
    {
      type: "disclaimer",
      text: "For Research Use Only. All peptides supplied by Nexphoria are intended for in vitro and preclinical research only. The calculations and examples in this guide are provided as educational references for researchers. They do not constitute medical advice, clinical dosing guidance, or a recommendation for human use.",
    },
  ],
};
