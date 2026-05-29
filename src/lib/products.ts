export type ProductDosage = {
  size: string;
  price: number;
};

export type Product = {
  slug: string;
  name: string;
  casNumber: string;
  formula: string;
  molecularWeight: string;
  sequence?: string;
  purity: string;
  category: string;
  price: number;
  size: string;
  dosages?: ProductDosage[];
  storage: string;
  appearance: string;
  solubility: string;
  tagline: string;
  description: string;
  mechanism: string;
  researchSummary: string;
  dosingProtocol: string;
  reconstitution: string;
  relatedSlugs: string[];
  features: string[];
  accentColor: string;
  penAvailable: boolean;
  penPrice: number;
  forGender: "both" | "men-focus" | "women-focus";
  comingSoon?: boolean;
};

export const products: Product[] = [
  {
    slug: "bpc-157",
    name: "BPC-157",
    casNumber: "137525-51-0",
    formula: "C₆₂H₉₈N₁₆O₂₂",
    molecularWeight: "1419.53 g/mol",
    sequence: "Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val",
    purity: "≥99.2%",
    category: "Recovery & Healing",
    price: 120,
    size: "10mg",
    dosages: [
      { size: "10mg", price: 120 },
    ],
    storage: "−20°C, desiccated, protect from light. Stable 24 months lyophilized.",
    appearance: "White to off-white lyophilized powder",
    solubility: "Soluble in water at ≥1 mg/mL. Slight warming may aid dissolution.",
    tagline: "Stable pentadecapeptide. Tissue repair research compound.",
    features: ["Tissue Repair", "VEGF Upregulation", "≥99.2% Purity", "Anti-Inflammatory"],
    description:
      "BPC-157 (Body Protection Compound 157) is a synthetic pentadecapeptide consisting of 15 amino acids, representing a partial sequence of the endogenous body protection compound isolated from human gastric juice. It is characterized by exceptional stability in plasma, gastric acid, and intestinal secretions.",
    mechanism:
      "BPC-157 promotes angiogenesis through upregulation of VEGF expression and modulation of the nitric oxide (NO) system. It interacts with the growth hormone receptor GH-R, influencing downstream signaling cascades involved in cellular proliferation and migration. The peptide stabilizes the Akt/mTOR pathway and reduces oxidative stress markers in preclinical models. Additionally, BPC-157 demonstrates modulatory effects on the dopaminergic and serotonergic systems in central nervous system studies.",
    researchSummary:
      "Preclinical studies have extensively examined BPC-157's effects on connective tissue and musculoskeletal repair. Research in rodent models has documented accelerated healing of transected tendons, ligaments, and skeletal muscle tissue. Gastrointestinal research has investigated its cytoprotective effects on the gut epithelium. Neurological studies have examined neuroprotective activity following traumatic injury. A body of preclinical literature supports its involvement in angiogenic and anti-inflammatory mechanisms.",
    dosingProtocol:
      "Preclinical research models typically employ 2–10 μg/kg body weight via subcutaneous or intramuscular injection in rodent studies, administered once or twice daily. Some gastrointestinal models use oral gavage at equivalent or higher doses. Research methodology should be designed per institutional protocols. This compound is not approved for human therapeutic use.",
    reconstitution:
      "Reconstitute with sterile or bacteriostatic water. Add solvent slowly along vial wall. Gently swirl; do not vortex. Typical working concentration: 500 μg/mL. Reconstituted solution stable 30 days at 4°C, 6 months at −20°C.",
    relatedSlugs: ["tb-500", "ghk-cu", "cjc-1295-ipamorelin"],
    accentColor: "#4A9B8E",
    penAvailable: true,
    penPrice: 139,
    forGender: "men-focus",
  },
  {
    slug: "tb-500",
    name: "TB-500",
    casNumber: "77591-33-4",
    formula: "C₂₁₂H₃₅₀N₅₆O₇₈S",
    molecularWeight: "4963.50 g/mol",
    sequence: "Ac-Ser-Asp-Lys-Pro-Asp-Met-Ala-Glu-Ile-Glu-Lys-Phe-Asp-Lys-Ser-Lys-Leu-Lys-Lys-Thr-Glu-Thr-Gln-Glu-Lys-Asn-Pro-Leu-Pro-Ser-Lys-Glu-Thr-Ile-Glu-Gln-Glu-Lys-Gln-Ala-Gly-Glu-Ser-NH₂",
    purity: "≥98.5%",
    category: "Recovery & Healing",
    price: 90,
    size: "5mg",
    dosages: [
      { size: "5mg", price: 90 },
      { size: "10mg", price: 168 },
    ],
    storage: "−20°C, desiccated. Lyophilized powder stable 24 months.",
    appearance: "White lyophilized powder",
    solubility: "Soluble in sterile water at ≥1 mg/mL. May require gentle warming.",
    tagline: "Thymosin beta-4 fragment. Actin-binding regenerative peptide.",
    features: ["Actin Binding", "Angiogenesis", "Muscle Repair", "≥98.5% Purity"],
    description:
      "TB-500 is the synthetic form of a conserved region of thymosin beta-4 (Tβ4), an ubiquitous 43-amino acid protein found in virtually all human and animal cells. The biologically active fragment (amino acids 17–23: LKKTETQ) retains primary actin-binding activity. Thymosin beta-4 is one of the most abundant peptides in mammalian tissues.",
    mechanism:
      "TB-500 sequesters monomeric G-actin, modulating local actin dynamics and filament formation. By binding to G-actin through its LKKTETQ domain, it promotes cell migration, proliferation, and differentiation. The peptide activates metalloproteinase (MMP) expression, stimulates keratinocyte migration, and promotes angiogenesis. It also modulates the Wnt signaling pathway and reduces inflammatory cytokine expression (TNF-α, IL-6) in preclinical inflammation models.",
    researchSummary:
      "TB-500 has been extensively studied in preclinical wound healing, cardiac repair, and musculoskeletal regeneration models. Research has documented improved angiogenesis and neovascularization following cardiac ischemia-reperfusion injury. Tendon and ligament repair models show accelerated collagen deposition and organized fiber architecture. Multiple in vitro studies confirm its anti-apoptotic activity under oxidative stress conditions.",
    dosingProtocol:
      "Research models in rodents employ 2.0–4.0 mg/kg via subcutaneous injection, typically twice weekly. Some protocols use an initial loading phase followed by maintenance dosing. Route of administration and frequency depend on the specific tissue target and experimental design. Institutional IACUC approval required for all animal research.",
    reconstitution:
      "Reconstitute with bacteriostatic water or sterile saline. Add 1–2 mL solvent per 10 mg vial. Gently invert to mix; do not vortex. Working concentration typically 2 mg/mL. Store reconstituted solution at 4°C for up to 5 days or −20°C for up to 3 months.",
    relatedSlugs: ["bpc-157", "ghk-cu", "cjc-1295-ipamorelin"],
    accentColor: "#4A9B8E",
    penAvailable: true,
    penPrice: 145,
    forGender: "men-focus",
  },
  {
    slug: "ipamorelin",
    name: "Ipamorelin",
    casNumber: "170851-70-4",
    formula: "C₃₈H₄₉N₉O₅",
    molecularWeight: "711.85 g/mol",
    sequence: "Aib-His-D-2-Nal-D-Phe-Lys-NH₂ (pentapeptide)",
    purity: "≥99.0%",
    category: "Growth Hormone",
    price: 96,
    size: "10mg",
    dosages: [
      { size: "10mg", price: 96 },
    ],
    storage: "−20°C, desiccated. Lyophilized powder stable 24 months.",
    appearance: "White lyophilized powder",
    solubility: "Soluble in water at ≥1 mg/mL. Soluble in dilute acetic acid.",
    tagline: "Selective GHS-R1a agonist. Clean GH release without cortisol co-secretion.",
    features: ["GHS-R1a Agonist", "Selective GH Release", "Ghrelin Mimetic", "≥99.0% Purity"],
    description:
      "Ipamorelin is a synthetic pentapeptide growth hormone secretagogue (GHS) and selective agonist of the ghrelin receptor (GHS-R1a). Developed as a research tool to study the somatotropic axis, Ipamorelin is distinguished by its high selectivity — releasing GH without concurrent elevation of cortisol, prolactin, or ACTH, which are common off-target effects of earlier GHSs such as GHRP-2 and GHRP-6.",
    mechanism:
      "Ipamorelin activates GHS-R1a on pituitary somatotrophs through a mechanism distinct from the GHRH pathway. GHS-R1a activation increases intracellular calcium via phospholipase C / IP3 signaling, stimulating pulsatile GH secretion. Unlike ghrelin, Ipamorelin's minimal off-target receptor activity produces a clean GH pulse without dysregulating the HPA axis. The compound acts synergistically with GHRH analogs (CJC-1295) by stimulating GH release through complementary receptor systems.",
    researchSummary:
      "Ipamorelin has been extensively studied in both animal models and human Phase I/II clinical settings. Swine studies documented dose-dependent GH release with minimal effects on cortisol and prolactin at therapeutic doses. Human studies have confirmed the selectivity profile and established favorable tolerability. The compound has been used as a reference GHS in numerous receptor pharmacology studies and as a positive control in GH secretion assays.",
    dosingProtocol:
      "Preclinical rodent studies typically employ 200–500 μg/kg subcutaneous injection, 1–3 times daily. Human pharmacokinetic research has used 1–10 μg/kg doses. In vitro GHS-R1a binding assays: 1–1000 nM. All research use requires appropriate institutional approvals.",
    reconstitution:
      "Reconstitute with bacteriostatic water. Add 1 mL per 5 mg vial for a 5 mg/mL stock solution. Dilute to working concentration in sterile saline. Stable at 4°C for 14 days after reconstitution. Store lyophilized powder at −20°C.",
    relatedSlugs: ["cjc-1295-ipamorelin", "cjc-1295", "sermorelin"],
    accentColor: "#C9A24B",
    penAvailable: true,
    penPrice: 119,
    forGender: "men-focus",
  },
  {
    slug: "cjc-1295",
    name: "CJC-1295",
    casNumber: "863288-34-0",
    formula: "C₁₆₅H₂₇₀N₄₄O₄₉",
    molecularWeight: "3647.29 g/mol",
    sequence: "Tyr-D-Ala-Asp-Ala-Ile-Phe-Thr-Gln-Ser-Tyr-Arg-Lys-Val-Leu-Ala-Gln-Leu-Ser-Ala-Arg-Lys-Leu-Leu-Gln-Asp-Ile-Leu-Ser-Arg-NH₂ (with DAC)",
    purity: "≥98.5%",
    category: "Growth Hormone",
    price: 69,
    size: "5mg",
    dosages: [
      { size: "5mg", price: 69 },
      { size: "10mg", price: 99 },
    ],
    storage: "−20°C, desiccated, protected from light. Lyophilized stable 24 months.",
    appearance: "White lyophilized powder",
    solubility: "Soluble in water and dilute acetic acid (0.1%) at ≥1 mg/mL.",
    tagline: "GHRH analog with DAC. Extended half-life growth hormone releasing peptide.",
    features: ["GHRH Receptor Agonist", "DAC Modification", "Extended Half-Life", "≥98.5% Purity"],
    description:
      "CJC-1295 is a tetrasubstituted GHRH(1-29) analog featuring a Drug Affinity Complex (DAC) modification — a maleimidoproprionic acid linker that enables covalent bonding to endogenous albumin Cys-34. This single modification extends plasma half-life from approximately 7 minutes (native GHRH) to 6–8 days, enabling sustained somatotropic axis stimulation with infrequent dosing.",
    mechanism:
      "CJC-1295 binds and activates the GHRH receptor (GHRHR) on pituitary somatotrophs, stimulating cAMP production, PKA activation, and pulsatile GH release. The DAC modification facilitates covalent bonding to circulating albumin, dramatically extending bioavailability. Downstream signaling elevates IGF-1 through sustained hepatic stimulation, producing a 2–10 day window of enhanced GH/IGF-1 axis activity per injection.",
    researchSummary:
      "Phase I and II clinical studies documented significant, dose-dependent elevations in mean plasma GH and IGF-1 concentrations lasting 6–8 days post-injection. The prolonged elevation profile represents a distinct pharmacokinetic advantage over native GHRH or short-acting analogs. Body composition, bone density, and metabolic research has been conducted in research settings. All human administration studies require appropriate clinical trial infrastructure.",
    dosingProtocol:
      "Published research protocols for CJC-1295 DAC in clinical studies used 30–120 μg/kg subcutaneous injection once weekly or biweekly. Preclinical rodent studies employ 1–10 μg/kg. All protocols are for research reference only and require appropriate institutional approvals.",
    reconstitution:
      "Reconstitute with bacteriostatic water. Add 2 mL per 10 mg vial for 5 mg/mL stock. For dilute working solutions, further dilute in sterile saline. Gentle swirling only — avoid vortexing. Store reconstituted material at 4°C for up to 14 days, −20°C for up to 6 months.",
    relatedSlugs: ["cjc-1295-ipamorelin", "ipamorelin", "sermorelin"],
    accentColor: "#C9A24B",
    penAvailable: true,
    penPrice: 129,
    forGender: "men-focus",
  },
  {
    slug: "cjc-1295-ipamorelin",
    name: "CJC-1295 / Ipamorelin",
    casNumber: "863288-34-0 / 170851-70-4",
    formula: "Blend — C₁₆₅H₂₇₀N₄₄O₄₉ / C₃₈H₄₉N₉O₅",
    molecularWeight: "3647.29 / 711.85 g/mol",
    sequence: "CJC-1295 DAC + Ipamorelin: Aib-His-D-2-Nal-D-Phe-Lys-NH₂",
    purity: "≥99.1%",
    category: "Growth Hormone",
    price: 108,
    size: "10mg",
    dosages: [
      { size: "10mg", price: 108 },
    ],
    storage: "−20°C, desiccated, protected from light. Stable 24 months lyophilized.",
    appearance: "White lyophilized powder",
    solubility: "Soluble in water and dilute acetic acid (0.1%) at ≥1 mg/mL.",
    tagline: "Dual somatotropic axis stimulation. GHRH analog + selective GHS-R agonist.",
    features: ["GH Axis Dual Action", "Extended Half-Life", "Albumin Binding", "≥99.1% Purity"],
    description:
      "This research blend combines CJC-1295 with Drug Affinity Complex (DAC) and Ipamorelin in equimolar proportions. CJC-1295 is a tetrasubstituted GHRH(1-29) analog with a DAC modification enabling covalent albumin binding, extending plasma half-life from minutes to days. Ipamorelin is a pentapeptide selective ghrelin mimetic (GHS-R1a agonist) with a highly selective GH-releasing profile.",
    mechanism:
      "CJC-1295 binds and activates the GHRH receptor (GHRHR) on pituitary somatotrophs, stimulating cAMP production, PKA activation, and pulsatile GH release. Ipamorelin selectively activates GHS-R1a (ghrelin receptor) independent of the GHRH pathway, providing synergistic stimulation of the somatotropic axis without significant co-secretion of cortisol, prolactin, or ACTH — a key selectivity advantage over GHRP-2 and GHRP-6.",
    researchSummary:
      "Phase I and II clinical studies with CJC-1295 DAC documented significant, dose-dependent elevations in mean plasma GH and IGF-1 concentrations. Ipamorelin research has demonstrated selective GH release in rodent, swine, and human studies. Combined protocols have been studied for effects on body composition, bone density, and metabolic parameters in research settings. All human administration studies require appropriate clinical trial infrastructure and regulatory approvals.",
    dosingProtocol:
      "Published research protocols for CJC-1295 DAC in clinical studies used 30–120 μg/kg subcutaneous injection once weekly or biweekly. Ipamorelin research in animal models typically employs 200–300 μg/kg subcutaneous injection once to three times daily. All protocols are for research reference only.",
    reconstitution:
      "Reconstitute with bacteriostatic water. Add 2 mL per 10 mg vial for 5 mg/mL stock. For dilute working solutions, further dilute in sterile saline. Gentle swirling only — avoid vortexing. Store reconstituted material at 4°C for up to 14 days, −20°C for up to 6 months.",
    relatedSlugs: ["ipamorelin", "cjc-1295", "sermorelin"],
    accentColor: "#C9A24B",
    penAvailable: true,
    penPrice: 159,
    forGender: "men-focus",
  },
  {
    slug: "sermorelin",
    name: "Sermorelin",
    casNumber: "86168-78-7",
    formula: "C₁₄₉H₂₄₆N₄₄O₄₂S",
    molecularWeight: "3357.93 g/mol",
    sequence: "Tyr-Ala-Asp-Ala-Ile-Phe-Thr-Asn-Ser-Tyr-Arg-Lys-Val-Leu-Gly-Gln-Leu-Ser-Ala-Arg-Lys-Leu-Leu-Gln-Asp-Ile-Met-Ser-Arg-NH₂",
    purity: "≥98.5%",
    category: "Growth Hormone",
    price: 120,
    size: "5mg",
    dosages: [
      { size: "5mg", price: 120 },
      { size: "10mg", price: 120 },
    ],
    storage: "−20°C, desiccated, protected from light. Lyophilized stable 24 months.",
    appearance: "White lyophilized powder",
    solubility: "Soluble in water at ≥1 mg/mL. Slight warming aids dissolution.",
    tagline: "GHRH(1-29) analog. Endogenous growth hormone-releasing hormone truncated sequence.",
    features: ["GHRH Analog", "Pituitary Stimulation", "GH Pulse Release", "≥98.5% Purity"],
    description:
      "Sermorelin (GHRH 1-29) is the biologically active N-terminal 29-amino acid fragment of endogenous growth hormone-releasing hormone (GHRH). It represents the shortest GHRH fragment retaining full biological activity at the GHRH receptor. Sermorelin was the first GHRH analog to receive FDA approval (1997, Geref, Serono) for assessment of GH secretory capacity and treatment of idiopathic GH deficiency in children.",
    mechanism:
      "Sermorelin binds with high affinity to the GHRH receptor (GHRHR) on pituitary somatotrophs, a G protein-coupled receptor linked to adenylyl cyclase. Receptor activation increases intracellular cAMP, activating PKA, which stimulates GH gene transcription and secretion. Unlike full-length GHRH (44 aa), the 1-29 fragment has a shorter plasma half-life (approximately 11–12 minutes) due to rapid DPP-4 cleavage and renal clearance, producing discrete GH pulses rather than sustained elevation.",
    researchSummary:
      "Sermorelin has been studied in multiple clinical settings as a diagnostic tool for GH deficiency and as a research compound for the somatotropic axis. FDA-approved clinical studies documented significant increases in IGF-1 and overnight GH secretion in GH-deficient adults. Comparison studies with recombinant GH have examined effects on body composition, bone mineral density, and lipid profiles. Its short half-life profile makes it useful for controlled GH secretion studies.",
    dosingProtocol:
      "Approved clinical dosing (now off-market): 0.2–0.3 mg subcutaneous injection once daily at bedtime. Preclinical rodent studies employ 1–10 μg/kg subcutaneous injection. Diagnostic testing protocol: 1 μg/kg IV bolus with GH sampling at 0, 15, 30, 45, 60 min. All research use requires appropriate institutional approvals.",
    reconstitution:
      "Reconstitute with bacteriostatic water for injection. Add 1–2 mL per 5 mg vial. Gently swirl; do not vortex. Working concentration 2.5 mg/mL. Store reconstituted solution at 2–8°C for up to 14 days. Do not freeze reconstituted material.",
    relatedSlugs: ["ipamorelin", "cjc-1295-ipamorelin", "cjc-1295"],
    accentColor: "#C9A24B",
    penAvailable: true,
    penPrice: 129,
    forGender: "men-focus",
  },
  {
    slug: "mk-677",
    name: "MK-677 (Ibutamoren)",
    casNumber: "159634-47-6",
    formula: "C₂₇H₃₆N₄O₅S",
    molecularWeight: "528.67 g/mol",
    purity: "≥99.0%",
    category: "Growth Hormone",
    price: 89,
    size: "25mg × 30ct",
    storage: "Cool, dry place (15–25°C). Protect from light and moisture. Stable 24 months sealed.",
    appearance: "Off-white to pale yellow capsules",
    solubility: "Oral formulation. Active ingredient soluble in DMSO, ethanol.",
    tagline: "Oral GH secretagogue. Non-peptide ghrelin mimetic for convenient daily use.",
    features: ["Oral Bioavailability", "GHS-R1a Agonist", "24-Hour Half-Life", "≥99.0% Purity"],
    description:
      "MK-677 (Ibutamoren) is a potent, orally active, non-peptide growth hormone secretagogue that mimics the GH-stimulating action of ghrelin. Developed originally by Merck, it selectively activates the ghrelin receptor (GHS-R1a) without the need for injection, offering a distinct pharmacokinetic profile with approximately 24-hour half-life and oral bioavailability. It increases GH and IGF-1 secretion while maintaining the pulsatile GH release pattern.",
    mechanism:
      "MK-677 selectively activates GHS-R1a (ghrelin receptor) on pituitary somatotrophs and hypothalamic neurons. Receptor activation stimulates pulsatile GH secretion through phospholipase C / IP3 / calcium signaling pathways. The compound's long half-life (~24 hours) enables once-daily oral dosing. Unlike injectable GH secretagogues, MK-677 does not require reconstitution and maintains efficacy across the full dosing interval. It elevates both GH and IGF-1 without significantly affecting cortisol.",
    researchSummary:
      "Multiple Phase I and II clinical trials have studied MK-677 in healthy adults, elderly subjects, and GH-deficient populations. Studies demonstrated significant increases in IGF-1 (up to 60–80% from baseline) and 24-hour GH secretion with once-daily oral dosing. Body composition research showed improvements in lean muscle mass and reductions in fat mass over 12-month periods. Sleep architecture studies documented improvements in REM sleep stage duration.",
    dosingProtocol:
      "Clinical research doses: 10–25 mg oral once daily. Phase II aging studies used 25 mg/day. Preclinical rodent studies: 3–10 mg/kg oral gavage. All research use requires appropriate institutional approvals.",
    reconstitution:
      "Oral capsule formulation — no reconstitution required. Store in original sealed container. Capsules contain 25 mg MK-677 per unit in a cellulose-based excipient matrix.",
    relatedSlugs: ["ipamorelin", "cjc-1295-ipamorelin", "sermorelin"],
    accentColor: "#C9A24B",
    penAvailable: false,
    penPrice: 0,
    forGender: "men-focus",
  },
  {
    slug: "semaglutide",
    name: "Semaglutide",
    casNumber: "910463-68-2",
    formula: "C₁₈₇H₂₉₁N₄₅O₅₉",
    molecularWeight: "4113.58 g/mol",
    sequence: "GLP-1(7–37) analog with C18 fatty diacid attachment at Lys²⁶ via linker",
    purity: "≥98.0%",
    category: "Weight Management",
    price: 99,
    size: "5mg",
    storage: "−20°C, desiccated. Stable 24 months lyophilized.",
    appearance: "White lyophilized powder",
    solubility: "Soluble in water and mild acidic buffer. pH 7–8 preferred for stability.",
    tagline: "Long-acting GLP-1 receptor agonist. Metabolic and appetite regulation research.",
    features: ["GLP-1 Agonist", "7-Day Half-Life", "Albumin Binding", "≥98.0% Purity"],
    description:
      "Semaglutide is a long-acting GLP-1 (glucagon-like peptide-1) receptor agonist with 94% sequence homology to native human GLP-1. Two arginine substitutions at positions 8 and 34 confer resistance to DPP-4 degradation, while C18 fatty diacid attachment via a mini-PEG linker to Lys²⁶ enables albumin binding for a plasma half-life of approximately 7 days.",
    mechanism:
      "Semaglutide activates GLP-1 receptors in the pancreatic beta cells, stimulating glucose-dependent insulin secretion and suppressing glucagon release. Central GLP-1 receptor activation in the hypothalamus and brainstem reduces appetite and food intake by modulating satiety signals. Additional metabolic effects include slowed gastric emptying and improved insulin sensitivity in peripheral tissues.",
    researchSummary:
      "Semaglutide has been approved by FDA and EMA for type 2 diabetes (Ozempic, 2017) and chronic weight management (Wegovy, 2021). SUSTAIN and STEP trial series demonstrated significant HbA1c reduction and substantial body weight reduction (15–20%). Cardiovascular outcome trials (SUSTAIN-6, SELECT) documented reduced major adverse cardiovascular events in high-risk populations.",
    dosingProtocol:
      "Clinical pharmacology research uses subcutaneous injection. Preclinical rodent metabolic studies employ weight-adjusted dosing protocols per IACUC-approved methodology. For in vitro GLP-1R binding and signaling research: 1–1000 nM in cell culture. All research use requires appropriate institutional approvals.",
    reconstitution:
      "Reconstitute with sterile water or PBS. For subcutaneous injection research: typical working concentration 0.5–2 mg/mL. Reconstituted solution stable 28 days at 2–8°C. Do not freeze reconstituted solution.",
    relatedSlugs: ["tirzepatide", "retatrutide", "aod-9604"],
    accentColor: "#EF4444",
    penAvailable: true,
    penPrice: 129,
    forGender: "women-focus",
  },
  {
    slug: "tirzepatide",
    name: "Tirzepatide",
    casNumber: "2023788-19-2",
    formula: "C₂₂₅H₃₄₈N₄₈O₆₈",
    molecularWeight: "4813.50 g/mol",
    sequence: "GIP/GLP-1 dual receptor agonist with C20 fatty diacid attachment via gamma-glutamic acid linker",
    purity: "≥98.0%",
    category: "Weight Management",
    price: 180,
    size: "10mg",
    dosages: [
      { size: "10mg", price: 180 },
      { size: "15mg", price: 240 },
      { size: "30mg", price: 360 },
    ],
    storage: "−20°C, desiccated. Stable 24 months lyophilized.",
    appearance: "White lyophilized powder",
    solubility: "Soluble in sterile water and buffered saline at pH 6–8.",
    tagline: "Dual GIP/GLP-1 receptor agonist. FDA-approved metabolic research compound.",
    features: ["Dual GIP/GLP-1", "FDA Approved (Mounjaro)", "Weekly Dosing", "≥98.0% Purity"],
    description:
      "Tirzepatide is a novel dual glucose-dependent insulinotropic polypeptide (GIP) and glucagon-like peptide-1 (GLP-1) receptor agonist. Developed by Eli Lilly, it received FDA approval in 2022 (Mounjaro) for type 2 diabetes and in 2023 (Zepbound) for chronic weight management. The molecule features a 39-amino acid backbone with a C20 fatty diacid modification enabling albumin binding and weekly dosing.",
    mechanism:
      "Tirzepatide co-activates both GIP receptor (GIPR) and GLP-1 receptor (GLP-1R), engaging complementary incretin pathways. GIPR activation enhances glucose-dependent insulin secretion and glucagon modulation while also modulating adipose tissue metabolism through direct GIPR signaling. Combined GIP/GLP-1 receptor co-stimulation produces superior glycemic control and body weight reduction compared to selective GLP-1 agonism alone in clinical trials.",
    researchSummary:
      "SURPASS clinical trial program demonstrated superior HbA1c reduction and weight loss compared to semaglutide in head-to-head trials. SURMOUNT trials documented mean body weight reduction of 20–22% in adults with obesity. The SURPASS-CVOT cardiovascular outcome trial is ongoing. Mechanistic research continues to elucidate the relative contributions of GIP vs. GLP-1 receptor activation to the clinical efficacy profile.",
    dosingProtocol:
      "Approved clinical dosing: 2.5 mg weekly subcutaneous injection, titrated to 5, 10, or 15 mg weekly. Preclinical rodent metabolic studies: 0.03–3 nmol/kg subcutaneous injection. In vitro receptor binding assays: 1–1000 nM. All research use requires appropriate institutional approvals.",
    reconstitution:
      "Reconstitute with sterile water for injection. Add 1 mL per 5 mg for a 5 mg/mL stock. Stable 28 days at 2–8°C after reconstitution. Do not freeze reconstituted solution. Protect from light.",
    relatedSlugs: ["semaglutide", "retatrutide", "aod-9604"],
    accentColor: "#EF4444",
    penAvailable: true,
    penPrice: 179,
    forGender: "women-focus",
  },
  {
    slug: "retatrutide",
    name: "Retatrutide",
    casNumber: "2381089-83-2",
    formula: "C₂₃₁H₃₆₈N₅₆O₆₆S",
    molecularWeight: "4859.00 g/mol",
    sequence: "Triple agonist peptide with GIP, GLP-1, and glucagon receptor activity; C20 fatty diacid via gamma-glutamic acid linker",
    purity: "≥98.0%",
    category: "Weight Management",
    price: 300,
    size: "10mg",
    dosages: [
      { size: "10mg", price: 300 },
      { size: "15mg", price: 360 },
    ],
    storage: "−20°C, desiccated. Stable 24 months lyophilized.",
    appearance: "White lyophilized powder",
    solubility: "Soluble in sterile water at ≥1 mg/mL. Buffered saline compatible.",
    tagline: "Triple GIP/GLP-1/glucagon receptor agonist. Advanced metabolic research compound.",
    features: ["Triple Receptor Agonist", "GIP/GLP-1/GCG", "Advanced Pipeline", "≥98.0% Purity"],
    description:
      "Retatrutide (LY3437943) is a next-generation triagonist peptide simultaneously activating GIP receptor (GIPR), GLP-1 receptor (GLP-1R), and glucagon receptor (GCGR). Developed by Eli Lilly, it represents the leading edge of the incretin-based therapeutic pipeline. The addition of glucagon receptor agonism to the dual incretin profile aims to enhance energy expenditure and hepatic fat mobilization beyond what dual agonists achieve.",
    mechanism:
      "Triple receptor co-activation engages complementary metabolic pathways: GIPR improves insulin secretion and adipose metabolism, GLP-1R reduces appetite and gastric emptying, and GCGR increases energy expenditure via hepatic glucose production suppression and direct stimulation of adipose lipolysis and thermogenesis. The balanced GCGR agonism is designed to avoid the hyperglycemia associated with pure glucagon receptor agonism by pairing it with the insulin-secretory effects of GIP and GLP-1.",
    researchSummary:
      "Phase II TRIUMPH trial data (2023) demonstrated body weight reduction of up to 24.2% over 48 weeks — exceeding results reported for semaglutide and tirzepatide in comparable timeframes. Phase III development program is underway. Mechanistic studies examining the relative role of glucagon receptor engagement in the enhanced efficacy profile are ongoing at multiple academic centers.",
    dosingProtocol:
      "Phase II clinical dosing: 1, 4, 8, or 12 mg weekly subcutaneous injection. Preclinical research protocols use weight-adjusted dosing per IACUC-approved methodology. In vitro receptor binding and cAMP assays: 1–1000 nM. All research use requires appropriate institutional approvals.",
    reconstitution:
      "Reconstitute with sterile water for injection. Add 1 mL per 5 mg for a 5 mg/mL stock. Stable 28 days at 2–8°C after reconstitution. Do not freeze reconstituted solution. Protect from light during storage.",
    relatedSlugs: ["tirzepatide", "semaglutide", "aod-9604"],
    accentColor: "#EF4444",
    penAvailable: true,
    penPrice: 189,
    forGender: "women-focus",
  },
  {
    slug: "aod-9604",
    name: "AOD-9604",
    casNumber: "221231-10-3",
    formula: "C₇₈H₁₂₃N₂₃O₂₃S₂",
    molecularWeight: "1817.09 g/mol",
    sequence: "Tyr-Leu-Arg-Ile-Val-Gln-Cys-Arg-Ser-Val-Glu-Gly-Ser-Cys-Gly-Phe (HGH fragment 177–191)",
    purity: "≥98.0%",
    category: "Weight Management",
    price: 144,
    size: "5mg",
    dosages: [
      { size: "5mg", price: 144 },
      { size: "10mg", price: 264 },
    ],
    storage: "−20°C, desiccated. Lyophilized stable 24 months.",
    appearance: "White lyophilized powder",
    solubility: "Soluble in water and dilute acetic acid at ≥1 mg/mL.",
    tagline: "HGH fragment 177–191. Lipolytic activity without diabetogenic effects.",
    features: ["HGH Fragment", "Lipolytic Activity", "Beta-3 Agonist", "≥98.0% Purity"],
    description:
      "AOD-9604 is a synthetic analog of the C-terminal fragment (amino acids 177–191) of human growth hormone (hGH). Developed by researchers at Monash University and licensed to Metabolic Pharmaceuticals, it was designed to isolate the anti-obesity effects of GH from its growth-promoting (IGF-1-stimulating) and diabetogenic properties.",
    mechanism:
      "AOD-9604 activates the beta-3 adrenergic receptor in adipose tissue, stimulating lipolysis and fatty acid oxidation through cAMP-dependent pathways. Unlike full-length hGH, it does not stimulate IGF-1 secretion, does not affect insulin sensitivity at therapeutic doses, and does not activate the GH receptor's growth-promoting Jak2/STAT5 pathway. It inhibits lipogenesis in differentiated adipocytes while promoting triglyceride hydrolysis.",
    researchSummary:
      "Phase I and II clinical trials by Metabolic Pharmaceuticals documented an excellent safety and tolerability profile with no effects on glucose metabolism, insulin sensitivity, or IGF-1 levels. It has since received GRAS (Generally Recognized as Safe) status for use in food supplements in Australia. Research interest continues in cartilage repair and metabolic syndrome models.",
    dosingProtocol:
      "Clinical trials used subcutaneous injection of 1 mg/day. Preclinical mouse adipocyte studies: 1–100 nM in vitro. In vivo lipolysis research in rodents: 0.5–2 mg/kg. For cartilage research applications, intra-articular injection models have been described in small animal studies.",
    reconstitution:
      "Reconstitute with bacteriostatic water or 0.1% acetic acid in sterile water. Add 1–2 mL per 5 mg vial. Gently swirl to dissolve. Working concentration 2.5 mg/mL. Store reconstituted solution at 4°C for 14 days.",
    relatedSlugs: ["semaglutide", "bpc-157", "tirzepatide"],
    accentColor: "#EF4444",
    penAvailable: true,
    penPrice: 119,
    forGender: "both",
  },
  {
    slug: "ghk-cu",
    name: "GHK-Cu",
    casNumber: "89030-95-5",
    formula: "C₁₄H₂₃CuN₆O₄",
    molecularWeight: "403.92 g/mol",
    sequence: "Gly-His-Lys (copper complex)",
    purity: "≥99.0%",
    category: "Anti-Aging",
    price: 96,
    size: "50mg",
    dosages: [
      { size: "50mg", price: 96 },
      { size: "100mg", price: 156 },
    ],
    storage: "2–8°C, protect from light. Avoid freeze-thaw cycles. Stable 18 months.",
    appearance: "Blue-green powder or crystalline solid",
    solubility: "Freely soluble in water. Aqueous solutions are blue-green.",
    tagline: "Copper peptide complex. Extracellular matrix and regeneration research.",
    features: ["Collagen Synthesis", "Wound Healing", "Antioxidant Defense", "≥99.0% Purity"],
    description:
      "GHK-Cu (Copper Peptide GHK) is a naturally occurring copper complex of the tripeptide glycyl-L-histidyl-L-lysine. First isolated from human plasma albumin in 1973 by Pickart and Thaler, GHK-Cu demonstrates high affinity for Cu(II) ions (Ka ≈ 10¹⁷ M⁻¹). Endogenous plasma levels of GHK-Cu decline significantly with aging, from approximately 200 ng/mL at age 20 to 80 ng/mL at age 60.",
    mechanism:
      "GHK-Cu modulates TGF-β1 and TGF-β2 signaling, promoting collagen synthesis while reducing collagen-degrading matrix metalloproteinase (MMP-1) activity. It activates SPARC expression and stimulates decorin, a proteoglycan important for collagen fibril organization. As a copper chelator, GHK-Cu participates in antioxidant defense by delivering copper to superoxide dismutase (Cu/Zn-SOD). It also upregulates over 30 human genes associated with tissue remodeling.",
    researchSummary:
      "GHK-Cu has been studied across dermatology, wound healing, and anti-aging research contexts. Topical application studies demonstrate increased collagen and glycosaminoglycan synthesis in human fibroblast cultures. In vivo wound healing experiments document faster wound closure with improved tensile strength and reduced scar formation. Genomic studies by Pickart and others have mapped broad effects on gene expression patterns related to cellular maintenance and repair.",
    dosingProtocol:
      "In vitro research typically uses concentrations of 1–100 nM in cell culture media. Topical research formulations range from 0.1–1% w/v in appropriate vehicles. In vivo rodent wound healing studies employ subcutaneous or topical application of 0.1–1 mg/kg doses.",
    reconstitution:
      "GHK-Cu is highly water-soluble. Dissolve in sterile water, phosphate-buffered saline (PBS, pH 7.4), or cell culture media. For topical research formulations, can be dissolved directly in aqueous carriers. Stable in solution for 30 days at 4°C. Blue-green coloration indicates intact copper chelation.",
    relatedSlugs: ["epitalon", "nad-plus", "bpc-157"],
    accentColor: "#8B5CF6",
    penAvailable: true,
    penPrice: 119,
    forGender: "women-focus",
  },
  {
    slug: "epitalon",
    name: "Epitalon",
    casNumber: "307297-39-8",
    formula: "C₁₄H₂₂N₄O₉",
    molecularWeight: "390.34 g/mol",
    sequence: "Ala-Glu-Asp-Gly (tetrapeptide)",
    purity: "≥99.3%",
    category: "Anti-Aging",
    price: 120,
    size: "10mg",
    dosages: [
      { size: "10mg", price: 120 },
      { size: "50mg", price: 180 },
    ],
    storage: "−20°C, desiccated. Lyophilized powder stable 24 months. Protect from moisture.",
    appearance: "White lyophilized powder",
    solubility: "Freely soluble in water. Soluble in PBS and cell culture media.",
    tagline: "Pineal tetrapeptide. Telomerase activation and circadian regulation research.",
    features: ["Telomerase Activation", "Circadian Regulation", "Longevity Research", "≥99.3% Purity"],
    description:
      "Epitalon (Epithalon) is a synthetic tetrapeptide (Ala-Glu-Asp-Gly) corresponding to the active sequence of epithalamin, a polypeptide bioregulator derived from the bovine pineal gland. Developed in Russia by Professor Vladimir Khavinson and colleagues at the St. Petersburg Institute of Bioregulation and Gerontology, Epitalon has been the subject of over 100 peer-reviewed publications spanning four decades of research.",
    mechanism:
      "Epitalon activates telomerase (hTERT) in somatic cells, promoting telomere elongation in cells that would otherwise undergo senescence. In vitro studies demonstrate telomere length maintenance in human fetal fibroblasts after treatment. Epitalon normalizes circadian melatonin secretion by restoring pineal gland function in aged organisms. It modulates the hypothalamic-pituitary axis, reducing elevated cortisol while normalizing LH and FSH levels in aged animal models.",
    researchSummary:
      "Khavinson's group published extensive research in Russian and international journals documenting longevity effects in multiple animal species. Long-term studies (20+ years in primates, 3+ years in rodents) report median lifespan extension. Cell cycle research has demonstrated Epitalon's ability to restore normal S-phase entry in senescent cells. Clinical observation studies (non-randomized) from Russian research institutes report reduced incidence of age-related pathologies in elderly subjects.",
    dosingProtocol:
      "Russian research protocols typically employed 0.1 mg/kg/day subcutaneous or intramuscular injection for 10–20 day courses, repeated annually or biannually. In vitro telomerase activation research used concentrations of 0.1–10 μM. Standard research methodology requires blinded controls and appropriate institutional approvals.",
    reconstitution:
      "Reconstitute with sterile water for injection. Add 1 mL per 10 mg for a 10 mg/mL solution, or 5 mL for a 2 mg/mL working concentration. Stable at 4°C for 30 days, −20°C for 6 months. Avoid multiple freeze-thaw cycles.",
    relatedSlugs: ["nad-plus", "ghk-cu", "semax"],
    accentColor: "#8B5CF6",
    penAvailable: true,
    penPrice: 124,
    forGender: "women-focus",
  },
  {
    slug: "selank",
    name: "Selank",
    casNumber: "129954-34-3",
    formula: "C₃₃H₅₇N₁₁O₉",
    molecularWeight: "751.87 g/mol",
    sequence: "Thr-Lys-Pro-Arg-Pro-Gly-Pro (heptapeptide)",
    purity: "≥98.8%",
    category: "Cognitive",
    price: 60,
    size: "10mg",
    dosages: [
      { size: "10mg", price: 60 },
    ],
    storage: "2–8°C refrigerated, protect from light. Stable 18 months lyophilized.",
    appearance: "White to off-white lyophilized powder",
    solubility: "Freely soluble in water. Compatible with saline and aqueous buffers.",
    tagline: "Tuftsin analog. Anxiolytic and nootropic peptide research compound.",
    features: ["Anxiolytic", "GABA Modulation", "BDNF Upregulation", "≥98.8% Purity"],
    description:
      "Selank is a synthetic heptapeptide analog of the endogenous immunomodulatory tetrapeptide tuftsin (Thr-Lys-Pro-Arg), developed at the Institute of Molecular Genetics of the Russian Academy of Sciences. The addition of Pro-Gly-Pro to the tuftsin sequence substantially increases metabolic stability while preserving and extending biological activity.",
    mechanism:
      "Selank modulates GABAergic transmission by increasing the sensitivity of GABA-A receptors without direct binding to the benzodiazepine site, producing anxiolysis without sedation, motor impairment, or dependence in preclinical models. It inhibits enkephalinase activity, prolonging the action of endogenous enkephalins. Neurotrophin effects include upregulation of BDNF expression in hippocampal and cortical regions. Selank also modulates serotonergic transmission and demonstrates immune-stabilizing effects.",
    researchSummary:
      "Selank has undergone clinical investigation in Russia under the tradename 'Selank' nasal spray (0.15% solution), receiving approval as an anxiolytic drug in the Russian Federation and Ukraine. Published Phase I/II clinical studies document anxiolytic efficacy in generalized anxiety disorder without sedation or withdrawal effects seen with benzodiazepines. Cognitive research in both animal models and human studies suggests positive effects on working memory and attention consolidation.",
    dosingProtocol:
      "Approved clinical use in Russia employs intranasal administration of 0.15% solution (750 μg per 5 drops, 3×/day). Preclinical rodent studies typically use 0.3–0.9 mg/kg subcutaneous injection. In vitro neuronal protection studies use concentrations of 1–100 nM.",
    reconstitution:
      "Dissolve in sterile water or sterile 0.9% saline. For intranasal research formulations, prepare as 0.1–0.15% aqueous solution. For subcutaneous injection research: 1 mg/mL working concentration. Stable in solution for 14 days at 4°C.",
    relatedSlugs: ["semax", "epitalon", "nad-plus"],
    accentColor: "#3B82F6",
    penAvailable: true,
    penPrice: 109,
    forGender: "both",
  },
  {
    slug: "semax",
    name: "Semax",
    casNumber: "80714-61-0",
    formula: "C₃₇H₅₁N₉O₁₀S",
    molecularWeight: "813.92 g/mol",
    sequence: "Met-Glu-His-Phe-Pro-Gly-Pro (ACTH 4–10 analog)",
    purity: "≥99.2%",
    category: "Cognitive",
    price: 48,
    size: "5mg",
    dosages: [
      { size: "5mg", price: 48 },
      { size: "10mg", price: 60 },
    ],
    storage: "−20°C, desiccated. Aqueous solutions at 2–8°C stable 30 days.",
    appearance: "White lyophilized powder",
    solubility: "Freely soluble in water. Stable in aqueous solution at physiological pH.",
    tagline: "ACTH 4–10 analog. BDNF upregulation and neuroprotection research.",
    features: ["BDNF Upregulation", "Neuroprotection", "ACTH Analog", "≥99.2% Purity"],
    description:
      "Semax is a synthetic heptapeptide (Met-Glu-His-Phe-Pro-Gly-Pro) derived from the 4–10 fragment of adrenocorticotropic hormone (ACTH), developed at the Institute of Molecular Genetics of the Russian Academy of Sciences. Unlike full-length ACTH, Semax lacks melanocortin activity but retains and extends the nootropic and neuroprotective properties of the parent sequence.",
    mechanism:
      "Semax robustly upregulates BDNF (brain-derived neurotrophic factor) mRNA and protein expression in the hippocampus, prefrontal cortex, and basal forebrain. It activates BDNF-TrkB signaling cascades, promoting neuronal survival, synaptic plasticity, and neurogenesis in preclinical models. Additional neurotrophin effects include upregulation of NGF and VEGF expression. Semax modulates dopaminergic and serotonergic neurotransmission and demonstrates potent anti-inflammatory effects.",
    researchSummary:
      "Semax is an approved drug in Russia and Ukraine (tradename Semax, 0.1% and 1% nasal solutions) indicated for cognitive dysfunction and ischemic stroke. Multiple randomized controlled clinical trials in Russia have documented efficacy in post-stroke cognitive rehabilitation, cerebrovascular insufficiency, and optic nerve disorders. Research interest has expanded to ADHD-like phenotypes, anxiety, and stress models given the BDNF/dopamine interaction.",
    dosingProtocol:
      "Russian clinical approval uses intranasal 0.1% solution (200–2,000 μg/day in divided doses). Preclinical rodent studies employ 25–500 μg/kg subcutaneous or intranasal administration. In vitro neuroprotection research uses 1–1,000 nM.",
    reconstitution:
      "Reconstitute lyophilized powder in sterile water. For intranasal research delivery at 0.1%: dissolve 5 mg in 5 mL sterile water (1 mg/mL = 0.1% solution). For subcutaneous injection: working concentration 0.5–1 mg/mL. Solutions are stable 30 days at 4°C. Protect from light during storage.",
    relatedSlugs: ["selank", "epitalon", "nad-plus"],
    accentColor: "#3B82F6",
    penAvailable: true,
    penPrice: 109,
    forGender: "both",
  },
  {
    slug: "nad-plus",
    name: "NAD+",
    casNumber: "53-84-9",
    formula: "C₂₁H₂₇N₇O₁₄P₂",
    molecularWeight: "663.43 g/mol",
    purity: "≥99.5%",
    category: "Wellness",
    price: 48,
    size: "100mg",
    dosages: [
      { size: "100mg", price: 48 },
      { size: "500mg", price: 240 },
      { size: "1000mg", price: 360 },
    ],
    storage: "−20°C, anhydrous conditions. Highly hygroscopic — minimize atmospheric exposure. Stable 24 months.",
    appearance: "White to off-white crystalline powder",
    solubility: "Freely soluble in water (>200 mg/mL). Stable in neutral and slightly acidic pH.",
    tagline: "Nicotinamide adenine dinucleotide. Essential metabolic coenzyme and sirtuin substrate.",
    features: ["Sirtuin Substrate", "Mitochondrial Support", "DNA Repair", "≥99.5% Purity"],
    description:
      "Nicotinamide adenine dinucleotide (NAD⁺) is an essential pyridine nucleotide coenzyme present in all living cells. As a hydride acceptor and electron carrier, NAD⁺ participates in over 500 enzymatic reactions, making it indispensable for cellular energy metabolism, DNA repair, and gene expression regulation. NAD⁺ levels in human tissues decline progressively with age.",
    mechanism:
      "NAD⁺ serves as a substrate for three critical enzyme classes: sirtuins (SIRT1–7), poly-ADP-ribose polymerases (PARP1/2), and cyclic ADP-ribose synthases (CD38/CD157). SIRT1 and SIRT3 deacylate histones and regulatory proteins, influencing gene expression, mitochondrial biogenesis (via PGC-1α), and metabolic adaptation. SIRT6 promotes DNA double-strand break repair and telomere maintenance. PARP1/2 consume NAD⁺ for ADP-ribosylation in DNA damage response.",
    researchSummary:
      "NAD⁺ precursor supplementation research (NMN, NR) has demonstrated tissue NAD⁺ elevation across multiple human clinical trials. Direct NAD⁺ IV administration studies have examined pharmacokinetics and tissue distribution. David Sinclair's group and others have published extensively on NAD⁺ restoration and its effects on age-related metabolic parameters. A 2023 clinical trial demonstrated skeletal muscle transcriptomic changes consistent with improved mitochondrial function.",
    dosingProtocol:
      "In vitro enzyme activity assays typically use 0.1–10 mM NAD⁺ in reaction buffers. Cell culture research: 0.5–5 mM supplementation to culture media. For ex vivo tissue preparations: concentration depends on tissue type and experimental endpoint. IV infusion research in animal models uses various doses per protocol.",
    reconstitution:
      "Dissolve in sterile water, PBS (pH 7.4), or appropriate research buffer. NAD⁺ is stable in neutral pH at room temperature for several hours. For long-term use, prepare concentrated stock, aliquot, and store at −80°C. Avoid repeated freeze-thaw cycles.",
    relatedSlugs: ["epitalon", "ghk-cu", "selank"],
    accentColor: "#22C55E",
    penAvailable: true,
    penPrice: 169,
    forGender: "both",
  },
  {
    slug: "pt-141",
    name: "PT-141",
    casNumber: "189691-06-3",
    formula: "C₅₀H₆₈N₁₄O₁₀",
    molecularWeight: "1025.17 g/mol",
    sequence: "Ac-Nle-c[Asp-His-D-Phe-Arg-Trp-Lys]-OH (cyclic heptapeptide, C-terminal free acid)",
    purity: "≥98.5%",
    category: "Wellness",
    price: 96,
    size: "10mg",
    dosages: [
      { size: "10mg", price: 96 },
    ],
    storage: "−20°C, desiccated, protected from light.",
    appearance: "White lyophilized powder",
    solubility: "Soluble in water at ≥1 mg/mL. Saline and aqueous buffers compatible.",
    tagline: "Bremelanotide — approved melanocortin agonist. MC3R/MC4R CNS research compound.",
    features: ["FDA Approved Analog", "MC4R Agonist", "CNS Active", "≥98.5% Purity"],
    description:
      "PT-141 (Bremelanotide) is the C-terminal free acid form of Melanotan-II. FDA-approved in 2019 under the tradename Vyleesi (Palatin Technologies / AMAG Pharmaceuticals) for hypoactive sexual desire disorder (HSDD) in premenopausal women, making it the first melanocortin-based approved therapy. As a research compound, PT-141 is used to study MC3R and MC4R signaling pathways.",
    mechanism:
      "PT-141 activates melanocortin MC3R and MC4R subtypes in the CNS with high selectivity. Unlike PDE5 inhibitors (sildenafil), PT-141 acts centrally via the hypothalamic-limbic axis rather than peripherally on vascular smooth muscle. MC4R activation in the medial preoptic area and paraventricular nucleus modulates dopaminergic and serotonergic pathways associated with motivational and reward circuits.",
    researchSummary:
      "Phase I through III clinical development culminated in FDA approval for HSDD. RECONNECT trials demonstrated statistically significant improvement in satisfying sexual events (SSEs) and reduced personal distress compared to placebo. Unlike PDE5 inhibitors, efficacy does not depend on exogenous sexual stimulation. Post-marketing research continues on broader autonomic and appetite-regulatory effects through MC4R.",
    dosingProtocol:
      "FDA-approved clinical use: 1.75 mg subcutaneous injection 45 minutes prior to sexual activity (Vyleesi). Research doses in preclinical models: 0.1–1 mg/kg subcutaneous or intranasal. In vitro MC receptor research: 1–1000 nM.",
    reconstitution:
      "Reconstitute with bacteriostatic water. Add 1 mL per 10 mg vial for 10 mg/mL concentrated stock. Dilute to working concentration in sterile saline. Protect from light throughout handling. Stable 21 days at 4°C after reconstitution.",
    relatedSlugs: ["melanotan-ii", "nad-plus", "selank"],
    accentColor: "#22C55E",
    penAvailable: true,
    penPrice: 139,
    forGender: "both",
  },
  {
    slug: "melanotan-ii",
    name: "Melanotan-II",
    casNumber: "121062-08-6",
    formula: "C₅₀H₆₉N₁₅O₉",
    molecularWeight: "1024.18 g/mol",
    sequence: "Ac-Nle-c[Asp-His-D-Phe-Arg-Trp-Lys]-NH₂ (cyclic heptapeptide)",
    purity: "≥98.5%",
    category: "Wellness",
    price: 96,
    size: "10mg",
    dosages: [
      { size: "10mg", price: 96 },
    ],
    storage: "−20°C, desiccated, protected from light. Sensitive to UV degradation.",
    appearance: "White lyophilized powder",
    solubility: "Soluble in water at ≥1 mg/mL. Slightly acidic pH improves dissolution.",
    tagline: "Cyclic melanocortin agonist. Melanocyte stimulation and autonomic research.",
    features: ["MC1R Agonist", "Cyclic Peptide", "Melanogenesis", "≥98.5% Purity"],
    description:
      "Melanotan-II (MT-II) is a cyclic analog of alpha-melanocyte-stimulating hormone (α-MSH), developed at the University of Arizona by Victor Hruby's group in the early 1980s. The lactam bridge (Asp-Lys) confers conformational rigidity, improving metabolic stability and receptor binding affinity relative to the linear α-MSH sequence.",
    mechanism:
      "MT-II activates all four canonical melanocortin receptors: MC1R (melanogenesis), MC3R and MC4R (energy homeostasis and reproductive function), and MC5R (exocrine gland function). MC1R activation in melanocytes stimulates eumelanin synthesis via cAMP-dependent PKA activation, upregulating tyrosinase expression. CNS MC4R activation in the hypothalamic paraventricular nucleus modulates appetite and autonomic nervous system activity.",
    researchSummary:
      "Bremelanotide (PT-141), a closely related analog, received FDA approval in 2019 for hypoactive sexual desire disorder. MT-II itself has been studied in Phase I/II clinical trials for sunless tanning and erectile dysfunction. Research interest continues in CNS MC4R signaling, obesity models, and autonomic function.",
    dosingProtocol:
      "Preclinical rodent studies for melanogenesis research: 0.3–1 mg/kg subcutaneous injection. CNS research protocols vary by endpoint. In vitro MC receptor binding assays: 1–1000 nM. Appropriate institutional approvals required for all animal studies.",
    reconstitution:
      "Reconstitute with bacteriostatic water. Typical working concentration 1 mg/mL. Store reconstituted solution at 4°C for up to 21 days. Protect from light; amber vials recommended. Do not expose to direct sunlight.",
    relatedSlugs: ["pt-141", "nad-plus", "aod-9604"],
    accentColor: "#22C55E",
    penAvailable: true,
    penPrice: 129,
    forGender: "both",
  },
  {
    slug: "thymosin-alpha-1",
    name: "Thymosin Alpha-1",
    casNumber: "62304-98-7",
    formula: "C₁₂₉H₂₁₅N₃₃O₅₅",
    molecularWeight: "3108.32 g/mol",
    sequence: "Ac-Ser-Asp-Ala-Ala-Val-Asp-Thr-Ser-Ser-Glu-Ile-Thr-Thr-Lys-Asp-Leu-Lys-Glu-Lys-Lys-Glu-Val-Val-Glu-Glu-Ala-Glu-Asn-OH",
    purity: "≥99.0%",
    category: "Wellness",
    price: 119,
    size: "5mg",
    storage: "−20°C, desiccated. Lyophilized powder stable 24 months.",
    appearance: "White lyophilized powder",
    solubility: "Freely soluble in water at ≥1 mg/mL. Compatible with saline and PBS.",
    tagline: "Thymic immunomodulatory peptide. T-cell activation and immune balance research.",
    features: ["T-Cell Activation", "Immune Modulation", "Thymic Origin", "≥99.0% Purity"],
    description:
      "Thymosin Alpha-1 (Tα1) is a naturally occurring 28-amino acid peptide originally isolated from thymosin fraction 5 of bovine thymus tissue by Goldstein and colleagues. It represents the biologically active N-terminal fragment of prothymosin alpha. Tα1 has received regulatory approval in over 35 countries (tradename Zadaxin, SciClone Pharmaceuticals) for hepatitis B, hepatitis C, and as an immune adjuvant in cancer treatment.",
    mechanism:
      "Tα1 modulates T-cell differentiation and activation through several complementary mechanisms. It enhances MHC class I expression on tumor cells and infected cells, improving antigen presentation and CTL recognition. Tα1 upregulates the production of Th1 cytokines (IL-2, IFN-γ) while modulating the balance between Th1 and Th2 responses. It activates natural killer (NK) cells and dendritic cells, promoting innate immune surveillance. At the molecular level, Tα1 signals through Toll-like receptor (TLR) pathways to activate NF-κB and downstream inflammatory programs.",
    researchSummary:
      "Phase III clinical data supporting FDA approval of Zadaxin in multiple jurisdictions demonstrate improved response rates in chronic hepatitis B and C when combined with interferon therapy. Cancer adjuvant studies show improved vaccine immunogenicity and T-cell responses. COVID-19 research explored Tα1's role in modulating the inflammatory response in severe disease. Immune deficiency research continues to examine its role in T-cell reconstitution post-chemotherapy.",
    dosingProtocol:
      "Approved clinical dosing: 1.6 mg subcutaneous injection twice weekly. Research models in rodents: 100–400 μg/kg subcutaneous injection. In vitro T-cell activation assays: 0.1–100 nM. All research use requires appropriate institutional approvals.",
    reconstitution:
      "Reconstitute with sterile water for injection. Add 1 mL per 5 mg vial for 5 mg/mL stock. For working concentrations, dilute in sterile saline. Stable 7 days at 2–8°C after reconstitution. Do not freeze reconstituted solution.",
    relatedSlugs: ["ll-37", "nad-plus", "selank"],
    accentColor: "#22C55E",
    penAvailable: false,
    penPrice: 0,
    forGender: "both",
  },
  {
    slug: "ll-37",
    name: "LL-37",
    casNumber: "154947-66-7",
    formula: "C₂₀₅H₃₄₀N₆₀O₅₃S",
    molecularWeight: "4493.39 g/mol",
    sequence: "LLGDFFRKSKEKIGKEFKRIVQRIKDFLRNLVPRTES (37 amino acids)",
    purity: "≥98.5%",
    category: "Wellness",
    price: 129,
    size: "5mg",
    storage: "−20°C, desiccated. Lyophilized stable 24 months.",
    appearance: "White lyophilized powder",
    solubility: "Soluble in water at ≥1 mg/mL. Soluble in PBS at physiological pH.",
    tagline: "Human cathelicidin antimicrobial peptide. Innate immunity and wound healing research.",
    features: ["Antimicrobial", "Wound Healing", "Immunomodulatory", "≥98.5% Purity"],
    description:
      "LL-37 is the only member of the cathelicidin family of antimicrobial peptides expressed in humans. It is derived from the C-terminal cleavage of the human cathelicidin hCAP-18 protein by proteinase 3. LL-37 is expressed in neutrophils, epithelial cells, and various immune cell populations, serving as a first-line defense against pathogens at mucosal surfaces and in wound environments.",
    mechanism:
      "LL-37 exerts antimicrobial activity through multiple mechanisms: disruption of bacterial membrane integrity via electrostatic interaction with negatively charged phospholipids, neutralization of lipopolysaccharide (LPS) to prevent TLR4 activation, and direct killing of gram-positive and gram-negative bacteria, fungi, and enveloped viruses. Beyond antimicrobial activity, LL-37 modulates immune responses through chemokine and cytokine regulation, promotes angiogenesis via FPR2 receptor signaling, and accelerates wound healing by stimulating keratinocyte migration and proliferation.",
    researchSummary:
      "In vitro studies demonstrate broad-spectrum antimicrobial activity against clinically relevant pathogens including MRSA, P. aeruginosa, and C. albicans. Wound healing research documents accelerated re-epithelialization and granulation tissue formation in preclinical models. Inflammatory bowel disease research has examined LL-37 deficiency in intestinal epithelium. Cancer immunology research explores its role in tumor immunosurveillance through NK cell and dendritic cell activation.",
    dosingProtocol:
      "In vitro antimicrobial MIC assays: 0.5–16 μg/mL against standard bacterial panels. Wound healing cell migration assays: 0.1–10 μg/mL. In vivo rodent wound healing: 50–200 μg/wound topical application. Systemic preclinical studies use 1–5 mg/kg subcutaneous or intraperitoneal injection. All research requires IACUC approval.",
    reconstitution:
      "Reconstitute with sterile water or PBS (pH 7.4). Add 1–2 mL per 5 mg vial. Gently swirl — LL-37 tends to aggregate; sonication may be required. Working concentration 1–5 mg/mL. Stable 14 days at 4°C. Avoid glass surfaces (use polypropylene tubes).",
    relatedSlugs: ["thymosin-alpha-1", "bpc-157", "tb-500"],
    accentColor: "#22C55E",
    penAvailable: false,
    penPrice: 0,
    forGender: "both",
  },
  // --- NEW PRODUCTS ---
  {
    slug: "mots-c",
    name: "MOTS-c",
    casNumber: "1627580-64-6",
    formula: "C₁₀₀H₁₅₈N₂₈O₂₉S",
    molecularWeight: "2174.55 g/mol",
    sequence: "Tyr-Arg-Trp-Leu-Cys-Ser-Thr-His-Trp-Gly-Val-Val-Pro-Pro-Arg-Met-Ala-Ser (16 aa)",
    purity: "≥98.5%",
    category: "Anti-Aging",
    price: 240,
    size: "10mg",
    dosages: [
      { size: "10mg", price: 240 },
      { size: "20mg", price: 276 },
    ],
    storage: "−20°C, desiccated, protect from light. Lyophilized stable 24 months.",
    appearance: "White lyophilized powder",
    solubility: "Soluble in sterile water at ≥1 mg/mL.",
    tagline: "Mitochondria-derived peptide. Metabolic regulation and exercise mimetic research.",
    features: ["Mitochondrial Origin", "AMPK Activation", "Insulin Sensitivity", "≥98.5% Purity"],
    description:
      "MOTS-c (Mitochondrial Open Reading Frame of the 12S rRNA type-c) is a 16-amino acid peptide encoded by the mitochondrial genome. Discovered in 2015 by Lee et al. at USC, it represents a new class of mitochondria-derived peptides (MDPs) that communicate between mitochondria and the nucleus. Circulating MOTS-c levels decline with age and correlate with metabolic health markers.",
    mechanism:
      "MOTS-c translocates to the nucleus under metabolic stress, activating AMPK and regulating nuclear gene expression to improve cellular stress resistance. It enhances insulin sensitivity by modulating the AICAR/AMPK pathway in skeletal muscle, independent of insulin receptor signaling. MOTS-c inhibits the folate cycle and de novo purine biosynthesis, redirecting one-carbon metabolism toward energy homeostasis.",
    researchSummary:
      "Preclinical studies demonstrate that MOTS-c supplementation reverses age-dependent insulin resistance and obesity in mouse models. Exercise research shows MOTS-c mediates some skeletal muscle adaptations to physical activity. Longevity associations have been found with specific MOTS-c variants in centenarian populations. Human observational studies correlate plasma MOTS-c levels with metabolic syndrome risk factors.",
    dosingProtocol:
      "Preclinical rodent studies use 5–15 mg/kg subcutaneous injection for metabolic research. In vitro cell culture experiments use 1–100 nM. Early human research employed 10–50 mg subcutaneous doses. All research requires appropriate institutional approvals.",
    reconstitution:
      "Reconstitute with sterile bacteriostatic water. Add 1 mL per 5 mg for a 5 mg/mL stock. Store reconstituted at 4°C up to 14 days or −20°C up to 3 months. Avoid repeated freeze-thaw.",
    relatedSlugs: ["nad-plus", "epitalon", "ghk-cu"],
    accentColor: "#22C55E",
    penAvailable: true,
    penPrice: 159,
    forGender: "both",
  },
  {
    slug: "ss-31",
    name: "SS-31 (Elamipretide)",
    casNumber: "736992-21-5",
    formula: "C₃₂H₄₈N₈O₇",
    molecularWeight: "639.77 g/mol",
    sequence: "D-Arg-2'6'-Dmt-Lys-Phe-NH₂ (tetrapeptide)",
    purity: "≥98.5%",
    category: "Anti-Aging",
    price: 144,
    size: "10mg",
    dosages: [
      { size: "10mg", price: 144 },
      { size: "50mg", price: 480 },
    ],
    storage: "−20°C, desiccated. Lyophilized stable 24 months.",
    appearance: "White lyophilized powder",
    solubility: "Freely soluble in water at ≥1 mg/mL. Stable in saline.",
    tagline: "Mitochondria-targeting tetrapeptide. Cardiolipin interaction and energy restoration research.",
    features: ["Mitochondria Targeting", "Cardiolipin Binding", "ATP Synthesis", "≥98.5% Purity"],
    description:
      "SS-31 (Elamipretide, MTP-131) is a synthetic aromatic-cationic tetrapeptide developed by Hazel Szeto at Cornell Medical. The alternating aromatic and cationic residue structure allows selective accumulation in the inner mitochondrial membrane (IMM) where it concentrates at cardiolipin-rich domains, reaching ~1000-fold higher concentrations than the cytoplasm.",
    mechanism:
      "SS-31 interacts directly with cardiolipin in the IMM, stabilizing cristae architecture and preserving optimal electron transport chain (ETC) complex I–IV organization. This reduces electron leak, minimizing reactive oxygen species (ROS) production at the source. SS-31 also stabilizes cytochrome c in the pro-electron-carrier conformation rather than the pro-apoptotic peroxidase conformation, improving ATP synthesis efficiency.",
    researchSummary:
      "SS-31 has demonstrated remarkable efficacy in preclinical models of cardiac ischemia-reperfusion injury, heart failure, Barth syndrome, age-related metabolic decline, and renal ischemia. Phase II clinical trials in heart failure with preserved ejection fraction (TOPCAT extension), Barth syndrome, and limb-girdle muscular dystrophy have been conducted. The MMPOWER and MMPOWER-3 trials in primary mitochondrial myopathy showed significant functional improvements.",
    dosingProtocol:
      "Preclinical cardiac ischemia studies: 3 mg/kg subcutaneous or intravenous. Clinical trials have used 0.1–0.25 mg/kg intravenous infusion over 2 hours. In vitro mitochondrial function assays: 10–1000 nM. All research requires institutional approvals.",
    reconstitution:
      "Reconstitute with sterile water or PBS. Add 1–2 mL per 10 mg vial. Gently swirl to dissolve. Working concentration 2–5 mg/mL. Store reconstituted at 4°C up to 7 days; −20°C up to 6 months.",
    relatedSlugs: ["mots-c", "nad-plus", "epitalon"],
    accentColor: "#8B5CF6",
    penAvailable: true,
    penPrice: 249,
    forGender: "both",
  },
  {
    slug: "tesamorelin",
    name: "Tesamorelin",
    casNumber: "804466-72-0",
    formula: "C₂₂₁H₃₆₃N₆₅O₅₈S",
    molecularWeight: "5135.83 g/mol",
    sequence: "Trans-3-hexenoic acid-Tyr-Ala-Asp-Ala-Ile-Phe-Thr-Asn-Ser-Tyr-Arg-Lys-Val-Leu-Gly-Gln-Leu-Ser-Ala-Arg-Lys-Leu-Leu-Gln-Asp-Ile-Met-Ser-Arg-NH₂",
    purity: "≥98.5%",
    category: "Growth Hormone",
    price: 144,
    size: "5mg",
    dosages: [
      { size: "5mg", price: 144 },
      { size: "10mg", price: 264 },
    ],
    storage: "2–8°C, protect from light. Refrigerate; do not freeze. Stable 18 months.",
    appearance: "White lyophilized powder",
    solubility: "Soluble in sterile water at 1–2 mg/mL.",
    tagline: "FDA-approved GHRH analog. Visceral adiposity reduction and body composition research.",
    features: ["FDA Approved (Egrifta)", "GHRH Analog", "Visceral Fat Reduction", "≥98.5% Purity"],
    description:
      "Tesamorelin (TH9507) is a synthetic analog of human GHRH(1-44) with a trans-3-hexenoic acid addition at the N-terminus, conferring improved stability against DPP-4 degradation. FDA approved in 2010 (Egrifta, Theratechnologies) for reduction of excess abdominal fat in HIV-infected patients with lipodystrophy — making it one of the few approved GHRH analogs.",
    mechanism:
      "Tesamorelin binds the GHRH receptor (GHRHR) on anterior pituitary somatotrophs, stimulating pulsatile GH secretion via cAMP/PKA signaling. Increased GH drives IGF-1 elevation, which modulates adipocyte lipolysis particularly in visceral adipose tissue. The N-terminal modification resists DPP-4 cleavage, extending the active half-life to approximately 26 minutes compared to 7 minutes for native GHRH.",
    researchSummary:
      "Phase III LIPO clinical trials demonstrated statistically significant reductions in visceral adipose tissue (VAT) and trunk fat in HIV-lipodystrophy patients. Research has also examined effects on cardiovascular risk markers, cognitive function (in MCI populations), and non-alcoholic fatty liver disease (NAFLD). A 2022 study showed improvements in liver fat content and metabolic markers in NAFLD subjects.",
    dosingProtocol:
      "FDA-approved HIV lipodystrophy dosing: 2 mg subcutaneous injection once daily. Research protocols in non-HIV populations use 1–2 mg/day. Preclinical rodent studies: 100–300 μg/kg. All research requires appropriate institutional approvals.",
    reconstitution:
      "Reconstitute with sterile water. Add 0.5–2 mL per 2 mg vial. Gently swirl until dissolved. Working concentration 1 mg/mL. Refrigerate reconstituted solution; use within 3 days. Do not freeze reconstituted product.",
    relatedSlugs: ["sermorelin", "cjc-1295", "ipamorelin"],
    accentColor: "#C9A24B",
    penAvailable: true,
    penPrice: 149,
    forGender: "both",
  },
  {
    slug: "cjc-1295-no-dac",
    name: "CJC-1295 No DAC",
    casNumber: "N/A (synthetic GRF 1-29 analog)",
    formula: "C₁₅₂H₂₅₂N₄₄O₄₂",
    molecularWeight: "3367.96 g/mol",
    sequence: "Tyr-D-Ala-Asp-Ala-Ile-Phe-Thr-Gln-Ser-Tyr-Arg-Lys-Val-Leu-Ala-Gln-Leu-Ser-Ala-Arg-Lys-Leu-Leu-Gln-Asp-Ile-Leu-Ser-Arg-NH₂ (no DAC modification)",
    purity: "≥98.5%",
    category: "Growth Hormone",
    price: 96,
    size: "5mg",
    dosages: [
      { size: "5mg", price: 96 },
      { size: "10mg", price: 96 },
    ],
    storage: "−20°C, desiccated. Lyophilized stable 24 months.",
    appearance: "White lyophilized powder",
    solubility: "Soluble in water and dilute acetic acid (0.1%) at ≥1 mg/mL.",
    tagline: "Modified GRF 1-29. Short-acting GHRH analog for pulsatile GH research.",
    features: ["Short-Acting GHRH", "No Albumin Binding", "Pulsatile GH", "≥98.5% Purity"],
    description:
      "CJC-1295 No DAC (also known as Modified GRF 1-29 or Mod GRF) is the tetrasubstituted GHRH(1-29) analog without the Drug Affinity Complex modification. Unlike CJC-1295 with DAC, it does not covalently bind albumin, resulting in a plasma half-life of approximately 30 minutes. This shorter profile enables controlled pulsatile GH release studies without the extended elevation produced by the DAC version.",
    mechanism:
      "Binds and activates the GHRH receptor (GHRHR) on pituitary somatotrophs, stimulating cAMP production and pulsatile GH secretion. The four amino acid substitutions (Ala², Gln⁸, Ala¹⁵, Leu²⁷) confer resistance to DPP-4 and aminopeptidase cleavage, extending half-life from native GHRH's ~7 minutes to ~30 minutes. The absence of DAC means no albumin binding and no prolonged GH elevation.",
    researchSummary:
      "Widely used in combination with Ipamorelin in research protocols studying synergistic GH secretion. The short-acting profile allows researchers to model discrete GH pulses without the 6–8 day baseline elevation produced by CJC-1295 with DAC. Multiple publications describe combination protocols with GHRP compounds for body composition research.",
    dosingProtocol:
      "Research protocols typically use 100–200 μg subcutaneous injection in combination with Ipamorelin, 1–3 times daily. Preclinical rodent studies: 10–100 μg/kg. All protocols are for research reference only and require institutional approvals.",
    reconstitution:
      "Reconstitute with bacteriostatic water. Add 2 mL per 2 mg for 1 mg/mL working stock. Dilute further in sterile saline as needed. Store reconstituted at 4°C up to 14 days, −20°C up to 3 months. Avoid vortexing.",
    relatedSlugs: ["cjc-1295", "ipamorelin", "sermorelin"],
    accentColor: "#C9A24B",
    penAvailable: false,
    penPrice: 0,
    forGender: "men-focus",
  },
  {
    slug: "dsip",
    name: "DSIP",
    casNumber: "62568-57-4",
    formula: "C₃₅H₄₈N₁₀O₁₅",
    molecularWeight: "848.81 g/mol",
    sequence: "Trp-Ala-Gly-Gly-Asp-Ala-Ser-Gly-Glu (nonapeptide)",
    purity: "≥98.5%",
    category: "Cognitive",
    price: 144,
    size: "10mg",
    dosages: [
      { size: "10mg", price: 144 },
    ],
    storage: "−20°C, desiccated. Lyophilized stable 24 months.",
    appearance: "White lyophilized powder",
    solubility: "Freely soluble in water. Stable in saline and PBS.",
    tagline: "Delta sleep-inducing peptide. Sleep architecture and neuroendocrine regulation research.",
    features: ["Sleep Regulation", "Stress Adaptation", "Neuroendocrine", "≥98.5% Purity"],
    description:
      "DSIP (Delta Sleep-Inducing Peptide) is a neuromodulatory nonapeptide first isolated from the cerebral venous blood of rabbits in a state of natural sleep by Schoenenberger and Monnier in 1974. It is found endogenously in the hypothalamus, limbic system, pituitary, and adrenal glands. DSIP is notable for its ability to cross the blood-brain barrier and modulate multiple neuroendocrine pathways.",
    mechanism:
      "DSIP modulates the amplitude of EEG delta waves and promotes slow-wave (stage 3–4) sleep. It regulates GH and LH pulsatile release through hypothalamic-pituitary axis effects. DSIP downregulates basal corticotropin (ACTH) and normalizes cortisol levels in stress models, suggesting adaptogenic properties. It also affects opiate peptide signaling, somatostatin release, and exhibits antioxidant activity in in vitro models.",
    researchSummary:
      "Sleep research in animal models documents consistent EEG delta-wave induction following DSIP administration. Human studies have examined DSIP in chronic pain-related sleep disorders and opiate withdrawal management with mixed results. Stress adaptation research has examined DSIP's cortisol-normalizing effects. Its broad neuroendocrine effects make it a useful research tool for hypothalamic-pituitary axis studies.",
    dosingProtocol:
      "Animal sleep research: 30 nmol/kg intravenous injection. Human pharmacology studies used 25–50 μg/kg IV infusion. Subcutaneous rodent studies: 100–500 μg/kg. In vitro neuroendocrine receptor binding: 1–100 nM. All research requires appropriate institutional approvals.",
    reconstitution:
      "Reconstitute with sterile water or saline. Add 1 mL per 5 mg for 5 mg/mL stock. Dilute to working concentration in sterile saline or PBS. Stable 14 days at 4°C, 3 months at −20°C. Avoid repeated freeze-thaw cycles.",
    relatedSlugs: ["selank", "semax", "epitalon"],
    accentColor: "#3B82F6",
    penAvailable: false,
    penPrice: 0,
    forGender: "both",
  },
  {
    slug: "kisspeptin",
    name: "Kisspeptin-10",
    casNumber: "374675-21-5",
    formula: "C₆₃H₈₃N₁₅O₁₃",
    molecularWeight: "1302.43 g/mol",
    sequence: "Tyr-Asn-Trp-Asn-Ser-Phe-Gly-Leu-Arg-Phe-amide (10 aa C-terminal fragment)",
    purity: "≥98.5%",
    category: "Wellness",
    price: 84,
    size: "5mg",
    dosages: [
      { size: "5mg", price: 84 },
    ],
    storage: "−20°C, desiccated. Lyophilized stable 24 months.",
    appearance: "White lyophilized powder",
    solubility: "Soluble in sterile water at ≥1 mg/mL. Compatible with saline.",
    tagline: "GPR54 agonist. Reproductive axis activation and GnRH pulse regulation research.",
    features: ["GPR54 Agonist", "GnRH Stimulation", "Reproductive Axis", "≥98.5% Purity"],
    description:
      "Kisspeptin-10 is the bioactive C-terminal decapeptide of kisspeptin, the endogenous ligand for the GPR54 (Kiss1R) receptor. The kisspeptin/GPR54 system was discovered as a key upstream regulator of GnRH pulse generation and reproductive axis activation. Kisspeptin neurons in the hypothalamic arcuate nucleus (KNDy neurons) integrate hormonal feedback signals to drive reproductive hormone cycling.",
    mechanism:
      "Kisspeptin activates GPR54 (a Gαq/11-coupled GPCR) on GnRH neurons in the hypothalamus, triggering pulsatile GnRH release. Downstream gonadotropin (LH and FSH) pulses drive gonadal steroid synthesis. The kisspeptin system integrates sex steroid negative and positive feedback, leptin-mediated nutritional status signals, and circadian cues to coordinate reproductive physiology. Deficiencies in GPR54 signaling cause hypogonadotropic hypogonadism.",
    researchSummary:
      "Human pharmacology studies with IV kisspeptin demonstrate robust LH and downstream testosterone elevation. Research has examined kisspeptin in hypogonadotropic hypogonadism, fertility induction, PCOS, and hypothalamic amenorrhea. Studies in men show significant LH and testosterone increases following subcutaneous kisspeptin injection. The compound is also studied for its role in sexual motivation via central circuits.",
    dosingProtocol:
      "Human pharmacology IV studies: 0.1–10 nmol/kg bolus. Subcutaneous research protocols: 1–6.4 nmol/kg. Rodent reproductive studies: 10–100 nmol intra-arterial or ICV injection. In vitro GPR54 assays: 1–1000 nM. All research requires appropriate institutional approvals.",
    reconstitution:
      "Reconstitute with sterile water for injection. Add 1 mL per 5 mg for 5 mg/mL stock. Store reconstituted at 4°C up to 14 days. For in vivo research: dilute to working concentration in physiological saline.",
    relatedSlugs: ["pt-141", "thymosin-alpha-1", "nad-plus"],
    accentColor: "#22C55E",
    penAvailable: false,
    penPrice: 0,
    forGender: "both",
  },
  {
    slug: "oxytocin",
    name: "Oxytocin",
    casNumber: "50-56-6",
    formula: "C₄₃H₆₆N₁₂O₁₂S₂",
    molecularWeight: "1007.19 g/mol",
    sequence: "Cys-Tyr-Ile-Gln-Asn-Cys-Pro-Leu-Gly-NH₂ (nonapeptide with disulfide bridge)",
    purity: "≥99.0%",
    category: "Wellness",
    price: 72,
    size: "5mg",
    dosages: [
      { size: "5mg", price: 72 },
    ],
    storage: "−20°C, desiccated, protect from light. Lyophilized stable 24 months.",
    appearance: "White lyophilized powder",
    solubility: "Freely soluble in water. Stable in slightly acidic aqueous solutions.",
    tagline: "Endogenous hypothalamic nonapeptide. Social bonding, trust, and autonomic research.",
    features: ["Social Neuroscience", "CNS Active", "Hypothalamic Origin", "≥99.0% Purity"],
    description:
      "Oxytocin is a 9-amino acid cyclic nonapeptide synthesized in the hypothalamic paraventricular (PVN) and supraoptic (SON) nuclei. FDA-approved as Pitocin and Syntocinon for obstetric indications, oxytocin is a foundational research tool in social neuroscience, neuroendocrinology, autonomic regulation, and gastrointestinal physiology. Its roles in social cognition, trust, and pair bonding have generated extensive translational research programs.",
    mechanism:
      "Oxytocin binds OXTR (a Gαq-coupled GPCR), triggering IP3/DAG second messenger cascades. In the CNS, OXTR expression in the amygdala, hippocampus, and nucleus accumbens modulates social behavior, fear extinction, and reward circuits. Peripheral OXTR signaling in uterine smooth muscle, mammary gland myoepithelium, cardiac tissue, and the enteric nervous system governs numerous physiological functions. Intranasal administration delivers oxytocin to the brain via trigeminal pathways.",
    researchSummary:
      "Thousands of published studies examine oxytocin in social cognition, autism spectrum disorder, PTSD, depression, addiction, and pain. The translational literature is extensive — oxytocin intranasal administration reliably elevates prosocial behavior, reduces amygdala reactivity to threat stimuli, and modulates hypothalamic-pituitary-adrenal axis responses to stress in human subjects.",
    dosingProtocol:
      "Human intranasal research studies: 24–40 IU (international units) per administration. IV pharmacology: 0.5–10 mU/min infusion for receptor characterization. Rodent behavioral studies: 0.1–1 mg/kg subcutaneous or ICV microinjection. All research requires appropriate institutional approvals.",
    reconstitution:
      "Reconstitute with sterile 0.9% saline or PBS. For intranasal research formulations, standard concentration is 40 IU/mL. For cell culture receptor studies: 1 μg/mL stock in PBS. Stable 14 days at 4°C; 3 months at −20°C.",
    relatedSlugs: ["selank", "kisspeptin", "pt-141"],
    accentColor: "#22C55E",
    penAvailable: false,
    penPrice: 0,
    forGender: "both",
  },
  {
    slug: "kpv",
    name: "KPV",
    casNumber: "13467-76-0",
    formula: "C₁₆H₂₅N₅O₆",
    molecularWeight: "399.41 g/mol",
    sequence: "Lys-Pro-Val (tripeptide, C-terminal fragment of alpha-MSH)",
    purity: "≥99.0%",
    category: "Recovery & Healing",
    price: 96,
    size: "10mg",
    dosages: [
      { size: "10mg", price: 96 },
    ],
    storage: "−20°C, desiccated. Lyophilized stable 24 months.",
    appearance: "White lyophilized powder",
    solubility: "Freely soluble in water and PBS at all concentrations tested.",
    tagline: "Alpha-MSH C-terminal tripeptide. Potent anti-inflammatory and gut health research.",
    features: ["Anti-Inflammatory", "MC1R/MC3R Signaling", "Gut Barrier", "≥99.0% Purity"],
    description:
      "KPV (Lys-Pro-Val) is the biologically active C-terminal tripeptide of alpha-melanocyte-stimulating hormone (alpha-MSH). Research by Catania and colleagues demonstrated that this minimal fragment retains the full anti-inflammatory and antipyretic activity of the parent peptide. KPV's small size enables oral bioavailability and intestinal permeability, making it particularly relevant for gastrointestinal inflammation research.",
    mechanism:
      "KPV activates melanocortin receptors MC1R and MC3R, triggering cAMP-dependent suppression of NF-κB activation and downstream pro-inflammatory cytokine production (IL-1β, TNF-α, IL-6). In intestinal epithelial cells, KPV inhibits cytokine-induced barrier dysfunction and reduces permeability. It also modulates MAPK signaling pathways to reduce inflammatory gene transcription without the immunosuppressive effects of corticosteroids.",
    researchSummary:
      "IBD research demonstrates KPV reduces colitis severity in DSS and TNBS mouse models with effects comparable to mesalazine at lower doses. In vitro studies with Caco-2 intestinal epithelial cells document reduced barrier permeability under inflammatory conditions. Systemic anti-inflammatory research in rodent models shows reduction of paw edema, fever, and systemic cytokine elevation. Oral nanoparticle delivery systems for colon-targeted KPV delivery have been developed.",
    dosingProtocol:
      "Preclinical colitis models: 0.05–0.5 mg/kg oral or 10–100 μg subcutaneous injection daily. In vitro intestinal epithelial assays: 0.1–100 μM. Topical wound healing research: 0.1–1 mg/mL in aqueous vehicle. All research requires appropriate institutional approvals.",
    reconstitution:
      "Reconstitute with sterile water. KPV is highly water-soluble; dissolves immediately at any practical concentration. Working concentration 1 mg/mL for injection research. Stable 30 days at 4°C, 6 months at −20°C.",
    relatedSlugs: ["bpc-157", "ll-37", "selank"],
    accentColor: "#4A9B8E",
    penAvailable: false,
    penPrice: 0,
    forGender: "both",
  },
  {
    slug: "wolverine-blend",
    name: "Wolverine Stack",
    casNumber: "Blend: 137525-51-0 / 77591-33-4",
    formula: "Blend: BPC-157 10mg + TB-500 10mg",
    molecularWeight: "Blend",
    purity: "≥99.0%",
    category: "Recovery & Healing",
    price: 120,
    size: "5/5mg blend",
    dosages: [
      { size: "5/5mg blend", price: 120 },
      { size: "10/10mg blend", price: 216 },
    ],
    storage: "−20°C, desiccated, protect from light. Lyophilized stable 24 months.",
    appearance: "White lyophilized powder",
    solubility: "Reconstitute each vial separately with bacteriostatic water.",
    tagline: "BPC-157 + TB-500 dual-vial protocol. The research gold standard for accelerated tissue repair.",
    features: ["Dual Protocol", "BPC-157 + TB-500", "Maximum Recovery", "≥99.0% Purity"],
    description:
      "The Wolverine Stack pairs BPC-157 (10mg) and TB-500 (10mg) as a dual-vial research protocol. BPC-157 is a 15-amino acid stable pentadecapeptide from gastric juice with well-documented angiogenic, tendon-healing, and neuroprotective properties in preclinical models. TB-500 is the biologically active fragment of thymosin beta-4 (Lys-Thr-Thr-Glu-Lys-Val-Phe-Asp-Lys-Ser-Ala-Val-Thr), the primary actin-sequestering peptide in mammalian tissues.",
    mechanism:
      "BPC-157 promotes angiogenesis via VEGF upregulation, activates the GH-STAT signaling pathway, and stabilizes the nitric oxide system. TB-500 sequesters G-actin through its LKKTETQ domain, driving cell migration and differentiation while activating MMPs for extracellular matrix remodeling. Together they address the two primary phases of tissue repair: inflammatory modulation/vascular formation (BPC-157) and structural remodeling/cell migration (TB-500).",
    researchSummary:
      "Both compounds individually have been studied in tendon, ligament, muscle, gut, and nerve repair models. Combined use has been examined in various preclinical injury models with reports of additive or synergistic effects on recovery timelines. The BPC-157/TB-500 combination is one of the most referenced dual-peptide research protocols in sports medicine and regenerative biology literature.",
    dosingProtocol:
      "Research protocols commonly employ both peptides in parallel: BPC-157 at 2–10 μg/kg and TB-500 at 2–4 mg/kg, administered subcutaneously. Timing and dosing vary by injury model and endpoint. All research requires appropriate institutional approvals.",
    reconstitution:
      "Reconstitute each vial separately with bacteriostatic water. BPC-157: add 2 mL per 10 mg vial (5 mg/mL). TB-500: add 2 mL per 10 mg vial (5 mg/mL). Do not mix in same syringe. Administer as separate subcutaneous injections. Store reconstituted vials at 4°C up to 30 days.",
    relatedSlugs: ["bpc-157", "tb-500", "ghk-cu"],
    accentColor: "#4A9B8E",
    penAvailable: true,
    penPrice: 199,
    forGender: "both",
  },
  {
    slug: "glow-blend",
    name: "GLOW Stack",
    casNumber: "Blend: 89030-95-5 / 307297-39-8 / 53-84-9",
    formula: "GHK-Cu 5mg + Epitalon 10mg + NAD+ 100mg",
    molecularWeight: "Blend",
    purity: "≥99.0%",
    category: "Anti-Aging",
    price: 300,
    size: "70mg protocol",
    dosages: [
      { size: "70mg protocol", price: 300 },
    ],
    storage: "−20°C, desiccated. Each compound stored per individual requirements.",
    appearance: "Blue-green (GHK-Cu), white (Epitalon), white crystalline (NAD+)",
    solubility: "Each component reconstituted separately per individual protocols.",
    tagline: "GHK-Cu + Epitalon + NAD+ longevity protocol. Skin, telomeres, and cellular energy.",
    features: ["Collagen + ECM", "Telomere Support", "NAD+ Metabolism", "≥99.0% Purity"],
    description:
      "GLOW is a curated three-compound longevity and aesthetic research protocol combining GHK-Cu (copper tripeptide), Epitalon (pineal tetrapeptide), and NAD+ (nicotinamide adenine dinucleotide). Each compound targets a distinct aspect of cellular aging: GHK-Cu restores extracellular matrix quality and collagen synthesis, Epitalon promotes telomerase activation and circadian normalization, and NAD+ replenishes the declining sirtuin substrate that drives mitochondrial and DNA repair function.",
    mechanism:
      "GHK-Cu upregulates TGF-β-mediated collagen synthesis, reduces MMP-1 degradative activity, and delivers bioavailable copper to antioxidant enzymes. Epitalon activates hTERT (telomerase reverse transcriptase) for telomere maintenance while normalizing pineal melatonin output and HPA axis cortisol patterns. NAD+ fuels SIRT1/SIRT3/SIRT6 deacylase activity for histone regulation, mitochondrial biogenesis via PGC-1α, and PARP-mediated DNA repair.",
    researchSummary:
      "Each component of the GLOW protocol has published preclinical and/or clinical research supporting longevity-related mechanisms. GHK-Cu genomic studies document modulation of 30+ aging-related genes. Epitalon's 30+ year research record includes longevity extension in multiple species. NAD+ precursor research has demonstrated tissue NAD+ elevation and improved metabolic parameters in human clinical trials.",
    dosingProtocol:
      "Research protocols for each compound are used per their individual dosing guidelines. GHK-Cu topical/subcutaneous. Epitalon subcutaneous courses. NAD+ IV/subcutaneous or oral precursor supplementation. All research requires appropriate institutional approvals.",
    reconstitution:
      "Reconstitute each vial per individual product instructions. GHK-Cu: dissolve in sterile water (1 mg/mL). Epitalon: 2 mg/mL in sterile water. NAD+: 50 mg/mL in PBS. Administer as per research protocol.",
    relatedSlugs: ["ghk-cu", "epitalon", "nad-plus"],
    accentColor: "#8B5CF6",
    penAvailable: false,
    penPrice: 0,
    forGender: "women-focus",
  },
  {
    slug: "klw-blend",
    name: "KLW Stack",
    casNumber: "Blend: 13467-76-0 / 154947-66-7 / 62304-98-7",
    formula: "KPV 10mg + LL-37 5mg + Thymosin Alpha-1 5mg",
    molecularWeight: "Blend",
    purity: "≥98.5%",
    category: "Wellness",
    price: 360,
    size: "80mg protocol",
    dosages: [
      { size: "80mg protocol", price: 360 },
    ],
    storage: "−20°C each vial, desiccated. Stable 24 months lyophilized.",
    appearance: "White lyophilized powder (all components)",
    solubility: "Reconstitute each vial separately with sterile water or PBS.",
    tagline: "KPV + LL-37 + Thymosin Alpha-1. Triple immune-modulation and gut-barrier protocol.",
    features: ["Immune Modulation", "Gut Barrier", "Antimicrobial", "≥98.5% Purity"],
    description:
      "KLW is a three-compound immune and mucosal defense research protocol combining KPV (anti-inflammatory MSH tripeptide), LL-37 (human cathelicidin AMP), and Thymosin Alpha-1 (thymic T-cell activator). Together they address inflammation (KPV), innate antimicrobial defense (LL-37), and adaptive immune competence (Thymosin Alpha-1) across overlapping but complementary pathways.",
    mechanism:
      "KPV suppresses NF-κB-driven cytokine production via MC1R/MC3R. LL-37 disrupts microbial membranes, neutralizes LPS endotoxin, and promotes mucosal healing through FPR2/ALX signaling. Thymosin Alpha-1 enhances dendritic cell maturation, MHC-I expression, and Th1 cytokine production for adaptive immune activation. The combination addresses the full innate-to-adaptive immune cascade with minimal receptor overlap.",
    researchSummary:
      "Each compound has established independent research pedigrees. Combined immune protocols are studied in oncology adjuvant settings, chronic infection models, inflammatory bowel research, and post-viral immune reconstitution contexts. Thymosin Alpha-1 (Zadaxin) has regulatory approval in 35+ countries as an immune adjuvant.",
    dosingProtocol:
      "Research protocols for each compound follow their individual guidelines. KPV oral or subcutaneous. LL-37 topical or subcutaneous. Thymosin Alpha-1 subcutaneous twice weekly. All research requires institutional approvals.",
    reconstitution:
      "Reconstitute each vial per individual product instructions. KPV in sterile water. LL-37 in PBS (polypropylene tubes only). Thymosin Alpha-1 in sterile water. Do not pre-mix compounds.",
    relatedSlugs: ["kpv", "ll-37", "thymosin-alpha-1"],
    accentColor: "#22C55E",
    penAvailable: false,
    penPrice: 0,
    forGender: "both",
  },
  {
    slug: "snap-8",
    name: "Snap-8",
    casNumber: "868844-74-0",
    formula: "C₄₁H₇₀N₁₀O₁₆",
    molecularWeight: "975.05 g/mol",
    sequence: "Ac-Glu-Glu-Met-Gln-Arg-Arg-Ala-Asp-NH₂ (octapeptide SNAP-25 mimic)",
    purity: "≥98.5%",
    category: "Anti-Aging",
    price: 72,
    size: "10mg",
    dosages: [
      { size: "10mg", price: 72 },
    ],
    storage: "2–8°C, protect from light. Stable 18 months. Do not freeze.",
    appearance: "White lyophilized powder",
    solubility: "Soluble in water at ≥5 mg/mL. For topical formulations: dissolve in propylene glycol/water.",
    tagline: "SNAP-25 octapeptide mimic. Expression line reduction and neuromuscular junction research.",
    features: ["SNARE Complex", "Neurotransmitter Inhibition", "Topical Research", "≥98.5% Purity"],
    description:
      "Snap-8 (Argireline extended) is a synthetic octapeptide (Ac-EEMQRRAD-NH₂) modeled on the N-terminal SNARE complex recognition sequence of SNAP-25. Developed as an extended-efficacy version of Argireline (hexapeptide), Snap-8 competitively inhibits SNARE complex formation in neuromuscular junctions, reducing acetylcholine vesicle fusion with presynaptic membranes and attenuating muscle contraction at the treatment site.",
    mechanism:
      "Snap-8 competes with endogenous SNAP-25 for binding to synaptobrevin and syntaxin in the SNARE complex, reducing the efficiency of acetylcholine vesicle exocytosis at neuromuscular junctions in facial muscles. Reduced facial muscle contraction attenuates dynamic wrinkle formation (expression lines) at the injection/application site. Unlike botulinum toxin, the effect is reversible and concentration-dependent without toxin-mediated SNAP-25 cleavage.",
    researchSummary:
      "In vitro studies demonstrate Snap-8 inhibits SNARE complex formation in a concentration-dependent manner. Topical clinical studies in dermatology research document reduction in expression line depth (crow's feet, forehead) with twice-daily application of 10% Snap-8 formulations over 4–8 weeks. Efficacy is reported as superior to 10% Argireline in comparative studies.",
    dosingProtocol:
      "Topical cosmeceutical research formulations: 1–10% w/w concentration in cream/serum vehicle. Apply twice daily to target areas in clinical observation studies. In vitro SNARE assays: 0.1–100 μM. Not approved for therapeutic use.",
    reconstitution:
      "Dissolve in a minimal volume of sterile water, then incorporate into topical vehicle. For direct topical application: 10% w/v aqueous solution (100 mg/mL) in propylene glycol/water 50:50. Stable 30 days in solution at 4°C.",
    relatedSlugs: ["ghk-cu", "epitalon", "nad-plus"],
    accentColor: "#8B5CF6",
    penAvailable: false,
    penPrice: 0,
    forGender: "women-focus",
  },
  {
    slug: "sterile-water-3ml",
    name: "Sterile Water for Injection — 3mL",
    casNumber: "7732-18-5",
    formula: "H₂O",
    molecularWeight: "18.02 g/mol",
    purity: "USP Grade",
    category: "Accessories",
    price: 12,
    size: "3mL vial",
    storage: "Room temperature, protect from light. Single-use; discard after opening.",
    appearance: "Clear, colorless sterile solution",
    solubility: "N/A",
    tagline: "USP-grade sterile water for injection. Lyophilized peptide reconstitution standard.",
    features: ["USP Grade", "Single-Use Vial", "Sterile Filtered", "Pyrogen Tested"],
    description:
      "Sterile Water for Injection USP, 3 mL vial. Meets United States Pharmacopeia (USP) requirements for sterility, pyrogenicity, and particulate matter. Used for reconstitution of lyophilized research peptides requiring aqueous diluent. Single-use glass vial with aluminum flip-top seal. Not for intravenous use without first making isotonic.",
    mechanism: "Inert aqueous solvent for lyophilized peptide reconstitution.",
    researchSummary:
      "Standard pharmaceutical-grade diluent for peptide reconstitution. Essential component of any peptide research laboratory. USP sterile water is the recommended diluent for peptides with pH-sensitive solubility profiles.",
    dosingProtocol: "Add to lyophilized peptide vial per individual product reconstitution instructions. Single-use only.",
    reconstitution: "Ready to use. Add required volume to peptide vial. Gently swirl to dissolve. Do not vortex.",
    relatedSlugs: ["bpc-157", "tb-500", "ipamorelin"],
    accentColor: "#64748B",
    penAvailable: false,
    penPrice: 0,
    forGender: "both",
  },
  {
    slug: "sterile-water-10ml",
    name: "Sterile Water for Injection — 10mL",
    casNumber: "7732-18-5",
    formula: "H₂O",
    molecularWeight: "18.02 g/mol",
    purity: "USP Grade",
    category: "Accessories",
    price: 18,
    size: "10mL vial",
    storage: "Room temperature, protect from light. Single-use; discard after opening.",
    appearance: "Clear, colorless sterile solution",
    solubility: "N/A",
    tagline: "USP-grade sterile water for injection, 10mL economy vial. Multi-vial protocol standard.",
    features: ["USP Grade", "10mL Volume", "Sterile Filtered", "Pyrogen Tested"],
    description:
      "Sterile Water for Injection USP, 10 mL vial. Meets United States Pharmacopeia (USP) requirements for sterility, pyrogenicity, and particulate matter. The 10 mL format is ideal for research protocols requiring multiple peptide vials or larger reconstitution volumes. Single-use glass vial with aluminum flip-top seal.",
    mechanism: "Inert aqueous solvent for lyophilized peptide reconstitution.",
    researchSummary:
      "Standard pharmaceutical-grade diluent for peptide reconstitution. The 10 mL format provides sufficient volume for multi-vial protocols and extended research runs, reducing the cost per mL compared to smaller vial formats.",
    dosingProtocol: "Add to lyophilized peptide vials per individual product reconstitution instructions. Measure required volume with a calibrated syringe.",
    reconstitution: "Ready to use. Add required volume to peptide vial. Gently swirl to dissolve. Do not vortex. Do not reuse opened vial.",
    relatedSlugs: ["bpc-157", "tb-500", "wolverine-blend"],
    accentColor: "#64748B",
    penAvailable: false,
    penPrice: 0,
    forGender: "both",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(slugs: string[]): Product[] {
  return slugs.map((s) => products.find((p) => p.slug === s)).filter(Boolean) as Product[];
}

export const categories = [
  "All",
  "Recovery & Healing",
  "Growth Hormone",
  "Weight Management",
  "Anti-Aging",
  "Cognitive",
  "Wellness",
  "Accessories",
];
