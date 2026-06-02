import { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: 'peptide-research-longevity-complete-multi-target-protocol-guide',
  title: 'Peptide Research for Longevity: The Complete Multi-Target Protocol Guide',
  description:
    'A comprehensive research protocol guide covering NAD+/sirtuins, mitochondrial quality control (SS-31), telomere biology (Epitalon), senescence (GHK-Cu), and epigenetic aging clocks — with full study design, dosing tables, and endpoint selection for longevity research.',
  category: 'Longevity',
  readMinutes: 14,
  publishedAt: '2026-06-02',
  ogImage: '/og/products/nad-plus.png',
  body: [
    {
      type: 'paragraph',
      text: 'Longevity research has matured from single-target interventions into multi-mechanistic, multi-compound protocol design. The biology of aging is not a single pathway — it is a network of interconnected hallmarks, each amenable to targeted peptide intervention. This guide synthesizes the current evidence base for the four most studied longevity-relevant peptide mechanisms and provides a complete framework for designing rigorous multi-target aging research protocols.',
    },
    {
      type: 'heading',
      text: 'The Four Pillars of Peptide-Based Longevity Research',
    },
    {
      type: 'paragraph',
      text: 'Lopez-Otin\'s nine hallmarks of aging (Cell, 2013) provide the organizing framework. Peptide research compounds cluster into four primary mechanistic pillars: (1) NAD⁺/sirtuin-mediated metabolic and epigenetic regulation, (2) mitochondrial quality control via cardiolipin-targeted compounds, (3) telomere biology and replicative senescence upstream intervention, and (4) SASP/NF-κB senomorphic suppression and ECM restoration. These pillars address distinct hallmarks — energy sensing, mitochondrial dysfunction, telomere attrition, and cellular senescence — without mechanistic overlap, making them ideal candidates for full factorial combination study design.',
    },
    {
      type: 'heading',
      text: 'Pillar 1: NAD⁺/NMN — Energy Sensing and Sirtuin Activation',
    },
    {
      type: 'paragraph',
      text: 'NAD⁺ declines 40–60% from young adult to aged tissue in rodent and human studies (Gomes 2013 Cell, Yoshino 2021 Science). NAMPT, the rate-limiting enzyme in the NAD⁺ salvage pathway, is a CLOCK/BMAL1 E-box target with a ~20–30% circadian amplitude. NAD⁺ depletion is driven by three parallel mechanisms: NAMPT transcriptional decline with aging, CD38 upregulation in senescent and inflammatory cells (consuming NAD⁺ non-productively), and PARP1/2 hyperactivation at sites of increased DNA damage.',
    },
    {
      type: 'paragraph',
      text: 'SIRT1 (nuclear) and SIRT3 (mitochondrial) are the primary longevity-relevant sirtuin targets. SIRT1 deacetylates PGC-1α (13 lysine sites, initiating mitochondrial biogenesis), p53/K382 (suppressing replicative senescence), NF-κB/p65/K310 (anti-inflammatory), DNMT3a/K736 (epigenetic clock maintenance), and BDNF promoter IV H3K9ac (cognitive aging axis). SIRT3 deacetylates SOD2/K68/K122 (+3× activity, Qiu 2010 PNAS), IDH2/K413 (NADPH regeneration for glutathione recycling, Someya 2010), CypD/K166 (mPTP resistance), and LCAD/K42 (fatty acid β-oxidation). The SIRT1/SIRT3 axis is strictly NAD⁺-dependent at physiological concentrations: SIRT1 Km ≈ 94–170 µM places it near the cellular NAD⁺ setpoint, making it exquisitely sensitive to NAD⁺ flux rather than absolute abundance.',
    },
    {
      type: 'paragraph',
      text: 'Published dosing in aged C57BL/6J mice: NMN 500 mg/kg/day IP (Gomes 2013), NR 400 mg/kg/day oral gavage (Cantó 2012 Cell Metabolism), direct NAD⁺ 250–500 mg/kg IP for acute studies (Pencina 2023 Nature Aging — 5× greater plasma elevation than oral NMN/NR). Reconstitution: sterile saline or PBS only — BAC water degrades the nicotinamide ring. Amber vials mandatory (UV-sensitive at 259 nm). Freshly prepare within 2h of injection or freeze aliquots at −80°C.',
    },
    {
      type: 'heading',
      text: 'Pillar 2: SS-31 (Elamipretide) — Mitochondrial Inner Membrane Quality Control',
    },
    {
      type: 'paragraph',
      text: 'SS-31 (D-Arg-2′,6′-Dmt-Lys-Phe-NH₂) accumulates ~1000× in the inner mitochondrial membrane (IMM) via its alternating aromatic/cationic sequence. Its molecular target is cardiolipin — the bis-phosphatidyl glycerol lipid unique to the IMM that scaffolds respiratory supercomplexes (I/III/IV). In aged tissue, cardiolipin undergoes TAFAZZIN-mediated remodeling failure and iPLA₂γ-driven deacylation, leading to cytochrome c-catalyzed peroxidation. The result is ETC supercomplex destabilization, increased proton leak, and ROS amplification.',
    },
    {
      type: 'paragraph',
      text: 'Siegel et al. (2013 Aging Cell) demonstrated the key insight: SS-31 at 3 mg/kg/day SC in aged (24-month) C57BL/6J mice restored Complex I activity by 40–50% without inducing mitochondrial biogenesis (mtDNA copy number unchanged, PGC-1α expression unchanged). This "quality not quantity" distinction is mechanistically critical: SS-31 restores the function of existing mitochondria by stabilizing the cardiolipin scaffold, not by generating new organelles. This makes SS-31 non-redundant with NAD+/NMN which drives SIRT1/PGC-1α-dependent biogenesis.',
    },
    {
      type: 'paragraph',
      text: 'Cardiac applications: Szeto 2014 showed Complex I restoration in heart failure with preserved ejection fraction (HFpEF). PROGRESS-HF and LEAD-HF clinical trials established SS-31 as ELEVI (Elamipretide) for human HFpEF research. Reconstitution: sterile saline only — never BAC water (benzyl alcohol disrupts the amphipathic structure required for IMM binding). Prepare fresh or freeze at −80°C in saline. SC dosing 0.5–3 mg/kg/day for aging studies, 3–5 mg/kg acute for I/R preconditioning.',
    },
    {
      type: 'heading',
      text: 'Pillar 3: Epitalon — Telomere Biology and Pineal Regulation',
    },
    {
      type: 'paragraph',
      text: 'Epitalon (Ala-Glu-Asp-Gly, CAS 307297-39-8) is a synthetic tetrapeptide bioregulator derived from the pineal gland polypeptide complex studied by Vladimir Khavinson at the St. Petersburg Institute of Bioregulation and Gerontology. Its primary mechanism is telomerase (TERT) activation: Khavinson 2003 demonstrated a 2.4× increase in telomerase activity (TRAP assay) in human fetal fibroblasts treated with Epitalon at 0.1–10 ng/mL, with associated telomere elongation of 200–500 bp measured by Southern blot. TERT mRNA upregulation was confirmed in lymphocytes by RT-qPCR.',
    },
    {
      type: 'paragraph',
      text: 'Rodent lifespan data: Khavinson (2003 Annals of the New York Academy of Sciences) reported 12–20% lifespan extension in CBA and C57BL/6J mice receiving pulsatile Epitalon courses (1 µg/mouse SC, 10-day courses repeated quarterly). Melatonin restoration is a secondary mechanism: Epitalon upregulates AANAT (arylalkylamine N-acetyltransferase) in the pineal gland of aged rodents, restoring nighttime melatonin amplitude by 30–45%. This is dissectable from TERT effects using luzindole (MT1/MT2 antagonist, 1 mg/kg IP) as a dissection control.',
    },
    {
      type: 'paragraph',
      text: 'Important: Epitalon must be reconstituted in sterile saline — not BAC water. The tetrapeptide is unstable in benzyl alcohol-containing solvents. Lyophilized storage at −20°C; reconstituted stable at 4°C for 14–21 days. For in vitro TRAP assays, use serum-free culture medium as vehicle.',
    },
    {
      type: 'heading',
      text: 'Pillar 4: GHK-Cu — Senomorphic SASP Suppression and ECM Restoration',
    },
    {
      type: 'paragraph',
      text: 'GHK-Cu (glycyl-L-histidyl-L-lysine : copper²⁺) is a naturally occurring plasma tripeptide whose concentration declines from ~200 ng/mL at age 20 to ~80 ng/mL at age 60. At the cellular level, GHK-Cu modulates >2,000 human gene expressions (Pickart database, bioinformatics analysis), with the collagen synthesis, antioxidant, and anti-inflammatory signatures being the most replicated.',
    },
    {
      type: 'paragraph',
      text: 'Senescence-relevant mechanisms: (1) Nrf2/Keap1/ARE pathway — GHK-Cu dissociates Keap1 from Nrf2 via copper-mediated Keap1 cysteine oxidation (C151/C273/C288), inducing GCLC (glutamate-cysteine ligase catalytic subunit) for glutathione synthesis, HO-1 (heme oxygenase-1), and NQO1 — suppressing the oxidative SASP driver. (2) NF-κB suppression — HO-1 products (biliverdin, CO) inhibit IKKβ phosphorylation. (3) ECM restoration — TGF-β1/ALK5/pSMAD2-3 activates COL1A1/COL3A1; LOX receives copper cofactor from the GHK carrier for collagen crosslinking. (4) Epigenetic data: Kang 2020 (PNAS) demonstrated NRF2 binds an ARE sequence in the TET2 promoter, suggesting GHK-Cu may indirectly upregulate TET2 for DNA demethylation — a potential epigenetic clock mechanism.',
    },
    {
      type: 'paragraph',
      text: 'Critical control design: All GHK-Cu experiments require a 4-arm design (GHK-Cu + free GHK + CuSO₄ + vehicle). The copper ion and the peptide carrier must be tested independently — attributing effects to the chelate requires both controls to be negative or weaker. Reconstitution: aqueous saline. Blue-violet color indicates intact chelate. No EDTA, no DTT, no strong acid or base. Incompatible with reducing agents.',
    },
    {
      type: 'heading',
      text: 'Synergy Architecture: Why These Four Compounds Are Non-Redundant',
    },
    {
      type: 'paragraph',
      text: 'The four pillars target distinct primary mechanisms with convergent downstream benefits: NAD⁺/SIRT1 drives new mitochondrial biogenesis (PGC-1α transcription) while SS-31 restores existing mitochondrial function (cardiolipin/supercomplex integrity) — they require each other for full energy-axis restoration. Epitalon addresses the upstream replicative limit (telomere length/telomerase) while GHK-Cu addresses the downstream SASP consequence of senescent cells (NF-κB/ROS suppression, ECM remodeling). No two compounds share a primary receptor, no two compounds\' primary targets are in the same molecular pathway.',
    },
    {
      type: 'paragraph',
      text: 'Three-layer synergy: (1) Antioxidant axis — SIRT3/SOD2 (mitochondrial ROS) + SS-31/cardiolipin (IMM ROS source suppression) + GHK-Cu/Nrf2/GCLC (cytosolic GSH). Three non-competing ROS interception points. (2) Telomere-mitochondria crosstalk — TERT requires ATP from mitochondria; SS-31 + NAD+/SIRT3 improve OXPHOS efficiency, providing the energetic substrate for Epitalon-stimulated TERT activity. (3) Epigenetic integration — NAD+/SIRT1-DNMT3a axis + GHK-Cu/Nrf2-TET2 axis: one compound drives methylation maintenance; the other enables active demethylation — potentially addressing the full epigenetic clock drift.',
    },
    {
      type: 'heading',
      text: 'Full Factorial Study Design: 8-Group Aged C57BL/6J Protocol',
    },
    {
      type: 'table',
      headers: ['Group', 'Treatment', 'n', 'Purpose'],
      rows: [
        ['1', 'Young (6 mo) vehicle', '10', 'Baseline reference — healthy aging comparator'],
        ['2', 'Aged (22 mo) vehicle', '12', 'Untreated aging control — primary comparator'],
        ['3', 'Aged + NAD⁺/NMN', '12', 'NAD⁺ axis isolate — SIRT1/SIRT3 deacetylation only'],
        ['4', 'Aged + SS-31', '12', 'IMM quality control isolate — Complex I/cardiolipin only'],
        ['5', 'Aged + Epitalon', '12', 'Telomere/TERT isolate — pulsatile course design'],
        ['6', 'Aged + GHK-Cu', '12', 'Senomorphic/ECM isolate — 4-arm requires satellite groups'],
        ['7', 'Aged + NAD⁺ + SS-31', '12', 'Mitochondrial synergy arm — biogenesis × quality control'],
        ['8', 'Aged + full stack (all 4)', '12', 'Full longevity stack — primary efficacy arm'],
      ],
    },
    {
      type: 'paragraph',
      text: 'Note: The full factorial 16-group design (2⁴ = 16) is statistically optimal for detecting interaction effects but requires n=8–10 per group (160 animals minimum). The 8-group pragmatic design above captures the most critical interactions at ~98 animals and is recommended for initial studies. Power calculation: 80% power at α=0.05 for 30% effect size on primary endpoint (NAD⁺/NADH ratio or mtDNA-adjusted grip strength), CV%=25–35%, yields n=10–12 per group.',
    },
    {
      type: 'heading',
      text: 'Preclinical Dosing Reference Table',
    },
    {
      type: 'table',
      headers: ['Compound', 'Species', 'Dose', 'Route', 'Frequency', 'Key Reference'],
      rows: [
        ['NMN', 'Mouse', '500 mg/kg', 'IP', 'Daily', 'Gomes 2013 Cell'],
        ['NMN', 'Rat', '300 mg/kg', 'IP', 'Daily', 'Yoshino 2011 Cell Metabolism'],
        ['SS-31', 'Mouse', '3 mg/kg', 'SC', 'Daily', 'Siegel 2013 Aging Cell'],
        ['SS-31', 'Mouse (acute)', '5 mg/kg', 'IV', 'Single dose', 'Szeto 2014'],
        ['Epitalon', 'Mouse', '1 µg/mouse', 'SC', '10-day courses', 'Khavinson 2003 ANYAS'],
        ['Epitalon', 'Rat', '1–5 µg/rat', 'SC', '10-day courses quarterly', 'Khavinson lab protocols'],
        ['GHK-Cu', 'Mouse', '1–5 mg/kg', 'SC', 'Daily', 'Pickart/Leyden protocols'],
        ['GHK-Cu', 'Rat', '1–3 mg/kg', 'SC', 'Daily', 'Murad/Pickart collagen studies'],
      ],
    },
    {
      type: 'heading',
      text: 'Endpoint Selection Guide',
    },
    {
      type: 'table',
      headers: ['Endpoint', 'Target Pillar', 'Method', 'Timing'],
      rows: [
        ['Tissue NAD⁺/NADH', 'NAD⁺', 'EnzyFluo EFNADH-100, snap-freeze ZT3', 'Sacrifice'],
        ['SIRT1 deacetylase activity', 'NAD⁺', 'Enzo BML-AK555 fluorescent substrate', 'Sacrifice'],
        ['pAc-SOD2 K68 (SIRT3 activity)', 'NAD⁺/SS-31', 'PTMScan/WB anti-pAc-SOD2', 'Sacrifice'],
        ['Seahorse OCR (Complex I)', 'SS-31', 'Agilent XF96, permeabilized mitochondria', 'Sacrifice'],
        ['NAO cardiolipin staining', 'SS-31', 'Flow cytometry, NAO 100 nM', 'Sacrifice'],
        ['TRAP assay (telomerase)', 'Epitalon', 'Millipore S7750, freshly extracted protein', 'Sacrifice'],
        ['Telomere qPCR (T/S ratio)', 'Epitalon', 'Cawthon 2002 method, ZT-matched', 'Sacrifice'],
        ['SA-β-galactosidase', 'GHK-Cu', 'pH 6.0 staining, 5+ fields/animal', 'Sacrifice'],
        ['SASP Luminex panel', 'GHK-Cu', 'BioLegend LEGENDplex 10-plex', 'Sacrifice (serum)'],
        ['Epigenetic clock (Petkovich)', 'All', 'RRBS or targeted bisulfite, ZT-matched', 'Sacrifice'],
        ['Grip strength (BIOSEB)', 'All', '5 trials/session, 3 sessions/week', 'Weeks 4/8/12'],
        ['Rotarod (accelerating)', '4–40 rpm', 'Mean latency to fall, 3 trials', 'Weeks 4/8/12'],
        ['8-OHdG (oxidative DNA)', 'NAD⁺/GHK-Cu/SS-31', 'OxiSelect ELISA, urine or tissue', 'Weeks 4/12'],
        ['mtDNA copy number', 'SS-31/NAD⁺', 'qPCR mt-Co1 vs H19 nuclear reference', 'Sacrifice'],
      ],
    },
    {
      type: 'heading',
      text: 'Pharmacological Controls Reference',
    },
    {
      type: 'table',
      headers: ['Control', 'Targets', 'Dose', 'Purpose'],
      rows: [
        ['Nicotinamide (NAM)', 'SIRT1/SIRT3', '500 mg/kg IP', 'NAD⁺ vehicle (match NAM release from NMN)'],
        ['FK866', 'NAMPT', '10 mg/kg IP BID', 'NAD⁺ depletion — positive control for NAD⁺ deficiency phenotype'],
        ['EX-527', 'SIRT1', '10 mg/kg IP', 'SIRT1-specific inhibitor — dissect from SIRT3'],
        ['3-TYP', 'SIRT3', '50 mg/kg IP', 'SIRT3-specific inhibitor — dissect from SIRT1'],
        ['MitoTEMPO', 'mtROS', '10 mg/kg/day IP', 'SS-31 ROS-scavenging positive control'],
        ['CsA (cyclosporin A)', 'mPTP/CypD', '5 mg/kg IP', 'SS-31 mPTP complementarity control'],
        ['AZT (azidothymidine)', 'Telomerase', '1 mg/kg/day', 'Epitalon TERT dissection — reverse transcriptase inhibitor'],
        ['Luzindole', 'MT1/MT2', '1 mg/kg IP', 'Epitalon melatonin vs TERT dissection'],
        ['ML385', 'Nrf2', '30 mg/kg IP', 'GHK-Cu Nrf2 pathway dissection'],
        ['Free GHK + CuSO₄', 'GHK-Cu controls', 'Equimolar', '4-arm mandatory copper/peptide separation'],
      ],
    },
    {
      type: 'heading',
      text: 'Reconstitution and Storage Protocol Summary',
    },
    {
      type: 'table',
      headers: ['Compound', 'Vehicle', 'Working Concentration', 'Storage (lyophilized)', 'Storage (reconstituted)', 'Notes'],
      rows: [
        ['NAD⁺/NMN', 'Sterile saline or PBS', '50–100 mM', '−20°C, amber vial', 'Use within 2h or freeze −80°C', 'No BAC water; red-light handling; 259 nm UV QC'],
        ['SS-31', 'Sterile saline only', '1–5 mg/mL', '−20°C', '4°C up to 72h', 'No BAC water; no DMSO; no reducing agents'],
        ['Epitalon', 'Sterile saline (not BAC)', '1 µg/100 µL', '−20°C', '4°C 14–21 days', 'No BAC water; in vitro use serum-free medium'],
        ['GHK-Cu', 'Aqueous saline', '1–5 mg/mL', '−20°C', '4°C 14 days', 'No EDTA; no DTT; blue-violet color = intact chelate'],
      ],
    },
    {
      type: 'heading',
      text: 'Protocol Timeline: 12-Week Aged Mouse Study',
    },
    {
      type: 'paragraph',
      text: 'Week −4 to 0: Acclimatization. House aged (20–22 month) NIA-sourced C57BL/6J mice individually or in pairs (consistent across groups). Daily handling 5 min/animal minimum for 4 weeks to normalize handling stress (cortical corticosterone confound). Baseline grip strength × 3 sessions, rotarod × 3 sessions, body composition EchoMRI. Baseline blood draw: NAD⁺, SIRT1, corticosterone, CBC, CMP at ZT3.',
    },
    {
      type: 'paragraph',
      text: 'Weeks 1–4: Loading phase. NMN 500 mg/kg IP daily. SS-31 3 mg/kg SC daily. GHK-Cu 2 mg/kg SC daily. Epitalon pulsatile course: 1 µg/mouse SC daily × 10 days (Days 1–10), then pause. Behavioral assessment Week 4: grip, rotarod, OFT.',
    },
    {
      type: 'paragraph',
      text: 'Weeks 5–8: Maintenance phase. All compounds continue at same doses. Second Epitalon course (Days 29–38). Biomarker sampling Week 8: blood draw for NAD⁺, corticosterone, IGF-1, SASP panel (IL-6, TNF-α, IL-1β), 24h urine 8-OHdG. Behavioral assessment Week 8.',
    },
    {
      type: 'paragraph',
      text: 'Weeks 9–12: Final phase. Third Epitalon course (Days 57–66). Week 12: behavioral battery + sacrifice. Tissue harvest: snap-freeze gastrocnemius, liver, heart, brain, kidney at ZT3. TRAP assay on fresh-extracted protein (max 30 min delay). Fixed tissue: skin punch, soleus (IHC). Blood: serum SASP + CBC + CMP.',
    },
    {
      type: 'heading',
      text: 'Six Research Design Considerations',
    },
    {
      type: 'paragraph',
      text: '1. Aged animals are mandatory. Young-adult mice (6–12 months) do not recapitulate the NAD⁺ depletion, cardiolipin peroxidation, telomere attrition, or SASP accumulation needed to detect longevity compound effects. Source from NIA Aged Rodent Colonies (Taconic contract colonies). Allow 4-week acclimatization minimum — transport stress elevates corticosterone and depletes NAD⁺ acutely.',
    },
    {
      type: 'paragraph',
      text: '2. Circadian sampling is non-negotiable. NAD⁺/NAMPT oscillates ~30% over 24h; SIRT1 activity follows; corticosterone peaks at ZT12. All molecular endpoints must be collected at identical ZT (ZT3 recommended for NAD⁺/SIRT assays — nadir of corticosterone, stable NAD⁺ phase). Label cages with ZT-coded collection windows. Stagger sacrifice schedule so all animals are collected within ±30 min of target ZT.',
    },
    {
      type: 'paragraph',
      text: '3. SS-31 + NAD⁺ are non-redundant: test both. The most common mistake in longevity stack research is assuming NAD⁺/NMN covers mitochondrial dysfunction. It does not: SIRT1/PGC-1α drives biogenesis (new organelles) while SS-31 restores cardiolipin integrity of existing organelles. Seahorse OCR will show additive effects in the combination arm that neither compound achieves alone.',
    },
    {
      type: 'paragraph',
      text: '4. Epitalon TRAP assay requires fresh protein. Telomerase activity is destroyed by freeze-thaw. Extract protein from freshly dissected tissue, proceed directly to TRAP assay within 30 minutes. Do not freeze extracted protein. Process one animal completely before moving to the next. This logistical constraint must be built into the sacrifice schedule.',
    },
    {
      type: 'paragraph',
      text: '5. GHK-Cu 4-arm satellite groups. The GHK-Cu vehicle control must be an equimolar aqueous solution, and satellite groups receiving free GHK (same peptide without copper) and CuSO₄ (same copper without peptide) are mandatory for mechanistic attribution. These can be smaller groups (n=6) since their primary purpose is pharmacological dissection rather than efficacy measurement.',
    },
    {
      type: 'paragraph',
      text: '6. Pre-register the primary endpoint. Longevity research is vulnerable to HARKing (Hypothesizing After Results Known) given the rich multi-endpoint data generated. Pre-specify the primary endpoint (recommended: NAD⁺/NADH ratio in gastrocnemius), primary statistical comparison (aged vehicle vs full stack), and secondary endpoints before data collection begins. Register at OSF Registries or AsPredicted.',
    },
    {
      type: 'heading',
      text: 'Translational Considerations',
    },
    {
      type: 'paragraph',
      text: 'The four longevity compounds in this guide are all research-use-only and not approved for human therapeutic use. The mechanistic data from aged rodent models provides the foundation for understanding these pathways, and multiple human clinical trials are actively investigating NAD⁺ precursors (Yoshino 2021 Science — human skeletal muscle NAD⁺ restoration; Pencina 2023 Nature Aging — 5× plasma NAD⁺ elevation with IV NAD⁺). SS-31 has the most mature human clinical program (Elamipretide, PROGRESS-HF, LEAD-HF). Epitalon has human observational data from Khavinson\'s longitudinal studies. GHK-Cu has published human dermatology RCT data (Leyden 2004).',
    },
    {
      type: 'paragraph',
      text: 'For researchers designing translational studies, the most robust translational endpoints from preclinical longevity research are: mitochondrial respiration (Seahorse OCR), NAD⁺/NADH ratios, SIRT1/SIRT3 deacetylase activity, epigenetic clock measurement (Petkovich or Horvath mouse clocks), and physical function (grip strength, rotarod). These biomarkers have validated human equivalents and provide the bridge from rodent proof-of-concept to human observational or interventional research.',
    },
    {
      type: 'paragraph',
      text: 'All compounds from Nexphoria are provided for Research Use Only (RUO) and are not intended for human use, veterinary use, food or drug applications, or any use outside of bona fide scientific research in compliance with applicable institutional review and regulatory requirements.',
    },
  ],
};
