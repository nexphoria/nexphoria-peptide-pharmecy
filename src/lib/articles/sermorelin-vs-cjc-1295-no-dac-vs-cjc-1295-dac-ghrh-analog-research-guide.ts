import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: 'sermorelin-vs-cjc-1295-no-dac-vs-cjc-1295-dac-ghrh-analog-research-guide',
  title: 'Sermorelin vs CJC-1295 No DAC vs CJC-1295 DAC: Choosing the Right GHRH Analog for Your Research',
  description:
    'A comprehensive pharmacological comparison of the three major GHRH analog research compounds: sermorelin (GHRH 1–29), CJC-1295 No DAC (Mod GRF 1–29), and CJC-1295 with DAC. Covers mechanism, half-life, published IGF-1 data, pulsatile vs tonic GH simulation, and 6 research design considerations.',
  category: 'GH Axis',
  readMinutes: 11,
  publishedAt: '2026-06-01',
  ogImage: '/og/products/sermorelin.png',
  body: [
    {
      type: 'paragraph',
      text: "The GHRH analog family represents the most pharmacologically nuanced class of GH axis research compounds. Three members dominate the research landscape: sermorelin (GHRH 1–29), CJC-1295 No DAC (also called Modified GRF 1–29 or Mod GRF 1–29), and CJC-1295 with DAC (Drug Affinity Complex). Though all three activate the same receptor—the GHRHr class B1 GPCR—their pharmacokinetics differ by orders of magnitude, and this difference has profound implications for study design, endpoint selection, and interpretation of GH pulse architecture data.",
    },
    {
      type: 'heading',
      text: "Shared Foundation: GHRHr Signaling Biology",
    },
    {
      type: 'paragraph',
      text: "All three analogs activate the GHRHr through the same two-step binding mechanism: the C-terminal region engages the receptor's extracellular domain (ECD) for initial docking, followed by N-terminal insertion into the transmembrane bundle for full receptor activation. This produces Gαs coupling → adenylyl cyclase activation → cAMP elevation → PKA/CREB cascade → GH1 gene transcription and GH vesicle exocytosis from anterior pituitary somatotrophs.",
    },
    {
      type: 'paragraph',
      text: "The endogenous GHRH peptide is 44 amino acids long, but the minimum active sequence required for full GHRHr binding and activation is residues 1–29 (the N-terminal fragment). Sermorelin contains exactly this minimum active sequence, meaning it fully activates the receptor at the correct binding domain while omitting the C-terminal residues 30–44 that are dispensable for receptor engagement. This truncation alone reduces half-life compared to native GHRH—from approximately 7–10 minutes (native GHRH) to 11–12 minutes (sermorelin)—primarily because the missing C-terminal residues provide some protection against dipeptidyl peptidase-4 (DPP-4) cleavage.",
    },
    {
      type: 'heading',
      text: "Sermorelin: The Physiological Pulse Mimetic",
    },
    {
      type: 'paragraph',
      text: "Sermorelin (GHRH 1–29-NH₂) was the first clinically approved GHRH analog, marketed as Geref by Serono for pediatric GH deficiency. Its FDA approval was voluntarily withdrawn in 2008 by the manufacturer for commercial reasons, not safety concerns. The clinical dataset for sermorelin is therefore relatively mature.",
    },
    {
      type: 'paragraph',
      text: "Pharmacokinetically, sermorelin has a plasma half-life of approximately 11–12 minutes following SC injection. This closely mimics the endogenous GHRH pulse duration emanating from arcuate nucleus neurons. Once administered, sermorelin triggers a discrete, time-limited GH pulse that rises over 15–30 minutes and falls over the subsequent 60–90 minutes—a pulsatile pattern that avoids sustained GHRHr occupancy and therefore limits receptor downregulation.",
    },
    {
      type: 'paragraph',
      text: "Published IGF-1 elevation data for sermorelin across clinical and rodent studies shows consistent 35–50% increases above baseline with chronic administration (Sigalos 2018 Sexual Medicine Reviews meta-analysis; Vittone 1997 NIA RCT: +38% IGF-1, +1.7 kg lean mass, –1.4 kg fat mass, +1.8% lumbar BMD after 6 months in older adults). The relatively modest IGF-1 elevation compared to CJC-1295 DAC reflects sermorelin's short half-life and the resulting single discrete GH pulse per injection rather than sustained GHRHr stimulation.",
    },
    {
      type: 'paragraph',
      text: "For preclinical research, sermorelin is typically administered SC at 100–300 mcg/kg in rodents. SC bioavailability in mice and rats is approximately 30–50% due to depot formation kinetics. Timing protocols vary by research question: pre-sleep injections at ZT11–12 leverage the endogenous nocturnal GH pulse for maximum synergy, while morning injections (ZT0–2) are used in studies where daytime IGF-1 measurements are planned.",
    },
    {
      type: 'heading',
      text: "CJC-1295 No DAC: The Stability-Optimized Pulsatile Analog",
    },
    {
      type: 'paragraph',
      text: "CJC-1295 No DAC, formally known as Modified GRF 1–29 (Mod GRF 1–29), was developed by ConjuChem to address sermorelin\'s primary limitation: rapid DPP-4 cleavage at the Ala²-position. Four amino acid substitutions were introduced into the GHRH 1–29 sequence specifically to resist the enzymatic degradation pathways that limit sermorelin\'s half-life:",
    },
    {
      type: 'paragraph',
      text: "Ala² → D-Ala (DPP-4 cleavage site protection); Gln⁸ → Ala (deamidation resistance); Ala¹⁵ → Gln¹⁵ (additional stability at Met-oxidation-adjacent site); Leu²⁷ → Glu²⁷ (C-terminal degradation resistance). These four substitutions extend the plasma half-life from sermorelin\'s 11–12 minutes to approximately 25–30 minutes for CJC-1295 No DAC. The receptor binding affinity is maintained at full potency because none of the substitutions involve the critical N-terminal residues (His¹, Ala²-equivalent) that engage the receptor\'s transmembrane binding pocket.",
    },
    {
      type: 'paragraph',
      text: "The practical consequence of this extended half-life is a larger and more sustained GH pulse amplitude per injection compared to sermorelin. The GH peak area under the curve (AUC) is approximately 1.5–2.0× greater with CJC-1295 No DAC than with equimolar sermorelin, translating to modestly higher IGF-1 elevation with equivalent dosing. Published rodent data shows IGF-1 elevations of 40–60% with CJC-1295 No DAC alone, and the classic Bowers 1998 synergy study (using GHRH analog + ipamorelin combination) shows 8–12× supraadditive GH amplification when CJC-1295 No DAC is co-injected with ipamorelin—a synergy that exceeds what is achieved with sermorelin in the same paradigm because the longer half-life of CJC-1295 No DAC provides sustained GHRH-level somatostatin tone suppression during the ipamorelin GHSR-1a calcium burst.",
    },
    {
      type: 'paragraph',
      text: "Critically, CJC-1295 No DAC still produces a discrete, pulsatile GH pattern. The pulse is larger and slightly broader than sermorelin\'s, but it remains temporally bounded and does not produce sustained tonic GH elevation. This preserves the physiological pulsatility that is essential when studying GH-dependent endpoints that are sensitive to pulse architecture: IGF-1 export, lipolysis, lean mass anabolism, and GHRHr sensitization all respond differently to pulsatile versus continuous GH stimulation.",
    },
    {
      type: 'heading',
      text: "CJC-1295 with DAC: Albumin Binding and Tonic GH Stimulation",
    },
    {
      type: 'paragraph',
      text: "CJC-1295 DAC uses the same four stabilizing substitutions as CJC-1295 No DAC, but adds a Drug Affinity Complex (DAC) technology: a maleimide-lysine linker at position 27 that forms a thioether bond with the Cys-34 residue of circulating albumin. This albumin conjugation transforms CJC-1295 into a long-acting molecule with a half-life of approximately 6–8 days—a >200-fold increase over sermorelin.",
    },
    {
      type: 'paragraph',
      text: "Published data for CJC-1295 DAC in humans (Teichman 2006 JCEM Phase 1/2 study) showed mean IGF-1 elevation of 28–44% sustained over 1–2 weeks following a single SC injection. With weekly or bi-weekly dosing, IGF-1 elevation reached 60–70% above baseline at steady state (approximately week 4). The extended GHRHr occupancy produces tonic, continuous GH secretion rather than discrete pulses—the normal GH pulse architecture is substantially blunted.",
    },
    {
      type: 'paragraph',
      text: "This creates both opportunities and limitations for research. The opportunity: CJC-1295 DAC enables studies requiring sustained, continuous IGF-1 elevation with minimal injection frequency—once-weekly SC dosing achieves steady-state IGF-1 that is reproducible and stable across the study period. The limitation: tonic GH stimulation differs mechanistically from physiological pulsatile GH, particularly for endpoints that are pulse-sensitive. GHRHr downregulation studies require pulsatile analogs; GH pulse architecture characterization is incompatible with DAC use; and adipocyte lipolysis studies show different kinetics under continuous vs pulsatile GH exposure.",
    },
    {
      type: 'heading',
      text: "Head-to-Head Comparison: Published IGF-1 Data",
    },
    {
      type: 'paragraph',
      text: "The following summary reflects published efficacy data across the three analogs for IGF-1 elevation in appropriately powered clinical and rodent studies:",
    },
    {
      type: 'paragraph',
      text: "Sermorelin (3×/day SC pulsatile protocol): 35–50% IGF-1 elevation at weeks 8–12 in adult and geriatric populations (Sigalos 2018 meta-analysis; Vittone 1997 NIA RCT). In rodents: similar % elevation with 100–300 mcg/kg SC 3×/day.",
    },
    {
      type: 'paragraph',
      text: "CJC-1295 No DAC + ipamorelin (3×/day co-injection, pulsatile): 60–85% IGF-1 elevation at weeks 8–12 (Bowers 1998 8–12× GH AUC synergy, translated to IGF-1 by Johansen 1999 ipamorelin single-agent data as reference). This is the highest IGF-1 yield per injection frequency of any GHRH analog protocol.",
    },
    {
      type: 'paragraph',
      text: "CJC-1295 DAC (once-weekly SC): 28–44% single-injection elevation rising to 60–70% at steady state (Teichman 2006 JCEM). Advantage: injection frequency 1×/week. Disadvantage: tonic GH pattern, steady state takes 4 weeks, long washout required (>3 weeks for >90% drug clearance given 6–8 day half-life).",
    },
    {
      type: 'heading',
      text: "Pulsatile vs Tonic GH: Why This Distinction Matters",
    },
    {
      type: 'paragraph',
      text: "Pulsatile GH secretion is not simply an artifact of endocrine physiology—it is a critical determinant of downstream tissue responses. Hepatocytes express GHR at levels that are optimally responsive to intermittent high-amplitude GH pulses; continuous low-level GH exposure via tonic stimulation downregulates hepatic GHR expression within 72 hours (LeRoith 1995 Endocrine Reviews), blunting IGF-1 synthesis despite maintained receptor occupancy. This means that CJC-1295 DAC studies may underestimate GH signaling potential if the study duration extends beyond 4–6 weeks and hepatic GHR downregulation occurs.",
    },
    {
      type: 'paragraph',
      text: "Additionally, lipid metabolism responds differently to pulsatile versus tonic GH. Pulsatile GH produces sharper but shorter HSL activation windows—higher peak lipolysis rates that normalize between pulses, allowing insulin-mediated re-esterification between injections. Tonic GH via DAC produces more sustained but lower-amplitude HSL activation, with different net fatty acid mobilization kinetics. For body composition research where the lipolytic mechanism is a primary endpoint, pulsatile analogs (sermorelin or CJC-1295 No DAC) provide cleaner mechanistic interpretation.",
    },
    {
      type: 'heading',
      text: "Study Design Selection Guide",
    },
    {
      type: 'paragraph',
      text: "Use sermorelin when: (1) the research question specifically requires replication of the historical sermorelin clinical dataset; (2) the study design calls for comparing pulsatile GH responses at the minimum effective GHRH sequence length; (3) pilot dose-finding studies where a shorter half-life is preferred for rapid endpoint assessment; (4) DPP-4 activity is itself an experimental variable (sermorelin\'s DPP-4 sensitivity can be leveraged as a probe for DPP-4 inhibitor co-treatment studies).",
    },
    {
      type: 'paragraph',
      text: "Use CJC-1295 No DAC when: (1) maximal pulsatile GH pulse amplitude is the goal; (2) the study protocol includes GHRP co-administration (especially ipamorelin) where the 8–12× synergy is required; (3) injection frequency of 2–3×/day is acceptable; (4) pulse architecture preservation is required for the endpoint (GH pulsatility characterization, somatostatin tone studies, GHRHr sensitization protocols).",
    },
    {
      type: 'paragraph',
      text: "Use CJC-1295 DAC when: (1) once-weekly injection frequency is operationally required (large animal studies, chronic aging studies with logistical constraints); (2) the endpoint is IGF-1 elevation magnitude at steady state, and pulse architecture is not a mechanistic variable; (3) study duration exceeds 16 weeks and injection burden would be prohibitive with pulsatile protocols; (4) comparison against other long-acting GH axis agents (tesamorelin, MK-677) is the research question.",
    },
    {
      type: 'heading',
      text: "Preclinical Dosing Protocols",
    },
    {
      type: 'paragraph',
      text: "Sermorelin — Mouse: 100–300 mcg/kg SC; 2–3×/day pulsatile; ZT11 pre-sleep + ZT0 morning are standard. Rat: 100–200 mcg/kg SC; 2–3×/day. Reconstitution: BAC water (0.5–1 mg/mL); stable 14–21 days at 4°C. Storage lyophilized: −20°C indefinitely.",
    },
    {
      type: 'paragraph',
      text: "CJC-1295 No DAC — Mouse: 100–300 mcg/kg SC; 3×/day with ipamorelin for combination protocol; 2×/day if used alone. Co-injection with ipamorelin at same site produces the 8–12× GH synergy (Bowers 1998). Rat: 100–200 mcg/kg SC 2–3×/day. Reconstitution: BAC water (1 mg/mL); stable 14–21 days at 4°C. Storage lyophilized: −20°C.",
    },
    {
      type: 'paragraph',
      text: "CJC-1295 DAC — Mouse: 1–2 mg/kg SC 1×/week; steady state by week 4. Rat: 0.5–1 mg/kg SC 1×/week. Lower mg/kg vs pulsatile analogs is appropriate given the extended half-life and accumulation to steady state. Washout: minimum 3 weeks post-final-injection for <10% drug remaining. Reconstitution: BAC water (1–2 mg/mL); stable 21 days at 4°C. Storage lyophilized: −20°C.",
    },
    {
      type: 'heading',
      text: "Reconstitution and Storage Notes",
    },
    {
      type: 'paragraph',
      text: "All three GHRH analogs are lyophilized and require reconstitution with bacteriostatic water (BAC water, 0.9% benzyl alcohol). Sterile saline is not recommended for reconstituted storage due to the absence of antimicrobial preservation. The wall-injection technique (inject BAC water gently onto the vial wall rather than directly onto the lyophilized cake) prevents localized concentration spikes that can cause peptide aggregation. Swirl gently—do not vortex. Allow 5–10 minutes for complete dissolution, then inspect for clarity before aliquoting.",
    },
    {
      type: 'paragraph',
      text: "For CJC-1295 DAC specifically, low-bind polypropylene tubes (Eppendorf LoBind or equivalent) are recommended when working with dilute solutions below 0.1 mg/mL, as the maleimide-albumin conjugate has moderate surface adsorption potential at low concentrations. At working concentrations ≥0.5 mg/mL, standard polypropylene suffices.",
    },
    {
      type: 'heading',
      text: "6 Research Design Considerations",
    },
    {
      type: 'paragraph',
      text: "1. Pituitary reserve baseline. GHRHr analogs require functional pituitary somatotroph mass to produce GH. Aged, GH-deficient, or high-fat-diet rodents may have substantially reduced pituitary reserve, blunting responses to all three analogs. Always characterize baseline IGF-1 and pituitary histology before committing to an underpowered study. GH-releasing peptide + GHRH acute challenge test (60-min IGF-1 AUC post-stimulation) provides a functional somatotroph reserve assessment if data are needed before the main study.",
    },
    {
      type: 'paragraph',
      text: "2. Analog-specific controls. The three analogs should not be used interchangeably within the same study. If the research question involves pulsatile GH architecture, include sermorelin or CJC-1295 No DAC groups and avoid mixing DAC and non-DAC arms unless GH pattern is explicitly a between-group variable. GHRH receptor antagonist (JMR-132 or peptide GHRH 1–29, D-Arg²-[D-Phe¹²,D-Tyr¹⁴]-GHRH 1–29) should be included as a pharmacological specificity control in mechanistic studies.",
    },
    {
      type: 'paragraph',
      text: "3. Somatostatin tone standardization. GHRH analog efficacy is inversely proportional to prevailing somatostatin tone. Housing stress, prior handling, high-fat diet, and aging all elevate somatostatin tone, reducing GH pulse amplitude. Strict housing standardization (individual vs group housing, light cycle, handling habituation) is essential before the first injection. Consider somatostatin measurement (RIA, ZT11–12 sampling) as a baseline covariate in studies where inter-individual variation in response is anticipated.",
    },
    {
      type: 'paragraph',
      text: "4. Sampling timing for IGF-1 endpoint. Sermorelin and CJC-1295 No DAC require a defined sampling window (ZT3–5, or fixed hours post-injection) because IGF-1 rises and normalizes within 24 hours after a pulsatile injection. CJC-1295 DAC requires steady-state sampling (week 4 or later, ≥48h post-injection to avoid the acute spike artifact). Mixing sampling timing rules across arms will produce artifactual between-group IGF-1 differences unrelated to the compound being studied.",
    },
    {
      type: 'paragraph',
      text: "5. Combination with GHRP/ipamorelin. CJC-1295 No DAC + ipamorelin co-injection requires simultaneous administration at the same SC site to achieve the peak synergy. Sequential injections 30 minutes apart reduce the GH amplification effect by approximately 50%. Sermorelin + ipamorelin combination also produces synergy but with lower peak GH AUC than CJC-1295 No DAC + ipamorelin. CJC-1295 DAC + ipamorelin combination is pharmacologically unusual: the pulsatile GHSR-1a signal from ipamorelin sits atop a continuous basal GHRHr stimulation from DAC, which may attenuate the pulse height due to reduced GHRHr availability for the acute synergy mechanism.",
    },
    {
      type: 'paragraph',
      text: "6. Sex differences and the GH axis. Female rodents have higher GH pulse frequency and lower pulse amplitude than males, driven by estrogen-dependent differences in somatostatin tone and GHRH neuronal activity. For body composition and IGF-1 elevation studies, female rodents typically require 1.5–2× the dose per kg to achieve equivalent IGF-1 elevations. NIH SABV policy (sex as a biological variable) mandates sex-stratified analysis and n per sex adequate for sex×treatment interaction testing. Pre-plan this in the power calculation; do not pool sexes post-hoc.",
    },
    {
      type: 'heading',
      text: "Selecting the Right Analog: Summary Decision Framework",
    },
    {
      type: 'paragraph',
      text: "The central question for GHRH analog selection is: does your research question require pulsatile GH architecture, or is sustained IGF-1 elevation the primary endpoint? If pulse architecture matters—whether you are studying GH receptor dynamics, somatostatin tone, lipolytic kinetics, or body composition mechanisms—choose sermorelin (minimal/physiological) or CJC-1295 No DAC (optimal pulsatile amplitude). If sustained IGF-1 elevation with minimal injection burden is the requirement, CJC-1295 DAC is appropriate, with the caveat of planning a 4-week washout and monitoring for hepatic GHR downregulation in studies exceeding 8 weeks.",
    },
    {
      type: 'paragraph',
      text: "For most research applications where GHRH + GHRP combination protocols are used—which covers the majority of GH axis mechanistic studies—CJC-1295 No DAC is the preferred GHRH component due to its optimal pulsatile synergy with ipamorelin, DPP-4 resistance, and availability of published dose-response data. Sermorelin retains value for historical dataset replication and DPP-4 probe studies. CJC-1295 DAC is best reserved for chronic aging studies where injection frequency is a logistical constraint and pulse architecture is not a mechanistic variable.",
    },
    {
      type: 'paragraph',
      text: "All three analogs should be obtained with HPLC ≥98% purity verification and lot-specific COA before use in quantitative GH axis research. Batch-to-batch variation in purity directly affects dose-response reproducibility, and inter-lab replication depends on consistent compound quality.",
    },
    {
      type: 'paragraph',
      text: "Research Use Only. For laboratory research purposes only. Not for human use or consumption. The information in this article is intended for qualified researchers in institutional settings.",
    },
  ],
};
