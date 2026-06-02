import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "peptide-bioavailability-route-administration-sc-ip-intranasal-oral-research-guide",
  title: "Peptide Bioavailability by Route of Administration: SC vs IP vs IN vs Oral — The Definitive Research Guide",
  description:
    "A comprehensive reference covering subcutaneous, intraperitoneal, intranasal, intravenous, and oral peptide delivery routes — pharmacokinetics, bioavailability data, practical protocols, and study design implications for each compound class.",
  category: "Research Fundamentals",
  readMinutes: 12,
  publishedAt: "2026-06-02",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Route of administration is one of the most consequential — and most frequently mishandled — decisions in peptide research. It determines not only how much compound reaches its target tissue, but when, at what concentration, and through which distribution pathways. Two studies using identical doses of the same peptide but different routes can produce entirely different results. This guide provides a compound-specific, mechanistically grounded reference for subcutaneous (SC), intraperitoneal (IP), intranasal (IN), intravenous (IV), and oral routes of administration.",
    },
    {
      type: "heading",
      text: "Why Route Matters More Than Dose",
    },
    {
      type: "paragraph",
      text: "Peptides are not small molecules. Most are rapidly degraded by serine proteases (DPP-4), zinc metalloendopeptidases (NEP/neprilysin), and aminopeptidases in plasma, the gut wall, and the liver. First-pass hepatic metabolism eliminates many peptides almost entirely after oral dosing. The route therefore determines not just bioavailability — the fraction of dose reaching systemic circulation — but also Tmax (time to peak), Cmax (peak concentration), AUC (total exposure), and the anatomical compartments exposed (peripheral circulation vs CNS vs portal vein vs lymphatics).",
    },
    {
      type: "paragraph",
      text: "For CNS-targeted peptides, the blood-brain barrier adds a further layer. A peptide with excellent systemic bioavailability may still fail to engage central receptors if it cannot cross the BBB — making intranasal delivery via the olfactory/trigeminal pathways the preferred route for compounds targeting hypothalamic, hippocampal, or brainstem circuits.",
    },
    {
      type: "heading",
      text: "Subcutaneous (SC) Injection",
    },
    {
      type: "paragraph",
      text: "SC injection deposits compound into the hypodermis — the loose connective tissue below the dermis — where it enters systemic circulation via capillary absorption and, for larger molecules, lymphatic uptake. SC is the most widely used route in preclinical peptide research because it creates a depot effect, is well-tolerated for repeated dosing, and closely mimics clinical administration routes used in human trials.",
    },
    {
      type: "paragraph",
      text: "Typical SC bioavailability ranges: BPC-157 (10 μg/kg SC) ~85–95% relative to IP in published rodent studies. Semaglutide (albumin-binding C18 fatty diacid) ~89% absolute bioavailability SC in humans (Ozempic label). Ipamorelin ~80–90% SC in rodents. GHK-Cu (340 Da, small) SC absorption is rapid, Tmax ~30–60 min. SS-31 (D-Arg-2',6'-Dmt-Lys-Phe-NH2) SC bioavailability ~75–85% with 1000× mitochondrial accumulation. TB-500 (Tβ4 analog) SC bioavailability comparable to IP based on matched-dose functional studies.",
    },
    {
      type: "paragraph",
      text: "Injection site: dorsal scruff is standard for SC in mice (1 mL/kg max injection volume). Rotate sites systematically across six zones — left/right anterior/posterior dorsal + left/right flank — with daily single injections. Label the rotation sequence on the cage card. For GHK-Cu, avoid subcutaneous injection immediately adjacent to wound sites when the compound is being studied topically — systemic delivery is preferred for clean mechanistic attribution.",
    },
    {
      type: "heading",
      text: "Intraperitoneal (IP) Injection",
    },
    {
      type: "paragraph",
      text: "IP injection delivers compound into the peritoneal cavity, where absorption occurs via the mesenteric vasculature draining into the portal vein. This creates a first-pass hepatic exposure that differs from SC. For most peptides, IP provides rapid absorption — Tmax typically 15–45 min — and bioavailability of 80–95% relative to IV. IP is commonly used for compounds requiring acute high plasma concentration (NAD+, NMN), for metabolically unstable peptides where SC depot is not desired, and as a convenient high-throughput route in mouse studies.",
    },
    {
      type: "paragraph",
      text: "Key IP protocol points: inject at a 45° angle to the lower right quadrant (avoiding cecum), use a 25–27G needle, limit volume to 10 mL/kg in mice (max 0.25–0.35 mL for 25–35g mouse). Warm the solution to 37°C for comfort. Rotate quadrants daily. For compounds studied in GI models (BPC-157 in TNBS colitis, KPV in DSS colitis), IP bypasses the gut lumen and delivers systemically — which is the correct approach for pharmacological dissection, not topical GI effects.",
    },
    {
      type: "paragraph",
      text: "Critical caveat for GLP-1 agonist research: IP vs SC can yield different portal vein:systemic concentration ratios. For pair-fed metabolic studies, SC is preferred to match clinical pharmacokinetics. IP is acceptable for acute mechanistic studies but should be disclosed explicitly in methods.",
    },
    {
      type: "heading",
      text: "Intranasal (IN) Delivery",
    },
    {
      type: "paragraph",
      text: "Intranasal delivery exploits two anatomical pathways for CNS access: (1) the olfactory nerve pathway — compounds transported along olfactory axons through the cribriform plate directly into the olfactory bulb and connected limbic/hypothalamic circuits; (2) the trigeminal nerve pathway — retrograde transport along branches of the trigeminal nerve into the brainstem and spinal trigeminal nucleus. Together these bypass the BBB and can achieve hypothalamic/hippocampal concentrations 2–10× higher than systemic delivery alone.",
    },
    {
      type: "paragraph",
      text: "IN is the required route for oxytocin CNS behavioral studies (IP does not elevate CSF OT at behaviorally active doses — confirmed by Neumann and Stroud CSF validation data), Selank and Semax (intranasal is the published therapeutic route; Russian clinical trials used IN delivery), and DSIP for sleep research (central adenosinergic mechanism requires brain access). For these compounds, using IP and claiming CNS effects constitutes a methodological confound.",
    },
    {
      type: "paragraph",
      text: "Mouse IN protocol: 5 μL/nostril maximum volume. Use a Hamilton syringe or gel-loading tip. pH must be 4.5–5.5 (sterile isotonic saline adjusted to this range — stability sweet spot for most peptides, mucus compatibility). Hold the mouse at 45° supine. Alternate nostrils every 2 minutes if total dose requires multiple instillations. Wait 15–30 minutes before initiating behavioral endpoints. Do NOT use BAC water for intranasal delivery — benzyl alcohol is mucosa-irritating. Do NOT use PBS at neutral pH (peptide degradation + reduced mucoadhesion).",
    },
    {
      type: "paragraph",
      text: "Rat IN protocol: 20–25 μL/nostril is the maximum volume tolerated without nasal runback. Isoflurane light anesthesia (1–2%) reduces swallowing and head movement during delivery. Deep anesthesia interferes with physiological endpoints — use for acute compound delivery only. Semax: 50 μg/kg IN per Dolotov 2006 BDNF data. Selank: 250–500 μg/kg IN per Kozlovskaya 2002.",
    },
    {
      type: "heading",
      text: "Intravenous (IV) Injection",
    },
    {
      type: "paragraph",
      text: "IV delivery achieves 100% bioavailability by definition and provides the most reproducible Cmax. It is used for acute mechanistic studies, pharmacokinetic characterization, preconditioning protocols in cardiac research (hexarelin 80 μg/kg IV 30 min pre-ischemia for CD36/mKATP preconditioning), and for compounds where a rapid plasma spike is required (kisspeptin-10 LH pulse induction protocol: 1–10 nmol/kg IV bolus).",
    },
    {
      type: "paragraph",
      text: "Mouse IV routes: tail vein (most common, 10 mL/kg max, 37°C warming required), retro-orbital sinus (requires light isoflurane), jugular catheter (chronic indwelling for serial sampling). Tail vein injection in mice requires practice — success rates in naive animals are 70–80%; in experienced operators, >95%. NAD+ IV is particularly important because IP delivery still achieves far superior plasma NAD+ elevation compared to oral precursors (Pencina 2023 Nature Aging: 5× greater blood NAD+ at equivalent dose), making IV the gold-standard positive control for NAD+ replenishment studies.",
    },
    {
      type: "heading",
      text: "Oral Administration",
    },
    {
      type: "paragraph",
      text: "Oral administration includes oral gavage (direct intragastric delivery via flexible gavage needle) and voluntary consumption (drinking water supplementation). Most peptides have negligible oral bioavailability due to gastric acid degradation, luminal proteolysis, and first-pass hepatic metabolism. However, several peptides are notable exceptions: BPC-157 is orally active at matched IP doses due to its proline-rich sequence conferring protease resistance — oral BPC-157 (10 μg/kg in sterile saline) produces equivalent systemic and GI effects to IP in published Sikiric group studies. MK-677 is designed for oral bioavailability (~70%) as a non-peptide spiropiperidine compound. Oral NAD+ precursors (NMN, NR) are processed to intracellular NAD+ but achieve only 20% of the plasma NAD+ elevation of equivalent IV NAD+.",
    },
    {
      type: "paragraph",
      text: "Oral gavage protocol: use a 20–22G ball-tipped feeding needle (1.5 inch), 10 mL/kg max volume. Warm to 37°C. Insert along the roof of the mouth, gentle pressure past the esophageal sphincter — do NOT force. If resistance is felt, withdraw and re-position. Incorrect placement can deliver compound to the lungs (fatal). For BPC-157 oral studies: use sterile saline vehicle only — BAC water is mucosally irritating and confounds GI endpoint interpretation.",
    },
    {
      type: "heading",
      text: "Per-Compound Route Reference Table",
    },
    {
      type: "table",
      headers: ["Compound", "Recommended Route", "Bioavailability", "Tmax", "Notes"],
      rows: [
        ["BPC-157", "IP or SC or Oral", "~90% IP/SC; oral active", "30-60 min IP", "Oral = sterile saline only. IP/SC equivalent by functional endpoints."],
        ["Semaglutide", "SC (chronic) / IP (acute)", "~89% SC (human)", "24-48h SC", "IP acceptable for acute mechanistic work. Once-weekly."],
        ["Tirzepatide", "SC", "~80-85% SC", "24-48h SC", "Once-weekly SC. Low-bind tubes for dilute solutions."],
        ["Retatrutide", "SC", "~80-85% SC", "24-48h SC", "Once-weekly SC. 3-arm design requires consistent route."],
        ["Ipamorelin", "SC or IP", "~80-90% SC", "15-45 min", "Pulsatile — inject pre-sleep ZT11 for GH axis studies."],
        ["CJC-1295 No DAC", "SC", "~75-85% SC", "20-40 min", "Co-inject with ipamorelin immediately. Do not separate timing."],
        ["CJC-1295 DAC", "SC", "~80% SC (eff. 6-8d)", "24-48h (albumin-bound)", "Once-weekly. Avoid in pulsatile GH studies — tonic GH profile."],
        ["MK-677", "Oral or SC", "~70% oral (non-peptide)", "1-3h oral", "Oral gavage in corn oil. DMSO stock diluted. No BAC water."],
        ["TB-500", "SC", "~85% SC estimated", "30-60 min SC", "Dorsal scruff injection. BAC water reconstitution."],
        ["GHK-Cu", "SC or topical", "~80% SC (340 Da)", "30-60 min SC", "No BAC water — copper incompatibility not confirmed but sterile saline preferred."],
        ["NAD+", "IP or IV", "IP: 80-90% systemic; oral: ~15-20%", "15-30 min IP", "Sterile saline/PBS only. Amber vials. Fresh preparation. No BAC water."],
        ["NMN", "IP or oral", "IP: ~90%; oral: ~40-60%", "15-30 min IP", "IP preferred for rodent dosing. 500 mg/kg/day Gomes 2013."],
        ["SS-31", "SC or IV", "~75-85% SC", "30-60 min SC", "Sterile saline ONLY. No BAC water (Langendorff protocol uses IV perfusion)."],
        ["Epitalon", "SC or IP", "~80-90% SC/IP estimated", "20-40 min SC", "Sterile saline only. No BAC water. 10-day pulsatile course protocol."],
        ["MOTS-c", "IP", "IP: ~90%", "15-30 min IP", "Standard published route is IP. 5 mg/kg/day Lee 2015."],
        ["Selank", "IN (preferred) or IP", "IN: partial CNS; IP: systemic", "5-15 min IN; 20-40 min IP", "pH 4.5-5.5 saline for IN. No BAC water. 5 μL/nostril mice."],
        ["Semax", "IN (preferred) or IP", "IN: partial CNS; IP: systemic", "5-15 min IN; 20-40 min IP", "pH 4.5-5.5 saline for IN. No BAC water. 50 μg/kg IN Dolotov 2006."],
        ["Oxytocin", "IN (CNS endpoints)", "IN: CNS access via olfactory/trigeminal", "5-20 min IN", "IP does NOT elevate CSF OT at behavioral doses. IN essential for CNS studies."],
        ["PT-141", "SC or IP", "~75-85% SC", "30-60 min SC", "MC4R CNS arousal endpoint: SC systemic delivery adequate."],
        ["Kisspeptin-10", "IV (acute LH pulse) or SC (chronic)", "IV: 100%; SC: ~80%", "2-5 min IV; 20-40 min SC", "Acute LH pulse protocol requires IV bolus. SC for pulsatile receptor studies."],
        ["KPV", "IP or SC or oral", "IP: ~85%; oral activity reported", "15-30 min IP", "Sterile saline (no BAC water — for in vitro assays avoids benzyl alcohol confound)."],
        ["LL-37", "SC or IP", "~75-85% SC", "20-40 min SC/IP", "pH 4.5-5.0 reconstitution prevents aggregation. Monitor concentration <10 μM."],
        ["Thymosin Alpha-1", "SC or IP", "~80-90% SC", "30-60 min SC", "BAC water compatible. Standard SC or IP in rodent immunology protocols."],
        ["AOD-9604", "SC or IP", "~75-85%", "20-40 min SC", "Non-linear dose response: 5-10 nmol/kg optimal. BAC water compatible."],
        ["Hexarelin", "SC or IV", "SC: ~70-80%", "20-40 min SC; 2-5 min IV", "IV required for cardiac preconditioning (30 min pre-ischemia). SC for chronic GH axis."],
        ["GHRP-2", "SC or IP or IV", "SC: ~75-85%", "15-40 min SC", "IV for acute GH pulse studies (Arvat 1997 used IV 1 mcg/kg)."],
        ["Follistatin 344", "SC or IM", "SC/IM: ~75-85%", "1-3h SC", "PBS pH 7.4 + 0.1% BSA. No BAC water. No vortex. 3× weekly SC or IM."],
      ],
    },
    {
      type: "heading",
      text: "Pharmacokinetic Terminology for Study Design",
    },
    {
      type: "paragraph",
      text: "Bioavailability (F): the fraction of administered dose reaching systemic circulation unchanged. Cmax: peak plasma concentration. Tmax: time to Cmax. AUC: area under the concentration-time curve — reflects total systemic exposure. t½: elimination half-life — determines dosing frequency. Vd: volume of distribution — if Vd >> body water, indicates extensive tissue binding (as with SS-31's 1000× mitochondrial accumulation). Protein binding: semaglutide >99.7% albumin-bound, extending effective half-life; this also means standard free-drug assumptions don't apply to PK modeling.",
    },
    {
      type: "paragraph",
      text: "Flip-flop pharmacokinetics: when absorption is rate-limiting rather than elimination. Common with SC depot formulations. CJC-1295 No DAC exhibits flip-flop kinetics — the measured 25–30 min half-life reflects absorption, not elimination. The terminal elimination half-life of the peptide itself is shorter. This matters when calculating dosing intervals and interpreting terminal slopes on PK curves.",
    },
    {
      type: "heading",
      text: "Solvent and Formulation Compatibility by Route",
    },
    {
      type: "table",
      headers: ["Route", "Compatible Solvents", "Incompatible / Cautions"],
      rows: [
        ["SC injection", "BAC water, sterile saline, PBS pH 7.4", "DMSO (tissue irritant >1%), acidic solutions <pH 4.0 (dermal irritation)"],
        ["IP injection", "BAC water, sterile saline, PBS, DMSO <1%", "High osmolarity solutions, strongly acidic/alkaline"],
        ["IN delivery", "Isotonic saline pH 4.5-5.5 ONLY", "BAC water (benzyl alcohol mucosa irritation), PBS pH 7.4 (reduced mucoadhesion), DMSO"],
        ["IV injection", "Sterile saline, PBS pH 7.4, 5% dextrose", "DMSO >0.1%, BAC water (vascular irritant), strongly acidic solutions"],
        ["Oral gavage", "Sterile saline, PBS, corn oil (for lipophilic)", "BAC water (GI mucosal irritation for GI endpoint studies)"],
        ["Intranasal (CNS)", "Sterile saline pH 4.5-5.5, aCSF (ICV)", "BAC water, neutral PBS, DMSO, any irritant solvent"],
      ],
    },
    {
      type: "heading",
      text: "Study Design Implications",
    },
    {
      type: "paragraph",
      text: "Route must be consistent across all groups in a study. Switching from SC to IP between experiments is not trivial — it changes portal vein exposure, first-pass metabolite profiles, and can shift pharmacodynamics. If a published reference used IP and you use SC, the dose equivalence must be empirically verified, not assumed.",
    },
    {
      type: "paragraph",
      text: "Vehicle controls must match the experimental route AND solvent. A vehicle control for SC BAC water injection is SC BAC water, not SC saline. This matters especially for GI mucosal studies where BAC water itself has detectable effects on intestinal permeability. For intranasal peptide studies, the vehicle control must be pH-matched sterile saline delivered intranasally — not saline IP.",
    },
    {
      type: "paragraph",
      text: "For multi-compound combination protocols, route compatibility matters. BPC-157 (IP or SC, BAC water) and SS-31 (SC, sterile saline) cannot be co-injected in the same syringe — different solvents and incompatible preparations. Use separate syringes at separate injection sites, with a 5-minute interval between injections when using the same route. Document the injection site, time, volume, and compound for every animal at every timepoint.",
    },
    {
      type: "heading",
      text: "Common Route-Related Methodological Errors",
    },
    {
      type: "table",
      headers: ["Error", "Consequence", "Prevention"],
      rows: [
        ["Using IP route for CNS OT behavioral endpoints", "Peripheral OT does not elevate CSF OT at behaviorally active doses — false negative for CNS mechanism", "Use IN delivery with pH 4.5-5.5 saline for all CNS OT studies"],
        ["Oral BPC-157 in BAC water for GI mucosal studies", "BAC water irritates intestinal mucosa — confounds tight junction and permeability endpoints", "Sterile saline only for oral BPC-157 GI mucosal studies"],
        ["BAC water for SS-31 Langendorff perfusate", "Benzyl alcohol is cardiotoxic in isolated heart preparations at μM concentrations", "Krebs-Henseleit buffer or sterile saline for all cardiac perfusion protocols"],
        ["NAD+ in BAC water", "Benzyl alcohol oxidizes the nicotinamide ring — destroys activity", "Sterile saline or PBS only. Prepare fresh. Protect from light."],
        ["IP vehicle ≠ IP drug solvent", "Vehicle control contains different osmolarity/pH — introduces confound", "Exact solvent matching between vehicle and drug injection groups"],
        ["Same injection site for daily SC in rodents", "Local fibrosis → variable absorption → inter-animal variability", "6-zone rotation protocol, documented on cage card"],
        ["IN delivery in deeply anesthetized animals", "Swallowing/mucociliary clearance differences — altered nasal residence time", "Light isoflurane only (1-1.5%) or awake IN delivery with 45° supine positioning"],
        ["High volume IV tail vein (>200 μL in 20g mouse)", "Acute volume overload, hemodynamic disruption — confounds acute endpoints", "Max 10 mL/kg IV; warm to 37°C; inject over 30-60 seconds"],
      ],
    },
    {
      type: "heading",
      text: "Reconstitution and Route-Specific Storage Notes",
    },
    {
      type: "paragraph",
      text: "Reconstitution solvent and concentration interact with route stability. Peptides reconstituted for SC injection can typically be stored at 4°C for 14–21 days (compound-specific). Peptides reconstituted for IN delivery should be prepared fresh within 24–48 hours — intranasal formulations are more susceptible to microbial contamination due to absence of antimicrobial preservatives (BAC water cannot be used). NAD+ for IP injection must be prepared fresh on the day of dosing and protected from light during preparation and administration.",
    },
    {
      type: "paragraph",
      text: "Low-bind polypropylene tubes are essential for dilute peptide solutions (<0.1 mg/mL) regardless of route — standard polypropylene binds 20–40% of peptide in low-concentration solutions, causing systematic underdosing. Use Eppendorf LoBind or Fisher Scientific low-bind tubes for all solutions below 0.5 mg/mL. For GLP-1 agonists (semaglutide, tirzepatide, retatrutide), use low-bind tubes for any dilution step even when the final concentration appears adequate.",
    },
    {
      type: "heading",
      text: "Research Design Considerations",
    },
    {
      type: "paragraph",
      text: "1. Define route before dose. The dose in a published protocol is specific to the route used. '10 μg/kg BPC-157' means IP injection in the Sikiric group's model — oral bioavailability is comparable, but SC bioavailability has been less systematically characterized. If changing route, pilot a dose-finding experiment before committing to the full study design.",
    },
    {
      type: "paragraph",
      text: "2. Match route to the question. Peripheral mechanism question (GLP-1R adipose/liver effects)? SC or IP are appropriate. CNS mechanism question (OT social behavior, Semax BDNF in hippocampus)? Intranasal is required. Cardiac preconditioning (hexarelin)? IV bolus 30 min pre-ischemia is the published protocol. Using the wrong route for the mechanistic question produces uninterpretable results.",
    },
    {
      type: "paragraph",
      text: "3. Route purity for mechanistic claims. If you want to claim that a peptide works via a central mechanism, your route must achieve central access. If you want to claim it works via a peripheral mechanism, your route should minimize central exposure. IV in a peripheral compartment is not 'more rigorous' than SC if the question is about systemic pharmacology — both achieve equivalent systemic concentrations.",
    },
    {
      type: "paragraph",
      text: "4. Document every injection. Route, volume (mL/kg), concentration (mg/mL), total dose (μg or mg), injection site, time (relative to ZT), operator, and any adverse observations. This data is required for ARRIVE 2.0 compliance and for interpreting inter-animal variability post-hoc.",
    },
    {
      type: "paragraph",
      text: "5. NIH SABV (Sex as a Biological Variable). Route pharmacokinetics differ between sexes. Body composition differences (fat:lean ratio) affect Vd for lipophilic compounds. Hormonal cycles alter mucosal permeability for IN delivery. Plan sex-stratified PK validation pilots when adding a new compound-route combination to a female cohort study.",
    },
    {
      type: "paragraph",
      text: "6. Report route precisely. 'Subcutaneous injection' is not sufficient for reproducibility. Report: route, site (dorsal scruff), volume (mL/kg), frequency (once daily), solvent (BAC water 0.9% benzyl alcohol), concentration (1 mg/mL), total dose (10 μg/kg), lot number, and source. These fields are required by ARRIVE 2.0 guidelines and are increasingly mandatory for peer review in journals publishing preclinical peptide data.",
    },
    {
      type: "paragraph",
      text: "For Research Use Only. All compounds and protocols described are intended solely for preclinical research under appropriate institutional oversight.",
    },
  ],
};
