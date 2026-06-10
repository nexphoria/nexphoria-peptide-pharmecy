import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "colivelin-s14g-humanin-potent-neuroprotective-peptide-research",
  title: "Colivelin and S14G-Humanin: Next-Generation Neuroprotective Mitochondria-Derived Peptides",
  description:
    "A research overview of Colivelin and S14G-Humanin — engineered derivatives of Humanin with substantially enhanced neuroprotective potency. Covers mechanism of action, Alzheimer's disease research findings, metabolic effects, and protocol design considerations.",
  category: "Compound Profiles",
  readMinutes: 10,
  publishedAt: "2026-06-10",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Humanin, the first mitochondria-derived peptide (MDP) identified, was discovered in 2001 from the mitochondrial 16S rRNA gene region and initially characterized for its neuroprotective effects against Alzheimer's disease-related insults. While Humanin itself has a substantial research history, two engineered analogs — S14G-Humanin and the chimeric peptide Colivelin — have demonstrated dramatically enhanced potency that has positioned them as preferred research tools in neuroprotection and longevity biology.",
    },
    {
      type: "heading",
      text: "Background: The Humanin System",
    },
    {
      type: "paragraph",
      text: "Humanin (HN) is a 21-amino acid peptide encoded within the mitochondrial genome — specifically within the 16S rRNA gene — making it one of the few examples of a mitochondrially-encoded peptide hormone. Circulating Humanin levels decline measurably with age across multiple species, including humans. This age-related decline has led researchers to investigate whether Humanin supplementation can counteract aging-associated vulnerability in target tissues — particularly the brain and cardiovascular system.",
    },
    {
      type: "paragraph",
      text: "The original Humanin peptide shows neuroprotective activity in cell culture and animal models, but its potency is relatively modest. Systematic structure-activity relationship (SAR) studies identified substitution of serine at position 14 with glycine as producing a dramatic potency increase — giving rise to S14G-Humanin (HNG), which is approximately 1,000-fold more potent than native Humanin in neuroprotection assays. This single amino acid substitution enhances binding to a key receptor component without changing the peptide's fundamental receptor pharmacology.",
    },
    {
      type: "heading",
      text: "Colivelin: A Chimeric Amplification Strategy",
    },
    {
      type: "paragraph",
      text: "Colivelin was engineered by Chiba et al. as a chimeric peptide combining activity-dependent neurotrophic factor (ADNF) — a STAT3-activating neuroprotective peptide — fused to the N-terminus of S14G-Humanin. The fusion creates a single peptide capable of engaging both the Humanin receptor system and STAT3 signaling simultaneously, producing synergistic neuroprotection that surpasses either component alone.",
    },
    {
      type: "paragraph",
      text: "The resulting compound demonstrates protection against Alzheimer's disease-related neuronal death at picomolar concentrations in cell culture — an extraordinarily low effective concentration that reflects both the potency of S14G-Humanin and the additive contribution of the ADNF-derived sequence. In animal models, Colivelin has shown efficacy at nanomolar doses that produce no measurable toxicity or behavioral side effects.",
    },
    {
      type: "heading",
      text: "Receptor Biology and Signaling",
    },
    {
      type: "subheading",
      text: "FPRL1 / FPR2 Receptor",
    },
    {
      type: "paragraph",
      text: "One of the primary receptors mediating Humanin-family signaling is FPRL1 (formyl peptide receptor-like 1), also known as FPR2. This G-protein coupled receptor is expressed in neurons, astrocytes, macrophages, and cardiovascular cells. FPRL1 activation by Humanin triggers Gi-coupled signaling: reduced cAMP, activation of PI3K/Akt, and suppression of pro-apoptotic cascades. S14G-Humanin and Colivelin retain this receptor interaction while showing enhanced binding affinity.",
    },
    {
      type: "subheading",
      text: "STAT3 Pathway Activation",
    },
    {
      type: "paragraph",
      text: "The ADNF component of Colivelin contributes STAT3 activation — a separate neuroprotective signaling axis from the Humanin/FPRL1 pathway. STAT3 in neurons promotes survival, mitochondrial biogenesis, and axonal regeneration. The combination of FPRL1-mediated Akt signaling with STAT3 activation creates a multi-pathway neuroprotective response that is mechanistically more robust than either pathway alone. This dual-pathway activity is the primary rationale for Colivelin's superior potency relative to S14G-Humanin.",
    },
    {
      type: "subheading",
      text: "Anti-Apoptotic Convergence",
    },
    {
      type: "paragraph",
      text: "Both S14G-Humanin and Colivelin converge on the same distal anti-apoptotic endpoints: suppression of cytochrome c release from mitochondria, reduced caspase-3 and caspase-9 activation, elevated Bcl-2:Bax ratio, and inhibition of truncated Bid (tBid) formation. These are hallmark markers of the intrinsic (mitochondrial) apoptosis pathway — the predominant death mechanism in Alzheimer's disease-related neurodegeneration and in ischemic injury.",
    },
    {
      type: "heading",
      text: "Alzheimer's Disease Research",
    },
    {
      type: "paragraph",
      text: "The original discovery context for Humanin was protection against Alzheimer's disease-related neuronal death, specifically death induced by familial AD mutations (APP, presenilin-1, presenilin-2 mutants) and by amyloid beta (Aβ) peptide exposure. S14G-Humanin and Colivelin have been studied extensively in this context.",
    },
    {
      type: "subheading",
      text: "Amyloid Beta Toxicity",
    },
    {
      type: "paragraph",
      text: "In cell culture models, Colivelin at picomolar concentrations (10⁻¹² M range) completely prevents neuronal death induced by Aβ(25-35) and Aβ(1-42) exposure. The mechanism involves STAT3 phosphorylation and Akt activation that countermand the apoptotic signaling initiated by amyloid beta receptor interactions. Crucially, Colivelin does not suppress Aβ production or aggregation — it acts downstream of amyloid pathology to prevent the final cell death step.",
    },
    {
      type: "subheading",
      text: "In Vivo Alzheimer's Model Findings",
    },
    {
      type: "paragraph",
      text: "In the intracerebroventricular Aβ infusion model (a common rodent AD model), Colivelin administration significantly improved spatial memory performance in Morris water maze and contextual fear conditioning tasks. Neuropathological analysis showed preserved hippocampal neuron density and reduced markers of tau phosphorylation in treated animals. The cognitive protection was dose-dependent and maintained over the duration of the treatment period.",
    },
    {
      type: "subheading",
      text: "Presenilin and APP Mutation Protection",
    },
    {
      type: "paragraph",
      text: "S14G-Humanin provides protection against cell death induced by expression of familial AD mutations (PS1-M146L, PS2-N141I, APP-V642I) in multiple cell types. This protection occurs even when the Humanin receptor is engaged after the mutant protein is already expressed — suggesting downstream rescue of apoptotic signaling rather than prevention of upstream mutant protein effects. This makes it a useful research tool for studying the cell death mechanisms in familial AD models specifically.",
    },
    {
      type: "heading",
      text: "Metabolic and Cardiovascular Research",
    },
    {
      type: "paragraph",
      text: "Both S14G-Humanin and Colivelin have been studied in metabolic and cardiovascular contexts — reflecting the broad tissue distribution of their receptors and the systemic decline of Humanin signaling with age.",
    },
    {
      type: "subheading",
      text: "Insulin Sensitivity",
    },
    {
      type: "paragraph",
      text: "Humanin and S14G-Humanin administration in diet-induced obese mouse models has shown improvements in insulin sensitivity, reduced hepatic glucose output, and improved glucose tolerance test results. The mechanism involves FPRL1-mediated signaling in hepatocytes and skeletal muscle that augments insulin receptor downstream signaling. Given that age-related Humanin decline coincides with metabolic deterioration, this raises the possibility that HN/S14G-HN research could inform insulin resistance biology beyond its neuroprotective application.",
    },
    {
      type: "subheading",
      text: "Cardiovascular Cytoprotection",
    },
    {
      type: "paragraph",
      text: "S14G-Humanin protects cardiomyocytes from ischemia-reperfusion injury in isolated heart preparations, reducing infarct size and improving post-ischemic contractile recovery. The FPRL1/Akt pathway is the predominant mechanism in cardiac tissue. These findings parallel those seen with other mitochondria-associated protective peptides (SS-31, MOTS-c) and suggest MDPs as a coherent research area for cardiovascular cytoprotection.",
    },
    {
      type: "heading",
      text: "Aging and Longevity Research Context",
    },
    {
      type: "paragraph",
      text: "Circulating Humanin levels in humans decline approximately 10-fold between young adulthood and old age based on available cross-sectional data. This decline correlates with cognitive decline markers, insulin resistance, and cardiovascular risk — though causality remains to be established. Centenarians in multiple population cohorts show higher circulating Humanin levels than age-matched controls, which has prompted speculation that Humanin maintenance may contribute to exceptional longevity.",
    },
    {
      type: "paragraph",
      text: "In C. elegans models, S14G-Humanin administration extends lifespan by approximately 30%. In mammalian aging studies, S14G-Humanin-treated animals show improvements in multiple aging biomarkers: IGF-1 signaling attenuation (associated with longevity in multiple models), reduced oxidative stress markers, and preserved mitochondrial function at older ages. These findings position S14G-Humanin and Colivelin as research tools within the broader MDP (mitochondria-derived peptide) longevity research framework alongside MOTS-c.",
    },
    {
      type: "heading",
      text: "Research Protocol Considerations",
    },
    {
      type: "table",
      headers: ["Parameter", "S14G-Humanin (HNG)", "Colivelin"],
      rows: [
        ["Amino acids", "21 (S→G at position 14)", "~35 (ADNF9 + S14G-HN fusion)"],
        ["Potency vs. native HN", "~1,000-fold greater", "~10,000-fold greater (cell culture)"],
        ["Primary receptor", "FPRL1/FPR2 + others", "FPRL1/FPR2 + STAT3 (dual pathway)"],
        ["Solubility", "Water-soluble", "Water-soluble"],
        ["In vivo routes studied", "ICV, IP, SC", "ICV, IP"],
        ["CNS penetration", "Limited — ICV preferred for direct CNS work", "Limited — ICV for CNS; IP shows systemic effects"],
        ["Metabolic effects", "Documented (insulin sensitivity)", "Less studied for metabolic endpoints"],
        ["Purity requirement", "HPLC ≥98%; mass spec confirmation", "HPLC ≥98%; sequence verification critical"],
      ],
    },
    {
      type: "heading",
      text: "Distinguishing S14G-Humanin from Colivelin: Choosing for Your Research",
    },
    {
      type: "paragraph",
      text: "S14G-Humanin is the better characterized compound for peripheral (non-CNS) research: metabolic, cardiovascular, and longevity endpoints in models where systemic administration is appropriate. Its FPRL1-mediated mechanism is well-documented, and its 1,000-fold potency increase over native Humanin makes it the practical choice for most in vivo work where native HN would require impractically high doses.",
    },
    {
      type: "paragraph",
      text: "Colivelin's extreme potency advantage is most relevant to cell culture work — where picomolar effective concentrations reduce cost and simplify dose-response experiments — and to CNS-focused in vivo studies where ICV administration allows the additional STAT3-activating ADNF component to operate directly in neural tissue. For mixed-mechanism research designs where dual-pathway activation is itself the experimental variable, Colivelin is the appropriate tool.",
    },
    {
      type: "heading",
      text: "Summary",
    },
    {
      type: "paragraph",
      text: "S14G-Humanin and Colivelin represent successive generations of engineered improvement on the naturally occurring mitochondria-derived neuroprotective peptide Humanin. S14G-Humanin's single amino acid substitution produces a 1,000-fold potency increase through enhanced receptor engagement. Colivelin's chimeric fusion of the ADNF-derived STAT3 activator with S14G-Humanin adds a second protective signaling pathway, pushing effective concentrations into the picomolar range. Together, these compounds are among the most potent neuroprotective peptides available as research tools, with the strongest evidence base in Alzheimer's disease models and growing data in metabolic and cardiovascular biology.",
    },
    {
      type: "disclaimer",
      text: "For research purposes only. Not intended for human use. All referenced findings are from pre-clinical research unless otherwise specified.",
    },
  ],
};
