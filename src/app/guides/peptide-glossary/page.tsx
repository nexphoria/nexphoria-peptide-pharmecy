"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

// ──────────────────────────────────────────────
// TYPES
// ──────────────────────────────────────────────
interface GlossaryTerm {
  term: string;
  abbr?: string;
  category: string;
  definition: string;
  related?: string[];
  seeAlso?: { label: string; href: string }[];
}

// ──────────────────────────────────────────────
// GLOSSARY DATA — 50 terms
// ──────────────────────────────────────────────
const TERMS: GlossaryTerm[] = [
  // A
  {
    term: "Acetylation",
    category: "Chemistry",
    definition:
      "The addition of an acetyl group (CH₃CO−) to the N-terminus of a peptide. N-terminal acetylation protects the peptide from aminopeptidase degradation, increasing in vivo half-life. Snap-8, Thymosin Alpha-1, and BPC-157 all carry natural or synthetic N-terminal acetyl modifications.",
    related: ["Half-Life", "Lyophilization"],
  },
  {
    term: "Acetic Acid Reconstitution",
    category: "Reconstitution",
    definition:
      "Reconstitution solvent used for peptides that are poorly soluble in water alone (e.g., GHK-Cu, certain GHRP peptides). Typically 0.1–1% glacial acetic acid in sterile water. After dissolving with acetic acid, the solution is usually diluted further with BAC water or sterile saline for administration.",
    related: ["BAC Water", "Reconstitution", "Sterile Water"],
    seeAlso: [{ label: "Reconstitution Guide", href: "/guides/reconstitution" }],
  },
  {
    term: "Agonist",
    abbr: "",
    category: "Pharmacology",
    definition:
      "A molecule that binds to a receptor and activates it, producing a biological response. Full agonists produce maximal receptor activation; partial agonists produce a sub-maximal response. For example, ipamorelin is a full agonist at GHSR-1a (growth hormone secretagogue receptor), while MK-677 is also a full GHSR-1a agonist administered orally.",
    related: ["Antagonist", "Receptor", "GHSR-1a"],
  },
  {
    term: "Amino Acid",
    category: "Chemistry",
    definition:
      "The fundamental building blocks of peptides and proteins. Each amino acid consists of a central carbon atom bonded to an amino group (−NH₂), a carboxyl group (−COOH), a hydrogen atom, and a variable side chain (R group) that determines the amino acid's chemical properties. The 20 standard amino acids are linked by peptide bonds to form peptide chains.",
    related: ["Peptide Bond", "Peptide", "Protein"],
  },
  {
    term: "Antagonist",
    category: "Pharmacology",
    definition:
      "A molecule that binds to a receptor without activating it, blocking agonist binding. Competitive antagonists compete with the agonist for the same binding site; non-competitive antagonists bind elsewhere and reduce receptor activity. D-Lys3-GHRP-6 is a widely used GHSR-1a antagonist in peptide research to confirm receptor specificity.",
    related: ["Agonist", "Receptor", "GHSR-1a"],
  },
  {
    term: "ATAC-seq",
    abbr: "Assay for Transposase-Accessible Chromatin with sequencing",
    category: "Methods",
    definition:
      "A genomic technique that maps chromatin accessibility across the genome. Transposase inserts sequencing adaptors into open (accessible) chromatin regions, revealing active regulatory elements. Used in longevity peptide research (e.g., Epitalon telomere studies) to assess epigenetic changes in gene expression following treatment.",
    related: ["Telomere", "Epitalon", "Gene Expression"],
  },
  // B
  {
    term: "BAC Water",
    abbr: "Bacteriostatic Water",
    category: "Reconstitution",
    definition:
      "Sterile water containing 0.9% benzyl alcohol as a bacteriostatic (growth-inhibiting) preservative. The standard solvent for peptide reconstitution because benzyl alcohol prevents bacterial growth in multi-draw vials, extending in-use shelf life to 28 days after opening (when refrigerated). Does not sterilize — it only inhibits growth.",
    related: ["Sterile Water", "Reconstitution", "Benzyl Alcohol"],
    seeAlso: [{ label: "BAC Water Guide", href: "/tools/bac-water-guide" }],
  },
  {
    term: "Benzyl Alcohol",
    category: "Chemistry",
    definition:
      "The bacteriostatic agent in BAC water at 0.9% (w/v) concentration. Benzyl alcohol disrupts bacterial cell membranes and inhibits enzymatic activity at this concentration without being cytotoxic at the volumes used in research. It provides multi-use vial safety for up to 28 days post-reconstitution when stored refrigerated.",
    related: ["BAC Water", "Reconstitution"],
  },
  {
    term: "Bioavailability",
    category: "Pharmacology",
    definition:
      "The fraction of an administered dose that reaches the systemic circulation in an unchanged, active form. IV administration = 100% bioavailability by definition. SC (subcutaneous) peptide bioavailability typically ranges from 60–90%. Oral bioavailability for most peptides is near zero due to GI proteolysis — exceptions include MK-677 (oral GHSR agonist, ~7% bioavailability) and oral semaglutide (SNAC-formulated, ~1% bioavailability).",
    related: ["Half-Life", "Pharmacokinetics", "Route of Administration"],
  },
  {
    term: "Blood-Brain Barrier",
    abbr: "BBB",
    category: "Pharmacology",
    definition:
      "A selective semipermeable membrane formed by brain capillary endothelial cells with tight junctions that restricts the passage of substances from the bloodstream into the brain. Most peptides cannot cross the BBB passively due to their size and hydrophilicity. Exceptions include Semax, Selank, and DSIP, which use carrier-mediated transport; intranasal delivery bypasses the BBB via olfactory/trigeminal pathways.",
    related: ["Intranasal Delivery", "Semax", "Selank"],
  },
  // C
  {
    term: "CAS Number",
    abbr: "Chemical Abstracts Service Registry Number",
    category: "Chemistry",
    definition:
      "A unique numerical identifier assigned to every chemical substance by the Chemical Abstracts Service. CAS numbers provide an unambiguous way to identify chemical compounds regardless of naming conventions. For example, BPC-157 is CAS 137525-51-0. CAS numbers appear on Certificates of Analysis (COAs) for identity verification.",
    related: ["COA", "Identity Testing", "Purity"],
  },
  {
    term: "Certificate of Analysis",
    abbr: "COA",
    category: "Quality Control",
    definition:
      "A document issued by a testing laboratory (typically independent third-party) certifying the identity, purity, and quality of a compound. A legitimate peptide COA includes: compound name + CAS number, batch/lot number, test date, HPLC chromatogram + purity percentage, mass spectrometry confirmation, moisture/water content (Karl Fischer), appearance, and authorized signatory. Nexphoria provides COAs for all products.",
    related: ["HPLC", "Mass Spectrometry", "Purity", "LOT Number"],
    seeAlso: [{ label: "View Sample COA", href: "/coa/bpc-157" }],
  },
  {
    term: "Cold-Chain Shipping",
    category: "Logistics",
    definition:
      "A temperature-controlled logistics process that maintains peptide stability throughout the shipping journey. Lyophilized (freeze-dried) peptides are generally stable at room temperature for transit periods of 1–2 weeks, but cold-chain packing (ice packs, insulated containers) prevents degradation from heat exposure. Reconstituted peptides must be kept refrigerated and are not suitable for shipping. Nexphoria ships all orders with cold packs.",
    related: ["Lyophilization", "Storage", "Stability"],
  },
  {
    term: "Concentration",
    category: "Reconstitution",
    definition:
      "The amount of a substance (solute) dissolved in a given volume of solvent. In peptide research, concentration is expressed as micrograms per milliliter (mcg/mL) or milligrams per milliliter (mg/mL). Standard research concentrations: BPC-157 at 500 mcg/mL, semaglutide at 1 mg/mL, ipamorelin at 2 mg/mL. Concentration directly determines the injection volume needed per dose.",
    related: ["Reconstitution", "Dose Volume", "BAC Water"],
    seeAlso: [{ label: "Reconstitution Calculator", href: "/tools/reconstitution-calculator" }],
  },
  // D
  {
    term: "DEXA Scan",
    abbr: "Dual-Energy X-ray Absorptiometry",
    category: "Methods",
    definition:
      "A low-dose X-ray imaging technique that measures bone mineral density and body composition (lean mass vs. fat mass). A gold-standard endpoint in GH secretagogue research (sermorelin, ipamorelin, MK-677) for documenting changes in muscle mass, fat mass, and bone density over experimental protocols. Also used in GLP-1 and tirzepatide rodent studies to track visceral vs subcutaneous fat changes.",
    related: ["Body Composition", "MK-677", "Tirzepatide"],
  },
  {
    term: "DIO Model",
    abbr: "Diet-Induced Obesity",
    category: "Methods",
    definition:
      "A standard preclinical rodent model where C57BL/6J mice (or Sprague-Dawley rats) are fed a high-fat diet (60% kcal from fat) for 8–16 weeks to induce obesity and metabolic syndrome. Used extensively in GLP-1 agonist, tirzepatide, retatrutide, and MOTS-c research to evaluate weight loss, insulin resistance, and glucose metabolism improvements.",
    related: ["C57BL/6J", "Pair-Fed Control", "Glucose Tolerance Test"],
  },
  {
    term: "Disulfide Bridge",
    category: "Chemistry",
    definition:
      "A covalent bond formed between the sulfur atoms of two cysteine residues. Disulfide bridges stabilize peptide three-dimensional structure and confer protease resistance. AOD-9604 contains a disulfide bridge essential for its lipolytic activity. Breaking disulfide bridges (via reducing agents like DTT) can destroy peptide activity — avoid DMSO and strong reducing environments.",
    related: ["Cysteine", "AOD-9604", "Stability"],
  },
  {
    term: "DPP-4",
    abbr: "Dipeptidyl Peptidase-4",
    category: "Pharmacology",
    definition:
      "A serine protease enzyme that cleaves N-terminal dipeptides from substrates with proline or alanine at the penultimate position. DPP-4 rapidly degrades native GLP-1 (half-life ~2 min) and native GIP. GLP-1 receptor agonists like semaglutide and tirzepatide are engineered to be DPP-4 resistant. Similarly, tesamorelin's trans-3-hexenoic acid modification blocks DPP-4 cleavage of the N-terminal Tyr-Ala.",
    related: ["GLP-1", "Semaglutide", "Tesamorelin", "Half-Life"],
  },
  // E
  {
    term: "Endotoxin",
    category: "Quality Control",
    definition:
      "Lipopolysaccharide (LPS) fragments from gram-negative bacterial cell walls. A major quality concern in injectable research compounds — endotoxins can cause severe inflammatory responses (fever, septic shock) at nanogram quantities. The LAL (Limulus Amebocyte Lysate) test is the gold standard for endotoxin quantification. Research-grade peptides should specify endotoxin levels <1 EU/mg.",
    related: ["LAL Test", "COA", "Quality Control"],
  },
  {
    term: "Epigenetics",
    category: "Biology",
    definition:
      "Heritable changes in gene expression that do not involve alterations to the DNA sequence itself. Epigenetic mechanisms include DNA methylation, histone modification, and chromatin remodeling. Epitalon and GHK-Cu exert some effects via epigenetic pathways — Epitalon activates telomerase via TERT promoter epigenetic changes; GHK-Cu modulates expression of 32% of human genes via chromatin accessibility.",
    related: ["Telomere", "GHK-Cu", "Epitalon", "ATAC-seq"],
  },
  // F
  {
    term: "Freeze-Thaw Cycle",
    category: "Storage",
    definition:
      "A single cycle of freezing and thawing a reconstituted peptide solution. Each freeze-thaw cycle causes ice crystal formation that can disrupt peptide structure, reduce activity, and promote aggregation. Most reconstituted peptides tolerate 3 freeze-thaw cycles; beyond this, noticeable degradation occurs. Best practice: aliquot into single-use fractions before first freeze.",
    related: ["Storage", "Stability", "Aliquoting"],
    seeAlso: [{ label: "Storage Guide", href: "/guides/storage" }],
  },
  // G
  {
    term: "Gene Expression",
    category: "Biology",
    definition:
      "The process by which information encoded in a gene is used to synthesize a functional product (mRNA → protein). Research peptides modulate gene expression through receptor-activated transcription factors. GHK-Cu has been shown to up- or downregulate over 4,000 human genes. Gene expression endpoints are measured via qRT-PCR, RNA-seq, or microarray analysis.",
    related: ["GHK-Cu", "BDNF", "Transcription Factor"],
  },
  {
    term: "GHSR-1a",
    abbr: "Growth Hormone Secretagogue Receptor 1a",
    category: "Pharmacology",
    definition:
      "The primary receptor for ghrelin and synthetic GH secretagogues (GHRPs). A class A GPCR (Gq protein-coupled) expressed in pituitary somatotrophs, hypothalamus, and peripheral tissues. GHSR-1a activation stimulates GH release, appetite (via NPY/AgRP neurons), and has cardiovascular effects. Targeted by ipamorelin, GHRP-2, GHRP-6, MK-677, and hexarelin.",
    related: ["GHRP", "Ipamorelin", "MK-677", "Ghrelin"],
  },
  {
    term: "GLP-1R",
    abbr: "Glucagon-Like Peptide-1 Receptor",
    category: "Pharmacology",
    definition:
      "A class B1 GPCR activated by GLP-1, a 30-amino acid incretin hormone secreted from intestinal L-cells in response to food intake. GLP-1R activation stimulates insulin secretion (glucose-dependent), suppresses glucagon, slows gastric emptying, and promotes satiety via CNS circuits. Targeted by semaglutide, liraglutide, tirzepatide, and retatrutide.",
    related: ["GLP-1", "Semaglutide", "Tirzepatide", "Incretin"],
    seeAlso: [{ label: "GLP-1 Research Landscape", href: "/blog/glp1-receptor-agonists-complete-research-landscape" }],
  },
  {
    term: "Glucose Tolerance Test",
    abbr: "GTT / OGTT / IPGTT",
    category: "Methods",
    definition:
      "A metabolic test measuring blood glucose clearance following a glucose load. In rodent research: intraperitoneal glucose tolerance test (IPGTT) — mice are fasted 6 hours, then receive IP glucose (1–2 g/kg). Blood glucose is measured at 0, 15, 30, 60, 90, 120 minutes. Area under the curve (AUC) quantifies insulin resistance. Standard endpoint in GLP-1, tirzepatide, MOTS-c, and metabolic peptide studies.",
    related: ["DIO Model", "Insulin Resistance", "AUC"],
  },
  {
    term: "GPCR",
    abbr: "G Protein-Coupled Receptor",
    category: "Pharmacology",
    definition:
      "The largest family of cell surface receptors (~800 in humans). GPCRs have a characteristic 7-transmembrane helix structure and signal through intracellular G proteins (Gs, Gi, Gq). Virtually all peptide receptors are GPCRs: GHSR-1a (Gq), GLP-1R (Gs), GHRHr (Gs), GnRHr (Gq), MC1R/MC4R (Gs). Downstream signaling cascades include cAMP, IP3/DAG, and MAPK pathways.",
    related: ["cAMP", "Receptor", "Second Messenger"],
  },
  // H
  {
    term: "Half-Life",
    abbr: "t₁/₂",
    category: "Pharmacokinetics",
    definition:
      "The time required for the plasma concentration of a compound to decrease by 50%. A compound's biological half-life determines dosing frequency: compounds with short half-lives (e.g., BPC-157 ~4h, GHRP-2 ~15 min) require more frequent dosing than long-acting analogs (semaglutide ~7 days, CJC-1295 with DAC ~8 days). Half-life is influenced by receptor binding, plasma protein binding, and enzymatic degradation.",
    related: ["Pharmacokinetics", "Dosing Frequency", "DPP-4"],
    seeAlso: [{ label: "Half-Life Calculator", href: "/tools/half-life-calculator" }],
  },
  {
    term: "HPLC",
    abbr: "High-Performance Liquid Chromatography",
    category: "Quality Control",
    definition:
      "The gold standard analytical method for determining peptide purity. A sample is injected into a mobile phase that flows through a stationary phase column; compounds elute at characteristic retention times based on hydrophobicity. Purity is calculated as the percentage area of the target compound peak relative to total peak area. Research-grade peptides should show ≥98% purity by HPLC (reverse-phase C18 column, UV detection at 215 or 220 nm).",
    related: ["COA", "Purity", "Mass Spectrometry"],
    seeAlso: [{ label: "Purity Checker", href: "/tools/purity-checker" }],
  },
  {
    term: "Hygroscopic",
    category: "Chemistry",
    definition:
      "A substance that readily absorbs water from the surrounding atmosphere. Many lyophilized peptides are hygroscopic — exposure to humid air causes clumping, reduces shelf life, and can compromise purity. Hygroscopic peptides should be warmed to room temperature before opening the vial to prevent moisture condensation, then re-capped and stored immediately after use.",
    related: ["Lyophilization", "Storage", "Stability"],
  },
  // I
  {
    term: "IGF-1",
    abbr: "Insulin-Like Growth Factor 1",
    category: "Biology",
    definition:
      "A primary mediator of GH effects, produced mainly by the liver in response to GH stimulation. IGF-1 promotes protein synthesis, muscle hypertrophy, bone growth, and lipolysis. Serum IGF-1 is the standard biomarker used to measure GH axis activity in GH secretagogue research. Published reference ranges: males 115–355 ng/mL; females 94–329 ng/mL (age-dependent decline).",
    related: ["GH Axis", "Sermorelin", "MK-677", "CJC-1295"],
  },
  {
    term: "Intranasal Delivery",
    category: "Pharmacology",
    definition:
      "Administration of a compound via the nasal mucosa. Peptides can cross into the CNS via olfactory epithelium → olfactory bulb (olfactory route) or trigeminal nerve pathways, bypassing the blood-brain barrier. Used for nootropic and neuropeptide research compounds: Semax, Selank, PT-141, oxytocin, DSIP. Typical intranasal volume: 50–200 µL per nostril.",
    related: ["Blood-Brain Barrier", "Semax", "Selank", "PT-141"],
  },
  // K
  {
    term: "Karl Fischer Test",
    abbr: "KF",
    category: "Quality Control",
    definition:
      "A precise titration method for determining water (moisture) content in a sample. For lyophilized peptides, moisture content should be <5% to ensure stability and accurate mass measurements. High moisture can cause premature degradation, clumping, and inaccurate dosing calculations. Karl Fischer water content results appear on quality COAs.",
    related: ["COA", "Lyophilization", "Stability"],
  },
  // L
  {
    term: "LAL Test",
    abbr: "Limulus Amebocyte Lysate",
    category: "Quality Control",
    definition:
      "The gold-standard test for detecting endotoxin (bacterial LPS) contamination in pharmaceutical and research compounds. The test uses lysate from horseshoe crab (Limulus polyphemus) blood cells, which clot in the presence of endotoxins. Research-grade injectable compounds should have endotoxin levels <1 EU/mg or <0.1 EU/mL.",
    related: ["Endotoxin", "COA", "Quality Control"],
  },
  {
    term: "Lot Number",
    abbr: "Batch Number",
    category: "Quality Control",
    definition:
      "A unique alphanumeric identifier assigned to a specific manufacturing batch of a compound. All vials from the same manufacturing run share the same lot number. The lot number links a product to its Certificate of Analysis, stability data, and quality control records. Critical for traceability — always record lot numbers in research logs.",
    related: ["COA", "Traceability"],
  },
  {
    term: "Lyophilization",
    abbr: "Freeze-Drying",
    category: "Chemistry",
    definition:
      "A preservation process that removes water from a product by first freezing it, then reducing pressure to allow the frozen water to sublimate (convert directly from ice to vapor) — bypassing the liquid phase. Lyophilized peptides are white or off-white powders. Lyophilization prevents hydrolytic degradation, maintains biological activity, and extends shelf life to 2–5 years when stored properly (−20°C, desiccated, light-protected).",
    related: ["Stability", "Reconstitution", "Storage"],
  },
  // M
  {
    term: "Mass Spectrometry",
    abbr: "MS / LC-MS",
    category: "Quality Control",
    definition:
      "An analytical technique that measures the mass-to-charge ratio (m/z) of ions to identify compound identity and molecular weight. LC-MS (liquid chromatography–mass spectrometry) is used to confirm peptide identity on COAs — the measured molecular weight must match the theoretical MW within ±0.5 Da (for small peptides) or ±0.01% (for larger peptides). ESI (electrospray ionization) is the standard ionization method for peptides.",
    related: ["COA", "HPLC", "Molecular Weight"],
  },
  {
    term: "Melanocortin Receptor",
    abbr: "MCR",
    category: "Pharmacology",
    definition:
      "A family of 5 GPCRs (MC1R–MC5R) that bind melanocyte-stimulating hormones (α-MSH, β-MSH, γ-MSH), ACTH, and synthetic ligands. MC1R: skin pigmentation, anti-inflammatory; MC2R: adrenal cortex steroidogenesis (ACTH receptor); MC3R: energy homeostasis; MC4R: appetite suppression and sexual arousal (target of PT-141); MC5R: exocrine gland secretion. KPV binds MC1R/MC3R without MC2R/MC4R.",
    related: ["PT-141", "KPV", "α-MSH", "ACTH"],
  },
  {
    term: "Molecular Weight",
    abbr: "MW / Da",
    category: "Chemistry",
    definition:
      "The mass of a molecule expressed in Daltons (Da) or unified atomic mass units (u), calculated as the sum of all atomic masses. For peptides, molecular weight scales approximately with the number of amino acids (~110 Da/residue average). MW is used to: (1) confirm identity via mass spectrometry; (2) convert between molar (nmol/L) and mass-based (ng/mL) concentration units; (3) calculate reconstitution volumes. Appears on every COA.",
    related: ["CAS Number", "Mass Spectrometry", "Molar Concentration"],
    seeAlso: [{ label: "Unit Converter", href: "/tools/unit-converter" }],
  },
  // N
  {
    term: "NF-κB",
    abbr: "Nuclear Factor kappa-light-chain-enhancer of activated B cells",
    category: "Biology",
    definition:
      "A master transcription factor complex that regulates pro-inflammatory gene expression (TNF-α, IL-6, IL-1β, COX-2, iNOS). NF-κB is normally sequestered in the cytoplasm bound to IκB inhibitors; upon inflammatory stimulation, IKK phosphorylates IκBα, releasing p65/p50 dimers to translocate into the nucleus. KPV, BPC-157, and LL-37 exert anti-inflammatory effects partly through NF-κB pathway inhibition.",
    related: ["Cytokine", "Anti-Inflammatory", "KPV", "BPC-157"],
  },
  // P
  {
    term: "Pair-Fed Control",
    category: "Methods",
    definition:
      "A control group in animal studies where control animals are given the same amount of food consumed by the treatment group, rather than ad libitum access. This separates the direct effects of a compound from caloric restriction effects. Essential in GLP-1 agonist research (semaglutide, tirzepatide, retatrutide) where anorexia is a primary mechanism — pair-fed controls show that drug effects exceed those from reduced food intake alone.",
    related: ["DIO Model", "GLP-1R", "Research Design"],
  },
  {
    term: "Peptide",
    category: "Chemistry",
    definition:
      "A short chain of amino acids linked by peptide bonds. By convention: 2–50 amino acids = peptide; 51–100+ amino acids = polypeptide; >100 amino acids = protein (though boundaries overlap). Research peptides are typically 3–44 amino acids. They act as hormones, neurotransmitters, and signaling molecules with high receptor selectivity and, in their natural forms, short half-lives due to protease degradation.",
    related: ["Amino Acid", "Peptide Bond", "Protein"],
  },
  {
    term: "Peptide Bond",
    category: "Chemistry",
    definition:
      "A covalent amide bond (−CO−NH−) formed between the carboxyl group of one amino acid and the amino group of the next, with loss of a water molecule (condensation reaction). The planar, partial double bond character of the peptide bond restricts rotation, influencing protein folding and secondary structure formation. Peptide bonds are hydrolytically cleaved by proteases (enzymes that degrade peptides).",
    related: ["Amino Acid", "Peptide", "Protease"],
  },
  {
    term: "Pharmacokinetics",
    abbr: "PK",
    category: "Pharmacology",
    definition:
      "The quantitative study of how the body processes a drug: Absorption, Distribution, Metabolism, and Excretion (ADME). Key PK parameters for research peptides include: Cmax (peak concentration), Tmax (time to peak), half-life (t₁/₂), volume of distribution (Vd), and area under the concentration-time curve (AUC). PK data guides dosing interval selection and route of administration choice.",
    related: ["Half-Life", "Bioavailability", "AUC", "Cmax"],
    seeAlso: [{ label: "Dosing Frequency Planner", href: "/tools/dosing-frequency-planner" }],
  },
  {
    term: "Protease",
    category: "Biology",
    definition:
      "An enzyme that cleaves peptide bonds, degrading peptides and proteins. The primary obstacle to peptide bioavailability: serum proteases (dipeptidyl peptidase, aminopeptidases, endopeptidases) rapidly degrade most unmodified peptides. Strategies to improve protease resistance include: D-amino acid substitution (Selank's D-Pro), N-terminal acetylation, C-terminal amidation, fatty acid conjugation (semaglutide, tesamorelin), and cyclization.",
    related: ["Half-Life", "D-Amino Acid", "DPP-4"],
  },
  {
    term: "Purity",
    category: "Quality Control",
    definition:
      "The percentage of the target compound in a sample relative to all components detected. Measured by HPLC (UV peak area %). Research-grade peptides: ≥98% purity. Pharmaceutical-grade: ≥99%. Common impurities in synthetic peptides include deletion sequences (peptides missing one or more amino acids), oxidation products, and deamidation products. Always verify purity on the COA before designing experiments — impurities can confound results.",
    related: ["HPLC", "COA", "Impurity"],
    seeAlso: [{ label: "Purity Checker", href: "/tools/purity-checker" }],
  },
  // R
  {
    term: "Receptor",
    category: "Pharmacology",
    definition:
      "A protein (typically cell surface or intracellular) that binds a specific ligand (hormone, neurotransmitter, drug) and transduces that binding event into a cellular response via second messenger signaling. Peptide receptors are predominantly GPCRs or receptor tyrosine kinases. Receptor density, distribution, and coupling efficiency determine tissue-specific effects.",
    related: ["GPCR", "Agonist", "Antagonist", "Second Messenger"],
  },
  {
    term: "Reconstitution",
    category: "Reconstitution",
    definition:
      "The process of dissolving a lyophilized peptide powder into a liquid solvent for use. Standard protocol: (1) Allow vial to reach room temperature; (2) inject solvent (BAC water or sterile water) slowly down the vial wall — never directly onto the peptide cake; (3) swirl gently, do NOT vortex; (4) allow 1–5 min to fully dissolve; (5) inspect visually for clarity; (6) label vial with date, compound, concentration, and lot number.",
    related: ["BAC Water", "Lyophilization", "Concentration"],
    seeAlso: [
      { label: "Reconstitution Guide", href: "/guides/reconstitution" },
      { label: "Reconstitution Calculator", href: "/tools/reconstitution-calculator" },
    ],
  },
  {
    term: "Route of Administration",
    abbr: "ROA",
    category: "Pharmacology",
    definition:
      "The pathway by which a compound enters the body. Common routes in peptide research: SC (subcutaneous) — most common for research peptides, ~80–90% bioavailability; IP (intraperitoneal) — common in rodent studies, fast absorption; IV (intravenous) — 100% bioavailability, fastest onset; IM (intramuscular) — similar to SC; intranasal — for CNS-targeted peptides; oral — rare for peptides due to GI degradation (exceptions: MK-677, oral semaglutide).",
    related: ["Bioavailability", "Pharmacokinetics", "SC", "IP"],
  },
  // S
  {
    term: "Second Messenger",
    category: "Biology",
    definition:
      "Intracellular signaling molecules generated in response to receptor activation. Key second messengers in peptide signaling: cAMP (from Gs-coupled receptors like GLP-1R, GHRHr) activates PKA; IP3/DAG (from Gq-coupled receptors like GHSR-1a, GnRHr) activates PKC and releases intracellular calcium; cGMP (from natriuretic peptide receptors) activates PKG.",
    related: ["GPCR", "cAMP", "PKA", "PKC"],
  },
  {
    term: "Somatostatin",
    category: "Biology",
    definition:
      "An inhibitory neuropeptide secreted by hypothalamic neurons and pancreatic delta cells that suppresses GH release from the pituitary. Somatostatin is the physiological brake on the GH axis. In GH secretagogue research, elevated somatostatin tone (from chronic stimulation or stress) reduces responsiveness to GHRH analogs and GHRPs — the cause of tachyphylaxis. GHRP/GHRH combination therapy reduces somatostatin tone via synergistic mechanisms.",
    related: ["GH Axis", "Tachyphylaxis", "GHRH", "Ipamorelin"],
  },
  {
    term: "Stability",
    category: "Chemistry",
    definition:
      "The ability of a peptide to maintain its chemical structure, purity, and biological activity over time under defined conditions. Factors affecting stability: temperature (higher temp = faster degradation), moisture (hydrolysis), light (photooxidation), pH (acid/base hydrolysis), and oxidation (Met, Cys, Trp residues most susceptible). Lyophilized stability (2–5 years at −20°C) far exceeds reconstituted stability (typically 14–30 days refrigerated, 3–6 months frozen).",
    related: ["Lyophilization", "Storage", "Half-Life", "Freeze-Thaw Cycle"],
    seeAlso: [{ label: "Storage Guide", href: "/guides/storage" }],
  },
  {
    term: "Sterile Water",
    abbr: "WFI",
    category: "Reconstitution",
    definition:
      "Water for Injection — purified, pyrogen-free sterile water with no preservatives. Unlike BAC water, sterile water lacks a bacteriostatic agent, making it suitable for single-use reconstitution only (use the entire vial or discard within 24 hours). Sterile water is preferred for single-dose protocols and for peptides sensitive to benzyl alcohol.",
    related: ["BAC Water", "Reconstitution", "Single-Use"],
  },
  // T
  {
    term: "Tachyphylaxis",
    category: "Pharmacology",
    definition:
      "A rapid decrease in drug response following repeated or continuous dosing. In peptide research, most commonly observed with GHRPs: continuous GHRP-2 or hexarelin administration causes GHSR-1a receptor downregulation and reduced GH release over 4–8 weeks. Mitigation strategies: cycling (5 days on / 2 days off), pulsatile administration (mimicking physiological GH pulses), and GHRP/GHRH combination (reduces somatostatin tone, partially restoring sensitivity).",
    related: ["GHSR-1a", "GHRP", "Receptor Downregulation"],
  },
  {
    term: "Telomere",
    category: "Biology",
    definition:
      "Repetitive TTAGGG DNA sequences capping the ends of chromosomes, protecting them from degradation and end-joining events. Telomeres shorten with each cell division — a molecular clock for cellular aging. Critically shortened telomeres trigger senescence or apoptosis. Telomerase (TERT + TERC) extends telomeres in stem cells and germ cells. Epitalon is the primary research peptide studied for telomerase activation.",
    related: ["Telomerase", "Epitalon", "Cellular Aging", "TERT"],
    seeAlso: [{ label: "Epitalon Research Review", href: "/blog/epithalon-telomere-peptide" }],
  },
  {
    term: "TERT",
    abbr: "Telomerase Reverse Transcriptase",
    category: "Biology",
    definition:
      "The catalytic subunit of the telomerase enzyme complex. TERT uses the RNA template component TERC to synthesize telomeric DNA repeats onto chromosome ends. TERT expression is low or absent in most somatic cells (allowing telomere shortening with age) but is active in stem cells and cancer cells. Epitalon research focuses on TERT activation — Khavinson 2003 demonstrated a 2.4× increase in TERT activity in human somatic cells in vitro.",
    related: ["Telomere", "Epitalon", "Telomerase"],
  },
  // V
  {
    term: "Vortexing",
    category: "Reconstitution",
    definition:
      "A mixing technique that creates a rapid spinning motion in a liquid using a vortex mixer. Vortexing is CONTRAINDICATED for peptide reconstitution — the shear forces and air-liquid interface created by vortex mixing cause peptide aggregation and denaturation. Always dissolve peptides by gentle swirling or slow inversion. Frothy or cloudy peptide solutions may indicate aggregation from excessive agitation.",
    related: ["Reconstitution", "Aggregation", "Peptide"],
  },
];

