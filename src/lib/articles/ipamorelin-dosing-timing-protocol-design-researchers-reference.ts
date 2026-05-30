import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "ipamorelin-dosing-timing-protocol-design-researchers-reference",
  title: "Ipamorelin Dosing, Timing, and Protocol Design: A Researcher's Reference",
  description:
    "A comprehensive research reference for ipamorelin: GHSR-1a selectivity, published dose-response data from Johansen 1999 and Arvat 1997, pulsatile timing strategies, combination protocols with CJC-1295 No DAC and MK-677, and 6-month vs 3-month research cycle considerations.",
  category: "GH Axis",
  readMinutes: 10,
  publishedAt: "2026-05-29",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Ipamorelin is the most widely used growth hormone-releasing peptide (GHRP) in preclinical research — not because it produces the highest GH peaks, but because it produces clean ones. Its selectivity for GHSR-1a without co-activating the HPA axis distinguishes it from every other GHRP in the research toolkit. For researchers designing GH axis studies where cortisol or ACTH co-activation would confound results, ipamorelin is the reference compound.",
    },
    {
      type: "paragraph",
      text: "This reference covers everything a researcher needs to design a rigorous ipamorelin study: the selectivity mechanism, published dose-response data, pulsatile timing rationale, combination protocols with CJC-1295 No DAC and MK-677, reconstitution and storage, and a set of research design considerations derived from the primary literature.",
    },
    {
      type: "heading",
      text: "GHSR-1a Selectivity: The Core Advantage",
    },
    {
      type: "subheading",
      text: "Structure and Receptor Binding",
    },
    {
      type: "paragraph",
      text: "Ipamorelin (Aib-His-D-2-Nal-D-Phe-Lys-NH₂) is a synthetic pentapeptide GHRP that was first described by Johansen and colleagues in 1999. The D-2-Naphthylalanine (D-2-Nal) residue at position 3 is the structural key to its selectivity profile: this bulky aromatic group creates a conformational constraint that allows GHSR-1a engagement while sterically limiting access to the receptor conformations that mediate HPA axis activation seen with GHRP-2 and GHRP-6.",
    },
    {
      type: "paragraph",
      text: "Ipamorelin binds GHSR-1a with a Ki of approximately 2–4 nM — slightly lower affinity than GHRP-2 (~0.8–1.2 nM) or hexarelin (~0.3–0.5 nM), but sufficient to drive robust GH secretion at doses well below saturation. Receptor occupancy at typical research doses (1–5 mcg/kg in rodents) is estimated at 40–70% of maximum, providing a meaningful dose-response range for experimental titration.",
    },
    {
      type: "subheading",
      text: "GHSR-1a → Gαq/PLC-β Signaling",
    },
    {
      type: "paragraph",
      text: "GHSR-1a is a Gαq/11-coupled GPCR. Upon ipamorelin binding, the receptor activates phospholipase C-β (PLC-β), which cleaves PIP₂ into IP3 and DAG. IP3 triggers Ca²⁺ release from endoplasmic reticulum stores, and DAG activates protein kinase C (PKC). This Ca²⁺ surge drives vesicular GH exocytosis. The pathway is mechanistically independent of the cAMP/PKA pathway activated by GHRH receptor agonists — which is the mechanistic basis for the 8–12× synergistic GH pulses observed when ipamorelin is co-administered with a GHRH analog.",
    },
    {
      type: "paragraph",
      text: "GHSR-1a is expressed not only on anterior pituitary somatotrophs but also on hypothalamic GHRH neurons and arcuate nucleus interneurons. The hypothalamic GHSR-1a engagement by ipamorelin provides an additional mechanism: suppression of somatostatin release from periventricular neurons. Since somatostatin is the primary inhibitory brake on GH secretion, reducing its tone amplifies the net GH response to concurrent GHRH receptor stimulation.",
    },
    {
      type: "subheading",
      text: "HPA Axis: Why Ipamorelin Doesn't Activate It",
    },
    {
      type: "paragraph",
      text: "GHRP-2 and GHRP-6 co-activate the HPA axis through engagement of GHSR-1a on paraventricular nucleus (PVN) CRH/AVP neurons — a secondary, non-pituitary receptor population. This activation drives ACTH and cortisol elevation (2–3× and 1.5–2× baseline, respectively) that persists for 30–90 minutes post-injection. Ipamorelin does not significantly activate this population at therapeutic research doses. Johansen et al. (1999) specifically demonstrated that 3 nmol/kg ipamorelin IV produced GH peaks equivalent to GHRP-2 while ACTH and cortisol remained at baseline — the defining evidence for ipamorelin's clean selectivity profile.",
    },
    {
      type: "paragraph",
      text: "This selectivity matters practically: chronic cortisol elevation suppresses muscle protein synthesis, reduces bone mineral density, impairs immune function, and confounds metabolic endpoints. Any recovery, longevity, or GH axis study that uses GHRP-2 or GHRP-6 must account for HPA co-activation; ipamorelin studies do not carry this confounder.",
    },
    {
      type: "heading",
      text: "Published Dose-Response Data",
    },
    {
      type: "subheading",
      text: "Johansen et al., 1999 (Journal of Endocrinology)",
    },
    {
      type: "paragraph",
      text: "The foundational ipamorelin pharmacology paper characterized dose-response in both in vitro pituitary cell cultures and in vivo rat models. In Sprague-Dawley rats, IV bolus administration of ipamorelin at 1, 3, and 10 nmol/kg produced GH peaks of approximately 60–80, 100–120, and 110–130 ng/mL respectively, measured at 15-minute post-injection peaks. The dose-response plateaued near 3 nmol/kg — approximately 1–2 mcg/kg — suggesting receptor near-saturation at this dose. Below this dose, the relationship was steep; above it, diminishing returns.",
    },
    {
      type: "paragraph",
      text: "Subcutaneous bioavailability of ipamorelin in rodents is approximately 20–40% relative to IV administration. Adjusting for route, the typical effective SC dose range of 150–300 mcg/kg in mice and 100–200 mcg/kg in rats corresponds to an equivalent 30–80 mcg/kg IV exposure — within the saturation range of the Johansen dose-response curve.",
    },
    {
      type: "subheading",
      text: "Arvat et al., 1997 (JCEM — GHRP Class Data)",
    },
    {
      type: "paragraph",
      text: "While Arvat 1997 focuses on GHRP-2, the comparative data in that paper and subsequent reanalysis by Bowers and colleagues provides calibration for the GHRP class. GHRP-2 at 1 mcg/kg IV produced GH peaks of 50–70 ng/mL in healthy adults. Ipamorelin at equivalent molar doses (Johansen 1999) produces comparable GH peaks while sparing ACTH and cortisol — confirming that the GH secretory potency is preserved while HPA activation is eliminated.",
    },
    {
      type: "subheading",
      text: "Dose-Response Summary (Rodent Models)",
    },
    {
      type: "table",
      headers: ["Dose (mcg/kg SC)", "Species", "GH Peak Estimate (ng/mL)", "ACTH Elevation", "IGF-1 at 6–8 weeks"],
      rows: [
        ["50–75", "Rat", "30–50", "None", "+15–25%"],
        ["100–150", "Rat", "55–80", "None", "+25–40%"],
        ["200–300", "Mouse", "75–110", "None", "+30–45%"],
        ["300–500", "Mouse (high dose)", "90–120", "None", "+35–50% (diminishing)"],
        ["1 mcg/kg IV", "Rat (reference)", "60–80", "None", "Reference"],
      ],
    },
    {
      type: "paragraph",
      text: "GH peak data is route- and timing-dependent. IV administration produces sharp peaks at 15 minutes; SC administration produces broader, lower peaks at 30–60 minutes post-injection. IGF-1 elevation data represents 6–8 week exposure at stated doses; acute GH peaks do not predict chronic IGF-1 changes without accounting for pulse frequency.",
    },
    {
      type: "heading",
      text: "Timing: Pulsatile, Pre-Sleep, or Morning-Only",
    },
    {
      type: "subheading",
      text: "Why Timing Matters for GH Axis Research",
    },
    {
      type: "paragraph",
      text: "GH secretion is a pulsatile phenomenon — not a tonic signal. In rodents, GH pulses occur approximately every 3–4 hours in males (more continuous in females). The amplitude of each pulse is determined by the ratio of GHRH stimulation to somatostatin inhibition at that moment. GHSR-1a agonists like ipamorelin are most effective when somatostatin tone is low — which occurs naturally in the troughs between somatostatin pulses.",
    },
    {
      type: "paragraph",
      text: "In humans, the dominant GH pulse occurs during slow-wave sleep (SWS), approximately 90–120 minutes after sleep onset. This pulse represents 60–70% of the daily GH secretory output in young adults and constitutes the primary anabolic GH signal. Timing ipamorelin administration to overlap with this physiological window amplifies an existing endogenous pulse rather than creating an additional ectopic one.",
    },
    {
      type: "subheading",
      text: "Pulsatile 3× Daily Protocol",
    },
    {
      type: "paragraph",
      text: "The most commonly cited preclinical protocol administers ipamorelin (± CJC-1295 No DAC) three times daily: upon waking, mid-day (or post-exercise in human analogue protocols), and 30–60 minutes before sleep. This spacing approximates endogenous GH pulse frequency (3–4h between peaks) and allows partial GHSR-1a receptor resensitization between doses.",
    },
    {
      type: "paragraph",
      text: "At each injection, both ipamorelin and CJC-1295 No DAC are administered simultaneously or within 5 minutes of each other. The concurrent delivery is critical for the synergistic 8–12× GH pulse — sequential administration with >15-minute separation substantially attenuates the synergistic effect because the GHRHr-activated somatotrophs have already begun returning to baseline before GHSR-1a stimulation arrives.",
    },
    {
      type: "subheading",
      text: "Pre-Sleep (ZT12/ZT0) Single-Injection Protocol",
    },
    {
      type: "paragraph",
      text: "In nocturnal rodents maintained on a 12h light/12h dark cycle, a single daily injection at ZT12 (lights off — onset of the active/nocturnal phase) aligns with the period of lowest hypothalamic somatostatin tone and highest somatotroph sensitivity. Johansen et al. used this approach in their chronic studies. ZT0 (lights on, sleep onset for nocturnal animals) approximates the human pre-sleep window.",
    },
    {
      type: "paragraph",
      text: "Single daily injection at the optimal circadian timepoint produces approximately 60–70% of the IGF-1 elevation observed with 3× daily dosing at the same per-dose amount — a pragmatic trade-off for studies where 3× daily handling is logistically burdensome or introduces stress confounders from repeated handling.",
    },
    {
      type: "subheading",
      text: "Morning-Only Protocol",
    },
    {
      type: "paragraph",
      text: "A morning-only protocol (single daily injection at ZT0 in nocturnal rodents, or upon waking in human analogue models) is the simplest design. It is adequate for studies focused on acute GH pharmacokinetics, receptor characterization, or 2–4 week pilot studies measuring IGF-1 response. For longer multi-week studies targeting body composition or lean mass endpoints, the pre-sleep or 3× daily protocols produce more robust IGF-1 elevation and are better aligned with published efficacy data.",
    },
    {
      type: "heading",
      text: "Combination Protocols",
    },
    {
      type: "subheading",
      text: "Ipamorelin + CJC-1295 No DAC (Standard GH Axis Protocol)",
    },
    {
      type: "paragraph",
      text: "The CJC-1295 No DAC + ipamorelin combination is the reference GH axis research protocol because the two compounds activate orthogonal intracellular pathways (GHRHr → Gαs/cAMP/PKA via CJC-1295 No DAC; GHSR-1a → Gαq/IP3/Ca²⁺ via ipamorelin) that converge on the same GH secretory vesicle machinery. Bowers et al. (1998) demonstrated 8–12× supraadditive GH pulses with GHRH + GHRP co-administration vs either compound alone at the same doses.",
    },
    {
      type: "list",
      items: [
        "CJC-1295 No DAC dose: 100–300 mcg/kg SC per injection (mice); 50–150 mcg/kg (rats)",
        "Ipamorelin dose: 150–300 mcg/kg SC per injection (mice); 100–200 mcg/kg (rats)",
        "Timing: Inject both simultaneously — the synergistic GH pulse requires concurrent receptor activation",
        "Frequency: 2–3× daily (pulsatile) or single ZT12 injection for chronic studies",
        "IGF-1 elevation expected: +50–75% at 8–12 weeks vs vehicle control",
        "Vehicle for both: BAC water; reconstitute separately in individual vials",
      ],
    },
    {
      type: "subheading",
      text: "Ipamorelin + MK-677: Oral + Injectable GH Axis Coverage",
    },
    {
      type: "paragraph",
      text: "MK-677 (ibutamoren) is a non-peptide GHSR-1a full agonist with oral bioavailability and a 24-hour plasma half-life. Combining daily oral MK-677 with injectable ipamorelin creates continuous baseline GHSR-1a activation (MK-677) superimposed with acute pulsatile peaks (ipamorelin). This design is useful for studies comparing tonic vs pulsatile GH stimulation within the same experiment.",
    },
    {
      type: "paragraph",
      text: "However, this combination requires careful study design: MK-677's continuous GHSR-1a occupancy reduces the receptor availability for acute ipamorelin response. Researchers should include a washout period (minimum 3–5 days for MK-677 clearance) when switching between protocols and should not assume additive IGF-1 elevation from the combination — receptor competition may attenuate the pulsatile ipamorelin peaks.",
    },
    {
      type: "callout",
      text: "MK-677 + ipamorelin combination note: MK-677's 24-hour half-life means GHSR-1a is partially occupied at the time of ipamorelin injection. Acute GH peaks from ipamorelin will be attenuated (estimated 30–50% reduction vs ipamorelin alone) because receptor availability is already partially saturated. Design studies expecting combined but not fully additive IGF-1 elevation.",
    },
    {
      type: "heading",
      text: "Tachyphylaxis: How Much and How Fast",
    },
    {
      type: "paragraph",
      text: "Receptor desensitization (tachyphylaxis) is a concern for all GHSR-1a agonists with repeated administration. Ipamorelin shows lower tachyphylaxis than other GHRPs — approximately 20–30% GH attenuation at 4 weeks with 3× daily dosing, compared to 40–55% for GHRP-2/GHRP-6 and 75–80% for hexarelin.",
    },
    {
      type: "paragraph",
      text: "The reduced tachyphylaxis likely reflects ipamorelin's moderate receptor affinity (Ki ~2–4 nM vs hexarelin's ~0.3–0.5 nM): lower-affinity agonists generally produce less receptor internalization and downregulation. Pulsatile protocols with ≥3-hour intervals between doses allow partial GHSR-1a resensitization and preserve greater response amplitude across multi-week studies.",
    },
    {
      type: "paragraph",
      text: "For studies extending beyond 8 weeks, monitoring IGF-1 at 4-week intervals is recommended. A >40% decline in IGF-1 elevation relative to the week-4 peak may indicate tachyphylaxis and should prompt consideration of a 1–2 week dose holiday before resuming the protocol.",
    },
    {
      type: "heading",
      text: "Research Cycle Design: 3-Month vs 6-Month",
    },
    {
      type: "subheading",
      text: "3-Month Research Cycle",
    },
    {
      type: "paragraph",
      text: "A 12-week (3-month) research cycle is sufficient to characterize ipamorelin's effects on IGF-1 elevation, lean body mass, and body fat percentage in rodent models. Published studies have used 8–12 week protocols to demonstrate significant body composition changes. Key endpoints at week 4 (IGF-1 baseline response), week 8 (body composition mid-point), and week 12 (endpoint) map cleanly onto a 3-month research cycle.",
    },
    {
      type: "subheading",
      text: "6-Month Research Cycle",
    },
    {
      type: "paragraph",
      text: "A 24-week (6-month) research cycle is required for longevity-oriented GH axis studies (bone mineral density, muscle fiber cross-sectional area, collagen synthesis endpoints), or for studies characterizing long-term receptor desensitization kinetics. The Nass et al. (2008) MK-677 study — the closest published analog for sustained oral GHSR-1a agonism — was a 2-year protocol; for ipamorelin specifically, 6-month data is extrapolated from shorter studies combined with understanding of GHSR-1a desensitization kinetics.",
    },
    {
      type: "paragraph",
      text: "In 6-month protocols, a 2-week dose holiday at weeks 12–13 is recommended to partially restore GHSR-1a sensitivity before continuing through week 24. Monitor IGF-1 at weeks 4, 8, 12, 16, 20, and 24 to capture the full tachyphylaxis and resensitization curve.",
    },
    {
      type: "heading",
      text: "Reconstitution and Storage Protocol",
    },
    {
      type: "list",
      items: [
        "Solvent: Reconstitute with bacteriostatic water (BAC water, 0.9% benzyl alcohol) for multi-dose vials. For single-use applications, sterile water (pH-adjusted to 5.5–6.0) is acceptable.",
        "Concentration: 2–5 mg/mL working concentration for practical injection volumes. At 200 mcg/kg × 30g mouse = 6 mcg per injection; 2 mg/mL solution = 3 µL injection volume — manageable SC delivery.",
        "Lyophilized storage: −20°C, protected from light, up to 24 months. Ipamorelin is a highly stable pentapeptide with minimal oxidation or aggregation risk.",
        "Reconstituted storage: 4°C (refrigerated), up to 3–4 weeks. No freeze-thaw cycling of reconstituted solution — prepare aliquots if multi-month use is planned.",
        "Color check: Ipamorelin solution should be clear and colorless. Turbidity or yellow tint indicates degradation — discard.",
        "Do NOT store at room temperature after reconstitution. Benzyl alcohol inhibits microbial growth but does not prevent peptide hydrolysis at elevated temperatures.",
      ],
    },
    {
      type: "heading",
      text: "Research Design Considerations",
    },
    {
      type: "list",
      items: [
        "Pituitary reserve baseline: Before initiating a chronic ipamorelin protocol, verify pituitary somatotroph reserve with an acute GHRH stimulation test or a single ipamorelin injection GH peak measurement. Animals with impaired pituitary GH reserve (aged animals, animals with prior GHRH analog exposure) may show attenuated ipamorelin responses.",
        "IGF-1 as primary endpoint: GH has a plasma half-life of ~20–30 minutes in rodents; a single blood draw will almost certainly miss the GH peak. IGF-1 is the recommended primary efficacy biomarker — it has a 12–24 hour half-life and reflects cumulative GH exposure over the preceding 24 hours. Measure IGF-1 consistently at the same time of day (±1 hour) for cross-timepoint comparability.",
        "Handling stress confounders: Elevated handling stress increases hypothalamic somatostatin release, directly suppressing the GH response to ipamorelin. Habituate animals to injection procedures (scruff handling, mock injections with vehicle) for ≥7 days before recording baseline or treatment GH measurements.",
        "Sex differences: Female rodents have more continuous, less pulsatile GH secretion profiles than males. This baseline difference means female animals respond differently to pulsatile GHRH/GHRP stimulation. Report sex as a covariate; analyze male and female data separately or include Sex × Treatment interaction terms in the statistical model.",
        "Somatostatin tone as experimental variable: Fasting, sleep deprivation, and acute stress all modulate somatostatin tone and will alter ipamorelin's acute GH response. Standardize feeding state (fed vs 4h fast), housing conditions, and injection timing circadian phase across all experimental groups.",
        "Receptor selectivity controls: To confirm that observed effects are GHSR-1a mediated, include a cohort receiving D-[Lys3]-GHRP-6 (a competitive GHSR-1a antagonist) co-administered with ipamorelin. Attenuation of GH response in antagonist-treated animals confirms receptor specificity.",
      ],
    },
    {
      type: "heading",
      text: "Summary",
    },
    {
      type: "paragraph",
      text: "Ipamorelin's combination of GHSR-1a potency, HPA axis selectivity, manageable tachyphylaxis profile, and excellent stability makes it the standard GHRP for clean GH axis research. Published dose-response data places the effective SC range at 100–300 mcg/kg in rodents with near-maximal GH response at 1–3 nmol/kg IV. Pulsatile administration (2–3× daily or ZT12 circadian timing) preserves receptor sensitivity and maximizes IGF-1 elevation over multi-week protocols.",
    },
    {
      type: "paragraph",
      text: "The combination with CJC-1295 No DAC remains the reference GH axis protocol, producing 8–12× supraadditive GH pulses via orthogonal cAMP/PKA + IP3/Ca²⁺ pathway convergence. For oral + injectable GH axis coverage, MK-677 combination is feasible but requires careful receptor competition accounting. Study designs should use IGF-1 as the primary biomarker, standardize circadian timing and stress conditions, and monitor for tachyphylaxis beyond 8 weeks with planned dose holidays for 6-month cycle designs.",
    },
    {
      type: "disclaimer",
      text: "For Research Use Only. Not for human consumption. All data cited represents published preclinical or clinical research findings and is presented for informational purposes only. Nexphoria compounds are sold exclusively for laboratory research.",
    },
  ],
};
