import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "research-peptide-glossary-50-essential-terms-june-2026",
  title: "Research Peptide Glossary: 50 Essential Terms for June 2026",
  description:
    "A comprehensive reference glossary of 50 essential peptide research terms — covering amino acid chemistry, analytical testing, pharmacokinetics, regulatory concepts, and the latest compound classes. Updated for the 2026 research landscape.",
  category: "Research Fundamentals",
  readMinutes: 14,
  publishedAt: "2026-06-18",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Research peptide literature spans chemistry, pharmacology, endocrinology, analytical testing, and regulatory science. This glossary covers 50 terms that appear most frequently across these domains — from foundational amino acid chemistry to the compound classes driving 2026 research focus. Terms are organized alphabetically within thematic sections.",
    },
    {
      type: "heading",
      text: "Amino Acid Chemistry and Peptide Structure",
    },
    {
      type: "list",
      items: [
        "Amino Acid — The fundamental monomer unit of peptides and proteins. Twenty standard amino acids are encoded by the genetic code, each defined by a unique side chain (R group). Abbreviated using one-letter codes (e.g., G for glycine) or three-letter codes (Gly).",
        "Peptide Bond — The covalent amide bond formed between the carboxyl group of one amino acid and the amino group of the next, releasing water. The fundamental linkage in all peptide structures.",
        "N-terminus — The end of a peptide chain bearing a free amino group (-NH₂). Conventionally written first in sequence notation.",
        "C-terminus — The end of a peptide chain bearing a free carboxyl group (-COOH). Written last in sequence notation.",
        "D-Amino Acid — The non-natural mirror-image (enantiomeric) form of standard L-amino acids. Incorporated into synthetic peptides to resist enzymatic degradation; present in Ipamorelin, Hexarelin, and others.",
        "Cyclic Peptide — A peptide in which the N- and C-termini are joined, or side chains are cross-linked, forming a ring structure. Increased protease resistance relative to linear peptides.",
        "Amide Cap (C-terminal amidation) — A chemical modification replacing the free carboxyl group at the C-terminus with an amide (-CONH₂), increasing metabolic stability.",
        "Disulfide Bridge — A covalent bond between sulfur atoms of two cysteine residues. Relevant to peptide tertiary structure and stability.",
        "Sequence — The linear order of amino acids from N- to C-terminus. Full sequence determines receptor binding specificity, stability, and pharmacological activity.",
        "Fragment — A portion of a larger peptide or protein sequence studied independently. IGF-1 LR3, IGF-1 DES, and AOD-9604 are examples of fragments with research profiles distinct from their parent molecules.",
      ],
    },
    {
      type: "heading",
      text: "Analytical Testing and Quality",
    },
    {
      type: "list",
      items: [
        "HPLC (High-Performance Liquid Chromatography) — The gold standard analytical technique for peptide purity measurement. Separates mixture components by differential interaction with a stationary phase. Research-grade peptides should demonstrate ≥98% purity by HPLC.",
        "Mass Spectrometry (MS) — An analytical technique measuring mass-to-charge ratios to determine molecular weight with high accuracy. Confirms peptide identity independent of purity. Should accompany HPLC data in any COA documentation.",
        "LC-MS (Liquid Chromatography-Mass Spectrometry) — Combined technique providing simultaneous purity data (LC) and molecular identity confirmation (MS). More comprehensive than either technique alone.",
        "Certificate of Analysis (COA) — Documentation from a testing laboratory confirming compound identity, purity, and quality metrics for a specific batch. Must include HPLC data, MS confirmation, lot number, and testing date. Batch-specific COAs are required; generic documents are insufficient.",
        "Endotoxin / LAL Test — Bacterial lipopolysaccharide (LPS) contamination is tested using the Limulus Amebocyte Lysate (LAL) assay — a clotting reaction from horseshoe crab blood. Endotoxin contamination can trigger inflammatory responses in cell culture and animal models, confounding results. Essential quality test for any research compound.",
        "Lyophilization — Freeze-drying under vacuum that removes water from peptide solutions. Produces a stable powder cake with significantly extended shelf life compared to liquid formulations. Industry standard for research peptide packaging.",
        "Solid-Phase Peptide Synthesis (SPPS) — The standard manufacturing method for research peptides. Amino acids are added sequentially to a resin-bound chain, then cleaved and purified via HPLC. Synthesis quality directly determines achievable purity.",
        "Recrystallization Purity vs. HPLC Purity — Two distinct purity measurements. HPLC purity reflects separation-based analysis; recrystallization can produce misleading results if impurities co-crystallize. HPLC is the authoritative standard.",
        "Molecular Weight (MW) — The sum of atomic masses of all atoms in a peptide. Expressed in Daltons (Da). MW confirmation via MS is a critical identity checkpoint — sequence errors shift MW measurably.",
        "Lot Number / Batch Number — A unique identifier linking a product unit to its manufacturing and testing records. Lot-specific documentation is essential for traceable, reproducible research.",
      ],
    },
    {
      type: "heading",
      text: "Pharmacology and Pharmacokinetics",
    },
    {
      type: "list",
      items: [
        "Agonist — A compound that binds to a receptor and activates it to produce a biological response. Ipamorelin is a GHS-R1a agonist; BPC-157 modulates multiple receptor pathways.",
        "Antagonist — A compound that binds to a receptor but does not activate it, blocking agonist activity. Important in receptor characterization research.",
        "Half-Life — Time for plasma concentration to decrease by 50%. Ranges from minutes (unmodified peptides) to days (DAC-modified compounds like CJC-1295/DAC). Determines dosing interval in research protocol design.",
        "Bioavailability — The fraction of an administered dose reaching systemic circulation in active form. Oral bioavailability of most peptides is <5% due to gastrointestinal proteolysis and first-pass hepatic metabolism; subcutaneous and intraperitoneal routes are standard for research administration.",
        "Pharmacodynamics (PD) — The study of what a compound does to a biological system: mechanism of action, receptor binding, downstream signal transduction, and measurable biological effects.",
        "Pharmacokinetics (PK) — The study of what a biological system does to a compound: absorption, distribution, metabolism, and excretion (ADME). Essential for protocol design.",
        "Receptor Desensitization — Reduced receptor response following prolonged or repeated ligand exposure. Particularly relevant for Hexarelin (rapid GHS-R1a tachyphylaxis) and other GHSs when used in continuous dosing protocols.",
        "Pulsatile Release — The natural physiological pattern of GH secretion in discrete pulses rather than continuous flow. Preserved by GHRH/GHS combination protocols; disrupted by exogenous GH administration. Critical consideration for GH axis research design.",
        "DAC (Drug Affinity Complex) — A chemical modification enabling albumin binding that dramatically extends peptide half-life. CJC-1295 with DAC has a half-life of approximately 6–8 days vs. ~30 minutes for unmodified GHRH.",
        "PEGylation — Attachment of polyethylene glycol chains to a peptide, increasing hydrodynamic radius, reducing renal clearance, extending half-life, and reducing immunogenicity.",
      ],
    },
    {
      type: "heading",
      text: "Receptor Biology and Signal Transduction",
    },
    {
      type: "list",
      items: [
        "GHS-R1a (Ghrelin Receptor) — The primary target of growth hormone secretagogue peptides including Ipamorelin, Hexarelin, GHRP-2, and GHRP-6. Expressed in pituitary, hypothalamus, and peripheral tissues including cardiac muscle.",
        "GHRH Receptor — The receptor for growth hormone-releasing hormone. Activated by CJC-1295 and Sermorelin. Works synergistically with GHS-R1a activation to amplify GH secretion.",
        "CD36 — A multifunctional scavenger receptor expressed in cardiac myocytes, endothelial cells, and macrophages. Identified as a Hexarelin binding site mediating cardioprotective effects independent of GH; also involved in fatty acid uptake and oxidized LDL recognition.",
        "Melanocortin Receptor (MCR) — A family of GPCRs targeted by melanocyte-stimulating hormone analogs. MC1R: skin pigmentation. MC3R/MC4R: appetite and sexual function (PT-141 targets MC4R). MC2R: ACTH action at adrenal gland.",
        "IGF-1 Receptor (IGF-1R) — The primary receptor mediating anabolic effects of IGF-1, a downstream mediator of GH action. IGF-1 plasma level is used as a surrogate marker for GH axis activity in research.",
        "BDNF/TrkB — Brain-Derived Neurotrophic Factor and its receptor Tropomyosin receptor kinase B. A critical neuroprotective signaling axis upregulated by Semax and Selank; key endpoint in neuropeptide research.",
        "VEGF (Vascular Endothelial Growth Factor) — A primary pro-angiogenic signaling protein. Upregulated by BPC-157 in multiple tissue repair models; a key mechanistic mediator of its vascular healing effects.",
        "Sirtuin (SIRT) — NAD+-dependent deacetylase enzymes (SIRT1–7) involved in gene regulation, DNA repair, and metabolic sensing. SIRT1 and SIRT3 are primary targets in NAD+ longevity research.",
        "Telomerase (hTERT) — The enzyme that adds telomeric repeat sequences (TTAGGG in humans) to chromosome ends, counteracting replicative shortening. Activation of telomerase in somatic cells is the proposed mechanism for Epithalon's longevity effects.",
        "AMPK (AMP-Activated Protein Kinase) — A master metabolic sensor activated by low energy status. A primary target in longevity and metabolic research; activated by MOTS-c, metformin, and exercise mimetics.",
      ],
    },
    {
      type: "heading",
      text: "Compound Classes and Research Categories",
    },
    {
      type: "list",
      items: [
        "GHRH Analog — A synthetic peptide mimicking growth hormone-releasing hormone. CJC-1295 and Sermorelin are the most studied. Stimulate GH synthesis and secretion from pituitary somatotrophs.",
        "GHS (Growth Hormone Secretagogue) — A compound stimulating GH release via GHS-R1a agonism. Ipamorelin (most selective), Hexarelin (most potent), GHRP-2, GHRP-6 (highest cortisol/prolactin stimulation), MK-677 (oral, non-peptide).",
        "GLP-1 Receptor Agonist — Compounds activating the glucagon-like peptide-1 receptor. Semaglutide, tirzepatide, and retatrutide are the most studied; broad effects on metabolism, cardiovascular function, neurological inflammation, and potentially longevity pathways.",
        "Bioregulator Peptide — Short peptides (typically 2–4 amino acids) discovered by Vladimir Khavinson studied for tissue-specific regulatory effects. Includes Epithalon (pineal), Thymalin (thymus), Pinealon (brain), and Vilon (immune). Represent a distinct research tradition from Western peptide pharmacology.",
        "Mitochondria-Derived Peptide (MDP) — Peptides encoded within mitochondrial DNA and secreted into circulation. MOTS-c and Humanin are the best characterized. Represent a newly appreciated signaling system between mitochondria and the nucleus.",
        "Antimicrobial Peptide (AMP) — Host-defense peptides with broad-spectrum antimicrobial activity and immunomodulatory properties. LL-37 (cathelicidin) and APC-1 are primary research compounds in this class.",
        "Melanocortin — Peptides derived from POMC (pro-opiomelanocortin) acting on MCR family receptors. Melanotan-II and PT-141 (Bremelanotide) are the most studied synthetic analogs.",
        "Nootropic Peptide — Peptides studied for cognitive enhancement and neuroprotection. Semax, Selank, Cerebrolysin, and Dihexa (a potent BDNF mimetic) are primary compounds in this research category.",
        "Reconstitution — The process of dissolving a lyophilized peptide in an appropriate diluent — typically bacteriostatic water — to produce a solution for experimental use. Technique, diluent choice, and storage post-reconstitution all affect compound integrity.",
        "Bacteriostatic Water — Sterile water containing 0.9% benzyl alcohol as a preservative. The standard reconstitution diluent for most research peptides; benzyl alcohol inhibits microbial growth in multi-use vials.",
      ],
    },
    {
      type: "divider",
    },
    {
      type: "callout",
      text: "This glossary reflects terminology as used in research literature and supplier documentation as of June 2026. Regulatory classifications and approved uses vary by jurisdiction and may change. All research must be conducted in compliance with applicable institutional and regulatory requirements.",
    },
    {
      type: "disclaimer",
      text: "All compounds referenced are for research purposes only. Not intended for human use, clinical application, or self-administration.",
    },
  ],
};
