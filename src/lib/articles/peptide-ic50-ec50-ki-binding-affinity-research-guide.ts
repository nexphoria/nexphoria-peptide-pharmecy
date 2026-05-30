import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "peptide-ic50-ec50-ki-binding-affinity-research-guide",
  title: "IC50, EC50, Ki, and Kd: Understanding Binding Affinity Data in Peptide Research",
  description:
    "A practical guide to interpreting IC50, EC50, Ki, and Kd values in peptide pharmacology literature. Learn what each metric measures, how they're determined, and how to use them to compare compound potency, select doses, and design better in vivo studies.",
  category: "Research Fundamentals",
  readMinutes: 9,
  publishedAt: "2026-05-30",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "When reading peptide pharmacology literature, you will encounter four terms — IC50, EC50, Ki, and Kd — used to describe how potently a compound interacts with its receptor or target. These are distinct measurements with different experimental origins, and confusing them is one of the most common errors researchers make when comparing compounds across studies. This guide explains what each value actually measures, how it's determined, and how to apply it when selecting doses and designing in vivo protocols.",
    },
    {
      type: "heading",
      text: "Kd: Equilibrium Dissociation Constant",
    },
    {
      type: "paragraph",
      text: "Kd (the equilibrium dissociation constant) is the most fundamental binding affinity metric. It describes the equilibrium between a ligand (L) and its receptor (R): R + L ⇌ RL. At equilibrium, Kd = [R][L] / [RL]. A lower Kd means higher affinity — if Kd = 1 nM, half of the receptor population is occupied when the free ligand concentration is 1 nM.",
    },
    {
      type: "paragraph",
      text: "Kd is typically measured using radioligand saturation binding assays (Scatchard analysis) or surface plasmon resonance (SPR). In a saturation binding experiment, increasing concentrations of radiolabeled ligand (e.g., [125I]-ipamorelin) are incubated with membrane preparations expressing the target receptor (e.g., GHSR-1a), and specific binding is plotted against free ligand concentration. The curve follows a rectangular hyperbola; Kd is the ligand concentration at half-maximal specific binding.",
    },
    {
      type: "callout",
      text: "Key distinction: Kd is a thermodynamic equilibrium constant. It is independent of assay time, temperature equilibration, and signal pathway. It directly measures the physical interaction between ligand and receptor — nothing downstream.",
    },
    {
      type: "heading",
      text: "Ki: Inhibition Constant (Competitive Binding)",
    },
    {
      type: "paragraph",
      text: "Ki is the inhibition constant derived from competitive binding assays. Rather than measuring direct binding of the compound of interest, a competitive assay uses a radiolabeled reference ligand at a known concentration and measures how much your test compound displaces it. The Cheng-Prusoff equation converts the observed IC50 of displacement to Ki: Ki = IC50 / (1 + [L] / Kd_reference), where [L] is the radioligand concentration and Kd_reference is the radioligand's affinity for the receptor.",
    },
    {
      type: "paragraph",
      text: "For research peptides, Ki values in the literature typically come from competitive radioligand binding assays using commercially available receptor-expressing cell lines. For example, ipamorelin's Ki at GHSR-1a is approximately 2-4 nM (Johansen 1999, measured by displacement of [125I]-GHRP-6 from rat pituitary membranes). GHRP-2 Ki at GHSR-1a is ~0.8-1.2 nM (higher affinity). Hexarelin Ki at GHSR-1a is the lowest of the classical GHRPs at ~0.4-0.6 nM.",
    },
    {
      type: "paragraph",
      text: "Ki is useful for comparing the binding affinity of two compounds at the same receptor, corrected for the experimental conditions. However, Ki tells you nothing about whether the compound is an agonist or antagonist — it only quantifies displacement potency at the binding site.",
    },
    {
      type: "heading",
      text: "EC50: Half-Maximal Effective Concentration",
    },
    {
      type: "paragraph",
      text: "EC50 is the functional potency metric. It is the concentration of compound required to produce 50% of the maximum biological response in a functional assay. Unlike Kd and Ki (which are pure binding measurements), EC50 incorporates the entire signal transduction chain from receptor occupancy through downstream effector activation.",
    },
    {
      type: "paragraph",
      text: "For a GPCR like GHSR-1a, EC50 is commonly determined in GH-expressing pituitary cells or transfected CHO/HEK293 cells by measuring cAMP accumulation (for Gs-coupled), IP1 accumulation (for Gq-coupled), or [35S]-GTPγS binding (for receptor activation independent of second messenger). For GLP-1R agonists, EC50 is frequently reported as the concentration producing 50% of maximal cAMP elevation in GLP-1R-transfected cells.",
    },
    {
      type: "paragraph",
      text: "A critical concept: EC50 is not the same as Ki or Kd. A compound can have high binding affinity (low Ki) but low functional potency (high EC50) if it is a partial agonist with limited intrinsic efficacy. Conversely, a compound can show relatively modest binding affinity but high functional potency if there is significant receptor reserve (spare receptors) — occupying only 10% of receptors may be sufficient to drive 50% of the maximal response.",
    },
    {
      type: "callout",
      text: "Practical example: Ipamorelin has a Ki at GHSR-1a of ~2-4 nM, similar to GHRP-6 (~2-3.5 nM). However, ipamorelin's EC50 for GH secretion in pituitary cells is approximately 1-2 nM, while GHRP-6 EC50 is similar. The key pharmacological difference between them is not binding affinity or functional potency — it is receptor selectivity (ipamorelin does not activate CRH/AVP-mediated ACTH release, while GHRP-6 does). Selectivity is not captured in EC50 data at a single receptor.",
    },
    {
      type: "heading",
      text: "IC50: Half-Maximal Inhibitory Concentration",
    },
    {
      type: "paragraph",
      text: "IC50 is the concentration of compound that inhibits a biological process or receptor-mediated response by 50%. It is the inhibitory counterpart to EC50. IC50 is used when describing antagonists, inhibitors, or any compound that suppresses an ongoing activity.",
    },
    {
      type: "paragraph",
      text: "In competitive binding assays, IC50 refers to the concentration displacing 50% of the radiolabeled reference ligand. This raw IC50 value from a binding assay is then converted to Ki using the Cheng-Prusoff equation (described above). This conversion step is essential — raw IC50 values from binding assays are not directly comparable across studies that use different radioligand concentrations.",
    },
    {
      type: "paragraph",
      text: "For enzyme inhibition studies (relevant when assessing DPP-4 resistance of GLP-1 analogs, for example), IC50 represents the concentration inhibiting 50% of enzymatic turnover under specified substrate conditions. The Michaelis-Menten context affects this value — IC50 for competitive inhibitors increases with substrate concentration, so literature values are only comparable at the same substrate concentration.",
    },
    {
      type: "heading",
      text: "The Relationship Between These Values",
    },
    {
      type: "table",
      headers: ["Parameter", "Measures", "Assay Type", "Lower Value Means", "Key Limitation"],
      rows: [
        ["Kd", "Physical ligand-receptor binding equilibrium", "Saturation radioligand binding / SPR", "Higher binding affinity", "Requires direct radiolabeled ligand; pure binding, no functional information"],
        ["Ki", "Competitive displacement potency at binding site", "Competitive radioligand displacement", "Higher binding affinity vs reference", "Must apply Cheng-Prusoff correction; same receptor, same conditions to compare"],
        ["EC50", "Functional potency; concentration for 50% maximal response", "Cell-based functional assay (cAMP, IP1, GH secretion)", "Higher functional potency at that receptor", "Reflects full pathway; receptor reserve and intrinsic efficacy both affect value"],
        ["IC50", "Inhibitory potency; concentration for 50% inhibition", "Competitive binding (raw) or functional inhibition", "Higher inhibitory potency", "Binding assay IC50 must be Cheng-Prusoff corrected; not directly comparable to EC50"],
      ],
    },
    {
      type: "heading",
      text: "How These Values Scale to In Vivo Doses",
    },
    {
      type: "paragraph",
      text: "A common mistake is assuming that in vitro EC50 directly predicts the effective in vivo dose. This is rarely the case for peptides, for several reasons. First, bioavailability: subcutaneous or intraperitoneal administration does not deliver the full dose to receptor-expressing tissues — SC bioavailability for most peptides ranges from 20-95%. Second, plasma protein binding: a fraction of the compound is bound to albumin or other carriers and unavailable to receptors. Third, peptidase degradation: plasma half-life determines how long concentrations remain above EC50 at the target tissue. Fourth, tissue distribution: plasma EC50 does not equal tissue receptor-site concentration.",
    },
    {
      type: "paragraph",
      text: "As a practical approximation: in vivo effective doses for most research peptides are 100-10,000× higher on a molar basis than their in vitro EC50 values. For ipamorelin, in vitro EC50 at GHSR-1a in pituitary cells is ~1-2 nM, while the published in vivo SC dose range is 100-300 mcg/kg in rodents — which corresponds to roughly 50-150 nmol/kg, or a peak plasma Cmax of approximately 5-15 nM (accounting for Vd and SC bioavailability). The ratio between in vivo dose and in vitro EC50 in this case is ~3-10×, which is relatively favorable.",
    },
    {
      type: "paragraph",
      text: "For GLP-1 analogs like semaglutide, in vitro EC50 at GLP-1R is approximately 0.03 nM (Lau 2015 J Med Chem), while the standard DIO rodent SC dose is 0.1-0.3 mg/kg/week (~60-180 nmol/kg). Given semaglutide's 90%+ plasma protein binding and ~168h half-life creating substantial tissue distribution effects, the translation is considerably more complex. This is why published in vivo dose ranges — not theoretical EC50-derived estimates — are the correct starting point for rodent protocol design.",
    },
    {
      type: "heading",
      text: "Partial Agonists, Full Agonists, and Intrinsic Efficacy",
    },
    {
      type: "paragraph",
      text: "A full agonist activates the receptor to its maximum possible response at saturating concentrations. A partial agonist occupies the same binding site but produces less than the maximal response even at receptor-saturating concentrations — intrinsic efficacy (Emax as a fraction of the system maximum) is less than 1.0.",
    },
    {
      type: "paragraph",
      text: "This distinction matters for EC50 comparisons. Two compounds may have identical Ki values (identical binding affinity) but very different EC50 values if one is a full agonist and one is a partial agonist. Additionally, a partial agonist can act as a functional antagonist in the presence of a full agonist — occupying the receptor without achieving full activation, thereby blocking the full agonist. This is a critical consideration when designing combination studies.",
    },
    {
      type: "paragraph",
      text: "Among commonly used research peptides, most GHRPs (ipamorelin, GHRP-2, GHRP-6, hexarelin) and MK-677 behave as full agonists at GHSR-1a. GLP-1 analogs (semaglutide, tirzepatide) are full agonists at their respective receptors. Most receptor antagonist controls (Ex-9-39 for GLP-1R, D-[Lys3]-GHRP-6 for GHSR-1a) are competitive antagonists with measurable Kd/Ki values but zero or near-zero intrinsic efficacy.",
    },
    {
      type: "heading",
      text: "Using Binding Data to Select Experimental Concentrations",
    },
    {
      type: "paragraph",
      text: "For in vitro cell culture experiments, the EC50 is your primary design anchor. A dose-response curve should span at least 2 log units below the EC50 to 2 log units above it (i.e., 0.01× to 100× EC50), with points spaced at half-log intervals. This range captures the full sigmoidal dose-response relationship and allows accurate curve-fitting using a 4-parameter logistic model (4PL) to determine EC50, Hill coefficient (nH), and Emax.",
    },
    {
      type: "paragraph",
      text: "For antagonist control experiments, the antagonist concentration should be set at approximately 10× its Ki value to achieve >90% receptor occupancy (from the Law of Mass Action: fraction bound = [antagonist] / ([antagonist] + Ki)). At [antagonist] = 10× Ki, occupancy = 10/11 ≈ 91%. For Ex-9-39 (GLP-1R antagonist), Ki at rat GLP-1R is approximately 6 nM; thus, 100 nM Ex-9-39 in vitro achieves ~94% occupancy — a standard assay concentration confirmed in the literature.",
    },
    {
      type: "heading",
      text: "Practical Reference: Key Binding Affinity Data for Common Research Peptides",
    },
    {
      type: "table",
      headers: ["Compound", "Target Receptor", "Ki / Kd", "EC50 (functional)", "Key Reference"],
      rows: [
        ["Ipamorelin", "GHSR-1a", "~2-4 nM (Ki)", "~1-2 nM (cAMP/GH)", "Johansen 1999 Eur J Endocrinol"],
        ["GHRP-2 (Pralmorelin)", "GHSR-1a", "~0.8-1.2 nM (Ki)", "~0.3-0.8 nM (GH)", "Arvat 1997 JCEM"],
        ["GHRP-6", "GHSR-1a", "~2-3.5 nM (Ki)", "~1-3 nM (GH)", "Bowers 1990 JCEM"],
        ["Hexarelin", "GHSR-1a", "~0.4-0.6 nM (Ki)", "~0.2-0.5 nM (GH)", "Ghigo 1994 JCEM"],
        ["MK-677 (Ibutamoren)", "GHSR-1a", "~1.5-2.5 nM (Ki)", "~1.0-2.0 nM (GH)", "Nass 2008 Ann Int Med"],
        ["Semaglutide", "GLP-1R", "~0.03 nM (Ki)", "~0.03-0.05 nM (cAMP)", "Lau 2015 J Med Chem"],
        ["Tirzepatide", "GLP-1R", "~0.07 nM (Ki)", "~0.05-0.1 nM (cAMP)", "Coskun 2022 Nat Metab"],
        ["Tirzepatide", "GIPR", "~0.09 nM (Ki)", "~0.06-0.12 nM (cAMP)", "Coskun 2022 Nat Metab"],
        ["Retatrutide", "GLP-1R", "~0.09 nM (Ki)", "~0.06-0.12 nM (cAMP)", "Jastreboff 2023 NEJM (supp)"],
        ["Retatrutide", "GCGR", "~1.2 nM (Ki)", "~0.8-1.5 nM (cAMP)", "Jastreboff 2023 NEJM (supp)"],
        ["PT-141 (Bremelanotide)", "MC4R", "~3-5 nM (Ki)", "~2-4 nM (cAMP)", "Molinoff 2003 Ann NY Acad Sci"],
        ["PT-141 (Bremelanotide)", "MC3R", "~1-2 nM (Ki)", "~1-2 nM (cAMP)", "Molinoff 2003 Ann NY Acad Sci"],
        ["Melanotan II", "MC4R", "~0.3-0.5 nM (Ki)", "~0.2-0.4 nM (cAMP)", "Dorr 1998 JACI"],
        ["Oxytocin", "OTR", "~1-5 nM (Kd)", "~1-3 nM (IP1)", "Manning 2012 J Med Chem"],
        ["D-[Lys3]-GHRP-6 (antagonist)", "GHSR-1a", "~5-10 nM (Ki)", "~0 (antagonist)", "Holst 2003 J Pharmacol"],
        ["Ex-9-39 (antagonist)", "GLP-1R", "~6 nM (Ki)", "~0 (antagonist)", "Thorens 1993 Proc Natl Acad Sci"],
      ],
    },
    {
      type: "heading",
      text: "Common Errors When Comparing Binding Data Across Studies",
    },
    {
      type: "list",
      items: [
        "Comparing raw IC50 binding values without Cheng-Prusoff correction: IC50 from a binding assay depends on radioligand concentration used — studies using 5 nM vs 0.5 nM radioligand will report different raw IC50s for the same compound.",
        "Comparing Ki from one receptor subtype to EC50 from another: Ki at rat GHSR-1a and EC50 at human GLP-1R are not on the same scale and should not be used to rank potency across receptors.",
        "Ignoring species receptor differences: human and rodent GLP-1R have ~87-91% homology in the transmembrane domain. Binding affinities can differ 2-5-fold across species for some peptides.",
        "Using EC50 to predict in vivo effective dose without bioavailability adjustment: always anchor to published in vivo rodent doses, not EC50 extrapolations.",
        "Confusing EC50 (functional assay) with Kd (binding equilibrium): a compound can have Kd = 0.1 nM (very high binding affinity) but EC50 = 10 nM (modest functional potency) if receptor reserve is low or if the compound is a partial agonist.",
        "Assuming receptor number is constant across tissue preparations: receptor expression level in transfected cell lines differs from native tissue, affecting EC50 values via receptor reserve.",
      ],
    },
    {
      type: "heading",
      text: "Research Design Considerations",
    },
    {
      type: "list",
      items: [
        "When selecting in vivo doses, use published preclinical rodent data as your primary reference — not back-calculated EC50 estimates. The published dose ranges already account for bioavailability, plasma protein binding, and tissue distribution.",
        "For receptor specificity verification, set antagonist concentrations based on Ki (use 10× Ki for >90% occupancy). Match this to in vivo doses using body weight and estimated Vd.",
        "When comparing two agonists head-to-head, determine which metric is appropriate: Ki for binding selectivity, EC50 for functional potency at the same receptor under identical assay conditions.",
        "For dose-response curve design in cell culture, span 0.01× to 100× EC50 with 7-9 concentration points in half-log intervals. Use the 4-parameter logistic model for curve fitting.",
        "Report and interpret the Hill coefficient (nH) from your dose-response curves: nH = 1 indicates simple Langmuir binding; nH > 1 suggests positive cooperativity; nH < 1 can indicate heterogeneous receptor populations or competitive antagonism from endogenous ligands.",
        "For multi-receptor agonists (tirzepatide at GLP-1R + GIPR; retatrutide at GLP-1R + GIPR + GCGR), report selectivity ratios (Ki at receptor A / Ki at receptor B) and design your functional assays to measure each pathway independently.",
      ],
    },
    {
      type: "disclaimer",
      text: "All peptides sold by Nexphoria are strictly for in vitro and preclinical in vivo research use only (RUO). Not for human consumption. Not for clinical, therapeutic, or diagnostic use. The binding affinity and pharmacology data presented here are sourced from published peer-reviewed literature and are provided for educational and research design purposes only.",
    },
  ],
};
