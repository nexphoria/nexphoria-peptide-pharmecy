import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "peptide-dosing-calculator-reference-guide-researchers-2026",
  title: "Peptide Dosing Calculator: Complete Reference Guide for Researchers (2026)",
  description:
    "Step-by-step calculations for peptide reconstitution, dose volumes, concentration conversions, allometric scaling, and injection math — the practical math every peptide researcher needs.",
  category: "Handling & Storage",
  readMinutes: 11,
  publishedAt: "2026-06-12",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Getting the math right is fundamental to peptide research. An error in concentration or volume calculation invalidates your dose — and potentially your entire experiment. This reference covers every calculation a researcher encounters, from initial reconstitution through dose volume for injection, with worked examples throughout.",
    },
    {
      type: "heading",
      text: "Core Units & Conversions",
    },
    {
      type: "table",
      headers: ["Unit", "Equivalent", "Context"],
      rows: [
        ["1 gram (g)", "1,000 milligrams (mg)", "Bulk quantity"],
        ["1 milligram (mg)", "1,000 micrograms (mcg or μg)", "Vial labeling"],
        ["1 microgram (mcg)", "1,000 nanograms (ng)", "Plasma concentrations"],
        ["1 nanogram (ng)", "1,000 picograms (pg)", "Cytokine assays"],
        ["1 milliliter (mL)", "1,000 microliters (μL)", "Volume conversion"],
        ["1 IU (GH)", "~0.333 mg somatropin", "Hormone-specific"],
        ["1 IU (insulin)", "34.7 μg human insulin", "Reference only"],
      ],
    },
    {
      type: "heading",
      text: "Step 1: Reconstitution Concentration",
    },
    {
      type: "paragraph",
      text: "The first calculation is: how much diluent do I add to produce my target concentration?",
    },
    {
      type: "callout",
      text: "Formula: Volume of Diluent (mL) = Mass of Peptide (mg) ÷ Target Concentration (mg/mL)",
    },
    {
      type: "subheading",
      text: "Worked Example 1: Standard Reconstitution",
    },
    {
      type: "paragraph",
      text: "Vial contains: 5 mg BPC-157. Target concentration: 1 mg/mL (1,000 mcg/mL). Calculation: 5 mg ÷ 1 mg/mL = 5 mL bacteriostatic water. Result: Each 0.1 mL (100 μL) drawn up will contain 100 mcg BPC-157.",
    },
    {
      type: "subheading",
      text: "Worked Example 2: Higher Concentration",
    },
    {
      type: "paragraph",
      text: "Vial contains: 2 mg Ipamorelin. Target concentration: 2 mg/mL. Calculation: 2 mg ÷ 2 mg/mL = 1 mL bacteriostatic water. Result: Each 0.05 mL (50 μL) = 100 mcg Ipamorelin.",
    },
    {
      type: "subheading",
      text: "Worked Example 3: Convenience for Insulin Syringe",
    },
    {
      type: "paragraph",
      text: "Insulin syringes are marked in units (U). Standard insulin syringes: 100U per mL. So 1U = 0.01 mL = 10 μL. If you reconstitute to 2 mg/mL: 1U = 0.01 mL × 2 mg/mL = 0.02 mg = 20 mcg per unit. A 100 mcg dose = 5U on the insulin syringe. Choosing reconstitution concentration based on your syringe markings simplifies dosing math significantly.",
    },
    {
      type: "heading",
      text: "Step 2: Dose Volume Calculation",
    },
    {
      type: "callout",
      text: "Formula: Injection Volume (mL) = Desired Dose (mg) ÷ Concentration (mg/mL)",
    },
    {
      type: "table",
      headers: ["Desired Dose", "Concentration", "Injection Volume"],
      rows: [
        ["100 mcg (0.1 mg)", "1 mg/mL", "0.1 mL (10U)"],
        ["100 mcg (0.1 mg)", "2 mg/mL", "0.05 mL (5U)"],
        ["250 mcg (0.25 mg)", "1 mg/mL", "0.25 mL (25U)"],
        ["500 mcg (0.5 mg)", "1 mg/mL", "0.5 mL (50U)"],
        ["1 mg", "2 mg/mL", "0.5 mL (50U)"],
        ["2.4 mg (semaglutide)", "2 mg/mL", "1.2 mL"],
        ["300 mcg", "0.5 mg/mL", "0.6 mL (60U)"],
      ],
    },
    {
      type: "heading",
      text: "Step 3: Weight-Based Dosing (mg/kg)",
    },
    {
      type: "paragraph",
      text: "When a protocol specifies a dose in mcg/kg or mg/kg body weight, calculate the absolute dose first, then the injection volume.",
    },
    {
      type: "callout",
      text: "Absolute Dose (mg) = Dose (mg/kg) × Body Weight (kg)\nInjection Volume (mL) = Absolute Dose (mg) ÷ Concentration (mg/mL)",
    },
    {
      type: "subheading",
      text: "Worked Example: Rodent Weight-Based Dosing",
    },
    {
      type: "paragraph",
      text: "Protocol: BPC-157 at 10 mcg/kg IP in mice. Mouse weight: 25 g = 0.025 kg. Absolute dose: 10 mcg/kg × 0.025 kg = 0.25 mcg = 0.00025 mg. Peptide concentration: 0.1 mg/mL (100 mcg/mL). Injection volume: 0.00025 mg ÷ 0.1 mg/mL = 0.0025 mL = 2.5 μL. Practical note: 2.5 μL is extremely small — most researchers dilute to 0.01 mg/mL (10 mcg/mL) to achieve an injectable volume of 25 μL (0.025 mL), which is more practical for IP administration.",
    },
    {
      type: "subheading",
      text: "Mouse Volume Limits by Route",
    },
    {
      type: "table",
      headers: ["Route", "Max Volume (per dose)", "Standard Volume"],
      rows: [
        ["SC (subcutaneous)", "0.1 mL/10g body weight", "0.1–0.2 mL for 20g mouse"],
        ["IP (intraperitoneal)", "0.01 mL/g body weight", "0.2–0.3 mL for 25g mouse"],
        ["IV (tail vein)", "0.005 mL/g body weight", "0.1 mL for 25g mouse"],
        ["IM (intramuscular)", "0.05 mL per site", "0.05 mL"],
        ["Oral gavage", "0.01 mL/g body weight", "0.2–0.25 mL for 25g mouse"],
      ],
    },
    {
      type: "heading",
      text: "Step 4: Allometric Scaling Between Species",
    },
    {
      type: "paragraph",
      text: "To translate a dose used in one species to an equivalent dose in another, use the Km factor method published by the FDA:",
    },
    {
      type: "callout",
      text: "Human Equivalent Dose (mg/kg) = Animal Dose (mg/kg) × [Animal Km ÷ Human Km]",
    },
    {
      type: "table",
      headers: ["Species", "Km Factor", "Average Weight Used"],
      rows: [
        ["Mouse", "3", "0.02 kg"],
        ["Rat", "6", "0.15 kg"],
        ["Rabbit", "12", "1.8 kg"],
        ["Guinea pig", "8", "0.4 kg"],
        ["Monkey (cynomolgus)", "20", "3 kg"],
        ["Dog", "20", "10 kg"],
        ["Human", "37", "60 kg"],
      ],
    },
    {
      type: "subheading",
      text: "Worked Example: Mouse to Human Scaling",
    },
    {
      type: "paragraph",
      text: "Mouse dose: 100 mcg/kg BPC-157 IP. Human equivalent: 100 mcg/kg × (3/37) = 8.1 mcg/kg. For a 70 kg human: 8.1 × 70 = 567 mcg absolute dose equivalent. This is an order-of-magnitude estimate only — not a clinical dosing recommendation.",
    },
    {
      type: "heading",
      text: "Step 5: Dilution Calculations",
    },
    {
      type: "paragraph",
      text: "When your stock solution is more concentrated than needed for the experiment, dilute it using the C1V1 = C2V2 formula:",
    },
    {
      type: "callout",
      text: "C1 × V1 = C2 × V2\nC1 = starting concentration | V1 = volume of stock to take\nC2 = desired concentration | V2 = final total volume",
    },
    {
      type: "subheading",
      text: "Worked Example",
    },
    {
      type: "paragraph",
      text: "Stock: 1 mg/mL BPC-157 (1,000 mcg/mL). Need: 50 mcg/mL for cell culture assay. Final volume needed: 10 mL. C1V1 = C2V2 → 1,000 × V1 = 50 × 10 → V1 = 0.5 mL. Take 0.5 mL of stock, add 9.5 mL diluent (PBS or media). Result: 10 mL at 50 mcg/mL.",
    },
    {
      type: "heading",
      text: "Reconstitution Reference Table",
    },
    {
      type: "paragraph",
      text: "Common vial sizes and the amount of bacteriostatic water to add for standard concentrations:",
    },
    {
      type: "table",
      headers: ["Vial Size", "BAC Water for 1 mg/mL", "BAC Water for 2 mg/mL", "BAC Water for 0.5 mg/mL"],
      rows: [
        ["1 mg", "1.0 mL", "0.5 mL", "2.0 mL"],
        ["2 mg", "2.0 mL", "1.0 mL", "4.0 mL"],
        ["5 mg", "5.0 mL", "2.5 mL", "10.0 mL"],
        ["10 mg", "10.0 mL", "5.0 mL", "20.0 mL"],
        ["20 mg", "20.0 mL", "10.0 mL", "40.0 mL"],
      ],
    },
    {
      type: "heading",
      text: "Insulin Syringe Dosing Reference",
    },
    {
      type: "paragraph",
      text: "Insulin syringes come in three common scales: 30U/0.3 mL, 50U/0.5 mL, and 100U/1.0 mL. All have 100 units per milliliter (U100 standard). Use this table to find dose per unit mark based on your reconstitution concentration:",
    },
    {
      type: "table",
      headers: ["Reconstitution Concentration", "Mcg per 1U mark", "Units for 100 mcg", "Units for 200 mcg"],
      rows: [
        ["0.5 mg/mL (500 mcg/mL)", "5 mcg", "20 units", "40 units"],
        ["1.0 mg/mL (1,000 mcg/mL)", "10 mcg", "10 units", "20 units"],
        ["2.0 mg/mL (2,000 mcg/mL)", "20 mcg", "5 units", "10 units"],
        ["4.0 mg/mL (4,000 mcg/mL)", "40 mcg", "2.5 units", "5 units"],
        ["5.0 mg/mL (5,000 mcg/mL)", "50 mcg", "2 units", "4 units"],
      ],
    },
    {
      type: "heading",
      text: "Molecular Weight Reference for Common Research Peptides",
    },
    {
      type: "paragraph",
      text: "Molecular weight (MW) is needed for molar concentration calculations and MS result interpretation:",
    },
    {
      type: "table",
      headers: ["Peptide", "Sequence Length", "MW (Da)"],
      rows: [
        ["BPC-157", "15 AA", "1,419.5"],
        ["TB-500 (Thymosin Beta-4 fragment)", "43 AA", "4,963"],
        ["CJC-1295 no-DAC (Mod-GRF 1-29)", "29 AA", "3,357.9"],
        ["Ipamorelin", "5 AA", "711.9"],
        ["GHRP-2", "6 AA", "817.9"],
        ["Semaglutide", "31 AA modified", "4,113.6"],
        ["Tirzepatide", "39 AA modified", "4,813.5"],
        ["Epithalon", "4 AA", "390.4"],
        ["GHK-Cu", "3 AA + Cu2+", "340.4"],
        ["Thymosin Alpha-1", "28 AA", "3,108"],
        ["Selank", "7 AA", "751.9"],
        ["PT-141 (Bremelanotide)", "7 AA cyclic", "1,025.2"],
        ["SS-31 (Elamipretide)", "4 AA", "639.8"],
        ["Hexarelin", "6 AA", "887.1"],
        ["Sermorelin", "29 AA", "3,358.0"],
      ],
    },
    {
      type: "heading",
      text: "Molar Concentration Calculations",
    },
    {
      type: "paragraph",
      text: "For cell-based assays, you may need to work in nanomolar (nM) or micromolar (μM) concentrations rather than mass-based units.",
    },
    {
      type: "callout",
      text: "Molar Concentration (M) = Mass Concentration (g/L) ÷ Molecular Weight (g/mol)\nOr: nM = (mcg/mL × 1,000,000) ÷ MW (Da)",
    },
    {
      type: "subheading",
      text: "Worked Example: BPC-157 at 100 nM",
    },
    {
      type: "paragraph",
      text: "MW of BPC-157 = 1,419.5 Da. Target: 100 nM (0.0000001 mol/L) in 1 mL. Mass needed: 100 × 10⁻⁹ mol/L × 1,419.5 g/mol × 0.001 L = 1.42 × 10⁻⁷ g = 0.142 mcg. Stock at 1 mg/mL = 1,000 mcg/mL. Volume of stock needed: 0.142 mcg ÷ 1,000 mcg/mL = 0.000142 mL = 0.142 μL. This micro-volume would be added to 999.858 μL cell culture media.",
    },
    {
      type: "heading",
      text: "Practical Calculation Checklist",
    },
    {
      type: "list",
      items: [
        "✓ Confirm vial mass (mg) from label and COA",
        "✓ Choose target concentration based on expected dose range and syringe type",
        "✓ Calculate diluent volume: Mass ÷ Target Concentration",
        "✓ For weight-based dosing: calculate absolute dose for each subject",
        "✓ Calculate injection volume: Absolute Dose ÷ Concentration",
        "✓ Verify injection volume is within route limits for your species/model",
        "✓ Document: reconstitution date, lot, diluent, concentration",
        "✓ Label vial with all above information",
        "✓ Confirm you have enough peptide: (Dose × Subjects × Doses/week × Weeks) + 20% buffer",
      ],
    },
    {
      type: "heading",
      text: "Quantity Planning",
    },
    {
      type: "subheading",
      text: "How Much Peptide Do I Need?",
    },
    {
      type: "paragraph",
      text: "Total peptide needed = Dose per injection × Injections per subject per day × Days × Number of subjects × Safety buffer (1.2×).",
    },
    {
      type: "subheading",
      text: "Worked Example: 4-Week Mouse Study",
    },
    {
      type: "paragraph",
      text: "Dose: 100 mcg/injection. Frequency: once daily. Duration: 28 days. Group size: 10 mice. Groups: 3 (vehicle, low dose, high dose — but high dose = 100 mcg here). Total injections: 10 mice × 28 days = 280 injections. Total peptide: 280 × 100 mcg = 28,000 mcg = 28 mg. With 20% buffer: 28 × 1.2 = 33.6 mg. Order: 35–40 mg for this single group. Multiply by number of treatment groups.",
    },
    {
      type: "disclaimer",
      text: "For research purposes only. All calculations are for laboratory research planning. Not intended for human use or clinical dosing guidance.",
    },
  ],
};
