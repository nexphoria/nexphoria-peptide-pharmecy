import type { VideoEntry } from "@/components/product/ResearchVideoEmbed";

/**
 * Research overview videos for select product pages.
 * Videos are sourced from reputable educational YouTube channels.
 * Keyed by product slug.
 */
export const PRODUCT_VIDEOS: Record<string, VideoEntry> = {
  "bpc-157": {
    youtubeId: "gaQwrB8HW4o",
    title: "What Science ACTUALLY Says About BPC-157 Benefits",
    channel: "Educational Science Review",
    description:
      "A deep dive into the preclinical evidence for BPC-157, covering tissue repair mechanisms, NO/eNOS pathway activation, and what the current body of literature supports.",
    durationLabel: "~15 min",
  },
  "semaglutide": {
    youtubeId: "ZteQT00cRR0",
    title: "Semaglutide (Ozempic, Wegovy, Rybelsus) — Mechanisms of Action and Pharmacology",
    channel: "Pharmacology Animation",
    description:
      "Animated pharmacology breakdown of how semaglutide works as a GLP-1 receptor agonist: receptor signaling, insulin secretion, appetite suppression, and gastric emptying.",
    durationLabel: "~12 min",
  },
  "tirzepatide": {
    youtubeId: "IVn4K-lesQM",
    title: "GLP-1 Receptor Agonists — Mechanisms of Action (Semaglutide, Tirzepatide)",
    channel: "Molecular Pharmacology",
    description:
      "Scientific breakdown of GLP-1R and GIPR dual agonism in tirzepatide — covering both receptor signaling arms, incretin synergy, and SURMOUNT trial data context.",
    durationLabel: "~18 min",
  },
  "tb-500": {
    youtubeId: "C9FOnvFDlSo",
    title: "What Science ACTUALLY Says About TB-500 Benefits",
    channel: "Evidence-Based Research Review",
    description:
      "An evidence-based review of TB-500 (Thymosin Beta-4): actin sequestration mechanism, angiogenesis via ILK/VEGF pathway, musculoskeletal and cardiac research models.",
    durationLabel: "~14 min",
  },
  "ghk-cu": {
    youtubeId: "IU6oRY7im6k",
    title: "GHK-Cu (Copper Peptide) Deep Dive: Mechanisms, Benefits, Risks, Forms & Dosing",
    channel: "Peptide Research Channel",
    description:
      "Comprehensive review of GHK-Cu copper peptide: collagen synthesis via TGF-β/lysyl oxidase, Nrf2 antioxidant activation, wound healing angiogenesis, and Pickart gene expression data.",
    durationLabel: "~20 min",
  },
  "nad-plus": {
    youtubeId: "hggLOXhFRxc",
    title: "NAD+ in Aging: Role of Nicotinamide Riboside and Nicotinamide Mononucleotide",
    channel: "FoundMyFitness (Dr. Rhonda Patrick)",
    description:
      "Dr. Rhonda Patrick explains what NAD+ is, why it declines with age, and reviews the research on NAD+ precursors and supplementation strategies for longevity research.",
    durationLabel: "~25 min",
  },
};
