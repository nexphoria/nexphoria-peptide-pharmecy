import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "igf-1-lr3-long-acting-analog-research-guide",
  title: "IGF-1 LR3: The Long-Acting IGF-1 Analog — Research Guide",
  description:
    "A research-focused guide to IGF-1 LR3, a long-acting variant of Insulin-like Growth Factor 1. Covers mechanism of action, pharmacokinetics, differences from native IGF-1 and des(1-3)IGF-1, study design protocols, and sourcing considerations for researchers.",
  category: "Compound Profiles",
  readMinutes: 12,
  publishedAt: "2026-06-04",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "IGF-1 LR3 (Long R3 Insulin-like Growth Factor 1) is a synthetic analog of IGF-1 engineered for significantly extended plasma half-life and enhanced potency at the IGF-1 receptor. It differs from native human IGF-1 by a glutamic acid-to-arginine substitution at position 3 and a 13-amino-acid extension peptide at the N-terminus (the 'Long' prefix). These modifications collectively reduce binding to IGF-binding proteins (IGFBPs), dramatically increasing the bioavailable fraction and extending the half-life from minutes (native IGF-1) to approximately 20–30 hours.",
    },
    {
      type: "paragraph",
      text: "Since the late 1990s, IGF-1 LR3 has been a standard tool in cell culture and animal research where sustained IGF-1 receptor activation is required. Its pharmacokinetic profile makes it especially useful in in vivo models where repeated dosing of native IGF-1 would be impractical or confounded by rapid clearance.",
    },
    {
      type: "heading",
      text: "IGF-1 Biology: The Foundation",
    },
    {
      type: "subheading",
      text: "Native IGF-1",
    },
    {
      type: "paragraph",
      text: "Insulin-like Growth Factor 1 is a 70-amino-acid single-chain peptide primarily produced in the liver in response to growth hormone (GH) stimulation. It mediates the majority of GH's anabolic effects and is a critical regulator of cell growth, differentiation, and survival across virtually all tissues. IGF-1 signals through the IGF-1 receptor (IGF-1R), a tyrosine kinase receptor that activates the PI3K/Akt and MAPK/ERK pathways — key mediators of protein synthesis, anti-apoptosis, and cell cycle progression.",
    },
    {
      type: "paragraph",
      text: "Native IGF-1 in plasma is almost entirely bound (>99%) to one of six IGF-binding proteins (IGFBP-1 through IGFBP-6). IGFBP-3 is the dominant carrier, forming a ternary complex with IGF-1 and the acid-labile subunit (ALS). This binding extends IGF-1's half-life from approximately 10–15 minutes (free) to several hours (bound), but also limits receptor access. Free, unbound IGF-1 is the biologically active fraction.",
    },
    {
      type: "subheading",
      text: "Why Modify IGF-1 for Research?",
    },
    {
      type: "paragraph",
      text: "The IGFBP system creates a significant challenge for research applications requiring sustained, predictable IGF-1 receptor activation. Injected native IGF-1 binds immediately to IGFBPs and is subject to rapid clearance. Achieving stable, dose-dependent pharmacodynamics with native IGF-1 in vivo requires frequent administration and introduces confounds related to IGFBP displacement and binding protein dynamics. IGF-1 LR3 was engineered to address this problem directly.",
    },
    {
      type: "heading",
      text: "IGF-1 LR3: Structural Modifications and Their Consequences",
    },
    {
      type: "subheading",
      text: "The R3 Substitution",
    },
    {
      type: "paragraph",
      text: "Position 3 of IGF-1 (glutamic acid) is within the N-terminal region critical for IGFBP binding. Substituting arginine at this position (hence 'R3') reduces affinity for all major IGFBPs by approximately 2- to 3-fold. The combination with the 13-amino-acid N-terminal extension (the 'Long' element) synergistically reduces IGFBP binding affinity by roughly 3-fold compared to native IGF-1 in standard binding assays.",
    },
    {
      type: "subheading",
      text: "Receptor Potency",
    },
    {
      type: "paragraph",
      text: "Critically, the structural changes in IGF-1 LR3 do not significantly impair IGF-1R binding affinity. Binding assays consistently show IGF-1 LR3 retains approximately equivalent affinity for the IGF-1 receptor compared to native IGF-1. The insulin receptor cross-reactivity of IGF-1 LR3 is slightly reduced compared to native IGF-1, which may be advantageous in research contexts where metabolic confounds from insulin receptor activation need to be minimized.",
    },
    {
      type: "subheading",
      text: "Pharmacokinetics Summary",
    },
    {
      type: "table",
      headers: ["Parameter", "Native IGF-1", "IGF-1 LR3"],
      rows: [
        ["Plasma half-life (in vivo)", "~10–15 min (free)", "~20–30 hours"],
        ["IGFBP binding affinity", "High (>99% bound)", "~3× reduced"],
        ["IGF-1R binding affinity", "Reference standard", "Approximately equivalent"],
        ["Insulin receptor affinity", "~5–10% of insulin", "Slightly lower than native IGF-1"],
        ["Molecular weight", "~7.6 kDa", "~9.1 kDa (with extension)"],
        ["Primary research use", "Short-duration stimulation models", "Sustained activation models, in vivo studies"],
      ],
    },
    {
      type: "heading",
      text: "IGF-1 LR3 vs. Des(1-3)IGF-1: Distinguishing the Two Truncated Analogs",
    },
    {
      type: "paragraph",
      text: "Researchers new to IGF-1 analogs frequently encounter both IGF-1 LR3 and des(1-3)IGF-1 and may conflate them. These are distinct compounds with different mechanisms of enhanced bioavailability.",
    },
    {
      type: "paragraph",
      text: "Des(1-3)IGF-1 is a naturally occurring truncated form of IGF-1 in which the first 3 N-terminal amino acids are cleaved. This truncation reduces IGFBP-3 binding affinity, increasing the free fraction. However, des(1-3)IGF-1 retains a short half-life similar to native IGF-1 because the IGFBP-binding reduction is less pronounced than with LR3 modifications, and other clearance mechanisms remain intact. It is used primarily in in vitro studies and in brain tissue research, where des(1-3)IGF-1 has been identified as an endogenous CNS form of IGF-1.",
    },
    {
      type: "paragraph",
      text: "IGF-1 LR3, by contrast, achieves far greater IGFBP independence through a structural modification rather than truncation, and its extended half-life makes it the preferred analog for in vivo studies requiring prolonged IGF-1 receptor engagement.",
    },
    {
      type: "heading",
      text: "Key Research Applications",
    },
    {
      type: "subheading",
      text: "Skeletal Muscle and Body Composition Research",
    },
    {
      type: "paragraph",
      text: "IGF-1 LR3 is most extensively used in studies examining skeletal muscle hypertrophy, protein synthesis, and satellite cell activation. The PI3K/Akt/mTORC1 pathway is the primary driver of muscle protein synthesis downstream of IGF-1R; consistent activation via LR3 administration allows researchers to characterize this pathway in vivo over defined study windows without the dosing frequency confounds of native IGF-1.",
    },
    {
      type: "paragraph",
      text: "In rodent models, IGF-1 LR3 administration has been associated with increased muscle mass, reduced fat mass, and enhanced recovery from muscle injury. The magnitude of these effects compared to native IGF-1 equivalents is generally larger per unit dose administered, consistent with the greater free bioavailable fraction.",
    },
    {
      type: "subheading",
      text: "Cancer Biology (Caution Note)",
    },
    {
      type: "callout",
      text: "IGF-1R is overexpressed in numerous human cancers and is a validated oncology target. Researchers using IGF-1 LR3 in any in vivo cancer model must be aware that sustained IGF-1R activation may promote tumor growth and anti-apoptotic signaling. IGF-1 LR3 should not be administered to subjects with active neoplastic disease outside of specifically designed oncology models.",
    },
    {
      type: "subheading",
      text: "Regeneration and Repair Models",
    },
    {
      type: "paragraph",
      text: "IGF-1 signaling plays a documented role in wound healing, tendon repair, and cartilage regeneration. IGF-1 LR3 has been used in tissue repair models where sustained local or systemic IGF-1R activation is desired. In cartilage explant cultures, IGF-1 LR3 outperforms native IGF-1 at equivalent molar doses in stimulating proteoglycan synthesis, consistent with its reduced IGFBP binding in the extracellular matrix.",
    },
    {
      type: "subheading",
      text: "Neurological Research",
    },
    {
      type: "paragraph",
      text: "IGF-1R is expressed throughout the CNS, and IGF-1 signaling has been linked to neuronal survival, synaptic plasticity, and neurogenesis. IGF-1 LR3 has been used in neuroprotection models to examine sustained IGF-1 receptor activation following ischemic injury, excitotoxicity, and neurodegenerative insults. CNS penetration of peripherally administered IGF-1 LR3 is limited (consistent with native IGF-1), and intracerebroventricular administration is used in studies targeting central IGF-1 pathways directly.",
    },
    {
      type: "heading",
      text: "Research Protocols: Design Considerations",
    },
    {
      type: "subheading",
      text: "Dosing in Rodent Models",
    },
    {
      type: "paragraph",
      text: "There is no single standard dosing protocol for IGF-1 LR3 in rodent research; doses vary considerably based on study objectives. Published literature provides the following reference points:",
    },
    {
      type: "table",
      headers: ["Study Context", "Species", "Dose Range", "Route", "Schedule"],
      rows: [
        ["Muscle hypertrophy", "Rat", "100–200 µg/kg/day", "SC or IP", "Daily × 14–28 days"],
        ["Tissue repair", "Mouse", "50–100 µg/kg/day", "SC", "Daily × 7–14 days"],
        ["Neuroprotection", "Rat", "10–100 µg/kg", "SC or ICV", "Single or 3–7 days post-insult"],
        ["Body composition", "Rat", "150–300 µg/kg/day", "SC", "Daily × 28+ days"],
        ["Cell proliferation (in vitro)", "N/A", "1–100 ng/mL", "Media supplement", "Duration of culture"],
      ],
    },
    {
      type: "callout",
      text: "Note: All doses above are from preclinical research only. They do not represent clinical recommendations and have no established human equivalence. Researchers should review primary literature for the specific model and endpoint being studied.",
    },
    {
      type: "subheading",
      text: "Reconstitution",
    },
    {
      type: "paragraph",
      text: "IGF-1 LR3 is supplied as a lyophilized powder. Standard reconstitution uses sterile water or bacteriostatic water (0.9% benzyl alcohol in sterile water) to a concentration of 100–1,000 µg/mL depending on study requirements. The reconstituted solution should be stored at 4°C and used within 2–4 weeks. For longer storage, aliquoting and freezing at −20°C is recommended; avoid repeated freeze-thaw cycles.",
    },
    {
      type: "subheading",
      text: "Hypoglycemia Risk: Critical Research Safety Note",
    },
    {
      type: "paragraph",
      text: "IGF-1 has insulin-like activity at the insulin receptor. While IGF-1 LR3 has reduced insulin receptor affinity relative to insulin, supraphysiological doses can produce clinically significant hypoglycemia in rodent models. Researchers should monitor blood glucose in acute dosing experiments and have glucose solutions available during in vivo procedures. Hypoglycemia is dose-dependent and most pronounced at doses exceeding 200 µg/kg in rodents.",
    },
    {
      type: "heading",
      text: "Sourcing IGF-1 LR3: Quality Considerations",
    },
    {
      type: "paragraph",
      text: "IGF-1 LR3 is a more complex synthetic peptide than most research peptides due to its larger size and more sophisticated tertiary structure. Purity verification is especially important: contaminants and misfolded variants may produce inconsistent pharmacological responses that compromise data quality.",
    },
    {
      type: "list",
      items: [
        "HPLC purity ≥98% minimum — the larger molecular size of IGF-1 LR3 means impurities from incomplete synthesis are more likely than with smaller peptides; demand COA documentation.",
        "Mass spectrometry confirmation — molecular weight should be confirmed to verify the correct sequence including the extension peptide; MW = ~9,117 Da.",
        "Endotoxin testing (LAL) — IGF-1 LR3 for in vivo research must be endotoxin-free; LAL results <1.0 EU/mg are standard for injectable research peptides.",
        "Cold-chain shipping — IGF-1 LR3 is thermolabile in reconstituted form; dry ice shipping for international and domestic shipments exceeding 24 hours transit time is essential.",
        "Third-party COA — supplier-internal testing is insufficient; require documentation from an independent analytical laboratory.",
      ],
    },
    {
      type: "divider",
    },
    {
      type: "disclaimer",
      text: "IGF-1 LR3 is sold by Nexphoria exclusively for qualified research use. It is not intended for human consumption, therapeutic application, or diagnostic use. All dosing data referenced in this article is from published preclinical literature and does not constitute clinical guidance. Researchers are responsible for compliance with applicable institutional and regulatory requirements.",
    },
  ],
};
