import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "nad-plus-vs-nmn-longevity-research-comparison",
  title: "NAD+ vs. NMN: What Longevity Researchers Need to Know",
  description:
    "A research-focused comparison of direct NAD+ supplementation versus NMN precursor approaches for longevity studies — covering bioavailability, mechanisms, published data, and protocol design considerations.",
  category: "Longevity Research",
  readMinutes: 11,
  publishedAt: "2026-06-07",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "disclaimer",
      text: "Research chemicals for licensed researchers and scientific educators only. Not for human consumption.",
    },
    {
      type: "paragraph",
      text: "The NAD+ longevity research space has bifurcated into two primary approaches: direct NAD+ administration and precursor-based elevation via nicotinamide mononucleotide (NMN) or nicotinamide riboside (NR). Understanding the mechanistic and practical differences between these strategies is essential for researchers designing NAD+-focused aging studies.",
    },
    {
      type: "heading",
      text: "Why NAD+ Declines with Age",
    },
    {
      type: "paragraph",
      text: "NAD+ is a central metabolic cofactor with roles in redox reactions (glycolysis, TCA cycle, oxidative phosphorylation), sirtuin deacetylase activity (SIRT1-7), PARP-mediated DNA repair, and CD38-dependent cADPR signaling. Tissue NAD+ levels decline 40–60% between young adulthood and old age in most mammals, driven by increased NAD+-consuming enzyme activity (CD38, PARP upregulation) alongside reduced biosynthesis capacity.",
    },
    {
      type: "heading",
      text: "NMN: The Precursor Approach",
    },
    {
      type: "paragraph",
      text: "NMN (nicotinamide mononucleotide) is a direct precursor to NAD+ in the salvage pathway. Research by Shin-ichiro Imai's group at Washington University established that oral NMN supplementation in mice restored tissue NAD+ levels in multiple organs and reversed several aging-associated phenotypes including insulin resistance, energy metabolism decline, and eye function deterioration.",
    },
    {
      type: "paragraph",
      text: "Key NMN research findings include: documented bioavailability in plasma and tissue after oral administration in mice, restoration of NAD+ to near-youthful levels in liver, skeletal muscle, and white adipose tissue, and functional improvements in aged animal models consistent with NAD+-dependent pathway activation.",
    },
    {
      type: "heading",
      text: "Direct NAD+ Administration in Research",
    },
    {
      type: "paragraph",
      text: "Direct NAD+ injection bypasses the biosynthetic steps required for precursor conversion. Research protocols using intravenous or intraperitoneal NAD+ administration achieve rapid plasma elevation, enabling time-course studies of cellular NAD+ kinetics. Direct administration is particularly useful for mechanistic studies where the conversion efficiency of precursors would introduce variables, and for in vitro cell work where medium supplementation provides precise concentration control.",
    },
    {
      type: "heading",
      text: "Bioavailability Comparison",
    },
    {
      type: "table",
      headers: ["Parameter", "NMN (Oral)", "NR (Oral)", "Direct NAD+ (IV/IP)"],
      rows: [
        ["Plasma half-life", "~10-15 min to peak", "~30-60 min to peak", "Minutes (rapid)"],
        ["Tissue conversion required", "Yes (NMN→NAD+)", "Yes (NR→NMN→NAD+)", "No"],
        ["Blood-brain barrier penetration", "Limited", "Limited", "Negligible (direct)"],
        ["Dose control precision", "Moderate", "Moderate", "High"],
        ["Protocol complexity", "Low", "Low", "Higher"],
      ],
    },
    {
      type: "heading",
      text: "Which Approach for Your Research?",
    },
    {
      type: "paragraph",
      text: "Protocol choice depends on research questions. For studying the systemic effects of NAD+ restoration, oral NMN provides a physiologically relevant route and mirrors potential translational applications. For mechanistic studies of NAD+-dependent enzymes (sirtuins, PARPs), or for studies requiring precise temporal control of NAD+ availability, direct injection approaches offer cleaner experimental design. For in vitro work, direct NAD+ supplementation is standard.",
    },
    {
      type: "callout",
      text: "Nexphoria provides both NMN and direct NAD+ with HPLC purity ≥99%, MS confirmation, and appropriate cold-chain handling for each formulation.",
    },
  ],
};
