import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "nad-plus-cd38-parp-aging-research-guide",
  title: "NAD+, CD38, and PARP: The Three-Way Axis Driving Aging Research",
  description:
    "NAD+ is central to longevity research — but understanding why requires unpacking CD38, PARP-1, and sirtuin biology. A researcher's guide to the mechanisms behind NAD+ decline and precursor supplementation strategies.",
  category: "Compound Profiles",
  readMinutes: 11,
  publishedAt: "2026-06-07",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Nicotinamide adenine dinucleotide (NAD+) is a coenzyme found in every living cell, operating at the intersection of energy metabolism and cellular repair. Over the past decade, it has become one of the most intensively studied molecules in aging biology — not as a peripheral player, but as a potential master regulator of multiple hallmarks of the aging process.",
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
      text: "The critical finding in aging research is that NAD+ levels decline significantly with age across multiple tissues. Studies in rodents and humans have documented NAD+ reductions of 40–60% between young adulthood and middle age, with further decline into senescence. This is not incidental — the decline appears to be causal in a network of age-associated functional changes.",
    },
    {
      type: "subheading",
      text: "Three Primary Drivers of NAD+ Decline",
    },
    {
      type: "list",
      items: [
        "Decreased biosynthesis — NAMPT (rate-limiting enzyme in the NAD+ salvage pathway) activity declines with age",
        "PARP hyperactivation — accumulating DNA damage chronically activates PARP-1, consuming NAD+ at elevated rates",
        "CD38 upregulation — CD38 expression increases in aged tissues, where it acts as a major NAD+ hydrolase",
      ],
    },
    {
      type: "heading",
      text: "The CD38 Problem",
    },
    {
      type: "paragraph",
      text: "CD38 is a multifunctional enzyme expressed on immune cells, adipocytes, and aged tissues that degrades NAD+ as part of calcium signaling pathways. Research by Eduardo Chini and colleagues at the Mayo Clinic has identified CD38 upregulation as a major — potentially the primary — driver of age-related NAD+ decline in mammals.",
    },
    {
      type: "paragraph",
      text: "In aged mice, CD38 knockout prevents the characteristic decline in tissue NAD+ levels. CD38 inhibition with compounds such as apigenin (a flavonoid) has been shown to elevate NAD+ in aged rodents and partially reverse age-associated metabolic decline. This line of research suggests that targeting CD38 may be as important as providing NAD+ precursors for restoring the NAD+ pool in aging tissue.",
    },
    {
      type: "subheading",
      text: "Senescence and the Inflammatory Connection",
    },
    {
      type: "paragraph",
      text: "Senescent cells — a hallmark of aging — accumulate in aged tissues and secrete pro-inflammatory cytokines (the SASP, or Senescence-Associated Secretory Phenotype). This inflammatory milieu drives further CD38 upregulation via NF-κB signaling, creating a self-reinforcing cycle: inflammation → CD38 → NAD+ depletion → sirtuin suppression → accelerated cellular aging → more senescence.",
    },
    {
      type: "heading",
      text: "PARP-1 and the DNA Repair Competition",
    },
    {
      type: "paragraph",
      text: "PARP-1 (Poly ADP-ribose polymerase 1) is the primary consumer of NAD+ in cells experiencing DNA damage. In aged organisms accumulating genomic damage, PARP-1 becomes chronically activated — consuming NAD+ at rates that compete with and deplete the pool available for sirtuin activation.",
    },
    {
      type: "paragraph",
      text: "This has led to the competition hypothesis in aging research: accumulated DNA damage → PARP hyperactivation → NAD+ depletion → sirtuin suppression → accelerated aging hallmarks. Research by David Sinclair's laboratory at Harvard has specifically implicated this NAD+-PARP-sirtuin axis in the epigenetic aging process, connecting it to the Information Theory of Aging — the hypothesis that aging is fundamentally an information loss problem driven by epigenetic noise accumulation.",
    },
    {
      type: "heading",
      text: "Sirtuins: The NAD+-Dependent Longevity Enzymes",
    },
    {
      type: "paragraph",
      text: "Sirtuins (SIRT1–7) are a family of NAD+-dependent deacylases that regulate chromatin remodeling and gene silencing, mitochondrial biogenesis (SIRT1, SIRT3), circadian clock entrainment (SIRT1), stress response and autophagy induction (SIRT1, SIRT2), and metabolic regulation including fatty acid oxidation and gluconeogenesis.",
    },
    {
      type: "paragraph",
      text: "Sirtuin activity is directly limited by available NAD+. As NAD+ declines with age, sirtuin activity correspondingly decreases. Restoring NAD+ in aged rodent models has consistently been shown to reactivate sirtuin-dependent gene expression programs associated with younger tissue function — a finding replicated across multiple independent laboratories using NMN and NR supplementation.",
    },
    {
      type: "heading",
      text: "NAD+ and the Hallmarks of Aging",
    },
    {
      type: "table",
      headers: ["Hallmark (López-Otín et al.)", "NAD+ Connection", "Key Mechanism"],
      rows: [
        ["Genomic instability", "PARP-1-dependent repair", "NAD+ consumed by chronic PARP activation"],
        ["Epigenetic alterations", "Sirtuin-mediated histone deacetylation", "SIRT1 requires NAD+ for H3/H4 deacetylation"],
        ["Loss of proteostasis", "Autophagy regulation", "SIRT1 activates autophagy via AMPK/mTOR"],
        ["Deregulated nutrient sensing", "Insulin/IGF-1/mTOR signaling", "SIRT1/SIRT3 modulate metabolic pathway sensitivity"],
        ["Mitochondrial dysfunction", "Mitochondrial biogenesis", "SIRT3 regulates mitochondrial protein acetylation"],
      ],
    },
    {
      type: "heading",
      text: "NAD+ Precursors: NMN vs. NR vs. NAM",
    },
    {
      type: "paragraph",
      text: "Because NAD+ itself has poor cellular uptake when administered exogenously, research has focused on precursor molecules that cells convert to NAD+ via the salvage pathway.",
    },
    {
      type: "subheading",
      text: "NMN (Nicotinamide Mononucleotide)",
    },
    {
      type: "paragraph",
      text: "NMN is the direct precursor to NAD+ via NMNAT enzymes. It has been studied extensively by David Sinclair (Harvard) and Shin-ichiro Imai (Washington University). Rodent studies document improvements in metabolic function, muscle performance, bone density, and insulin sensitivity in aged animals. The SLC12A8 transporter has been identified as a potential NMN-specific transporter in intestinal tissue, suggesting a direct absorption pathway. Human Phase II trials are underway; early data suggests oral bioavailability and measurable blood NAD+ elevation.",
    },
    {
      type: "subheading",
      text: "NR (Nicotinamide Riboside)",
    },
    {
      type: "paragraph",
      text: "NR is a precursor to NMN, then NAD+, requiring an additional enzymatic step via NRK kinases. It was the first NAD+ precursor to enter human clinical trials; multiple published RCTs document blood NAD+ elevation (Trammell et al., Nature Communications, 2016). Commercially available as Tru Niagen; studied at doses of 250–1000 mg/day in human trials with a well-established safety profile.",
    },
    {
      type: "subheading",
      text: "NAM (Nicotinamide)",
    },
    {
      type: "paragraph",
      text: "Nicotinamide is the simplest and most bioavailable precursor. However, high doses can inhibit sirtuins via product feedback inhibition — a potential limitation for longevity applications. At physiological concentrations NAM is the primary salvage pathway substrate, but therapeutic dosing may require careful titration to avoid sirtuin suppression.",
    },
    {
      type: "heading",
      text: "Research Models in NAD+ Biology",
    },
    {
      type: "list",
      items: [
        "Genetic models — SIRT1 knockout, CD38 knockout, NAMPT conditional knockout mice",
        "NAD+ depletion models — FK866 (NAMPT inhibitor) treatment to acutely deplete NAD+",
        "Supplementation models — NMN or NR administration in aged rodents with blood/tissue NAD+ quantification",
        "PARP inhibition studies — examining effects of PARP-1 blockade on NAD+ availability and sirtuin activation",
        "Senolytic combination studies — senolytic clearance followed by NAD+ restoration to examine synergistic effects",
      ],
    },
    {
      type: "callout",
      text: "NAD+ sits at the convergence of energy metabolism, DNA repair, epigenetic regulation, and mitochondrial biology — making it one of the most mechanistically justified targets in longevity research. The three-way axis of CD38, PARP-1, and sirtuin biology explains both why NAD+ declines with age and why precursor supplementation has shown consistent efficacy in pre-clinical models.",
    },
    {
      type: "disclaimer",
      text: "For research purposes only. Not intended for human use. All compounds mentioned are research tools studied in pre-clinical settings.",
    },
  ],
};
