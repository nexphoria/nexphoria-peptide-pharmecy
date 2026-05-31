import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "peptide-research-autoimmune-inflammatory-conditions-kpv-thymosin-ll37-bpc157",
  title: "Peptide Research for Autoimmune and Chronic Inflammatory Conditions: KPV, Thymosin Alpha-1, LL-37, and BPC-157",
  description:
    "A comprehensive research protocol guide covering KPV, Thymosin Alpha-1, LL-37, and BPC-157 for autoimmune and chronic inflammatory research models. Covers receptor pharmacology, published preclinical and clinical data, multi-compound study design, endpoint selection, and critical controls.",
  category: "Immunology",
  readMinutes: 12,
  publishedAt: "2026-05-31",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Autoimmune and chronic inflammatory conditions represent one of the largest unmet needs in biomedical research. From inflammatory bowel disease (IBD) to rheumatoid arthritis, psoriasis, and systemic lupus erythematosus, the shared biology — dysregulated NF-κB signaling, impaired immune tolerance, and chronic cytokine elevation — creates a compelling target landscape for research peptides with immunomodulatory properties.",
    },
    {
      type: "paragraph",
      text: "Four research compounds in the Nexphoria catalog show orthogonal but complementary mechanisms relevant to this target class: KPV (anti-inflammatory via MC1R/MC3R-NF-κB axis), Thymosin Alpha-1 (innate + adaptive immune calibration via TLR/T-cell pathways), LL-37 (cathelicidin antimicrobial and FPR2-mediated immunomodulation), and BPC-157 (eNOS/NO/NF-κB cytoprotection with mucosal barrier restoration). This guide covers each compound's mechanism and data, then addresses multi-compound study design considerations for autoimmune research models.",
    },
    {
      type: "heading",
      text: "KPV: The Melanocortin Anti-Inflammatory Tripeptide",
    },
    {
      type: "paragraph",
      text: "KPV is the C-terminal tripeptide of α-MSH (α-melanocyte-stimulating hormone), representing the 'address domain' of the larger ACTH/MSH precursor chain. Unlike full-length α-MSH, KPV selectively binds MC1R and MC3R without activating MC2R (ACTH receptor, adrenal axis) or MC4R (appetite/anorexia). This receptor selectivity is the key pharmacological advantage: anti-inflammatory activity without steroidogenic side effects.",
    },
    {
      type: "paragraph",
      text: "The central mechanism of KPV is inhibition of NF-κB nuclear translocation via IκBα stabilization. In the resting state, NF-κB (p65/p50 heterodimer) is retained in the cytoplasm by IκBα. Pro-inflammatory stimuli activate IKKβ, which phosphorylates IκBα at Ser32/Ser36, targeting it for proteasomal degradation and releasing NF-κB to translocate to the nucleus. KPV binding to MC1R/MC3R activates Gαs/cAMP/PKA signaling, which phosphorylates IκBα at a protective site and suppresses IKKβ activation — effectively locking NF-κB in the cytoplasm.",
    },
    {
      type: "paragraph",
      text: "Key published data: Mandal et al. (2009, American Journal of Physiology) demonstrated KPV at 10–100 nM reduced TNF-α-stimulated IL-6 by 40–65% and TNF-α by 35–55% in RAW264.7 macrophages and Caco-2 intestinal epithelial cells, without suppressing IL-10. Dalmasso et al. (2008) showed 100 μg/kg/day oral KPV in DSS colitis mice produced significant MPO reduction, crypt score preservation, and mucosal CD3+ T-cell normalization. Brzosko et al. (2019) confirmed 1 mg/kg IP in TNBS colitis. The consistent non-suppression of IL-10 is notable: KPV shifts the cytokine balance toward resolution without global immunosuppression.",
    },
    {
      type: "heading",
      text: "Thymosin Alpha-1: Innate and Adaptive Immune Calibration",
    },
    {
      type: "paragraph",
      text: "Thymosin Alpha-1 (Tα1) engages the immune system at a fundamentally different level than KPV. Rather than suppressing a specific cytokine pathway, Tα1 acts as an immunological calibrator — enhancing deficient responses (innate pattern recognition, T-cell effector function, NK cytotoxicity) while restoring tolerance mechanisms where chronic inflammation has driven T-cell exhaustion.",
    },
    {
      type: "paragraph",
      text: "The innate mechanisms of Tα1 operate through TLR2, TLR4, and TLR9 signaling on plasmacytoid dendritic cells (pDCs) and macrophages. Tα1 acts as a TLR co-agonist — it does not activate TLR signaling independently but amplifies responses to endogenous TLR ligands. The consequence in pDCs is a 2–4× increase in IFN-α secretion, which in autoimmune research models (where IFN pathway dysregulation is relevant) allows dissection of the IFN compartment. On the adaptive side, Tα1 drives Th1 polarization (IL-12/IFN-γ > IL-4/IL-13), promotes CD4+ T helper maturation, expands CD8+ CTL populations, and most critically, reduces exhaustion markers PD-1 and Tim-3 on effector T-cells in chronic inflammatory settings.",
    },
    {
      type: "paragraph",
      text: "For autoimmune research specifically, the Tα1 data in HBV (Li 2017 meta-analysis: 26–37% HBeAg seroconversion above control) and the COVID-19 Italy cohort (Zhao 2020 Clinical Infectious Diseases: 11% vs 30% ICU mortality, lymphopenia rescue) both point to its utility in contexts where chronic immune activation has depleted functional effector responses — which mirrors the T-cell exhaustion phenotype seen in autoimmune conditions like lupus and rheumatoid arthritis.",
    },
    {
      type: "heading",
      text: "LL-37: The Host Defense Cathelicidin With Dose-Dependent Immunomodulation",
    },
    {
      type: "paragraph",
      text: "LL-37 is the sole human cathelicidin, derived from the hCAP18 precursor (encoded by the CAMP gene) via serine protease cleavage at the C-terminus. It is secreted by neutrophils, mast cells, epithelial cells, and keratinocytes at sites of infection and injury. In autoimmune and inflammatory research, LL-37 occupies a uniquely complex position: it is simultaneously an antimicrobial agent, a chemokine analog, a wound healing activator, and — at lower concentrations — an anti-inflammatory modulator.",
    },
    {
      type: "paragraph",
      text: "The dose-dependent immunomodulatory duality of LL-37 is the central pharmacological feature researchers must account for in study design. At low concentrations (<1 μM), LL-37 binds FPR2 (formyl peptide receptor 2) on macrophages and drives M2 anti-inflammatory polarization (increased CD163/CD206, IL-10/TGF-β1 production, reduced TNF-α). At high concentrations (>10 μM), LL-37 acts as a TLR4 ligand — either directly or via self-nucleic acid complexes — and triggers pro-inflammatory NF-κB/IRF3 signaling. For autoimmune/inflammatory research models targeting the anti-inflammatory arm, dosing must be calibrated to maintain LL-37 in the sub-micromolar range.",
    },
    {
      type: "paragraph",
      text: "Beyond immunomodulation, LL-37 plays a specific role in epithelial barrier repair relevant to autoimmune conditions with gut or mucosal pathology. Heilborn et al. (2003) demonstrated FPR2-dependent EGFR transactivation in keratinocytes, driving cell migration and wound closure. In IBD research models, LL-37 has been shown to promote M2 macrophage polarization in lamina propria, synergizing with KPV's NF-κB suppression from the MC1R/MC3R arm — two non-competing anti-inflammatory pathways targeting the same compartment.",
    },
    {
      type: "heading",
      text: "BPC-157: Mucosal Cytoprotection and NF-κB Modulation",
    },
    {
      type: "paragraph",
      text: "BPC-157 (Body Protection Compound-157) has a documented history in gastric mucosal research going back to Šikiriḉ's lab in Zagreb, where it was originally isolated from gastric juice. Its cytoprotective effects were initially attributed primarily to eNOS/NO upregulation and prostaglandin pathway preservation. In autoimmune research, three BPC-157 mechanisms are relevant: (1) tight junction preservation (ZO-1/occludin upregulation in leaky gut models), (2) NF-κB suppression in mucosal epithelial cells, and (3) angiogenesis restoration in inflamed tissue via VEGFR2/FAK signaling.",
    },
    {
      type: "paragraph",
      text: "In IBD models, the published data is consistent: BPC-157 at 10 μg/kg/day IP (or oral, demonstrating route equivalence via proline-rich protease resistance) reduces MPO activity by 40–60%, normalizes TNF-α and IL-1β, restores crypt architecture by histomorphometry, and preserves tight junction protein expression in both TNBS and DSS colitis. The L-NAME partial dissection experiments confirm NO/eNOS as a necessary but not sufficient mechanism — the FAK and VEGFR2 arms contribute independently to recovery.",
    },
    {
      type: "paragraph",
      text: "For systemic autoimmune research (outside GI models), BPC-157's mechanism becomes more complex to interpret. The eNOS/VEGFR2/FAK pathway is primarily local — BPC-157 administered IP reaches peritoneal and mesenteric targets readily, and may modulate systemic inflammation indirectly via vagal afferent signaling from gut to brain. Researchers designing studies involving non-GI autoimmune targets should include both IP and oral route groups with vagotomy dissection if central mechanisms are of interest.",
    },
    {
      type: "heading",
      text: "Autoimmune Research Models: Selection Guide",
    },
    {
      type: "paragraph",
      text: "Model selection is the most consequential study design decision in autoimmune research. The major preclinical models differ substantially in: which immune pathway is dominant, species requirements, spontaneous vs induced disease, chronicity, and translatability to specific human conditions.",
    },
    {
      type: "table",
      headers: ["Model", "Target Condition", "Dominant Pathway", "Best Compounds", "Duration", "Key Endpoint"],
      rows: [
        ["DSS Colitis (C57BL/6J)", "Ulcerative Colitis", "Mucosal barrier/innate", "BPC-157, KPV, LL-37", "7–10 days acute; 3-cycle chronic", "DAI, MPO, histology"],
        ["TNBS Colitis (Sprague-Dawley)", "Crohn's/IBD", "Th1/innate NF-κB", "KPV, BPC-157, Tα1", "14–21 days", "DAI, TNF-α/IL-6, crypt score"],
        ["CIA (DBA/1J)", "Rheumatoid Arthritis", "Th17/collagen Ab/complement", "Tα1, KPV", "42–56 days", "Paw score, histology, anti-CII Ab"],
        ["Pristane SLE (BALB/c)", "Systemic Lupus", "pDC/IFN-α/anti-dsDNA", "Tα1, LL-37 (low dose)", "12–24 weeks", "Anti-dsDNA, GN histology, IFN signature"],
        ["EAE (C57BL/6J)", "Multiple Sclerosis", "Th17/CNS demyelination", "Tα1, BPC-157", "21–35 days", "EAE score, MBP/MOG, CD4/CD8 CNS"],
        ["Imiquimod Psoriasis (BALB/c)", "Psoriasis", "IL-17/Th17/keratinocyte", "KPV, LL-37 (topical)", "7–14 days", "PASI score, keratinocyte hyperplasia, IL-17A"],
        ["NOD Mouse (Spontaneous T1D)", "Type 1 Diabetes", "CD8+/islet-specific tolerance failure", "Tα1, KPV", "12–30 weeks", "Diabetes incidence, islet CD8, IL-10/TGF-β"],
        ["Aging C57BL/6J (18-24 mo)", "Inflammaging/SASP", "cGAS-STING/NF-κB/senescence", "Tα1, NAD+, KPV", "4–8 weeks", "SASP Luminex, T-cell exhaustion"],
      ],
    },
    {
      type: "heading",
      text: "Multi-Compound Protocol Design: Orthogonal vs Redundant Mechanisms",
    },
    {
      type: "paragraph",
      text: "The four compounds described here engage non-overlapping receptor targets: KPV via MC1R/MC3R-Gαs/cAMP-IκBα; Tα1 via TLR2/TLR4/TLR9-MyD88-IRF3; LL-37 via FPR2-EGFR (at low dose); and BPC-157 via eNOS/NO and VEGFR2/FAK. No two compounds share a primary receptor. This makes combination protocols scientifically justified — the synergy is additive at best, but no pharmacological competition exists.",
    },
    {
      type: "paragraph",
      text: "The recommended multi-compound study design for IBD/colitis models uses 5–6 groups: (1) Vehicle (DSS + saline), (2) KPV alone, (3) BPC-157 alone, (4) Tα1 alone, (5) KPV + BPC-157 combination, (6) Triple (KPV + BPC-157 + Tα1). For autoimmune models with a dominant adaptive T-cell component (CIA, EAE), Tα1 should be considered the primary compound, with KPV as anti-inflammatory adjunct. For models with dominant innate/mucosal pathology (DSS, TNBS), BPC-157 and KPV are primary with Tα1 as adjunct.",
    },
    {
      type: "paragraph",
      text: "LL-37's dose-dependent polarity (anti-inflammatory <1 μM vs pro-inflammatory >10 μM) requires careful integration into multi-compound designs. In IBD and skin models, LL-37 at 0.1–1.0 mg/kg SC is the appropriate range for M2 polarization. In systemic multi-compound IBD protocols, LL-37 should be added as a separate group rather than co-dosed with KPV to avoid additive NF-κB signaling that could shift LL-37 into its pro-inflammatory dose-territory at the mucosal interface.",
    },
    {
      type: "heading",
      text: "Preclinical Dosing Protocols",
    },
    {
      type: "table",
      headers: ["Compound", "Species", "Dose", "Route", "Frequency", "Duration", "Published Reference"],
      rows: [
        ["KPV", "Mouse", "100 μg/kg", "IP or oral", "Daily", "7–21 days", "Dalmasso 2008; Brzosko 2019"],
        ["KPV", "Rat", "1 mg/kg", "IP", "Daily", "14 days", "Brzosko 2019 TNBS"],
        ["Thymosin Alpha-1 (Tα1)", "Mouse", "1 mg/kg", "SC", "Every other day", "4–12 weeks", "Goldstein 1977; Zhao 2020 (human)"],
        ["Thymosin Alpha-1 (Tα1)", "Rat", "1–2 mg/kg", "SC", "3×/week", "4–8 weeks", "Sherman 2005; Li 2017 meta"],
        ["LL-37", "Mouse", "0.5–2 mg/kg", "SC/IP", "Daily or EOD", "7–14 days", "Heilborn 2003; Duplantier 2021"],
        ["BPC-157", "Mouse", "10 μg/kg", "IP or oral", "Daily", "7–28 days", "Šikiriḉ 2010; Sikiric 2016"],
        ["BPC-157", "Rat", "10 μg/kg", "IP", "Daily", "14–21 days", "Šikiriḉ 2006 TNBS/DSS"],
      ],
    },
    {
      type: "heading",
      text: "Endpoint Selection for Autoimmune Models",
    },
    {
      type: "paragraph",
      text: "Endpoint selection should be driven by the mechanistic hypothesis. For NF-κB pathway research (KPV, BPC-157), the critical readouts are cytokine panels (IL-6, TNF-α, IL-1β, IL-10, IL-12p70), NF-κB p65 nuclear translocation (EMSA or pNF-κB-p65 ELISA), and MPO activity for neutrophil infiltration. For T-cell biology (Tα1), flow cytometry on target tissue lymphocytes — measuring CD4/CD8 ratios, CD8+ PD-1/Tim-3 exhaustion markers, NK cytotoxicity (LDH YAC-1 assay), and Th1/Th17/Treg polarization (CXCR3/RORγt/FoxP3) — is required.",
    },
    {
      type: "table",
      headers: ["Endpoint", "Method", "Relevant Compound(s)", "Timing"],
      rows: [
        ["TNF-α / IL-6 / IL-1β / IL-10", "R&D Systems ELISA or BioLegend LEGENDplex Luminex", "KPV, BPC-157, LL-37, Tα1", "ZT3–5; tissue homogenate or serum EDTA"],
        ["NF-κB p65 nuclear translocation", "pNF-κB p65 ELISA (Cell Signaling) or EMSA", "KPV, BPC-157", "4–6h post-dose; nuclear fraction"],
        ["MPO (myeloperoxidase)", "Enzymatic MPO assay; Cayman #701020", "KPV, BPC-157, LL-37", "Tissue homogenate; colonic mucosa"],
        ["Histomorphometry (H&E + Masson's trichrome)", "Blinded pathologist scoring", "All compounds", "Study endpoint; Switzerland/UCSF IBD scoring"],
        ["T-cell exhaustion (CD8/PD-1/Tim-3/LAG-3)", "Flow cytometry; 6-color panel", "Tα1", "Spleen + lamina propria LPL isolation"],
        ["NK cytotoxicity", "LDH release assay; YAC-1 target cells; 4:1–50:1 E:T", "Tα1", "Splenocyte isolation; fresh use only"],
        ["Th1/Th17/Treg polarization", "Intracellular cytokine staining + surface FoxP3/RORγt", "Tα1, KPV", "Lymph node + spleen; restimulation 4h PMA/iono"],
        ["LL-37 M2 polarization (CD163/CD206/Arg1)", "Flow cytometry or IHC; tissue macrophage gating", "LL-37", "Lamina propria macrophages; F4/80+MHCIIlow gate"],
        ["Tight junction proteins (ZO-1/occludin/claudin-1)", "Western blot or IHC; mucosal scraping", "BPC-157", "Terminal; cold homogenization"],
        ["Autoantibody titers (anti-dsDNA, anti-CII)", "ELISA; specific kit per model (CIA/SLE)", "Tα1", "Weeks 2/4/6/endpoint serum"],
      ],
    },
    {
      type: "heading",
      text: "Critical Controls for Autoimmune Research",
    },
    {
      type: "paragraph",
      text: "Control group design is especially important in autoimmune models, where spontaneous disease variation (NOD mouse) and operator-dependent induction variability (TNBS, CIA) can confound treatment effects. Pre-specified controls are essential:",
    },
    {
      type: "paragraph",
      text: "Vehicle controls must match each compound's reconstitution solvent. KPV reconstituted in saline requires a saline IP control. BPC-157 reconstituted in saline requires the same. Tα1 in saline SC requires SC saline control. LL-37 reconstituted at pH 4.5–5.0 to prevent aggregation requires a pH-matched saline vehicle control (not neutral saline, which could independently affect mucosal endpoints). Mismatched vehicle controls are a common source of false positive signals in IBD models.",
    },
    {
      type: "paragraph",
      text: "Pharmacological receptor controls are required for mechanistic attribution: MC1R-null mice (B6.C3H-Mc1r^e/e) or HS014 (MC4R antagonist, irrelevant control) for KPV; TLR9-knockout mice (B6.Cg-Tlr9tm1Aki/J) for Tα1's IFN-α pathway; WRW4 (FPR2 antagonist, 2.5 mg/kg IP) for LL-37; L-NAME (NOS inhibitor, 10–20 mg/kg IP) for BPC-157 NO pathway. Without these controls, any effect observed cannot be mechanistically attributed to the intended target.",
    },
    {
      type: "paragraph",
      text: "Positive controls for each model should be established compounds with known efficacy: dexamethasone 1 mg/kg IP for IBD/colitis models (steroid suppression reference), methotrexate 1 mg/kg IP weekly for CIA (anti-arthritic reference), and PDTC (pyrrolidinedithiocarbamate, 50–100 mg/kg IP) as an NF-κB inhibitor positive control for mechanistic pathway validation.",
    },
    {
      type: "heading",
      text: "Reconstitution and Storage for Autoimmune Research",
    },
    {
      type: "paragraph",
      text: "Several important solvent constraints apply to these four compounds when used in immunology research:",
    },
    {
      type: "paragraph",
      text: "KPV: Reconstitute in sterile saline (not BAC water). BAC water's benzyl alcohol at 0.9% can activate TLR4/NF-κB directly in macrophages at μM concentrations — a critical confound for any NF-κB endpoint study. Store lyophilized at −20°C; reconstituted at 4°C for up to 14 days.",
    },
    {
      type: "paragraph",
      text: "Thymosin Alpha-1: Reconstitute in sterile saline or phosphate-buffered saline pH 7.4. Tα1 is stable in aqueous solution at neutral pH. BAC water is acceptable but saline is preferred for in vivo use. Reconstituted solutions are stable for 7–14 days at 4°C. Tα1 is highly susceptible to loss at low concentrations via plastic adsorption — use low-bind polypropylene tubes at concentrations below 100 μg/mL.",
    },
    {
      type: "paragraph",
      text: "LL-37: Reconstitute at pH 4.5–5.0 (0.1% acetic acid or pH-adjusted saline) to prevent the amphipathic beta-sheet aggregation that occurs at neutral pH above ~5 μg/mL. Store lyophilized at −20°C; reconstituted solutions must be used within 24–48h due to aggregation kinetics at 4°C. Never vortex.",
    },
    {
      type: "paragraph",
      text: "BPC-157: Reconstitute in sterile saline for IP or oral routes. BAC water is acceptable for non-mucosal research but avoid for oral gavage studies where benzyl alcohol mucosal effects could confound GI endpoints. Store lyophilized at −20°C; reconstituted at 4°C for up to 14 days. Proline-rich structure provides significant protease resistance — oral route is pharmacologically equivalent to IP for mucosal endpoints.",
    },
    {
      type: "heading",
      text: "Six Research Design Considerations",
    },
    {
      type: "paragraph",
      text: "1. Vehicle control solvent matching: Every compound's vehicle must match its reconstitution solvent, prepared at the same pH and concentration. For LL-37, this means preparing a pH 4.5–5.0 saline control; for BAC water compounds, a saline IP control is not appropriate as an exact vehicle match.",
    },
    {
      type: "paragraph",
      text: "2. Circadian standardization: IL-6, TNF-α, corticosterone, and NF-κB activity all follow circadian rhythms in rodents. All tissues and blood collections should be harvested at ZT3–5 (3–5 hours after light-on) to minimize inter-animal variability. Compound dosing at ZT0 (lights on) standardizes peak pharmacology relative to collection windows.",
    },
    {
      type: "paragraph",
      text: "3. Sex differences: Autoimmune conditions are substantially sex-dimorphic in humans — lupus is 9:1 female predominance, RA is 3:1 female. NIH SABV policy requires sex-stratified groups in all federally funded research. Estrogen modulates TLR4 expression, MC1R expression (especially the E variant), and NF-κB baseline activity. Use equal n per sex with sex × treatment interaction statistics, or select one sex and declare the limitation.",
    },
    {
      type: "paragraph",
      text: "4. LL-37 concentration monitoring: For studies relying on LL-37's anti-inflammatory FPR2 arm, confirm that local tissue concentrations remain in the sub-micromolar range using mass spectrometry or anti-LL-37 ELISA. Dose escalation above 2 mg/kg SC in mice can yield mucosal concentrations that shift into TLR4 pro-inflammatory territory, particularly in inflamed tissue with increased vascular permeability.",
    },
    {
      type: "paragraph",
      text: "5. Power calculation with autoimmune model variability: Spontaneous models (NOD mouse) have high inter-animal variability in disease onset and severity (CV% 40–60%). Induced models (DSS, CIA) have lower CV% (~25–35%) but induction variability remains. Use published CV% from validation studies: DSS colitis histology CV ≈ 25%, CIA paw score CV ≈ 30%. G*Power with two-way ANOVA, α = 0.05, power = 0.80, and 30% expected effect size typically yields n = 8–12 per group.",
    },
    {
      type: "paragraph",
      text: "6. Endotoxin artifact controls: Immunology endpoint studies are uniquely vulnerable to LPS contamination. Any cytokine or NF-κB signal that could be caused by trace endotoxin in compound preparations must be controlled. Verify LAL endotoxin <1 EU/mg for all compounds used in in vitro and in vivo studies. Include a polymyxin B neutralization control (10 μg/mL PMB co-incubation) for in vitro experiments to rule out endotoxin as the active agent.",
    },
    {
      type: "heading",
      text: "Conclusion: Building the Autoimmune Research Stack",
    },
    {
      type: "paragraph",
      text: "The four compounds covered here represent a well-validated and mechanistically orthogonal set of immunomodulatory tools for preclinical autoimmune research. KPV provides targeted NF-κB suppression without immunosuppression. Thymosin Alpha-1 calibrates both innate and adaptive immunity, particularly valuable in exhaustion-driven chronic inflammatory models. LL-37 at controlled sub-micromolar concentrations drives M2 macrophage polarization and epithelial repair. BPC-157 protects mucosal barriers and resolves local inflammatory cascades via eNOS and FAK.",
    },
    {
      type: "paragraph",
      text: "No two compounds share a receptor, no pharmacological competition exists, and the downstream convergence points (NF-κB suppression, IL-10 preservation, barrier integrity, macrophage M2 polarization) are additive. Multi-compound study designs using 5–6 group parallel arms with factorial interaction statistics are recommended for researchers seeking to understand both individual mechanisms and combinatorial benefits in inflammatory disease models.",
    },
    {
      type: "disclaimer",
      text: "All compounds described are for Research Use Only (RUO). Not intended for human or veterinary use. Research should be conducted under appropriate IACUC oversight and institutional compliance frameworks.",
    },
  ],
};
