import { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: 'nad-plus-dna-repair-parp1-sirtuins-genome-stability-research',
  title: 'NAD+ and DNA Repair: PARP1, Sirtuins, and Genome Stability Research Protocols',
  description:
    'A deep-dive into how NAD+ fuels PARP1-mediated DNA repair and sirtuin-dependent chromatin maintenance. Covers PARP1/SIRT1 competition, SIRT6 DSB repair scaffolding, NMN rescue protocols, comet assay and γH2AX foci methods, and research design considerations for genome stability studies.',
  category: 'Longevity',
  publishedAt: '2026-06-01',
  readMinutes: 10,
  ogImage: '/og/products/nad-plus.png',
  body: [
    {
      type: 'paragraph',
      text: 'NAD+ is best known as a coenzyme in redox metabolism, but its role as a substrate for DNA repair enzymes may be equally—if not more—critical for genome stability and healthy aging. As cells accumulate DNA damage over decades, the enzymes that fix that damage consume NAD+ at a rate that can outpace synthesis, creating a vicious cycle of energetic depletion and genomic instability. Understanding this axis is essential for researchers working with longevity compounds.',
    },
    {
      type: 'heading',
      text: 'PARP1: The NAD+-Hungry First Responder',
    },
    {
      type: 'paragraph',
      text: 'Poly(ADP-ribose) polymerase 1 (PARP1) is a nuclear enzyme that senses single-strand DNA breaks (SSBs) and double-strand breaks (DSBs). Upon binding a nick or break in DNA, PARP1 catalyzes the transfer of ADP-ribose moieties from NAD+ onto itself and nearby histones, building poly(ADP-ribose) (PAR) chains. These chains serve as a scaffold for recruiting base excision repair (BER) and single-strand break repair (SSBR) machinery—including XRCC1, DNA ligase III, and DNA polymerase β.',
    },
    {
      type: 'paragraph',
      text: 'The energetic cost is enormous. Under normal basal conditions, PARP1 consumes roughly 0.1–0.5% of total cellular NAD+. Following genotoxic stress (UV, ionizing radiation, reactive oxygen species), PARP1 activity can increase 10–500 fold, consuming the majority of available nuclear NAD+ within minutes. If repair demand chronically exceeds NAD+ synthesis via the NAMPT salvage pathway, the cell enters a state of metabolic crisis: ATP production falters, SIRT1/SIRT3 activity drops (starved of substrate), and unrepaired breaks accumulate—driving genomic instability and accelerated cellular aging.',
    },
    {
      type: 'heading',
      text: 'The PARP1–Sirtuin Competition for NAD+',
    },
    {
      type: 'paragraph',
      text: 'PARP1 and the NAD+-dependent deacylases (sirtuins, SIRTs 1–7) compete for the same nuclear and cytoplasmic NAD+ pool. Cantó et al. (2012, Cell Metabolism) demonstrated this relationship elegantly: PARP1-knockout mice show a 2–3× increase in SIRT1 deacetylase activity and a 50% increase in tissue NAD+ levels compared to wild-type littermates, even without exogenous NAD+ supplementation. Pharmacological PARP1 inhibition with olaparib or the more selective PARP inhibitor FK866 (which blocks NAMPT to deplete NAD+ rather than PARP itself—used as a depletion control) phenocopies many of the metabolic benefits of NMN supplementation.',
    },
    {
      type: 'paragraph',
      text: 'This competition has direct implications for study design: any genotoxic challenge used to activate PARP1 in a longevity study will transiently deplete sirtuin-available NAD+, potentially confounding SIRT1/SIRT3 endpoint measurements. Timing of NAD+ measurements relative to PARP activation is critical.',
    },
    {
      type: 'heading',
      text: 'SIRT6: The DSB Repair Chromatin Guardian',
    },
    {
      type: 'paragraph',
      text: 'Among the sirtuins, SIRT6 has the most direct role in DSB repair. Mostoslavsky et al. (2006, Nature) showed that SIRT6-knockout mice develop a progeroid syndrome within 4 weeks of birth, characterized by severe genomic instability, metabolic defects, and hypoglycemia—closely resembling premature aging. Mechanistically, SIRT6 deacetylates H3K9ac and H3K56ac at DSB sites, compacting chromatin to create a "repair-permissive" microenvironment. It also physically recruits KU70 and 53BP1 to DSB flanking regions, scaffolding both NHEJ (non-homologous end joining) and HR (homologous recombination) pathways.',
    },
    {
      type: 'paragraph',
      text: 'Like SIRT1, SIRT6 activity depends on nuclear NAD+ availability. In aged cells, SIRT6 nuclear localization and activity both decline, correlating with impaired DSB repair kinetics (slower γH2AX foci resolution) and elevated mutation burden. NMN supplementation restores SIRT6-associated H3K9ac deacetylation at laser-induced DSB sites in aged mouse fibroblasts (Tanner et al., 2018).',
    },
    {
      type: 'heading',
      text: 'SIRT1 in Base Excision and Nucleotide Excision Repair',
    },
    {
      type: 'paragraph',
      text: 'SIRT1 contributes to both BER and NER (nucleotide excision repair) via deacetylation of XPC (damage recognition) and DDB2 (UV-DDB complex). Acetylated XPC has reduced DNA-binding affinity; SIRT1-mediated deacetylation stabilizes XPC at damage sites and accelerates NER completion. This is particularly relevant for UV-induced cyclobutane pyrimidine dimer (CPD) repair—a widely used genotoxic model.',
    },
    {
      type: 'paragraph',
      text: 'SIRT1 also deacetylates APE1 (apurinic/apyrimidinic endonuclease 1), the central BER endonuclease. Acetylated APE1 has reduced incision activity on abasic sites; SIRT1 activation via NMN or NR supplementation accelerates APE1 turnover and BER completion in oxidatively stressed cells.',
    },
    {
      type: 'heading',
      text: 'NAD+ Supplementation Restores DNA Repair Capacity: Key Data',
    },
    {
      type: 'paragraph',
      text: 'Fouquerel et al. (2019, Nature Communications) provided direct evidence that NAD+ depletion—induced by genotoxic PAR activation—is causally responsible for repair impairment, not merely correlative. In human primary fibroblasts, NMN supplementation (500 μM, 24h pre-treatment) fully prevented the genotoxin-induced NAD+ crash and restored SSB repair kinetics to young-cell levels. γH2AX foci resolution was 40% faster in NMN-treated aged cells versus vehicle controls.',
    },
    {
      type: 'paragraph',
      text: 'In vivo, Gomes et al. (2013, Cell) showed that NMN (500 mg/kg/day IP for 7 days) in 22-month-old C57BL/6J mice restored SIRT1-dependent gene expression patterns to levels indistinguishable from 6-month-old controls, and reduced γH2AX+ nuclei in gastrocnemius muscle by approximately 35%. The endpoint in these aged animals reflects cumulative unrepaired oxidative DNA damage—directly linked to the PARP1/SIRT1 competition discussed above.',
    },
    {
      type: 'heading',
      text: 'Research Models and Genotoxic Challenge Protocols',
    },
    {
      type: 'subheading',
      text: 'Common Genotoxic Challenge Models for PARP1/NAD+ DNA Repair Research',
    },
    {
      type: 'table',
      headers: ['Model', 'Agent / Protocol', 'Primary Damage Type', 'PARP Activation Level', 'Key Endpoint', 'NAD+ Depletion Window'],
      rows: [
        ['Oxidative stress', 'H₂O₂ 100–500 μM (in vitro) / paraquat 10–20 mg/kg IP (in vivo)', 'SSB, 8-OHdG', 'High', 'PAR ELISA, comet assay', '0–60 min'],
        ['UV irradiation', 'UVC 20 mJ/cm² (in vitro) / UVB 100 mJ/cm² (in vivo)', 'CPD, 6-4PP (NER)', 'Moderate', 'CPD slot blot, γH2AX IHC', '30–120 min'],
        ['Alkylation', 'MMS 0.1–0.5 mM or MNNG 1–10 μM (in vitro)', 'N7-methylguanine (BER)', 'Very High', 'Alkaline comet, XRCC1 foci', '0–30 min'],
        ['Ionizing radiation', '2–10 Gy γ-ray or X-ray', 'DSB (NHEJ/HR)', 'Maximal', 'γH2AX + 53BP1 co-foci, neutral comet', '0–15 min'],
        ['NAMPT inhibition', 'FK866 10 nM–1 μM (in vitro) / APO866 10 mg/kg IP', 'NAD+ depletion (no direct damage)', 'None (but SIRT impairment)', 'NAD+/NADH, comet assay under secondary H₂O₂', '6–24 h'],
        ['Aged animal baseline', '18–24 mo C57BL/6J (NIA colonies), no challenge', 'Cumulative SSB/8-OHdG', 'Moderate (chronic)', 'γH2AX IHC, tissue NAD+', 'Chronically elevated'],
      ],
    },
    {
      type: 'heading',
      text: 'Comet Assay Protocol for SSB and DSB Quantification',
    },
    {
      type: 'paragraph',
      text: 'The single-cell gel electrophoresis (comet) assay is the gold-standard for quantifying DNA strand breaks at the single-cell level. Two versions are relevant:',
    },
    {
      type: 'paragraph',
      text: '**Alkaline comet (pH >13):** Detects SSBs, DSBs, alkali-labile sites, and excision repair intermediates. Best for BER/SSBR studies (H₂O₂, MMS, paraquat models). Protocol: embed cells in 0.5% low-melting agarose on frosted slides, lyse in 2.5 M NaCl + 10 mM EDTA + 1% Triton X-100 + 10 mM Tris (pH 10) for 1h at 4°C, denature in alkaline electrophoresis buffer (300 mM NaOH + 1 mM EDTA, pH 13.5) for 20 min, electrophorese at 25 V/300 mA for 20–30 min, neutralize in Tris-HCl (pH 7.5), stain with SYBR Gold, image by fluorescence microscopy (100× cells per slide), score via OpenComet or CometScore software. Primary metric: % tail DNA (OTW method) or Olive Tail Moment.',
    },
    {
      type: 'paragraph',
      text: '**Neutral comet (pH 8.5):** Detects DSBs specifically. Lysis and electrophoresis occur at neutral pH, preventing alkaline denaturation of SSBs. Required for IR (ionizing radiation) and DSB-specific PARP studies. SIRT6 reconstitution/knockdown experiments should use neutral comet as a primary readout.',
    },
    {
      type: 'heading',
      text: 'γH2AX and 53BP1 Foci Immunofluorescence',
    },
    {
      type: 'paragraph',
      text: 'Phosphorylation of histone H2AX at Ser139 (γH2AX) flanks DSB sites within minutes and serves as a quantitative proxy for DSB burden. 53BP1 (p53-binding protein 1) co-localizes with γH2AX at NHEJ-committed DSBs. Co-staining allows DSB detection (γH2AX) and repair pathway resolution (53BP1 for NHEJ vs RAD51 for HR).',
    },
    {
      type: 'paragraph',
      text: 'Protocol (tissue sections): Deparaffinize/rehydrate or OCT-cryosection (10 μm), antigen retrieval (citrate pH 6.0, 95°C 20 min), block (5% BSA + 0.3% Triton X-100 in PBS, 1h), primary antibody: anti-γH2AX (Cell Signaling #9718, 1:200) + anti-53BP1 (Abcam ab36823, 1:500), overnight 4°C, Alexa Fluor 488/594 secondaries, DAPI nuclear counterstain. Image at 40× or 63× confocal. Count foci per nucleus in ≥50 cells per sample using CellProfiler or FIJI/ImageJ macro. Report as mean foci/nucleus ± SEM with violin plot showing distribution.',
    },
    {
      type: 'paragraph',
      text: 'For NMN/NAD+ studies, expect 30–50% reduction in γH2AX foci/nucleus in aged tissue after 4–8 weeks of NMN supplementation versus aged vehicle controls. Young-animal baseline values should anchor the interpretation.',
    },
    {
      type: 'heading',
      text: 'PAR ELISA and NAD+ Depletion Kinetics',
    },
    {
      type: 'paragraph',
      text: 'PAR (poly-ADP-ribose) quantification provides a direct readout of PARP1 activity. Trevigen PARP/PAR ELISA (#4520-096-K) measures free PAR in cell lysates or tissue homogenates. In acute genotoxic challenge studies, PAR peaks within 5–15 minutes and returns to baseline in 30–60 minutes as repair completes and PAR degradation by PARG (poly-ADP-ribose glycohydrolase) occurs. Persistent PAR elevation at 60–120 minutes signals repair impairment.',
    },
    {
      type: 'paragraph',
      text: 'Correlate PAR measurements with tissue NAD+ (EnzyFluo NAD+/NADH Assay Kit, BioAssay Systems EFND-100) at matching timepoints. The inverse relationship between PAR and NAD+ confirms PARP1-driven depletion and validates the model.',
    },
    {
      type: 'heading',
      text: 'Pharmacological Controls',
    },
    {
      type: 'subheading',
      text: 'Pharmacological Controls for PARP1/NAD+/Sirtuin DNA Repair Studies',
    },
    {
      type: 'table',
      headers: ['Control Agent', 'Target', 'Dose', 'Purpose'],
      rows: [
        ['Olaparib', 'PARP1/2 inhibitor', '10 mg/kg IP (in vivo) / 1–10 μM (in vitro)', 'Positive control: reduces PAR, prevents NAD+ depletion'],
        ['FK866 / APO866', 'NAMPT inhibitor', '10 mg/kg IP (in vivo) / 10 nM–1 μM (in vitro)', 'NAD+ depletion control; mimics aged-cell baseline'],
        ['NMN (500 mg/kg IP)', 'NAD+ precursor rescue', '500 mg/kg IP daily', 'Rescue: restores NAD+ to verify causality'],
        ['Sirtinol / EX-527', 'Pan-sirtuin / SIRT1 inhibitor', '50 mg/kg IP / 10 μM', 'Sirtuin-dependent effect dissection'],
        ['OSS_128167', 'SIRT6 inhibitor', '50 mg/kg IP', 'SIRT6-specific DSB repair dissection'],
        ['SIRT6-KO mice', 'Genetic SIRT6 null', 'B6 background, JAX', 'Gold-standard SIRT6 specificity control'],
      ],
    },
    {
      type: 'heading',
      text: 'NAD+ Supplementation Protocol for DNA Repair Research',
    },
    {
      type: 'paragraph',
      text: 'For rodent studies targeting DNA repair via NAD+ restoration, use direct NAD+ IP injection (500 mg/kg/day, sterile saline vehicle, no BAC water) or NMN (500 mg/kg/day IP). Begin supplementation 7 days before the genotoxic challenge to allow tissue NAD+ repletion (liver, muscle, kidney all require ≥5 days at 500 mg/kg/day to reach plateau in aged animals). For aged-animal baseline studies (no acute challenge), extend treatment to 4–8 weeks to capture chronic repair restoration.',
    },
    {
      type: 'paragraph',
      text: 'Reconstitution: Dissolve NAD+ in sterile saline (not PBS with phosphate, which competes with nucleotide detection assays). Use amber vials. Prepare fresh daily — free NAD+ in solution degrades at 22°C (T₁/₂ ~2–4h). For cell culture: prepare 100 mM stock in ddH₂O, filter-sterilize, store at -80°C in single-use aliquots. Protect from light (259 nm UV degradation of nicotinamide ring). Final cell culture concentration: 100–500 μM (range tested by Fouquerel et al.).',
    },
    {
      type: 'heading',
      text: 'Suggested Study Design for NAD+/PARP1/Sirtuin DNA Repair Study',
    },
    {
      type: 'subheading',
      text: 'Five-Group Study Design: NAD+ and DNA Repair in Aged C57BL/6J Mice',
    },
    {
      type: 'table',
      headers: ['Group', 'Treatment', 'n', 'Challenge', 'Primary Endpoints'],
      rows: [
        ['1. Young vehicle', 'Sterile saline IP daily', '8', 'H₂O₂ 10 mg/kg IP (single dose)', 'γH2AX foci, comet assay, tissue NAD+, PAR'],
        ['2. Aged vehicle', 'Sterile saline IP daily', '10', 'H₂O₂ 10 mg/kg IP (single dose)', 'Same (expected elevated γH2AX/comet, depleted NAD+)'],
        ['3. Aged + NMN', 'NMN 500 mg/kg IP daily × 7d pre-challenge', '10', 'H₂O₂ 10 mg/kg IP', 'Same (NMN rescue hypothesis)'],
        ['4. Aged + Olaparib', 'Olaparib 10 mg/kg IP × 7d pre-challenge', '10', 'H₂O₂ 10 mg/kg IP', 'PAR, NAD+, γH2AX (PARP-NAD+ link)'],
        ['5. Aged + FK866', 'FK866 10 mg/kg IP daily × 7d', '10', 'H₂O₂ 10 mg/kg IP (optional)', 'NAD+ depletion kinetics, baseline γH2AX (depletion model)'],
      ],
    },
    {
      type: 'paragraph',
      text: 'Sacrifice at 1h post-challenge (peak PAR/γH2AX) and 6h post-challenge (repair completion window). Collect liver, muscle, and kidney (highest PARP1 expression). Process fresh for NAD+/NADH (snap-freeze in LN₂ immediately). Fix in 10% NBF for γH2AX IHC. Snap-freeze remaining aliquots for PAR ELISA and neutral comet.',
    },
    {
      type: 'heading',
      text: 'Research Design Considerations',
    },
    {
      type: 'paragraph',
      text: '**1. Genotoxic challenge selection.** Model your challenge to the biological question. For aging-relevant oxidative damage (most relevant to peptide longevity research), use paraquat or H₂O₂. For mechanistic PARP1 studies, MMS or MNNG provide maximal, acute PARP activation. Avoid ionizing radiation if facility access is limited — H₂O₂ is simpler and physiologically relevant.',
    },
    {
      type: 'paragraph',
      text: '**2. NAD+ depletion timing.** The PARP1-NAD+ crash is transient (minutes to hours). Design your sampling schedule around this window. A single timepoint at 24h post-challenge will miss the depletion event entirely. Use 5-min, 15-min, 30-min, 60-min, and 6-h timepoints in your pilot experiment to characterize the depletion-repletion kinetics in your model before committing to a full study.',
    },
    {
      type: 'paragraph',
      text: '**3. PARP inhibitor controls.** FK866 inhibits NAMPT (blocking NAD+ synthesis) rather than PARP1 directly — it depletes NAD+ without blocking PAR synthesis. Olaparib inhibits PARP1 catalytic activity (no PAR synthesis, no NAD+ consumption). Use both in your control design to dissect depletion (FK866) vs. synthesis (olaparib) contributions.',
    },
    {
      type: 'paragraph',
      text: '**4. Tissue-specific NAD+ measurement.** Plasma NAD+ does not reflect intracellular tissue NAD+. Use tissue homogenate with the EnzyFluo enzymatic cycling assay (BioAssay Systems). Separate nuclear vs. cytoplasmic fractions via hypotonic lysis + centrifugation if SIRT1 vs. SIRT3 compartmental distinction is needed. SIRT3 (mitochondrial) is relevant to mitochondrial genome integrity endpoints.',
    },
    {
      type: 'paragraph',
      text: '**5. SIRT6-KO specificity control.** If SIRT6 is your primary mechanistic target, use SIRT6-KO mice (available from JAX, B6 background) as a specificity control. Confirm that NAD+ supplementation cannot rescue DSB repair in SIRT6-KO cells — this demonstrates the dependency and excludes SIRT1/SIRT3/PARP-independent artifacts.',
    },
    {
      type: 'paragraph',
      text: '**6. Aged animal baseline characterization.** Aged (18–24 month) C57BL/6J mice from NIA Aged Rodent Colonies should be allowed 4 weeks of acclimatization before baseline sampling. Measure tissue NAD+, basal γH2AX foci/nucleus, and PAR levels in unmanipulated aged vs. young animals to confirm the expected 40–60% NAD+ decline and elevated baseline DNA damage before beginning treatment groups. This anchors your effect size expectations and power calculations.',
    },
    {
      type: 'heading',
      text: 'Cross-Compound Interaction: NAD+ With Other Longevity Peptides',
    },
    {
      type: 'paragraph',
      text: 'The DNA repair axis connects NAD+ supplementation to several Nexphoria longevity compounds. SS-31\'s cardiolipin/Complex I restoration improves mitochondrial NAD+/NADH ratio, potentially supplementing the cytosolic NAMPT-salvaged pool available for SIRT6/SIRT1 DNA repair. GHK-Cu\'s Nrf2 activation upregulates GCLC and other antioxidant genes, reducing the rate of oxidative SSBs that drain PARP1 activity—creating a synergistic reduction in PARP1-mediated NAD+ consumption. MOTS-c\'s AMPK activation phosphorylates and stabilizes FOXO3a, which transcriptionally upregulates DNA repair genes (GADD45, ERCC1) independently of sirtuin activity.',
    },
    {
      type: 'paragraph',
      text: 'For multi-compound longevity stacks, consider NAD+ as the substrate layer that enables sirtuin-dependent DNA repair, GHK-Cu and SS-31 as upstream ROS-reduction layers that reduce repair demand on PARP1, and MOTS-c as a FOXO3a-mediated transcriptional amplification layer. Full factorial combination designs (≥16 groups for four compounds) are required to detect interaction effects — plan for n=8 per group minimum with power calculation at CV% 30–40%.',
    },
    {
      type: 'paragraph',
      text: 'For reconstitution and storage: Prepare NAD+ in sterile saline only (no BAC water). Use amber vials. Prepare fresh daily. Store lyophilized powder at -20°C in sealed desiccated containers. All other compounds in the longevity stack follow their standard protocols (see /guides/storage and compound-specific articles). Do not reconstitute NAD+ in the same vial as SS-31 or GHK-Cu — prepare separately and administer via separate injections at separate body sites.',
    },
    {
      type: 'disclaimer',
      text: 'For Research Use Only. Not for human use, clinical use, or veterinary use. All data referenced are from peer-reviewed preclinical studies. Protocol recommendations are for research guidance only.',
    },
  ],
};
