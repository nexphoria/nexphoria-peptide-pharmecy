import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "where-to-buy-mazdutide-research-guide",
  title: "Where to Buy Mazdutide: A Researcher's Sourcing Guide (2026)",
  description:
    "What researchers need to know before purchasing mazdutide (IBI362) for preclinical study — purity standards, COA requirements, stability considerations, and how to identify research-grade sources for this dual GLP-1R/GCGR agonist.",
  category: "Quality & Testing",
  readMinutes: 10,
  publishedAt: "2026-06-12",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Mazdutide (IBI362) is a once-weekly injectable dual GLP-1 receptor/glucagon receptor (GLP-1R/GCGR) co-agonist developed by Innovent Biologics that has completed Phase III trials in China for type 2 diabetes and obesity. Published results from the GLORY-1 and DREAMS-1 trials have generated substantial academic interest in its comparative pharmacology, particularly its triglyceride-lowering effects and the role of GCGR co-agonism in driving thermogenesis and lipid oxidation beyond what GLP-1R agonism alone achieves.",
    },
    {
      type: "paragraph",
      text: "As researchers seek mazdutide for preclinical metabolic studies, mechanistic GLP-1R/GCGR binding work, and comparative pharmacology against semaglutide and tirzepatide, the sourcing landscape requires careful navigation. This guide covers the quality benchmarks, COA requirements, and stability considerations that apply to mazdutide as a peptide-based research compound.",
    },
    {
      type: "heading",
      text: "What Type of Compound Is Mazdutide?",
    },
    {
      type: "paragraph",
      text: "Mazdutide is a GLP-1-based peptide analog — a long-chain peptide with a fatty acid modification for extended half-life (similar in concept to the C18 fatty diacid modification on semaglutide). This places it in the same sourcing and quality-verification category as other long-chain GLP-1 analogs: it requires solid-phase peptide synthesis (SPPS), lipidation chemistry, and purification by preparative HPLC. The presence of the fatty acid modification introduces an additional quality variable versus non-lipidated peptides — the conjugation site, conjugation efficiency, and purity of the lipidation reaction all need to be captured in a complete COA.",
    },
    {
      type: "paragraph",
      text: "Mazdutide's molecular weight is approximately 4,400–4,600 Da depending on the specific fatty acid chain length and linker chemistry used in synthesis (the exact structure has not been fully disclosed in public literature as of mid-2026, as IBI362 remains a proprietary compound). This has practical implications: researchers should request MW confirmation by mass spectrometry and compare against published pharmacological literature to verify structural fidelity of the specific lot purchased.",
    },
    {
      type: "heading",
      text: "COA Requirements for Research-Grade Mazdutide",
    },
    {
      type: "paragraph",
      text: "Given mazdutide's lipidated peptide structure and its intended use in metabolic research protocols, a complete COA should include:",
    },
    {
      type: "list",
      items: [
        "HPLC purity ≥98% by UV area: Full chromatogram with method details (column, mobile phase, gradient, wavelength) and peak table showing purity percentage and any impurity peaks",
        "Mass spectrometry: ESI-MS or MALDI-MS confirmation of observed molecular weight versus expected MW for mazdutide — critical for confirming the lipidated conjugate is present and intact",
        "Peptide sequence verification: LC-MS/MS fragmentation data confirming the GLP-1 analog backbone sequence where possible",
        "Water content by Karl Fischer: Required for accurate reconstitution calculation from lyophilized powder",
        "Residual solvents: Acetonitrile and other HPLC purification solvents by GC headspace",
        "Endotoxin (LAL test): Required for any in vivo metabolic study; target <1.0 EU/mg for research-grade material",
        "Sterility: Required for in vivo use; sterile filtration through 0.22 µm and documented microbial testing",
        "Lot number and test date correlating to shipped vials",
        "Third-party independent laboratory accreditation (ISO 17025 or equivalent)",
      ],
    },
    {
      type: "callout",
      text: "Due to mazdutide's proprietary status, no reference standard from a pharmacopeial body (USP, EP) is currently available for independent identity confirmation. This means MS data and cross-referencing against published pharmacological activity profiles (GLP-1R binding IC50, in vitro insulinotropic activity) are the most practical identity verification tools available to independent researchers.",
    },
    {
      type: "heading",
      text: "Research Applications That Require Mazdutide",
    },
    {
      type: "subheading",
      text: "Comparative GLP-1R/GCGR Pharmacology",
    },
    {
      type: "paragraph",
      text: "The primary research application driving interest in mazdutide is its distinct receptor profile compared to existing market compounds. Semaglutide is a pure GLP-1R agonist; tirzepatide adds GIPR co-agonism; mazdutide adds GCGR co-agonism instead. For researchers studying the relative contributions of GIP versus glucagon receptor pathways to weight loss, lipid oxidation, and hepatic glucose regulation, mazdutide provides a pharmacologically distinct reference compound. In vitro receptor binding assays (radioligand competition, cAMP HTRF, or BRET-based GLP-1R activation assays) require well-characterized, high-purity compound for reliable Kd and EC50 determinations.",
    },
    {
      type: "subheading",
      text: "Rodent Metabolic Models",
    },
    {
      type: "paragraph",
      text: "Preclinical diet-induced obesity (DIO) mouse models and db/db or ZDF rat models are the most common in vivo systems for mazdutide metabolic research. Published preclinical data from Innovent's development program shows mazdutide produces body weight reductions of 25–35% and triglyceride reductions of 40–60% in DIO mice — substantially larger than GLP-1-only comparators at matched GLP-1R occupancy. Researchers studying thermogenesis mechanisms (brown adipose tissue activation, UCP1 expression, oxygen consumption rate) would use mazdutide to probe GCGR-specific contributions to thermogenic endpoints.",
    },
    {
      type: "subheading",
      text: "Hepatic Steatosis and NASH Models",
    },
    {
      type: "paragraph",
      text: "The GCGR agonism component of mazdutide drives hepatic fatty acid oxidation via cAMP-mediated PPAR-alpha activation and ACC inhibition — a mechanism of interest for NASH and metabolic dysfunction-associated steatotic liver disease (MASLD) research. Mazdutide has shown histological improvement in liver steatosis grades in DIO mouse NASH models, making it a useful tool compound for researchers studying hepatic lipid metabolism endpoints that distinguish GCGR-mediated from GLP-1R-mediated effects.",
    },
    {
      type: "heading",
      text: "Reconstitution and Formulation",
    },
    {
      type: "paragraph",
      text: "Mazdutide as a lipidated GLP-1 analog shares reconstitution characteristics with other fatty acid-modified peptides like semaglutide. Key guidance for researchers:",
    },
    {
      type: "list",
      items: [
        "Use bacteriostatic water (BAC water) or PBS (pH 7.4) for reconstitution — avoid plain sterile water for multi-use vials as it lacks antimicrobial preservation",
        "Lipidated peptides may reconstitute more slowly than unmodified peptides — gently swirl rather than vigorous vortex to avoid foam formation",
        "Target concentration of 0.5–2 mg/mL for stock; dilute to working concentration in vehicle appropriate for the species and route (PBS for subcutaneous injection in rodents)",
        "Inspect for complete dissolution before use — visible particulates indicate incomplete reconstitution or aggregation",
        "Store reconstituted solution at 4°C for up to 7 days or aliquot and freeze at -80°C for extended storage; avoid repeated freeze-thaw cycles",
        "For weekly dosing protocols in rodents, individual use-aliquots of exactly one dose volume will eliminate freeze-thaw variability",
      ],
    },
    {
      type: "heading",
      text: "Stability Considerations",
    },
    {
      type: "paragraph",
      text: "As a lyophilized peptide, mazdutide in powder form is stable at -20°C for extended periods (supplier-verified shelf life typically 12–24 months from manufacture date). The fatty acid modification slightly reduces peptide solubility compared to unmodified GLP-1 analogs but does not inherently compromise chemical stability — the fatty acid side chain is linked via a stable amide or ester bond that is not particularly susceptible to hydrolysis under refrigerated storage conditions.",
    },
    {
      type: "paragraph",
      text: "Researchers should verify that purchased mazdutide is shipped with dry ice or cold packs appropriate for its verified stability range. Thermal excursion during shipping — particularly if the compound is exposed to temperatures above 25°C for extended periods — should be evaluated via lot-specific stability data from the supplier.",
    },
    {
      type: "heading",
      text: "Evaluating Research Suppliers for Mazdutide",
    },
    {
      type: "paragraph",
      text: "Because mazdutide is a proprietary developmental compound without an approved regulatory pathway as a generic or research chemical outside China, the supply landscape for research-grade material is narrower than for established compounds like semaglutide or BPC-157. Researchers should apply the following evaluation framework:",
    },
    {
      type: "list",
      items: [
        "COA completeness: Does the supplier provide full HPLC, MS, endotoxin, and sterility data — not just a purity number? Partial COAs are a red flag for any lipidated peptide.",
        "Third-party verification: Is the testing performed by an independent ISO 17025-accredited laboratory or in-house by the manufacturer? Independent testing significantly increases confidence.",
        "Structural plausibility: Does the supplier's reported MS data align with expected mazdutide MW ranges? If a supplier reports a very different MW or cannot provide MS confirmation, structural fidelity cannot be assumed.",
        "Synthesis methodology: SPPS with native chemical ligation or fragment condensation, followed by site-specific fatty acid conjugation, is the expected synthesis route. Suppliers who cannot describe their synthesis approach at a basic level may be reselling unverified material.",
        "Published pharmacological validation: Has the supplier ever had their mazdutide material verified via receptor binding assay or in vivo activity comparison? This is a high bar but represents best practice for a proprietary analog.",
        "Order process and documentation: Reputable research chemical suppliers require researcher validation (institutional affiliation, research purpose) and provide complete documentation with each shipment.",
      ],
    },
    {
      type: "heading",
      text: "Regulatory Status Note",
    },
    {
      type: "paragraph",
      text: "Mazdutide (IBI362) is a proprietary investigational compound developed by Innovent Biologics. It is not currently approved by the FDA, EMA, or equivalent regulatory bodies outside China. In China, it has received NDA acceptance for type 2 diabetes. For researchers outside China, mazdutide is available only as a research chemical for in vitro and animal studies. Its regulatory status as a research chemical differs from approved drugs that have been compounded or resold — researchers should consult institutional compliance offices regarding applicable import and research use regulations in their jurisdiction.",
    },
    {
      type: "heading",
      text: "Quality Checklist: Mazdutide for Preclinical Research",
    },
    {
      type: "table",
      headers: ["Quality Parameter", "Minimum Acceptable Standard", "Preferred Standard"],
      rows: [
        ["HPLC purity", "≥95% by area", "≥98% by area"],
        ["MS identity confirmation", "Nominal mass match ± 1 Da", "HR-MS exact mass or LC-MS/MS fragmentation"],
        ["Endotoxin", "<5.0 EU/mg", "<1.0 EU/mg"],
        ["Sterility", "Visual clarity", "0.22 µm filtration + microbial test"],
        ["Karl Fischer (water content)", "Not provided", "<5% w/w"],
        ["Testing laboratory", "In-house supplier", "Independent ISO 17025-accredited"],
        ["COA format", "Summary values only", "Full chromatograms and spectra provided"],
        ["Lot traceability", "Lot number on vial", "Lot COA matching shipped vial lot number"],
      ],
    },
    {
      type: "disclaimer",
      text: "Mazdutide (IBI362) is an investigational research compound not approved for human use by the FDA, EMA, or equivalent agencies outside China. This article is for scientific and educational reference only. Research use should comply with applicable institutional, local, and national regulations.",
    },
  ],
};
