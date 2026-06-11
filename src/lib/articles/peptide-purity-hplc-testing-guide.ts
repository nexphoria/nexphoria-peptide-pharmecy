import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "peptide-purity-hplc-testing-guide",
  title: "Why HPLC Purity Testing Matters When Sourcing Research Peptides",
  description: "Why HPLC purity testing is the gold standard for research peptides — what the method measures, why ≥99% purity matters for experimental validity, and how it compares to mass spectrometry and LAL endotoxin testing.",
  category: "Quality & Testing",
  readMinutes: 10,
  publishedAt: "2026-06-10",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "When evaluating a research peptide supplier, purity testing documentation is the single most important quality indicator available. Yet the numbers on a certificate of analysis are only meaningful if you understand what they measure — and what they don't. This article explains HPLC purity testing in depth, why the 99% threshold exists, and how it integrates with complementary analytical methods.",
    },
    {
      type: "heading",
      text: "What Is HPLC?",
    },
    {
      type: "paragraph",
      text: "High-Performance Liquid Chromatography (HPLC) is an analytical technique that separates, identifies, and quantifies individual components within a mixture by passing the sample through a pressurized column packed with a stationary phase material.",
    },
    {
      type: "paragraph",
      text: "In the context of peptide analysis, reverse-phase HPLC (RP-HPLC) is the standard method. The stationary phase is a nonpolar material (typically C18-bonded silica), and peptide components separate based on their relative hydrophobicity. More hydrophobic peptides bind more strongly and elute later; less hydrophobic impurities (truncated sequences, deletion products) elute earlier. Each distinct molecular species produces a peak on the chromatogram. The relative area of each peak corresponds to the relative abundance of that component in the sample.",
    },
    {
      type: "heading",
      text: "What Does '≥99% Pure' Actually Mean?",
    },
    {
      type: "paragraph",
      text: "A purity figure of 99% means that, of all the UV-absorbing material detected by the HPLC system, 99% elutes at the retention time of the target peptide. The remaining 1% consists of synthesis byproducts (deletion sequences, truncated fragments), racemized amino acid-containing variants, oxidized side chains (particularly methionine, cysteine, tryptophan), and protecting group remnants from solid-phase peptide synthesis (SPPS).",
    },
    {
      type: "paragraph",
      text: "Consider a 10 mg/mL peptide solution at 95% HPLC purity. That preparation contains 0.5 mg/mL of unknown impurities — potentially including biologically active fragments with different receptor binding profiles. For mechanistic research, this represents a significant confound. The 99% threshold exists specifically to reduce this variability to a level that is unlikely to materially affect experimental outcomes.",
    },
    {
      type: "heading",
      text: "The HPLC Process in Practice",
    },
    {
      type: "list",
      items: [
        "Sample preparation — peptide dissolved in a defined solvent (often 0.1% TFA in water/acetonitrile)",
        "Injection onto C18 RP column",
        "Gradient elution — increasing acetonitrile concentration displaces bound compounds in order of hydrophobicity",
        "UV detection — typically at 220 nm (peptide bond absorption) and 280 nm (aromatic residues)",
        "Integration — software integrates peak areas; purity expressed as area % of main peak",
      ],
    },
    {
      type: "paragraph",
      text: "The resulting chromatogram should be provided with the COA. A purity number without a chromatogram cannot be independently verified.",
    },
    {
      type: "heading",
      text: "HPLC Limitations: What It Doesn't Confirm",
    },
    {
      type: "subheading",
      text: "It Confirms Purity, Not Identity",
    },
    {
      type: "paragraph",
      text: "An HPLC run confirms that most of the material is a single compound. It does not confirm that compound is the peptide you ordered. Two different peptides of similar hydrophobicity could produce nearly identical HPLC chromatograms. This is why mass spectrometry is required in conjunction with HPLC.",
    },
    {
      type: "subheading",
      text: "It Detects UV-Absorbing Species Only",
    },
    {
      type: "paragraph",
      text: "HPLC with UV detection does not detect endotoxins (bacterial lipopolysaccharide), residual solvents below detection threshold, or some inorganic synthesis contaminants. This is why LAL testing and, in some cases, residual solvent analysis are separate required tests.",
    },
    {
      type: "subheading",
      text: "Co-Eluting Impurities Can Be Invisible",
    },
    {
      type: "paragraph",
      text: "If an impurity has nearly identical hydrophobicity to the target peptide, it will co-elute and appear within the main peak — inflating the apparent purity figure. This risk is higher for longer peptides where scrambled sequences may have similar overall hydrophobicity.",
    },
    {
      type: "heading",
      text: "Mass Spectrometry: The Complement to HPLC",
    },
    {
      type: "paragraph",
      text: "Electrospray Ionization Mass Spectrometry (ESI-MS) measures the mass-to-charge ratio (m/z) of ionized molecules. For peptide identity confirmation, the observed molecular weight is compared to the theoretical molecular weight of the target sequence. Accurate mass confirmation requires a match within ±0.1–0.5 Da (instrument-dependent). MS can detect oxidation (+16 Da per oxygen), deamidation (+0.98 Da), and other common modifications.",
    },
    {
      type: "paragraph",
      text: "HPLC tells you how pure the sample is. MS tells you what the dominant compound actually is. Both are required for a complete analytical picture.",
    },
    {
      type: "heading",
      text: "LAL Endotoxin Testing: The Third Pillar",
    },
    {
      type: "paragraph",
      text: "Limulus Amebocyte Lysate (LAL) testing detects bacterial endotoxins (lipopolysaccharide, LPS) using the clotting cascade of horseshoe crab blood. LAL is the pharmaceutical industry standard for endotoxin detection because it is exquisitely sensitive — detecting endotoxin at nanogram-per-mL concentrations.",
    },
    {
      type: "paragraph",
      text: "For research applications, endotoxin contamination is a critical confound: LPS activates Toll-like receptor 4 (TLR4), triggering inflammatory responses that can mask or exaggerate the effects of the compound being studied. A peptide that appears to produce a strong inflammatory response may simply be contaminated with LPS. This is especially important for in vitro cell culture work and in vivo immunological research.",
    },
    {
      type: "heading",
      text: "What a Complete COA Should Include",
    },
    {
      type: "list",
      items: [
        "HPLC purity result with actual chromatogram (not just a number)",
        "Mass spectrometry identity confirmation with observed vs. theoretical molecular weight",
        "LAL endotoxin result with EU/mg figure and pass/fail specification",
        "Lot/batch number traceable to production records",
        "Storage and handling recommendations specific to the compound",
      ],
    },
    {
      type: "heading",
      text: "Summary",
    },
    {
      type: "paragraph",
      text: "HPLC purity is the primary quantitative indicator of research peptide quality, but it is one component of a complete analytical profile. HPLC confirms that the preparation is predominantly a single compound; mass spectrometry confirms that compound is the correct sequence; LAL testing confirms it is free of endotoxin contamination. Researchers sourcing peptides should require all three data points before accepting material for experimental use.",
    },
    {
      type: "disclaimer",
      text: "For research purposes only. Not intended for human use.",
    },
  ],
};
