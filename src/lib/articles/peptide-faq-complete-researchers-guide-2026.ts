import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "peptide-faq-complete-researchers-guide-2026",
  title: "Peptide FAQ: 50 Questions Researchers Ask Most (2026)",
  description:
    "Comprehensive answers to the 50 most common peptide research questions — covering reconstitution, storage, dosing intervals, stacking, purity standards, sourcing, and experimental design.",
  category: "Research Fundamentals",
  readMinutes: 18,
  publishedAt: "2026-06-12",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "This reference guide compiles the 50 questions researchers ask most frequently about peptides — from basic chemistry and handling to experimental design and sourcing. Questions are grouped by topic for easy navigation.",
    },
    {
      type: "heading",
      text: "Reconstitution & Handling",
    },
    {
      type: "subheading",
      text: "Q1: What is the correct diluent for reconstituting peptides?",
    },
    {
      type: "paragraph",
      text: "Bacteriostatic water (0.9% benzyl alcohol in sterile water) is the standard diluent for most research peptides. It inhibits microbial growth and allows multi-use vials to remain stable for 4–6 weeks refrigerated. Sterile water for injection is acceptable for single-use reconstitutions. Acetic acid (0.1–1%) is preferred for peptides with poor water solubility, particularly those containing hydrophobic residues or a high proportion of nonpolar amino acids.",
    },
    {
      type: "subheading",
      text: "Q2: How do I calculate the volume of diluent needed?",
    },
    {
      type: "paragraph",
      text: "Divide the total peptide mass by the desired concentration. Example: 5 mg peptide ÷ 2 mg/mL target concentration = 2.5 mL diluent. For syringe dosing convenience, many researchers target 1 mg/mL (add 1 mL per mg of peptide) or 2 mg/mL. Avoid concentrations above 5 mg/mL — most peptides approach solubility limits and precipitation risk increases.",
    },
    {
      type: "subheading",
      text: "Q3: Should I inject diluent directly onto the lyophilized cake?",
    },
    {
      type: "paragraph",
      text: "No. Aim the needle at the glass wall of the vial and let the diluent run down the side. Direct injection onto the lyophilized cake can cause foaming, denaturation, and aggregation. After adding diluent, swirl gently — do not shake or vortex. Allow 5–10 minutes for full dissolution if the peptide is slow to reconstitute.",
    },
    {
      type: "subheading",
      text: "Q4: Why does my reconstituted peptide appear cloudy?",
    },
    {
      type: "paragraph",
      text: "Cloudiness indicates incomplete dissolution or precipitation. Possible causes: wrong diluent (try switching to 0.1% acetic acid or adding a drop of DMSO then diluting), excessive concentration, or degraded peptide. Centrifuge at low speed to check — if a pellet forms, the peptide may have aggregated. A clear solution that becomes cloudy on refrigeration and clears at room temperature suggests reversible cold-induced aggregation, which is generally acceptable.",
    },
    {
      type: "subheading",
      text: "Q5: How do I handle peptides that are sticky or difficult to dissolve?",
    },
    {
      type: "paragraph",
      text: "For highly hydrophobic peptides: (1) Add a small volume of DMSO (5–10% of final volume) first to wet the peptide, then add aqueous diluent with stirring. (2) Try 30% acetonitrile in water as initial solvent, then dilute. (3) Adjust pH — some peptides dissolve better at pH 4 (acidic diluent) or pH 8 (basic diluent, e.g., 10 mM ammonium bicarbonate). (4) Gentle sonication for 30–60 seconds can help break up aggregates.",
    },
    {
      type: "heading",
      text: "Storage",
    },
    {
      type: "subheading",
      text: "Q6: How long can I store lyophilized peptides?",
    },
    {
      type: "paragraph",
      text: "Lyophilized (freeze-dried) peptides are stable for 24–36 months at -20°C and 12–18 months at 4°C when stored sealed with desiccant. Stability depends on sequence: peptides containing cysteine (oxidation-prone), methionine, tryptophan, asparagine (deamidation), and aspartate (isomerization) degrade faster. Always store with a desiccant pack — moisture is the primary driver of lyophilized peptide degradation.",
    },
    {
      type: "subheading",
      text: "Q7: How long are reconstituted peptides stable?",
    },
    {
      type: "paragraph",
      text: "Reconstituted in bacteriostatic water and refrigerated (4°C): 4–6 weeks for most peptides. In sterile water: 7–10 days refrigerated. At -20°C: 3–6 months, but avoid repeated freeze-thaw cycles. Aliquot before freezing if long-term frozen storage is needed. Rule of thumb: aliquot into single-use vials to eliminate freeze-thaw degradation.",
    },
    {
      type: "subheading",
      text: "Q8: What are the biggest peptide storage mistakes?",
    },
    {
      type: "list",
      items: [
        "Storing lyophilized peptides without desiccant (moisture destroys them)",
        "Reconstituting in tap water (contains minerals and bacteria)",
        "Vigorous shaking after reconstitution (causes aggregation)",
        "Repeated freeze-thaw cycles of reconstituted solutions",
        "Exposure to light (photosensitive amino acids: Trp, Tyr, Phe, Cys)",
        "Using standard water instead of bacteriostatic water for multi-use vials",
        "Storing at room temperature after reconstitution",
      ],
    },
    {
      type: "subheading",
      text: "Q9: Does temperature during shipping matter?",
    },
    {
      type: "paragraph",
      text: "For lyophilized peptides, brief temperature excursions (ambient summer shipping for 2–5 days) rarely cause significant degradation if the peptide was properly lyophilized. The critical protection is keeping the vial sealed and dry — moisture exposure during transit is more damaging than heat alone. For longer transit times or temperature-sensitive peptides (GLP-1 analogs, PEG-conjugates), cold-chain shipping with gel packs is warranted.",
    },
    {
      type: "heading",
      text: "Purity & Quality",
    },
    {
      type: "subheading",
      text: "Q10: What purity level do I need for my research?",
    },
    {
      type: "paragraph",
      text: "≥98% HPLC purity is the minimum for most research applications. ≥99% is the standard for mechanistic studies where impurity confounds are unacceptable. For in vivo IP/IV administration studies, ≥99% HPLC + LAL endotoxin testing (<1 EU/mg) is essential. For in vitro cell culture work, ≥98% is generally sufficient. Never use peptides below 95% purity for any quantitative research — the impurity fraction is too large to control for.",
    },
    {
      type: "subheading",
      text: "Q11: What should a valid COA include?",
    },
    {
      type: "table",
      headers: ["Required Element", "Standard Specification"],
      rows: [
        ["HPLC purity %", "≥98–99%"],
        ["HPLC chromatogram", "Provided, not just a number"],
        ["Mass spec (MS)", "Observed MW ± 0.5 Da vs theoretical"],
        ["Endotoxin (LAL)", "< 1 EU/mg (< 0.1 EU/mg for IV protocols)"],
        ["Lot number", "Matches vial label"],
        ["Test date", "Within 6 months"],
        ["Testing lab", "Third-party preferred"],
      ],
    },
    {
      type: "subheading",
      text: "Q12: Can I trust in-house COAs?",
    },
    {
      type: "paragraph",
      text: "In-house testing means the supplier tested their own product. This is structurally less reliable than third-party testing (independent lab commissioned by the supplier or the researcher). However, in-house HPLC from an established supplier with a chromatogram is better than no data. Ideally, request that the supplier specify the testing laboratory. Top-tier suppliers use independent contract research organizations (CROs) for lot release testing.",
    },
    {
      type: "heading",
      text: "Dosing & Protocols",
    },
    {
      type: "subheading",
      text: "Q13: How do I convert between mcg, mg, and IU?",
    },
    {
      type: "paragraph",
      text: "1 mg = 1,000 mcg. International Units (IU) are compound-specific and do not convert directly to mass without knowing the compound's specific activity. For peptides, most research protocols specify mass-based dosing (mg/kg or mcg/kg body weight) rather than IU. Hormones like HGH use IU historically, but research peptides standardize on mass.",
    },
    {
      type: "subheading",
      text: "Q14: What is the difference between mcg/kg dosing and flat dosing?",
    },
    {
      type: "paragraph",
      text: "Weight-based dosing (mcg/kg) normalizes dose to subject body weight, producing consistent plasma concentrations across subjects of different sizes. Flat dosing (a fixed mcg amount regardless of weight) is simpler but introduces inter-subject variability. Animal research protocols use mcg/kg by convention. Many human-targeted compounds (semaglutide, tirzepatide) use flat starting doses that are titrated to tolerability rather than body weight.",
    },
    {
      type: "subheading",
      text: "Q15: What is tachyphylaxis and which peptides cause it?",
    },
    {
      type: "paragraph",
      text: "Tachyphylaxis is rapid receptor desensitization causing reduced response to repeated dosing. GHRP-2 and GHRP-6 are particularly prone — continuous infusion or very frequent administration causes pituitary GH receptor downregulation. GHRH analogs (CJC-1295, sermorelin) show less tachyphylaxis because they amplify pulsatile GH release rather than continuously stimulating it. To minimize desensitization: use pulsatile dosing schedules with 3–4 hour minimum intervals, and cycle compounds every 8–12 weeks.",
    },
    {
      type: "subheading",
      text: "Q16: Can peptides be administered orally?",
    },
    {
      type: "paragraph",
      text: "Most research peptides are not orally bioavailable. Peptide bonds are cleaved by gastric pepsin and intestinal proteases; the resulting amino acids lose the compound's biological activity. Exceptions include: MK-677 (an orally active non-peptide GH secretagogue), some cyclic peptides with protease resistance, and peptides with unnatural D-amino acids (which resist L-amino acid-specific proteases). For oral bioavailability research, nanoparticle encapsulation, protease inhibitor co-administration, or peptidomimetic substitution are active research approaches.",
    },
    {
      type: "subheading",
      text: "Q17: What is the difference between subcutaneous and intraperitoneal injection for rodent studies?",
    },
    {
      type: "paragraph",
      text: "Subcutaneous (SC): injection into the loose connective tissue under the skin. Slower absorption, more depot-like kinetics. Maximum volume: 0.1 mL/10g body weight in mice. Intraperitoneal (IP): injection into the peritoneal cavity. Faster absorption (peritoneal membrane has high vascularization), better for volume-sensitive protocols. Maximum volume: 0.01 mL/g in mice. IP is the most common route for mouse research peptide dosing due to practicality and good bioavailability. IV is used when rapid peak concentration is required.",
    },
    {
      type: "heading",
      text: "Stacking & Combinations",
    },
    {
      type: "subheading",
      text: "Q18: Can I combine multiple peptides in the same syringe?",
    },
    {
      type: "paragraph",
      text: "In principle, yes — if both peptides are compatible (similar pH, diluent, stability). Practically: there is limited published data on combination stability. Risks include: pH-dependent precipitation, competitive receptor binding masking individual effects, and confounded interpretation. For research purposes, separate administration with a 5–15 minute interval is preferred to isolate effects. For convenience protocols, common stable combinations include: BPC-157 + TB-500 (both neutral, water-soluble), CJC-1295 + Ipamorelin (both bacteriostatic water, similar pH).",
    },
    {
      type: "subheading",
      text: "Q19: Does the timing of stack administration matter?",
    },
    {
      type: "paragraph",
      text: "Timing matters for synergistic mechanisms. Example: GHRH analogs (CJC-1295) prime pituitary somatotrophs for enhanced GHS response, so administering a GHRP (Ipamorelin) 30–60 minutes after CJC-1295 may produce synergistically elevated GH pulse. For tissue repair combinations (BPC-157 + TB-500), timing relative to the injury event is more relevant than the interval between compounds. Metabolic peptides (GLP-1 agonists) are typically timed relative to meals.",
    },
    {
      type: "subheading",
      text: "Q20: What peptide stacks are most studied in the literature?",
    },
    {
      type: "list",
      items: [
        "BPC-157 + TB-500 (Thymosin Beta-4): tissue repair and inflammation — multiple animal studies",
        "CJC-1295 + Ipamorelin: synergistic GH pulse amplification — well-documented in vivo",
        "GLP-1 + GIP dual agonism (Tirzepatide): metabolic — multiple Phase 3 trials (SURMOUNT)",
        "GLP-1 + GIP + Glucagon triple agonism (Retatrutide): Phase 2 clinical data available",
        "NAD+ + GHK-Cu: anti-aging mitochondrial + skin/tissue — preclinical data emerging",
        "Epithalon + Thymalin: Soviet-era longevity research — pineal + thymic axis",
      ],
    },
    {
      type: "heading",
      text: "Sourcing",
    },
    {
      type: "subheading",
      text: "Q21: What is a research-only peptide supplier?",
    },
    {
      type: "paragraph",
      text: "Research-only suppliers sell peptides strictly for laboratory research — in vitro assays, animal model studies, and biochemical analysis. These compounds are not FDA-approved for human use, are not sold as dietary supplements or drugs, and are labeled accordingly. The regulatory framework governing their sale differs from pharmaceutical APIs: they operate under broader 'research chemical' provisions. The key compliance markers are: 'not for human use' labeling, no clinical dosing guidance, and sales to research institutions, laboratories, or licensed researchers.",
    },
    {
      type: "subheading",
      text: "Q22: How do I evaluate a new peptide supplier?",
    },
    {
      type: "list",
      items: [
        "Request COA before purchase — does it include chromatogram + MS data?",
        "Is the testing laboratory identified? Third-party preferred.",
        "Does the supplier test endotoxins (LAL) for injectable-grade preparations?",
        "What is the stated purity threshold? ≥98% minimum.",
        "Do they provide lot-specific testing or generic batch documentation?",
        "What is their cold-chain shipping policy?",
        "Do they have a verifiable business history (3+ years, reviews, clear contact info)?",
        "Do they make therapeutic claims or dosing recommendations? Red flag if yes.",
      ],
    },
    {
      type: "subheading",
      text: "Q23: Why does pricing vary so much between suppliers?",
    },
    {
      type: "paragraph",
      text: "Primary cost drivers: raw amino acid input costs, SPPS synthesis complexity (longer peptides = exponentially harder), analytical testing (third-party HPLC + MS + LAL = $300–800 per lot), lyophilization, and packaging. A supplier offering 10 mg semaglutide for $20 is almost certainly cutting corners on testing, purity, or raw material quality. Research-grade pricing reflects genuine analytical overhead. Cost per milligram for common peptides (BPC-157, TB-500) is lower than for long-chain modified analogs (semaglutide, tirzepatide) due to synthesis complexity.",
    },
    {
      type: "heading",
      text: "Experimental Design",
    },
    {
      type: "subheading",
      text: "Q24: How do I design a proper peptide dose-response study?",
    },
    {
      type: "paragraph",
      text: "A minimum dose-response experiment requires: (1) vehicle control (diluent only), (2) at least 3 dose levels spanning a 10–100x range, (3) positive control if one exists, (4) adequate sample size for statistical power (typically n=8–10/group for mouse studies). Report results as mean ± SEM with statistical test appropriate for the endpoint. A 4-parameter logistic (4PL) curve fit should be applied to dose-response data to calculate EC50.",
    },
    {
      type: "subheading",
      text: "Q25: What controls are required for in vivo peptide research?",
    },
    {
      type: "list",
      items: [
        "Vehicle control: same diluent, same volume, same route and schedule as treatment groups",
        "Positive control: established compound with known effect on the target pathway",
        "Negative control: sham surgery or equivalent for injury models",
        "Peptide scramble control (optional): same amino acids in random order to control for sequence-independent effects",
        "Heat-inactivated control (optional): boiled peptide to confirm activity is structure-dependent",
      ],
    },
    {
      type: "subheading",
      text: "Q26: How do I calculate sample sizes for animal studies?",
    },
    {
      type: "paragraph",
      text: "Use power analysis before the experiment, not after. Required inputs: expected effect size (Cohen's d, derived from pilot data or literature), desired power (0.80 standard), and significance level (α = 0.05). Online tools: G*Power (free, widely used). For typical peptide biomarker studies (e.g., GH, IGF-1, inflammatory cytokines), a 20–30% effect size difference with σ derived from prior studies usually requires n=8–12 per group. Underpowered studies produce unreliable results — the most common flaw in peptide animal literature.",
    },
    {
      type: "heading",
      text: "Specific Compounds",
    },
    {
      type: "subheading",
      text: "Q27: What is the difference between BPC-157 and TB-500?",
    },
    {
      type: "paragraph",
      text: "BPC-157 (Body Protection Compound-157) is a 15-amino acid synthetic peptide derived from a gastric protective protein. Its primary mechanisms involve upregulation of growth hormone receptor expression, VEGF-driven angiogenesis, and NO-mediated vasodilation. TB-500 is a synthetic analog of Thymosin Beta-4, a ubiquitous actin-sequestering protein. Its primary mechanism is G-actin sequestration, promoting actin polymerization, cell migration, and angiogenesis. Both support tissue repair but through distinct pathways — they are mechanistically complementary rather than redundant.",
    },
    {
      type: "subheading",
      text: "Q28: What is the difference between CJC-1295 with DAC and without DAC?",
    },
    {
      type: "paragraph",
      text: "DAC (Drug Affinity Complex) refers to a lysine-maleimide conjugate that binds reversibly to serum albumin, extending half-life from ~30 minutes (no-DAC) to 6–8 days (with DAC). CJC-1295 no-DAC (also called Mod-GRF 1-29) mimics pulsatile GHRH release, maintaining physiological GH secretion rhythm. CJC-1295 with DAC produces sustained, blunted GH elevation — useful for some research models but may not replicate natural pulsatile patterns. No-DAC is typically preferred for pulsatile GH axis research; DAC for sustained GHRH receptor stimulation studies.",
    },
    {
      type: "subheading",
      text: "Q29: How does semaglutide differ from naturally occurring GLP-1?",
    },
    {
      type: "paragraph",
      text: "Native GLP-1 has a half-life of ~2 minutes due to DPP-4 protease cleavage and renal clearance. Semaglutide incorporates three key modifications: (1) Aib8 substitution at position 8 blocks DPP-4 cleavage, (2) Arg34Lys substitution and (3) a fatty diacid chain (C18) linked via a hydrophilic spacer enables albumin binding, extending half-life to ~165 hours (weekly dosing). These modifications shift semaglutide from an incretin with physiological signaling duration to a pharmacological agent with sustained receptor occupancy.",
    },
    {
      type: "subheading",
      text: "Q30: What is Epithalon and what does the research show?",
    },
    {
      type: "paragraph",
      text: "Epithalon (Epitalon, Epithalamin) is a synthetic tetrapeptide (Ala-Glu-Asp-Gly) derived from Epithalamin, a bovine pineal gland extract. Russian researchers (primarily Khavinson et al.) reported: (1) telomerase activation in human somatic cells, (2) melatonin normalization in aged animals, (3) life extension in rodent studies, (4) circadian rhythm regulation via pineal gland modulation. Most primary research originated from Soviet-era and post-Soviet Russian laboratories, with limited independent Western replication. Published in peer-reviewed journals but requires independent confirmation at scale.",
    },
    {
      type: "heading",
      text: "Safety & Regulatory",
    },
    {
      type: "subheading",
      text: "Q31: What are the most common contaminants in research peptides?",
    },
    {
      type: "list",
      items: [
        "Deletion sequences: peptides missing one or more amino acids from the intended sequence",
        "Truncated fragments: incomplete synthesis products",
        "Oxidized forms: especially at Met, Cys, Trp residues",
        "Deamidated forms: Asn→Asp conversion, alters charge and receptor binding",
        "Racemization products: D-amino acid variants with altered pharmacology",
        "Trifluoroacetic acid (TFA): SPPS reagent; cytotoxic at >0.1% in cell culture",
        "Bacterial endotoxins: from non-aseptic manufacturing; causes false-positive inflammation",
        "Residual solvents: acetonitrile, DMF, acetic acid from synthesis/purification",
      ],
    },
    {
      type: "subheading",
      text: "Q32: What does 'for research purposes only' mean legally?",
    },
    {
      type: "paragraph",
      text: "This designation indicates the compound is sold for in vitro and animal model laboratory research, not for human administration or therapeutic use. In the United States, this falls outside FDA drug approval requirements for the sale of the compound itself, but does not confer legal authorization for human use — administration to humans without an IND (Investigational New Drug) application would violate the Federal Food, Drug, and Cosmetic Act. The 'research only' label is a legitimate commercial and regulatory category for compounds used in legitimate scientific inquiry.",
    },
    {
      type: "subheading",
      text: "Q33: Are peptides detectable in sports drug testing?",
    },
    {
      type: "paragraph",
      text: "WADA-prohibited peptides (GHRPs, GHRH analogs, GLP-1 agonists used for performance, TB-4 fragments) are detectable by liquid chromatography-mass spectrometry (LC-MS/MS) in urine or blood. Detection windows vary: GHRPs 12–24 hours post-dose; some longer-acting analogs (CJC-1295 DAC, semaglutide) detectable for weeks. Anti-doping laboratories routinely test for these compounds. This is purely informational for researchers designing biomarker studies or studying metabolism/excretion.",
    },
    {
      type: "heading",
      text: "Measurement & Endpoints",
    },
    {
      type: "subheading",
      text: "Q34: How do I measure GH and IGF-1 in rodent models?",
    },
    {
      type: "paragraph",
      text: "Rat/mouse GH: ELISA (species-specific; cross-reactivity between species is common — verify assay species). Serum collected at timed intervals post-dose (GH is highly pulsatile: measure at 15, 30, 60, 120 min post-injection for AUC). IGF-1: more stable, measured from single time-point serum; ELISA or RIA. Note: murine GH is substantially different from human GH immunologically — use species-appropriate assay kits and do not compare rodent GH to human GH directly.",
    },
    {
      type: "subheading",
      text: "Q35: What inflammatory biomarkers are standard in peptide research?",
    },
    {
      type: "list",
      items: [
        "TNF-α (tumor necrosis factor-alpha): key pro-inflammatory cytokine",
        "IL-6: acute phase, pro/anti-inflammatory context-dependent",
        "IL-10: anti-inflammatory benchmark",
        "IL-1β: inflammasome activation marker",
        "CRP (C-reactive protein): systemic inflammation; less sensitive in mice vs. humans",
        "NF-κB activation: transcription factor pathway assays (EMSA, reporter constructs)",
        "Myeloperoxidase (MPO): neutrophil infiltration in tissue sections",
        "Histological scoring: H&E staining, inflammatory cell count per field",
      ],
    },
    {
      type: "heading",
      text: "Common Research Mistakes",
    },
    {
      type: "subheading",
      text: "Q36: What are the most common mistakes in peptide research?",
    },
    {
      type: "list",
      items: [
        "Using vortex mixing during reconstitution (causes aggregation)",
        "No vehicle control group — cannot isolate compound effect from injection stress",
        "Ignoring diurnal variation — measuring GH/cortisol at inconsistent times of day",
        "Using peptides past stability window without purity reconfirmation",
        "Extrapolating rodent dosing to human dosing without allometric scaling",
        "Attributing all effects to the peptide when using unpurified bacteriostatic water with residual endotoxins",
        "Failing to randomize cage assignment, creating environmental confounds",
        "Single time-point measurement for highly dynamic parameters (GH, LH)",
      ],
    },
    {
      type: "subheading",
      text: "Q37: How do I correct for allometric scaling between species?",
    },
    {
      type: "paragraph",
      text: "Allometric scaling converts dosing between species using the formula: Human Dose (mg/kg) = Animal Dose (mg/kg) × (Animal Km / Human Km), where Km values are: mouse 3, rat 6, rabbit 12, monkey 20, human 37. Example: a mouse dose of 100 mcg/kg × (3/37) = 8.1 mcg/kg human equivalent. This is a rough starting point — PK/PD differences, protein binding, receptor density, and metabolism all modulate actual translation. Allometric conversion provides an order-of-magnitude reference, not a precise human dose prediction.",
    },
    {
      type: "heading",
      text: "Analytical Methods",
    },
    {
      type: "subheading",
      text: "Q38: What is the difference between HPLC and LC-MS/MS?",
    },
    {
      type: "paragraph",
      text: "HPLC (High-Performance Liquid Chromatography) measures compound purity by UV absorbance — it tells you how much of the UV-absorbing material is your target compound, but not definitively what that compound is. LC-MS/MS (Liquid Chromatography – tandem Mass Spectrometry) combines chromatographic separation with mass spectrometric detection, providing both retention time and molecular weight/fragmentation pattern for unambiguous identity confirmation. LC-MS/MS is required for: confirmation of modified peptides, metabolite identification, pharmacokinetic studies, and anti-doping analysis.",
    },
    {
      type: "subheading",
      text: "Q39: How do I read a mass spec result for my peptide?",
    },
    {
      type: "paragraph",
      text: "Calculate the theoretical average molecular weight of your peptide using the sequence and standard amino acid residue masses. Add 18.02 Da for the water molecule (H₂O) of the full peptide. Compare to the observed [M+H]⁺ peak (add 1.008 Da for the proton). Multiply charge state: [M+2H]²⁺ appears at (MW+2×1.008)/2. A match within ±0.5 Da (low-resolution MS) or ±0.01 Da (high-resolution Orbitrap) confirms identity. Multiple charge states appearing in the spectrum is normal — the distribution confirms the mass.",
    },
    {
      type: "heading",
      text: "Practical Tips",
    },
    {
      type: "subheading",
      text: "Q40: How should I label and track peptide vials?",
    },
    {
      type: "paragraph",
      text: "Label each vial with: compound name, lot number, concentration, date of reconstitution, and initials. Maintain a lab notebook entry or digital log with: supplier, COA reference, reconstitution date/diluent/volume, storage location, and remaining volume. Date-check all vials at the start of each experimental week. For auditable research, photograph COAs and store with raw data files. Traceability from lot to data is essential for reproducibility and publication.",
    },
    {
      type: "subheading",
      text: "Q41–50: Quick Reference",
    },
    {
      type: "table",
      headers: ["Question", "Short Answer"],
      rows: [
        ["Q41: Can I refreeze reconstituted peptides?", "Yes, once. Repeated freeze-thaw degrades activity. Aliquot first."],
        ["Q42: What syringe size for subcutaneous injection in mice?", "28–31G needle; 0.5–1.0 mL insulin syringe for volumes <0.2 mL"],
        ["Q43: How do I measure injection site reactions?", "Caliper measurement of induration; H&E histology at sacrifice"],
        ["Q44: What pH should peptide solutions be?", "Typically pH 4–7; check with pH strips; extreme pH accelerates degradation"],
        ["Q45: Do peptides require special disposal?", "Follow institutional biosafety protocol; most are non-hazardous but check"],
        ["Q46: Can I filter-sterilize peptides?", "Yes; 0.22 μm PVDF or PES membrane; avoid nylon (adsorbs peptides)"],
        ["Q47: What is a suitable positive control for GH studies?", "Exogenous GH (somatropin) at a known supraphysiological dose"],
        ["Q48: How long before peptide effects are measurable?", "Acute GH peaks: 30–60 min. IGF-1 elevation: 24–48 hours. Tissue endpoints: 1–4 weeks"],
        ["Q49: What does 'acetate salt' vs 'TFA salt' mean?", "Counterion from purification. TFA salt is cytotoxic in culture — convert to acetate or dilute to <0.1%"],
        ["Q50: Can I mix peptides with vitamins or other supplements?", "No data on most combinations. Separate administration is the default for research purity."],
      ],
    },
    {
      type: "disclaimer",
      text: "For research purposes only. Not intended for human use. This content is educational and does not constitute medical advice.",
    },
  ],
};
