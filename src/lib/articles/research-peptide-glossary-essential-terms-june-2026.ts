import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "research-peptide-glossary-essential-terms-june-2026",
  title: "Research Peptide Glossary: 60 Essential Terms (2026 Edition)",
  description:
    "A complete reference glossary for peptide researchers — covering amino acid chemistry, receptor pharmacology, quality assurance, and study design vocabulary. Updated for 2026.",
  category: "Research Resources",
  readMinutes: 14,
  publishedAt: "2026-06-14",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Whether you're new to peptide biochemistry or need a quick reference during study design, this glossary covers 60 essential terms across chemistry, pharmacokinetics, quality assurance, and research methodology. Definitions are written for scientific accuracy, not marketing copy.",
    },
    {
      type: "heading",
      text: "A–C: Chemistry and Compound Fundamentals",
    },
    {
      type: "list",
      items: [
        "Amino Acid — The 20 standard building blocks of peptides and proteins, each defined by a unique side chain (R group). Abbreviated with one- or three-letter codes (e.g., G/Gly for glycine).",
        "Acylation — Chemical modification in which an acyl group is added to a peptide. The DAC technology in CJC-1295 uses acylation to bind circulating albumin, extending half-life to ~6–8 days.",
        "Agonist — A compound that binds a receptor and activates it, producing a downstream biological response. Ipamorelin is a GHS-R1a agonist.",
        "Antagonist — A compound that binds a receptor but does not activate it, blocking agonist action. Used in receptor characterization and competition binding studies.",
        "Bacteriostatic Water (BW) — Sterile water containing 0.9% benzyl alcohol as a preservative. The standard multi-use diluent for research peptide reconstitution.",
        "Bioavailability — The fraction of an administered compound reaching systemic circulation in active form. Varies substantially by route: subcutaneous (~80–100% for most peptides) vs. intranasal (~20–40%) vs. oral (<5% for most unmodified peptides).",
        "Bioconjugation — Attachment of a peptide to another molecule (carrier protein, nanoparticle, or reporter molecule) for targeted delivery or detection research.",
        "BDNF (Brain-Derived Neurotrophic Factor) — A neurotrophin measured as an endpoint in cognitive and neuroprotection peptide studies. Selank and Semax have both been studied for BDNF modulation.",
        "CAS Number — Chemical Abstracts Service registry number uniquely identifying a compound. Used for identity verification in COAs.",
        "COA (Certificate of Analysis) — The batch-specific quality document from an independent laboratory confirming purity, identity, sterility, and endotoxin levels. Essential for research-grade compounds.",
      ],
    },
    {
      type: "heading",
      text: "D–G: Dosing, Delivery, and Receptor Concepts",
    },
    {
      type: "list",
      items: [
        "DAC (Drug Affinity Complex) — A maleimide linker technology that enables covalent albumin binding in vivo, extending peptide half-life. Used in CJC-1295 (with DAC) vs. the short-acting CJC-1295 (no DAC/MOD GRF 1-29).",
        "Desensitization / Tachyphylaxis — Diminishing receptor response following repeated agonist exposure. Documented with GHRP-6 and GHRP-2 under continuous dosing protocols, less pronounced with Ipamorelin due to selectivity.",
        "Disulfide Bond — A covalent bond between two cysteine residues that stabilizes three-dimensional protein/peptide structure. Present in some larger research peptides.",
        "EC50 — The molar concentration of a compound that produces 50% of its maximal effect. A key potency metric in in vitro studies.",
        "ELISA (Enzyme-Linked Immunosorbent Assay) — A plate-based assay used to quantify peptide or biomarker concentrations in biological samples. Commonly used to measure GH, IGF-1, BDNF, and cytokine endpoints.",
        "Endotoxin Testing / LAL Test — Limulus Amebocyte Lysate test measuring bacterial endotoxin (lipopolysaccharide) levels in a compound. Research-grade peptides should test <1 EU/mg; injectable standards are stricter.",
        "Enantiomer — A mirror-image stereoisomer. D-amino acid substitutions are used in some research peptides to resist enzymatic degradation.",
        "GHRH (Growth Hormone-Releasing Hormone) — The hypothalamic peptide that stimulates pituitary GH release. CJC-1295, Sermorelin, and Tesamorelin are GHRH analogs.",
        "GHS-R1a (Growth Hormone Secretagogue Receptor 1a) — The ghrelin receptor activated by Ipamorelin, Hexarelin, GHRP-2, and GHRP-6. Distinct from the GHRH receptor, enabling complementary dual-pathway activation.",
        "GLP-1 Receptor (Glucagon-Like Peptide-1 Receptor) — The receptor targeted by Semaglutide, Tirzepatide (dual GIP/GLP-1), and Retatrutide (triple agonist). Expressed in pancreatic beta cells, brain, heart, and GI tract.",
      ],
    },
    {
      type: "heading",
      text: "H–L: Half-Life, HPLC, and Identity Testing",
    },
    {
      type: "list",
      items: [
        "Half-Life (t½) — The time for plasma concentration to fall by 50%. Critical for study design; short half-lives (e.g., GHRP-6: ~30 min) require different dosing intervals than long ones (CJC-1295 DAC: ~6–8 days).",
        "HPLC (High-Performance Liquid Chromatography) — The gold-standard analytical method for measuring peptide purity. Results expressed as area percentage; ≥98% is research grade, ≥99% is premium.",
        "IC50 — The concentration required to inhibit a process by 50%. Used in receptor binding studies and enzyme inhibition research.",
        "IGF-1 (Insulin-Like Growth Factor 1) — The primary downstream mediator of GH action, produced mainly by the liver. IGF-1 elevation is a key endpoint in GH secretagogue research.",
        "In Vitro — Experiments conducted outside a living organism (cell culture, tissue preparations). Essential preliminary step before any in vivo work.",
        "In Vivo — Experiments conducted in a living organism. Typically rodent models (mouse, rat) for pre-clinical peptide research.",
        "Intranasal Administration — Delivery via nasal mucosa, used for CNS-active peptides (Selank, Semax, Oxytocin, PT-141). Bioavailability varies significantly; specialized formulations improve absorption.",
        "IP (Intraperitoneal) — Injection into the peritoneal cavity. Common in rodent models; more rapid onset than subcutaneous but less clinically translatable.",
        "IV (Intravenous) — Injection directly into a vein; 100% bioavailability by definition. Used in some research models where precise pharmacokinetic data is needed.",
        "Lyophilization — Freeze-drying process that removes water while preserving peptide structure. Lyophilized peptides are far more stable than reconstituted solutions.",
      ],
    },
    {
      type: "heading",
      text: "M–P: Mechanisms, Mass Spec, and Purity",
    },
    {
      type: "list",
      items: [
        "Mass Spectrometry (MS) — Analytical technique measuring molecular mass to confirm compound identity. Used alongside HPLC; the combination of HPLC+MS is considered the gold standard for peptide QC.",
        "Melanocortin System — The receptor family (MC1R–MC5R) targeted by PT-141, Melanotan II, and alpha-MSH. Implicated in pigmentation, sexual function, energy balance, and inflammation.",
        "Molecular Weight (MW) — The sum of atomic masses of all atoms in a molecule, expressed in g/mol or Daltons. Used to calculate molar concentrations and dosing solutions.",
        "NAD+ (Nicotinamide Adenine Dinucleotide) — A coenzyme essential to cellular metabolism, sirtuin activation, and PARP-mediated DNA repair. NAD+ levels decline with age and are a target for longevity research.",
        "NMR (Nuclear Magnetic Resonance) Spectroscopy — An analytical technique used to determine molecular structure. Less common than HPLC/MS for routine QC but used in detailed structural confirmation.",
        "Nociception — The sensory process that encodes potentially harmful stimuli. Relevant for BPC-157, Selank, and other peptides studied for analgesic effects in animal models.",
        "PARP (Poly ADP-Ribose Polymerase) — DNA repair enzymes that consume NAD+ when activated. Chronic PARP overactivation in aging depletes NAD+ pools, impairing sirtuin function.",
        "Peptide — A molecule comprising 2–50 amino acids linked by peptide bonds. Proteins contain >50 amino acids, though this threshold varies by convention. Most research peptides range from 5 to 44 amino acids.",
        "Pharmacokinetics (PK) — The study of how the body processes a compound: absorption, distribution, metabolism, and excretion (ADME).",
        "Phosphorylation — The addition of a phosphate group to a protein, a key step in intracellular signaling cascades. FAK (focal adhesion kinase) phosphorylation is a documented BPC-157 mechanism.",
      ],
    },
    {
      type: "heading",
      text: "Q–S: Quality, Receptors, and Study Design",
    },
    {
      type: "list",
      items: [
        "Reconstitution — The process of dissolving lyophilized peptide in an appropriate diluent (bacteriostatic water or 0.6% acetic acid) to create a solution for research use.",
        "Receptor Binding Affinity (Ki) — The equilibrium dissociation constant for a ligand-receptor interaction. Lower Ki = higher affinity. Measured in competitive radioligand displacement assays.",
        "SC (Subcutaneous) — Injection into the subcutaneous fat layer. Standard route for most peptide research in rodent models; high bioavailability (~80–95%) and relatively slow, sustained absorption.",
        "Sirtuin (SIRT1–7) — NAD+-dependent deacylase enzymes involved in gene silencing, mitochondrial biogenesis, and stress response. Called 'longevity enzymes' due to their role in aging biology.",
        "Somatostatin — Hypothalamic peptide that inhibits GH release. Endogenous somatostatin activity is one reason co-administration of GHRH analogs and GHS compounds can produce supra-additive GH release.",
        "Stability (Peptide) — The resistance of a peptide to chemical or enzymatic degradation. Factors include pH, temperature, oxidation, and proteolytic cleavage. Lyophilized form is substantially more stable than reconstituted.",
        "Sterility Testing — USP <71> bacterial and fungal culture testing confirming no viable organisms. Required for pharmaceutical products; expected for injectable-grade research compounds.",
        "Subcutaneous Injection Protocol — The standard pre-clinical delivery method: aspirate bevel-up, 45–90° angle, into the scruff or flank depending on species and study protocol.",
        "Synergy — When the combined effect of two compounds exceeds the sum of individual effects. CJC-1295 + Ipamorelin demonstrate synergistic GH elevation due to dual GHRH/GHS-R1a pathway activation.",
        "Systems Biology — An integrative approach studying biological systems as interconnected networks rather than isolated components. Increasingly applied to multi-target peptide research (e.g., longevity stacking).",
      ],
    },
    {
      type: "heading",
      text: "T–Z: Telomeres, Testing, and Translational Research",
    },
    {
      type: "list",
      items: [
        "Telomere — Protective caps at chromosome ends that shorten with each cell division. Telomere length is a biomarker of cellular aging. Epitalon (Epithalon) has been studied for telomerase activation.",
        "Thymosin — A family of immune-regulating peptides originally isolated from thymic tissue. Thymosin Alpha-1 (Tα1) and Thymosin Beta-4 (TB-500) are distinct compounds with different mechanisms and research profiles.",
        "Tirzepatide — A dual GIP/GLP-1 receptor agonist studied for metabolic research. Distinct from Semaglutide (GLP-1 only) and Retatrutide (triple GLP-1/GIP/glucagon agonist).",
        "Translational Research — Research bridging pre-clinical (animal model) findings to clinical (human) applications. Most peptide research is currently at the pre-clinical stage.",
        "USP (United States Pharmacopeia) — Standards-setting body for pharmaceutical quality. USP guidelines for sterility (<71>), endotoxins (<85>), and particulate matter (<788>) are reference standards.",
        "VEGF (Vascular Endothelial Growth Factor) — A key angiogenesis mediator. BPC-157 has been documented to upregulate VEGF expression in multiple tissue repair models.",
        "Vehicle Control — The control group receiving only the diluent/solvent used for the test compound, without the active peptide. Essential for isolating compound-specific effects from diluent effects.",
        "Wash-Out Period — The time between study phases in a crossover design during which the previous compound clears the system. Determined by compound half-life (typically 5–7× t½).",
        "Western Blot — A gel electrophoresis-based assay detecting specific proteins by molecular weight + antibody binding. Used to confirm receptor expression and intracellular signaling endpoints in peptide research.",
        "Zeta Potential — A measure of the electrochemical potential of nanoparticles in suspension. Relevant in formulation research for peptide-loaded nanocarriers.",
      ],
    },
    {
      type: "callout",
      text: "This glossary is provided as a reference resource for researchers and educators. It is not intended to constitute medical advice, and no compound discussed here is approved for human therapeutic use outside of regulated clinical trials.",
    },
    {
      type: "divider",
    },
    {
      type: "heading",
      text: "Using This Glossary in Study Design",
    },
    {
      type: "paragraph",
      text: "When designing peptide research protocols, the most critical vocabulary domains are: (1) pharmacokinetics — to set dosing intervals correctly based on half-life; (2) quality assurance — to evaluate COA data from your supplier; (3) receptor pharmacology — to understand mechanism and predict interaction effects; and (4) study design statistics — to power your experiments correctly.",
    },
    {
      type: "paragraph",
      text: "For compound-specific information, Nexphoria's compound profile articles and protocol guides provide deeper coverage of individual peptides included in our catalog.",
    },
  ],
};
