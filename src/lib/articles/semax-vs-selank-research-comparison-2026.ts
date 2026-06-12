import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: 'semax-vs-selank-research-comparison-2026',
  title: 'Semax vs. Selank: A Head-to-Head Research Comparison (2026)',
  description:
    'Semax and Selank are two Russian-developed nootropic peptides with distinct but overlapping mechanisms. This deep-dive compares their pharmacology, research evidence, administration routes, and use-case profiles to help researchers select the right compound for their study design.',
  category: 'Compound Profiles',
  readMinutes: 11,
  publishedAt: '2026-06-12',
  ogImage: '/og-image.jpg',
  body: [
    {
      type: 'paragraph',
      text: "Semax and Selank are among the most studied nootropic peptides to emerge from the Russian Academy of Sciences. Both were developed through state-funded research programs in Moscow, both have regulatory approval in Russia (as nasal sprays), and both have accumulated published pharmacological data that has attracted Western researcher interest. Yet despite superficial similarities, their mechanisms, primary endpoints, and research applications differ substantially.",
    },
    {
      type: 'heading',
      text: 'Molecular Structure and Origins',
    },
    {
      type: 'subheading',
      text: 'Semax',
    },
    {
      type: 'paragraph',
      text: 'Semax is a heptapeptide (MEHFPGP) derived from ACTH(4-7) — a fragment of adrenocorticotropic hormone. The ACTH fragment was modified by researchers at the Institute of Molecular Genetics (Moscow) to eliminate steroidogenic activity while preserving and amplifying its neurotrophic properties. Semax was approved in Russia in 1991 for cognitive enhancement and is marketed as a 0.1% nasal spray (Semax) and a more potent N-Acetyl variant.',
    },
    {
      type: 'subheading',
      text: 'Selank',
    },
    {
      type: 'paragraph',
      text: "Selank (TKPRPGP) is a synthetic heptapeptide analog of tuftsin — a naturally occurring tetrapeptide (Thr-Lys-Pro-Arg) that plays a role in immune regulation. Developed at the same Russian institute, Selank was designed to combine the anxiolytic properties of tuftsin with enhanced stability and CNS penetration. It received Russian approval as an anxiolytic nasal spray in 2009.",
    },
    {
      type: 'table',
      headers: ['Property', 'Semax', 'Selank'],
      rows: [
        ['Origin peptide', 'ACTH(4-7)', 'Tuftsin (immune peptide)'],
        ['Sequence', 'MEHFPGP', 'TKPRPGP'],
        ['Molecular weight', '~887 Da', '~863 Da'],
        ['Russian approval', '1991', '2009'],
        ['Primary indication (Russia)', 'Cognitive enhancement, stroke recovery', 'Anxiety disorders'],
        ['Primary mechanism', 'BDNF upregulation, DA/5-HT modulation', 'GABA-A potentiation, enkephalin regulation'],
      ],
    },
    {
      type: 'heading',
      text: 'Mechanism of Action: Key Differences',
    },
    {
      type: 'subheading',
      text: 'Semax: BDNF and Monoamine Modulation',
    },
    {
      type: 'paragraph',
      text: 'The primary established mechanism of Semax is upregulation of brain-derived neurotrophic factor (BDNF). Multiple animal studies demonstrate 2–6x increases in hippocampal and cortical BDNF expression following intranasal Semax administration. BDNF is the master regulator of synaptic plasticity, neurogenesis, and long-term potentiation — directly relevant to learning and memory endpoints.',
    },
    {
      type: 'paragraph',
      text: 'Additionally, Semax modulates dopaminergic and serotonergic neurotransmission. Research has shown increased dopamine turnover in the striatum and prefrontal cortex following Semax treatment, consistent with the pro-cognitive and motivation-enhancing effects observed in animal models. Melanocortin receptor activity (particularly MC4R) is also implicated, contributing to attention and arousal pathways.',
    },
    {
      type: 'subheading',
      text: 'Selank: GABAergic and Opioid Modulation',
    },
    {
      type: 'paragraph',
      text: 'Selank\'s primary anxiolytic mechanism appears to involve potentiation of GABA-A receptor activity — similar in profile to benzodiazepines but without the receptor binding site overlap that produces dependence and tolerance. Research from Uchakina et al. (2014) demonstrated that Selank increased expression of GABA-A subunit genes in mouse brain, with anxiolytic effects blocked by flumazenil (a GABA-A antagonist).',
    },
    {
      type: 'paragraph',
      text: 'Selank also regulates enkephalin metabolism. Studies using mass spectrometry demonstrated that Selank inhibits enkephalin-degrading enzymes, increasing endogenous opioid peptide levels in brain tissue. This dual mechanism — GABAergic + opioidergic — may explain Selank\'s broader anxiolytic and stress-attenuating effects beyond what pure GABA-A modulation would produce.',
    },
    {
      type: 'paragraph',
      text: 'Like Semax, Selank also upregulates BDNF — but to a lesser degree. This shared pathway may explain some cognitive overlap between the two compounds.',
    },
    {
      type: 'heading',
      text: 'Research Evidence: Where the Data Is Strong',
    },
    {
      type: 'subheading',
      text: 'Semax Evidence Base',
    },
    {
      type: 'list',
      items: [
        'Stroke recovery: Multiple Russian clinical trials demonstrated reduced neurological deficit scores in acute ischemic stroke patients treated with intranasal Semax (0.1%) vs. placebo',
        'Attention and learning: Animal models consistently show improved Morris Water Maze performance, passive avoidance retention, and novel object recognition with Semax treatment',
        'BDNF induction: Repeatedly demonstrated across species; dose-dependent effect observed in rodent cortical culture studies',
        'Optic nerve protection: Russian clinical data (Lebedeva et al., 2001) showed Semax attenuated visual field loss in optic nerve damage patients',
        'Depressive-like behavior: Forced swim test data shows antidepressant-like effects in rodents at doses correlating with BDNF induction',
      ],
    },
    {
      type: 'subheading',
      text: 'Selank Evidence Base',
    },
    {
      type: 'list',
      items: [
        'Anxiety: Multiple controlled Russian studies in generalized anxiety disorder patients demonstrated non-inferior anxiolytic effects vs. medazepam without sedation or dependence',
        'Immune modulation: Selank\'s tuftsin-derived structure confers immune-activating effects; studies show IL-6 normalization and T-cell function improvement',
        'Stress resilience: Rodent restraint stress models show Selank attenuates corticosterone surge and behavioral markers of anxiety',
        'PTSD-adjacent models: Preclinical fear extinction studies demonstrate Selank accelerates extinction learning in conditioned fear paradigms',
        'Nootropic overlap: Some Russian studies show mild pro-cognitive effects (sustained attention, working memory) though less robust than Semax data',
      ],
    },
    {
      type: 'heading',
      text: 'Administration Routes and Pharmacokinetics',
    },
    {
      type: 'paragraph',
      text: 'Both peptides are most commonly studied via intranasal administration, which allows bypassing of first-pass metabolism and facilitates CNS delivery via the olfactory-trigeminal route. Subcutaneous injection is also used in research settings, particularly when precise dosing is required.',
    },
    {
      type: 'table',
      headers: ['Parameter', 'Semax', 'Selank'],
      rows: [
        ['Primary route', 'Intranasal', 'Intranasal'],
        ['Half-life (intranasal)', '~20–25 minutes', '~30–35 minutes'],
        ['Onset', 'Rapid (minutes)', 'Rapid (minutes)'],
        ['CNS penetration', 'High via olfactory route', 'High via olfactory route'],
        ['Subcutaneous option', 'Yes', 'Yes'],
        ['Oral bioavailability', 'Low (peptide degradation)', 'Low (peptide degradation)'],
      ],
    },
    {
      type: 'callout',
      text: 'Research note: Intranasal delivery of both peptides produces rapid CNS effects but requires careful dosing calculation — intranasal peptide absorption varies by formulation, nasal anatomy, and technique. Subcutaneous administration provides more predictable pharmacokinetics for dose-response studies.',
    },
    {
      type: 'heading',
      text: 'Use Case Matrix: Choosing the Right Compound',
    },
    {
      type: 'paragraph',
      text: 'The choice between Semax and Selank depends entirely on the research question. Their overlapping but distinct mechanisms make each optimal for different endpoint categories.',
    },
    {
      type: 'table',
      headers: ['Research Goal', 'Preferred Compound', 'Rationale'],
      rows: [
        ['BDNF pathway investigation', 'Semax', 'Stronger and more consistent BDNF upregulation'],
        ['Anxiety / stress resilience model', 'Selank', 'GABAergic mechanism, validated anxiolytic data'],
        ['Stroke / ischemia neuroprotection', 'Semax', 'Clinical trial precedent in stroke populations'],
        ['Immune modulation alongside cognition', 'Selank', 'Tuftsin origin provides immune-activating component'],
        ['Attention and executive function', 'Semax', 'DA/5-HT modulation; stronger cognitive evidence base'],
        ['Fear extinction / PTSD models', 'Selank', 'Enkephalin regulation, fear conditioning data'],
        ['Combined nootropic/anxiolytic study', 'Both (separate arms)', 'Independent mechanisms allow combination study'],
        ['Optic nerve / visual pathway', 'Semax', 'Clinical data from Russian optic nerve trials'],
      ],
    },
    {
      type: 'heading',
      text: 'N-Acetyl Semax and N-Acetyl Selank: Modified Variants',
    },
    {
      type: 'paragraph',
      text: "Both peptides have modified variants with N-acetyl groups added at the N-terminus. N-Acetyl Semax Amidate (NASSA) is reportedly more potent than standard Semax — animal studies suggest 3–5x greater BDNF induction per unit dose, attributed to improved membrane permeability and resistance to aminopeptidase degradation. N-Acetyl Selank (Selank Amidate) shows similar enhanced stability.",
    },
    {
      type: 'paragraph',
      text: 'Researchers should note that dose-equivalency between standard and N-acetyl variants has not been rigorously established in peer-reviewed literature. Pilot dose-finding studies within any protocol are recommended before assuming equipotency.',
    },
    {
      type: 'heading',
      text: 'Combination Research Designs',
    },
    {
      type: 'paragraph',
      text: "Because Semax and Selank operate through largely distinct mechanisms, they are candidates for combination study designs. The 'Adamax' stack — popularized in Russian research circles — pairs Semax with Selank and DSIP. Published Russian data on this combination (Kolik et al., 2019) showed synergistic reduction in oxidative stress markers and improved learning metrics compared to either compound alone in rodent models.",
    },
    {
      type: 'paragraph',
      text: 'Combination designs require careful control arms (each compound alone, vehicle, combination) and sufficient statistical power to detect interaction effects. Independent mechanism validation should precede combination work.',
    },
    {
      type: 'heading',
      text: 'Sourcing Considerations for Semax and Selank',
    },
    {
      type: 'paragraph',
      text: 'Both Semax and Selank are relatively small heptapeptides, but their quality requirements are non-trivial. Peptide sequences containing methionine (Semax) are susceptible to methionine oxidation during synthesis or storage — a common quality failure mode that converts the active form to an oxidized, less potent variant. HPLC chromatograms should show a single dominant peak with no oxidation shoulder.',
    },
    {
      type: 'paragraph',
      text: 'For Selank, researchers should verify the proline-glycine-proline C-terminal sequence is intact — this is the region responsible for enkephalin enzyme inhibition. Truncated variants missing this C-terminus would exhibit reduced enkephalin-modulating activity even if overall HPLC purity appears acceptable.',
    },
    {
      type: 'paragraph',
      text: 'Nexphoria provides lot-specific HPLC and LC-MS data for both Semax and Selank, allowing researchers to verify sequence integrity and rule out common degradation products before beginning protocols.',
    },
    {
      type: 'disclaimer',
      text: 'Semax and Selank are research peptides sold exclusively for qualified laboratory use. They are not approved by the FDA for human use in the United States. This content is for educational and research purposes only and does not constitute medical advice.',
    },
  ],
};
