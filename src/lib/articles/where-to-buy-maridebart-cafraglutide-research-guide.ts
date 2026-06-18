import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "where-to-buy-maridebart-cafraglutide-research-guide",
  title: "Where to Buy Maridebart Cafraglutide (AMG 133): Research Sourcing Guide",
  description:
    "Maridebart cafraglutide (AMG 133) is Amgen's investigational GLP-1R agonist/GIPR antagonist bispecific — the first GIPR antagonist approach in obesity research. This guide explains the compound class, what GLP-1 axis research tools are available today, and COA standards for researchers sourcing GLP-1/GIP pathway compounds.",
  category: "Compound Profiles",
  readMinutes: 13,
  publishedAt: "2026-06-18",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Maridebart cafraglutide, known in clinical development as AMG 133, is Amgen's investigational bispecific molecule combining GLP-1 receptor (GLP-1R) agonism with GIP receptor (GIPR) antagonism — a mechanistically distinct approach from all other approved and late-stage anti-obesity agents. While tirzepatide (Mounjaro/Zepbound) co-activates both GLP-1R and GIPR, maridebart cafraglutide antagonizes GIPR while simultaneously activating GLP-1R, making it the first GIPR antagonist approach tested clinically for obesity.",
    },
    {
      type: "paragraph",
      text: "Researchers searching for maridebart cafraglutide should understand upfront: AMG 133 is a clinical-stage bispecific antibody-peptide conjugate. It cannot be synthesized by solid-phase peptide synthesis (SPPS) vendors, is not commercially available for non-clinical purchase, and will not be offered by peptide research suppliers. This guide explains why — and what GLP-1/GIP axis research tools ARE available for researchers studying this pathway.",
    },
    {
      type: "heading",
      text: "What Is Maridebart Cafraglutide? Molecular Architecture",
    },
    {
      type: "paragraph",
      text: "AMG 133 is a peptibody — a fusion construct combining a human IgG2 antibody (targeting GIPR as an antagonist) with two GLP-1 peptide agonist sequences attached via engineered linkers. This architecture gives it dual pharmacology: the antibody Fc domain antagonizes GIPR (blocking the endogenous GIP signal), while the attached GLP-1 peptide sequences activate GLP-1R.",
    },
    {
      type: "paragraph",
      text: "This hybrid biologic/peptide structure means AMG 133 is not a commodity small molecule or simple peptide. It requires mammalian cell expression systems (CHO or HEK293 cells), complex folding and conjugation steps, and biologic-grade purification. No SPPS peptide vendor can synthesize it — and any supplier claiming to sell 'maridebart cafraglutide' or 'AMG 133' is either mislabeling an unrelated compound or selling a fraudulent product.",
    },
    {
      type: "heading",
      text: "The GIPR Antagonism vs. Agonism Debate: Why It Matters",
    },
    {
      type: "paragraph",
      text: "Understanding AMG 133 requires understanding the GIP receptor controversy — one of the most actively debated mechanistic questions in metabolic peptide research:",
    },
    {
      type: "list",
      items: [
        "Tirzepatide hypothesis: GIPR co-agonism contributes to superior weight loss by enhancing GLP-1R signaling synergy, reducing nausea, and directly acting on adipose tissue",
        "AMG 133 hypothesis: GIPR antagonism reduces GIP-mediated counter-regulatory effects, shifting the metabolic setpoint more aggressively toward fat oxidation",
        "Both approaches show superior weight loss vs. GLP-1R agonism alone — suggesting GIP pathway modulation matters, but the optimal direction remains scientifically unsettled",
        "Amgen Phase Ib data: once-monthly subcutaneous dosing; 14.5% weight loss at 12 weeks in dose-finding cohorts; Phase II ongoing as of 2025",
        "The antibody-mediated GIPR antagonism is long-acting (monthly dosing possible) compared to GLP-1 peptides requiring weekly injection",
      ],
    },
    {
      type: "heading",
      text: "GLP-1/GIP Axis Research Tools: What Researchers Can Actually Use",
    },
    {
      type: "paragraph",
      text: "While maridebart cafraglutide itself is unavailable for non-clinical research purchase, the GLP-1R and GIPR axis is extensively supported by commodity research peptides and proteins:",
    },
    {
      type: "subheading",
      text: "GLP-1 Receptor Agonists (Available as Research Peptides)",
    },
    {
      type: "list",
      items: [
        "Native GLP-1(7-36) amide — endogenous form, rapid clearance (t½ ~2 min in vivo), used in short-term receptor binding and cAMP assays",
        "Exendin-4 (Exenatide) — Gila monster venom-derived GLP-1R agonist with 39 aa sequence, DPP-IV resistant, t½ ~2-4 hours, classic research peptide for GLP-1R studies",
        "Semaglutide free acid — the defatty-acid backbone without C18 albumin binder; suitable for GLP-1R binding assays",
        "Liraglutide backbone — GLP-1 analog with C16 fatty acid, widely used in DIO mouse studies",
      ],
    },
    {
      type: "subheading",
      text: "GIP Receptor Ligands (Available for Research)",
    },
    {
      type: "list",
      items: [
        "GIP(1-42) human — endogenous full-length GIP, GIPR agonist, used in insulin secretion assays and GIPR binding studies",
        "GIP(1-30) amide — truncated form with preserved GIPR binding, reduced incretin potency",
        "[D-Ala²]GIP — DPP-IV resistant GIP analog, widely used to study chronic GIPR signaling in vivo",
        "GIP(3-42) — truncated DPP-IV cleavage product; partial GIPR antagonist in some assay systems; used to study GIPR antagonism mechanisms",
        "Recombinant GIPR protein — for binding competition assays, surface plasmon resonance, and GIPR structure studies",
      ],
    },
    {
      type: "subheading",
      text: "GIPR Antagonist Research Tools",
    },
    {
      type: "list",
      items: [
        "GIP(7-30)NH₂ — truncated N-terminally deleted GIPR antagonist peptide; used in rodent studies of GIPR blockade and GIP counter-regulatory effects",
        "Anti-GIPR antibody (clone RG7697 / NNC0640 analog) — research-grade monoclonal GIPR antagonists available from R&D Systems and similar suppliers for in vitro GIPR blockade assays",
        "Small molecule GIPR antagonists (NBI-12 analogs) — emerging class, some available as tool compounds for research",
      ],
    },
    {
      type: "heading",
      text: "Preclinical Study Design: Modeling the AMG 133 Mechanism",
    },
    {
      type: "paragraph",
      text: "Researchers interested in the GIPR antagonism + GLP-1R agonism mechanism can model AMG 133's dual pharmacology in standard DIO mouse models using available compounds:",
    },
    {
      type: "list",
      items: [
        "GLP-1R agonism arm: Exendin-4 (25 nmol/kg IP, twice daily) or liraglutide (200 µg/kg SC, once daily) in DIO C57BL/6J males",
        "GIPR antagonism arm: GIP(7-30)NH₂ (300 nmol/kg IP, twice daily) — blocks GIP-induced insulin secretion and adipose GIPR signaling",
        "Combination arm: GLP-1R agonist + GIPR antagonist co-administration to recapitulate AMG 133 dual pharmacology in rodents",
        "Body composition endpoint: DEXA or EchoMRI at baseline, week 4, and week 8 — key outcome is fat mass reduction and lean mass preservation ratio",
        "Energy expenditure arm: CLAMS indirect calorimetry with RER measurement across light/dark cycles",
        "Biomarker panel: fasting insulin, HOMA-IR, GIP, GLP-1, leptin, adiponectin, total cholesterol, triglycerides",
      ],
    },
    {
      type: "heading",
      text: "In Vitro GIPR Antagonism Assays",
    },
    {
      type: "paragraph",
      text: "For receptor-level study of GIPR antagonism without in vivo work, researchers can use:",
    },
    {
      type: "list",
      items: [
        "HTRF cAMP assay (Cisbio) in GIPR-overexpressing CHO cells — measure antagonist IC₅₀ against GIP(1-42) EC₅₀ stimulation",
        "β-arrestin recruitment BRET assay — measures GIPR internalization pathway separately from Gs signaling",
        "GIPR-expressing MIN6 cells (mouse pancreatic beta cell line) — test effects on glucose-stimulated insulin secretion with GIP and GIP antagonists",
        "GLP-1R/GIPR dual transfected HEK293 cells — test combination GLP-1R agonist + GIPR antagonist effects on downstream cAMP and ERK1/2 phosphorylation",
      ],
    },
    {
      type: "heading",
      text: "COA Standards for GLP-1/GIP Axis Research Peptides",
    },
    {
      type: "paragraph",
      text: "When sourcing GLP-1R or GIPR pathway research peptides, researchers should require the following COA documentation:",
    },
    {
      type: "list",
      items: [
        "HPLC purity ≥98% by RP-HPLC (C18 column, UV 215 nm or 220 nm) — essential for all receptor agonist/antagonist peptides where impurities can confound dose-response curves",
        "Mass spectrometry confirmation — HRMS or ESI-MS with measured [M+H]⁺ within 5 ppm of theoretical MW",
        "Amino acid analysis (AAA) — confirms correct sequence identity beyond mass alone, particularly important for GIP analogs with similar masses",
        "Endotoxin (LAL) ≤1.0 EU/mg — critical for in vivo rodent studies; GIP stimulates immune cell GIP receptors and endotoxin contamination can confound metabolic phenotypes",
        "Residual solvents — TFA content from HPLC purification; high TFA causes cytotoxicity in cell assays; verify TFA counter-ion exchange to acetate for in vivo use",
        "Sterility certificate for injectable preparations",
      ],
    },
    {
      type: "heading",
      text: "Red Flags: Spotting Fraudulent AMG 133 / Maridebart Claims",
    },
    {
      type: "paragraph",
      text: "Since maridebart cafraglutide generates search interest and has no available commodity version, some vendors may attempt to exploit the name. Watch for:",
    },
    {
      type: "list",
      items: [
        "Any vendor listing 'maridebart cafraglutide' or 'AMG 133' as a lyophilized peptide vial for sale — this is impossible given the bispecific antibody-peptide architecture",
        "Claimed SPPS synthesis routes for a molecule requiring mammalian cell expression — a scientific red flag",
        "Products listed without valid HPLC traces and MS data — do not purchase without full COA documentation",
        "Substitution fraud: selling native GLP-1 or exendin-4 mislabeled as AMG 133 — always verify independently with mass spec",
        "Offshore vendors with no quality documentation claiming proprietary 'AMG 133 analog' — no analog exists that replicates the full bispecific architecture",
      ],
    },
    {
      type: "heading",
      text: "The GLP-1/GIP Dual Modulation Research Landscape (2025–2026)",
    },
    {
      type: "paragraph",
      text: "The competitive landscape for GLP-1/GIP dual modulation is expanding rapidly:",
    },
    {
      type: "list",
      items: [
        "Tirzepatide (LY3298176) — GLP-1R/GIPR co-agonist; FDA-approved; 22.5% weight loss at 72 weeks (SURMOUNT-1); GIPR agonism mechanism",
        "Maridebart cafraglutide (AMG 133) — GLP-1R agonist/GIPR antagonist bispecific; Phase II; monthly dosing; GIPR antagonism mechanism",
        "NN9423 (petrelintide/GIP co-ago) — Novo Nordisk's dual mechanism including GIP component alongside cagrilintide",
        "Retatrutide (LY3437943) — triple agonist (GLP-1R/GIPR/GCGR); 24.2% at 48 weeks; agonizes GIPR rather than antagonizing",
        "The divergent GIPR direction in AMG 133 vs. tirzepatide/retatrutide may resolve in Phase III head-to-head data — making the GIP receptor question the defining mechanistic debate of 2025–2026 metabolic research",
      ],
    },
    {
      type: "heading",
      text: "Summary: Sourcing Guidance for Researchers",
    },
    {
      type: "paragraph",
      text: "Maridebart cafraglutide (AMG 133) is not purchasable for non-clinical research — it is a clinical-stage bispecific antibody-peptide construct requiring biologic manufacturing infrastructure. Researchers studying the GLP-1R + GIPR antagonism axis can use GIP(7-30)NH₂ (GIPR antagonist peptide), exendin-4 or liraglutide backbone (GLP-1R agonists), and anti-GIPR monoclonal antibodies available from research protein suppliers for in vitro and in vivo pathway studies.",
    },
    {
      type: "paragraph",
      text: "For COA requirements, prioritize HPLC ≥98%, ESI-MS confirmation, AAA identity check, LAL endotoxin ≤1.0 EU/mg, and acetate counter-ion (not TFA) for in vivo injectable GLP-1/GIP peptides. Verify vendors have real COA documentation — not spec sheets with fabricated data — before purchasing any GLP-1 axis research compound.",
    },
  ],
};
