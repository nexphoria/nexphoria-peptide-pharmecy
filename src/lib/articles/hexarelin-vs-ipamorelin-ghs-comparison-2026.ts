import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "hexarelin-vs-ipamorelin-ghs-comparison-2026",
  title: "Hexarelin vs Ipamorelin: Which GHS Fits Your Research Protocol? (2026)",
  description:
    "Hexarelin and ipamorelin both stimulate GHS-R1a, but their receptor pharmacology, desensitization kinetics, and off-target effects differ substantially. This guide helps researchers choose the right compound for their study design.",
  category: "Compound Profiles",
  readMinutes: 9,
  publishedAt: "2026-06-19",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Hexarelin and ipamorelin are both growth hormone secretagogues (GHS) that bind GHS-R1a and stimulate pulsatile GH release. At a surface level they appear interchangeable — but their pharmacological profiles diverge significantly when you look at receptor selectivity, desensitization kinetics, off-target actions, and research applications. This guide is intended for researchers who need to choose between them for a specific study design.",
    },
    {
      type: "heading",
      text: "Quick Comparison Table",
    },
    {
      type: "list",
      items: [
        "Receptor selectivity — Ipamorelin: GHS-R1a only. Hexarelin: GHS-R1a + CD36 receptor.",
        "GH release potency — Hexarelin is roughly 2–3× more potent per µg than ipamorelin in rodent models.",
        "Cortisol/ACTH stimulation — Hexarelin elevates cortisol/ACTH at higher doses. Ipamorelin does not.",
        "Prolactin effects — Both may mildly elevate prolactin; hexarelin has a higher signal.",
        "Desensitization rate — Hexarelin desensitizes GHS-R1a faster (~4–6 weeks). Ipamorelin desensitizes more slowly.",
        "Cardiac effects — Hexarelin has unique GH-independent cardioprotection via CD36. Ipamorelin does not.",
        "Half-life — Both ~30 minutes SC. Similar dosing windows.",
      ],
    },
    {
      type: "heading",
      text: "Mechanism Deep Dive: Where They Differ",
    },
    {
      type: "subheading",
      text: "GHS-R1a Selectivity",
    },
    {
      type: "paragraph",
      text: "Ipamorelin is widely described as the most selective GHS-R1a agonist currently available in research peptide form. It does not meaningfully interact with cortistatin receptors, does not raise cortisol at research doses, and does not activate prolactin pathways at doses below approximately 200 µg/kg in rodent studies. This makes it the preferred compound when researchers want clean GH axis stimulation without confounding neuroendocrine noise.",
    },
    {
      type: "paragraph",
      text: "Hexarelin binds GHS-R1a but also demonstrates significant affinity for CD36, a scavenger receptor expressed on cardiomyocytes and macrophages. This dual-receptor engagement drives hexarelin's notable cardioprotective effects — observed in ischemia-reperfusion models even when GH was suppressed pharmacologically, confirming a GH-independent mechanism. For researchers focused specifically on cardiac tissue protection, hexarelin's CD36 activity is a meaningful advantage.",
    },
    {
      type: "subheading",
      text: "Cortisol and ACTH — A Key Safety Consideration",
    },
    {
      type: "paragraph",
      text: "Hexarelin elevates ACTH and cortisol in a dose-dependent manner in multiple human and rodent studies. At doses used for GH-pulse stimulation (100–200 µg in humans, proportionally adjusted for rodent weight), the cortisol elevation is modest — but it is non-zero and must be tracked as a confounding variable. Ipamorelin produces no detectable ACTH/cortisol stimulation at equivalent GH-stimulating doses. This is perhaps the single most important practical reason researchers default to ipamorelin for clean GH-axis protocols.",
    },
    {
      type: "heading",
      text: "Desensitization Kinetics: Long-Run Protocol Design",
    },
    {
      type: "paragraph",
      text: "Both compounds cause GHS-R1a downregulation with chronic use, but at different rates. Hexarelin desensitizes meaningfully within 4–6 weeks of daily dosing in rodent studies, with GH pulse amplitude dropping ~30% by week 8. Recovery after washout requires 3–4 weeks in most models. Ipamorelin's slower desensitization profile makes it better suited to 8–12 week continuous protocols where maintaining GH pulsatility matters.",
    },
    {
      type: "list",
      items: [
        "Short protocol (≤4 weeks): Either compound appropriate. Hexarelin offers higher GH peak per dose.",
        "Medium protocol (4–8 weeks): Ipamorelin preferred for sustained GH axis stimulation.",
        "Long protocol (8–12+ weeks): Ipamorelin with planned 2-week washout at week 8.",
        "Cardiac focus: Hexarelin regardless of duration — CD36 effect is the primary target.",
      ],
    },
    {
      type: "heading",
      text: "Research Applications by Use Case",
    },
    {
      type: "subheading",
      text: "When to Use Ipamorelin",
    },
    {
      type: "list",
      items: [
        "GH axis stimulation studies requiring clean neuroendocrine endpoints",
        "Long-duration protocols (8–12 weeks) without planned receptor washout",
        "Body composition and lipolysis research where cortisol confound must be minimized",
        "Sleep architecture studies — ipamorelin peaks during slow-wave sleep without disrupting cortisol rhythms",
        "Combination stacks with CJC-1295 (No-DAC or DAC) for synergistic GHRH+GHS stimulation",
      ],
    },
    {
      type: "subheading",
      text: "When to Use Hexarelin",
    },
    {
      type: "list",
      items: [
        "Cardiac ischemia-reperfusion models — CD36-mediated cardioprotection is hexarelin's unique advantage",
        "Short-burst GH stimulation protocols where peak amplitude matters more than sustained pulse",
        "Studies specifically examining GHS-R1a desensitization kinetics as a dependent variable",
        "Heart failure and cardiomyopathy models where both GH and CD36 pathways are relevant",
        "Comparative pharmacology studies examining selective vs non-selective GHS-R1a agents",
      ],
    },
    {
      type: "heading",
      text: "Combination Protocols",
    },
    {
      type: "paragraph",
      text: "Neither hexarelin nor ipamorelin is typically combined with the other in the same stack — they compete for the same primary receptor and one would likely antagonize the other's potency. Instead, researchers stack either compound with a GHRH analog (CJC-1295, sermorelin, or tesamorelin) to engage both arms of the GH axis for synergistic effect.",
    },
    {
      type: "paragraph",
      text: "The CJC-1295 + ipamorelin combination is the most widely studied and replicates the physiological dual-signal (GHRH + ghrelin) that governs natural GH pulsatility. The CJC-1295 + hexarelin combination provides a similar dual-signal benefit but adds CD36-mediated off-target activity — useful in cardiac or vascular research but noisy for clean GH-axis studies.",
    },
    {
      type: "heading",
      text: "Sourcing and Quality Notes",
    },
    {
      type: "paragraph",
      text: "Both hexarelin and ipamorelin should be sourced with HPLC purity ≥ 98% and mass-spec identity confirmation. Hexarelin in particular is susceptible to substitution with GHRP-6 or GHRP-2, which share partial sequence similarity — always verify via mass spec, not HPLC alone. Certificate of Analysis (COA) from a third-party laboratory should confirm both purity and identity for each batch.",
    },
    {
      type: "heading",
      text: "Summary",
    },
    {
      type: "paragraph",
      text: "Ipamorelin is the default GHS for most GH-axis research due to its clean receptor selectivity, absence of cortisol elevation, and slow desensitization profile. Hexarelin is the preferred choice when cardiac tissue protection is a research endpoint, or when peak GH amplitude in short protocols is the priority. Both are legitimate research tools — the right choice depends entirely on your endpoint design.",
    },
  ],
};
