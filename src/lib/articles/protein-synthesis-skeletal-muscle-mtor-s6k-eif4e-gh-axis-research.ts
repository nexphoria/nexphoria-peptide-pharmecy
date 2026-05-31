import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: 'protein-synthesis-skeletal-muscle-mtor-s6k-eif4e-gh-axis-research',
  title: 'Protein Synthesis and Skeletal Muscle: mTOR/S6K/eIF4E/4E-BP Pathway in GH Axis Research',
  description:
    'A detailed research guide covering mTORC1 kinase function, S6K/4E-BP1 phosphorylation, eIF4E-mediated translation initiation, and how GH axis peptides (ipamorelin, CJC-1295, MK-677) activate the protein synthesis cascade — with preclinical dosing protocols, endpoint methods, and study design considerations.',
  category: 'GH Axis',
  readMinutes: 11,
  publishedAt: '2026-05-31',
  ogImage: '/og/products/mk-677.png',
  body: [
    {
      type: 'paragraph',
      text: 'Skeletal muscle protein synthesis is controlled at the level of translation — not transcription — through a tightly regulated kinase network anchored by mTOR (mechanistic target of rapamycin). Growth hormone secretagogues, including ipamorelin, CJC-1295 No DAC, and MK-677, stimulate this pathway primarily through IGF-1 induction in the liver and peripheral tissues, ultimately converging on mTORC1-dependent phosphorylation of S6 kinase 1 (S6K1) and eukaryotic initiation factor 4E binding protein 1 (4E-BP1). Understanding this pathway at the mechanistic level is essential for researchers designing endpoints beyond simple body composition, interpreting conflicting results across compound classes, and selecting appropriate pharmacological controls for pathway dissection studies.',
    },
    {
      type: 'heading',
      text: 'mTOR Dual Kinase Function: mTORC1 vs mTORC2',
    },
    {
      type: 'paragraph',
      text: 'mTOR is a serine/threonine kinase that forms two functionally distinct complexes. mTORC1 (rapamycin-sensitive, contains Raptor and mLST8) is the primary anabolic effector relevant to protein synthesis. mTORC2 (rapamycin-insensitive in acute treatment, contains Rictor and Sin1) phosphorylates Akt at Ser473 and is part of a feedback loop rather than a direct anabolic output node for protein synthesis.',
    },
    {
      type: 'paragraph',
      text: 'mTORC1 activation requires convergent inputs from: (1) amino acid sufficiency signaling via the Ragulator/Rag GTPase complex on the lysosomal surface, which gates mTORC1 localization; (2) growth factor signaling (IGF-1 → IRS-1 → PI3K → Akt → TSC1/2 inhibition → Rheb-GTP activation of mTORC1); and (3) energy status monitoring via AMPK suppression of mTORC1 through TSC2 phosphorylation and Raptor inhibition. For GH secretagogue research, understanding that amino acid availability is a required permissive input — not just the hormone signal — is critical for study design.',
    },
    {
      type: 'heading',
      text: 'S6K1/4E-BP1 Phosphorylation: The mTORC1 Output Cascade',
    },
    {
      type: 'paragraph',
      text: 'mTORC1 phosphorylates two primary substrates that control protein synthesis output:',
    },
    {
      type: 'list',
      items: [
        'S6K1 (p70 ribosomal S6 kinase 1): mTORC1 phosphorylates T389 in the hydrophobic motif of S6K1, enabling PDK1 to phosphorylate T229 in the activation loop. Activated S6K1 phosphorylates ribosomal protein S6 (rpS6 at Ser235/236/240/244) and eIF4B, promoting ribosome biogenesis and cap-dependent translation. S6K1 also feeds back to inhibit IRS-1 at Ser307, creating a negative feedback loop (insulin resistance phenotype at high IGF-1 levels).',
        '4E-BP1 (eIF4E-binding protein 1): In the hypophosphorylated state, 4E-BP1 binds eIF4E and sequesters it from the eIF4F complex, blocking cap-dependent translation initiation. mTORC1 phosphorylates 4E-BP1 at Thr37/46 (priming sites), then Ser65 and Thr70, causing dissociation from eIF4E. Free eIF4E assembles with eIF4G and eIF4A into the eIF4F complex, which scans the 5\' mRNA cap and recruits the 43S preinitiation complex. Highly structured 5\' UTRs (common in growth-regulatory mRNAs including cyclin D1, c-myc, and hypoxia-inducible factor 1α) are disproportionately dependent on this cap-dependent initiation mechanism.',
      ],
    },
    {
      type: 'paragraph',
      text: 'The S6K and 4E-BP pathways are not functionally redundant. S6K1 primarily amplifies translational capacity through ribosome biogenesis and initiation factor phosphorylation, while 4E-BP1 acts as an on/off gate for cap-dependent translation of a specific mRNA subset. Researchers using rapamycin as a control should be aware that rapamycin fully suppresses S6K1-T389 but incompletely suppresses 4E-BP1 phosphorylation (particularly at Ser65), making Torin-1 or other active-site inhibitors necessary for complete pathway suppression.',
    },
    {
      type: 'heading',
      text: 'GH/IGF-1 Axis Activation of mTORC1: The Signaling Chain',
    },
    {
      type: 'paragraph',
      text: 'Growth hormone secretagogues activate the protein synthesis cascade through a two-step relay:',
    },
    {
      type: 'list',
      items: [
        'Step 1 — GH pulse: Ipamorelin (GHSR-1a/Gαq/IP3/Ca2+ pathway) or CJC-1295 No DAC (GHRHr/Gαs/cAMP/PKA/CREB/GH1 gene pathway) stimulates GH secretion from somatotrophs. The pulsatile GH release occurs within 15–30 minutes of peptide administration.',
        'Step 2 — Hepatic and peripheral IGF-1: GH binds GHR at the liver, activating JAK2/STAT5b, which drives transcription of the IGF-1 gene. Hepatic IGF-1 is secreted into circulation (the dominant endocrine form, complexed with IGFBP-3 in a 150 kDa ternary complex). Peripheral tissues — skeletal muscle, bone, adipose — also produce local autocrine/paracrine IGF-1 in response to GH.',
        'Step 3 — IGF-1R activation: IGF-1 binds IGF-1R (type I IGF receptor), activating IRS-1/IRS-2 adapter proteins, PI3K (p110α isoform), and Akt. Akt phosphorylates TSC2 at Ser939/Thr1462, relieving GAP activity on Rheb. GTP-loaded Rheb activates mTORC1 on the lysosomal surface.',
        'Step 4 — mTORC1 → S6K1/4E-BP1 output: As described above, downstream phosphorylation events increase translational capacity and cap-dependent initiation of growth-regulatory mRNAs, culminating in increased myofibrillar protein synthesis rates over 6–24 hours post-GH pulse.',
      ],
    },
    {
      type: 'heading',
      text: 'Published GH Secretagogue Data on mTOR-Related Endpoints',
    },
    {
      type: 'paragraph',
      text: 'Published preclinical data on S6K1 and 4E-BP1 phosphorylation from GH axis peptides is less common than IGF-1 elevation data. Most studies report IGF-1 as the primary biomarker, with muscle protein synthesis inferred from body composition endpoints. However, the mechanistic framework can be reconstructed from the signaling cascade:',
    },
    {
      type: 'table',
      headers: ['Compound', 'IGF-1 Elevation', 'Expected S6K1-T389 Activation', 'Tachyphylaxis Rate', 'Primary Reference'],
      rows: [
        ['MK-677', '+39.9% (Nass 2008, Annals Internal Medicine, 2-year RCT)', 'High — continuous 24h GHSR-1a occupancy, sustained IGF-1 elevation', '<10% (unique due to non-peptide oral bioavailability)', 'Nass 2008 Ann Intern Med'],
        ['CJC-1295 No DAC + Ipamorelin', '+60–85% (Johansen 1999, Bowers 1998 data extrapolated)', 'High — 8–12× supraadditive GH pulse, sustained IGF-1 over 6–12 weeks', '20–30% (ipamorelin); lower with DAC', 'Bowers 1998, Johansen 1999'],
        ['Ipamorelin alone', '+30–45% (Johansen 1999 neonatal rat, 3 nmol/kg IV data)', 'Moderate — pulsatile GH, intermittent S6K activation', '20–30% (Rab11 receptor recycling)', 'Johansen 1999 Growth Hormone & IGF Research'],
        ['CJC-1295 No DAC alone', '+30–50% (Bowers 1998 class data, Sermorelin analog)', 'Moderate — intermittent, half-life ~30 min', '~30%', 'Bowers 1998 JCEM'],
        ['Sermorelin', '+35–50% (Sigalos 2018 meta-analysis)', 'Moderate — pulsatile, dependent on pituitary reserve', '~25%', 'Sigalos 2018 Sexual Medicine Reviews'],
      ],
    },
    {
      type: 'paragraph',
      text: 'A critical distinction between MK-677 and injectable GHRPs is the GH pulse profile. MK-677 produces 24-hour GHSR-1a occupancy with continuous — though attenuating — IGF-1 elevation. Injectable GHRPs and GHRH analogs generate pulsatile GH peaks that better replicate the normal somatotroph secretion pattern. While pulsatile GH is physiologically appropriate for somatotroph health, the continuous IGF-1 elevation from MK-677 may produce more sustained mTORC1 activation in skeletal muscle over a 24-hour period. This trade-off is not well characterized at the S6K1 phosphorylation level in published rodent studies, representing a genuine research gap.',
    },
    {
      type: 'heading',
      text: 'Myofibrillar vs Mitochondrial vs Total Protein Synthesis',
    },
    {
      type: 'paragraph',
      text: 'Not all protein synthesis is anabolically equivalent from a skeletal muscle adaptation perspective. Researchers should clearly define which protein synthesis pool is relevant to their research question:',
    },
    {
      type: 'list',
      items: [
        'Myofibrillar protein synthesis (MyoPS): Synthesis of contractile proteins — primarily myosin heavy chain (MHC) and actin — that directly contribute to muscle hypertrophy and force generation. This fraction shows the largest fractional synthetic rate (FSR) response to anabolic stimuli (GH/IGF-1, leucine, resistance exercise). Published data (Churchley 2019 J Physiol) suggests MyoPS responds ~3-fold more to anabolic stimuli than mitochondrial or sarcoplasmic fractions in human models.',
        'Mitochondrial protein synthesis (MitoPS): Synthesis of mitochondrially encoded (13 OXPHOS subunits) and nuclear-encoded mitochondrial proteins. This fraction is the primary responder to endurance exercise and AMPK activation. GH axis peptides do not primarily target MitoPS but may have indirect effects via IGF-1/mTORC2/PGC-1α signaling.',
        'Sarcoplasmic protein synthesis: The largest protein fraction by mass but the lowest fractional synthetic rate response to anabolic stimuli. Includes myoglobin, enzymes, and structural proteins. May dilute apparent MyoPS response if total muscle protein synthesis is measured.',
      ],
    },
    {
      type: 'callout',
      text: 'For GH axis peptide studies targeting skeletal muscle hypertrophy endpoints, researchers should specify whether they are measuring total muscle protein synthesis (FSR) or the myofibrillar fraction specifically. Deuterium-labeled phenylalanine or D2O tracer methods allow compartment-specific FSR measurement via GC-MS or LC-MS/MS in muscle biopsies, but are technically demanding in rodent models.',
    },
    {
      type: 'heading',
      text: 'Isotope Tracer Methods for Protein Synthesis Measurement',
    },
    {
      type: 'paragraph',
      text: 'Fractional synthetic rate (FSR) measurement via stable isotope tracers is the gold standard for quantifying protein synthesis in vivo. The two most practical methods for rodent peptide research are:',
    },
    {
      type: 'list',
      items: [
        '13C6-phenylalanine pulse-chase: IP injection of 13C6-Phe, tissue harvest at defined interval (typically 30–120 min), muscle protein hydrolysis, GC-MS measurement of tracer/tracee ratio in protein-bound vs. free amino acid pools. FSR = Δ enrichment / precursor enrichment × (1/time). Requires sampling of both muscle tissue (product pool) and blood/tissue free amino acids (precursor pool). Provides absolute FSR (%/hour).',
        'Deuterium oxide (D2O) labeling: Rodents receive D2O-enriched drinking water (typically 4–8% body water enrichment target) for 7–14 days. Newly synthesized protein incorporates deuterium from D2O-labeled alanine and other non-essential amino acids. GC-MS or LC-MS measures 2H enrichment in tissue protein vs. body water. D2O is lower-cost and easier to administer chronically but provides cumulative synthesis over the labeling period rather than acute rates. Appropriate for 2–4 week peptide intervention studies.',
        'SUrface Sensing of Translation (SUnSET): Non-radioactive method using puromycin (2 μg/g body weight IP, 30 min before sacrifice) — an aminoacyl-tRNA analog — to label nascent peptides. Anti-puromycin antibody (clone 12D10) used in Western blot or IHC to quantify new protein synthesis in the tissue. Does not require isotope infrastructure and is suitable for mechanistic comparison studies.',
      ],
    },
    {
      type: 'heading',
      text: 'Western Blot Endpoint Panel for mTOR/S6K/4E-BP Signaling',
    },
    {
      type: 'paragraph',
      text: 'For mechanistic mTOR pathway verification, a minimum 6-antibody panel is recommended:',
    },
    {
      type: 'table',
      headers: ['Target', 'Phospho Site', 'Expected Change (GH Peptide)', 'Key Consideration'],
      rows: [
        ['S6K1', 'Thr389 (HM site)', 'Increase within 30–60 min of IGF-1 peak', 'Rapamycin fully suppresses; use as rapamycin-sensitive control'],
        ['rpS6', 'Ser235/236', 'Increase downstream of S6K1', 'Also activated by RSK (MAPK-dependent) — not mTORC1-specific alone'],
        ['4E-BP1', 'Ser65 and Thr37/46', 'Increase/shift from γ to α band on native PAGE', 'Rapamycin incompletely suppresses Ser65; use Torin-1 for full suppression'],
        ['eIF4E', 'Ser209 (MNK1/2 site)', 'May increase', 'NOT directly phosphorylated by mTORC1 — phosphorylated by MNK1/2 downstream of MAPK/ERΚK; distinguish carefully'],
        ['Akt', 'Ser473 and Thr308', 'Increase (IGF-1R → PI3K → Akt)', 'Ser473 = mTORC2 feedback; Thr308 = PDK1; measure both to distinguish mTORC1/2 contributions'],
        ['Total protein controls', 'S6K1 total, 4E-BP1 total, Akt total', 'No change expected', 'Essential for normalization — use same molecular weight band'],
      ],
    },
    {
      type: 'heading',
      text: 'Rapamycin Control Design and Limitations',
    },
    {
      type: 'paragraph',
      text: 'Rapamycin is the standard mTORC1 inhibitor used to verify that an anabolic effect is mTOR-dependent. Standard acute dosing: 2 mg/kg IP in 5% DMSO/PBS, administered 30–60 minutes before the GH secretagogue. Chronic dosing models use 2–4 mg/kg IP every other day or 14 mg/kg in encapsulated diet chow (eRapa, used in NIA Interventions Testing Program longevity studies).',
    },
    {
      type: 'paragraph',
      text: 'Key limitations for GH axis peptide studies: (1) Rapamycin acutely suppresses S6K1-T389 but incompletely suppresses 4E-BP1-Ser65, meaning translation through 4E-BP1 may not be fully blocked. (2) Chronic rapamycin treatment eventually inhibits mTORC2 assembly by sequestering free mTOR. This produces insulin resistance (Akt-Ser473 loss) and immune suppression unrelated to the anabolic question. (3) Rapamycin does not distinguish between IGF-1R-mediated Akt and other Akt-activating inputs (e.g., TNF-α via IKK, Wnt signaling). For complete mechanistic dissection, combine rapamycin with an IGF-1R inhibitor (PPP or linsitinib, 20–30 mg/kg oral) to confirm IGF-1R → PI3K → Akt → mTORC1 as the operative path.',
    },
    {
      type: 'heading',
      text: 'Genetic Model Options for Pathway Dissection',
    },
    {
      type: 'paragraph',
      text: 'Pharmacological controls can be complemented with genetic models for rigorous pathway attribution:',
    },
    {
      type: 'list',
      items: [
        'S6K1-KO mice (B6;129-Rps6kb1tm1Cns/J, Jackson Lab #006423): Lack S6K1, showing reduced muscle mass, impaired GH-stimulated protein synthesis, and blunted anabolic response to leucine. Retain 4E-BP1 pathway. Essential to separate S6K- and 4E-BP-dependent synthesis contributions.',
        '4E-BP1/2 double knockout mice: Hyperactivated cap-dependent translation, increased MHC protein synthesis, resistance to rapamycin-mediated inhibition of protein synthesis. Used to verify that a compound acts through 4E-BP phosphorylation rather than S6K alone.',
        'IGF-1R-KO mice (muscle-specific): Confirm that GH secretagogue anabolic effects require IGF-1R signaling in muscle vs. systemic IGF-1 endocrine effects. Muscle-specific IGF-1R-KO (MLC-Cre × IGF-1Rfl/fl) shows markedly reduced S6K1 activation after GH pulse despite normal circulating IGF-1 elevation.',
        'GHR-KO mice (Laron syndrome model, B6.129P2-Ghrtm1Srd/J): No GH signaling, no hepatic IGF-1, atrophic muscle mass. Use to confirm GH-dependent rather than GHSR-independent effects of MK-677.',
      ],
    },
    {
      type: 'heading',
      text: 'Preclinical GH Axis Peptide Dosing Protocols',
    },
    {
      type: 'table',
      headers: ['Compound', 'Species', 'Dose', 'Route', 'Frequency', 'Duration', 'Primary Endpoint'],
      rows: [
        ['Ipamorelin', 'Mouse (C57BL/6J, 25g)', '100–300 μg/kg', 'SC', '1–3× daily', '4–12 weeks', 'IGF-1, body composition (EchoMRI), grip strength'],
        ['CJC-1295 No DAC', 'Mouse', '100–300 μg/kg', 'SC', '1–3× daily', '4–12 weeks', 'IGF-1, GH pulse, body composition'],
        ['CJC-1295 No DAC + Ipamorelin', 'Mouse', '100–300 μg/kg each', 'SC (co-injected)', '1–3× daily', '4–12 weeks', 'IGF-1, lean mass, S6K1-T389 Western blot'],
        ['MK-677', 'Mouse', '10–30 mg/kg', 'Oral (gavage)', '1× daily', '4–12 weeks', 'IGF-1, lean mass, food intake, fasting glucose'],
        ['Ipamorelin', 'Rat (Sprague-Dawley, 300g)', '100–200 μg/kg', 'SC', '3× daily (ZT12, ZT20, ZT4)', '4–8 weeks', 'GH pulse amplitude, IGF-1, muscle wet weight'],
        ['MK-677', 'Rat', '10–20 mg/kg', 'Oral', '1× daily', '4–8 weeks', 'IGF-1, lean mass, water retention (EchoMRI free water)'],
      ],
    },
    {
      type: 'heading',
      text: 'Critical Confounders in GH-Axis Protein Synthesis Research',
    },
    {
      type: 'paragraph',
      text: 'Several confounders can mask or inflate apparent protein synthesis effects:',
    },
    {
      type: 'list',
      items: [
        'Feeding state and amino acid availability: mTORC1 requires amino acid sufficiency (particularly leucine via Sestrin2/GATOR2 complex) for full activation. Studies should standardize food access relative to injection timing. Fasting for 4–6 hours before compound administration will dampen mTORC1 responses by depleting the amino acid signal, unless the research question specifically addresses fasted-state anabolism.',
        'Water retention (MK-677-specific): MK-677 produces measurable water retention through IGF-1-mediated renal sodium retention (NHE3 upregulation). Body composition by wet weight overestimates lean mass gain in MK-677 studies. EchoMRI with the free water channel, or MRI in vivo, is required to distinguish true lean mass from fluid accumulation.',
        'Pair-fed controls for orexigenic compounds: MK-677, GHRP-6, and to a lesser degree GHRP-2 stimulate appetite through hypothalamic NPY/AgRP circuits. Increased caloric intake alone produces mTORC1 activation independent of GH/IGF-1 signaling. Pair-fed controls (vehicle group pair-matched to MK-677 caloric intake) are essential for attributing protein synthesis effects to the GH secretagogue vs. hyperphagia.',
        'Sex-dependent GH pulsatility: Male rodents exhibit high-amplitude, low-frequency GH pulses; female rodents exhibit low-amplitude, high-frequency pulses. This fundamental difference affects baseline S6K1 activation and sensitivity to GH-stimulated anabolism. All protein synthesis studies should be sex-stratified or restricted to a single sex with explicit justification.',
        'Age-related GH axis decline: GH pulse amplitude and frequency decline with age in both rodents and humans. Studies in aged animals (18+ months C57BL/6J) may show blunted S6K1 activation relative to young animals at the same GH secretagogue dose, due to reduced pituitary GH reserve and reduced muscle IGF-1R sensitivity. Baseline IGF-1 measurement is essential for any longevity-adjacent protein synthesis study.',
        'Protein-bound IGF-1 and free IGF-1: Circulating IGF-1 is predominantly IGFBP-3-bound in a 150 kDa ternary complex (acid-labile subunit included). Only free (unbound) IGF-1 ~1–2% of total crosses the endothelium to activate IGF-1R in skeletal muscle. Standard IGF-1 ELISA kits measure total IGF-1 after acid-ethanol extraction. Free IGF-1 can be measured with specialized ELISA kits. A high total IGF-1 does not guarantee high skeletal muscle IGF-1R activation if IGFBP levels are simultaneously elevated.',
      ],
    },
    {
      type: 'heading',
      text: 'Endpoint Timing for Protein Synthesis and mTOR Signaling',
    },
    {
      type: 'paragraph',
      text: 'The temporal resolution of mTOR signaling versus protein synthesis outcome endpoints differs substantially:',
    },
    {
      type: 'list',
      items: [
        'Acute signaling (S6K1-T389, 4E-BP1-Ser65, Akt-Ser473): Peak within 30–90 minutes of IGF-1 elevation in skeletal muscle. Tissue should be collected at a defined time post-injection (e.g., 60 min) and snap-frozen immediately in liquid nitrogen. Signaling endpoints are highly sensitive to ischemia, warm dissection time, and freeze-thaw cycles.',
        'Acute protein synthesis rate (FSR by isotope tracer): Measurable over 30–180 minutes of tracer incorporation. Provides snapshot of translational activity but does not predict cumulative protein accretion over weeks.',
        'Chronic muscle mass (EchoMRI, wet weight, histomorphometry): Requires 4–8 weeks of intervention to detect significant lean mass differences (expected 5–15% in 8-week GH secretagogue protocols). Integrate-over-time measure that reflects net protein balance (synthesis minus degradation).',
        'Myofibrillar protein enrichment (D2O labeling): 7–14 days of D2O enrichment at 4–8% body water enrichment target, with muscle harvest at end of labeling period. Provides fraction-specific FSR over the labeling window. Appropriate for 2–4 week peptide intervention studies with built-in labeling period.',
      ],
    },
    {
      type: 'heading',
      text: 'Study Design Recommendations',
    },
    {
      type: 'list',
      items: [
        'Rapamycin rescue group: Include a rapamycin co-treatment arm (2 mg/kg IP, 60 min pre-peptide) in all mechanistic protein synthesis studies. A rapamycin-blocked GH peptide group confirms mTORC1 dependence. If protein synthesis is only partially suppressed by rapamycin, suspect mTOR-independent eIF4E activation (MNK pathway) or MAPK-dependent S6 phosphorylation via RSK.',
        'Pair-fed controls for orexigens: All studies using MK-677, GHRP-6, or GHRP-2 require pair-fed vehicle controls to attribute protein synthesis effects to GH/IGF-1 pathway rather than increased caloric intake. Pair-feed in dark phase to match circadian feeding patterns.',
        'Baseline IGF-1 and pituitary reserve assessment: Measure fasting IGF-1 at baseline (ZT3–5 sampling) and after 2 weeks of treatment to confirm adequate GH axis response. Animals with very low baseline IGF-1 (age-related, hypothyroid) or high baseline variability should be stratified or excluded before group assignment.',
        'Muscle-type specificity: Tibialis anterior (fast-twitch IIb-enriched) and soleus (slow-twitch I/IIa-enriched) show differential sensitivity to IGF-1/mTOR stimulation. Include both in the endpoint panel, or pre-specify the target muscle based on the physiological question. Whole-body EchoMRI for lean mass does not distinguish muscle group contributions.',
        'SUnSET as accessible proxy: If isotope infrastructure is unavailable, SUnSET (puromycin incorporation, anti-puromycin Western blot) provides a semi-quantitative relative measure of protein synthesis across groups within the same experiment. It cannot provide absolute FSR values but is sufficient for comparative mechanistic studies.',
        'Sex-stratified analysis: Always include a sex×treatment interaction term in the statistical model. If only one sex is studied, explicitly state this as a limitation and select sex based on established sex-dependent differences in the target endpoint (e.g., male rodents have higher GH pulse amplitude and lean mass baseline; female rodents are often more insulin-sensitive at baseline).',
      ],
    },
    {
      type: 'heading',
      text: 'Reconstitution and Storage',
    },
    {
      type: 'paragraph',
      text: 'For peptide compounds targeting the GH axis: Ipamorelin and CJC-1295 No DAC reconstitute in bacteriostatic water (BAC water, 0.9% benzyl alcohol) at 1–2 mg/mL working concentration. Store reconstituted solutions at 4°C for up to 14 days; lyophilized powder at −20°C for 12+ months. MK-677, as an oral non-peptide compound, is typically dissolved in ethanol/PEG-400 vehicle for in vivo oral gavage, or in DMSO (≤1% final) for in vitro cell culture. The MK-677 vehicle must be matched in controls since ethanol/PEG and DMSO have independent effects on cell viability and mTOR signaling at higher concentrations.',
    },
    {
      type: 'disclaimer',
      text: 'All compounds offered by Nexphoria Research are for laboratory research use only (RUO). This article is intended for researchers with institutional oversight (IACUC/IBC approval) for animal or in vitro studies. This content does not constitute medical advice and should not be applied to human use.',
    },
  ],
};
