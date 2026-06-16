import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: 'surmount-5-tirzepatide-vs-semaglutide-head-to-head-2026',
  title: 'SURMOUNT-5: Tirzepatide vs. Semaglutide Head-to-Head — What the Data Shows',
  description:
    'A detailed research review of the SURMOUNT-5 trial — the first head-to-head randomized controlled trial comparing tirzepatide 10/15 mg versus semaglutide 2.4 mg for obesity and metabolic research endpoints. Covers trial design, weight loss superiority data, cardiometabolic outcomes, and implications for researchers comparing GLP-1 monotherapy to dual GLP-1/GIP agonism.',
  category: 'Research Fundamentals',
  readMinutes: 10,
  publishedAt: '2026-06-17',
  ogImage: '/og-image.jpg',
  body: [
    {
      type: 'paragraph',
      text: 'For years, researchers and clinicians debated which was superior — tirzepatide (dual GLP-1/GIP agonism) or semaglutide (GLP-1 monotherapy) — based on cross-trial comparisons between SURMOUNT-1 and STEP-1. Cross-trial comparison is methodologically weak: populations differ, concomitant interventions differ, and placebo responses differ. The question demanded a head-to-head randomized controlled trial. SURMOUNT-5 delivered that comparison, and the results have directly informed both the clinical and research understanding of dual vs. mono incretin receptor agonism for metabolic endpoints.',
    },
    {
      type: 'paragraph',
      text: 'This article covers the SURMOUNT-5 trial design, primary and secondary outcome data, the mechanistic interpretation of the observed differences, and what the results mean for researchers designing protocols comparing GLP-1 monotherapy to dual GLP-1/GIP agonism.',
    },
    {
      type: 'heading',
      text: 'SURMOUNT-5 Trial Design',
    },
    {
      type: 'paragraph',
      text: 'SURMOUNT-5 (NCT05822830) was a Phase 3b, randomized, open-label, active-controlled trial comparing tirzepatide (up-titrated to 10 mg or 15 mg weekly based on tolerability) versus semaglutide 2.4 mg weekly in adults with obesity (BMI ≥30 kg/m²) or overweight (BMI ≥27 kg/m²) with at least one weight-related comorbidity, without type 2 diabetes. The trial enrolled 751 participants across multiple international sites. The primary endpoint was percent change in body weight from baseline to week 72. Key secondary endpoints included absolute weight change, proportion achieving ≥5%, ≥10%, ≥15%, ≥20%, and ≥25% body weight reduction, waist circumference, cardiometabolic biomarkers, and patient-reported outcomes.',
    },
    {
      type: 'paragraph',
      text: 'The open-label design was chosen due to the differing titration schedules and administration devices of the two compounds — a double-blind double-dummy design would have required placebo injections for both compounds in parallel, complicating adherence and masking. The open-label limitation is acknowledged as a potential source of expectation bias, though objective outcomes (weight, biomarkers) are less susceptible to this than subjective endpoints.',
    },
    {
      type: 'heading',
      text: 'Primary Endpoint: Weight Loss Superiority',
    },
    {
      type: 'paragraph',
      text: 'The trial demonstrated statistically significant superiority of tirzepatide over semaglutide at week 72. Tirzepatide-treated participants achieved a mean weight reduction of 20.2% from baseline versus 13.7% for semaglutide — a treatment difference of −6.4 percentage points (95% CI −7.6 to −5.2; p<0.0001). In absolute terms, mean weight loss was approximately 22.8 kg for tirzepatide versus 15.0 kg for semaglutide. This head-to-head result confirmed, with direct randomized evidence, the superiority of dual GLP-1/GIP agonism over GLP-1 monotherapy for body weight reduction in this population.',
    },
    {
      type: 'list',
      items: [
        'Tirzepatide mean weight loss: −20.2% (≈−22.8 kg)',
        'Semaglutide mean weight loss: −13.7% (≈−15.0 kg)',
        'Treatment difference: −6.4 percentage points (p<0.0001)',
        'Trial duration: 72 weeks',
        'Population: Obesity without T2DM; BMI ≥30 or ≥27 with comorbidity',
      ],
    },
    {
      type: 'heading',
      text: 'Secondary Endpoints: Responder Rates and Cardiometabolic Outcomes',
    },
    {
      type: 'subheading',
      text: 'Weight Loss Responder Analysis',
    },
    {
      type: 'paragraph',
      text: 'The responder rate data are particularly instructive for researchers evaluating compound selection for metabolic endpoint studies. At every threshold, tirzepatide showed significantly higher proportions achieving meaningful weight loss targets:',
    },
    {
      type: 'table',
      headers: ['Weight Loss Threshold', 'Tirzepatide', 'Semaglutide', 'Difference (approx.)'],
      rows: [
        ['≥5% body weight', '97%', '91%', '+6 pp'],
        ['≥10% body weight', '91%', '75%', '+16 pp'],
        ['≥15% body weight', '79%', '55%', '+24 pp'],
        ['≥20% body weight', '62%', '34%', '+28 pp'],
        ['≥25% body weight', '39%', '15%', '+24 pp'],
      ],
    },
    {
      type: 'paragraph',
      text: 'The divergence at higher thresholds is particularly notable — 62% of tirzepatide participants lost ≥20% body weight versus only 34% on semaglutide. This differential becomes clinically and research-relevantly important when studying endpoints (hepatic steatosis resolution, sleep apnea remission, joint load reduction) that require significant weight loss magnitudes to observe robust effects.',
    },
    {
      type: 'subheading',
      text: 'Cardiometabolic Biomarker Outcomes',
    },
    {
      type: 'paragraph',
      text: 'Both agents improved cardiometabolic biomarkers significantly versus baseline. Tirzepatide showed numerically greater improvements across most measures, though the between-arm differences for lipids and blood pressure were less dramatic than the weight differential would predict — suggesting a degree of GLP-1-mediated direct vascular and glycemic effects that are class-wide rather than dose-dependent:',
    },
    {
      type: 'list',
      items: [
        'Waist circumference: −18.2 cm (tirzepatide) vs. −12.3 cm (semaglutide)',
        'HbA1c: −0.53% (tirzepatide) vs. −0.38% (semaglutide) [both non-diabetic; changes in prediabetic subgroup larger]',
        'Fasting glucose: −7.8 mg/dL (tirzepatide) vs. −5.1 mg/dL (semaglutide)',
        'Triglycerides: −26.2% (tirzepatide) vs. −16.4% (semaglutide)',
        'HDL-C: +11.8% (tirzepatide) vs. +8.9% (semaglutide)',
        'Systolic blood pressure: −5.7 mmHg (tirzepatide) vs. −4.8 mmHg (semaglutide)',
      ],
    },
    {
      type: 'heading',
      text: 'Mechanistic Interpretation: Why Tirzepatide Outperforms Semaglutide',
    },
    {
      type: 'subheading',
      text: 'The Role of GIP Receptor Co-Agonism',
    },
    {
      type: 'paragraph',
      text: 'The SURMOUNT-5 results are consistent with mechanistic studies suggesting GIP receptor co-agonism provides meaningful additive effects beyond GLP-1R monotherapy. GIP receptors are expressed centrally in hypothalamic and limbic regions that regulate food reward and appetite, and in adipose tissue. The central GIP receptor engagement may contribute to greater appetite suppression or food reward modification beyond GLP-1R-mediated satiety signaling, explaining the larger weight loss despite both compounds targeting overlapping metabolic axes.',
    },
    {
      type: 'paragraph',
      text: 'Paradoxically, early research suggested GIP receptor agonism might promote fat storage — leading some researchers to theorize that GIP antagonism (not agonism) would be beneficial. Tirzepatide\'s clinical success resolved this paradox: at pharmacological doses, sustained GIP receptor engagement appears to improve adipose tissue insulin sensitivity and reduce the dysfunctional lipolysis and ectopic fat deposition that characterize obesity-related metabolic dysfunction. The mechanism is dose- and receptor-saturation-dependent, and may involve GIP-mediated changes in adipokine secretion (including adiponectin upregulation) that have systemic insulin-sensitizing effects.',
    },
    {
      type: 'subheading',
      text: 'Receptor Selectivity and Bias',
    },
    {
      type: 'paragraph',
      text: 'Tirzepatide is an unimolecular peptide with roughly equal potency at GLP-1 and GIP receptors. Its GLP-1R potency is slightly lower than that of semaglutide on a molar basis, but the GIP-R contribution more than compensates. Biased agonism — preferential engagement of specific downstream signaling pathways (cAMP vs. β-arrestin) — is an active area of pharmaceutical research for next-generation incretin compounds, but tirzepatide\'s clinical profile is driven primarily by dual receptor engagement rather than signaling bias.',
    },
    {
      type: 'heading',
      text: 'Safety and Tolerability Comparison',
    },
    {
      type: 'paragraph',
      text: 'The gastrointestinal adverse event profile was similar between agents, with nausea, vomiting, diarrhea, and constipation being the most common class effects. Tirzepatide showed a slightly higher rate of nausea in the first 8-12 weeks of up-titration — consistent with faster GLP-1R engagement during the dose-escalation phase — but comparable rates beyond the maintenance dose period. Overall discontinuation due to adverse events was 7.8% for tirzepatide versus 5.2% for semaglutide — a small but real difference attributable largely to the titration-phase GI events. No new safety signals were identified in either arm beyond the established incretin class profile.',
    },
    {
      type: 'list',
      items: [
        'Nausea: 33% tirzepatide vs. 27% semaglutide (most prominent during up-titration)',
        'Vomiting: 16% tirzepatide vs. 11% semaglutide',
        'Diarrhea: 19% tirzepatide vs. 17% semaglutide',
        'Constipation: 18% tirzepatide vs. 14% semaglutide',
        'Serious adverse events: 6.1% vs. 7.2% (numerically lower for tirzepatide)',
        'Discontinuation due to AEs: 7.8% tirzepatide vs. 5.2% semaglutide',
      ],
    },
    {
      type: 'heading',
      text: 'Implications for Peptide Research Study Design',
    },
    {
      type: 'subheading',
      text: 'Compound Selection for Metabolic Research Endpoints',
    },
    {
      type: 'paragraph',
      text: 'SURMOUNT-5 provides researchers with direct head-to-head data for compound selection decisions in metabolic study design. For endpoints requiring substantial adiposity reduction (hepatic steatosis, OSA, joint loading, musculoskeletal biomechanics), tirzepatide\'s superior weight loss magnitude makes it the more appropriate choice when the goal is maximum metabolic effect. For mechanistic research specifically isolating GLP-1R pathways — without GIP confounding — semaglutide remains the cleaner mechanistic tool, as it lacks GIP-R activity.',
    },
    {
      type: 'subheading',
      text: 'Dissecting GLP-1 vs. GIP Receptor Contributions',
    },
    {
      type: 'paragraph',
      text: 'SURMOUNT-5 provides an in vivo comparison baseline. Researchers can leverage this data in preclinical designs by using GIP receptor knockout models (Gipr-/- mice) to isolate the GLP-1-specific component of tirzepatide\'s effects, comparing against wild-type animals receiving equivalent tirzepatide doses. The treatment difference between Gipr-/- and wild-type animals directly quantifies the GIP-mediated contribution — a study design informing our understanding of dual agonism mechanism that is now supported by robust clinical benchmarks from SURMOUNT-5.',
    },
    {
      type: 'subheading',
      text: 'Protocol Considerations for Head-to-Head Designs',
    },
    {
      type: 'list',
      items: [
        'Use equipotent dosing across GLP-1R activity when comparing compounds (not equipotent absolute doses)',
        'Account for titration schedules in study timelines — GLP-1/GIP agonists typically require 8-12 weeks of up-titration in human protocols',
        'For preclinical obesity models, diet-induced obesity (DIO) C57BL/6J mice at 16-20 weeks of high-fat diet provide the most translational obesity phenotype',
        'Tirzepatide doses in rodent models: 0.3-1.0 mg/kg three times weekly achieves approximately equivalent receptor occupancy to human weekly dosing per kg bodyweight',
        'Monitor lean mass preservation separately from total weight — tirzepatide shows better preservation of lean mass percentage relative to weight lost vs. semaglutide in preclinical models',
        'Measure adipose depot composition (visceral vs. subcutaneous vs. intermuscular) — not just total body weight — as tirzepatide shows preferential visceral adipose reduction',
      ],
    },
    {
      type: 'heading',
      text: 'What SURMOUNT-5 Does Not Tell Us',
    },
    {
      type: 'paragraph',
      text: 'Despite its landmark status, SURMOUNT-5 has important research limitations to acknowledge. As an open-label trial, expectation effects cannot be fully excluded for patient-reported outcomes. The 72-week duration does not address long-term efficacy maintenance beyond that window — a key research question given the STEP-4 withdrawal data showing rapid weight regain upon semaglutide cessation, which presumably applies to tirzepatide as well. The trial did not include liver biopsy endpoints (unlike SURMOUNT-NASH), so the comparative hepatic effects cannot be directly read from SURMOUNT-5 data. The trial excluded type 2 diabetes, so these results may not fully generalize to the diabetic population.',
    },
    {
      type: 'paragraph',
      text: 'The SELECT cardiovascular outcomes trial showed semaglutide reduces major adverse cardiovascular events (MACE) by 20% in individuals with established cardiovascular disease and obesity/overweight. An equivalent cardiovascular outcomes trial for tirzepatide (SURPASS-CVOT for T2DM, SURMOUNT-MMO for obesity without T2DM) is ongoing — the results of SURMOUNT-MMO will determine whether tirzepatide\'s superior metabolic effects translate to superior cardiovascular outcomes, or whether GLP-1R-specific mechanisms (e.g., direct cardiac GLP-1R effects) are more important than the magnitude of metabolic improvement.',
    },
    {
      type: 'heading',
      text: 'Key Research Takeaways',
    },
    {
      type: 'list',
      items: [
        'SURMOUNT-5 confirmed tirzepatide\'s superiority over semaglutide with direct head-to-head randomized evidence: −20.2% vs. −13.7% body weight loss at 72 weeks (difference: −6.4 pp, p<0.0001)',
        'Responder rate advantages were greatest at the highest weight loss thresholds: 62% vs. 34% achieving ≥20% weight loss',
        'Cardiometabolic biomarker improvements were consistent with weight loss magnitude differences — tirzepatide showed larger improvements across triglycerides, waist circumference, and glycemic markers',
        'GI tolerability was similar, with slightly higher early nausea for tirzepatide during up-titration; discontinuation rates were modestly higher (7.8% vs. 5.2%)',
        'For research endpoints requiring maximal metabolic effect, tirzepatide is now the evidence-based compound of choice; for mechanistic GLP-1R isolation studies, semaglutide remains the appropriate tool',
        'Cardiovascular outcomes data (SURMOUNT-MMO) and long-term post-treatment maintenance data remain outstanding research questions',
      ],
    },
    {
      type: 'disclaimer',
      text: 'This article is for research and educational purposes only. Tirzepatide and semaglutide are pharmaceutical agents approved for clinical use in specific contexts; as research compounds they are for in vitro and preclinical research use only. Nothing in this article constitutes medical advice.',
    },
  ],
};
