import { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: 'peptide-research-sarcopenia-ss31-nad-mots-c-aging-muscle-protocols',
  title: 'Peptide Research for Sarcopenia: SS-31, NAD+, MOTS-c, and Aging Muscle Protocols',
  description:
    'A comprehensive research guide to sarcopenia biology and multi-compound peptide protocols: SS-31 cardiolipin/Complex I quality-not-quantity mechanism, NAD+/NMN SIRT3/PGC-1α biogenesis, MOTS-c AMPK/GLUT4 exercise mimetic, and GH secretagogue anabolism — with model selection, endpoint panel, and study design guidance.',
  category: 'Longevity',
  readMinutes: 11,
  publishedAt: '2026-06-02',
  ogImage: '/og/products/ss-31.png',
  body: [
    {
      type: 'paragraph',
      text: 'Sarcopenia — the progressive, age-associated loss of skeletal muscle mass and function — affects more than 30% of adults over 75 and is a leading predictor of frailty, hospitalization, and all-cause mortality (Janssen 2002, American Journal of Clinical Nutrition). Despite its clinical burden, no pharmacological agent has received FDA approval for sarcopenia treatment. Most research has focused on androgen replacement or GH secretagogues to drive anabolism, while overlooking the upstream mitochondrial dysfunction that impairs both existing fiber energetics and satellite cell regenerative capacity. A mechanistically broader approach — combining compounds that target mitochondrial quality, NAD+ metabolism, AMPK-mediated glucose uptake, and IGF-1 anabolism — offers a more comprehensive research model for aging muscle biology.',
    },
    {
      type: 'heading',
      text: 'The Mitochondrial Core: Why Aging Muscle Fails',
    },
    {
      type: 'paragraph',
      text: 'The defining mitochondrial lesion of sarcopenia is not a reduction in mitochondrial number — it is a decline in mitochondrial quality. Hepple 2016 (Journal of Experimental Biology) documented that aged muscle shows mtDNA point mutation accumulation, cristae morphology disruption, and electron transport chain (ETC) supercomplex disassembly. Critically, the primary energy currency of the sarcopenic fiber shifts from efficient OXPHOS to inefficient glycolysis — a Warburg-like metabolic reprogramming that reduces ATP per glucose molecule from ~36 to just 2, creates an energy deficit in type I oxidative fibers, and drives a fiber type shift from slow-twitch to fast-twitch that paradoxically increases fatigability.',
    },
    {
      type: 'paragraph',
      text: 'Cardiolipin — the bis-phosphatidyl glycerol lipid unique to the inner mitochondrial membrane (IMM) — is central to this failure. It scaffolds ETC supercomplex assembly (Complex I–III–IV megacomplexes) and maintains cristae curvature essential for proton gradient capture. In aged muscle, three processes deplete functional cardiolipin: TAFAZZIN transacylase failure (immature cardiolipin accumulation), Complex I ROS-driven cytochrome c/cardiolipin peroxidase complex formation, and iPLA2γ deacylation (lysocardiolipin accumulation). The result is supercomplex disassembly, cristae collapse, increased electron leak, and a self-amplifying oxidative damage loop.',
    },
    {
      type: 'heading',
      text: 'SS-31: Quality Over Quantity',
    },
    {
      type: 'paragraph',
      text: 'SS-31 (elamipretide; D-Arg-2\',6\'-Dmt-Lys-Phe-NH2) addresses the upstream cardiolipin lesion directly. Its Dmt aromatic residue inserts into the IMM outer leaflet, and its D-Arg residues anchor electrostatically to cardiolipin\'s negatively charged headgroup. This binding is non-sacrificial: SS-31 physically blocks cytochrome c from forming the peroxidase complex with cardiolipin that initiates the peroxidation cascade. The result is cardiolipin preservation, cristae curvature maintenance, and supercomplex scaffold stabilization — without inducing biogenesis.',
    },
    {
      type: 'paragraph',
      text: 'Siegel et al. (2013, Aging Cell) established the key conceptual distinction: in aged C57BL/6J mice (24 months), a single SC injection of SS-31 at 3 mg/kg increased Complex I electron flow by 40–50% within 4–8 hours. Crucially, mtDNA copy number, PGC-1α mRNA, TFAM protein, and citrate synthase activity were all unchanged. SS-31 restored mitochondrial quality — the functional output per unit of existing mitochondria — without triggering new mitochondrial synthesis. This quality-not-quantity mechanism is the defining feature that makes SS-31 non-redundant with NAD+ precursors and distinguishes it as a research tool for studying the cardiolipin axis specifically.',
    },
    {
      type: 'paragraph',
      text: 'Marcinek et al. (2014, Journal of Physiology) extended these findings using in vivo 31P-NMR spectroscopy in aged mice to show that SS-31 treatment accelerated PCr recovery kinetics — a direct measure of in vivo mitochondrial oxidative capacity — without changes in mitochondrial volume density. Grip strength, voluntary wheel running, and maximal force production were all improved.',
    },
    {
      type: 'heading',
      text: 'NAD+/NMN: Biogenesis via SIRT3 and SIRT1/PGC-1α',
    },
    {
      type: 'paragraph',
      text: 'In contrast to SS-31\'s quality-focused mechanism, NAD+ precursors restore mitochondrial quantity through the SIRT1/PGC-1α biogenesis axis. SIRT1 deacetylates PGC-1α at 13 lysine residues (K183, K253, K450, K581, K775, and others), converting it from an inactive to an active transcription co-activator for TFAM, NRF1, NRF2, and ERRα — driving mtDNA transcription, ribosomal biogenesis, and new mitochondrial synthesis. SIRT3, operating in the mitochondrial matrix, deacetylates SOD2 (K68/K122; Qiu 2010, PNAS) and IDH2 (K413; Someya 2010, Cell) to boost antioxidant capacity and NADPH regeneration independently of the biogenesis program.',
    },
    {
      type: 'paragraph',
      text: 'Gomes et al. (2013, Cell) demonstrated the translational relevance in aged muscle: NMN IP at 500 mg/kg/day for 7 days in 22-month C57BL/6J mice restored nuclear NAD+/SIRT1 activity, reduced γH2AX (DNA damage marker) by ~35%, reversed pseudohypoxic HIF-1α accumulation in muscle, and improved grip strength by 18% and treadmill exhaustion time by 20%. Importantly, the fiber type shift from type IIx (fast-glycolytic) back toward type IIa (fast-oxidative) was partially reversed — consistent with biogenesis-driven oxidative capacity restoration.',
    },
    {
      type: 'heading',
      text: 'MOTS-c: The AMPK/GLUT4 Exercise Mimetic',
    },
    {
      type: 'paragraph',
      text: 'MOTS-c is a 16-amino acid peptide encoded in the 12S rRNA region of the mitochondrial genome, discovered by Lee et al. (2015, Cell Metabolism). Unlike SS-31 and NAD+, MOTS-c activates AMPK primarily via accumulation of AICAR (an AMP analog) through disruption of the folate cycle — targeting the metabolic sensing arm of muscle function rather than the mitochondrial structure arm. AMPK activation leads to GLUT4 nuclear-to-membrane translocation (increasing glucose uptake), ACC/CPT1 phosphorylation (fatty acid oxidation upregulation), and malonyl-CoA suppression.',
    },
    {
      type: 'paragraph',
      text: 'In DIO C57BL/6J mice, MOTS-c at 5 mg/kg/day IP for 2 weeks reversed insulin resistance and improved EchoMRI lean mass composition. In a subsequent aged C57BL/6J study, MOTS-c treatment over 8 weeks restored insulin-stimulated GLUT4 translocation, increased skeletal muscle glucose uptake by 35–45%, and modestly improved grip strength. Young et al. (2021, Nature Aging) extended these findings to human subjects, documenting that circulating MOTS-c declines 40–50% between ages 30 and 70 and correlates inversely with insulin resistance and fat mass — supporting MOTS-c as both a biomarker and intervention target for metabolic sarcopenia.',
    },
    {
      type: 'heading',
      text: 'GH Secretagogues: Anabolic Rescue via IGF-1/mTOR',
    },
    {
      type: 'paragraph',
      text: 'While mitochondrial and metabolic compounds address the energetic deficit of sarcopenic muscle, anabolic signaling via the GH/IGF-1/mTOR axis is required to drive net protein synthesis. MK-677 (ibutamoren) — a non-peptide GHSR-1a full agonist with 24-hour half-life — provides sustained GH pulsatility mimicry suitable for once-daily oral gavage in rodents. Nass et al. (2008, Annals of Internal Medicine) demonstrated in 18-month-old C57BL/6J mice that 4 weeks of MK-677 at 10–30 mg/kg oral produced a 39.9% IGF-1 elevation and a 1.1 kg lean mass gain — without the insulin resistance or cortisol elevation seen with exogenous GH administration. The combination of pulsatile GHSR-1a activation (preserving the episodic GH pulse architecture critical for hepatic IGF-1 synthesis) with downstream mTOR/S6K/eIF4E anabolic signaling makes MK-677 the preferred secretagogue for sarcopenia combination protocols.',
    },
    {
      type: 'heading',
      text: 'Compound Comparison Table',
    },
    {
      type: 'table',
      headers: ['Compound', 'Primary Target', 'Mechanism', 'Key Model/Data', 'Dose (Mouse)', 'Route/Freq'],
      rows: [
        ['SS-31', 'Cardiolipin/IMM', 'Quality-not-quantity: Complex I restoration without biogenesis', 'Siegel 2013 Aging Cell: +40–50% Complex I, no mtDNA change', '3 mg/kg', 'SC daily'],
        ['NAD+/NMN', 'SIRT1-PGC-1α / SIRT3-SOD2', 'Biogenesis via deacetylation + antioxidant capacity', 'Gomes 2013 Cell: +18% grip, +20% exhaustion, fiber type shift', '500 mg/kg NMN', 'IP daily'],
        ['MOTS-c', 'AMPK/GLUT4', 'Metabolic sensitization via AICAR/folate cycle', 'Lee 2015 Cell Metab: IR reversal; Young 2021 Nature Aging: human data', '5 mg/kg', 'IP daily'],
        ['MK-677', 'GHSR-1a', 'GH pulsatility → IGF-1/mTOR anabolism', 'Nass 2008 AIM: +39.9% IGF-1, +1.1 kg lean mass, elderly cohort', '10–30 mg/kg', 'Oral daily'],
        ['Ipamorelin + CJC-1295 No DAC', 'GHSR-1a + GHRHr', 'Pulsatile 8–12× synergistic GH release, minimal HPA activation', 'Bowers 1998: 8–12× GH amplification; Johansen 1999: dose-response', '100 mcg/kg each', 'SC 3×/week'],
        ['GHK-Cu', 'TGF-β1/LOX + Nrf2', 'ECM collagen/elastin synthesis + antioxidant via Nrf2/GCLC', 'Pickart database: 2000+ genes; Leyden 2004 RCT', '1–5 mg/kg', 'SC daily'],
      ],
    },
    {
      type: 'heading',
      text: 'Sarcopenia Model Selection Guide',
    },
    {
      type: 'table',
      headers: ['Model', 'Species/Age', 'Induction', 'Primary Endpoint', 'Pros', 'Cons'],
      rows: [
        ['Naturally aged', 'C57BL/6J 18–24 mo', 'None (NIA Aged Rodent Colonies)', 'Grip strength, fiber CSA, MHC shift', 'Highest translational relevance, full phenotype', 'High cost, long timeline, large cohort required'],
        ['Hindlimb unloading (HLU)', 'C57BL/6J 3–6 mo', 'Tail suspension 14–28 days', 'Soleus/gastrocnemius wet weight, CSA, grip recovery', 'Rapid, controlled, reversible (reloading studies)', 'Disuse atrophy not identical to aging atrophy'],
        ['Denervation', 'C57BL/6J 3–6 mo', 'Sciatic nerve transection', 'Tibialis anterior wet weight, fiber CSA, MHC', 'Clean neurogenic atrophy model', 'Not aging-specific, irreversible'],
        ['Immobilization', 'Rat 3–6 mo', 'Plaster cast hindlimb 14 days', 'Gastrocnemius wet weight, protein synthesis', 'Bed-rest model, acute protocol', 'Limited to disuse, no mitochondrial aging phenotype'],
        ['Cachexia (IL-6)', 'C57BL/6J 3 mo', 'IL-6 osmotic minipump 28 days', 'Lean mass, grip, MuRF-1/atrogin-1', 'Cancer/chronic disease co-morbidity model', 'Inflammatory confounds complicate mitochondrial endpoints'],
        ['IVA mouse (accelerated aging)', 'IVA (ICR-derived)', 'Spontaneous accelerated senescence', 'Lifespan, grip, neuromuscular coordination', 'Faster time course than C57BL/6J aging', 'Less published background data than C57BL/6J'],
      ],
    },
    {
      type: 'paragraph',
      text: 'For multi-compound sarcopenia research, aged naturally-aged C57BL/6J from NIA Aged Rodent Colonies (18–24 months) remains the gold standard model. Order animals 4 weeks in advance and allow 2 weeks of acclimatization before baseline measurements. Daily handling (scruffing, brief restraint, cage familiarization) is mandatory to reduce inter-animal corticosterone variability and normalize the handling stress response prior to baseline grip testing.',
    },
    {
      type: 'heading',
      text: 'Endpoint Selection Table',
    },
    {
      type: 'table',
      headers: ['Endpoint', 'Method', 'Timing', 'Target Compound(s)', 'Notes'],
      rows: [
        ['Grip strength (forelimb)', 'Columbus Instruments grip meter, 5 trials/animal, exclude outliers', 'Weekly', 'All compounds', 'Standardize: same grip plate, 3-trial mean, same technician. Morning ZT1–2 preferred'],
        ['Rotarod (accelerating)', '4–40 RPM over 5 min, 3 trials with 15-min rest, mean latency to fall', 'Weeks 0, 4, 8, 12', 'All compounds', 'Sensitive to type I fiber function; familiarize 3 days before baseline'],
        ['Treadmill exhaustion', 'Columbus Instruments Exer-3/6, 5 m/min → 25 m/min step protocol, exhaustion = 5-sec footshock zone contact', 'Weeks 0 and endpoint', 'NAD+, MOTS-c, MK-677', 'Avoid in severely aged animals; replace with grip/rotarod as primary'],
        ['EchoMRI fat/lean mass', 'Whole-body NMR composition, awake, 3-min scan', 'Weeks 0, 4, 8, 12', 'All compounds', 'Gold standard for lean mass. Requires EchoMRI 700 series or equivalent'],
        ['Fiber CSA (cross-sectional area)', 'Laminin IHC, QuPath/ImageJ polygon tool, ≥200 fibers per muscle', 'Endpoint', 'SS-31, NAD+, MK-677', 'Soleus (type I) and EDL (type II) minimum. Cryosection at mid-belly'],
        ['MHC fiber type (IHC)', 'Antibodies: BA-F8 (type I), SC-71 (type IIA), BF-F3 (type IIB); SOD1/2 IHC optional', 'Endpoint', 'NAD+, MK-677', 'Type IIx requires 6H1 antibody. Batch-stain all sections simultaneously'],
        ['Seahorse OCR (isolated mitochondria)', 'Agilent XF24 + Mito Stress Test; or isolated muscle fibers Oroboros O2k', 'Endpoint (within 4h of sacrifice)', 'SS-31, NAD+', 'For Seahorse: mitochondria isolation by differential centrifugation, ice-cold, <90 min bench time. Oroboros preferred for aged muscle (less handling artifact)'],
        ['NAO (cardiolipin probe)', 'Nonyl acridine orange (NAO, 100 nM) flow cytometry on isolated mitochondria', 'Endpoint', 'SS-31 primary', 'NAO quenches with cardiolipin peroxidation; MitoSOX co-staining for ROS. Avoid FM4-64 confusion'],
        ['MitoSOX (mitochondrial ROS)', 'MitoSOX Red (2.5 μM, 15 min at 37°C) flow cytometry on muscle homogenate or primary myotubes', 'Endpoint', 'SS-31, NAD+', 'Fix cells immediately; do not leave in dye >20 min (non-specific signal)'],
        ['mtDNA copy number (qPCR)', 'COX1 (mitochondrial) vs GAPDH (nuclear) ratio by qPCR', 'Endpoint', 'NAD+, MOTS-c', 'Confirms biogenesis-independent mechanism of SS-31; expected: unchanged with SS-31, increased with NAD+'],
      ],
    },
    {
      type: 'heading',
      text: 'Five-Group Aged Study Design',
    },
    {
      type: 'paragraph',
      text: 'A powered multi-compound sarcopenia study requires n=10–12 per group (CV% of grip strength ~18–22% in aged C57BL/6J; power = 0.80, α = 0.05, detecting ≥20% effect size). Five groups provide mechanistic resolution across the major axes:',
    },
    {
      type: 'table',
      headers: ['Group', 'Treatment', 'Route/Dose', 'Mechanistic Purpose'],
      rows: [
        ['1', 'Young vehicle (3–4 mo C57BL/6J)', 'Sterile saline SC daily', 'Phenotypic reference — defines the full target response'],
        ['2', 'Aged vehicle (20–24 mo C57BL/6J)', 'Sterile saline SC daily', 'Sarcopenic baseline — all treatment arms compare to this group'],
        ['3', 'Aged SS-31 (3 mg/kg SC daily)', 'Sterile saline SC daily', 'Mitochondrial quality axis — cardiolipin/Complex I restoration without biogenesis'],
        ['4', 'Aged NMN (500 mg/kg IP daily)', 'PBS IP daily', 'Biogenesis axis — SIRT1/PGC-1α + SIRT3/SOD2; expected mtDNA increase, PGC-1α upregulation'],
        ['5', 'Aged SS-31 + NMN (combination)', 'Both routes, separate injections', 'Orthogonal stack — quality (SS-31) + quantity (NMN) + antioxidant (SIRT3); non-redundant by mechanism'],
      ],
    },
    {
      type: 'paragraph',
      text: 'Optional Groups 6 and 7: MOTS-c (5 mg/kg IP daily) as the metabolic sensitization arm, and MK-677 (10–20 mg/kg oral daily) as the anabolic arm, added in a separate cohort or in a 7-group full design if animal facility capacity allows. Budget: the 5-group core design at n=10 requires 50 aged animals (budget lead time 4–6 months from NIA order to experiment start).',
    },
    {
      type: 'heading',
      text: 'Preclinical Dosing Reference Table',
    },
    {
      type: 'table',
      headers: ['Compound', 'Species', 'Dose', 'Route', 'Frequency', 'Key Reference'],
      rows: [
        ['SS-31', 'Mouse (C57BL/6J)', '3 mg/kg', 'SC', 'Daily', 'Siegel 2013 Aging Cell'],
        ['SS-31', 'Rat (Sprague-Dawley)', '0.5–5 mg/kg', 'SC', 'Daily', 'Szeto 2014 Biochim Biophys Acta'],
        ['NMN', 'Mouse (C57BL/6J aged)', '500 mg/kg', 'IP', 'Daily', 'Gomes 2013 Cell'],
        ['NR', 'Mouse (C57BL/6J HFD)', '400 mg/kg', 'Oral gavage', 'Daily', 'Cantó 2012 Cell Metabolism'],
        ['MOTS-c', 'Mouse (C57BL/6J aged)', '5 mg/kg', 'IP', 'Daily', 'Lee 2015 Cell Metabolism; Young 2021 Nature Aging'],
        ['MK-677', 'Mouse (C57BL/6J)', '10–30 mg/kg', 'Oral gavage', 'Daily', 'Nass 2008 Annals of Internal Medicine'],
      ],
    },
    {
      type: 'heading',
      text: 'Reconstitution and Storage',
    },
    {
      type: 'table',
      headers: ['Compound', 'Reconstitute In', 'Working Concentration', 'Storage (Lyophilized)', 'Storage (Reconstituted)', 'Notes'],
      rows: [
        ['SS-31', 'Sterile saline (0.9% NaCl), pH 7.0–7.4', '3 mg/mL (for 3 mg/kg in 1 mL/kg)', '-20°C, dark, desiccant', '4°C, use within 72h; do not freeze reconstituted', 'No BAC water (benzyl alcohol disrupts D-Arg electrostatic anchoring). Prepare fresh every 3 days'],
        ['NMN (for IP)', 'Sterile saline or PBS, pH 7.2–7.4', '50 mg/mL (500 mg/kg in 10 mL/kg)', '-20°C', '4°C, use within 48h; freeze aliquots at -80°C for multi-day use', 'Light sensitive. Amber vials. No BAC water (oxidation risk). Check for precipitation before injection'],
        ['MOTS-c', 'Sterile saline', '0.5 mg/mL (5 mg/kg in 10 mL/kg)', '-20°C', '4°C, use within 5 days', 'Gentle rolling to dissolve. No vortex. BAC water acceptable but sterile saline preferred'],
        ['MK-677', '0.5% methylcellulose or 10% DMSO/corn oil', '1–3 mg/mL (10–30 mg/kg in 10 mL/kg oral)', 'Room temperature in desiccant', 'RT up to 7 days in MC suspension; refrigerate DMSO stock', 'For oral gavage: methylcellulose suspension preferred for uniform dosing. No BAC water'],
      ],
    },
    {
      type: 'heading',
      text: 'Six Research Design Considerations',
    },
    {
      type: 'paragraph',
      text: '1. Aged animal acclimatization. Source aged animals from NIA Aged Rodent Colonies. Allow 14 days minimum acclimatization before any baseline measurement. Perform daily 5-minute handling sessions to normalize HPA axis response. Corticosterone AUC should be measured at baseline (ZT2 trunk blood) and confirmed equivalent across groups before randomization.',
    },
    {
      type: 'paragraph',
      text: '2. Grip strength standardization. Grip strength is the primary functional endpoint but is highly sensitive to technician variability, grip plate orientation, and animal body position. Always use the same technician, same grip plate, and the same hold-and-pull technique. Record 5 trials per session, discard high/low outliers, and use the 3-trial mean. Morning testing (ZT1–2) after minimal handling minimizes acute stress confounds. Report results as absolute grams and normalized to body weight (g/g BW).',
    },
    {
      type: 'paragraph',
      text: '3. Orthogonal endpoint design. The SS-31 + NMN combination is only informative if endpoints discriminate between quality vs quantity mechanisms. Include both mitochondrial morphology endpoints (NAO cardiolipin, MitoSOX) and biogenesis endpoints (mtDNA copy number, PGC-1α mRNA, TFAM protein). If SS-31 + NMN produces a larger functional improvement than either alone while only the NMN arm shows mtDNA increase, this provides mechanistic evidence for additive (not redundant) combination benefit.',
    },
    {
      type: 'paragraph',
      text: '4. Fiber type panel minimum. Sarcopenia characteristically shifts muscle from oxidative (type I, IIa) toward glycolytic (IIb, IIx) fibers. A minimum three-antibody immunofluorescence panel (BA-F8 for type I, SC-71 for type IIa, BF-F3 for type IIb) applied to both soleus (predominantly type I in mice) and EDL (predominantly type II) sections is required. The type IIa→IIx intermediate shift, often the first change in aging, requires the 6H1 antibody and is frequently missed without it.',
    },
    {
      type: 'paragraph',
      text: '5. Seahorse vs Oroboros timing. Seahorse-based mitochondrial function assays on isolated muscle mitochondria have a hard 90-minute bench-to-plate limit before ETC supercomplex disassembly artifacts become significant. In aged animals, whose mitochondria are already partially compromised, this window may be shorter. If Oroboros O2k respirometry chambers are available (which work with intact or permeabilized muscle fiber bundles and avoid isolation-induced disruption), they are preferred for aged muscle studies. Regardless of platform, all functional measurements must occur within 4 hours of tissue harvest.',
    },
    {
      type: 'paragraph',
      text: '6. Sex differences and NIH SABV. Sarcopenia progresses faster in males than females in C57BL/6J mice — females retain more oxidative fiber content at equivalent ages. NIH\'s 2016 Sex as a Biological Variable policy mandates sex-stratified groups in any publishable aging study. At minimum, run female and male cohorts as separate blocking variables and power the study to detect sex × treatment interaction effects. If only one sex is feasible, declare it explicitly and limit generalization accordingly.',
    },
    {
      type: 'heading',
      text: 'Related Tools and Resources',
    },
    {
      type: 'paragraph',
      text: 'Researchers designing multi-compound sarcopenia studies will find the following Nexphoria tools helpful: the /tools/reconstitution-calculator for calculating BAC water or saline volumes for each compound, the /tools/body-weight-dose-calculator for converting published mg/kg doses to absolute injection volumes at your mouse weights, the /tools/half-life-calculator for planning injection timing relative to functional testing windows, and the /tools/dosing-frequency-planner for building a weekly injection schedule across 3–5 compounds without same-day injection overload. The /guides/storage page provides per-compound temperature requirements for all compounds discussed in this article.',
    },
    {
      type: 'paragraph',
      text: 'All compounds described in this article are available for research use only (RUO) from Nexphoria with HPLC ≥99% purity and lot-specific COAs from Janoshik Analytical. SS-31, NMN/NAD+, MOTS-c, and MK-677 are stocked as lyophilized powder, allowing long-term -20°C storage prior to study initiation.',
    },
  ],
};
