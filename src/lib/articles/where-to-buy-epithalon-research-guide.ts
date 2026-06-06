import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "where-to-buy-epithalon-research-guide",
  title: "Where to Buy Epithalon: A Researcher's Sourcing Guide",
  description:
    "Epithalon (Epitalon) sourcing for research: purity standards for this short tetrapeptide, COA requirements, the difference between synthetic Epitalon and glandular-derived preparations, storage protocols, and how to identify research-grade supply.",
  category: "Quality & Testing",
  readMinutes: 7,
  publishedAt: "2026-06-06",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Epithalon (also romanized as Epitalon; IUPAC sequence: Ala-Glu-Asp-Gly; CAS 307297-39-8) is a synthetic tetrapeptide derived from Epithalamin, the natural pineal gland polypeptide extract studied by Vladimir Khavinson's group at the St. Petersburg Institute of Bioregulation since the 1970s. Interest in Epithalon has grown substantially as research on telomere biology and telomerase (hTERT) activation has expanded, with Epithalon being one of the few non-small-molecule compounds with documented in vitro telomerase activation in normal human somatic cells.",
    },
    {
      type: "paragraph",
      text: "This guide is for researchers evaluating Epithalon sourcing — what purity requirements are relevant for a tetrapeptide of this size, what COA documentation is adequate, how to distinguish synthetic Epithalon from inferior preparations, and what storage conditions the research literature implies.",
    },
    {
      type: "heading",
      text: "Epithalon Synthesis: Why a Tetrapeptide Still Requires Rigorous QC",
    },
    {
      type: "paragraph",
      text: "At four amino acids, Epithalon is one of the smallest peptides in common research use. This might suggest synthesis is straightforward and purity verification is simple. Neither is entirely true. Solid-phase peptide synthesis (SPPS) of short peptides produces a set of deletion sequences — peptides missing one or more residues — that can be chemically very similar to the target compound. For Ala-Glu-Asp-Gly, the deletion analogs Glu-Asp-Gly, Ala-Asp-Gly, Ala-Glu-Gly, and Ala-Glu-Asp are only slightly different by mass and can co-elute with the target peak under low-resolution HPLC conditions.",
    },
    {
      type: "paragraph",
      text: "High-resolution mass spectrometry is particularly important for Epithalon verification for this reason. The [M+H]⁺ ion at m/z 390.31 (for the neutral MW of 389.35 Da) should be clearly confirmed, and ideally the MS/MS fragmentation pattern should match the expected b-ion series for Ala-Glu-Asp-Gly. Vendors who provide only HPLC area percentage without MS confirmation may be reporting a clean peak that includes co-eluting deletion fragments.",
    },
    {
      type: "heading",
      text: "What a Complete Epithalon COA Must Include",
    },
    {
      type: "list",
      items: [
        "Lot number matching the vial label",
        "Compound identity: tetrapeptide Ala-Glu-Asp-Gly (Epitalon), CAS 307297-39-8",
        "Theoretical molecular weight: 390.35 Da — MS must confirm [M+H]⁺ at m/z 390.31 ± 0.5 Da",
        "HPLC purity: ≥98% minimum, ≥99% preferred, with full chromatogram (not just the percentage)",
        "Mass spectrometry: ESI-MS or MALDI-TOF confirming correct molecular ion; MS/MS fragmentation preferred for deletion-sequence discrimination",
        "Water content: Karl Fischer result (lyophilized tetrapeptides can have high residual water that inflates apparent yield)",
        "Appearance: white to off-white lyophilized powder",
        "Third-party laboratory with verifiable identity — not in-house testing",
        "Test date within 24 months",
      ],
    },
    {
      type: "callout",
      text: "The Epithalamin vs. Epithalon distinction: Epithalamin is a polypeptide extract from bovine pineal gland — a biological mixture of multiple peptide fractions. Epithalon is a defined synthetic tetrapeptide. These are not equivalent. Research protocols using Epithalon cannot be replicated with Epithalamin preparations, and vendors who conflate the two are obscuring an important scientific distinction.",
    },
    {
      type: "heading",
      text: "Vial Sizing and Research Dose Context",
    },
    {
      type: "paragraph",
      text: "Epithalon is typically sold in 10 mg vials, reflecting the dose ranges used in the published preclinical and clinical literature from Khavinson's group. The most-referenced human protocols used 10 mg courses administered over 10–20 days, making a 10 mg vial a natural single-course quantity for research design. 5 mg vials are less common and represent a half-course format that introduces additional reconstitution steps into protocols designed around the 10 mg unit.",
    },
    {
      type: "paragraph",
      text: "At research-grade purity with confirmed water content, actual peptide content in a 10 mg vial should be 9.2–9.8 mg (accounting for 2–8% typical water content in well-produced lyophilized tetrapeptides). Vials with water contents above 15% — which can occur with poor lyophilization technique or compromised storage — can yield as little as 8.5 mg actual peptide per nominal 10 mg vial. COAs that include Karl Fischer data allow the researcher to account for this.",
    },
    {
      type: "heading",
      text: "Storage and Stability Protocols for Epithalon",
    },
    {
      type: "paragraph",
      text: "Epithalon's tetrapeptide structure is relatively simple compared to larger research peptides, but it is not indefinitely stable. Asp (aspartic acid) at position 3 is the primary stability liability: under certain pH and temperature conditions, Asp can undergo aspartimide formation — a cyclization reaction that converts the aspartate side chain into a cyclic imide intermediate, generating both the aspartimide artifact and the hydrolytic product alpha-Asp / beta-Asp variants. This reaction is pH-dependent (accelerated at pH 4–7) and temperature-dependent (accelerated above ambient).",
    },
    {
      type: "list",
      items: [
        "Lyophilized Epithalon: store at -20°C, stable 24+ months; protect from humidity",
        "Reconstituted Epithalon: use sterile water or 0.9% saline at neutral pH (6.5–7.5 range minimizes aspartimide formation)",
        "Avoid reconstitution with acetic acid buffers at concentrations above 5% — low pH accelerates Asp cyclization",
        "Reconstituted solution: use within 30–60 days refrigerated in a sealed vial with minimal headspace",
        "Freeze-thaw cycles of reconstituted solution: limit to 3 maximum; repeated cycling degrades the Asp residue faster than storage at steady cold temperature",
        "Light exposure: UV-stable packaging or amber vials preferred; no significant photodegradation under normal lab lighting conditions",
      ],
    },
    {
      type: "heading",
      text: "The Peptide Sciences Exit and the Epithalon Supply Market",
    },
    {
      type: "paragraph",
      text: "Peptide Sciences was among the more trusted sources for Epithalon in the US market before their closure in March 2026. Their COA documentation included MS confirmation, which differentiated them from most commodity Epithalon sources. The displacement of their customer base into the remaining market has increased the proportion of buyers sourcing from vendors with weaker QC documentation.",
    },
    {
      type: "paragraph",
      text: "For Epithalon specifically, this matters because the compound's small size and simple composition make low-cost synthesis easy — and deletion analogs that are nearly identical by weight are nearly impossible to detect without mass spectrometry. A vendor without MS documentation on their Epithalon COA is providing insufficient evidence of product identity regardless of what the HPLC purity number says.",
    },
    {
      type: "heading",
      text: "Nexphoria's Epithalon: What the COA Covers",
    },
    {
      type: "paragraph",
      text: "Nexphoria supplies Epithalon as a 10 mg lyophilized vial with lot-specific COAs documenting: HPLC purity ≥99%, ESI-MS molecular ion confirmation, Karl Fischer water content, and third-party laboratory verification. COAs are publicly posted on the product page — lot number, testing date, and full chromatogram — so researchers can cross-reference the testing laboratory directly.",
    },
    {
      type: "paragraph",
      text: "Cold-chain shipping is included on every order. At -20°C storage conditions, Epithalon is stable for years; the transit window from fulfillment to delivery introduces ambient temperature exposure that, while brief, is eliminated by cold-pack packaging. This is particularly relevant for researchers in warmer climates where summer ambient temperatures make uninsulated shipping a meaningful stability risk.",
    },
    {
      type: "callout",
      text: "For research use only. Epithalon is not approved for human therapeutic use by the FDA or any equivalent regulatory body. All sourcing and experimental use must comply with applicable institutional review and research compound regulations.",
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
