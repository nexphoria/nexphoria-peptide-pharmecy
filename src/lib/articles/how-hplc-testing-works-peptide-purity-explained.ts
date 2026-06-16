import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "how-hplc-testing-works-peptide-purity-explained",
  title: "How HPLC Testing Works and Why It's the Only Way to Verify Peptide Purity",
  description:
    "HPLC (High-Performance Liquid Chromatography) is the gold standard for verifying peptide purity. This guide explains how HPLC works, how to read a chromatogram, and what a real COA should include.",
  category: "Quality & Testing",
  readMinutes: 9,
  publishedAt: "2026-06-16",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "You received a peptide. It looks like a white powder in a glass vial. How do you know it's actually the peptide you ordered — and that it's pure enough to produce meaningful research data? The answer is HPLC: High-Performance Liquid Chromatography. It is, practically speaking, the only non-destructive analytical method that can answer both questions simultaneously.",
    },
    {
      type: "heading",
      text: "What Is HPLC?",
    },
    {
      type: "paragraph",
      text: "HPLC (High-Performance Liquid Chromatography) is an analytical chemistry technique that separates compounds in a mixture based on how strongly each compound interacts with a stationary phase as it flows through a column. The result is a chromatogram — a graph that shows when each compound eluted (exited the column) and how much of it was present.",
    },
    {
      type: "paragraph",
      text: "Here's how it works step by step: A small volume of your peptide sample is injected into the instrument. The sample dissolves into a mobile phase (a carefully controlled liquid solvent) and flows under high pressure through a column packed with very small particles — typically a C18 reverse-phase packing. Different compounds in the sample interact differently with this packing material, causing them to travel at different speeds. As each compound exits the column, a UV detector measures how much light it absorbs. A computer records each compound's exit time and absorbance to generate the chromatogram.",
    },
    {
      type: "paragraph",
      text: "The key principle: identical compounds exit the column at identical retention times under identical conditions. BPC-157 will always elute at roughly the same minute on a properly calibrated system using the same method. If you see a peak at that retention time, it's BPC-157. If you see peaks elsewhere, those are other compounds — either impurities, degradation products, or signs that the sample isn't what you expected.",
    },
    {
      type: "heading",
      text: "How to Read a Peptide Chromatogram",
    },
    {
      type: "paragraph",
      text: "A chromatogram is a two-dimensional graph. The X-axis represents time in minutes — how long since the sample was injected. The Y-axis represents absorbance (mAU, milliabsorbance units) — how strongly the eluting compound absorbs UV light. Peptides are typically detected at 215 nm, which is the absorption wavelength for the peptide bond itself.",
    },
    {
      type: "subheading",
      text: "What a Clean Sample Looks Like",
    },
    {
      type: "paragraph",
      text: "A high-purity peptide shows one large, narrow, symmetrical peak at the expected retention time for that compound. The area under this peak, expressed as a percentage of all peak areas in the chromatogram, represents the purity percentage. A 99% pure peptide should show one dominant peak containing 99% of the total peak area, with all other peaks combined accounting for no more than 1%.",
    },
    {
      type: "subheading",
      text: "What a Degraded or Contaminated Sample Looks Like",
    },
    {
      type: "paragraph",
      text: "A degraded, impure, or incorrectly identified peptide shows multiple peaks. These secondary peaks represent fragments of the main peptide chain (degradation products), structurally related impurities from synthesis, different isomers of the target compound, or entirely different peptides. Each additional peak reduces the main peak's area percentage — which is your purity number. A sample showing multiple significant secondary peaks is not 99% pure, regardless of what the vendor claims.",
    },
    {
      type: "list",
      items: [
        "Single large peak at expected retention time = high purity, correct identity",
        "Multiple peaks near expected retention time = degradation or synthesis impurities",
        "Peak at wrong retention time = possibly a different compound entirely",
        "Very broad, asymmetric peak = possible aggregation or column degradation",
        "Flat baseline with no clear peak = sample not detected (possibly wrong compound or extremely dilute)",
      ],
    },
    {
      type: "heading",
      text: "The Retention Time: Why It Matters for Identity Verification",
    },
    {
      type: "paragraph",
      text: "Purity alone does not confirm identity. A 99% pure sample could be 99% pure contamination. Retention time is what confirms you have the right compound. Every peptide, under a specific HPLC method (same column, same mobile phase, same temperature, same flow rate), will elute at a characteristic retention time. BPC-157 might elute at 20.1 minutes. Thymosin Beta-4 at 22.5 minutes. Semaglutide at 18.3 minutes. These numbers vary slightly by instrument and method, but any legitimate testing lab uses a reference standard — a known pure sample of the same compound — to confirm that their measured retention time matches.",
    },
    {
      type: "paragraph",
      text: "When you see a COA that shows only a purity number with no chromatogram and no retention time data, you cannot confirm the compound's identity from that document alone. The purity number could be measuring purity of the wrong compound.",
    },
    {
      type: "heading",
      text: "What a Real HPLC COA Should Contain",
    },
    {
      type: "paragraph",
      text: "A legitimate Certificate of Analysis for HPLC testing includes specific elements. Understanding what to look for helps you distinguish real documentation from fabricated reports.",
    },
    {
      type: "list",
      items: [
        "Method detail: column type (e.g., C18, 4.6 × 250mm, 5µm), mobile phase composition, flow rate, UV detection wavelength, column temperature",
        "The actual chromatogram image — the graph itself, not just numbers derived from it",
        "Retention time of the main peak with comparison to a reference standard",
        "Purity calculation: main peak area ÷ total peak area × 100 = purity %",
        "Breakdown of impurity peaks if purity is below 99%",
        "Batch number that matches the product you received",
        "Lab name, address, and ISO 17025 or equivalent accreditation",
        "Date of analysis",
        "Analyst name or signature",
      ],
    },
    {
      type: "callout",
      text: "Verification step: Take the batch number from your COA and call the testing lab directly. Ask if they have a record of testing that batch. Legitimate labs maintain records and can confirm. If they can't find the batch, the COA is fabricated.",
    },
    {
      type: "heading",
      text: "HPLC vs. Mass Spectrometry: Different Questions",
    },
    {
      type: "paragraph",
      text: "HPLC answers: 'How pure is this, and does it elute at the right time?' Mass spectrometry (MS) answers: 'What is the exact molecular mass of this compound?' These are complementary, not redundant. A compound could pass HPLC (high purity, correct retention time) but have a slightly incorrect molecular weight due to synthesis errors — which MS would catch. Conversely, MS confirms exact molecular identity but doesn't give you a purity percentage the way HPLC does.",
    },
    {
      type: "paragraph",
      text: "Premium vendors run both HPLC and MS on every batch. HPLC provides the purity certification. MS provides the identity confirmation. Together, they give you the highest confidence that what you're receiving is what you ordered, at the purity stated.",
    },
    {
      type: "heading",
      text: "LAL Endotoxin Testing: The Third Critical Test",
    },
    {
      type: "paragraph",
      text: "HPLC and MS test for chemical purity and identity. They do not test for biological contamination. The Limulus Amebocyte Lysate (LAL) test measures endotoxin levels — fragments of bacterial cell walls that can cause serious inflammatory responses. A peptide can be 99% chemically pure and still contain unsafe levels of endotoxin if it was synthesized or handled in contaminated conditions.",
    },
    {
      type: "paragraph",
      text: "Acceptable endotoxin levels for research compounds vary by application, but the European Pharmacopoeia guideline of less than 5 EU/mL is widely used as a reference threshold. A COA that lists endotoxin as 'passed' with no numerical result is insufficient — ask for the actual measurement.",
    },
    {
      type: "heading",
      text: "Applying This Knowledge: Questions to Ask Any Vendor",
    },
    {
      type: "paragraph",
      text: "Armed with this understanding of HPLC, you can evaluate any vendor with specific questions that are easy to answer for legitimate operations and impossible to answer convincingly for fraudulent ones.",
    },
    {
      type: "list",
      items: [
        "'Can I see the HPLC chromatogram for this specific batch?' — Not just the purity number. The actual graph.",
        "'What was the retention time of the main peak, and what reference standard did you use to confirm identity?'",
        "'What is the endotoxin level in EU/mL for this batch?'",
        "'Can you provide the testing lab's accreditation documentation?'",
        "'What is the batch number, and can I verify it directly with the testing lab?'",
      ],
    },
    {
      type: "paragraph",
      text: "Vendors who publish full chromatograms publicly — including retention time data, method parameters, and lot-specific batch numbers — are demonstrating the level of transparency that legitimate research requires. If a vendor cannot or will not provide these answers, that is itself diagnostic information about their quality practices.",
    },
    {
      type: "disclaimer",
      text: "This content is for educational purposes regarding analytical chemistry methods used in research peptide quality control. All products referenced are for research purposes only. Not for human use or consumption. Always verify vendor credentials and testing documentation independently.",
    },
  ],
};
