import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "peptide-glossary-june-2026",
  title: "Peptide Research Glossary: 50 Terms Every Researcher Should Know",
  description:
    "A comprehensive reference glossary covering 50 essential peptide research terms — from amino acid chemistry and receptor pharmacology to analytical testing methods, quality standards, and regulatory concepts. Updated for 2026.",
  category: "Research Resources",
  readMinutes: 12,
  publishedAt: "2026-06-16",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Peptide research spans biochemistry, pharmacology, analytical chemistry, and regulatory science. The vocabulary involved can be a barrier for researchers entering the field or working across disciplines. This glossary covers 50 foundational terms — from amino acid structure through clinical trial concepts — with definitions calibrated for research application rather than general audience use.",
    },
    {
      type: "heading",
      text: "A–C",
    },
    {
      type: "list",
      items: [
        "Amino Acid — The building blocks of peptides and proteins. Twenty standard amino acids, each defined by a unique side chain (R group), are encoded by the genetic code. Abbreviated using one-letter (e.g., G for glycine) or three-letter (Gly) codes.",
        "Acylation — Chemical modification in which an acyl group is added to a peptide. DAC (Drug Affinity Complex) technology used in CJC-1295 involves acylation for reversible albumin binding, extending half-life from minutes to days.",
        "Agonist — A compound that binds to a receptor and activates it, producing a biological response. Ipamorelin is a GHS-R1a agonist; CJC-1295 is a GHRH receptor agonist.",
        "Antagonist — A compound that binds to a receptor but does not activate it, blocking agonist access. Important for receptor characterization and competitive binding studies.",
        "Bacteriostatic Water — Sterile water containing 0.9% benzyl alcohol as a preservative. The standard diluent for research peptide reconstitution in multi-use vials. Inhibits bacterial growth over weeks-long research use periods.",
        "Bioavailability — The fraction of an administered compound that reaches systemic circulation in active form. Most peptides have poor oral bioavailability due to gastrointestinal protease activity and first-pass hepatic metabolism.",
        "Bioconjugation — The process of attaching a peptide to another molecule (carrier protein, nanoparticle, fluorophore) for research or delivery purposes.",
        "BDNF (Brain-Derived Neurotrophic Factor) — A neurotrophin involved in neuronal growth, plasticity, and survival. Elevated by Selank and Semax; a key endpoint in neuropeptide CNS research.",
        "C-terminus — The end of a peptide chain containing a free carboxyl group (-COOH). Peptide sequences are written N-terminus to C-terminus by convention.",
        "CD36 — A multifunctional scavenger receptor expressed in cardiac tissue, endothelial cells, and macrophages. A binding target for Hexarelin that mediates cardioprotective effects independent of GH release.",
        "Certificate of Analysis (COA) — Documentation from a testing laboratory confirming a compound's identity, purity, and quality metrics. Should include HPLC purity percentage, mass spectrometry confirmation, batch number, endotoxin result, and testing date.",
        "Cyclic Peptide — A peptide in which the N- and C-termini are joined, or side chains are linked, forming a ring structure. Increased enzymatic stability relative to linear peptides; used in some drug development programs.",
      ],
    },
    {
      type: "heading",
      text: "D–G",
    },
    {
      type: "list",
      items: [
        "D-Amino Acid — Non-natural amino acid stereoisomer (mirror image of the standard L-form). Incorporated into synthetic peptides to increase resistance to protease degradation. Ipamorelin, Hexarelin, and GHRP-2 contain D-amino acid residues.",
        "DAC (Drug Affinity Complex) — A chemical modification technology enabling reversible albumin binding. Used in long-acting CJC-1295; extends effective half-life to 6–8 days.",
        "ELISA (Enzyme-Linked Immunosorbent Assay) — A plate-based assay for detecting and quantifying proteins and hormones in biological samples. Standard method for measuring GH, IGF-1, and other research endpoints.",
        "Endotoxin — Lipopolysaccharide (LPS) components of gram-negative bacterial cell walls. Even trace endotoxin contamination in research compounds can trigger inflammatory activation that confounds experimental results. Detected by LAL testing.",
        "Enzymatic Stability — A measure of a peptide's resistance to breakdown by proteases. Enhanced by D-amino acid substitutions, N-terminal acetylation, C-terminal amidation, and cyclization.",
        "First-Pass Metabolism — The reduction in bioavailable compound concentration as it is absorbed from the gut and processed by the liver before reaching systemic circulation. The primary mechanism behind poor oral bioavailability for most peptide compounds.",
        "Fragment — A portion of a larger peptide sequence studied independently. HGH Fragment 176-191 and IGF-1 LR3 are analytically useful fragments/variants of their parent sequences.",
        "GHRH (Growth Hormone-Releasing Hormone) — A hypothalamic neuropeptide that stimulates GH synthesis and secretion from pituitary somatotroph cells. CJC-1295, Sermorelin, and Tesamorelin are synthetic GHRH analogs.",
        "GHS (Growth Hormone Secretagogue) — Any compound that stimulates GH release. Includes GHRH analogs (acting on GHRH-R) and ghrelin mimetics (acting on GHS-R1a). Ipamorelin, Hexarelin, GHRP-2, GHRP-6, and MK-677 are GHSs.",
        "GHS-R1a — The ghrelin receptor; primary target of most GHS peptides. A Gq/11-coupled GPCR expressed in pituitary somatotrophs, hypothalamus, and peripheral tissues including the heart.",
      ],
    },
    {
      type: "heading",
      text: "H–L",
    },
    {
      type: "list",
      items: [
        "Half-Life — The time for plasma concentration of a compound to decrease by 50%. Ranges from ~10 minutes (native GHRH) to ~6 days (CJC-1295/DAC) depending on molecular modifications and clearance mechanisms.",
        "HPLC (High-Performance Liquid Chromatography) — The analytical gold standard for peptide purity measurement. Separates compounds by differential interaction with a stationary phase; purity expressed as the target compound's area percentage of the total chromatogram. Research-grade peptides should meet ≥98–99% HPLC purity.",
        "Hydrophilicity / Hydrophobicity — A peptide's relative affinity for water vs. nonpolar environments. Affects solubility, membrane permeability, and appropriate reconstitution diluent. Hydrophobic peptides may require dilute acetic acid for initial dissolution.",
        "IGF-1 (Insulin-Like Growth Factor-1) — A peptide hormone mediating many of GH's anabolic and metabolic effects. Synthesized primarily in the liver in response to GH stimulation; used as a downstream biomarker of GH axis activity.",
        "In Vitro — Experimental conditions performed outside a living organism (cell culture, isolated tissue, cell-free assay). Lower translational confidence than in vivo; higher mechanistic resolution.",
        "In Vivo — Experimental conditions within a living organism. More physiologically relevant; more variables to control. In vivo data from rodent models is the standard bridge between in vitro mechanism and clinical hypothesis.",
        "LAL Test (Limulus Amebocyte Lysate) — The industry standard for endotoxin detection, using a clotting reaction from horseshoe crab (Limulus polyphemus) blood lysate. Detects LPS at pg/mL concentrations. Essential for any peptide used in cell culture or in vivo models.",
        "LC-MS (Liquid Chromatography-Mass Spectrometry) — Combined analytical technique providing simultaneous purity data (LC) and molecular identity confirmation (MS). More comprehensive than HPLC alone; increasingly considered the minimum standard for research-grade COA documentation.",
        "Lyophilization — Freeze-drying process that removes water from a peptide solution under vacuum and low temperature. Produces a stable lyophilized powder with significantly extended shelf life relative to solution. Standard form for research peptide supply.",
      ],
    },
    {
      type: "heading",
      text: "M–P",
    },
    {
      type: "list",
      items: [
        "Mass Spectrometry (MS) — Analytical technique measuring the mass-to-charge ratio of ionized molecules. Provides highly accurate molecular weight data for peptide identity confirmation. [M+H]+ or [M+Na]+ adducts are commonly reported in COA documentation.",
        "Molecular Weight (MW) — The sum of atomic masses in a peptide molecule, expressed in Daltons (Da) or g/mol. A key identity marker; deviations from expected MW indicate synthesis errors or contamination.",
        "N-terminus — The end of a peptide chain containing a free amino group (-NH₂). Written first in peptide sequences by convention. N-terminal modifications (acetylation, PEGylation) are common strategies for half-life extension.",
        "Peptide — A chain of 2–50 amino acids linked by peptide bonds (amide bonds formed between carboxyl and amino groups). Distinguished from proteins (>50 amino acids) by size — a convention rather than a strict biochemical boundary.",
        "Peptide Bond — The covalent amide bond formed between the carboxyl group (-COOH) of one amino acid and the amino group (-NH₂) of another, releasing water. The fundamental structural linkage in all peptides and proteins.",
        "PEGylation — The covalent attachment of polyethylene glycol (PEG) chains to a peptide. Increases hydrodynamic radius (reducing renal filtration), extends half-life, reduces immunogenicity, and can improve solubility.",
        "Pharmacodynamics (PD) — What a compound does to the body: mechanism of action, receptor binding affinity and selectivity, signal transduction, and biological effect profile.",
        "Pharmacokinetics (PK) — What the body does to a compound: absorption, distribution, metabolism, excretion (ADME). PK/PD integration is fundamental to rational research protocol design.",
        "Pulsatile Release — The physiological pattern of GH secretion in discrete, episodic pulses rather than continuous baseline secretion. GHRH/GHS compounds preserve pulsatility; exogenous GH administration suppresses it. Pulsatile vs. tonic GH has different downstream effects.",
      ],
    },
    {
      type: "heading",
      text: "R–Z",
    },
    {
      type: "list",
      items: [
        "Reconstitution — The process of dissolving a lyophilized peptide in an appropriate diluent to prepare a working solution. Choice of diluent, volume accuracy, and handling technique directly affect compound integrity and dosing validity.",
        "Receptor Desensitization — The reduction in receptor responsiveness following prolonged or repeated ligand exposure. Particularly relevant for Hexarelin (rapid GHS-R1a desensitization compared to Ipamorelin); a primary driver of cycling protocols in GHS research.",
        "Sequence — The linear order of amino acids in a peptide, written N-to-C terminus. Defines the compound's identity. One-letter (AEDG for Epithalon) and three-letter (Ala-Glu-Asp-Gly) notations are both used.",
        "Sirtuin (SIRT) — A family of NAD+-dependent protein deacetylases (SIRT1–7) involved in gene expression regulation, DNA repair, and metabolic control. SIRT1 and SIRT3 are primary longevity research targets.",
        "Solid-Phase Peptide Synthesis (SPPS) — The standard manufacturing method for research peptides. Amino acids are added sequentially to a solid resin support using protected building blocks, then cleaved and purified by HPLC. Synthesis quality determines starting purity.",
        "Solubility — A peptide's capacity to dissolve in a given solvent at a given concentration. Governed by sequence hydrophobicity, charge, and secondary structure tendency. Limits achievable concentration in reconstituted solutions.",
        "Telomerase — The TERT/TERC ribonucleoprotein complex that adds TTAGGG repeats to chromosome ends, counteracting replicative telomere shortening. Silenced in most adult somatic cells; activation is a target of Epithalon research.",
        "Telomere — Repetitive TTAGGG sequences capping chromosome ends in humans. Shorten with each cell division; critically short telomeres trigger senescence or apoptosis. Telomere length is a biomarker of cellular aging.",
        "Tuftsin — A naturally occurring tetrapeptide (Thr-Lys-Pro-Arg) cleaved from the Fc region of immunoglobulin G. Immunomodulatory and phagocytosis-stimulating properties; structural basis and pharmacological precursor to Selank.",
        "Vial — The glass container used for lyophilized or reconstituted peptides. Pharmaceutical-grade borosilicate glass with appropriate stoppers is standard. Amber glass protects light-sensitive sequences. Rubber stopper composition should be verified for compatibility with benzyl alcohol (bacteriostatic water).",
      ],
    },
    {
      type: "callout",
      text: "Quality verification starts at the terminology level. A supplier's COA should include HPLC purity (%), mass spectrometry identity confirmation (observed vs. theoretical MW), LAL endotoxin result, batch number, testing laboratory, and test date. Any missing element warrants a sourcing question before use.",
    },
    {
      type: "disclaimer",
      text: "For research purposes only. Not intended for human use.",
    },
  ],
};
