import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "where-to-buy-setmelanotide-research-guide",
  title: "Where to Buy Setmelanotide for Research: MC4R Pathway Sourcing Guide",
  description:
    "Setmelanotide (Imcivree) is a melanocortin-4 receptor agonist approved for rare monogenic obesity syndromes. This guide covers what setmelanotide is, why it's a biologic-class compound not available as a commodity research peptide, what MC4R-pathway peptides ARE available for preclinical research (Melanotan II, PT-141, NDP-α-MSH, ACTH fragments), COA requirements, and how to design MC4R research protocols without violating Rhythm Pharmaceuticals' IND-protected compound.",
  category: "Compound Profiles",
  readMinutes: 11,
  publishedAt: "2026-06-17",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Setmelanotide is a cyclic heptapeptide MC4R agonist developed by Rhythm Pharmaceuticals (Nasdaq: RYTM) and approved by the FDA in November 2020 as Imcivree — the first pharmacotherapy approved specifically for obesity caused by POMC, PCSK1, or LEPR deficiency. If you've searched 'where to buy setmelanotide for research,' this guide gives you a straight answer: setmelanotide itself is not available through research peptide suppliers, for reasons that matter scientifically. But there are legitimate, high-quality MC4R-pathway compounds available for preclinical research, and this guide maps exactly what those are and how to source them correctly."
    },
    {
      type: "heading",
      text: "What Setmelanotide Is — And Why It's Not a Commodity Peptide"
    },
    {
      type: "paragraph",
      text: "Setmelanotide (RM-493) has the sequence Ac-Arg-c[Cys-Glu-His-D-Phe-Arg-Trp-Cys]-NH₂ — a constrained cyclic structure with a critical disulfide bond between the two Cys residues at positions 2 and 8. This cyclization is not a synthetic convenience; it's what drives selectivity. Linear α-MSH analogs (like Melanotan I) activate MC1R and MC3R broadly. The ring-constrained architecture of setmelanotide shifts selectivity dramatically toward MC4R (EC₅₀ ~0.27 nM at MC4R vs. >100 nM at MC1R in published Rhythm data), which is why it produces weight loss without the degree of pigmentation and sexual side effects seen with older melanocortin agonists."
    },
    {
      type: "paragraph",
      text: "From a regulatory standpoint, setmelanotide carries three FDA-approved rare disease indications and remains under active Rhythm Pharmaceuticals IND programs for additional POMC pathway deficiencies (POMC heterozygous deficiency, Smith-Magenis syndrome, Bardet-Biedl syndrome). It is manufactured under GMP cGMP conditions at contract facilities with lot-specific QC that far exceeds what SPPS research suppliers produce. No legitimate research peptide vendor synthesizes or distributes setmelanotide — any supplier claiming to sell 'setmelanotide' is either mislabeling a different melanocortin peptide or selling an unverified analog."
    },
    {
      type: "heading",
      text: "The MC4R Pathway: What Setmelanotide Actually Targets"
    },
    {
      type: "paragraph",
      text: "Understanding why researchers want setmelanotide helps identify legitimate research alternatives. The melanocortin-4 receptor (MC4R) sits at the apex of a hypothalamic energy balance circuit: POMC neurons in the arcuate nucleus release α-MSH and β-MSH, which activate MC4R on paraventricular nucleus (PVN) neurons to suppress appetite and increase energy expenditure. AgRP neurons antagonize this signal. LEPR and PCSK1 deficiency disrupts upstream POMC processing, collapsing MC4R tone and causing severe hyperphagia. Setmelanotide restores this signal pharmacologically."
    },
    {
      type: "table",
      headers: ["MC4R Pathway Node", "Gene/Protein", "Deficiency Syndrome", "Setmelanotide Indication"],
      rows: [
        ["POMC processing", "POMC", "POMC deficiency obesity", "FDA-approved 2020"],
        ["Prohormone convertase", "PCSK1", "PCSK1 deficiency obesity", "FDA-approved 2020"],
        ["Leptin receptor signaling", "LEPR", "LEPR deficiency obesity", "FDA-approved 2020"],
        ["Bardet-Biedl syndrome", "BBS1, BBS10, others", "BBS-associated obesity", "FDA-approved 2022"],
        ["Alström syndrome", "ALMS1", "ALMS-associated obesity", "Phase II / Compassionate"],
        ["POMC heterozygous", "POMC (het)", "Haploinsufficiency obesity", "Phase III ongoing"]
      ]
    },
    {
      type: "heading",
      text: "MC4R Research Compounds Available From Research Suppliers"
    },
    {
      type: "paragraph",
      text: "Preclinical MC4R research does not require setmelanotide. The melanocortin field has well-characterized research tools that are synthesized by SPPS and available from verified research peptide suppliers. Each has distinct receptor selectivity, half-life, and published rodent protocols."
    },
    {
      type: "table",
      headers: ["Compound", "Target Profile", "Key Use Case", "Published Rodent Dose"],
      rows: [
        ["NDP-α-MSH (Nle⁴-D-Phe⁷-α-MSH)", "MC1R/MC3R/MC4R agonist (non-selective)", "Gold-standard MC4R probe; most-cited melanocortin agonist in academic literature", "0.1–1 mg/kg IP in DIO C57BL/6J; acute anorectic response"],
        ["Melanotan II (MT-II)", "MC3R/MC4R/MC1R partial agonist", "Weight and sexual behavior research; DIO rodent models", "0.5–3 mg/kg SC; dose-dependent anorexia + erection in rats"],
        ["PT-141 / Bremelanotide", "MC4R/MC3R selective vs. MT-II", "Sexual function research; MC4R circuit mapping", "0.5–1 mg/kg SC in Sprague-Dawley; CNS c-Fos mapping at PVN"],
        ["ACTH(4-10) / Org 2766", "MC4R-like neuroprotection", "CNS protection, cognitive endpoints (non-obesity)", "10–100 µg/kg IP; memory consolidation rodent tasks"],
        ["SHU9119", "MC3R/MC4R antagonist", "Control arm for MC4R agonist studies; establishes pathway specificity", "1–3 nmol ICV; blocks NDP-α-MSH-induced anorexia"],
        ["AgRP(83-132)", "MC3R/MC4R inverse agonist", "Hyperphagia induction; obesity model initiation", "0.3–3 nmol ICV; 24–72h feeding increase in rats"]
      ]
    },
    {
      type: "heading",
      text: "COA Requirements for MC4R Research Peptides"
    },
    {
      type: "paragraph",
      text: "Melanocortin peptides — particularly cyclic compounds like MT-II — have structural features that make purity verification more demanding than linear peptides. Because the disulfide bond (in MT-II, PT-141) is a post-synthesis cyclization step, partial oxidation and scrambled disulfide isomers are the primary impurity class. A supplier COA that only reports HPLC area % without addressing disulfide integrity is insufficient."
    },
    {
      type: "list",
      items: [
        "HPLC purity: RP-HPLC ≥98% by area (C18 or C8 column; TFA/acetonitrile gradient). Cyclic peptides often show >1 peak if disulfide scrambling occurred — the COA should show a single dominant peak.",
        "MS identity: ESI-MS or MALDI-TOF with observed [M+H]⁺ within 1 Da of theoretical. For NDP-α-MSH (MW 1646.9 Da) verify both +1 and +2 charge states. MT-II (MW 1024.2 Da) should show [M+H]⁺ at 1025.2.",
        "Disulfide confirmation: Ellman's reagent (DTNB) assay to confirm no free thiols (free thiols = uncyclized linear form). Advanced suppliers include this; standard suppliers do not — request it for cyclic compounds.",
        "Endotoxin: LAL assay <1 EU/µg for in vivo IP/SC rodent use. MT-II and NDP-α-MSH are administered centrally (ICV) or peripherally — both routes require LAL-verified lots.",
        "Sterility: 0.22 µm filtered reconstitution vehicle with documented sterility testing. For ICV administration, verify no particulates under microscopy."
      ]
    },
    {
      type: "heading",
      text: "Designing a Preclinical MC4R Study Without Setmelanotide"
    },
    {
      type: "paragraph",
      text: "The most common research question setmelanotide raises — 'can MC4R agonism reverse diet-induced obesity?' — is fully addressable with NDP-α-MSH or MT-II in standard DIO C57BL/6J mice. The published Rhythm Pharmaceuticals Phase II data showed ~25 kg average weight loss over 12 weeks in POMC/LEPR-deficient patients; preclinical models using NDP-α-MSH in ob/ob and DIO mice established the mechanistic basis for this. Your preclinical study design:"
    },
    {
      type: "list",
      items: [
        "Model selection: DIO C57BL/6J (60% HFD × 12 weeks) for acquired MC4R pathway suppression modeling. Use ob/ob mice for pure leptin-deficiency phenotype. MC4R knockout mice (Jackson #006421) for pathway specificity controls.",
        "Compound: NDP-α-MSH at 0.5 mg/kg IP daily × 14 days (acute anorectic arm) or MT-II at 1 mg/kg SC for combined weight/sexual behavior endpoints. Include SHU9119 as pharmacological MC4R blockade control (1 nmol ICV).",
        "Endpoints: Body weight daily, food intake by metabolic cage (CLAMS), body composition by EchoMRI at baseline/endpoint, glucose tolerance test at day 14, terminal plasma for α-MSH, β-MSH, and AgRP by ELISA.",
        "ICV administration protocol: Implant stainless steel guide cannula targeting lateral ventricle (AP -0.3, ML +1.0, DV -2.5 mm from bregma) under isoflurane 3 weeks prior. Microinfuse 2 µL over 2 minutes using 30-gauge injector.",
        "Statistical design: N=8-10/group, randomized by baseline body weight stratification. Provide IACUC-compliant justification using power analysis (effect size d=1.2 from published NDP-α-MSH anorexia data, α=0.05, power=0.80)."
      ]
    },
    {
      type: "heading",
      text: "Vendor Red Flags for 'Setmelanotide'"
    },
    {
      type: "paragraph",
      text: "If a research peptide supplier lists setmelanotide as available, apply maximum scrutiny before ordering anything from that supplier — not just for this compound, but for their entire catalog. Here is what you should know:"
    },
    {
      type: "list",
      items: [
        "Setmelanotide cannot be synthesized by routine SPPS at the purity level needed for meaningful research. The disulfide-constrained structure requires specialized oxidative folding conditions and the final product is extremely difficult to separate from partially-cyclized impurities by standard preparative HPLC.",
        "The compound has no published third-party SPPS synthesis source. All peer-reviewed setmelanotide pharmacology uses Rhythm Pharmaceuticals' GMP material. Suppliers claiming to provide 'setmelanotide' are providing an unknown analog — likely MT-II mislabeled, or a novel non-characterized structure.",
        "Legal exposure: Setmelanotide is an approved drug (Imcivree). Distributing it outside the approved dispensing chain as a 'research chemical' creates regulatory risk for the buyer and the supplier. Any supplier willing to do this is operating outside appropriate regulatory channels.",
        "Alternative path for legitimate researchers: Rhythm Pharmaceuticals has a research collaboration program. Academic labs studying POMC pathway biology can contact Rhythm's translational science team directly. NIH-funded investigators studying rare obesity syndromes may also request material through formal MTA (Material Transfer Agreement) channels."
      ]
    },
    {
      type: "heading",
      text: "Summary: What to Order for MC4R Research"
    },
    {
      type: "paragraph",
      text: "Setmelanotide is not available from research peptide suppliers and should not be ordered from vendors claiming to supply it. For MC4R preclinical research, use NDP-α-MSH (most-cited MC4R agonist probe in academic literature, linear peptide, easy SPPS synthesis, COA-verifiable), MT-II (cyclic, higher selectivity, widely used in obesity + sexual behavior research), or PT-141/bremelanotide (MC4R/MC3R, published human data available for translational context). Require RP-HPLC ≥98%, ESI-MS identity, and LAL endotoxin ≤1 EU/µg from any MC4R research peptide supplier. Nexphoria meets all of these standards for the available MC4R-pathway research compounds."
    },
    {
      type: "disclaimer",
      text: "This article is intended for licensed researchers and academic scientists. Nexphoria compounds are for in vitro and preclinical research use only. Not for human consumption. Setmelanotide (Imcivree) is an FDA-approved prescription drug; this article does not constitute medical advice or an endorsement of any off-label use."
    }
  ]
};
