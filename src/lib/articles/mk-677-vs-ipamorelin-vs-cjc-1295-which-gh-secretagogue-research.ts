import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "mk-677-vs-ipamorelin-vs-cjc-1295-which-gh-secretagogue-research",
  title: "MK-677 vs Ipamorelin vs CJC-1295: Which GH Secretagogue for Your Research?",
  description:
    "A comparative research guide to MK-677 (ibutamoren), ipamorelin, and CJC-1295 No DAC — covering mechanisms, published IGF-1 data, half-life differences, pulsatile vs continuous GH elevation, and a decision matrix for choosing the right compound for your study design.",
  category: "GH Axis",
  readMinutes: 10,
  publishedAt: "2026-05-30",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Three compounds dominate growth hormone axis research: MK-677 (ibutamoren), ipamorelin, and CJC-1295 No DAC (Mod GRF 1-29). Each activates a different receptor in the GH secretion pathway, operates on a different time scale, and produces a distinct GH release pattern. Choosing the wrong compound for your research question doesn't just reduce effect sizes — it changes the underlying biology you're studying. This guide clarifies the key differences and provides a structured decision framework for study design.",
    },
    {
      type: "heading",
      text: "The GH Axis: Three Points of Entry",
    },
    {
      type: "paragraph",
      text: "The somatotropic axis offers multiple pharmacological entry points. The hypothalamus releases GHRH (growth hormone-releasing hormone), which stimulates pituitary somatotroph cells via GHRHr. The hypothalamus also releases ghrelin (and its receptor agonists bind GHSR-1a), which amplifies GH pulse amplitude. Somatostatin provides negative feedback by inhibiting GH release. Each of our three compounds hits a different node in this circuit:",
    },
    {
      type: "list",
      items: [
        "CJC-1295 No DAC (Mod GRF 1-29) — GHRHr agonist; stimulates via Gs/cAMP/PKA pathway; half-life ~30 minutes",
        "Ipamorelin — GHSR-1a peptide agonist; stimulates via Gq/IP3/Ca²⁺ pathway; half-life ~2 hours",
        "MK-677 — GHSR-1a non-peptide agonist; same receptor as ipamorelin; half-life ~24 hours; orally active",
      ],
    },
    {
      type: "paragraph",
      text: "Because CJC-1295 No DAC and ipamorelin activate orthogonal intracellular signaling cascades in the same pituitary somatotroph cell (cAMP/PKA vs IP3/Ca²⁺), they are synergistic rather than additive when co-administered. MK-677 and ipamorelin share the same receptor (GHSR-1a) and will compete for binding — combining them is not recommended in most research designs as it introduces confounds without clear mechanistic benefit.",
    },
    {
      type: "heading",
      text: "MK-677: Oral Convenience, Continuous Elevation",
    },
    {
      type: "paragraph",
      text: "MK-677 is a non-peptide spiropiperidine compound (CAS 159752-10-0) that functions as a GHSR-1a full agonist. Its key pharmacological distinction is oral bioavailability — it survives GI proteolysis and achieves systemic exposure sufficient for measurable GHSR-1a activation, making it the only orally active GH secretagogue in common research use.",
    },
    {
      type: "paragraph",
      text: "Half-life is approximately 24 hours with Tmax of 2–3 hours following oral dosing. This means once-daily oral administration produces continuous, near-tonic GHSR-1a stimulation — a very different GH release pattern compared to the sharp, brief pulses produced by injectable peptide GHRPs. In human clinical studies, MK-677 elevates IGF-1 by approximately 39.9% at the 25 mg daily dose (Nass 2008, Annals of Internal Medicine, 2-year RCT). Lean mass gains of approximately 1.1 kg were observed alongside a clinically measurable increase in fasting glucose and insulin resistance — a key side effect profile researchers must account for in metabolic study designs.",
    },
    {
      type: "callout",
      text: "KEY PHARMACOLOGY: MK-677's 24-hour half-life produces tonic GHSR-1a stimulation and chronic IGF-1 elevation. This is physiologically distinct from pulsatile GH secretion and may not accurately model natural somatotropic physiology. Choose MK-677 when you want sustained IGF-1 elevation or are studying oral GH secretagogue pharmacology specifically — not when studying pulsatile GH dynamics.",
    },
    {
      type: "paragraph",
      text: "In rodents, MK-677 is typically dosed at 10–30 mg/kg orally once daily. The Chapman 1996 dose-response study established meaningful GH elevation beginning at approximately 3 mg/kg oral in rats. Because MK-677 is not a peptide, it does not require reconstitution — it is supplied as a solid or in a vehicle such as 1% methylcellulose for gavage administration.",
    },
    {
      type: "heading",
      text: "Ipamorelin: Clean Pulsatile GH Without HPA Activation",
    },
    {
      type: "paragraph",
      text: "Ipamorelin (Aib-His-D-2-Nal-D-Phe-Lys-NH₂) is a pentapeptide GHSR-1a agonist designed for high selectivity — it activates the ghrelin receptor's GH-releasing pathway without triggering the cortisol/ACTH elevation seen with GHRP-2, GHRP-6, or hexarelin. This HPA selectivity makes ipamorelin the cleanest tool for pure GH axis research when you want to avoid corticosteroid confounds.",
    },
    {
      type: "paragraph",
      text: "Half-life is approximately 2 hours following subcutaneous injection. GH pulse onset occurs within 5–15 minutes of administration, with peak GH levels reached at 15–30 minutes and return to baseline within 3–4 hours. This pharmacokinetic profile means ipamorelin must be injected 2–3 times daily to maintain research-relevant stimulation, or administered at specific times (pre-sleep ZT12 for nocturnal SWS pulse studies). The Johansen 1999 rat study established dose-response data showing GH peak elevation of approximately 3.6 ng/mL at 10 nmol/kg IV, with clean receptor selectivity confirmed by the absence of ACTH or cortisol elevation at any tested dose.",
    },
    {
      type: "paragraph",
      text: "For rodent research, ipamorelin is typically dosed at 100–300 mcg/kg subcutaneously in mice and 100–200 mcg/kg in rats, 2–3× per day. Reconstitute in BAC water at 1–2 mg/mL working concentration, store at 4°C for up to 4 weeks or at −20°C long-term.",
    },
    {
      type: "heading",
      text: "CJC-1295 No DAC: Pulsatile GHRH Analog with 30-Minute Half-Life",
    },
    {
      type: "paragraph",
      text: "CJC-1295 No DAC (also called Modified GRF 1-29 or Mod GRF 1-29) is a stabilized 29-amino acid analog of the first 29 residues of GHRH. The 'No DAC' designation distinguishes it from CJC-1295 with DAC (Drug Affinity Complex, ~8-day half-life via albumin binding) — CJC-1295 No DAC has a half-life of approximately 30 minutes, closely mimicking the half-life of endogenous GHRH (7–10 minutes, with CJC-1295 No DAC extended to ~30 min via four amino acid substitutions: Tyr₁ → His₁, Ala₂ → D-Ala², Gln₈ → Ala₈, Asn₂₉ → Leu₂₉).",
    },
    {
      type: "paragraph",
      text: "CJC-1295 No DAC acts via GHRHr (a class B1 GPCR) coupling to Gαs → adenylyl cyclase → cAMP → PKA → CREB. This pathway is entirely orthogonal to ipamorelin's Gq/IP3/Ca²⁺ cascade — which is why combining them produces a supra-additive rather than merely additive GH response. Bowers 1998 demonstrated 8–12× GH amplification when a GHRH analog was co-administered with a GHRP vs either compound alone, through dual pathway convergence at the somatotroph level.",
    },
    {
      type: "paragraph",
      text: "CJC-1295 No DAC produces a sharp, physiologically-patterned GH pulse when injected, and is cleared within 2–3 hours. Typical rodent doses: 100–300 mcg/kg SC in mice, 100–200 mcg/kg in rats. It must be co-injected with ipamorelin at the same time to capture the synergistic window; sequential injection separated by hours negates the amplification effect.",
    },
    {
      type: "heading",
      text: "Published IGF-1 Elevation Comparison",
    },
    {
      type: "table",
      headers: ["Compound", "IGF-1 Elevation", "Study", "Dose/Frequency", "Duration"],
      rows: [
        ["MK-677 (oral)", "+39.9%", "Nass 2008, Ann Intern Med", "25 mg/day PO", "24 months"],
        ["MK-677 (oral)", "+52.1%", "Chapman 1996", "25 mg/day PO", "4 weeks"],
        ["Ipamorelin (SC)", "+30–45%", "Johansen 1999", "200 mcg/kg 3×/day SC", "6 weeks (rat)"],
        ["CJC-1295 No DAC + Ipamorelin", "+60–85%", "Bowers 1998 analog data", "200 + 200 mcg/kg 3×/day SC", "6–12 weeks (rat)"],
        ["Sermorelin alone", "+35–50%", "Sigalos 2018 meta-analysis", "Various SC doses", "3–6 months"],
      ],
    },
    {
      type: "paragraph",
      text: "These figures should be interpreted carefully: study populations, species, age, and baseline IGF-1 status all affect IGF-1 response. IGF-1 elevation is also not linearly predictive of anabolic outcomes — the quality and pattern of GH pulses (amplitude, frequency, return to nadir) matters beyond total IGF-1 AUC.",
    },
    {
      type: "heading",
      text: "Decision Matrix: Which Compound for Your Research?",
    },
    {
      type: "table",
      headers: ["Research Question", "Best Choice", "Rationale"],
      rows: [
        ["Oral GH secretagogue pharmacology", "MK-677", "Only orally active option; no injection stress confound"],
        ["Long-term IGF-1 elevation (weeks-months)", "MK-677", "Once-daily oral; highest sustained IGF-1 elevation in published literature"],
        ["Pulsatile GH dynamics study", "Ipamorelin (solo)", "Clean GH pulse, no cortisol, short half-life = natural pulse window"],
        ["Maximum GH pulse amplitude", "CJC-1295 No DAC + Ipamorelin", "Orthogonal pathway synergy; 8–12× amplification vs monotherapy"],
        ["GH axis without HPA confound", "Ipamorelin", "Only GHRP with confirmed zero ACTH/cortisol elevation at any dose"],
        ["Sleep architecture / SWS pulse study", "Ipamorelin (ZT12 injection)", "Short half-life matches SWS nocturnal GH pulse window; no cortisol interference"],
        ["Metabolic study (avoid glucose confound)", "Ipamorelin or CJC-1295 No DAC", "MK-677 elevates fasting glucose and insulin resistance; avoid for metabolic endpoints"],
        ["Comparing pulsatile vs tonic GH patterns", "MK-677 vs Ipamorelin (parallel arms)", "Direct comparison of tonic vs pulsatile GH on same endpoint"],
      ],
    },
    {
      type: "heading",
      text: "Key Side Effect and Confound Profile",
    },
    {
      type: "paragraph",
      text: "MK-677's primary research confounds are metabolic: chronic GHSR-1a stimulation increases fasting glucose, reduces insulin sensitivity (Nass 2008: statistically significant fasting glucose elevation), and elevates appetite via arcuate NPY/AgRP activation — requiring pair-fed controls in any metabolic or body composition study. Ipamorelin's HPA selectivity means cortisol/ACTH confounds are absent, but injection stress (handling + injection 2–3×/day) must be controlled. CJC-1295 No DAC has no published cortisol or metabolic side effects at research doses.",
    },
    {
      type: "heading",
      text: "Tachyphylaxis: Receptor Desensitization Over Time",
    },
    {
      type: "paragraph",
      text: "GHSR-1a undergoes desensitization with continuous agonism. MK-677's 24-hour tonic stimulation produces measurable GH response attenuation over weeks — though IGF-1 levels remain elevated because hepatic IGF-1 production responds to sustained GH input even as pulsatile GH peaks decline. Ipamorelin shows the lowest tachyphylaxis rate among GHRPs (~20–30% GH attenuation at 4 weeks vs 40–55% for GHRP-2/GHRP-6 and 75–80% for hexarelin). CJC-1295 No DAC desensitizes GHRHr mildly, but because it acts on a separate receptor from GHSR-1a, combination protocols are less affected by GHSR-1a desensitization when ipamorelin is used alongside.",
    },
    {
      type: "heading",
      text: "Reconstitution and Storage",
    },
    {
      type: "list",
      items: [
        "MK-677: No reconstitution needed (non-peptide solid/suspension). Store at room temperature away from light. Dissolve in 1% methylcellulose or PEG400 for gavage administration in rodents.",
        "Ipamorelin: Reconstitute lyophilized powder in BAC water at 1–2 mg/mL. Store reconstituted at 4°C up to 4 weeks. Lyophilized powder at −20°C up to 24 months.",
        "CJC-1295 No DAC: Reconstitute in BAC water at 1–2 mg/mL. Store reconstituted at 4°C up to 4 weeks. Handle gently — no vortexing. Lyophilized at −20°C up to 24 months.",
      ],
    },
    {
      type: "heading",
      text: "Research Design Considerations",
    },
    {
      type: "list",
      items: [
        "Pituitary reserve: All three compounds require intact pituitary somatotrophs. GH-deficient animals (dwarf rat, GHR-KO) will respond differently — verify somatotroph function at baseline with a GH stimulation test.",
        "GHSR-1a receptor control: For ipamorelin and MK-677 studies, include D-[Lys3]-GHRP-6 (GHSR-1a antagonist) as a specificity control at 1 mg/kg SC to confirm on-target action.",
        "GHRHr control: For CJC-1295 No DAC studies, include a GHRHr antagonist (e.g., [Ac-Tyr1,D-Arg2]-GHRH(1-29) amide at 100 mcg/kg) to confirm receptor-mediated effects.",
        "Avoid MK-677 in metabolic studies: Persistent insulin resistance and hyperphagia confound body composition, glucose tolerance, and metabolic endpoints. Use ipamorelin or CJC-1295 No DAC instead.",
        "Combination protocol: When stacking CJC-1295 No DAC + ipamorelin, always co-inject in the same syringe (same injection site, same time). The orthogonal pathway synergy requires simultaneous receptor activation.",
        "IGF-1 timing: Sample IGF-1 at steady state — minimum 4 weeks for MK-677 (Tmax for IGF-1 elevation is ~3–4 weeks at steady dose). For ipamorelin/CJC-1295, IGF-1 lags GH elevation by 4–6 weeks due to hepatic synthesis dynamics.",
      ],
    },
    {
      type: "callout",
      text: "RESEARCH USE ONLY: MK-677, ipamorelin, and CJC-1295 No DAC are sold for in vitro and in vivo preclinical research only. Not for human administration. Nexphoria products are not intended to diagnose, treat, cure, or prevent any disease.",
    },
  ],
};
