import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "where-to-buy-maritide-research-guide",
  title: "Where to Buy Maritide (AMG 133) for Research (2026 Guide)",
  description:
    "A researcher's sourcing guide for maritide (AMG 133), Amgen's GLP-1 receptor agonist / GIP receptor antagonist. Covers quality standards, COA requirements, structural verification for this bispecific antibody-peptide conjugate, and what to look for in a verified supplier.",
  category: "Sourcing & Quality",
  readMinutes: 9,
  publishedAt: "2026-06-20",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Maritide — also known as AMG 133 — is Amgen's investigational bispecific peptide-antibody conjugate designed to simultaneously activate the GLP-1 receptor while antagonizing the GIP receptor. This dual mechanism represents the inverse of tirzepatide's approach: where tirzepatide co-activates both GLP-1R and GIPR, maritide activates GLP-1R while blocking GIP-mediated adipose signaling. Phase 2 MOMENTUM trial data reported up to 14–17% body weight reduction at 5 months with monthly subcutaneous dosing — positioning maritide as one of the most pharmacologically distinct compounds in the current obesity research pipeline.",
    },
    {
      type: "callout",
      text: "Maritide is supplied for research purposes only. It is not approved by the FDA or any comparable regulatory authority for human therapeutic use. All sourcing and use references in this guide are for preclinical laboratory research contexts only.",
    },
    {
      type: "heading",
      text: "What Makes Maritide Unique as a Research Tool",
    },
    {
      type: "paragraph",
      text: "Maritide's scientific distinctiveness stems from its GIPR antagonism — a mechanism that directly challenges the prevailing hypothesis that GIP co-agonism is the driver of tirzepatide's superior efficacy versus GLP-1 monotherapy. If GIPR blockade produces equivalent or superior weight loss outcomes to GIPR activation, it suggests GIP receptor occupancy (in either direction) modulates a shared downstream metabolic pathway, rather than GIPR activation per se being responsible for tirzepatide's incremental benefit.",
    },
    {
      type: "list",
      items: [
        "Receptor targets: GLP-1R (agonist) + GIPR (antagonist)",
        "Architecture: Bispecific peptide-antibody conjugate (not a simple synthetic peptide)",
        "Dosing schedule: Once monthly subcutaneous injection",
        "Half-life: ~3–4 weeks (extended via antibody conjugate architecture)",
        "Phase 2 peak efficacy: ~14–17% body weight reduction at week 20 (higher dose cohorts)",
        "Key research question: Does GIPR antagonism replicate, exceed, or fall short of GIPR co-agonism for metabolic weight endpoints?",
      ],
    },
    {
      type: "heading",
      text: "Structural Complexity: Why Sourcing Maritide Is Different",
    },
    {
      type: "paragraph",
      text: "Unlike small synthetic peptides such as BPC-157 or ipamorelin, maritide is a bispecific macromolecule. Its antibody-conjugate architecture introduces manufacturing complexity that is significantly higher than standard SPPS (solid-phase peptide synthesis) peptides. This has two direct implications for researchers evaluating suppliers:",
    },
    {
      type: "list",
      items: [
        "Synthesis difficulty: Production requires antibody engineering beyond standard peptide synthesis — any supplier must demonstrate appropriate manufacturing capability",
        "Analytical verification demands: Molecular weight confirmation by mass spectrometry is essential but more complex for a macromolecule of this size",
        "Truncation/aggregation risk: The antibody scaffold creates additional opportunities for misfolded or aggregated product that simple HPLC chromatograms may not fully capture",
        "Price point: Legitimate research-grade maritide will be priced significantly above simple synthetic peptides — unusually low pricing is a red flag",
      ],
    },
    {
      type: "heading",
      text: "Minimum Quality Standards for Research-Grade Maritide",
    },
    {
      type: "subheading",
      text: "HPLC Purity ≥98%",
    },
    {
      type: "paragraph",
      text: "HPLC purity documentation remains the baseline requirement. The chromatogram — not just a stated percentage — must accompany the certificate of analysis. For maritide's complex macromolecular structure, SEC-HPLC (size exclusion chromatography) is particularly relevant: it differentiates intact monomer from aggregated or fragmented species that reversed-phase HPLC may not resolve. Researchers should look for both RP-HPLC and SEC-HPLC data when evaluating a maritide COA.",
    },
    {
      type: "subheading",
      text: "Mass Spectrometry Identity Confirmation",
    },
    {
      type: "paragraph",
      text: "Given maritide's macromolecular architecture, native mass spectrometry or intact mass analysis is required to confirm molecular identity. The expected mass of the intact bispecific conjugate must match the COA. Suppliers who provide only HPLC data without MS identity confirmation for a compound of this structural complexity should be treated with significant skepticism.",
    },
    {
      type: "subheading",
      text: "Third-Party Laboratory Certification",
    },
    {
      type: "paragraph",
      text: "In-house testing by the manufacturer creates an unacceptable conflict of interest for a structurally complex research compound. The COA should identify the testing laboratory by name. ISO/IEC 17025-accredited laboratories represent the highest verification standard. The lot number on the COA must correspond to the vial received.",
    },
    {
      type: "subheading",
      text: "Endotoxin Testing",
    },
    {
      type: "paragraph",
      text: "For any in vivo rodent model research, LAL (limulus amebocyte lysate) endotoxin testing results must appear on the COA. Endotoxin contamination drives TLR4-mediated inflammatory responses that directly confound metabolic, adipokine, and GIP-pathway endpoints — exactly the endpoints most relevant to maritide's mechanism. Results should be expressed in EU/mg with the testing methodology stated.",
    },
    {
      type: "heading",
      text: "Supplier Evaluation Checklist for Maritide",
    },
    {
      type: "table",
      headers: ["Quality Factor", "Minimum Standard", "Preferred Standard"],
      rows: [
        ["HPLC purity", "≥98% RP-HPLC with chromatogram", "≥98% RP-HPLC + SEC-HPLC for aggregation profiling"],
        ["Identity confirmation", "Molecular weight by intact MS", "Native MS or intact mass analysis matching expected MW"],
        ["Testing origin", "Named third-party laboratory", "ISO/IEC 17025-accredited independent lab"],
        ["Endotoxin", "LAL result on COA", "<1 EU/mg with methodology stated"],
        ["Bioactivity documentation", "Not always available", "GLP-1R binding or cAMP assay data preferred"],
        ["Lot traceability", "Batch number on COA", "Lot-specific COA tied to vial labeling"],
        ["Storage and shipping", "Cold-chain disclosure", "Dry ice or validated cold-pack with shipping record"],
      ],
    },
    {
      type: "heading",
      text: "Red Flags When Evaluating Maritide Sources",
    },
    {
      type: "list",
      items: [
        "No mass spectrometry data — for a macromolecular conjugate, MS identity is non-negotiable",
        "RP-HPLC only with no SEC-HPLC for aggregation assessment — understates product heterogeneity risk",
        "Generic COA not tied to a specific batch or lot — template documents do not verify the actual product shipped",
        "Testing lab not named or not independently verifiable",
        "No endotoxin documentation for a compound intended for parenteral model use",
        "Pricing comparable to small synthetic peptides — maritide's complexity commands significantly higher synthesis cost",
        "Claims of approved pharmaceutical-grade sourcing without documentation — Amgen's AMG 133 is investigational; legitimate research peptide suppliers do not hold pharmaceutical-grade stock",
        "No cold-chain shipping disclosure — antibody-conjugate stability is highly temperature-sensitive",
      ],
    },
    {
      type: "heading",
      text: "Maritide in the GLP-1 Pipeline: Research Context",
    },
    {
      type: "paragraph",
      text: "Researchers selecting between maritide, semaglutide, tirzepatide, and newer agonists for mechanistic studies should understand what each compound can and cannot tell you experimentally.",
    },
    {
      type: "table",
      headers: ["Compound", "GIP Pathway Direction", "Dosing", "Primary Research Application"],
      rows: [
        ["Maritide (AMG 133)", "GIPR antagonist + GLP-1R agonist", "Monthly SC", "GIP receptor antagonism, GIPR vs co-agonist mechanistic comparison"],
        ["Tirzepatide", "GIPR co-agonist + GLP-1R agonist", "Weekly SC", "Dual incretin agonism, body composition, metabolic syndrome"],
        ["Semaglutide", "GLP-1R agonist only", "Weekly SC / oral", "GLP-1R monotherapy baseline, cardiovascular endpoints"],
        ["Retatrutide", "GIP + GLP-1 + GCGR triple agonist", "Weekly SC", "Triple agonism, MASH, severe obesity models"],
        ["Survodutide", "GLP-1R + GCGR co-agonist", "Weekly SC", "MASH, hepatic steatosis, hepatic fat endpoints"],
      ],
    },
    {
      type: "paragraph",
      text: "Maritide's unique value as a research tool is precisely its GIPR antagonism — making it the appropriate compound to isolate whether GIP receptor occupancy direction (agonism vs. antagonism) matters for downstream metabolic outcomes. It is not a substitute for tirzepatide in studies where GIPR activation is the intended intervention.",
    },
    {
      type: "heading",
      text: "Storage and Handling Requirements",
    },
    {
      type: "paragraph",
      text: "Maritide's antibody-conjugate architecture makes it more thermolabile than simple synthetic peptides. Research-grade maritide should be stored at −20°C long-term and −80°C for extended periods. Freeze-thaw cycling degrades the antibody scaffold and promotes aggregation. Researchers should prepare single-use aliquots after reconstitution and avoid repeated freeze-thaw of working solutions. Reconstitution with sterile bacteriostatic water or PBS is appropriate for most applications; acetic acid reconstitution used for some peptides is not appropriate for macromolecular conjugates.",
    },
    {
      type: "heading",
      text: "Why Nexphoria for Research-Grade GLP-1 Pathway Compounds",
    },
    {
      type: "paragraph",
      text: "Nexphoria supplies research-grade peptides with HPLC and mass spectrometry verification, batch-specific COA documentation, and LAL endotoxin testing as standard — not as optional add-ons. For structurally complex compounds in the GLP-1 pipeline, documentation rigor is the single most important factor differentiating research-grade supply from commodity sources. Every Nexphoria product includes accessible, batch-specific analytical data before purchase.",
    },
    {
      type: "disclaimer",
      text: "For research purposes only. Not for human use. Maritide (AMG 133) is an investigational compound under clinical evaluation by Amgen. It is not approved by the FDA or any regulatory authority for therapeutic use in humans. All sourcing discussed in this guide is intended for licensed preclinical research applications only.",
    },
  ],
};
