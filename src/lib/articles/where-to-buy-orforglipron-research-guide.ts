import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "where-to-buy-orforglipron-research-guide",
  title: "Where to Buy Orforglipron: A Researcher's Sourcing Guide (2026)",
  description:
    "What researchers need to know before purchasing orforglipron (LY3502970) for preclinical study — small-molecule GLP-1R agonist purity standards, COA requirements, stability considerations, and how to identify research-grade sources.",
  category: "Quality & Testing",
  readMinutes: 10,
  publishedAt: "2026-06-12",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Orforglipron (LY3502970) is Eli Lilly's oral non-peptide small-molecule GLP-1 receptor agonist that completed Phase 3 development in 2025–2026, demonstrating approximately 9.4% placebo-subtracted weight loss and a positive cardiovascular outcomes trial. As a true small molecule without the absorption constraints of peptide-based oral GLP-1 agents like Rybelsus, orforglipron occupies a unique pharmacological niche — and has attracted substantial research interest for in vitro GLP-1 receptor pharmacology studies, biased agonism investigations, and comparative metabolic research.",
    },
    {
      type: "paragraph",
      text: "Sourcing orforglipron for legitimate preclinical research requires understanding how small-molecule sourcing standards differ from peptide sourcing — and where quality verification requirements overlap. This guide covers what researchers should verify before purchasing.",
    },
    {
      type: "heading",
      text: "Small Molecule vs. Peptide: Different Sourcing Landscape",
    },
    {
      type: "paragraph",
      text: "Orforglipron is a small molecule (molecular weight ~530 Da), not a peptide. This has practical implications for researchers evaluating research-grade sources. Unlike peptides synthesized by solid-phase peptide synthesis (SPPS), small molecules are typically produced by multi-step organic synthesis with defined structural characterization. The impurity profile differs: peptide impurities are primarily truncated sequences and modified residues, while small-molecule impurities are synthesis byproducts, regioisomers, and reagent residuals from organic chemistry steps.",
    },
    {
      type: "paragraph",
      text: "High-performance liquid chromatography (HPLC) remains the standard purity test for small molecules as for peptides, but the structural confirmation tools are different: for orforglipron, NMR (nuclear magnetic resonance spectroscopy) is often the most definitive identity confirmation method, alongside mass spectrometry and, for a research-grade COA, comparison against the published literature molecular weight and spectral data.",
    },
    {
      type: "heading",
      text: "COA Requirements for Research-Grade Orforglipron",
    },
    {
      type: "paragraph",
      text: "A research-grade COA for orforglipron should include the following, at minimum:",
    },
    {
      type: "list",
      items: [
        "Lot-specific HPLC chromatogram: ≥98% purity by area, with full peak table, method details, and UV wavelength",
        "Mass spectrometry confirmation: exact mass or HR-MS confirming MW within instrument accuracy of theoretical (~530 Da for orforglipron free base)",
        "NMR data: ¹H NMR spectrum confirming structural identity — particularly important for small molecules where regioisomers can co-elute by HPLC",
        "Water content (Karl Fischer) or loss on drying: required for accurate dose preparation from solid material",
        "Solvent residuals: relevant for small molecules synthesized via organic chemistry; key solvents (DMF, DMSO, DCM, MeOH) should be screened by GC headspace analysis",
        "Endotoxin result (LAL test): required for any in vivo work regardless of molecule type",
        "Independent third-party laboratory with verifiable accreditation",
        "Test date and lot number matching the shipped product",
      ],
    },
    {
      type: "paragraph",
      text: "A COA lacking NMR data for orforglipron is an incomplete document for a small molecule with potential regioisomers. HPLC purity at 98% is necessary but not sufficient — two structurally distinct molecules can have identical HPLC retention times and UV absorption profiles. Mass spectrometry and NMR together provide the structural confirmation that a peptide MS fragmentation pattern provides for sequence verification.",
    },
    {
      type: "heading",
      text: "Solubility and Formulation Considerations",
    },
    {
      type: "paragraph",
      text: "Orforglipron is a lipophilic small molecule with moderate aqueous solubility. For in vitro receptor assays, DMSO stock solutions (typically 10–100 mM) are standard, with aqueous dilution to working concentrations. Researchers should verify that DMSO vehicle controls are included in experimental designs and that final DMSO concentrations do not exceed 0.1% in cell culture systems to avoid GLP-1R-independent effects on cAMP signaling or cell viability.",
    },
    {
      type: "paragraph",
      text: "For in vivo rodent metabolic studies, oral gavage formulations in PEG-400/water or hydroxypropyl methylcellulose (HPMC) suspension are commonly used, consistent with the compound's small-molecule, food-independent absorption profile. Unlike peptide-based research compounds that require subcutaneous or intraperitoneal injection, orforglipron's oral bioavailability makes it particularly useful for chronic metabolic intervention protocols where daily injection is operationally burdensome.",
    },
    {
      type: "heading",
      text: "Stability and Storage",
    },
    {
      type: "paragraph",
      text: "As a small molecule, orforglipron is generally more stable than peptide compounds under standard laboratory storage conditions. Solid material stored as supplied (typically as a crystalline or amorphous powder) at room temperature or -20°C under inert atmosphere has a multi-year shelf life when kept dry and away from light. DMSO stock solutions stored at -80°C under argon or nitrogen are stable for at least 12 months.",
    },
    {
      type: "paragraph",
      text: "Researchers should verify storage recommendations with their specific supplier's COA. While small-molecule stability is generally robust, photodegradation and hydrolysis of specific functional groups are real failure modes for any chemical compound — a reputable supplier will provide documented stability data for the specific lot.",
    },
    {
      type: "heading",
      text: "Red Flags When Sourcing Orforglipron for Research",
    },
    {
      type: "list",
      items: [
        "COA with no NMR data — small molecules require spectral confirmation that regioisomers are absent; HPLC and MS alone are insufficient",
        "HPLC purity result without the full chromatogram showing all peak areas and retention times",
        "No exact or high-resolution mass spectrometry confirming molecular formula",
        "No solvent residual testing (GC headspace) — organic synthesis residuals are relevant for in vivo studies",
        "Pricing significantly below established research chemical suppliers with no quality explanation",
        "No endotoxin (LAL) result for a compound intended for in vivo use",
        "Generic or lot-non-specific COA",
        "Supplier unable to provide lot-specific COA with NMR spectrum before purchase",
        "Claims of 'pharmaceutical grade' without documentation equivalent to pharmaceutical reference standards",
        "No information on polymorphic form — small molecules can exist as different crystal polymorphs with different solubility and bioavailability profiles",
      ],
    },
    {
      type: "heading",
      text: "Purity Standards for GLP-1R Small Molecule Research",
    },
    {
      type: "paragraph",
      text: "For GLP-1R receptor pharmacology research — binding assays, cAMP signaling, β-arrestin recruitment, biased agonism studies — the purity standard for orforglipron should be ≥98% HPLC purity with NMR and MS confirmation. At lower purities, the uncharacterized 2–5% impurity fraction may contain partial agonists, antagonists, or structurally similar molecules with different receptor selectivity profiles that confound binding and signaling data.",
    },
    {
      type: "paragraph",
      text: "Researchers comparing orforglipron to peptide-based GLP-1R agonists in the same assay system should document both purity levels in their methods. Differences in purity between compared compounds introduce an additional variable in any head-to-head pharmacological study.",
    },
    {
      type: "heading",
      text: "Verifying Your Source Before Ordering",
    },
    {
      type: "paragraph",
      text: "Before placing an order for research-grade orforglipron, ask the supplier: 'Can you provide the lot-specific COA for the orforglipron batch I would receive, including the full HPLC chromatogram, high-resolution mass spectrometry, ¹H NMR spectrum, GC headspace solvent residual data, and LAL endotoxin result — from your independent third-party laboratory?'",
    },
    {
      type: "paragraph",
      text: "A research-grade supplier will provide complete documentation promptly. A supplier who provides only a purity percentage or a generic compound description is not operating to research chemical standards.",
    },
    {
      type: "callout",
      text: "Nexphoria specializes in research-grade peptides with lot-specific COA documentation including full HPLC chromatograms, mass spectrometry confirmation, Karl Fischer water content, and LAL endotoxin data from independent US-based third-party laboratories. Request your COA before ordering.",
    },
    {
      type: "disclaimer",
      text: "Orforglipron and all compounds on the Nexphoria platform are sold exclusively for licensed laboratory research use. Not for human consumption. Not for use in animals outside of approved research protocols. Compliance with all applicable regulations is the sole responsibility of the purchasing researcher.",
    },
  ],
};
