import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "peptide-half-life-dosing-timing-research-guide",
  title: "Peptide Half-Life and Dosing Timing: A Researcher's Reference Guide",
  description:
    "Understanding peptide half-life is fundamental to designing valid research protocols. This guide covers half-life biology, how route of administration affects it, dosing interval principles, and a compound-by-compound reference table.",
  category: "Research Fundamentals",
  readMinutes: 10,
  publishedAt: "2026-06-15",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Peptide half-life is one of the most practically important pharmacokinetic parameters for researchers designing dosing protocols. A compound with a 30-minute half-life requires fundamentally different study design decisions than one with a 6-day half-life — and getting this wrong can invalidate experimental outcomes, produce null results from real compounds, or obscure effects by maintaining non-physiological trough concentrations between doses.",
    },
    {
      type: "heading",
      text: "What Is Half-Life?",
    },
    {
      type: "paragraph",
      text: "Half-life (t½) is the time required for the plasma or tissue concentration of a compound to decrease by 50%. For most peptides, this follows first-order kinetics — meaning the rate of elimination is proportional to current concentration, and the compound follows a predictable exponential decay curve.",
    },
    {
      type: "paragraph",
      text: "After one half-life, 50% of the administered dose remains active. After two half-lives, 25%. After five half-lives, approximately 3% remains — conventionally considered full elimination. This means a compound with a 30-minute half-life is essentially gone in 2.5 hours, while one with a 6-day half-life persists for a month.",
    },
    {
      type: "heading",
      text: "Why Peptides Have Short Half-Lives (By Default)",
    },
    {
      type: "paragraph",
      text: "Native peptides in circulation face rapid inactivation by:",
    },
    {
      type: "list",
      items: [
        "Proteolytic enzymes in blood (serum proteases), kidneys, and liver",
        "Renal filtration — small peptides below ~5 kDa are often filtered by the glomerulus",
        "Receptor-mediated endocytosis — receptor-bound peptides are internalized and degraded",
        "Chemical instability — hydrolysis, oxidation of sensitive residues",
      ],
    },
    {
      type: "paragraph",
      text: "Native GHRH, for example, has a half-life of approximately 7 minutes in circulation. This is biologically appropriate — pulsatile signaling requires rapid clearance to create the peaks and troughs that encode hormonal information. For research purposes, however, 7 minutes creates major practical challenges.",
    },
    {
      type: "heading",
      text: "How Half-Life Is Extended in Research Peptides",
    },
    {
      type: "paragraph",
      text: "Pharmaceutical and research compound engineering uses several strategies to extend peptide half-life:",
    },
    {
      type: "subheading",
      text: "D-Amino Acid Substitutions",
    },
    {
      type: "paragraph",
      text: "Natural peptides contain L-amino acids. Proteases are stereospecific — substituting D-amino acids at key positions creates steric barriers that resist enzymatic cleavage. Many research GHRPs (GHRP-2, GHRP-6, Ipamorelin) incorporate D-amino acids in their sequences, extending half-life to 15–60 minutes.",
    },
    {
      type: "subheading",
      text: "Albumin-Binding Tags (DAC Technology)",
    },
    {
      type: "paragraph",
      text: "Albumin has a serum half-life of approximately 19 days and is protected from renal filtration by FcRn-mediated recycling. Conjugating a peptide to an albumin-binding moiety (fatty acid chains, albumin-binding domains) dramatically extends its half-life by borrowing albumin's stability. CJC-1295 with DAC uses this strategy to extend GHRH's half-life from 7 minutes to approximately 6–8 days.",
    },
    {
      type: "subheading",
      text: "PEGylation",
    },
    {
      type: "paragraph",
      text: "Polyethylene glycol (PEG) chains attached to peptides increase hydrodynamic radius (reducing renal filtration), create steric barriers to proteolysis, and reduce immunogenicity. Semaglutide and other GLP-1 analogs use fatty acid conjugation to similar effect.",
    },
    {
      type: "subheading",
      text: "Structural Modification of Terminal Residues",
    },
    {
      type: "paragraph",
      text: "Many peptidases attack from the N- or C-terminus. Acetylation of the N-terminus and amidation of the C-terminus (–CONH₂ instead of –COOH) blocks exopeptidase access, extending half-life modestly without major molecular changes. Most research peptides incorporate C-terminal amidation.",
    },
    {
      type: "heading",
      text: "Route of Administration Effects on Half-Life",
    },
    {
      type: "paragraph",
      text: "The route of administration affects both how quickly a peptide reaches target tissue and how rapidly it is cleared:",
    },
    {
      type: "table",
      headers: ["Route", "Onset", "Bioavailability", "Notes"],
      rows: [
        ["Intravenous (IV)", "Immediate", "100%", "Fastest plasma peak; rapid distribution/clearance"],
        ["Intraperitoneal (IP)", "~5–15 min", "~90%+", "Common in rodent research; enters portal circulation"],
        ["Subcutaneous (SC)", "~15–30 min", "Variable (60–90%+ for most peptides)", "Standard for most research peptides; depot effect"],
        ["Intramuscular (IM)", "~15–30 min", "~80–90%", "Similar to SC; faster absorption in vascular muscle"],
        ["Intranasal", "~5–15 min", "5–40% (highly variable)", "Direct CNS access potential; useful for CNS-targeted peptides"],
        ["Oral", "30–120 min (if any)", "1–5% (most peptides)", "Gastric/intestinal proteolysis limits uptake severely"],
      ],
    },
    {
      type: "paragraph",
      text: "For most research peptides, subcutaneous injection is the standard route — it provides reliable, reproducible absorption with a modest depot effect that somewhat smooths the plasma concentration-time curve. Intraperitoneal is commonly used in rodent studies for speed and ease of administration.",
    },
    {
      type: "heading",
      text: "Designing Dosing Intervals",
    },
    {
      type: "paragraph",
      text: "Dosing interval should be designed with a clear research objective in mind:",
    },
    {
      type: "subheading",
      text: "Pulsatile Protocols",
    },
    {
      type: "paragraph",
      text: "For compounds where pulsatility is physiologically relevant (GH secretagogues, GHRH analogs), protocols should allow near-complete clearance between doses. A compound with a 30-minute half-life should ideally be dosed with intervals of at least 2.5 hours (five half-lives) to allow return to baseline before the next pulse. This preserves the receptor sensitivity and feedforward-feedback cycle that makes the GH axis responsive.",
    },
    {
      type: "subheading",
      text: "Sustained Exposure Protocols",
    },
    {
      type: "paragraph",
      text: "For compounds where sustained receptor occupancy is desired (some immune modulators, repair peptides), steady-state dosing intervals equal to approximately one half-life maintain relatively constant plasma concentrations. BPC-157 research protocols often use twice-daily dosing to maintain sustained tissue levels, exploiting its moderate half-life of 1–4 hours.",
    },
    {
      type: "subheading",
      text: "Achieving Steady State",
    },
    {
      type: "paragraph",
      text: "With any regular dosing protocol, steady state (where dosing rate equals elimination rate) is reached after approximately 4–5 half-lives. For a compound with a 2-hour half-life, steady state is reached within 8–10 hours of beginning regular dosing. For CJC-1295 with DAC (6-day half-life), steady state requires 24–30 days of weekly dosing. This has important implications for the timing of measurements in research designs.",
    },
    {
      type: "heading",
      text: "Half-Life Reference Table: Common Research Peptides",
    },
    {
      type: "table",
      headers: ["Compound", "Estimated Half-Life", "Route (Typical)", "Notes"],
      rows: [
        ["GHRH (native)", "~7 min", "IV", "Too short for most protocols without modification"],
        ["CJC-1295 (no DAC / Mod GRF 1-29)", "~30 min", "SC", "Mimics pulsatile GHRH; pair with GHS"],
        ["CJC-1295 (with DAC)", "~6–8 days", "SC", "Long-acting; use for sustained IGF-1 elevation studies"],
        ["Ipamorelin", "~2 hours", "SC", "Selective GHS; pulsatile dosing preferred"],
        ["GHRP-6", "~15–30 min", "SC/IP", "Older GHS; more hunger/cortisol signal"],
        ["GHRP-2", "~15–30 min", "SC/IP", "More potent than GHRP-6; similar duration"],
        ["BPC-157", "~1–4 hours", "SC/IP", "Moderate; twice-daily common in research"],
        ["TB-500 (Thymosin β4)", "~6–8 hours", "SC", "Longer; less frequent dosing in protocols"],
        ["Semaglutide", "~7 days", "SC", "Long-acting GLP-1 analog; weekly research dosing"],
        ["Tirzepatide", "~5 days", "SC", "GLP-1/GIP dual agonist; similar to semaglutide"],
        ["Epithalon", "~30 min", "SC/IP", "Short; typically dosed multiple times daily in protocols"],
        ["Selank", "~5 min", "Intranasal/IP", "Extremely short; intranasal for acute CNS studies"],
        ["NAD+", "~2 min (IV)", "IV/SC", "Rapid cellular uptake; precursors preferred for sustained studies"],
        ["NMN", "~2–3 hours", "SC/Oral", "Rapidly converted to NAD+; oral bioavailability limited"],
        ["PT-141 (Bremelanotide)", "~120 min", "SC", "Moderate duration; single-dose protocols common"],
        ["Melanotan II", "~30 min", "SC", "Short native half-life; effects outlast plasma levels"],
        ["IGF-1", "~15–20 min", "SC/IV", "Rapid clearance; IGF-1 LR3 extends to ~20–30 hours"],
        ["IGF-1 LR3", "~20–30 hours", "SC", "IGFBP binding reduced; long-acting analog"],
        ["GLP-1 (native)", "~2 min", "N/A", "Rapidly degraded by DPP-IV; analogs required for research"],
        ["Hexarelin", "~30–60 min", "SC/IP", "GHS; cardiac studies use intravenous timing"],
      ],
    },
    {
      type: "callout",
      text: "Note: Half-life values are estimates from available preclinical literature and may vary with species, dose, route, and formulation. Researchers should consult primary pharmacokinetic studies for the specific compound and model system they are using.",
    },
    {
      type: "heading",
      text: "Practical Protocol Design Principles",
    },
    {
      type: "list",
      items: [
        "Match dosing interval to half-life: For pulsatile signaling studies, allow 5+ half-lives between doses. For steady-state studies, dose at 1 half-life intervals",
        "Account for steady-state timing: Do not measure endpoints too early in a protocol — wait until steady state is achieved (4–5 half-lives of dosing interval)",
        "Standardize timing relative to light cycle: GH, cortisol, and many metabolic parameters vary by circadian phase; all subjects should receive compound at the same phase",
        "Use appropriate controls: Vehicle control (bacteriostatic water or saline) administered on the same schedule is essential for distinguishing pharmacological effects from injection stress or vehicle effects",
        "Consider tissue PK vs. plasma PK: Plasma half-life and tissue half-life often differ significantly. BPC-157, for example, shows prolonged effects in tissue despite rapid plasma clearance",
      ],
    },
    {
      type: "heading",
      text: "Summary",
    },
    {
      type: "paragraph",
      text: "Understanding peptide half-life is foundational to valid research design. The wide range of half-lives across common research peptides — from 2 minutes (native GLP-1) to 8 days (CJC-1295 with DAC) — demands compound-specific protocol design. Appropriate dosing intervals, steady-state timing, and route selection determine whether a protocol captures the intended pharmacological effect or generates confounded or null results. The reference table in this article provides a starting point; researchers should always consult primary pharmacokinetic literature for the specific compound and model system under investigation.",
    },
    {
      type: "disclaimer",
      text: "For research purposes only. Not intended for human use, diagnosis, or treatment. Researchers should adhere to applicable IACUC, IRB, and institutional guidelines when working with these compounds.",
    },
  ],
};
