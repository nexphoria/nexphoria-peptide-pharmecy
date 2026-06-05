import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: 'peptide-research-cycle-duration-on-off-protocols',
  title: 'Peptide Research Cycle Duration: On/Off Protocols and Study Design',
  description:
    'A comprehensive guide to peptide research cycle duration, on/off protocol design, wash-out periods, and tolerance considerations for preclinical studies — covering major peptide classes.',
  category: 'Research Protocols',
  readMinutes: 10,
  publishedAt: '2026-06-05',
  ogImage: '/og-image.jpg',
  body: [
    {
      type: 'paragraph',
      text: 'One of the most common questions in peptide research design is: how long should a treatment cycle run, and when should wash-out periods be incorporated? This guide synthesizes published literature on cycle duration, tolerance development (tachyphylaxis), and on/off protocol design across major peptide categories.',
    },
    {
      type: 'disclaimer',
      text: 'All content is for research and educational purposes only. These peptides are not approved for human use. Researchers should work within their institutional IACUC frameworks and applicable regulatory guidelines.',
    },
    {
      type: 'heading',
      text: 'Why Cycle Duration Matters in Peptide Research',
    },
    {
      type: 'paragraph',
      text: 'Peptide cycle duration directly affects three key research variables: receptor desensitization (tachyphylaxis), downstream hormonal axis adaptation, and washout clarity for endpoint assessment. Designing appropriate on/off cycles allows researchers to distinguish acute vs. sustained effects, assess reversibility, and minimize confounds from adaptive downregulation.',
    },
    {
      type: 'heading',
      text: 'Growth Hormone Secretagogues (GHRP/GHRH Class)',
    },
    {
      type: 'subheading',
      text: 'Ipamorelin, GHRP-2, GHRP-6',
    },
    {
      type: 'paragraph',
      text: 'GHRPs (Growth Hormone Releasing Peptides) are subject to well-characterized tachyphylaxis via GHSR-1a receptor desensitization. Published rodent studies document measurable attenuation of GH pulse amplitude after 21–28 days of continuous administration at high doses. Lower-frequency dosing (every other day or 5 days on / 2 days off) reduces tachyphylaxis in published GHRP models.',
    },
    {
      type: 'list',
      items: [
        'Acute studies: 7–14 days continuous is well-tolerated with maintained GH pulse response',
        'Chronic studies: 3–6 month rodent studies with cycling (5 on / 2 off) show sustained GH elevations',
        'Wash-out: GHSR-1a re-sensitization observed within 7–14 days off in published literature',
        'Ipamorelin-specific: lower incidence of desensitization vs. GHRP-2/6 in comparative studies',
      ],
    },
    {
      type: 'subheading',
      text: 'CJC-1295 (with and without DAC), Sermorelin',
    },
    {
      type: 'paragraph',
      text: 'GHRH analogs operate on a different receptor (GHRHR) with different desensitization kinetics. Continuous CJC-1295 without DAC studies in rodents show maintained efficacy for 4–8 week treatment periods in published models. CJC-1295 with DAC, due to its extended half-life (~8 days), effectively creates continuous GHRH receptor stimulation — wash-out periods of 3–4 weeks are appropriate before new cycle initiation.',
    },
    {
      type: 'heading',
      text: 'Tissue Repair Peptides (BPC-157, TB-500)',
    },
    {
      type: 'paragraph',
      text: 'Repair-focused peptides are typically studied in fixed-duration protocols tied to healing endpoints rather than cycling paradigms. Published BPC-157 and TB-500 research rarely incorporates cycling because these compounds are administered until the healing outcome is measured, not maintained long-term.',
    },
    {
      type: 'table',
      headers: ['Peptide', 'Typical Protocol Duration', 'Cycling Notes'],
      rows: [
        ['BPC-157', '7–28 days', 'Usually continuous; no tachyphylaxis documented in published literature'],
        ['TB-500 / Thymosin β4', '14–28 days', 'Continuous in repair studies; cycling not well-studied'],
        ['GHK-Cu', '14–21 days', 'Wound healing endpoints typically measured at 14–21 day mark'],
        ['KPV', '7–14 days', 'Short cycle, inflammatory resolution endpoint-dependent'],
      ],
    },
    {
      type: 'heading',
      text: 'GLP-1 Receptor Agonists (Semaglutide, Tirzepatide, Retatrutide)',
    },
    {
      type: 'paragraph',
      text: 'GLP-1 receptor agonists are typically studied in continuous, long-duration protocols rather than cycling paradigms. Published rodent studies range from 4 weeks (acute metabolic endpoints) to 12+ weeks (body composition, insulin sensitivity, histological changes). The key study design consideration is not cycling, but appropriate wash-out before endpoint tissue collection.',
    },
    {
      type: 'paragraph',
      text: 'A critical design note: discontinuation of GLP-1 agonists in rodent models produces rapid rebound of body weight and food intake — an important endpoint to measure if the research question involves sustainability of metabolic effects. Semaglutide wash-out (to near-baseline plasma levels in rodents) occurs within 2–3 weeks.',
    },
    {
      type: 'heading',
      text: 'NAD+ Precursors and Longevity Peptides',
    },
    {
      type: 'paragraph',
      text: 'Longevity-focused peptides (epitalon, humanin, MOTS-c) and NAD+ supplementation studies are typically designed as continuous long-duration interventions — often running for the entire lifespan or a substantial fraction of it in rodent aging models. Cycling is not a standard consideration in this literature.',
    },
    {
      type: 'list',
      items: [
        'Epitalon: Published studies include 5-day administration cycles (twice yearly in some protocols)',
        'Humanin/MOTS-c: Chronic studies run 4–12 weeks continuous in metabolic models',
        'NAD+ (direct IV or NMN/NR precursors): Continuous administration throughout the study period in most published work',
      ],
    },
    {
      type: 'heading',
      text: 'Nootropic/Neurological Peptides (Selank, Semax)',
    },
    {
      type: 'paragraph',
      text: 'Selank and Semax (both developed in Russia with extensive published literature) are typically studied in 10–14 day continuous administration windows in rodent anxiety, cognitive, and neuroprotection models. These short windows reflect the acute pharmacological timeframe of interest. No significant tachyphylaxis has been documented in published Selank or Semax studies.',
    },
    {
      type: 'heading',
      text: 'Designing Wash-Out Periods',
    },
    {
      type: 'paragraph',
      text: 'Wash-out period design should be based on the peptide\'s pharmacokinetic profile — specifically, time to negligible plasma concentration. General principles:',
    },
    {
      type: 'list',
      items: [
        'Short half-life peptides (GHRP, BPC-157, KPV): 3–5 half-lives = typically 24–72 hours to negligible plasma levels; receptor re-sensitization may require longer',
        'Medium half-life (CJC-1295 without DAC, sermorelin): 1–2 week wash-out appropriate',
        'Long half-life (CJC-1295 with DAC, tirzepatide analogs): 3–4 week wash-out before new cycle or endpoint collection',
        'Semaglutide (weekly dosing in rodents): 2–3 weeks to functional wash-out',
      ],
    },
    {
      type: 'heading',
      text: 'On/Off Cycling: Practical Protocol Structures',
    },
    {
      type: 'paragraph',
      text: 'The most commonly referenced on/off cycling structures in published peptide literature:',
    },
    {
      type: 'table',
      headers: ['Structure', 'Best For', 'Rationale'],
      rows: [
        ['5 days on / 2 days off (weekly cycle)', 'GHRPs, chronic GHRH studies', 'Mimics natural pulsatile GH secretion patterns; reduces tachyphylaxis'],
        ['21 days on / 7 days off', 'GH secretagogue long-term studies', 'Documented in chronic ipamorelin/CJC protocols in published literature'],
        ['Continuous for acute studies', 'BPC-157, TB-500, repair peptides', 'No cycling benefit; endpoints measured at fixed time points'],
        ['Continuous for chronic metabolic', 'GLP-1 agonists, metabolic studies', 'Clinical and preclinical convention; wash-out measured separately'],
      ],
    },
    {
      type: 'heading',
      text: 'Documenting Cycle Protocol in Research Records',
    },
    {
      type: 'paragraph',
      text: 'For reproducible research, protocol documentation should include: peptide identity and lot number, purity certificate, dose (µg/kg or mg/kg), administration route, injection volume, cycle structure (on/off days), concurrent compounds, and endpoint assessment timepoints. This level of documentation is required for publication in peer-reviewed journals and for IACUC protocol submissions.',
    },
    {
      type: 'callout',
      text: 'Reproducibility Note: Batch-to-batch peptide purity variation is a major source of irreproducible results in preclinical peptide research. Use a vendor providing lot-specific HPLC CoA data to ensure consistency across study arms and replications.',
    },
    {
      type: 'heading',
      text: 'Sourcing Research-Grade Peptides for Cycling Studies',
    },
    {
      type: 'paragraph',
      text: 'Long-cycle studies (21+ days per arm, multiple cohorts) require sufficient peptide stock from a single lot to maintain consistency across the entire study duration. Plan peptide quantity needs at study design stage: calculate total dose per animal × group size × study days × safety factor (1.2x minimum). Nexphoria offers bulk research quantities with consistent lot documentation for extended study designs.',
    },
  ],
};
