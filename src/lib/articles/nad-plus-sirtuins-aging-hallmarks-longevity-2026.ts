import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "nad-plus-sirtuins-aging-hallmarks-longevity-2026",
  title: "NAD+, Sirtuins, and the Hallmarks of Aging: Why Longevity Researchers Are Paying Attention",
  description:
    "A research-oriented overview of NAD+ biology in aging — covering sirtuin activation, PARP competition, the NAD+ decline trajectory, precursor comparisons (NMN vs NR vs NAM), and what current longevity research models are examining.",
  category: "Longevity Research",
  readMinutes: 12,
  publishedAt: "2026-06-11",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Nicotinamide adenine dinucleotide (NAD+) is a coenzyme found in every living cell, operating at the intersection of energy metabolism and cellular repair. Over the past decade, it has become one of the most discussed molecules in longevity science — not as a peripheral player, but as a potential master regulator of aging biology. Understanding why requires a close look at sirtuin biology, the PARP competition hypothesis, and how NAD+ intersects with the canonical hallmarks of aging.",
    },
    {
      type: "heading",
      text: "The NAD+ Decline Problem",
    },
    {
      type: "paragraph",
      text: "NAD+ exists in an oxidized (NAD+) and reduced (NADH) form, cycling between them as it shuttles electrons during metabolic processes. It is essential for glycolysis and the TCA cycle (core ATP production pathways), sirtuin activation (the NAD+-dependent deacetylase enzymes central to aging research), PARP-1 activity for DNA damage repair, and CD38 signaling involved in immune regulation.",
    },
    {
      type: "paragraph",
      text: "The critical issue identified in aging research is that NAD+ levels decline with age across multiple tissues. Studies in rodents and humans have documented NAD+ reductions of 40–60% between young adulthood and middle age, with further decline into senescence. The drivers of this decline appear to be multifactorial: decreased biosynthesis via the salvage pathway as NAMPT activity declines, increased consumption by PARP enzymes in response to cumulative DNA damage, and elevated CD38 expression in aged tissues which degrades NAD+.",
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
      text: "The competition hypothesis: accumulated DNA damage → PARP hyperactivation → NAD+ depletion → sirtuin suppression → accelerated aging hallmarks. This hypothesis provides a mechanistic link between genomic instability (Hallmark #1) and epigenetic alterations (Hallmark #4) in the López-Otín framework.",
    },
    {
      type: "heading",
      text: "NAD+ and the Hallmarks of Aging",
    },
    {
      type: "paragraph",
      text: "The landmark 2013 paper by López-Otín et al. in Cell identified 9 hallmarks of aging. NAD+ biology intersects with at least five of them, which is a key reason it has attracted sustained research attention — it is not a narrow intervention but a potential modulator of core aging biology.",
    },
    {
      type: "table",
      headers: ["Aging Hallmark", "NAD+ Mechanism"],
      rows: [
        ["Genomic instability", "PARP-1 dependent DNA repair"],
        ["Epigenetic alterations", "Sirtuin-mediated histone deacetylation"],
        ["Loss of proteostasis", "SIRT1 regulation of autophagy"],
        ["Deregulated nutrient sensing", "SIRT1/SIRT3 in insulin and mTOR pathways"],
        ["Mitochondrial dysfunction", "SIRT3 mitochondrial protein regulation"],
      ],
    },
    {
      type: "heading",
      text: "NAD+ Precursors: NMN vs NR vs NAM",
    },
    {
      type: "paragraph",
      text: "Because NAD+ itself has poor cellular uptake, research has focused on precursor molecules that the cell can convert to NAD+ via the salvage pathway. The three most studied options are NMN, NR, and nicotinamide (NAM).",
    },
    {
      type: "subheading",
      text: "NMN (Nicotinamide Mononucleotide)",
    },
    {
      type: "paragraph",
      text: "NMN is the direct precursor to NAD+ via NMNAT enzymes. It has been studied extensively by David Sinclair (Harvard) and Shin-ichiro Imai (Washington University). Rodent studies document improvements in metabolic function, muscle performance, and insulin sensitivity with age. Human Phase II trials are underway, with early data suggesting oral bioavailability and measurable NAD+ elevation in blood.",
    },
    {
      type: "subheading",
      text: "NR (Nicotinamide Riboside)",
    },
    {
      type: "paragraph",
      text: "NR is a precursor to NMN, then NAD+. It was the first NAD+ precursor to enter human trials, with multiple published randomized controlled trials documenting blood NAD+ elevation (Trammell et al., Nature Communications, 2016). NR is commercially available and has been studied at doses of 250–1000 mg/day in human trials.",
    },
    {
      type: "subheading",
      text: "NAM (Nicotinamide)",
    },
    {
      type: "paragraph",
      text: "Nicotinamide is the simplest precursor and is highly bioavailable. However, high doses can inhibit sirtuins through product feedback inhibition — a potential limitation specifically relevant for longevity applications where sirtuin activation is a primary research goal.",
    },
    {
      type: "table",
      headers: ["Precursor", "Route to NAD+", "Human RCT Data", "Key Limitation"],
      rows: [
        ["NMN", "Direct via NMNAT", "Phase II underway", "Less human data than NR"],
        ["NR", "Via NMN then NMNAT", "Multiple published RCTs", "Extra enzymatic step"],
        ["NAM", "Via NAMPT salvage pathway", "Pharmacokinetic data available", "Sirtuin feedback inhibition at high doses"],
      ],
    },
    {
      type: "heading",
      text: "Research Tools: NAD+ Supplementation Models",
    },
    {
      type: "paragraph",
      text: "In research settings, NAD+ biology is studied through genetic models including SIRT1 knockout and CD38 knockout mice, NAD+ depletion models using NAMPT inhibitor treatment, and supplementation models using NMN or NR administration — often with longitudinal tracking of metabolic, physical, and molecular aging markers.",
    },
    {
      type: "paragraph",
      text: "Key outcome variables in these models include blood and tissue NAD+ quantification (typically by mass spectrometry or enzymatic assay), sirtuin activity markers (acetylation state of known SIRT targets), mitochondrial function endpoints (oxygen consumption rate, mtDNA copy number), and metabolic markers (insulin sensitivity, body composition, muscle function in aged subjects).",
    },
    {
      type: "heading",
      text: "Current State of the Research",
    },
    {
      type: "paragraph",
      text: "NAD+ precursor research is advancing rapidly on two fronts. In rodent models, the data supporting NAD+ restoration effects on aging hallmarks is now extensive across multiple independent laboratories. In human trials, the picture is emerging: NR has demonstrated reliable blood NAD+ elevation, and studies examining functional outcomes (muscle strength, cognitive measures, metabolic parameters) are underway or recently published.",
    },
    {
      type: "paragraph",
      text: "The field has not yet demonstrated that NAD+ precursor administration produces the same functional outcomes in humans that have been observed in aged rodent models. That gap between preclinical and human data remains the central open question in the field as of 2026.",
    },
    {
      type: "disclaimer",
      text: "For research purposes only. Not intended for human use.",
    },
  ],
};
