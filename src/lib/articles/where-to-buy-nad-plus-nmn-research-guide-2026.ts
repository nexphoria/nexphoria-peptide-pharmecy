import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "where-to-buy-nad-plus-nmn-research-guide-2026",
  title: "Where to Buy NAD+ and NMN for Research in 2026: Sourcing Guide",
  description:
    "A researcher's guide to sourcing NAD+, NMN (nicotinamide mononucleotide), and NR (nicotinamide riboside) for preclinical and in vitro research. Covers purity standards, vendor evaluation, stability requirements, and what documentation to require.",
  category: "Quality & Sourcing",
  readMinutes: 9,
  publishedAt: "2026-06-09",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "NAD+ (nicotinamide adenine dinucleotide) and its direct precursors — NMN (nicotinamide mononucleotide) and NR (nicotinamide riboside) — represent some of the most actively researched compounds in longevity biology. With NAD+ levels declining up to 50% between youth and mid-life, and with SIRT1/SIRT3, PARP1/2, and CD38 all depending on adequate NAD+ as a substrate, research interest in NAD+-targeting compounds has accelerated dramatically since 2015. This guide covers everything researchers need to know about sourcing these compounds at appropriate quality for preclinical work.",
    },
    {
      type: "callout",
      text: "All compounds discussed are research chemicals intended for in vitro and animal model research. This is not guidance on human supplementation or medical use.",
    },
    {
      type: "heading",
      text: "Understanding the NAD+ Precursor Landscape",
    },
    {
      type: "paragraph",
      text: "Three primary research compounds address NAD+ biology from a supplementation perspective. Direct NAD+ (as disodium salt) provides immediate substrate but has limited cellular uptake due to its charged nature. NMN (C11H15N2O8P) is one metabolic step from NAD+ and enters cells via the Slc12a8 transporter; it has the most extensive recent clinical literature. NR (C11H15N2O5+) enters cells via equilibrative nucleoside transporters and is converted to NMN and then NAD+ intracellularly; it has well-established safety data from Chromadex's TRUHEART studies. Each compound has slightly different pharmacokinetics and tissue distribution profiles — factors that influence research protocol design.",
    },
    {
      type: "heading",
      text: "Quality Standards for NAD+ Research Compounds",
    },
    {
      type: "subheading",
      text: "HPLC Purity Requirements",
    },
    {
      type: "paragraph",
      text: "For research-grade NAD+/NMN/NR, HPLC purity ≥98% is the minimum standard; ≥99% is preferred for mechanism-of-action studies where impurity-driven effects could confound results. NMN is particularly susceptible to degradation to nicotinamide (NAM) and ribose — a process accelerated by moisture, heat, and acidic pH. Purity testing should be performed on material maintained under appropriate storage conditions, and the COA should specify both the purity figure and the lot-specific chromatogram.",
    },
    {
      type: "subheading",
      text: "Stability and Endotoxin",
    },
    {
      type: "paragraph",
      text: "NAD+ compounds are hygroscopic — they absorb atmospheric moisture, which accelerates degradation. Research-grade material should be lyophilized (freeze-dried) or provided in a desiccated form with controlled moisture content. Endotoxin testing (LAL, ≤1 EU/mg) is essential for in vivo work: NAD+ and NMN administered systemically at doses studied in longevity research can trigger inflammatory responses if contaminated with LPS, directly confounding the anti-inflammatory endpoints often used in these studies.",
    },
    {
      type: "subheading",
      text: "Identity Confirmation",
    },
    {
      type: "paragraph",
      text: "Mass spectrometry (MS) identity confirmation is required for any publication-grade NAD+ research. NMN has a molecular weight of 334.22 g/mol (free acid) or 356.20 g/mol (sodium salt); NAD+ as disodium salt has MW 677.43 g/mol; NR chloride is 255.25 g/mol. Vendors should provide mass spec data confirming correct molecular weight alongside the HPLC chromatogram — the combination rules out both purity impurities and structural mis-synthesis.",
    },
    {
      type: "heading",
      text: "Vendor Evaluation Framework",
    },
    {
      type: "subheading",
      text: "Tier 1: Research-Grade Peptide Vendors",
    },
    {
      type: "paragraph",
      text: "Research-grade peptide vendors who provide HPLC COAs, mass spec confirmation, and LAL endotoxin data for all compounds offer the most appropriate quality infrastructure for NAD+ research. These vendors operate under quality systems designed for in vivo animal research and IACUC protocol compliance. Nexphoria provides NAD+, NMN, and NR with full COA documentation including lot-specific HPLC chromatograms, mass spec data, and LAL endotoxin results.",
    },
    {
      type: "subheading",
      text: "Tier 2: Specialty Chemistry Vendors",
    },
    {
      type: "paragraph",
      text: "Specialty chemistry vendors such as Sigma-Aldrich (MilliporeSigma), Cayman Chemical, and Tocris offer NAD+ compounds with research-grade documentation. These vendors are appropriate for academic researchers requiring PO order systems and institutional billing. The primary disadvantage is cost: specialty chemistry pricing for NAD+/NMN is substantially higher per gram than dedicated peptide research vendors, with 100mg NAD+ often running $50-150 at specialty vendors vs $15-40 at research peptide suppliers.",
    },
    {
      type: "subheading",
      text: "Red Flags to Avoid",
    },
    {
      type: "list",
      items: [
        "Supplement vendors marketing 'research-grade NMN' — consumer supplement quality standards differ significantly from research quality",
        "Chinese bulk suppliers without third-party verified COAs — in-house testing at origin is not independent verification",
        "Any vendor unable to provide lot-specific (not generic) HPLC chromatograms",
        "NMN sold as tablets or capsules — these are processed forms incompatible with most research protocols",
        "Vendors without LAL endotoxin data for compounds intended for in vivo research",
        "COAs older than 12 months for NAD+ compounds — these degrade and re-testing is required",
      ],
    },
    {
      type: "heading",
      text: "Storage and Handling Requirements",
    },
    {
      type: "paragraph",
      text: "Proper storage dramatically affects NAD+ research compound stability. All three compounds — NAD+, NMN, and NR — should be stored lyophilized at -20°C in a desiccated environment, protected from light and moisture. Reconstituted solutions are stable for 1-2 weeks at 4°C and up to 6 months at -80°C when aliquotted to avoid repeated freeze-thaw cycles.",
    },
    {
      type: "list",
      items: [
        "Long-term storage (unopened): -20°C, desiccated, light-protected",
        "Working solution storage: 4°C, use within 1-2 weeks",
        "Freeze-thaw cycles: limit to ≤3; aliquot into single-use volumes",
        "Reconstitution: use sterile water or PBS; avoid DMSO for NAD+ compounds",
        "NMN pH sensitivity: reconstitute in neutral pH solution (pH 6.5-7.4); avoid acidic buffers",
        "Shipping: NAD+ compounds should ship with cold packs; room temperature shipping for extended periods risks significant degradation",
      ],
    },
    {
      type: "heading",
      text: "Research Protocol Considerations",
    },
    {
      type: "subheading",
      text: "Dosing in Animal Models",
    },
    {
      type: "paragraph",
      text: "Preclinical NAD+ research uses widely varying doses depending on route of administration and study endpoint. Intraperitoneal NMN in rodent models has been studied from 100 mg/kg to 500 mg/kg. Oral gavage studies use similar dose ranges. For IV administration, much lower doses are typically used (10-50 mg/kg) due to the faster systemic distribution. Researchers should select doses based on the specific published literature for their study design — this is not a standardized protocol space.",
    },
    {
      type: "subheading",
      text: "Route Selection",
    },
    {
      type: "paragraph",
      text: "NMN is orally bioavailable and quickly absorbed in animal models — making oral gavage the most common research route. NAD+ itself has poor oral bioavailability due to its charged form; IV or IP administration is required for studies targeting systemic NAD+ elevation. NR shows intermediate oral bioavailability with slower conversion kinetics to NAD+ compared to NMN. Route selection significantly affects pharmacokinetics and should be matched to the specific research question.",
    },
    {
      type: "heading",
      text: "Cost and Order Quantities",
    },
    {
      type: "paragraph",
      text: "For typical rodent longevity studies, per-animal NMN consumption at 500 mg/kg/day for a 25g mouse over 4 weeks is approximately 350 mg of NMN per animal. A 10-animal group requires 3.5g/group, and a 3-group study (vehicle + 2 NMN doses) requires 7g of NMN. Purchasing in 5-10g quantities from research peptide vendors typically provides 30-50% cost savings over per-gram pricing at specialty chemistry vendors while maintaining equivalent purity documentation.",
    },
    {
      type: "heading",
      text: "Documentation for IACUC and Publication",
    },
    {
      type: "list",
      items: [
        "IACUC protocol submission: vendor name, catalog/lot number, stated purity, COA date",
        "Methods section: compound name, CAS number, purity, vendor, lot number, preparation/storage",
        "Endotoxin data: required for any in vivo administration; document EU/mg in Methods",
        "Stability verification: for extended studies, consider re-testing purity at study midpoint",
        "Chain of custody: keep all COA documentation; journals increasingly require this on submission",
      ],
    },
    {
      type: "heading",
      text: "Where to Order",
    },
    {
      type: "paragraph",
      text: "Nexphoria offers NAD+ (disodium salt), NMN (β-Nicotinamide Mononucleotide), and NR (Nicotinamide Riboside) in research-grade form with lot-specific HPLC, mass spectrometry, and LAL endotoxin COAs. All compounds are lyophilized, cold-chain shipped, and available in quantities appropriate for preclinical study scale (100mg to 5g). COAs are publicly accessible at nexphoria.com/coa by lot number.",
    },
    {
      type: "paragraph",
      text: "For researchers transitioning from Peptide Sciences (which closed in March 2026), Nexphoria provides equivalent or superior documentation with comparable pricing and US-domestic manufacturing. The compound catalog, purity standards, and cold-chain shipping infrastructure were specifically built to serve the research community that relied on Peptide Sciences.",
    },
    {
      type: "divider",
    },
    {
      type: "disclaimer",
      text: "This article covers sourcing considerations for research-grade NAD+/NMN/NR compounds for in vitro and animal model research. These compounds are research chemicals. This content is not guidance on human supplementation, medical use, or anti-aging interventions. Always follow IACUC protocols and applicable regulations for research compound use.",
    },
  ],
};
