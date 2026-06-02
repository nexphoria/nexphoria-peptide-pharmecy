import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "ghrp2-growth-hormone-releasing-peptide-research-guide",
  title: "GHRP-2: The Potent Growth Hormone Releasing Peptide Research Guide",
  description:
    "A comprehensive research guide to GHRP-2: GHSR-1a pharmacology, Arvat 1997 dose-response data, cortisol/ACTH co-stimulation profile, CJC-1295 No DAC synergy, tachyphylaxis mechanisms, and full preclinical protocol design for GH axis research.",
  category: "GH Axis",
  readMinutes: 10,
  publishedAt: "2026-06-02",
  ogImage: "/og/products/cjc-1295-ipamorelin.png",
  body: [
    {
      type: "paragraph",
      text: "GHRP-2 (His-D-Trp-Ala-Trp-D-Phe-Lys-NH₂) is the second most-studied synthetic growth hormone-releasing peptide after ipamorelin — and for researchers who need maximum GH output rather than selectivity, it is the more powerful tool. Arvat and colleagues established in 1997 that GHRP-2 at 1 mcg/kg IV drives GH peaks of 50–70 ng/mL in healthy young men — exceeding GHRP-6 output at the same dose, while falling just below hexarelin in peak potency. The tradeoff is co-activation of the HPA axis: GHRP-2 elevates ACTH and cortisol meaningfully, which must be planned for in any study design. This guide covers the pharmacology, published data, CJC-1295 No DAC synergy, tachyphylaxis profile, and the six design considerations every GHRP-2 researcher should work through before injecting a single animal.",
    },
    {
      type: "heading",
      text: "Structure and Pharmacology",
    },
    {
      type: "subheading",
      text: "Hexapeptide Architecture and DPP-4 Resistance",
    },
    {
      type: "paragraph",
      text: "GHRP-2 is a synthetic hexapeptide (His-D-Trp-Ala-Trp-D-Phe-Lys-NH₂). The D-Tryptophan residue at position 2 is the primary structural feature conferring proteolytic resistance: the D-amino acid configuration blocks the serine exopeptidase DPP-4, which would otherwise cleave the Xaa-Pro/Xaa-Ala bonds rapidly degrading endogenous GH secretagogues. This gives GHRP-2 a meaningful plasma half-life of approximately 15–20 minutes after IV administration — substantially longer than unmodified peptide sequences of similar length.",
    },
    {
      type: "paragraph",
      text: "Subcutaneous bioavailability is approximately 25–30% relative to IV, with a Tmax of 30–45 minutes. The C-terminal Lys-NH₂ amide further protects against carboxypeptidase degradation. GHRP-2 binds GHSR-1a with a Ki of approximately 0.5–1.0 nM — roughly twice the affinity of ipamorelin (~2–3 nM) and somewhat lower than hexarelin (~0.3–0.5 nM). This positions GHRP-2 as the middle-tier potency GHRP: more potent than ipamorelin and GHRP-6, less potent than hexarelin.",
    },
    {
      type: "subheading",
      text: "GHSR-1a → Gαq/IP3/Ca²⁺ Signaling",
    },
    {
      type: "paragraph",
      text: "Like all synthetic GHRPs, GHRP-2 signals primarily through GHSR-1a coupled to Gαq/11. Receptor engagement activates phospholipase C-β (PLC-β), which cleaves PIP₂ into inositol trisphosphate (IP3) and diacylglycerol (DAG). IP3 triggers Ca²⁺ release from endoplasmic reticulum stores; DAG activates protein kinase C (PKC). The resulting Ca²⁺ surge drives vesicular GH exocytosis from anterior pituitary somatotrophs. This pathway is mechanistically orthogonal to the cAMP/PKA cascade activated by GHRH receptor agonists — the biochemical basis for the large synergistic GH pulses observed when GHRP-2 is co-administered with CJC-1295 No DAC.",
    },
    {
      type: "paragraph",
      text: "GHSR-1a also exhibits approximately 50% constitutive (ligand-independent) activity — the highest of any known GPCR in the GH axis. This constitutive tone means GHRP-2 operates on a receptor that is already partially activated, explaining why dose-response relationships in this class are steeper and plateau earlier than GHRH receptor agonists.",
    },
    {
      type: "heading",
      text: "Published Dose-Response Data",
    },
    {
      type: "subheading",
      text: "Arvat 1997 JCEM: The Defining Dataset",
    },
    {
      type: "paragraph",
      text: "Arvat and colleagues published the key comparative GHRP pharmacology data in 1997 (Journal of Clinical Endocrinology & Metabolism). In healthy young men, GHRP-2 at 1 mcg/kg IV produced mean GH peaks of 50–70 ng/mL — significantly higher than GHRP-6 at the same dose (35–50 ng/mL), and substantially above historical GHRH (1-29) data at 1 mcg/kg (~20–35 ng/mL). Hexarelin at 2 mcg/kg in separate studies produced 70–90 ng/mL, but the dose adjustment makes direct comparison complex.",
    },
    {
      type: "paragraph",
      text: "Critically, Arvat's group also quantified the HPA axis co-activation: GHRP-2 at 1 mcg/kg IV elevated ACTH 2–3× above baseline and cortisol 1.5–2.5× above baseline in the 30–90 minute post-injection window. Prolactin rose modestly to 1.3–1.8× baseline. These are not pharmacological side effects — they are on-target GHSR-1a effects at hypothalamic PVN CRH/AVP neurons that are distinct from pituitary somatotroph engagement. Any study using GHRP-2 must account for this HPA co-activation in its design.",
    },
    {
      type: "subheading",
      text: "Preclinical Dose-Response Reference",
    },
    {
      type: "table",
      headers: ["Dose (mcg/kg SC, mouse)", "Peak GH (ng/mL, est.)", "Cortisol Elevation", "IGF-1 at 4 Weeks", "Notes"],
      rows: [
        ["10", "15–25", "Minimal", "Not meaningful", "Sub-threshold for most body composition endpoints"],
        ["50", "30–45", "1.2–1.5×", "~10–20%", "Useful for receptor specificity controls"],
        ["100", "50–70", "1.5–2.0×", "~25–40%", "Standard research dose; balance potency vs HPA"],
        ["200", "60–75", "2.0–2.5×", "~35–55%", "High-output; HPA co-activation must be planned for"],
        ["400", "65–80", "2.5–3.0×", "~40–60%", "Near-saturation; diminishing GH returns, maximal HPA"],
      ],
    },
    {
      type: "heading",
      text: "GHRP-2 vs Ipamorelin: The Research Tradeoff",
    },
    {
      type: "paragraph",
      text: "The choice between GHRP-2 and ipamorelin is fundamentally a question of GH output versus endpoint cleanliness. GHRP-2 delivers higher GH peaks but activates the HPA axis. Ipamorelin produces lower peaks with a clean cortisol profile. The table below summarizes the comparative pharmacology across the eight parameters that most affect study design.",
    },
    {
      type: "table",
      headers: ["Parameter", "GHRP-2", "Ipamorelin"],
      rows: [
        ["Ki at GHSR-1a", "0.5–1.0 nM", "2–3 nM"],
        ["Peak GH (IV, 1 mcg/kg)", "50–70 ng/mL", "20–40 ng/mL"],
        ["Cortisol elevation", "+1.5–2.5× baseline", "Not significant"],
        ["ACTH co-stimulation", "+2–3× baseline", "Not significant"],
        ["Prolactin elevation", "+1.3–1.8× baseline", "Not significant"],
        ["Tachyphylaxis at 4 weeks", "40–55% GH attenuation", "20–30% GH attenuation"],
        ["Hunger / ghrelin-mimetic effect", "Moderate (ghrelin-like)", "Minimal"],
        ["Best research application", "Maximum GH output studies; HPA co-activation acceptable or intentional", "HPA-clean studies; body composition; selectivity research"],
      ],
    },
    {
      type: "paragraph",
      text: "The practical rule: use GHRP-2 when you need the highest possible GH signal and cortisol is either irrelevant to your endpoints or an acceptable confounder that you will measure and report. Use ipamorelin when cortisol, ACTH, or prolactin would confound your primary endpoints, or when your study population (aged animals, stressed animals) already has elevated baseline cortisol.",
    },
    {
      type: "heading",
      text: "CJC-1295 No DAC Synergy",
    },
    {
      type: "subheading",
      text: "Orthogonal Receptor Pharmacology",
    },
    {
      type: "paragraph",
      text: "The mechanistic rationale for combining GHRP-2 with CJC-1295 No DAC is straightforward: the two compounds activate orthogonal intracellular cascades that converge on GH exocytosis. CJC-1295 No DAC binds the GHRH receptor (GHRHr) — a class B1 GPCR coupled to Gαs/adenylyl cyclase/cAMP/PKA/CREB. GHRP-2 binds GHSR-1a coupled to Gαq/PLC-β/IP3/Ca²⁺. Neither pathway saturates the other, and their downstream effectors at the secretory vesicle level are additive at minimum and synergistic in practice.",
    },
    {
      type: "paragraph",
      text: "Bowers and colleagues demonstrated in 1998 (Endocrinology) that co-administration of a GHRH analog with a GHRP produced 8–12× supraadditive GH peaks compared to either compound alone. The mechanism involves: (1) cAMP-mediated somatotroph priming by the GHRH receptor arm increasing the readily-releasable pool of GH vesicles; (2) GHSR-1a Ca²⁺ signal providing the exocytotic trigger; (3) GHSR-1a hypothalamic engagement reducing somatostatin tone, further disinhibiting GHRH receptor-driven secretion. The timing requirement is critical: both compounds must be injected simultaneously, as their peak receptor occupancy windows (~15–30 min post-SC injection) must overlap.",
    },
    {
      type: "paragraph",
      text: "IGF-1 elevation at 8 weeks: GHRP-2 alone typically yields +35–55% over vehicle; CJC-1295 No DAC alone +40–60%; the combination routinely achieves +65–90% — well above additive.",
    },
    {
      type: "heading",
      text: "Tachyphylaxis Profile",
    },
    {
      type: "paragraph",
      text: "GHRP-2 produces meaningful receptor desensitization with twice-daily dosing. After 4 weeks of 100–200 mcg/kg SC twice daily in rodents, GH peak responses typically attenuate by 40–55% from baseline. The mechanism involves GHSR-1a phosphorylation by GRK2 and GRK5 at Ser/Thr residues in the intracellular C-terminus, followed by β-arrestin-2 recruitment, clathrin-coated pit internalization, and Rab7-mediated lysosomal degradation of the internalized receptor. New receptor synthesis partially compensates but does not fully restore surface GHSR-1a density under continuous stimulation.",
    },
    {
      type: "paragraph",
      text: "Comparative tachyphylaxis: ipamorelin 20–30% at 4 weeks; GHRP-6 40–55%; GHRP-2 40–55%; hexarelin 75–80%. GHRP-2 and GHRP-6 occupy the same moderate-tachyphylaxis tier. Hexarelin's superior affinity (Ki ~0.3 nM) drives faster and more complete desensitization. Receptor recovery after discontinuation: approximately 48–72 hours for partial recovery, 5–7 days for near-complete GHSR-1a surface re-expression. Protocol mitigation strategies include a 2-day washout every 2 weeks (5 days on/2 days off) or periodic pulse-capture assessments at weeks 0, 2, and 4 to track the attenuation trajectory.",
    },
    {
      type: "heading",
      text: "Preclinical Dosing Reference",
    },
    {
      type: "table",
      headers: ["Model", "Species", "Dose", "Route", "Frequency", "Key Endpoint", "Reference Class"],
      rows: [
        ["GH pulse characterization", "SD Rat", "100–200 mcg/kg", "IV or SC", "Single injection", "GH ELISA q10min × 3h", "Arvat 1997, JCEM"],
        ["DIO body composition", "C57BL/6J Mouse", "100–200 mcg/kg", "SC", "2×/day, 8 weeks", "EchoMRI + IGF-1", "Muccioli 2004 class"],
        ["Cardiac I/R preconditioning", "SD Rat", "80–160 mcg/kg", "IV acute", "30-min pre-ischemia", "TTC infarct + EF%", "GHSR-1a cardioprotection class"],
        ["GH decline / aging", "C57BL/6J Mouse (20 mo)", "100 mcg/kg", "SC", "1×/day ZT11, 12 weeks", "IGF-1 + body comp + grip", "Copinschi 1996 class"],
        ["GH-deficient dwarf rats", "Sprague-Dawley dwarf", "100–200 mcg/kg", "SC", "2×/day, 4 weeks", "GH pulse capture + tibial width", "Arvat 1997"],
      ],
    },
    {
      type: "heading",
      text: "Reconstitution and Storage",
    },
    {
      type: "paragraph",
      text: "Reconstitute GHRP-2 in bacteriostatic water (BAC water) to a stock concentration of 1–2 mg/mL. Inject BAC water slowly along the vial wall, allow to dissolve by gentle rolling — do not vortex. Store lyophilized powder at -20°C (stable ≥24 months). Store reconstituted working solution at 4°C for a maximum of 14 days. Do not freeze reconstituted solution.",
    },
    {
      type: "paragraph",
      text: "Syringe calculation reference: to administer 100 mcg/kg to a 25g mouse using a 1 mg/mL stock, calculate: (0.025 kg × 100 mcg/kg) = 2.5 mcg total dose → 2.5 mcg ÷ 1000 mcg/mL = 0.0025 mL = 2.5 μL per injection. For a 100U/mL insulin syringe, this corresponds to 0.25 units on the syringe scale. Use a low dead-space insulin syringe (Hamilton Neuros or BD Ultra-Fine) to avoid the 5–10 μL dead-space losses that cause systematic under-dosing at these volumes.",
    },
    {
      type: "heading",
      text: "Six Research Design Considerations",
    },
    {
      type: "list",
      items: [
        "ACTH/cortisol co-endpoint is mandatory. Every GHRP-2 study must measure corticosterone (mouse/rat) or cortisol (primate) as a routine endpoint. Failure to include HPA axis data makes it impossible to disentangle whether any effect on immune function, bone metabolism, muscle catabolism, or metabolism is GH-mediated or cortisol-mediated. At minimum, include a terminal trunk blood sample for corticosterone alongside your primary endpoints.",
        "Pituitary reserve baseline. Before beginning chronic GHRP-2 dosing, conduct a single GHRP-2 + CJC-1295 No DAC challenge (100 + 100 mcg/kg SC simultaneously) and measure GH at 15-minute peak. Animals with impaired pituitary GH secretory capacity — common in aged or obese models — will produce attenuated GH responses that confound dose-response interpretation. Screen and stratify animals at baseline.",
        "4-week tachyphylaxis monitoring. Plan periodic GH pulse-capture assessments (q10-minute blood sampling × 3 hours via jugular catheter or tail vein) at baseline, week 2, and week 4. This allows you to quantify the tachyphylaxis trajectory and report it explicitly in methods. Do not assume the week 1 GH response represents the week 8 GH exposure.",
        "GHSR-1a antagonist specificity control. D-[Lys³]-GHRP-6 at 500 mcg/kg SC administered 15 minutes before GHRP-2 completely blocks GHSR-1a and abolishes the GH response. Include this as a mechanistic specificity arm in any study claiming GHSR-1a-dependent effects. Without this control, effects attributed to GH release cannot be distinguished from off-target peptide actions.",
        "Sex differences in HPA responsiveness. Female rodents consistently show 1.5–2× higher ACTH and corticosterone responses to GHRP-2 than males, driven by estrogen-mediated upregulation of pituitary CRH receptor density and enhanced HPA tone. Studies using mixed-sex cohorts must sex-stratify randomization and include sex as a fixed factor in statistical models. NIH SABV (Sex as a Biological Variable) compliance requires this explicitly.",
        "MK-677 combination warning. Do not combine GHRP-2 with MK-677 as a synergy strategy. Both compounds are GHSR-1a agonists with competitive binding kinetics; co-administration produces competitive receptor saturation and attenuated GH responses compared to either compound at its optimal dose alone. The rational combination for maximum GH output is GHRP-2 + CJC-1295 No DAC (orthogonal mechanisms). Reserve MK-677 for studies requiring oral administration or continuous GHSR-1a occupancy as a stand-alone GH secretagogue.",
      ],
    },
    {
      type: "paragraph",
      text: "GHRP-2 occupies a well-defined niche in GH axis research: maximum GH output when selectivity is not the priority. Used with appropriate controls — corticosterone measurement, tachyphylaxis monitoring, GHSR-1a antagonist specificity groups — it generates robust, reproducible GH data with a 25-year literature base for comparison. For researchers where HPA co-activation is the endpoint itself, GHRP-2's cortisol profile becomes a feature rather than a liability.",
    },
    {
      type: "paragraph",
      text: "All research use only. This article describes published preclinical research protocols and is intended for qualified researchers operating under appropriate institutional oversight. Not for human use.",
    },
  ],
};
