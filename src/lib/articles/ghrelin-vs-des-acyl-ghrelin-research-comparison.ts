import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "ghrelin-vs-des-acyl-ghrelin-research-comparison",
  title: "Ghrelin vs. Des-Acyl Ghrelin: What the Research Says",
  description:
    "Acylated ghrelin and des-acyl ghrelin (unacylated ghrelin) are structurally related but functionally distinct peptide hormones. A research-focused comparison of their receptor pharmacology, metabolic effects, and divergent roles in energy homeostasis and cytoprotection.",
  category: "Compound Profiles",
  readMinutes: 9,
  publishedAt: "2026-06-10",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Ghrelin was identified in 1999 by Kojima et al. as the endogenous ligand for the growth hormone secretagogue receptor (GHS-R1a). What made ghrelin structurally unusual — and immediately interesting to researchers — was its obligate acylation: a medium-chain fatty acid (octanoyl group, C8:0) attached to serine-3 via an ester bond. This modification, catalyzed by the enzyme GOAT (ghrelin O-acyltransferase), is required for GHS-R1a binding and the classical ghrelin effects on GH release and appetite.",
    },
    {
      type: "paragraph",
      text: "Des-acyl ghrelin (DAG) — also called unacylated ghrelin — is the same 28-amino acid peptide sequence without the octanoylation. It circulates at significantly higher concentrations than acylated ghrelin (approximately 3–5x), yet was long dismissed as biologically inactive because it does not bind GHS-R1a at physiologically relevant concentrations. This assumption has since been overturned. Des-acyl ghrelin has well-documented biological activity — mediated through distinct receptor systems — with effects that are in some cases complementary to and in others opposite to acylated ghrelin.",
    },
    {
      type: "heading",
      text: "Structure and Processing",
    },
    {
      type: "paragraph",
      text: "Both forms derive from preproghrelin, a 117-amino acid precursor. Following cleavage of the signal peptide, proghrelin (94 AA) undergoes GOAT-mediated acylation at Ser-3 before proteolytic processing to mature ghrelin (28 AA). In the absence of acylation — or following deacylation by circulating esterases — des-acyl ghrelin results. The two forms therefore share identical primary sequence and differ only in the presence or absence of the fatty acid modification.",
    },
    {
      type: "paragraph",
      text: "Plasma half-life of acylated ghrelin is short (approximately 30 minutes), and rapid deacylation by butyrylcholinesterase and paraoxonase-1 in plasma continuously converts acylated to des-acyl ghrelin. This conversion means the ratio of acylated:total ghrelin is a dynamic metric influenced by feeding state, metabolic status, and enzymatic activity.",
    },
    {
      type: "heading",
      text: "Receptor Pharmacology",
    },
    {
      type: "subheading",
      text: "Acylated Ghrelin: GHS-R1a",
    },
    {
      type: "paragraph",
      text: "Acylated ghrelin binds GHS-R1a with nanomolar affinity. GHS-R1a is a constitutively active GPCR expressed in the hypothalamus (particularly the arcuate nucleus), pituitary, vagal afferents, pancreas, and heart. Key downstream effects via GHS-R1a include: growth hormone secretion from somatotropes; activation of NPY/AgRP neurons to stimulate appetite; modulation of the reward system via dopaminergic projections; and insulin secretion modulation in pancreatic beta cells.",
    },
    {
      type: "paragraph",
      text: "GHS-R1a has notable constitutive activity — it signals at 50% of maximal capacity in the absence of agonist. This high basal activity means GHS-R1a inverse agonists can suppress signaling below baseline, complicating interpretation of pharmacological studies that use only antagonists.",
    },
    {
      type: "subheading",
      text: "Des-Acyl Ghrelin: Non-GHS-R1a Mechanisms",
    },
    {
      type: "paragraph",
      text: "Des-acyl ghrelin's receptor(s) remain incompletely characterized — one of the open questions in ghrelin biology. Multiple lines of evidence support the existence of one or more distinct receptors or co-receptors for DAG: (1) DAG produces biological effects in GHS-R1a knockout animals; (2) DAG and acylated ghrelin have opposing effects on several endpoints (e.g., cell survival, insulin sensitivity) that cannot be explained by GHS-R1a competition alone; (3) DAG binds membrane preparations from tissues with low or absent GHS-R1a expression.",
    },
    {
      type: "paragraph",
      text: "Proposed DAG receptors include: a splice variant of GHS-R (GHS-R1b), which lacks the ability to bind acylated ghrelin but may mediate some DAG effects; CD36, a scavenger receptor with documented interactions with acylated lipid ligands; and an uncharacterized GPCR provisionally termed the 'DAG receptor.' Research has not yet converged on a single receptor identity, and multiple parallel mechanisms may operate in different tissue contexts.",
    },
    {
      type: "heading",
      text: "Metabolic Effects: Divergence and Convergence",
    },
    {
      type: "subheading",
      text: "Appetite and Energy Balance",
    },
    {
      type: "paragraph",
      text: "Acylated ghrelin is a potent orexigenic signal — peripheral or central administration in rodents robustly increases food intake and promotes adiposity. It suppresses fat utilization while promoting fat storage. These effects are GHS-R1a mediated and involve hypothalamic NPY/AgRP neurons.",
    },
    {
      type: "paragraph",
      text: "Des-acyl ghrelin, by contrast, has been reported to have anorectic or appetite-neutral effects in multiple studies. Some research groups have found DAG administration reduces food intake or body weight in animal models, while others find minimal effect. The appetite-opposing relationship between the two forms suggests a potential endogenous counterregulatory system where the ratio of acylated:des-acyl ghrelin — rather than either form alone — may be the functionally relevant signal.",
    },
    {
      type: "subheading",
      text: "Insulin Sensitivity and Glucose Metabolism",
    },
    {
      type: "paragraph",
      text: "Acylated ghrelin impairs insulin sensitivity and promotes hyperglycemia in preclinical models. It reduces glucose-stimulated insulin secretion from beta cells at high concentrations and promotes gluconeogenesis. Obese and insulin-resistant states are associated with altered ghrelin secretion patterns.",
    },
    {
      type: "paragraph",
      text: "Des-acyl ghrelin produces the opposite effect: multiple studies report improved insulin sensitivity, enhanced glucose uptake in muscle and adipose tissue, and protective effects on pancreatic beta cell survival in models of glucotoxicity and lipotoxicity. This insulin-sensitizing action of DAG has generated research interest in the context of type 2 diabetes and metabolic syndrome models.",
    },
    {
      type: "subheading",
      text: "Cardiovascular and Cytoprotective Effects",
    },
    {
      type: "paragraph",
      text: "Both forms demonstrate cardiovascular and cytoprotective activity, though through different mechanisms. Acylated ghrelin has documented cardioprotective effects in ischemia-reperfusion models, mediated in part through GHS-R1a-dependent activation of PI3K/Akt survival pathways. It improves cardiac output and reduces apoptotic markers after myocardial injury in rodent studies.",
    },
    {
      type: "paragraph",
      text: "Des-acyl ghrelin also shows cytoprotective effects — in cardiomyocytes, endothelial cells, and neurons — through mechanisms involving PI3K/Akt and MAPK activation independent of GHS-R1a. In some models, DAG demonstrates superior anti-apoptotic potency compared to the acylated form. DAG has additionally been studied for anti-fibrotic effects in cardiac and renal tissue.",
    },
    {
      type: "heading",
      text: "CNS Research",
    },
    {
      type: "paragraph",
      text: "Ghrelin crosses the blood-brain barrier and exerts central effects on GH-secreting cells, hypothalamic energy circuits, and the reward/motivation system. Its role in hedonic feeding — promoting intake of palatable foods beyond caloric need — has been studied using GHS-R1a knockout models and pharmacological blockers.",
    },
    {
      type: "paragraph",
      text: "Des-acyl ghrelin's CNS penetration and central effects are less characterized. Some evidence suggests DAG has anxiolytic properties in rodent models, potentially through mechanisms distinct from the HPA axis modulation that acylated ghrelin affects. Stress-induced elevation of acylated ghrelin is well-documented; whether a parallel DAG response exists and what its functional significance is remains an active research question.",
    },
    {
      type: "heading",
      text: "Research Tools and GOAT Inhibitors",
    },
    {
      type: "paragraph",
      text: "GOAT (ghrelin O-acyltransferase) inhibitors have been developed as research tools to selectively suppress acylated ghrelin production while leaving total ghrelin (predominantly DAG) intact. These compounds — including bisubstrate analogs like GO-CoA-Tat and small molecule inhibitors — allow researchers to dissect the physiological contributions of acylated vs. unacylated ghrelin in intact animal models without receptor-level interventions that affect other ligands.",
    },
    {
      type: "paragraph",
      text: "Complementarily, GHS-R1a antagonists (e.g., [D-Lys-3]-GHRP-6, YIL781, GHRP-6 analogs with reduced efficacy) selectively block acylated ghrelin's GHS-R1a-mediated effects, while leaving DAG receptor signaling intact. Used together, GOAT inhibitors and GHS-R1a antagonists provide powerful tools for isolating the contribution of each ghrelin form to a given biological endpoint.",
    },
    {
      type: "heading",
      text: "Sourcing and Handling",
    },
    {
      type: "paragraph",
      text: "Acylated ghrelin is commercially available as a lyophilized research peptide but requires careful handling: the octanoyl group at Ser-3 is labile and can be cleaved by esterases present in serum and in poorly prepared aqueous solutions. For in vivo administration, fresh reconstitution and ice-cold solutions reduce deacylation. Adding a protease inhibitor cocktail to collection tubes is standard for plasma ghrelin quantification to preserve the acylated fraction for assay.",
    },
    {
      type: "paragraph",
      text: "Des-acyl ghrelin is more chemically stable and does not require the same anti-esterase precautions. Both forms should be sourced with HPLC purity ≥98%, mass spectrometry confirmation (acylated ghrelin: 3370.9 Da; des-acyl ghrelin: 3157.6 Da), and endotoxin testing documentation for in vivo applications.",
    },
    {
      type: "divider",
    },
    {
      type: "disclaimer",
      text: "For research purposes only. Not intended for human use or administration.",
    },
  ],
};
