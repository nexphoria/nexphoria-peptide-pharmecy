import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "peptide-half-life-quick-reference-guide-2026",
  title: "Peptide Half-Life Quick Reference Guide: Dosing Windows & Duration of Action",
  description:
    "A complete quick-reference guide to peptide half-lives in 2026 — covering GH secretagogues, GLP-1 agonists, tissue repair peptides, nootropics, and immune peptides. Includes dosing frequency implications and practical researcher protocols.",
  category: "Research Guides",
  readMinutes: 8,
  publishedAt: "2026-06-22",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Understanding peptide half-lives is fundamental to designing effective research protocols. A peptide's half-life determines how long it remains active in biological systems, how frequently it should be dosed to maintain sustained concentrations, and how to interpret time-course data in preclinical and translational studies. This guide provides a practical quick reference across all major research peptide categories.",
    },
    {
      type: "heading",
      text: "What Is Half-Life and Why It Matters",
    },
    {
      type: "paragraph",
      text: "Biological half-life (t½) refers to the time required for the plasma concentration of a compound to decrease by 50% after a single dose. For peptides, this is primarily determined by enzymatic degradation (proteolysis by serum proteases, tissue peptidases, and organ-specific enzymes), renal filtration (for smaller peptides), and receptor-mediated internalization.",
    },
    {
      type: "paragraph",
      text: "A peptide with a short half-life (minutes to hours) requires more frequent dosing to maintain target tissue exposure, produces acute pulsatile signaling, and may have different receptor kinetics than a long-acting analog. Conversely, long-acting peptides (days to weeks) provide sustained receptor occupancy, altered desensitization patterns, and different safety/tolerability profiles.",
    },
    {
      type: "heading",
      text: "GH-Axis Peptides: Half-Life Reference",
    },
    {
      type: "table",
      headers: ["Peptide", "Approximate Half-Life", "Route", "Dosing Frequency Implication"],
      rows: [
        ["Ipamorelin", "~2 hours", "SC/IP", "2–3× daily for sustained GH stimulation"],
        ["GHRP-2 (Pralmorelin)", "15–60 min", "SC/IP", "2–3× daily; acute GH pulse"],
        ["GHRP-6", "15–60 min", "SC/IP", "2–3× daily; acute GH pulse"],
        ["Hexarelin", "~70 min", "SC/IP", "2× daily; desensitization risk with daily use"],
        ["CJC-1295 (no DAC)", "~30 min", "SC", "2× daily; mimics natural GHRH pulse"],
        ["CJC-1295 (with DAC)", "~7 days", "SC", "Once weekly; continuous GH elevation"],
        ["Sermorelin", "~10–20 min", "SC", "2–3× daily or once before sleep"],
        ["Tesamorelin", "~26 min", "SC", "Once daily (approved daily dosing)"],
        ["MK-677 (Ibutamoren)", "~24 hours", "Oral", "Once daily oral dosing"],
      ],
    },
    {
      type: "paragraph",
      text: "An important distinction: GHRH analogs (Sermorelin, CJC-1295) stimulate the pituitary to release GH through GHRH receptor activation, while GHRP/GHS peptides (Ipamorelin, GHRP-2, Hexarelin) act via the ghrelin receptor (GHS-R1a). Stacking a GHRH analog with a GHRP produces synergistic GH release beyond either alone — the basis for the CJC-1295 + Ipamorelin combination used in many research protocols.",
    },
    {
      type: "heading",
      text: "GLP-1 Receptor Agonists: Half-Life Reference",
    },
    {
      type: "table",
      headers: ["Peptide", "Half-Life", "Route", "Dosing Frequency"],
      rows: [
        ["Native GLP-1 (7-37)", "1–2 min (in vivo)", "IV infusion only (research)", "Continuous infusion for studies"],
        ["Exendin-4 (Exenatide)", "~2.4 hours", "SC", "Twice daily"],
        ["Liraglutide", "~13 hours", "SC", "Once daily"],
        ["Semaglutide (subcutaneous)", "~7 days", "SC", "Once weekly"],
        ["Semaglutide (oral)", "~7 days (prolonged absorption)", "Oral", "Once daily"],
        ["Tirzepatide", "~5 days", "SC", "Once weekly"],
        ["Retatrutide", "~6 days", "SC", "Once weekly"],
        ["Cagrilintide", "~7 days", "SC", "Once weekly (amylin analog)"],
        ["Orforglipron", "~15–20 hours", "Oral", "Once daily"],
      ],
    },
    {
      type: "heading",
      text: "Tissue Repair and Musculoskeletal Peptides",
    },
    {
      type: "table",
      headers: ["Peptide", "Approximate Half-Life", "Route", "Notes"],
      rows: [
        ["BPC-157", "~4 hours (estimated, rat plasma)", "SC/oral/IP", "Tissue distribution may outlast plasma t½"],
        ["TB-500 (Thymosin β4)", "~3–4 hours (rat)", "SC/IP", "Accumulates in injured tissue"],
        ["GHK-Cu", "~30 min (plasma)", "SC/topical", "Rapid tissue uptake; topical use for skin"],
        ["IGF-1 LR3", "~20–30 hours", "SC/IP", "Long-acting analog vs. ~10 min for native IGF-1"],
        ["PEG-MGF (PEGylated)", "~3 days", "SC", "PEGylation dramatically extends t½ vs. ~minutes for native MGF"],
        ["AOD-9604 (HGH fragment)", "~1–2 hours", "SC", "Lipolysis-selective fragment"],
      ],
    },
    {
      type: "heading",
      text: "Longevity and Mitochondrial Peptides",
    },
    {
      type: "table",
      headers: ["Peptide", "Approximate Half-Life", "Route", "Dosing Frequency"],
      rows: [
        ["Epithalon (Epitalon)", "~20–30 min (plasma)", "SC/IV", "Typically used in 10-day cycles, 1–2× daily"],
        ["NAD+ (direct IV)", "~1–2 min (plasma clearance)", "IV", "Slow IV infusion (2–4 hours) for clinical use"],
        ["MOTS-c", "~1.5 hours (mouse plasma)", "SC/IP", "Daily or every-other-day dosing in rodent studies"],
        ["SS-31 (Elamipretide)", "~2 hours (plasma)", "SC/IP", "Daily SC in chronic protocols; high mitochondrial retention"],
        ["Humanin", "~3–4 hours", "SC/IP", "Daily dosing in rodent aging studies"],
        ["Klotho (peptide fragments)", "Variable (hours)", "IV/SC", "Study-dependent; native protein has longer t½"],
      ],
    },
    {
      type: "heading",
      text: "Nootropic and Neuropeptides",
    },
    {
      type: "table",
      headers: ["Peptide", "Approximate Half-Life", "Route", "Notes"],
      rows: [
        ["Semax", "~20–30 min (plasma)", "Intranasal/SC", "Rapid brain uptake via IN route; 2× daily common"],
        ["Selank", "~3–5 min (plasma, rat)", "Intranasal/SC", "Rapid degradation; intranasal preferred for CNS access"],
        ["N-Acetyl Semax Amidate", "Longer than Semax (DPP-4 resistance)", "Intranasal", "Single daily dose may suffice"],
        ["Dihexa", "~4 hours", "Oral/SC", "HGF mimetic; crosses BBB; oral bioavailability studied"],
        ["Noopept", "~5–10 min", "Oral/sublingual", "Prodrug — metabolized to cycloprolylglycine"],
        ["DSIP (Delta Sleep-Inducing Peptide)", "~10–20 min (plasma)", "SC/IV", "Pre-sleep administration; rapid CNS action"],
        ["Oxytocin", "~1–2 min (IV)", "Intranasal/SC", "Intranasal: central effects at 10–40 IU"],
      ],
    },
    {
      type: "heading",
      text: "Immune Peptides",
    },
    {
      type: "table",
      headers: ["Peptide", "Approximate Half-Life", "Route", "Notes"],
      rows: [
        ["Thymosin Alpha-1 (TA-1)", "~2 hours", "SC/IM", "Approved as Zadaxin; typical protocol: 2× weekly"],
        ["LL-37", "~30–60 min (plasma)", "SC/topical", "Rapid degradation; topical for wound healing"],
        ["KPV (Lys-Pro-Val)", "~15–30 min", "Oral/SC", "Oral bioavailability studied for IBD models"],
        ["Thymalin", "~1–2 hours", "SC/IM", "Khavinson peptide; daily × 10 days typical cycle"],
        ["BPC-157 (systemic)", "~4 hours", "SC/IP/oral", "Broad tissue distribution"],
        ["PT-141 (Bremelanotide)", "~2.7 hours", "SC/intranasal", "As-needed dosing; avoid >1 dose/24 hours"],
      ],
    },
    {
      type: "heading",
      text: "Half-Life Engineering Strategies",
    },
    {
      type: "paragraph",
      text: "Peptide chemists use several approaches to extend half-life beyond the native sequence. Understanding these helps researchers select between short-acting and long-acting forms:",
    },
    {
      type: "list",
      items: [
        "Fatty acid conjugation (acylation): Used in liraglutide (C16) and semaglutide (C18-FA via linker) — promotes albumin binding, slowing renal filtration and proteolysis",
        "D-amino acid substitution: Replacing L-amino acids with D-stereoisomers (e.g., D-Arg in SS-31, Selank) confers resistance to protease degradation",
        "PEGylation: Attachment of polyethylene glycol chains increases hydrodynamic radius, reducing renal clearance (e.g., PEG-MGF has ~1000× longer t½ than MGF)",
        "Cyclization: Disulfide bonds or head-to-tail cyclization constrain conformation and reduce proteolytic access (e.g., cyclic PT-141 vs. linear analogs)",
        "C-terminal amidation: Protects the C-terminus from carboxypeptidases; used in many research peptides",
        "DAC (Drug Affinity Complex) in CJC-1295 DAC: Lysine-biotin moiety binds albumin in vivo, extending t½ from ~30 min to ~7 days",
      ],
    },
    {
      type: "heading",
      text: "Practical Dosing Protocol Design",
    },
    {
      type: "paragraph",
      text: "When designing dosing protocols, researchers should aim to maintain plasma concentrations above the effective threshold (EC50) for the desired biological response. For peptides with short half-lives (< 2 hours), this typically means 2–3 administrations per day in rodent studies, spaced at intervals of 4–8 hours. For medium half-life peptides (2–12 hours), once to twice daily dosing is appropriate. For long-acting analogs (> 24 hours), weekly or bi-weekly dosing provides steady-state exposure.",
    },
    {
      type: "paragraph",
      text: "Important caveat: plasma half-life does not always reflect tissue half-life. BPC-157 has a relatively short plasma t½ (~4 hours in rat plasma) but appears to accumulate in injured tissue and exert prolonged effects. Similarly, SS-31 concentrates in mitochondria-rich tissues for extended periods despite rapid plasma clearance. Researchers should consider measuring tissue concentrations and downstream biomarkers rather than relying solely on plasma pharmacokinetics when interpreting dose-response data.",
    },
    {
      type: "callout",
      text: "Note on Species Differences: Half-life values vary significantly between species due to differences in plasma protease activity, renal clearance rates, and tissue distribution. Mouse/rat plasma t½ values are typically 2–5× shorter than equivalent values in humans for most peptides. Clinical dose extrapolation from animal data requires pharmacokinetic scaling and should not be performed without proper PK modeling.",
    },
    {
      type: "disclaimer",
      text: "This guide is for informational and educational purposes for researchers. All half-life values represent approximations from published literature and may vary with route, species, formulation, and experimental conditions. This information is not intended as medical advice.",
    },
  ],
};
