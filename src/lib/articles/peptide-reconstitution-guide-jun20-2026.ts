import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "peptide-reconstitution-guide-jun20-2026",
  title: "How to Reconstitute Peptides: Research Protocol Guide (2026)",
  description:
    "Step-by-step research protocol for reconstituting lyophilized peptides. Covers bacteriostatic water selection, acetic acid use, dilution math, aseptic technique, and storage best practices.",
  category: "Research Protocols",
  readMinutes: 10,
  publishedAt: "2026-06-20",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "disclaimer",
      text: "Research peptides are sold for laboratory and scientific research purposes only. This content does not constitute medical advice. Always consult a licensed healthcare professional before beginning any peptide protocol.",
    },
    {
      type: "paragraph",
      text: "Lyophilized peptides — freeze-dried to a powder — require reconstitution before use in research applications. Proper reconstitution directly affects peptide stability, accurate dosing, and the integrity of experimental results. This guide outlines the standard protocol used in pre-clinical research settings.",
    },
    {
      type: "heading",
      text: "Why Reconstitution Matters",
    },
    {
      type: "paragraph",
      text: "Peptides in lyophilized form are stable at controlled temperatures for extended periods. Once reconstituted in aqueous solution, they become significantly more vulnerable to hydrolysis (water-mediated peptide bond cleavage), aggregation (formation of non-bioactive molecular clusters), and bacterial contamination — particularly relevant in multi-use vials. Getting reconstitution right means choosing the correct diluent, calculating concentration accurately, and following aseptic technique.",
    },
    {
      type: "heading",
      text: "Choosing the Right Diluent",
    },
    {
      type: "subheading",
      text: "Bacteriostatic Water (BW)",
    },
    {
      type: "paragraph",
      text: "Bacteriostatic water — sterile water containing 0.9% benzyl alcohol — is the most commonly used diluent for research peptides. Benzyl alcohol acts as a preservative, inhibiting bacterial growth in multi-use vials. Recommended for most GHRH analogs and GH secretagogues (CJC-1295, Ipamorelin, Sermorelin), BPC-157, TB-500, PT-141, and any peptide that will be used from a single vial over multiple sessions.",
    },
    {
      type: "subheading",
      text: "Sterile Water for Injection",
    },
    {
      type: "paragraph",
      text: "Plain sterile water (no preservative) is appropriate when the entire vial will be used in a single application, or when the peptide is incompatible with benzyl alcohol (rare but documented for some sequences).",
    },
    {
      type: "subheading",
      text: "0.6% Acetic Acid Solution",
    },
    {
      type: "paragraph",
      text: "Some peptides, particularly hydrophobic sequences or those with poor aqueous solubility, require an acidic diluent for initial dissolution. IGF-1 and some variants of GH-releasing peptides may dissolve more completely in dilute acetic acid. Protocol: dissolve initially in acetic acid, then dilute to final concentration with bacteriostatic water or phosphate-buffered saline (PBS).",
    },
    {
      type: "heading",
      text: "Equipment Required",
    },
    {
      type: "list",
      items: [
        "Lyophilized peptide vial",
        "Diluent (bacteriostatic water or appropriate alternative)",
        "Insulin syringe (1 mL, 28–31 gauge) or appropriate research-grade syringe",
        "Alcohol swabs (70% isopropyl)",
        "Clean preparation surface",
        "Calculator or concentration calculation reference",
      ],
    },
    {
      type: "heading",
      text: "Step-by-Step Reconstitution Protocol",
    },
    {
      type: "subheading",
      text: "Step 1: Prepare Your Environment",
    },
    {
      type: "paragraph",
      text: "Work in a clean environment. Wipe down the preparation surface with 70% isopropyl alcohol. Wash hands thoroughly or use nitrile gloves.",
    },
    {
      type: "subheading",
      text: "Step 2: Calculate Target Concentration",
    },
    {
      type: "paragraph",
      text: "Determine the concentration needed for your research protocol before adding any liquid. The standard formula: Concentration (mcg/mL) = Peptide mass (mcg) ÷ Volume of diluent (mL). Example: a 5 mg (5,000 mcg) vial at target 2 mg/mL (2,000 mcg/mL) requires 5,000 ÷ 2,000 = 2.5 mL of diluent. For a 1 mg/mL concentration from the same vial, add 5 mL of diluent.",
    },
    {
      type: "subheading",
      text: "Step 3: Swab and Pierce",
    },
    {
      type: "paragraph",
      text: "Wipe both the peptide vial and diluent vial septums with a fresh alcohol swab. Allow to air-dry for 10–15 seconds before piercing.",
    },
    {
      type: "subheading",
      text: "Step 4: Draw Diluent",
    },
    {
      type: "paragraph",
      text: "Draw the calculated volume of diluent into the syringe. Confirm the volume visually before proceeding.",
    },
    {
      type: "subheading",
      text: "Step 5: Inject Diluent Gently",
    },
    {
      type: "paragraph",
      text: "Critical: Direct the diluent stream down the side of the vial — not directly onto the peptide powder. Forceful contact can damage peptide structure. Allow the solution to run down and contact the lyophilized cake gradually. This step is the single most common source of reconstitution error.",
    },
    {
      type: "subheading",
      text: "Step 6: Swirl — Do Not Shake",
    },
    {
      type: "paragraph",
      text: "Gently swirl or roll the vial between your palms until the peptide is fully dissolved. The solution should become clear. Never shake a peptide vial. Agitation can cause aggregation, foaming, and degradation — particularly for larger molecular weight peptides.",
    },
    {
      type: "subheading",
      text: "Step 7: Inspect Before Use",
    },
    {
      type: "paragraph",
      text: "Examine the reconstituted solution: it should be clear and colorless (some peptides may have a very slight tint), with no visible particles or cloudiness, and no undissolved residue. Cloudiness or particulates may indicate incomplete dissolution — try gentle swirling — or aggregation and contamination. Evaluate carefully before use.",
    },
    {
      type: "heading",
      text: "Concentration Reference: Common Vial Sizes",
    },
    {
      type: "list",
      items: [
        "2 mg vial + 2 mL diluent = 1 mg/mL (1,000 mcg/mL)",
        "2 mg vial + 1 mL diluent = 2 mg/mL (2,000 mcg/mL)",
        "5 mg vial + 5 mL diluent = 1 mg/mL (1,000 mcg/mL)",
        "5 mg vial + 2.5 mL diluent = 2 mg/mL (2,000 mcg/mL)",
        "10 mg vial + 10 mL diluent = 1 mg/mL (1,000 mcg/mL)",
      ],
    },
    {
      type: "heading",
      text: "Post-Reconstitution Storage",
    },
    {
      type: "paragraph",
      text: "After reconstitution: refrigerate immediately at 2–8°C; label the vial with compound name, concentration, date of reconstitution; protect from light with foil wrap or opaque container; use within the compound-specific shelf life window (typically 3–6 weeks); do not refreeze a multi-use vial once reconstituted. If you need to store for longer periods, aliquot into single-use volumes before freezing to eliminate freeze-thaw cycles.",
    },
    {
      type: "heading",
      text: "Diluent Compatibility by Compound",
    },
    {
      type: "list",
      items: [
        "BPC-157: Bacteriostatic water (preferred) or sterile saline",
        "TB-500 (Thymosin β4): Bacteriostatic water",
        "CJC-1295 (with or without DAC): Bacteriostatic water",
        "Ipamorelin: Bacteriostatic water",
        "Epithalon: Bacteriostatic water or sterile water",
        "Selank: Bacteriostatic water (intranasal: sterile saline)",
        "IGF-1 LR3: 0.6% acetic acid first, then dilute with bacteriostatic water",
        "GHK-Cu: Bacteriostatic water or sterile water",
      ],
    },
    {
      type: "heading",
      text: "Nexphoria Research Standards",
    },
    {
      type: "paragraph",
      text: "All Nexphoria peptides are shipped lyophilized with HPLC purity documentation (≥98%), mass spectrometry confirmation, and LAL endotoxin test results. COAs are available for every batch. Proper reconstitution begins with pharmaceutical-grade diluents — Nexphoria offers bacteriostatic water as an add-on to research orders for researcher convenience.",
    },
  ],
};
