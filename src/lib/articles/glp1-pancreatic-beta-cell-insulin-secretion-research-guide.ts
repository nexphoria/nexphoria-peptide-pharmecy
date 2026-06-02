import { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: 'glp1-pancreatic-beta-cell-insulin-secretion-research-guide',
  title: 'GLP-1 Agonists and Pancreatic Beta-Cell Research: Insulin Secretion, Beta-Cell Mass, and Study Design',
  description:
    'A comprehensive research guide to GLP-1 receptor agonist effects on pancreatic beta cells: glucose-stimulated insulin secretion (GSIS), beta-cell mass expansion, apoptosis protection, glucotoxicity models, and full in vitro and in vivo study design protocols for metabolic researchers.',
  category: 'Metabolic',
  readMinutes: 11,
  publishedAt: '2026-06-02',
  ogImage: '/og/products/semaglutide.png',
  body: [
    {
      type: 'paragraph',
      text: 'The pancreatic beta cell is the central effector of glucose homeostasis — a highly specialized secretory cell that synthesizes, stores, and releases insulin in precise response to nutrient signals. In type 2 diabetes and obesity-driven metabolic dysfunction, beta-cell mass declines progressively through glucotoxicity, lipotoxicity, oxidative stress, and ER stress-induced apoptosis, while surviving cells become functionally exhausted and fail to secrete adequate insulin. GLP-1 receptor agonists — including semaglutide, tirzepatide, and retatrutide — exert direct and potent effects on pancreatic beta cells that extend well beyond glucose-stimulated insulin secretion (GSIS). This article provides a detailed mechanistic, experimental, and protocol reference for researchers studying GLP-1 agonist effects on beta-cell biology.',
    },
    {
      type: 'heading',
      text: 'GLP-1R Signaling in the Beta Cell: The cAMP/PKA/CREB Cascade',
    },
    {
      type: 'paragraph',
      text: 'The GLP-1 receptor (GLP-1R) is a class B1 GPCR expressed at highest density on pancreatic beta cells. GLP-1R coupling to Gαs activates adenylyl cyclase, generating cAMP that activates both PKA and EPAC2 (exchange protein activated by cAMP, type 2). These two effectors mediate distinct but complementary beta-cell responses. PKA phosphorylates KATP channel subunits (SUR1/Kir6.2), L-type Ca²⁺ channels (Cav1.2/1.3), and RIM proteins at the active zone of insulin granule exocytosis — all amplifying Ca²⁺-triggered insulin secretion. EPAC2 (encoded by RAPGEF4) independently activates Rap1/Rab3A pathways that prime insulin granule docking and fusion, enabling cAMP to amplify GSIS even under conditions where PKA is blocked.',
    },
    {
      type: 'paragraph',
      text: 'Downstream of PKA, the CREB (cAMP response element-binding protein) transcription factor is phosphorylated at Ser133. pCREB drives transcription of IRS-2 (insulin receptor substrate-2), PDX-1 (pancreatic duodenal homeobox 1), and anti-apoptotic genes including Bcl-2, Bcl-xL, and MCL-1. IRS-2 is the primary PI3K-activating scaffold in beta cells (distinct from IRS-1 predominance in skeletal muscle), and IRS-2/PI3K/Akt/FOXO1 signaling drives beta-cell survival and proliferation. PDX-1 is the master transcription factor of beta-cell identity — its expression level directly controls insulin gene transcription, beta-cell differentiation markers, and the functional reserve capacity of individual beta cells.',
    },
    {
      type: 'heading',
      text: 'Glucose-Stimulated Insulin Secretion: Amplification by GLP-1R Agonists',
    },
    {
      type: 'paragraph',
      text: 'GSIS proceeds through the canonical KATP channel-dependent pathway: glucose uptake via GLUT2 (rodents) or GLUT1/3 (humans) → glycolysis → mitochondrial oxidation → ATP:ADP ratio rise → KATP channel closure → membrane depolarization → Cav1.2 L-type Ca²⁺ channel opening → Ca²⁺ influx → insulin granule exocytosis. Critically, GLP-1R agonists do NOT trigger insulin secretion in the absence of glucose — this glucose-dependency is the key distinction from sulfonylureas and is the mechanistic basis of the low hypoglycemia risk of GLP-1R agonists.',
    },
    {
      type: 'paragraph',
      text: 'At stimulatory glucose concentrations (>5 mM in rodent islets, >7 mM in human islets), GLP-1R activation amplifies GSIS by 2–10 fold depending on dose and basal GSIS level. This amplification occurs through both first-phase (within 5 min of glucose stimulus, from readily releasable pool granules) and second-phase (sustained, from reserve pool) secretion. GLP-1R agonists have a stronger amplification effect on first-phase secretion — a pharmacologically important finding because first-phase GSIS is the component most severely impaired in early T2D.',
    },
    {
      type: 'table',
      headers: ['GLP-1R Agonist', 'Receptor Profile', 'GSIS Amplification (in vitro islets)', 'Beta-Cell Mass Effect (DIO rodents)', 'Key Reference'],
      rows: [
        ['Semaglutide', 'GLP-1R monoagonist', '3–6× at 8–12 mM glucose', '+15–25% beta-cell area (8 weeks DIO)', 'Kapodistria 2018, Frontiers Endocrinol'],
        ['Tirzepatide', 'GLP-1R + GIPR dual agonist', '4–8× at 8–12 mM glucose (additive GIPR contribution)', '+20–35% beta-cell area + improved function', 'Samms 2021, Cell Metabolism'],
        ['Retatrutide', 'GLP-1R + GIPR + GCGR triple agonist', '3–7× at 8–12 mM glucose (GCGR partially counter-regulatory)', '+15–30% beta-cell area (GCGR limits net benefit)', 'Girard 2023, NEJM Phase 2 subset'],
        ['Exendin-4 (research tool)', 'GLP-1R full agonist (reference standard)', '4–8× at 8–12 mM glucose', '+25–40% beta-cell mass in multiple models', 'Xu 1999, Diabetes; Tourrel 2001'],
        ['GLP-1(7-36)NH₂ (native)', 'GLP-1R agonist, ~2 min half-life', '2–5× at 8–12 mM glucose', 'Limited in vivo due to rapid degradation', 'Drucker 2006 Cell Metabolism (review)'],
      ],
    },
    {
      type: 'heading',
      text: 'Beta-Cell Mass Expansion: Proliferation, Neogenesis, and Anti-Apoptosis',
    },
    {
      type: 'paragraph',
      text: 'Beyond acute GSIS amplification, GLP-1R agonists exert trophic effects on beta-cell mass through three mechanisms: (1) promoting beta-cell proliferation, (2) inhibiting beta-cell apoptosis, and (3) potentially inducing neogenesis from ductal precursors. In rodent models, all three mechanisms have been documented with exendin-4 and liraglutide; the relative contribution of each varies by model, species, age, and metabolic state.',
    },
    {
      type: 'subheading',
      text: 'Proliferation: IRS-2/PI3K/Akt/FOXO1 and cdk4/cyclin D2',
    },
    {
      type: 'paragraph',
      text: 'GLP-1R/cAMP/PKA → pCREB → IRS-2 upregulation → PI3K/Akt activation → FOXO1 nuclear exclusion → PDX-1 nuclear retention → beta-cell cycle re-entry. The downstream cell cycle effectors are cdk4 and its partner cyclin D2, which are highly expressed in beta cells (unlike most post-mitotic cell types that predominantly use cdk4/cyclin D1). In 10-week-old DIO C57BL/6J mice treated with exendin-4 (3 nmol/kg IP BID × 4 weeks), Ki-67+ beta cells increase approximately 2–4× over vehicle, with beta-cell area expanding 25–40% by morphometry.',
    },
    {
      type: 'subheading',
      text: 'Anti-Apoptosis: Bcl-2, Bad Phosphorylation, and ER Stress Mitigation',
    },
    {
      type: 'paragraph',
      text: 'Glucotoxicity-induced beta-cell apoptosis proceeds predominantly via the mitochondrial (intrinsic) pathway: Bax translocation to mitochondria, cytochrome c release, caspase-9/3 cascade. GLP-1R/PKA signaling phosphorylates Bad at Ser136, preventing its interaction with Bcl-2 and Bcl-xL and blocking Bax activation. Simultaneously, pCREB upregulates Bcl-2 transcription, increasing the Bcl-2:Bax ratio. In INS-1 beta cells exposed to high glucose (25–33 mM × 48–72h), GLP-1 (100 nM) reduces TUNEL-positive cells by 40–65% compared to glucotoxicity vehicle. Caspase-3 cleavage is reduced by 50–75%. These effects are PKA-dependent (blocked by H-89) and EPAC2-partially-dependent.',
    },
    {
      type: 'paragraph',
      text: 'ER stress is a second major beta-cell death pathway in T2D. The unfolded protein response (UPR) — PERK/eIF2α, IRE1α/XBP1, ATF6 branches — is activated by glucolipotoxicity and ER Ca²⁺ dysregulation. Chronic UPR activation in beta cells triggers CHOP (C/EBP homologous protein, encoded by DDIT3) induction and apoptosis. GLP-1R agonists attenuate ER stress markers in multiple models: liraglutide (100–300 nM in INS-1 cells exposed to palmitate/high glucose) reduces CHOP expression by 40–60%, reduces p-eIF2α by 30–50%, and restores XBP1 splicing toward adaptive (rather than pro-apoptotic) patterns.',
    },
    {
      type: 'heading',
      text: 'GIPR Co-Activation: Tirzepatide\'s Additional Beta-Cell Benefit',
    },
    {
      type: 'paragraph',
      text: 'The GIP receptor (GIPR) is also expressed on beta cells, where it couples to Gαs/cAMP through mechanisms similar to GLP-1R. Native GIP (released from K-cells of the proximal small intestine in response to fat and carbohydrate) is a potent insulin secretagogue in healthy subjects but loses efficacy in T2D — partly due to reduced GIPR signaling in glucotoxic beta cells. Tirzepatide, as a balanced GLP-1R/GIPR dual agonist, restores GIPR responsiveness in glucotoxic beta cells through mechanisms not yet fully characterized but potentially involving GIPR resensitization via the GLP-1R/EPAC2 pathway. In DIO mouse islets, tirzepatide produces greater GSIS amplification than equimolar semaglutide (Samms 2021 Cell Metabolism), with GIPR contributing approximately 30–40% of the incremental insulin secretory response above GLP-1R monoagonism.',
    },
    {
      type: 'heading',
      text: 'Preclinical Models for Beta-Cell Research',
    },
    {
      type: 'table',
      headers: ['Model', 'Beta-Cell Defect', 'GLP-1 Agonist Dose (semaglutide)', 'Key Endpoints', 'Limitations'],
      rows: [
        ['DIO C57BL/6J (HFD 60% kcal fat, 12–16 weeks)', 'Functional exhaustion, mild mass decline, insulin resistance', '0.1–0.3 mg/kg SC 1×/week', 'GSIS ex vivo islets, IPGTT, beta-cell area morphometry, Ki-67', 'Relatively mild beta-cell loss; reversible with diet'],
        ['db/db mouse (leptin receptor-KO)', 'Progressive beta-cell failure, glucolipotoxicity, severe apoptosis', '0.05–0.1 mg/kg SC 3×/week (lower dose for renal function)', 'TUNEL, caspase-3, CHOP, GSIS, islet morphology', 'Monogenic; limited translatability to polygenic T2D'],
        ['STZ partial (55–100 mg/kg IP)', 'Direct beta-cell ablation (dose-dependent)', '0.1–0.3 mg/kg SC 1×/week', 'Beta-cell regeneration/protection if started pre-STZ', 'Chemical burn not T2D physiology; use cautiously'],
        ['Zucker Diabetic Fatty (ZDF) rat', 'Progressive glucolipotoxic beta-cell failure on high-fat diet', '0.01–0.05 mg/kg SC 1×/week (lower rat dose)', 'HbA1c, IPGTT AUC, ex vivo GSIS, islet mass', 'fa/fa mutation; more translatable than db/db'],
        ['Glucotoxicity in vitro: INS-1 / MIN6 / human islets at 25–33 mM glucose ×48–72h', 'ER stress, apoptosis, GSIS impairment', '1–100 nM GLP-1 or GLP-1R agonist', 'GSIS static incubation, TUNEL, caspase-3/9, p-eIF2α, CHOP, Bcl-2:Bax ratio', 'Cell lines differ from primary islets; human islets donor variability'],
        ['Lipotoxicity: palmitate 0.5–1.0 mM + BSA carrier × 24–48h', 'Ceramide-mediated apoptosis, mitochondrial dysfunction', '1–100 nM GLP-1R agonist concurrent', 'Ceramide LC-MS, JC-1, TUNEL, caspase-3, GSIS recovery', 'Fatty acid concentration matters; complex with BSA correctly'],
      ],
    },
    {
      type: 'heading',
      text: 'GSIS Assay Protocols: Static Incubation and Perifusion',
    },
    {
      type: 'subheading',
      text: 'Static GSIS (Islet Batch Incubation)',
    },
    {
      type: 'paragraph',
      text: 'Isolate islets by collagenase P (Sigma C9891, 0.5 mg/mL in HBSS, pancreatic duct injection at 3–5 mL, 37°C × 8–10 min) → Ficoll gradient (Sigma F5415) → handpicking under sterile dissection scope → overnight recovery in RPMI 1640 + 10% FBS + 11 mM glucose at 37°C/5% CO₂. For GSIS: transfer 10 size-matched islets per well (24-well low-attachment plates), pre-incubate in KRB buffer (125 mM NaCl, 5.9 mM KCl, 1.2 mM MgCl₂, 1.3 mM CaCl₂, 25 mM HEPES, 0.1% BSA, pH 7.4) + 2.8 mM glucose × 1h at 37°C (starvation step). Then: basal condition (2.8 mM glucose × 30 min, collect supernatant), stimulated condition (16.7 mM glucose ± GLP-1R agonist × 30 min, collect supernatant). Insulin ELISA on both fractions (Mercodia #10-1247-01, or Crystal Chem #90080). Stimulation index = [high glucose insulin] / [basal insulin]. Values <3 indicate impaired beta-cell function; values >8 indicate robust response.',
    },
    {
      type: 'subheading',
      text: 'Dynamic Perifusion (Gold Standard)',
    },
    {
      type: 'paragraph',
      text: 'Perifusion resolves the temporal kinetics of insulin secretion that static incubation obscures. 100 islets loaded into a perifusion chamber (Biorep Technologies or DIY glass column with 70 μm nylon mesh) → KRB perifusion at 1 mL/min flow rate → 2.8 mM glucose baseline (10 min) → step to 16.7 mM glucose (30 min) → GLP-1R agonist addition (30 min) → step back to 2.8 mM glucose (10 min). Fractions collected every 2 min. Perifusion reveals first-phase peak (minutes 2–6 of high glucose) and second-phase plateau (minutes 10–30), and clearly demonstrates GLP-1R agonist amplification of both phases. This is required for mechanistic papers — static GSIS should not be the sole endpoint in a perifusion-capable lab.',
    },
    {
      type: 'heading',
      text: 'Beta-Cell Mass Measurement: Morphometry and Flow Cytometry',
    },
    {
      type: 'paragraph',
      text: 'Pancreas perfusion-fixation at the time of sacrifice (cardiac perfusion with 4% PFA → pancreas removal → 24h post-fix → 70% ethanol → paraffin embedding). Serial sections at 200 μm intervals (minimum 5 levels through the organ). Insulin immunostaining (Dako IR002, 1:200) with hematoxylin counterstain. Morphometric analysis: beta-cell area as % total pancreatic area (NIS-Elements or QuPath image analysis). Minimum 10 sections per animal, 3 animals per group. Mean beta-cell area correlates with absolute beta-cell mass when combined with pancreas weight. Limitations: labor-intensive, does not capture individual cell function or gene expression. Flow cytometry alternative: Newport Green DCF (Invitrogen N7534) marks zinc-rich insulin-containing granules → live islet cell FACS gives beta-cell count and proportion within total islet cells. Useful for proliferation (BrdU/EdU co-staining) and apoptosis (Annexin V) experiments.',
    },
    {
      type: 'heading',
      text: 'Pharmacological Controls for Beta-Cell Studies',
    },
    {
      type: 'table',
      headers: ['Control', 'Purpose', 'Dose / Concentration', 'Notes'],
      rows: [
        ['Exendin-4(9-39) — Ex9-39', 'Competitive GLP-1R antagonist; blocks all GLP-1R effects', '100 nM in vitro; 3–10 nmol/kg SC/IP in vivo', 'Gold standard GLP-1R specificity control; use concurrent with GLP-1R agonist to confirm receptor-mediated effects'],
        ['H-89 (PKA inhibitor)', 'Dissect PKA vs EPAC2 contribution to GSIS amplification', '10 μM in vitro (30 min pre-treatment)', 'Does not block EPAC2; use with 8-pCPT-2-OMe-cAMP (EPAC-selective agonist) for full pathway dissection'],
        ['ESI-05 (EPAC2-selective inhibitor)', 'Dissect EPAC2-specific insulin secretion component', '10 μM in vitro', 'Use in combination with H-89 for dual pathway dissection'],
        ['GLP-1R-KO mice (B6.129-Glp1r^tm1Ddr/J, JAX #006341)', 'Confirm in vivo GLP-1R specificity', 'Same dosing as WT littermates', 'Include GLP-1R-KO arm in all mechanistic in vivo beta-cell studies'],
        ['Streptozotocin (high dose, 200 mg/kg IP)', 'Complete beta-cell ablation positive control', 'Single IP injection, confirm hyperglycemia >300 mg/dL at 72h', 'Useful for neogenesis studies: treat then ask if GLP-1R agonist drives recovery'],
        ['Z-VAD-FMK (pan-caspase inhibitor)', 'Confirm apoptosis mechanism in glucotoxicity models', '20 μM in vitro', 'Should recapitulate GLP-1R agonist protection if apoptosis is the primary mechanism'],
        ['Tunicamycin (ER stress inducer)', 'Positive control for ER stress endpoint panel', '5 μg/mL in vitro ×12h', 'Use to validate p-eIF2α/CHOP antibody detection before running experimental conditions'],
      ],
    },
    {
      type: 'heading',
      text: 'In Vivo Study Design: DIO Beta-Cell Expansion Protocol',
    },
    {
      type: 'paragraph',
      text: 'The standard DIO C57BL/6J beta-cell study design: males 6–8 weeks old, HFD (Research Diets D12492, 60% kcal fat) × 16 weeks to establish obesity and early glucose intolerance (fasting glucose 140–200 mg/dL, IPGTT AUC 1.5–2× chow controls). Randomize by body weight and fasting glucose into groups (n = 10–12 per group; power estimate based on 20–25% beta-cell area effect, CV ≈ 25%, 80% power → n ≈ 8). Treatment ×8 weeks: (1) DIO vehicle (SC PBS 1×/week); (2) Semaglutide 0.1 mg/kg SC 1×/week; (3) Semaglutide 0.3 mg/kg SC 1×/week; (4) Tirzepatide 3 mg/kg SC 1×/week; (5) Chow vehicle control.',
    },
    {
      type: 'paragraph',
      text: 'Endpoints at sacrifice (week 24): (a) Beta-cell mass morphometry — perfusion fix, serial sections, insulin IHC, morphometric analysis; (b) Ki-67/insulin double immunofluorescence — proliferating beta cells as % total insulin+ cells; (c) TUNEL/insulin double IF — apoptotic beta cells; (d) PDX-1/insulin double IF — PDX-1 intensity as functional reserve marker; (e) Ex vivo GSIS — islets isolated at sacrifice, perifusion and static protocols; (f) pCREB/insulin IHC — GLP-1R signaling activation in vivo; (g) CHOP/insulin IHC — ER stress burden in vivo; (h) Plasma insulin (ELISA) and C-peptide (ELISA) at ZT2 from tail nick after 4h fast; (i) IPGTT with insulin response curve (0, 15, 30, 60, 120 min post 1.5 g/kg IP glucose). This comprehensive endpoint set enables mechanistic papers with full secretory + structural + signaling resolution.',
    },
    {
      type: 'heading',
      text: 'Reconstitution and Storage for Beta-Cell Research',
    },
    {
      type: 'table',
      headers: ['Compound', 'Reconstitution Solvent', 'Stock Concentration', 'Storage', 'Notes for Beta-Cell Studies'],
      rows: [
        ['Semaglutide', 'BAC water (0.9% benzyl alcohol), pH 7.4', '5 mg/mL stock → dilute in PBS for SC injection', '-20°C lyophilized; 4°C reconstituted ≤4 weeks, amber vial', 'No adsorption to polypropylene at ≥0.1 mg/mL; use low-bind tubes for <0.1 mg/mL dilutions'],
        ['Tirzepatide', 'BAC water, pH 7.0–7.4', '5 mg/mL stock → dilute in PBS for SC injection', '-20°C lyophilized; 4°C reconstituted ≤4 weeks, amber vial', 'Prepare fresh diluted working solutions within 24h of injection'],
        ['Exendin-4 (research)', 'Sterile PBS pH 7.4', '100 μg/mL stock → dilute for in vivo', '-20°C; avoid freeze-thaw; working aliquots at 4°C ≤2 weeks', 'Frequently used in vitro at 10–100 nM in KRB buffer with BSA carrier'],
        ['Ex9-39 (antagonist)', 'Sterile PBS pH 7.4', '1 mM stock in PBS', '-20°C lyophilized; 4°C reconstituted ≤1 week', 'Add to GSIS assay medium concurrent with agonist, not as pre-treatment; short half-life in vivo (15-20 min)'],
        ['GLP-1(7-36)NH₂ (native)', 'Sterile PBS pH 7.4 + 0.1% BSA', '1 mg/mL stock → dilute to 100 nM for in vitro', '-80°C working aliquots; thaw once per experiment', 'Add DPP-4 inhibitor (diprotin A, 10 μM) to incubation medium to prevent rapid degradation'],
      ],
    },
    {
      type: 'heading',
      text: 'Sex Differences and Human Islet Considerations',
    },
    {
      type: 'paragraph',
      text: 'Female mice have higher basal beta-cell mass and superior GSIS compared to males, driven partly by estrogen receptor alpha (ERα) signaling on beta cells — ERα activates PDX-1 and IRS-2. GLP-1R agonist effects on beta-cell proliferation may be attenuated in females relative to males, as their beta-cell proliferative reserve is partially maximized by estrogen. For NIH SABV compliance in DIO beta-cell studies, run sex-stratified analyses rather than pooling. If resources permit only one sex, male C57BL/6J on HFD represents the more severe beta-cell failure phenotype and is the standard in the literature.',
    },
    {
      type: 'paragraph',
      text: 'Human islets (available from the Integrated Islet Distribution Program, IIDP, or nPOD biobank) represent the translational gold standard for in vitro GLP-1R agonist work. Caveats: donor variability in GSIS response (CV up to 50% across donors), DPP-4 expression varies, and GLP-1R density differs from rodent islets. Minimum n = 5 independent donors per condition for any statistical claim. Fresh islets outperform cryopreserved for GSIS assays. Match donor demographics (BMI, T2D status, age, sex) across experimental groups where possible.',
    },
    {
      type: 'heading',
      text: 'Research Design Considerations',
    },
    {
      type: 'paragraph',
      text: '1. Pair-fed controls are mandatory for in vivo beta-cell mass studies with GLP-1R agonists. GLP-1R agonists reduce food intake by 20–40% in DIO rodents. Caloric restriction alone expands beta-cell mass and improves GSIS in obese rodents. Without a pair-fed control (restricted to caloric intake of GLP-1R agonist-treated group), you cannot attribute beta-cell effects to direct GLP-1R signaling vs indirect weight loss effects.',
    },
    {
      type: 'paragraph',
      text: '2. Steady-state sampling for in vivo endpoints. Semaglutide has a ~6-day half-life in mice at typical doses. Blood collection for insulin, C-peptide, or IPGTT should occur at minimum 4 weeks post-treatment initiation, and consistently at the same time point post-injection each week (e.g., always sample 72h post-injection to standardize drug concentration).',
    },
    {
      type: 'paragraph',
      text: '3. Ex vivo GSIS at sacrifice. Islet isolation stress reduces GSIS for the first 12–24h. Overnight recovery in RPMI before GSIS assay is required. Fresh isolation and same-day assay underestimates GLP-1R agonist beta-cell functional improvements. If logistics require same-day assay, add exendin-4 (100 nM) to all groups to maximize the assay window, and report the Ex4-stimulated GSIS as the functional readout.',
    },
    {
      type: 'paragraph',
      text: '4. Glucotoxicity model concentration range. Using 33 mM glucose in vitro (a common approach) creates artifactual osmotic stress. Use 25 mM as the maximum glucotoxic concentration with 5.5 mM mannitol as osmotic control for 25 mM glucose conditions. The physiologically relevant glucotoxic range is 15–20 mM glucose × 48–96h.',
    },
    {
      type: 'paragraph',
      text: '5. GIPR additive effects in tirzepatide studies. If comparing semaglutide vs tirzepatide on beta-cell endpoints, include a GIPR-selective agonist arm (e.g., GIPR agonist compound, available from Cayman/Tocris) and a GLP-1R + GIPR dual agonist arm to reconstruct the dual agonism contribution. This design directly quantifies the GIPR additive component vs GLP-1R component of tirzepatide\'s beta-cell effects.',
    },
    {
      type: 'paragraph',
      text: '6. Neogenesis vs proliferation distinction. New beta-cell formation from ductal precursors (neogenesis) vs existing beta-cell replication (proliferation) require different endpoint strategies. For proliferation: BrdU/EdU pulse labeling (pulse 1 week before sacrifice, detect by IHC/IF). For neogenesis: lineage tracing using Hnf1b-CreERT2 × Rosa-tdTomato mice — tamoxifen labels ductal cells, and any tdTomato+/insulin+ cells appearing post-treatment represent neogenic beta cells. This is the definitive neogenesis experiment and requires specialized transgenic mice not needed for standard GLP-1 studies.',
    },
    {
      type: 'disclaimer',
      text: 'All Nexphoria compounds are strictly for research use only (RUO) and are not intended for human consumption, clinical use, or veterinary use. All experimental protocols described in this article require IACUC approval and institutional oversight. Data and dosing protocols are sourced from published peer-reviewed literature and are presented for research planning purposes only.',
    },
  ],
};
