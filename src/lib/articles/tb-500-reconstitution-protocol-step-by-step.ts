import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "tb-500-reconstitution-protocol-step-by-step",
  title: "TB-500 Reconstitution Protocol: A Step-by-Step Research Guide",
  description:
    "A precise, research-oriented guide to reconstituting TB-500 (Thymosin Beta-4). Covers diluent selection, concentration calculations, sterile technique, storage conditions, and common mistakes to avoid.",
  category: "Handling & Storage",
  readMinutes: 9,
  publishedAt: "2026-06-09",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "TB-500 — the synthetic analog of the naturally occurring protein Thymosin Beta-4 — is supplied as a lyophilized (freeze-dried) white powder. Before it can be used in any research protocol, it must be reconstituted: dissolved into a liquid solution at a precisely calculated concentration. This step-by-step guide covers the complete reconstitution process for TB-500, including diluent selection, concentration math, sterile technique, and post-reconstitution storage.",
    },
    {
      type: "callout",
      text: "For research use only. TB-500 sold by Nexphoria is intended for in-vitro and pre-clinical animal research. Not for human use.",
    },
    {
      type: "heading",
      text: "What You'll Need",
    },
    {
      type: "list",
      items: [
        "TB-500 lyophilized vial (typically 2mg, 5mg, or 10mg)",
        "Bacteriostatic water (BW) — preferred diluent for multi-use vials",
        "Sterile water for injection or sterile 0.9% saline — alternative for single-use reconstitution",
        "1 mL or 3 mL sterile syringe",
        "18–21 gauge needle for drawing diluent",
        "Alcohol wipes (70% isopropyl alcohol)",
        "Clean, low-humidity environment or laminar flow hood (preferred for GMP-adjacent lab work)",
      ],
    },
    {
      type: "heading",
      text: "Step 1: Choose Your Diluent",
    },
    {
      type: "paragraph",
      text: "Bacteriostatic water is the standard diluent for TB-500 reconstitution when multiple aliquots will be drawn from the same vial over days or weeks. Bacteriostatic water contains 0.9% benzyl alcohol, which inhibits microbial growth in the reconstituted solution and extends its usable shelf life to approximately 28 days when refrigerated.",
    },
    {
      type: "paragraph",
      text: "Sterile water for injection (SWFI) is appropriate when the entire reconstituted vial will be used in a single experimental session or divided immediately into single-use aliquots. SWFI contains no preservatives, so once the vial seal is broken, it should be used promptly.",
    },
    {
      type: "paragraph",
      text: "Sterile saline (0.9% NaCl) is physiologically compatible with TB-500 and suitable for in vivo injection routes. Some protocols use saline specifically for in vivo delivery to match physiological osmolarity. Both saline and SWFI lack preservatives, so treat reconstituted solutions the same as SWFI for storage purposes.",
    },
    {
      type: "heading",
      text: "Step 2: Calculate Your Target Concentration",
    },
    {
      type: "paragraph",
      text: "The reconstitution volume you add determines the concentration of your final solution. Choose a volume that makes your intended aliquot volumes practical to measure accurately.",
    },
    {
      type: "paragraph",
      text: "Standard concentration calculation: if you have a 5mg vial and add 2.5 mL of bacteriostatic water, the concentration is 5mg ÷ 2.5mL = 2mg/mL. At this concentration, a 0.25 mL draw delivers 0.5mg of peptide.",
    },
    {
      type: "table",
      headers: ["Vial Size", "Diluent Added", "Resulting Concentration", "Volume per 500µg dose"],
      rows: [
        ["2mg", "1.0 mL", "2 mg/mL", "0.25 mL"],
        ["5mg", "2.5 mL", "2 mg/mL", "0.25 mL"],
        ["5mg", "5.0 mL", "1 mg/mL", "0.50 mL"],
        ["10mg", "5.0 mL", "2 mg/mL", "0.25 mL"],
        ["10mg", "10.0 mL", "1 mg/mL", "0.50 mL"],
      ],
    },
    {
      type: "paragraph",
      text: "For rodent studies where weight-based dosing is used (e.g., 500 µg/kg in a 250g rat = 125 µg dose), working with more dilute solutions may improve dosing accuracy. A concentration of 0.5 mg/mL allows delivery of 125 µg in 0.25 mL — a practical injectable volume for subcutaneous injection in rodents.",
    },
    {
      type: "heading",
      text: "Step 3: Prepare Your Work Area",
    },
    {
      type: "paragraph",
      text: "Contamination risk during peptide reconstitution comes primarily from particulates, non-sterile surfaces, and aerosolized microorganisms. Working in a clean environment minimizes these risks.",
    },
    {
      type: "list",
      items: [
        "Wipe your work surface with 70% isopropyl alcohol and allow to dry completely",
        "Wash hands thoroughly or use sterile gloves",
        "Allow the TB-500 vial and diluent to reach room temperature before opening — temperature shock can affect reconstitution",
        "Wipe the rubber stoppers of both the peptide vial and diluent vial with fresh alcohol wipes; allow to air-dry before piercing",
      ],
    },
    {
      type: "heading",
      text: "Step 4: Add Diluent to the Peptide Vial",
    },
    {
      type: "paragraph",
      text: "Draw the calculated volume of diluent into your syringe. Insert the needle through the rubber stopper of the TB-500 vial at a 45-degree angle to avoid excessive foaming. Aim the liquid stream at the inside glass wall of the vial rather than directly at the lyophilized powder cake.",
    },
    {
      type: "paragraph",
      text: "Add the diluent slowly — do not forcefully inject, as this can introduce air bubbles and mechanically degrade the peptide. Allow the liquid to run down the side of the vial and pool at the base.",
    },
    {
      type: "subheading",
      text: "Do Not Shake",
    },
    {
      type: "paragraph",
      text: "This is the most common reconstitution error. Shaking creates mechanical shear forces and air-liquid interfaces that promote peptide aggregation and degradation. Instead, gently swirl the vial in a slow circular motion or roll it between your palms. The lyophilized powder should dissolve within 30–90 seconds with gentle agitation.",
    },
    {
      type: "paragraph",
      text: "Properly reconstituted TB-500 solution should be clear and colorless. Cloudiness, visible particulates, or persistent foam may indicate aggregation, contamination, or a quality issue with the source material.",
    },
    {
      type: "heading",
      text: "Step 5: Verify and Label",
    },
    {
      type: "paragraph",
      text: "Before storing, inspect the reconstituted solution visually: hold it up to a light source and check for particulates, cloudiness, or discoloration. A high-quality, properly reconstituted TB-500 solution should appear water-clear.",
    },
    {
      type: "paragraph",
      text: "Label the vial immediately with: peptide name and batch number, concentration (mg/mL), diluent used, date of reconstitution, and calculated expiry date (28 days for BW, or use-promptly for SWFI/saline).",
    },
    {
      type: "heading",
      text: "Step 6: Storage After Reconstitution",
    },
    {
      type: "paragraph",
      text: "Store reconstituted TB-500 refrigerated at 2–8°C (36–46°F). Do not freeze reconstituted solutions — freeze-thaw cycling can cause aggregation and loss of activity in peptide solutions. Lyophilized (unreconstituted) TB-500 vials may be stored frozen for long-term preservation, but once reconstituted, refrigeration only.",
    },
    {
      type: "paragraph",
      text: "Keep vials away from direct light. Light exposure — particularly UV — can cause oxidation of sensitive residues in the peptide sequence. A refrigerator drawer or opaque storage container is sufficient for routine lab use.",
    },
    {
      type: "table",
      headers: ["Storage Form", "Temperature", "Max Duration", "Notes"],
      rows: [
        ["Lyophilized (sealed)", "-20°C to -80°C", "Per manufacturer CoA", "Long-term storage; stable"],
        ["Lyophilized (refrigerated)", "2–8°C", "6–12 months typically", "Short-term pre-reconstitution"],
        ["Reconstituted in BW", "2–8°C", "28 days", "Do not freeze"],
        ["Reconstituted in SWFI/saline", "2–8°C", "3–5 days", "Use promptly; no preservative"],
      ],
    },
    {
      type: "heading",
      text: "Common Reconstitution Errors and How to Avoid Them",
    },
    {
      type: "list",
      items: [
        "Shaking the vial: causes aggregation; always swirl gently instead.",
        "Injecting diluent directly onto the powder cake: disrupts lyophilized structure; aim for the glass wall.",
        "Using tap water or distilled water: introduces contaminants or lacks pH buffering; always use sterile-grade diluents.",
        "Reconstituting with diluent at extremes of temperature: cold diluent slows dissolution; hot diluent can denature peptide. Room temperature is optimal.",
        "Drawing cloudy solution for use: indicates a reconstitution or quality problem; do not use cloudy peptide solutions in experiments.",
        "Failing to label with reconstitution date: leads to inadvertent use of expired solution, undermining experimental reproducibility.",
      ],
    },
    {
      type: "heading",
      text: "Notes on TB-500 Solubility",
    },
    {
      type: "paragraph",
      text: "TB-500 is moderately water-soluble. At standard research concentrations (0.5–2 mg/mL), dissolution in bacteriostatic water is typically straightforward. At higher concentrations, solubility may limit clear dissolution. If working with higher-concentration solutions, allow additional time for dissolution and confirm clarity before use.",
    },
    {
      type: "paragraph",
      text: "TB-500 should not be combined with peptides that have incompatible solubility profiles or pH requirements without first validating mixture stability. For combination protocols, researchers should confirm compatibility or prepare each compound separately and combine at the point of use.",
    },
    {
      type: "heading",
      text: "Sourcing TB-500 That Reconstitutes Reliably",
    },
    {
      type: "paragraph",
      text: "The quality of the starting lyophilized peptide directly affects reconstitution behavior. Properly synthesized, purified, and lyophilized TB-500 should dissolve cleanly and produce a clear solution. Reconstitution problems — persistent cloudiness, visible clumping, failure to fully dissolve — often reflect synthesis impurities, inadequate purity, or improper lyophilization by the manufacturer.",
    },
    {
      type: "paragraph",
      text: "Nexphoria provides TB-500 as a lyophilized research peptide with HPLC purity ≥98%, mass spectrometry sequence verification, and LAL endotoxin testing. Batch-specific certificates of analysis are included with every order. Products ship cold-chain to maintain stability through transit.",
    },
    {
      type: "divider",
    },
    {
      type: "disclaimer",
      text: "This article is intended for research professionals working in in-vitro or pre-clinical settings. TB-500 is not approved by the FDA or any regulatory body for human use. All content reflects preclinical research contexts only. Nexphoria products are labeled for research use only.",
    },
  ],
};
