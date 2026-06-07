import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "cjc-1295-with-dac-long-acting-ghrh-analog-research-guide",
  title: "CJC-1295 With DAC: The Long-Acting GHRH Analog Explained",
  description:
    "A detailed research overview of CJC-1295 with DAC (Drug Affinity Complex) — how the DAC modification extends half-life, differences vs CJC-1295 without DAC, GH pulse pharmacology, and preclinical study design considerations.",
  category: "Compound Profiles",
  readMinutes: 10,
  publishedAt: "2026-06-07",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "CJC-1295 with DAC represents one of the more sophisticated engineering achievements in peptide pharmacology: a modified GHRH analog designed for dramatically extended plasma half-life through covalent albumin binding. Understanding the biochemical distinction between CJC-1295 with and without the Drug Affinity Complex (DAC) modification is essential for any researcher designing studies around the GH/IGF-1 axis.",
    },
    {
      type: "heading",
      text: "Background: GHRH and GH Axis Physiology",
    },
    {
      type: "paragraph",
      text: "Growth hormone-releasing hormone (GHRH) is a 44-amino acid neuropeptide produced in the arcuate nucleus of the hypothalamus. It acts on somatotroph cells in the anterior pituitary, binding GH-releasing hormone receptor (GHRHR) and stimulating GH synthesis and secretion. GHRH works in concert with ghrelin/GHS-R agonists (synergistic) and somatostatin (inhibitory) to produce the characteristic pulsatile GH secretion profile seen across mammalian species.",
    },
    {
      type: "paragraph",
      text: "Native GHRH has a plasma half-life of roughly 6–8 minutes due to rapid cleavage by dipeptidyl peptidase IV (DPP-IV) at the second residue of its N-terminal sequence. Synthetic GHRH analogs — including modified 1–29 fragments — were developed to improve metabolic stability while preserving receptor binding activity. CJC-1295 is one such modified GHRH(1–29) analog.",
    },
    {
      type: "heading",
      text: "What Is the DAC Technology?",
    },
    {
      type: "paragraph",
      text: "DAC stands for Drug Affinity Complex. The technology was developed to enable sustained, covalent binding of a peptide to circulating serum albumin — the most abundant plasma protein, with a natural half-life of approximately 19 days in humans and 2–3 days in rodents. By hijacking albumin's long half-life as a carrier, DAC-modified peptides achieve dramatically extended bioactivity without requiring depot formulation or repeated administration.",
    },
    {
      type: "subheading",
      text: "The Maleimido-Propionate Linker",
    },
    {
      type: "paragraph",
      text: "CJC-1295 with DAC contains a maleimido-propionate (MPA) group conjugated to the C-terminus of the modified GHRH(1–29) sequence. Maleimide groups react selectively and covalently with free thiol groups (specifically the Cys-34 residue of serum albumin) via a Michael addition reaction. This reaction occurs spontaneously under physiological conditions after injection, resulting in a peptide-albumin adduct that circulates with albumin's extended plasma half-life.",
    },
    {
      type: "subheading",
      text: "Resulting Half-Life Extension",
    },
    {
      type: "paragraph",
      text: "The DAC modification extends CJC-1295's plasma half-life from hours to approximately 6–8 days in humans. In rodent research models, the half-life is proportionally shorter due to faster albumin turnover and body surface area scaling — typically estimated at 2–3 days in rats. This extended half-life means that a single administration of CJC-1295 with DAC produces sustained elevation of circulating GHRH-like signaling across multiple days, in contrast to the episodic signaling produced by CJC-1295 without DAC.",
    },
    {
      type: "heading",
      text: "CJC-1295 With DAC vs Without DAC: Key Differences",
    },
    {
      type: "table",
      headers: ["Parameter", "CJC-1295 Without DAC", "CJC-1295 With DAC"],
      rows: [
        ["Chemical modification", "D-Ala, Aib, Gln substitutions; no reactive linker", "Same substitutions plus MPA linker at C-terminus"],
        ["Albumin binding", "Non-covalent (weak, transient)", "Covalent (strong, sustained via maleimide-thiol)"],
        ["Plasma half-life (human)", "~30 minutes", "~6–8 days"],
        ["Plasma half-life (rodent)", "~1–2 hours", "~2–3 days"],
        ["GH pulse pattern", "Preserves pulsatility; amplifies peaks", "Blunts pulsatility; sustained GH elevation"],
        ["IGF-1 effect", "Transient IGF-1 increase", "Sustained IGF-1 elevation over days"],
        ["Typical research dosing frequency", "Daily to twice-daily", "Weekly or every 5–7 days"],
        ["Research model fit", "Physiological GH pulsatility studies", "Sustained anabolic endpoint studies"],
      ],
    },
    {
      type: "heading",
      text: "Pharmacological Effects in Research Models",
    },
    {
      type: "subheading",
      text: "Growth Hormone Secretion Pattern",
    },
    {
      type: "paragraph",
      text: "CJC-1295 with DAC produces a distinctly different GH profile compared to its non-DAC counterpart. By maintaining continuous GHRHR stimulation over days, it partially overrides the pulsatile GH secretion architecture. Research studies using frequent GH sampling (every 15–20 minutes over 24+ hours) demonstrate that CJC-1295 with DAC elevates GH baseline (trough) levels substantially while somewhat blunting peak amplitude. The net effect is significantly elevated mean 24-hour GH exposure — relevant for studies examining cumulative GH action.",
    },
    {
      type: "subheading",
      text: "IGF-1 Elevation",
    },
    {
      type: "paragraph",
      text: "The most consistently reported biochemical outcome across CJC-1295 with DAC research is sustained elevation of serum IGF-1. Multiple studies in both young and aged rodents have reported dose-dependent increases in circulating IGF-1 lasting 7–14 days after a single administration. IGF-1 elevation is a validated downstream marker of GH axis activation and the primary readout used to confirm compound bioactivity in most preclinical research protocols.",
    },
    {
      type: "subheading",
      text: "Lean Mass and Metabolic Endpoints",
    },
    {
      type: "paragraph",
      text: "Preclinical studies in aged rat models have reported that sustained CJC-1295 with DAC administration over several weeks is associated with increases in lean body mass (measured by dual-energy X-ray absorptiometry, or DXA), reduced fat mass, and improved body composition ratios. Mechanistically, these outcomes are attributed to IGF-1-mediated protein anabolism and GH-driven lipolysis. Study designs examining these endpoints typically require multi-week administration periods and appropriate pair-fed or isocaloric controls.",
    },
    {
      type: "heading",
      text: "Research Applications",
    },
    {
      type: "list",
      items: [
        "Age-related GH decline (somatopause) modeling: CJC-1295 with DAC is used to study whether sustained GH restoration reverses functional, metabolic, or tissue-level deficits in aged rodent models",
        "Body composition studies: multi-week protocols examining lean mass, fat mass, and bone density outcomes in models with GH deficiency or normal aging",
        "IGF-1 biology research: sustained IGF-1 elevation enables studies of IGF-1-dependent pathways in target tissues without daily injection artifacts",
        "GH axis regulation research: investigating somatostatin feedback, desensitization kinetics, and receptor regulation under sustained GHRH stimulation",
        "Comparison vs GH secretagogues (ipamorelin, GHRP-2/6): head-to-head study designs examining how GHRH-pathway vs GHS-R-pathway activation produces different GH profiles and downstream outcomes",
      ],
    },
    {
      type: "heading",
      text: "Reconstitution and Handling",
    },
    {
      type: "paragraph",
      text: "CJC-1295 with DAC is supplied as a lyophilized powder containing the peptide acetate salt plus excipients (mannitol in most formulations). It should be reconstituted with sterile water for injection (SWFI) or bacteriostatic water. Addition of acetic acid is not typically required for solubility, as the peptide dissolves readily in aqueous solution at physiological pH. The maleimide group in the DAC modification is reactive; reconstituted solutions should be stored at 4°C and used within 48–72 hours. Avoid buffer systems containing free thiol compounds (DTT, β-mercaptoethanol) as these will competitively react with the maleimide group and inactivate the albumin-binding functionality.",
    },
    {
      type: "callout",
      text: "Critical: Do not reconstitute CJC-1295 with DAC in buffers containing thiol reducing agents (DTT, BME, TCEP). Free thiols react with the maleimide group, destroying the DAC albumin-binding chemistry before the compound is administered.",
    },
    {
      type: "heading",
      text: "Dosing Frequency in Rodent Studies",
    },
    {
      type: "paragraph",
      text: "Given the shorter albumin half-life in rodents relative to humans, research protocols targeting sustained IGF-1 elevation in rats and mice typically use administration frequencies of 2–3 times per week rather than the weekly dosing used in human clinical contexts. The optimal frequency depends on the desired IGF-1 profile (sustained plateau vs trough-and-peak), study duration, and specific endpoints. Researchers should perform pilot pharmacokinetic/pharmacodynamic studies measuring serum IGF-1 at multiple time points post-administration to establish the appropriate dosing interval before committing to a full experiment.",
    },
    {
      type: "heading",
      text: "Combination with GHS-R Agonists",
    },
    {
      type: "paragraph",
      text: "CJC-1295 with DAC is sometimes studied in combination with ghrelin mimetics (ipamorelin, GHRP-2, GHRP-6) to examine synergistic GH-releasing effects. The combination of GHRH-pathway and GHS-R-pathway agonism represents a potentially more complete activation of somatotroph GH secretion machinery. Research using combination designs must account for the very different half-lives of each component — the short-acting GHS-R agonist requires frequent dosing while CJC-1295 with DAC requires only periodic administration. Mismatched dosing schedules can complicate interpretation if not carefully controlled.",
    },
    {
      type: "heading",
      text: "Storage Requirements",
    },
    {
      type: "list",
      items: [
        "Lyophilized powder: store at -20°C; stable for 24+ months under proper conditions",
        "Reconstituted solution: store at 2–8°C; use within 48–72 hours",
        "Avoid repeated freeze-thaw of reconstituted material",
        "Protect from light during storage and working use",
        "Lot-specific COA should confirm HPLC purity ≥99% and MS identity of intact peptide with DAC modification",
      ],
    },
    {
      type: "heading",
      text: "Distinguishing CJC-1295 With DAC From Mod GRF(1–29)",
    },
    {
      type: "paragraph",
      text: "There is persistent naming confusion in the research community between CJC-1295 with DAC and Modified GRF(1–29) — also called CJC-1295 without DAC or Mod GRF. Both are modified GHRH(1–29) sequences with amino acid substitutions for DPP-IV resistance. The critical distinction is the presence (or absence) of the maleimide-propionate albumin-binding linker. Suppliers who label their product \"CJC-1295\" without specifying DAC status introduce significant ambiguity. When sourcing for research, verify explicitly which variant is being supplied, and confirm via COA that the molecular weight matches the expected form: ~3367 Da for CJC-1295 without DAC vs ~3647 Da for CJC-1295 with DAC (the DAC modification adds approximately 280 Da).",
    },
    {
      type: "disclaimer",
      text: "This article is for informational and educational purposes only. CJC-1295 with DAC is a research compound for use in laboratory settings by qualified investigators. It is not for human administration. Nothing in this article constitutes medical advice.",
    },
  ],
};
