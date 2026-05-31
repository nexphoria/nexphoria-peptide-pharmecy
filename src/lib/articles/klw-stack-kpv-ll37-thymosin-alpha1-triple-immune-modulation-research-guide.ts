import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "klw-stack-kpv-ll37-thymosin-alpha1-triple-immune-modulation-research-guide",
  title: "KLW Stack: KPV + LL-37 + Thymosin Alpha-1 Triple Immune Modulation Research Guide",
  description:
    "Comprehensive research guide to the KLW triple immune stack covering three orthogonal immune pathways — NF-κB suppression (KPV), innate antimicrobial defense (LL-37), and adaptive T-cell activation (Thymosin Alpha-1). Protocol design, dosing, endpoints, and synergy rationale.",
  category: "Immunology",
  readMinutes: 11,
  publishedAt: "2026-05-31",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "The KLW immune stack combines three peptides — KPV (Lys-Pro-Val tripeptide), LL-37 (human cathelicidin), and Thymosin Alpha-1 (Tα1, 28-amino-acid thymic peptide) — that operate through mechanistically orthogonal immune pathways with minimal receptor overlap. KPV suppresses NF-κB-driven inflammatory cytokines via MC1R/MC3R signaling, LL-37 provides direct antimicrobial defense plus FPR2-mediated immunomodulation, and Thymosin Alpha-1 bridges innate and adaptive immunity through TLR activation and T-cell maturation. This guide presents the rationale for combining all three, the published data supporting each compound, practical protocol design considerations, and endpoint selection for immune-focused research.",
    },
    {
      type: "heading",
      text: "Why Three Compounds? The Immune Cascade Has Three Layers",
    },
    {
      type: "paragraph",
      text: "The immune response operates across three sequential layers: inflammatory signaling (cytokine cascades controlled by NF-κB), innate defense (antimicrobial peptides and pattern recognition), and adaptive immunity (T-cell activation, antigen presentation, immunological memory). Single-target immune interventions often fail because suppressing one layer creates vulnerability in another — for example, broad anti-inflammatory therapy reduces cytokine storm but compromises antimicrobial defense, increasing infection risk.",
    },
    {
      type: "paragraph",
      text: "The KLW stack addresses this problem through orthogonal targeting: KPV modulates MC1R and MC3R melanocortin receptors to suppress NF-κB nuclear translocation without touching MC2R (ACTH/cortisol axis) or MC4R (appetite regulation). LL-37 operates through dual mechanisms — direct membrane disruption of gram-positive and gram-negative bacteria plus FPR2 (formyl peptide receptor 2) signaling that drives wound healing and M2 macrophage polarization. Thymosin Alpha-1 activates TLR2, TLR4, and TLR9 on dendritic cells, upregulating MHC-I presentation and driving CD4/CD8 T-cell thymic maturation. There is no receptor competition between the three compounds.",
    },
    {
      type: "heading",
      text: "KPV: NF-κB Suppression Without Immunosuppression",
    },
    {
      type: "paragraph",
      text: "KPV (Lys-Pro-Val, CAS 918659-21-1, MW 341.41 g/mol) is the C-terminal tripeptide of alpha-MSH (melanocyte-stimulating hormone), produced from the POMC→ACTH→α-MSH→KPV precursor chain. Unlike full-length alpha-MSH, which activates all five melanocortin receptors (MC1R-MC5R), KPV selectively binds MC1R and MC3R with minimal MC2R or MC4R activity. This selectivity is critical: MC2R activation drives cortisol release (immunosuppressive glucocorticoid side effects), while MC4R regulates appetite (anorectic effects). KPV avoids both.",
    },
    {
      type: "paragraph",
      text: "KPV's mechanism centers on NF-κB pathway inhibition. Mandal et al. (2009, Journal of Immunology) demonstrated that KPV stabilizes IκBα (inhibitor of kappa B alpha), preventing its phosphorylation and degradation. Without IκBα degradation, the p65 subunit of NF-κB cannot translocate to the nucleus, blocking transcription of pro-inflammatory cytokine genes. In Dalmasso et al.'s DSS colitis model (2008, American Journal of Physiology), oral KPV (100 mcg/kg/day) reduced IL-6 by 40-65% and TNF-α by 35-55% without suppressing IL-10 (anti-inflammatory cytokine), demonstrating selective cytokine modulation rather than blanket immunosuppression.",
    },
    {
      type: "subheading",
      text: "KPV's Oral Stability Advantage",
    },
    {
      type: "paragraph",
      text: "Unlike most peptides, KPV demonstrates remarkable oral bioavailability. The tripeptide's small size and lack of proteolytic cleavage sites in the GI tract allow intact absorption. Dalmasso's DSS colitis protocol used oral gavage (100 mcg/kg/day), and TNBS colitis models show similar efficacy with oral dosing. For systemic protocols, subcutaneous administration (100-500 mcg/kg/day) is also well-documented. This dual-route flexibility makes KPV particularly suitable for GI-specific immune research (IBD, colitis) where local mucosal exposure is desirable.",
    },
    {
      type: "heading",
      text: "LL-37: Antimicrobial Defense Plus Immunomodulatory Signaling",
    },
    {
      type: "paragraph",
      text: "LL-37 (leucine-leucine-37, CAS 154947-66-7, MW 4493.34 g/mol) is the 37-amino-acid active fragment of the human cathelicidin antimicrobial peptide hCAP18, encoded by the CAMP gene. LL-37 is constitutively expressed in neutrophils, mast cells, and epithelial cells, and its expression is upregulated by vitamin D (1,25(OH)2D3 via VDRE in the CAMP promoter). LL-37 operates through two distinct mechanisms: direct antimicrobial activity via membrane disruption, and immunomodulatory signaling via FPR2 receptor activation.",
    },
    {
      type: "paragraph",
      text: "The antimicrobial mechanism involves amphipathic alpha-helix formation that inserts into bacterial membranes, disrupting lipid bilayers of both gram-positive (S. aureus, S. epidermidis) and gram-negative (E. coli, P. aeruginosa) bacteria. LL-37 also demonstrates biofilm disruption capacity, penetrating the extracellular polysaccharide matrix that protects biofilm-embedded bacteria. This is clinically relevant for chronic wound infections where biofilm formation (P. aeruginosa, S. epidermidis) prevents standard antibiotic penetration.",
    },
    {
      type: "paragraph",
      text: "The immunomodulatory arm operates through FPR2. Heilborn et al. (2003, Journal of Biological Chemistry) demonstrated that LL-37 activates EGFR (epidermal growth factor receptor) transactivation through FPR2, driving keratinocyte migration and wound closure. LL-37 also polarizes macrophages toward the M2 phenotype (anti-inflammatory, wound-healing) rather than M1 (pro-inflammatory), creating a permissive environment for tissue repair. This dual antimicrobial + wound-healing profile explains LL-37's consistent efficacy in infected wound models.",
    },
    {
      type: "subheading",
      text: "LL-37 Aggregation and Handling",
    },
    {
      type: "paragraph",
      text: "LL-37 exhibits concentration-dependent aggregation at concentrations exceeding 50 μM, forming oligomers that reduce bioactivity. Reconstitute LL-37 in PBS pH 7.4 at concentrations ≤25 μM for working solutions. Critical: use polypropylene tubes exclusively — LL-37 binds irreversibly to glass and many plastics. Never use glass vials or standard polystyrene tubes for LL-37 storage or dilution. Store reconstituted LL-37 at -20°C in polypropylene cryovials; avoid repeated freeze-thaw cycles.",
    },
    {
      type: "callout",
      text: "LL-37 handling is peptide-critical: polypropylene tubes only (never glass), PBS pH 7.4 reconstitution, ≤25 μM working concentration to prevent aggregation. Store at -20°C in single-use aliquots to avoid freeze-thaw loss.",
    },
    {
      type: "heading",
      text: "Thymosin Alpha-1: Innate→Adaptive Immune Bridge",
    },
    {
      type: "paragraph",
      text: "Thymosin Alpha-1 (Tα1, also known as Thymalfasin or ZADAXIN in clinical contexts, CAS 62304-98-7, MW 3108.28 g/mol) is a 28-amino-acid N-terminal acetylated peptide derived from prothymosin-α. Tα1 was originally isolated from thymic extracts and functions as a central regulator of T-cell maturation and dendritic cell activation. Its mechanism operates at the innate-adaptive interface: Tα1 activates TLR2, TLR4, and TLR9 on dendritic cells, upregulating MHC-I antigen presentation and CD80/CD86 costimulatory molecules, which in turn drive CD4 and CD8 T-cell activation.",
    },
    {
      type: "paragraph",
      text: "Tα1 drives Th1 polarization, upregulating IFN-γ (interferon-gamma) and IL-12 while maintaining normal IL-10 levels. This Th1 skew enhances cellular immunity (critical for viral clearance and intracellular pathogen control) without the Th2 suppression that would compromise humoral immunity. Tα1 also activates NK (natural killer) cells, enhancing cytotoxic function against virus-infected and tumor cells. The mechanism involves upregulation of perforin and granzyme B expression.",
    },
    {
      type: "paragraph",
      text: "Clinical data supports Tα1's efficacy in immune-deficient states: Li et al. (2017) meta-analysis demonstrated improved HBeAg seroconversion in chronic HBV patients receiving Tα1 plus interferon versus interferon alone. Liang et al. (2008) showed improved survival in HCC patients receiving TACE plus Tα1 (1.6 mg SC twice weekly). COVID-19 data from Zhao et al. (2020, Clinical Infectious Diseases) demonstrated reduced mortality and improved lymphocyte recovery in severe COVID-19 patients receiving Tα1 as adjunctive therapy.",
    },
    {
      type: "subheading",
      text: "Thymosin Alpha-1 Protocol Design",
    },
    {
      type: "paragraph",
      text: "Clinical ZADAXIN protocols use 1.6 mg SC twice weekly (Monday/Thursday or similar spacing). Preclinical rodent protocols typically use 100-500 mcg/kg SC twice weekly or 50-200 mcg/kg daily. Reconstitute Tα1 in sterile water or sterile saline (both are compatible); use within 48 hours of reconstitution or freeze aliquots at -80°C. Unlike some peptides, Tα1 tolerates BAC water, but sterile water is preferred for long-term storage to avoid benzyl alcohol oxidation over time.",
    },
    {
      type: "heading",
      text: "Three-Layer Synergy Architecture: Sequential Immune Cascade",
    },
    {
      type: "paragraph",
      text: "The KLW stack was designed around sequential synergy — each compound creates the optimal environment for the next layer to function:",
    },
    {
      type: "list",
      items: [
        "Layer 1 — Inflammation Control (KPV): KPV suppresses NF-κB-driven cytokine storm (IL-6, TNF-α reduction), creating a less hostile inflammatory environment. This allows LL-37's antimicrobial activity to proceed without being overwhelmed by excessive inflammation-driven tissue damage. Cytokine storm impairs antimicrobial peptide efficacy by disrupting pH, recruiting excessive neutrophils that cause collateral damage, and creating hypoxic zones where oxidative killing mechanisms fail.",
        "Layer 2 — Innate Defense (LL-37): LL-37 clears microbial burden (bacteria, biofilms) that would otherwise overwhelm the adaptive immune response Tα1 is building. High bacterial loads consume antigen-presenting capacity (DCs focus on innate defense rather than T-cell priming) and produce immunosuppressive metabolites (bacterial-derived butyrate, indole derivatives). By reducing microbial burden, LL-37 creates the 'clean slate' needed for Tα1 to drive productive adaptive immunity.",
        "Layer 3 — Adaptive Competence (Tα1): Thymosin Alpha-1 expands T-cell populations (CD4/CD8 thymic maturation), upregulates DC antigen presentation (MHC-I, CD80/CD86), and drives Th1 polarization (IFN-γ, IL-12). This provides lasting immunological memory and antigen-specific killing capacity that neither KPV nor LL-37 provide. The result is not just suppression (KPV) or clearance (LL-37), but immune competence.",
      ],
    },
    {
      type: "paragraph",
      text: "The three layers work sequentially: KPV calms the inflammatory storm → LL-37 clears the microbial burden → Tα1 builds adaptive immune competence. This sequential architecture explains why the combination may outperform any single compound in immune-deficient or immune-exhausted states (chronic infection, post-surgical recovery, IBD flares).",
    },
    {
      type: "heading",
      text: "Protocol Design: Dosing, Routes, and Timing",
    },
    {
      type: "paragraph",
      text: "The three compounds in the KLW stack have different optimal dosing routes and administration frequencies, which must be coordinated in a research protocol:",
    },
    {
      type: "table",
      headers: ["Parameter", "KPV", "LL-37", "Thymosin Alpha-1"],
      rows: [
        ["Administration", "Oral or SC daily", "Topical or SC", "SC twice weekly"],
        ["Dose (oral KPV)", "100 mcg/kg/day (Dalmasso)", "—", "—"],
        ["Dose (SC rodent)", "100-500 mcg/kg/day", "2-5 mg/kg SC", "100-500 mcg/kg twice weekly"],
        ["Dose (topical LL-37)", "—", "5-25 mcg/wound", "—"],
        ["Dose (human clinical)", "Not established", "Not established", "1.6 mg SC twice weekly (ZADAXIN)"],
        ["Reconstitution", "Sterile water or saline", "PBS pH 7.4 only", "Sterile water or saline"],
        ["Storage tube type", "Standard (glass or PP)", "Polypropylene ONLY", "Standard (glass or PP)"],
        ["Storage temp", "-20°C lyophilized; 2-8°C reconstituted", "-20°C aliquots; avoid freeze-thaw", "-20°C lyophilized; -80°C aliquots"],
        ["Aggregation risk", "None", "Yes (>50 μM)", "None"],
      ],
    },
    {
      type: "paragraph",
      text: "A typical 8-week immune modulation protocol would administer KPV daily (oral or SC), LL-37 SC 3-5x/week or topically to infection sites, and Tα1 SC twice weekly (e.g., Monday/Thursday). For GI-specific research (IBD models), oral KPV is preferred; for systemic immune protocols, SC KPV is recommended. Never pre-mix the three compounds — reconstitute and store each separately due to different pH optima and handling requirements.",
    },
    {
      type: "heading",
      text: "Endpoint Selection: 10 Endpoints Across 3 Immune Layers",
    },
    {
      type: "paragraph",
      text: "The KLW stack targets inflammatory signaling, innate defense, and adaptive immunity, requiring a multi-modal endpoint panel covering all three layers:",
    },
    {
      type: "table",
      headers: ["Endpoint", "Assay Method", "Primary Compound", "Timepoint"],
      rows: [
        ["NF-κB p65 translocation", "Immunofluorescence (nuclear/cytoplasmic ratio)", "KPV", "2h post-LPS challenge"],
        ["IL-6 (serum)", "ELISA", "KPV", "4h post-challenge, weekly"],
        ["TNF-α (serum)", "ELISA", "KPV", "4h post-challenge, weekly"],
        ["IL-10 (serum)", "ELISA (should NOT decrease)", "KPV", "4h post-challenge"],
        ["IFN-γ (serum)", "ELISA", "Tα1", "Weekly"],
        ["IL-12 (serum)", "ELISA", "Tα1", "Weekly"],
        ["Bacterial burden (CFU)", "CFU counts (tissue homogenate)", "LL-37", "24h, 48h, 72h post-infection"],
        ["MIC/MBC antimicrobial", "Broth microdilution (CLSI M07)", "LL-37", "In vitro pre-study"],
        ["CD4/CD8 T-cell subsets", "Flow cytometry (spleen, blood)", "Tα1", "Baseline, 4w, 8w"],
        ["Treg (CD4+CD25+FoxP3+)", "Flow cytometry", "All three", "Baseline, 4w, 8w"],
        ["NK cell activity", "Chromium release or calcein AM", "Tα1", "4w, 8w"],
        ["DC maturation markers", "Flow cytometry (CD80/CD86/MHC-II)", "Tα1", "4w, 8w"],
        ["Mucosal barrier (TEER)", "Transepithelial electrical resistance (Ussing)", "KPV + LL-37", "Terminal"],
        ["FD4 permeability", "FITC-dextran 4kDa flux assay", "KPV + LL-37", "Terminal"],
        ["Colonic histopathology", "H&E scoring (DAI, crypt depth)", "KPV", "Terminal (IBD models)"],
      ],
    },
    {
      type: "paragraph",
      text: "The Treg (regulatory T-cell) endpoint is particularly informative as a convergence metric — it reflects the balance between pro-inflammatory and regulatory immune responses that all three compounds influence. KPV's NF-κB suppression reduces the inflammatory drive that exhausts Tregs, LL-37's M2 macrophage polarization creates a Treg-permissive environment, and Tα1's DC maturation supports Treg differentiation. Measuring Tregs at multiple timepoints provides an integrated readout of immune balance.",
    },
    {
      type: "heading",
      text: "Control Design: Minimum 8-Group Full Factorial",
    },
    {
      type: "paragraph",
      text: "A rigorous KLW stack study requires careful control design to attribute effects to specific compounds and assess synergy. The ideal design is an 8-group full factorial:",
    },
    {
      type: "list",
      items: [
        "Group 1: Vehicle only (matched injections on all schedules)",
        "Group 2: KPV alone (to isolate NF-κB suppression effects)",
        "Group 3: LL-37 alone (to isolate antimicrobial + FPR2 effects)",
        "Group 4: Tα1 alone (to isolate T-cell/DC activation effects)",
        "Group 5: KPV + LL-37 (Layer 1 + Layer 2)",
        "Group 6: KPV + Tα1 (Layer 1 + Layer 3)",
        "Group 7: LL-37 + Tα1 (Layer 2 + Layer 3)",
        "Group 8: KPV + LL-37 + Tα1 (full KLW stack)",
      ],
    },
    {
      type: "paragraph",
      text: "This design allows determination of whether the three-compound stack produces synergistic effects (Group 8 > sum of Groups 2+3+4) or merely additive effects. Power analysis for cytokine endpoints: n=8-10/group to detect 30-40% differences with 80% power (assuming CV% ~30-40% typical for ELISA cytokine assays). Include mechanistic controls: MC1R antagonist AGRP or MSG (agouti-related peptide / Mahogany protein) to confirm KPV specificity, scrambled LL-37 peptide sequence to confirm sequence-dependent antimicrobial activity, and recombinant prothymosin-α (Tα1 parent molecule) to confirm Tα1-specific effects.",
    },
    {
      type: "heading",
      text: "Research Design Considerations",
    },
    {
      type: "list",
      items: [
        "Sequential vs Simultaneous Dosing: Should KPV be dosed 2-4 hours before LL-37 to establish NF-κB suppression first? Or simultaneous? Sequential dosing better mirrors the 'calming before clearing' rationale but adds protocol complexity. Simultaneous dosing is simpler for chronic protocols. For acute infection models, consider KPV pre-treatment (2-4h) before infection + LL-37.",
        "Oral vs Parenteral KPV Route: For GI-specific immune research (IBD, colitis), oral KPV provides direct mucosal exposure and matches Dalmasso's published DSS protocol. For systemic immune research (wound infection, post-surgical recovery), SC KPV ensures consistent bioavailability without first-pass metabolism variability.",
        "LL-37 Aggregation Prevention: LL-37 aggregates at >50 μM and binds to glass/polystyrene. Use polypropylene tubes exclusively. Reconstitute at ≤25 μM in PBS pH 7.4. For in vivo protocols requiring higher doses, inject immediately after reconstitution to minimize aggregation time. Never prepare LL-37 stock solutions days in advance.",
        "Infectious vs Sterile Inflammation Model: KLW performs differently in infectious (bacteria-driven) vs sterile (LPS, TNBS chemical) inflammation. LL-37's antimicrobial arm is critical for infectious models but irrelevant for sterile models. For sterile inflammation (e.g., TNBS colitis), the stack reduces to KPV + Tα1 with LL-37 acting only via FPR2. Choose model based on research question.",
        "Sex Differences in TLR Expression: Female mice express 2-3x higher baseline TLR7 and show enhanced TLR9 responses to CpG oligonucleotides. Tα1 operates partially through TLR signaling, so sex stratification is critical. Include both sexes and power each independently per NIH SABV policy. Expect stronger Tα1 T-cell activation responses in females.",
        "GI-Specific vs Systemic Protocol Design: For IBD/colitis models, use oral KPV (100 mcg/kg/day), topical rectal LL-37 (if applicable), and SC Tα1. For systemic immune protocols (wound infection, post-surgical), use SC KPV, topical or SC LL-37, and SC Tα1. Route selection profoundly affects local vs systemic exposure.",
      ],
    },
    {
      type: "heading",
      text: "Application Models: Where KLW Stack Fits Best",
    },
    {
      type: "paragraph",
      text: "The KLW stack is not a general-purpose immune protocol — it is designed for specific immune contexts where all three layers (inflammation control, innate defense, adaptive competence) are simultaneously compromised:",
    },
    {
      type: "list",
      items: [
        "IBD/Colitis Models: DSS (dextran sulfate sodium) or TNBS (trinitrobenzene sulfonic acid) colitis in mice. KPV is validated in Dalmasso's DSS protocol. LL-37 addresses secondary bacterial translocation across damaged mucosa. Tα1 restores mucosal immune competence. This is the most translational model for KLW.",
        "Wound Infection Models: Dual bacterial + inflammatory challenge. S. aureus or P. aeruginosa wound inoculation in diabetic or aged mice. LL-37 provides direct antimicrobial activity and EGFR-driven re-epithelialization. KPV controls inflammation-driven tissue damage. Tα1 prevents infection-driven immune exhaustion.",
        "Post-Surgical Immune Recovery: Surgery induces transient immune suppression (surgical stress-induced lymphopenia). Tα1 accelerates T-cell recovery. KPV controls post-operative inflammation. LL-37 provides antimicrobial prophylaxis during the vulnerable window.",
        "Chronic Infection with T-Cell Exhaustion: Chronic viral or intracellular bacterial infection models where T-cells express exhaustion markers (PD-1, LAG-3, TIM-3). Tα1 reinvigorates T-cell responses. KPV controls chronic inflammation. LL-37 (if bacterial component) reduces microbial burden.",
        "Mucosal Barrier Research: Any model where mucosal barrier integrity (intestinal, respiratory, urogenital) is compromised. KPV reduces inflammation-driven tight junction disruption. LL-37 provides local antimicrobial defense. Tα1 supports mucosal immune cell populations (intraepithelial lymphocytes, lamina propria T-cells).",
      ],
    },
    {
      type: "heading",
      text: "Common Protocol Mistakes to Avoid",
    },
    {
      type: "list",
      items: [
        "Using glass tubes for LL-37 — LL-37 binds irreversibly to glass. Use polypropylene exclusively for all LL-37 handling (reconstitution, storage, dilution).",
        "Pre-mixing KPV + LL-37 + Tα1 in a single vial — the three compounds have different pH optima and stability profiles. Reconstitute and inject each separately.",
        "Forgetting MC1R/MC3R negative controls for KPV — without AGRP or MSG antagonist controls, you cannot confirm KPV's effects are melanocortin-dependent vs non-specific tripeptide effects.",
        "Using LL-37 concentrations >50 μM — aggregation occurs, drastically reducing bioactivity. Always reconstitute at ≤25 μM working concentration.",
        "Failing to include scrambled LL-37 sequence control — LL-37's antimicrobial activity is sequence-specific. A scrambled peptide (same amino acids, random order) confirms sequence-dependent mechanism.",
        "Continuous Tα1 dosing instead of twice-weekly — clinical ZADAXIN protocols use twice-weekly dosing (1.6 mg SC Monday/Thursday). Daily dosing has not been validated and may saturate TLR signaling without added benefit.",
        "Not stratifying by sex — TLR expression and Th1/Th2 balance differ by sex. Female mice show stronger TLR7/TLR9 responses, affecting Tα1 efficacy. Include both sexes and power independently.",
      ],
    },
    {
      type: "heading",
      text: "Suggested 8-Week IBD Protocol Timeline",
    },
    {
      type: "paragraph",
      text: "The following timeline integrates the three compounds for a standard 8-week DSS colitis model in C57BL/6J mice (most translational model for KLW immune research):",
    },
    {
      type: "table",
      headers: ["Week", "KPV", "LL-37", "Tα1", "Challenge/Sampling"],
      rows: [
        ["Pre-study", "—", "—", "—", "Baseline: blood, cytokines, T-cell subsets"],
        ["1", "100 mcg/kg oral daily", "2 mg/kg SC 3x/week", "200 mcg/kg SC Mon/Thu", "DSS 2.5% in drinking water (days 1-5)"],
        ["2", "100 mcg/kg oral daily", "2 mg/kg SC 3x/week", "200 mcg/kg SC Mon/Thu", "Recovery week; colon length, histology (day 14)"],
        ["3-4", "100 mcg/kg oral daily", "2 mg/kg SC 3x/week", "200 mcg/kg SC Mon/Thu", "Maintenance dosing; weekly blood (cytokines)"],
        ["5", "100 mcg/kg oral daily", "2 mg/kg SC 3x/week", "200 mcg/kg SC Mon/Thu", "DSS 2.5% rechallenge (days 29-33)"],
        ["6", "100 mcg/kg oral daily", "2 mg/kg SC 3x/week", "200 mcg/kg SC Mon/Thu", "Recovery week; T-cell subsets (day 42)"],
        ["7-8", "100 mcg/kg oral daily", "2 mg/kg SC 3x/week", "200 mcg/kg SC Mon/Thu", "Terminal harvest: colon histology, TEER, FD4, CFU, full cytokine panel"],
      ],
    },
    {
      type: "divider",
    },
    {
      type: "disclaimer",
      text: "All Nexphoria compounds are sold for research use only (RUO). Not for human consumption. This article presents published preclinical data and protocol guidance for qualified researchers. All animal research must be conducted under IACUC approval with appropriate institutional oversight.",
    },
  ],
};
