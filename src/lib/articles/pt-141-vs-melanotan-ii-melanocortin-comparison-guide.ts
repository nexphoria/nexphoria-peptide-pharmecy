import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: 'pt-141-vs-melanotan-ii-melanocortin-comparison-guide',
  title: 'PT-141 vs Melanotan II: Melanocortin Peptide Comparison for Researchers',
  description:
    'A rigorous side-by-side research comparison of PT-141 (Bremelanotide) and Melanotan II — receptor selectivity, mechanism differences, documented study findings, half-lives, reconstitution protocols, and key distinctions researchers should understand.',
  category: 'Compound Profiles',
  readMinutes: 11,
  publishedAt: '2026-06-15',
  ogImage: '/og-image.jpg',
  body: [
    {
      type: 'paragraph',
      text: 'PT-141 (Bremelanotide) and Melanotan II are both synthetic melanocortin peptides derived from alpha-melanocyte-stimulating hormone (α-MSH), and both have accumulated research literature documenting central nervous system-mediated effects. Despite their structural similarity and shared pharmacological lineage, they differ meaningfully in receptor selectivity, activity profiles, and the research applications for which each has been studied. Understanding these differences is foundational for any researcher designing studies involving melanocortin system modulation.',
    },
    {
      type: 'paragraph',
      text: 'This guide provides a technical comparison of PT-141 and Melanotan II across their structural chemistry, receptor pharmacology, documented study findings, handling requirements, and practical research design considerations.',
    },
    {
      type: 'heading',
      text: 'Structural Chemistry and Origins',
    },
    {
      type: 'paragraph',
      text: 'Both PT-141 and Melanotan II are cyclic lactam analogs of α-MSH, the endogenous melanocortin with broad receptor activity across MC1R through MC5R. α-MSH itself is a 13-amino acid peptide cleaved from pro-opiomelanocortin (POMC) in the pituitary. Early research into synthetic melanocortin analogs focused on developing compounds with enhanced potency, protease resistance, and modified activity profiles compared to the short-lived endogenous peptide.',
    },
    {
      type: 'paragraph',
      text: 'Melanotan II is a cyclic heptapeptide — Ac-Nle-c[Asp-His-D-Phe-Arg-Trp-Lys]-NH₂ — with a disulfide bridge replaced by a lactam bridge, giving it greater conformational rigidity and metabolic stability than α-MSH. Its CAS number is 121062-08-6 and its molecular weight is 1024.17 g/mol. PT-141 (Bremelanotide) has the structure Ac-Nle-c[Asp-His-D-Phe-Arg-Trp-Lys]-OH — essentially the C-terminal deamidated version of Melanotan II. Its molecular weight is 1025.17 g/mol and its CAS number is 189691-06-3. The single amino acid difference — an amide vs. free carboxyl terminus — produces notable differences in receptor binding affinity and downstream pharmacology.',
    },
    {
      type: 'table',
      headers: ['Property', 'PT-141 (Bremelanotide)', 'Melanotan II'],
      rows: [
        ['Structure', 'Cyclic heptapeptide, C-OH terminus', 'Cyclic heptapeptide, C-NH₂ terminus'],
        ['CAS Number', '189691-06-3', '121062-08-6'],
        ['Molecular Weight', '1025.17 g/mol', '1024.17 g/mol'],
        ['Origin', 'Analog of Melanotan II', 'Analog of α-MSH'],
        ['Half-Life (research estimate)', '~2.7 hours', '~1–2 hours'],
        ['Primary Research Route', 'Subcutaneous (intranasal in early studies)', 'Subcutaneous'],
        ['Water Solubility', 'Good; dissolves in sterile water/BAC water', 'Good; dissolves in sterile water/BAC water'],
      ],
    },
    {
      type: 'heading',
      text: 'Melanocortin Receptor System: Background',
    },
    {
      type: 'paragraph',
      text: 'Five melanocortin receptors (MC1R–MC5R) are expressed in distinct tissue distributions throughout the body, and each mediates different physiological functions. MC1R is expressed primarily in melanocytes and drives pigmentation. MC2R is expressed in the adrenal cortex and is the primary ACTH receptor mediating cortisol synthesis. MC3R and MC4R are expressed predominantly in the central nervous system — the hypothalamus, limbic system, and brainstem — where they regulate energy homeostasis, sexual function, and autonomic output. MC5R is distributed across exocrine glands and plays roles in secretory function.',
    },
    {
      type: 'paragraph',
      text: 'The central MC3R and MC4R receptors are the most pharmacologically significant targets for both PT-141 and Melanotan II. MC4R activation in the hypothalamus suppresses food intake and increases energy expenditure — making melanocortin agonism a target of metabolic research. Activation of melanocortin receptors in limbic and spinal cord regions has been linked in animal models to modulation of sexual arousal pathways, which constitutes the primary area of published human research for PT-141.',
    },
    {
      type: 'heading',
      text: 'Receptor Selectivity: Key Differences',
    },
    {
      type: 'paragraph',
      text: 'Both compounds are non-selective melanocortin agonists — they bind MC1R, MC3R, MC4R, and MC5R with varying affinities, though neither binds MC2R (the ACTH receptor) with significant potency. The critical pharmacological difference is that Melanotan II has roughly equal potency at MC1R and MC3R/MC4R, while PT-141 has a modestly different binding profile with somewhat reduced MC1R activity relative to its CNS receptor affinity. This contributes to Melanotan II's pronounced pigmentation effects in research models — an effect that has been documented even at doses studied for other endpoints.',
    },
    {
      type: 'paragraph',
      text: 'PT-141 was specifically developed by researchers attempting to decouple the CNS melanocortin activity from the strong melanogenic (tanning) activity of Melanotan II. While PT-141 does retain some MC1R binding, its clinical development trajectory (culminating in FDA approval as Vyleesi for hypoactive sexual desire disorder in premenopausal women) focused on CNS endpoints rather than pigmentation. For preclinical researchers, this means Melanotan II studies should anticipate and account for confounding pigmentation effects in long-term animal protocols, while PT-141 studies may observe less significant pigmentary changes.',
    },
    {
      type: 'heading',
      text: 'Documented Research Findings',
    },
    {
      type: 'subheading',
      text: 'PT-141 Research',
    },
    {
      type: 'paragraph',
      text: 'PT-141 has the most robust clinical research history of the two compounds. Phase II and Phase III clinical trials funded by Palatin Technologies documented statistically significant increases in satisfying sexual events (SSEs) in premenopausal women with hypoactive sexual desire disorder (HSDD) at doses of 1.25 mg and 1.75 mg administered subcutaneously. The mechanism identified was central — PT-141 activates MC4R pathways in the CNS rather than acting peripherally on vascular tissue (distinguishing it from PDE5 inhibitors like sildenafil). In male subjects, early Phase II trials documented dose-dependent effects on erectile function via central melanocortin pathways, though development in this indication was not pursued to approval.',
    },
    {
      type: 'list',
      items: [
        'Pfaus et al. (2004) — Animal model showing PT-141 dose-dependently increases female rat sexual behavior via CNS melanocortin receptor activation',
        'Diamond et al. (2006) — Phase II human study; PT-141 nasal spray increased genital arousal measured by vaginal photoplethysmography',
        'Kingsberg et al. (2019) — Phase III RECONNECT trial; PT-141 1.75mg SC met primary HSDD endpoints vs. placebo',
        'Simon et al. (2014) — Dose-finding Phase II study; established 1.25mg and 1.75mg as effective dose range with acceptable tolerability',
      ],
    },
    {
      type: 'subheading',
      text: 'Melanotan II Research',
    },
    {
      type: 'paragraph',
      text: 'Melanotan II research predates PT-141 and spans a broader set of endpoints, including pigmentation, sexual function, appetite suppression, and cardiovascular effects. Preclinical work at the University of Arizona beginning in the 1990s (Hadley, Dorr, and colleagues) documented its potent melanogenic effects and early observations on sexual arousal in animal models. Human pilot studies conducted at Arizona and subsequently in Europe documented skin darkening effects at relatively low doses, as well as spontaneous erection responses in male subjects — observations that motivated both subsequent HSDD research and recreational misuse (outside any research context).',
    },
    {
      type: 'list',
      items: [
        'Dorr et al. (1996) — Dose-escalation study in healthy volunteers; documented pigmentation and nausea at doses from 0.01–0.16 mg/kg SC',
        'Wessells et al. (1998) — Male erectile dysfunction; Melanotan II 0.025 mg/kg SC produced erections in 17/20 subjects including placebo non-responders',
        'Hadley & Dorr (2006) — Review of 20 years of Melanotan peptide research at University of Arizona',
        'Van der Ploeg et al. (2002) — MC4R knockout mouse model demonstrating obesity and reproductive deficits reversed by MC4R agonism',
      ],
    },
    {
      type: 'callout',
      text: 'Important research note: Melanotan II\'s pronounced melanogenic effects (skin darkening) make it a poor choice for blinded animal studies where coat color changes could unblind observers to treatment allocation. Researchers should account for this in protocol design.',
    },
    {
      type: 'heading',
      text: 'Half-Life and Pharmacokinetics',
    },
    {
      type: 'paragraph',
      text: 'PT-141 has an estimated elimination half-life of approximately 2.7 hours following subcutaneous administration, based on pharmacokinetic data from Phase I studies. Peak plasma concentration (Tmax) occurs approximately 1 hour post-injection. The relatively longer half-life compared to endogenous α-MSH (which has a half-life of minutes) results from the cyclic lactam structure resisting peptidase degradation. Melanotan II has a shorter half-life estimated at 1–2 hours in preclinical models — though this varies by species, route, and dose. Its earlier peak and faster clearance require more careful timing in study designs where endpoint measurement windows matter.',
    },
    {
      type: 'heading',
      text: 'Reconstitution and Handling',
    },
    {
      type: 'paragraph',
      text: 'Both compounds are supplied as lyophilized powder and are reconstituted with bacteriostatic water (sterile water with 0.9% benzyl alcohol) or sterile water for injection. Standard concentrations used in research range from 1–10 mg/mL depending on dose requirements. Both peptides are stable in solution at 4°C for research-use windows of 4–8 weeks; long-term storage should be in lyophilized form at −20°C or lower.',
    },
    {
      type: 'list',
      items: [
        'Both compounds: reconstitute with bacteriostatic water or sterile water for injection',
        'Typical research concentration: 1–5 mg/mL',
        'Lyophilized storage: −20°C; stable for 24+ months when protected from moisture',
        'Reconstituted storage: 4°C, use within 4–8 weeks; avoid freeze-thaw cycles',
        'Both exhibit good water solubility — do not require organic solvents for reconstitution',
        'Light-sensitive: store away from direct UV/light exposure to prevent oxidation',
      ],
    },
    {
      type: 'heading',
      text: 'Choosing Between PT-141 and Melanotan II for Research',
    },
    {
      type: 'paragraph',
      text: 'The choice between these compounds depends entirely on the research question. For CNS melanocortin research focused specifically on sexual function endpoints with minimal pigmentation confounding, PT-141\'s clinical characterization and published PK/PD data make it the better-characterized starting point. For pigmentation research, melanocyte biology studies, or broad melanocortin agonism research where MC1R effects are of interest, Melanotan II\'s established dose-response curves across melanogenic and systemic endpoints are valuable. For energy homeostasis and metabolic research via MC3R/MC4R pathways, either compound can be used — though PT-141 has the larger clinical safety dataset for reference.',
    },
    {
      type: 'table',
      headers: ['Research Application', 'Preferred Compound', 'Rationale'],
      rows: [
        ['Sexual function / HSDD models', 'PT-141', 'Extensive clinical dataset; FDA-approved, minimal pigmentation confound'],
        ['Pigmentation / melanocyte biology', 'Melanotan II', 'Potent MC1R activity; established dose-response for melanogenesis'],
        ['MC4R satiety / metabolic models', 'Either', 'Both activate MC4R; PT-141 has broader PK characterization'],
        ['Blinded long-term animal studies', 'PT-141', 'Less pronounced coat color changes reduce observer unblinding risk'],
        ['CNS dopamine/arousal pathway studies', 'PT-141', 'More selective CNS receptor profile; clinical PK data available'],
        ['Cardiovascular / autonomic studies', 'Melanotan II', 'More published preclinical cardiovascular data available'],
      ],
    },
    {
      type: 'heading',
      text: 'Sourcing Considerations',
    },
    {
      type: 'paragraph',
      text: 'Both PT-141 and Melanotan II require the same quality verification steps as all research peptides: HPLC purity certificate (≥99%), mass spectrometry identity confirmation, LAL endotoxin testing, and third-party COA from an independent laboratory. Given the small dose ranges used in research (particularly for PT-141, where clinical doses are in the 1–2 mg range), even small purity deviations or impurity loads can significantly affect experimental results. Researchers should request and review lot-specific COA data before accepting any shipment.',
    },
    {
      type: 'disclaimer',
      text: 'PT-141 and Melanotan II are sold exclusively for qualified research use. They are not approved or intended for human self-administration, therapeutic use, or diagnostic purposes outside FDA-regulated clinical trial frameworks. Nothing in this article constitutes medical advice or endorsement of non-research use.',
    },
  ],
};
