import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: 'nexphoria-quality-standards-jun29-2026',
  title: 'Nexphoria Quality Standards: HPLC, LAL Testing, and COA Transparency',
  description:
    'How Nexphoria verifies peptide quality batch by batch: HPLC purity, mass spectrometry identity, LAL endotoxin testing, and transparent COA documentation.',
  category: 'About Nexphoria',
  readMinutes: 8,
  publishedAt: '2026-06-29',
  ogImage: '/og-image.jpg',
  body: [
    {
      type: 'paragraph',
      text: 'Research requires reliable materials. A compound\'s stated purity is meaningless without the analytical evidence to support it, and that evidence must be specific to the batch in question — not borrowed from a prior lot or generated without independent verification.',
    },
    {
      type: 'heading',
      text: 'The Problem with Commodity Peptide Suppliers',
    },
    {
      type: 'list',
      items: [
        'Purity inflation from weak or inconsistent testing methods',
        'Generic COAs that do not map to a specific batch',
        'No mass spectrometry to confirm identity',
        'Endotoxin contamination that confounds cell and animal research',
        'Cold-chain failures that degrade product before it arrives',
      ],
    },
    {
      type: 'paragraph',
      text: 'Nexphoria was built to address each of these failure modes with documented, systematic quality protocols.',
    },
    {
      type: 'heading',
      text: 'HPLC: Purity Verification',
    },
    {
      type: 'paragraph',
      text: 'High-Performance Liquid Chromatography (HPLC) is the foundational purity test for research peptides. We use the chromatogram, not just the headline number, to verify that the reported purity reflects the actual batch.',
    },
    {
      type: 'list',
      items: [
        'Every product is tested at ≥98% HPLC purity',
        'The chromatogram is included in the batch COA',
        'Purity is based on the specific lot shipped to the buyer',
      ],
    },
    {
      type: 'heading',
      text: 'Mass Spectrometry: Identity Confirmation',
    },
    {
      type: 'paragraph',
      text: 'HPLC tells you how pure a compound is; mass spectrometry tells you what it is. Nexphoria includes MS data confirming sequence identity, with theoretical and observed molecular weight reported in the COA.',
    },
    {
      type: 'heading',
      text: 'LAL Endotoxin Testing',
    },
    {
      type: 'paragraph',
      text: 'Endotoxins are a serious research confound. Nexphoria tests every product for endotoxin using the LAL method and reports the result in the COA with a clear pass/fail determination against the applicable limit.',
    },
    {
      type: 'heading',
      text: 'Certificate of Analysis: Batch-Level Documentation',
    },
    {
      type: 'table',
      headers: ['Field', 'What Nexphoria Includes'],
      rows: [
        ['Compound name', 'Full name and common name'],
        ['Sequence', 'Amino acid sequence in single-letter code'],
        ['Batch/lot number', 'Unique identifier for traceability'],
        ['HPLC purity', 'Percentage plus chromatogram'],
        ['MS data', 'Theoretical and observed MW'],
        ['LAL result', 'EU/mg value and pass/fail'],
        ['Testing lab', 'Third-party lab name and accreditation'],
        ['Testing date', 'Date of analysis for the batch'],
      ],
    },
    {
      type: 'heading',
      text: 'Why Transparency Matters in Research',
    },
    {
      type: 'paragraph',
      text: 'When results change, researchers need to be able to rule out compound quality as a variable. That only works when documentation is specific, batch-level, and independently verifiable. Nexphoria\'s standard is simple: if we cannot document it, we do not rely on it.',
    },
    {
      type: 'disclaimer',
      text: 'For research purposes only. Not intended for human use.',
    },
  ],
};
