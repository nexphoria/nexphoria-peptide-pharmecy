import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "how-to-use-tb-500-research-protocol-guide",
  title: "How to Use TB-500: Research Protocol Guide (2026)",
  description:
    "A step-by-step research protocol guide for TB-500 (Thymosin Beta-4) — covering reconstitution, administration routes, dosing ranges from preclinical literature, and study design considerations.",
  category: "Research Protocols",
  readMinutes: 9,
  publishedAt: "2026-06-20",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "TB-500, the synthetic version of the naturally occurring peptide Thymosin Beta-4 (Tβ4), has accumulated significant preclinical research across tissue repair, cardiac protection, neurological recovery, and anti-inflammatory biology. Researchers designing TB-500 protocols need a working understanding of its pharmacology, reconstitution requirements, and available preclinical dosing data to set up well-controlled studies.",
    },
    {
      type: "callout",
      text: "This article is for research purposes only. TB-500 is a research compound not approved for human use by the FDA or equivalent regulatory bodies.",
    },
    {
      type: "heading",
      text: "Background: What Is TB-500?",
    },
    {
      type: "paragraph",
      text: "TB-500 is a synthetic 43-amino acid fragment of Thymosin Beta-4, specifically the actin-binding domain responsible for much of the peptide's observed biological activity. Tβ4 is the most abundant intracellular actin-sequestering peptide in mammals, playing critical roles in cell migration, differentiation, angiogenesis, and tissue regeneration.",
    },
    {
      type: "list",
      items: [
        "Molecular weight: ~4,963 Da",
        "Mechanism: Sequesters G-actin (globular actin), modulates actin polymerization dynamics",
        "Key pathway: Activates IκB kinase (IKK), reducing NF-κB-mediated inflammation",
        "Promotes: Endothelial cell migration, angiogenesis, stem cell recruitment, ECM remodeling",
        "Published research models: Cardiac repair, wound healing, tendon/ligament repair, spinal cord injury, corneal repair",
      ],
    },
    {
      type: "heading",
      text: "Step 1: Source Verification",
    },
    {
      type: "paragraph",
      text: "TB-500 purity and quality are critical variables in any research protocol. Before beginning, verify the following on the supplier's COA:",
    },
    {
      type: "list",
      items: [
        "HPLC purity ≥98% — TB-500's larger size (vs. BPC-157) means more potential degradation pathways",
        "Mass spectrometry confirmation — verifies correct molecular weight (~4,963 Da)",
        "Endotoxin testing (LAL) — critical for in vivo studies; endotoxin contamination confounds inflammatory outcomes",
        "Lyophilized form — preferable for stability during shipping",
        "Third-party tested — independent verification of purity claims",
      ],
    },
    {
      type: "heading",
      text: "Step 2: Reconstitution",
    },
    {
      type: "paragraph",
      text: "TB-500 is typically reconstituted with bacteriostatic water (preferred for multi-use) or sterile 0.9% saline. Due to its larger molecular weight relative to smaller peptides, TB-500 may take slightly longer to fully dissolve.",
    },
    {
      type: "subheading",
      text: "Protocol",
    },
    {
      type: "list",
      items: [
        "Draw diluent into a sterile syringe (29–31 gauge)",
        "Inject diluent slowly along the vial wall — avoid forceful direct injection onto lyophilized powder",
        "Gently rotate or swirl vial — do not shake vigorously, which can denature the peptide",
        "Allow 1–3 minutes for full dissolution if needed",
        "Resulting solution should be clear and colorless; discard if particulate or cloudy",
        "Label with date of reconstitution and working concentration",
      ],
    },
    {
      type: "paragraph",
      text: "Common working concentration: 2 mg TB-500 reconstituted in 2 mL bacteriostatic water yields 1 mg/mL (1,000 mcg/mL). Adjust based on study dosing requirements.",
    },
    {
      type: "heading",
      text: "Step 3: Route of Administration",
    },
    {
      type: "paragraph",
      text: "Preclinical TB-500 studies have used several routes depending on the injury model and experimental goal:",
    },
    {
      type: "table",
      headers: ["Route", "Key Notes", "Common Research Applications"],
      rows: [
        ["Subcutaneous (SC)", "Most common; consistent systemic absorption", "General tissue repair, systemic studies"],
        ["Intraperitoneal (IP)", "Fast systemic uptake; standard in small rodent models", "Cardiac, neurological, anti-inflammatory models"],
        ["Intravenous (IV)", "Used in some cardiac models for rapid delivery", "Acute cardiac injury models"],
        ["Intra-articular", "Direct injection into joint space", "Cartilage and joint repair studies"],
        ["Intramyocardial", "Surgical injection into heart tissue", "Specialized cardiac regeneration studies"],
      ],
    },
    {
      type: "heading",
      text: "Step 4: Dosing Ranges From Published Research",
    },
    {
      type: "callout",
      text: "The following dosing data is derived exclusively from preclinical animal research. These are not human dosing recommendations.",
    },
    {
      type: "paragraph",
      text: "TB-500 dosing in published literature spans a relatively wide range depending on the injury model and species. The following represents commonly referenced parameters:",
    },
    {
      type: "list",
      items: [
        "150 µg/kg SC/IP — low end; used in some systemic inflammatory and repair studies",
        "300–500 µg/kg — mid range; common in musculoskeletal and wound healing models",
        "1,000–2,600 µg/kg — higher range; observed in cardiac and neurological regeneration studies",
        "Topical application: 0.1–1 mg/mL applied directly to wound site in wound healing models",
        "Frequency: Most studies use twice-weekly to once-weekly administration (not daily, unlike BPC-157)",
      ],
    },
    {
      type: "paragraph",
      text: "A key distinction from BPC-157: TB-500 studies typically use less frequent dosing (twice weekly or weekly) rather than daily administration. This reflects both its longer effective half-life and the sustained biological effects observed from less frequent dosing in animal models.",
    },
    {
      type: "heading",
      text: "Step 5: Timing and Study Duration",
    },
    {
      type: "paragraph",
      text: "In injury repair models, TB-500 is typically initiated shortly after injury induction — often within 24 hours. Study duration commonly ranges from 2 to 6 weeks depending on the tissue type:",
    },
    {
      type: "list",
      items: [
        "Acute wound healing studies: 7–14 days post-injury",
        "Tendon/ligament repair studies: 4–8 weeks (repair is slower in dense connective tissue)",
        "Cardiac repair studies: 2–4 weeks post-infarction, with assessment at multiple timepoints",
        "Neurological models: 4–12 weeks, depending on the injury model",
      ],
    },
    {
      type: "heading",
      text: "Step 6: TB-500 vs. BPC-157 — Protocol Design Differences",
    },
    {
      type: "paragraph",
      text: "TB-500 and BPC-157 are frequently studied in combination, but their individual protocol requirements differ:",
    },
    {
      type: "table",
      headers: ["Parameter", "TB-500", "BPC-157"],
      rows: [
        ["Typical frequency", "Once to twice weekly", "Once to twice daily"],
        ["Molecular weight", "~4,963 Da", "~1,420 Da"],
        ["Primary mechanism", "G-actin sequestration, IKK/NF-κB", "NO/VEGF/FAK pathways"],
        ["Primary research focus", "Structural repair, cardiac, anti-fibrotic", "GI protection, angiogenesis, neuro"],
        ["Route most studied", "SC, IP", "SC, IP, intragastric"],
        ["Reconstitution diluent", "BAC water or sterile saline", "BAC water or sterile saline"],
      ],
    },
    {
      type: "heading",
      text: "Step 7: Storage",
    },
    {
      type: "list",
      items: [
        "Lyophilized TB-500: stable at -20°C long term; -80°C for archival storage",
        "Reconstituted with bacteriostatic water: store at 4°C; use within 28–30 days",
        "Reconstituted with sterile saline: use within 7 days",
        "Do not freeze reconstituted material — degrades peptide bonds",
        "Protect from UV light; store in opaque or foil-wrapped vials",
      ],
    },
    {
      type: "heading",
      text: "Endpoint Tracking for TB-500 Studies",
    },
    {
      type: "subheading",
      text: "Connective Tissue / Musculoskeletal",
    },
    {
      type: "list",
      items: [
        "Histology: H&E and Masson's trichrome staining of repair tissue",
        "Immunohistochemistry: Tβ4, collagen I/III, VEGF, CD31",
        "Biomechanical testing: tensile strength, Young's modulus",
        "Inflammatory panel: IL-6, TNF-α, TGF-β1",
      ],
    },
    {
      type: "subheading",
      text: "Cardiac Models",
    },
    {
      type: "list",
      items: [
        "Echocardiography: ejection fraction, fractional shortening, wall motion scoring",
        "Histology: infarct size, fibrosis (Masson's trichrome), cardiomyocyte density",
        "Biomarkers: troponin I, BNP, cTnT at serial timepoints",
        "Angiogenesis: VEGF, CD31, capillary density",
      ],
    },
    {
      type: "heading",
      text: "Summary",
    },
    {
      type: "paragraph",
      text: "TB-500 research protocols require attention to source quality, correct reconstitution technique, and model-appropriate dosing and frequency. Unlike smaller peptides that typically demand daily administration, TB-500 studies commonly use less frequent dosing intervals — a practical consideration that simplifies some study designs. Its versatility across multiple tissue repair models and complementary mechanism to BPC-157 make it one of the most commonly studied peptides in regenerative preclinical research.",
    },
    {
      type: "callout",
      text: "For research purposes only. Not for human use, diagnosis, or treatment.",
    },
  ],
};
