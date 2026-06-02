import { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: 'nad-plus-skeletal-muscle-atrophy-metabolism-research-protocols',
  title: 'NAD+ and Skeletal Muscle Research: Metabolism, Atrophy Prevention, and Protocol Design',
  description:
    'A comprehensive research guide covering NAD+ mechanisms in skeletal muscle — SIRT1/SIRT3 substrate targets, NAMPT salvage pathway, muscle atrophy prevention (MuRF-1/Atrogin-1), mitochondrial biogenesis, glucose uptake, and published preclinical protocols for aging muscle research.',
  category: 'Longevity',
  readMinutes: 11,
  publishedAt: '2026-06-02',
  ogImage: '/og/products/nad-plus.png',
  body: [
    {
      type: 'paragraph',
      text: 'Skeletal muscle is the largest metabolically active tissue in the body and one of the earliest and most pronounced sites of NAD⁺ decline with aging. By age 60–70, skeletal muscle NAD⁺ concentrations in rodent models fall 40–60% below young adult levels (Gomes et al., 2013 Cell; Yoshino et al., 2011 Cell Metabolism). This decline impairs sirtuin-dependent metabolic flexibility, mitochondrial function, muscle protein turnover, and glucose uptake — making NAD⁺ research in skeletal muscle one of the most mechanistically rich targets in aging biology.',
    },
    {
      type: 'heading',
      text: 'Why Skeletal Muscle NAD⁺ Matters: The Core Metabolic Logic',
    },
    {
      type: 'paragraph',
      text: 'NAD⁺ serves three distinct functions in skeletal muscle: (1) as a redox cofactor accepting electrons in glycolysis (GAPDH), the TCA cycle (isocitrate dehydrogenase, α-ketoglutarate dehydrogenase, malate dehydrogenase), and β-oxidation (3-hydroxyacyl-CoA dehydrogenase); (2) as a substrate for SIRT1 and SIRT3, which deacetylate metabolic regulatory proteins to tune fuel selection and mitochondrial function; and (3) as a substrate for PARP1/2 and CD38, which compete for NAD⁺ non-productively under conditions of genotoxic stress and inflammation. In aging muscle, the third function increasingly dominates — inflammatory CD38 upregulation and DNA damage-driven PARP1 hyperactivation chronically deplete NAD⁺, undermining the first two functions.',
    },
    {
      type: 'paragraph',
      text: 'NAMPT (nicotinamide phosphoribosyltransferase) catalyzes the rate-limiting step of the salvage pathway, converting NAM to NMN. Skeletal muscle NAMPT expression declines with sedentary aging and is strongly induced by exercise (via AMPK and PGC-1α transcription). This creates a self-reinforcing decline loop: aging reduces NAMPT → lower NAD⁺ → impaired SIRT1/PGC-1α → reduced mitochondrial biogenesis → reduced exercise capacity → further NAMPT reduction.',
    },
    {
      type: 'heading',
      text: 'SIRT1 Substrate Targets in Skeletal Muscle',
    },
    {
      type: 'paragraph',
      text: 'SIRT1 deacetylates PGC-1α at 13 lysine residues (including K183, K450, K480, K538, K612), enabling nuclear interaction with NRF1/NRF2/TFAM to drive mitochondrial biogenesis (Rodgers et al., 2005 Nature). In aging skeletal muscle, acetyl-PGC-1α accumulation is a primary biomarker of NAD⁺ insufficiency. SIRT1 also deacetylates FOXO3a, enabling its nuclear translocation and transcription of autophagy genes (LC3, Beclin-1) — the quality control pathway for protein aggregates and damaged organelles. Critically, SIRT1 deacetylates and stabilizes p21^CIP1 while deacetylating p53/K382 to suppress replicative senescence in satellite cells — the resident stem cell population responsible for muscle repair.',
    },
    {
      type: 'paragraph',
      text: 'Published dosing: NMN at 500 mg/kg/day IP in aged (24-month) C57BL/6J mice produced: +18% grip strength, +20% treadmill exhaustion time, restored PGC-1α acetylation to young-adult levels, and normalized mtDNA copy number per myofiber (Gomes et al., 2013 Cell). The same study showed that SIRT1 knockdown abrogated the NMN muscle benefit, confirming the NAMPT→NAD⁺→SIRT1 causal chain.',
    },
    {
      type: 'heading',
      text: 'SIRT3 Substrate Targets in Skeletal Muscle',
    },
    {
      type: 'paragraph',
      text: 'SIRT3 is the primary mitochondrial deacetylase, with >30% of mitochondrial proteins hyperacetylated in SIRT3-knockout mice. Key skeletal muscle targets include: SOD2/K68 and K122 deacetylation (+3× superoxide dismutase activity; Qiu et al., 2010 PNAS), protecting the ETC from oxidative damage; LCAD/K42 deacetylation (+30-50% long-chain acyl-CoA dehydrogenase activity, enabling fatty acid β-oxidation under fasting/exercise; Hirschey et al., 2010 Nature); IDH2/K413 deacetylation (2× isocitrate dehydrogenase activity, generating NADPH for glutathione recycling via GR; Someya et al., 2010 Cell); and PDHA1/K321 deacetylation, channeling pyruvate into the TCA cycle over lactate production. Together, these substrates establish SIRT3 as the master metabolic flexibility switch in muscle mitochondria.',
    },
    {
      type: 'paragraph',
      text: 'SIRT3 knockout mice develop severe muscle insulin resistance, reduced fatty acid oxidation, and accelerated sarcopenia phenotypes (Lantier et al., 2015 Diabetes). NMN or NR supplementation in aged mice restores SIRT3-SOD2 activity and IDH2-NADPH flux in a SIRT3-dependent manner (confirmable via SIRT3-KO, JAX strain #012755, as a loss-of-function control).',
    },
    {
      type: 'heading',
      text: 'Muscle Atrophy Signaling: MuRF-1, Atrogin-1, and the UPS',
    },
    {
      type: 'paragraph',
      text: 'Skeletal muscle atrophy is primarily executed through the ubiquitin-proteasome system (UPS), with two E3 ubiquitin ligases — MuRF-1 (TRIM63) and Atrogin-1 (MAFbx/FBXO32) — serving as the master atrogenes. Both are transcribed by FOXO1/3a upon de-phosphorylation (when PI3K/Akt signaling falls). The core logic: low IGF-1 (or insulin) → low IRS-1/PI3K → low Akt/Thr308 phosphorylation → FOXO1/3a nuclear → MuRF-1 + Atrogin-1 transcription → myosin heavy chain (MHC) and thin-filament protein ubiquitination → 26S proteasome degradation.',
    },
    {
      type: 'paragraph',
      text: 'NAD⁺/SIRT1 intersects this axis at two points: (1) SIRT1 deacetylates FOXO3a, reducing its pro-atrophy transcriptional activity (Sandri et al., 2004; Brunet et al., 2004); (2) SIRT1-mediated PGC-1α activation suppresses FOXO3a-dependent atrogene expression independent of Akt (Sandri et al., 2006 Cell). NMN treatment in hindlimb unloaded (HLU) mice reduced MuRF-1 and Atrogin-1 mRNA by 35–45% and attenuated soleus muscle mass loss by ~25% vs. vehicle (Canto et al., 2012 Cell Metabolism). These data establish SIRT1 deacetylation of FOXO3a as a viable anti-atrophy mechanism downstream of NAD⁺ restoration.',
    },
    {
      type: 'heading',
      text: 'Glucose Uptake: SIRT1/AMPK/GLUT4 Axis',
    },
    {
      type: 'paragraph',
      text: 'Insulin-stimulated glucose uptake in skeletal muscle is mediated by GLUT4 vesicle translocation, downstream of the PI3K/Akt/AS160 pathway. Age-related insulin resistance in muscle involves IRS-1 serine phosphorylation (via inflammatory JNK/IKKβ), PI3K activation failure, and impaired GLUT4 exocytosis. NAD⁺ restoration addresses this via SIRT1-mediated deacetylation of IRS-1 (reducing inhibitory serine phosphorylation), PGC-1α-driven GLUT4 transcription, and SIRT3-mediated mitochondrial ATP production sufficiency for GLUT4 vesicle trafficking.',
    },
    {
      type: 'paragraph',
      text: 'Yoshino et al. (2011 Cell Metabolism) showed NMN at 500 mg/kg/day IP for 10 days in HFD-induced insulin-resistant mice restored skeletal muscle insulin signaling (pAkt Thr308, pAS160), reduced fasting blood glucose by 18–22%, and improved glucose infusion rate during euglycemic clamp — establishing muscle-specific NAD⁺/SIRT1 insulin sensitization as a primary mechanism.',
    },
    {
      type: 'heading',
      text: 'Published Preclinical Protocol Reference Table',
    },
    {
      type: 'table',
      headers: ['Model', 'Species/Strain', 'NAD+ Compound', 'Dose', 'Route/Frequency', 'Duration', 'Key Endpoint', 'Citation'],
      rows: [
        ['Aging sarcopenia', 'C57BL/6J 24mo', 'NMN', '500 mg/kg/day', 'IP daily', '8 weeks', 'Grip strength, mtDNA, PGC-1α acetylation', 'Gomes 2013 Cell'],
        ['HFD insulin resistance', 'C57BL/6J 12wk HFD', 'NMN', '500 mg/kg/day', 'IP 10 days', '10 days', 'pAkt, GTT/ITT AUC, GIR (clamp)', 'Yoshino 2011 Cell Metab'],
        ['HFD metabolic', 'C57BL/6J HFD', 'NR', '400 mg/kg/day', 'Oral gavage', '12 weeks', 'SIRT1 activity, NAD+/NADH, mitochondrial density', 'Cantó 2012 Cell Metab'],
        ['Hindlimb unloading atrophy', 'C57BL/6J 10wk', 'NMN', '500 mg/kg/day', 'IP daily', '2 weeks HLU', 'MuRF-1/Atrogin-1 mRNA, muscle wet weight', 'Cantó 2012 Cell Metab'],
        ['Acute plasma NAD+', 'C57BL/6J', 'Direct NAD+', '250–500 mg/kg', 'IP single dose', 'Acute (2–6h)', 'Plasma NAD+ AUC, tissue NAD+ 1h post', 'Pencina 2023 Nature Aging'],
        ['Aged cardiac/skeletal', 'C57BL/6J 20mo', 'NMN', '500 mg/kg/day', 'IP or oral', '8 weeks', 'SIRT3-SOD2 activity, Complex I, EF%', 'Gomes 2013 Cell'],
      ],
    },
    {
      type: 'heading',
      text: 'Endpoint Selection for Skeletal Muscle NAD+ Research',
    },
    {
      type: 'table',
      headers: ['Endpoint', 'Method', 'Timing', 'Target/Notes'],
      rows: [
        ['Tissue NAD+/NADH', 'EnzyChrom NAD+/NADH Assay Kit (BioAssay Systems ECND-100)', 'ZT3–5, snap-freeze LN₂', 'Flash-freeze tissue ≤30s; acid extraction; do not freeze-thaw'],
        ['SIRT1 deacetylase activity', 'Enzo BML-AK555 fluorescent substrate assay', '48h post-last injection', 'Nuclear extract protocol; include 10 µM EX-527 control well'],
        ['SIRT3 activity (SOD2 Ac-K68)', 'PTMScan Anti-Acetyl-Lys motif WB (Cell Signaling)', 'With sacrifice', 'Mitochondrial isolation mandatory; JC-1 as viability co-endpoint'],
        ['PGC-1α acetylation', 'IP with anti-PGC-1α (Abcam ab54481) + WB acetyl-Lys', 'Nuclear fraction', 'Use fresh tissue; HDAC inhibitor (TSA 5 µM) in lysis buffer'],
        ['MuRF-1/Atrogin-1 mRNA', 'RT-qPCR, ZT3–4 circadian standardization', 'Sacrifice day', 'Circadian-regulated: ZT3–4 sampling critical; GAPDH/ACTB reference'],
        ['Grip strength', 'Digital grip meter (San Diego Instruments)', 'Weekly, ZT4–6', 'Average 3 trials × 2 limbs; exclude outliers >20% SD'],
        ['Treadmill exhaustion', 'Metabolic treadmill at 12° incline, 5–20 m/min ramp', 'Weeks 4 and 8', 'Define exhaustion as ≥5 touches/10s stimuli; 15min habituation prior'],
        ['EchoMRI body composition', 'EchoMRI-100 (lean mass/fat mass)', 'q4 weeks', 'No fasting required; 0.5% CV; same time-of-day each measurement'],
        ['Fiber type (MHC)', 'IHC: BA-D5 (MHC I), SC-71 (IIa), BF-F3 (IIb), 6H1 (IIx)', 'Serial cryosections 10 µm', 'DSHB antibodies; minimum 200 fibers per section per animal'],
        ['mtDNA copy number', 'qPCR: ND1 (mitochondrial) / GAPDH (nuclear) ratio', 'DNA isolated at sacrifice', 'Proteinase K digest; phenol-chloroform preferred over silica column'],
        ['Seahorse OCR', 'XFe96/XFp (Agilent), permeabilized fibers or myotubes', '4h post-isolation max', 'Saponin 40 µg/mL permeabilization; 2 µM FCCP titrated per genotype'],
      ],
    },
    {
      type: 'heading',
      text: 'Study Design: Aged C57BL/6J Multi-Compound Muscle Protocol',
    },
    {
      type: 'paragraph',
      text: 'A 5-group aged muscle study captures NAD⁺-specific effects and tests combination with complementary mechanisms (SS-31 for mitochondrial quality, MOTS-c for AMPK/glucose). Use aged male and female C57BL/6J (20–24 months, sourced from NIA Aged Rodent Colonies) with n=10 per group to achieve 80% power at 20% effect size (CV%=25–30% for grip strength).',
    },
    {
      type: 'table',
      headers: ['Group', 'Treatment', 'Dose', 'Route', 'Frequency', 'Rationale'],
      rows: [
        ['1', 'Young vehicle (C57BL/6J 4mo)', 'Sterile saline', 'IP', 'Daily', 'Young baseline reference'],
        ['2', 'Aged vehicle', 'Sterile saline', 'IP', 'Daily', 'Aged negative control; quantify sarcopenia phenotype'],
        ['3', 'Aged NMN', '500 mg/kg/day', 'IP', 'Daily', 'NAD⁺/SIRT1/SIRT3 axis; primary intervention'],
        ['4', 'Aged SS-31', '3 mg/kg/day', 'SC', 'Daily', 'Cardiolipin/Complex I quality control; non-redundant with NMN'],
        ['5', 'Aged NMN + SS-31', '500 mg/kg NMN IP + 3 mg/kg SS-31 SC', 'IP + SC', 'Daily', 'Combination: biogenesis (SIRT1/PGC-1α) + quality (cardiolipin) — non-competing'],
      ],
    },
    {
      type: 'paragraph',
      text: 'Study duration: 8 weeks. Behavioral endpoints (grip strength, rotarod, treadmill) at baseline, week 4, and week 8. EchoMRI at baseline and week 8. Sacrifice at ZT3–5 for circadian-standardized molecular endpoints. Tissues: gastrocnemius (metabolic/fiber type), soleus (type I/IIa), EDL (type IIb), tibialis anterior (grip strength correlate), liver (NAD+ flux reference), serum (IGF-1, insulin, glucose).',
    },
    {
      type: 'heading',
      text: 'Pharmacological Controls',
    },
    {
      type: 'table',
      headers: ['Control', 'Target', 'Dose', 'Purpose'],
      rows: [
        ['NAM (nicotinamide)', 'SIRT1/SIRT3 inhibitor', '500 mg/kg/day IP', 'Vehicle: matched to NMN at equimolar NAM exposure; also acts as sirtuin inhibitor — separate group if dissecting SIRT1 vs NAMPT mechanisms'],
        ['FK866', 'NAMPT inhibitor', '10 mg/kg IP', 'Deplete endogenous NAD+ to confirm NAMPT-dependence of treatment effect; use paired NMN rescue group'],
        ['EX-527 (selisistat)', 'SIRT1-selective inhibitor', '10 mg/kg IP', 'Dissect SIRT1 from SIRT3 or AMPK contributions to NMN muscle benefit'],
        ['3-TYP', 'SIRT3-selective inhibitor', '50 mg/kg/day oral', 'Dissect SIRT3 mitochondrial contribution from SIRT1 nuclear effects'],
        ['SIRT1-KO', 'Genetic SIRT1 KO', 'JAX #003815', 'Confirm SIRT1 dependence; compare with WT in NMN response'],
        ['SIRT3-KO', 'Genetic SIRT3 KO', 'JAX #012755', 'Confirm SIRT3 dependence for mitochondrial endpoints'],
      ],
    },
    {
      type: 'heading',
      text: 'Reconstitution and Storage Protocol',
    },
    {
      type: 'table',
      headers: ['Compound', 'Solvent', 'Stock Concentration', 'Storage', 'Stability Notes'],
      rows: [
        ['NMN', 'Sterile saline (0.9% NaCl)', '50–100 mg/mL', '−20°C lyophilized; 4°C reconstituted ≤72h; prepare fresh daily if possible', 'No BAC water (nicotinamide ring degradation). No DMSO. Amber tube. Verify UV 260nm before use.'],
        ['Direct NAD+', 'Sterile PBS pH 7.4', '25–50 mg/mL', '−80°C aliquots; 4°C working ≤2h; no freeze-thaw', 'Extremely light-sensitive (259/340 nm). Red light only during reconstitution. No BAC water. Fresh daily.'],
        ['SS-31', 'Sterile saline (0.9% NaCl)', '1–5 mg/mL', '−20°C lyophilized; 4°C reconstituted ≤72h', 'No BAC water (benzyl alcohol disrupts amphipathic IMM binding). Gentle mixing only.'],
        ['NR (nicotinamide riboside)', 'Sterile saline or water', '100 mg/mL', '−20°C; protect from moisture', 'Hygroscopic — weigh rapidly. Alternative to NMN for oral gavage studies; less stable in solution.'],
      ],
    },
    {
      type: 'heading',
      text: 'Combination with MOTS-c: AMPK/GLUT4 Synergy',
    },
    {
      type: 'paragraph',
      text: 'MOTS-c (5 mg/kg/day IP) works upstream of NAD⁺ in skeletal muscle: AMPK activation reduces malonyl-CoA, derepressing CPT1 for fatty acid entry into mitochondria and triggering GLUT4 nuclear translocation for glucose uptake (Lee et al., 2015 Cell Metabolism). AMPK also phosphorylates and activates NAMPT (at Ser314), increasing NAD⁺ biosynthesis. This creates a MOTS-c → AMPK → NAMPT → NAD⁺ → SIRT1 linear feedforward cascade, making MOTS-c upstream and non-redundant with direct NAD⁺ precursor supplementation. A 6-group design adding aged MOTS-c and aged NMN+MOTS-c arms to the 5-group above is the standard framework for testing this cascade.',
    },
    {
      type: 'heading',
      text: '6 Research Design Considerations',
    },
    {
      type: 'list',
      items: [
        'NAM vehicle controls are mandatory: at equimolar NMN dose, NAM breakdown releases enough free NAM to inhibit SIRT1/SIRT3 (Km ~100 µM) at plasma concentrations. A separate "NAM vehicle" group receiving free NAM at the same molar dose as NMN is required to attribute any benefit to NAD⁺ restoration rather than NAM-specific effects.',
        'Circadian timing is critical for all molecular endpoints: NAMPT, SIRT1, PGC-1α, and FOXO3a all show circadian oscillation. All injections should be at ZT12 (start of dark/active phase in nocturnal rodents) and all tissue collections at ZT3–5. Deviations of ±2h are acceptable; deviations >4h invalidate inter-group comparison.',
        'Tissue NAD+ measurement requires snap-freeze: NAD+ is enzymatically active and degrades in seconds post-excision. Tissue must be freeze-clamped in pre-cooled clamps or liquid nitrogen within 15–30 seconds of excision. Do not use thawed tissue for NAD+ measurement.',
        'Power calculation for grip strength: inter-animal CV% for aged C57BL/6J grip strength is 25–30%. To detect a 20% improvement with 80% power (α=0.05), n=10 per group minimum. For treadmill exhaustion (CV%=35–40%), n=12 per group. Pre-registration of primary endpoint (grip strength or EchoMRI lean mass) is strongly recommended.',
        'Sex differences in aging muscle: female C57BL/6J mice show a later-onset but more severe sarcopenia phenotype vs. males due to estrogen receptor α (ERα) — estrogen maintains SIRT1 expression via an ERE in the SIRT1 promoter. OVX female mice may require lower age thresholds to match aged male sarcopenia severity. NIH SABV requires sex-stratified groups; power accordingly (n=10 per sex per group = n=20 per group total).',
        'SS-31 + NMN combination timing: SS-31 and NMN address different subcellular compartments (IMM vs nucleus/cytoplasm) and different mechanistic steps (cardiolipin quality vs NAD⁺ flux). Administer by separate injections at separate sites (SC dorsal scruff for SS-31; IP left quadrant for NMN). This prevents any pharmacokinetic interaction and allows independent dose adjustment.',
      ],
    },
    {
      type: 'heading',
      text: 'Related Research Tools',
    },
    {
      type: 'paragraph',
      text: 'For reconstitution guidance specific to NAD+ and NMN, use the Nexphoria Reconstitution Calculator (/tools/reconstitution-calculator) and the BAC Water Guide (/tools/bac-water-guide). For body-weight-adjusted dosing calculations (e.g., 500 mg/kg/day for a 30g mouse), use the Body Weight Dose Calculator (/tools/body-weight-dose-calculator). For half-life and dosing frequency reference across all compounds in a multi-compound protocol, see the Compound Half-Life Reference (/tools/compound-half-life-reference).',
    },
    {
      type: 'disclaimer',
      text: 'All Nexphoria compounds are sold strictly for in vitro and preclinical research use only (RUO). This article is intended for researchers with appropriate institutional oversight (IACUC approval). No information herein constitutes medical advice, clinical guidance, or protocol endorsement for human use.',
    },
  ],
};
