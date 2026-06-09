import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "nad-plus-sirtuins-dna-repair-aging-mechanisms",
  title: "NAD+, Sirtuins, and DNA Repair: The Core Aging Mechanisms Explained",
  description:
    "A deep mechanistic look at how NAD+ decline drives sirtuin suppression, PARP competition, and accelerated aging hallmarks — and what the current research says about intervention strategies.",
  category: "Longevity Research",
  readMinutes: 12,
  publishedAt: "2026-06-09",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Nicotinamide adenine dinucleotide (NAD+) occupies a unique position in aging biology: it is simultaneously a metabolic coenzyme, a sirtuin substrate, a PARP-1 cofactor, and a regulator of circadian transcription. The age-related decline of NAD+ — well-documented across species and tissue types — creates a cascade of downstream effects on DNA repair capacity, mitochondrial function, and epigenetic programming. Understanding these mechanisms is foundational for evaluating any NAD+-targeted intervention strategy.",
    },
    {
      type: "heading",
      text: "NAD+ Decline: The Core Empirical Finding",
    },
    {
      type: "paragraph",
      text: "The observation that NAD+ levels fall with age is now replicated across multiple organisms and tissues. In human skeletal muscle, studies have documented NAD+ reductions of approximately 50% between young adulthood (20–30 years) and midlife (50–60 years). Liver, brain, and adipose tissue show similar trends, though the magnitude and rate of decline differ by tissue.",
    },
    {
      type: "paragraph",
      text: "The mechanistic drivers of this decline appear to be multifactorial. Three key pathways have been identified in research:",
    },
    {
      type: "list",
      items: [
        "NAMPT (nicotinamide phosphoribosyltransferase) activity declines with age, reducing the rate-limiting step in the NAD+ salvage pathway",
        "PARP-1 hyperactivation in aged cells — responding to accumulated genomic damage — consumes NAD+ at elevated rates",
        "CD38 expression increases with age in multiple tissues; CD38 is a glycohydrolase that degrades NAD+ as its primary substrate",
      ],
    },
    {
      type: "paragraph",
      text: "The net effect is a supply-demand imbalance: reduced synthesis combined with increased consumption. The resulting NAD+ deficit has downstream consequences for every pathway that depends on it.",
    },
    {
      type: "heading",
      text: "Sirtuins: The NAD+-Dependent Longevity Enzymes",
    },
    {
      type: "paragraph",
      text: "Sirtuins (SIRT1–7) are a family of NAD+-dependent deacylases. They require NAD+ as a co-substrate — not merely a cofactor — consuming one molecule of NAD+ per deacylation reaction and producing O-acyl-ADP-ribose and nicotinamide as byproducts. This stoichiometric requirement means sirtuin activity is directly and sensitively regulated by intracellular NAD+ availability.",
    },
    {
      type: "subheading",
      text: "SIRT1: Master Regulator of Metabolism and Stress Response",
    },
    {
      type: "paragraph",
      text: "SIRT1 is the most extensively studied sirtuin in aging research. Its substrates include histones (H3K9, H4K16), p53, NF-κB, FOXO transcription factors, and PGC-1α. Through these targets, SIRT1 regulates chromatin structure, inflammatory gene expression, apoptosis thresholds, and mitochondrial biogenesis. SIRT1 activity also governs the circadian clock through deacetylation of BMAL1 — a connection between NAD+ cycling, circadian rhythms, and metabolic regulation.",
    },
    {
      type: "subheading",
      text: "SIRT3: Mitochondrial Integrity",
    },
    {
      type: "paragraph",
      text: "SIRT3 is the primary mitochondrial sirtuin, localized to the mitochondrial matrix where it deacetylates and activates multiple components of the electron transport chain and TCA cycle enzymes. SIRT3 knockout mice show accelerated age-related phenotypes including hearing loss, cardiac hypertrophy, and metabolic dysfunction. In aged organisms, SIRT3 activity falls as mitochondrial NAD+ declines, contributing to impaired electron transport efficiency and elevated reactive oxygen species production.",
    },
    {
      type: "subheading",
      text: "SIRT6: Genomic Stability and Telomere Maintenance",
    },
    {
      type: "paragraph",
      text: "SIRT6 plays a direct role in DNA double-strand break repair, deacetylating histone H3K56 at damage foci to facilitate repair factor recruitment. It also suppresses LINE-1 retrotransposon expression and maintains telomere integrity. SIRT6-deficient mice show a progeroid phenotype with accelerated aging features. SIRT6's genomic stability functions link NAD+ availability directly to DNA repair capacity — the first of the López-Otín hallmarks of aging.",
    },
    {
      type: "heading",
      text: "PARP-1 and the NAD+ Competition Hypothesis",
    },
    {
      type: "paragraph",
      text: "PARP-1 (poly ADP-ribose polymerase 1) is the primary acute consumer of NAD+ in cells experiencing DNA damage. Upon activation by single- or double-strand breaks, PARP-1 transfers ADP-ribose units from NAD+ to target proteins, generating poly ADP-ribose (PAR) chains that recruit repair machinery and signal cellular damage responses.",
    },
    {
      type: "paragraph",
      text: "In young, low-damage cells, PARP-1 activation is transient. In aged cells accumulating genomic damage — from replication errors, oxidative stress, and environmental exposures — PARP-1 is chronically activated at a low level. This sustained activation consumes NAD+ continuously, depleting the pool available for sirtuin function. The result is a positive feedback loop: genomic instability → PARP hyperactivation → NAD+ depletion → sirtuin suppression → reduced DNA repair capacity → more genomic instability.",
    },
    {
      type: "callout",
      text: "The competition hypothesis predicts that interventions which reduce PARP-1 activation (by reducing genomic damage burden) or restore NAD+ supply (via precursor supplementation) should partially rescue sirtuin activity and slow this feedback loop. Rodent data from multiple groups support this prediction.",
    },
    {
      type: "heading",
      text: "CD38: The Silent NAD+ Consumer",
    },
    {
      type: "paragraph",
      text: "CD38 is a glycohydrolase expressed on immune cells and multiple other tissue types. It degrades NAD+ to nicotinamide and ADP-ribose (or cyclic ADP-ribose, which functions as a calcium mobilizer). CD38 expression increases with age — particularly in senescent cells and tissue-resident macrophages — and has been identified as a major contributor to the NAD+ decline observed in aged tissues.",
    },
    {
      type: "paragraph",
      text: "Research from the Bhanu Singh and Johan Auwerx laboratories has documented that CD38 inhibition or knockout in mice preserves NAD+ levels with age and partially phenocopies the effects of NAD+ precursor supplementation. This positions CD38 inhibition as an alternative or complementary approach to precursor loading — targeting consumption rather than supply.",
    },
    {
      type: "heading",
      text: "NAD+ and the Hallmarks of Aging: Intersection Points",
    },
    {
      type: "table",
      headers: ["Hallmark (López-Otín 2013)", "NAD+ Mechanism"],
      rows: [
        ["Genomic instability", "SIRT6-mediated DSB repair; PARP-1 dependent base excision repair"],
        ["Epigenetic alterations", "SIRT1 histone deacetylation; SIRT6 H3K56 regulation"],
        ["Loss of proteostasis", "SIRT1 activation of autophagy via FOXO3 and ATG proteins"],
        ["Deregulated nutrient sensing", "SIRT1/SIRT3 modulation of insulin signaling and mTOR"],
        ["Mitochondrial dysfunction", "SIRT3 electron transport chain activation; mitophagy"],
        ["Cellular senescence", "NAD+ depletion promotes SASP via NF-κB (SIRT1 substrate)"],
        ["Telomere attrition", "SIRT1 and SIRT6 telomere maintenance functions"],
      ],
    },
    {
      type: "paragraph",
      text: "The breadth of this table explains why NAD+ has attracted disproportionate research interest relative to other longevity targets — it appears to intersect with the majority of the accepted aging hallmarks through specific, mechanistically characterized pathways.",
    },
    {
      type: "heading",
      text: "Precursor Research: NMN, NR, and the Salvage Pathway",
    },
    {
      type: "paragraph",
      text: "Because exogenous NAD+ is poorly absorbed (largely degraded in the GI tract before reaching systemic circulation), research has focused on precursor molecules that cells can convert to NAD+ intracellularly via the salvage pathway.",
    },
    {
      type: "paragraph",
      text: "NMN (nicotinamide mononucleotide) is one biosynthetic step upstream of NAD+, converted by NMNAT enzymes. NR (nicotinamide riboside) requires two steps via NRK and NMNAT. Both have demonstrated NAD+ elevation in human clinical trials, with no clear superiority established. The research frontier is shifting toward tissue-specific delivery questions — do NMN and NR preferentially elevate NAD+ in different tissues? — and toward combination approaches pairing precursors with CD38 inhibitors or PARP inhibitors.",
    },
    {
      type: "heading",
      text: "Current Research Directions in 2026",
    },
    {
      type: "list",
      items: [
        "NAMPT activators: small molecules targeting the rate-limiting biosynthesis enzyme rather than loading precursors",
        "CD38 inhibitors: apigenin, quercetin, and synthetic inhibitors in rodent models; human data emerging",
        "Tissue-specific NAD+ delivery: investigating whether route of administration (oral vs. IV vs. SC) affects tissue distribution of NAD+ elevation",
        "Sirtuin activators: STAC compounds (STAc, resveratrol analogs) in combination with NMN/NR to amplify signaling at restored NAD+ levels",
        "Senolytic combinations: NAD+ precursors paired with senolytics to address both PARP hyperactivation (genomic instability) and CD38 upregulation (senescent cell burden)",
      ],
    },
    {
      type: "heading",
      text: "Summary",
    },
    {
      type: "paragraph",
      text: "The mechanistic case for NAD+ as a longevity research target rests on a well-characterized chain: NAD+ declines with age due to reduced NAMPT activity, PARP hyperactivation, and CD38 upregulation. This decline suppresses sirtuin activity across the SIRT1-SIRT7 family, impairing DNA repair, mitochondrial function, epigenetic regulation, and proteostasis — intersecting with the majority of accepted aging hallmarks. Precursor strategies (NMN, NR) partially restore NAD+ levels in rodent and human models; the research frontier is focused on tissue specificity, combination approaches, and consumption-side interventions via CD38 and PARP targeting.",
    },
    {
      type: "divider",
    },
    {
      type: "disclaimer",
      text: "For research purposes only. Not intended for human use.",
    },
  ],
};
