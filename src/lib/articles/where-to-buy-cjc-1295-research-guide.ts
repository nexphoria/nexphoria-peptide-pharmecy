import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "where-to-buy-cjc-1295-research-guide",
  title: "Where to Buy CJC-1295: A Researcher's Sourcing Guide",
  description:
    "CJC-1295 sourcing for research: the critical DAC vs. No-DAC formulation distinction, purity standards for 30-residue GHRH analogs, what a complete COA must include, storage protocols for the albumin-binding form, and how to identify research-grade supply.",
  category: "Quality & Testing",
  readMinutes: 9,
  publishedAt: "2026-06-06",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "CJC-1295 is a 30-amino acid growth hormone releasing hormone (GHRH) analog that has become one of the most frequently researched GH secretagogues in the preclinical literature. Its core pharmacological appeal — extended half-life compared to native GHRH(1-44) — also makes it one of the most frequently mislabeled compounds in the peptide research supply market. The difference between CJC-1295 with DAC (Drug Affinity Complex) and CJC-1295 without DAC (also sold as Modified GRF 1-29 or Mod-GRF) is not a minor formulation detail: these are functionally different compounds with different half-lives, different pulsatility profiles, and different research applications.",
    },
    {
      type: "paragraph",
      text: "This guide explains what rigorous CJC-1295 sourcing looks like, how to read a COA for a 30-residue peptide, and what separates research-grade supply from the commodity market.",
    },
    {
      type: "heading",
      text: "The DAC vs. No-DAC Distinction: Why It Is Not Optional",
    },
    {
      type: "paragraph",
      text: "CJC-1295 (original formulation, with DAC) incorporates a lysine-maleimidopropionic acid (MPA) modification at position 29 that enables covalent binding to circulating albumin via a thiol-maleimide reaction. This albumin binding extends the plasma half-life from approximately 30 minutes (native GHRH) to 6–8 days, enabling once or twice-weekly research dosing schedules that produce sustained GH axis stimulation.",
    },
    {
      type: "paragraph",
      text: "CJC-1295 No-DAC (Mod-GRF 1-29) replaces the DAC modification with four amino acid substitutions (His-D-Ala-Gly-MeLeu) that improve metabolic stability without albumin binding, producing a half-life of 30–60 minutes. This formulation is appropriate for pulse research protocols that mimic physiological GH secretion patterns and is typically combined with GHRPs like Ipamorelin.",
    },
    {
      type: "paragraph",
      text: "Vendors who list 'CJC-1295' without specifying the DAC status, or who use the terms interchangeably, are providing insufficient product identification. Mass spectrometry will distinguish the two compounds (MW ~3647 Da for CJC-1295 with DAC vs. ~3149 Da for Mod-GRF 1-29), but only if the COA includes MS data. A purity-only HPLC report cannot confirm which compound is in the vial.",
    },
    {
      type: "heading",
      text: "What a Complete CJC-1295 COA Must Include",
    },
    {
      type: "paragraph",
      text: "For CJC-1295 with DAC, a research-grade certificate of analysis should document:",
    },
    {
      type: "list",
      items: [
        "Lot number matching the vial label",
        "Compound identity: CJC-1295 with DAC (albumin-binding form), including the MPA modification at Lys-29",
        "Theoretical molecular weight: ~3647 Da — MS must confirm within 0.1% (critical for distinguishing from No-DAC form at ~3149 Da)",
        "HPLC purity: ≥98% minimum, ≥99% preferred, with full chromatogram including peak area table",
        "Mass spectrometry: ESI-MS or MALDI-TOF with clear [M+H]⁺ or multiply-charged ions confirming DAC-modified form",
        "Water content: Karl Fischer titration — important for a 30-residue peptide where nominal weight can overstate actual peptide content by 10–20% without correction",
        "Appearance: white to off-white lyophilized powder",
        "Endotoxin testing if ordered for sterile research applications",
        "Third-party laboratory with verifiable contact — not an internal QC lab",
        "Test date within 18 months for lyophilized storage",
      ],
    },
    {
      type: "callout",
      text: "Critical: if a vendor's CJC-1295 COA does not include mass spectrometry data, you cannot confirm you received the DAC form vs. the No-DAC form. These are different research compounds. MS is not optional for CJC-1295 verification.",
    },
    {
      type: "heading",
      text: "30-Residue Peptides: Why Purity Standards Are Harder to Meet",
    },
    {
      type: "paragraph",
      text: "CJC-1295's 30-amino acid chain makes it one of the larger research peptides in common use. SPPS synthesis of a 30-residue sequence involves 30 sequential coupling steps, and each step carries a coupling efficiency typically in the 98–99.5% range. At 99% per-step efficiency across 30 steps, the theoretical maximum yield of fully correct sequence is approximately 74% before purification. Reaching ≥98% purity in the final product requires high-resolution HPLC purification that can resolve the correctly-assembled sequence from deletion analogs that differ by a single amino acid.",
    },
    {
      type: "paragraph",
      text: "This is why the commodity market for 30-residue peptides often produces products in the 90–95% purity range when subjected to independent testing: the synthesis and purification costs required to consistently achieve ≥98% are genuinely higher for longer sequences. A vendor consistently delivering ≥98% CJC-1295 at market-average prices is either operating with unusually efficient synthesis infrastructure or is reporting numbers that do not reflect independent testing.",
    },
    {
      type: "heading",
      text: "Storage and Reconstitution: The DAC Modification Adds a Variable",
    },
    {
      type: "paragraph",
      text: "The maleimide group in CJC-1295 DAC is chemically reactive — it is designed to react with free thiols (cysteine residues on albumin) in vivo. This reactivity also creates a storage liability: maleimide groups hydrolyze under aqueous conditions, opening the ring and abolishing the albumin-binding capacity. Hydrolysis is pH-dependent (faster at basic pH) and temperature-dependent.",
    },
    {
      type: "list",
      items: [
        "Lyophilized CJC-1295 DAC: store at -20°C, stable 18–24 months; avoid humidity exposure during weighing",
        "Reconstitute in sterile water or 0.9% saline at pH 6.5–7.0; avoid basic reconstitution solvents that accelerate maleimide hydrolysis",
        "Do not use acetic acid-based solvents at high concentration — acidic conditions can also affect the GHRH analog backbone",
        "Reconstituted solution: use within 21 days refrigerated; the DAC maleimide is less stable in solution than lyophilized",
        "Freeze-thaw of reconstituted solution: limit to 2 cycles maximum; each cycle increases maleimide hydrolysis exposure window",
        "Temperature during shipping: cold-pack is particularly important for CJC-1295 DAC given the maleimide reactivity at elevated temperatures",
      ],
    },
    {
      type: "paragraph",
      text: "For CJC-1295 No-DAC (Mod-GRF 1-29): the same temperature storage principles apply, but the maleimide hydrolysis concern is absent. Reconstituted No-DAC is somewhat more stable in solution, with a practical use window of 30 days refrigerated.",
    },
    {
      type: "heading",
      text: "Vial Sizing and Dose Context for Research Protocols",
    },
    {
      type: "paragraph",
      text: "CJC-1295 with DAC is typically offered in 2 mg vials, reflecting the dose ranges documented in clinical research (1–2 mg per injection, weekly to biweekly scheduling). Multiple 2 mg vials are required for extended protocol runs, making per-vial cost and COA documentation consistency across lots both important procurement considerations.",
    },
    {
      type: "paragraph",
      text: "CJC-1295 No-DAC (Mod-GRF 1-29) is typically offered in 2–5 mg vials. Per-injection doses in the published literature typically range from 100–300 mcg, making a 2 mg vial sufficient for 7–20 injections depending on the protocol. The cost-per-injection calculation for No-DAC protocols should account for the higher injection frequency compared to DAC protocols.",
    },
    {
      type: "heading",
      text: "Market Context: CJC-1295 After the Peptide Sciences Exit",
    },
    {
      type: "paragraph",
      text: "Peptide Sciences supplied CJC-1295 (both forms) with mass spectrometry documentation on their COAs, which made them a reliable verification source for researchers who needed to confirm the DAC vs. No-DAC distinction. Following their March 2026 closure, the remaining market largely consists of vendors whose COA documentation ranges from adequate to insufficient.",
    },
    {
      type: "paragraph",
      text: "The DAC-specific sourcing concern is acute because the price difference between CJC-1295 DAC and Mod-GRF 1-29 at the synthesis level is meaningful — DAC modification adds cost — and without MS documentation, there is no reliable way to confirm which form a vial contains. Researchers sourcing CJC-1295 DAC without MS verification on the COA are accepting substantial uncertainty about what compound they are actually working with.",
    },
    {
      type: "heading",
      text: "Nexphoria's CJC-1295: Documentation and Supply Standards",
    },
    {
      type: "paragraph",
      text: "Nexphoria stocks both CJC-1295 with DAC and CJC-1295 No-DAC (Mod-GRF 1-29) as separately listed products with distinct lot tracking. Each lot includes a COA documenting HPLC purity (≥99%), ESI-MS molecular weight confirmation (distinguishing the DAC and No-DAC forms by mass), Karl Fischer water content, and third-party laboratory verification. Both forms are publicly posted on the product page so researchers can download and cross-reference the testing data before ordering.",
    },
    {
      type: "paragraph",
      text: "Cold-chain shipping is standard on every order — particularly relevant for CJC-1295 DAC given the maleimide thermal stability considerations. Orders ship with cold packs and insulated mailers regardless of order size or destination.",
    },
    {
      type: "callout",
      text: "For research use only. CJC-1295 is not approved for human therapeutic use. All sourcing and experimental use must comply with applicable institutional review requirements and research compound regulations.",
    },
    {
      type: "divider",
    },
    {
      type: "disclaimer",
      text: "This article is intended for researchers and scientific professionals. All compounds referenced are for laboratory and preclinical research purposes only. Not for human consumption. Nexphoria does not provide medical advice.",
    },
  ],
};
