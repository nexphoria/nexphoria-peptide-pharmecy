import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: 'cjc-1295-ipamorelin-stack-overnight-v2-jul1-2026',
  title: 'CJC-1295 + Ipamorelin: Growth Hormone Research Stack',
  description:
    'A research-focused overview of the CJC-1295 and Ipamorelin combination — mechanisms, published data, and what the science says about this growth hormone secretagogue stack.',
  category: 'Stacks & Protocols',
  readMinutes: 9,
  publishedAt: '2026-07-01',
  ogImage: '/og-image.jpg',
  body: [
    {
      type: 'paragraph',
      text: 'Among the most studied peptide combinations in growth hormone research, the CJC-1295 and Ipamorelin stack occupies a unique position. These two compounds act on separate but complementary pathways within the somatotropic axis, and their co-administration has been a recurring subject in pre-clinical and clinical investigation.',
    },
    { type: 'heading', text: 'Understanding the Somatotropic Axis' },
    {
      type: 'paragraph',
      text: 'Growth hormone secretion is regulated by two primary hypothalamic signals: GHRH, which stimulates GH release, and somatostatin, which inhibits it. A third pathway — the ghrelin receptor GHS-R1a — provides an independent stimulatory signal. Compounds targeting different nodes in this system can produce synergistic rather than merely additive effects.',
    },
    { type: 'heading', text: 'CJC-1295: A GHRH Analog' },
    {
      type: 'paragraph',
      text: 'CJC-1295 is a synthetic analog of GHRH. Its most studied DAC form binds circulating albumin and extends its half-life from minutes to approximately 6–8 days, enabling sustained elevation of GH secretion patterns.',
    },
    {
      type: 'list',
      items: [
        'Dose-dependent increases in plasma GH were documented in human studies',
        'IGF-1 remained elevated for days after a single dose',
        'Pulsatile GH release was preserved rather than replaced',
      ],
    },
    {
      type: 'paragraph',
      text: 'Mechanism summary: CJC-1295 targets the GHRH receptor on somatotroph cells, stimulating GH synthesis and release. Half-life (DAC form) is roughly 6–8 days; without DAC it is roughly 30 minutes.',
    },
    { type: 'heading', text: 'Ipamorelin: A Selective GHS' },
    {
      type: 'paragraph',
      text: 'Ipamorelin is a pentapeptide growth hormone secretagogue and selective agonist of the ghrelin receptor. It was developed for high selectivity, showing minimal effect on cortisol, prolactin, or ACTH in studied doses.',
    },
    {
      type: 'list',
      items: [
        'Robust GH pulse stimulation in animal models',
        'Reduced off-target hormone release compared with older GHS compounds',
        'Potential effects on gastric motility under investigation',
      ],
    },
    {
      type: 'paragraph',
      text: 'The rationale for combining CJC-1295 and Ipamorelin is straightforward: one compound increases available GH, the other helps trigger its release. Studies of dual-pathway stimulation generally show greater GH output than either compound alone.',
    },
    { type: 'heading', text: 'Research Dosing Protocols (Pre-Clinical Context)' },
    {
      type: 'table',
      headers: ['Parameter', 'CJC-1295 (DAC)', 'Ipamorelin'],
      rows: [
        ['Typical research dose', '1–2 mg/week', '200–300 mcg per injection'],
        ['Administration', 'Subcutaneous', 'Subcutaneous'],
        ['Frequency', '1–2x weekly', '2–3x daily'],
        ['Research context', 'Human clinical trials', 'Animal and pre-clinical models'],
      ],
    },
    { type: 'heading', text: 'Limitations and Research Gaps' },
    {
      type: 'paragraph',
      text: 'The evidence base for this combination still has gaps. Most Ipamorelin data comes from animal models, long-term effects of sustained GH elevation are not well characterized, and IGF-1 alone does not fully capture downstream biology.',
    },
    { type: 'heading', text: 'Summary' },
    {
      type: 'paragraph',
      text: 'CJC-1295 + Ipamorelin remains one of the clearest dual-pathway approaches to GH axis modulation in the research literature. The combination is studied because it targets independent nodes in the somatotropic axis and creates a stronger signal than either compound alone.',
    },
    { type: 'disclaimer', text: 'For research purposes only. Not intended for human use.' },
  ],
};