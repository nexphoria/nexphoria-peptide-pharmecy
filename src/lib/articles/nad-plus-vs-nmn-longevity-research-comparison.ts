import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "nad-plus-vs-nmn-longevity-research-comparison",
  title: "NAD+ vs NMN: What Longevity Researchers Prefer",
  description: "A research-focused comparison of NAD+ precursors NMN and NR versus direct NAD+ supplementation. What the published science says about bioavailability, mechanism, and longevity applications.",
  category: "Longevity Research",
  readMinutes: 9,
  publishedAt: "2026-06-08",
  ogImage: "/og-image.jpg",
  body: [
    { type: "paragraph", text: "Nicotinamide adenine dinucleotide (NAD+) is a coenzyme found in every living cell, functioning as an essential electron carrier and substrate for DNA repair, gene expression, and stress response enzymes. Its decline with age makes it one of the most investigated longevity targets." },
    { type: "heading", text: "The NAD+ Decline Problem" },
    { type: "paragraph", text: "NAD+ levels measurably decline with age across multiple organisms. Human skeletal muscle NAD+ declines approximately 50% between ages 40 and 60. Reduced NAD+ correlates with decreased SIRT1 and SIRT3 activity. Aged mice with restored NAD+ levels show improvements in muscle function, metabolic markers, and lifespan. Oral NAD+ is largely degraded in the gut before reaching systemic circulation, driving research toward precursor molecules." },
    { type: "heading", text: "The Main Precursor Compounds" },
    { type: "subheading", text: "NMN (Nicotinamide Mononucleotide)" },
    { type: "paragraph", text: "NMN is a direct precursor to NAD+, one biosynthetic step upstream, converted via NMNAT. Sinclair's Harvard lab published extensively on NMN's effects in aged mice including improved vascular function and muscle endurance. A 2020 human pilot study (Yoshino et al.) showed oral NMN raised blood NAD+ metabolite levels and improved insulin sensitivity. NMN is absorbed via a dedicated intestinal transporter (Slc12a8)." },
    { type: "subheading", text: "NR (Nicotinamide Riboside)" },
    { type: "paragraph", text: "NR is another well-studied NAD+ precursor, two steps upstream from NAD+. ChromaDex-sponsored human trials show NR raises whole-blood NAD+ levels. Elysium Health's Basis trial (2017) showed sustained NAD+ elevation. NR and NMN produce comparable NAD+ elevation in several comparative studies." },
    { type: "subheading", text: "Direct NAD+ Supplementation" },
    { type: "paragraph", text: "Oral NAD+ faces a significant bioavailability problem — most is cleaved in the gut to nicotinamide. IV NAD+ infusion bypasses this and is used in clinical research. Subcutaneous and intranasal delivery are also under investigation." },
    { type: "table", headers: ["Compound", "Bioavailability", "Clinical Data Status"], rows: [["NAD+ (oral)", "Poor", "Limited"], ["NAD+ (IV/SC)", "High", "Emerging"], ["NMN", "Moderate–Good", "Growing"], ["NR", "Good", "Established"], ["Nicotinamide (NAM)", "Good", "Established (feedback inhibition concern)"]] },
    { type: "heading", text: "What Researchers Are Focusing On in 2026" },
    { type: "paragraph", text: "In favor of NMN: more direct pathway, emerging human data, interest in combining with resveratrol or pterostilbene. In favor of NR: more extensive clinical trial base, established safety data, easier formulation stability. Notable directions: tissue-specific delivery, NAMPT activators, CD38 inhibitors." },
    { type: "heading", text: "The Peptide Connection" },
    { type: "paragraph", text: "MOTS-c and Humanin — mitochondria-derived peptides — interact with NAD+ metabolism. Some longevity researchers investigate whether peptide combinations targeting mitochondrial signaling produce complementary effects with NAD+ precursor strategies." },
    { type: "heading", text: "Summary" },
    { type: "paragraph", text: "Neither NAD+ nor NMN has definitively won. NMN and NR are more effective than oral NAD+ for systemic elevation. IV/subcutaneous NAD+ works for direct delivery. The field is moving toward tissue-specific delivery, enzyme targeting, and combination protocols." },
    { type: "disclaimer", text: "For research purposes only. Not intended as medical advice or clinical guidance." }
  ]
};
