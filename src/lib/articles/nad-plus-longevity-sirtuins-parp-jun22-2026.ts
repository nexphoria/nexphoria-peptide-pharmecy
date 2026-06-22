import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: 'nad-plus-longevity-sirtuins-parp-jun22-2026',
  title: 'NAD+: Why Longevity Researchers Are Paying Attention in 2026',
  description:
    'NAD+ sits at the intersection of energy metabolism, DNA repair, and sirtuin biology. A research-focused overview of why NAD+ decline matters for aging, how PARP competes for NAD+ availability, and what current precursor research (NMN, NR, NAM) reveals.',
  category: 'Compound Profiles',
  readMinutes: 10,
  publishedAt: '2026-06-22',
  ogImage: '/og-image.jpg',
  body: [
    {
      type: 'callout',
      text: 'All content is for research and educational reference only. These compounds are not approved for therapeutic use in humans. Nothing in this article constitutes medical advice.',
    },
    {
      type: 'paragraph',
      text: 'Nicotinamide adenine dinucleotide (NAD+) is a coenzyme found in every living cell, operating at the intersection of energy metabolism and cellular repair. Over the past decade it has become one of the most discussed molecules in longevity science — not as a peripheral player, but as a potential master regulator of aging biology. Understanding why NAD+ declines, what enzymes depend on it, and how researchers are studying precursor supplementation is essential background for anyone working in this space.',
    },
    {
      type: 'heading',
      text: 'What Is NAD+ and Why Does It Decline with Age?',
    },
    {
      type: 'paragraph',
      text: 'NAD+ cycles between its oxidized (NAD+) and reduced (NADH) forms as it shuttles electrons during metabolic processes. It is essential for glycolysis and the TCA cycle, sirtuin activation, PARP-1–dependent DNA repair, and CD38 signaling. The critical finding in aging research is that NAD+ levels decline with age across multiple tissues. Studies in rodents and humans have documented NAD+ reductions of 40–60% between young adulthood and middle age, with further decline into senescence.',
    },
    {
      type: 'paragraph',
      text: 'The drivers of this decline appear to be multifactorial: decreased biosynthesis via the salvage pathway as NAMPT activity falls, increased consumption by PARP enzymes responding to cumulative DNA damage, and elevated CD38 expression in aged tissues that degrades NAD+. This convergence of reduced production and elevated consumption creates a deficit that intersects with several of the core hallmarks of aging.',
    },
    {
      type: 'heading',
      text: 'Sirtuins: NAD+-Dependent Longevity Enzymes',
    },
    {
      type: 'paragraph',
      text: 'Sirtuins (SIRT1–7) are a family of NAD+-dependent deacylases that regulate chromatin remodeling and gene silencing, mitochondrial biogenesis (SIRT1, SIRT3), circadian clock function (SIRT1), stress response and autophagy (SIRT1, SIRT2), and metabolic regulation including fatty acid oxidation and gluconeogenesis. Sirtuin activity is directly limited by available NAD+. As NAD+ declines with age, sirtuin activity correspondingly decreases — a relationship identified by David Sinclair\'s laboratory at Harvard as a central axis of the aging process. Restoring NAD+ in aged rodent models has consistently reactivated sirtuin-dependent gene expression programs associated with younger tissue function.',
    },
    {
      type: 'heading',
      text: 'PARP Enzymes and the DNA Repair Competition',
    },
    {
      type: 'paragraph',
      text: 'PARP-1 (Poly ADP-ribose polymerase 1) is the primary consumer of NAD+ in cells experiencing DNA damage. In aged organisms accumulating genomic damage, PARP-1 becomes chronically activated — consuming NAD+ at rates that compete with and deplete the pool available for sirtuin activation. This has led researchers to articulate a competition hypothesis: accumulated DNA damage drives PARP hyperactivation, which depletes NAD+, which suppresses sirtuins, which accelerates aging hallmarks downstream.',
    },
    {
      type: 'paragraph',
      text: 'This mechanistic loop connects genomic instability (Hallmark #1 per López-Otín et al.), epigenetic alterations (Hallmark #4), and cellular senescence (Hallmark #7) through a single shared metabolic node — NAD+ availability. It is this breadth of connection that explains why NAD+ has attracted sustained multi-discipline research investment.',
    },
    {
      type: 'heading',
      text: 'NAD+ and the Hallmarks of Aging',
    },
    {
      type: 'list',
      items: [
        'Genomic instability → PARP-1 dependent DNA repair requires NAD+',
        'Epigenetic alterations → Sirtuin-mediated histone deacetylation requires NAD+',
        'Loss of proteostasis → SIRT1 regulation of autophagy pathways',
        'Deregulated nutrient sensing → SIRT1/SIRT3 roles in insulin and mTOR signaling',
        'Mitochondrial dysfunction → SIRT3 mitochondrial regulation and ETC complex activity',
      ],
    },
    {
      type: 'heading',
      text: 'NAD+ Precursors: NMN vs. NR vs. NAM',
    },
    {
      type: 'paragraph',
      text: 'Because NAD+ itself has poor cellular uptake, research has focused on precursor molecules the cell can convert to NAD+ via the salvage pathway. Three precursors dominate the research literature.',
    },
    {
      type: 'subheading',
      text: 'NMN (Nicotinamide Mononucleotide)',
    },
    {
      type: 'paragraph',
      text: 'NMN is a direct precursor to NAD+ via NMNAT enzymes and has been studied extensively by David Sinclair (Harvard) and Shin-ichiro Imai (Washington University). Rodent studies document improvements in metabolic function, muscle performance, and insulin sensitivity with aging. Human Phase II trials are underway; early data suggests oral bioavailability and measurable NAD+ elevation in blood.',
    },
    {
      type: 'subheading',
      text: 'NR (Nicotinamide Riboside)',
    },
    {
      type: 'paragraph',
      text: 'NR is a precursor to NMN, then NAD+. It was the first precursor to enter human clinical trials and has multiple published RCTs documenting blood NAD+ elevation — notably Trammell et al. in Nature Communications (2016). Doses of 250–1000 mg/day have been studied in humans with a consistent safety profile.',
    },
    {
      type: 'subheading',
      text: 'NAM (Nicotinamide)',
    },
    {
      type: 'paragraph',
      text: 'NAM is the simplest and most bioavailable precursor. However, high doses can inhibit sirtuins via product feedback inhibition — a significant limitation for longevity applications where sirtuin activation is a primary research objective. This distinction makes NAM less favored relative to NMN and NR in longevity-focused protocols despite its bioavailability advantage.',
    },
    {
      type: 'heading',
      text: 'Research Tools: Studying NAD+ Biology',
    },
    {
      type: 'paragraph',
      text: 'In research settings, NAD+ biology is typically studied through genetic models (SIRT1 knockout, CD38 knockout mice), NAD+ depletion models using NAMPT inhibitor treatment, supplementation models with NMN or NR in aged rodents, and PARP inhibition studies examining effects on NAD+ availability and sirtuin activity. Each approach illuminates a different facet of the pathway and has distinct implications for interpreting results.',
    },
    {
      type: 'heading',
      text: 'Sourcing NAD+ Precursors for Research',
    },
    {
      type: 'paragraph',
      text: 'For researchers sourcing NAD+ precursors, quality verification follows the same principles as other research-grade peptides and biochemicals: HPLC purity confirmation, CoA with third-party testing data, verified molecular weight by mass spectrometry, and endotoxin testing where injectable forms are used. NMN and NR are biochemically simpler than peptides and somewhat more stable, but temperature-controlled storage and protection from light remain best practices.',
    },
    {
      type: 'paragraph',
      text: 'NAD+ precursors sourced from Nexphoria meet the same quality standards applied to our peptide catalog: independent HPLC verification, batch-specific CoA documentation, and cold-chain handling throughout the supply chain.',
    },
  ],
};
