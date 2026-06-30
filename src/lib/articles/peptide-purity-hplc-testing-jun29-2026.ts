import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: 'peptide-purity-hplc-testing-jun29-2026',
  title: 'Why HPLC Purity Testing Matters When Sourcing Peptides',
  description:
    'A practical explanation of HPLC purity testing for research peptides — what the method measures, why the 99% threshold matters, and how it fits with MS and LAL testing.',
  category: 'Quality & Testing',
  readMinutes: 9,
  publishedAt: '2026-06-29',
  ogImage: '/og-image.jpg',
  body: [
    {
      type: 'paragraph',
      text: 'When evaluating a research peptide supplier, purity testing documentation is the single most important quality indicator available. Yet the numbers on a certificate of analysis are only meaningful if you understand what they measure — and what they do not.',
    },
    {
      type: 'heading',
      text: 'What Is HPLC?',
    },
    {
      type: 'paragraph',
      text: 'High-Performance Liquid Chromatography (HPLC) separates, identifies, and quantifies the components in a mixture. For peptide analysis, reverse-phase HPLC is the standard method, and the chromatogram shows how the sample resolves into peaks.',
    },
    {
      type: 'list',
      items: [
        'More hydrophobic peptides elute later',
        'Less hydrophobic impurities elute earlier',
        'Each peak represents a distinct molecular species',
      ],
    },
    {
      type: 'heading',
      text: 'What Does ≥99% Pure Mean?',
    },
    {
      type: 'paragraph',
      text: 'A purity figure of 99% means that 99% of the UV-absorbing material detected by the HPLC system elutes at the retention time of the target peptide. The remaining material is typically synthesis byproducts, oxidized residues, or protecting-group remnants.',
    },
    {
      type: 'callout',
      text: 'A 95% pure peptide contains enough unknown material to become a real experimental confound. The 99% threshold exists to reduce that risk to a much lower level.',
    },
    {
      type: 'heading',
      text: 'The HPLC Process in Practice',
    },
    {
      type: 'list',
      items: [
        'Sample preparation in a defined solvent system',
        'Injection onto a C18 reverse-phase column',
        'Gradient elution with increasing acetonitrile',
        'UV detection, typically at 220 nm',
        'Peak integration to calculate area percent purity',
      ],
    },
    {
      type: 'heading',
      text: 'What HPLC Does Not Confirm',
    },
    {
      type: 'subheading',
      text: 'Purity, Not Identity',
    },
    {
      type: 'paragraph',
      text: 'HPLC confirms that most of the material is a single compound. It does not prove that the compound is the peptide you ordered. That is why mass spectrometry is needed as a complement.',
    },
    {
      type: 'subheading',
      text: 'UV-Absorbing Species Only',
    },
    {
      type: 'paragraph',
      text: 'HPLC with UV detection does not detect endotoxins, residual solvents below threshold, or some inorganic contaminants. LAL testing and other analytical methods remain necessary.',
    },
    {
      type: 'heading',
      text: 'Mass Spectrometry and LAL Testing',
    },
    {
      type: 'paragraph',
      text: 'Mass spectrometry confirms identity by comparing observed molecular weight to the theoretical sequence. LAL testing checks for endotoxin contamination that can distort in vivo and cell-culture data. Together, these methods give a much clearer quality picture than HPLC alone.',
    },
    {
      type: 'table',
      headers: ['Test', 'What It Answers'],
      rows: [
        ['HPLC', 'How pure is it?'],
        ['MS', 'What is it?'],
        ['LAL', 'Is it endotoxin-free enough for research?'],
      ],
    },
    {
      type: 'heading',
      text: 'How to Read a Peptide COA',
    },
    {
      type: 'list',
      items: [
        'HPLC purity should be ≥99%',
        'Chromatogram should be included',
        'MS data should match theoretical MW',
        'LAL should be reported in EU/mg',
        'Lot number and testing date should be visible',
      ],
    },
    {
      type: 'disclaimer',
      text: 'For research purposes only. Not intended for human use.',
    },
  ],
};
