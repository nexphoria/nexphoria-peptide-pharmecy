import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "cagrilintide-semaglutide-cagrima-combination-research-guide",
  title: "CagriSema: Cagrilintide + Semaglutide Combination Research Guide (2026)",
  description:
    "CagriSema is a fixed-ratio combination of cagrilintide (amylin analog) and semaglutide (GLP-1 agonist) currently in Phase 3 trials. This research guide covers the dual mechanism, REDEFINE trial data, and what researchers need to know about this next-generation metabolic compound.",
  category: "Compound Profiles",
  readMinutes: 10,
  publishedAt: "2026-06-10",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "CagriSema — the investigational fixed-ratio combination of cagrilintide (an amylin analog) and semaglutide (a GLP-1 receptor agonist) — represents one of the most significant developments in metabolic research compounds of the past decade. By targeting two distinct appetite-regulating pathways simultaneously, CagriSema has demonstrated weight loss efficacy substantially exceeding that of either agent alone in Phase 2 studies.",
    },
    {
      type: "heading",
      text: "Pharmacological Background",
    },
    {
      type: "subheading",
      text: "Cagrilintide: The Amylin Component",
    },
    {
      type: "paragraph",
      text: "Cagrilintide is a long-acting amylin analog developed by Novo Nordisk. Amylin is a peptide co-secreted with insulin by pancreatic beta cells. It acts on amylin receptors in the area postrema and nucleus tractus solitarius of the brainstem, reducing food intake by slowing gastric emptying, suppressing glucagon, and inducing satiety. Native amylin has a short half-life (~10 minutes); cagrilintide is engineered with fatty acid acylation for once-weekly subcutaneous dosing with a half-life of approximately 7–8 days.",
    },
    {
      type: "subheading",
      text: "Semaglutide: The GLP-1 Component",
    },
    {
      type: "paragraph",
      text: "Semaglutide is a GLP-1 receptor agonist with 94% amino acid sequence homology to native GLP-1. It is acylated with a C18 fatty diacid chain linked via a hydrophilic linker, enabling albumin binding that extends its half-life to approximately 7 days. Its weight-reducing effects are mediated primarily through hypothalamic GLP-1 receptors (arcuate nucleus) that reduce caloric intake and through vagal afferent signaling.",
    },
    {
      type: "subheading",
      text: "Complementary Mechanisms",
    },
    {
      type: "paragraph",
      text: "The rationale for combining these two compounds is mechanistic complementarity. Amylin receptors and GLP-1 receptors are expressed in overlapping but distinct brain circuits controlling energy homeostasis. Amylin primarily activates area postrema circuits, while GLP-1 acts more strongly on arcuate nucleus and dorsal vagal complex pathways. Preclinical co-administration studies in rodent models demonstrated synergistic — not merely additive — reductions in food intake and body weight.",
    },
    {
      type: "heading",
      text: "Clinical Trial Data",
    },
    {
      type: "subheading",
      text: "Phase 2: COMBINE",
    },
    {
      type: "paragraph",
      text: "The COMBINE Phase 2 trial (n=706) evaluated weekly subcutaneous CagriSema at a target dose of 2.4 mg semaglutide + 2.4 mg cagrilintide versus placebo and monotherapy arms. At 32 weeks, participants receiving CagriSema achieved mean body weight reduction of approximately 15.6% from baseline — compared to 5.1% for cagrilintide alone and 5.0% for semaglutide alone at the doses studied. This signal was the basis for moving to Phase 3.",
    },
    {
      type: "subheading",
      text: "Phase 3: REDEFINE Program",
    },
    {
      type: "paragraph",
      text: "The REDEFINE Phase 3 program is a series of large randomized controlled trials. REDEFINE 1 (n=3,400) studies CagriSema 2.4/2.4 mg vs. placebo in adults with obesity (BMI ≥30) over 68 weeks, with co-primary endpoints of ≥5% body weight responder rate and mean percent change from baseline. REDEFINE 2 studies the combination in adults with type 2 diabetes and overweight/obesity. Results from REDEFINE 1 reported in 2025 showed ~22.7% mean weight loss — lower than the initially anticipated 25%+ threshold but still exceeding tirzepatide's benchmark from SURMOUNT-1.",
    },
    {
      type: "heading",
      text: "Dose-Response and Titration",
    },
    {
      type: "paragraph",
      text: "CagriSema uses a stepwise titration protocol designed to minimize gastrointestinal adverse events common to both component classes:",
    },
    {
      type: "table",
      headers: ["Week", "Cagrilintide Dose", "Semaglutide Dose"],
      rows: [
        ["1–4", "0.16 mg", "0.25 mg"],
        ["5–8", "0.3 mg", "0.5 mg"],
        ["9–12", "0.6 mg", "1.0 mg"],
        ["13–16", "1.2 mg", "1.7 mg"],
        ["17+", "2.4 mg", "2.4 mg"],
      ],
    },
    {
      type: "paragraph",
      text: "The extended titration period (16+ weeks to full dose) is notably longer than current semaglutide monotherapy (Ozempic/Wegovy) titration protocols, reflecting the additive GI burden of combining two satiety-modifying peptides.",
    },
    {
      type: "heading",
      text: "Safety Profile",
    },
    {
      type: "subheading",
      text: "Gastrointestinal Events",
    },
    {
      type: "paragraph",
      text: "In COMBINE, GI adverse events — nausea, vomiting, diarrhea, constipation — occurred in approximately 75% of CagriSema participants versus 40% in placebo, consistent with the known class effects of both GLP-1 agonists and amylin analogs. Most events were mild to moderate and resolved during the titration period.",
    },
    {
      type: "subheading",
      text: "Injection Site Reactions",
    },
    {
      type: "paragraph",
      text: "Cagrilintide's fatty acid modification is associated with a higher rate of injection site nodules compared to semaglutide alone. In Phase 2, approximately 12% of CagriSema participants reported injection site reactions versus 4% in the semaglutide monotherapy arm.",
    },
    {
      type: "heading",
      text: "Research Implications: CagriSema vs. Tirzepatide vs. Retatrutide",
    },
    {
      type: "paragraph",
      text: "Researchers comparing next-generation weight loss peptides should understand the receptor mechanism distinctions:",
    },
    {
      type: "list",
      items: [
        "Tirzepatide: Dual GLP-1R + GIPR agonist — direct receptor binding approach",
        "Retatrutide: Triple GLP-1R + GIPR + GcgR agonist — adds glucagon stimulation to increase energy expenditure",
        "CagriSema: GLP-1R agonist + amylin receptor agonist — targets brainstem satiety circuits distinct from GI incretin pathways",
      ],
    },
    {
      type: "paragraph",
      text: "Each approach activates distinct neuronal and peripheral circuits, making combination or comparative research protocols scientifically valuable for understanding the relative contributions of each pathway to total energy homeostasis.",
    },
    {
      type: "heading",
      text: "Lean Mass Preservation: An Open Research Question",
    },
    {
      type: "paragraph",
      text: "One of the key research concerns with any highly effective weight loss compound is the proportion of lean mass vs. fat mass lost. Early COMBINE data suggested fat-free mass loss of approximately 10–15% of total lost mass — comparable to tirzepatide outcomes. Direct measurement via DEXA scanning in REDEFINE trials is ongoing. Researchers studying CagriSema in animal models may wish to pair with ipamorelin, CJC-1295, or follistatin to investigate whether GH axis or myostatin pathway activation modifies lean mass outcomes.",
    },
    {
      type: "heading",
      text: "Availability for Research",
    },
    {
      type: "paragraph",
      text: "As of 2026, cagrilintide and CagriSema fixed-ratio formulations are not commercially available outside clinical trials. Semaglutide as a research compound is available from verified peptide suppliers. Cagrilintide as a standalone research compound has become available from select vendors. Researchers sourcing either compound should verify HPLC purity ≥98%, LAL endotoxin testing, and mass spectrometry identity confirmation.",
    },
    {
      type: "disclaimer",
      text: "All compounds discussed are research chemicals intended for laboratory investigation only. CagriSema is not FDA-approved. Not for human consumption.",
    },
  ],
};
