import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: 'cjc-1295-ipamorelin-combination-research-guide',
  title: 'CJC-1295 and Ipamorelin: The Complete Combination Research Guide',
  description:
    'A comprehensive mechanistic and protocol guide for CJC-1295 No DAC + ipamorelin combination research: orthogonal receptor pharmacology, 8–12× synergistic GH amplification, published dosing data, IGF-1 endpoints, and full study design.',
  category: 'GH Axis',
  readMinutes: 12,
  publishedAt: '2026-06-02',
  ogImage: '/og/products/cjc-1295-ipamorelin.jpg',
  body: [
    {
      type: 'paragraph',
      text: 'CJC-1295 No DAC (Mod GRF 1-29) and ipamorelin represent the most widely used growth hormone secretagogue combination in preclinical research. Their co-administration produces a synergistic GH pulse that neither compound achieves alone — a pharmacological phenomenon rooted in orthogonal receptor pharmacology that has been quantified in multiple published studies. This guide covers the mechanistic basis of synergy, published dose-response data, protocol design, endpoint selection, and critical controls for researchers working with this combination.',
    },
    {
      type: 'heading',
      text: 'Why These Two Compounds Work Together',
    },
    {
      type: 'paragraph',
      text: 'CJC-1295 No DAC is a tetrastabilized analog of the first 29 amino acids of growth hormone-releasing hormone (GHRH 1-29), carrying four substitutions (D-Ala², Ala⁸, Gln¹⁵, Glu²⁷) that resist DPP-4 cleavage and extend half-life to 25–30 minutes. It binds the GHRH receptor (GHRHr), a class B1 GPCR that couples to Gαs → adenylyl cyclase → cAMP → PKA → CREB. PKA phosphorylates CREB and voltage-gated Ca²⁺ channels (VGCCs), stimulating GH mRNA transcription and vesicle exocytosis from anterior pituitary somatotrophs.',
    },
    {
      type: 'paragraph',
      text: 'Ipamorelin is a pentapeptide GH secretagogue (Aib-His-D-2-Nal-D-Phe-Lys-NH₂) that binds the GH secretagogue receptor 1a (GHSR-1a) with high selectivity. GHSR-1a couples to Gαq → phospholipase Cβ → IP₃/DAG → intracellular Ca²⁺ release from the ER + PKC activation. This is an entirely separate second messenger cascade from the cAMP pathway activated by GHRHr. Ipamorelin also suppresses somatostatin (SST) release from hypothalamic neurons, further disinhibiting the pituitary.',
    },
    {
      type: 'callout',
      text: 'KEY SYNERGY MECHANISM: CJC-1295 No DAC activates GHRHr → Gαs/cAMP/PKA. Ipamorelin activates GHSR-1a → Gαq/IP₃/Ca²⁺. Two non-competing, non-overlapping intracellular pathways converge on the same somatotroph to amplify GH secretion 8–12× beyond either compound alone. This is receptor-orthogonal synergy, not simple additivity.',
    },
    {
      type: 'heading',
      text: 'Published Synergy Data',
    },
    {
      type: 'paragraph',
      text: 'Bowers et al. (1998, Endocrinology) established the foundational data for GHRH analog + GHRP combination synergy. Using GHRH(1-29)NH₂ and GHRP-2 in human subjects, co-administration produced GH peaks of 90–120 ng/mL versus 15–25 ng/mL for GHRH alone and 20–35 ng/mL for GHRP-2 alone — an 8–12× supraadditive amplification. The same orthogonal mechanism applies to CJC-1295 No DAC + ipamorelin, as both share the same receptor coupling profiles as their parent ligands.',
    },
    {
      type: 'paragraph',
      text: 'Johansen et al. (1999) characterized ipamorelin dose-response in rodents: 1 nmol/kg IV produced modest GH peaks (~15–25 ng/mL), 3 nmol/kg produced ~40–60 ng/mL, and 10 nmol/kg produced ~60–80 ng/mL, without cortisol or ACTH activation at any dose. Combined with a GHRHr agonist at GHRHr-EC₅₀ doses, GH peaks increase to 120–200 ng/mL in rodent models. IGF-1 elevation with the combination consistently reaches 60–85% above baseline at 4–8 weeks, compared with 30–45% for ipamorelin alone and 35–50% for sermorelin/CJC No DAC alone.',
    },
    {
      type: 'table',
      headers: ['Protocol', 'GH Peak (ng/mL)', 'IGF-1 Elevation (4–8 wk)', 'Cortisol', 'Tachyphylaxis'],
      rows: [
        ['CJC-1295 No DAC alone (100 mcg/kg SC)', '25–45', '+35–50%', 'None', 'Moderate (~30% at 4 wk)'],
        ['Ipamorelin alone (100 mcg/kg SC)', '30–60', '+30–45%', 'None', 'Low (~20% at 4 wk)'],
        ['CJC-1295 No DAC + Ipamorelin (concurrent)', '120–200', '+60–85%', 'None', 'Low–moderate'],
        ['GHRP-2 alone (100 mcg/kg SC)', '40–70', '+35–55%', 'Elevated', 'Moderate (~45% at 4 wk)'],
        ['GHRP-6 alone (100 mcg/kg SC)', '35–60', '+30–50%', 'Elevated', 'Moderate'],
        ['Hexarelin alone (100 mcg/kg SC)', '70–90', '+40–60%', 'Elevated', 'Severe (~75–80% at 4 wk)'],
        ['MK-677 alone (10 mg/kg oral)', '50–80 (sustained)', '+35–45%', 'Mild', 'Low (24h occupancy)'],
      ],
    },
    {
      type: 'heading',
      text: 'Why Co-Injection Timing Matters',
    },
    {
      type: 'paragraph',
      text: 'The synergy between CJC-1295 No DAC and ipamorelin is temporally dependent. Both compounds must reach the pituitary simultaneously to produce the supraadditive effect. CJC-1295 No DAC has a plasma half-life of 25–30 minutes; ipamorelin has a half-life of approximately 2 hours in rodents. For maximal GH pulse, they should be administered as a single co-injection or within 60 seconds of each other. Sequential administration separated by more than 10 minutes significantly attenuates the combined GH peak.',
    },
    {
      type: 'paragraph',
      text: 'In rodents, the natural GH pulse architecture involves large-amplitude pulses approximately every 3–4 hours in male rats and a more tonic pattern in female rats. Dosing frequency of 2–3× daily in mice (or once daily if studying IGF-1 elevation rather than GH pulse architecture) aligns with published protocols. For studies specifically measuring GH pulse amplitude and frequency, jugular catheterization with q10-minute serial sampling for 4–6 hours around the ZT12 nocturnal window is the standard approach.',
    },
    {
      type: 'heading',
      text: 'Circadian Timing: When to Inject',
    },
    {
      type: 'paragraph',
      text: 'GH secretion is circadian and sex-dependent. In male rodents on a 12L:12D cycle, the largest endogenous GH pulses occur at ZT12–ZT16 (lights off). Administering CJC-1295 No DAC + ipamorelin at ZT11 (60 minutes before lights off) produces the highest GH peaks by synchronizing with natural somatotroph sensitivity. For chronic IGF-1 elevation studies, ZT11 once-daily or ZT0/ZT12 twice-daily protocols are common. Female rodents show more continuous GH secretion; sex must be stratified, and female cohorts should be analyzed separately per NIH SABV policy.',
    },
    {
      type: 'callout',
      text: 'PRACTICAL NOTE: In mice, inject CJC-1295 No DAC + ipamorelin in the same syringe (both dissolved in BAC water; they are co-soluble). Concurrent injection is essential for peak synergy. Use a single 100–300 mcg/kg dose for each compound per injection.',
    },
    {
      type: 'heading',
      text: 'Preclinical Dosing Protocols',
    },
    {
      type: 'table',
      headers: ['Model / Objective', 'CJC-1295 No DAC Dose', 'Ipamorelin Dose', 'Route', 'Frequency', 'Duration'],
      rows: [
        ['IGF-1 elevation (C57BL/6J mouse)', '100–200 mcg/kg', '100–200 mcg/kg', 'SC', '2–3× daily', '4–12 weeks'],
        ['GH pulse amplitude (SD rat)', '10–50 mcg/kg', '100–200 mcg/kg', 'IV or SC', '1× at ZT11 for sampling', 'Acute'],
        ['Body composition (DIO mouse)', '100 mcg/kg', '100 mcg/kg', 'SC', '2× daily (ZT0, ZT12)', '8–12 weeks'],
        ['Lean mass / anti-obesity', '200 mcg/kg', '200 mcg/kg', 'SC', '3× daily', '8 weeks'],
        ['Bone density (OVX rat)', '100 mcg/kg', '100 mcg/kg', 'SC', '2× daily', '12 weeks'],
        ['Tachyphylaxis study', '100 mcg/kg', '100 mcg/kg', 'SC', '3× daily → measure at weeks 0/2/4/6/8', '8 weeks'],
      ],
    },
    {
      type: 'heading',
      text: 'Endpoint Selection',
    },
    {
      type: 'paragraph',
      text: 'IGF-1 is the primary validated biomarker for GH axis activation in chronic studies. Serum IGF-1 should be collected at ZT3–ZT5 (post-light-onset trough period for GH pulses, where IGF-1 integration is most stable) using the Crystal Chem Mouse IGF-1 ELISA (#80574) after acid-ethanol extraction to remove IGFBPs. Blood draw should follow 4-hour fasting and handling habituation to minimize stress-induced corticosterone artifacts.',
    },
    {
      type: 'table',
      headers: ['Endpoint', 'Method / Kit', 'Timing', 'Notes'],
      rows: [
        ['Serum IGF-1', 'Crystal Chem #80574; acid-ethanol extraction', 'ZT3–5, 4h fasted', 'Primary efficacy endpoint'],
        ['GH pulse amplitude', 'q10-min jugular catheter serial sampling × 4–6h', 'Around ZT12', 'Requires catheterized rats'],
        ['Body composition', 'EchoMRI (lean/fat/free water)', 'Every 4 weeks', 'Non-invasive, longitudinal'],
        ['Bone mineral density', 'DXA (PIXImus) or microCT tibia', 'Endpoint', 'Femur + lumbar spine'],
        ['Lean mass / adiposity', 'EchoMRI + depot weights at sacrifice', 'Endpoint', 'Include inguinal/visceral/BAT'],
        ['Serum corticosterone', 'MP Biomedicals #07-120102 ELISA', 'ZT0 (trough) and ZT12 (peak)', 'Confirm ipamorelin HPA selectivity'],
        ['IGFBP-3', 'R&D Systems DGB300 ELISA', 'ZT3–5', 'Co-endpoint for IGF-1 ternary complex'],
        ['Skeletal muscle pAkt/S6K', 'Western blot Ser473/Thr389', 'Sacrifice', 'mTORC1 anabolic signaling downstream of IGF-1R'],
        ['Pituitary GHRH-R mRNA', 'RT-qPCR (reference genes: B2m, Gapdh)', 'Sacrifice', 'Receptor sensitization/desensitization check'],
        ['SIRT1 / PGC-1α', 'Enzo BML-AK555 / pAc-PGC-1α WB', 'Sacrifice', 'GH-IGF-1 axis longevity crosstalk'],
      ],
    },
    {
      type: 'heading',
      text: 'Study Design: 6-Group Body Composition Study',
    },
    {
      type: 'paragraph',
      text: 'A standard body composition/anti-aging study in C57BL/6J mice requires at minimum: young lean vehicle, aged lean vehicle, aged CJC-1295 No DAC only, aged ipamorelin only, aged combination, and aged pair-fed combination control. This 6-group design isolates the combined anabolic effect and controls for caloric intake differences (GH axis activation may increase food intake via ghrelin-like GHSR-1a effects, though ipamorelin is substantially cleaner than GHRP-2/GHRP-6 in this regard).',
    },
    {
      type: 'table',
      headers: ['Group', 'n', 'Treatment', 'Purpose'],
      rows: [
        ['1. Young vehicle', '8', 'Young (8 wk) C57BL/6J, BAC water SC 2×/day', 'Young reference range'],
        ['2. Aged vehicle', '10', 'Aged (20–24 mo) C57BL/6J, BAC water SC 2×/day', 'Aged baseline'],
        ['3. Aged CJC only', '10', 'CJC-1295 No DAC 100 mcg/kg 2×/day SC', 'GHRHr component alone'],
        ['4. Aged ipamorelin only', '10', 'Ipamorelin 100 mcg/kg 2×/day SC', 'GHSR-1a component alone'],
        ['5. Aged combination', '10', 'CJC + ipamorelin 100 mcg/kg each 2×/day co-injected', 'Synergy test arm'],
        ['6. Aged pair-fed combo', '8', 'Aged, food intake matched to Group 5', 'Caloric restriction attribution control'],
      ],
    },
    {
      type: 'heading',
      text: 'Critical Controls and Pharmacological Dissection',
    },
    {
      type: 'paragraph',
      text: 'Mechanistic dissection of the combination requires receptor-specific antagonists. For GHRHr specificity: GHRH(11-44)NH₂ (competitive antagonist, 5–10 mg/kg SC) should abolish the CJC-1295 No DAC component. For GHSR-1a specificity: D-[Lys3]-GHRP-6 (50 mg/kg SC) is the standard GHSR-1a competitive antagonist and should abolish the ipamorelin component, reducing the combination response to monotherapy levels. Combined antagonist treatment should reduce the synergistic response to near baseline, confirming the mechanism.',
    },
    {
      type: 'table',
      headers: ['Control', 'Reagent / Dose', 'Purpose'],
      rows: [
        ['GHRHr antagonist', 'GHRH(11-44)NH₂ 5–10 mg/kg SC', 'Ablate CJC-1295 No DAC contribution; synergy → ipamorelin-only response'],
        ['GHSR-1a antagonist', 'D-[Lys3]-GHRP-6 50 mg/kg SC', 'Ablate ipamorelin contribution; synergy → CJC-only response'],
        ['Somatostatin analogue', 'Octreotide 10 mcg/kg SC', 'Maximize somatostatin tone to suppress GH pulse baseline'],
        ['Pituitary reserve check', 'Exogenous GHRH 0.1 mcg/kg IV bolus → measure GH at +15 min', 'Verify intact somatotroph reserve before study start'],
        ['Vehicle control', 'BAC water SC, volume-matched', 'Injection stress control; match injection volume across groups'],
        ['Positive control', 'Sermorelin 1 mg/kg SC (lower efficacy single-agent benchmark)', 'Cross-study calibration'],
      ],
    },
    {
      type: 'heading',
      text: 'CJC-1295 No DAC vs CJC-1295 DAC: Choosing the Right Analog',
    },
    {
      type: 'paragraph',
      text: 'CJC-1295 DAC (Drug Affinity Complex) extends half-life to 6–8 days via covalent albumin binding through a reactive succinimide ester at a modified lysine. This enables once-weekly dosing and produces sustained tonic IGF-1 elevation (60–70% at steady state, Teichman 2006 JCEM). However, tonic GH stimulation suppresses GHRHr sensitivity over time and is incompatible with pulsatile GH biology studies — the natural episodic GH pattern is lost.',
    },
    {
      type: 'paragraph',
      text: 'CJC-1295 No DAC preserves pulsatile GH architecture, is the appropriate choice for combination with ipamorelin, and is the standard in virtually all preclinical combination research. Reserve CJC-1295 DAC for studies specifically investigating the effects of sustained IGF-1 elevation independent of GH pulse biology (e.g., IGF-1-dependent skeletal muscle protein synthesis over weeks without injection-frequency considerations).',
    },
    {
      type: 'heading',
      text: 'The MK-677 Interaction Warning',
    },
    {
      type: 'paragraph',
      text: 'MK-677 (ibutamoren) is a non-peptide GHSR-1a agonist with a 24-hour half-life. Combining MK-677 with ipamorelin creates GHSR-1a competition and receptor saturation rather than synergy — both compete for the same receptor, and MK-677\'s continuous occupancy may attenuate ipamorelin\'s additional GHSR-1a contribution. The appropriate combinations are: (1) CJC-1295 No DAC + ipamorelin (orthogonal synergy), or (2) CJC-1295 No DAC + MK-677 (GHRHr + sustained GHSR-1a occupation — less synergy than with ipamorelin, but valid for once-daily simplified protocols). Do not triple-combine CJC + ipamorelin + MK-677 without a specific receptor saturation hypothesis to test.',
    },
    {
      type: 'heading',
      text: 'Tachyphylaxis: What to Expect at 4–8 Weeks',
    },
    {
      type: 'paragraph',
      text: 'GHSR-1a undergoes GRK-mediated phosphorylation, β-arrestin recruitment, and clathrin-mediated internalization with repeated agonist exposure. Ipamorelin shows moderate tachyphylaxis — approximately 20–30% GH peak attenuation at 4 weeks, compared with 40–55% for GHRP-2, 40–50% for GHRP-6, and 75–80% for hexarelin. The GHRHr (CJC-1295 No DAC target) shows less tachyphylaxis because Gαs/cAMP signaling undergoes slower desensitization than Gαq/IP₃ pathways. In chronic studies beyond 8 weeks, measure serum IGF-1 at weeks 0, 4, 8, and 12 to characterize the tachyphylaxis trajectory. A 2-week washout followed by rechallenge documents reversibility.',
    },
    {
      type: 'heading',
      text: 'Reconstitution and Storage Protocol',
    },
    {
      type: 'paragraph',
      text: 'Both CJC-1295 No DAC and ipamorelin are lyophilized peptides reconstituted with bacteriostatic water (BAC water, 0.9% benzyl alcohol). Use 1–2 mg/mL stock concentrations. Inject into the vial wall (not directly onto the powder) to avoid mechanical disruption. Swirl gently — do not vortex. Reconstituted peptides should be stored at 4°C (refrigerator) and are stable for 14–21 days. For long studies, prepare fresh reconstituted vials every 2 weeks.',
    },
    {
      type: 'paragraph',
      text: 'CJC-1295 No DAC and ipamorelin can be combined in a single syringe immediately prior to injection if both are dissolved in BAC water at compatible concentrations. This reduces injection count per animal and ensures simultaneous delivery. Do not pre-mix and store in the same vial — prepare the combined syringe immediately before administration.',
    },
    {
      type: 'table',
      headers: ['Parameter', 'CJC-1295 No DAC', 'Ipamorelin'],
      rows: [
        ['Reconstitution solvent', 'BAC water (0.9% benzyl alcohol)', 'BAC water (0.9% benzyl alcohol)'],
        ['Recommended stock conc.', '1–2 mg/mL', '1–2 mg/mL'],
        ['Storage (lyophilized)', '-20°C, desiccant, avoid light', '-20°C, desiccant, avoid light'],
        ['Storage (reconstituted)', '4°C, max 14–21 days', '4°C, max 14–21 days'],
        ['Freeze reconstituted?', 'Avoid; use aliquots at -80°C if needed', 'Avoid; use aliquots at -80°C if needed'],
        ['pH compatibility', 'pH 4–7 stable', 'pH 4–7 stable'],
        ['Co-injection compatibility', 'Yes — mix in syringe immediately before injection', 'Yes — mix in syringe immediately before injection'],
      ],
    },
    {
      type: 'heading',
      text: '6 Research Design Considerations',
    },
    {
      type: 'list',
      items: [
        'CONCURRENT INJECTION MANDATORY: CJC-1295 No DAC and ipamorelin must be co-injected (within 60 seconds) for maximal GH pulse synergy. Sequential injection separated by >10 minutes significantly attenuates the combined response and confounds mechanistic interpretation.',
        'PITUITARY RESERVE BASELINE: Before enrolling subjects, screen pituitary reserve with an exogenous GHRH 0.1 mcg/kg IV bolus and measure GH at +15 minutes. Animals with impaired pituitary reserve (GH <20 ng/mL in mice, <50 ng/mL in rats) should be excluded to prevent high inter-subject variance.',
        'IGF-1 SAMPLING PROTOCOL: Collect serum for IGF-1 at ZT3–5 only. Collection at other circadian times introduces >40% variability. Fasting for 4 hours prior is required; 6-hour maximum to avoid fasting-induced IGF-1 suppression. Acid-ethanol extraction is mandatory — bypassing IGFBP removal causes 30–60% IGF-1 underestimation.',
        'NIH SABV SEX STRATIFICATION: Female rodents show fundamentally different GH secretion patterns (tonic vs pulsatile). If both sexes are included, power each sex separately and analyze independently. Female rodents may show less dramatic pulsatile GH amplification from ipamorelin but equivalent or greater sustained IGF-1 elevation from the CJC-1295 component.',
        'SOMATOSTATIN TONE: Endogenous somatostatin (SST) negatively regulates GHRHr somatotrophs and is suppressed by ipamorelin. SST tone varies by strain, sex, age, and stress. Controlling for stress (5-day pre-study handling habituation, consistent injection times, single-housed vs group-housed standardization) minimizes SST tone variability and reduces GH peak coefficient of variation.',
        'TACHYPHYLAXIS MONITORING: Plan IGF-1 measurements at weeks 0, 4, 8, and 12 in chronic studies. If IGF-1 returns to baseline by week 8, consider a 2-week washout with rechallenge. Include an 8-week single-agent control arm (CJC only or ipamorelin only) to isolate which receptor drives the tachyphylaxis trajectory in the combination.',
      ],
    },
    {
      type: 'heading',
      text: 'Downstream Applications: Why Researchers Use This Combination',
    },
    {
      type: 'paragraph',
      text: 'The CJC-1295 No DAC + ipamorelin combination is used across a wide range of research contexts that depend on GH/IGF-1 axis activation: body composition studies (lean mass gain, adipose reduction via GH-stimulated HSL lipolysis), aging research (GH axis decline with age, somatopause reversal), bone density (IGF-1-dependent osteoblast activity, BMD preservation in ovariectomized models), satellite cell activation for muscle repair research, and as a positive control arm in GH secretagogue comparison studies. The combination\'s clean HPA profile (no cortisol, ACTH, or prolactin elevation) makes it the preferred tool when cortisol confounds would complicate interpretation.',
    },
    {
      type: 'divider',
    },
    {
      type: 'disclaimer',
      text: 'For Research Use Only. CJC-1295 No DAC and ipamorelin are research compounds sold for in vitro and preclinical in vivo laboratory use. Not for human administration. Not intended to diagnose, treat, cure, or prevent any condition.',
    },
  ],
};
