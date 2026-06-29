import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: 'bpc-157-complete-guide-ovn-v2-jun29-2026',
  title: 'BPC-157: The Complete Research Guide (OVN V2)',
  description:
    'A research-focused guide to BPC-157 covering mechanism, key studies, research dosing ranges, sourcing checks, and storage basics.',
  category: 'Compound Profiles',
  readMinutes: 9,
  publishedAt: '2026-06-29',
  ogImage: '/og-image.jpg',
  body: [
    {
      type: 'paragraph',
      text: 'BPC-157 is one of the most studied regenerative peptides in preclinical literature. Researchers focus on it because it appears across GI, musculoskeletal, and vascular repair models.',
    },
    { type: 'heading', text: 'What Is BPC-157?' },
    {
      type: 'paragraph',
      text: 'BPC-157 is a partial sequence of a naturally occurring protective protein. It is notable for stability in aqueous environments and resistance to degradation in the stomach.',
    },
    { type: 'list', items: ['Molecular weight: ~1,420 Da', 'Sequence: Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val', 'Stable in saline and acidic conditions', 'Commonly studied by subcutaneous and intragastric routes'] },
    { type: 'heading', text: 'Mechanism of Action' },
    { type: 'subheading', text: 'Nitric Oxide Modulation' },
    { type: 'paragraph', text: 'Preclinical work links BPC-157 to endothelial nitric oxide synthase signaling, which may contribute to vascular and cytoprotective effects.' },
    { type: 'subheading', text: 'Growth Factor Pathways' },
    { type: 'paragraph', text: 'Researchers have also connected BPC-157 to VEGF-related angiogenesis and tissue repair signaling.' },
    { type: 'subheading', text: 'FAK-Paxillin Signaling' },
    { type: 'paragraph', text: 'Work from the University of Zagreb has repeatedly pointed to focal adhesion kinase and paxillin effects, suggesting a role in cell migration and wound healing.' },
    { type: 'subheading', text: 'Gut-Brain Axis' },
    { type: 'paragraph', text: 'Because the peptide originates from gastric biology, it is often discussed in relation to the enteric nervous system and vagal signaling.' },
    { type: 'heading', text: 'Key PubMed Studies' },
    { type: 'list', items: ['Sikiric et al. (1997) — early gastroprotective rat work', 'Sikiric et al. (2018) — broad organ-system review', 'Gwyer et al. (2019) — musculoskeletal systematic review', 'Chang et al. (2011) — tendon-to-bone healing in rat Achilles models'] },
    { type: 'heading', text: 'Dosing Protocols Studied in Research' },
    {
      type: 'table',
      headers: ['Model', 'Route', 'Dose Range Studied'],
      rows: [
        ['Rat (injury)', 'Subcutaneous', '10–100 µg/kg'],
        ['Rat (GI)', 'Intragastric', '10 µg/kg'],
        ['Rat (systemic)', 'Intraperitoneal', '2–10 µg/kg'],
      ],
    },
    { type: 'heading', text: 'Sourcing and Storage' },
    { type: 'list', items: ['Verify HPLC purity and MS identity', 'Ask for LAL endotoxin testing', 'Prefer third-party COAs', 'Store frozen for long-term use and avoid repeated freeze-thaw cycles'] },
    { type: 'disclaimer', text: 'For research purposes only. Not intended for human use.' },
  ],
};
