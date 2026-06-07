import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "where-to-buy-irisin-research-guide",
  title: "Where to Buy Irisin for Research: Sourcing and Quality Guide (2026)",
  description:
    "What researchers need to know when sourcing irisin — the exercise-induced myokine studied for metabolic, cognitive, and bone health effects. Covers purity standards, synthesis documentation, cold-chain requirements, and vendor evaluation criteria.",
  category: "Quality & Testing",
  readMinutes: 9,
  publishedAt: "2026-06-07",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Irisin is a 112-amino acid myokine cleaved from the fibronectin type III domain-containing protein 5 (FNDC5) in response to exercise — primarily resistance training and endurance activity. First described by Boström et al. in Nature (2012), irisin has since accumulated a substantial preclinical and translational research literature covering metabolic regulation, adipose tissue browning, bone mineral density, cognitive function, and neuroprotection.",
    },
    {
      type: "paragraph",
      text: "Its broad apparent activity profile — spanning muscle-fat crosstalk, the brain-muscle axis, and osteoporosis-relevant bone remodeling — has driven growing interest from independent researchers and academic labs. The research peptide supply market has expanded accordingly, though quality and documentation standards vary significantly across suppliers. This guide covers what researchers need to verify before procurement.",
    },
    {
      type: "disclaimer",
      text: "Irisin is available from verified research suppliers for in vitro and preclinical laboratory research use only. It is not approved for human therapeutic or veterinary administration. Research use must comply with applicable institutional and jurisdictional requirements.",
    },
    {
      type: "heading",
      text: "Irisin's Structural Characteristics and Why They Matter for Sourcing",
    },
    {
      type: "paragraph",
      text: "Irisin (specifically the FNDC5 ectodomain fragment, amino acids 30–143 of human FNDC5) has a molecular weight of approximately 12,585 Da. Its structure includes an unusual fibronectin type III fold that mediates receptor interactions relevant to its reported biological activity. This structural complexity introduces considerations that simpler short-chain peptides do not share:",
    },
    {
      type: "list",
      items: [
        "At 112 amino acids, irisin is at the boundary of what solid-phase peptide synthesis can produce with reliable purity — many longer-chain peptides are produced via recombinant expression instead",
        "Recombinant vs. synthetic origin affects the presence of post-translational modifications and the glycosylation state",
        "The fibronectin III fold requires correct disulfide bonding for full structural integrity",
        "Bioactivity assays (e.g., PGC-1α induction, UCP1 upregulation in adipocytes) are the ultimate functional verification — structural data alone may not confirm active material",
      ],
    },
    {
      type: "paragraph",
      text: "Researchers should confirm with any supplier whether their irisin is synthetically produced or recombinant-expressed, as the two have different purity profiles, glycosylation states, and cost structures. Most research-grade irisin is recombinant.",
    },
    {
      type: "heading",
      text: "Documentation Standards for Research-Grade Irisin",
    },
    {
      type: "subheading",
      text: "SDS-PAGE and Purity Assessment",
    },
    {
      type: "paragraph",
      text: "For recombinant proteins including irisin, SDS-PAGE (sodium dodecyl sulfate-polyacrylamide gel electrophoresis) is a standard purity verification method alongside HPLC. A single band at the expected molecular weight (approximately 12–13 kDa) under reducing conditions confirms a reasonably pure preparation. Suppliers should provide gel images with molecular weight ladder references.",
    },
    {
      type: "subheading",
      text: "Mass Spectrometry or Western Blot Identity Confirmation",
    },
    {
      type: "paragraph",
      text: "Identity verification for irisin typically involves western blot using anti-irisin antibody or mass spectrometric peptide mapping after tryptic digestion. MS peptide mapping provides higher specificity — it confirms not just the molecular weight but the actual amino acid sequence of tryptic fragments, verifying that the correct protein sequence was expressed.",
    },
    {
      type: "subheading",
      text: "Endotoxin Testing",
    },
    {
      type: "paragraph",
      text: "LAL endotoxin testing is particularly important for irisin produced in E. coli expression systems, which are the most common recombinant production platform for research-grade proteins. E. coli-derived recombinant proteins carry significant endotoxin contamination risk if not adequately purified. Endotoxin levels above the accepted threshold (<1 EU/μg for most in vivo applications) can independently alter metabolic, inflammatory, and neurological endpoints — directly confounding irisin research outcomes.",
    },
    {
      type: "subheading",
      text: "Bioactivity Data",
    },
    {
      type: "paragraph",
      text: "The most rigorous suppliers provide bioactivity verification data — typically a cell-based assay demonstrating that their irisin preparation induces expected downstream signaling (e.g., AMPK phosphorylation, UCP1 expression, or osteoblast differentiation markers at biologically relevant concentrations). This is the functional gold standard and distinguishes verified active material from a protein that meets structural but not functional criteria.",
    },
    {
      type: "heading",
      text: "Cold-Chain and Storage Requirements",
    },
    {
      type: "paragraph",
      text: "Recombinant proteins including irisin are significantly more sensitive to temperature excursions than most small peptides. Standard storage conditions are −20°C to −80°C for long-term stability. Shipping should be refrigerated (2–8°C with ice packs) for short transit, or on dry ice for any shipment where ambient temperatures could compromise integrity.",
    },
    {
      type: "paragraph",
      text: "Key cold-chain questions for any irisin supplier:",
    },
    {
      type: "list",
      items: [
        "Is dry ice or pharmaceutical ice pack shipping standard for recombinant protein orders?",
        "What is the validated maximum transit time for their packaging?",
        "Is temperature documentation available for shipments?",
        "What carrier partnerships does the supplier use for temperature-controlled freight?",
      ],
    },
    {
      type: "heading",
      text: "Red Flags in the Irisin Supply Market",
    },
    {
      type: "paragraph",
      text: "Irisin's high media profile and broad research interest have attracted suppliers with varying quality standards. Active red flags include:",
    },
    {
      type: "list",
      items: [
        "No SDS-PAGE image or HPLC chromatogram provided — only a purity percentage",
        "In-house testing without third-party laboratory identification",
        "No endotoxin data for E. coli-expressed recombinant material",
        "No specification of whether the product is synthetic peptide or recombinant protein",
        "No bioactivity data or reference to activity-verified lots",
        "Pricing significantly below market (recombinant protein production at high purity is costly)",
        "Generic COA not tied to a specific lot number",
        "Supplier does not specify the expression system or host organism",
      ],
    },
    {
      type: "heading",
      text: "Common Irisin Research Applications",
    },
    {
      type: "paragraph",
      text: "Irisin research spans several active areas, each with its own endpoint considerations:",
    },
    {
      type: "list",
      items: [
        "Adipose tissue browning: UCP1 expression in white adipocyte cultures; thermogenic gene program upregulation",
        "Bone metabolism: osteoblast differentiation assays, bone mineral density in ovariectomized rodent models",
        "Cognitive and neuroprotective effects: hippocampal BDNF expression, synaptic plasticity markers, APP processing in Alzheimer's models",
        "Metabolic syndrome: glucose tolerance testing, insulin sensitivity endpoints in high-fat diet rodent models",
        "Exercise-mimetic applications: muscle atrophy prevention in disuse models",
      ],
    },
    {
      type: "paragraph",
      text: "Each application has specific purity and endotoxin thresholds that should be verified against the study design before procurement. Cell culture endpoints are generally less demanding than in vivo systemic endpoints.",
    },
    {
      type: "heading",
      text: "How to Evaluate an Irisin COA",
    },
    {
      type: "paragraph",
      text: "For recombinant irisin, the complete COA review checklist should include:",
    },
    {
      type: "list",
      items: [
        "Lot number matching physical vial label",
        "Expression system clearly identified (E. coli, HEK293, or other)",
        "Purity assessment: SDS-PAGE image with molecular weight marker, showing single band at ~12–13 kDa",
        "Identity confirmation: western blot or MS peptide mapping data",
        "Endotoxin result in EU/μg with defined threshold",
        "Bioactivity data (preferred): cell-based assay with EC50 or response at defined concentration",
        "Third-party testing laboratory identified by name",
        "Date of analysis — batch-specific",
      ],
    },
    {
      type: "callout",
      text: "Nexphoria irisin is verified by independent third-party analysis including purity assessment and endotoxin testing. Lot-specific COAs are available on the product page before purchase and included with every shipment.",
    },
    {
      type: "heading",
      text: "Irisin in the Context of the Broader Myokine Research Field",
    },
    {
      type: "paragraph",
      text: "Irisin exists within a broader and expanding myokine research landscape. Other exercise-induced peptides including MOTS-c, meteorin-like protein (Metrnl), and follistatin share overlapping metabolic and neuroprotective research profiles. Irisin stands out for the volume of published literature and the diversity of tissue endpoints studied, making it one of the most accessible entry points for researchers entering the myokine space.",
    },
    {
      type: "paragraph",
      text: "The translational picture remains evolving — particularly around the question of circulating irisin levels in humans during exercise and their physiological significance. This ongoing research activity sustains demand for verified research-grade material for mechanistic in vitro and animal model work.",
    },
    {
      type: "heading",
      text: "Summary",
    },
    {
      type: "paragraph",
      text: "Sourcing irisin for research requires attention to the specific characteristics of recombinant protein procurement: expression system, purity documentation via SDS-PAGE, identity confirmation via western blot or MS, endotoxin testing adequate to the research application, and cold-chain shipping appropriate for protein stability. Nexphoria's irisin meets these standards, with lot-specific COA documentation available on the product page for review before purchase.",
    },
  ],
};
