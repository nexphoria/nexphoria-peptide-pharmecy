import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "nad-plus-peptide-longevity",
  title: "NAD+: Why Longevity Researchers Are Paying Attention",
  description:
    "NAD+ is central to longevity research — sirtuins, PARP DNA repair, and the hallmarks of aging all depend on it. Here's why NAD+ levels decline with age and what precursor research (NMN, NR, NAM) actually shows.",
  category: "Longevity Research",
  readMinutes: 9,
  publishedAt: "2026-06-04",
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
      text: "NAD+ exists in an oxidized (NAD+) and reduced (NADH) form, cycling between them as it shuttles electrons during metabolic processes. It is essential for glycolysis and the TCA cycle (core ATP production), sirtuin activation (the NAD+-dependent deacetylase enzymes central to aging research), PARP-1 activity (DNA damage repair), and CD38 signaling (immune regulation and NAD+ consumption).",
    },
    {
      type: "paragraph",
      text: "The critical issue identified in aging research is that NAD+ levels decline with age across multiple tissues. Studies in rodents and humans have documented NAD+ reductions of 40–60% between young adulthood and middle age, with further decline into senescence.",
    },
    {
      type: "list",
      items: [
        "Decreased biosynthesis via the salvage pathway (NAMPT activity declines with age)",
        "Increased consumption by PARP enzymes in response to cumulative DNA damage",
        "Elevated CD38 expression in aged tissues, which degrades NAD+",
      ],
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
      type: "callout",
      text: "The competition hypothesis: accumulated DNA damage → PARP hyperactivation → NAD+ depletion → sirtuin suppression → accelerated aging hallmarks. This links genomic instability, epigenetic alterations, and cellular senescence — three of the hallmarks of aging — through a single molecular axis.",
    },
    {
      type: "heading",
      text: "NAD+ and the Hallmarks of Aging",
    },
    {
      type: "paragraph",
      text: "The landmark 2013 paper by López-Otín et al. in Cell identified 9 hallmarks of aging. NAD+ biology intersects with at least five of them:",
    },
    {
      type: "table",
      headers: ["Hallmark", "NAD+ Connection"],
      rows: [
        ["Genomic instability", "PARP-1 dependent repair"],
        ["Epigenetic alterations", "Sirtuin-mediated histone deacetylation"],
        ["Loss of proteostasis", "SIRT1 regulation of autophagy"],
        ["Deregulated nutrient sensing", "SIRT1/SIRT3 in insulin/mTOR pathways"],
        ["Mitochondrial dysfunction", "SIRT3 mitochondrial regulation"],
      ],
    },
    {
      type: "paragraph",
      text: "This breadth of mechanistic connection is a key reason NAD+ has attracted sustained research attention — it is not a narrow intervention but a potential modulator of core aging biology.",
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
      type: "subheading",
      text: "NMN (Nicotinamide Mononucleotide)",
    },
    {
      type: "paragraph",
      text: "NMN is a direct precursor to NAD+ via NMNAT enzymes. Studied extensively by David Sinclair (Harvard) and Shin-ichiro Imai (Washington University), rodent studies document improvements in metabolic function, muscle performance, and insulin sensitivity with age. Human Phase II trials underway show early evidence of oral bioavailability and measurable NAD+ elevation.",
    },
    {
      type: "subheading",
      text: "NR (Nicotinamide Riboside)",
    },
    {
      type: "paragraph",
      text: "NR was the first precursor to enter human trials with multiple published RCTs documenting blood NAD+ elevation (Trammell et al., Nature Communications, 2016). Commercially available and studied at doses of 250–1000 mg/day in human trials. Requires conversion to NMN before entering the NAD+ biosynthesis pathway.",
    },
    {
      type: "subheading",
      text: "NAM (Nicotinamide)",
    },
    {
      type: "paragraph",
      text: "NAM is the simplest precursor with high bioavailability. However, high doses can inhibit sirtuins via product feedback inhibition — a potential limitation for longevity applications where sirtuin activation is a primary research goal.",
    },
    {
      type: "heading",
      text: "Research Tools: NAD+ Supplementation Models",
    },
    {
      type: "list",
      items: [
        "Genetic models — SIRT1 knockout, CD38 knockout mice",
        "NAD+ depletion models — NAMPT inhibitor treatment",
        "Supplementation models — NMN or NR administration in aged rodents",
        "PARP inhibition studies — examining effects on NAD+ availability and sirtuin activity",
      ],
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
      type: "disclaimer",
      text: "All content on this page is for educational and research purposes only. NAD+ precursors and related compounds sold by Nexphoria are intended for in-vitro and pre-clinical research use only. Not intended for human consumption, therapeutic use, or diagnostic purposes.",
    },
  ],
};
