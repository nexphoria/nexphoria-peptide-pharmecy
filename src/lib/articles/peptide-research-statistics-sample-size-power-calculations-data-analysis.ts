import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: 'peptide-research-statistics-sample-size-power-calculations-data-analysis',
  title: 'Peptide Research Statistics: Sample Size, Power Calculations, and Data Analysis',
  description:
    'A practical guide to G*Power, effect sizes, ANOVA, post-hoc tests, and reporting standards for preclinical peptide research. How many animals do you need, and what statistics should you use?',
  category: 'Research Fundamentals',
  readMinutes: 10,
  publishedAt: '2026-05-30',
  ogImage: '/og-image.jpg',
  body: [
    {
      type: 'paragraph',
      text: 'The most common question in peptide research design — after "what dose should I use?" — is "how many animals do I need?" The answer depends on effect size, variability, desired statistical power, and the analysis method you plan to use. Underpowered studies miss real effects; overpowered studies waste resources and raise ethical concerns. This guide provides a working framework for sample size determination, analysis method selection, and data reporting that meets current preclinical publication standards.',
    },
    {
      type: 'heading',
      text: 'The Core Framework: α, β, Effect Size, and Power',
    },
    {
      type: 'paragraph',
      text: 'Statistical power is the probability of detecting a true effect. The conventional standard is 80% power (β = 0.20), meaning there is a 20% chance of a false negative (missing a real effect). The false positive rate is α = 0.05 — a 5% chance of declaring an effect that does not exist. These two parameters, combined with the expected effect size and inter-animal variability, fully determine sample size.',
    },
    {
      type: 'paragraph',
      text: 'Effect size (Cohen\'s d) is the difference between group means divided by the pooled standard deviation. In peptide research, published preclinical data can guide estimates. As a rule of thumb: d = 0.5 is a medium effect (likely detectable but requires moderate n), d = 0.8 is a large effect (most well-optimized peptide studies), and d ≥ 1.0 is a very large effect (e.g., DIO semaglutide vs vehicle weight loss data). Searching prior literature for mean and SD values at your target dose range is the most reliable way to estimate d before running G*Power.',
    },
    {
      type: 'paragraph',
      text: 'Coefficient of variation (CV%) = (SD / mean) × 100 is a more intuitive metric for peptide research. Body weight data in DIO mice typically runs 15–25% CV; IGF-1 data runs 20–35% CV; behavioral endpoints (e.g., social recognition) may run 30–50% CV. Higher CV% requires larger n to achieve the same power.',
    },
    {
      type: 'heading',
      text: 'G*Power: Practical Sample Size Calculation',
    },
    {
      type: 'paragraph',
      text: 'G*Power (free download, Faul et al. 2007) is the standard tool for preclinical sample size calculation. For most peptide protocols, use the following settings: Test family = F tests, Statistical test = ANOVA: Fixed effects, omnibus, one-way, α = 0.05, Power = 0.80, Number of groups = your treatment arms (typically 3–6 for dose-response studies, 2 for simple vehicle vs treatment). Input the expected effect size f (Cohen\'s f = d / 2 for two groups; for multi-group designs, estimate from pilot data or literature).',
    },
    {
      type: 'paragraph',
      text: 'As a practical reference: for a peptide with a well-characterized large effect (d ≈ 0.8, f ≈ 0.4) in a two-group design, G*Power calculates approximately n = 27 per group (54 total). For smaller effects (d ≈ 0.5, f ≈ 0.25), n = 65 per group is required for 80% power. This is why most preclinical peptide studies use n = 8–12 per group — they are implicitly assuming large-to-very-large effect sizes based on prior work. If you are running a dose-response with 5 groups and expect f ≈ 0.40, n = 10–12 per group provides approximately 85% power (verified in G*Power v3.1).',
    },
    {
      type: 'paragraph',
      text: 'For factorial designs (e.g., CJC-1295 × ipamorelin, 2×2 design testing both main effects and interaction), use F tests → ANOVA: Fixed effects, special, main effects and interactions. The interaction term typically requires larger n than main effects — plan for n = 10–15 per cell in 2×2 factorial designs to detect a moderate interaction effect.',
    },
    {
      type: 'heading',
      text: 'One-Way vs Two-Way ANOVA: When to Use Each',
    },
    {
      type: 'paragraph',
      text: 'One-way ANOVA is appropriate when you have a single independent variable with 3+ levels — the most common design in peptide dose-response studies (vehicle, low dose, mid dose, high dose). Two-way ANOVA is required when two independent variables are manipulated simultaneously — for example, compound (CJC-1295 vs ipamorelin vs combination) × sex (male vs female), or compound × dose. Two-way ANOVA partitions variance into main effect A, main effect B, and the A×B interaction term. The interaction is often the most biologically interesting result: does ipamorelin show greater IGF-1 elevation in combination with CJC-1295 than either compound alone? That synergy is an interaction effect.',
    },
    {
      type: 'paragraph',
      text: 'For repeated-measures designs — where the same animal is measured across multiple time points (e.g., weekly body weight in a 12-week DIO semaglutide study) — use a repeated-measures ANOVA (RM-ANOVA) or a mixed-effects model (compound × time interaction). RM-ANOVA increases power by removing between-subject variance from error, but requires complete datasets. Animals that die, are removed, or have missing time points complicate RM-ANOVA. Mixed-effects models (available in GraphPad Prism as "mixed-effects analysis") handle missing data more gracefully and are increasingly preferred for longitudinal peptide data.',
    },
    {
      type: 'heading',
      text: 'Post-Hoc Tests: Tukey, Dunnett, and Bonferroni',
    },
    {
      type: 'paragraph',
      text: 'ANOVA\'s F-test tells you that at least one group mean is different — it does not tell you which groups differ. Post-hoc tests are required for pairwise comparisons after a significant omnibus ANOVA. The choice depends on your comparison structure:',
    },
    {
      type: 'paragraph',
      text: '**Tukey HSD (Honest Significant Difference):** Use when comparing all pairs of groups to each other (dose-response study where you want to know which doses differ from one another). Controls family-wise error rate (FWER) at α = 0.05 across all pairwise comparisons. The most conservative option when all comparisons are of interest. In a 5-group dose-response study, Tukey compares all 10 pairs simultaneously.',
    },
    {
      type: 'paragraph',
      text: '**Dunnett\'s test:** Use when comparing multiple treatment groups to a single control group (vehicle vs dose 1, dose 2, dose 3) — not comparing treatment groups to each other. Dunnett is less conservative than Tukey for the control comparisons because it exploits the specific structure of control-vs-treatment comparisons. The correct choice for most peptide efficacy studies where the primary question is "does this dose differ from vehicle?"',
    },
    {
      type: 'paragraph',
      text: '**Bonferroni correction:** Divides α by the number of comparisons (α per test = 0.05 / k). Simple and transparent, but the most conservative — it over-corrects when comparisons are correlated (as they are in ANOVA). Use Bonferroni only when the number of comparisons is small (≤3) or when maximum Type I error control is required regardless of power cost. For most multi-group peptide studies, Tukey or Dunnett are better choices.',
    },
    {
      type: 'heading',
      text: 'Parametric vs Non-Parametric Alternatives',
    },
    {
      type: 'paragraph',
      text: 'ANOVA assumes normally distributed residuals and homogeneity of variance (homoscedasticity). These assumptions are often reasonable for continuous endpoints like body weight, IGF-1, or glucose — particularly with n ≥ 8 per group, where the Central Limit Theorem applies. However, small-group studies (n = 4–6), behavioral scores, and ordinal data (histology grading, wound healing scores) may violate these assumptions.',
    },
    {
      type: 'paragraph',
      text: '**Mann-Whitney U test** (Wilcoxon rank-sum): The non-parametric alternative to an unpaired t-test. Use for two-group comparisons with non-normal data or small n. Note: Mann-Whitney U tests the null hypothesis that one group\'s observations tend to be larger than the other\'s — not strictly a test of equal medians unless distributions have the same shape. For small n in peptide research (n = 4–6 per group), Mann-Whitney U is appropriate for reporting but has substantially lower power than a t-test when normality holds.',
    },
    {
      type: 'paragraph',
      text: '**Kruskal-Wallis test:** The non-parametric one-way ANOVA equivalent. Use for 3+ groups with non-normal distributions. Follow significant Kruskal-Wallis with Dunn\'s test (post-hoc pairwise comparisons with Bonferroni or Benjamini-Hochberg correction). Appropriate for behavioral endpoint data, ordinal histology scores, and any endpoint with n < 6 per group.',
    },
    {
      type: 'paragraph',
      text: 'Normality testing (Shapiro-Wilk) is recommended before analysis. In GraphPad Prism, this runs automatically with ANOVA. However, normality tests have low power with small n — a non-significant Shapiro-Wilk does not guarantee normality with n = 6. The pragmatic approach: check for grossly non-normal distributions by inspecting residuals, use parametric tests for continuous outcomes with n ≥ 8, and switch to non-parametric equivalents for obvious deviations or small n.',
    },
    {
      type: 'heading',
      text: 'Repeated Measures and Handling Outliers',
    },
    {
      type: 'paragraph',
      text: 'For within-subject designs (same animal measured multiple times), the Friedman test is the non-parametric equivalent of repeated-measures ANOVA. Use for ordinal or clearly non-normal repeated data. Follow with Dunn\'s test for pairwise comparisons.',
    },
    {
      type: 'paragraph',
      text: 'Outliers in small-n peptide studies can substantially distort means and inflate variance. The **Grubbs\' test** (also called the ESD test for extreme studentized deviates) identifies statistically improbable outliers: calculate G = (max|xi − x̄|) / s; compare to critical Grubbs value at α = 0.05 for your n. If G exceeds the critical value, the data point is a statistical outlier — but its removal must be biologically justified (equipment failure, animal illness, improper injection). Do not perform Grubbs on data just because the outlier hurts your p-value. Prespecify your outlier exclusion criteria in your study protocol before data collection begins.',
    },
    {
      type: 'heading',
      text: 'Reporting Standards: SEM vs SD, Individual Data Points',
    },
    {
      type: 'paragraph',
      text: 'Current Nature, Cell, and specialty journal reporting standards (Calin et al. consensus guidelines) require: (1) individual data points plotted, not just bars; (2) mean ± SEM (standard error of mean) for normally distributed data where the intent is to convey precision of the mean estimate; (3) mean ± SD (standard deviation) when the intent is to convey biological variability in the population. For most preclinical peptide publications, mean ± SEM is standard for bar graphs with individual data points overlaid.',
    },
    {
      type: 'paragraph',
      text: 'The difference is important: SEM = SD / √n. With n = 10 and SD = 40% CV, SEM is 3.16× smaller than SD. Using SEM makes error bars look smaller and results look cleaner — which is why reviewers now require individual data points, which cannot be hidden by small SEM bars. Report n per group explicitly in figure legends. State the statistical test, post-hoc correction method, and exact p-values (not "p < 0.05") for all comparisons. For non-significant differences, report the actual p-value, not "NS."',
    },
    {
      type: 'paragraph',
      text: 'For longitudinal body weight data in DIO studies, the area under the curve (AUC) of weight loss trajectory is a single endpoint that captures the entire treatment effect and reduces the multiple comparison burden of testing each time point individually. AUC analysis can be performed with the trapezoidal method in GraphPad Prism (Analyze → Area Under Curve) and then subjected to one-way ANOVA with Dunnett\'s post-hoc.',
    },
    {
      type: 'heading',
      text: 'Common Statistics Errors in Peptide Research',
    },
    {
      type: 'paragraph',
      text: 'Several statistical errors are particularly common in peptide research publications: (1) **Multiple t-tests instead of ANOVA:** Running individual t-tests for each dose group vs vehicle inflates the false positive rate. If you have 4 dose groups + vehicle, 4 t-tests at α = 0.05 gives a family-wise error rate of approximately 18.5%, not 5%. Use one-way ANOVA + Dunnett\'s test. (2) **Using SEM without individual data points:** Obscures the actual distribution and n. (3) **Not pre-specifying primary endpoint:** Declaring the endpoint with the best p-value as "primary" post-hoc inflates false positives. Pre-specify primary (e.g., body weight AUC) and secondary (e.g., fasting glucose, HOMA-IR) endpoints in your protocol before starting.',
    },
    {
      type: 'paragraph',
      text: '(4) **Ignoring missing data:** Excluding animals that died or failed to gain weight (in DIO studies) without addressing the bias this introduces. Use intention-to-treat analysis or explicitly state exclusion criteria and n for each time point. (5) **Pseudoreplication:** Treating technical replicates (multiple measurements from the same animal) as independent biological replicates. n is the number of biologically independent animals, not measurements. A Western blot run in triplicate on tissue from one animal is n = 1, not n = 3. This is among the most common and consequential errors in preclinical peptide research.',
    },
    {
      type: 'heading',
      text: 'Quick Reference: Test Selection Guide',
    },
    {
      type: 'paragraph',
      text: 'Statistical test selection by study design:',
    },
    {
      type: 'table',
      headers: ['Design', 'Parametric Test', 'Non-Parametric Alternative', 'Post-Hoc'],
      rows: [
        ['2 groups, independent', 'Unpaired t-test', 'Mann-Whitney U', 'N/A'],
        ['2 groups, paired/matched', 'Paired t-test', 'Wilcoxon signed-rank', 'N/A'],
        ['3+ groups, 1 factor', 'One-way ANOVA', 'Kruskal-Wallis', 'Tukey / Dunnett / Dunn'],
        ['2 factors (e.g., drug × sex)', 'Two-way ANOVA', 'N/A (use RM for within)', 'Tukey / Dunnett'],
        ['3+ groups, repeated measures', 'RM-ANOVA / Mixed-effects', 'Friedman test', 'Tukey / Dunn'],
        ['Survival / time-to-event', 'Log-rank (Kaplan-Meier)', '—', 'Bonferroni (multiple curves)'],
        ['Ordinal scores (histology)', 'N/A', 'Kruskal-Wallis', "Dunn's test"],
        ['Correlation (two continuous)', 'Pearson r', 'Spearman ρ', 'N/A'],
      ],
    },
    {
      type: 'heading',
      text: 'Putting It Together: A Sample Protocol Statistics Section',
    },
    {
      type: 'paragraph',
      text: 'For a standard GH axis study with 4 groups (vehicle, CJC-1295 No DAC, ipamorelin, combination) and n = 10 per group: (1) Power analysis: based on published IGF-1 CV% of 28% and expected combination-group elevation of 65% from vehicle, G*Power one-way ANOVA f = 0.38, α = 0.05, power = 0.80 calculates n = 10 per group. (2) Primary endpoint: IGF-1 (ng/mL) at 6 weeks, analyzed by one-way ANOVA with Tukey\'s post-hoc (all-pairwise). (3) Secondary endpoints: body weight AUC (one-way ANOVA + Dunnett vs vehicle), fasting glucose (one-way ANOVA + Dunnett vs vehicle). (4) Outlier exclusion: Grubbs test at α = 0.05, pre-specified. (5) Data shown as mean ± SEM with individual data points, exact p-values reported.',
    },
    {
      type: 'paragraph',
      text: 'This level of statistical pre-specification is increasingly required by journals and is foundational to reproducible peptide research. The tools discussed — G*Power for planning, GraphPad Prism or R for analysis — are available free or low-cost, and the principles above apply to any compound or endpoint encountered in preclinical peptide work.',
    },
    {
      type: 'disclaimer',
      text: 'All compounds referenced are for research use only (RUO). Statistical frameworks described are for preclinical laboratory research design. This content does not constitute medical or clinical research guidance.',
    },
  ],
};
