import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "nad-plus-vs-nmn-longevity-precursors-2026-comparison",
  title: "NAD+ vs NMN: What Longevity Researchers Need to Know",
  description:
    "A research-focused comparison of NAD+ precursors — NMN, NR, and direct NAD+ delivery routes. What the published science says about bioavailability, mechanism, and where longevity research is heading in 2026.",
  category: "Compound Profiles",
  readMinutes: 9,
  publishedAt: "2026-06-09",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Nicotinamide adenine dinucleotide (NAD+) is a coenzyme found in every living cell, functioning as an essential electron carrier in metabolic processes and as a substrate for enzymes central to DNA repair, gene expression, and cellular stress response. Its decline with age has made it one of the most investigated targets in longevity research.",
    },
    {
      type: "paragraph",
      text: "The core debate in the field is not whether NAD+ matters — that is well-established — but how to most effectively elevate it in research models.",
    },
    {
      type: "heading",
      text: "The NAD+ Decline Problem",
    },
    {
      type: "list",
      items: [
        "Human skeletal muscle NAD+ declines approximately 50% between ages 40 and 60 in some analyses",
        "Reduced NAD+ correlates with decreased SIRT1 and SIRT3 activity — sirtuins that regulate mitochondrial function and stress responses",
        "Aged mice with restored NAD+ levels show improvements in muscle function, metabolic markers, and lifespan in several studies",
      ],
    },
    {
      type: "paragraph",
      text: "The central challenge is that orally administered NAD+ is poorly absorbed — it is largely degraded in the gut before reaching systemic circulation. This has driven research toward precursor molecules that can be absorbed and converted to NAD+ intracellularly.",
    },
    {
      type: "heading",
      text: "NMN (Nicotinamide Mononucleotide)",
    },
    {
      type: "paragraph",
      text: "NMN is a direct precursor to NAD+, one biosynthetic step upstream. It is converted to NAD+ via the enzyme NMNAT (Nicotinamide Mononucleotide Adenylyltransferase).",
    },
    {
      type: "subheading",
      text: "Key Research",
    },
    {
      type: "list",
      items: [
        "David Sinclair's lab at Harvard published extensively on NMN's effects in aged mice, including improved vascular function, muscle endurance, and energy metabolism",
        "A 2020 human pilot study (Yoshino et al.) showed that oral NMN supplementation raised blood NAD+ metabolite levels and improved insulin sensitivity in prediabetic women",
        "NMN appears to be absorbed intestinally via a dedicated transporter (Slc12a8), enabling reasonably efficient uptake compared to NAD+ itself",
      ],
    },
    {
      type: "heading",
      text: "NR (Nicotinamide Riboside)",
    },
    {
      type: "paragraph",
      text: "NR is another well-studied NAD+ precursor, two steps upstream from NAD+. It must first be converted to NMN, then to NAD+.",
    },
    {
      type: "subheading",
      text: "Key Research",
    },
    {
      type: "list",
      items: [
        "Multiple human trials showing NR raises whole-blood NAD+ levels (ChromaDex-sponsored studies)",
        "Elysium Health's Basis (NR + pterostilbene) showed sustained NAD+ elevation in a 2017 clinical trial",
        "NR and NMN appear to produce comparable NAD+ elevation in several comparative studies; no definitive superiority for either has been established",
      ],
    },
    {
      type: "heading",
      text: "Direct NAD+ Supplementation",
    },
    {
      type: "paragraph",
      text: "Oral NAD+ faces a significant bioavailability problem. Research suggests most ingested NAD+ is cleaved in the gut to nicotinamide before absorption. IV NAD+ infusion bypasses this limitation and is used in clinical research contexts. Studies on IV NAD+ have examined effects on neurological function, addiction recovery applications, and acute elevation of tissue NAD+ levels.",
    },
    {
      type: "paragraph",
      text: "Subcutaneous and intranasal NAD+ delivery are also under investigation, with some pre-clinical data suggesting improved bioavailability over oral routes.",
    },
    {
      type: "heading",
      text: "Mechanism Comparison",
    },
    {
      type: "table",
      headers: ["Compound", "Pathway to NAD+", "Human Bioavailability", "Human Clinical Data"],
      rows: [
        ["NAD+ (oral)", "Direct, largely degraded", "Poor", "Limited"],
        ["NAD+ (IV/SC)", "Direct", "High", "Emerging"],
        ["NMN", "1 step (NMNAT)", "Moderate-Good", "Growing"],
        ["NR", "2 steps (NRK → NMNAT)", "Good", "Established"],
        ["Nicotinamide (NAM)", "Salvage pathway", "Good", "Established, feedback inhibition concern"],
      ],
    },
    {
      type: "heading",
      text: "Where Longevity Research Is Heading in 2026",
    },
    {
      type: "paragraph",
      text: "The longevity research community has not converged on a single preferred compound. Several active directions are emerging:",
    },
    {
      type: "list",
      items: [
        "Tissue-specific delivery — some researchers are investigating whether different precursors preferentially elevate NAD+ in different tissues (liver vs. muscle vs. brain)",
        "NAMPT activators — compounds that upregulate the enzyme limiting NAD+ biosynthesis from nicotinamide, potentially more efficient than precursor loading",
        "CD38 inhibitors — CD38 is a major NAD+-consuming enzyme; reducing its activity may be as effective as increasing NAD+ supply",
        "Peptide combinations — MOTS-c and Humanin (mitochondria-derived peptides) interact with NAD+ metabolism; some researchers investigate combining peptide strategies with NAD+ precursor protocols",
      ],
    },
    {
      type: "heading",
      text: "Summary",
    },
    {
      type: "paragraph",
      text: "Neither oral NAD+ nor NMN has definitively won the longevity research debate. The evidence supports NMN and NR as more effective than oral NAD+ for systemic NAD+ elevation, with IV/subcutaneous NAD+ as an alternative when direct delivery is the research priority. The field is moving toward more sophisticated approaches — tissue-specific delivery, enzyme targeting, and combination protocols — that may ultimately supersede the NMN vs. NR question entirely.",
    },
    {
      type: "disclaimer",
      text: "For research purposes only. Not intended for human use.",
    },
  ],
};
