import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "peptide-research-glossary-50-terms-jun23-2026",
  title: "Peptide Research Glossary: 50 Essential Terms Every Researcher Should Know",
  description:
    "A comprehensive reference glossary of 50 key terms in peptide research — covering amino acid chemistry, pharmacokinetics, receptor biology, quality testing, and regulatory concepts. Essential reading for researchers at any level.",
  category: "Research Fundamentals",
  readMinutes: 14,
  publishedAt: "2026-06-23",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "callout",
      text: "This glossary is a research reference document. All compounds mentioned are discussed in the context of laboratory and pre-clinical research only. Not intended as clinical guidance.",
    },
    {
      type: "paragraph",
      text: "Whether you are approaching peptide research for the first time or need a quick reference for terms encountered in the primary literature, this glossary covers the essential vocabulary — from foundational amino acid chemistry through pharmacokinetics, receptor biology, assay methods, and quality assurance terminology.",
    },
    {
      type: "heading",
      text: "A – C",
    },
    {
      type: "list",
      items: [
        "Amino Acid — The building blocks of peptides and proteins. Twenty standard amino acids, each defined by a unique side chain (R group), are encoded by the genetic code. Abbreviated using one-letter or three-letter codes (e.g., G/Gly for glycine).",
        "Acylation — Chemical modification in which an acyl group is added to a peptide. DAC (Drug Affinity Complex) technology used in CJC-1295 involves acylation for albumin binding, dramatically extending half-life.",
        "Agonist — A compound that binds to a receptor and activates it, producing a biological response. Ipamorelin is a GHS-R1a agonist; Semaglutide is a GLP-1 receptor agonist.",
        "Antagonist — A compound that binds to a receptor but does not activate it, thereby blocking agonist activity. Used in receptor characterization research.",
        "Bacteriostatic Water — Sterile water containing 0.9% benzyl alcohol as a preservative. The standard diluent for research peptide reconstitution in multi-use vials.",
        "Bioavailability — The fraction of an administered compound that reaches systemic circulation in active form. Key consideration when comparing subcutaneous vs. intravenous vs. oral delivery routes.",
        "Bioconjugation — The process of attaching a peptide to another molecule (e.g., a carrier protein, nanoparticle, or reporter label) for research tracking or delivery purposes.",
        "BDNF (Brain-Derived Neurotrophic Factor) — A neurotrophin involved in neuronal growth, plasticity, and survival. Elevated by compounds like Selank; a primary research endpoint in neuropeptide studies.",
        "C-terminus — The end of a peptide chain containing a free carboxyl group (–COOH). Peptide sequences are written N-terminus to C-terminus by convention.",
        "CD36 — A multifunctional scavenger receptor expressed in cardiac tissue, endothelial cells, and macrophages. Identified as a binding target for Hexarelin, mediating cardioprotective effects independent of growth hormone.",
        "Certificate of Analysis (COA) — Documentation from a testing laboratory confirming a compound's identity, purity, and quality metrics. Should include HPLC purity data, mass spec confirmation, batch number, and testing date.",
        "Cyclic Peptide — A peptide in which the N- and C-termini are joined, or side chains are cross-linked, forming a ring structure. Cyclic peptides show increased enzymatic stability compared to linear analogs.",
      ],
    },
    {
      type: "heading",
      text: "D – G",
    },
    {
      type: "list",
      items: [
        "D-Amino Acid — Non-natural amino acid stereoisomer (mirror image of the standard L-form). Incorporation into peptides increases resistance to proteolytic enzymes. Ipamorelin and Hexarelin both contain D-amino acid residues.",
        "DAC (Drug Affinity Complex) — A chemical modification that allows a peptide to bind reversibly to albumin in blood, dramatically extending circulating half-life. Used in the long-acting form of CJC-1295.",
        "ELISA (Enzyme-Linked Immunosorbent Assay) — A plate-based assay for detecting and quantifying proteins, hormones, and peptides in biological samples. Widely used to measure GH, IGF-1, GLP-1, and cytokines as research endpoints.",
        "Endotoxin — Lipopolysaccharide (LPS) components of gram-negative bacterial cell walls. Endotoxin contamination in research compounds triggers inflammatory responses that confound experimental results. Detected by LAL testing.",
        "Enzymatic Stability — A measure of a peptide's resistance to breakdown by proteases. Modified peptides incorporating D-amino acids, PEGylation, or cyclization typically show enhanced stability.",
        "First-Pass Metabolism — The reduction in compound concentration when a drug absorbed from the gut passes through the liver before reaching systemic circulation. The primary reason most peptides have negligible oral bioavailability.",
        "Fragment — A portion of a larger peptide sequence studied independently. IGF-1 LR3 and HGH Fragment 176-191 are examples of biologically active fragments derived from full-length proteins.",
        "GHRH (Growth Hormone-Releasing Hormone) — A hypothalamic peptide that stimulates GH synthesis and secretion from the anterior pituitary. CJC-1295 and Sermorelin are synthetic GHRH analogs.",
        "GHS (Growth Hormone Secretagogue) — A compound that stimulates GH release, typically via GHS-R1a receptor agonism. The class includes Ipamorelin, Hexarelin, GHRP-6, and the oral compound MK-677.",
        "GHS-R1a — The ghrelin receptor — the primary binding target of GHS peptides. Expressed in the pituitary, hypothalamus, and peripheral tissues including cardiac muscle and adipose tissue.",
      ],
    },
    {
      type: "heading",
      text: "H – L",
    },
    {
      type: "list",
      items: [
        "Half-Life — The time required for the plasma concentration of a compound to reduce by 50%. Ranges from minutes (unmodified GHRH: ~3 minutes) to days (CJC-1295/DAC: ~8 days) depending on molecular modifications.",
        "HPLC (High-Performance Liquid Chromatography) — An analytical technique that separates mixture components by differential interaction with a stationary phase. The gold standard for peptide purity measurement. Research-grade peptides should demonstrate ≥98% purity on HPLC.",
        "Hydrophilicity/Hydrophobicity — Describes a peptide's affinity for water (hydrophilic) vs. lipids and non-polar environments (hydrophobic). Affects solubility, membrane permeability, and appropriate reconstitution diluent selection.",
        "IGF-1 (Insulin-Like Growth Factor 1) — A peptide hormone that mediates many of GH's anabolic and metabolic effects. Synthesized primarily in the liver in response to GH stimulation. Used as a surrogate biomarker for GH axis activity in research.",
        "In Vitro — Experimental conditions performed outside a living organism — typically in cell culture or isolated tissue preparations. Contrasted with in vivo experiments; generally easier to control but less physiologically representative.",
        "In Vivo — Experimental conditions within a living organism. Provides greater physiological relevance than in vitro data but requires ethical oversight and introduces more biological variability.",
        "LAL Test (Limulus Amebocyte Lysate) — The industry standard assay for endotoxin (LPS) contamination using a clotting reaction derived from horseshoe crab blood. Essential quality test for research peptides intended for cell culture or animal model use.",
        "LC-MS (Liquid Chromatography-Mass Spectrometry) — A combined analytical platform providing both purity data (LC) and molecular identity confirmation (MS). More comprehensive than HPLC alone; the current standard for full peptide characterization.",
        "Lyophilization — Freeze-drying process that removes water from a frozen peptide solution under vacuum. Produces a stable dry powder ('lyophilized cake') with significantly extended shelf life compared to solution-phase storage.",
      ],
    },
    {
      type: "heading",
      text: "M – P",
    },
    {
      type: "list",
      items: [
        "Mass Spectrometry (MS) — An analytical technique that measures the mass-to-charge ratio of ions, providing highly accurate molecular weight determination. Used to confirm peptide sequence identity. Should accompany HPLC data in all quality documentation.",
        "Molecular Weight (MW) — The sum of atomic masses of all atoms in a peptide molecule, expressed in Daltons (Da) or g/mol. MW confirmation via mass spectrometry is a required element of a complete COA.",
        "N-terminus — The end of a peptide chain containing a free amino group (–NH₂). Conventionally written first when expressing peptide sequences.",
        "Peptide — A chain of 2–50 amino acids linked by peptide bonds. Formally distinguished from proteins (>50 amino acids) by size, though the distinction is not rigidly applied in the literature.",
        "Peptide Bond — The covalent bond formed between the carboxyl group of one amino acid and the amino group of the next, releasing water. The fundamental linkage unit of peptide primary structure.",
        "PEGylation — The attachment of polyethylene glycol (PEG) chains to a peptide. Increases hydrodynamic radius (reducing renal clearance), extends half-life, and reduces immunogenicity.",
        "Pharmacodynamics (PD) — The study of what a compound does to the body: mechanism of action, receptor binding kinetics, signal transduction, and downstream biological effects.",
        "Pharmacokinetics (PK) — The study of what the body does to a compound: absorption, distribution, metabolism, and excretion (ADME profile).",
        "Pulsatile Release — The natural pattern of GH secretion in discrete pulses rather than continuous flow. Preserved by GHRH/GHS compounds; disrupted by exogenous recombinant GH administration. Key concept for GH axis research protocol design.",
      ],
    },
    {
      type: "heading",
      text: "R – Z",
    },
    {
      type: "list",
      items: [
        "Reconstitution — The process of dissolving a lyophilized peptide in an appropriate diluent (typically bacteriostatic water) to prepare a solution for experimental use.",
        "Receptor Desensitization — The reduction in receptor responsiveness following prolonged or repeated ligand exposure. Relevant for Hexarelin (rapid GHS-R1a desensitization with continuous dosing) and other GHSs.",
        "Sequence — The linear order of amino acids in a peptide, written N-terminus to C-terminus. Both one-letter (e.g., Ala-Glu-Asp-Gly for Epithalon) and three-letter codes are used in the literature.",
        "Sirtuin (SIRT) — A class of NAD+-dependent protein deacetylase enzymes involved in gene silencing, DNA repair, and metabolic regulation. SIRT1 and SIRT3 are key targets in longevity research; NAD+ precursors are studied as sirtuin activators.",
        "Solid-Phase Peptide Synthesis (SPPS) — The standard manufacturing method for research peptides. Amino acids are added sequentially to a resin-bound growing chain, then cleaved and purified. Synthesis quality directly determines final purity.",
        "Solubility — A peptide's capacity to dissolve in a given solvent at a specified concentration. Poor solubility may require acidic diluents and affects maximum achievable working concentration.",
        "Telomerase — The enzyme that adds telomeric DNA repeats (TTAGGG in humans) to chromosome ends, partially counteracting replicative shortening. Proposed mechanism target of Epithalon (Epitalon).",
        "Telomere — Repetitive non-coding DNA sequences capping chromosome ends that shorten with each cell division. Telomere length serves as a biomarker of cellular aging in longevity research.",
        "Tuftsin — A naturally occurring tetrapeptide (Thr-Lys-Pro-Arg) cleaved from the Fc region of immunoglobulin G. Immunomodulatory properties; the tetrapeptide sequence is the structural foundation of Selank.",
        "Vial — The pharmaceutical-grade borosilicate glass container used for storing lyophilized or reconstituted peptides. Amber or opaque vials protect light-sensitive compounds; vial integrity is a critical quality variable for multi-use preparations.",
      ],
    },
    {
      type: "heading",
      text: "Using This Glossary",
    },
    {
      type: "paragraph",
      text: "These 50 terms represent the working vocabulary of most pre-clinical peptide research. For deeper coverage of any specific concept — receptor pharmacology, HPLC methodology, or specific compound mechanisms — the Nexphoria Research Journal maintains dedicated articles on each topic. The research literature (PubMed, bioRxiv) provides primary source references for all mechanisms discussed above.",
    },
    {
      type: "disclaimer",
      text: "For research reference purposes only. All compounds discussed are sold by Nexphoria for qualified research use only. Not intended for human or veterinary therapeutic application.",
    },
  ],
};
