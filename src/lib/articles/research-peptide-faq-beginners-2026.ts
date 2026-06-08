import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "research-peptide-faq-beginners-2026",
  title: "Research Peptide FAQ 2026: 30 Questions Beginners Always Ask",
  description:
    "The most complete FAQ for researchers new to peptides — covering what research peptides are, how to source them, how to store and reconstitute them, what purity standards mean, and what to expect when starting your first study.",
  category: "Beginner Guides",
  readMinutes: 14,
  publishedAt: "2026-06-08",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "If you're new to research peptides, the information landscape can be overwhelming — technical jargon, conflicting vendor claims, incomplete documentation, and a regulatory environment that varies by jurisdiction. This FAQ addresses the 30 questions researchers most frequently ask when getting started, organized from foundational concepts through practical protocol considerations.",
    },
    {
      type: "heading",
      text: "Part 1: Basics — What Are Research Peptides?",
    },
    {
      type: "subheading",
      text: "1. What is a research peptide?",
    },
    {
      type: "paragraph",
      text: "A research peptide is a short chain of amino acids — typically 2 to 100 residues — synthesized for use in laboratory and preclinical research settings. They are used to study biological signaling pathways, receptor pharmacology, metabolic processes, and tissue repair mechanisms in in vitro (cell culture) and in vivo (animal model) contexts.",
    },
    {
      type: "subheading",
      text: "2. How are research peptides different from pharmaceutical drugs?",
    },
    {
      type: "paragraph",
      text: "Pharmaceutical peptide drugs have undergone full clinical trials demonstrating safety and efficacy in humans and are FDA-approved for specific medical indications. Research peptides are sold for laboratory and preclinical use only — they have not completed the clinical approval process. Some research peptides are analogs of existing drugs; others are experimental compounds at earlier stages of scientific inquiry.",
    },
    {
      type: "subheading",
      text: "3. Are research peptides legal?",
    },
    {
      type: "paragraph",
      text: "In the United States, most peptides are legal to purchase for legitimate research purposes. They are not scheduled controlled substances (with limited exceptions). However, vendors should not make medical claims, and products should not be marketed for human consumption. The regulatory landscape varies internationally — researchers outside the US should verify local regulations.",
    },
    {
      type: "subheading",
      text: "4. What are the most commonly researched peptides?",
    },
    {
      type: "list",
      items: [
        "BPC-157: tissue repair, gastrointestinal protection, angiogenesis research",
        "TB-500 (Thymosin Beta-4): muscle and connective tissue repair, actin-cytoskeleton biology",
        "GHK-Cu: collagen synthesis, wound healing, skin aging, neuroprotection",
        "Semaglutide / Tirzepatide: GLP-1 receptor agonism, metabolic research, weight loss mechanisms",
        "Ipamorelin / CJC-1295: growth hormone axis stimulation, body composition research",
        "NAD+ / Epithalon: longevity, mitochondrial biology, telomere research",
        "Selank / Semax: nootropic peptides, neuroprotection, anxiety/stress axis",
        "PT-141: melanocortin receptor agonism, sexual behavior research",
        "Thymosin Alpha-1: immune modulation, T-cell biology",
        "KPV: anti-inflammatory tripeptide, gut and skin research",
      ],
    },
    {
      type: "subheading",
      text: "5. What is the difference between a peptide and a protein?",
    },
    {
      type: "paragraph",
      text: "The distinction is primarily size. Peptides are generally defined as chains of fewer than 50–100 amino acids; proteins are longer polypeptide chains that typically fold into defined 3D structures. Many research peptides are fragments of larger proteins or synthetic analogs of endogenous peptide hormones.",
    },
    {
      type: "heading",
      text: "Part 2: Sourcing — How to Buy Research Peptides",
    },
    {
      type: "subheading",
      text: "6. Where should I buy research peptides?",
    },
    {
      type: "paragraph",
      text: "Purchase from vendors who publish lot-specific Certificates of Analysis (COAs) showing HPLC purity data. Reputable vendors test every batch — not just selected lots — and provide chromatogram data, molecular weight confirmation via mass spectrometry, and (for injection-grade work) LAL endotoxin testing. Nexphoria publishes full COAs for all catalog products.",
    },
    {
      type: "subheading",
      text: "7. What is HPLC purity and why does it matter?",
    },
    {
      type: "paragraph",
      text: "HPLC (High-Performance Liquid Chromatography) separates peptide components by their interaction with a stationary phase. The result is a chromatogram showing the target peptide peak as a percentage of total detected material — this is the purity percentage. A 98%+ purity result means at least 98% of the material is the target compound; the remainder are synthesis impurities, truncated sequences, or reagent traces. Lower purity directly affects dose accuracy and data reliability.",
    },
    {
      type: "subheading",
      text: "8. What should a COA contain?",
    },
    {
      type: "list",
      items: [
        "Peptide name, sequence, and molecular formula",
        "Lot/batch number matching the vial you received",
        "HPLC purity percentage with chromatogram image",
        "Molecular weight confirmed by mass spectrometry",
        "Appearance (typically white to off-white lyophilized powder)",
        "Endotoxin level (LAL test) — especially important for injection-route research",
        "Manufactured date and expiry",
      ],
    },
    {
      type: "subheading",
      text: "9. What purity level should I require?",
    },
    {
      type: "paragraph",
      text: "For most research applications, ≥98% HPLC purity is the accepted standard. Some highly sensitive assay designs may benefit from ≥99% purity. Purity below 95% introduces meaningful uncertainty about dose-response relationships and can produce artifacts in cell-based assays.",
    },
    {
      type: "subheading",
      text: "10. What is LAL endotoxin testing?",
    },
    {
      type: "paragraph",
      text: "The Limulus Amebocyte Lysate (LAL) test detects bacterial endotoxins (lipopolysaccharides) in the sample. Endotoxin contamination causes inflammatory responses in vivo that can confound almost any peptide experiment. For any study involving injection administration routes — subcutaneous, intraperitoneal, intravenous — LAL-verified, low-endotoxin peptides are essential.",
    },
    {
      type: "subheading",
      text: "11. Why do some vendors charge significantly less than others?",
    },
    {
      type: "paragraph",
      text: "Price differences typically reflect differences in quality control depth. Vendors who skip HPLC testing, outsource to low-cost synthesis facilities with poor QC, or do not perform endotoxin testing can offer lower prices. The cost of a failed experiment due to impure or contaminated peptide — in time, supplies, and animal use — far exceeds the price difference between a budget and quality vendor.",
    },
    {
      type: "subheading",
      text: "12. Is it safe to buy from overseas vendors?",
    },
    {
      type: "paragraph",
      text: "Some researchers purchase from Chinese synthesis facilities directly. Risks include: inconsistent QC standards, cold chain gaps in international shipping, customs seizure risk, and limited recourse if a batch fails. Domestic US vendors with documented QC processes offer better accountability and research reliability.",
    },
    {
      type: "heading",
      text: "Part 3: Storage — How to Keep Peptides Stable",
    },
    {
      type: "subheading",
      text: "13. How should I store research peptides?",
    },
    {
      type: "list",
      items: [
        "Lyophilized (dry) peptides: store at -20°C for long-term stability (6–24 months depending on compound)",
        "Reconstituted solutions: store at 4°C and use within 7–14 days; avoid repeated freeze-thaw",
        "Protect from light: many peptides are photosensitive — amber vials or aluminum foil wrapping",
        "Keep sealed until use: lyophilized peptides absorb moisture from air, degrading stability",
        "Label vials: date received, date reconstituted, concentration, lot number",
      ],
    },
    {
      type: "subheading",
      text: "14. Can I store peptides in a regular freezer?",
    },
    {
      type: "paragraph",
      text: "A household freezer at -18°C to -20°C is generally adequate for most lyophilized peptides. Avoid frost-free freezers if possible — the defrost cycles cause temperature fluctuations. A dedicated lab freezer with consistent temperature monitoring is preferable for longer-term storage.",
    },
    {
      type: "subheading",
      text: "15. How do I know if a peptide has degraded?",
    },
    {
      type: "paragraph",
      text: "Common signs of degradation include: visible discoloration (yellowing), cloudiness in reconstituted solution that shouldn't be cloudy, failure to reconstitute normally, unexpected biological inactivity in a validated assay, or HPLC testing showing purity decline. When in doubt, compare against known-good lot data or run a fresh batch.",
    },
    {
      type: "heading",
      text: "Part 4: Reconstitution — How to Prepare Peptides",
    },
    {
      type: "subheading",
      text: "16. What is reconstitution?",
    },
    {
      type: "paragraph",
      text: "Reconstitution is the process of dissolving lyophilized (freeze-dried) peptide powder in a suitable solvent to create a solution for use in research. The choice of solvent, the reconstitution volume, and the technique used all affect the resulting concentration, stability, and sterility of the working solution.",
    },
    {
      type: "subheading",
      text: "17. What solvent should I use to reconstitute peptides?",
    },
    {
      type: "list",
      items: [
        "Sterile water: suitable for most hydrophilic peptides; preferred default",
        "Bacteriostatic water (0.9% benzyl alcohol): extends shelf life of reconstituted solution; not suitable for all applications",
        "0.9% NaCl (saline): physiologically compatible; often used for in vivo injection work",
        "0.1% acetic acid: used for hydrophobic peptides that have poor solubility in neutral pH; dilute with saline before use",
        "DMSO: last resort for highly hydrophobic peptides; cytotoxic at high concentrations — minimize use",
      ],
    },
    {
      type: "subheading",
      text: "18. How do I calculate reconstitution volume for a target concentration?",
    },
    {
      type: "paragraph",
      text: "Basic formula: Volume (mL) = Mass (mg) ÷ Target Concentration (mg/mL). For example, to make a 1 mg/mL solution from a 5 mg vial, add 5 mL of solvent. To make a 2 mg/mL solution, add 2.5 mL. Always add solvent to the vial gently — do not shake; swirl or roll gently to dissolve.",
    },
    {
      type: "subheading",
      text: "19. Should I use a filter when reconstituting?",
    },
    {
      type: "paragraph",
      text: "For injection-route research applications, filtering the reconstituted solution through a 0.22 µm sterile syringe filter before use is recommended. This removes any particulates that may have entered during handling. Use low-protein-binding filters (PVDF or PES) to minimize peptide loss during filtration.",
    },
    {
      type: "subheading",
      text: "20. What is the difference between bacteriostatic water and sterile water?",
    },
    {
      type: "paragraph",
      text: "Sterile water contains no additives and supports no bacterial growth prevention after opening — it should be used immediately or discarded. Bacteriostatic water contains 0.9% benzyl alcohol as a preservative, inhibiting bacterial growth and extending the shelf life of a reconstituted peptide solution to several weeks when refrigerated. Not all peptides are compatible with benzyl alcohol — check solubility data for your specific compound.",
    },
    {
      type: "heading",
      text: "Part 5: Research Design Fundamentals",
    },
    {
      type: "subheading",
      text: "21. What animal models are most commonly used in peptide research?",
    },
    {
      type: "list",
      items: [
        "Sprague-Dawley and Wistar rats: most common model for BPC-157, TB-500, and GH-axis peptides",
        "C57BL/6 mice: widely used for metabolic, immune, and longevity research",
        "db/db and ob/ob mice: standard models for GLP-1 and metabolic peptide research",
        "Aged rodents (18–24 months): used for longevity, cognitive, and sarcopenia peptide studies",
        "Specific injury models: ACL tear, colitis induction, TBI models depending on compound focus",
      ],
    },
    {
      type: "subheading",
      text: "22. What administration routes are used in peptide research?",
    },
    {
      type: "list",
      items: [
        "Subcutaneous (SC): most common route for peptide research; good bioavailability for most compounds",
        "Intraperitoneal (IP): rapid systemic absorption; common in rodent models",
        "Intravenous (IV): bypasses absorption; used for PK studies and CNS-targeting compounds",
        "Intranasal: emerging route for CNS-targeted peptides (Selank, Semax, BPC-157 gut-brain axis)",
        "Oral gavage: relevant for studying oral bioavailability; absorption is typically low for most peptides",
        "Topical/transdermal: relevant for GHK-Cu, SNAP-8, and cosmetic peptide research",
      ],
    },
    {
      type: "subheading",
      text: "23. What controls should I include in a peptide study?",
    },
    {
      type: "list",
      items: [
        "Vehicle control: same solvent and injection volume as treatment group, no active compound",
        "Positive control: known-active compound or established dose for the endpoint being measured",
        "Negative control: untreated or sham-treated group",
        "Dose-response groups: at least 3 doses to establish dose-response relationship",
        "Time-matched groups: if time is a variable, include matched time-point controls",
      ],
    },
    {
      type: "subheading",
      text: "24. How do I design a dose-response experiment?",
    },
    {
      type: "paragraph",
      text: "Start with published literature ranges for your compound. Select at least 3 doses spanning at least one order of magnitude (e.g., 0.1, 1.0, 10 µg/kg). Include a vehicle control. Use sufficient group size for statistical power — typically n=8–10 per group for rodent studies. Measure both primary endpoints (e.g., tissue repair score, body weight) and safety endpoints (organ weight, behavioral indicators) at each dose.",
    },
    {
      type: "subheading",
      text: "25. What endpoints should I measure in peptide studies?",
    },
    {
      type: "paragraph",
      text: "Endpoints depend on the compound class and research question. Common categories include: histological endpoints (tissue staining, fiber density, fibrosis scoring), molecular biomarkers (ELISA, Western blot, PCR for target genes), functional endpoints (grip strength, locomotion, wound closure rate), and systemic endpoints (body weight, organ weights, blood biochemistry panels).",
    },
    {
      type: "heading",
      text: "Part 6: Practical Research Questions",
    },
    {
      type: "subheading",
      text: "26. What equipment do I need to start peptide research?",
    },
    {
      type: "list",
      items: [
        "-20°C freezer (dedicated if possible, frost-free avoided)",
        "Calibrated analytical balance (0.001g sensitivity minimum)",
        "Sterile syringe filters (0.22 µm, low-protein-binding)",
        "Appropriate gauge needles for chosen administration route (26–29G for SC in rodents)",
        "1 mL and 0.5 mL syringes for precise volume delivery",
        "Pipettes and sterile technique supplies for reconstitution",
        "Lab notebook or electronic data capture system for documentation",
        "Access to HPLC or a contract lab for COA verification (optional but recommended)",
      ],
    },
    {
      type: "subheading",
      text: "27. How long should a research protocol run?",
    },
    {
      type: "paragraph",
      text: "Protocol duration depends on the endpoint. Acute inflammation and wound healing studies may run 3–14 days. Metabolic studies (body composition, insulin sensitivity) typically run 4–12 weeks. Longevity and aging studies in rodents may run 3–12 months. GH-axis studies assessing IGF-1 changes run at minimum 4 weeks. Always align duration with the biological timescale of the endpoint you're measuring.",
    },
    {
      type: "subheading",
      text: "28. Can I stack multiple peptides in a single study?",
    },
    {
      type: "paragraph",
      text: "Yes, combination studies (stacks) are scientifically valid and represent an active area of research — BPC-157 + TB-500 stacks, GH secretagogue + IGF-1 pathway combinations, and longevity stacks (NAD + Epithalon + GHK-Cu) are all studied. However, stacking adds interpretive complexity: include single-compound groups alongside the combination group to isolate individual vs. synergistic contributions.",
    },
    {
      type: "subheading",
      text: "29. How should I document my peptide research?",
    },
    {
      type: "list",
      items: [
        "Record vendor, lot number, COA purity, and purchase date for every compound used",
        "Document reconstitution: date, solvent, volume, calculated concentration",
        "Log storage conditions: temperature readings, freezer logs",
        "Record each administration: date, dose, route, animal ID, body weight",
        "Photograph endpoints: wounds, tissue gross morphology, histology slides",
        "Maintain blinded endpoint assessment where possible to reduce observer bias",
      ],
    },
    {
      type: "subheading",
      text: "30. Where can I find published research on specific peptides?",
    },
    {
      type: "paragraph",
      text: "PubMed (pubmed.ncbi.nlm.nih.gov) is the primary database for peer-reviewed peptide research. Google Scholar provides broader coverage including preprints. For compound-specific data, search the peptide name plus mechanism (e.g., 'BPC-157 VEGF angiogenesis'), target tissue, or model organism. Nexphoria's blog library contains 700+ research articles synthesizing published literature across the major peptide classes.",
    },
    {
      type: "heading",
      text: "Getting Started with Nexphoria",
    },
    {
      type: "paragraph",
      text: "Nexphoria is a research peptide supplier built for researchers who take data quality seriously. Every product ships with a lot-specific COA including HPLC purity and mass spectrometry data. Cold chain shipping is standard across all orders. Our research library contains detailed compound guides, protocol design references, and sourcing resources to support your work from protocol design through data collection.",
    },
    {
      type: "disclaimer",
      text: "All Nexphoria products are for research use only. Not for human consumption. Not intended to diagnose, treat, cure, or prevent any disease or condition. For use by qualified researchers in appropriate research settings only.",
    },
  ],
};
