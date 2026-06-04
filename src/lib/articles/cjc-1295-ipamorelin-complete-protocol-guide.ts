import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "cjc-1295-ipamorelin-complete-protocol-guide",
  title: "CJC-1295 + Ipamorelin: Complete Research Protocol Guide",
  description:
    "A detailed research reference for CJC-1295 and Ipamorelin combination studies — covering pharmacology, timing rationale, reconstitution, storage, and what the published evidence shows for combined GH axis research.",
  category: "GH Axis",
  readMinutes: 11,
  publishedAt: "2026-06-04",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "CJC-1295 and Ipamorelin are two distinct classes of growth hormone secretagogue that are frequently studied in combination. CJC-1295 is a growth hormone-releasing hormone (GHRH) analog; Ipamorelin is a growth hormone-releasing peptide (GHRP) and selective GHS-R1a agonist. They target different receptors through mechanistically complementary pathways, and their combination has been documented to produce synergistic — not merely additive — GH release in preclinical models.",
    },
    {
      type: "paragraph",
      text: "This guide covers the pharmacology of each compound, the mechanistic rationale for combined use, reconstitution and handling considerations, what the published research shows, and protocol design considerations relevant to researchers.",
    },
    {
      type: "heading",
      text: "CJC-1295: GHRH Analog Pharmacology",
    },
    {
      type: "subheading",
      text: "Structure and Mechanism",
    },
    {
      type: "paragraph",
      text: "CJC-1295 (also known as DAC:GRF, Drug Affinity Complex: Growth Hormone-Releasing Factor) is a 30-amino acid synthetic analog of endogenous GHRH, modified with a Lys29 maleimide-reactive linker that enables covalent binding to endogenous albumin following subcutaneous administration. This albumin-binding mechanism — the 'DAC' component — dramatically extends the compound's half-life from the approximately 7 minutes of native GHRH to an estimated 6–8 days in human studies.",
    },
    {
      type: "paragraph",
      text: "CJC-1295 binds to GHRH receptors (GHRHR) on somatotroph cells in the anterior pituitary, stimulating GH synthesis and secretion through a Gs-coupled cAMP/PKA pathway. Unlike exogenous GH administration, GHRHR activation preserves the pulsatile character of GH release, operating within the existing hypothalamic-pituitary feedback architecture.",
    },
    {
      type: "subheading",
      text: "CJC-1295 Without DAC",
    },
    {
      type: "paragraph",
      text: "A commonly studied variant is CJC-1295 without DAC — sometimes referred to by the compound name 'Modified GRF 1-29' or 'Mod GRF 1-29.' This variant lacks the albumin-binding DAC modification, producing a half-life of approximately 30 minutes. It generates a more acute, pulsatile GH response rather than the sustained elevation associated with the DAC version. Research protocol selection between these variants depends on whether investigators are studying sustained GH axis stimulation or mimicking physiological GH pulse architecture.",
    },
    {
      type: "heading",
      text: "Ipamorelin: GHS-R1a Agonist Pharmacology",
    },
    {
      type: "subheading",
      text: "Structure and Mechanism",
    },
    {
      type: "paragraph",
      text: "Ipamorelin is a synthetic pentapeptide (Aib-His-D-2-Nal-D-Phe-Lys-NH₂) that acts as a selective agonist at the ghrelin receptor (GHS-R1a). It was developed specifically to achieve GH secretagogue activity with high selectivity — a significant advance over earlier GHRPs (GHRP-2, GHRP-6) that stimulate cortisol and prolactin secretion at GH-effective doses.",
    },
    {
      type: "paragraph",
      text: "Ipamorelin's selectivity for GH versus ACTH/cortisol stimulation makes it the preferred GHRP in research protocols where hormonal confounding needs to be minimized. Studies comparing Ipamorelin to GHRP-6 at equimolar doses have consistently shown that Ipamorelin produces negligible cortisol and prolactin elevation while maintaining meaningful GH secretagogue activity.",
    },
    {
      type: "subheading",
      text: "Half-Life and Pharmacokinetics",
    },
    {
      type: "paragraph",
      text: "Ipamorelin has a relatively short half-life of approximately 2 hours in preclinical models. This produces an acute GH pulse following administration, with return to baseline within 3–4 hours in most model systems. This pharmacokinetic profile supports research into the effects of GH pulsatility independent of chronic elevation.",
    },
    {
      type: "heading",
      text: "Mechanistic Rationale for Combination",
    },
    {
      type: "paragraph",
      text: "The synergistic GH release observed with CJC-1295 + Ipamorelin combination reflects the complementary mechanisms of GHRHR (pituitary somatotroph) stimulation and GHS-R1a activation. These two pathways converge on GH secretion through distinct second messenger systems:",
    },
    {
      type: "list",
      items: [
        "CJC-1295/GHRHR: Gs-coupled cAMP elevation → PKA activation → increased GH gene transcription and vesicular exocytosis",
        "Ipamorelin/GHS-R1a: Gq-coupled phospholipase C activation → IP3/DAG → intracellular calcium mobilization → exocytosis trigger",
        "Dual pathway activation produces synergistic calcium-dependent exocytosis beyond what either compound achieves alone",
        "Additionally, GHS-R1a activation in the hypothalamus may suppress somatostatin (SRIF) release — reducing the primary inhibitory brake on pituitary GH secretion and amplifying GHRH-driven response",
      ],
    },
    {
      type: "paragraph",
      text: "Multiple preclinical studies have documented 2–5× greater peak GH release with CJC-1295 + Ipamorelin versus either compound administered alone at matched doses. The somatostatin-suppression effect of GHS-R1a agonism is considered the primary mechanism of this supra-additive response.",
    },
    {
      type: "heading",
      text: "What the Published Research Shows",
    },
    {
      type: "subheading",
      text: "GH and IGF-1 Elevation",
    },
    {
      type: "paragraph",
      text: "The most thoroughly documented effects of CJC-1295 administration are dose-dependent elevations in GH and IGF-1 in both rodent and human studies. Teichman et al. (2006) reported that a single injection of CJC-1295 produced dose-dependent GH increases (peaking at 2–6 hours) and sustained IGF-1 elevations of 1.5–3× baseline persisting for 6–8 days in healthy adult volunteers — consistent with the compound's albumin-binding half-life extension.",
    },
    {
      type: "subheading",
      text: "Body Composition Studies",
    },
    {
      type: "paragraph",
      text: "In GH-deficient animal models, GHRH analog treatment has been associated with lean body mass preservation, reduced adiposity, and improved bone mineral density — consistent with the known effects of GH/IGF-1 signaling on body composition. Studies in aged rodents have shown that GHRH analog administration can partially reverse the age-related decline in GH pulsatility and associated body composition changes. Direct CJC-1295 body composition studies in human populations remain limited.",
    },
    {
      type: "subheading",
      text: "Cognitive and Neuroprotective Signals",
    },
    {
      type: "paragraph",
      text: "An emerging research area examines GH axis peptides in cognitive aging models. IGF-1 is known to cross the blood-brain barrier and exert neuroprotective effects through multiple pathways including anti-apoptotic signaling, neurogenesis support, and synaptic plasticity modulation. Several rodent aging studies have associated GHRH analog treatment with improved spatial memory performance and reduced markers of neuroinflammation, suggesting a potential CNS research application beyond metabolic endpoints.",
    },
    {
      type: "heading",
      text: "Reconstitution and Handling",
    },
    {
      type: "table",
      headers: ["Parameter", "CJC-1295 (DAC)", "Ipamorelin"],
      rows: [
        ["Typical vial size", "2 mg", "2 mg or 5 mg"],
        ["Reconstitution solvent", "Bacteriostatic water (BAC)", "Bacteriostatic water (BAC)"],
        ["Reconstitution volume", "1–2 mL per 2 mg vial", "1–2 mL per 2 mg vial"],
        ["Reconstituted concentration", "1–2 mg/mL", "1–2 mg/mL"],
        ["Reconstituted shelf life", "4–6 weeks at 2–8°C", "4 weeks at 2–8°C"],
        ["Lyophilized storage", "–20°C (stable 18+ months)", "–20°C (stable 18+ months)"],
        ["Light sensitivity", "Protect from light", "Protect from light"],
        ["Freeze-thaw cycles", "Minimize; use aliquots for long studies", "Minimize; use aliquots"],
      ],
    },
    {
      type: "paragraph",
      text: "CJC-1295 with DAC can be reconstituted in sterile saline as an alternative to bacteriostatic water if single-use protocols are followed. The DAC modification does not alter standard reconstitution technique but the albumin binding that occurs in vivo begins immediately upon subcutaneous injection — not in the vial — so the reconstituted product should be handled identically to other lyophilized peptides.",
    },
    {
      type: "heading",
      text: "Protocol Design Considerations",
    },
    {
      type: "subheading",
      text: "Timing and Administration",
    },
    {
      type: "paragraph",
      text: "Given CJC-1295 DAC's extended half-life, it is typically administered 1–2× per week in research protocols to maintain steady-state GHRH receptor activation. Ipamorelin, with its shorter half-life, is administered more frequently when researchers intend to study regular GH pulse stimulation. The timing of Ipamorelin administration relative to circadian GH secretion patterns (peak physiological GH release typically occurs during early slow-wave sleep) is a relevant experimental variable for protocols studying GH rhythm versus total secretion.",
    },
    {
      type: "subheading",
      text: "Endpoint Selection",
    },
    {
      type: "paragraph",
      text: "Key measurable endpoints in CJC-1295/Ipamorelin research include: serum GH (requires timed serial sampling due to pulsatility), serum IGF-1 (more stable, useful for sustained effects assessment), body composition (DEXA in larger animal models), bone biomarkers, and in aged models, cognitive performance measures. Researchers should define endpoints a priori based on the specific biological question being investigated.",
    },
    {
      type: "callout",
      text: "Purity Verification: Both CJC-1295 and Ipamorelin require HPLC ≥98% and mass spectrometry identity confirmation. CJC-1295 DAC in particular should be verified for correct Lys29 modification, as improperly synthesized material without the reactive linker will have a dramatically different in vivo pharmacokinetic profile.",
    },
    {
      type: "heading",
      text: "Summary",
    },
    {
      type: "paragraph",
      text: "CJC-1295 and Ipamorelin represent a mechanistically complementary GHRH/GHS research combination with documented synergistic GH secretagogue activity. CJC-1295's extended half-life (via DAC albumin binding) and Ipamorelin's GH selectivity (via GHS-R1a without cortisol/prolactin stimulation) make this one of the most rational GH axis research protocols currently studied. The published literature supports robust GH and IGF-1 elevation with both individual and combination administration; longer-term downstream studies in aged models and human populations represent the research frontier.",
    },
    {
      type: "disclaimer",
      text: "For research purposes only. Not intended for human or veterinary therapeutic use.",
    },
  ],
};