// ──────────────────────────────────────────────
// CATEGORIES + COLORS
// ──────────────────────────────────────────────
const CATEGORY_COLORS: Record<string, string> = {
  Chemistry: "bg-blue-900/40 text-blue-300 border border-blue-700/40",
  Pharmacology: "bg-purple-900/40 text-purple-300 border border-purple-700/40",
  "Quality Control": "bg-green-900/40 text-green-300 border border-green-700/40",
  Reconstitution: "bg-amber-900/40 text-amber-300 border border-amber-700/40",
  Biology: "bg-teal-900/40 text-teal-300 border border-teal-700/40",
  Methods: "bg-rose-900/40 text-rose-300 border border-rose-700/40",
  Storage: "bg-orange-900/40 text-orange-300 border border-orange-700/40",
  Pharmacokinetics: "bg-indigo-900/40 text-indigo-300 border border-indigo-700/40",
  Logistics: "bg-zinc-700/60 text-zinc-300 border border-zinc-600/40",
};

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// ──────────────────────────────────────────────
// COMPONENT
// ──────────────────────────────────────────────
export default function PeptideGlossaryPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const categories = useMemo(() => {
    const cats = Array.from(new Set(TERMS.map((t) => t.category))).sort();
    return ["All", ...cats];
  }, []);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return TERMS.filter((t) => {
      const matchSearch =
        !q ||
        t.term.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q) ||
        (t.abbr?.toLowerCase().includes(q) ?? false) ||
        t.category.toLowerCase().includes(q);
      const matchCategory = activeCategory === "All" || t.category === activeCategory;
      return matchSearch && matchCategory;
    }).sort((a, b) => a.term.localeCompare(b.term));
  }, [search, activeCategory]);

  // Group by first letter
  const grouped = useMemo(() => {
    const g: Record<string, GlossaryTerm[]> = {};
    for (const t of filtered) {
      const letter = t.term[0].toUpperCase();
      if (!g[letter]) g[letter] = [];
      g[letter].push(t);
    }
    return g;
  }, [filtered]);

  const presentLetters = useMemo(() => Object.keys(grouped).sort(), [grouped]);

  function scrollToLetter(letter: string) {
    const el = sectionRefs.current[letter];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  // Related term scroll
  function scrollToTerm(termName: string) {
    const el = document.getElementById(`term-${termName.toLowerCase().replace(/\s+/g, "-")}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.classList.add("ring-2", "ring-[#d4af37]");
      setTimeout(() => el.classList.remove("ring-2", "ring-[#d4af37]"), 2000);
    }
  }

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#0f0f0d" }}>
      {/* Hero */}
      <section
        className="relative border-b border-white/10"
        style={{ background: "linear-gradient(160deg, #141410 0%, #0f0f0d 60%)" }}
      >
        <div className="max-w-5xl mx-auto px-4 pt-10 pb-12">
          <Breadcrumb
            variant="dark"
            items={[
              { label: "Home", href: "/" },
              { label: "Guides", href: "/guides/storage" },
              { label: "Peptide Glossary" },
            ]}
            className="mb-6"
          />
          <div className="flex items-center gap-3 mb-3">
            <span
              className="text-xs font-semibold tracking-[0.18em] uppercase px-3 py-1 rounded-full border"
              style={{
                color: "#d4af37",
                borderColor: "rgba(212,175,55,0.3)",
                backgroundColor: "rgba(212,175,55,0.07)",
              }}
            >
              Reference Guide
            </span>
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4"
          >
            Peptide Research Glossary
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mb-8">
            {TERMS.length} research terms covering chemistry, pharmacology, quality control,
            reconstitution, and experimental methods. Alphabetically indexed with cross-references.
          </p>

          {/* Stats strip */}
          <div className="flex flex-wrap gap-4 mb-8">
            {[
              { label: "Terms", value: TERMS.length },
              { label: "Categories", value: categories.length - 1 },
              { label: "Cross-References", value: TERMS.filter((t) => t.related && t.related.length > 0).length },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10"
                style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
              >
                <span className="text-2xl font-bold" style={{ color: "#d4af37" }}>
                  {value}
                </span>
                <span className="text-white/50 text-sm">{label}</span>
              </div>
            ))}
          </div>

          {/* Search */}
          <div className="relative max-w-xl">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search terms, abbreviations, categories…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/15 rounded-xl pl-10 pr-10 py-3 text-white placeholder-white/30 text-sm outline-none transition-all"
              style={{ caretColor: "#d4af37" }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(212,175,55,0.5)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")}
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/70 transition-colors"
                aria-label="Clear search"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar: category filter + A–Z nav */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="lg:sticky lg:top-6 space-y-6">
              {/* Category filter */}
              <div>
                <p className="text-xs font-semibold tracking-[0.14em] uppercase text-white/40 mb-3">
                  Category
                </p>
                <div className="flex flex-col gap-1">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`text-left text-sm px-3 py-1.5 rounded-lg transition-colors ${
                        activeCategory === cat
                          ? "text-white font-semibold"
                          : "text-white/50 hover:text-white/80"
                      }`}
                      style={
                        activeCategory === cat
                          ? { backgroundColor: "rgba(212,175,55,0.12)", color: "#d4af37" }
                          : {}
                      }
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* A–Z index */}
              <div>
                <p className="text-xs font-semibold tracking-[0.14em] uppercase text-white/40 mb-3">
                  Jump To
                </p>
                <div className="flex flex-wrap gap-1">
                  {ALPHABET.map((letter) => {
                    const active = presentLetters.includes(letter);
                    return (
                      <button
                        key={letter}
                        onClick={() => active && scrollToLetter(letter)}
                        disabled={!active}
                        className={`w-7 h-7 rounded text-xs font-mono font-bold transition-colors ${
                          active
                            ? "hover:bg-white/10 text-white/70"
                            : "text-white/20 cursor-default"
                        }`}
                      >
                        {letter}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </aside>

          {/* Main glossary */}
          <div className="flex-1 min-w-0">
            {presentLetters.length === 0 ? (
              <div className="text-center py-20 text-white/40">
                <svg className="mx-auto mb-4 opacity-30" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
                <p className="text-lg font-medium text-white/50">No terms match your search.</p>
                <button
                  onClick={() => { setSearch(""); setActiveCategory("All"); }}
                  className="mt-4 text-sm underline"
                  style={{ color: "#d4af37" }}
                >
                  Clear filters
                </button>
              </div>
            ) : (
              presentLetters.map((letter) => (
                <section
                  key={letter}
                  ref={(el) => { sectionRefs.current[letter] = el; }}
                  id={`letter-${letter}`}
                  className="mb-10"
                >
                  {/* Letter heading */}
                  <div
                    className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10"
                  >
                    <span
                      className="text-3xl font-bold tracking-tight"
                      style={{ color: "#d4af37" }}
                    >
                      {letter}
                    </span>
                    <span className="text-white/25 text-sm">
                      {grouped[letter].length} {grouped[letter].length === 1 ? "term" : "terms"}
                    </span>
                  </div>

                  {/* Terms */}
                  <div className="space-y-4">
                    {grouped[letter].map((t) => (
                      <div
                        key={t.term}
                        id={`term-${t.term.toLowerCase().replace(/\s+/g, "-")}`}
                        className="rounded-xl border border-white/8 p-5 transition-colors scroll-mt-6"
                        style={{ backgroundColor: "rgba(255,255,255,0.025)" }}
                      >
                        {/* Term header */}
                        <div className="flex items-start justify-between gap-3 flex-wrap mb-2">
                          <div>
                            <h2 className="text-white font-semibold text-lg leading-tight">
                              {t.term}
                            </h2>
                            {t.abbr && (
                              <p className="text-white/40 text-xs mt-0.5">{t.abbr}</p>
                            )}
                          </div>
                          <span
                            className={`text-xs px-2.5 py-1 rounded-full font-medium flex-shrink-0 ${
                              CATEGORY_COLORS[t.category] || "bg-zinc-800 text-zinc-300 border border-zinc-700"
                            }`}
                          >
                            {t.category}
                          </span>
                        </div>

                        {/* Definition */}
                        <p className="text-white/65 text-sm leading-relaxed mb-3">
                          {t.definition}
                        </p>

                        {/* Related terms + see also */}
                        {((t.related && t.related.length > 0) || (t.seeAlso && t.seeAlso.length > 0)) && (
                          <div className="flex flex-wrap gap-2 pt-2 border-t border-white/8">
                            {t.related && t.related.length > 0 && (
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <span className="text-white/30 text-xs">See also:</span>
                                {t.related.map((r) => (
                                  <button
                                    key={r}
                                    onClick={() => scrollToTerm(r)}
                                    className="text-xs px-2 py-0.5 rounded border border-white/15 text-white/50 hover:text-white/80 hover:border-white/30 transition-colors"
                                  >
                                    {r}
                                  </button>
                                ))}
                              </div>
                            )}
                            {t.seeAlso && t.seeAlso.length > 0 && (
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <span className="text-white/30 text-xs">Resources:</span>
                                {t.seeAlso.map((s) => (
                                  <Link
                                    key={s.href}
                                    href={s.href}
                                    className="text-xs px-2 py-0.5 rounded border transition-colors"
                                    style={{ color: "#d4af37", borderColor: "rgba(212,175,55,0.3)", backgroundColor: "rgba(212,175,55,0.05)" }}
                                  >
                                    {s.label} →
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              ))
            )}
          </div>
        </div>
      </div>

      {/* CTA strip */}
      <section className="border-t border-white/10 py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-white/40 text-xs tracking-wide uppercase mb-4">Research Use Only</p>
          <h2 className="text-2xl font-bold text-white mb-2">Ready to start your research protocol?</h2>
          <p className="text-white/50 text-sm mb-6 max-w-lg mx-auto">
            Browse the full compound catalog, use the reconstitution calculator, or explore research tools.
          </p>
          <div className="flex justify-center flex-wrap gap-3">
            <Link
              href="/products"
              className="inline-block px-6 py-2.5 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#d4af37", color: "#0f0f0d" }}
            >
              Browse Compounds
            </Link>
            <Link
              href="/tools"
              className="inline-block px-6 py-2.5 rounded-lg font-semibold text-sm border border-white/15 text-white/70 hover:text-white hover:border-white/30 transition-colors"
            >
              Research Tools
            </Link>
            <Link
              href="/blog"
              className="inline-block px-6 py-2.5 rounded-lg font-semibold text-sm border border-white/15 text-white/70 hover:text-white hover:border-white/30 transition-colors"
            >
              Research Journal
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
