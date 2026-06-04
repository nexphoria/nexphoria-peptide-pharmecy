import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "research-peptide-beginner-faq",
  title: "Research Peptides: Beginner FAQ (20 Questions Answered)",
  description:
    "Answers to the 20 most common questions from researchers new to working with peptides — covering terminology, purity standards, storage, reconstitution, COA interpretation, and research design basics.",
  category: "Research Guides",
  readMinutes: 12,
  publishedAt: "2026-06-04",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "If you're new to peptide research, the terminology, documentation standards, and practical handling requirements can feel overwhelming. This FAQ addresses the questions we receive most often from researchers working with research-grade peptides for the first time.",
    },
    {
      type: "heading",
      text: "Terminology and Basics",
    },
    {
      type: "subheading",
      text: "1. What exactly is a research peptide?",
    },
    {
      type: "paragraph",
      text: "A research peptide is a chemically synthesized short-chain amino acid sequence supplied for use in legitimate scientific investigation — cell culture studies, animal models, receptor binding assays, and pharmacological research. The term 'research' designates intended use, not a quality tier; research-grade products should meet strict purity and documentation standards. Research peptides are not approved for human consumption in most jurisdictions.",
    },
    {
      type: "subheading",
      text: "2. What does 'lyophilized' mean, and why do most peptides come this way?",
    },
    {
      type: "paragraph",
      text: "Lyophilization (freeze-drying) removes water from a peptide solution under vacuum at low temperatures. The resulting dry powder is significantly more stable than a liquid formulation — peptides in lyophilized form can typically be stored for 1–3 years at appropriate temperatures, while reconstituted solutions are stable for days to weeks. Lyophilization prevents the hydrolysis and oxidation reactions that degrade peptides in solution. Most research-grade peptides are shipped in this form.",
    },
    {
      type: "subheading",
      text: "3. What's the difference between a peptide and a protein?",
    },
    {
      type: "paragraph",
      text: "Convention defines peptides as chains of fewer than 50 amino acids; proteins are longer. Most research peptides studied in the longevity, recovery, and metabolic research space have between 5 and 50 amino acids. BPC-157 is 15 amino acids. Semaglutide is 31 amino acids. These short chains can still produce highly specific biological effects by acting at defined receptors, binding to enzymes, or modulating signaling pathways.",
    },
    {
      type: "subheading",
      text: "4. What is a GHS receptor? What does 'secretagogue' mean?",
    },
    {
      type: "paragraph",
      text: "GHS stands for Growth Hormone Secretagogue. GHS-R1a is the receptor for ghrelin — a natural peptide hormone produced primarily in the stomach that stimulates GH release from the pituitary. A 'secretagogue' is any compound that stimulates another substance to be secreted. Peptides like GHRP-2, GHRP-6, Ipamorelin, and Hexarelin are GHS peptides — they bind GHS-R1a and stimulate growth hormone secretion.",
    },
    {
      type: "heading",
      text: "Purity, Testing, and Documentation",
    },
    {
      type: "subheading",
      text: "5. What does '≥98% purity' actually mean?",
    },
    {
      type: "paragraph",
      text: "Purity percentage in peptide research refers to the proportion of the sample that is the target compound, as measured by HPLC (high-performance liquid chromatography). At ≥98% purity, at least 98% of the material is the correct peptide sequence; the remaining ≤2% may be truncated sequences, residual reagents, or other synthesis byproducts. For most research applications, ≥98% is the accepted standard. Lower purity (e.g., 95%) increases the risk that observed biological effects are confounded by impurities.",
    },
    {
      type: "subheading",
      text: "6. What is a COA, and what should it include?",
    },
    {
      type: "paragraph",
      text: "A Certificate of Analysis (COA) is a document from an analytical laboratory confirming the identity, purity, and quality of a specific batch. A legitimate COA for research peptides should include: the peptide name and batch number, HPLC chromatogram (not just a percentage — the actual chromatogram image), mass spectrometry (MS) confirmation of molecular weight, purity percentage, LAL endotoxin test result (critical for injectable research applications), date of analysis, and the testing laboratory's information. A COA without the HPLC chromatogram or without batch-specific MS data is insufficient for rigorous research use.",
    },
    {
      type: "subheading",
      text: "7. What is an LAL test, and when is it required?",
    },
    {
      type: "paragraph",
      text: "The Limulus Amebocyte Lysate (LAL) test detects bacterial endotoxins — lipopolysaccharides (LPS) shed from gram-negative bacterial cell walls during peptide synthesis. Endotoxin contamination is a critical concern for any peptide administered parenterally (subcutaneously, intraperitoneally, intravenously) in animal research, because LPS is a potent activator of the innate immune system. Even nanogram quantities of LPS can trigger inflammation, fever, and confound experimental results. Research peptides intended for injection should have confirmed endotoxin levels below 5 EU/mg for most applications.",
    },
    {
      type: "subheading",
      text: "8. What does mass spectrometry confirm that HPLC cannot?",
    },
    {
      type: "paragraph",
      text: "HPLC separates compounds and measures relative abundance — it tells you how much of each component is present but not what those components are. Mass spectrometry (typically ESI-MS or MALDI-MS for peptides) measures molecular weight directly, confirming that the dominant compound in the sample is actually the target peptide sequence. A sample could theoretically have a 99% HPLC purity reading while being the wrong compound entirely — MS catches this. Both tests together provide meaningful quality assurance.",
    },
    {
      type: "heading",
      text: "Storage and Handling",
    },
    {
      type: "subheading",
      text: "9. How should I store lyophilized peptides?",
    },
    {
      type: "paragraph",
      text: "Most lyophilized peptides should be stored at -20°C for long-term preservation, or at 2–8°C (standard refrigerator) for short-to-medium-term use (typically up to 6–12 months depending on the specific compound). Key rules: keep away from light, avoid moisture exposure (desiccant packs in storage containers help), and allow the vial to warm to room temperature before opening to prevent moisture condensation. Compounds containing methionine (e.g., DSIP) or cysteine residues are more sensitive to oxidation and should receive particular care.",
    },
    {
      type: "subheading",
      text: "10. What reconstitution solvent should I use?",
    },
    {
      type: "paragraph",
      text: "The correct reconstitution solvent depends on the peptide's solubility profile. Most hydrophilic peptides dissolve readily in bacteriostatic water (sterile water with 0.9% benzyl alcohol, which inhibits bacterial growth and extends stability of the reconstituted solution). Hydrophobic peptides may require initial dissolution in a small volume of 0.1% acetic acid, dilute HCl, or DMSO, followed by dilution with sterile saline or bacteriostatic water. Each peptide's COA or product documentation should specify the recommended reconstitution approach. Never reconstitute in tap water or non-sterile saline.",
    },
    {
      type: "subheading",
      text: "11. How stable is a reconstituted peptide solution?",
    },
    {
      type: "paragraph",
      text: "Stability after reconstitution varies significantly by peptide. As a general guide: most peptides reconstituted in bacteriostatic water and stored at 2–8°C remain stable for 14–28 days. Peptides with disulfide bonds (e.g., some cyclic peptides) may degrade faster in solution. For long-term storage needs, aliquoting into single-use volumes and freezing at -20°C before first use is the best practice — this avoids repeated freeze-thaw cycles, which accelerate degradation.",
    },
    {
      type: "heading",
      text: "Research Design and Dosing",
    },
    {
      type: "subheading",
      text: "12. How do researchers calculate peptide dosing in animal models?",
    },
    {
      type: "paragraph",
      text: "Most published preclinical protocols express dosing as mcg/kg or mg/kg body weight, which allows allometric scaling across species. For rodent research, typical reference points: a 250g rat is approximately 0.25 kg. If a protocol calls for 10 mcg/kg SC, that is 2.5 mcg for a 250g rat. Injection volumes in rodents are typically 0.1–0.5 mL SC (rats) and 0.05–0.2 mL SC (mice). Always confirm compound concentration in your reconstituted solution before calculating injection volumes.",
    },
    {
      type: "subheading",
      text: "13. What is the difference between subcutaneous, intraperitoneal, and intravenous administration in animal models?",
    },
    {
      type: "paragraph",
      text: "Subcutaneous (SC) — injection into the loose skin/fat layer, typically at the scruff in rodents. Most common route for peptide research; slower absorption provides more consistent plasma levels. Intraperitoneal (IP) — injection into the peritoneal cavity; faster absorption than SC, commonly used in rodent research for rapid compound delivery. Intravenous (IV) — direct injection into the bloodstream; immediate bioavailability, requires greater technical skill and carries higher stress risk for the animal. The administration route affects pharmacokinetics significantly — published protocols must be replicated using the same route to be comparable.",
    },
    {
      type: "subheading",
      text: "14. What are appropriate positive and negative controls for peptide research?",
    },
    {
      type: "paragraph",
      text: "A negative control group receives vehicle only (the reconstitution solvent at the same volume as treated groups) with no active compound. This controls for any biological effect of the injection procedure or solvent itself. A positive control uses a compound with known, documented activity in the specific assay or model — this confirms that your experimental system is capable of detecting an effect if one exists. Omitting controls is a common experimental design flaw that renders results difficult to interpret or publish.",
    },
    {
      type: "heading",
      text: "Sourcing and Quality",
    },
    {
      type: "subheading",
      text: "15. How do I identify a reliable peptide supplier?",
    },
    {
      type: "paragraph",
      text: "A reliable research peptide supplier will: provide batch-specific COAs with HPLC chromatograms and mass spectrometry data; offer LAL endotoxin testing results; use third-party independent laboratory verification rather than solely in-house testing; maintain cold-chain integrity during shipping; provide clear documentation of synthesis methods and GMP-aligned manufacturing standards; and be transparent about sourcing. Red flags: COAs with only a purity percentage and no chromatogram, no MS data, no LAL testing, or documents that look templated rather than batch-specific.",
    },
    {
      type: "subheading",
      text: "16. Why do peptide prices vary so much across suppliers?",
    },
    {
      type: "paragraph",
      text: "Price variation reflects differences in synthesis quality, analytical testing costs, and supplier margins. High-purity synthesis with comprehensive third-party testing (HPLC, MS, LAL, sterility) is genuinely more expensive than bulk commodity synthesis with minimal QC. The research cost of working with a low-quality compound — confounded results, wasted animal cohorts, failed assays — almost always exceeds the price difference between a budget supplier and a quality supplier. For research purposes, documentation quality matters as much as the price per milligram.",
    },
    {
      type: "heading",
      text: "Legal and Regulatory",
    },
    {
      type: "subheading",
      text: "17. Are research peptides legal to purchase?",
    },
    {
      type: "paragraph",
      text: "In the United States, most research peptides occupy a regulatory gray area. They are not scheduled controlled substances (with specific exceptions), and they are legally purchasable for legitimate research purposes by researchers, institutions, and laboratories. They are not approved as drugs or dietary supplements. Purchasing for the purpose of human administration is not a legitimate research purpose and violates the research use designation. Researchers in other jurisdictions should verify local regulations, which vary significantly — some countries require institutional approval, import permits, or restrict specific compounds.",
    },
    {
      type: "subheading",
      text: "18. What institutional requirements apply to peptide research?",
    },
    {
      type: "paragraph",
      text: "Animal research with peptides requires IACUC (Institutional Animal Care and Use Committee) approval in the United States, or equivalent institutional oversight in other countries. The protocol submission must describe the research purpose, species, housing, procedures, and humane endpoints. Researchers at academic or industry institutions must route peptide procurement through approved procurement processes. Independent researchers should verify their local obligations before beginning in vivo work.",
    },
    {
      type: "heading",
      text: "Getting Started",
    },
    {
      type: "subheading",
      text: "19. What are the most commonly studied peptides for a new researcher to start with?",
    },
    {
      type: "paragraph",
      text: "Researchers often begin with well-characterized compounds that have substantial published literature, established protocols, and broad research supplier availability. BPC-157 is among the most referenced repair peptides in preclinical literature, with protocols across gastrointestinal, musculoskeletal, and neurological models. Ipamorelin and CJC-1295 (No-DAC) have extensively documented GH secretagogue profiles with relatively clean study designs. For longevity research, Epithalon and NAD+ precursors (NMN, NR) have the most accessible evidence bases. Starting with a compound that has published protocols in your target model system simplifies study design validation.",
    },
    {
      type: "subheading",
      text: "20. Where should I start when designing my first peptide study?",
    },
    {
      type: "paragraph",
      text: "Start with PubMed. Search your compound of interest plus the biological endpoint you want to investigate. Read the Methods sections of the most-cited papers — they will specify the animal model, sex, age, dose, route, frequency, duration, outcome measures, and statistical analysis approach. Replicate an established protocol before modifying variables. Contact your institution's research veterinarian or pharmacologist early — they can identify design flaws before you invest in animals and compounds. A tightly designed study with one variable and appropriate controls produces more publishable data than an ambitious multi-variable protocol with confounders.",
    },
    {
      type: "callout",
      text: "All Nexphoria peptides include batch-specific HPLC + MS COAs. LAL endotoxin testing is available on all injectable-grade compounds. Contact our team for documentation on any specific batch.",
    },
    {
      type: "disclaimer",
      text: "For research purposes only. Not intended for human use. This content is educational and does not constitute medical, legal, or regulatory advice.",
    },
  ],
};
