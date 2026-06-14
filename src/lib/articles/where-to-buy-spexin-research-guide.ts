import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "where-to-buy-spexin-research-guide",
  title: "Where to Buy Spexin for Research: Sourcing, Purity, and What to Know",
  description:
    "Spexin (NPQ/SPX) is a neuropeptide studied for its role in metabolism, anxiety, and reproductive biology. This guide covers what to look for when sourcing spexin for research use, purity standards, and key quality checkpoints.",
  category: "Compound Profiles",
  readMinutes: 6,
  publishedAt: "2026-11-05",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Spexin — also known as NPQ/SPX or C12orf39 peptide — is a 14-amino-acid neuropeptide that was computationally predicted and then experimentally confirmed as an endogenous signaling molecule. Since its identification, it has attracted research interest across several biological contexts: energy balance, anxiety-like behavior, reproductive axis regulation, and cardiovascular tone. This guide covers the essentials for researchers looking to source spexin.",
    },
    {
      type: "heading",
      text: "What Is Spexin?",
    },
    {
      type: "paragraph",
      text: "Spexin (sequence: NWTPQAMLYLKGAQ-NH2) is expressed in the hypothalamus, spinal cord, heart, kidney, and gastrointestinal tract. It acts through galanin receptor subtypes GALR2 and GALR3, placing it within the galanin peptide family pharmacologically despite having a distinct endogenous gene. Its receptor expression profile gives it a wide range of potential biological activities across CNS and peripheral tissue models.",
    },
    {
      type: "paragraph",
      text: "Research in rodent models has examined spexin in the contexts of: (1) metabolic regulation — circulating spexin levels are lower in obese individuals and appear inversely correlated with adiposity markers; (2) anxiety-like behavior — GALR2/3 engagement has been associated with anxiolytic effects in some paradigms; and (3) reproductive hormone axis — spexin has been shown to suppress LH secretion via GALR2 in some animal models.",
    },
    {
      type: "callout",
      text: "Spexin is a relatively niche peptide in the research market compared to BPC-157 or semaglutide. Supply availability is more variable, which makes vendor quality verification especially important.",
    },
    {
      type: "heading",
      text: "What to Look for When Sourcing Spexin",
    },
    {
      type: "paragraph",
      text: "Because spexin is a 14-amino-acid C-terminally amidated peptide, synthesis complexity is moderate. C-terminal amidation (–NH2) is a structural feature that must be verified — the non-amidated form has different pharmacology. A complete Certificate of Analysis should confirm: amino acid sequence accuracy, HPLC purity ≥98% (minimum; ≥99% preferred for sensitive receptor binding studies), mass spectrometry confirmation of the correct molecular weight (1,379.6 Da for spexin-14), and endotoxin testing if the compound will be used in cell culture or in vivo models.",
    },
    {
      type: "list",
      items: [
        "Confirm C-terminal amidation (–NH2) in the COA — this is a critical structural feature",
        "Request HPLC trace showing peak integration and retention time",
        "Verify mass spec data: MW should be 1,379.6 Da (spexin-14)",
        "Request LAL endotoxin data for any in vitro or in vivo application",
        "Cold-chain shipping is required — spexin is stable lyophilized but susceptible to degradation from heat exposure in solution",
        "Avoid vendors who cannot provide lot-specific data — generic or batch-pool COAs are insufficient",
      ],
    },
    {
      type: "heading",
      text: "Reconstitution and Storage",
    },
    {
      type: "paragraph",
      text: "Spexin lyophilized powder should be stored at -20°C or below in the sealed vial. For reconstitution, sterile water or bacteriostatic water is appropriate. Spexin is generally water-soluble at standard concentrations used in research (0.1–1 mg/mL). Once reconstituted, working solutions should be aliquoted to avoid repeated freeze-thaw cycles and stored at -80°C for long-term stability or at -20°C for up to 4 weeks.",
    },
    {
      type: "paragraph",
      text: "Avoid exposure to room temperature for extended periods and protect from light. As with most small neuropeptides, oxidation is a degradation pathway to manage — using freshly prepared solutions for each experimental session is best practice.",
    },
    {
      type: "heading",
      text: "Research Applications Summary",
    },
    {
      type: "table",
      headers: ["Research Area", "Model System", "Mechanism"],
      rows: [
        ["Energy balance / adiposity", "Rodent (ob/ob, diet-induced obesity)", "GALR2/3 activation, GLP-1 interaction"],
        ["Anxiety and HPA axis", "Rodent fear conditioning, EPM", "GALR2/3 CNS engagement"],
        ["Reproductive axis", "Rodent LH suppression models", "Hypothalamic GALR2 agonism"],
        ["Cardiovascular tone", "Isolated heart perfusion, BP telemetry", "Peripheral GALR2/3 expression"],
        ["GI motility", "In vitro intestinal smooth muscle", "Enteric galanin receptor subtypes"],
      ],
    },
    {
      type: "heading",
      text: "Where Nexphoria Stands on Spexin",
    },
    {
      type: "paragraph",
      text: "Nexphoria evaluates catalog additions based on research demand and supply-chain quality viability. For niche peptides like spexin where synthesis complexity is manageable but lot-to-lot consistency requires close QC oversight, we maintain a rigorous evaluation process before listing. If spexin is not currently in the active catalog, contact us directly — we can often accommodate qualified researcher requests for custom lots with full COA documentation.",
    },
    {
      type: "callout",
      text: "Nexphoria provides lot-specific COA, HPLC purity data, mass spec confirmation, and endotoxin testing on all catalog compounds. Researchers sourcing niche peptides should hold any supplier to the same standard.",
    },
    {
      type: "disclaimer",
      text: "Spexin and all compounds referenced here are sold for research purposes only. This content is for educational use by qualified researchers. It does not constitute medical advice or guidance for human use.",
    },
  ],
};
