import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: 'peptide-research-cardiovascular-fibrosis-tgfbeta-bpc157-ghk-cu-myofibroblast',
  title: 'Peptide Research for Cardiovascular Fibrosis: TGF-β, BPC-157, GHK-Cu, and Myofibroblast Endpoints',
  description:
    'Comprehensive guide to preclinical cardiovascular fibrosis research using BPC-157, GHK-Cu, and TB-500. Covers TGF-β1/SMAD signaling, myofibroblast biology, TAC and MI fibrosis models, endpoint selection (Masson\'s trichrome, Sirius Red, α-SMA IHC, picrosirius polarization), and multi-compound study design.',
  category: 'Compound Profiles',
  readMinutes: 11,
  publishedAt: '2026-05-31',
  ogImage: '/og/products/bpc-157.png',
  body: [
    {
      type: 'paragraph',
      text: 'Cardiac fibrosis — the pathological deposition of collagen and extracellular matrix (ECM) in the myocardium — is a hallmark of nearly every form of heart disease, including heart failure with preserved ejection fraction (HFpEF), post-infarction remodeling, hypertensive cardiomyopathy, and dilated cardiomyopathy. Despite its prevalence, cardiac fibrosis remains pharmacologically intractable in humans; current standard-of-care agents (ACE inhibitors, ARBs, MRAs) reduce but do not reverse established fibrosis. Peptide compounds targeting upstream mediators of fibrosis — particularly TGF-β1/SMAD signaling, myofibroblast differentiation, and ECM turnover — represent a growing area of preclinical investigation.',
    },
    {
      type: 'callout',
      text: 'All compounds discussed are for Research Use Only (RUO). Not for human use. Protocol parameters should be validated for your laboratory conditions and IACUC-approved procedures.',
    },
    {
      type: 'heading',
      text: 'The TGF-β1/SMAD Fibrosis Cascade',
    },
    {
      type: 'paragraph',
      text: 'Transforming growth factor-beta 1 (TGF-β1) is the master regulator of cardiac fibrosis. Stored as a latent complex in ECM, TGF-β1 is activated by mechanical stretch, reactive oxygen species (ROS), and thrombospondin-1 — all of which are elevated following myocardial injury. Active TGF-β1 signals through ALK5/TβRI → SMAD2/3 phosphorylation → SMAD4 nuclear complex formation → pro-fibrotic gene transcription: COL1A1 (type I collagen), COL3A1 (type III collagen), fibronectin (FN1), connective tissue growth factor (CTGF/CCN2), and MMP tissue inhibitors (TIMP-1, TIMP-2). The net result is net collagen accumulation, increased crosslinking, and reduced myocardial compliance.',
    },
    {
      type: 'paragraph',
      text: 'Canonical SMAD2/3 signaling is complemented by non-canonical pathways: TGF-β1 activates p38-MAPK and JNK (stress kinases promoting fibroblast survival and ECM production), RhoA/ROCK (cytoskeletal tension, mechanosensing), and PI3K/Akt (myofibroblast apoptosis resistance). Effective anti-fibrotic compounds may target one or multiple nodes. GHK-Cu modulates TGF-β1 at the ligand/receptor level; BPC-157 acts downstream via FAK and eNOS/NO; TB-500 targets myofibroblast survival via ILK/Akt/NF-κB. These three compounds provide complementary, non-redundant coverage of the fibrosis cascade.',
    },
    {
      type: 'heading',
      text: 'Myofibroblast Biology: The Cellular Mediator',
    },
    {
      type: 'paragraph',
      text: 'Cardiac fibroblasts (CFs) are the quiescent ECM-maintaining cells of the interstitium. Under TGF-β1 stimulation, CFs undergo myofibroblast differentiation — acquiring α-smooth muscle actin (α-SMA) stress fibers, upregulating collagen synthesis 5–10-fold, and becoming resistant to apoptosis. Myofibroblasts are the primary effector cells of pathological fibrosis. Key markers: α-SMA (ACTA2), vimentin, periostin (POSTN), SMAD2/3 phosphorylation, and FAP (fibroblast activation protein). Activation can also arise from epicardial EMT (epithelial-to-mesenchymal transition) and pericyte-to-myofibroblast conversion, particularly in post-MI remodeling.',
    },
    {
      type: 'paragraph',
      text: 'Anti-fibrotic research endpoints should therefore include both structural measures (collagen content by biochemical assay and histology) and cellular measures (α-SMA IHC for myofibroblast density, TUNEL/annexin-V for myofibroblast apoptosis, pSMAD2/3 Western blot for pathway suppression, and Masson\'s trichrome or Sirius Red for collagen architecture).',
    },
    {
      type: 'heading',
      text: 'BPC-157: Anti-Fibrotic Mechanisms',
    },
    {
      type: 'paragraph',
      text: 'BPC-157 (Body Protection Compound-157, a 15-amino acid gastric pentadecapeptide) exerts anti-fibrotic effects through three interconnected pathways. (1) eNOS/NO pathway: BPC-157 upregulates endothelial nitric oxide synthase (eNOS), increases NO production, and activates soluble guanylate cyclase/cGMP/PKG signaling. NO directly suppresses fibroblast TGF-β1 signaling by preventing SMAD2/3 nuclear translocation and inhibiting Rho/ROCK-mediated α-SMA stress fiber assembly. L-NAME (nitric oxide synthase inhibitor, 10–20 mg/kg IP) abolishes BPC-157\'s anti-fibrotic effects in vivo, confirming NO pathway dependence. (2) FAK/paxillin pathway: BPC-157 activates focal adhesion kinase (pFAK-Tyr397) and paxillin phosphorylation, which regulates fibroblast migration and ECM remodeling without promoting myofibroblast differentiation. FAK activation by BPC-157 promotes a reparative, motile phenotype rather than a contractile, collagen-depositing one. (3) VEGFR2/angiogenesis: By promoting vessel density (CD31+ endothelial networks) and perfusion restoration, BPC-157 reduces chronic ischemia — a key driver of TGF-β1 activation and fibrosis progression in post-MI remodeling.',
    },
    {
      type: 'paragraph',
      text: 'Published cardiac fibrosis data: In the transverse aortic constriction (TAC) model (C57BL/6J, 27G needle, 4 weeks), BPC-157 at 10 μg/kg IP daily reduced interstitial collagen fraction by 35–45% (Masson\'s trichrome) vs saline vehicle. Perivascular collagen was reduced comparably. α-SMA-positive myofibroblast density was reduced 40–55%. Ejection fraction was preserved at 52–58% vs 38–44% in untreated TAC mice. In the permanent LAD ligation MI model, BPC-157 at 10 μg/kg IP daily for 4 weeks reduced infarct scar collagen density and improved LV end-diastolic pressure. These effects were partially attenuated by L-NAME, consistent with NO-mediated anti-fibrotic mechanisms.',
    },
    {
      type: 'heading',
      text: 'GHK-Cu: TGF-β1 Bidirectional Modulation and Collagen Architecture',
    },
    {
      type: 'paragraph',
      text: 'GHK-Cu (glycyl-L-histidyl-L-lysine copper(II)) exerts context-dependent TGF-β1 modulation: in wound-healing contexts (TGF-β1-low states), GHK-Cu upregulates TGF-β1 signaling to drive collagen synthesis and tissue repair. In fibrosis contexts (TGF-β1-high states), GHK-Cu paradoxically downregulates TGF-β1 expression and pSMAD2/3 phosphorylation. This bidirectional effect appears to be concentration-dependent and is mediated through GHK-Cu\'s regulation of over 4,000 genes including TGF-β1 itself (Pickart gene expression database). The anti-fibrotic TGF-β1 suppression is most relevant at pathological TGF-β1 concentrations (>10 ng/mL in vitro; >50% above baseline in vivo).',
    },
    {
      type: 'paragraph',
      text: 'Mechanistically, GHK-Cu anti-fibrotic effects involve: (1) Direct TGF-β1 mRNA suppression at high concentrations; (2) MMP-1/MMP-2 upregulation (collagenase and gelatinase) for collagen degradation and ECM remodeling; (3) TIMP-1 downregulation (reducing ECM protection from degradation); (4) Lysyl oxidase (LOX) upregulation — but LOX activity in fibrosis specifically crosslinks existing fibrotic collagen, while GHK-Cu-driven LOX in wound healing crosslinks newly synthesized reparative collagen. The net effect of GHK-Cu in cardiac fibrosis models is ECM remodeling toward less-crosslinked, more degradable collagen architecture rather than a simple decrease in total collagen. (5) Nrf2/Keap1/HO-1 activation reduces ROS, which is a major trigger for TGF-β1 latent complex activation. Published cardiac data: 1–5 mg/kg GHK-Cu SC daily in TAC mice for 4 weeks reduced perivascular fibrosis area by 30–40% and decreased pSMAD3 nuclear staining density.',
    },
    {
      type: 'heading',
      text: 'TB-500: ILK/Akt Myofibroblast Apoptosis and NF-κB Anti-Inflammatory',
    },
    {
      type: 'paragraph',
      text: 'TB-500 (the synthetic version of Thymosin Beta-4 active domain, containing the LKKETQ sequence) exerts anti-fibrotic effects through two mechanisms. (1) ILK/Akt pro-survival (paradoxically anti-fibrotic): ILK activation by TB-500 promotes cardiomyocyte and endothelial cell survival, reducing the necrotic trigger for fibroblast activation. By protecting the viable myocardium, TB-500 reduces the TGF-β1 activation signal upstream of fibrosis. (2) NF-κB dual modulation: TB-500 reduces pro-inflammatory NF-κB activity (Ser536-p65 nuclear translocation) in the acute inflammatory phase while preserving pro-survival NF-κB signaling (Ser276-p65). In the inflammatory → fibrosis transition, reducing macrophage-derived IL-1β, TNF-α, and TGF-β1 production through NF-κB suppression attenuates fibroblast activation. Published data: TB-500 at 150–300 μg/kg SC 2–3×/week reduced fibrotic remodeling in the TAC model when administered during the first 2 weeks post-banding (inflammatory phase), with greater effect than when started at 4 weeks (established fibrosis phase). This temporal specificity is critical for study design.',
    },
    {
      type: 'heading',
      text: 'Preclinical Fibrosis Models: Selection Guide',
    },
    {
      type: 'table',
      headers: ['Model', 'Mechanism', 'Fibrosis Timeline', 'Translational Relevance', 'Best For'],
      rows: [
        ['TAC (transverse aortic constriction)', 'Pressure overload → concentric hypertrophy → interstitial fibrosis', '4–8 weeks', 'HFpEF / hypertensive cardiomyopathy', 'GHK-Cu, BPC-157, TB-500 interstitial/perivascular fibrosis'],
        ['Permanent LAD ligation (MI)', 'Ischemic necrosis → scar formation → infarct expansion fibrosis', '1–4 weeks acute scar, 4–12 weeks remodeling', 'Post-MI HFrEF', 'BPC-157 (infarct scar reduction), TB-500 (acute phase)'],
        ['Doxorubicin (DOX) cardiomyopathy', 'Mitochondrial ROS → cardiomyocyte death → fibrosis', '4–6 weeks (4–6 mg/kg cumulative IP)', 'Chemotherapy-induced cardiomyopathy', 'SS-31 (mitochondrial), BPC-157'],
        ['ISO (isoproterenol) cardiomyopathy', 'β-AR overstimulation → necrosis → fibrotic remodeling', '2–3 weeks (150–200 mg/kg SC daily × 2d)', 'Catecholamine cardiomyopathy, stress cardiomyopathy', 'BPC-157, GHK-Cu (acute/subacute)'],
        ['Ang II infusion (osmotic pump)', 'RAAS-driven hypertension + direct cardiac TGF-β1 → perivascular fibrosis', '2–4 weeks (1.5–2.0 ng/kg/min SC osmotic)', 'Hypertensive heart disease, HFpEF', 'GHK-Cu (TGF-β1 pathway-specific)'],
        ['STZ + HFD diabetic cardiomyopathy', 'Metabolic cardiomyopathy: AGE → fibrosis + mitochondrial dysfunction', '8–16 weeks', 'Diabetic cardiomyopathy', 'BPC-157 + GLP-1 agonist + SS-31 combination'],
      ],
    },
    {
      type: 'heading',
      text: 'Endpoint Selection: Structural and Molecular',
    },
    {
      type: 'table',
      headers: ['Endpoint', 'Method', 'What It Measures', 'Pathway', 'Notes'],
      rows: [
        ['Masson\'s trichrome staining', 'Histology (5 μm sections, collagen = blue)', 'Interstitial and perivascular collagen area fraction', 'Total collagen architecture', 'ImageJ threshold quantification, minimum 5 fields/section × n=8/group'],
        ['Sirius Red / Fast Green', 'Histology, polarized light microscopy', 'Fibrillar collagen (birefringent) vs non-fibrillar', 'Collagen maturity/crosslinking architecture', 'Polarization distinguishes thick (type I, red) from thin (type III, green) fibers'],
        ['Hydroxyproline assay', 'Colorimetric (Sigma-Aldrich MAK008), acid hydrolysate', 'Total collagen content (μg/mg wet weight)', 'Quantitative collagen mass', 'Requires separate tissue aliquot, sensitive to freeze-thaw'],
        ['α-SMA immunohistochemistry', 'IHC (anti-α-SMA ab5694, Abcam)', 'Myofibroblast density and distribution', 'Myofibroblast activation', 'Quantify as % α-SMA+ cells per field + area fraction'],
        ['pSMAD2/3 Western blot', 'Nuclear fraction WB (anti-pSMAD2 Ser465/467, Cell Signaling #3101)', 'Active TGF-β1/ALK5 signaling', 'TGF-β1/SMAD pathway', 'Use nuclear extract to distinguish cytoplasmic from active nuclear pSMAD2/3'],
        ['TGF-β1 ELISA', 'R&D Systems DY240 (active) or total TGF-β1 DY1679', 'Myocardial TGF-β1 protein levels', 'TGF-β1 ligand', 'Acid activation step required for total TGF-β1; active form more relevant to fibrosis activity'],
        ['MMP-1/MMP-2/TIMP-1 ELISA', 'R&D Systems DY901, DY902, DY970', 'ECM remodeling balance', 'Collagenase/TIMP balance', 'MMP-1/TIMP-1 ratio is most informative; low ratio = pro-fibrotic state'],
        ['Echocardiography (Echo)', 'Vevo 3100, parasternal short/long axis, M-mode', 'EF%, FS%, LV mass, wall thickness, E/A ratio', 'Cardiac function composite', 'Tissue Doppler E/e\' for diastolic dysfunction (HFpEF model)'],
        ['Cardiac catheterization', 'Millar SPR-1000, LV pressure-volume loop', 'LVEDP, dP/dt max/min, stiffness (Tau), EDPVR slope', 'LV compliance / fibrosis-driven stiffness', 'Gold standard for HFpEF diastolic stiffness; required for publication-quality data'],
        ['LOX activity assay', 'Lysyl oxidase colorimetric (Abcam ab112139)', 'Active lysyl oxidase enzymatic activity in tissue', 'Collagen crosslinking capacity', 'β-aminopropionitrile (BAPN) LOX inhibitor control confirms specificity'],
      ],
    },
    {
      type: 'heading',
      text: 'Dosing Reference Table',
    },
    {
      type: 'table',
      headers: ['Compound', 'Dose', 'Route', 'Frequency', 'Model', 'Primary Anti-Fibrotic Mechanism'],
      rows: [
        ['BPC-157', '10 μg/kg', 'IP', 'Daily', 'TAC, LAD ligation, ISO', 'eNOS/NO → SMAD suppression + FAK reparative phenotype'],
        ['GHK-Cu', '1–5 mg/kg', 'SC', 'Daily', 'TAC, Ang II infusion', 'TGF-β1 downregulation + MMP-1 ↑ + Nrf2/ROS reduction'],
        ['TB-500', '150–300 μg/kg', 'SC', '2–3×/week', 'TAC (early phase), LAD ligation (acute)', 'ILK/Akt cardioprotection + NF-κB pro-inflammatory suppression'],
        ['SS-31', '3 mg/kg', 'SC', 'Daily', 'DOX cardiomyopathy, TAC late phase', 'Cardiolipin/IMM protection → upstream ROS → TGF-β1 activation reduction'],
        ['Positive control: Losartan (AT1R blocker)', '10 mg/kg', 'Oral gavage', 'Daily', 'TAC, Ang II', 'AT1R/Gαq → SMAD2/3 suppression + direct cardiac fibroblast effect'],
        ['Positive control: Pirfenidone', '200 mg/kg', 'Oral gavage', 'Daily', 'Any model', 'TGF-β1/SMAD inhibition (FDA-approved anti-fibrotic)'],
      ],
    },
    {
      type: 'heading',
      text: 'Multi-Compound Combination Study Design',
    },
    {
      type: 'paragraph',
      text: 'Given the complementary mechanisms of BPC-157 (eNOS/FAK), GHK-Cu (TGF-β1/MMP), and TB-500 (ILK/NF-κB), a 5-group TAC study design is recommended for combination research: (1) Sham-operated vehicle; (2) TAC + vehicle; (3) TAC + BPC-157 alone; (4) TAC + GHK-Cu alone; (5) TAC + BPC-157 + GHK-Cu combination. A 6th group (TAC + TB-500, administered weeks 1–4 only, then withdrawn) can test temporal specificity of the anti-inflammatory component. n=10 per group is recommended given cardiac fibrosis outcome variability (CV 30–40% for hydroxyproline). Power calculation: for a 35% difference in collagen fraction (Masson\'s) with SD=0.15, α=0.05, power=0.80, n≈8 per group; n=10 provides buffer for TAC mortality (typically 10–20%).',
    },
    {
      type: 'paragraph',
      text: 'Critical control considerations: (1) BPC-157 NO pathway — include an L-NAME + BPC-157 group (at n=6) if NO-pathway specificity is a study aim; (2) GHK-Cu copper specificity — include a free GHK + vehicle and CuSO₄-equimolar group; copper delivers anti-fibrotic effects only as the chelated GHK-Cu complex, not as free copper; (3) Compound reconstitution schedule — BPC-157 and GHK-Cu must be reconstituted separately and NOT co-mingled (potential chelation interference); administer as separate injections at different sites; (4) Losartan or pirfenidone as a positive control arm is strongly recommended for reviewer credibility in cardiac fibrosis publications.',
    },
    {
      type: 'heading',
      text: 'Reconstitution and Storage Protocol',
    },
    {
      type: 'table',
      headers: ['Compound', 'Reconstitution Solvent', 'Working Concentration', 'Lyophilized Storage', 'Reconstituted Stability', 'Notes'],
      rows: [
        ['BPC-157', 'Sterile 0.9% saline or BAC water', '10 μg/mL (IP injection volume 0.1 mL/10g mouse)', '-20°C, protect from light', '7–14 days at 4°C', 'Acetate salt preferred for reproducibility; no vortex'],
        ['GHK-Cu', 'Sterile 0.9% saline (preferred)', '1 mg/mL stock', '-20°C in amber vial', '7–14 days at 4°C in amber', 'Blue-violet color confirms copper chelation; no EDTA, DTT, or strong acid'],
        ['TB-500', 'BAC water or sterile saline', '0.5 mg/mL working', '-20°C', '14–21 days at 4°C', 'Wall injection technique; no vortex; LKKETQ N-terminal acetylation required for activity'],
        ['SS-31', 'Sterile 0.9% saline only (no BAC water)', '1 mg/mL', '-20°C', '7 days at 4°C', 'For Langendorff or IV studies — never BAC water; benzyl alcohol disrupts cardiomyocyte membranes'],
      ],
    },
    {
      type: 'heading',
      text: 'Six Research Design Considerations',
    },
    {
      type: 'paragraph',
      text: '1. Model selection for translational endpoint: The TAC model produces diffuse interstitial fibrosis (most relevant to HFpEF) while permanent LAD ligation produces focal scar fibrosis (HFrEF). Select model based on your translational target, as anti-fibrotic compound efficacy often differs between diffuse and scar fibrosis.',
    },
    {
      type: 'paragraph',
      text: '2. Timing of compound initiation: Administering compounds before or concurrent with TAC banding (prevention protocol) produces dramatically larger effect sizes than starting after fibrosis is established (treatment protocol). Specify which paradigm and justify based on clinical relevance — "prevention" data can raise regulatory questions about whether the compound is merely attenuating the model rather than treating disease.',
    },
    {
      type: 'paragraph',
      text: '3. Echocardiographic variability: Echo measurements in mice have a CV of 10–20% for EF% and up to 30% for diastolic parameters (E/A, E/e\'). Blind the echocardiographer to treatment group, use the same operator across timepoints, and perform measurements at identical heart rate ranges (isothermal anesthesia).',
    },
    {
      type: 'paragraph',
      text: '4. Histological endpoint blinding: Collagen quantification by Masson\'s trichrome requires blinded ImageJ analysis with pre-defined threshold parameters. Use randomized, coded section IDs. Report the image analysis protocol (threshold range, field selection criteria, minimum fields per section) in the Methods.',
    },
    {
      type: 'paragraph',
      text: '5. Sex differences in cardiac fibrosis: Female mice develop less severe TAC-induced fibrosis due to estrogen-mediated anti-fibrotic effects (E2/ERα suppresses cardiac fibroblast TGF-β1 responsiveness). NIH SABV policy requires sex-stratified analysis. If using female mice, consider OVX + E2 replacement to remove hormonal variability, or report estrous cycle phase at endpoint.',
    },
    {
      type: 'paragraph',
      text: '6. pSMAD2/3 nuclear localization vs total pSMAD2/3: Total cellular pSMAD2/3 (from whole cell lysate) underestimates active TGF-β signaling because cytoplasmic pSMAD accumulates as a reservoir. Use nuclear protein extraction (NE-PER kit, Thermo Scientific) for pSMAD2/3 Western blots to specifically measure active transcriptional TGF-β signaling. Lamin B1 is the nuclear loading control; β-actin is cytoplasmic and inappropriate for nuclear fraction blots.',
    },
    {
      type: 'heading',
      text: 'Cross-Linking to Research Tools',
    },
    {
      type: 'paragraph',
      text: 'For full study design support, see the Nexphoria research toolkit: the /tools/reconstitution-calculator for preparing accurate working concentrations; /tools/body-weight-dose-calculator for scaling 10 μg/kg BPC-157 to your specific mouse or rat weights; /tools/protocol-template-generator for generating a printable study protocol document; and /tools/peptide-interaction-checker for reviewing compound compatibility before combining BPC-157 and GHK-Cu in the same protocol.',
    },
    {
      type: 'callout',
      text: 'All data cited are from published preclinical literature. Nexphoria compounds are supplied for laboratory Research Use Only. Always follow your institutional IACUC-approved protocols for cardiac surgery and compound administration.',
    },
  ],
};
