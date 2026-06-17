import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "vk2735-viking-therapeutics-glp1-gip-dual-agonist-research-guide",
  title: "VK2735: Viking Therapeutics' GLP-1/GIP Dual Agonist — Research Guide 2026",
  description:
    "VK2735 is a subcutaneous and oral dual GLP-1/GIP receptor agonist from Viking Therapeutics currently in Phase III development for obesity. This guide covers VK2735's receptor pharmacology, Phase II VENTURE trial data, subcutaneous vs oral formulation differences, comparison to tirzepatide, and what preclinical amylin/incretin research tools are available while VK2735 remains a clinical-stage proprietary compound.",
  category: "Compound Profiles",
  readMinutes: 11,
  publishedAt: "2026-06-17",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "VK2735 is Viking Therapeutics' (Nasdaq: VKTX) dual GLP-1 receptor (GLP-1R) and GIP receptor (GIPR) agonist, developed as a once-weekly subcutaneous injection and — in a parallel oral formulation program — potentially a once-daily oral agent for obesity and metabolic disease. The compound generated substantial investor and clinical attention following results from its Phase II VENTURE trial (subcutaneous formulation, 2024) showing approximately 14.7% mean placebo-subtracted weight loss at 13 weeks with the highest dose, and Phase II oral formulation data (2025) showing roughly 8.2% placebo-subtracted weight loss at 28 days — remarkable for an oral GLP-1 class drug. This guide explains VK2735's mechanism, the available trial data, how it compares to tirzepatide (Eli Lilly's approved dual agonist), and the research landscape for peptide scientists working on GLP-1/GIP axis biology."
    },
    {
      type: "heading",
      text: "Mechanism: Dual GLP-1R and GIPR Agonism"
    },
    {
      type: "paragraph",
      text: "VK2735 is a synthetic peptide engineered to simultaneously activate two incretin hormone receptors: the glucagon-like peptide-1 receptor (GLP-1R) and the glucose-dependent insulinotropic polypeptide receptor (GIPR). This dual mechanism mirrors tirzepatide's approach — and departs from semaglutide or liraglutide, which act selectively on GLP-1R alone."
    },
    {
      type: "subheading",
      text: "GLP-1R Agonism: Satiety, Gastric Emptying, Insulin Secretion"
    },
    {
      type: "paragraph",
      text: "GLP-1 (glucagon-like peptide-1) is released from intestinal L-cells in response to nutrient ingestion. Its receptor, GLP-1R, is expressed in the pancreatic β-cells, hypothalamus, brainstem, vagal afferents, and peripheral tissues. GLP-1R activation in the pancreas drives glucose-dependent insulin secretion and suppresses glucagon. In the CNS — particularly the nucleus of the solitary tract (NTS) and hypothalamic arcuate nucleus — it reduces food intake by enhancing satiety signals and inhibiting appetite circuits. It also slows gastric emptying, which contributes to both caloric reduction and the nausea side effects characteristic of the class."
    },
    {
      type: "subheading",
      text: "GIPR Agonism: Adipose Tissue, Glucagon Modulation, and the GIP Paradox"
    },
    {
      type: "paragraph",
      text: "GIP (glucose-dependent insulinotropic polypeptide) is released from intestinal K-cells, predominantly in the duodenum and proximal jejunum. GIPR is expressed in pancreatic β-cells, adipose tissue, bone, and the central nervous system. The physiological role of GIPR agonism in the context of obesity pharmacology is still being clarified — it was historically considered pro-lipogenic in adipose tissue, which led to GIPR antagonism being explored as a weight-loss strategy. However, tirzepatide and now VK2735's Phase II results demonstrate that high-dose GIPR agonism in combination with GLP-1R activation produces greater weight loss than GLP-1R alone — suggesting that supraphysiological GIPR agonism may create distinct metabolic effects distinct from native GIP signaling. Proposed mechanisms include increased thermogenesis via brown adipose tissue (BAT) activation, enhancement of GLP-1R-driven satiety signaling through GIPR co-activation in the hypothalamus, and modulation of glucagon secretion that differs from pure GLP-1R agonism."
    },
    {
      type: "heading",
      text: "Phase II VENTURE Trial: Subcutaneous VK2735"
    },
    {
      type: "paragraph",
      text: "The VENTURE trial was a 13-week randomized, double-blind, placebo-controlled Phase II trial of subcutaneous VK2735 in participants with obesity or overweight with at least one weight-related comorbidity (BMI ≥ 30, or BMI ≥ 27 with qualifying condition). The trial tested multiple dose levels of VK2735 administered once weekly by subcutaneous injection, titrated over the treatment period."
    },
    {
      type: "table",
      headers: ["VK2735 SC Dose", "Placebo-Subtracted Weight Loss at 13 Weeks", "% Achieving ≥15% Weight Loss", "Discontinuation Rate"],
      rows: [
        ["Low dose", "~8.1%", "~23%", "~5%"],
        ["Mid dose", "~12.6%", "~47%", "~9%"],
        ["High dose", "~14.7%", "~58%", "~15%"],
        ["Placebo", "—", "—", "~3%"]
      ]
    },
    {
      type: "paragraph",
      text: "The 13-week timeline is important context: tirzepatide (SURMOUNT-1) achieved approximately 20.9% weight loss over 72 weeks. Projecting VK2735's trajectory to 52+ weeks based on the 13-week inflection suggests competitive long-term efficacy, particularly at higher doses. Viking initiated the Phase III VENTURE-3 trial for the subcutaneous formulation in late 2025, with results expected in 2027."
    },
    {
      type: "heading",
      text: "Oral VK2735: Phase II Data and Formulation Science"
    },
    {
      type: "paragraph",
      text: "The oral formulation of VK2735 represents a separate development program with distinct pharmaceutical challenges. Peptides have low oral bioavailability due to enzymatic degradation in the GI tract, low permeability across intestinal epithelium, and rapid first-pass hepatic metabolism. Viking's oral VK2735 program employs absorption-enhancing technology (reported to involve sodium caprate or a similar GRAS permeation enhancer) to improve paracellular transport across the intestinal barrier."
    },
    {
      type: "paragraph",
      text: "Phase II data (2025, 28-day trial) showed approximately 8.2% placebo-subtracted weight loss at the highest dose — exceeding Phase II semaglutide oral (Rybelsus) data over comparable early timepoints and approaching the signal seen with danuglipron at 28 days. Unlike some oral small-molecule GLP-1 mimetics (danuglipron, orforglipron), oral VK2735 remains a peptide — meaning it preserves the full receptor activation profile of the parent molecule but requires co-administration with specific timing (likely fasted state with 120 mL of water) to optimize absorption."
    },
    {
      type: "heading",
      text: "VK2735 vs Tirzepatide: Side-by-Side Comparison"
    },
    {
      type: "table",
      headers: ["Feature", "VK2735 (SC)", "Tirzepatide (Zepbound/Mounjaro)", "Semaglutide (Wegovy)"],
      rows: [
        ["Target receptors", "GLP-1R + GIPR (dual)", "GLP-1R + GIPR (dual)", "GLP-1R only"],
        ["Dosing schedule", "Once weekly SC (Phase III)", "Once weekly SC (approved)", "Once weekly SC (approved)"],
        ["Highest phase II weight loss (placebo-sub.)", "~14.7% at 13 weeks", "~21% at 72 weeks (Phase III)", "~15% at 68 weeks (Phase III)"],
        ["Molecule class", "Synthetic peptide", "Synthetic peptide (twincretin)", "GLP-1 analog"],
        ["Oral formulation", "Phase II program ongoing", "Oral tirzepatide Phase III (ELEVATE)", "Rybelsus (approved, 3-14 mg/day oral)"],
        ["FDA approval status", "Phase III (VENTURE-3)", "Approved (obesity + T2D)", "Approved (obesity + T2D)"],
        ["Company", "Viking Therapeutics", "Eli Lilly", "Novo Nordisk"]
      ]
    },
    {
      type: "heading",
      text: "Is VK2735 Available for Research?"
    },
    {
      type: "paragraph",
      text: "VK2735 is Viking Therapeutics' proprietary clinical compound. Its full sequence has not been disclosed in peer-reviewed literature; the compound is protected as a trade secret through the clinical development process. No research peptide supplier can synthesize the authentic VK2735 molecule without the verified sequence, and any listing claiming to sell 'VK2735 for research' is selling an undisclosed or misrepresented compound."
    },
    {
      type: "paragraph",
      text: "For researchers working on GLP-1/GIP axis biology, the following well-characterized tool compounds provide full coverage of the relevant pharmacology with published sequences, established preclinical protocols, and COA-verified sourcing from reputable suppliers."
    },
    {
      type: "heading",
      text: "GLP-1R and GIPR Research Tool Compounds (Available)"
    },
    {
      type: "table",
      headers: ["Compound", "Primary Target(s)", "Research Use", "Availability"],
      rows: [
        ["Semaglutide", "GLP-1R", "Gold standard GLP-1R agonism reference; DIO mouse models, islet biology, CNS feeding circuits", "Available from verified suppliers; COA required"],
        ["Liraglutide", "GLP-1R", "Shorter half-life GLP-1R reference; cardioprotection studies, neural GLP-1R mapping", "Available; validated in numerous protocols"],
        ["Exendin-4 (exenatide)", "GLP-1R", "Classic GLP-1R agonist; widely used in insulinotropic and neuronal studies", "Available; very well-characterized"],
        ["Tirzepatide", "GLP-1R + GIPR", "Dual agonist reference; body composition studies, insulin sensitization, brown adipose tissue", "Research quantities available from peptide suppliers"],
        ["GIP (1-42)", "GIPR", "Native GIP; receptor binding studies, adipose GIPR biology, pancreatic function", "Available; unstable — handle with care"],
        ["[D-Ala2]-GIP", "GIPR", "Stable GIP analog; GIPR agonist reference for longer-duration experiments", "Available from specialized biochemical suppliers"],
        ["Exendin (9-39)", "GLP-1R (antagonist)", "GLP-1R competitive antagonist; use to isolate GIPR contribution in dual agonist experiments", "Available; critical for mechanistic dissection"]
      ]
    },
    {
      type: "heading",
      text: "Designing Preclinical Dual Agonist Studies Without VK2735"
    },
    {
      type: "paragraph",
      text: "To model VK2735's pharmacology in preclinical research, tirzepatide is the appropriate proxy — it is structurally related (also a dual GLP-1R/GIPR agonist peptide), available with verified COA, and has an extensive published preclinical literature including DIO (diet-induced obesity) mouse and rat protocols. The key parameters for preclinical dual agonist dosing in rodents: tirzepatide is typically used at 0.03–1 mg/kg SC in mice, once or twice weekly, with DIO C57BL/6J mice as the standard model. Body composition by EchoMRI, OGTT/ITT for glycemic endpoints, and histology for hepatic steatosis are standard readouts."
    },
    {
      type: "callout",
      text: "Preclinical note: GIP receptor expression differs significantly between humans, mice, and rats. GIPR is well-expressed in murine adipose tissue but the β-cell expression profile and hypothalamic distribution have species-specific differences. Results from rodent GIPR agonism do not translate linearly to human outcomes — this is one reason the 'GIP paradox' (agonism vs antagonism debate) has been difficult to resolve from rodent data alone."
    },
    {
      type: "heading",
      text: "COA Standards for Incretin Peptide Research"
    },
    {
      type: "paragraph",
      text: "GLP-1/GIP axis peptides used in research should meet the following minimum COA standards: HPLC purity ≥ 98% with a chromatogram showing a single dominant peak and quantified minor impurity peaks; mass spectrometry (ESI-MS or MALDI-MS) confirming molecular weight within ±0.1 Da of theoretical; endotoxin testing (LAL) showing < 1 EU/mg for in vitro work, < 0.5 EU/mg for in vivo injection studies; and peptide content ≥ 95% by amino acid analysis or quantitative NMR. For semaglutide, tirzepatide, and other modified/acylated analogs, the COA should additionally confirm the fatty acid chain and any unnatural amino acid substitutions via MS/MS fragmentation analysis."
    },
    {
      type: "heading",
      text: "Summary"
    },
    {
      type: "paragraph",
      text: "VK2735 is a promising clinical-stage dual GLP-1R/GIPR agonist with compelling Phase II weight-loss data — potentially the most efficacious obesity drug candidate in its class based on early-timepoint results. It is not available for research use as a peptide supplier product. Researchers working on dual incretin pharmacology should use tirzepatide as the established preclinical reference compound, supported by selective tools including exendin-4, GIP analogs, and exendin (9-39) for mechanistic dissection. All compounds should be sourced with full COA documentation including HPLC purity ≥ 98% and MS confirmation."
    },
    {
      type: "disclaimer",
      text: "VK2735 and all compounds referenced in this article are for preclinical research only. This article is for informational purposes. Nothing here constitutes medical advice or clinical guidance. VK2735 is not approved by any regulatory authority as of the publication date of this article."
    }
  ]
};
