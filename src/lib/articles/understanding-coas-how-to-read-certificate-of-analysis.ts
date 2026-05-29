import type { BlogArticle } from '../blog-types';

export const article: BlogArticle =   {
    slug: "understanding-coas-how-to-read-certificate-of-analysis",
    title: "Understanding COAs: How to Read a Certificate of Analysis",
    description:
      "A practical guide to reading and verifying Certificate of Analysis documents — what each field means, which tests matter, and how to verify a COA is authentic.",
    category: "Quality & Testing",
    readMinutes: 7,
    publishedAt: "2026-05-08",
    ogImage: "/og-image.jpg",
    body: [
      {
        type: "paragraph",
        text: "A Certificate of Analysis (COA) is the primary quality document for any research compound. It is your evidence that the molecule in the vial is what the label says it is, at the purity claimed, from a specific production lot. Yet most researchers receive COAs without a clear understanding of what they're looking at — or how to tell a legitimate document from one that's been fabricated.",
      },
      {
        type: "paragraph",
        text: "This guide walks through every field you'll encounter on a COA, explains what the tests measure, and shows you how to verify that the document you're holding is real.",
      },
      {
        type: "heading",
        text: "What a COA Must Include",
      },
      {
        type: "paragraph",
        text: "A legitimate COA from an accredited analytical laboratory will contain all of the following. If any are missing, treat the document as incomplete.",
      },
      {
        type: "list",
        items: [
          "Laboratory name, address, and accreditation number (ISO 17025 or equivalent)",
          "Report date and lot number",
          "Product name and CAS number (or sequence for peptides without a CAS)",
          "Requested tests and results for each",
          "Pass/fail notation against acceptance criteria",
          "Analyst name and/or signature",
          "Reference to the testing methodology used for each assay",
        ],
      },
      {
        type: "heading",
        text: "HPLC Purity: The Core Test",
      },
      {
        type: "paragraph",
        text: "High-Performance Liquid Chromatography (HPLC) is the standard method for determining peptide purity. The sample is dissolved in a solvent and pushed through a column under high pressure. Different molecules move through the column at different rates — each emerges as a distinct peak. The area of each peak, measured at UV absorbance (typically 220nm for peptides), represents the proportion of the total sample it accounts for.",
      },
      {
        type: "paragraph",
        text: "The purity percentage on the COA is the area of the main peak divided by the total peak area. A purity of 99.2% means the target compound represents 99.2% of UV-absorbing material in the sample. The remaining 0.8% could be deletion peptides (sequences missing one or more amino acids), oxidation products, or synthesis byproducts.",
      },
      {
        type: "callout",
        text: "What to check on the HPLC report: Look at the chromatogram image, not just the number. A clean preparation will show one dominant peak with a smooth, narrow profile. Multiple peaks, shouldering on the main peak, or unusually broad peaks indicate impurities — even if the calculated purity number looks acceptable.",
      },
      {
        type: "heading",
        text: "Mass Spectrometry: Identity Confirmation",
      },
      {
        type: "paragraph",
        text: "HPLC tells you how pure the sample is — but it doesn't tell you whether the dominant peak is actually the compound you ordered. Mass spectrometry (MS) fills that gap. The technique ionizes molecules and measures their mass-to-charge ratio, generating a spectrum that can be compared against the theoretical molecular weight of the target compound.",
      },
      {
        type: "paragraph",
        text: "For a peptide COA, you should see the molecular ion peak [M+H]+ or [M+2H]2+ matching the calculated molecular weight of the sequence. Some labs report this as the monoisotopic mass; others use average mass. Make sure you're comparing the same type. Most labs now use LC-MS (HPLC combined with mass spec) which provides both separation and identification in a single run.",
      },
      {
        type: "list",
        items: [
          "Expected [M+H]+ should match within ±0.5 Da of the theoretical value for small peptides",
          "For larger peptides (>20 residues), multi-charged ions are common — verify against the deconvoluted mass",
          "A discrepancy in mass usually indicates sequence errors, incomplete deprotection, or the presence of an unintended modification",
        ],
      },
      {
        type: "heading",
        text: "Endotoxin Testing",
      },
      {
        type: "paragraph",
        text: "Endotoxins are lipopolysaccharide fragments from gram-negative bacterial cell walls — a common contamination risk in any biological laboratory synthesis. Even at trace levels, endotoxins trigger potent inflammatory responses in mammalian cells, which will confound any in vitro or in vivo experiment measuring inflammation, cytokine production, or cell viability.",
      },
      {
        type: "paragraph",
        text: "The Limulus Amebocyte Lysate (LAL) assay is the standard test. Results are reported in Endotoxin Units per milligram (EU/mg). For most cell culture research, acceptable levels are below 1 EU/mg. For in vivo research, the threshold depends on the route and dose, but is typically far lower. If endotoxin data is absent from a COA and you plan to use the compound in cell culture or animal studies, demand it before proceeding.",
      },
      {
        type: "heading",
        text: "Moisture and Residual Solvents",
      },
      {
        type: "paragraph",
        text: "Lyophilized peptides contain residual moisture — even after freeze-drying, typically 3–8% water by weight. Thermogravimetric analysis (TGA) or Karl Fischer titration measures this. Moisture content affects the actual weight of compound per vial and can contribute to degradation over time if excessive.",
      },
      {
        type: "paragraph",
        text: "Residual solvents are trace amounts of synthesis reagents remaining after purification. Trifluoroacetic acid (TFA) is particularly common in Fmoc peptide synthesis. While low levels are generally tolerated in research applications, high TFA content can affect buffer pH in reconstituted solutions and should be documented.",
      },
      {
        type: "heading",
        text: "How to Verify a COA Is Authentic",
      },
      {
        type: "paragraph",
        text: "COA fabrication is unfortunately not rare in the research chemical market. Here is how to verify you have a real document:",
      },
      {
        type: "list",
        items: [
          "Look up the testing laboratory independently (do not use a link provided by the vendor). Search the lab's name and verify they are a real analytical services company with a published address and contact information.",
          "Check the lab's accreditation. ISO/IEC 17025 is the international standard for testing laboratories. Many legitimate labs also hold A2LA, NVLAP, or equivalent national accreditations.",
          "Cross-reference the lot number. The lot number on the COA should match the lot number on your vial label. If the vendor cannot provide a lot-specific COA, that is a red flag.",
          "Call or email the lab. This is the most definitive check. Provide the report number or lot number and ask them to confirm they issued the document. Legitimate labs will verify reports for their clients.",
          "Scrutinize the date. A COA issued years before your purchase, or a document where the date font or formatting differs from the rest of the document, warrants extra scrutiny.",
        ],
      },
      {
        type: "callout",
        text: "Nexphoria publishes lot-specific COAs from named third-party laboratories. Every product page includes the current lot's COA. If you want to verify a COA for your order, contact us with the lot number and we will connect you directly with the testing laboratory.",
      },
      {
        type: "heading",
        text: "What a COA Cannot Tell You",
      },
      {
        type: "paragraph",
        text: "A COA represents a snapshot of one production lot tested at one point in time. It does not guarantee that subsequent lots from the same vendor will meet the same standard, that the compound has been stored correctly since testing, or that the compound is appropriate for your specific experimental design. It is a necessary — but not sufficient — condition for compound quality.",
      },
      {
        type: "paragraph",
        text: "The COA is your starting point for quality assurance, not your ending point. Sourcing decisions should also factor in the vendor's track record, manufacturing practices, lot-to-lot consistency, and willingness to provide documentation. A vendor that issues generic COAs without lot numbers, or that cannot name their testing laboratory, is not operating at a standard appropriate for serious research.",
      },
    ],
  };
