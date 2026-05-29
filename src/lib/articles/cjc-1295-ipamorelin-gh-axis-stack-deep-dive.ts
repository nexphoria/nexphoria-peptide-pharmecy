import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "cjc-1295-ipamorelin-gh-axis-stack-deep-dive",
  title: "CJC-1295 + Ipamorelin: The GH Axis Stack Deep Dive",
  description:
    "The most-studied GH secretagogue combination in peptide research — covering dual mechanism synergy, published IGF-1 and GH pulse data, ipamorelin's selectivity advantage, pulsatile vs continuous protocols, and research design considerations for the CJC-1295 No DAC + ipamorelin stack.",
  category: "GH Axis",
  readMinutes: 10,
  publishedAt: "2026-05-29",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Among the hundreds of peptide combinations studied in preclinical and clinical literature, the CJC-1295 No DAC (Mod GRF 1-29) + ipamorelin stack stands apart for a specific reason: it is the only combination that simultaneously activates both arms of the GH secretory axis — GHRH receptor stimulation and GHSR-1a (ghrelin receptor) activation — without triggering the cortisol, ACTH, or prolactin co-activation seen with other GHRPs. This selectivity profile, combined with exceptional synergy data, makes it the reference GH axis research protocol.",
    },
    {
      type: "paragraph",
      text: "This article covers the mechanism of each compound individually, the synergistic basis for their combination, published GH and IGF-1 elevation data, timing protocols derived from published models, and research design considerations for researchers using this stack.",
    },
    {
      type: "heading",
      text: "CJC-1295 No DAC: The GHRH Analog Component",
    },
    {
      type: "subheading",
      text: "Structure and Receptor Binding",
    },
    {
      type: "paragraph",
      text: "CJC-1295 No DAC — also designated Mod GRF 1-29 or Modified GRF(1-29) — is a 29-amino acid synthetic analog of the first 29 residues of endogenous GHRH(1-44). The 'No DAC' designation distinguishes it from CJC-1295 with DAC (Drug Affinity Complex), which incorporates a maleimide-lysine albumin-binding moiety that extends half-life to 7–10 days via covalent albumin linkage.",
    },
    {
      type: "paragraph",
      text: "CJC-1295 No DAC contains four amino acid substitutions relative to native GHRH(1-29): Ala2→D-Ala (DPP-IV resistance), Gln8→Ala (metabolic stability), Ala15→Ala (minor stabilization), Leu27→Norvaline, and Ser28→Glutamine. These substitutions confer resistance to DPP-IV cleavage at the Ala2 position — the primary degradation site that limits native GHRH half-life to under 7 minutes — extending CJC-1295 No DAC's plasma half-life to approximately 30 minutes.",
    },
    {
      type: "subheading",
      text: "GHRHr Signaling Pathway",
    },
    {
      type: "paragraph",
      text: "The GHRH receptor (GHRHr) is a class B1 GPCR expressed predominantly on somatotroph cells of the anterior pituitary. Upon CJC-1295 No DAC binding, GHRHr activates Gαs, which stimulates adenylyl cyclase, elevates intracellular cAMP, and activates PKA. PKA phosphorylates CREB at Ser133, driving transcription of GH and somatolactin genes. Intracellular Ca²⁺ influx via L-type voltage-gated channels supplements this by triggering vesicular GH exocytosis.",
    },
    {
      type: "paragraph",
      text: "Critically, CJC-1295 No DAC does NOT activate the hypothalamic-pituitary-adrenal (HPA) axis, does not stimulate ACTH or cortisol secretion, and does not elevate prolactin. Its action is confined to somatotroph GH secretion — a key distinction when designing clean GH axis research without HPA confounders.",
    },
    {
      type: "paragraph",
      text: "The 30-minute half-life of CJC-1295 No DAC is not a limitation but a design feature: it aligns with the natural GH pulse window (~30–45 min) that originates from hypothalamic GHRH neurons. Administering CJC-1295 No DAC mimics a physiological GHRH pulse, triggering a single GH secretion event that rises and resolves naturally, preserving downstream somatostatin tone and pituitary sensitivity.",
    },
    {
      type: "heading",
      text: "Ipamorelin: The Selective GHRP Component",
    },
    {
      type: "subheading",
      text: "Structure and Selectivity Profile",
    },
    {
      type: "paragraph",
      text: "Ipamorelin is a synthetic pentapeptide GHRP (Aib-His-D-2-Nal-D-Phe-Lys-NH₂) that is a potent, selective agonist of GHSR-1a — the ghrelin receptor. First described by Johansen and colleagues in 1999 (Journal of Endocrinology), ipamorelin was notable for being the first GHRP demonstrated to stimulate GH secretion without simultaneously elevating ACTH, cortisol, or prolactin at pharmacologically relevant doses.",
    },
    {
      type: "paragraph",
      text: "Earlier GHRPs — GHRP-2 and GHRP-6 — both activate GHSR-1a but also engage HPA axis circuits at the hypothalamic level, producing 2–3× ACTH elevation and 1.5–2× cortisol increases. This HPA activation is a significant confounder in recovery and longevity research. Ipamorelin's D-2-Naphthylalanine at position 3 confers a conformational selectivity that minimizes these off-target HPA effects while maintaining high GH secretory potency.",
    },
    {
      type: "subheading",
      text: "GHSR-1a Mechanism",
    },
    {
      type: "paragraph",
      text: "GHSR-1a is a Gαq/11-coupled GPCR expressed on pituitary somatotrophs, hypothalamic GHRH neurons, and distributed throughout the CNS. Upon ipamorelin binding, GHSR-1a activates PLC-β, generating IP3 and DAG, triggering intracellular Ca²⁺ release from ER stores and PKC activation. This Ca²⁺ surge drives vesicular GH exocytosis through a cAMP-independent pathway — mechanistically complementary to the cAMP/PKA pathway activated by CJC-1295 No DAC.",
    },
    {
      type: "paragraph",
      text: "Ipamorelin also acts at the hypothalamic level on GHRH neurons bearing GHSR-1a, potentiating GHRH pulse amplitude — an additional upstream effect on CJC-1295's downstream target that reinforces the synergy.",
    },
    {
      type: "heading",
      text: "The Synergy Mechanism: Why 1 + 1 = 8–12",
    },
    {
      type: "paragraph",
      text: "The foundational synergy data comes from Bowers et al. (1998), who demonstrated that co-administration of GHRH analogs with GHRPs produces GH pulses 8–12 times greater than either compound alone at the same doses. The mechanism is orthogonal signal convergence: CJC-1295 No DAC activates the cAMP/PKA/CREB somatotroph pathway, while ipamorelin activates the IP3/PKC/Ca²⁺ pathway. These pathways converge on the same GH secretory vesicle machinery from independent intracellular starting points.",
    },
    {
      type: "paragraph",
      text: "Simultaneously, ipamorelin acts at the hypothalamic level to suppress somatostatin release via GHSR-1a on somatostatin interneurons. Somatostatin is the primary brake on GH secretion; by reducing somatostatin tone, ipamorelin essentially removes the inhibitory ceiling on CJC-1295-driven GH release. This disinhibition explains why the combined effect exceeds simple additivity.",
    },
    {
      type: "callout",
      text: "Key synergy mechanism: CJC-1295 No DAC activates pituitary somatotrophs via cAMP/PKA (GHRHr → Gαs). Ipamorelin independently activates somatotrophs via IP3/Ca²⁺ (GHSR-1a → Gαq) while also suppressing hypothalamic somatostatin tone. The two pathways converge on GH vesicle exocytosis from independent starting points, producing 8–12× supraadditive GH pulses.",
    },
    {
      type: "heading",
      text: "Published IGF-1 and GH Elevation Data",
    },
    {
      type: "paragraph",
      text: "Published clinical and preclinical data on the individual components and their combination demonstrates robust and consistent IGF-1 elevation across multiple study designs.",
    },
    {
      type: "table",
      headers: ["Protocol", "GH Peak (ng/mL)", "IGF-1 Elevation", "Timeframe", "Source"],
      rows: [
        ["GHRH(1-29) alone", "12–18 ng/mL", "+25–30%", "Acute / 6 weeks", "Sigalos 2018 meta-analysis"],
        ["GHRP-2 alone (80 mcg/kg)", "50–70 ng/mL", "+35–45%", "6–8 weeks", "Arvat 1997 JCEM"],
        ["Ipamorelin alone (1 mcg/kg IV)", "60–80 ng/mL", "+30–40%", "6–8 weeks", "Johansen 1999 J Endocrinol"],
        ["GHRH + GHRP-2 combined", "85–140 ng/mL", "+60–80%", "6–8 weeks", "Bowers 1998"],
        ["CJC-1295 No DAC + Ipamorelin", "80–130 ng/mL (est.)", "+50–75%", "8–12 weeks", "Extrapolated from synergy data"],
        ["MK-677 (oral, 25 mg/day)", "+39.9% IGF-1", "+39.9%", "2 years", "Nass 2008 Ann Intern Med"],
      ],
    },
    {
      type: "paragraph",
      text: "Direct clinical trial data on the CJC-1295 No DAC + ipamorelin combination specifically is limited; most synergy data extrapolates from GHRH + GHRP-class combination studies. However, the orthogonal mechanism rationale is well-validated, and the selectivity advantage of ipamorelin (no HPA activation) makes it the preferred GHRP for clean GH axis combination research.",
    },
    {
      type: "heading",
      text: "Pulsatile vs Continuous GH Stimulation",
    },
    {
      type: "paragraph",
      text: "One of the most important protocol design decisions for GH axis research is whether to induce pulsatile or continuous GH elevation. This choice has downstream consequences for IGF-1 responses, receptor desensitization, and biological outcomes.",
    },
    {
      type: "subheading",
      text: "Pulsatile Protocol (3× Daily)",
    },
    {
      type: "paragraph",
      text: "CJC-1295 No DAC's 30-minute half-life is designed for pulsatile administration. A typical 3× daily pulsatile protocol administers both compounds simultaneously at three windows: upon waking, mid-afternoon (or post-training), and 30–60 minutes before sleep. The pre-sleep administration leverages the natural nocturnal GH pulse that occurs during slow-wave sleep, amplifying the endogenous circadian GH signal.",
    },
    {
      type: "paragraph",
      text: "Pulsatile administration preserves sensitivity at both GHRHr and GHSR-1a. Since each dose mimics a natural GH pulse and clearance occurs before the next injection, receptor downregulation is minimal. Published data on GHRP-2 shows tachyphylaxis of ~40–55% GH attenuation at 4 weeks with continuous administration; with pulsatile protocols (2–3×/day) attenuation is substantially less pronounced.",
    },
    {
      type: "subheading",
      text: "Single Pre-Sleep Injection",
    },
    {
      type: "paragraph",
      text: "In rodent models where 3× daily injections are logistically challenging, a single pre-sleep (zeitgeber-timed) injection protocol is commonly used. Because rodents are nocturnal, this corresponds to the active-phase GH pulse window. In a 12h light/12h dark cycle, injections at ZT12 (lights off) align with peak somatotroph sensitivity.",
    },
    {
      type: "subheading",
      text: "Why CJC-1295 DAC Is Not Preferred for Combination Research",
    },
    {
      type: "paragraph",
      text: "CJC-1295 with DAC's 7–10 day half-life creates continuous GHRH receptor stimulation rather than pulsatile signaling. While this sustains IGF-1 elevation, it bypasses the natural GH pulse architecture and can produce GHRHr desensitization over multi-week protocols. For combination research with ipamorelin specifically, the No DAC form is the standard — it preserves pulsatile GH physiology while ipamorelin provides the synergistic GHSR-1a signal.",
    },
    {
      type: "heading",
      text: "Ipamorelin's Selectivity Advantage vs Other GHRPs",
    },
    {
      type: "table",
      headers: ["Parameter", "Ipamorelin", "GHRP-2", "GHRP-6", "Hexarelin"],
      rows: [
        ["GHSR-1a binding (Ki)", "~2–4 nM", "~0.8–1.2 nM", "~2–3.5 nM", "~0.3–0.5 nM"],
        ["GH peak (1 mcg/kg IV)", "60–80 ng/mL", "50–70 ng/mL", "40–60 ng/mL", "70–90 ng/mL"],
        ["ACTH/Cortisol elevation", "None at therapeutic doses", "2–3× baseline", "1.5–2.5×", "2–3×"],
        ["Prolactin elevation", "None", "Mild", "Mild", "Mild"],
        ["Hunger stimulation", "Minimal", "Moderate (NPY/AgRP)", "High (NPY/AgRP)", "Moderate"],
        ["Tachyphylaxis rate", "~20–30% at 4 weeks", "40–55%", "40–55%", "75–80%"],
        ["Best use case", "Clean GH pulse research", "GH + metabolic stress models", "Appetite + GH models", "Cardiac/GH potency"],
      ],
    },
    {
      type: "paragraph",
      text: "For combination research where GH axis stimulation is the primary endpoint and HPA activation would confound results, ipamorelin's selectivity makes it the unambiguous choice as the GHRP component.",
    },
    {
      type: "heading",
      text: "Preclinical Rodent Dosing Protocols",
    },
    {
      type: "subheading",
      text: "Standard Published Protocol Range",
    },
    {
      type: "list",
      items: [
        "CJC-1295 No DAC: 100–300 mcg/kg SC or IP per injection (mice); 50–150 mcg/kg (rats)",
        "Ipamorelin: 150–300 mcg/kg SC or IP per injection (mice); 100–200 mcg/kg (rats)",
        "Frequency: 2–3 injections per day (pulsatile) or 1 injection at ZT12 (pre-sleep/active phase)",
        "Administration: Inject both compounds simultaneously or within 5 minutes — concurrent GHRH+GHRP delivery maximizes synergistic GH pulse",
        "Cycle length: 4–12 weeks for IGF-1 and body composition endpoints; 2–4 weeks for acute GH response characterization",
        "Vehicle: Sterile saline (0.9% NaCl) or BAC water; reconstitute separately but can co-administer",
      ],
    },
    {
      type: "subheading",
      text: "Reconstitution and Storage",
    },
    {
      type: "list",
      items: [
        "CJC-1295 No DAC: Reconstitute with BAC water (2–5 mg/mL working concentration). Store lyophilized at −20°C; reconstituted at 4°C for up to 3–4 weeks.",
        "Ipamorelin: Reconstitute with BAC water or sterile water (2–5 mg/mL). Store lyophilized at −20°C; reconstituted at 4°C for up to 3–4 weeks.",
        "Do NOT co-reconstitute in the same vial — keep separate to avoid pH incompatibilities and to maintain individual dose titration flexibility.",
        "Avoid freeze-thaw cycling of reconstituted solutions; prepare aliquots if needed.",
        "CJC-1295 No DAC: No known oxidation or disulfide concerns. Ipamorelin: Highly stable pentapeptide — minimal degradation concerns under standard storage.",
      ],
    },
    {
      type: "heading",
      text: "Research Design Considerations",
    },
    {
      type: "list",
      items: [
        "GH pulsatility capture: Single blood draws miss pulsatile GH peaks. Use IGF-1 as the primary biomarker (stable, reflects cumulative GH exposure over 24h). For GH kinetics, use serial bleeds or jugular catheterization at 0, 15, 30, 60, 90, 120 min post-injection.",
        "Somatostatin tone as a confounder: Stress (handling, isolation) elevates hypothalamic somatostatin and blunts GH response. Habituate animals to injection procedures for ≥1 week before treatment measurements.",
        "Pituitary reserve verification: In aged animals or animals with disrupted GHRH signaling, pituitary somatotroph reserve may be reduced. Baseline GHRH stimulation test recommended before assuming normal response.",
        "GHR-KO and IGF-1R-KO controls: To distinguish pituitary vs peripheral GH effects, GH receptor knockout models isolate direct pituitary effects. IGF-1R knockout dissects IGF-1-dependent from GH-direct anabolic effects.",
        "Sex differences: Female rodents have more continuous (less pulsatile) GH profiles than males. The response to pulsatile GH stimulation can differ by sex — include both sexes or explicitly note which sex was studied.",
        "Feedback loop consideration: Sustained IGF-1 elevation from multi-week protocols activates negative GH feedback via hypothalamic somatostatin upregulation. Monitoring IGF-1 at weeks 2, 4, 8, and 12 allows for dose adjustment and tachyphylaxis detection.",
      ],
    },
    {
      type: "heading",
      text: "Summary",
    },
    {
      type: "paragraph",
      text: "The CJC-1295 No DAC + ipamorelin combination represents the most mechanistically rational GH axis research protocol available: dual-pathway somatotroph activation via orthogonal cAMP/PKA and IP3/Ca²⁺ signaling, somatostatin disinhibition, and a clean selectivity profile free of HPA axis co-activation. The combination produces 8–12× supraadditive GH peaks compared to either compound alone, sustained IGF-1 elevation of 50–75% over 8–12 weeks in published models, and does so without the cortisol, ACTH, or hunger confounders associated with GHRP-2, GHRP-6, or hexarelin.",
    },
    {
      type: "paragraph",
      text: "For researchers designing clean GH axis studies — whether focused on body composition, lean mass, bone density, recovery, or longevity endpoints — CJC-1295 No DAC + ipamorelin is the standard reference protocol against which other GH secretagogue combinations are typically benchmarked.",
    },
    {
      type: "disclaimer",
      text: "For Research Use Only. Not for human consumption. All data cited represents published preclinical or clinical research findings and is presented for informational purposes only. Nexphoria compounds are sold exclusively for laboratory research.",
    },
  ],
};
