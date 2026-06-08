import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "where-to-buy-survodutide-research-guide",
  title: "Where to Buy Survodutide for Research (2026 Guide)",
  description:
    "A researcher's sourcing guide for survodutide (BI 456906), the dual GLP-1/glucagon receptor agonist under clinical investigation. Covers quality standards, COA requirements, and what to look for in a verified supplier.",
  category: "Sourcing & Quality",
  readMinutes: 9,
  publishedAt: "2026-06-08",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Survodutide — also identified as BI 456906 — is a dual GLP-1/glucagon receptor agonist developed by Boehringer Ingelheim that has advanced through Phase II clinical trials for metabolic dysfunction-associated steatohepatitis (MASH) and obesity. Its co-agonist mechanism distinguishes it from single-receptor GLP-1 agents: by simultaneously activating the glucagon receptor, survodutide adds a hepatic component to its metabolic profile that has generated significant interest in the preclinical research community.",
    },
    {
      type: "callout",
      text: "Survodutide is supplied for research purposes only. It is not approved by the FDA or any comparable regulatory authority for human therapeutic use. All sourcing and use references in this guide are for preclinical laboratory research contexts.",
    },
    {
      type: "heading",
      text: "What Makes Survodutide Interesting to Researchers",
    },
    {
      type: "paragraph",
      text: "Unlike semaglutide or tirzepatide — which act on GLP-1 alone or GLP-1/GIP respectively — survodutide's glucagon co-agonism drives additional hepatic fat oxidation and thermogenesis. Phase II data in MASH patients demonstrated histologic improvements and significant visceral fat reduction alongside body weight effects. For researchers studying hepatic lipid metabolism, NASH/MASH models, or the comparative pharmacology of co-agonist versus mono-agonist approaches to metabolic disease, survodutide represents a distinct research target.",
    },
    {
      type: "list",
      items: [
        "Receptor targets: GLP-1R (agonist) + GCGR (agonist)",
        "Primary research focus: MASH, NAFLD, obesity, hepatic steatosis",
        "Mechanism differentiator: glucagon receptor activation adds hepatic oxidation to GLP-1's incretin effects",
        "Clinical status: Phase II data published; Phase III under investigation",
        "Research analogs in same class: GLP-1/GCGR (survodutide), GLP-1/GIP (tirzepatide), GLP-1/GCGR/GIP (retatrutide)",
      ],
    },
    {
      type: "heading",
      text: "Minimum Quality Standards for Research-Grade Survodutide",
    },
    {
      type: "subheading",
      text: "Purity ≥98% by HPLC",
    },
    {
      type: "paragraph",
      text: "Survodutide is a long-chain peptide with a fatty acid modification enabling extended half-life — a structural feature that increases synthetic complexity and the likelihood of impurities compared to simpler peptides. Researchers should require HPLC purity documentation at ≥98%, with the actual chromatogram (not just a stated percentage) provided as part of the certificate of analysis. The chromatogram should show a dominant single peak with minimal satellite peaks from truncated sequences or oxidation byproducts.",
    },
    {
      type: "subheading",
      text: "Sequence Verification by Mass Spectrometry",
    },
    {
      type: "paragraph",
      text: "The molecular weight of survodutide must be confirmed by mass spectrometry before any research use. Given its acylated peptide structure — which introduces a long-chain fatty acid moiety analogous to the approach used in semaglutide — mass spec confirmation of the intact molecule is essential. ESI-MS or MALDI-TOF data confirming the expected [M+H]⁺ or multiply-charged ions should appear on the COA as standard documentation.",
    },
    {
      type: "subheading",
      text: "Third-Party Laboratory Certification",
    },
    {
      type: "paragraph",
      text: "In-house testing by the peptide manufacturer creates a direct conflict of interest. Credible research-grade suppliers send samples to independent analytical laboratories for HPLC and MS analysis. The COA should name the testing laboratory explicitly. ISO/IEC 17025-accredited labs represent the highest level of third-party verification; at minimum, the laboratory should be identifiable and independently verifiable.",
    },
    {
      type: "subheading",
      text: "Endotoxin Testing",
    },
    {
      type: "paragraph",
      text: "For rodent model research involving parenteral administration, endotoxin content is a critical quality parameter. Lipopolysaccharide contamination activates TLR4-mediated inflammatory cascades at nanogram concentrations — directly confounding any metabolic, hepatic, or inflammatory endpoint relevant to survodutide research. The limulus amebocyte lysate (LAL) test should appear on supplier documentation, with results expressed in EU/mg.",
    },
    {
      type: "heading",
      text: "What to Look for in a Survodutide Supplier",
    },
    {
      type: "table",
      headers: ["Quality Factor", "Minimum Standard", "Preferred Standard"],
      rows: [
        ["HPLC purity", "≥98%", "≥99% with full chromatogram"],
        ["Identity confirmation", "Molecular weight by MS", "ESI-MS/MS with fragment confirmation"],
        ["Testing origin", "Stated third-party lab", "Named ISO/IEC 17025-accredited lab"],
        ["Endotoxin", "LAL result on COA", "<1 EU/mg with LAL methodology stated"],
        ["Fatty acid modification", "Confirmed in MS data", "Tandem MS fragment pattern confirming acylation site"],
        ["Lot traceability", "Batch number on COA", "Lot-specific COA tied to vial labeling"],
        ["Storage and shipping", "Cold-chain disclosure", "Gel-pack + insulated shipping with temp record"],
      ],
    },
    {
      type: "heading",
      text: "Red Flags When Evaluating Survodutide Sources",
    },
    {
      type: "list",
      items: [
        "No chromatogram — only a stated purity percentage with no supporting analytical trace",
        "Generic COA template not tied to a specific lot or batch number",
        "No mass spectrometry data — critical for a structurally modified peptide like survodutide",
        "Testing lab not named or not independently verifiable",
        "No endotoxin documentation despite peptides marketed for injection-route research",
        "Pricing significantly below market — acylated peptides have higher synthesis costs than simple sequences",
        "No cold-chain shipping disclosure — fatty acid–modified peptides are particularly vulnerable to heat degradation",
      ],
    },
    {
      type: "heading",
      text: "Survodutide vs Other Dual/Triple Agonists: Research Context",
    },
    {
      type: "paragraph",
      text: "Researchers designing comparative metabolic studies should understand the mechanistic distinctions between current co-agonist peptides, as they affect which endpoints are most relevant for each compound.",
    },
    {
      type: "table",
      headers: ["Compound", "Receptor Targets", "Primary Research Application"],
      rows: [
        ["Survodutide (BI 456906)", "GLP-1R + GCGR", "MASH, hepatic steatosis, obesity — hepatic component prominent"],
        ["Tirzepatide", "GLP-1R + GIPR", "T2D, obesity, insulin sensitization — pancreatic/adipose focus"],
        ["Retatrutide", "GLP-1R + GIPR + GCGR", "Obesity, metabolic syndrome — triple target; highest weight loss in trials"],
        ["Semaglutide", "GLP-1R", "T2D, obesity, cardiovascular — mono-agonist reference compound"],
        ["Cagrilintide + semaglutide", "Amylin + GLP-1R", "Obesity combination approach; distinct mechanism via amylin receptor"],
      ],
    },
    {
      type: "paragraph",
      text: "For studies examining MASH-specific endpoints — hepatic fat fraction, ALT/AST normalization, histologic fibrosis scoring, or steatohepatitis resolution — survodutide's glucagon receptor component makes it a more directly relevant experimental tool than GLP-1/GIP dual agonists, which show less hepatic selectivity in preclinical data.",
    },
    {
      type: "heading",
      text: "Storage and Handling for Survodutide",
    },
    {
      type: "paragraph",
      text: "As an acylated peptide, survodutide should be stored lyophilized at -20°C or below and reconstituted immediately before use. The fatty acid moiety that enables albumin binding and extended half-life also increases susceptibility to aggregation at elevated temperatures compared to unmodified peptides. Avoid repeated freeze-thaw cycles on reconstituted material.",
    },
    {
      type: "list",
      items: [
        "Lyophilized storage: -20°C (long-term), 4°C (short-term, up to 7 days)",
        "Reconstitution solvent: Sterile water for injection; some protocols use bacteriostatic water for multi-dose preparations",
        "Working concentration: Determine based on study design and intended dose range; typical preclinical doses in rodent models are in the nmol/kg range",
        "Avoid: Repeated freeze-thaw cycles of reconstituted solution; light exposure; temperatures above 25°C for lyophilized stock",
        "Peptide pen or syringe: Always use sterile equipment with appropriate gauge for the administration route",
      ],
    },
    {
      type: "heading",
      text: "Why Sourcing Matters for MASH Research",
    },
    {
      type: "paragraph",
      text: "MASH/NASH model research is among the most endpoint-sensitive preclinical work in metabolic biology. Histologic endpoints — hepatic fat percentage by MRI or biopsy, NAS scoring, fibrosis staging — require compound integrity to be consistent across experimental groups. A survodutide preparation with 90% purity rather than 98% effectively delivers a lower dose of active compound plus synthesis impurities, both of which confound dose-response relationships and endpoint interpretation.",
    },
    {
      type: "paragraph",
      text: "Cold-chain integrity matters specifically for acylated peptides. The fatty acid side chain increases molecular complexity but also introduces additional degradation pathways — particularly hydrolysis of the acyl ester bond — that can be accelerated by heat exposure during shipping. Survodutide sourced from a vendor without cold-chain shipping may arrive with acceptable HPLC purity on paper but structural integrity issues not fully captured by standard analytical tests.",
    },
    {
      type: "heading",
      text: "Sourcing Survodutide Through Nexphoria",
    },
    {
      type: "paragraph",
      text: "Nexphoria carries survodutide as part of its advanced metabolic peptide catalog, alongside tirzepatide, retatrutide, and cagrilintide. Each lot is released with a full third-party COA including HPLC purity ≥98%, mass spectrometry identity confirmation, and LAL endotoxin data. All orders ship with cold-chain packaging — gel packs and insulated containers — with temperature monitoring documentation included in the shipment.",
    },
    {
      type: "paragraph",
      text: "Researchers setting up comparative dual/triple agonist studies can source multiple compounds from a single lot-verified supplier, simplifying the documentation burden and ensuring consistent quality standards across experimental groups. Nexphoria's subscription program allows researchers to set up recurring shipments for extended protocol cycles without reordering manually.",
    },
    {
      type: "callout",
      text: "Nexphoria offers survodutide and related GLP-1 co-agonists with full third-party COA documentation and dedicated cold-chain shipping. Research accounts receive lot-matched documentation suitable for institutional compliance records.",
    },
    {
      type: "heading",
      text: "Key Takeaways for Researchers Sourcing Survodutide",
    },
    {
      type: "list",
      items: [
        "Require HPLC ≥98% with the actual chromatogram, not just a stated percentage",
        "Mass spectrometry confirmation is non-negotiable for acylated peptides — verify the fatty acid modification is present",
        "Third-party testing by a named, independent lab should appear on the COA",
        "Endotoxin documentation is essential for any parenteral-route research protocol",
        "Cold-chain shipping is especially important for acylated peptides vulnerable to heat-accelerated structural degradation",
        "Price alone is an unreliable quality signal — survodutide synthesis is complex; suspiciously low pricing often reflects lower purity or skipped testing",
        "Match your supplier's catalog to your broader experimental context — sourcing GLP-1 class comparators from the same vendor simplifies lot-matched study design",
      ],
    },
    {
      type: "disclaimer",
      text: "Survodutide is available for in vitro and preclinical in vivo research use only. It is not approved for human therapeutic use by the FDA or any comparable regulatory body. This guide is intended for researchers and investigators operating within appropriate institutional and regulatory frameworks.",
    },
  ],
};
