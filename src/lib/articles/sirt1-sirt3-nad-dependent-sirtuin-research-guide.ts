import { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: 'sirt1-sirt3-nad-dependent-sirtuin-research-guide',
  title: 'SIRT1 and SIRT3: The NAD⁺-Dependent Sirtuin Research Guide',
  description:
    'A comprehensive research guide to sirtuin biology: SIRT1 nuclear deacetylase targets (PGC-1α, p53, NF-κB, FOXO3a, BDNF promoter IV), SIRT3 mitochondrial targets (SOD2, IDH2, LCAD, PDHA1), NAD⁺ substrate dependency, compound modulation data, and full study design protocols for longevity and metabolic research.',
  category: 'Longevity',
  readMinutes: 11,
  publishedAt: '2026-06-02',
  ogImage: '/og/products/nad-plus.png',
  body: [
    {
      type: 'paragraph',
      text: 'Sirtuins are a family of seven NAD⁺-dependent deacylases (SIRT1–7) that couple metabolic sensing to epigenetic and post-translational regulation of hundreds of substrates. Their NAD⁺ dependency means that sirtuin activity rises and falls with cellular energy status — a direct molecular link between nutrition, metabolism, and gene expression. Two sirtuins dominate the longevity and metabolic research landscape: SIRT1, a nuclear/cytoplasmic deacetylase that coordinates transcriptional programs, and SIRT3, a mitochondrial deacetylase that controls OXPHOS enzyme activity and mitochondrial redox balance. This article covers the biochemistry, key substrates, research tools, peptide compound interactions, and study design protocols for both.',
    },
    {
      type: 'heading',
      text: 'Sirtuin Biochemistry: NAD⁺ Dependency and the Deacetylation Reaction',
    },
    {
      type: 'paragraph',
      text: 'All sirtuins catalyze the same reaction: NAD⁺ + acetyl-lysine substrate → nicotinamide + 2′-O-acetyl-ADP-ribose + deacetylated substrate. Nicotinamide is both a product and a competitive inhibitor (Ki ~50–100 μM), creating negative feedback at high NAD⁺ consumption rates. The stoichiometry is 1:1 — one NAD⁺ consumed per acetyl group removed. This means that NAD⁺ availability directly controls the maximum rate of sirtuin activity, and NAD⁺ depletion (by PARP1 hyperactivation, CD38 upregulation, or NAMPT decline) is equivalent to pharmacological sirtuin inhibition.',
    },
    {
      type: 'paragraph',
      text: 'Km values for NAD⁺ vary by sirtuin: SIRT1 Km ≈ 94–170 μM, SIRT3 Km ≈ 35–880 μM (substrate-dependent). Nuclear NAD⁺ concentrations in healthy young cells (~100–500 μM) operate near the SIRT1 Km, meaning SIRT1 is highly sensitive to NAD⁺ fluctuations. Mitochondrial NAD⁺ concentrations are higher (~200–500 μM in isolated mitochondria), but decline significantly with aging and in disease states, impairing SIRT3. This concentration dependence is why direct NAD⁺ repletion has more pronounced sirtuin-activating effects in aged or metabolically stressed cells than in young healthy cells.',
    },
    {
      type: 'heading',
      text: 'SIRT1: The Nuclear Metabolic Master Regulator',
    },
    {
      type: 'paragraph',
      text: 'SIRT1 is primarily nuclear but shuttles to the cytoplasm under specific conditions. Its ~120 kDa size is larger than most epigenetic regulators, and it is expressed ubiquitously but with highest activity in the brain, liver, heart, and adipose tissue. SIRT1 protein levels decline ~40–60% between ages 25 and 75 in human muscle and liver tissue, and NAD⁺ availability accounts for approximately half of this functional decline (the rest is transcriptional and post-translational).',
    },
    {
      type: 'subheading',
      text: 'Key SIRT1 Substrates and Their Research Significance',
    },
    {
      type: 'table',
      headers: ['Substrate', 'Acetylation Site', 'Effect of SIRT1 Deacetylation', 'Research Application'],
      rows: [
        ['PGC-1α', 'K183, K450, K480, K494, K570 (13 sites total)', 'Activation → mitochondrial biogenesis, OXPHOS gene transcription, FAO', 'GH secretagogue IGF-1 axis; NAD+/NMN metabolic studies'],
        ['p53', 'K382', 'Reduced p21/PUMA transcription → less apoptosis/senescence', 'Senescence research; SIRT1-p53 axis in DNA damage'],
        ['NF-κB p65', 'K310', 'Reduced transcriptional activity → anti-inflammatory', 'BPC-157/KPV comparison; SASP suppression in aging'],
        ['FOXO3a', 'K242, K245, K259, K262', 'Nuclear localization → autophagy, stress resistance, longevity gene expression', 'Longevity stack protocols; caloric restriction mimetics'],
        ['HIF-1α', 'K674', 'Destabilization → reduced hypoxia-driven gene expression', 'GLP-1 agonist adipose hypoxia studies'],
        ['DNMT3a', 'K736', 'Activation → CpG methylation maintenance', 'Epigenetic clock research; Tian 2023 Aging Cell data'],
        ['BDNF promoter IV', 'H3K9ac at promoter', 'Deacetylation → promoter opening → BDNF transcription upregulation', 'Nootropic stack (Selank + NAD+); cognitive aging'],
        ['Ku70', 'K539, K542', 'Enhanced Bax sequestration → reduced apoptosis', 'DNA repair + cell survival in longevity studies'],
        ['eNOS', 'K496, K506', 'Enzyme activation → NO production → vasodilation', 'BPC-157/SIRT1 vascular studies'],
      ],
    },
    {
      type: 'paragraph',
      text: 'The PGC-1α axis is the most validated in rodent studies. SIRT1-mediated PGC-1α deacetylation is the primary mechanism by which caloric restriction, exercise, and NAD⁺ repletion activate mitochondrial biogenesis. In the canonical pathway, AMPK phosphorylates PGC-1α (Thr177/Ser538), while SIRT1 deacetylates the 13 acetylation sites — both modifications are required for full PGC-1α activation. Compounds that elevate NAD⁺ (NMN, NR) activate SIRT1, which deacetylates PGC-1α, driving mitochondrial biogenesis independently of exercise. This is the mechanistic basis for the Gomes 2013 Cell study (NMN 500 mg/kg/day IP × 7 days reversed skeletal muscle aging markers in 22-month-old mice).',
    },
    {
      type: 'heading',
      text: 'SIRT3: The Mitochondrial Deacetylase',
    },
    {
      type: 'paragraph',
      text: 'SIRT3 is the predominant mitochondrial sirtuin. Unlike SIRT1 and SIRT2 (which have broad cellular distributions), SIRT3 is almost exclusively mitochondrial — where it controls the acetylation status of hundreds of metabolic enzymes. Approximately 65% of mitochondrial proteins are acetylated, and SIRT3 is the primary mitochondrial deacetylase maintaining their activity. SIRT3 knockout mice develop hyperacetylation of mitochondrial proteins, impaired OXPHOS, reduced ATP production, and a metabolic syndrome-like phenotype by middle age.',
    },
    {
      type: 'subheading',
      text: 'Key SIRT3 Substrates and Their Significance',
    },
    {
      type: 'table',
      headers: ['Substrate', 'Acetylation Site', 'Effect of SIRT3 Deacetylation', 'Research Significance'],
      rows: [
        ['SOD2 (MnSOD)', 'K68, K122', 'Full enzyme activation → mitochondrial O₂•⁻ scavenging', 'Oxidative stress; Qiu 2010 PNAS: 3× SOD activity increase'],
        ['IDH2', 'K413', 'Enzyme activation → TCA cycle flux, NADPH production, GSH recycling', 'SIRT3-IDH2-GSH axis in NAD+ research; Someya 2010'],
        ['LCAD', 'K42', 'Activation → long-chain fatty acid oxidation', 'FAO studies; Hirschey 2010 Nature (SIRT3-KO hepatic lipid)'],
        ['PDHA1 (PDH E1α)', 'K321', 'Activation → pyruvate → acetyl-CoA flux, TCA cycle entry', 'Metabolic flexibility; glucose vs FAO switch research'],
        ['NDUFA9 (Complex I)', 'K369', 'Enhanced electron transport chain Complex I activity', 'Szeto 2014 data context; SS-31 vs SIRT3 upstream comparison'],
        ['Cyclophilin D (CypD)', 'K166', 'Reduced mPTP sensitivity → less calcium-triggered opening', 'Ahn 2008 Nature: SIRT3-KO cells show mPTP hypersensitivity'],
        ['ATP synthase (β-subunit)', 'K485', 'Enhanced ATP synthesis efficiency', 'Vassilopoulos 2014; OXPHOS coupling efficiency endpoints'],
        ['HMGCS2', 'K310, K447, K473', 'Ketone body synthesis activation → BHB production', 'Fasting + GLP-1 ketone research; SIRT3-FAO-ketogenesis axis'],
      ],
    },
    {
      type: 'paragraph',
      text: 'The SOD2 axis is SIRT3\'s most widely studied function. SIRT3 deacetylates SOD2 at K68 and K122, producing a 2–3× increase in catalytic activity. Without SIRT3, mitochondrial superoxide accumulates, driving oxidative stress, mtDNA damage, and accelerated aging. The Qiu 2010 PNAS paper demonstrated that SIRT3-KO mice show increased ROS in multiple tissues and reduced physical endurance — directly recapitulating aspects of the aging phenotype. This is why SIRT3 activity (measured as SOD2 acetylation status by IP/WB) is increasingly used as a longevity endpoint alongside direct enzymatic assays.',
    },
    {
      type: 'paragraph',
      text: 'The IDH2-NADPH-GSH axis is equally important for redox balance. SIRT3 deacetylation of IDH2 increases its activity, driving isocitrate → α-ketoglutarate conversion in the TCA cycle and generating NADPH as a co-product. NADPH is the reducing equivalent required by glutathione reductase (GR) to recycle GSSG back to GSH. SIRT3 depletion thus creates a chain: reduced IDH2 activity → less NADPH → impaired GR → GSSG accumulation → oxidative stress. The Someya 2010 data showed that SIRT3 overexpression in cochlear cells prevented age-related hearing loss via this IDH2/NADPH/GSH pathway.',
    },
    {
      type: 'heading',
      text: 'NAD⁺-Raising Compounds and Sirtuin Activation',
    },
    {
      type: 'paragraph',
      text: 'The key peptide and small-molecule compounds that modulate sirtuin activity in research settings work primarily through NAD⁺ availability rather than direct sirtuin binding. This is an important distinction: compounds like resveratrol were originally claimed as direct SIRT1 activators, but subsequent analysis showed their in vitro activation was a fluorophore artifact; in vivo, resveratrol activates SIRT1 indirectly via AMPK→NAMPT→NAD⁺. NAD⁺ precursors (NMN and NR) and direct NAD⁺ injection are the most validated approaches for sirtuin activation in preclinical peptide research.',
    },
    {
      type: 'table',
      headers: ['Compound', 'Mechanism of Sirtuin Modulation', 'Primary Sirtuin Target', 'Published Data'],
      rows: [
        ['NAD⁺ (direct IP/IV)', 'Direct substrate elevation; 5× plasma NAD⁺ vs oral NMN (Pencina 2023 Nat Aging)', 'SIRT1, SIRT3, SIRT6', 'Pencina 2023; Gomes 2013 Cell; Yoshino 2021 Science'],
        ['NMN (IP/oral)', 'NAMPT bypass → NMN→NMN adenylyltransferase (NMNAT) → NAD⁺', 'SIRT1, SIRT3', 'Gomes 2013: 500 mg/kg IP aged mice; Yoshino 2011 Cell Met'],
        ['NR (oral)', 'ENT1/2 + NMRK1/2 two-step → NAD⁺ (mitochondrial preferential via NMRK2)', 'SIRT3 (mitochondrial preferential)', 'Cantó 2012 Cell Met: 400 mg/kg/day oral HFD mice'],
        ['MOTS-c (IP)', 'AMPK → LKB1 → NAMPT transcription upregulation → NAD⁺ salvage flux', 'SIRT1 (indirect)', 'Lee 2015 Cell Met DIO; Young 2021 Nature Aging exercise'],
        ['SS-31 (SC/IP)', 'Cardiolipin/Complex I stabilization → NADH oxidation → NAD⁺/NADH ratio improvement', 'SIRT3 (NAD⁺/NADH ratio-dependent)', 'Szeto 2014; Siegel 2013 Aging Cell'],
        ['GHK-Cu (SC/topical)', 'Nrf2/GCLC → GSH; indirect SIRT1 via reduced ROS-driven PARP1 activation', 'SIRT1 (indirect, via reduced PARP1 competition)', 'Pickart gene database; Kang 2020 PNAS NRF2→TET2'],
        ['Epitalon (SC)', 'AANAT → melatonin → SIRT1 circadian stabilization + Nrf2 antioxidant axis', 'SIRT1 (circadian), SIRT3 (indirect Nrf2)', 'Khavinson 2003; Ramsey 2009 Science NAMPT-CLOCK-SIRT1'],
        ['Semaglutide/GLP-1R agonists', 'GLP-1R/cAMP/PKA → CREB → NAMPT transcription → NAD⁺ salvage', 'SIRT1 (indirect)', 'SELECT/STEP data; NAMPT-SIRT1 axis in hepatic data'],
      ],
    },
    {
      type: 'heading',
      text: 'Research Tools: Measuring Sirtuin Activity',
    },
    {
      type: 'paragraph',
      text: 'There are four primary approaches to measuring sirtuin activity in preclinical peptide research: (1) fluorescent deacetylase substrate assays, (2) substrate-specific acetylation status by IP/WB, (3) NAD⁺/NADH ratio as a proxy for sirtuin capacity, and (4) downstream marker assessment.',
    },
    {
      type: 'subheading',
      text: 'Recommended Assay Platforms by Sirtuin',
    },
    {
      type: 'table',
      headers: ['Assay', 'Target Sirtuin', 'Platform', 'Key Notes'],
      rows: [
        ['SIRT1 deacetylase fluorescent assay', 'SIRT1', 'Enzo BML-AK555 (FLUOR DE LYS)', 'Uses Ac-p53(K382)-AMC substrate; include NAM inhibitor control at 200 μM'],
        ['SIRT3 deacetylase activity', 'SIRT3', 'Abcam ab156065 (SIRT3 Activity Assay)', 'Mitochondrial fraction required (Dounce + gradient); uses Ac-CoA substrate'],
        ['pAc-SOD2 K68/K122 WB', 'SIRT3 (surrogate)', 'PTMScan Cell Signaling #13353', 'Acetylated SOD2 = inactive; deacetylated = active; high specificity'],
        ['pAc-PGC-1α K450 WB', 'SIRT1 (surrogate)', 'Abcam ab65139 + acetyl-Lys antibody', 'Requires IP: anti-PGC-1α then blot anti-acetyl-Lys'],
        ['NAD⁺/NADH ratio (nuclear)', 'SIRT1/SIRT6 (proxy)', 'Promega NAD/NADH-Glo (nuclear fractionation)', 'Cytoplasm contamination → use SIRT2 as negative control'],
        ['Mitochondrial NAD⁺/NADH', 'SIRT3 (proxy)', 'BioVision EnzyFluo NADH-100 (mitochondrial fraction)', 'Snap-freeze tissue, Dounce lysis on ice, 300×g/10,000×g fractionation'],
        ['SIRT1 target: H3K9ac ChIP-seq', 'SIRT1 (nuclear chromatin)', 'Active Motif H3K9ac antibody #39138 + ChIP-seq', 'Requires 10–30 mg frozen tissue; formaldehyde crosslink on ice'],
        ['SIRT3 target: mtDNA integrity', 'SIRT3 (downstream)', 'mtDNA/nDNA qPCR ratio (mt-Nd1/B2m)', 'Low mtDNA = SIRT3 dysfunction → oxidative mtDNA damage'],
      ],
    },
    {
      type: 'heading',
      text: 'Pharmacological Controls for Sirtuin Research',
    },
    {
      type: 'paragraph',
      text: 'Pharmacological controls are essential to confirm sirtuin-specific mechanisms. The most commonly used inhibitors are sirtinol (pan-SIRT1/2 inhibitor, IC₅₀ ≈ 68 μM SIRT1; 38 μM SIRT2; in vivo dose 5 mg/kg IP), EX-527 (selective SIRT1 inhibitor, IC₅₀ 98 nM; in vivo 10 mg/kg IP in acute models), and 3-TYP (SIRT3-selective inhibitor, IC₅₀ 16 nM SIRT3 vs >250 μM SIRT1/2; in vivo 50 mg/kg IP). For genetic controls, SIRT1-KO mice (Jackson #003815) and SIRT3-KO mice (Jackson #012755) are widely available. The critical vehicle consideration: EX-527 and 3-TYP are dissolved in DMSO; the DMSO vehicle control group must receive matched DMSO at the same concentration (typically <0.1% final).',
    },
    {
      type: 'table',
      headers: ['Control', 'Dose (In Vivo)', 'Target', 'Purpose'],
      rows: [
        ['NAM (nicotinamide)', '500 mg/kg/day oral; 300 μM in vitro', 'Pan-sirtuin (product inhibitor)', 'Vehicle-matched negative control for NAD⁺ experiments; do NOT use NAM as vehicle — use equimolar tryptophan'],
        ['FK866/APO866', '10 mg/kg IP 2×/day for 3 days', 'NAMPT inhibitor → NAD⁺ depletion', 'Baseline NAD⁺ depletion to confirm NMN rescue mechanism; rescue with NMN required'],
        ['EX-527 (selisistat)', '10 mg/kg IP (acute); 5 mg/kg IP (chronic)', 'SIRT1-selective', 'Must confirm that NMN/Epitalon effect is attenuated by EX-527'],
        ['3-TYP', '50 mg/kg IP', 'SIRT3-selective', 'Use when SS-31 or mitochondrial NAD⁺ is the focus'],
        ['Sirtinol', '5 mg/kg IP', 'SIRT1/SIRT2 pan-inhibitor', 'Less selective than EX-527; useful for in vitro IC₅₀ determination'],
        ['SIRT1-KO mice', 'Jackson #003815 (heterozygous recommended)', 'Complete SIRT1 genetic ablation', 'Full SIRT1-KO is lethal in some backgrounds; use tissue-specific Cre if needed'],
        ['SIRT3-KO mice', 'Jackson #012755', 'Complete SIRT3 genetic ablation', 'Viable; develop hyperacetylation and metabolic phenotype by 4–6 months'],
      ],
    },
    {
      type: 'heading',
      text: 'Preclinical Study Design: NAD⁺ → Sirtuin → Longevity Protocols',
    },
    {
      type: 'paragraph',
      text: 'A well-designed sirtuin-focused preclinical study in aged C57BL/6J mice requires five essential elements: (1) aged cohort (18–24 months, NIA Aged Rodent Colonies — not colony-bred aged mice which may have different metabolic baselines); (2) concurrent measurement of NAD⁺ availability and sirtuin activity (not just downstream markers); (3) pathway dissection using pharmacological inhibitors; (4) multi-tissue sampling (liver, skeletal muscle, and brain at minimum — sirtuin responses are highly tissue-specific); and (5) circadian-controlled sampling (ZT3–5 for NAD⁺, ZT2–4 for corticosterone, consistent across all groups).',
    },
    {
      type: 'table',
      headers: ['Group', 'Treatment', 'n', 'Purpose'],
      rows: [
        ['Young vehicle', 'Sterile saline IP daily', '8', 'Young baseline reference'],
        ['Aged vehicle', 'Sterile saline IP daily', '10', 'Primary aged control'],
        ['Aged + NMN', 'NMN 500 mg/kg IP daily', '10', 'SIRT1 activation (systemic NAD⁺)'],
        ['Aged + NR', 'NR 400 mg/kg oral daily', '10', 'SIRT3 preferential (mitochondrial NAD⁺ via NMRK2)'],
        ['Aged + SS-31', 'SS-31 3 mg/kg SC daily', '10', 'SIRT3 axis via NAD⁺/NADH ratio (cardiolipin/Complex I)'],
        ['Aged + NMN + EX-527', 'NMN 500 mg/kg IP + EX-527 10 mg/kg IP', '8', 'SIRT1 mechanism dissection for NMN effects'],
        ['Aged + NMN + 3-TYP', 'NMN 500 mg/kg IP + 3-TYP 50 mg/kg IP', '8', 'SIRT3 mechanism dissection for NMN effects'],
        ['Aged + Full Longevity Stack', 'NMN + Epitalon + SS-31 + GHK-Cu', '10', 'Multi-pathway combination; primary translational group'],
      ],
    },
    {
      type: 'paragraph',
      text: 'For duration: 12 weeks is the minimum to observe significant sirtuin-driven phenotypic changes in skeletal muscle (Gomes 2013 used 7-day acute NMN for molecular endpoints; Canto 2012 used 8 weeks for NR metabolic phenotype). For longevity endpoints (telomere, epigenetic clocks), 6-month minimum is required. Endpoint sampling: sacrifice at ZT4–6 after overnight fast; harvest liver and skeletal muscle (gastrocnemius/soleus) simultaneously; snap-freeze in liquid nitrogen within 2 minutes; store at −80°C. Separate fresh mitochondrial fraction must be prepared immediately from 2 animals per group (no freeze-thaw) for SIRT3 activity assay.',
    },
    {
      type: 'heading',
      text: 'The SIRT1–SIRT3 Axis in Multi-Compound Longevity Stacks',
    },
    {
      type: 'paragraph',
      text: 'Understanding how SIRT1 and SIRT3 interact with each other — and how multi-compound longevity stacks engage both — is essential for designing mechanistically informative studies. SIRT1 and SIRT3 are not redundant; they regulate distinct compartments. SIRT1 controls nuclear gene expression programs (PGC-1α transcription, p53 stability, inflammatory gene suppression), while SIRT3 controls the activity of already-existing mitochondrial enzymes (SOD2, IDH2, Complex I components). The two converge on mitochondrial biogenesis: SIRT1 deacetylates PGC-1α to drive transcription of mitochondrial genes, while SIRT3 activates the enzymes encoded by those genes once they arrive in the mitochondria. This creates a logical sequence — SIRT1 first (new enzyme synthesis), SIRT3 second (enzyme activation).',
    },
    {
      type: 'paragraph',
      text: 'For the NAD⁺ + Epitalon + SS-31 + GHK-Cu longevity stack, the sirtuin engagement rationale is as follows: **NAD⁺ (via NMN)** provides direct substrate for both SIRT1 and SIRT3 across all compartments. **Epitalon** stabilizes the SIRT1 circadian clock axis (CLOCK/BMAL1/SIRT1 amplification loop via NAMPT oscillation) and reduces oxidative mtDNA damage that would otherwise activate PARP1 and deplete NAD⁺. **SS-31** improves the mitochondrial NAD⁺/NADH ratio by restoring Complex I electron transport — increasing SIRT3 substrate availability in the specific compartment where SIRT3 operates. **GHK-Cu** reduces cytosolic oxidative stress via Nrf2/GCLC/GSH, decreasing PARP1 demand on the nuclear NAD⁺ pool and thereby increasing SIRT1 substrate availability. These four mechanisms are orthogonal and non-redundant: together they address four distinct bottlenecks in the sirtuin activation pathway.',
    },
    {
      type: 'heading',
      text: 'Reconstitution and Storage Notes',
    },
    {
      type: 'table',
      headers: ['Compound', 'Reconstitution', 'Storage (Lyophilized)', 'Storage (Reconstituted)', 'Key Compatibility Note'],
      rows: [
        ['NAD⁺', 'Sterile saline or PBS (NOT BAC water — benzyl alcohol oxidizes nicotinamide ring)', '-20°C, amber vials', '4°C max 24h; freeze aliquots at -80°C', 'Light-sensitive: 259 nm UV absorption; red-light bench reconstitution'],
        ['NMN', 'Sterile saline or PBS; pH 7.0–7.4', '-20°C, desiccated', '4°C max 7 days; no freeze-thaw', 'Water-stable; room temperature degradation within 2 weeks'],
        ['Epitalon', 'Sterile saline (not BAC water)', '-20°C', '4°C max 14–21 days', 'No BAC water; sterile saline pH 7.0 preferred'],
        ['SS-31', 'Sterile saline (NOT BAC water — benzyl alcohol damages tetrapeptide)', '-20°C', '4°C max 72h; fresh q3d recommended', 'No BAC water; do not vortex; prepare fresh for Langendorff'],
        ['GHK-Cu', 'Sterile saline (NOT EDTA — chelates copper); blue-violet color = quality indicator', '-20°C, amber vials', '4°C max 7–14 days; no reducing agents', 'Incompatible with EDTA, DTT, and reducing agents'],
      ],
    },
    {
      type: 'heading',
      text: '6 Research Design Considerations for Sirtuin Studies',
    },
    {
      type: 'list',
      items: [
        'Measure NAD⁺ and sirtuin activity together — not just downstream markers. Reporting IGF-1 or PGC-1α mRNA without concurrent NAD⁺/NADH and SIRT activity data makes mechanism attribution impossible. The minimum mechanistic endpoint set is: tissue NAD⁺/NADH + SIRT1 or SIRT3 deacetylase activity + one substrate-specific acetylation marker.',
        'Tissue-specific responses are the rule, not the exception. SIRT1 activation in liver does not imply equivalent brain or muscle activation. In NMN studies, liver tends to respond earlier and more robustly than brain. If your hypothesis involves brain BDNF or cognitive endpoints, verify brain NAD⁺ and SIRT1 specifically — do not assume peripheral data predicts CNS responses.',
        'NAM vehicle controls are mandatory. Nicotinamide — the product of the sirtuin reaction and a common NAD⁺ synthesis intermediate — is a pan-sirtuin inhibitor at the concentrations produced by NAMPT salvage pathway flux. If you use any NAD⁺ precursor or NAD⁺ itself, the vehicle control must not be free NAM. Use tryptophan at equimolar concentration, or saline — not NAM solutions.',
        'Aged animals are required for biological significance. SIRT1 and SIRT3 activity in young healthy animals is near-saturating under basal conditions. The fold-change effects of NAD⁺ repletion in 3-month-old mice are typically 1.2–1.5× vs 2–4× in 18–22 month mice. Use NIA Aged Rodent Colonies for reproducibility — colony-bred aged mice vary substantially in baseline metabolic health.',
        'SIRT1 and SIRT3 have opposite responses to caloric restriction vs caloric excess. In DIO/HFD models, SIRT3 is preferentially depleted (mitochondrial dysfunction predominates). In aged mice on normal chow, both decline. In pair-fed control designs for GLP-1 agonist studies, the caloric restriction arm will independently activate SIRT1/SIRT3 — this confounds mechanism attribution if not controlled.',
        'For in vitro experiments, use primary cells from aged donors or serially passaged (p20+) cells rather than immortalized cell lines. HEK293 and HeLa cells have artificially elevated NAMPT activity and do not reflect the NAD⁺ depletion phenotype of aged tissue. Primary human dermal fibroblasts (p20–30), primary hepatocytes from aged mice, or aged differentiated C2C12 myotubes are more appropriate for sirtuin biology research.',
      ],
    },
    {
      type: 'disclaimer',
      text: 'All compounds described are for research use only (RUO). Not for human use, veterinary use, or clinical application. Sirtuin activation research is preclinical in nature. This article contains no medical advice.',
    },
  ],
};
