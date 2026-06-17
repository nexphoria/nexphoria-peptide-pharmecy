import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "nad-plus-longevity-sirtuins-parp-complete-guide",
  title: "NAD+: Sirtuins, PARP, and the Longevity Research Case",
  description:
    "A deep-dive into NAD+ biology for researchers — how NAD+ declines with age, its role in sirtuin activation and PARP-mediated DNA repair, connections to the hallmarks of aging, and a comparison of NMN, NR, and NAM precursors.",
  category: "Research Fundamentals",
  readMinutes: 12,
  publishedAt: "2026-06-17",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Nicotinamide adenine dinucleotide (NAD+) is a coenzyme found in every living cell, operating at the intersection of energy metabolism and cellular repair. Over the past decade, it has become one of the most discussed molecules in longevity science — not as a peripheral player, but as a potential master regulator of aging biology.",
    },
    {
      type: "heading",
      text: "What Is NAD+ and Why Does It Decline With Age?",
    },
    {
      type: "paragraph",
      text: "NAD+ exists in an oxidized (NAD+) and reduced (NADH) form, cycling between them as it shuttles electrons during metabolic processes. It is essential for glycolysis and the TCA cycle (core ATP production), sirtuin activation (the NAD+-dependent deacetylase enzymes central to aging research), PARP-1 activity for DNA damage repair, and CD38 signaling for immune regulation.",
    },
    {
      type: "paragraph",
      text: "The critical finding in aging research is that NAD+ levels decline with age across multiple tissues. Studies in rodents and humans have documented NAD+ reductions of 40–60% between young adulthood and middle age, with further decline into senescence. The drivers appear multifactorial: decreased biosynthesis via the salvage pathway (NAMPT activity declines), increased consumption by PARP enzymes responding to cumulative DNA damage, and elevated CD38 expression in aged tissues.",
    },
    {
      type: "heading",
      text: "Sirtuins: The NAD+-Dependent Longevity Enzymes",
    },
    {
      type: "paragraph",
      text: "Sirtuins (SIRT1–7) are a family of NAD+-dependent deacylases that have been called 'longevity enzymes' due to their roles in chromatin remodeling and gene silencing, mitochondrial biogenesis (SIRT1, SIRT3), circadian clock regulation (SIRT1), stress response and autophagy (SIRT1, SIRT2), and metabolic regulation including fatty acid oxidation and gluconeogenesis.",
    },
    {
      type: "paragraph",
      text: "Sirtuin activity is directly limited by available NAD+. As NAD+ declines with age, sirtuin activity correspondingly decreases — a relationship identified by David Sinclair's laboratory at Harvard as a central axis of the aging process. Restoring NAD+ in aged rodent models has consistently been shown to reactivate sirtuin-dependent gene expression programs associated with younger tissue function.",
    },
    {
      type: "heading",
      text: "PARP Enzymes and the DNA Repair Competition",
    },
    {
      type: "paragraph",
      text: "PARP-1 (Poly ADP-ribose polymerase 1) is the primary consumer of NAD+ in cells experiencing DNA damage. In aged organisms accumulating genomic damage, PARP-1 becomes chronically activated — consuming NAD+ at rates that compete with and deplete the pool available for sirtuin activation.",
    },
    {
      type: "paragraph",
      text: "This has led to the competition hypothesis: accumulated DNA damage → PARP hyperactivation → NAD+ depletion → sirtuin suppression → accelerated aging hallmarks. Research in this area connects genomic instability, epigenetic alterations, and cellular senescence — three of the hallmarks described by López-Otín et al.",
    },
    {
      type: "heading",
      text: "NAD+ and the Hallmarks of Aging",
    },
    {
      type: "paragraph",
      text: "The landmark 2013 paper by López-Otín et al. in Cell identified nine hallmarks of aging. NAD+ biology intersects with at least five of them, making it one of the broadest single-molecule research targets in longevity science.",
    },
    {
      type: "list",
      items: [
        "Genomic instability — PARP-1 dependent DNA repair",
        "Epigenetic alterations — sirtuin-mediated histone deacetylation",
        "Loss of proteostasis — SIRT1 regulation of autophagy",
        "Deregulated nutrient sensing — SIRT1/SIRT3 in insulin/mTOR pathways",
        "Mitochondrial dysfunction — SIRT3 mitochondrial regulation",
      ],
    },
    {
      type: "heading",
      text: "NAD+ Precursors in Research: NMN vs. NR vs. NAM",
    },
    {
      type: "paragraph",
      text: "Because NAD+ itself has poor cellular uptake, research has focused on precursor molecules that the cell can convert to NAD+ via the salvage pathway. Three primary precursors have been studied:",
    },
    {
      type: "subheading",
      text: "NMN (Nicotinamide Mononucleotide)",
    },
    {
      type: "paragraph",
      text: "NMN is a direct precursor to NAD+ via NMNAT enzymes. Studied extensively by David Sinclair (Harvard) and Shin-ichiro Imai (Washington University), rodent studies document improvements in metabolic function, muscle performance, and insulin sensitivity in aged animals. Human Phase II trials have shown oral bioavailability and measurable NAD+ elevation in blood.",
    },
    {
      type: "subheading",
      text: "NR (Nicotinamide Riboside)",
    },
    {
      type: "paragraph",
      text: "NR is converted to NMN by NRK (nicotinamide riboside kinase) enzymes before entering the NAD+ pool. Marketed under the brand name Niagen by ChromaDex, NR has several completed human clinical trials demonstrating its ability to raise blood NAD+ levels. Comparisons to NMN on a per-mole basis remain an active research question.",
    },
    {
      type: "subheading",
      text: "NAM (Nicotinamide)",
    },
    {
      type: "paragraph",
      text: "Nicotinamide (NAM) enters the salvage pathway via NAMPT — the rate-limiting enzyme in NAD+ biosynthesis. High doses of NAM can paradoxically inhibit sirtuins as a feedback mechanism, which has led some researchers to prefer NMN or NR for longevity-focused protocols.",
    },
    {
      type: "heading",
      text: "Active Research Areas",
    },
    {
      type: "paragraph",
      text: "Current research is examining NAD+ in the context of muscle aging and sarcopenia (SIRT1/3 pathways in mitochondrial quality control), Alzheimer's disease and neurodegeneration (NAD+-dependent clearance pathways), metabolic disease and insulin resistance, and the optimal delivery route — oral supplementation vs. subcutaneous NAD+ vs. IV infusion protocols.",
    },
    {
      type: "heading",
      text: "Sourcing Considerations for NAD+ Research",
    },
    {
      type: "paragraph",
      text: "Research-grade NAD+ preparations should be verified by HPLC for purity (≥99%), confirmed by mass spectrometry for molecular identity, and tested for endotoxin contamination via LAL assay. Stability varies by form: lyophilized NAD+ is more stable than reconstituted, and should be stored at -20°C and shielded from light.",
    },
    {
      type: "disclaimer",
      text: "For research purposes only. Not intended for human use.",
    },
  ],
};
