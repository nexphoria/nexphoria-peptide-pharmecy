import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "unacylated-ghrelin-des-acyl-ghrelin-metabolic-research-guide",
  title: "Unacylated Ghrelin (Des-Acyl Ghrelin): The Other Ghrelin With Distinct Metabolic Biology",
  description:
    "A research-focused review of unacylated ghrelin (des-acyl ghrelin, DAG) — the predominant circulating form of ghrelin with insulin-sensitizing, cardioprotective, and anti-inflammatory effects distinct from acylated ghrelin. Covers mechanism, research findings, and the emerging therapeutic case.",
  category: "Compound Profiles",
  readMinutes: 10,
  publishedAt: "2026-06-10",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "When most researchers think of ghrelin, they think of the acylated form — the GHS-R1a-activating hunger hormone that stimulates GH release, increases appetite, and is mimicked by research peptides like GHRP-6, GHRP-2, and Ipamorelin. But the majority of circulating ghrelin in humans is not acylated. Approximately 80–90% of circulating ghrelin exists in the unacylated (des-acyl) form — a molecule that does not activate GHS-R1a and was long considered biologically inert.",
    },
    {
      type: "paragraph",
      text: "That assumption has been comprehensively revised. Unacylated ghrelin (UAG), also called des-acyl ghrelin (DAG), has its own distinct receptor system, its own signaling effects, and — critically — a metabolic profile that in several respects opposes acylated ghrelin. Understanding DAG biology is essential for interpreting ghrelin research, and the compound is increasingly studied as an independent therapeutic candidate.",
    },
    {
      type: "heading",
      text: "Structural Distinction from Acylated Ghrelin",
    },
    {
      type: "paragraph",
      text: "Ghrelin is a 28-amino acid peptide produced primarily in the stomach's oxyntic cells. The structural difference between the acylated (AG) and unacylated (DAG) forms is a single post-translational modification: the enzyme ghrelin O-acyltransferase (GOAT) adds an octanoyl (C8) fatty acid chain to serine at position 3 of the peptide. This n-octanoylation is essential for GHS-R1a binding — without it, the peptide cannot activate the canonical ghrelin receptor.",
    },
    {
      type: "paragraph",
      text: "DAG is identical to AG in amino acid sequence but lacks this acyl modification. The GOAT enzyme is the gatekeeper controlling the AG:DAG ratio in circulation. Nutritional state, dietary fat composition, and metabolic status all influence GOAT activity and the circulating AG:DAG balance. This ratio — not merely total ghrelin — is increasingly recognized as a relevant metabolic parameter.",
    },
    {
      type: "heading",
      text: "Receptor Biology: Not via GHS-R1a",
    },
    {
      type: "paragraph",
      text: "Since DAG does not bind GHS-R1a with meaningful affinity, its biological effects are mediated through a separate, incompletely characterized receptor system. Multiple candidate receptors have been identified:",
    },
    {
      type: "list",
      items: [
        "A distinct, as-yet-uncloned DAG-specific receptor — supported by evidence from studies showing DAG effects are not blocked by GHS-R1a antagonists",
        "CD36 — the scavenger receptor also engaged by Hexarelin; some DAG effects may be partially CD36-mediated",
        "GHS-R1a at high concentrations — DAG can bind GHS-R1a at supraphysiological concentrations and may modulate GHS-R1a activation by AG through a partial agonist or allosteric mechanism",
        "A putative receptor on pancreatic beta cells — DAG effects on insulin secretion appear receptor-mediated but the precise receptor identity remains under investigation",
      ],
    },
    {
      type: "paragraph",
      text: "The incomplete receptor characterization is a current limitation in DAG research and a reason why mechanistic interpretation of in vivo findings requires care. Effects attributable to 'DAG' may reflect multiple receptor systems with different tissue distributions.",
    },
    {
      type: "heading",
      text: "Opposing Actions: DAG vs. Acylated Ghrelin",
    },
    {
      type: "paragraph",
      text: "One of the most striking aspects of DAG biology is that it frequently opposes the metabolic effects of AG — despite sharing an identical amino acid sequence. This functional antagonism occurs even though DAG does not directly block GHS-R1a.",
    },
    {
      type: "table",
      headers: ["Effect", "Acylated Ghrelin (AG)", "Unacylated Ghrelin (DAG)"],
      rows: [
        ["GH secretion", "Stimulates (GHS-R1a)", "No direct effect"],
        ["Appetite / food intake", "Increases (GHS-R1a)", "Neutral or reduces"],
        ["Insulin secretion", "Inhibits beta cell secretion", "Stimulates or neutral"],
        ["Insulin sensitivity", "Reduces (promotes IR)", "Improves"],
        ["Fat utilization", "Promotes fat deposition", "Promotes fat oxidation"],
        ["Blood glucose", "Raises (via insulin inhibition)", "Lowers or neutral"],
        ["Cardiac effects", "GHS-R1a mediated (inotropy)", "Cardioprotective (independent mechanism)"],
        ["Anti-inflammatory", "Modest anti-inflammatory", "Robust anti-inflammatory"],
      ],
    },
    {
      type: "heading",
      text: "Metabolic Research Findings",
    },
    {
      type: "subheading",
      text: "Insulin Sensitivity and Glucose Metabolism",
    },
    {
      type: "paragraph",
      text: "The most reproduced metabolic finding with DAG is improvement in insulin sensitivity. In diet-induced obese (DIO) mouse models, chronic DAG administration reduces fasting insulin, improves glucose tolerance on oral glucose tolerance tests (OGTT), and reduces hepatic glucose output. The mechanism appears to involve enhanced insulin receptor signaling in skeletal muscle and liver — possibly through activation of AMPK and IRS-1/PI3K pathways.",
    },
    {
      type: "paragraph",
      text: "In Zucker diabetic fatty rats (a model of type 2 diabetes and obesity), DAG treatment significantly improved insulin-stimulated glucose uptake in skeletal muscle and reduced visceral adiposity. These effects occurred without the GH elevation that would complicate interpretation of AG or GHS-R1a agonist data — a methodological advantage for researchers specifically studying insulin-independent metabolic pathways.",
    },
    {
      type: "subheading",
      text: "Body Composition Effects",
    },
    {
      type: "paragraph",
      text: "While AG promotes adipogenesis and fat storage (particularly visceral fat), DAG research has consistently shown the opposite: reduced fat mass, increased lean mass relative to controls, and preferential fat oxidation in energy balance studies. These effects appear GHS-R1a-independent — they are preserved in GHS-R1a knockout mouse models and are not blocked by GHS-R1a antagonism.",
    },
    {
      type: "paragraph",
      text: "Human observational data aligns with this pre-clinical picture: higher DAG:AG ratios correlate with lower BMI, reduced visceral adiposity, and better insulin sensitivity in population studies. Whether this reflects causality (DAG protects against obesity) or reverse causality (metabolically healthier individuals have higher GOAT suppression) remains an open research question.",
    },
    {
      type: "subheading",
      text: "Pancreatic Beta Cell Function",
    },
    {
      type: "paragraph",
      text: "AG is known to suppress glucose-stimulated insulin secretion (GSIS) — a relevant mechanism in postprandial glucose dysregulation. DAG does not suppress GSIS and may modestly enhance it in some models. More importantly, DAG protects beta cells from lipotoxicity and cytokine-induced apoptosis in vitro. Given that pancreatic beta cell mass preservation is a central challenge in both type 1 and type 2 diabetes research, this cytoprotective effect positions DAG as a complement to GLP-1 receptor agonist research in beta cell biology.",
    },
    {
      type: "heading",
      text: "Cardiovascular Research",
    },
    {
      type: "paragraph",
      text: "DAG has been studied in ischemia-reperfusion models and heart failure models with results suggesting GHS-R1a-independent cardioprotection. In isolated heart preparations, DAG pretreatment reduces infarct size following ischemic insult. Proposed mechanisms include:",
    },
    {
      type: "list",
      items: [
        "Activation of anti-apoptotic signaling in cardiomyocytes (Akt, ERK phosphorylation)",
        "Reduction of mitochondrial permeability transition pore (mPTP) opening during reperfusion — a key driver of I/R cell death",
        "Anti-inflammatory reduction of TNF-α and IL-6 in cardiac tissue post-ischemia",
        "Possible CD36-mediated fatty acid metabolism optimization in the ischemic heart",
      ],
    },
    {
      type: "paragraph",
      text: "These cardiac effects are not blocked by GHS-R1a antagonists, confirming they are not mediated through the acylated ghrelin pathway. This makes DAG a useful comparator in GHS-R1a research to deconvolute receptor-specific from receptor-independent effects of ghrelin biology in cardiac tissue.",
    },
    {
      type: "heading",
      text: "Anti-Inflammatory Effects",
    },
    {
      type: "paragraph",
      text: "DAG demonstrates potent anti-inflammatory effects in multiple models. In LPS-induced sepsis models, DAG reduces circulating TNF-α, IL-6, and IL-1β and improves survival. In joint inflammation models, DAG decreases synovial inflammation and cartilage degradation markers. In CNS neuroinflammation models, DAG reduces microglial activation and pro-inflammatory cytokine production.",
    },
    {
      type: "paragraph",
      text: "The anti-inflammatory mechanism is not fully characterized but appears to involve NF-κB pathway suppression and modulation of macrophage polarization toward an anti-inflammatory M2 phenotype. Interestingly, some of AG's anti-inflammatory effects are also present — suggesting both ghrelin forms may have parallel anti-inflammatory activity through different receptor systems, while diverging sharply on metabolic endpoints.",
    },
    {
      type: "heading",
      text: "The GOAT Enzyme: Research Implications",
    },
    {
      type: "paragraph",
      text: "Ghrelin O-acyltransferase (GOAT) — the enzyme that converts DAG to AG — is itself an increasingly studied research target. GOAT inhibitors that shift the AG:DAG balance toward DAG have been proposed as metabolic intervention tools. In GOAT knockout mice, which cannot produce acylated ghrelin at all, animals show improved glucose tolerance and resistance to diet-induced obesity despite no change in total ghrelin levels — providing strong genetic evidence that AG:DAG balance matters for metabolic outcomes.",
    },
    {
      type: "paragraph",
      text: "For researchers studying metabolic disease: DAG and GOAT together represent an underexplored axis of ghrelin biology. DAG as a research compound and GOAT inhibitors as complementary tools offer a means to study the metabolic consequences of shifting the ghrelin system from its acylated toward its unacylated predominant form.",
    },
    {
      type: "heading",
      text: "Research Protocol Considerations",
    },
    {
      type: "table",
      headers: ["Parameter", "Notes"],
      rows: [
        ["Molecular weight", "3,161.7 g/mol (28 amino acids, no acyl modification)"],
        ["Solubility", "Water-soluble; reconstitute in sterile PBS or saline"],
        ["Stability", "Lyophilized: stable at -20°C; solution: use promptly, 2–8°C for short-term"],
        ["Key distinction from AG", "No GHS-R1a activity; does not elevate GH; GHS-R1a antagonists do not block its effects"],
        ["In vivo routes studied", "Subcutaneous, intraperitoneal, intravenous"],
        ["Interpretation caution", "Receptor not fully characterized; some effects may be multi-receptor"],
        ["Useful controls", "AG (positive control for GHS-R1a effects); GHS-R1a antagonist to confirm receptor independence"],
        ["Purity requirement", "HPLC ≥98%; mass spec essential to confirm absence of acyl modification"],
      ],
    },
    {
      type: "heading",
      text: "DAG in the GLP-1 Era",
    },
    {
      type: "paragraph",
      text: "The rise of GLP-1 receptor agonists as the dominant pharmacological approach to metabolic disease has, ironically, increased research interest in alternative metabolic peptide targets like DAG. The limitations of GLP-1 agonists — including the muscle mass loss associated with rapid weight reduction, the requirement for continuous administration to maintain effects, and non-responder populations — create scientific space for investigating complementary mechanisms.",
    },
    {
      type: "paragraph",
      text: "DAG's insulin-sensitizing, fat-oxidation-promoting, and beta cell-protective effects are mechanistically distinct from GLP-1 receptor agonism. In preclinical models combining DAG with GLP-1 pathway activation, additive or synergistic metabolic effects have been observed. This positions DAG as a potentially valuable component of combination metabolic research protocols rather than a standalone alternative.",
    },
    {
      type: "heading",
      text: "Summary",
    },
    {
      type: "paragraph",
      text: "Unacylated ghrelin (des-acyl ghrelin) represents the predominant circulating form of ghrelin and has a biology fundamentally distinct from — and in several respects opposite to — its acylated counterpart. Its GHS-R1a-independent effects include improved insulin sensitivity, enhanced fat oxidation, pancreatic beta cell cytoprotection, cardioprotection against ischemia-reperfusion injury, and potent anti-inflammatory activity. The incompletely characterized receptor system is a current limitation, but the consistency of DAG's metabolic effects across multiple in vivo models and the human observational data supporting favorable AG:DAG ratios create a compelling research rationale. For investigators working in metabolic disease, cardiovascular biology, or ghrelin system research, DAG is an underutilized tool with mechanistic properties that GHS-R1a agonists cannot replicate.",
    },
    {
      type: "disclaimer",
      text: "For research purposes only. Not intended for human use. All referenced findings are from pre-clinical research unless otherwise specified.",
    },
  ],
};
