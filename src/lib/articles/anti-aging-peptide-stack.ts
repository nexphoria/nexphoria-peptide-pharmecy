import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "anti-aging-peptide-stack",
  title: "Anti-Aging Peptide Stack: Research on Longevity Combinations",
  description:
    "A researcher's guide to combining longevity peptides — Epitalon, GHK-Cu, SS-31, NAD+, and MOTS-c. What the science says about stacking for cellular health and aging endpoints.",
  category: "Research Protocols",
  readMinutes: 12,
  publishedAt: "2026-06-11",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Aging research has entered a new phase. Where earlier decades focused on single compounds targeting isolated markers, contemporary pre-clinical work increasingly examines combinations — peptides working across complementary pathways to address the hallmarks of aging simultaneously. This guide reviews the evidence behind the most commonly studied anti-aging peptide combinations and the rationale for combining them.",
    },
    {
      type: "paragraph",
      text: "All compounds discussed here are research chemicals. They are not approved medical treatments, and this article is written exclusively for researchers and academics studying aging biology in appropriate pre-clinical settings.",
    },
    {
      type: "heading",
      text: "The Hallmarks of Aging Framework",
    },
    {
      type: "paragraph",
      text: "The 2013 Lopez-Otin hallmarks of aging paper (updated in 2023 to include dysbiosis, chronic inflammation, and disabled macroautophagy) provides the most useful lens for understanding why multi-compound approaches are studied. No single peptide addresses all hallmarks. Strategic combinations can target:",
    },
    {
      type: "list",
      items: [
        "Genomic instability — DNA repair mechanisms, telomere maintenance",
        "Mitochondrial dysfunction — electron transport chain efficiency, reactive oxygen species management",
        "Cellular senescence — clearance of senescent cell populations, SASP modulation",
        "Altered intercellular communication — growth factor signaling, inflammatory cytokine balance",
        "Stem cell exhaustion — tissue regeneration capacity",
        "Epigenetic alterations — methylation patterns, histone modification",
      ],
    },
    {
      type: "heading",
      text: "Core Stack Components",
    },
    {
      type: "subheading",
      text: "Epitalon (Epithalon) — Telomere and Pineal Axis",
    },
    {
      type: "paragraph",
      text: "Epitalon (Ala-Glu-Asp-Gly) is a synthetic tetrapeptide derived from Epithalamin, a polypeptide extract of the pineal gland. It is among the most studied peptides in aging research, with a body of pre-clinical work spanning 40+ years — much of it from Russian longevity researcher Vladimir Khavinson and colleagues.",
    },
    {
      type: "paragraph",
      text: "Key findings in the literature include telomerase activation in somatic cells (Lanko et al., 2003), extension of cell lifespan in vitro, normalization of circadian hormone rhythms (melatonin, cortisol), and reduced tumor incidence in aged animal models. Epitalon appears to work in part by upregulating telomerase reverse transcriptase (TERT) expression, slowing telomere shortening in dividing cells.",
    },
    {
      type: "subheading",
      text: "GHK-Cu (Copper Peptide) — Tissue Repair and Gene Expression",
    },
    {
      type: "paragraph",
      text: "GHK-Cu (Glycine-Histidine-Lysine copper complex) has one of the broader documented effect profiles in aging research. Originally identified in human plasma and shown to decline with age (from ~200 ng/mL at age 20 to ~80 ng/mL by age 60), it activates wound healing, promotes collagen and glycosaminoglycan synthesis, and exerts significant antioxidant effects.",
    },
    {
      type: "paragraph",
      text: "The most striking findings relate to gene expression: microarray studies (Pickart & Margolina, 2018) show GHK-Cu modulates over 4,000 genes — including genes associated with inflammation, oxidative stress, metabolic function, and DNA repair. It also activates the ubiquitin/proteasome pathway relevant to clearing damaged proteins — a mechanism directly relevant to cellular senescence.",
    },
    {
      type: "subheading",
      text: "SS-31 (Elamipretide) — Mitochondrial Membrane Targeting",
    },
    {
      type: "paragraph",
      text: "SS-31 is a synthetic tetrapeptide (D-Arg-2',6'-Dmt-Lys-Phe-NH2) that selectively concentrates in the inner mitochondrial membrane via electrostatic attraction to cardiolipin. Its primary mechanism is preservation of cardiolipin structure — critical for cristae formation, cytochrome c retention, and electron transport chain efficiency.",
    },
    {
      type: "paragraph",
      text: "In aged animal models, SS-31 has demonstrated: restoration of mitochondrial ultrastructure in cardiac and skeletal muscle, improved ATP production capacity, reduction in ROS generation, and functional improvements in age-related decline models. It addresses mitochondrial dysfunction — one of the most upstream hallmarks of aging — directly at the membrane level.",
    },
    {
      type: "subheading",
      text: "NAD+ Precursors / Direct NAD+ — Sirtuin Activation",
    },
    {
      type: "paragraph",
      text: "NAD+ (nicotinamide adenine dinucleotide) declines approximately 50% between age 40 and 60 in humans. As a cofactor for sirtuins (SIRT1-7), PARP1, and CD38, NAD+ availability directly impacts DNA repair efficiency, mitochondrial biogenesis, and inflammatory signaling. The Sinclair lab's work on NAD+/sirtuin axis aging is among the most cited in modern longevity science.",
    },
    {
      type: "paragraph",
      text: "Research compounds include NMN (nicotinamide mononucleotide), NR (nicotinamide riboside), and direct NAD+ for injection. Each has different bioavailability profiles and routes of entry into the salvage pathway. IV/IP NAD+ produces rapid restoration of tissue levels; oral NMN/NR offers convenience but variable conversion efficiency depending on model.",
    },
    {
      type: "subheading",
      text: "MOTS-c — Mitochondrial-Derived Peptide",
    },
    {
      type: "paragraph",
      text: "MOTS-c is a 16-amino acid peptide encoded in the mitochondrial 12S rRNA. It is one of several mitochondrial-derived peptides (MDPs) discovered in the last decade that act as hormones — translocating from mitochondria to the nucleus or circulating systemically in response to metabolic stress.",
    },
    {
      type: "paragraph",
      text: "Research shows MOTS-c activates AMPK, improves insulin sensitivity, counteracts age-related glucose dysregulation, and extends lifespan in multiple model organisms. Plasma MOTS-c levels decline with age in both mice and humans. Its inclusion in longevity stacks addresses the metabolic/AMPK axis that other peptides in this combination do not directly target.",
    },
    {
      type: "heading",
      text: "Rationale for Combination Research",
    },
    {
      type: "paragraph",
      text: "The rationale for studying these compounds in combination is mechanistic complementarity. Each targets a distinct node:",
    },
    {
      type: "table",
      headers: ["Compound", "Primary Target", "Hallmark(s) Addressed"],
      rows: [
        ["Epitalon", "Telomerase / pineal axis", "Telomere attrition, genomic instability"],
        ["GHK-Cu", "Gene expression / proteostasis", "Genomic instability, cellular senescence, altered communication"],
        ["SS-31", "Inner mitochondrial membrane / cardiolipin", "Mitochondrial dysfunction"],
        ["NAD+/NMN", "Sirtuin cofactor / PARP1", "Genomic instability, mitochondrial dysfunction, epigenetic alterations"],
        ["MOTS-c", "AMPK activation / metabolic regulation", "Deregulated nutrient sensing, mitochondrial dysfunction"],
      ],
    },
    {
      type: "paragraph",
      text: "There is minimal pathway overlap between these five compounds, which supports the hypothesis that their combination may produce additive or synergistic outcomes in aging endpoints — though direct combination studies with all five simultaneously remain limited in published literature.",
    },
    {
      type: "heading",
      text: "Protocol Considerations in Pre-Clinical Models",
    },
    {
      type: "paragraph",
      text: "Researchers designing longevity stack studies typically face several protocol design choices:",
    },
    {
      type: "subheading",
      text: "Sequential vs. Simultaneous Administration",
    },
    {
      type: "paragraph",
      text: "Some compounds (particularly Epitalon) have been studied with cyclic administration protocols in the Russian literature — 10-day courses, twice per year. This appears to be based on the observation that telomerase activation does not require continuous stimulation. SS-31 and NAD+ research, by contrast, often uses continuous daily dosing. A mixed protocol — continuous NAD+ and SS-31 with cyclic Epitalon — is a reasonable design choice for longer-duration studies.",
    },
    {
      type: "subheading",
      text: "Biomarker Selection",
    },
    {
      type: "list",
      items: [
        "Telomere length (qPCR-based T/S ratio or Flow-FISH)",
        "NAD+/NADH ratio in target tissues",
        "Mitochondrial membrane potential (JC-1 or TMRE staining)",
        "IL-6, TNF-α, and other SASP markers for senescence burden",
        "8-OHdG for oxidative DNA damage",
        "p16INK4a and p21 expression for senescent cell populations",
        "Body composition changes and functional capacity metrics",
      ],
    },
    {
      type: "subheading",
      text: "Solubility and Compatibility",
    },
    {
      type: "paragraph",
      text: "GHK-Cu is a copper chelate and must be stored and handled separately from other compounds to prevent interference. SS-31 is water-soluble and stable at physiological pH. Epitalon is typically reconstituted in sterile water or bacteriostatic water. No documented pharmacological antagonism exists between these compounds in the literature, but researchers should confirm individual compound stability in their specific vehicle before combination preparation.",
    },
    {
      type: "heading",
      text: "Where the Research Stands",
    },
    {
      type: "paragraph",
      text: "The strongest individual compound evidence in this stack belongs to Epitalon (decades of Khavinson lab data), GHK-Cu (extensive wound healing and gene expression research), and SS-31 (strong pre-clinical mitochondrial data plus Phase II clinical trials in humans for heart failure — not aging per se). NAD+ research is accelerating rapidly with human trials now underway. MOTS-c is the newest and least characterized in longevity contexts specifically.",
    },
    {
      type: "paragraph",
      text: "The combination research is limited — most published work studies these compounds individually. Researchers interested in the stack rationale should also review the ITP (Interventions Testing Program) findings on combination interventions and the Buck Institute's multi-compound aging research for methodological frameworks.",
    },
    {
      type: "callout",
      text: "Nexphoria supplies research-grade Epitalon, GHK-Cu, SS-31, NAD+, and MOTS-c with ≥98% HPLC-confirmed purity and third-party CoA documentation. All compounds are for research use only.",
    },
    {
      type: "divider",
    },
    {
      type: "disclaimer",
      text: "This article is intended for qualified researchers and academics. These compounds are not approved drugs and are not intended for human therapeutic use. Always comply with applicable laws and institutional review requirements for research use.",
    },
  ],
};
