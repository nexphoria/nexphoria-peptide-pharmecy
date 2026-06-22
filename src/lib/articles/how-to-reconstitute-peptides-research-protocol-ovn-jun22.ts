import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "how-to-reconstitute-peptides-research-protocol-ovn-jun22",
  title: "How to Reconstitute Research Peptides: A Step-by-Step Protocol for 2026",
  description:
    "A complete, protocol-grade guide to peptide reconstitution for researchers — covering diluent selection, concentration math, aseptic technique, storage after reconstitution, and the most common mistakes that compromise research results.",
  category: "Research Fundamentals",
  readMinutes: 9,
  publishedAt: "2026-06-22",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Peptide reconstitution is the single most common source of preventable error in research settings. Incorrect diluent choice degrades the compound before the first injection. Miscalculated concentrations make dosing meaningless. Contaminated technique introduces endotoxin that confounds every downstream result. This protocol guide covers every step of peptide reconstitution correctly — from reading the vial label to storing reconstituted peptide for multi-week protocols."
    },
    {
      type: "disclaimer",
      text: "All peptides discussed in this article are for research use only. Not for human consumption. This content is intended for researchers and does not constitute medical advice."
    },
    {
      type: "heading",
      text: "Step 1: Verify the Vial Before You Open It"
    },
    {
      type: "paragraph",
      text: "Before reconstituting, confirm three things on every vial:"
    },
    {
      type: "list",
      items: [
        "Lot number matches your COA: Check the HPLC purity, mass spectrometry identity, and LAL endotoxin result on the COA before use. A vial without a matching COA should not be used in any in vivo protocol.",
        "Visual inspection: Lyophilized peptide should be a white to off-white powder or cake. A yellow, brown, or liquid appearance suggests degradation, incorrect storage, or temperature excursion during shipping.",
        "Quantity: The vial label states mg or mcg of peptide. Confirm this matches your protocol requirement before calculating concentrations."
      ]
    },
    {
      type: "heading",
      text: "Step 2: Diluent Selection"
    },
    {
      type: "paragraph",
      text: "Diluent selection is peptide-specific. The wrong diluent reduces solubility, causes aggregation, or accelerates degradation. General guidelines:"
    },
    {
      type: "table",
      headers: ["Peptide", "Recommended Diluent", "Notes"],
      rows: [
        ["BPC-157", "Bacteriostatic water (BW)", "Soluble in BW without acidification. Do not use acetic acid."],
        ["TB-500", "Bacteriostatic water", "Use gentle swirling, not vortexing. Longer chain is sensitive to shear."],
        ["CJC-1295 (no DAC)", "Bacteriostatic water", "Stable in BW. Keep at 4°C after reconstitution."],
        ["Ipamorelin", "Bacteriostatic water", "BW standard. Stable 4–6 weeks at 4°C reconstituted."],
        ["GHK-Cu", "Bacteriostatic water or sterile saline", "Soluble in both. BW preferred for multi-week protocols."],
        ["Epithalon", "Bacteriostatic water", "BW standard; good solubility."],
        ["Selank / Semax", "Bacteriostatic water", "Intranasal use requires sterile saline; BW for SC/IP."],
        ["Follistatin-344", "0.6% acetic acid in sterile water", "Poor solubility in BW; requires acid reconstitution. Dilute to working concentration with sterile PBS."],
        ["IGF-1 LR3", "0.1% acetic acid or sterile water", "Check supplier guidance; some lots vary. Acid often required."],
        ["Thymosin Alpha-1", "Sterile water or BW", "Generally soluble in both. BW preferred for preservation."],
        ["NAD+", "Sterile water (not BW)", "Benzyl alcohol in BW can react with NAD+ over time; sterile water for IV/IP NAD+."],
        ["Semaglutide", "0.1% acetic acid or sterile PBS", "Requires acid for initial dissolution; dilute to physiological pH for IP/SC."]
      ]
    },
    {
      type: "paragraph",
      text: "When in doubt, consult the COA or technical documentation from your supplier. Bacteriostatic water (0.9% benzyl alcohol in sterile water for injection) is the correct choice for most common research peptides. Sterile water without preservative is used for immediate-use preparations or compounds sensitive to benzyl alcohol."
    },
    {
      type: "heading",
      text: "Step 3: Calculate Your Target Concentration"
    },
    {
      type: "paragraph",
      text: "The most common reconstitution error is arithmetic. Use this formula:"
    },
    {
      type: "callout",
      text: "Concentration (mg/mL) = Amount of peptide (mg) ÷ Volume of diluent added (mL). To get mcg/mL, multiply mg/mL by 1000."
    },
    {
      type: "paragraph",
      text: "Working example: You have a 5 mg vial of BPC-157. You want a concentration of 500 mcg/mL for a rat protocol where you will administer 0.1 mL per injection (= 50 mcg per injection). Target: 500 mcg/mL = 0.5 mg/mL. Volume to add = 5 mg ÷ 0.5 mg/mL = 10 mL bacteriostatic water."
    },
    {
      type: "paragraph",
      text: "Second example: 10 mg TB-500 vial. Protocol calls for 1 mg/mL working solution. Volume to add = 10 mg ÷ 1 mg/mL = 10 mL bacteriostatic water. Each 0.1 mL injection delivers 100 mcg (0.1 mg)."
    },
    {
      type: "paragraph",
      text: "For mcg-quantity vials: A 500 mcg (0.5 mg) epithalon vial reconstituted with 1 mL bacteriostatic water = 500 mcg/mL. Each 0.1 mL injection = 50 mcg."
    },
    {
      type: "heading",
      text: "Step 4: Aseptic Technique"
    },
    {
      type: "paragraph",
      text: "For in vivo protocols, aseptic technique is non-negotiable. Endotoxin contamination from non-sterile handling produces inflammatory artifacts that can completely confound results, particularly in inflammation-endpoint studies. Required steps:"
    },
    {
      type: "list",
      items: [
        "Work in a laminar flow hood or Class II biological safety cabinet if available. If not, use a clean, disinfected surface away from air currents, wearing gloves.",
        "Wipe all rubber stoppers (peptide vial and diluent vial) with 70% isopropyl alcohol and allow to dry before needle insertion.",
        "Use a new sterile syringe and needle for each reconstitution. Reuse introduces particulates and compromises sterility.",
        "Add diluent slowly: Insert the needle into the peptide vial and direct the stream of diluent against the glass wall rather than directly onto the lyophilized cake. This prevents foaming and protein aggregation from turbulent mixing.",
        "Mix by gentle swirling or by rolling the vial between palms — never by vortexing or vigorous shaking. Vigorous mechanical agitation denatures peptides.",
        "Allow time to dissolve: Most peptides dissolve within 1–5 minutes of gentle swirling. If cloudiness persists after 10 minutes, the diluent may be incorrect or the peptide may be aggregated."
      ]
    },
    {
      type: "heading",
      text: "Step 5: Visual Clarity Check"
    },
    {
      type: "paragraph",
      text: "After reconstitution, hold the vial against a light source and check for:"
    },
    {
      type: "list",
      items: [
        "Clarity: Solution should be clear and colorless (or very slightly yellow for some peptides). Cloudiness indicates incomplete dissolution, aggregation, or contamination.",
        "Particulates: Visible particles indicate a problem. Filter through a 0.22 mcm syringe filter before use if particles are present, but first verify the diluent was correct.",
        "Foam: Persistent foam indicates vigorous mixing or the presence of detergent-like impurities. Allow to settle or gently swirl to break foam."
      ]
    },
    {
      type: "heading",
      text: "Step 6: Storage After Reconstitution"
    },
    {
      type: "paragraph",
      text: "Reconstituted peptide has a shorter usable life than lyophilized peptide. General guidelines by compound class:"
    },
    {
      type: "table",
      headers: ["Compound Class", "Storage Temp", "Usable Duration", "Notes"],
      rows: [
        ["BPC-157", "4°C (refrigerator)", "Up to 30 days", "Stable in BW at 4°C; avoid repeated freeze-thaw"],
        ["TB-500", "4°C", "Up to 14 days", "Reconstituted in BW; sensitive to extended storage at higher temp"],
        ["CJC-1295 No DAC / Ipamorelin", "4°C", "4–6 weeks", "DAC form longer stable; No DAC shorter"],
        ["GHK-Cu", "4°C", "2–4 weeks", "Dark storage recommended; light-sensitive"],
        ["Epithalon", "4°C", "2–4 weeks", "Good stability in BW"],
        ["NAD+", "4°C, dark", "24–48 hours (sterile water)", "NAD+ in sterile water oxidizes within days; use BW or freeze aliquots"],
        ["Follistatin-344", "-20°C (aliquoted)", "Single use per aliquot", "Freeze immediately after reconstitution; do not refreeze after thaw"],
        ["IGF-1 LR3", "-20°C (aliquoted)", "Single use per aliquot", "Highly prone to freeze-thaw degradation; aliquot at reconstitution"]
      ]
    },
    {
      type: "paragraph",
      text: "For protocols lasting more than 2 weeks, prepare aliquots at reconstitution: divide the total volume into single-use quantities, freeze at -20°C, and thaw one aliquot per use day. Benzyl alcohol in bacteriostatic water provides antimicrobial preservation but does not prevent peptide degradation from oxidation, hydrolysis, or repeated freeze-thaw cycles."
    },
    {
      type: "heading",
      text: "Common Reconstitution Mistakes"
    },
    {
      type: "list",
      items: [
        "Wrong diluent: Using acetic acid for BPC-157 reduces solubility and may accelerate degradation. Always verify diluent requirements per compound.",
        "Vortexing: This mechanically denatures peptides. Always mix by swirling or inversion.",
        "Injecting directly into lyophilized cake: This causes uneven dissolution and localized aggregation. Direct diluent to the glass wall first.",
        "Storing without labeling: Unlabeled vials lead to dosing errors. Label every vial: compound name, concentration, lot number, reconstitution date, expiry date.",
        "Forgetting to account for dead volume: Syringe dead volume (typically 0.05–0.10 mL in insulin syringes) means not all of your preparation is deliverable. Account for this in concentration calculations if precision dosing is required.",
        "Reconstituting at room temperature and leaving unrefrigerated: Peptides in solution degrade significantly faster at room temperature. Return to refrigerator immediately after drawing your dose."
      ]
    },
    {
      type: "callout",
      text: "Nexphoria peptides are supplied lyophilized with desiccant and cold-chain shipping as standard. Each vial is accompanied by a third-party COA with HPLC purity, MS identity confirmation, and LAL endotoxin testing."
    },
    {
      type: "heading",
      text: "Equipment Checklist for Reconstitution"
    },
    {
      type: "list",
      items: [
        "Bacteriostatic water (or appropriate diluent per compound) — sterile, sealed",
        "Sterile insulin syringes (0.3 mL or 1 mL) with 28–31G needles",
        "70% isopropyl alcohol wipes",
        "Clean gloves",
        "Permanent marker for vial labeling",
        "Refrigerator set to 4°C for storage",
        "Freezer at -20°C for long-term aliquot storage",
        "Lab notebook for lot number, reconstitution date, and concentration documentation"
      ]
    },
    {
      type: "heading",
      text: "Summary"
    },
    {
      type: "paragraph",
      text: "Proper reconstitution is a prerequisite for valid research results. The steps are not complicated, but each one matters: correct diluent, accurate concentration math, aseptic technique, and appropriate storage. Errors at the reconstitution stage cannot be corrected downstream — they affect every dose in your protocol. Verify your diluent before you open the vial, calculate your concentration before you add the liquid, and label everything immediately after. These habits prevent the most common sources of irreproducibility in peptide research."
    },
    {
      type: "disclaimer",
      text: "All compounds discussed are for research use only. Not for human consumption. Always follow applicable local regulations and institutional protocols when conducting research."
    }
  ]
};
