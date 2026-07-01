import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: 'peptide-purity-hplc-testing-overnight-v2-jul1-2026',
  title: 'Why HPLC Purity Testing Matters When Sourcing Peptides',
  description:
    'HPLC purity testing is the gold standard for research peptides — but the numbers are only meaningful if you understand what they measure and what they do not. This article explains RP-HPLC, the 99% threshold, and how it integrates with mass spectrometry and LAL endotoxin testing.',
  category: 'Quality & Testing',
  readMinutes: 10,
  publishedAt: '2026-07-01',
  ogImage: '/og-image.jpg',
  body: [
    {
      type: 'paragraph',
      text: 'When evaluating a research peptide supplier, purity testing documentation is the single most important quality indicator available. Yet the numbers on a certificate of analysis are only meaningful if you understand what they measure — and what they do not. This article explains HPLC purity testing in depth, why the 99% threshold exists, and how it integrates with complementary analytical methods.',
    },
    { type: 'heading', text: 'What Is HPLC?' },
    {
      type: 'paragraph',
      text: 'High-Performance Liquid Chromatography (HPLC) separates, identifies, and quantifies individual components within a mixture. In peptide analysis, reverse-phase HPLC is the standard method: hydrophobic species elute later, less hydrophobic impurities elute earlier, and each distinct molecular species produces a peak on the chromatogram.',
    },
    {
      type: 'list',
      items: [
        'More hydrophobic peptides bind more strongly to the stationary phase and elute later',
        'Less hydrophobic impurities elute earlier',
        'Peak area roughly tracks relative abundance',
      ],
    },
    { type: 'heading', text: 'What Does “≥99% Pure” Mean?' },
    {
      type: 'paragraph',
      text: 'A purity figure of 99% means that, of all UV-absorbing material detected by the system, 99% elutes at the retention time of the target peptide. The remaining 1% can include synthesis byproducts, racemized variants, oxidized side chains, and protecting group remnants.',
    },
    {
      type: 'callout',
      text: 'A 10 mg/mL peptide solution at 95% HPLC purity contains 0.5 mg/mL of unknown impurities — enough to confound mechanistic work. The 99% threshold exists to reduce that variability.',
    },
    { type: 'heading', text: 'The HPLC Process in Practice' },
    {
      type: 'list',
      items: [
        'Sample preparation in a defined solvent system',
        'Injection onto a C18 reverse-phase column',
        'Gradient elution with increasing acetonitrile',
        'UV detection at peptide-relevant wavelengths',
        'Software integration of peak areas',
      ],
    },
    {
      type: 'paragraph',
      text: 'A purity number without a chromatogram cannot be independently verified.',
    },
    { type: 'heading', text: 'HPLC Limitations' },
    {
      type: 'subheading',
      text: 'It confirms purity, not identity',
    },
    {
      type: 'paragraph',
      text: 'Two different peptides of similar hydrophobicity can produce nearly identical chromatograms. This is why mass spectrometry is required in conjunction with HPLC.',
    },
    {
      type: 'subheading',
      text: 'It detects UV-absorbing species only',
    },
    {
      type: 'paragraph',
      text: 'HPLC with UV detection does not detect endotoxins, residual solvents below threshold, or some inorganic synthesis contaminants. That is why LAL testing and other orthogonal methods remain necessary.',
    },
    { type: 'heading', text: 'Mass Spectrometry and LAL Testing' },
    {
      type: 'paragraph',
      text: 'ESI-MS confirms molecular identity by comparing observed molecular weight to theoretical sequence mass. LAL testing screens for bacterial endotoxins that can distort in vivo results. HPLC + MS + LAL together provide the minimum credible quality package.',
    },
    { type: 'heading', text: 'How to Read a Peptide COA' },
    {
      type: 'table',
      headers: ['Field', 'What to Check'],
      rows: [
        ['HPLC purity', '≥99%; includes chromatogram'],
        ['MS data', 'Observed MW matches theoretical ±0.5 Da'],
        ['Endotoxin (LAL)', 'Result in EU/mg, not just “pass”'],
        ['Lot number', 'Matches your shipment'],
        ['Test date', 'Recent; within 6 months'],
      ],
    },
    { type: 'heading', text: 'Summary' },
    {
      type: 'paragraph',
      text: 'HPLC purity testing is the foundation of research-grade peptide quality assessment, but it works best as part of a complete analytical package. Understanding what each test measures — and what it cannot — keeps researchers from over-trusting headline numbers.',
    },
    { type: 'disclaimer', text: 'For research purposes only. Not intended for human use.' },
  ],
};