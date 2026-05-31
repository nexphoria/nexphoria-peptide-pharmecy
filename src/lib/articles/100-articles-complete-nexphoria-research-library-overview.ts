import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "100-articles-complete-nexphoria-research-library-overview",
  title: "100 Articles: The Complete Nexphoria Research Library Overview",
  description:
    "A milestone overview of the Nexphoria Research Journal — 100 articles spanning compound profiles, GH axis pharmacology, metabolic research, longevity, immunology, nootropics, handling and storage, quality assurance, and research fundamentals. Includes curated reading paths by research goal and our top 10 essential reads for new researchers.",
  category: "Research Fundamentals",
  readMinutes: 8,
  publishedAt: "2026-05-31",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "The Nexphoria Research Journal has reached a significant milestone: 100 peer-referenced, protocol-grade articles covering every major category of peptide research. What began as a handful of compound primers has grown into the most comprehensive open-access peptide research library available to the scientific community. This overview maps the entire collection — organized by research domain, indexed by utility, and curated into reading paths so you can navigate directly to the content that matters for your work."
    },
    {
      type: "heading",
      text: "The Library at a Glance"
    },
    {
      type: "paragraph",
      text: "Across 100 articles, the Nexphoria Research Journal covers 9 research categories, references over 300 published studies from journals including NEJM, Nature, Cell, Cell Metabolism, JCEM, and British Journal of Pharmacology, and includes protocol-level dosing data for 35+ research compounds. Every article includes reconstitution and storage guidance, preclinical dosing protocols, and research design considerations grounded in the published literature."
    },
    {
      type: "table",
      headers: ["Category", "Articles", "Coverage"],
      rows: [
        ["Compound Profiles", "31", "Deep-dive mechanism, PK, dosing, and study design guides for individual peptides — BPC-157, semaglutide, tirzepatide, retatrutide, TB-500, GHK-Cu, NAD+, and 24 more"],
        ["Research Fundamentals", "27", "Protocol design, stacking science, model selection (mouse vs rat), lab setup, IACUC/NIH funding, reconstitution technique, biomarker guides, and how-to articles"],
        ["GH Axis", "11", "Growth hormone secretagogues: ipamorelin, CJC-1295 (DAC/No DAC), MK-677, sermorelin, tesamorelin, hexarelin, GHRP comparisons, IGF-1 endpoints, tachyphylaxis"],
        ["Longevity", "8", "NAD+ precursors, Epitalon/telomerase, SS-31/cardiolipin, MOTS-c/AMPK, GHK-Cu/Nrf2, multi-compound longevity stacking, ceramide/sphingolipid biology"],
        ["Handling & Storage", "6", "Reconstitution step-by-step, cold-chain shipping, storage temperature reference, peptide stability, BAC water guide, purity verification"],
        ["Nootropics", "5", "Selank/Semax, DSIP, Cerebrolysin, oxytocin intranasal protocols, GLP-1 CNS mechanisms"],
        ["Metabolic", "5", "GLP-1 landscape, adiponectin/leptin endpoints, ceramide lipotoxicity, NASH/hepatic steatosis, body composition endpoints"],
        ["Immunology", "4", "Thymosin Alpha-1, LL-37 host defense, KPV NF-κB tripeptide, LL-37 wound healing protocols"],
        ["Quality & Testing", "2", "HPLC/MS/COA interpretation, purity standards and verification"]
      ]
    },
    {
      type: "heading",
      text: "Top 10 Essential Reads for New Researchers"
    },
    {
      type: "paragraph",
      text: "If you're starting peptide research or expanding into a new compound class, these 10 articles provide the foundational knowledge that everything else builds on. Read them in order — each one unlocks understanding for the articles that follow."
    },
    {
      type: "list",
      items: [
        "\"What Are Peptides? A Researcher's Primer\" — The starting point. Covers peptide bond chemistry, synthesis methods (SPPS), folding, and why peptides matter as research tools. Essential vocabulary for everything that follows.",
        "\"Peptide Reconstitution: The Complete Step-by-Step Guide\" — The single most practical article in the library. Equipment, technique, concentration math with worked examples, visual clarity checks, and storage protocols. Every researcher needs this before touching a vial.",
        "\"Understanding COAs: How to Read a Certificate of Analysis\" — Without COA literacy, you can't verify what you're working with. Covers HPLC peak interpretation, MS identity confirmation, endotoxin testing, and the 12 fields every COA must contain.",
        "\"Peptide Purity Standards: What HPLC, MS, and COA Data Really Mean\" — The deeper companion to the COA article. RP-HPLC methodology, ESI-MS charge states, purity tiers (≥95% vs ≥99%), common SPPS impurities, and LAL endotoxin thresholds for in vivo use.",
        "\"Cold-Chain Shipping: Why It Matters for Peptide Integrity\" — Temperature excursions degrade peptides before your experiment begins. Covers cold-chain logistics, gel pack vs dry ice, monitoring methods, and what to check on arrival.",
        "\"BPC-157: The Researcher's Complete Guide\" — The most-referenced compound in the library. NO/eNOS, VEGFR2/VEGF, and FAK signaling pathways, published rodent data across 6+ tissue models, acetate vs arginate forms, and full protocol design.",
        "\"GLP-1 Receptor Agonists: The Complete Research Landscape\" — Maps the entire GLP-1 field: semaglutide, tirzepatide, retatrutide, liraglutide. Clinical trial data, receptor pharmacology, DIO C57BL/6J protocols, and cross-compound comparison tables.",
        "\"Peptide Synergy Stacking: The Science of Combining Research Compounds\" — The framework for multi-compound protocol design. Three synergy archetypes (receptor-orthogonal, temporal-phase, pathway-amplification), three cautionary stacks, and factorial design requirements.",
        "\"IGF-1 in Peptide Research: Why It's the Key Biomarker\" — The biomarker that connects GH axis, metabolic, and longevity research. GHR/JAK2/STAT5b signaling, sampling timing, ELISA platform selection, and published elevation data for every major secretagogue.",
        "\"Peptide Research Lab Setup: Equipment, Safety, and Best Practices\" — The operational foundation: 15-item equipment list, Class II BSC sterile technique, sharps disposal SOP, IACUC compliance timeline, blinding and randomization protocols."
      ]
    },
    {
      type: "heading",
      text: "Top 5 Tool Deep Dives"
    },
    {
      type: "paragraph",
      text: "Five articles go beyond compound knowledge into practical research methodology — the kind of content that saves weeks of troubleshooting and improves study quality from the start."
    },
    {
      type: "list",
      items: [
        "\"BPC-157 and TB-500 Dosing Calculator: How to Use Together\" — Step-by-step protocol walkthrough using the reconstitution calculator, injection site rotation, 12-week cycle design, and biomarker tracking templates for recovery research.",
        "\"Mouse vs Rat in Peptide Research: Model Selection Guide\" — The decision matrix researchers need before buying animals. Cost, blood volume, PK, GH pulsatility, strain selection, and allometric scaling tables.",
        "\"Peptide Half-Life Optimization: Strategies to Extend Activity\" — D-amino acids, terminal capping, cyclization, fatty acid conjugation, PEGylation, DAC technology — how pharmaceutical chemistry extends peptide half-lives from minutes to days.",
        "\"Peptide Research Sex Differences: Female Dosing Protocols\" — The often-overlooked variable. Estrogen modulation of receptor expression, estrous cycle standardization, OVX protocols, and why NIH now requires sex as a biological variable.",
        "\"Peptide Research Funding: NIH Grants, IACUC, and Regulatory Frameworks\" — The practical guide to getting funded and staying compliant. R01/R21/R03 mechanisms, IACUC protocol writing, and regulatory considerations for peptide research."
      ]
    },
    {
      type: "heading",
      text: "Reading Paths by Research Goal"
    },
    {
      type: "paragraph",
      text: "Rather than reading all 100 articles sequentially, use these curated paths based on your research focus. Each path moves from foundational understanding to advanced protocol design."
    },
    {
      type: "subheading",
      text: "Recovery & Tissue Repair Research"
    },
    {
      type: "paragraph",
      text: "Start with the BPC-157 complete guide, then read the TB-500 mechanism deep dive (G-actin sequestration and ILK/Akt signaling). Follow with the GHK-Cu copper peptide review for the Nrf2/collagen axis. Then read the BPC-157 + TB-500 recovery stack article for combination protocol design. Finish with the GHK-Cu wound healing protocols article for specific model methodologies. Use the Reconstitution Calculator, Dosing Frequency Planner, and Protocol Template Generator tools alongside these articles."
    },
    {
      type: "subheading",
      text: "GH Axis & Secretagogue Research"
    },
    {
      type: "paragraph",
      text: "Begin with the ipamorelin dosing reference (GHSR-1a selectivity and Johansen 1999 data), then read the CJC-1295 DAC vs No DAC comparison (pulsatile vs continuous GH). Read the MK-677 oral secretagogue guide (24-hour half-life, Nass 2008 data). Move to the sermorelin GHRH analog article and tesamorelin visceral fat review. The hexarelin cardiac effects article covers the CD36 dual-receptor discovery. Finish with the MK-677 vs ipamorelin vs CJC-1295 comparison for your final compound selection decision. The IGF-1 biomarker article and IGF-1 Calculator tool are essential companions."
    },
    {
      type: "subheading",
      text: "Metabolic & GLP-1 Research"
    },
    {
      type: "paragraph",
      text: "Start with the GLP-1 receptor agonists landscape article for the full field overview. Read the semaglutide dosing reference (Aib8 structure, STEP 1 data, DIO protocols) and tirzepatide research dosing guide (dual GLP-1/GIP mechanism, SURMOUNT-1 data). Then the retatrutide triple agonist deep dive (GCGR/CPT1 hepatic mechanism). The cardiovascular research article covers SELECT and LEADER trial implications. For advanced work: the GLP-1 and the brain article (CNS mechanisms beyond weight loss), the liver health/NASH article, and the ceramide/sphingolipid article. Tools: Body Weight Dose Calculator, Dose-Response Planner."
    },
    {
      type: "subheading",
      text: "Longevity & Anti-Aging Research"
    },
    {
      type: "paragraph",
      text: "Begin with the NAD+ cellular energy article (sirtuins, PARP, mitochondrial biogenesis). Read the NAD+ precursors article (NMN vs NR vs direct injection comparison). Then the Epitalon telomere/pineal peptide review (Khavinson telomerase data). Follow with SS-31 mitochondria-targeted peptide (cardiolipin mechanism) and MOTS-c mitochondrial peptide (AMPK/exercise mimetic). The longevity stacking article synthesizes all four compounds into an orthogonal protocol design. The glutathione/oxidative stress article provides the endpoint framework. The Peptide Stability Checker and Stack Builder tools support longevity protocol planning."
    },
    {
      type: "subheading",
      text: "Cognitive & Nootropic Research"
    },
    {
      type: "paragraph",
      text: "Start with the Selank and Semax overview (tuftsin analog anxiolytic vs ACTH fragment nootropic). Read the DSIP sleep research review (delta wave promotion, HPA axis modulation). The Cerebrolysin neurotrophic article covers BDNF/NGF mimetic mechanisms. The oxytocin research protocols article provides critical intranasal delivery methodology. For advanced integration: the GLP-1 and the brain article connects metabolic peptides to hippocampal neurogenesis and neuroprotection."
    },
    {
      type: "heading",
      text: "The Nexphoria Research Ecosystem"
    },
    {
      type: "paragraph",
      text: "The 100-article library is designed to work alongside the full suite of Nexphoria research tools. The Reconstitution Calculator, Half-Life Calculator, Dosing Frequency Planner, Body Weight Dose Calculator, IGF-1 Response Calculator, Dose-Response Planner, Peptide Interaction Checker, Stack Builder, Protocol Template Generator, and Cost-Per-Dose Calculator each connect directly to concepts covered in the articles. The Compound Index provides a Wikipedia-style reference for all 32+ compounds, and the Peptide Glossary defines 50+ research terms used throughout the library."
    },
    {
      type: "paragraph",
      text: "Every article links to relevant product pages, related articles within the same category, and applicable tools. The blog category pages (Compound Profiles, GH Axis, Longevity, Metabolic, etc.) provide filtered browsing by research domain. Share links on individual articles enable easy reference sharing with colleagues."
    },
    {
      type: "heading",
      text: "What's Next"
    },
    {
      type: "paragraph",
      text: "The Nexphoria Research Journal will continue expanding with new compound profiles as research advances, updated dosing data as new clinical trials report, and deeper methodology guides for specialized research applications. Upcoming coverage areas include advanced PK/PD modeling for peptide researchers, combination immunotherapy protocol design, and expanded organ-specific research guides. Subscribe to research updates via the footer email form to receive notifications when new articles are published."
    },
    {
      type: "paragraph",
      text: "Thank you to the research community for making this library necessary. Every article exists because researchers asked the question first."
    },
    {
      type: "disclaimer",
      text: "All compounds discussed in the Nexphoria Research Journal are sold strictly for research use only (RUO). They are not intended for human consumption, therapeutic use, or clinical application. Researchers are responsible for compliance with all applicable institutional, local, and federal regulations. Always consult your IACUC or equivalent review board before beginning animal studies."
    }
  ]
};
