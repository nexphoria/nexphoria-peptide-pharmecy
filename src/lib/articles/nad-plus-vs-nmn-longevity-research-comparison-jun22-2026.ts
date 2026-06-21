import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "nad-plus-vs-nmn-longevity-research-comparison",
  title: "NAD+ vs NMN: What Longevity Researchers Prefer",
  description:
    "A research-focused comparison of NAD+ precursors NMN and NR versus direct NAD+ supplementation. What the published science says about bioavailability, mechanism, and longevity applications.",
  category: "Longevity Research",
  readMinutes: 10,
  publishedAt: "2026-06-22",
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
      type: "paragraph",
      text: "NAD+ levels measurably decline with age across multiple organisms and tissue types. Human skeletal muscle NAD+ declines approximately 50% between ages 40 and 60 in some analyses. Reduced NAD+ correlates with decreased SIRT1 and SIRT3 activity — sirtuins that regulate mitochondrial function and stress responses. Aged mice with restored NAD+ levels show improvements in muscle function, metabolic markers, and lifespan in several studies.",
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
      text: "NMN is a direct precursor to NAD+, one biosynthetic step upstream. It is converted to NAD+ via the enzyme NMNAT (Nicotinamide Mononucleotide Adenylyltransferase). David Sinclair's lab at Harvard published extensively on NMN's effects in aged mice, including improved vascular function, muscle endurance, and energy metabolism. A 2020 human pilot study (Yoshino et al.) showed that oral NMN supplementation raised blood NAD+ metabolite levels and improved insulin sensitivity in prediabetic women.",
    },
    {
      type: "paragraph",
      text: "NMN appears to be absorbed intestinally via a dedicated transporter (Slc12a8), enabling reasonably efficient uptake compared to NAD+ itself. Key advantages include the direct precursor pathway, emerging human clinical trial data, and stable supplement formulation at room temperature.",
    },
    {
      type: "heading",
      text: "NR (Nicotinamide Riboside)",
    },
    {
      type: "paragraph",
      text: "NR is another well-studied NAD+ precursor, two steps upstream from NAD+. It must first be converted to NMN, then to NAD+. ChromaDex-sponsored human trials have shown NR raises whole-blood NAD+ levels consistently. Elysium Health's Basis (NR + pterostilbene) showed sustained NAD+ elevation in a 2017 clinical trial. NR and NMN appear to produce comparable NAD+ elevation in several comparative studies; no definitive superiority for either has been established.",
    },
    {
      type: "heading",
      text: "Direct NAD+ Supplementation",
    },
    {
      type: "paragraph",
      text: "Oral NAD+ faces a significant bioavailability problem. Research suggests most ingested NAD+ is cleaved in the gut to nicotinamide before absorption. IV NAD+ infusion bypasses this limitation and is used in clinical research contexts — studies have examined effects on neurological function, addiction recovery applications, and acute elevation of tissue NAD+ levels. Subcutaneous and intranasal NAD+ delivery are also under investigation, with some pre-clinical data suggesting improved bioavailability over oral routes.",
    },
    {
      type: "heading",
      text: "Mechanism Comparison",
    },
    {
      type: "table",
      headers: ["Compound", "Pathway to NAD+", "Human Bioavailability", "Human Clinical Data"],
      rows: [
        ["NAD+ (oral)", "Direct, but largely degraded", "Poor", "Limited"],
        ["NAD+ (IV/SC)", "Direct", "High", "Emerging"],
        ["NMN", "1 step (NMNAT)", "Moderate-Good", "Growing"],
        ["NR", "2 steps (NRK → NMNAT)", "Good", "Established"],
        ["Nicotinamide (NAM)", "Salvage pathway", "Good", "Established, feedback inhibition concern"],
      ],
    },
    {
      type: "heading",
      text: "What Researchers Are Focusing On in 2026",
    },
    {
      type: "paragraph",
      text: "The longevity research community has not converged on a single preferred compound. The current evidence landscape shows ongoing debate between NMN (more direct pathway, emerging human data, interest in combining with SIRT1 activators) and NR (more extensive human clinical trial base, published safety and tolerability data across multiple studies).",
    },
    {
      type: "paragraph",
      text: "Notable 2026 research directions include tissue-specific delivery — investigators studying whether different precursors preferentially elevate NAD+ in different tissues (liver vs. muscle vs. brain). NAMPT activators represent another frontier: compounds that upregulate the rate-limiting enzyme in NAD+ biosynthesis, potentially more efficient than precursor loading. CD38 inhibitors are also under active study — CD38 is a major NAD+-consuming enzyme, and reducing its activity may complement precursor strategies.",
    },
    {
      type: "heading",
      text: "The Peptide Connection",
    },
    {
      type: "paragraph",
      text: "MOTS-c and Humanin — mitochondria-derived peptides currently under research — interact with NAD+ metabolism and mitochondrial function. Some longevity researchers are investigating whether peptide combinations targeting mitochondrial signaling produce complementary effects with NAD+ precursor strategies. This intersection of peptide research and NAD+ biology represents one of the more active areas of current longevity science investigation.",
    },
    {
      type: "heading",
      text: "Summary",
    },
    {
      type: "paragraph",
      text: "Neither NAD+ nor NMN has definitively won the longevity research debate. The evidence supports NMN and NR as more effective than oral NAD+ for systemic NAD+ elevation, with IV/subcutaneous NAD+ as an alternative when direct delivery is the research priority. The field is moving toward more sophisticated approaches — tissue-specific delivery, enzyme targeting, and combination protocols — that may ultimately supersede the NMN vs. NR question entirely.",
    },
    {
      type: "disclaimer",
      text: "For research purposes only. Not intended for human use.",
    },
  ],
};
