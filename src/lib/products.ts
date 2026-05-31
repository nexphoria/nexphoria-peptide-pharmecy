export type ProductDosage = {
  size: string;
  price: number;
};

// Monthly Auto-Ship uses a single cadence — same price as one-time.
// No discounts. No savings messaging. It's convenience, not a promotion.
export type SubscriptionCadence = 'monthly';

export const SUBSCRIPTION_CADENCE_CONFIG: Record<
  SubscriptionCadence,
  { label: string; sublabel: string; intervalDays: number; discount: number }
> = {
  monthly: { label: 'Monthly Auto-Ship', sublabel: 'Delivered every 30 days', intervalDays: 30, discount: 0 },
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
  badge?: "NEW" | "POPULAR";
  researchApplications: string[];
  mechanismOfAction?: string[];
  whatToExpect?: { week: string; description: string }[];
  dosingRecommendations?: string;
  faq?: { q: string; a: string }[];
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
    price: 50,
    size: "5mg",
    dosages: [
      { size: "5mg", price: 50 },
      { size: "10mg", price: 90 },
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
    badge: "POPULAR",
    researchApplications: [
      "Tissue repair pathways in preclinical connective tissue models",
      "VEGF expression and angiogenic signaling in vascular research",
      "Gastrointestinal cytoprotection in epithelial cell studies",
      "Musculoskeletal repair models examining tendon and ligament healing",
    ],
    mechanismOfAction: [
      "BPC-157 exerts its primary angiogenic effects through upregulation of VEGF (vascular endothelial growth factor) expression and activation of the VEGFR2 signaling cascade. This promotes new blood vessel formation at the injury site, a critical prerequisite for tissue repair. Simultaneously, BPC-157 modulates the nitric oxide (NO) system — stimulating NO production at physiological levels to improve local blood flow while paradoxically protecting against NO-mediated cytotoxicity through Hsp70 and other stress protein pathways.",
      "At the receptor level, BPC-157 interacts with the growth hormone receptor (GH-R) on target cells, activating downstream Jak2/STAT5 and MAPK/ERK cascades that drive cellular proliferation and matrix synthesis. The peptide also stabilizes the Akt/mTOR survival pathway, reducing apoptosis in injured tissue. BPC-157 has been shown to partially rescue dopaminergic and serotonergic neuronal populations in CNS injury models, suggesting additional neuroprotective signaling through these monoamine systems.",
      "In gastrointestinal applications, BPC-157 preserves mucosal integrity by maintaining tight junction protein expression (occludin, claudin-1) under inflammatory challenge. It inhibits the NF-κB inflammatory cascade and reduces TNF-α, IL-1β, and IL-6 production in gut epithelial cell models. The compound's exceptional stability in gastric acid — unlike most peptides — is attributed to its proline-rich central core, which resists proteolytic cleavage.",
    ],
    whatToExpect: [
      { week: "Days 1–7", description: "Initial anti-inflammatory activity observed in preclinical models. Reduced inflammatory cytokine levels (TNF-α, IL-6) and early signs of angiogenic sprouting at injury margins. Histological assessment shows decreased neutrophil infiltration relative to controls." },
      { week: "Weeks 2–4", description: "Progressive vascularization and collagen deposition detectable in wound healing models. Tissue tensile strength measurements begin to diverge from controls. Gastrointestinal permeability markers (FITC-dextran flux) show improvement in gut barrier models." },
      { week: "Month 2+", description: "Mature collagen fiber reorganization and scar tissue reduction observed in histological sections. Full tensile strength recovery in tendon repair models. Neurological recovery endpoints (motor scores, sensory latency) continue improving in CNS research protocols." },
    ],
    dosingRecommendations: "Standard preclinical research protocols: 2–10 μg/kg body weight via subcutaneous or intramuscular injection in rodent studies, once or twice daily. For gastric cytoprotection studies: oral gavage at 10 μg/kg. Tendon/ligament repair models: 2 μg/kg subcutaneous, once daily for the duration of the study. Some protocols use a loading dose (10 μg/kg × 3 days) followed by a maintenance phase (2–5 μg/kg/day). Half-life in circulation is approximately 4 hours, supporting twice-daily dosing for sustained exposure. All protocols require IACUC approval and appropriate institutional oversight.",
    faq: [
      { q: "What distinguishes BPC-157 from other tissue-repair peptides?", a: "BPC-157's primary distinction is its exceptional stability in biological fluids — including gastric acid and plasma — a property attributed to its proline-rich 15-amino acid sequence. Most peptides are rapidly degraded in these environments. This stability enables both oral and injectable administration routes in preclinical models, broadening its applicability. Additionally, BPC-157 appears to act on multiple repair pathways simultaneously (VEGF, NO, GH-R, Akt), rather than a single target." },
      { q: "Is the VEGF effect site-specific or systemic?", a: "Preclinical evidence suggests that the angiogenic effects of BPC-157 are primarily local/paracrine rather than systemic. VEGF upregulation is most pronounced in tissues adjacent to the administration site. This is consistent with BPC-157's role as a repair-signaling peptide rather than a circulating growth factor, making it useful for site-targeted injury models." },
      { q: "How does BPC-157 interact with dopaminergic and serotonergic systems?", a: "Multiple rodent studies have examined BPC-157's modulatory effects on central monoamine pathways. The peptide has demonstrated partial reversal of dopamine depletion in MPTP-treated models and has modulated serotonin receptor sensitivity in stress paradigms. The precise receptor mechanisms have not been fully characterized, and this area remains an active field of mechanistic research." },
      { q: "What purity and QC standards does Nexphoria apply to BPC-157?", a: "BPC-157 from Nexphoria is manufactured at ≥99.2% purity verified by reverse-phase HPLC and confirmed by ESI-MS molecular weight analysis. Each lot receives a certificate of analysis from an accredited third-party analytical laboratory. The compound is lyophilized under aseptic conditions and sealed under inert atmosphere." },
      { q: "Can BPC-157 and TB-500 be used in the same research protocol?", a: "Yes — the BPC-157/TB-500 combination is one of the most commonly cited dual-peptide research protocols in preclinical regenerative medicine literature. The compounds act through distinct primary mechanisms (BPC-157 via VEGF/NO/GH-R; TB-500 via G-actin sequestration/MMP activation) with complementary effects on the repair cascade. Our Wolverine Stack provides both compounds in a single protocol order." },
    ],
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
    price: 54,
    size: "5mg",
    dosages: [
      { size: "5mg", price: 54 },
      { size: "10mg", price: 96 },
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
    researchApplications: [
      "Actin regulation and G-actin sequestration in cytoskeletal studies",
      "Cellular migration and proliferation in wound healing models",
      "Anti-inflammatory pathways through cytokine modulation research",
      "Angiogenesis and neovascularization in vascular biology",
    ],
    mechanismOfAction: [
      "TB-500 exerts its primary effects through sequestration of monomeric G-actin via its LKKTETQ domain — a seven-amino acid motif that binds G-actin with nanomolar affinity. By controlling the pool of free G-actin available for filament polymerization, TB-500 regulates the dynamics of actin treadmilling in cells at the leading edge of migration. This mechanism is critical for wound healing because cell motility — the essential first step in closing a wound — depends on the coordinated assembly and disassembly of actin filaments.",
      "Beyond actin sequestration, TB-500 activates matrix metalloproteinases (MMP-1, MMP-2), which degrade the provisional fibrin matrix and enable migrating cells to penetrate the extracellular environment. It promotes keratinocyte migration in epithelial repair and stimulates angiogenesis through upregulation of vascular growth factors. TB-500 also downregulates the Wnt/β-catenin pathway in scar formation contexts, potentially reducing hypertrophic scarring and promoting organized tissue architecture.",
      "In cardiac repair models, TB-500 promotes cardiomyocyte survival after ischemia-reperfusion injury through several converging mechanisms: anti-apoptotic signaling via the PI3K/Akt pathway, reduction of reactive oxygen species, and stimulation of cardiac progenitor cell migration. The peptide reduces expression of TNF-α and IL-6 in inflammatory contexts, suggesting immunomodulatory activity that works in parallel with its structural repair functions.",
    ],
    whatToExpect: [
      { week: "Days 1–7", description: "Initial anti-apoptotic activity measurable in in vitro oxidative stress assays. Early cell migration enhancement detectable in scratch assay models. Reduced TNF-α and IL-6 in inflammatory stimulation assays." },
      { week: "Weeks 2–4", description: "Progressive angiogenesis with measurable increases in capillary tube formation in endothelial cell models. Histological assessment of wound or injury sites shows improved collagen organization and early granulation tissue formation. Tendon fiber alignment scores begin to improve in musculoskeletal models." },
      { week: "Month 2+", description: "Mature tissue remodeling with organized collagen fiber architecture and reduced scar tissue in histological analysis. Cardiac ejection fraction improvements detectable in ischemia-reperfusion models. Full biomechanical testing of repaired tendons shows recovery toward control-tissue parameters." },
    ],
    dosingRecommendations: "Preclinical rodent studies: 2.0–4.0 mg/kg via subcutaneous injection, administered twice weekly. Some protocols use a loading phase (4 mg/kg twice weekly for 4 weeks) followed by maintenance (2 mg/kg twice weekly). For cardiac ischemia-reperfusion models: 5 mg/kg single subcutaneous dose administered 30 minutes before ischemia induction. Plasma half-life is approximately 10–12 hours, supporting twice-weekly dosing. Unlike BPC-157 (which is active at microgram doses), TB-500's higher molecular weight and mechanism require milligram-range dosing. All research requires IACUC approval.",
    faq: [
      { q: "What does the LKKTETQ sequence do and why does it matter?", a: "LKKTETQ (Leu-Lys-Lys-Thr-Glu-Thr-Gln) is the actin-binding domain of thymosin beta-4 responsible for G-actin sequestration. This seven-amino acid motif directly engages monomeric actin via a hydrophobic cleft interaction, preventing its incorporation into filaments. TB-500 retains this full sequence, which accounts for its primary mechanism of action in cell migration and wound healing research." },
      { q: "How does TB-500 differ from the full-length thymosin beta-4 protein?", a: "Thymosin beta-4 (Tβ4) is a 43-amino acid protein. TB-500 is a synthetic fragment spanning residues 17–23 (the LKKTETQ actin-binding domain). TB-500 is produced synthetically and is more accessible for research use than full-length recombinant Tβ4. The fragment retains the primary actin-sequestration and cell migration activities of the intact protein, though some researchers note that full-length Tβ4 may have additional secondary effects through regions outside the LKKTETQ domain." },
      { q: "Why does TB-500 require higher doses than BPC-157?", a: "The difference in dosing scale reflects different mechanisms of action. BPC-157 acts as a potent signaling peptide, triggering receptor cascades at microgram concentrations. TB-500's mechanism involves direct stoichiometric G-actin binding — a physical sequestration requiring sufficient molar quantities to meaningfully alter the free G-actin pool in target tissues. This structural/stoichiometric mechanism inherently requires higher molar doses than receptor-mediated signaling." },
      { q: "What injury models have shown the clearest effects for TB-500?", a: "The most consistently documented effects in preclinical literature are in tendon and ligament repair (organized collagen deposition, improved fiber alignment), cardiac ischemia-reperfusion (reduced infarct size, improved ejection fraction), and full-thickness wound healing (accelerated closure, improved tensile strength). Corneal repair models and peripheral nerve injury studies have also shown positive results." },
      { q: "Can TB-500 and BPC-157 be administered simultaneously?", a: "Yes, and this combination — available as our Wolverine Stack — represents one of the most studied dual-peptide protocols. The compounds act through complementary mechanisms and can be administered as separate subcutaneous injections at the same session. They should not be mixed in the same syringe due to differences in concentration and stability requirements." },
    ],
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
    price: 54,
    size: "10mg",
    dosages: [
      { size: "10mg", price: 54 },
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
    researchApplications: [
      "GHS-R1a receptor pharmacology and selective GH secretion studies",
      "Pulsatile GH release without HPA axis dysregulation",
      "Somatotropic axis research in combination with GHRH analogs",
      "Growth hormone secretagogue mechanisms in pituitary models",
    ],
    mechanismOfAction: [
      "Ipamorelin activates GHS-R1a (growth hormone secretagogue receptor type 1a) on anterior pituitary somatotrophs through a mechanism that partially mimics ghrelin, the endogenous GHS-R1a ligand. Receptor activation triggers a Gαq/11-mediated phospholipase C cascade, generating IP3 and DAG, which drive intracellular calcium release. This calcium transient is the direct trigger for GH granule exocytosis from somatotroph secretory vesicles, producing a discrete pulsatile GH spike.",
      "The critical pharmacological distinction of Ipamorelin is its receptor selectivity profile. Earlier GHS-R1a agonists such as GHRP-2 and GHRP-6 produced significant co-secretion of cortisol, ACTH, and prolactin due to off-target receptor interactions — limiting their utility as pure GH axis research tools. Ipamorelin’s pentapeptide structure (Aib-His-D-2-Nal-D-Phe-Lys-NH₂) confers exceptional selectivity for GHS-R1a, producing GH elevation without measurable cortisol, ACTH, or prolactin co-secretion in both animal and human studies.",
      "Ipamorelin acts synergistically with GHRH analogs (CJC-1295, Sermorelin) through complementary receptor systems. GHRH receptor activation amplifies somatotroph sensitivity and increases GH gene transcription, while GHS-R1a activation triggers the calcium cascade for immediate GH release. This bimodal synergy — confirmed in multiple in vivo models — underlies the rationale for the CJC-1295/Ipamorelin combination protocol, which produces substantially greater GH output than either compound alone.",
    ],
    whatToExpect: [
      { week: "Days 1–7", description: "Acute GH secretion pulses measurable within 30–60 minutes of administration in preclinical models. Baseline IGF-1 levels begin rising as hepatic GH signaling accumulates with repeated dosing. No measurable cortisol or prolactin elevation distinguishes Ipamorelin from non-selective GHS compounds." },
      { week: "Weeks 2–4", description: "IGF-1 levels stabilize at elevated baseline above pre-treatment measurements. In body composition research models, early changes in lean mass and adipose parameters begin to emerge as elevated GH/IGF-1 alters lipolytic and anabolic signaling in peripheral tissues." },
      { week: "Month 2+", description: "Sustained IGF-1 elevation supports ongoing anabolic and lipolytic effects measurable in body composition studies. Bone turnover markers in skeletal research protocols show increased osteoblast activity. GH pulse amplitude and frequency remain responsive without significant tachyphylaxis at standard research doses." },
    ],
    dosingRecommendations: "Preclinical rodent studies: 200–500 μg/kg subcutaneous injection, 1–3 times daily depending on protocol design. For combination protocols with CJC-1295: concurrent or slightly staggered administration to capture synergistic secretion. Human pharmacology research: 1–10 μg/kg subcutaneous injection. In vitro GHS-R1a binding and activation assays: EC50 approximately 1–2 nM. Plasma half-life approximately 2 hours, supporting multiple daily administrations. Desensitization is minimal at standard doses compared to GHRP-2 and GHRP-6, enabling extended research protocols without loss of response.",
    faq: [
      { q: "Why doesn't Ipamorelin raise cortisol the way GHRP-2 does?", a: "The cortisol elevation seen with GHRP-2 (and to a lesser extent GHRP-6) results from off-target activity at corticotroph GHS-R1a-related receptors and additional interactions that stimulate ACTH release. Ipamorelin's pentapeptide structure — particularly the D-2-naphthylalanine (D-2-Nal) residue at position 3 and the D-phenylalanine at position 4 — confers high selectivity for GHS-R1a on somatotrophs without engaging these corticotroph pathways. This makes Ipamorelin the cleaner research tool for isolating pure GH axis effects." },
      { q: "Does Ipamorelin cause receptor desensitization over time?", a: "Compared to GHRP-2 and GHRP-6, Ipamorelin shows significantly less GHS-R1a desensitization in preclinical models. GH pulse amplitude and frequency remain largely intact across extended dosing periods at standard research concentrations. At very high doses or with very frequent administration, some blunting of response can occur — consistent with GPCR receptor internalization processes common to all peptide receptor agonists." },
      { q: "What makes Ipamorelin particularly suited for combination with CJC-1295?", a: "Ipamorelin and CJC-1295 activate GH release through entirely distinct receptor systems (GHS-R1a vs. GHRHR), making their combination mechanistically synergistic rather than redundant. GHRH receptor activation (CJC-1295) increases the GH synthesis and somatotroph sensitivity, while GHS-R1a activation (Ipamorelin) triggers calcium-dependent GH granule release. The combined effect is a substantially larger, more sustained GH pulse than either compound produces independently." },
      { q: "How does Ipamorelin compare to native ghrelin?", a: "Ipamorelin shares GHS-R1a agonism with ghrelin but lacks ghrelin's appetite-stimulating and cortisol-elevating effects. Native ghrelin also activates GHS-R1a but has significant additional activity through other receptor systems and at orexigenic circuits. Ipamorelin's synthetic design isolates the somatotropic (GH-releasing) function while minimizing these off-target actions — making it more useful than ghrelin as a selective GH secretion research tool." },
    ],
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
    price: 46,
    size: "5mg",
    dosages: [
      { size: "5mg", price: 46 },
      { size: "10mg", price: 72 },
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
    researchApplications: [
      "GHRH receptor activation and cAMP signaling pathways",
      "Extended half-life pharmacokinetics through albumin binding",
      "Sustained GH/IGF-1 axis modulation in metabolic research",
      "Long-acting somatotropic stimulation models",
    ],
    mechanismOfAction: [
      "CJC-1295 is a tetrasubstituted GHRH(1-29) analog featuring the Drug Affinity Complex (DAC) modification — a maleimidopropionic acid linker that enables site-specific covalent binding to Cys-34 of circulating albumin. This single structural modification transforms a peptide with a 7-minute native half-life into a compound with 6–8 days of activity per injection, as the albumin-peptide complex is protected from renal clearance and proteolytic degradation.",
      "At the receptor level, CJC-1295 binds and activates GHRHR (GHRH receptor) on pituitary somatotrophs. GHRHR is a Gαs-coupled GPCR; activation stimulates adenylyl cyclase, elevating intracellular cAMP. PKA activation drives both GH gene transcription (via CREB phosphorylation) and GH granule exocytosis. The extended albumin-bound form maintains sustained GHRHR occupancy, producing a prolonged elevation of both GH pulse amplitude and basal GH secretion rather than a single discrete pulse.",
      "The sustained GH elevation drives hepatic IGF-1 production over the 6–8 day activity window. IGF-1 acts as the primary mediator of GH's anabolic, lipolytic, and tissue-remodeling effects in peripheral tissues. The prolonged GH/IGF-1 axis activation window distinguishes CJC-1295 DAC from short-acting GHRH analogs (Sermorelin, CJC-1295 No DAC), making it useful for research protocols that require sustained somatotropic stimulation without daily dosing.",
    ],
    whatToExpect: [
      { week: "Days 1–3", description: "Peak GH elevation occurs within 2–4 hours of injection in published pharmacokinetic studies. IGF-1 begins rising within 24 hours. GH pulse amplitude is markedly elevated above baseline during this initial window." },
      { week: "Days 4–7", description: "IGF-1 stabilizes at elevated levels as the albumin-bound DAC peptide maintains GHRHR stimulation. GH pulse amplitude gradually declines from peak but remains above pre-treatment baseline through day 6–8 in most published studies. Body composition research endpoints (lean mass accrual, fat metabolism markers) begin to show measurable effects." },
      { week: "Month 2+", description: "With weekly dosing protocol, sustained IGF-1 elevation accumulates over successive injection cycles. Body composition studies show progressive lean mass increases and reductions in fat mass parameters. Bone mineral density and metabolic markers respond to the sustained GH/IGF-1 axis activation over this timeframe." },
    ],
    dosingRecommendations: "Published clinical research: 30–120 μg/kg subcutaneous injection, once weekly or every two weeks. The once-weekly protocol maintains more consistent IGF-1 elevations than biweekly dosing in published pharmacokinetic studies. Preclinical rodent studies: 1–10 μg/kg subcutaneous. For combination protocols with Ipamorelin, administer CJC-1295 DAC weekly on a fixed schedule, with Ipamorelin dosed 1–3 times daily as a complementary GHS-R1a agonist. The DAC modification means that CJC-1295 DAC should not be confused with CJC-1295 No DAC (Mod GRF 1-29), which has a 30-minute half-life and entirely different dosing schedule.",
    faq: [
      { q: "What does 'DAC' mean and why does it matter for this compound?", a: "DAC stands for Drug Affinity Complex — specifically, a maleimidopropionic acid linker at the C-terminus of the peptide that reacts with the free thiol of Cys-34 on circulating albumin. This covalent bond anchors CJC-1295 to albumin, dramatically extending its half-life from ~7 minutes to 6–8 days. The practical implication is that CJC-1295 with DAC only needs to be administered once weekly, compared to daily injections required for short-acting GHRH analogs." },
      { q: "How is CJC-1295 with DAC different from CJC-1295 No DAC (Mod GRF)?", a: "These are structurally distinct compounds with very different pharmacokinetics. CJC-1295 with DAC covalently binds albumin and has a 6-8 day half-life; it produces a prolonged, sustained GH/IGF-1 elevation. CJC-1295 No DAC lacks the albumin-binding modification and has a ~30 minute half-life, producing a single discrete GH pulse per injection. They are not interchangeable in research protocols." },
      { q: "Does CJC-1295 suppress endogenous GHRH secretion?", a: "Sustained GHRHR activation by CJC-1295 DAC can produce some degree of somatostatin counter-regulation, which is the hypothalamus's natural mechanism for restraining GH secretion. This is why combining CJC-1295 with a GHS-R1a agonist (Ipamorelin) is rational: Ipamorelin's GHS-R1a activation blunts somatostatin release, partially offsetting the regulatory braking that occurs with prolonged GHRHR stimulation." },
      { q: "What endpoints are most studied with CJC-1295 in research?", a: "Published clinical studies have primarily examined plasma GH and IGF-1 pharmacokinetics, body composition (lean mass, fat mass), bone mineral density, and sleep-related GH secretion patterns. Phase I/II trials documented the pharmacokinetic profile thoroughly. Body composition changes require longer study durations (12–24 weeks) to reach statistical significance." },
    ],
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
    price: 66,
    size: "10mg",
    dosages: [
      { size: "10mg", price: 66 },
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
    badge: "POPULAR",
    researchApplications: [
      "Dual somatotropic axis stimulation through complementary receptor pathways",
      "Synergistic GH secretion research combining GHRH and GHS-R1a agonism",
      "Body composition and metabolic parameter studies",
      "IGF-1 elevation dynamics in extended-release protocols",
    ],
    mechanismOfAction: [
      "This blend combines two mechanistically complementary compounds: CJC-1295 (GHRH receptor agonist with DAC albumin binding for extended half-life) and Ipamorelin (selective GHS-R1a agonist). The GHRHR and GHS-R1a represent two distinct receptor systems that independently stimulate GH secretion. When activated simultaneously, they produce synergistic GH output exceeding that of either compound alone — a well-documented pharmacological phenomenon in preclinical and clinical literature.",
      "CJC-1295 DAC provides the sustained GH/IGF-1 axis elevation through prolonged GHRHR occupancy over 6–8 days per injection. Ipamorelin, dosed more frequently (1–3 times daily), delivers repeated discrete GH pulses through GHS-R1a calcium signaling. This creates a multi-layered somatotropic stimulation: a sustained elevated baseline (CJC-1295 DAC) with superimposed pulsatile spikes (Ipamorelin). The combined GH secretion profile more closely resembles physiological youthful GH patterning than either compound alone.",
      "Critically, Ipamorelin's selective GHS-R1a profile prevents the cortisol co-secretion that would confound results with non-selective GHS compounds. The DAC modification on CJC-1295 provides the extended kinetics that make weekly dosing feasible. Together, these structural choices create a research protocol that maximizes GH/IGF-1 axis output while maintaining the selectivity needed for clean mechanistic studies.",
    ],
    whatToExpect: [
      { week: "Days 1–3", description: "Measurable GH pulse from CJC-1295 DAC within 2–4 hours of administration, with Ipamorelin providing additional acute pulses. IGF-1 begins rising and both components contribute to the somatotropic axis response." },
      { week: "Weeks 2–4", description: "IGF-1 stabilizes at elevated baseline with weekly CJC-1295 dosing. Each Ipamorelin administration produces a clean GH pulse without cortisol elevation. Body composition research endpoints (nitrogen retention, lean mass accrual) begin showing measurable changes." },
      { week: "Month 2+", description: "Cumulative IGF-1 elevation drives progressive body composition changes in research models. Bone density, lean mass, and fat distribution parameters show statistically significant changes in body composition studies conducted at the 12+ week timepoint." },
    ],
    dosingRecommendations: "Standard research protocol: CJC-1295 DAC once weekly subcutaneous injection (30–120 μg/kg in preclinical models, with the Ipamorelin component dosed 200–300 μg/kg subcutaneous 1–3 times daily. The once-weekly CJC-1295 DAC injection provides the sustained IGF-1 elevation baseline; Ipamorelin pulse dosing builds on this baseline. For optimal synergy, Ipamorelin is typically administered at the same time as the weekly CJC-1295 DAC injection plus additional doses on intervening days. As a pre-mixed blend vial, the ratio is equimolar by mass.",
    faq: [
      { q: "Why combine CJC-1295 and Ipamorelin rather than using either alone?", a: "The synergistic effect of dual GHRHR + GHS-R1a stimulation is well-documented. Each receptor system activates GH release through a distinct intracellular cascade, and co-activation produces GH output greater than additive amounts from each compound alone. Additionally, Ipamorelin's GHS-R1a activation blunts somatostatin-mediated counter-regulation, allowing CJC-1295's GHRHR effects to operate with less inhibitory braking. The combination is more efficient than higher doses of either compound alone." },
      { q: "Does the blend vial contain both compounds pre-mixed?", a: "Yes — the 10 mg blend vial contains both CJC-1295 (with DAC) and Ipamorelin in an equimolar lyophilized formulation. A single reconstitution provides both compounds ready for use. For research protocols requiring separate titration of each compound, the individual products (CJC-1295, Ipamorelin) are also available." },
      { q: "How long does a research cycle typically run with this combination?", a: "Published body composition research studies using GHRH/GHS combinations have run 12–24 weeks to achieve statistically significant results in primary endpoints. Shorter periods (4–8 weeks) are sufficient for pharmacokinetic and hormonal endpoint studies. The minimum duration to observe meaningful IGF-1 stabilization and early body composition changes in preclinical models is typically 4–6 weeks." },
      { q: "Is there a risk of GH excess with this combination?", a: "At standard research doses, preclinical and clinical data show GH elevation within physiological ranges rather than supraphysiological levels. Unlike exogenous recombinant GH, which bypasses the pituitary\'s regulatory mechanisms, GHS/GHRH combinations work through the native somatotroph system, which retains somatostatin-mediated feedback. This self-limiting regulatory mechanism makes pharmacological GH excess substantially less likely than with exogenous GH administration." },
    ],
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
    price: 52,
    size: "5mg",
    dosages: [
      { size: "5mg", price: 52 },
      { size: "10mg", price: 72 },
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
    researchApplications: [
      "GHRH receptor pharmacology and pulsatile GH secretion",
      "Bioactive GHRH fragment research and receptor binding studies",
      "Short half-life GH pulse dynamics in controlled protocols",
      "Diagnostic tools for GH secretory capacity assessment",
    ],
    mechanismOfAction: [
      "Sermorelin (GHRH 1-29) is the minimally active N-terminal fragment of endogenous 44-amino acid GHRH. It binds the GHRH receptor (GHRHR) on pituitary somatotrophs with high affinity, activating a Gαs-cAMP-PKA signaling cascade that drives GH gene transcription and secretion. The 1-29 fragment retains all receptor binding contacts of full-length GHRH(1-44); residues beyond position 29 contribute minimally to receptor activation, which is why the truncated form maintains full biological activity.",
      "Unlike CJC-1295 DAC, Sermorelin has a plasma half-life of approximately 11–12 minutes due to rapid DPP-4 cleavage and renal filtration. This short half-life means each injection produces a single discrete pulsatile GH release rather than sustained elevation. The pulsatile nature of Sermorelin-driven GH secretion more closely mirrors the endogenous GH release pattern compared to long-acting GHRH analogs, making it valuable for research where mimicking physiological GH rhythmicity is important.",
      "Sermorelin's short half-life also preserves the normal somatostatin feedback architecture. After each GH pulse, somatostatin rises to dampen further secretion — the same regulatory rhythm seen with endogenous GHRH. This self-limiting mechanism means Sermorelin is less likely to produce sustained IGF-1 elevation compared to CJC-1295 DAC, which is an important consideration depending on the research endpoint.",
    ],
    whatToExpect: [
      { week: "Days 1–7", description: "Each subcutaneous injection produces a GH pulse detectable within 15–30 minutes in preclinical models. Discrete IGF-1 elevation patterns following daily dosing. Short half-life means GH returns to baseline within 2–3 hours per administration." },
      { week: "Weeks 2–4", description: "Accumulated daily GH pulsing begins to modestly elevate mean IGF-1 levels. Sleep-associated GH secretion studies may show augmented overnight GH pulses. Baseline somatotropic axis function appears preserved due to pulsatile rather than sustained stimulation." },
      { week: "Month 2+", description: "Continued daily administration produces steady-state IGF-1 elevation in the low-to-moderate range. Body composition changes in research models are more modest than with long-acting DAC formulations but relevant for short half-life protocol design studies." },
    ],
    dosingRecommendations: "Approved clinical dosing (historical): 0.2–0.3 mg subcutaneous injection once daily at bedtime, aligned with nocturnal GH secretory peak. Diagnostic testing (stimulation test): 1 μg/kg IV bolus with GH sampling at 0, 15, 30, 45, 60 minutes. Preclinical rodent studies: 1–10 μg/kg subcutaneous injection. The bedtime administration timing is important for maximizing GH pulse amplitude by coinciding with natural somatotrophic rhythms. Sermorelin is typically reconstituted to 2.5 mg/mL working concentration.",
    faq: [
      { q: "Why is Sermorelin administered at bedtime in clinical protocols?", a: "GH secretion follows a strong circadian pattern in humans and most mammals, with the largest physiological GH pulse occurring during the first hours of slow-wave sleep. Administering Sermorelin at bedtime aligns its GH-releasing effect with this natural peak, producing an amplified, more physiologically appropriate pulse rather than an out-of-phase daytime secretion event." },
      { q: "What was Sermorelin's FDA approval history?", a: "Sermorelin (brand: Geref, Serono) received FDA approval in 1997 for two indications: (1) assessment of GH secretory capacity in children with suspected GH deficiency, and (2) treatment of idiopathic GH deficiency in children who required replacement therapy. The product was voluntarily withdrawn from the US market in 2008, not due to safety concerns but for commercial reasons. It remains a reference compound in somatotropic axis research." },
      { q: "How does Sermorelin compare to CJC-1295 for IGF-1 elevation?", a: "CJC-1295 DAC produces substantially higher and more sustained IGF-1 elevations than Sermorelin at equivalent molar doses, due to its 6–8 day half-life versus Sermorelin's 11–12 minutes. For research requiring maximal IGF-1 elevation or infrequent dosing, CJC-1295 DAC is more effective. For research examining pulsatile GH dynamics or short-term GHRHR stimulation without sustained IGF-1 elevation, Sermorelin provides a more physiologically discrete stimulation pattern." },
      { q: "Is Sermorelin appropriate for combination with Ipamorelin?", a: "Yes — the same synergistic logic that applies to CJC-1295/Ipamorelin applies to Sermorelin/Ipamorelin. Daily subcutaneous Sermorelin provides GHRHR stimulation, and Ipamorelin adds GHS-R1a-mediated pulsing for additive GH output. The advantage over CJC-1295 DAC combinations is more direct control over the daily GH pulsing pattern, since both compounds have short half-lives." },
    ],
  },
  {
    slug: "mk-677",
    name: "MK-677 (Ibutamoren)",
    casNumber: "159634-47-6",
    formula: "C₂₇H₃₆N₄O₅S",
    molecularWeight: "528.67 g/mol",
    purity: "≥99.0%",
    category: "Growth Hormone",
    price: 66,
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
    badge: "POPULAR",
    researchApplications: [
      "Oral GH secretagogue pharmacology and bioavailability studies",
      "Long-acting ghrelin mimetic with extended half-life research",
      "IGF-1 elevation and body composition modeling",
      "Sleep architecture and REM sleep duration research",
    ],
    mechanismOfAction: [
      "MK-677 (Ibutamoren) is a non-peptide, orally bioavailable GHS-R1a agonist structurally distinct from peptide GHSs like Ipamorelin. Its small molecule nature allows oral absorption and a ~24-hour half-life attributable to hepatic CYP3A4 metabolism and enterohepatic recirculation. GHS-R1a activation on pituitary somatotrophs stimulates GH release through Gαq/11-PLC-IP3-calcium signaling — the same fundamental pathway as peptide GHSs — while its unique binding mode at the GHS-R1a orthosteric site provides distinct receptor interactions that may confer different receptor kinetics than Ipamorelin.",
      "MK-677 does not stimulate GHRHR directly but acts synergistically with endogenous GHRH pulses: each spontaneous GHRH pulse from the hypothalamus is amplified by the sensitized somatotrophs under MK-677's GHS-R1a influence. This produces maintained pulsatile GH secretion rather than a constant plateau, preserving some of the physiological GH pulsatility that is important for downstream IGF-1 production dynamics and receptor sensitivity in target tissues.",
      "An additional mechanistic observation from clinical trials is MK-677's documented improvement in slow-wave sleep architecture, specifically stage 3 (N3) sleep duration. Sleep-related GH secretion accounts for a significant portion of daily GH output, and MK-677's effects on sleep quality may contribute to its IGF-1-elevating effects beyond direct pituitary stimulation. The mechanism underlying the sleep effect is proposed to involve GHS-R1a activation in hypothalamic circuits regulating sleep architecture, though this has not been fully elucidated.",
    ],
    whatToExpect: [
      { week: "Days 1–7", description: "First measurable IGF-1 elevation typically detectable within 3–5 days of daily dosing in clinical studies. GH pulse amplitude begins rising. Some subjects in clinical trials reported improved sleep quality in the first week. No injection required — oral capsule administration." },
      { week: "Weeks 2–4", description: "IGF-1 continues rising toward the plateau level. Phase II aging trial data shows IGF-1 elevations of 40–60% above baseline by week 4 at 25 mg/day dosing. Sleep architecture changes detectable on polysomnography, including increased N3 slow-wave sleep duration." },
      { week: "Month 2+", description: "IGF-1 stabilizes at plateau. 12-month Phase II aging trial data documents improvements in lean body mass and reductions in fat mass detectable by DEXA analysis. Bone turnover markers (osteocalcin, P1NP) reflect increased osteoblast activity in response to elevated GH/IGF-1 signaling." },
    ],
    dosingRecommendations: "Clinical research doses: 10–25 mg oral once daily. The 25 mg dose was used in Phase II aging studies and produced the most robust IGF-1 elevations (60–80% above baseline). The 10 mg dose produces intermediate IGF-1 elevation with a potentially more favorable tolerability profile. Daily evening administration aligns with nocturnal GH secretory peaks. Preclinical rodent studies: 3–10 mg/kg oral gavage. MK-677 is formulated as oral capsules (no reconstitution required) in the research setting.",
    faq: [
      { q: "What is MK-677's advantage over injectable GHSs like Ipamorelin?", a: "Oral bioavailability and a 24-hour half-life are MK-677's primary research advantages. A single daily oral capsule provides sustained GHS-R1a stimulation throughout the 24-hour cycle, eliminating the need for multiple daily injections required with short-acting peptide GHSs. This makes MK-677 better suited for long-duration body composition studies where injection frequency would be a practical obstacle." },
      { q: "Does MK-677 cause insulin resistance?", a: "Published clinical data shows that MK-677 at 25 mg/day produces transient increases in fasting insulin and glucose in some subjects, particularly in older adults. This is a known class effect of GH excess — elevated GH promotes peripheral insulin resistance as part of its lipolytic mechanism. This effect is dose-dependent and appears to attenuate over time in long-duration studies. Monitoring glucose and insulin parameters is standard practice in MK-677 research protocols." },
      { q: "Why does MK-677 improve slow-wave sleep?", a: "The precise mechanism is not fully characterized, but GHS-R1a receptors are expressed in hypothalamic circuits that regulate sleep-wake architecture. GHS-R1a activation in these regions (distinct from pituitary somatotrophs) appears to promote NREM sleep, particularly stage 3 slow-wave sleep, which is the period of highest spontaneous GH secretion. Clinical polysomnography studies with MK-677 consistently document increased N3 sleep duration compared to placebo." },
      { q: "Can MK-677 be combined with CJC-1295/Ipamorelin?", a: "Theoretically yes — MK-677 provides sustained oral GHS-R1a activation while CJC-1295 provides GHRHR stimulation, which is the same dual-axis logic as the CJC-1295/Ipamorelin injectable combination. However, combining multiple GH axis stimulants requires careful research design to avoid supraphysiological GH/IGF-1 elevations. Protocol-specific dosing guidance should be established by the institutional review committee." },
    ],
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
    price: 78,
    size: "5mg",
    dosages: [
      { size: "5mg", price: 78 },
      { size: "10mg", price: 132 },
    ],
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
    badge: "POPULAR",
    researchApplications: [
      "GLP-1 receptor agonism and incretin signaling pathways",
      "Appetite regulation through CNS GLP-1R activation research",
      "Glucose-dependent insulin secretion in metabolic models",
      "Gastric emptying and satiety signal modulation studies",
    ],
    mechanismOfAction: [
      "Semaglutide is a GLP-1 receptor agonist with 94% amino acid homology to native GLP-1. Two critical structural modifications drive its pharmacology: substitution of Aib (alpha-aminoisobutyric acid) at position 8 confers resistance to DPP-4 enzymatic degradation, and attachment of a C18 fatty diacid at Lys-26 via a mini-PEG linker enables high-affinity albumin binding. This albumin association dramatically extends plasma half-life to approximately 7 days, enabling once-weekly subcutaneous dosing — a transformative improvement over native GLP-1's 2-minute half-life.",
      "At the GLP-1 receptor — a Gαs-coupled GPCR expressed in pancreatic beta cells, CNS, heart, kidney, and gut — Semaglutide activates cAMP-PKA-CREB signaling. In pancreatic beta cells, this cascade stimulates glucose-dependent insulin secretion (GDIS): insulin is released only when blood glucose is elevated, providing glycemic control without hypoglycemia risk. Semaglutide simultaneously suppresses glucagon secretion from alpha cells, further reducing hepatic glucose output. These dual pancreatic effects produce a coordinated lowering of post-prandial glucose.",
      "Central nervous system GLP-1R activation represents Semaglutide's key mechanism for weight reduction. GLP-1Rs in the hypothalamic arcuate nucleus and nucleus of the solitary tract (NTS) respond to Semaglutide, reducing neuropeptide Y (NPY) and AgRP (orexigenic) signaling while promoting POMC/α-MSH satiety pathways. This central action reduces caloric intake by modulating appetite perception and meal-related reward signals. GLP-1R activation in the brainstem also slows gastric emptying, prolonging the sensation of fullness after meals.",
    ],
    whatToExpect: [
      { week: "Weeks 1–4", description: "Initial glucose-dependent insulin secretion enhancement measurable in both in vitro beta cell assays and preclinical metabolic models. Post-prandial glucose levels begin decreasing. In clinical research settings, body weight reduction begins (STEP trials documented ~2-3% body weight reduction in the first 4 weeks at escalating doses)." },
      { week: "Weeks 4–16", description: "Progressive weight reduction trajectory in clinical studies, averaging 10–12% total body weight reduction by week 16 at the 2.4 mg maintenance dose. HbA1c continuing to decline in type 2 diabetes models. Appetite survey scores and caloric intake measures show sustained reductions." },
      { week: "Month 6+", description: "STEP trial maximum weight reduction reached at approximately 68 weeks, with 15–17% mean body weight reduction at 2.4 mg/week in the STEP-1 trial. Cardiovascular risk markers (LDL, blood pressure, inflammatory markers) show improvements consistent with reduced adiposity. Liver fat content reductions measurable by MRI." },
    ],
    dosingRecommendations: "FDA-approved dosing (type 2 diabetes, Ozempic): 0.25 mg SC weekly for 4 weeks, then 0.5 mg weekly; titrate to 1 or 2 mg based on response. FDA-approved dosing (obesity, Wegovy): 0.25 mg weekly titration escalating to 2.4 mg/week by week 16. Preclinical rodent metabolic studies: weight-adjusted subcutaneous injection per IACUC protocol. In vitro GLP-1R research: EC50 ~1–3 nM in cAMP accumulation assays. Reconstituted working concentration: 0.5–2 mg/mL in sterile water.",
    faq: [
      { q: "What makes Semaglutide's C18 fatty acid modification important?", a: "The C18 fatty diacid at Lys-26 (attached via a short gamma-glutamic acid/PEG linker) binds non-covalently but with high affinity to albumin Cys-34. This albumin association creates a large molecular complex (>70 kDa) that is excluded from renal filtration and resists DPP-4 degradation, extending half-life to ~7 days. Without this modification, even DPP-4-resistant GLP-1 analogs are cleared renally within hours. The precise fatty acid chain length and linker chemistry are optimized to balance albumin affinity with receptor binding activity." },
      { q: "How do Semaglutide's pancreatic and CNS mechanisms compare in importance for weight loss?", a: "Both contribute, but CNS GLP-1R activation is considered primary for the substantial weight loss seen in STEP trials. The central reduction in caloric intake — estimated at 24–35% reduction in daily caloric consumption — is the dominant driver of body weight reduction. Pancreatic effects (GDIS, glucagon suppression) are more relevant for glycemic control in diabetic populations. The slow gastric emptying further amplifies satiety signals and reduces meal size." },
      { q: "What distinguishes Semaglutide from Tirzepatide in research outcomes?", a: "Tirzepatide adds GIP receptor (GIPR) co-agonism to GLP-1R activation, producing superior weight reduction in head-to-head SURPASS trials. Semaglutide (2.4 mg/week) achieved approximately 15% mean body weight reduction in STEP-1; Tirzepatide (15 mg/week) achieved 20-22% in SURMOUNT-1. Both have active cardiovascular outcome trial programs." },
      { q: "What reconstitution conditions are optimal for Semaglutide stability?", a: "Reconstitute in sterile water or PBS at pH 7–8. Semaglutide is stable in neutral aqueous solution at 2–8°C for 28 days. Do not freeze the reconstituted solution; albumin-bound peptides may aggregate upon freeze-thaw. Protect from light, as the fatty acid linker may photo-oxidize over prolonged exposure. Lyophilized powder is stable at −20°C for the shelf life stated on the lot certificate." },
    ],
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
    price: 120,
    size: "10mg",
    dosages: [
      { size: "10mg", price: 120 },
      { size: "30mg", price: 300 },
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
    researchApplications: [
      "Dual GIP/GLP-1 receptor co-activation and incretin synergy",
      "Superior glycemic control mechanisms compared to selective agonists",
      "Adipose tissue metabolism through direct GIPR signaling",
      "Body weight reduction pathways in metabolic research models",
    ],
    mechanismOfAction: [
      "Tirzepatide is a 39-amino acid peptide with a C20 fatty diacid modification enabling albumin binding and weekly dosing. It activates both GIP receptor (GIPR) and GLP-1 receptor (GLP-1R) with balanced potency — a deliberate design feature distinguishing it from earlier GIP/GLP-1 hybrid molecules that favored one receptor. GIPR activation in pancreatic beta cells triggers glucose-dependent insulin secretion via Gαs-cAMP signaling, complementing GLP-1R-mediated insulin secretion through a parallel but distinct pathway that appears to produce additive insulin response at meals.",
      "The GIP receptor component provides additional metabolic benefits beyond those of GLP-1R agonism alone. GIPR expression in adipose tissue enables direct modulation of adipocyte metabolism — reducing lipotoxic free fatty acid release and improving adipose tissue insulin sensitivity. GIPR signaling in the brain (particularly in hypothalamic and limbic regions) may also contribute to appetite regulation through pathways distinct from but complementary to CNS GLP-1R signaling. This adipose and central GIPR component is proposed as the primary explanation for Tirzepatide's superior weight reduction versus Semaglutide in head-to-head trials.",
      "At the structural level, Tirzepatide's backbone is based on native GIP(1-42) with modifications conferring DPP-4 resistance and balanced GIPR/GLP-1R affinity. The C20 fatty diacid via gamma-glutamic acid linker provides albumin binding comparable to Semaglutide's C18 mechanism, achieving a ~5-day half-life. Both receptors couple to Gαs and downstream cAMP pathways, providing a coherent unified intracellular signal despite dual receptor engagement.",
    ],
    whatToExpect: [
      { week: "Weeks 1–4", description: "Dose-escalation phase (2.5 mg → 5 mg weekly). Initial glucose-lowering and appetite suppression detectable. SURMOUNT-1 trial data shows ~2–3% body weight reduction in the first 4 weeks. Post-prandial glucose and insulin profiles improve." },
      { week: "Weeks 4–20", description: "Progressive escalation toward 10–15 mg maintenance doses. Body weight reduction accelerates during this phase; SURMOUNT-1 data shows ~10–14% reduction by week 20. Waist circumference, visceral fat markers, and cardiometabolic parameters improving in line with weight reduction." },
      { week: "Month 6+", description: "SURMOUNT-1 reported 20.9% mean body weight reduction at 72 weeks for the 15 mg dose — surpassing any previously approved pharmacotherapy. Cardiovascular risk markers continue improving. SURPASS-5 and SURPASS-CVOT data inform long-term cardiovascular outcome research." },
    ],
    dosingRecommendations: "FDA-approved dosing (Mounjaro/Zepbound): 2.5 mg SC weekly × 4 weeks, then 5 mg weekly × 4 weeks, escalating by 2.5 mg increments every 4 weeks to the 10 or 15 mg maintenance dose. The gradual titration minimizes GI adverse effects during initiation. Preclinical rodent metabolic research: 0.03–3 nmol/kg subcutaneous injection. In vitro receptor binding: Ki ~0.1 nM at GIPR, ~0.3 nM at GLP-1R in published binding assays.",
    faq: [
      { q: "Why does adding GIP receptor agonism to GLP-1R agonism improve weight loss outcomes?", a: "The mechanisms are still being actively studied, but the leading hypotheses involve: (1) direct GIPR signaling in adipose tissue reducing lipotoxicity and improving adipose insulin sensitivity; (2) central GIPR activation in the hypothalamus complementing GLP-1R-mediated satiety through distinct neural circuits; and (3) GIP receptor engagement counteracting a GLP-1R-mediated compensatory increase in glucagon that can blunt weight loss with pure GLP-1 agonists. The combination appears to address appetite regulation through more pathways simultaneously." },
      { q: "How does Tirzepatide's GIPR agonism differ from its GLP-1R agonism at the cellular level?", a: "Both GIPR and GLP-1R are Gαs-coupled GPCRs activating adenylyl cyclase, so the downstream cAMP cascade is shared. However, GIPR and GLP-1R differ in tissue distribution (GIPR is expressed in adipose, bone, and heart in addition to pancreas; GLP-1R is more prominent in gut, brain, and kidney), in their regulation of gastric emptying (GLP-1R slows gastric emptying more potently), and in their adipose metabolic effects. These tissue-specific expression differences translate to the distinct but complementary metabolic effects observed clinically." },
      { q: "What differentiates Tirzepatide from Retatrutide?", a: "Retatrutide adds glucagon receptor (GCGR) agonism to the GIP/GLP-1 dual mechanism. GCGR activation increases energy expenditure and enhances hepatic fat mobilization beyond what dual incretin agonism achieves. Phase II data showed Retatrutide producing ~24% body weight reduction at 48 weeks vs. ~20-22% for Tirzepatide — suggesting the additional GCGR component provides incremental benefit, though Phase III data is still pending." },
      { q: "Is Tirzepatide stable in solution after reconstitution?", a: "Reconstituted Tirzepatide (in sterile water at pH 6–8) is stable for 28 days at 2–8°C. The fatty acid-albumin binding mechanism requires neutral pH for optimal stability. Do not freeze reconstituted product as aggregation may occur. Lyophilized powder stored at −20°C remains stable for the shelf life indicated on the lot certificate." },
    ],
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
    price: 210,
    size: "10mg",
    dosages: [
      { size: "10mg", price: 210 },
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
    badge: "NEW",
    researchApplications: [
      "Triple GIP/GLP-1/glucagon receptor agonism and metabolic synergy",
      "Energy expenditure enhancement through glucagon receptor engagement",
      "Hepatic fat mobilization and adipose lipolysis pathways",
      "Next-generation incretin-based therapy mechanisms",
    ],
    mechanismOfAction: [
      "Retatrutide simultaneously activates three metabolically complementary receptors: GIP receptor (GIPR), GLP-1 receptor (GLP-1R), and glucagon receptor (GCGR). The GIPR and GLP-1R components replicate Tirzepatide's dual incretin mechanism — glucose-dependent insulin secretion, appetite suppression, and improved adipose insulin sensitivity. The critical addition of glucagon receptor agonism provides mechanisms unavailable to dual agonists: GCGR activation in hepatocytes stimulates cAMP-driven mobilization of hepatic fat stores and promotes ketogenesis, and in adipose tissue it enhances lipolysis and thermogenic brown adipose tissue activity.",
      "The challenge of incorporating GCGR agonism is that glucagon alone raises blood glucose by promoting hepatic glycogenolysis and gluconeogenesis. Retatrutide's design carefully balances GCGR agonism intensity against the insulin-secretory effects of GIPR and GLP-1R activation, such that the net glycemic effect remains neutral or beneficial. At therapeutic doses, the GLP-1R and GIPR insulin-secretory effects dominate, preventing the hyperglycemia that would result from GCGR agonism alone. This receptor balance engineering is the central pharmacological achievement of triple agonist design.",
      "At the structural level, Retatrutide is a 39-amino acid peptide with a C20 fatty diacid modification providing albumin binding and weekly dosing (half-life ~6 days). Phase II TRIUMPH trial data documented body weight reduction of up to 24.2% at 48 weeks — exceeding all previously published data for any weight management pharmacotherapy. Phase III development is ongoing, with GCGR-specific hepatic effects being studied as potential treatments for NAFLD/NASH independent of the obesity indication.",
    ],
    whatToExpect: [
      { week: "Weeks 1–4", description: "Initial dose escalation phase. Glucose and insulin parameters begin improving. Phase II TRIUMPH escalation protocol started at 1 mg weekly. Appetite suppression from combined GLP-1R/GIPR central signaling begins within the first week of active doses." },
      { week: "Weeks 4–16", description: "Escalation toward 8–12 mg maintenance doses in clinical protocols. Body weight reduction accelerating, with TRIUMPH Phase II data showing ~15–17% reduction by week 24 in the higher dose cohorts. Hepatic fat content measurable reductions by MRI-PDFF in NAFLD subjects." },
      { week: "Month 6+", description: "TRIUMPH data: 24.2% mean body weight reduction at 48 weeks for the 12 mg dose — the highest magnitude of weight reduction reported in any Phase II trial. GCGR-driven hepatic effects continue improving. Phase III data expected to further characterize the cardiovascular outcome profile." },
    ],
    dosingRecommendations: "Phase II TRIUMPH clinical dosing: 1, 4, 8, or 12 mg subcutaneous weekly injection, with stepwise dose escalation over 12–16 weeks to the maintenance dose. Escalation schedules are critical to tolerability; rapid escalation increases GI adverse effects. Preclinical metabolic research: weight-adjusted subcutaneous injection per IACUC-approved protocol. In vitro receptor activation assays: assess cAMP accumulation at GIPR, GLP-1R, and GCGR separately to characterize potency profile. Phase III data will inform final approved dosing schedule.",
    faq: [
      { q: "How does Retatrutide avoid causing hyperglycemia despite activating the glucagon receptor?", a: "The hyperglycemia risk from GCGR activation is offset by the concurrent insulin-secretory effects of GIP receptor and GLP-1 receptor co-activation. At Retatrutide's therapeutic dose ratio, the incretin-driven insulin secretion dominates the glycemic balance, preventing hepatic glucose output from rising net blood glucose. This receptor balance is precisely engineered: too much relative GCGR potency would cause hyperglycemia; too little GCGR contribution loses the energy expenditure and hepatic fat benefits. The Phase II data validates that the target balance achieves both goals." },
      { q: "What evidence supports Retatrutide outperforming Tirzepatide for weight loss?", a: "Phase II TRIUMPH trial data (n=338, 48 weeks) published in NEJM in 2023 reported 24.2% mean body weight reduction for the 12 mg dose. For comparison, SURMOUNT-1 (Tirzepatide) reported 20.9% at 72 weeks for the 15 mg dose. While direct head-to-head comparison is not yet available, the TRIUMPH 48-week result numerically exceeds the SURMOUNT-1 72-week result, suggesting Retatrutide's additional glucagon receptor mechanism provides incremental benefit over dual GIP/GLP-1 agonism." },
      { q: "Is Retatrutide FDA approved?", a: "No. Retatrutide (LY3437943) is in Phase III clinical development by Eli Lilly as of 2025. It is not approved for any therapeutic indication. As a research compound, it is available for in vitro receptor pharmacology studies and preclinical metabolic models under appropriate institutional oversight." },
      { q: "What hepatic research applications does Retatrutide support beyond obesity?", a: "GCGR activation specifically promotes hepatic fatty acid oxidation and reduces hepatic triglyceride content independent of body weight changes. Several research groups are examining Retatrutide and related GCGR-containing molecules for treatment of NAFLD/NASH. Phase II sub-studies showed significant liver fat reduction by MRI-PDFF in subjects with elevated baseline hepatic fat, suggesting direct hepatic GCGR activity beyond weight loss-mediated effects." },
    ],
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
    price: 53,
    size: "5mg",
    dosages: [
      { size: "5mg", price: 53 },
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
    researchApplications: [
      "HGH fragment 177-191 lipolytic activity without IGF-1 stimulation",
      "Beta-3 adrenergic receptor activation in adipose tissue models",
      "Lipogenesis inhibition and triglyceride hydrolysis research",
      "Cartilage repair pathways in musculoskeletal studies",
    ],
    mechanismOfAction: [
      "AOD-9604 corresponds to residues 177–191 of human growth hormone (hGH), a C-terminal fragment that harbors the lipolytic activity of the intact GH molecule while lacking the N-terminal domain responsible for GH receptor (GHR) binding and IGF-1 stimulation. This structural separation allows AOD-9604 to engage adipose tissue lipolytic pathways without the growth-promoting and diabetogenic effects that limit full-length GH research. The compound activates beta-3 adrenergic receptors (ADRB3) in adipocytes, triggering cAMP-dependent PKA activation that phosphorylates hormone-sensitive lipase (HSL) and perilipin, releasing stored triglycerides as free fatty acids.",
      "In differentiating adipocytes, AOD-9604 inhibits lipogenesis by reducing acetyl-CoA carboxylase (ACC) activity and decreasing the expression of lipogenic transcription factors including SREBP-1c and PPARγ. This dual mechanism — promoting lipolysis while inhibiting fat storage — acts specifically in adipose tissue without engaging the systemic GH receptor signaling responsible for insulin resistance. Preclinical studies confirm that AOD-9604 at therapeutic doses does not elevate IGF-1, does not affect insulin sensitivity, and does not activate the Jak2/STAT5 pathway that drives GH's growth-promoting effects.",
      "Additional research has identified AOD-9604 activity in cartilage and synovial tissue, where it may promote chondrocyte differentiation and extracellular matrix production through pathways not yet fully characterized. Intra-articular injection models in small animals show improved cartilage quality metrics, suggesting mechanisms beyond the lipolytic ADRB3 pathway. GRAS (Generally Recognized as Safe) status in Australia for food supplement use provides a distinctive regulatory characterization of its safety profile.",
    ],
    whatToExpect: [
      { week: "Days 1–7", description: "In vitro adipocyte studies show lipolysis measurable within hours of treatment. In vivo rodent models: plasma free fatty acid elevation detectable within 2–4 hours of administration. No IGF-1 or insulin changes on metabolic panels." },
      { week: "Weeks 2–4", description: "Progressive lipolytic effect accumulation in adipose depot research. Adipocyte morphology studies show reduced lipid droplet size. No glucose metabolism changes in concurrent metabolic panel studies." },
      { week: "Month 2+", description: "Long-term metabolic studies in obese animal models document reductions in visceral adipose depot weight without changes in lean body mass. Cartilage quality metrics in intra-articular injection models show improvements versus control groups." },
    ],
    dosingRecommendations: "Clinical lipolysis research: 1 mg subcutaneous injection once daily. In vitro adipocyte assays: 1–100 nM. Rodent in vivo lipolysis models: 0.5–2 mg/kg subcutaneous injection. Intra-articular cartilage models in small animals: 10–100 μg per joint injection, 2–3 times weekly. The absence of IGF-1 or insulin effects at all published doses is a key characteristic that simplifies research design for metabolic studies where these confounders would otherwise need to be controlled for.",
    faq: [
      { q: "Why doesn't AOD-9604 stimulate IGF-1 the way full-length growth hormone does?", a: "AOD-9604 (hGH fragment 177–191) lacks the N-terminal domain of GH (residues 1–50) that directly binds and activates the GH receptor (GHR). GHR activation — through dimerization and Jak2/STAT5 signaling — is the upstream trigger for liver IGF-1 production. AOD-9604 bypasses the GHR entirely, instead activating ADRB3 in adipocytes through a distinct molecular mechanism. This selective mechanism is precisely what makes it a useful tool for studying lipolysis in isolation from the anabolic and diabetogenic effects of GH." },
      { q: "What is GRAS status and what does it mean for AOD-9604?", a: "GRAS stands for Generally Recognized as Safe — a US FDA (and analogous Australian TGA) category indicating a substance does not require formal pre-market food additive approval based on available safety evidence. AOD-9604 was granted GRAS status in Australia for use in food products, reflecting the body of safety data accumulated from its clinical trials. This regulatory classification does not constitute approval for therapeutic use, but it provides a reference point for the compound's acute safety characterization." },
      { q: "What is the significance of the disulfide bridge in AOD-9604's sequence?", a: "AOD-9604 (hGH 177–191) contains two cysteine residues (Cys-182 and Cys-189) that form a disulfide bridge in the native hGH structure. This bridge is preserved in AOD-9604 and is important for maintaining the cyclic conformation that positions the lipolytic active site correctly. Loss of the disulfide bridge (through reduction) decreases biological activity, which is why storage and handling conditions that prevent disulfide reduction are important for maintaining compound potency." },
      { q: "Can AOD-9604 be combined with GLP-1 agonists in metabolic research?", a: "Combining AOD-9604 (ADRB3-mediated lipolysis) with GLP-1 receptor agonists (appetite suppression, gastric emptying modulation) represents mechanistically complementary anti-obesity targets operating through distinct pathways. No published clinical combination data exists as of 2025, but the non-overlapping mechanisms make this a logical combination for preclinical metabolic research investigating synergistic effects on adipose reduction." },
    ],
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
    price: 66,
    size: "50mg",
    dosages: [
      { size: "50mg", price: 66 },
      { size: "100mg", price: 102 },
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
    researchApplications: [
      "Extracellular matrix remodeling and TGF-β signaling pathways",
      "Collagen synthesis upregulation and MMP-1 inhibition studies",
      "Antioxidant signaling through copper delivery to SOD enzymes",
      "Skin biology and dermal fibroblast gene expression research",
    ],
    mechanismOfAction: [
      "GHK-Cu (glycyl-L-histidyl-L-lysine copper complex) functions as both a signaling molecule and a copper delivery vehicle. The tripeptide GHK coordinates Cu(II) with extremely high affinity (Ka ~10¹⁷ M⁻¹), enabling efficient copper donation to copper-dependent enzymes including Cu/Zn superoxide dismutase (SOD1), lysyl oxidase (critical for collagen crosslinking), and cytochrome c oxidase. By delivering bioavailable copper to these enzymes, GHK-Cu enhances antioxidant defense and collagen structural integrity simultaneously.",
      "At the gene expression level, GHK-Cu modulates TGF-β1 and TGF-β2 signaling in fibroblasts, upregulating collagen synthesis while simultaneously reducing the expression of matrix metalloproteinase-1 (MMP-1), the primary enzyme responsible for collagen degradation. Genomic studies (Pickart, Margolina) have mapped GHK-Cu's effects on over 4,000 human genes, with the most pronounced effects on genes controlling tissue remodeling, inflammation resolution, and cellular survival pathways. The compound promotes SPARC (Secreted Protein Acidic and Rich in Cysteine) expression, a matricellular protein important for organizing collagen fibril architecture.",
      "In aging research contexts, the decline of endogenous GHK-Cu levels from ~200 ng/mL at age 20 to ~80 ng/mL at age 60 correlates with hallmarks of tissue aging including reduced collagen density, impaired wound repair, and increased oxidative stress. Exogenous GHK-Cu supplementation in in vitro models restores gene expression patterns in aged human fibroblasts toward younger profiles, suggesting it functions as an endogenous tissue restoration signal that becomes rate-limiting with age.",
    ],
    whatToExpect: [
      { week: "Days 1–7", description: "In vitro fibroblast assays: measurable collagen synthesis increase and MMP-1 reduction within 24–48 hours of treatment. Copper delivery to SOD enzymes detectable in enzymatic activity assays. Wound scratch assays show enhanced cell migration velocity." },
      { week: "Weeks 2–4", description: "Dermal fibroblast culture studies show progressive extracellular matrix deposition. In vivo rodent wound models: increased tensile strength of healing wounds versus controls. Antioxidant capacity measurements (ORAC, SOD activity) continue improving." },
      { week: "Month 2+", description: "Long-term dermal research models show measurable increases in dermal collagen density by histological analysis. Wound models demonstrate superior scar quality with GHK-Cu treatment versus controls. Genomic studies show sustained upregulation of tissue remodeling gene clusters over multi-week treatment periods." },
    ],
    dosingRecommendations: "In vitro fibroblast and cell culture research: 1–100 nM in culture medium. This wide range reflects dose-response optimization needs for specific endpoints — collagen synthesis is typically maximized at 1–10 nM while gene expression changes may require higher concentrations. Topical research formulations: 0.1–1% w/v in appropriate aqueous vehicles. In vivo rodent wound healing: subcutaneous or topical application at 0.1–1 mg/kg or per wound area (approximately 100 μg/wound topical). GHK-Cu dissolves readily in water and is stable as a blue-green solution, making it straightforward to prepare for cell culture use.",
    faq: [
      { q: "Why is GHK-Cu blue-green in solution?", a: "The blue-green color results from copper (Cu2+) coordination within the GHK tripeptide. Cu2+ in octahedral or square planar coordination environments with nitrogen and oxygen ligands (as in the imidazole nitrogen of histidine and amino groups of glycine and lysine) absorbs light in the orange-red wavelengths (~600–700 nm), producing the complementary blue-green appearance. This characteristic color is used as a quality indicator — colorless or pale GHK-Cu solutions may indicate copper dissociation from the peptide." },
      { q: "Is topical GHK-Cu absorbed into the dermis?", a: "GHK is a small tripeptide (3 amino acids, MW ~303 without copper) that can penetrate the stratum corneum through passive diffusion and intercellular lipid pathways, particularly when formulated in appropriate penetration-enhancing vehicles. Published studies using radiolabeled GHK confirm dermal penetration in vitro. Copper uptake by dermal cells following topical GHK-Cu application has been documented by ICP-MS analysis of tissue samples in ex vivo models." },
      { q: "What is the research evidence for GHK-Cu's effect on gene expression?", a: "Loren Pickart and colleagues published extensive microarray analyses documenting GHK-Cu effects on human gene expression. The most comprehensive analysis identified modulation of approximately 4,000 genes, with the most significant effects in pathways related to tissue remodeling (collagen, elastin, fibronectin), inflammation resolution (COX-2, TNF-α), and cellular survival. The data is available in published literature and represents one of the most comprehensive gene expression datasets for any cosmeceutical/research peptide." },
      { q: "How does GHK-Cu compare to Epitalon in longevity research?", a: "GHK-Cu and Epitalon address distinct aging mechanisms. GHK-Cu acts primarily at the extracellular matrix and gene expression level, restoring tissue quality and antioxidant defense. Epitalon acts intracellularly, activating telomerase for telomere maintenance and normalizing pineal gland circadian function. Both are included in the GLOW Stack protocol as complementary interventions targeting different cellular aging pathways." },
    ],
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
    price: 60,
    size: "10mg",
    dosages: [
      { size: "10mg", price: 60 },
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
    researchApplications: [
      "Telomerase activation and telomere length maintenance in cellular studies",
      "Circadian rhythm regulation and pineal gland function research",
      "Neuroendocrine axis modulation in aging models",
      "Longevity pathways and cell senescence mechanisms",
    ],
    mechanismOfAction: [
      "Epitalon (Ala-Glu-Asp-Gly) is the synthetic tetrapeptide corresponding to the active sequence of epithalamin, a polypeptide extract of bovine pineal gland. Its primary characterized mechanism is activation of telomerase (hTERT, human telomerase reverse transcriptase), the enzyme responsible for elongating telomeric DNA at chromosome ends. Telomere shortening is a central mechanism of cellular senescence; cells with shortened telomeres enter a replicative halt (senescence) or undergo apoptosis. Epitalon-induced telomerase activation in in vitro models has been documented to maintain or extend telomere length beyond the normal decline trajectory.",
      "The pineal gland is Epitalon's proposed principal target organ. In aged mammals, melatonin synthesis and secretion by the pineal gland decline substantially, disrupting circadian rhythms and melatonin-dependent antioxidant defense. Epitalon treatment in aged animal models normalizes both melatonin secretion amplitude and the circadian patterning of melatonin peaks, suggesting it restores functional pineal gene expression. The downstream effects include improved sleep architecture, reduced oxidative stress, and normalization of cortisol and gonadotropin patterning that becomes dysregulated with age.",
      "Epitalon also modulates the hypothalamic-pituitary axis more broadly: in aged rodents and primates, it reduces chronically elevated ACTH/cortisol while normalizing LH and FSH patterns that drift with age-related neuroendocrine dysfunction. This multi-axis neuroendocrine normalization effect has led researchers to propose Epitalon as a bioregulator that restores youthful signaling patterns across the HPA and HPG axes rather than a single-target pharmacological agent.",
    ],
    whatToExpect: [
      { week: "Days 1–10", description: "In vitro: telomerase activity measurable by TRAP assay within 24–48 hours in treated cell cultures. In aged rodent in vivo protocols: melatonin secretion patterns begin normalizing. Cortisol diurnal patterns show early evidence of improved patterning in 10-day course protocols from Russian research literature." },
      { week: "Weeks 2–8", description: "Telomere length maintenance detectable in serially passaged cell lines. Animal models: circadian rhythm normalization (activity patterns, body temperature cycles) measurable by telemetry. Gonadotropin pattern studies show LH/FSH pulse normalization." },
      { week: "Month 3+", description: "Long-term Russian clinical observation studies (12–36 months) report reduced incidence of age-related biomarker abnormalities and improved immune surveillance parameters. Primate longevity studies document extended healthy lifespan in treated cohorts. Course-based protocols (10–20 day courses repeated annually) are the typical study design in published research." },
    ],
    dosingRecommendations: "Standard Russian research protocols: 0.1 mg/kg/day subcutaneous or intramuscular injection for 10–20 consecutive days, repeated once or twice annually. Some protocols used 5–10 mg flat dose for 10–20 days. In vitro telomerase studies: 0.1–10 μM in culture medium. The course-based (episodic) dosing protocol rather than continuous daily administration is characteristic of Epitalon research, reflecting the proposed mechanism of biological reset rather than continuous supplementation.",
    faq: [
      { q: "What is the scientific basis for Epitalon's telomerase activation claim?", a: "In vitro studies by Khavinson et al. published in peer-reviewed journals document telomerase activity increases (measured by TRAP assay) in human fetal fibroblasts, human mammary epithelial cells, and several cancer cell lines treated with Epitalon at micromolar concentrations. The proposed mechanism involves chromatin remodeling at the hTERT promoter region, increasing telomerase gene transcription. These findings have been independently replicated in some but not all experimental systems." },
      { q: "How does the Russian research background on Epitalon compare to Western clinical standards?", a: "Epitalon's research base is predominantly from the St. Petersburg Institute of Bioregulation and Gerontology under Professor Khavinson, spanning 40+ years. The studies include in vitro cell biology, rodent longevity models, primate studies, and human clinical observations. By Western randomized controlled trial standards, the evidence base lacks large double-blind RCTs. Researchers should approach the data within this context — the mechanistic and preclinical data is extensive; the clinical data is observational and primarily from a single research group." },
      { q: "Is Epitalon the same as Epithalon or Epithalamin?", a: "Related but distinct. Epithalamin is the crude polypeptide extract from bovine pineal gland. Epitalon (also spelled Epithalon) is the purified, synthesized tetrapeptide (Ala-Glu-Asp-Gly) corresponding to the proposed active sequence within Epithalamin. For research purposes, synthetic Epitalon is used to ensure precise dosing and eliminate batch variability inherent in crude biological extracts." },
      { q: "What is a standard Epitalon research course protocol?", a: "Published Russian research protocols typically employ 10–20 consecutive daily injections of Epitalon (0.1 mg/kg or 5–10 mg flat dose) as one 'course.' Courses are repeated 1–2 times per year based on the hypothesis that episodic telomerase activation has long-lasting effects that do not require continuous dosing. The rationale for course-based rather than continuous administration is not mechanistically fully established, but follows the clinical practice patterns of Khavinson's group over decades of research." },
    ],
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
    price: 38,
    size: "10mg",
    dosages: [
      { size: "10mg", price: 38 },
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
    researchApplications: [
      "GABAergic transmission modulation without benzodiazepine dependence",
      "BDNF upregulation in hippocampal and cortical neurotrophin studies",
      "Anxiolytic mechanisms through GABA-A receptor sensitization",
      "Enkephalinase inhibition and endogenous opioid modulation research",
    ],
    mechanismOfAction: [
      "Selank (Thr-Lys-Pro-Arg-Pro-Gly-Pro) is a synthetic heptapeptide analog of tuftsin (Thr-Lys-Pro-Arg), an endogenous immunomodulatory tetrapeptide. The additional Pro-Gly-Pro tripeptide at the C-terminus substantially increases metabolic stability in plasma and cerebrospinal fluid by reducing susceptibility to aminopeptidase and carboxy-peptidase cleavage, extending biological half-life from minutes (tuftsin) to hours (Selank). This stability is crucial for CNS activity, as the peptide must remain intact long enough to engage central targets following intranasal or subcutaneous administration.",
      "Selank's primary anxiolytic mechanism does not involve direct GABA-A receptor binding at the benzodiazepine site — distinguishing it from classical anxiolytics. Instead, it modulates GABA-A receptor sensitivity through an allosteric mechanism that increases GABAergic tone without direct agonism. This produces anxiolysis without the sedation, motor impairment, and dependence liability of benzodiazepines. Selank also inhibits enkephalinase (neprilysin), an enzyme that degrades endogenous opioid peptides including enkephalins. By prolonging enkephalin half-life, Selank enhances endogenous anxiolytic opioid tone.",
      "Neurotrophin effects include documented upregulation of BDNF (brain-derived neurotrophic factor) mRNA and protein in hippocampal and cortical regions. BDNF-TrkB signaling promotes neuronal survival, dendritic arborization, and synaptic plasticity — mechanisms relevant for anxiety research models where hippocampal BDNF deficits are a consistent finding. Selank additionally modulates serotonergic neurotransmission (5-HT synthesis, release, and receptor sensitivity) in limbic circuits, contributing to mood-stabilizing effects observed in preclinical models.",
    ],
    whatToExpect: [
      { week: "Days 1–7", description: "In preclinical anxiety models (elevated plus maze, open field), anxiolytic effects measurable within hours of acute administration. No sedation or motor impairment on rotarod testing. BDNF mRNA elevation in hippocampus detectable within 24 hours in rodent studies." },
      { week: "Weeks 2–4", description: "Continued anxiolytic effects without tolerance development in repeated-exposure models. Cognitive research endpoints (Morris water maze, passive avoidance) begin showing improvements versus control groups. No dependence or withdrawal behavior observed on cessation in preclinical models." },
      { week: "Month 2+", description: "Extended treatment models show sustained BDNF and serotonergic modulation without desensitization. Published Russian clinical data documents maintained anxiolytic efficacy in GAD treatment studies without the tolerance/dependence trajectory of benzodiazepine comparators." },
    ],
    dosingRecommendations: "Russian clinical approval (intranasal, 0.15% solution): 750 μg per administration (5 drops × 150 μg/drop), 3 times daily. Preclinical subcutaneous rodent studies: 0.3–0.9 mg/kg once or twice daily. Intranasal administration is preferred in clinical research because it bypasses first-pass metabolism and delivers the peptide directly to CNS via olfactory and trigeminal nerve pathways. For subcutaneous injection research, 1 mg/mL working concentration is standard. Selank's short-acting profile supports multiple daily dosing for sustained CNS effects.",
    faq: [
      { q: "Why doesn't Selank cause dependence like benzodiazepines?", a: "The dependence liability of benzodiazepines is directly tied to their high-affinity binding at the benzodiazepine site of GABA-A receptors, which produces receptor downregulation, physical tolerance, and a withdrawal syndrome on cessation. Selank's mechanism — indirect GABA-A sensitization and enkephalinase inhibition — does not involve high-affinity orthosteric receptor binding. Preclinical studies show no withdrawal behavior following abrupt discontinuation of extended Selank administration, consistent with absence of physical dependence." },
      { q: "What is Selank's regulatory status in Russia?", a: "Selank was approved as an anxiolytic drug in the Russian Federation and Ukraine under the tradename 'Selank' (0.15% nasal spray). This approval is based on randomized clinical trials demonstrating efficacy in generalized anxiety disorder (GAD). It is not approved in the US, EU, or most other jurisdictions, and is not approved for human therapeutic use in those markets." },
      { q: "How does Selank compare to Semax in its research profile?", a: "Selank and Semax are both Russian nootropic peptides with BDNF-upregulating activity, but they differ in primary mechanism and research applications. Selank is primarily characterized as anxiolytic and immune-modulating, with its tuftsin-based structure conferring immunomodulatory effects in addition to CNS activity. Semax is more prominently neuroprotective, with stronger BDNF/VEGF upregulation and documented efficacy in stroke recovery research. Some researchers combine both for complementary CNS coverage." },
      { q: "Is Selank structurally related to any natural peptide?", a: "Yes — Selank is a synthetic extension of tuftsin (Thr-Lys-Pro-Arg), an endogenous tetrapeptide produced by enzymatic cleavage of the Fc region of IgG. Tuftsin has well-characterized immunomodulatory effects (phagocytosis activation, NK cell stimulation) in addition to mild CNS activity. Selank extends tuftsin by adding Pro-Gly-Pro at the C-terminus to improve metabolic stability, while retaining and expanding the parent peptide's bioactivity profile." },
    ],
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
    price: 34,
    size: "5mg",
    dosages: [
      { size: "5mg", price: 34 },
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
    researchApplications: [
      "BDNF upregulation and neurotrophin signaling in CNS models",
      "Neuroprotection through BDNF-TrkB pathway activation",
      "Cognitive enhancement and synaptic plasticity research",
      "ACTH 4-10 fragment pharmacology and stress response modulation",
    ],
    mechanismOfAction: [
      "Semax (Met-Glu-His-Phe-Pro-Gly-Pro) is derived from ACTH 4–10, a fragment of adrenocorticotropic hormone that lacks melanocortin receptor activity but retains the nootropic and neuroprotective properties identified in the parent sequence. The Pro-Gly-Pro C-terminal extension, identical to that used in Selank, provides metabolic stability in biological fluids. Semax's primary molecular mechanism in the CNS is robust upregulation of BDNF mRNA and protein in hippocampal CA1/CA3 regions, dentate gyrus, and prefrontal cortex — the regions most critical for learning, memory consolidation, and executive function.",
      "BDNF binds TrkB (tropomyosin receptor kinase B), activating MAPK/ERK, PI3K/Akt, and PLCγ signaling cascades that promote neuronal survival, dendritic spine density, synaptic potentiation, and adult hippocampal neurogenesis. Semax simultaneously upregulates NGF (nerve growth factor) and VEGF expression, suggesting a broader neurotrophin response program rather than isolated BDNF effects. The VEGF component may contribute to improved cerebrovascular perfusion in ischemia research models.",
      "Dopaminergic and serotonergic modulation are additional Semax mechanisms. Research documents dopamine receptor sensitization in nucleus accumbens and prefrontal circuits, consistent with attention and motivation research findings. Semax reduces stress-induced corticosterone elevation in rodent models despite its ACTH lineage — a seeming paradox explained by its lack of MC2R (ACTH receptor) binding and indirect HPA axis modulation through central BDNF/catecholamine effects. Anti-inflammatory activity via NF-κB suppression has been demonstrated in neuroinflammation models.",
    ],
    whatToExpect: [
      { week: "Days 1–7", description: "BDNF mRNA elevation in hippocampal and cortical regions measurable within 2–4 hours of intranasal administration in rodent studies. Acute neuroprotective effects demonstrable in ischemia-reperfusion models given Semax pre-treatment. Cognitive testing (Morris water maze, novel object recognition) begins showing improvements versus control groups." },
      { week: "Weeks 2–4", description: "Sustained BDNF protein elevation supports measurable increases in hippocampal synaptic density in preclinical models. Stroke recovery research: Semax-treated animals show faster behavioral score recovery versus controls. Dopaminergic circuit modulation contributes to sustained attention improvements in cognitive paradigms." },
      { week: "Month 2+", description: "Long-term neuroplasticity effects: hippocampal volume (measured histologically) and dendritic complexity metrics show improvements in chronic Semax treatment groups. Russian clinical observation data documents maintained cognitive benefits in post-stroke rehabilitation patients through extended treatment periods." },
    ],
    dosingRecommendations: "Russian clinical approval (0.1% intranasal solution): 200–2,000 μg/day in 2–3 divided intranasal doses. Stroke treatment protocols used higher doses (1,000–2,000 μg/day) in acute post-stroke settings. Subcutaneous preclinical rodent studies: 25–500 μg/kg. In vitro neuroprotection and BDNF assays: 1–1,000 nM. Reconstitute to 0.1% (1 mg/mL) for standard intranasal research formulation. Evening administration may align better with nocturnal BDNF expression rhythms in some rodent model protocols.",
    faq: [
      { q: "How does Semax increase BDNF when it comes from an ACTH sequence that usually increases cortisol?", a: "This is a pharmacologically important distinction. Full-length ACTH activates the MC2R (ACTH receptor) on adrenal cortex cells to stimulate cortisol production. Semax is derived from ACTH 4–10, a fragment that lacks the N-terminal domain required for MC2R binding. Semax does not activate MC2R and does not directly stimulate cortisol secretion. Its BDNF-upregulating and neuroprotective effects operate through entirely different CNS mechanisms, likely involving melanocortin MC4/MC5 receptors in brain regions that have distinct functions from the adrenal MC2R." },
      { q: "What is Semax's regulatory status?", a: "Semax has received regulatory approval in Russia and Ukraine as a drug indicated for cognitive dysfunction, ischemic stroke treatment, optic nerve disease, and as a nootropic. Available formulations include 0.1% and 1% intranasal solutions. It is not approved in the US, EU, or most Western markets for therapeutic use, and is therefore limited to research applications in those jurisdictions." },
      { q: "Can Semax be combined with Selank?", a: "Yes — Semax and Selank are frequently studied together in Russian clinical literature under the rationale that they offer complementary neuroprotection (Semax: BDNF/neuroprotection emphasis) and anxiolytic/immune modulation (Selank). There are no documented pharmacological interactions between the two compounds, and their mechanisms are largely non-overlapping. Some researchers administer them at different times of day (Semax morning for nootropic effect, Selank evening for anxiolytic effect) based on the clinical usage patterns in published Russian research." },
      { q: "What does 'N-acetyl Semax' differ from standard Semax?", a: "N-acetyl Semax refers to an acetylated form of the peptide (Ac-Met-Glu-His-Phe-Pro-Gly-Pro) claimed to have improved stability and CNS penetration in Russian pharmacological literature. Standard Semax (as available from Nexphoria) is the base peptide without acetylation. The evidence comparing the two forms in head-to-head mechanistic studies is limited; both are used in Russian clinical practice and research." },
    ],
  },
  {
    slug: "nad-plus",
    name: "NAD+",
    casNumber: "53-84-9",
    formula: "C₂₁H₂₇N₇O₁₄P₂",
    molecularWeight: "663.43 g/mol",
    purity: "≥99.5%",
    category: "Wellness",
    price: 30,
    size: "100mg",
    dosages: [
      { size: "100mg", price: 30 },
      { size: "500mg", price: 102 },
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
    researchApplications: [
      "Sirtuin activation and NAD+-dependent deacylation pathways",
      "Mitochondrial function and oxidative phosphorylation research",
      "Metabolic regulation through SIRT1/SIRT3 signaling studies",
      "DNA repair pathways via PARP1/2 and poly-ADP-ribosylation",
    ],
    mechanismOfAction: [
      "NAD⁺ (nicotinamide adenine dinucleotide) serves as the essential hydride acceptor in over 500 oxidoreduction reactions, making it indispensable for the entire oxidative metabolism of carbohydrates, fats, and amino acids. In mitochondria, NAD⁺ accepts electrons from metabolic substrates in the TCA cycle (via isocitrate dehydrogenase, α-ketoglutarate dehydrogenase, malate dehydrogenase), generating NADH which donates electrons to Complex I of the electron transport chain for ATP synthesis. Declining intracellular NAD⁺ concentrations with age impair all these fundamental metabolic processes simultaneously.",
      "Beyond metabolism, NAD⁺ is the obligate substrate for three enzyme classes that mediate gene regulation and genome maintenance. Sirtuins (SIRT1–7) are NAD⁺-dependent deacylases that remove acetyl groups from histones and hundreds of regulatory proteins, controlling gene transcription, mitochondrial biogenesis (SIRT1/SIRT3 via PGC-1α), and metabolic adaptation to nutrient status. PARP1/2 consume NAD⁺ to attach ADP-ribose polymers to proteins at DNA damage sites, coordinating the DNA repair machinery response. These are not backup functions; they represent core signaling pathways whose activity is directly rate-limited by NAD⁺ availability.",
      "CD38, a cADP-ribose synthase and NADase, is a major NAD⁺ consumer that increases substantially with aging and chronic inflammation, contributing to age-related NAD⁺ decline. Research interest has focused on CD38 inhibition as a strategy to raise NAD⁺, complementary to NAD⁺ precursor supplementation (NMN, NR). The discovery that NAD⁺ can translocate between cellular compartments (nucleus, mitochondria, cytoplasm) through Connexin-43 hemichannels and other transport mechanisms has refined understanding of how local NAD⁺ pools regulate compartment-specific enzyme activity.",
    ],
    whatToExpect: [
      { week: "Days 1–7", description: "In vitro enzyme activity assays: SIRT1/SIRT3 deacylase activity measurable immediately upon NAD⁺ supplementation. Cell viability assays under oxidative stress show NAD⁺-dependent protection within 24 hours. PARP activity in DNA damage response assays enhanced." },
      { week: "Weeks 2–4", description: "Cell culture research: mitochondrial biogenesis markers (PGC-1α mRNA, mtDNA content) increase with NAD⁺ supplementation in metabolically stressed cells. Skeletal muscle cell research shows improved oxidative capacity metrics." },
      { week: "Month 2+", description: "Published human NAD⁺ precursor trials (NMN, NR — which elevate intracellular NAD⁺) document improvements in skeletal muscle transcriptomic profiles, insulin sensitivity markers, and inflammatory parameters over 8–12 week supplementation periods. Long-term cell culture aging models show telomere maintenance and reduced senescence markers." },
    ],
    dosingRecommendations: "In vitro enzyme activity assays: 0.1–10 mM in reaction buffer (NAD⁺ concentrations appropriate for PARP, sirtuin, and NADH dehydrogenase assays). Cell culture supplementation research: 0.5–5 mM addition to culture medium. Ex vivo tissue preparation studies: concentration varies by tissue metabolic rate and endpoint. IV infusion protocols in animal models: established per specific institutional research protocol. NAD⁺ is highly water-soluble (>200 mg/mL) and stable at neutral pH for several hours, facilitating in vitro use.",
    faq: [
      { q: "Why use direct NAD+ rather than precursors like NMN or NR?", a: "NAD⁺ precursors (NMN, NR) must be converted intracellularly to NAD⁺ via salvage pathway enzymes. For in vitro cell culture research, direct NAD⁺ supplementation provides immediate substrate without depending on cellular enzyme expression levels. For in vivo research, precursors may be preferred since exogenous NAD⁺ is rapidly degraded in plasma; NMN and NR are more bioavailable systemically. The choice depends on the research context: direct NAD⁺ for in vitro enzyme and cell assays, precursors for in vivo tissue supplementation studies." },
      { q: "Is NAD+ stable in aqueous solution?", a: "NAD⁺ degrades in neutral and alkaline aqueous solution primarily through hydrolysis of the nicotinamide glycosidic bond and oxidation. At pH 7.4, room temperature, significant degradation occurs within hours. For research use: prepare fresh solutions, use cold buffers, aliquot concentrated stocks at −80°C (avoid NAD⁺ degradation through freeze-thaw), and neutralize acidic or basic conditions. For storage, lyophilized NAD⁺ at −20°C under anhydrous conditions (desiccated) is stable for the shelf life specified." },
      { q: "What is the relationship between NAD+ and the sirtuins SIRT1-7?", a: "Sirtuins are NAD⁺-dependent deacylases: they remove acyl modifications (acetyl, succinyl, malonyl groups) from target lysine residues, consuming one NAD⁺ molecule per deacylation reaction and producing nicotinamide as a product. The KM of most sirtuins for NAD⁺ (~100–500 μM) means that physiological NAD⁺ concentrations (~200–500 μM in young cells, declining to ~100–200 μM in aged cells) directly limit sirtuin activity. NAD⁺ repletion effectively turns up sirtuin-mediated gene regulation and metabolic adaptation programs." },
      { q: "What is CD38 and why is it relevant to NAD+ research?", a: "CD38 is a multifunctional ectoenzyme expressed on immune cells that functions as both a cADP-ribose synthase and an NADase (NAD⁺-consuming enzyme). CD38 expression increases dramatically with age and in response to chronic inflammation, making it a major driver of age-related NAD⁺ decline. Research using CD38 knockout mice shows substantially elevated tissue NAD⁺ levels and improved metabolic function. CD38 inhibitors (including several natural compounds) are being studied as strategies to preserve NAD⁺ levels alongside supplementation approaches." },
    ],
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
    price: 54,
    size: "10mg",
    dosages: [
      { size: "10mg", price: 54 },
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
    researchApplications: [
      "MC3R/MC4R melanocortin receptor pharmacology in CNS research",
      "Central nervous system pathways in motivation and reward circuits",
      "Hypothalamic-limbic axis signaling independent of peripheral mechanisms",
      "Autonomic and appetite-regulatory MC4R research models",
    ],
    mechanismOfAction: [
      "PT-141 (Bremelanotide) activates MC3R and MC4R subtypes of the melanocortin receptor family with high selectivity. MC4R is expressed throughout the CNS, with particularly dense expression in the hypothalamic paraventricular nucleus (PVN), medial preoptic area (MPOA), and limbic regions including the ventral tegmental area. Unlike PDE5 inhibitors (sildenafil, tadalafil) which act peripherally on vascular smooth muscle, PT-141 engages central neural circuits that modulate sexual motivation and arousal at the level of reward and dopaminergic pathways.",
      "MC4R activation in the MPOA triggers a complex signal cascade involving dopaminergic (via D1/D2 receptor pathways in the mesolimbic system) and serotonergic modulation that drives behavioral motivation circuits. PT-141 increases extracellular dopamine in the nucleus accumbens — the brain's primary reward integration center — contributing to heightened motivational states. The peptide also modulates noradrenergic tone and oxytocin release in hypothalamic circuits, adding social and bonding dimensions to its CNS activity profile.",
      "PT-141's cyclic peptide structure (closed by a Lys-Asp lactam bridge) confers greater metabolic stability and receptor selectivity than linear melanocortin analogs. The cyclic conformation rigidly pre-organizes the pharmacophore (His-D-Phe-Arg-Trp core) in the receptor-binding conformation, enabling the high potency and selectivity profile. This structural feature also underlies the distinction between PT-141 (free C-terminal acid) and Melanotan-II (C-terminal amide) — a minor structural difference with notable receptor selectivity implications.",
    ],
    whatToExpect: [
      { week: "Acute (45–60 min post-administration)", description: "Onset of central MC4R activation in published pharmacology studies. FDA-approved clinical dosing (1.75 mg SC) produces onset within 45 minutes in RECONNECT trial subjects. In preclinical CNS receptor binding studies, hypothalamic MC4R occupancy measurable within 30 minutes." },
      { week: "Days 1–7 (research protocol)", description: "Repeated dosing research protocols in rodent models: measurable MC4R-dependent behavioral changes in appropriate paradigms. Dopamine flux studies in NAc tissue show consistent extracellular dopamine elevation with each administration." },
      { week: "Ongoing research endpoints", description: "Post-marketing research continues examining PT-141's broader autonomic effects (blood pressure, heart rate responses) and appetite-regulatory implications through MC4R pathways distinct from the approved indication. Receptor desensitization studies in chronic exposure models are ongoing." },
    ],
    dosingRecommendations: "FDA-approved dosing (Vyleesi, HSDD): 1.75 mg subcutaneous injection 45 minutes before sexual activity, maximum once per 24 hours, maximum 8 doses per month. Preclinical rodent MC4R pharmacology: 0.1–1 mg/kg subcutaneous or intranasal. In vitro MC receptor competitive binding assays: IC50 ~1–10 nM in published literature. The FDA-approved on-demand dosing schedule (as needed rather than daily) reflects the acute CNS mechanism of action and is relevant context for research protocol design.",
    faq: [
      { q: "How is PT-141 structurally different from Melanotan-II?", a: "PT-141 (Bremelanotide) and Melanotan-II differ at a single structural position: PT-141 has a free carboxylic acid at the C-terminus (COOH), while Melanotan-II has a C-terminal amide (CONH₂). This seemingly minor difference significantly alters the receptor selectivity profile: Melanotan-II is a pan-melanocortin agonist (MC1R through MC5R), while PT-141's C-terminal free acid confers preferential MC3R/MC4R selectivity with reduced MC1R activity. This selectivity difference means PT-141 produces fewer melanogenesis effects than Melanotan-II at comparable doses." },
      { q: "Why was PT-141 developed from Melanotan-II rather than designed de novo?", a: "Melanotan-II was being investigated in early Phase I trials for tanning (via MC1R activation) when researchers serendipitously observed strong autonomic effects in volunteers. These effects were traced to CNS MC4R activation. PT-141 was developed specifically to optimize the CNS MC4R profile while minimizing the MC1R-mediated pigmentation effects that would have been an unwanted side effect in the intended clinical indication. This is a classic example of off-target observations redirecting drug development." },
      { q: "Does PT-141 affect blood pressure?", a: "Yes — transient increases in blood pressure have been observed in clinical trials and are listed in PT-141's FDA-approved prescribing information. The mechanism involves MC4R activation in autonomic circuits controlling cardiovascular tone. The effect is transient (peaking ~12 hours post-dose) and was the primary basis for PT-141's initial development for hemorrhagic shock research before its CNS effects were identified." },
      { q: "What distinguishes PT-141's mechanism from PDE5 inhibitors for CNS research?", a: "PDE5 inhibitors (sildenafil, tadalafil) act peripherally by inhibiting cyclic GMP degradation in vascular smooth muscle, increasing vasodilation in genital tissue. They require physical stimulation to work and do not directly modulate central desire pathways. PT-141 acts centrally via hypothalamic MC4R, directly engaging dopaminergic reward and motivational circuits. This fundamental mechanistic distinction makes PT-141 a valuable tool for CNS-focused research on appetitive behavior that is not accessible via PDE5 inhibition." },
    ],
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
    price: 48,
    size: "10mg",
    dosages: [
      { size: "10mg", price: 48 },
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
    researchApplications: [
      "Melanocortin receptor pharmacology (MC1R/MC3R/MC4R/MC5R)",
      "Melanogenesis and eumelanin synthesis through cAMP/PKA pathways",
      "CNS MC4R signaling in energy homeostasis and appetite research",
      "Autonomic nervous system modulation in preclinical models",
    ],
    mechanismOfAction: [
      "Melanotan-II (MT-II) is a cyclic heptapeptide analog of alpha-melanocyte-stimulating hormone (α-MSH) that activates all four classical melanocortin receptors (MC1R–MC5R) with varying potencies. The disulfide bridge-mimicking lactam (Asp-Lys) at positions 5 and 10 stabilizes the peptide in a cyclic conformation that optimally engages the melanocortin receptor binding cleft. MC1R activation in epidermal melanocytes is the primary driver of melanogenesis: Gαs-cAMP-PKA signaling upregulates tyrosinase, the rate-limiting enzyme in eumelanin synthesis, and increases MITF (microphthalmia-associated transcription factor) expression, the master regulator of melanocyte differentiation.",
      "CNS melanocortin receptors (MC3R, MC4R) are responsible for Melanotan-II's autonomic and appetitive effects. MC4R in the hypothalamic paraventricular nucleus and ventromedial hypothalamus regulates energy homeostasis: activation reduces NPY/AgRP orexigenic signaling and promotes POMC satiety pathways. MC3R in hypothalamic arcuate nucleus modulates energy expenditure and feeding behavior in a complementary but distinct manner. These central effects make MT-II useful for appetite regulation and energy metabolism research models.",
      "MC5R is expressed in exocrine glands (sebaceous, lacrimal, preputial) and mediates effects on exocrine secretion. The comprehensive pan-melanocortin receptor profile of MT-II makes it a broader research tool than PT-141 (preferential MC3R/MC4R) or α-MSH analogs designed for selective MC1R activation, providing researchers with a compound that engages the full melanocortin system for pharmacological characterization.",
    ],
    whatToExpect: [
      { week: "Days 1–7", description: "MC1R activation: in vitro melanocyte assays show measurable tyrosinase activity increase and eumelanin production within 24–48 hours. In vivo rodent melanogenesis studies: darkening of coat/skin detectable histologically within 3–5 days of administration." },
      { week: "Weeks 2–4", description: "Progressive melanogenesis accumulation in in vivo models. CNS MC4R effects: hypothalamic neuropeptide expression changes (reduced NPY, increased POMC) measurable in brain tissue at weeks 2–4 with repeated dosing." },
      { week: "Month 2+", description: "Long-term melanogenesis studies show dose-dependent skin darkening maintained with continued exposure. Energy metabolism research protocols show appetite suppression and body weight reduction in obese rodent models with chronic MC4R activation." },
    ],
    dosingRecommendations: "Preclinical melanogenesis research: 0.3–1 mg/kg subcutaneous injection in rodents. CNS receptor pharmacology (MC4R-mediated effects): 0.1–0.5 mg/kg subcutaneous. In vitro MC receptor binding and cAMP assays: 0.1–1,000 nM. Note that MT-II is UV-sensitive — store and handle in amber vials or subdued light conditions. For intranasal CNS delivery research in rodents, 50–200 μg/animal intranasal administration is used. All in vivo research requires IACUC approval.",
    faq: [
      { q: "Why does MT-II darken skin while PT-141 does not?", a: "MT-II activates MC1R (the melanocyte receptor) with high potency, driving melanin synthesis. PT-141's C-terminal free acid modification reduces MC1R activity while preserving MC3R/MC4R potency. This receptor selectivity difference was engineered specifically to develop PT-141 for CNS applications where the unwanted MC1R-mediated pigmentation effect of MT-II would have been a significant obstacle to clinical development." },
      { q: "What are MC5R's physiological roles in research?", a: "MC5R mediates melanocortin effects on exocrine secretory glands, including sebaceous glands (regulating sebum output), lacrimal glands, and preputial glands. MT-II's MC5R activity has made it useful for studying sebaceous biology, acne models, and dry eye research. This receptor system has received less attention than MC1R/MC4R but represents a distinct research application for pan-melanocortin agonists like MT-II." },
      { q: "How does MT-II compare to natural α-MSH?", a: "MT-II has higher potency and metabolic stability than native α-MSH due to its cyclic disulfide bridge conformation and unnatural D-phenylalanine at position 7. Native α-MSH is a linear tridecapeptide (13 aa) with a plasma half-life of minutes. MT-II's cyclic structure resists proteolytic degradation and pre-organizes the His-D-Phe-Arg-Trp pharmacophore for high-affinity receptor engagement. MT-II is therefore preferred over α-MSH as a research tool where longer-acting, higher-potency melanocortin receptor stimulation is needed." },
      { q: "Is MT-II appropriate for tanning research?", a: "MT-II is used in sunless tanning research as a tool to understand MC1R-driven melanogenesis independent of UV irradiation, which allows controlled studies of melanin synthesis without the confounding DNA damage and inflammatory effects of UV exposure. Phase I/II human clinical trials by Hruby's group documented dose-dependent skin darkening. The compound remains a research tool only; no tanning product formulation has received regulatory approval." },
    ],
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
    price: 66,
    size: "5mg",
    dosages: [
      { size: "5mg", price: 66 },
    ],
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
    researchApplications: [
      "T-cell differentiation and activation through MHC class I enhancement",
      "Th1 cytokine production (IL-2, IFN-γ) in immune balance studies",
      "Natural killer cell and dendritic cell activation research",
      "Toll-like receptor signaling and NF-κB pathway modulation",
    ],
    mechanismOfAction: [
      "Thymosin Alpha-1 (Tα1) is the N-terminal 28-amino acid acetylated peptide derived from prothymosin alpha, a ubiquitous nuclear protein. Tα1 acts as a thymic hormone-like signaling molecule that bridges innate and adaptive immune responses. Its primary mechanism involves upregulation of MHC class I expression on target cells (both normal and transformed), improving antigen presentation to cytotoxic T lymphocytes (CTLs). In antigen-presenting cells, Tα1 stimulates IL-12 production, which drives naïve T cells toward Th1 differentiation — the cellular arm of immunity critical for viral clearance and tumor immunosurveillance.",
      "Tα1 signals through Toll-like receptor 9 (TLR9) on plasmacytoid dendritic cells (pDCs), triggering IRF7-dependent type I interferon production (α/β-IFN). This innate immune activation path is distinct from its direct T-cell effects and helps explain Tα1's documented activity against viral infections (HBV, HCV). Through TLR9/TLR2 engagement, it activates NF-κB signaling that upregulates co-stimulatory molecules (CD80, CD86) on dendritic cells, improving their capacity to prime adaptive immune responses. Natural killer cell activity is enhanced through increased IL-12 production and direct NK cell receptor upregulation.",
      "An important research-relevant property of Tα1 is its ability to convert immunosuppressive regulatory T cells (Tregs) toward a pro-inflammatory effector phenotype in cancer microenvironment models, potentially reversing tumor-induced immune tolerance. This Treg-modulating activity has renewed interest in Tα1 for oncology adjuvant applications where restoring anti-tumor immune competence is the research goal.",
    ],
    whatToExpect: [
      { week: "Days 1—7", description: "Innate immune activation: in vitro pDC stimulation shows IFN-α/β elevation within 24–48 hours. Dendritic cell maturation markers (CD80, CD86, CD83) upregulated in treated cell cultures. NK cell cytotoxicity assays show enhanced killing within the first week." },
      { week: "Weeks 2–4", description: "Adaptive immune endpoints: T-cell proliferation assays in response to specific antigens show augmented responses. Th1/Th2 cytokine balance (IL-2, IFN-γ vs. IL-4, IL-10) shifts toward Th1 in treated subjects. In hepatitis models, HBV replication markers begin declining." },
      { week: "Month 2+", description: "Published clinical data: Zadaxin (Tα1) combined with interferon in HBV/HCV treatment shows progressive reduction in viral load over 6–12 month treatment courses. Vaccine adjuvant studies document improved antibody titer and T-cell response magnitude with Tα1 co-administration." },
    ],
    dosingRecommendations: "FDA-approved clinical dosing (Zadaxin): 1.6 mg subcutaneous injection twice weekly. Clinical hepatitis treatment protocols run 6–12 months; cancer adjuvant protocols vary by indication. Preclinical rodent immunology: 100–400 μg/kg subcutaneous injection. In vitro T-cell and dendritic cell assays: 0.1–100 nM. The twice-weekly subcutaneous injection schedule is standard across the published clinical literature and reflects the pharmacokinetic profile (plasma half-life ~2 hours) and the duration of downstream immune activation per dose.",
    faq: [
      { q: "In how many countries is Thymosin Alpha-1 (Zadaxin) approved?", a: "As of 2024, Zadaxin (Thymosin Alpha-1, SciClone Pharmaceuticals) has regulatory approval in over 35 countries, primarily in Asia (China, South Korea, Philippines, Indonesia), Middle East, Latin America, and Eastern Europe. It is approved for chronic hepatitis B, chronic hepatitis C (as adjunct to interferon), and as a vaccine enhancer and immunomodulator in various indications depending on jurisdiction. It is not FDA approved in the United States." },
      { q: "How does Tα1 improve vaccine responses?", a: "Tα1 functions as a biological vaccine adjuvant by enhancing dendritic cell maturation and T-cell priming. It upregulates MHC class I and II on antigen-presenting cells, improving antigen presentation efficiency. It promotes IL-12 production, driving Th1-biased responses (important for cellular immunity). In clinical studies co-administering Tα1 with influenza and hepatitis B vaccines, significantly higher antibody titers and improved T-cell responses have been documented compared to vaccine alone, particularly in elderly and immunocompromised subjects." },
      { q: "What was Tα1's COVID-19 research role?", a: "During the COVID-19 pandemic, Tα1 was studied in China as a potential immunomodulatory agent for severe COVID-19, where an impaired innate immune response (particularly deficient type I interferon) combined with excessive inflammatory cytokine production is a key pathophysiological feature. Small clinical studies (non-randomized) reported improved survival and faster viral clearance in Tα1-treated severe COVID-19 patients. Formal randomized trials were initiated but results are limited; this application remains a research area." },
      { q: "Is Tα1 suitable for ongoing use or is it course-based?", a: "Published clinical protocols for hepatitis treatment use continuous twice-weekly administration for 6–12 months. Cancer adjuvant protocols vary. There is no documented tachyphylaxis (loss of immune activation over time) in long-term use. Unlike immunosuppressive drugs that require careful monitoring for tolerance, Tα1's immunostimulatory mechanism does not appear to downregulate its own activity, making extended protocols feasible from a pharmacological standpoint." },
    ],
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
    price: 72,
    size: "5mg",
    dosages: [
      { size: "5mg", price: 72 },
    ],
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
    researchApplications: [
      "Antimicrobial peptide mechanisms and bacterial membrane disruption",
      "Innate immunity and wound healing through FPR2 receptor signaling",
      "LPS neutralization and TLR4 pathway modulation research",
      "Angiogenesis and keratinocyte migration in tissue repair models",
    ],
    mechanismOfAction: [
      "LL-37 is a cationic amphipathic alpha-helical peptide whose antimicrobial mechanism relies on electrostatic and hydrophobic interactions with microbial membranes. The net positive charge of LL-37 (+6 at physiological pH) drives initial attraction to the negatively charged phospholipids that predominate in bacterial outer membranes (phosphatidylglycerol, cardiolipin, LPS). Subsequent hydrophobic insertion of the peptide's hydrophobic face into the membrane bilayer disrupts membrane integrity through a carpet or toroidal pore model, depending on lipid composition. This biophysical mechanism is broadly active against gram-positive and gram-negative bacteria, fungi, and enveloped viruses, and is intrinsically resistance-resistant because it targets membrane structure rather than specific molecular targets.",
      "Beyond direct antimicrobial activity, LL-37 functions as a multifunctional immunomodulatory signal. It neutralizes lipopolysaccharide (LPS) and lipoteichoic acid (LTA) by direct physical binding, preventing TLR4/TLR2 activation that would otherwise drive uncontrolled pro-inflammatory cytokine cascades — critical in sepsis models. LL-37 activates formyl peptide receptor 2 (FPR2/ALX), which promotes chemotaxis of neutrophils and monocytes to infection sites while simultaneously triggering pro-resolution lipid mediator production. This dual pro-inflammatory/pro-resolution activity makes LL-37 a sophisticated innate immune coordinator rather than a simple antimicrobial.",
      "In wound healing, LL-37 promotes keratinocyte migration and proliferation through EGF receptor (EGFR) transactivation and PI3K/Akt pathway activation. It stimulates angiogenesis by activating FPR2-dependent VEGF upregulation. LL-37 also promotes macrophage M2 polarization in later repair stages, supporting the transition from inflammatory to reparative phases. Its deficiency in diabetic wounds and chronic ulcers has been identified as a potential contributor to impaired healing in these pathological states, making LL-37 supplementation a research target for chronic wound models.",
    ],
    whatToExpect: [
      { week: "Acute (hours)", description: "In vitro antimicrobial assays: bacterial membrane disruption and killing demonstrable within 30–60 minutes at MIC concentrations. LPS neutralization in THP-1 monocyte assays shows TNF-α suppression within 2–4 hours. Keratinocyte scratch assay: migration enhancement visible at 6–12 hours post-treatment." },
      { week: "Days 1–7 (wound healing model)", description: "In vivo rodent full-thickness wound models: reduced bacterial colonization and earlier granulation tissue formation in LL-37-treated wounds versus controls. Histological assessment shows improved re-epithelialization and vascular density." },
      { week: "Weeks 2+", description: "Progressive wound closure with superior tensile strength and reduced scar formation compared to saline controls. Inflammatory biomarkers in wound tissue showing resolution phase entry earlier in LL-37-treated groups. Anti-biofilm effects demonstrable in chronic wound biofilm models." },
    ],
    dosingRecommendations: "In vitro MIC determination: test range 0.5–16 μg/mL against relevant bacterial panels (MRSA, P. aeruginosa, E. coli). Wound healing cell migration assays: 0.1–10 μg/mL. In vivo rodent wound healing topical: 50–200 μg per wound in PBS vehicle, applied daily. Systemic preclinical models: 1–5 mg/kg subcutaneous or intraperitoneal injection. Key handling note: LL-37 is prone to self-aggregation and glass surface adsorption — use polypropylene tubes and siliconized surfaces for all dilutions. Brief bath sonication may be needed to restore homogeneous solutions after storage.",
    faq: [
      { q: "Why is LL-37 the only cathelicidin in humans when other mammals have multiple?", a: "Mice and rats express multiple cathelicidins (CRAMP, mCRAMP) while humans have evolved a single cathelicidin (hCAP-18/LL-37). This evolutionary convergence suggests LL-37 covers the functional breadth that multiple cathelicidins address in other species, possibly through its highly versatile amphipathic structure and broad-spectrum activity. The single-cathelicidin status makes human LL-37 deficiency states particularly impactful — conditions like eczema (atopic dermatitis) that show reduced LL-37 expression have disproportionate susceptibility to skin infections." },
      { q: "How does LL-37 promote wound healing without causing excessive inflammation?", a: "LL-37 coordinates a dual-phase immune response: in the early inflammatory phase, it attracts immune cells and activates antimicrobial pathways (pro-inflammatory). In the resolution phase, FPR2 activation by LL-37 triggers lipoxin and resolvin biosynthesis — specialized pro-resolving mediators that actively suppress inflammation. This biphasic role reflects LL-37's biological function as a wound environment sensor that drives both clearance and resolution sequentially, rather than simply amplifying or suppressing inflammation uniformly." },
      { q: "Why does LL-37 require polypropylene tubes for handling?", a: "LL-37's amphipathic cationic structure causes it to adsorb strongly to negatively charged glass surfaces (silanol groups). This surface binding can cause significant loss of peptide from solution, leading to underestimation of effective concentration in research assays. Polypropylene is chemically inert and does not carry the surface charge that attracts LL-37. For all dilution and storage steps, polypropylene tubes are required. Similarly, avoid cellulose ester membranes for filtration; use low-protein-binding PVDF membranes instead." },
      { q: "What is the significance of LL-37 in cancer immunology research?", a: "LL-37 expression in tumor microenvironments has been shown to recruit plasmacytoid dendritic cells (pDCs) via CXCL3/CXCR2 signaling, potentially activating anti-tumor immune surveillance. Simultaneously, some tumor cell types express FPR2 receptors that can be activated by LL-37 to promote tumor cell migration and invasion — context-dependent pro- and anti-tumor effects. This dual role makes LL-37 a complex research target in cancer immunology, and mechanistic studies need to account for the cellular composition of the specific tumor microenvironment being modeled." },
    ],
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
    price: 144,
    size: "10mg",
    dosages: [
      { size: "10mg", price: 144 },
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
    badge: "NEW",
    researchApplications: [
      "Mitochondrial-derived signaling and nuclear translocation under stress",
      "Metabolic homeostasis through AMPK activation pathways",
      "Exercise mimetic effects in skeletal muscle adaptation studies",
      "Insulin sensitivity modulation independent of insulin receptor",
    ],
    mechanismOfAction: [
      "MOTS-c is encoded by a short open reading frame (sORF) within the 12S rRNA gene of mitochondrial DNA — making it the most characterized member of a new class of mitochondria-derived peptides (MDPs). Under metabolic stress conditions, MOTS-c translocates from mitochondria to the cytoplasm and then to the nucleus, where it directly modulates nuclear gene transcription through interaction with the AMPK-activated transcriptional network. This intracellular signaling role positions MOTS-c as a retrograde mitochondria-to-nucleus communication signal that adjusts nuclear gene programs in response to mitochondrial metabolic status.",
      "MOTS-c activates AMPK (AMP-activated protein kinase) in skeletal muscle cells, the master metabolic sensor that promotes glucose uptake, fatty acid oxidation, and mitochondrial biogenesis when activated. Specifically, MOTS-c achieves this by inhibiting the folate cycle and de novo purine biosynthesis pathway, leading to AICAR (5-aminoimidazole-4-carboxamide ribonucleotide) accumulation — AICAR being a direct AMPK activator. This provides a mechanistic link between one-carbon metabolism and AMPK-driven insulin-independent glucose uptake.",
      "In aged organisms, plasma MOTS-c levels decline substantially, correlating with onset of insulin resistance and metabolic syndrome features. Exogenous MOTS-c administration reverses age-associated and diet-induced insulin resistance in mouse models without requiring insulin receptor activation, suggesting it addresses insulin signaling at a downstream or parallel point. Physical exercise acutely increases plasma MOTS-c, and some researchers propose that MOTS-c mediates at least a portion of exercise's systemic metabolic benefits — earning it the designation 'exercise mimetic' peptide.",
    ],
    whatToExpect: [
      { week: "Days 1—7", description: "In vitro skeletal muscle cell studies: AMPK phosphorylation measurable within 30–60 minutes of MOTS-c exposure. Glucose uptake assays show GLUT4 translocation enhancement. In vivo metabolic studies in insulin-resistant mice: fasting glucose begins declining within the first week of administration." },
      { week: "Weeks 2–4", description: "Insulin sensitivity markers (HOMA-IR, glucose tolerance curve) continue improving in metabolic research models. Mitochondrial biogenesis markers (PGC-1α, mtDNA copy number) increase in skeletal muscle tissue samples. Body weight trajectories diverge from untreated controls in high-fat diet models." },
      { week: "Month 2+", description: "Published mouse longevity and metabolic studies document sustained improvements in glucose homeostasis, body composition (reduced visceral fat), and physical performance parameters. Some centenarian population genetic studies have identified MOTS-c variants associated with healthy aging, providing indirect evidence of its long-term metabolic relevance." },
    ],
    dosingRecommendations: "Preclinical metabolic research in rodents: 5–15 mg/kg subcutaneous injection for insulin resistance and obesity models. Exercise mimetic studies: 5 mg/kg subcutaneous injection 2–3 times weekly. In vitro skeletal muscle assays (AMPK activation, glucose uptake): 10–100 nM. Early human pharmacology studies: 10–50 mg subcutaneous doses in single-ascending dose designs. MOTS-c has a short plasma half-life (~hours) due to its susceptibility to proteolytic degradation, supporting multiple-weekly rather than less frequent dosing in in vivo protocols.",
    faq: [
      { q: "What makes MOTS-c unique among mitochondria-derived peptides?", a: "MOTS-c is the only known peptide encoded entirely within mitochondrial DNA (12S rRNA gene sORF) that translocates to the nucleus and directly modulates nuclear gene transcription. Most mitochondrial signaling is indirect (reactive oxygen species, ATP ratios, metabolites). MOTS-c provides a direct peptide-based communication channel from mitochondria to the nucleus, representing a fundamentally new form of organelle crosstalk. SS-31 and Humanin are other MDPs, but with different encoding locations and mechanisms." },
      { q: "Why do MOTS-c levels decline with age?", a: "Mitochondrial DNA copy number and mitochondrial transcription efficiency decline with age due to cumulative mtDNA mutations, reduced mitochondrial biogenesis signaling, and loss of proteostasis. Since MOTS-c is encoded by mtDNA, its expression tracks mitochondrial health. Additionally, systemic inflammation (inflammaging) may increase MOTS-c degradation. The correlation between declining plasma MOTS-c and metabolic syndrome features in aging populations supports its role as a biomarker of mitochondrial health." },
      { q: "Is MOTS-c's mechanism truly independent of the insulin receptor?", a: "Published evidence suggests MOTS-c enhances glucose uptake in skeletal muscle without requiring insulin receptor or IRS-1 signaling, acting through AMPK-driven GLUT4 translocation instead. This has been confirmed in insulin receptor knockout cell models where MOTS-c retains activity. However, in physiologically normal cells, insulin signaling and MOTS-c/AMPK signaling converge on the same GLUT4 translocation machinery, making complete independence context-dependent." },
      { q: "What centenarian genetics data supports MOTS-c's longevity relevance?", a: "Studies of Japanese centenarians identified a specific missense variant in the 12S rRNA region encoding MOTS-c (m.1382A>C) at significantly higher frequency than in control populations. This variant alters MOTS-c amino acid sequence and is associated with reduced incidence of metabolic syndrome. This genetic epidemiology data provides human evidence consistent with the mechanistic finding that MOTS-c promotes metabolic health and potentially longevity, though formal causal evidence from human interventional trials is still emerging." },
    ],
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
    price: 84,
    size: "10mg",
    dosages: [
      { size: "10mg", price: 84 },
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
    badge: "NEW",
    researchApplications: [
      "Cardiolipin stabilization and mitochondrial cristae architecture",
      "Electron transport chain organization and ROS reduction research",
      "ATP synthesis efficiency in energy metabolism models",
      "Cytochrome c stabilization and anti-apoptotic pathways",
    ],
    mechanismOfAction: [
      "SS-31 (Elamipretide) is a tetrapeptide with the alternating aromatic-cationic structure D-Arg-Dmt-Lys-Phe-NH₂, where Dmt is 2',6'-dimethyltyrosine. This structural motif enables selective accumulation in the inner mitochondrial membrane (IMM) at ~1,000-fold higher concentration than the cytoplasm, driven by the IMM's highly negative membrane potential (ΔΨ ~−180 mV). Unlike other mitochondria-targeting compounds that require covalent triphenylphosphonium (TPP) attachment, SS-31 achieves IMM targeting through a purely electrostatic and aromatic stacking mechanism with cardiolipin.",
      "Cardiolipin is a unique phospholipid that comprises ~20% of the IMM and is found essentially nowhere else in the cell. It is critical for organizing cristae architecture (the folded inner membrane structure that houses the electron transport chain complexes) and for maintaining optimal electron transport chain (ETC) Complex I through IV supercomplex organization. SS-31 binds cardiolipin directly through its aromatic residues (Dmt, Phe) and positive charges (D-Arg, Lys), stabilizing the cardiolipin-cytochrome c interaction that positions cytochrome c as an electron carrier (rather than a pro-apoptotic peroxidase). This specific cytochrome c stabilization reduces ROS generation and improves ETC efficiency.",
      "The functional consequence of SS-31's cardiolipin stabilization is improved ETC supercomplex stability (especially respiratory supercomplexes containing Complex I), reduced electron leak to oxygen (reducing ROS production at the source), improved ATP synthase activity through better cristae architecture, and reduced mitochondrial permeability transition pore (mPTP) opening probability. In aged cells where cardiolipin content and acyl chain composition deteriorate, SS-31 effectively restores a younger mitochondrial functional state, explaining its efficacy in aging and chronic disease models.",
    ],
    whatToExpect: [
      { week: "Acute (minutes to hours)", description: "In isolated mitochondria assays: ROS production reduction measurable within minutes of SS-31 addition. State 3 respiration (ADP-stimulated) and respiratory control ratio (RCR) improvements detectable within 1 hour. Cytochrome c peroxidase activity reduction (anti-apoptotic indicator) measurable in cardiolipin-SS-31 interaction assays." },
      { week: "Days 1—7 (cardiac ischemia model)", description: "Cardiac ischemia-reperfusion studies with peri-ischemic SS-31 administration: reduced infarct size (measured by TTC staining) and improved post-ischemia ejection fraction in treated animals. Mitochondrial morphology (cristae density, morphometric analysis) shows preservation versus untreated ischemia group." },
      { week: "Month 2+", description: "Chronic heart failure models: sustained improvements in cardiac function parameters (EF, stroke volume) with continued treatment. Muscle function studies in aged animals: progressive improvements in grip strength and treadmill performance correlating with improved skeletal muscle mitochondrial energetics." },
    ],
    dosingRecommendations: "Cardiac ischemia-reperfusion preclinical studies: 3 mg/kg subcutaneous or intravenous, administered 15–30 minutes before ischemia induction. Chronic heart failure models: 3 mg/kg/day subcutaneous injection. Clinical trials (MMPOWER): 0.1 and 0.25 mg/kg IV infusion over 2 hours. In vitro isolated mitochondria assays: 10–500 nM. SS-31's short plasma half-life (~30 minutes) necessitates either IV infusion for continuous clinical coverage or high-frequency subcutaneous dosing in chronic animal models. For acute protection studies, timing relative to the injury event is critical.",
    faq: [
      { q: "What is cardiolipin and why is it the key SS-31 target?", a: "Cardiolipin (CL) is a dimeric phospholipid exclusive to the inner mitochondrial membrane, characterized by four acyl chains and two phosphate groups. It is structurally essential for cristae curvature (maintaining the narrow membrane folds that concentrate ETC complexes), for organizing respiratory chain supercomplex assembly (Complexes I+III₂+IV), and for anchoring cytochrome c to the IMM surface. Cardiolipin oxidation, remodeling defects, and reduced content are hallmarks of mitochondrial dysfunction in heart failure, neurodegeneration, and aging. SS-31's selective cardiolipin binding makes it a uniquely precise mitochondrial therapeutic tool." },
      { q: "How does SS-31 differ from other mitochondria-targeting compounds like MitoQ?", a: "MitoQ and similar compounds use a covalently attached triphenylphosphonium (TPP+) group to accumulate in mitochondria via membrane potential, but their primary mechanism is acting as antioxidants (coenzyme Q analogs scavenging free radicals). SS-31 does not carry an antioxidant moiety; instead, it reduces ROS production at the source by stabilizing ETC supercomplex organization and preventing electron leak — a mechanistically superior approach since it addresses the upstream cause of mitochondrial ROS rather than scavenging the downstream product." },
      { q: "What clinical trial programs have studied SS-31?", a: "SS-31 (Elamipretide, under development by Stealth BioTherapeutics) has been evaluated in Phase II/III clinical trials for: (1) Primary mitochondrial myopathy (MMPOWER-3, showing improved hand-grip strength and patient-reported outcomes); (2) Heart failure with preserved ejection fraction (HFpEF); (3) Barth syndrome (rare CL biosynthesis disorder); (4) Limb-girdle muscular dystrophy; and (5) Renal ischemia. Mixed Phase III results led to company restructuring, but SS-31 remains an important research tool in mitochondrial biology." },
      { q: "Why is the D-arginine configuration important in SS-31's structure?", a: "The D-configuration of the arginine at position 1 (D-Arg rather than L-Arg) improves SS-31's resistance to proteolytic degradation by aminopeptidases, extending its stability in biological systems. L-amino acids are the natural substrate for aminopeptidases and carboxypeptidases; D-amino acid substitutions create steric obstacles to these enzymes. The D-Arg also contributes the appropriate charge and geometry to interact with cardiolipin phosphate groups. The Dmt (2',6'-dimethyltyrosine) residue similarly provides both enhanced aromatic-pi interactions with cardiolipin and improved proteolytic resistance through its bulky methyl substituents." },
    ],
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
    price: 62,
    size: "5mg",
    dosages: [
      { size: "5mg", price: 62 },
      { size: "10mg", price: 88 },
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
    researchApplications: [
      "GHRH analog with improved DPP-4 resistance for visceral fat research",
      "Pulsatile GH secretion and IGF-1 modulation in body composition studies",
      "Visceral adipose tissue reduction mechanisms in metabolic models",
      "NAFLD and hepatic fat content research applications",
    ],
    mechanismOfAction: [
      "Tesamorelin (TH9507) is GHRH(1-44) with a trans-3-hexenoic acid (t3e) modification at the N-terminus, covalently attached to the alpha-amino group of Tyr-1. This N-terminal modification blocks DPP-4's preferential cleavage site at the Tyr-Ala dipeptide of native GHRH, extending plasma half-life from ~7 minutes to approximately 26 minutes — a substantial improvement, though still shorter than CJC-1295 DAC's 6–8 days. Tesamorelin retains full-length GHRH(1-44) binding to GHRHR, providing a more physiologically complete receptor activation than truncated GHRH(1-29) analogs.",
      "Tesamorelin activates GHRHR on pituitary somatotrophs, stimulating cAMP-PKA signaling and GH secretion. The resulting GH elevation drives hepatic IGF-1 production. A key metabolic distinction is that Tesamorelin's GH/IGF-1 elevation produces preferential mobilization of visceral adipose tissue (VAT) rather than subcutaneous fat depots. This visceral selectivity is proposed to result from higher GH receptor density and lipolytic responsiveness in omental/mesenteric fat compared to subcutaneous depots, combined with IGF-1's inhibition of the VAT-promoting effects of cortisol.",
      "FDA approval for HIV-associated lipodystrophy validated Tesamorelin's visceral fat-reducing mechanism in a clinical context where VAT accumulation has direct cardiovascular risk implications. The continuing research interest in Tesamorelin extends to non-alcoholic fatty liver disease (NAFLD) — where hepatic fat content and VAT are correlated pathophysiologically — and to mild cognitive impairment (MCI), where a 2019 RCT documented improvements in executive function possibly related to IGF-1's cerebrovascular and neuroprotective effects.",
    ],
    whatToExpect: [
      { week: "Weeks 1–4", description: "GH and IGF-1 elevation measurable within the first week of daily dosing. Early trunk fat reduction trends detectable by DEXA scan in longer-running protocols. Lipid panel improvements (LDL, triglycerides) beginning to emerge." },
      { week: "Weeks 4–16", description: "Phase III LIPO trial data: significant VAT reduction measurable by CT scan at 26 weeks. Waist circumference declining in treated subjects versus placebo. IGF-1 elevated to young-adult reference range in most subjects." },
      { week: "Month 6+", description: "LIPO trial primary endpoint: mean VAT reduction of ~15-18% versus placebo by week 26. NAFLD research studies show hepatic fat content reductions by MRI-PDFF. MCI cognitive research shows executive function improvements correlating with IGF-1 elevation trajectory." },
    ],
    dosingRecommendations: "FDA-approved HIV lipodystrophy dosing: 2 mg subcutaneous injection once daily, administered in the abdomen. Research protocols in non-HIV populations: 1–2 mg/day subcutaneous. Preclinical rodent studies: 100–300 μg/kg subcutaneous injection. NAFLD research: 2 mg/day per the protocol used in the 2022 NASH study showing liver fat reduction. Reconstitute to 1 mg/mL working concentration; use within 3 days at refrigerated temperature. Important: do not freeze reconstituted Tesamorelin.",
    faq: [
      { q: "Why does Tesamorelin selectively reduce visceral fat rather than subcutaneous fat?", a: "Visceral adipocytes have significantly higher GH receptor density and beta-adrenergic receptor expression than subcutaneous adipocytes, making them more responsive to lipolytic stimulation by elevated GH/IGF-1. Additionally, visceral fat has higher cortisol metabolism activity (11β-HSD1 expression) that normally promotes VAT accumulation; elevated IGF-1 inhibits 11β-HSD1 activity, reducing the cortisol drive of VAT expansion. Subcutaneous fat depots lack the same receptor density and are less hormonally responsive, explaining the preferential visceral selectivity observed in LIPO trial body composition data." },
      { q: "What makes Tesamorelin FDA-approved while other GHRH analogs are not?", a: "Tesamorelin's FDA approval (Egrifta, 2010) required demonstration of efficacy in a defined clinical population (HIV lipodystrophy) with an objective, measurable endpoint (VAT reduction by CT) and an acceptable safety profile in placebo-controlled trials. The HIV lipodystrophy indication represented an unmet medical need where existing treatments were inadequate, facilitating regulatory approval for this specific context. Other GHRH analogs (Sermorelin, CJC-1295) have not pursued this regulatory pathway for comparable metabolic indications." },
      { q: "What does the trans-3-hexenoic acid modification do structurally?", a: "Trans-3-hexenoic acid (a 6-carbon alkenyl fatty acid) is covalently attached to the N-terminal alpha-amino group of Tyr-1 in Tesamorelin. This modification sterically blocks DPP-4's active site from cleaving the Tyr-Ala dipeptide at positions 1-2, which is the primary degradation pathway for native GHRH. The modification preserves full receptor-binding potency because the N-terminal region is not part of the receptor contact interface; GHRHR binding is mediated by residues further down the peptide sequence." },
      { q: "Is there cognitive research data supporting Tesamorelin?", a: "Yes — a randomized controlled trial by Falutz et al. and a subsequent RCT by Baker et al. (2019, 2022) examined Tesamorelin in adults with mild cognitive impairment (MCI) or metabolic syndrome. The 2019 Baker trial (n=152) documented significantly improved executive function scores and reduced amyloid deposition (by PiB-PET) in the Tesamorelin arm versus placebo over 20 months. The proposed mechanism is GH/IGF-1-mediated improvements in cerebrovascular function and potential direct neuroprotective effects of IGF-1 in hippocampal and prefrontal cortex." },
    ],
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
    price: 42,
    size: "5mg",
    dosages: [
      { size: "5mg", price: 42 },
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
    researchApplications: [
      "Short-acting GHRH analog for controlled pulsatile GH studies",
      "DPP-4 resistant GHRH(1-29) without albumin binding",
      "Synergistic GH secretion protocols with GHS compounds",
      "Discrete GH pulse modeling in somatotropic axis research",
    ],
    mechanismOfAction: [
      "CJC-1295 No DAC (also known as Modified GRF 1-29 or Mod GRF) is the tetrasubstituted GHRH(1-29) analog without the albumin-binding Drug Affinity Complex modification. The four amino acid substitutions shared with CJC-1295 DAC (Ala² replaces Ser², Gln⁸ replaces Asn⁸, Ala¹⁵ replaces Gly¹⁵, Leu²⁷ replaces Met²⁷) confer resistance to DPP-4 cleavage at the Tyr-Ala bond and aminopeptidase degradation at the Ala² position, extending the half-life from native GHRH's ~7 minutes to ~30 minutes. This extended but still short half-life enables the compound to produce a single discrete GH pulse per injection.",
      "The GHRHR activation mechanism is identical to other GHRH analogs: Gαs-cAMP-PKA signaling drives GH gene transcription and secretion in anterior pituitary somatotrophs. Because the compound lacks albumin binding, it does not accumulate to produce sustained GHRHR occupancy. Each injection produces a pulsatile GH response that mimics the physiological architecture of endogenous GHRH/GH pulsatility more closely than the sustained elevation produced by CJC-1295 with DAC. This physiological pulse-mimicking property is valuable for research questions about GH pulse dynamics, pituitary function, and receptor desensitization.",
      "CJC-1295 No DAC is predominantly used in combination with Ipamorelin in research protocols, providing the GHRHR stimulation component of the dual somatotropic axis approach. Because both compounds have comparable short half-lives (~30 minutes for CJC-1295 No DAC, ~2 hours for Ipamorelin), they can be co-administered to produce a synchronized, synergistic GH pulse that is titratable through dosing frequency. This co-administration strategy is distinct from the CJC-1295 DAC/Ipamorelin combination, where the long-acting DAC component provides a sustained baseline that the Ipamorelin doses are layered upon.",
    ],
    whatToExpect: [
      { week: "Acute (30–90 min post-dose)", description: "GH pulse detectable within 30–90 minutes of injection in preclinical and clinical models. IGF-1 will modestly rise with repeated daily dosing, but without the sustained baseline elevation seen with CJC-1295 DAC. Each injection produces a discrete, time-limited GH elevation." },
      { week: "Weeks 2–4", description: "With daily dosing protocols, modest mean IGF-1 elevation above baseline. Body composition research effects are more gradual than with DAC formulations due to lower total GH/IGF-1 area-under-curve per dosing interval." },
      { week: "Month 2+", description: "Continued daily protocol maintains pulsatile GH pattern. Advantages over DAC formulations for longer protocols: more direct control over daily GH pulsing pattern, easier dose titration, and no prolonged GH/IGF-1 elevation on dosing days with missed injections." },
    ],
    dosingRecommendations: "Standard preclinical and research protocols: 100–200 μg subcutaneous injection per administration, 1–3 times daily depending on research design. When combined with Ipamorelin: concurrent administration to capitalize on synergistic GH output at each dosing event. Preclinical rodent studies: 10–100 μg/kg per injection. The short half-life necessitates more frequent dosing than CJC-1295 DAC; this is its primary practical difference for researchers designing protocols.",
    faq: [
      { q: "When should I choose CJC-1295 No DAC over CJC-1295 with DAC?", a: "Choose No DAC when research design requires: (1) precise control over individual GH pulses without sustained background elevation; (2) more granular titration of daily GH output by adjusting injection frequency; (3) protocols where missing a dose should not produce days of continued GH/IGF-1 elevation; or (4) comparative studies examining pulsatile versus sustained GH secretion profiles. Choose CJC-1295 with DAC when once-weekly dosing convenience is desired and sustained IGF-1 elevation is the research goal." },
      { q: "Why is CJC-1295 No DAC also called 'Mod GRF 1-29'?", a: "'Modified GRF 1-29' (Growth Releasing Factor, amino acids 1-29) is the systematic name reflecting that it is the N-terminal 29-amino acid fragment of GHRH with the four-substitution modification pattern. The 'CJC-1295 No DAC' name reflects its structural relationship to CJC-1295 DAC, making clear that it is the same peptide backbone without the albumin-binding DAC modification. Both names are used interchangeably in research literature and the peptide supply industry." },
      { q: "Does CJC-1295 No DAC cause somatostatin counter-regulation?", a: "Each GH pulse triggered by CJC-1295 No DAC does invoke a somatostatin counter-response, which is why GH levels return to baseline within 2–3 hours per injection. This is physiologically normal and means each subsequent injection into a fresh somatostatin-recovered state can produce a full GH pulse. The counter-regulatory somatostatin elevation is self-limiting and does not carry over to suppress subsequent GH pulses, particularly when Ipamorelin is co-administered — since GHS-R1a agonism blunts somatostatin release." },
    ],
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
    price: 66,
    size: "10mg",
    dosages: [
      { size: "10mg", price: 66 },
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
    researchApplications: [
      "Sleep architecture modulation and delta-wave EEG research",
      "Neuroendocrine regulation through hypothalamic-pituitary axis effects",
      "Stress adaptation and cortisol normalization in preclinical models",
      "GH and LH pulsatile release dynamics in circadian research",
    ],
    mechanismOfAction: [
      "DSIP (Delta Sleep-Inducing Peptide) is a nonapeptide (Trp-Ala-Gly-Gly-Asp-Ala-Ser-Gly-Glu) that was isolated from the cerebral venous blood of rabbits in a specific slow-wave sleep state, suggesting it may be an endogenous sleep-regulating signal. DSIP crosses the blood-brain barrier via a saturable transport mechanism and distributes to hypothalamic, thalamic, and limbic brain regions where it modulates multiple neuroendocrine circuits. Its primary characterized CNS effect is modulation of EEG delta wave amplitude, promoting the slow oscillations characteristic of deep, restorative sleep stages.",
      "DSIP regulates GH pulsatile secretion through hypothalamic effects that remain partially characterized. It appears to reduce somatostatin tone while preserving GHRH-driven GH pulse amplitude, effectively disinhibiting GH release during sleep. LH pulsatile release is similarly modulated, with DSIP synchronizing the gonadotropin pulsatility patterns that are tightly coupled to sleep architecture in humans. Cortisol normalization in stress models appears to involve DSIP's inhibitory effects on ACTH secretion from the anterior pituitary, reducing HPA axis reactivity under chronic stress conditions.",
      "DSIP's receptor mechanism has not been fully characterized at the molecular level — no specific high-affinity receptor has been definitively cloned. The current understanding suggests DSIP may act through opiate peptide pathways (inhibiting enkephalinase and modulating mu/kappa receptor activity), serotonergic circuits (5-HT2A/2C modulation), and possibly direct receptor interactions in the hypothalamus. This incompletely characterized receptor pharmacology represents both a limitation and an ongoing research opportunity for DSIP as a CNS research tool.",
    ],
    whatToExpect: [
      { week: "Acute (30–60 min post-IV)", description: "EEG delta power increase measurable within 30–60 minutes of intravenous administration in rodent sleep studies. GH pulse amplitude augmentation in peri-sleep GH sampling protocols. Cortisol suppression in ACTH-stimulated rodent models." },
      { week: "Days 1—7", description: "Repeated dosing in stress models shows progressive cortisol normalization and restored diurnal HPA axis patterning. Sleep architecture studies with polysomnography show consistent delta-wave promotion. GH/LH pulsatility patterns synchronizing with improved sleep architecture." },
      { week: "Weeks 2+", description: "Stress adaptation research: DSIP-treated animals show reduced stress-response magnitude and faster HPA axis recovery after acute stressors. Opiate withdrawal research models show attenuated withdrawal signs. Chronic sleep architecture studies demonstrate sustained delta-wave enhancement without tolerance development." },
    ],
    dosingRecommendations: "Animal sleep EEG research: 30 nmol/kg intravenous injection, administered 1–2 hours before sleep window. Human pharmacology studies (published): 25–50 μg/kg IV infusion over 20 minutes. Subcutaneous rodent stress models: 100–500 μg/kg once daily. In vitro opiate receptor binding and enkephalinase inhibition assays: 1–100 μM. The IV route has historically been the primary administration route in sleep research due to more predictable CNS delivery, though subcutaneous administration has been used in chronic stress studies.",
    faq: [
      { q: "Was DSIP proven to work in all sleep research studies?", a: "No — DSIP's sleep-inducing effects have shown variability across different animal species and experimental conditions. Some research groups replicated the original delta-wave promoting activity; others found inconsistent or context-dependent results. The variability may relate to baseline sleep state, species differences, route of administration, and circadian timing of administration. DSIP remains an interesting research tool for studying neuroendocrine-sleep circuit interactions, but the primary sleep-induction findings should be interpreted within the context of this reproducibility literature." },
      { q: "What is DSIP's role in opiate withdrawal research?", a: "Several published studies examined DSIP in opiate withdrawal management with the rationale that DSIP modulates endogenous opioid system activity (through enkephalinase inhibition and possible direct opioid receptor interactions). Some human studies reported reduced withdrawal symptom severity with DSIP administration. The results have not been consistently replicated, and the mechanism remains speculative. It remains a niche research area distinct from DSIP's more established sleep and HPA axis research applications." },
      { q: "How does DSIP cross the blood-brain barrier?", a: "DSIP crosses the BBB through a saturable carrier-mediated transport mechanism rather than passive diffusion. This suggests a specific transport protein recognizes the DSIP structure. The Trp residue at position 1 may contribute to transport recognition, as tryptophan has known BBB transport mechanisms (large neutral amino acid transporter). This carrier-mediated transport produces a non-linear dose-response for CNS delivery and may explain some variability in research outcomes when doses are varied." },
      { q: "What advantages does DSIP offer for HPA axis research?", a: "DSIP's proposed cortisol-normalizing mechanism — reducing chronic HPA axis hyperactivity without shutting down the stress response entirely — makes it a potentially useful tool for studying chronic stress adaptation, allostatic load models, and sleep-HPA axis interactions. Unlike glucocorticoids or CRF antagonists that directly suppress HPA output, DSIP's mechanism appears to work through neuromodulatory fine-tuning, making it relevant for studying the regulatory architecture of stress response systems." },
    ],
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
    price: 50,
    size: "5mg",
    dosages: [
      { size: "5mg", price: 50 },
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
    researchApplications: [
      "GPR54 receptor activation and GnRH pulse generation research",
      "Reproductive axis regulation through hypothalamic kisspeptin neurons",
      "Gonadotropin (LH/FSH) pulsatile secretion mechanisms",
      "Sex steroid feedback integration in reproductive physiology",
    ],
    mechanismOfAction: [
      "Kisspeptin-10 is the C-terminal decapeptide (Tyr-Asn-Trp-Asn-Ser-Phe-Gly-Leu-Arg-Phe-amide) of the full-length kisspeptin-54 protein, retaining full GPR54 receptor agonist activity. GPR54 (Kiss1R) is a Gαq/11-coupled GPCR expressed on GnRH neurons in the hypothalamus. Kisspeptin binding to GPR54 activates PLCβ-IP3-calcium signaling, triggering pulsatile GnRH vesicle exocytosis from the hypothalamic neuronal terminals in the median eminence. These GnRH pulses travel to the anterior pituitary portal circulation, driving pulsatile LH and FSH secretion.",
      "The kisspeptin system is the principal upstream integrator of neuroendocrine control of reproduction. Two primary populations of kisspeptin neurons are recognized: (1) KNDy neurons (kisspeptin/neurokinin B/dynorphin co-expressing) in the arcuate nucleus, which generate the pulsatile GnRH rhythm through autocrine/paracrine NKB-kisspeptin-dynorphin signaling; and (2) preoptic area (POA) kisspeptin neurons, which mediate the estrogen-positive feedback LH surge in females. Defects in GPR54 signaling cause hypogonadotropic hypogonadism in both sexes, establishing the kisspeptin/GPR54 pathway as necessary for functional reproduction.",
      "Beyond reproductive function, kisspeptin signaling has been linked to sexual motivation and reward circuits in the CNS, with GPR54 expression documented in limbic structures (amygdala, hippocampus). In male research subjects, exogenous kisspeptin administration produces not only LH/testosterone elevation but also activates amygdala brain regions associated with sexual arousal in fMRI studies — suggesting kisspeptin's role extends from pure gonadotropin regulation to broader aspects of reproductive behavior.",
    ],
    whatToExpect: [
      { week: "Acute (15–60 min post-administration)", description: "LH surge measurable within 15–60 minutes of kisspeptin IV injection in human pharmacology studies. Testosterone begins rising within 2–4 hours following the LH pulse. In vitro GPR54 assays: calcium flux and cAMP activation within minutes of peptide addition." },
      { week: "Days 1—7 (research protocol)", description: "Repeated pulsatile administration protocols: sustained LH/FSH elevations and downstream gonadal steroid increases measurable over the protocol duration. Hypogonadotropic hypogonadism models: GnRH pulsatility restoration markers improving." },
      { week: "Weeks 2+", description: "Reproductive axis restoration protocols: testicular/ovarian function markers (spermatogenesis, folliculogenesis) responding to sustained gonadotropin stimulation. Hypothalamic amenorrhea research: LH pulsatility parameters normalizing with repeated kisspeptin dosing in preclinical models." },
    ],
    dosingRecommendations: "Human IV pharmacology: 0.1–10 nmol/kg bolus injection; produces dose-dependent LH surge within 15–60 minutes. Subcutaneous research: 1–6.4 nmol/kg. Rodent reproductive research: 10–100 nmol intracerebroventricular or intravenous. In vitro GPR54 receptor studies: EC50 approximately 1–10 nM in calcium flux and IP3 accumulation assays. Kisspeptin-10 has a short plasma half-life (~4 minutes for IV administration in humans) due to rapid neprilysin and aminopeptidase degradation, necessitating either IV infusion for sustained effect or high-frequency subcutaneous dosing.",
    faq: [
      { q: "Why was the kisspeptin system only discovered relatively recently?", a: "GPR54 was identified as an orphan receptor in 1999 by Lee et al., and its endogenous ligand (kisspeptin, then called metastin) was identified in 2001 as a product of the KiSS-1 gene. The reproductive phenotype of GPR54 knockout mice and the discovery of loss-of-function mutations in human hypogonadotropic hypogonadism patients rapidly established kisspeptin/GPR54 as essential for reproduction. Prior to these findings, the GnRH pulse generator's upstream regulation had been a major gap in reproductive neuroendocrinology." },
      { q: "What is the difference between Kisspeptin-10, Kisspeptin-13, and Kisspeptin-54?", a: "All are C-terminal fragments (or the full-length form) of the KiSS-1 gene product, sharing the identical C-terminal GPR54 binding sequence. Kisspeptin-10 (10 aa), Kisspeptin-13 (13 aa), and Kisspeptin-54 (54 aa, full-length) all activate GPR54 with similar potency. The larger forms have slightly longer half-lives due to greater resistance to N-terminal cleavage, but the receptor pharmacology is equivalent. Kisspeptin-10 is the most commonly used research form due to its ease of synthesis and well-characterized pharmacological profile." },
      { q: "Can kisspeptin be used in research models of hypothalamic amenorrhea?", a: "Yes — hypothalamic amenorrhea (HA) is characterized by suppressed GnRH pulsatility, reduced LH pulses, and anovulation, often in the context of energy deficiency (low leptin) or stress. Kisspeptin administration in HA rodent models restores GnRH pulsatility and LH pulses, demonstrating that the downstream GnRH/pituitary system remains functionally responsive. Clinical pilot studies have shown kisspeptin IV infusion can restore LH pulsatility in women with HA, establishing the kisspeptin deficit as a mechanistic link rather than pituitary failure." },
      { q: "What research connects kisspeptin to metabolism and energy sensing?", a: "Leptin receptors are expressed on kisspeptin neurons, and leptin promotes kisspeptin expression. In states of energy deficiency (fasting, caloric restriction, anorexia), leptin falls, kisspeptin expression decreases, GnRH pulsatility is suppressed, and reproductive function is impaired. This leptin-kisspeptin axis explains the well-known suppression of reproduction in energy-deficient states and represents an important mechanism linking metabolic status to fertility. Research into this axis is relevant for understanding infertility associated with metabolic disorders." },
    ],
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
    price: 42,
    size: "5mg",
    dosages: [
      { size: "5mg", price: 42 },
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
    researchApplications: [
      "Social cognition and trust pathways in CNS research models",
      "OXTR receptor signaling in social neuroscience studies",
      "Fear extinction and amygdala reactivity modulation",
      "HPA axis stress response and autonomic nervous system research",
    ],
    mechanismOfAction: [
      "Oxytocin is synthesized as a larger precursor protein (preprooxytocin) in hypothalamic paraventricular (PVN) and supraoptic (SON) nuclei, from which it is transported in secretory granules along axons to the posterior pituitary for systemic release, and to multiple brain regions via dendritic release for local CNS action. The oxytocin receptor (OXTR) is a Gαq/11-coupled GPCR expressed in uterine smooth muscle, mammary myoepithelium, and widely distributed CNS structures (amygdala, hippocampus, nucleus accumbens, septum, hypothalamus, brainstem). Gαq activation triggers PLCβ-IP3-calcium signaling, with downstream effects highly dependent on the cell type and circuit context.",
      "In the CNS, OXTR signaling in the basolateral amygdala (BLA) reduces threat-reactive activity, dampening fear responses and modulating threat memory consolidation. This mechanism underlies oxytocin's consistent finding of reduced amygdala BOLD activation in response to threatening faces in human fMRI studies. In the nucleus accumbens, oxytocin-dopamine co-activation mediates pair-bonding and social reward processing, explaining its role in affiliative behavior research. In the prefrontal cortex, OXTR activation reduces social anxiety and promotes trust-extending behavior in economic game paradigms.",
      "Peripheral OXTR signaling coordinates uterine contractility during labor (the classic obstetric application), milk ejection during lactation, and gastrointestinal motility through enteric nervous system receptors. The cardiovascular system expresses OXTRs in cardiac myocytes and vascular endothelium, where oxytocin exerts cardioprotective effects in ischemia models via NO production and anti-inflammatory NF-κB modulation. Intranasal administration routes the peptide to the brain via olfactory/trigeminal nerve pathways, achieving CNS delivery that bypasses the BBB restriction on peripheral oxytocin.",
    ],
    whatToExpect: [
      { week: "Acute (30–45 min post-intranasal)", description: "Human fMRI studies: amygdala BOLD signal reduction to threatening stimuli detectable 45–60 minutes after 24 IU intranasal administration. Trust-enhancing effects measurable in behavioral economic paradigms within the same timeframe. Social anxiety measures improve in treated versus placebo subjects." },
      { week: "Days 1—7", description: "Repeated dosing in rodent social behavior models: measurable changes in partner preference, affiliative behavior frequency, and stress-induced corticosterone patterns. Fear extinction models show accelerated extinction with oxytocin compared to extinction alone." },
      { week: "Weeks 2+", description: "Autism spectrum disorder research protocols: some published studies document improved social orienting and reduced repetitive behavior in treatment groups versus placebo. PTSD extinction research: oxytocin augmentation of exposure therapy shows durable fear reduction versus exposure alone in preclinical models." },
    ],
    dosingRecommendations: "Human intranasal research: 24–40 IU per administration (using standardized nasal spray delivering ~4 IU/spray). Administration 45–60 minutes before behavioral testing for peak CNS effect. IV pharmacology: 0.5–10 mU/min infusion for sustained peripheral receptor studies. Rodent behavioral research: 0.1–1 mg/kg subcutaneous injection; ICV microinjection 1–5 μg/animal for central-specific effects. Intranasal for rodents: 5–50 μg in 5–10 μL volume. Note: International Units (IU) are used for oxytocin dosing; 1 mg contains approximately 400 IU based on historical bioassay calibration.",
    faq: [
      { q: "Is intranasal oxytocin truly reaching the brain?", a: "This has been an active area of scientific debate. Direct evidence for intranasal-to-brain delivery includes: (1) CSF oxytocin elevation following intranasal but not IV administration in some studies; (2) fMRI amygdala effects that parallel direct CNS microinjection effects; (3) radioisotope studies in animals documenting olfactory bulb and cortex distribution after nasal delivery. The trigeminal and olfactory nerve pathways (including the perivascular perineural route) are proposed mechanisms. Counterarguments include failed replications in some CSF studies. The current consensus supports functional CNS delivery, though the dose-to-CSF concentration relationship varies by individual." },
      { q: "What has oxytocin research shown in autism spectrum disorder?", a: "Published RCTs of intranasal oxytocin in ASD have yielded mixed results. Initial small trials showed improvements in social cognition, eye contact, and emotion recognition. Larger confirmatory RCTs have failed to replicate the magnitude of effect seen in preliminary studies. The most recent meta-analyses suggest modest effects on specific social cognition measures but no consistent improvement across the full range of ASD social symptoms. The research has improved understanding of the oxytocin system's role in social neuroscience even where clinical translation has been difficult." },
      { q: "How does oxytocin modulate fear and PTSD-relevant circuits?", a: "Oxytocin reduces basolateral amygdala reactivity to threat cues (reducing the initial fear acquisition/expression) and facilitates prefrontal extinction memory consolidation by strengthening the vmPFC-amygdala inhibitory connection. In PTSD models, this dual mechanism — blunting threat reactivity while strengthening extinction learning — makes oxytocin a logical adjunct to exposure-based therapies. Preclinical rodent fear conditioning studies consistently show faster extinction and better extinction retention with oxytocin versus extinction training alone." },
      { q: "What are the gastrointestinal research applications for oxytocin?", a: "OXTRs are expressed throughout the enteric nervous system and GI smooth muscle. Oxytocin modulates GI motility (reducing colonic contractility in stress conditions), promotes intestinal barrier function, and has anti-inflammatory effects in experimental colitis models (reducing TNF-α, IL-6 in inflamed mucosa via OXTR-NO signaling). Some IBS research has examined oxytocin's role in visceral pain modulation. These peripheral GI applications are distinct from the CNS social neuroscience applications and represent an underexplored research area." },
    ],
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
    price: 58,
    size: "10mg",
    dosages: [
      { size: "10mg", price: 58 },
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
    researchApplications: [
      "Alpha-MSH fragment anti-inflammatory mechanisms via MC1R/MC3R",
      "NF-κB suppression and cytokine modulation in inflammatory models",
      "Intestinal epithelial barrier function and permeability research",
      "IBD and colitis research in preclinical gastrointestinal studies",
    ],
    mechanismOfAction: [
      "KPV (Lys-Pro-Val) is the C-terminal tripeptide of alpha-melanocyte-stimulating hormone (α-MSH), which retains the full anti-inflammatory and antipyretic activity of the parent peptide despite comprising only 3 of the 13 α-MSH amino acids. This discovery by Catania and colleagues established that the α-MSH C-terminus (not the N-terminal melanocortin receptor-binding region) mediates the anti-inflammatory function. KPV activates MC1R and MC3R at lower potency than full-length α-MSH, triggering cAMP-dependent suppression of NF-κB nuclear translocation — the central transcription factor controlling expression of TNF-α, IL-1β, IL-6, and other pro-inflammatory mediators.",
      "In intestinal epithelial cells, KPV directly inhibits cytokine-driven NF-κB activation through both MC1R/MC3R-dependent and receptor-independent mechanisms (the latter possibly involving direct intracellular NF-κB pathway inhibition due to KPV's high permeability). The tripeptide's small size enables transcytosis through intestinal epithelium, allowing orally administered KPV to reach lamina propria immune cells. KPV also reduces intestinal epithelial permeability by maintaining tight junction protein expression (occludin, ZO-1) under inflammatory conditions, addressing a key pathophysiological feature of IBD where barrier dysfunction drives ongoing immune activation.",
      "KPV additionally modulates MAPK signaling pathways — specifically inhibiting ERK1/2 and p38 MAPK phosphorylation induced by pro-inflammatory cytokines in intestinal cells. These kinase pathways regulate multiple downstream inflammatory gene transcription programs. Unlike corticosteroids, which achieve broad anti-inflammatory effects through glucocorticoid receptor-mediated global transcription suppression, KPV's mechanism is more targeted to the NF-κB and MAPK nodes specifically activated in mucosal inflammation, potentially preserving immune competence for pathogen responses while reducing pathological inflammation.",
    ],
    whatToExpect: [
      { week: "Days 1—7", description: "In vitro intestinal epithelial (Caco-2, HT-29) assays: NF-κB activity reduction measurable within 2–4 hours of KPV addition. Barrier permeability assays show TEER (transepithelial electrical resistance) preservation under inflammatory challenge. In vivo DSS colitis models: DAI (disease activity index) scores begin diverging from untreated controls." },
      { week: "Weeks 2–4", description: "DSS and TNBS rodent colitis models: progressive colon weight reduction, reduced MPO (myeloperoxidase) activity in colonic tissue, and improved histological scores (reduced crypt damage, inflammatory infiltrate). Systemic inflammatory markers (serum IL-6, CRP) declining toward normal range in treated animals." },
      { week: "Month 2+", description: "Extended colitis research models show maintained remission with continued KPV dosing. Oral nanoparticle KPV delivery studies document colon-targeted accumulation with superior efficacy versus equivalent free KPV doses. Wound healing models in parallel show accelerated closure and reduced pro-inflammatory cytokine profile in wound tissue." },
    ],
    dosingRecommendations: "Preclinical colitis models (oral): 0.05–0.5 mg/kg daily in drinking water or by gavage. Subcutaneous injection protocols: 10–100 μg/day. Topical wound healing: 0.1–1 mg/mL in aqueous vehicle applied once or twice daily. In vitro intestinal epithelial assays: 0.1–100 μM in culture medium. KPV is highly water-soluble and stable in solution, facilitating any formulation route. For oral GI research, colon-targeting nanoparticle encapsulation improves drug delivery to the site of inflammation compared to free peptide oral administration.",
    faq: [
      { q: "How can a 3-amino acid peptide retain the anti-inflammatory potency of full-length α-MSH?", a: "The anti-inflammatory activity of α-MSH maps specifically to its C-terminal region, not the N-terminal domain responsible for melanocortin receptor binding and pigmentation. Research by Catania et al. through systematic fragment studies demonstrated that the C-terminus KPV sequence is both necessary and sufficient for the full anti-inflammatory and antipyretic activity of the parent peptide. This represents a separation of function within the α-MSH molecule — two distinct biological activities residing in different structural regions." },
      { q: "Can KPV be administered orally for gut research?", a: "Yes — KPV's small size and high water solubility make it suitable for oral administration in GI research. Free KPV can be degraded in the upper GI tract before reaching the colon, limiting efficacy for lower GI inflammation. Published research has addressed this by encapsulating KPV in colon-targeted nanoparticle formulations (Hyaluronic acid-based, PLGA-based) that protect the peptide in transit and release it specifically at the site of colonic inflammation. These delivery systems have shown superior efficacy to equivalent free KPV in DSS colitis models." },
      { q: "How does KPV's mechanism differ from mesalazine (5-ASA) for colitis research?", a: "Mesalazine (5-aminosalicylic acid) inhibits prostaglandin synthesis (COX inhibition) and NF-κB activation through direct chemical reactivity, but requires high luminal concentrations. KPV works through MC1R/MC3R receptor activation and intracellular NF-κB inhibition at much lower molar concentrations than 5-ASA, and additionally preserves epithelial barrier function — a mechanism not addressed by 5-ASA. KPV's distinct mechanism makes it a useful research comparator for understanding different anti-inflammatory pathways in IBD models." },
      { q: "Does KPV have any MSH-related pigmentation or hormonal effects?", a: "KPV has negligible MC1R agonist potency for melanogenesis compared to full-length α-MSH. The melanocortin receptor activation threshold for pigmentation is substantially higher than for anti-inflammatory effects, and KPV's low receptor potency (compared to full α-MSH) falls below the melanogenesis threshold while remaining sufficient for NF-κB suppression. Similarly, KPV does not meaningfully activate MC2R (ACTH receptor) or other melanocortin receptor subtypes at anti-inflammatory concentrations, producing no detectable hormonal or steroidogenic effects." },
    ],
  },
  {
    slug: "wolverine-blend",
    name: "Wolverine Stack",
    casNumber: "Blend: 137525-51-0 / 77591-33-4",
    formula: "Blend: BPC-157 10mg + TB-500 10mg",
    molecularWeight: "Blend",
    purity: "≥99.0%",
    category: "Recovery & Healing",
    price: 78,
    size: "5/5mg blend",
    dosages: [
      { size: "5/5mg blend", price: 78 },
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
    researchApplications: [
      "Dual-phase tissue repair: angiogenesis (BPC-157) + remodeling (TB-500)",
      "Combined VEGF upregulation and actin sequestration mechanisms",
      "Synergistic tendon, ligament, and muscle repair in injury models",
      "Accelerated wound healing through complementary pathways",
    ],
    mechanismOfAction: [
      "The Wolverine Stack pairs two compounds with mechanistically complementary but non-overlapping tissue repair mechanisms. BPC-157 acts as a potent signaling peptide: it upregulates VEGF expression for neovascularization, activates GH-R for cellular proliferation signaling, modulates the nitric oxide system for local vasodilation, and stabilizes the Akt/mTOR survival pathway in injured tissue. TB-500 acts through a structural/stoichiometric mechanism: it sequesters G-actin via its LKKTETQ domain, driving the leading-edge cell migration required for wound closure, while activating MMPs for extracellular matrix remodeling.",
      "The rationale for combining these compounds is that tissue repair proceeds in overlapping phases — inflammatory resolution, vascular formation, cell migration, and extracellular matrix remodeling — with each phase requiring distinct molecular machinery. BPC-157's VEGF and nitric oxide effects address the vascular formation phase; TB-500's actin sequestration and MMP activation address the cell migration and matrix remodeling phases. Simultaneous provision of both mechanisms is hypothesized to reduce the time between phases and prevent the bottlenecks that can delay healing when one mechanism is rate-limiting.",
      "Both compounds additionally exert anti-inflammatory effects: BPC-157 reduces TNF-α and IL-6 through multiple pathways including NF-κB modulation; TB-500 reduces inflammatory cytokines through Wnt/β-catenin pathway modulation. This overlapping anti-inflammatory coverage provides dual-pathway suppression of inflammation-driven tissue damage during the repair window. Preclinical studies examining the combination in injury models have generally found additive or synergistic effects rather than antagonism, consistent with the mechanistic non-overlap.",
    ],
    whatToExpect: [
      { week: "Days 1—7", description: "BPC-157 component: anti-inflammatory activity and early VEGF-driven angiogenic signaling. TB-500 component: enhanced cell migration velocity in wound models. Combined: earlier granulation tissue formation detectable histologically versus either compound alone." },
      { week: "Weeks 2–4", description: "Progressive vascularization (BPC-157) combined with organized matrix remodeling (TB-500). Tensile strength measurements of healing tissue show improvement versus either single compound. Collagen fiber organization improving toward normal tissue architecture." },
      { week: "Month 2+", description: "Full repair endpoint assessments: tendon/ligament tensile strength approaching uninjured tissue norms in repair models. Reduced scar tissue and improved histological quality versus untreated controls and single-compound arms. The combination is expected to show the most pronounced benefits for complex, multi-phase injuries." },
    ],
    dosingRecommendations: "Both compounds administered as separate subcutaneous injections. BPC-157: 2–10 μg/kg subcutaneous, once to twice daily. TB-500: 2–4 mg/kg subcutaneous, twice weekly. Do not co-administer in the same syringe due to concentration differences and distinct stability requirements. For tendon repair models: begin with 3 days post-injury (allow initial hemostasis), then initiate the combined protocol. Most published combination protocols run 4–8 weeks. All research requires IACUC approval.",
    faq: [
      { q: "Why are the doses so different between BPC-157 and TB-500?", a: "The dosing difference reflects the mechanistic difference. BPC-157 is a receptor-signaling peptide that triggers downstream cascades at trace concentrations — microgram doses engage VEGFR, GH-R, and other signaling receptors. TB-500 works by physical G-actin stoichiometric sequestration — it must be present in sufficient molar quantity to meaningfully alter the free G-actin pool available for filament assembly in migrating cells. This is why BPC-157 is dosed in micrograms while TB-500 requires milligrams for equivalent biological effect." },
      { q: "Can the two compounds be mixed in the same vial before injection?", a: "They should not be pre-mixed and stored together, as concentration differences (BPC-157 at μg concentrations, TB-500 at mg concentrations) and different pH stability optima make co-formulation impractical. For research convenience, they can be drawn into the same syringe immediately before injection — the brief contact time does not cause degradation. However, for precise dosing, separate injections at different sites are preferred." },
      { q: "Which specific injury models have the best evidence for this combination?", a: "Tendon and ligament repair models have the most consistent published evidence for BPC-157/TB-500 combination advantages over either single compound. Musculoskeletal injury models including muscle tear and Achilles tendon transection in rodents document improved healing metrics with both compounds. Peripheral nerve injury models are another application with published preclinical data supporting combination use." },
    ],
  },
  {
    slug: "glow-blend",
    name: "GLOW Stack",
    casNumber: "Blend: 89030-95-5 / 307297-39-8 / 53-84-9",
    formula: "GHK-Cu 5mg + Epitalon 10mg + NAD+ 100mg",
    molecularWeight: "Blend",
    purity: "≥99.0%",
    category: "Anti-Aging",
    price: 180,
    size: "70mg protocol",
    dosages: [
      { size: "70mg protocol", price: 180 },
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
    researchApplications: [
      "Multi-target longevity protocol: ECM restoration, telomere support, NAD+ metabolism",
      "Collagen synthesis (GHK-Cu) + telomerase activation (Epitalon) + sirtuin substrate (NAD+)",
      "Skin biology, cellular aging, and mitochondrial function research",
      "Comprehensive anti-aging mechanisms in preclinical models",
    ],
    mechanismOfAction: [
      "The GLOW Stack addresses three distinct and non-overlapping molecular mechanisms of cellular aging. GHK-Cu (copper tripeptide) acts at the extracellular matrix level: it upregulates TGF-β-mediated collagen synthesis, inhibits MMP-1 collagen degradation, delivers copper to antioxidant enzymes (Cu/Zn-SOD), and modulates over 4,000 genes associated with tissue maintenance through epigenetic mechanisms. Declining endogenous GHK-Cu levels with age are a direct contributor to ECM quality deterioration.",
      "Epitalon (Ala-Glu-Asp-Gly) acts at the telomere/circadian interface: it activates telomerase (hTERT) to maintain telomere length in somatic cells, normalizes pineal gland melatonin synthesis and circadian rhythm amplitude, and modulates the hypothalamic-pituitary axis to reduce age-related neuroendocrine drift. NAD⁺ acts at the metabolic/genomic maintenance level: as the essential substrate for sirtuins (SIRT1–7, gene regulation and mitochondrial biogenesis), PARPs (DNA repair), and CD38 (cADP-ribose signaling), NAD⁺ replenishment restores these critical maintenance programs that decline as intracellular NAD⁺ falls with age.",
      "The three mechanisms are designed to be complementary and non-redundant: GHK-Cu addresses structural tissue aging (ECM, skin, oxidative defense); Epitalon addresses cellular aging (telomere maintenance, circadian/endocrine normalization); NAD⁺ addresses metabolic aging (mitochondrial biogenesis, DNA repair, sirtuin activity). Together they represent a multi-target approach to aging biology that no single compound can achieve.",
    ],
    whatToExpect: [
      { week: "Days 1–10 (Epitalon course)", description: "Epitalon telomerase activation measurable in cell culture models within 24–48 hours. In vivo: melatonin secretion normalization beginning within the first week of the course. GHK-Cu: collagen synthesis markers in fibroblast cultures rising within 48 hours of treatment initiation." },
      { week: "Weeks 2–4", description: "NAD⁺: intracellular NAD⁺ elevation sustaining SIRT1/SIRT3 activity in metabolically stressed cells. GHK-Cu topical/systemic: dermal collagen density changes beginning to accumulate. Epitalon course completing; melatonin and HPA axis normalization maintained in post-course follow-up." },
      { week: "Month 2+", description: "Cumulative multi-mechanism effects on aging biomarker panels. Genomic age clocks (DNA methylation-based) are studied in Epitalon research for changes reflecting biological age regression. Skin quality metrics (collagen density, elasticity) showing measurable changes with continued GHK-Cu application. NAD⁺ supplementation maintaining sirtuin activity and mitochondrial biogenesis markers." },
    ],
    dosingRecommendations: "Administered as separate compounds per individual protocols: GHK-Cu topical (0.1–1% formulation applied to skin) or subcutaneous (100–500 μg subcutaneous injection). Epitalon subcutaneous courses of 10–20 mg over 10–20 days, repeated annually or biannually. NAD⁺ intravenous infusion, intramuscular injection, or oral precursor supplementation (NMN/NR). All protocols at the discretion of the principal investigator; institutional approval required.",
    faq: [
      { q: "Why are these three compounds specifically combined in the GLOW protocol?", a: "The selection addresses three of the most well-characterized molecular aging hallmarks: ECM/oxidative deterioration (GHK-Cu), telomere shortening and circadian disruption (Epitalon), and declining NAD⁺-dependent metabolism and DNA repair (NAD⁺). Each compound has independent published research supporting its mechanism. The combination was designed to provide coverage across the structural, cellular, and metabolic dimensions of aging without mechanism overlap or known pharmacological interactions." },
      { q: "Is there any published research on combining these three compounds specifically?", a: "No randomized controlled trial has examined the three-compound GLOW combination specifically. Individual compounds have independent research pedigrees (GHK-Cu: extensive fibroblast and in vivo data; Epitalon: 40+ years of Russian preclinical and clinical observation data; NAD⁺: numerous human clinical trials via precursor supplementation). The combination protocol is rationally designed based on mechanistic complementarity rather than direct combination trial data." },
      { q: "What order should the GLOW compounds be administered in?", a: "There is no pharmacological interaction between the three compounds requiring a specific sequence. Typical research protocols: NAD⁺ on a defined schedule (weekly infusion or daily oral precursor); Epitalon as a course (10–20 consecutive days); GHK-Cu continuously (topical application daily or subcutaneous 2–3 times weekly). Starting all three simultaneously is feasible for research design purposes." },
    ],
  },
  {
    slug: "klw-blend",
    name: "KLW Stack",
    casNumber: "Blend: 13467-76-0 / 154947-66-7 / 62304-98-7",
    formula: "KPV 10mg + LL-37 5mg + Thymosin Alpha-1 5mg",
    molecularWeight: "Blend",
    purity: "≥98.5%",
    category: "Wellness",
    price: 60,
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
    researchApplications: [
      "Triple immune modulation: inflammation (KPV) + innate defense (LL-37) + adaptive immunity (Tα1)",
      "Gut barrier function and mucosal immunity in GI research",
      "Antimicrobial peptide activity combined with T-cell activation",
      "Comprehensive immune cascade from innate to adaptive pathways",
    ],
    mechanismOfAction: [
      "The KLW Stack addresses the immune system across three distinct functional levels. KPV (alpha-MSH C-terminal tripeptide) acts as the anti-inflammatory regulator: MC1R/MC3R-mediated NF-κB suppression reduces TNF-α, IL-1β, and IL-6 production while preserving epithelial barrier integrity through tight junction maintenance. This anti-inflammatory layer prevents the excessive innate immune activation that damages host tissue in chronic inflammatory states while still permitting productive immune responses.",
      "LL-37 (human cathelicidin AMP) operates at the innate antimicrobial and tissue repair level: it disrupts pathogen membranes, neutralizes LPS endotoxin (preventing TLR4-driven inflammation), attracts innate immune cells via chemokine receptors, promotes keratinocyte migration and angiogenesis for tissue repair, and activates FPR2-mediated pro-resolution lipid mediator production. Thymosin Alpha-1 (Tα1) operates at the adaptive immune level: it enhances MHC class I antigen presentation, drives Th1 CD4+ T cell differentiation, activates NK and cytotoxic T cells, and improves dendritic cell maturation for more effective adaptive immune priming.",
      "The three-layer coverage is deliberately designed to progress from innate to adaptive without mechanistic overlap: KPV suppresses excessive innate activation (first-line immune brake), LL-37 provides direct pathogen defense and tissue repair (first-line immune offense), and Tα1 builds sustained adaptive immune competence (second-line immune adaptation). Together they represent the full innate-to-adaptive immune spectrum, making KLW applicable to research contexts where comprehensive immune system optimization is the goal.",
    ],
    whatToExpect: [
      { week: "Days 1—7", description: "KPV: NF-κB activity suppression measurable in inflammatory cell assays within hours. LL-37: antimicrobial coverage and FPR2 pro-resolution signaling active from first administration. Tα1: dendritic cell activation and NK cell cytotoxicity enhancement measurable by the end of the first week." },
      { week: "Weeks 2–4", description: "Adaptive immune strengthening with Tα1: T-cell proliferative responses to specific antigens increasing. LL-37 gut barrier effects: epithelial integrity improving in mucosal inflammation models. KPV: systemic inflammatory markers declining toward normal range." },
      { week: "Month 2+", description: "Sustained adaptive immune competence with Tα1: vaccine response amplification in combined protocols. KPV gut barrier protection: maintained remission parameters in colitis models. LL-37 antimicrobial activity: reduced pathogen colonization in infection challenge models." },
    ],
    dosingRecommendations: "Per individual compound protocols: KPV 10–100 μg subcutaneous or 0.05–0.5 mg/kg oral daily. LL-37 50–200 μg topical per wound or 1–5 mg/kg subcutaneous. Thymosin Alpha-1 100–400 μg/kg subcutaneous twice weekly (based on approved clinical dosing of 1.6 mg twice weekly scaled to body weight). Do not pre-mix compounds; administer as separate injections per individual product stability requirements.",
    faq: [
      { q: "Is there any published evidence for this specific three-compound combination?", a: "No RCT has tested this exact combination. The protocol is rationally assembled from compounds with established individual research pedigrees. Thymosin Alpha-1 has the strongest clinical evidence base (approved in 35+ countries, multiple RCTs). LL-37 has extensive in vitro and preclinical data. KPV has strong preclinical colitis and wound healing data. The non-overlapping mechanisms and lack of known drug interactions provide the scientific rationale for combination use." },
      { q: "Why is LL-37 difficult to work with in lab settings?", a: "LL-37's amphipathic cationic structure causes it to adsorb to glass and negatively charged surfaces, and to self-aggregate at concentrations above ~10 μg/mL in low-ionic-strength solutions. Use polypropylene tubes exclusively, maintain physiological ionic strength (PBS rather than pure water), and apply brief sonication if aggregates form. These handling requirements are manageable with awareness and do not limit the compound's research utility." },
      { q: "Can the KLW stack be used in cancer immunology research?", a: "Yes — the combination of Tα1 (adaptive immune activation, tumor immunosurveillance), LL-37 (NK cell and pDC activation, potential tumor microenvironment immune cell recruitment), and KPV (anti-inflammatory to counter tumor-promoted immunosuppression) represents a multi-mechanism approach to restoring anti-tumor immune function. Thymosin Alpha-1 specifically has published data on improving vaccine responses in cancer patients and modulating tumor-associated regulatory T cell activity." },
    ],
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
    price: 36,
    size: "10mg",
    dosages: [
      { size: "10mg", price: 36 },
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
    badge: "NEW",
    researchApplications: [
      "SNARE complex inhibition and neuromuscular junction research",
      "Acetylcholine vesicle fusion modulation in dermatological studies",
      "Expression line formation and dynamic wrinkle research models",
      "Topical neurotransmitter inhibition without SNAP-25 cleavage",
    ],
    mechanismOfAction: [
      "Snap-8 is modeled on the N-terminal SNARE recognition domain of SNAP-25, the synaptosomal-associated protein that forms the tripartite SNARE complex (with synaptobrevin and syntaxin) essential for neurotransmitter vesicle fusion with the presynaptic membrane. In facial neuromuscular junctions, SNARE complex assembly is the final step before acetylcholine vesicle exocytosis, triggering muscle contraction. Snap-8's octapeptide sequence (Ac-Glu-Glu-Met-Gln-Arg-Arg-Ala-Asp-NH₂) competes with endogenous SNAP-25 for synaptobrevin and syntaxin binding sites, reducing SNARE complex assembly efficiency and diminishing the quantum of acetylcholine released per nerve impulse.",
      "The result of reduced acetylcholine release is attenuated muscle contractile force in the target region. With repeated or continuous facial muscle contractions reduced, the dynamic mechanical stresses that create expression lines (crow's feet, forehead lines, glabellar lines) are diminished. This is a fundamentally different mechanism from botulinum toxin (BoNT), which irreversibly cleaves SNAP-25 preventing any SNARE assembly. Snap-8 provides partial, concentration-dependent, reversible inhibition rather than complete ablation of the SNARE complex. The clinical implication is a softer, more graded effect with a better tolerance margin.",
      "Snap-8 is an extended version of Argireline (Ac-Glu-Glu-Met-Gln-Arg-Arg-NH₂, 6 aa). The additional two C-terminal residues (Ala-Asp) in Snap-8 extend the SNARE recognition sequence to more closely mimic the native SNAP-25 binding domain, theoretically providing more complete competitive inhibition at the same concentration. Published comparative studies claim superior expression line reduction efficacy for 10% Snap-8 versus 10% Argireline in identical topical formulations, consistent with the extended sequence hypothesis.",
    ],
    whatToExpect: [
      { week: "Week 1–2", description: "In vitro SNARE assembly inhibition assays: measurable reduction in synaptobrevin-SNAP-25 complex formation at ≥10 μM Snap-8. Neuromuscular junction current amplitude studies: reduced end-plate potential amplitude in isolated nerve-muscle preparations at research concentrations." },
      { week: "Weeks 2–4", description: "Topical clinical observation studies: expression line depth reduction measurements (Primos topographic analysis) beginning to show statistically significant differences from baseline at twice-daily 10% application." },
      { week: "Month 1–2", description: "Published clinical studies with twice-daily topical Snap-8 at 10% concentration report expression line depth reduction of 30–60% compared to baseline at 4–8 weeks. Effects are maintained with continued application. Post-cessation: gradual return toward baseline as competitive inhibition resolves." },
    ],
    dosingRecommendations: "Topical cosmeceutical research formulations: 1–10% w/w in serum or cream vehicle. Twice-daily application to target areas (periorbital, forehead, glabellar). Published studies used 10% as the primary efficacy concentration. In vitro SNARE assembly inhibition assays: 1–100 μM. Neuromuscular junction research preparations: 10–500 μM in physiological saline perfusate. For topical formulation preparation: dissolve lyophilized Snap-8 in minimal sterile water and incorporate into emulsion or serum vehicle at target concentration.",
    faq: [
      { q: "How does Snap-8 compare to Argireline mechanistically?", a: "Snap-8 extends the Argireline hexapeptide sequence by two additional C-terminal residues (Ala-Asp), more closely approximating the full SNARE-recognition sequence of native SNAP-25. Published comparative in vitro data shows Snap-8 forming a more complete competitive inhibitor complex with SNARE proteins than Argireline. Clinical comparative studies report approximately 30–50% greater expression line reduction with 10% Snap-8 versus 10% Argireline in equivalent formulations. Both compounds work through the same fundamental mechanism but with different competitive efficiency." },
      { q: "Is Snap-8 safe for topical use in research settings?", a: "Published in vitro safety assessments show no cytotoxicity in human skin cell models at concentrations up to 10%. No skin sensitization in standard human repeat insult patch test (HRIPT) protocols. The compound does not penetrate deeply beyond the epidermis at concentrations studied, limiting systemic exposure. No published reports of serious adverse effects from topical Snap-8 research formulations exist in the literature." },
      { q: "What is the reversibility timeline for Snap-8's effects?", a: "Unlike botulinum toxin (effects persist 3–6 months until new SNAP-25 protein is synthesized), Snap-8's competitive inhibition is inherently reversible. As application stops, the competitive inhibitor concentration in the neuromuscular junction declines and SNARE complex assembly efficiency returns toward normal. The reversibility timeline follows the topical delivery kinetics — effects begin diminishing within days of cessation and are expected to return to baseline within 1–2 weeks." },
      { q: "Can Snap-8 be injected as well as applied topically?", a: "Snap-8 is researched primarily as a topical agent. Direct injection into neuromuscular junctions has been studied in vitro preparations but is not an established research route for this compound in intact organisms. The topical route is the practical delivery method supported by published formulation and clinical data." },
    ],
  },
  {
    slug: "sterile-water-3ml",
    name: "Sterile Water for Injection — 3mL",
    casNumber: "7732-18-5",
    formula: "H₂O",
    molecularWeight: "18.02 g/mol",
    purity: "USP Grade",
    category: "Accessories",
    price: 6,
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
    researchApplications: [
      "USP-grade solvent for lyophilized peptide reconstitution protocols",
      "Pharmaceutical standard diluent for research compound preparation",
      "Sterile aqueous vehicle for injection-based research applications",
      "Peptide solubility and stability studies in laboratory settings",
    ],
  },
  {
    slug: "sterile-water-10ml",
    name: "Sterile Water for Injection — 10mL",
    casNumber: "7732-18-5",
    formula: "H₂O",
    molecularWeight: "18.02 g/mol",
    purity: "USP Grade",
    category: "Accessories",
    price: 10,
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
    researchApplications: [
      "Large-volume USP-grade solvent for multi-vial protocol reconstitution",
      "Cost-effective pharmaceutical diluent for extended research runs",
      "Sterile aqueous vehicle for high-volume laboratory applications",
      "Multi-peptide protocol preparation in research settings",
    ],
  },
];

// All products support the same Monthly Auto-Ship cadence.
export function getSubscriptionCadences(_slug: string): SubscriptionCadence[] {
  return ['monthly'];
}

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
