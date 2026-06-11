import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "what-real-coa-looks-like-fakes-miss",
  title: "What a Real COA Looks Like — And What Fakes Miss",
  description:
    "A certificate of analysis is only as useful as the information it contains. This guide breaks down every element of a legitimate peptide COA, shows what counterfeit or low-quality versions omit, and explains how to verify authenticity before you order.",
  category: "Quality & Sourcing",
  readMinutes: 12,
  publishedAt: "2026-06-29",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "A certificate of analysis (COA) is supposed to be a guarantee. It represents the output of independent laboratory testing — a document that tells you exactly what is in the vial you received, at what purity level, and whether it matches what was advertised. When a peptide vendor says 'third-party tested,' the COA is the proof.",
    },
    {
      type: "paragraph",
      text: "The problem: COAs are also the easiest thing to fabricate. A fraudulent vendor can put a logo on a document, invent purity numbers, and call it tested. Without knowing what a real COA contains — and how to verify it — you have no way of knowing whether the document you're looking at represents actual laboratory work.",
    },
    {
      type: "paragraph",
      text: "This guide walks through every element of a legitimate peptide COA, explains what testing methods should be listed and why, and identifies the gaps that reveal a document as incomplete or falsified.",
    },
    {
      type: "heading",
      text: "The Core Elements of a Legitimate Peptide COA",
    },
    {
      type: "paragraph",
      text: "A complete COA for a research peptide should contain the following sections. Not most of them — all of them.",
    },
    {
      type: "subheading",
      text: "1. Laboratory Identity",
    },
    {
      type: "paragraph",
      text: "The testing laboratory should be clearly named, with a physical address and contact information. Independent means independent — the lab should have no financial relationship with the vendor, and its name should be findable via a web search. Anonymous 'in-house testing labs' are not independent and do not constitute third-party verification.",
    },
    {
      type: "list",
      items: [
        "Full lab name and address",
        "Lab contact (phone or email for verification)",
        "Lab ISO or accreditation number (ISO/IEC 17025 is the relevant standard)",
        "Date of analysis",
        "Report number for traceability",
      ],
    },
    {
      type: "subheading",
      text: "2. Sample Identification",
    },
    {
      type: "paragraph",
      text: "The COA must identify the specific sample tested. This should include a lot or batch number that corresponds to the product you are purchasing. If the COA has no lot number, or if the lot number on the document doesn't match the one on your vial, the document may not represent your specific product.",
    },
    {
      type: "list",
      items: [
        "Sample name (compound name and CAS number)",
        "Lot or batch number",
        "Sample weight or quantity tested",
        "Date sample was received by the lab",
      ],
    },
    {
      type: "subheading",
      text: "3. Purity Analysis — HPLC",
    },
    {
      type: "paragraph",
      text: "High-performance liquid chromatography (HPLC) is the standard method for measuring peptide purity. It works by separating the components in a sample based on how they interact with a stationary phase and mobile phase, then detecting each component as a peak on a chromatogram. The area of each peak, relative to the total, gives the purity percentage.",
    },
    {
      type: "paragraph",
      text: "A legitimate HPLC result includes the purity percentage and, critically, the chromatogram itself. The chromatogram is the raw data — the actual output of the instrument. Any vendor that provides a purity number without a chromatogram is providing an unverifiable claim.",
    },
    {
      type: "list",
      items: [
        "HPLC method noted (e.g., reverse-phase C18 column)",
        "Purity percentage (≥98% is the standard for research-grade peptides)",
        "Chromatogram (the peak trace, not just a number)",
        "Detection wavelength (typically 214 nm or 220 nm for peptides)",
      ],
    },
    {
      type: "subheading",
      text: "4. Identity Confirmation — Mass Spectrometry",
    },
    {
      type: "paragraph",
      text: "HPLC tells you purity. Mass spectrometry (MS) confirms identity. These are different things. A sample could be 99% pure and still be the wrong compound. MS works by ionizing the sample and measuring the mass-to-charge ratio of its fragments, producing a spectrum that acts as a molecular fingerprint.",
    },
    {
      type: "paragraph",
      text: "For a peptide COA, the MS result should show the expected molecular weight (m/z) matching the theoretical molecular weight of the compound. If the numbers don't match, the compound is not what it claims to be.",
    },
    {
      type: "list",
      items: [
        "Mass spectrometry method noted (ESI-MS or MALDI-TOF are common)",
        "Observed m/z value",
        "Theoretical m/z for the compound",
        "Match confirmation (within acceptable tolerance, typically ±0.5 Da)",
      ],
    },
    {
      type: "subheading",
      text: "5. Endotoxin Testing — LAL Assay",
    },
    {
      type: "paragraph",
      text: "Endotoxins are bacterial cell wall components (lipopolysaccharides) that can contaminate peptide batches during synthesis. Even at low concentrations, endotoxins can cause inflammatory responses in animal models, corrupting experimental results. A COA for injectable-grade research peptides should include an endotoxin result from a Limulus amebocyte lysate (LAL) assay.",
    },
    {
      type: "list",
      items: [
        "LAL assay result in EU/mg or EU/mL",
        "Passing threshold noted (typically <1.0 EU/mg for research use)",
        "Pass/Fail designation",
      ],
    },
    {
      type: "heading",
      text: "What Fake or Low-Quality COAs Miss",
    },
    {
      type: "paragraph",
      text: "Once you know what a real COA contains, identifying problematic documents becomes straightforward. Here are the most common red flags.",
    },
    {
      type: "subheading",
      text: "No Chromatogram",
    },
    {
      type: "paragraph",
      text: "The most common omission. A purity number without the underlying chromatogram is meaningless — it cannot be verified. Legitimate labs produce chromatograms as part of HPLC analysis. If the vendor only shows you a percentage, ask for the raw data. If they can't provide it, the number may be fabricated.",
    },
    {
      type: "subheading",
      text: "No Mass Spec Data",
    },
    {
      type: "paragraph",
      text: "HPLC alone cannot confirm compound identity. A high-purity sample could be a completely different peptide. A COA that shows only HPLC purity without MS identity confirmation cannot tell you whether you have the compound you think you have.",
    },
    {
      type: "subheading",
      text: "No LAL Endotoxin Result",
    },
    {
      type: "paragraph",
      text: "Many vendors skip endotoxin testing entirely — it adds cost and requires specialized equipment. For research applications, this is a significant gap. High endotoxin levels can invalidate experiments and represent a safety concern in animal models.",
    },
    {
      type: "subheading",
      text: "Undated or Reused Documents",
    },
    {
      type: "paragraph",
      text: "A COA should be tied to a specific batch and dated to when that batch was tested. Documents with no date, or documents where the same COA appears across multiple batches with different lot numbers, suggest that testing is not being performed per-batch.",
    },
    {
      type: "subheading",
      text: "Unverifiable Lab",
    },
    {
      type: "paragraph",
      text: "If the laboratory named on the COA does not appear in any web search, has no verifiable address, or is listed at the same address as the vendor itself, it is not independent. Third-party testing requires an actual third party.",
    },
    {
      type: "heading",
      text: "How to Verify a COA",
    },
    {
      type: "paragraph",
      text: "There are concrete steps you can take to verify a COA before purchasing.",
    },
    {
      type: "list",
      items: [
        "Search the lab name independently — does it exist as a real business with a verifiable address?",
        "Check whether the lot number on the COA matches the lot number on your order or the current product listing",
        "Confirm the analysis date is recent (within 12-24 months for stable lyophilized peptides; some vendors provide per-batch testing)",
        "Look at the chromatogram — does it show clean separation with a dominant main peak and minimal impurity peaks?",
        "Verify the MS m/z value against the theoretical molecular weight of the compound (these are publicly available for all standard peptides)",
        "Ask the vendor directly for the lab contact — legitimate labs can be called to confirm report numbers",
      ],
    },
    {
      type: "heading",
      text: "COA Standards at Nexphoria",
    },
    {
      type: "paragraph",
      text: "Every Nexphoria batch is tested by an independent, ISO-accredited laboratory. The COA for each lot includes HPLC purity ≥98%, ESI-MS identity confirmation, and LAL endotoxin results. All COAs are published with full chromatograms and mass spectra accessible from the product page. Batch numbers are traceable — the lot number on your vial corresponds directly to the published COA.",
    },
    {
      type: "paragraph",
      text: "This is the standard the industry should hold itself to. It's not complicated — it's the minimum necessary to give researchers confidence in what they're working with.",
    },
    {
      type: "heading",
      text: "Summary",
    },
    {
      type: "list",
      items: [
        "A complete COA includes: lab identity, sample ID with lot number, HPLC purity with chromatogram, MS identity confirmation, and LAL endotoxin results",
        "Purity without a chromatogram is an unverifiable claim",
        "MS is required to confirm compound identity — HPLC alone cannot do this",
        "The testing laboratory should be independently verifiable",
        "Lot numbers should match between the COA and the product you receive",
        "If a vendor cannot provide all of these elements, the testing may be incomplete or fabricated",
      ],
    },
    {
      type: "disclaimer",
      text: "This article is for educational purposes only. Nexphoria products are sold for research use only and are not intended for human consumption, therapeutic use, or veterinary application.",
    },
  ],
};
