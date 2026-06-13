import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "selank-anxiety-research",
  title: "Selank: Anxiety and Nootropic Research Overview",
  description:
    "A research overview of Selank, the synthetic heptapeptide studied for anxiolytic and nootropic effects. Covers mechanism of action, enkephalin-sparing activity, BDNF modulation, and published study findings.",
  category: "Compound Profiles",
  readMinutes: 8,
  publishedAt: "2026-05-26",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "disclaimer",
      text: "Selank is a research chemical for use by licensed researchers and scientific educators only. Not for human consumption.",
    },
    {
      type: "paragraph",
      text: "Selank (Thr-Lys-Pro-Arg-Pro-Gly-Pro) is a synthetic heptapeptide developed by the Institute of Molecular Genetics of the Russian Academy of Sciences. It is structurally derived from tuftsin — a naturally occurring immunomodulatory tetrapeptide — with an additional Pro-Gly-Pro tripeptide sequence appended to extend CNS stability.",
    },
    {
      type: "paragraph",
      text: "Selank has regulatory approval as a pharmaceutical in Russia for generalized anxiety disorder and asthenia, providing a translational research context that is rare among research peptides. This approval, combined with published preclinical and Phase 2 clinical data, makes Selank one of the better-characterized nootropic peptides in the literature.",
    },
    {
      type: "heading",
      text: "Mechanism of Action",
    },
    {
      type: "subheading",
      text: "GABAergic Modulation",
    },
    {
      type: "paragraph",
      text: "Research has established that Selank produces anxiolytic effects through GABAergic system modulation, specifically through enhanced GABA-A receptor function. Unlike benzodiazepines which are direct allosteric GABA-A modulators, Selank's mechanism appears to involve indirect GABAergic potentiation without direct receptor binding — reducing anxiolysis without the sedation and dependence liability characteristic of benzodiazepines.",
    },
    {
      type: "subheading",
      text: "Enkephalin-Sparing Activity",
    },
    {
      type: "paragraph",
      text: "One of Selank's most consistently documented mechanisms is inhibition of enkephalin-degrading enzymes. By reducing the degradation rate of endogenous enkephalins (endogenous opioid peptides involved in stress regulation and mood), Selank effectively prolongs their activity — a modulatory approach distinct from direct receptor agonism.",
    },
    {
      type: "subheading",
      text: "BDNF Upregulation",
    },
    {
      type: "paragraph",
      text: "Selank has shown consistent effects on brain-derived neurotrophic factor (BDNF) expression in multiple research models. BDNF is a key regulator of neuroplasticity, neuronal survival, and stress resilience. Elevated BDNF is associated with reduced anxiety and depression phenotypes in animal models; Selank's ability to upregulate BDNF may contribute to its documented effects on stress adaptation.",
    },
    {
      type: "heading",
      text: "Published Research Findings",
    },
    {
      type: "list",
      items: [
        "Anxiolytic effects in elevated plus maze and open field tests in rodent anxiety models, comparable to low-dose benzodiazepines without sedation",
        "Reduced corticosterone elevation in acute and chronic stress paradigms",
        "Improved learning and memory in passive avoidance and Morris water maze tests",
        "Upregulation of BDNF mRNA in hippocampus and prefrontal cortex",
        "Anti-inflammatory cytokine modulation (reduced IL-6, increased IL-10) in stress models",
      ],
    },
    {
      type: "heading",
      text: "Intranasal vs. Subcutaneous Administration",
    },
    {
      type: "paragraph",
      text: "Selank is documented in both intranasal and subcutaneous research contexts. Intranasal delivery provides more direct CNS access via the olfactory epithelium pathway. Research comparing routes has generally shown equivalent efficacy at equivalent doses, with intranasal offering faster CNS kinetics. The approved Russian pharmaceutical formulation is intranasal.",
    },
    {
      type: "callout",
      text: "Nexphoria provides Selank with HPLC ≥99% purity, MS confirmation, and cold-chain shipping to preserve peptide integrity.",
    },
  ],
};
