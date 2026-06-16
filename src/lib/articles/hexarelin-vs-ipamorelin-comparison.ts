import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "hexarelin-vs-ipamorelin-comparison",
  title: "Hexarelin vs. Ipamorelin: A Research Comparison",
  description:
    "A head-to-head research comparison of hexarelin and ipamorelin — two synthetic GHSs with notably different selectivity profiles, potency levels, and off-target effects. What the literature shows.",
  category: "Compound Profiles",
  readMinutes: 10,
  publishedAt: "2026-06-16",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Hexarelin and ipamorelin are both synthetic growth hormone secretagogues (GHSs) — compounds that stimulate GH release via the GHS-R1a (ghrelin) receptor. Despite acting at the same receptor, they have substantially different pharmacological profiles in published research, making the comparison meaningful for researchers designing studies that involve the GH axis.",
    },
    {
      type: "paragraph",
      text: "This article compares hexarelin and ipamorelin across the parameters most relevant to research protocol design: potency, selectivity, cardiac effects, desensitization dynamics, and appropriate use cases.",
    },
    {
      type: "heading",
      text: "Background: Two Routes to GH Stimulation",
    },
    {
      type: "subheading",
      text: "Hexarelin",
    },
    {
      type: "paragraph",
      text: "Hexarelin (His-D-2-Methyl-Trp-Ala-Trp-D-Phe-Lys-NH2) is a hexapeptide GHS developed in the 1990s by Deghenghi and colleagues. It is among the most potent synthetic GHSs identified, producing robust GH release at low doses. Hexarelin binds not only GHS-R1a but also the CD36 scavenger receptor — a secondary binding site with distinct biological significance, particularly in cardiovascular tissue.",
    },
    {
      type: "subheading",
      text: "Ipamorelin",
    },
    {
      type: "paragraph",
      text: "Ipamorelin (Aib-His-D-2-Nal-D-Phe-Lys-NH2) is a pentapeptide GHS developed by Novo Nordisk. Its primary pharmacological distinction is high selectivity: it stimulates GH release through GHS-R1a with minimal off-target activity at other receptors, including the CD36 site. This selectivity reduces cortisol, prolactin, and appetite-stimulating effects compared to less selective GHSs.",
    },
    {
      type: "heading",
      text: "GH-Releasing Potency",
    },
    {
      type: "paragraph",
      text: "In direct comparison studies in rat models, hexarelin consistently produces higher peak GH responses than ipamorelin at equivalent molar doses. Hexarelin's GH-stimulating efficacy is among the highest documented for any synthetic GHS — comparable to or exceeding GHRP-2 and GHRP-6 in some models.",
    },
    {
      type: "paragraph",
      text: "The tradeoff for this potency is reduced selectivity. For researchers where maximum GH stimulation is the endpoint, hexarelin provides a higher signal ceiling. For research requiring clean GH axis activation without HPA or prolactin confounders, ipamorelin's lower but more selective GH response is more appropriate.",
    },
    {
      type: "heading",
      text: "Off-Target Effects: The Selectivity Divide",
    },
    {
      type: "subheading",
      text: "Cortisol and ACTH",
    },
    {
      type: "paragraph",
      text: "Hexarelin stimulates cortisol and ACTH release in a dose-dependent manner in multiple species including humans. A notable study by Ghigo et al. (1994) demonstrated hexarelin's clear HPA axis activation at doses used for GH stimulation. This effect is not merely a secondary consequence of GH — hexarelin appears to have direct CNS effects on corticotropin-releasing hormone (CRH) pathways that contribute to ACTH elevation.",
    },
    {
      type: "paragraph",
      text: "Ipamorelin, by contrast, shows minimal-to-negligible cortisol and ACTH stimulation at GH-effective doses across the published literature. This is the most consequential functional difference between the two compounds for research purposes.",
    },
    {
      type: "subheading",
      text: "Prolactin",
    },
    {
      type: "paragraph",
      text: "Both compounds can stimulate prolactin, but hexarelin shows a more pronounced prolactin response at equivalent GH-stimulating doses. Ipamorelin's prolactin elevation, when observed, tends to be modest and at the threshold of statistical significance in many studies. For research involving reproductive biology, mammary gland function, or immune endpoints where prolactin is a confounding variable, ipamorelin offers cleaner experimental conditions.",
    },
    {
      type: "heading",
      text: "The Cardiac Effect: Hexarelin's Unique Profile",
    },
    {
      type: "paragraph",
      text: "The most distinctive research application of hexarelin — and the clearest functional difference from ipamorelin — is its documented activity at the CD36 scavenger receptor in cardiac tissue. This binding site is independent of the GHS-R1a receptor and does not appear to be involved in GH release.",
    },
    {
      type: "paragraph",
      text: "Research by Broglio and colleagues, and subsequently replicated in multiple cardiac ischemia models, has shown that hexarelin produces cardioprotective effects through this CD36-mediated pathway. Key findings include:",
    },
    {
      type: "list",
      items: [
        "Reduced infarct size in ischemia-reperfusion models when hexarelin is administered at the time of reperfusion.",
        "Improved cardiac function metrics (ejection fraction, ventricular pressure development) following ischemic injury.",
        "Anti-apoptotic effects in cardiomyocytes under hypoxic stress.",
        "These cardioprotective effects appear partially GH-independent — they are preserved even when GH elevation is blocked, implicating the CD36 pathway as a direct mechanism.",
      ],
    },
    {
      type: "paragraph",
      text: "Ipamorelin does not bind CD36 and does not appear to produce equivalent cardioprotective effects in ischemia models. For cardiovascular research specifically — particularly studies on cardiac ischemia, cardiomyopathy, or myocardial protection — hexarelin has a distinct and unique mechanistic profile that ipamorelin does not replicate.",
    },
    {
      type: "heading",
      text: "Tachyphylaxis and Desensitization",
    },
    {
      type: "paragraph",
      text: "Both hexarelin and ipamorelin are subject to GHS-R1a receptor downregulation with repeated administration — a class effect of GHSRAs. However, hexarelin desensitization appears more pronounced than with ipamorelin in studies examining repeated dosing over multi-day periods.",
    },
    {
      type: "paragraph",
      text: "Multiple studies have shown that hexarelin's GH-stimulating response attenuates significantly with twice-daily administration over one to two weeks, while ipamorelin maintains a more durable response under equivalent pulsatile dosing protocols. This has meaningful implications for chronic study design: researchers using hexarelin for multi-week GH axis studies should build in washout periods or use dose escalation strategies to account for progressive desensitization.",
    },
    {
      type: "heading",
      text: "Side-by-Side Comparison",
    },
    {
      type: "table",
      headers: ["Parameter", "Hexarelin", "Ipamorelin"],
      rows: [
        ["GH-stimulating potency", "Very High", "Moderate–High"],
        ["GHS-R1a selectivity", "Moderate (also binds CD36)", "High (GHS-R1a selective)"],
        ["Cortisol/ACTH stimulation", "Moderate–High", "Minimal"],
        ["Prolactin stimulation", "Moderate", "Minimal–Low"],
        ["Cardiac/CD36 effects", "Yes (documented)", "No"],
        ["Tachyphylaxis rate", "Higher (faster onset)", "Lower (slower onset)"],
        ["Appetite stimulation", "Low–Moderate", "Low"],
        ["Primary research use case", "Cardiac ischemia, max GH stimulation", "Clean GH axis research, chronic protocols"],
      ],
    },
    {
      type: "heading",
      text: "Choosing Between Them: Research Application Guide",
    },
    {
      type: "paragraph",
      text: "The choice between hexarelin and ipamorelin should be driven by the specific endpoints under investigation:",
    },
    {
      type: "list",
      items: [
        "Cardiac ischemia/reperfusion models, cardiomyopathy research, or CD36 pathway studies → Hexarelin is the appropriate choice; ipamorelin lacks this mechanism.",
        "GH axis stimulation studies where cortisol and prolactin confounders must be minimized → Ipamorelin is the better-controlled research tool.",
        "Chronic dosing protocols (≥2 weeks) studying sustained GH effects → Ipamorelin's lower tachyphylaxis rate is an advantage.",
        "Maximum acute GH stimulation as a positive control or endpoint → Hexarelin provides a higher ceiling.",
        "Body composition studies requiring clean GH-dependent outcomes without appetite confounders → Ipamorelin offers cleaner separation of GH effects from food intake variables.",
      ],
    },
    {
      type: "heading",
      text: "Handling and Storage",
    },
    {
      type: "paragraph",
      text: "Both hexarelin and ipamorelin are supplied as lyophilized powders, reconstituted in bacteriostatic water, and stored at 2–8°C after reconstitution. Both are stable for several weeks when refrigerated and protected from light. As with all peptides, verify purity documentation (HPLC ≥98%, batch-specific COA) from the supplying source before use in research protocols.",
    },
    {
      type: "heading",
      text: "Summary",
    },
    {
      type: "paragraph",
      text: "Hexarelin and ipamorelin share a receptor and a GH-stimulating mechanism but diverge significantly in their selectivity, off-target effects, and specialized research applications. Hexarelin's potency and CD36-mediated cardiac effects make it irreplaceable in cardiovascular and maximum-GH-output research contexts. Ipamorelin's selectivity and durability of response make it the tool of choice for GH axis studies requiring clean experimental conditions over extended protocols.",
    },
    {
      type: "disclaimer",
      text: "For research purposes only. Not intended for human use. All references are to published preclinical and translational research literature.",
    },
  ],
};
