import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "nad-plus-longevity-sirtuins-parp-hallmarks-jun23-ovn19",
  title: "NAD+: Why Longevity Researchers Are Paying Attention",
  description:
    "NAD+ sits at the intersection of sirtuins, PARP repair, and five hallmarks of aging. This article breaks down the biology, precursor options (NMN, NR, NAM), and why declining NAD+ levels are a central target in aging research.",
  category: "Compound Profiles",
  readMinutes: 10,
  publishedAt: "2026-06-23",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Nicotinamide adenine dinucleotide (NAD+) is a coenzyme found in every living cell, operating at the intersection of energy metabolism and cellular repair. Over the past decade, it has become one of the most discussed molecules in longevity science — not as a peripheral player, but as a potential master regulator of aging biology.",
    },
    {
      type: "heading",
      text: "What Is NAD+ and Why Does It Decline?",
    },
    {
      type: "paragraph",
      text: "NAD+ exists in an oxidized (NAD+) and reduced (NADH) form, cycling between them as it shuttles electrons during metabolic processes. It is essential for glycolysis and the TCA cycle (core ATP production pathways), sirtuin activation (the NAD+-dependent deacetylase enzymes central to aging research), PARP-1 activity (DNA damage repair), and CD38 signaling (immune regulation and NAD+ consumption).",
    },
    {
      type: "paragraph",
      text: "The critical issue identified in aging research is that NAD+ levels decline with age across multiple tissues. Studies in rodents and humans have documented NAD+ reductions of 40–60% between young adulthood and middle age, with further decline into senescence. The drivers appear multifactorial: decreased biosynthesis via the salvage pathway (NAMPT activity declines), increased consumption by PARP enzymes in response to cumulative DNA damage, and elevated CD38 expression in aged tissues.",
    },
    {
      type: "heading",
      text: "Sirtuins: The NAD+-Dependent Longevity Enzymes",
    },
    {
      type: "paragraph",
      text: "Sirtuins (SIRT1–7) are a family of NAD+-dependent deacylases that have been called 'longevity enzymes' due to their role in chromatin remodeling and gene silencing, mitochondrial biogenesis (SIRT1, SIRT3), circadian clock regulation (SIRT1), stress response and autophagy (SIRT1, SIRT2), and metabolic regulation including fatty acid oxidation and gluconeogenesis.",
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
      text: "This has led to the competition hypothesis: accumulated DNA damage → PARP hyperactivation → NAD+ depletion → sirtuin suppression → accelerated aging hallmarks. Research in this area has important implications for understanding the connection between genomic instability, epigenetic alterations, and cellular senescence — three of the nine hallmarks of aging identified by López-Otín et al. in Cell (2013).",
    },
    {
      type: "heading",
      text: "NAD+ and the Hallmarks of Aging",
    },
    {
      type: "paragraph",
      text: "NAD+ biology intersects with at least five of the nine hallmarks of aging: genomic instability (PARP-1-dependent repair), epigenetic alterations (sirtuin-mediated histone deacetylation), loss of proteostasis (SIRT1 regulation of autophagy), deregulated nutrient sensing (SIRT1/SIRT3 in insulin/mTOR pathways), and mitochondrial dysfunction (SIRT3 mitochondrial regulation). This breadth of mechanistic connection is a key reason NAD+ has attracted sustained research attention.",
    },
    {
      type: "heading",
      text: "NAD+ Precursors: NMN vs. NR vs. NAM",
    },
    {
      type: "paragraph",
      text: "Because NAD+ itself has poor cellular uptake, research has focused on precursor molecules that the cell can convert to NAD+ via the salvage pathway.",
    },
    {
      type: "paragraph",
      text: "NMN (Nicotinamide Mononucleotide) is a direct precursor to NAD+ via NMNAT enzymes. Studied by David Sinclair (Harvard) and Shin-ichiro Imai (Washington University), rodent studies document improvements in metabolic function, muscle performance, and insulin sensitivity with age. Human Phase II trials are underway with early data suggesting oral bioavailability and measurable NAD+ elevation.",
    },
    {
      type: "paragraph",
      text: "NR (Nicotinamide Riboside) is a precursor to NMN, then NAD+. It was the first precursor to enter human trials, with multiple published RCTs documenting blood NAD+ elevation (Trammell et al., Nature Communications, 2016). Commercially available and studied at doses of 250–1000 mg/day in human trials.",
    },
    {
      type: "paragraph",
      text: "NAM (Nicotinamide) is the simplest precursor with high bioavailability, but high doses can inhibit sirtuins via product feedback inhibition — a potential limitation for longevity applications. The key distinction: NMN has a more direct biosynthetic route but fewer human clinical data than NR; both elevate blood NAD+ effectively in human studies, but tissue-specific distribution differences remain under investigation.",
    },
    {
      type: "heading",
      text: "Research Tools: NAD+ Supplementation Models",
    },
    {
      type: "paragraph",
      text: "In research settings, NAD+ biology is typically studied through genetic models (SIRT1 knockout, CD38 knockout mice), NAD+ depletion models using NAMPT inhibitor treatment, supplementation models with NMN or NR administration in aged rodents, and PARP inhibition studies examining effects on NAD+ availability and sirtuin activity.",
    },
    {
      type: "heading",
      text: "Summary",
    },
    {
      type: "paragraph",
      text: "NAD+ sits at the convergence of energy metabolism, DNA repair, epigenetic regulation, and mitochondrial biology — making it one of the most mechanistically justified targets in longevity research. The decline of NAD+ with age, its role in sirtuin and PARP biology, and the established efficacy of precursor supplementation in rodent models collectively explain why researchers continue to invest significant effort in understanding and modulating this pathway.",
    },
    {
      type: "paragraph",
      text: "For research purposes only. Not intended for human use.",
    },
  ],
};
