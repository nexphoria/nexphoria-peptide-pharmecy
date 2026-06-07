import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "coa-hplc-mass-spec-what-to-look-for",
  title: "COA, HPLC, Mass Spec: What to Look for and What Gets Faked",
  description:
    "A practical guide to reading peptide Certificates of Analysis. What each test actually measures, which numbers matter, how to spot incomplete or fabricated COAs, and why mass spec alone is not enough.",
  category: "Quality & Sourcing",
  readMinutes: 9,
  publishedAt: "2026-06-10",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "The Certificate of Analysis (COA) has become the benchmark signal of quality in the research peptide market. Vendors display them prominently. Buyers request them before ordering. The problem is that COAs can range from rigorous independent lab reports to in-house documents with fabricated numbers — and the difference is not always obvious to someone who has not reviewed many of them.",
    },
    {
      type: "paragraph",
      text: "This guide explains what the major tests on a peptide COA actually measure, which results matter and why, and what to look for when evaluating whether a COA represents genuine independent analysis.",
    },
    {
      type: "heading",
      text: "The Tests That Should Appear on a Peptide COA",
    },
    {
      type: "subheading",
      text: "HPLC Purity (Area %)",
    },
    {
      type: "paragraph",
      text: "High-performance liquid chromatography separates compounds in a mixture by passing them through a column under pressure. Different molecules travel through the column at different rates depending on their interaction with the stationary phase — for reverse-phase HPLC, this means hydrophobic compounds elute later than hydrophilic ones.",
    },
    {
      type: "paragraph",
      text: "The result is a chromatogram: a graph of detector signal (usually UV absorbance at 214 or 220 nm) over time. Each peak represents a distinct compound. Purity is reported as the area of the target peak divided by the total area of all detected peaks, expressed as a percentage.",
    },
    {
      type: "paragraph",
      text: "What the number means: A result of 98.2% means the target compound accounts for 98.2% of UV-absorbing material in the sample. The remaining 1.8% consists of impurities — truncation sequences, oxidation products, protecting group remnants, or other synthesis byproducts. Research-grade specification is typically ≥98%. Material below 95% contains a meaningful population of unknown components that can confound experimental results.",
    },
    {
      type: "paragraph",
      text: "What HPLC does not tell you: HPLC confirms purity of whatever is in the sample — but it cannot tell you if the compound is correctly identified. A highly pure impurity or a degradation product of the target peptide can produce a single clean HPLC peak at high area %. This is why HPLC alone is insufficient for identity confirmation.",
    },
    {
      type: "subheading",
      text: "Mass Spectrometry (MS): Identity Confirmation",
    },
    {
      type: "paragraph",
      text: "Mass spectrometry measures molecular mass by ionizing sample molecules and determining their mass-to-charge (m/z) ratio. For peptide identity confirmation, the typical approach is electrospray ionization (ESI-MS) or matrix-assisted laser desorption/ionization (MALDI-TOF), which produce multiply-charged ions allowing accurate molecular weight determination.",
    },
    {
      type: "paragraph",
      text: "The result should show a measured molecular weight matching the theoretical molecular weight of the target peptide within ±0.5–1 Da for small peptides, or within a defined ppm tolerance for high-resolution instruments. If the measured mass matches the expected mass, the compound is confirmed as having the correct molecular formula.",
    },
    {
      type: "paragraph",
      text: "What MS does not tell you: Mass spectrometry confirms molecular weight identity — it does not confirm amino acid sequence or stereochemistry. Two peptides can have the same molecular weight but different sequences (sequence isomers), or the same sequence with racemized residues (D- vs. L-amino acid substitutions) that mass spec cannot distinguish. For critical research applications, MS/MS fragmentation spectra (which provide sequence information) represent the gold standard.",
    },
    {
      type: "subheading",
      text: "Endotoxin (LAL) Testing",
    },
    {
      type: "paragraph",
      text: "The Limulus Amebocyte Lysate (LAL) assay measures bacterial endotoxin content — specifically lipopolysaccharide (LPS), a component of gram-negative bacterial cell walls that remains active even after the bacteria are dead. Endotoxins trigger potent systemic inflammatory responses through Toll-like receptor 4 (TLR4) signaling.",
    },
    {
      type: "paragraph",
      text: "For in vivo research, endotoxin contamination is a critical confound. An animal administered a peptide contaminated with LPS will exhibit inflammatory responses, cytokine elevation, and behavioral changes that are attributable to endotoxin, not to the compound under study. Results from endotoxin-contaminated compounds are scientifically invalid.",
    },
    {
      type: "paragraph",
      text: "Acceptable endotoxin limits vary by application, but research-grade material targeting in vivo use is typically held to ≤1 EU/mg. LAL testing appears on COAs as a numeric result (EU/mg or EU/mL) with a pass/fail against a specification. Absence of LAL testing from a COA is a significant quality gap for any compound intended for use in animal research.",
    },
    {
      type: "heading",
      text: "How to Evaluate a COA",
    },
    {
      type: "subheading",
      text: "Identify the Testing Laboratory",
    },
    {
      type: "paragraph",
      text: "The single most important question: who performed the testing? An in-house COA produced by the synthesis laboratory itself lacks independence. Look for a named third-party analytical laboratory — ideally one that is ISO 17025 accredited, which means its testing methods and quality management system have been independently verified.",
    },
    {
      type: "paragraph",
      text: "The COA should include the laboratory name, address, analyst signature, report date, and a document reference number. Generic COAs with no laboratory identification should be treated as unverified in-house documents regardless of the numbers they show.",
    },
    {
      type: "subheading",
      text: "Confirm Batch Specificity",
    },
    {
      type: "paragraph",
      text: "A COA should correspond to the specific batch you are purchasing, identified by a lot number or batch number that matches what is printed on your vial. Vendors who display a single generic COA for all stock of a compound are either testing one lot and shipping from multiple (invalidating the COA for non-tested material) or reusing a historical COA.",
    },
    {
      type: "paragraph",
      text: "Ask: does the lot number on my vial match the lot number on the COA? If the vendor cannot answer this question, the COA provides no quality assurance for your specific product.",
    },
    {
      type: "subheading",
      text: "Check That the Chromatogram Is Included",
    },
    {
      type: "paragraph",
      text: "A purity number without the underlying chromatogram is unverifiable. Legitimate analytical reports include the full chromatogram with peak integration tables. The chromatogram should show a dominant target peak with identifiable integration markers, time axis, and detector signal axis. A COA that reports '99.2% purity' with no chromatogram trace cannot be evaluated — the number could be fabricated or calculated from incomplete integration.",
    },
    {
      type: "subheading",
      text: "Verify the Method",
    },
    {
      type: "paragraph",
      text: "The COA should specify the analytical method used: the column type, mobile phase composition (typically acetonitrile/water gradient with TFA or formate buffer), detection wavelength, and run time. Method transparency is the standard in legitimate analytical chemistry. Absence of method details suggests the COA may not represent actual laboratory work.",
    },
    {
      type: "heading",
      text: "Common COA Red Flags",
    },
    {
      type: "list",
      items: [
        "Round numbers: '99.0% purity' exactly, without decimal variation, appears suspicious. Real HPLC integration produces results like 98.7% or 99.3% — not perfectly round figures.",
        "No testing lab identified: COA header lists only the vendor name and logo.",
        "Missing chromatogram: Purity claimed numerically but no trace image or integration table provided.",
        "Single COA for all batches: One document on the website applying to all inventory of a compound regardless of lot.",
        "No endotoxin data: For any compound intended for in vivo use, absence of LAL data is a meaningful gap.",
        "MS only, no HPLC: Some vendors provide MS confirmation (which can be done quickly and cheaply) without full HPLC purity analysis. MS confirms identity; without HPLC, purity is unknown.",
        "Stock photo chromatograms: Reused or synthetic chromatogram images that appear on COAs for unrelated compounds or from different vendors — this occurs and is detectable by reverse image search.",
      ],
    },
    {
      type: "heading",
      text: "The Standard the Field Requires",
    },
    {
      type: "paragraph",
      text: "Research peptide sourcing remains a largely unregulated space. The COA is the primary mechanism by which compound quality is communicated — and it is only as trustworthy as the testing and documentation practices behind it.",
    },
    {
      type: "paragraph",
      text: "For researchers whose experimental validity depends on compound quality, the appropriate standard is: independent third-party testing, batch-specific documentation, HPLC purity ≥98% with chromatogram, MS identity confirmation, and LAL endotoxin data for in vivo applications. These are not luxury specifications. They are baseline requirements for scientifically valid work.",
    },
    {
      type: "paragraph",
      text: "When evaluating any peptide source, apply the same rigor to their documentation that you apply to your experimental design. The two are inseparable.",
    },
  ],
};
