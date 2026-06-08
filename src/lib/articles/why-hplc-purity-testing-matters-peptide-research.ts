import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "why-hplc-purity-testing-matters-peptide-research",
  title: "Why HPLC Purity Testing Matters When Sourcing Research Peptides",
  description:
    "What HPLC purity testing actually measures, why ≥99% is the research threshold, and how it integrates with mass spectrometry and LAL endotoxin testing. A guide to reading peptide certificates of analysis critically.",
  category: "Quality & Sourcing",
  readMinutes: 8,
  publishedAt: "2026-06-08",
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
      text: "High-Performance Liquid Chromatography (HPLC) is an analytical technique that separates, identifies, and quantifies individual components within a mixture by passing the sample through a pressurized column packed with a stationary phase material. In the context of peptide analysis, reverse-phase HPLC (RP-HPLC) is the standard method. The stationary phase is a nonpolar material (typically C18-bonded silica), and peptide components separate based on their relative hydrophobicity. More hydrophobic peptides bind more strongly and elute later; less hydrophobic impurities elute earlier. Each distinct molecular species produces a peak on the chromatogram, and the relative area of each peak corresponds to the relative abundance of that component.",
    },
    {
      type: "heading",
      text: "What Does '≥99% Pure' Actually Mean?",
    },
    {
      type: "paragraph",
      text: "A purity figure of 99% means that, of all the UV-absorbing material detected by the HPLC system, 99% elutes at the retention time of the target peptide. The remaining 1% consists of synthesis byproducts (deletion sequences, truncated fragments), racemized amino acid-containing variants, oxidized side chains, and protecting group remnants from solid-phase peptide synthesis (SPPS).",
    },
    {
      type: "paragraph",
      text: "Consider a 10 mg/mL peptide solution at 95% HPLC purity. That preparation contains 0.5 mg/mL of unknown impurities — potentially including biologically active fragments with different receptor binding profiles. For mechanistic research, this represents a significant confound. The 99% threshold exists specifically to reduce this variability to a level unlikely to materially affect experimental outcomes.",
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
      type: "callout",
      text: "The resulting chromatogram should always be provided with the COA. A purity number without a chromatogram cannot be independently verified.",
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
      text: "Electrospray Ionization Mass Spectrometry (ESI-MS) measures the mass-to-charge ratio (m/z) of ionized molecules. For peptide identity confirmation, the observed molecular weight is compared to the theoretical molecular weight of the target sequence. Accurate mass confirmation requires a match within ±0.1–0.5 Da (instrument-dependent). MS can detect oxidation (+16 Da per oxygen), deamidation (+0.98 Da), and other common modifications. For modified peptides — those with fatty acid chains (semaglutide), unnatural amino acids, or PEG linkers — MS confirmation is non-negotiable. HPLC and MS together provide the complete picture: purity (how much) and identity (what it is).",
    },
    {
      type: "heading",
      text: "LAL Endotoxin Testing",
    },
    {
      type: "paragraph",
      text: "Limulus Amebocyte Lysate (LAL) testing is the pharmacopoeial standard for detecting bacterial endotoxins in pharmaceutical and research compounds. Endotoxins (LPS from gram-negative bacteria) are potent immunostimulants — even trace contamination can trigger inflammatory responses in in vivo models that confound the compound's target effects. Endotoxin-contaminated peptides can produce false-positive results in inflammatory studies.",
    },
    {
      type: "list",
      items: [
        "<1 EU/mg — standard for research-grade material",
        "<0.1 EU/mg — expected for preparations intended for IV or IP administration protocols",
      ],
    },
    {
      type: "heading",
      text: "How to Read a Peptide COA",
    },
    {
      type: "table",
      headers: ["Field", "What to Check"],
      rows: [
        ["HPLC purity", "≥99%; chromatogram included"],
        ["Retention time", "Listed; consistent with peptide properties"],
        ["MS data", "Observed MW matches theoretical ±0.5 Da"],
        ["Endotoxin (LAL)", "Result in EU/mg; not just 'pass'"],
        ["Lot number", "Matches your shipment"],
        ["Test date", "Recent; within 6 months"],
        ["Testing lab", "Third-party preferred over in-house"],
      ],
    },
    {
      type: "heading",
      text: "Summary",
    },
    {
      type: "paragraph",
      text: "HPLC purity testing is the foundation of research-grade peptide quality assessment, but it functions best as part of a complete analytical package: reverse-phase HPLC for purity, mass spectrometry for identity confirmation, and LAL testing for endotoxin safety. Understanding what each test measures — and what it cannot — allows researchers to evaluate supplier documentation critically rather than accepting headline numbers at face value. A certificate with a chromatogram, a matched molecular weight, and a LAL result is the minimum standard for credible research-grade peptides.",
    },
    {
      type: "disclaimer",
      text: "For research purposes only. Not intended for human use.",
    },
  ],
};
