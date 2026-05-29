import type { BlogArticle } from '../blog-types';

export const article: BlogArticle =   {
    slug: "mk-677-ibutamoren-oral-gh-secretagogue-guide",
    title: "MK-677 (Ibutamoren): The Researcher's Guide to Oral GH Secretagogues",
    description:
      "A research-focused guide to MK-677 (ibutamoren) — GHSR-1a agonism, oral bioavailability versus injectable secretagogues, Nass 2008 IGF-1 data, lean mass studies, sleep architecture effects, dose-response in rodents, and research design tips for oral GH axis studies.",
    category: "Compound Profiles",
    readMinutes: 9,
    publishedAt: "2026-05-29",
    ogImage: "/og-image.jpg",
    body: [
      {
        type: "paragraph",
        text: "MK-677, also known as ibutamoren or ibutamoren mesylate, is a non-peptide orally active growth hormone secretagogue that selectively agonizes the ghrelin receptor (GHSR-1a). Its defining characteristic in the research landscape is its route of administration: unlike the injectable GHRPs (ipamorelin, GHRP-2, GHRP-6), MK-677 is stable in the GI tract, absorbed orally, and achieves systemic exposure sufficient for meaningful GHSR-1a activation — making it the primary research tool for studying sustained, orally administered GH axis stimulation.",
      },
      {
        type: "paragraph",
        text: "This guide covers MK-677's mechanism, how it compares to injectable secretagogues, what the clinical and preclinical literature shows, rodent dosing protocols, and what researchers need to know for rigorous study design.",
      },
      {
        type: "heading",
        text: "What Is MK-677?",
      },
      {
        type: "paragraph",
        text: "MK-677 (chemical name: (R)-1'-(2-methylalanyl-O-benzyl-D-seryl)-1-(methylsulfonyl)-1,2-dihydrospiro[indole-3,4'-piperidin]-2(1H)-one methanesulfonate) is a synthetic spiropiperidine compound developed by Merck in the early 1990s. It is classified as a non-peptidic growth hormone secretagogue — structurally, it bears no resemblance to the peptide GHRPs, yet it binds GHSR-1a with high affinity and selectivity.",
      },
      {
        type: "paragraph",
        text: "MK-677 was designed specifically to overcome the key limitation of peptide GHRPs: oral instability. Peptides are cleaved by proteases in the stomach and small intestine, making them ineffective when swallowed. MK-677's small-molecule, non-peptide structure allows it to survive GI transit, absorb through the intestinal epithelium, and reach systemic circulation in pharmacologically relevant concentrations following oral dosing — a significant pharmacological engineering achievement.",
      },
      {
        type: "list",
        items: [
          "Molecular formula: C27H36N4O5S · CH4O3S (mesylate salt)",
          "Molecular weight: 624.77 g/mol (mesylate salt); 528.67 g/mol (free base)",
          "CAS number: 159752-10-0",
          "Mechanism: GHSR-1a full agonist (non-peptide, small molecule)",
          "Route: Orally bioavailable — the primary distinguishing feature vs injectable GHRPs",
          "Half-life: ~24 hours in humans — once-daily dosing is pharmacokinetically appropriate",
          "Appearance: Lyophilized white to off-white powder",
        ],
      },
      {
        type: "heading",
        text: "Mechanism of Action: GHSR-1a Agonism",
      },
      {
        type: "paragraph",
        text: "MK-677 acts as a full agonist at GHSR-1a — the same receptor activated by ghrelin, ipamorelin, GHRP-2, and GHRP-6. GHSR-1a is expressed in somatotroph cells of the anterior pituitary, hypothalamic nuclei (arcuate, ventromedial), vagal afferents, and several peripheral tissues. Agonist binding to GHSR-1a activates Gq/PLC signaling, leading to IP3-mediated intracellular calcium release and downstream activation of GH secretory vesicle exocytosis in pituitary somatotrophs.",
      },
      {
        type: "paragraph",
        text: "Like the peptide GHRPs, MK-677 acts synergistically with endogenous GHRH. When MK-677 is present during a GHRH pulse, the resulting GH release is markedly amplified relative to either stimulus alone. This synergy with endogenous GHRH pulses means that MK-677 does not simply produce a flat, pharmacological GH level — it amplifies the natural pulsatile GH secretory pattern, preserving the physiological dynamics of the GH axis while increasing amplitude.",
      },
      {
        type: "paragraph",
        text: "Beyond direct pituitary stimulation, MK-677 also acts in the hypothalamus to increase GHRH release and suppress somatostatin (GH-inhibiting hormone) tone. This multi-site mechanism explains why MK-677 produces larger net GH increases than peptide GHRPs administered at equimolar doses in some models — it acts on both the amplifier (pituitary) and the controller (hypothalamic tone).",
      },
      {
        type: "heading",
        text: "Oral vs Injectable GH Secretagogues: Key Differences",
      },
      {
        type: "paragraph",
        text: "The comparison between MK-677 and injectable peptide secretagogues (ipamorelin, GHRP-2, GHRP-6) is central to understanding when to use each class in research. Several differences have direct experimental implications:",
      },
      {
        type: "subheading",
        text: "Pharmacokinetics: Duration and Onset",
      },
      {
        type: "paragraph",
        text: "Injectable GHRPs have half-lives of 1.5-2 hours and produce sharp, discrete GH pulses lasting 2-4 hours. MK-677's 24-hour half-life produces a sustained elevation of baseline GH and IGF-1 rather than discrete pulses. This distinction is methodologically important: if your research question involves acute GH pulse physiology, injectable GHRPs are the appropriate tool. If your question involves the downstream effects of chronically elevated GH/IGF-1 — body composition, metabolic rate, lean mass accretion — MK-677's sustained profile is more appropriate and experimentally cleaner to administer.",
      },
      {
        type: "subheading",
        text: "Bioavailability and Administration Burden",
      },
      {
        type: "paragraph",
        text: "MK-677's oral bioavailability in humans is approximately 60-90% (estimated from clinical pharmacokinetic studies). For chronic rodent studies, oral gavage administration once daily with MK-677 replaces twice-daily or more frequent subcutaneous injections required with peptide GHRPs. This reduces stress-induced GH suppression from repeated injections — an important confound in GH research, where injection stress itself activates somatostatin tone and blunts GH secretion.",
      },
      {
        type: "subheading",
        text: "Selectivity Profile",
      },
      {
        type: "paragraph",
        text: "Like GHRP-2 and GHRP-6, MK-677 is not as selective as ipamorelin. At doses producing maximal GH stimulation, MK-677 causes significant cortisol increases (approximately 30-40% above baseline in human studies), modest prolactin elevation, and potent hunger stimulation mediated through hypothalamic GHSR-1a agonism. Researchers designing clean GH-axis studies where cortisol confounders must be minimized should account for this — or use ipamorelin as the benchmark comparison.",
      },
      {
        type: "heading",
        text: "Clinical Evidence: IGF-1 Elevation and Body Composition",
      },
      {
        type: "subheading",
        text: "Nass et al. 2008: The Landmark Long-Term Study",
      },
      {
        type: "paragraph",
        text: "The most cited clinical evidence for MK-677 comes from Nass et al. (2008, Annals of Internal Medicine), a double-blind, placebo-controlled, two-year study in 65 healthy older adults (mean age 65, IGF-1-deficient at baseline). Subjects received either MK-677 25 mg orally once daily or placebo for 24 months.",
      },
      {
        type: "paragraph",
        text: "The primary findings: IGF-1 levels in the MK-677 group increased by 39.9% above baseline (p<0.001) and were sustained throughout the 2-year treatment period without significant tachyphylaxis. GH mean concentration (assessed by 12-hour sampling profiles) increased significantly. Lean body mass increased by 1.1 kg on MK-677 vs placebo at 12 months (p=0.026), measured by DEXA. However, functional outcomes (muscle strength, physical performance) were not significantly different from placebo, and there was no reduction in fat mass.",
      },
      {
        type: "paragraph",
        text: "The study also documented the compound's adverse effect profile at 25 mg/day over 2 years: increased appetite (hunger reports in 73% of MK-677 subjects vs 41% placebo), transient lower-extremity edema (26% vs 14%), and clinically meaningful increases in fasting blood glucose (mean +0.6 mmol/L) and insulin resistance as assessed by HOMA-IR. No serious adverse events attributable to MK-677 were observed, and no subjects developed overt diabetes.",
      },
      {
        type: "callout",
        text: "The Nass 2008 data is the most methodologically rigorous long-term dataset for MK-677 in humans. Key finding for researchers: sustained IGF-1 elevation is reliably achieved without tachyphylaxis over 24 months at 25 mg/day, but lean mass gains are modest and strength improvements are not significant at this dose and study duration. Higher doses or younger populations may show different outcomes.",
      },
      {
        type: "subheading",
        text: "Earlier Clinical Pharmacology Studies",
      },
      {
        type: "paragraph",
        text: "Earlier studies (Chapman et al. 1996, 1998) established MK-677's basic pharmacological profile in humans. Chapman 1996 showed that MK-677 at 5-25 mg/day produced dose-dependent increases in 24-hour mean GH concentration and IGF-1 in healthy young men, with maximal effects at 25 mg. The paper also documented the characteristic MK-677 side effect profile: increased appetite, mild edema, and a sustained but modest elevation of fasting insulin. The 25 mg dose became the standard research reference dose for most subsequent human and translational studies.",
      },
      {
        type: "paragraph",
        text: "A 1998 study in hip fracture patients (Interval et al.) showed that MK-677 significantly improved IGF-1 levels in elderly patients with hip fracture and malnutrition, and produced significant improvements in functional outcome scores compared to placebo — one of the few data points suggesting functional benefit in a high-need population.",
      },
      {
        type: "heading",
        text: "Lean Mass and Body Composition Studies",
      },
      {
        type: "paragraph",
        text: "The body composition literature for MK-677 is consistent in showing lean mass gains but inconsistent in translating these gains into functional strength or performance improvements. Several patterns emerge across the published studies:",
      },
      {
        type: "list",
        items: [
          "Lean mass accretion is reliably documented: DEXA-measured LBM increases of 1-2 kg over 8-24 weeks are the most consistent finding across study populations (healthy older adults, IGF-1-deficient adults, hip fracture patients)",
          "Fat mass changes are less consistent: some studies report modest fat reduction; others show no significant change. The absence of fat loss at 25 mg/day despite significant IGF-1 elevation is notable — it may reflect the concurrent increase in cortisol partially opposing GH-driven lipolysis",
          "Muscle strength lags lean mass: studies measuring grip strength, leg press, or physical performance generally do not find significant improvements corresponding to lean mass gains. This decoupling may reflect the relatively modest LBM gains, the timeline required for functional neuromuscular adaptation, or real GH physiology: lean mass under GH stimulation includes muscle water and glycogen storage, not necessarily contractile protein synthesis",
          "Population matters: older, IGF-1-deficient adults show more robust responses than young, GH-sufficient subjects — consistent with the principle that GH axis interventions produce larger effects when the axis is deficient",
        ],
      },
      {
        type: "heading",
        text: "Sleep Architecture Effects",
      },
      {
        type: "paragraph",
        text: "One of the most distinctive and scientifically interesting findings with MK-677 is its effect on sleep architecture. GHSR-1a receptors are expressed in hypothalamic circuits that regulate sleep, and GH secretion is tightly linked to slow-wave sleep (SWS, or deep sleep) — the largest GH pulse of the day occurs in the first 1-2 hours of sleep, coupled to SWS onset.",
      },
      {
        type: "paragraph",
        text: "Copinschi et al. (1997) showed that MK-677 25 mg significantly increased REM sleep duration and slow-wave sleep in healthy young subjects over one week of treatment, as measured by polysomnography. SWS increased by approximately 50% and REM sleep by approximately 20% compared to placebo nights. These effects were robust and statistically significant. Stage 1 and Stage 2 sleep were correspondingly reduced, meaning the effect was a qualitative shift toward deeper, more restorative sleep stages rather than simply more total sleep time.",
      },
      {
        type: "paragraph",
        text: "The mechanism is not fully established. GH itself influences sleep architecture — and the increased GH secretion from MK-677 may drive the SWS increase through a GH-brain feedback loop. Alternatively, GHSR-1a activation in hypothalamic sleep-regulatory circuits may independently promote SWS. This makes MK-677 a potentially useful pharmacological tool for researchers studying GH-sleep relationships or investigating sleep architecture in aging, where both GH and SWS decline together.",
      },
      {
        type: "heading",
        text: "Dose-Response in Rodent Models",
      },
      {
        type: "paragraph",
        text: "Rodent MK-677 pharmacokinetics differ from humans due to faster hepatic clearance — the 24-hour half-life seen in humans is shorter in mice and rats (estimated 6-8 hours). This requires more frequent dosing in rodent studies to maintain sustained GH/IGF-1 elevation comparable to once-daily human protocols. Published rodent protocols typically use:",
      },
      {
        type: "list",
        items: [
          "Mice: 10-30 mg/kg once daily orally (gavage or drinking water), with 10 mg/kg generally producing submaximal effects and 20-30 mg/kg producing near-maximal IGF-1 elevation",
          "Rats: 5-25 mg/kg once daily by oral gavage; 10 mg/kg produces robust IGF-1 increases in young adult male rats; older animals may require 20 mg/kg",
          "Chronic protocols: most body composition and lean mass studies run 4-12 weeks; some GH axis characterization studies use 4-6 week treatments",
          "Dissolved in: aqueous vehicle (sterile water + 0.5% methylcellulose or DMSO/PEG400 for solubility), or DMSO-ethanol at <5% final concentration; vehicle controls must be matched for solvent",
          "Note: drinking water delivery is possible for chronic studies but requires dose calculation based on daily water intake, which varies; gavage provides tighter dose control",
          "Biomarker confirmation: verify IGF-1 elevation by ELISA at study midpoint; IGF-1 should be 30-80% above vehicle controls at effective doses",
        ],
      },
      {
        type: "heading",
        text: "Metabolic Side Effects: Glucose and Insulin Resistance",
      },
      {
        type: "paragraph",
        text: "The most important safety consideration in MK-677 research design is its effect on glucose metabolism. GH itself causes insulin resistance by stimulating hepatic gluconeogenesis and reducing peripheral glucose uptake — the physiological rationale for the Randle cycle's priority for fatty acid oxidation during GH-driven lipolysis. MK-677's sustained GH/IGF-1 elevation replicates this metabolic effect in a dose-dependent manner.",
      },
      {
        type: "paragraph",
        text: "In clinical studies, MK-677 increases fasting blood glucose by 0.3-0.8 mmol/L and elevates HOMA-IR by 30-50% at 25 mg/day. In rodent studies using high-fat diet or genetically obese animals, these effects are amplified. Researchers using MK-677 in metabolic disease models — where insulin resistance is already a feature — should anticipate interaction with the model's baseline metabolic phenotype and design accordingly.",
      },
      {
        type: "paragraph",
        text: "This also means MK-677 is not a clean GH secretagogue for metabolic research in the same way ipamorelin is for GH axis research. Its pronounced hunger stimulation and insulin resistance contribution make it more akin to pharmacological ghrelin mimicry — useful precisely for that reason, but not interchangeable with selective GHSR-1a agonists in studies where these confounders must be excluded.",
      },
      {
        type: "callout",
        text: "MK-677 is sold as a research chemical for laboratory use only. It is not FDA-approved and is not intended for human administration. All clinical data cited refers to published research studies conducted under institutional review board oversight.",
      },
      {
        type: "heading",
        text: "Reconstitution and Storage",
      },
      {
        type: "paragraph",
        text: "MK-677 is a small-molecule compound with different solubility characteristics than peptide research chemicals. It has limited solubility in plain water but dissolves well in DMSO and weakly acidic aqueous solutions.",
      },
      {
        type: "list",
        items: [
          "In vitro / cell culture: dissolve in DMSO to 50-100 mM stock; dilute in culture medium to working concentration (DMSO final <0.1%); store DMSO stock at -20°C in sealed aliquots",
          "In vivo oral (rodent gavage): prepare 2-5 mg/mL suspension in 0.5% methylcellulose in sterile water, or use 5-10% PEG400/Tween80 vehicle for better solubility; sonicate if needed; administer by gavage",
          "Storage of powder: lyophilized MK-677 is stable at -20°C for 24 months in sealed, desiccated, light-protected vials; room temperature storage acceptable for <1 month",
          "Avoid: aqueous solutions at neutral pH without co-solvents (poor solubility); strong alkaline conditions (hydrolyzes the lactam ring); prolonged UV exposure",
          "Verify before use: pale cream to white powder; if significant discoloration or clumping is observed, re-evaluate storage conditions and check lot documentation",
        ],
      },
      {
        type: "heading",
        text: "Research Design Considerations",
      },
      {
        type: "list",
        items: [
          "Match the research question to the secretagogue: oral chronic GH/IGF-1 elevation (body composition, aging, sleep) → MK-677. Acute GH pulse research or studies requiring cortisol isolation → ipamorelin or injectable GHRPs.",
          "Verify IGF-1 at study midpoint: MK-677's efficacy endpoint is IGF-1 elevation, not acute GH spikes. Confirm IGF-1 is elevated 30-80% above vehicle controls before committing to terminal timepoints",
          "Control for caloric intake: MK-677's hunger effect will increase food consumption in rodents given ad libitum access. Use pair-fed controls or match caloric intake across groups if food intake is a confound in your endpoint",
          "Monitor glucose tolerance: if running metabolic studies, include oral GTT or HbA1c measurements at baseline and endpoint to document glucose homeostasis changes",
          "Sleep studies: polysomnography in rodents is resource-intensive; EEG telemetry is appropriate for sleep architecture experiments with MK-677",
          "Duration: IGF-1 elevation is sustained (no tachyphylaxis at 2 years in humans); body composition effects require at least 4-8 weeks in rodents to be detectable by DEXA or tissue dissection",
          "Age of animals: GH axis responses diminish with age; clearly specify age at study entry and use age-matched vehicle controls",
        ],
      },
      {
        type: "heading",
        text: "Summary: When to Use MK-677",
      },
      {
        type: "paragraph",
        text: "MK-677 occupies a distinct niche in the GH secretagogue toolkit. Its oral bioavailability and 24-hour half-life make it the preferred research tool when the experiment requires sustained, chronically elevated GH/IGF-1 with minimal injection burden. Its ghrelin-mimetic properties — hunger stimulation, sleep architecture effects, modest cortisol elevation — are either features or limitations depending on the study question.",
      },
      {
        type: "list",
        items: [
          "Best for: chronic IGF-1 elevation studies, lean mass/body composition protocols, sleep architecture research, aging and GH deficiency models, studies where oral administration is required",
          "Not ideal for: studies requiring acute GH pulse characterization, clean GH axis stimulation without cortisol, metabolic studies where insulin resistance must be excluded as a confound",
          "Benchmark compound: if your research question involves oral GH axis stimulation, MK-677 is the best-characterized and most widely cited compound in the published literature",
        ],
      },
      {
        type: "callout",
        text: "Nexphoria supplies MK-677 at >=99% HPLC purity with identity confirmation by mass spectrometry. Each lot ships with a third-party COA. CAS 159752-10-0. For catalog details, see the product page.",
      },
      {
        type: "heading",
        text: "Regulatory Note",
      },
      {
        type: "paragraph",
        text: "MK-677 is sold as a research chemical for laboratory use only. It is not FDA-approved for any therapeutic indication and is not a dietary supplement. This guide is provided for scientific informational purposes only. Researchers are responsible for compliance with applicable laws and regulations in their jurisdiction.",
      },
    ],
  };
