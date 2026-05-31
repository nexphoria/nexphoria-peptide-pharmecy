import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: 'peptide-research-publication-guide-methods-disclosure-open-science',
  title: 'Peptide Research Publication Guide: Methods, Disclosure, Pre-registration, and Open Science Best Practices',
  description:
    'A practical guide for researchers writing up peptide studies for publication — covering compound sourcing transparency, ARRIVE 2.0 compliance, statistics reporting standards, pre-registration, data deposition, and how to write methods sections that pass peer review.',
  category: 'Research Fundamentals',
  readMinutes: 10,
  publishedAt: '2026-05-31',
  ogImage: '/og/products/bpc-157.png',
  body: [
    {
      type: 'paragraph',
      text: 'Peer review of peptide research has become substantially more rigorous over the past five years. High-impact journals now require compound sourcing disclosure, independent replication-ready methods, pre-specified statistical analysis plans, and raw data availability. Researchers who treat their methods section as a formality — or who rely on "as previously described" shortcuts — face desk rejection at journals like Nature, eLife, and the Journal of Pharmacology and Experimental Therapeutics at increasing rates. This guide covers the specific disclosure requirements, reporting standards, and open-science practices that distinguish publishable peptide pharmacology from data that lives in a lab notebook.',
    },
    {
      type: 'heading',
      text: 'Compound Sourcing Transparency',
    },
    {
      type: 'paragraph',
      text: 'Methods sections must disclose sufficient compound information for independent replication. The minimum required fields for any peptide compound used in a published study are: compound name (IUPAC and common), CAS Registry Number, molecular weight, purity percentage (to one decimal: "≥99.2% by RP-HPLC"), analytical methods used to determine purity (must include method reference or chromatographic conditions), lot number, vendor name and location, and LAL endotoxin value (EU/mg). For in vivo studies at any rodent dose, the endotoxin value is not optional — reviewers at immunology-adjacent journals will routinely request this data post-submission, and studies injecting peptides without endotoxin characterization are confounded by LPS-driven cytokine activation.',
    },
    {
      type: 'paragraph',
      text: 'A template sourcing disclosure for a peptide such as BPC-157: "BPC-157 acetate (CAS 137525-51-0; MW 1419.5 Da; ≥99.2% purity by RP-HPLC at 214 nm; <0.1 EU/mg by LAL chromogenic method; lot NX-2026-BPC; Nexphoria Research, Sheridan, WY) was dissolved in 0.9% sterile saline at 500 µg/mL and stored at −20°C. Aliquots were thawed once and used immediately." This level of detail is now standard at journals with formal animal research reporting requirements.',
    },
    {
      type: 'heading',
      text: 'ARRIVE 2.0: Animal Research Reporting Standard',
    },
    {
      type: 'paragraph',
      text: 'ARRIVE 2.0 (Animal Research: Reporting of In Vivo Experiments, Percie du Sert 2020, PLOS Biology) is the 39-item reporting checklist adopted by more than 1,000 journals. The 10 "essential" items are: study design, sample size (with power calculation), inclusion/exclusion criteria, randomization, blinding, outcome measures, statistical methods, experimental animals (strain/age/sex/weight/supplier), experimental procedures (doses/timing/route/reconstitution), and results (all animals reported including exclusions). The 19 "recommended" items cover ethical statement, housing/husbandry, sample size per group at each timepoint, and raw data availability.',
    },
    {
      type: 'paragraph',
      text: 'The three most commonly failed ARRIVE items in peptide research are: (1) Blinding — state explicitly whether cage assignment, dosing, tissue collection, and outcome assessment were blinded to treatment group, and by whom; many studies only blind behavioral scoring but not dosing personnel; (2) Randomization — describe the exact randomization method (simple, block, stratified by body weight) and the random number generator or software used; "animals were randomly assigned" without a stated method fails ARRIVE; (3) Sample size justification — provide the effect size, variability estimate (CV%), alpha level, and power used to calculate n per group. The effect size should be cited from a published study or pilot data, not assumed.',
    },
    {
      type: 'heading',
      text: 'Statistics Reporting Standards',
    },
    {
      type: 'paragraph',
      text: 'Statistics in peptide research publications are evaluated against several increasingly explicit standards. The key requirements are: (1) Report exact p-values (p = 0.032, not p < 0.05) — this applies to all post-hoc tests and primary endpoints; (2) Report both group-level measures (mean ± SEM) and individual data points — plot individual animals as overlaid data points on bar graphs or use box plots, per Nature Methods guidelines adopted by most high-impact journals; (3) Specify the statistical software and version (GraphPad Prism 10.0, R 4.3.1, SPSS 28); (4) Identify the test used and why — one-way ANOVA with Tukey post-hoc vs two-way ANOVA with Sidak vs mixed-effects ANOVA; these are not interchangeable and reviewers will challenge unjustified selections; (5) Adjust for multiple comparisons — if you measured 8 endpoints at 4 timepoints, a Bonferroni or FDR correction is expected; failure to adjust inflates Type I error.',
    },
    {
      type: 'paragraph',
      text: 'Sex-stratified analysis is now an NIH requirement for funded work under the 2016 SABV (Sex as a Biological Variable) policy and is expected by most major journals. This means: (1) run treatment × sex interaction tests for all primary endpoints; (2) if n per sex is insufficient for fully powered interaction tests (common in pilot studies), acknowledge this limitation explicitly and present sex-disaggregated data in a supplementary table; (3) do not pool sexes without testing for sex differences first.',
    },
    {
      type: 'heading',
      text: 'Pre-registration',
    },
    {
      type: 'paragraph',
      text: 'Pre-registration — publicly registering study hypotheses, endpoints, sample sizes, and analysis plans before data collection — is increasingly expected by journals and funding agencies. The primary repositories for preclinical research are OSF Registries (osf.io/registries, free) and the ECRIP registry (European Clinical Research Infrastructure Protocol). The minimum pre-registration elements are: primary and secondary endpoints, sample size and power calculation, inclusion/exclusion criteria, primary analysis method, and handling of missing data or outliers (specifically: will Grubbs\' test be used, and what is the pre-specified threshold). Pre-registration takes approximately 2–4 hours to complete and can occur the day before animal work begins. Many journals now display a "Pre-registered" badge on accepted papers, which increases citations.',
    },
    {
      type: 'paragraph',
      text: 'The practical benefit of pre-registration for peptide researchers is internal: it forces endpoint specification before seeing data, eliminates post-hoc primary endpoint substitution, and provides a clear rebuttal to reviewers who suggest the study was underpowered or endpoint-mined. A common reviewer comment — "the authors do not justify why IGF-1 was selected as the primary endpoint rather than body weight" — is completely deflected if the pre-registration record shows IGF-1 was specified as primary 3 months before data collection ended.',
    },
    {
      type: 'heading',
      text: 'Data Deposition',
    },
    {
      type: 'paragraph',
      text: 'Raw data deposition is required by Nature, Science, eLife, and many specialty journals as a condition of publication. The appropriate repository depends on data type: (1) Transcriptomics (RNA-seq, microarray): NCBI GEO (Gene Expression Omnibus, geo.ncbi.nlm.nih.gov) — free submission, accession number required in manuscript; (2) Proteomics: PRIDE (proteomeXchange.org) or PeptideAtlas; (3) Behavioral/physiological raw data: Dryad (datadryad.org, $150 fee) or OSF repository (free); (4) Metabolomics: MetaboLights or Metabolomics Workbench. For smaller datasets (body weights, blood draws, qPCR Ct values), a published Excel file or CSV uploaded to OSF satisfies most journal requirements. Include README files explaining column headers, units, and data provenance.',
    },
    {
      type: 'heading',
      text: 'Conflict of Interest and Negative Results',
    },
    {
      type: 'paragraph',
      text: 'Conflict of interest statements for peptide research must explicitly disclose any commercial relationship to compound suppliers, including whether compounds were donated, purchased at cost, or free of charge for research use. "Compounds were provided free of charge by [Vendor] for research use. The authors have no further financial relationship with the vendor" is the standard disclosure language. If compounds were purchased at standard pricing through a commercial vendor, a simple "No conflicts to declare" is typically sufficient, though full sourcing disclosure in the methods section (vendor name, location) effectively communicates independence.',
    },
    {
      type: 'paragraph',
      text: 'Negative results — where a peptide compound showed no effect — are publishable and increasingly valued. Journals specifically oriented toward rigorous null results include PLoS ONE, eLife (which accepts "interesting null results" explicitly), F1000Research (continuous publication, peer review post-publication), and JMIR Formative Research. Null results in well-powered peptide studies are particularly valuable when they contradict prior preclinical findings, use a positive control that validates assay sensitivity, or directly address a compound that has commercially driven positive publication bias. A null result from a 12-week, n = 10/group, fully powered BPC-157 study with active positive control (omeprazole in a gastric ulcer model) is more scientifically valuable than many positive results from underpowered n = 5 studies.',
    },
    {
      type: 'heading',
      text: 'Figures, Tables, and Supplementary Best Practices',
    },
    {
      type: 'list',
      items: [
        'Figure legends must be self-contained: a reader should fully understand the figure without reading the main text. Minimum: n per group, statistical test used, what error bars represent, what * denotes (exact threshold).',
        'Export figures at 300 dpi minimum (600 dpi for print-quality); use TIFF or EPS for submission. JPEG artifacts in graphs create reproducibility concerns.',
        'Color-blind accessibility: avoid red/green combinations. Use colorblind-safe palettes (Okabe-Ito, Viridis, or ColorBrewer). Approximately 8% of male reviewers have color vision deficiency.',
        'Source data files: Excel or CSV with individual data points behind every figure panel. Required by Nature family, eLife, and most high-impact journals. Include plate layout information for ELISA data.',
        'Supplementary methods are appropriate for: full animal husbandry protocols, complete HPLC/MS data for compound purity, full statistical output tables, and additional compound characterization data. Do not put essential methods in supplementary — put them in the main methods section.',
      ],
    },
    {
      type: 'heading',
      text: 'Peer Review Response',
    },
    {
      type: 'paragraph',
      text: 'First-round peer review of peptide pharmacology papers typically requires 2–4 reviewers and returns 3–12 specific requests for additional data or clarification. The most common requests for peptide studies are: (1) additional mechanistic controls (receptor antagonist to confirm specificity, e.g., Ex-9-39 for GLP-1R studies); (2) sample size/power calculation justification; (3) sex-disaggregated data; (4) compound purity and endotoxin data; (5) longer study duration or additional timepoints. Addressing each request systematically — with a point-by-point response letter that quotes the reviewer comment, provides the authors\' response, and states exactly where in the revised manuscript the change appears — is the minimum expected format. A rebuttal letter that argues with reviewers rather than providing requested data typically results in rejection at second review.',
    },
    {
      type: 'paragraph',
      text: 'The timeline from data collection to publication acceptance in preclinical peptide pharmacology typically runs 6–14 months: methods writing (2 weeks), results (2–3 weeks), first journal submission (2–4 weeks review), first revision (4–8 weeks for additional experiments), second review (2–4 weeks), acceptance (1–2 weeks), and production (4–8 weeks). Pre-registering, depositing data, and preparing ARRIVE-compliant methods from the beginning of the study — rather than retrofitting compliance at submission — saves approximately 4–6 weeks of this timeline.',
    },
    {
      type: 'disclaimer',
      text: 'All compounds discussed are for research use only (RUO). Not for human administration. This article is for educational purposes only.',
    },
  ],
};
