import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "peptide-dosing-frequency-half-life-research-guide",
  title: "Peptide Dosing Frequency and Half-Life: A Researcher's Reference Guide",
  description: "A structured reference guide on peptide half-lives and how they govern dosing frequency, concentration timing, and experimental design — covering GH secretagogues, GLP-1 analogs, repair peptides, and immunomodulators.",
  category: "Research Fundamentals",
  readMinutes: 9,
  publishedAt: "2026-06-15",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Peptide half-life is among the most important pharmacokinetic parameters governing experimental design. It determines dosing frequency, trough-to-peak concentration ratios, steady-state timing, and the relationship between administration schedule and biological endpoints measured at sacrifice. Despite this, many research protocols treat dosing frequency as a secondary variable, often defaulting to daily or twice-daily dosing without accounting for actual half-life.",
    },
    {
      type: "paragraph",
      text: "This guide provides a working reference for half-life data across major research peptide classes, with corresponding implications for study design. Where human PK data is unavailable, preclinical estimates are provided with appropriate caveats.",
    },
    {
      type: "heading",
      text: "Why Half-Life Governs Dosing Frequency",
    },
    {
      type: "paragraph",
      text: "The elimination half-life (t½) is the time required for plasma concentration of a compound to decrease by 50% following peak. After approximately 5 half-lives, a compound is effectively cleared from circulation (~97% eliminated). Conversely, after 5 half-lives of repeated dosing at a fixed interval, a compound reaches steady-state plasma concentration.",
    },
    {
      type: "paragraph",
      text: "For research purposes, this has two critical implications. First, if a researcher doses every 24 hours but the peptide has a 2-hour half-life, most dosing intervals are spent with near-zero plasma levels — meaning biological endpoints measured 12–20 hours after dosing reflect the absence of drug rather than its presence. Second, if measuring cumulative effects (receptor downregulation, structural tissue changes, metabolic adaptation), the area under the curve (AUC) over time matters more than peak concentration, and dosing schedule profoundly affects AUC.",
    },
    {
      type: "heading",
      text: "Half-Life Reference by Peptide Class",
    },
    {
      type: "subheading",
      text: "Growth Hormone Secretagogues (Short Half-Life)",
    },
    {
      type: "paragraph",
      text: "Most native GHSs have very short circulating half-lives driven by rapid enzymatic degradation, primarily by dipeptidyl peptidase-4 (DPP-4) and neprilysin. This is the same reason GLP-1 itself was pharmacologically modified (via fatty acid conjugation) to create semaglutide.",
    },
    {
      type: "table",
      headers: ["Peptide", "Estimated Half-Life", "Notes"],
      rows: [
        ["GHRP-2 (Pralmorelin)", "15–30 min", "Subcutaneous in rodents; rapid DPP-4 cleavage"],
        ["GHRP-6", "15–25 min", "Similar to GHRP-2; orexigenic effect short-lived"],
        ["Ipamorelin", "~2 hours", "More DPP-4 resistant than GHRP-2"],
        ["Hexarelin", "~1–2 hours", "Longer-acting than GHRP-2 due to D-amino acid substitutions"],
        ["CJC-1295 (no DAC)", "~30 min", "Native GHRH analog; rapid clearance"],
        ["CJC-1295 (with DAC)", "~6–8 days", "DAC enables albumin binding; vastly extended t½"],
        ["Sermorelin", "~10–20 min", "First 29 aa of GHRH; rapid degradation"],
        ["Tesamorelin", "~26–38 min", "Slightly more stable than sermorelin"],
        ["MK-677 (Ibutamoren)", "~4–6 hours (rodent)", "Oral GHS; non-peptide molecule — more stable"],
      ],
    },
    {
      type: "paragraph",
      text: "Design implication: For GH pulse studies, dosing 15–30 minutes before blood collection maximizes observed GH spike. For sustained GH axis stimulation studies, consider combining a short-acting (Ipamorelin) with a long-acting GHRH analog (CJC-1295 w/DAC) to sustain the somatotropic signal, as is commonly done in preclinical combination studies.",
    },
    {
      type: "subheading",
      text: "GLP-1 Receptor Agonists (Variable Half-Life)",
    },
    {
      type: "table",
      headers: ["Peptide", "Half-Life (Human)", "Half-Life (Rodent)", "Dosing Frequency"],
      rows: [
        ["Native GLP-1", "~1–2 min (IV)", "~1–2 min", "Continuous infusion only"],
        ["Exenatide (Byetta)", "~2.4 hours", "~1–2 hours", "BID human; daily or BID rodent"],
        ["Liraglutide", "~13 hours", "~6–8 hours", "Daily human; daily rodent"],
        ["Semaglutide (SC)", "~165–184 hours", "~12–24 hours", "Weekly human; every 3–7 days rodent"],
        ["Tirzepatide", "~116–128 hours", "~12–20 hours", "Weekly human; every 3–5 days rodent"],
        ["Retatrutide", "~160–180 hours", "Estimated 12–20 hours", "Weekly human; estimated every 5–7 days rodent"],
      ],
    },
    {
      type: "paragraph",
      text: "Design implication: In rodent GLP-1 agonist studies, the human weekly dosing schedule does not translate. Weekly dosing of semaglutide in mice results in extended periods of subtherapeutic exposure. Most published rodent studies use every-3-day SC dosing for semaglutide. Researchers should confirm PK data specific to the rodent strain being used, as obesity, diabetes status, and renal function all influence GLP-1 analog clearance.",
    },
    {
      type: "subheading",
      text: "Tissue Repair and Cytoprotective Peptides",
    },
    {
      type: "table",
      headers: ["Peptide", "Estimated Half-Life", "Dosing Implication"],
      rows: [
        ["BPC-157", "~1–4 hours (IP, rodent)", "Daily dosing required; some protocols use BID"],
        ["TB-500 (Thymosin β4)", "~2–3 hours (estimates)", "Daily or every-other-day rodent dosing"],
        ["GHK-Cu", "Short (minutes to hours)", "Daily SC or topical; rapid renal clearance"],
        ["Epithalon (Epitalon)", "Short (~30–60 min)", "Daily injection protocols typical in studies"],
        ["KPV", "Very short (minutes)", "Daily IP in inflammation models"],
        ["AOD-9604", "~20–30 min (rodent)", "BID dosing in rodent metabolic studies"],
      ],
    },
    {
      type: "subheading",
      text: "Immunomodulatory Peptides",
    },
    {
      type: "table",
      headers: ["Peptide", "Estimated Half-Life", "Notes"],
      rows: [
        ["Thymosin Alpha-1", "~2 hours (human SC)", "Daily or every-other-day in immunology studies"],
        ["LL-37", "Short (enzymatic degradation)", "Local administration often preferred; systemic t½ limited"],
        ["Selank", "~10–30 min", "Intranasal route extends effective CNS exposure vs IV"],
        ["Semax", "~10–30 min", "Similar to Selank; rapid plasma clearance"],
      ],
    },
    {
      type: "subheading",
      text: "NAD+ and Precursors",
    },
    {
      type: "paragraph",
      text: "NAD+ itself has a circulating half-life of only 1–4 minutes when administered intravenously, as it is rapidly taken up by cells and converted. Steady-state intracellular NAD+ levels with IP or IV NAD+ administration peak within 1–4 hours and return to baseline within 24 hours in most rodent models. This supports daily dosing in NAD+ supplementation research rather than the once-weekly schedules sometimes used clinically.",
    },
    {
      type: "heading",
      text: "Engineering Stable Peptides: Structure Modifications That Extend Half-Life",
    },
    {
      type: "paragraph",
      text: "Understanding why some peptides last longer than others informs both experimental design and interpretation of published literature. Key structural modifications used by pharmaceutical researchers to extend half-life include:",
    },
    {
      type: "list",
      items: [
        "D-amino acid substitutions: Replacing L-amino acids (natural) with D-amino acids at key positions blocks enzymatic cleavage sites. Most GHSs use D-amino acid substitutions to resist DPP-4.",
        "Fatty acid conjugation (acylation): Enables reversible albumin binding, dramatically extending circulating half-life. Used in semaglutide (C18 fatty diacid chain on Lys34) and liraglutide.",
        "PEGylation: Attaching polyethylene glycol chains increases hydrodynamic radius, slowing renal filtration. Less common in research peptides but used in some therapeutic constructs.",
        "Cyclization: Cyclic peptides are generally more resistant to exopeptidases (which require free termini) and often more proteolytically stable overall.",
        "DAC (Drug Affinity Complex): The reactive Michael acceptor maleimide group in CJC-1295 w/DAC enables covalent binding to plasma proteins (primarily albumin), converting a 30-minute peptide into a days-long compound.",
      ],
    },
    {
      type: "heading",
      text: "Practical Protocol Design Principles",
    },
    {
      type: "paragraph",
      text: "For acute effect studies (measuring a peak biological response — e.g., GH pulse, acute mucosal protection), align sacrifice or sampling to the Tmax window. For most short-acting peptides, this is 15–45 minutes post-injection.",
    },
    {
      type: "paragraph",
      text: "For chronic effect studies (structural remodeling, metabolic adaptation, receptor regulation), define the dosing schedule to maintain biologically meaningful plasma levels throughout the study. A rule of thumb: dose at intervals ≤3× the half-life to avoid prolonged troughs. For a peptide with a 2-hour half-life, this means dosing every 6 hours maximum for sustained exposure.",
    },
    {
      type: "paragraph",
      text: "For combination studies involving peptides with dramatically different half-lives (e.g., BPC-157 at 1–2 hours + CJC-1295 w/DAC at 6–8 days), document each dosing event explicitly and note the expected plasma concentration profile of each compound at the time of endpoint measurement. This becomes essential for interpreting results and enabling replication.",
    },
    {
      type: "callout",
      text: "Practical check: Before finalizing any dosing protocol, ask: 'At the moment of sacrifice or measurement, what is the expected plasma concentration of each compound relative to its Cmax?' If the answer is 'near zero,' reconsider the dosing interval.",
    },
    {
      type: "disclaimer",
      text: "All compounds referenced in this article are intended for laboratory research use only. Half-life values cited are estimates from preclinical literature and may not reflect human pharmacokinetics. This content does not constitute medical advice.",
    },
  ],
};
