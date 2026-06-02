import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: 'peptide-research-cardiac-hypertrophy-heart-failure-bpc157-tb500-ss31-ghkcu',
  title:
    'Peptide Research for Cardiac Hypertrophy and Heart Failure: BPC-157, TB-500, SS-31, and GHK-Cu Protocol Design',
  description:
    'A comprehensive protocol guide for cardiac hypertrophy and heart failure research using BPC-157, TB-500, SS-31, and GHK-Cu. Covers pathological hypertrophy pathways, 5 preclinical models, 10 key endpoints, 6-group study design, pharmacological controls, and reconstitution protocols.',
  category: 'Research Fundamentals',
  readMinutes: 11,
  publishedAt: '2026-06-02',
  ogImage: '/og/products/bpc-157.png',
  body: [
    {
      type: 'paragraph',
      text: 'Heart failure affects over 64 million people globally, yet preclinical models continue to yield therapeutic insights that outpace clinical translation. The four peptide compounds most frequently studied in cardiac research — BPC-157, TB-500, SS-31, and GHK-Cu — each target mechanistically distinct aspects of the failing myocardium: angiogenesis and cytoskeletal integrity, cardiomyocyte survival and contractile protein function, mitochondrial cristae quality, and extracellular matrix remodeling. This guide provides researchers with the model selection framework, endpoint panel, and study design parameters needed to run rigorous multi-compound cardiac studies.',
    },
    {
      type: 'heading',
      text: 'Pathological Hypertrophy: Two Divergent Pathways',
    },
    {
      type: 'paragraph',
      text: 'Pathological cardiac hypertrophy is not a single entity. Pressure overload (aortic stenosis, chronic hypertension) activates the calcineurin/NFAT pathway: sustained mechanical stress → calcineurin dephosphorylates NFAT transcription factors → nuclear translocation → re-expression of fetal gene program (ANP, BNP, β-MHC, skeletal α-actin). The result is concentric hypertrophy — increased wall thickness, normal or reduced chamber volume, impaired diastolic filling. This is the HFpEF phenotype. Volume overload or ischemic cardiomyopathy instead drives ROS/NF-κB–mediated eccentric remodeling: oxidative stress activates IKKβ → IκBα degradation → p65 nuclear translocation → MMP upregulation, cardiomyocyte apoptosis, and collagen replacement. Chamber dilates, wall thins, systolic function deteriorates — the HFrEF phenotype. Both pathways share upstream ANP and BNP fetal gene reactivation, making circulating BNP and cardiac ANP/BNP mRNA validated biomarkers across model types.',
    },
    {
      type: 'heading',
      text: 'Research Compound Mechanisms',
    },
    {
      type: 'paragraph',
      text: "BPC-157 approaches cardiac protection through three complementary axes. First, eNOS/NO upregulation — BPC-157 increases eNOS transcription and restores NO bioavailability in ischemic myocardium, countering NF-κB–mediated IKKβ activation via S-nitrosylation of Cys179. L-NAME partial attenuation (30–60%) in arrhythmia and anastomosis models confirms NO-dependent + independent mechanisms. Second, VEGFR2/KDR phosphorylation drives angiogenic capillary maintenance — critical in the pressure-overloaded myocardium where capillary rarefaction precedes fibrosis. In TAC models, BPC-157-treated groups show 35–45% reduction in Masson's trichrome fibrosis area compared with vehicle, accompanied by preserved CD31+ capillary density. Third, FAK/paxillin cytoskeletal signaling protects cardiomyocyte architecture under mechanical stress. SU5416 (VEGFR2 inhibitor) and L-NAME used together can pharmacologically isolate these three axes in combination studies.",
    },
    {
      type: 'paragraph',
      text: "TB-500's cardiac biology is dominated by ILK/Akt activation. Bock-Marquette et al. (2004, Nature) showed that Tβ4 (the bioactive sequence in TB-500) activates ILK in cardiac progenitor cells, triggering a pro-survival cascade: Akt Ser473 phosphorylation → BAD Ser136 phosphorylation (blocking cytochrome c release) → caspase-9 Thr125 inactivation. Coronado et al. (2013, PLoS ONE) quantified these effects in LAD ligation I/R: 38–45% infarct size reduction, EF% preserved at 52 vs 38% (vehicle), cTnI –55%, TUNEL –48%. Srivastava et al. (2004, EMBO Journal) identified an additional contractile protein interaction — Tβ4 binds the central helical region of cardiac troponin T (cTnT), preserving Ca²⁺ sensitivity under oxidative post-translational modification during ischemia. ILK inhibitor KP-392 abolishes all TB-500 cardiac protection, making it the mandatory mechanistic control.",
    },
    {
      type: 'paragraph',
      text: "SS-31 (elamipretide) targets the failing myocardium at the inner mitochondrial membrane (IMM). Szeto et al. (2014) demonstrated that cardiolipin peroxidation — driven by cytochrome c-catalyzed ROS at the IMM — disrupts ETC supercomplex scaffolding and reduces Complex I activity by 40–50% in HFpEF hearts without any change in mtDNA copy number or total mitochondrial mass (the 'quality not quantity' distinction). SS-31 binds cardiolipin's bisphosphatidyl glycerol headgroup via electrostatic + hydrophobic interaction, preventing peroxidation and restoring supercomplex integrity. Downstream: Complex I activity recovers, mitochondrial Ca²⁺ retention capacity (CRC) improves (reflecting mPTP desensitization), and SIRT3-mediated CypD Lys-166 deacetylation reduces mPTP sensitivity at baseline. The PROGRESS-HF and LEAD-HF Phase 2 clinical trials used SC elamipretide in human HFrEF patients, providing translational context for SC dosing in preclinical models.",
    },
    {
      type: 'paragraph',
      text: "GHK-Cu addresses the extracellular matrix remodeling axis of cardiac failure. In the pressure-overloaded heart, TGF-β1/ALK5/pSMAD2-3 drives pathological collagen deposition (fibrosis). GHK-Cu modulates TGF-β1 signaling bidirectionally: in acute injury, pro-regenerative TGF-β1 signal preservation is maintained; in chronic overload, GHK-Cu activates MMP-1 and MMP-2 while suppressing TIMP-1, rebalancing the MMP/TIMP ratio to favor fibrosis resolution. Concurrently, Nrf2/Keap1 activation by GHK-Cu's copper redox cycling upregulates HO-1, NQO1, and GCLC — reducing mitochondrial ROS load orthogonally to SS-31's cardiolipin mechanism. GHK-Cu also delivers bioavailable copper as a cofactor for lysyl oxidase (LOX), improving collagen crosslinking quality in the remodeling scar. The Pickart gene expression database documents 2,000+ gene modulations in fibroblast models, with cardiac relevance in TGF-β1 downstream targets, angiogenic genes (VEGF, FGF-2), and antioxidant response elements.",
    },
    {
      type: 'heading',
      text: 'Compound Mechanism Reference Table',
    },
    {
      type: 'table',
      headers: ['Compound', 'Primary Target', 'Model', 'Dose', 'Primary Endpoint', 'Effect Size', 'Reference'],
      rows: [
        ['BPC-157', 'eNOS/VEGFR2/FAK', 'TAC', '10 μg/kg IP daily', 'Masson fibrosis %', '–35 to –45%', 'Sikiric et al.'],
        ['BPC-157', 'NF-κB/IKKβ', 'LAD I/R', '10 μg/kg IP', 'Infarct size TTC', '–30 to –40%', 'Sikiric et al.'],
        ['TB-500', 'ILK/Akt', 'LAD I/R', '150–300 μg/kg SC', 'Infarct size TTC', '–38 to –45%', 'Coronado 2013'],
        ['TB-500', 'cTnT binding', 'Langendorff', '10–100 ng/mL perfusate', 'LVDP recovery', '+24% LVDP', 'Srivastava 2004'],
        ['SS-31', 'Cardiolipin/Complex I', 'HFpEF (HFD)', '3 mg/kg SC daily', 'Seahorse OCR state 3', '+40–50% CI activity', 'Szeto 2014'],
        ['SS-31', 'mPTP/CRC', 'TAC', '3 mg/kg SC daily', 'Mitochondrial CRC', '+35–55% CRC', 'Szeto 2014'],
        ['GHK-Cu', 'MMP-1↑/TIMP-1↓', 'TAC', '1–5 mg/kg SC daily', 'Masson fibrosis', '–30 to –40%', 'Pickart 2012'],
        ['GHK-Cu', 'Nrf2/HO-1', 'DOX cardiotoxicity', '1–5 mg/kg SC daily', '8-OHdG oxidative damage', '–40 to –55%', 'Pickart 2012'],
      ],
    },
    {
      type: 'heading',
      text: 'Model Selection Guide: 5 Cardiac Research Models',
    },
    {
      type: 'table',
      headers: ['Model', 'Pathology', 'Surgical Complexity', 'Timeline', 'Best For', 'Key Limitation'],
      rows: [
        ['TAC (Transverse Aortic Constriction)', 'Concentric hypertrophy → HFpEF/HFrEF', 'High (thoracotomy, 26G needle banding)', '4–12 weeks', 'Pressure-overload fibrosis, hypertrophy, anti-remodeling compounds', 'High inter-animal variability in banding degree; requires echo QC at 2 weeks'],
        ['LAD ligation MI', 'Eccentric dilation → HFrEF', 'High (thoracotomy)', '1–28 days acute; 4–12 weeks chronic', 'Post-MI remodeling, infarct size, cardiomyocyte survival', 'High mortality (~20–30%); infarct size variability; timing critical'],
        ['DOX cardiotoxicity', 'Dilated cardiomyopathy (oxidative)', 'Low (IP injection)', '3–6 weeks', 'Anthracycline cardioprotection, oxidative damage, apoptosis', 'Non-ischemic mechanism; limited translational direct pathology mapping'],
        ['Angiotensin II chronic', 'Hypertensive hypertrophy + fibrosis', 'Low (osmotic minipump implant)', '4 weeks', 'Hypertension-driven remodeling, collagen deposition, RAS pathway', 'Blood pressure confounds functional endpoints; species/strain-dependent responses'],
        ['HFD-induced HFpEF', 'Metabolic HFpEF (obesity + hypertension)', 'Low (dietary)', '16–24 weeks', 'Metabolic HFpEF, diastolic dysfunction, mitochondrial quality', 'Slow and variable HFpEF phenotype penetrance; requires echo Doppler E/E\' assessment'],
      ],
    },
    {
      type: 'heading',
      text: 'Endpoint Selection Guide',
    },
    {
      type: 'table',
      headers: ['Endpoint', 'Method', 'Timing', 'Target Compound', 'Notes'],
      rows: [
        ['TTC infarct size (% AAR)', 'TTC staining, NIH ImageJ planimetry', '24h post-I/R', 'BPC-157, TB-500', 'Gold standard acute infarct; must define area-at-risk by Evans blue exclusion'],
        ['EchoMRI EF% + GLS', 'Transthoracic echo (Vevo 3100), speckle tracking', 'Weekly for TAC; pre/post acute', 'All compounds', 'Operator blinding mandatory; GLS more sensitive than EF% for early dysfunction'],
        ['Masson\'s trichrome fibrosis %', 'Histomorphometry, 3 sections/heart, blinded scoring', 'Sacrifice endpoint', 'BPC-157, GHK-Cu', 'Semi-quantitative; supplement with Sirius Red polarized for fibrillar collagen specificity'],
        ['pSMAD2-3 nuclear WB', 'Anti-pSMAD2 Ser465/467, nuclear fraction', 'Sacrifice endpoint', 'GHK-Cu, TB-500', 'Isolate nuclear fraction (NE-PER kit); cytoplasmic pSMAD is artifactual'],
        ['α-SMA+ myofibroblast IHC', 'Anti-α-SMA (Sigma A5228), confocal', 'Sacrifice endpoint', 'GHK-Cu, BPC-157', 'Exclude coronary vascular smooth muscle by co-stain with CD31'],
        ['ANP + BNP mRNA', 'RT-qPCR (LV apex RNA), normalized to 36B4', 'Sacrifice endpoint', 'All compounds', 'Sample at same ZT (LV apex); GAPDH confounded by HFD metabolic changes'],
        ['LOX activity (fluorometric)', 'Amplex Red LOX assay (Cell Biolabs)', 'Sacrifice endpoint', 'GHK-Cu', 'LOX requires copper cofactor — GHK-Cu directly enhances LOX activity'],
        ['Seahorse cardiac OCR (Complex I)', 'XFe24 Seahorse, permeabilized cardiomyocytes', 'Isolation day (fresh)', 'SS-31', 'Prepare fresh — freeze-thaw destroys Complex I activity; glutamate/malate substrate'],
        ['cTnT Ca²⁺ sensitivity (skinned fiber pCa50)', 'Mechanical Ca²⁺ binding isometric contraction', 'Sacrifice endpoint', 'TB-500', 'Technical; requires skinned fiber preparation; measures TB-500 cTnT binding directly'],
        ['mPTP (Ca²⁺ Retention Capacity, CRC)', 'Mitochondrial isolation + calcium green fluorometry', 'Fresh isolation', 'SS-31', 'CRC rises with SS-31 (more Ca²⁺ tolerated before mPTP): +35–55% vs vehicle'],
      ],
    },
    {
      type: 'heading',
      text: 'Study Design: 6-Group TAC Combination Protocol',
    },
    {
      type: 'table',
      headers: ['Group', 'Treatment', 'n', 'Purpose'],
      rows: [
        ['1', 'Sham + vehicle SC daily', '10', 'Baseline cardiac physiology reference'],
        ['2', 'TAC + vehicle SC daily', '12', 'Pathological control (compensatory → decompensated hypertrophy)'],
        ['3', 'TAC + BPC-157 10 μg/kg IP daily', '10', 'Angiogenesis/NF-κB anti-fibrotic axis'],
        ['4', 'TAC + SS-31 3 mg/kg SC daily', '10', 'Mitochondrial IMM quality / mPTP axis'],
        ['5', 'TAC + GHK-Cu 5 mg/kg SC daily', '10', 'ECM MMP/TIMP rebalancing + Nrf2 antioxidant'],
        ['6', 'TAC + BPC-157 + SS-31 + GHK-Cu (full stack)', '12', 'Multi-axis combination; test synergy vs additive effects'],
      ],
    },
    {
      type: 'paragraph',
      text: 'TB-500 should be included in a separate 7th group (TAC + TB-500 150 μg/kg SC 3×/week) when the ILK/cTnT survival axis is a primary research question. Adding TB-500 to the full stack creates a 2×2×2×2 factorial design requiring n = 10–12 per group (total N = 80–96), which is typically reserved for well-funded mechanistic studies rather than exploratory combination pilots.',
    },
    {
      type: 'heading',
      text: 'Pharmacological Controls',
    },
    {
      type: 'table',
      headers: ['Control', 'Purpose', 'Dose / Protocol', 'Group Size'],
      rows: [
        ['L-NAME (NG-nitro-L-arginine methyl ester)', 'Block eNOS/NO for BPC-157 dissection', '10 mg/kg IP daily (or drinking water 0.1 mg/mL)', 'Add to TAC+BPC-157 group'],
        ['KP-392 (ILK inhibitor)', 'Obligate control for TB-500 ILK mechanism', '5 mg/kg IP daily or 10 μM in Langendorff', 'Add to TAC+TB-500 group'],
        ['MitoTEMPO', 'Mitochondria-targeted antioxidant (separate from SS-31)', '0.7 mg/kg IP daily', 'Confirms SS-31 effect is mitochondrial ROS mediated'],
        ['ML385 (Nrf2 inhibitor)', 'Block GHK-Cu Nrf2 axis', '15 mg/kg PO 3×/week', 'Add to TAC+GHK-Cu group'],
        ['Free GHK + CuSO4', '4-arm copper control: attribute GHK-Cu effect to chelate vs components', 'Equimolar (1:1 GHK:CuSO4 by copper)', 'Satellite control groups'],
        ['Cyclosporin A (CsA)', 'mPTP inhibitor — positive control for SS-31 endpoint', '10 mg/kg IP before TAC', 'Separate mPTP-focused group'],
        ['SU5416 (VEGFR2 inhibitor)', 'Block VEGFR2 for BPC-157 angiogenesis dissection', '20 mg/kg SC 3×/week', 'Add to TAC+BPC-157 group'],
        ['Sham surgery (thoracotomy only)', 'Controls for surgical stress without banding', 'Same anesthetic + thoracotomy', 'Group 1 above'],
      ],
    },
    {
      type: 'heading',
      text: 'Reconstitution and Storage',
    },
    {
      type: 'table',
      headers: ['Compound', 'Reconstitution Solvent', 'Stock Concentration', 'Storage (Lyophilized)', 'Storage (Reconstituted)', 'Special Notes'],
      rows: [
        ['BPC-157', 'BAC water (0.9% benzyl alcohol)', '1 mg/mL', '–20°C, amber vial', '4°C, max 14 days', 'For oral route: sterile saline only (mucosal studies); BAC water for IP/SC'],
        ['TB-500', 'BAC water (0.9% benzyl alcohol)', '1–2 mg/mL', '–20°C, amber vial', '4°C, max 14 days', 'For Langendorff perfusate: sterile saline only — benzyl alcohol disrupts cardiac contractility'],
        ['SS-31', 'Sterile saline (0.9% NaCl) ONLY — NO BAC water', '1 mg/mL', '–20°C, amber vial', '4°C, max 72h; prepare fresh every 3 days', 'Benzyl alcohol contraindicated for cardiac preparations; check clarity daily'],
        ['GHK-Cu', 'Sterile saline; verify blue-violet color (confirms copper chelation)', '1 mg/mL', '–20°C, amber vial', '4°C, max 14 days', 'No EDTA, no DTT, no strong acid — all destabilize copper chelate. Blue-violet = correctly chelated'],
      ],
    },
    {
      type: 'heading',
      text: '6 Key Research Design Considerations',
    },
    {
      type: 'list',
      items: [
        'Model selection determines mechanism relevance: TAC is the gold standard for pressure-overload fibrosis and anti-hypertrophic endpoints (BPC-157 Masson fibrosis, GHK-Cu MMP/TIMP, SS-31 diastolic dysfunction). LAD MI is required for infarct size, cardiomyocyte survival, and ILK/Akt endpoints (TB-500, BPC-157 NO/VEGFR2). DOX cardiotoxicity is the appropriate model for oxidative damage protection (SS-31 cardiolipin, GHK-Cu Nrf2) in an anthracycline-specific context. Mixing models within a paper requires explicit justification.',
        'Prevention vs treatment timing: BPC-157 and TB-500 both show stronger effect sizes in preconditioning protocols (administration starting 24–48h before TAC banding or LAD ligation) vs post-injury rescue. SS-31 and GHK-Cu ECM effects require sustained administration (≥4 weeks in TAC) to achieve measurable endpoint changes. Researchers must pre-specify and report administration timing relative to banding/ligation for reproducibility.',
        'Blinded echocardiography is mandatory: intra-operator EF% variability is ±5–8% without blinding; automated speckle-tracking global longitudinal strain (GLS) reduces this to ±2–3% and detects earlier dysfunction. All echo analysts must be blinded to treatment group. Confirm banding degree at Week 2 post-TAC using Doppler peak velocity across banding site (target 3.5–4.5 m/s for standardized pressure gradient).',
        'Sex differences require OVX+E2 standardization: estrogen (17β-estradiol via ERα) provides intrinsic cardioprotection through eNOS upregulation and mitochondrial biogenesis — effects that directly overlap with BPC-157 and SS-31 mechanisms. Female C57BL/6J mice at 8–10 weeks show significantly attenuated TAC hypertrophy vs males. Use ovariectomized (OVX) + controlled E2 replacement (17β-estradiol pellets 5 μg, 90-day release) for sex-stratified studies, or restrict initial studies to age-matched males with female replication cohort per NIH SABV policy.',
        'SS-31 formulation: sterile saline only for all cardiac preparations — especially Langendorff perfusate. Benzyl alcohol in BAC water disrupts sarcolemmal Na⁺/K⁺-ATPase activity and alters cardiac contractility independent of SS-31. For SC injection, prepare fresh SS-31 in sterile saline every 72h maximum; degradation is detectable at 4°C beyond 72h. Rotate injection sites (posterior dorsum) to prevent local inflammatory artifact at the 3 mg/kg daily dose.',
        'cTnT vs cTnI endpoint selection: use cTnI serum ELISA (Life Diagnostics cat. CTNI-1-HSP, or Roche Troponin T hs) for cardiomyocyte necrosis quantification in acute I/R studies — cTnI is the validated clinical and preclinical biomarker for MI extent. Reserve cTnT-based endpoints (co-immunoprecipitation with Tβ4, skinned fiber pCa50) specifically for studies targeting TB-500\'s troponin T binding mechanism. Conflating cTnT and cTnI endpoints in multi-compound studies creates interpretation errors since each measures different biology.',
      ],
    },
    {
      type: 'heading',
      text: 'Compound Combination Rationale',
    },
    {
      type: 'paragraph',
      text: 'The four-compound combination targets non-overlapping cardiac failure axes: BPC-157 addresses capillary rarefaction and NF-κB fibrotic signaling; TB-500 addresses cardiomyocyte survival and contractile protein integrity; SS-31 addresses IMM cardiolipin quality and ETC efficiency; GHK-Cu addresses extracellular matrix remodeling and antioxidant gene expression. No primary receptors overlap (VEGFR2/eNOS, ILK, cardiolipin, TGF-β1/Nrf2 respectively), making true mechanistic additive or synergistic effects biologically plausible. The full factorial design (6-group TAC study above) is required to detect interaction effects — a 2-group comparison of vehicle vs full stack cannot attribute contributions of individual compounds or confirm synergy vs simple additivity.',
    },
    {
      type: 'paragraph',
      text: 'Power calculation for the 6-group TAC study: primary endpoint Masson fibrosis % (CV% ≈ 22% in TAC model, targeted 40% reduction, δ = 30 percentage points from ~70% to ~42%). Two-sample t-test: α = 0.05, 80% power → n = 9 per group. With 15% attrition for TAC mortality: n = 10–12 per group, total N = 60–72. Add n = 10 sham controls: total animal requirement ≈ 70–82 mice. Budget for 4 rounds of echocardiography (baseline, Week 2, Week 6, sacrifice) at approximately 45 min per mouse.',
    },
    {
      type: 'paragraph',
      text: 'This article is for research use only. BPC-157, TB-500, SS-31, and GHK-Cu are research compounds not approved for human therapeutic use. All animal studies must be conducted under IACUC-approved protocols in compliance with institutional and federal guidelines.',
    },
  ],
};
