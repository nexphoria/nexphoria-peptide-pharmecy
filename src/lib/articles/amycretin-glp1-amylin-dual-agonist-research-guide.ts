import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "amycretin-glp1-amylin-dual-agonist-research-guide",
  title: "Amycretin: The GLP-1/Amylin Dual Agonist Researchers Are Watching in 2026",
  description:
    "An evidence-based overview of Amycretin (AM833/OIC-1309-01), the GLP-1 receptor and amylin receptor dual agonist in Phase II development. What preclinical and early clinical data shows about its weight loss mechanism and differentiation from existing GLP-1 agents.",
  category: "Compound Profiles",
  readMinutes: 11,
  publishedAt: "2026-06-09",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "The GLP-1 receptor agonist class — semaglutide, tirzepatide, retatrutide — has dominated metabolic research for the past several years. But a new compound is attracting significant scientific attention: Amycretin, a unimolecular dual agonist combining GLP-1 receptor (GLP-1R) and amylin receptor (AMYR) activity in a single molecule. Early Phase I/II data reported through 2025 suggests Amycretin may achieve weight loss efficacy that exceeds single-receptor agents, with a differentiated mechanism rooted in hypothalamic and hindbrain satiety circuitry.",
    },
    {
      type: "paragraph",
      text: "This article covers what Amycretin is, how it works at the receptor level, what the published and disclosed clinical data shows, and why researchers studying metabolic peptides are tracking this compound's development closely.",
    },
    {
      type: "heading",
      text: "What Is Amycretin?",
    },
    {
      type: "paragraph",
      text: "Amycretin (development codes AM833 and OIC-1309-01, from Novo Nordisk) is a subcutaneously administered unimolecular peptide co-agonist at both GLP-1 receptors and amylin receptors — specifically the calcitonin receptor (CTR) and receptor activity-modifying proteins (RAMPs) that form functional amylin receptor complexes. It is distinct from co-administration of a GLP-1 agonist plus an amylin analog (e.g., cagrilintide); instead, a single peptide molecule engages both receptor systems.",
    },
    {
      type: "paragraph",
      text: "The amylin component is critical to understanding Amycretin's differentiation. Amylin is a 37-amino acid peptide co-secreted with insulin from pancreatic beta cells in response to meals. Endogenous amylin suppresses glucagon secretion, slows gastric emptying, and activates satiety circuits in the area postrema and nucleus tractus solitarius — brain regions outside the blood-brain barrier that respond to circulating peptides. Pramlintide, a synthetic amylin analog, received FDA approval for diabetes management based on these mechanisms but required multiple daily injections and had modest weight effects in isolation.",
    },
    {
      type: "heading",
      text: "Mechanism of Action: Dual Receptor Engagement",
    },
    {
      type: "subheading",
      text: "GLP-1 Receptor Component",
    },
    {
      type: "paragraph",
      text: "The GLP-1R arm of Amycretin activates pathways well-characterized from semaglutide research: cAMP-mediated insulin secretion potentiation, glucagon suppression, delayed gastric emptying, and central appetite suppression via hypothalamic GLP-1 receptor populations in the arcuate nucleus and paraventricular nucleus. Chronic GLP-1R agonism reduces food reward valuation and modulates dopaminergic signaling in mesolimbic circuits, contributing to reduced caloric intake independent of nausea.",
    },
    {
      type: "subheading",
      text: "Amylin Receptor Component",
    },
    {
      type: "paragraph",
      text: "The AMYR arm engages CTR/RAMP complexes predominantly in the area postrema, nucleus tractus solitarius, and lateral parabrachial nucleus — a complementary satiety network to the hypothalamic targets of GLP-1R. This anatomical distinction is significant: the two receptor systems activate overlapping but non-identical neural circuits, which may explain the additive or synergistic weight loss observed when both are engaged simultaneously.",
    },
    {
      type: "paragraph",
      text: "Preclinical data in diet-induced obese rodent models showed that combined GLP-1R/AMYR agonism produced greater reductions in body weight and adipose mass than either mechanism alone at weight-equivalent receptor occupancies. The interaction appears to involve enhanced c-Fos activation in hindbrain satiety nuclei compared to GLP-1R agonism alone.",
    },
    {
      type: "callout",
      text: "Key mechanistic point: Amycretin's amylin receptor component primarily targets the area postrema and nucleus tractus solitarius — circumventricular organs that sit outside the blood-brain barrier. This means amylin receptor agonism does not require CNS penetration to access its satiety targets, unlike some centrally-acting compounds.",
    },
    {
      type: "heading",
      text: "Clinical Data: Phase I and Phase II Findings",
    },
    {
      type: "subheading",
      text: "Phase I (NCT05585645)",
    },
    {
      type: "paragraph",
      text: "Novo Nordisk reported Phase I data for Amycretin in early 2024. In a single-ascending dose and multiple-ascending dose study in adults with overweight or obesity, oral Amycretin demonstrated dose-dependent pharmacokinetics with mean weight reductions of approximately 13% from baseline over 12 weeks at higher dose levels — a result described as exceeding what was observed with semaglutide oral formulations at comparable timepoints in historical trials.",
    },
    {
      type: "paragraph",
      text: "Notably, early Phase I data was conducted with an oral formulation (using absorption-enhancing technology similar to Rybelsus/oral semaglutide), and a subcutaneous formulation was subsequently advanced. The oral Phase I data at 12 weeks showed ~13% weight reduction, compared to approximately 3-4% seen with oral semaglutide at equivalent durations in earlier development — though cross-trial comparisons carry significant limitations.",
    },
    {
      type: "subheading",
      text: "Phase II (AMATI and AURORA Programs)",
    },
    {
      type: "paragraph",
      text: "Phase II trials for subcutaneous Amycretin (AMATI program) were initiated in 2024-2025, with data readouts expected through 2025-2026. The AURORA program explores the oral formulation. Early Phase II communications from Novo Nordisk indicated the compound was advancing based on acceptable safety and tolerability profiles, with the GI adverse event profile appearing consistent with the GLP-1 class — nausea, vomiting, reduced appetite — but not substantially worse.",
    },
    {
      type: "heading",
      text: "Differentiation from Existing Agents",
    },
    {
      type: "table",
      headers: ["Agent", "Receptor Targets", "Administration", "Peak Weight Loss (Phase III)"],
      rows: [
        ["Semaglutide (Wegovy)", "GLP-1R", "SC weekly", "~15-17%"],
        ["Tirzepatide (Zepbound)", "GLP-1R + GIPR", "SC weekly", "~20-22%"],
        ["Retatrutide", "GLP-1R + GIPR + GcgR", "SC weekly", "~24% (Phase II)"],
        ["Cagrilintide + Sema (CagriSema)", "AMYR + GLP-1R (separate molecules)", "SC weekly", "~22-25% (Phase III)"],
        ["Amycretin", "GLP-1R + AMYR (single molecule)", "SC or oral", "~13% at 12 wks (Phase I)"],
      ],
    },
    {
      type: "paragraph",
      text: "The single-molecule design of Amycretin has potential formulation and compliance advantages over co-administration of two separate compounds. It also allows for a single optimized half-life and pharmacokinetic profile, unlike combination regimens where the two agents may have incompatible half-lives requiring separate dosing schedules.",
    },
    {
      type: "heading",
      text: "Comparison with Cagrilintide + Semaglutide (CagriSema)",
    },
    {
      type: "paragraph",
      text: "Novo Nordisk is also developing CagriSema — a fixed-dose combination of cagrilintide (amylin analog) and semaglutide administered as separate molecules in a single injection. CagriSema Phase III (REDEFINE program) data showed approximately 22-25% weight loss at 68 weeks, significantly better than semaglutide alone.",
    },
    {
      type: "paragraph",
      text: "Amycretin represents an attempt to capture similar dual-receptor biology in a single molecule, potentially offering simpler manufacturing, more predictable pharmacokinetics, and easier regulatory characterization. Whether the efficacy ceiling differs between the combination approach (CagriSema) and the unimolecular approach (Amycretin) is an open research question.",
    },
    {
      type: "heading",
      text: "Preclinical Research Design Considerations",
    },
    {
      type: "paragraph",
      text: "Researchers studying dual GLP-1R/AMYR compounds should be aware of several design factors that affect experimental interpretation:",
    },
    {
      type: "list",
      items: [
        "Species differences in amylin receptor expression: Human and rodent RAMP2/3 expression patterns differ; effects in mouse models do not always predict AMYR-dependent effects in primate models",
        "Food restriction confound: Both GLP-1R and AMYR agonism reduce food intake; pair-feeding controls are essential to separate direct metabolic effects from caloric restriction effects",
        "Receptor tachyphylaxis: Chronic AMYR stimulation may show desensitization patterns distinct from GLP-1R; receptor internalization kinetics should be characterized in long-duration studies",
        "Injection site effects: SC peptide administration can produce local inflammatory responses that confound systemic readouts; use contralateral injection sites for multi-dose protocols",
        "Body composition endpoints: Weight change alone is insufficient; lean mass preservation must be assessed via DEXA or MRI in metabolic studies given known GLP-1R-associated lean mass losses at high doses",
      ],
    },
    {
      type: "heading",
      text: "Broader Context: The Dual and Triple Agonist Landscape",
    },
    {
      type: "paragraph",
      text: "Amycretin fits within a broader paradigm shift in metabolic peptide research: the recognition that multi-receptor co-agonism can achieve efficacy thresholds unattainable with single-target agents. GIP receptor co-agonism (tirzepatide) demonstrated this first at scale. Triple agonism (retatrutide, adding glucagon receptor) pushed further. The GLP-1R/AMYR axis represents a distinct second dimension — trading the metabolic rate effects of glucagon receptor co-agonism for enhanced hindbrain satiety signaling.",
    },
    {
      type: "paragraph",
      text: "Whether any of these approaches achieves superior long-term outcomes in real-world use — accounting for lean mass preservation, cardiovascular endpoints, and durability after discontinuation — remains an active area of investigation. The mechanistic diversity of the current pipeline suggests that different peptide architectures may be optimal for different patient phenotypes, a key question for precision metabolic medicine research.",
    },
    {
      type: "heading",
      text: "Handling and Storage",
    },
    {
      type: "paragraph",
      text: "As with other GLP-1-class peptides, Amycretin research-grade material should be stored lyophilized at -20°C, protected from light, and reconstituted in bacteriostatic water or sterile saline immediately before use. The dual-agonist structure does not alter standard peptide storage requirements, though researchers should verify lot-specific stability data in COA documentation from the supplier.",
    },
    {
      type: "divider",
    },
    {
      type: "disclaimer",
      text: "This article is for research and educational purposes only. Amycretin is an investigational compound under clinical development. It is not approved for human therapeutic use by any regulatory authority. All information refers to preclinical and early-phase clinical research contexts.",
    },
  ],
};
