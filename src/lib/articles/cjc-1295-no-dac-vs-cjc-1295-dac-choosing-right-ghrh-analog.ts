import type { BlogArticle } from '../blog-types';

export const article: BlogArticle =   {
    slug: "cjc-1295-no-dac-vs-cjc-1295-dac-choosing-right-ghrh-analog",
    title: "CJC-1295 No DAC vs CJC-1295 (DAC): Choosing the Right GHRH Analog",
    description:
      "A deep-dive comparison of CJC-1295 No DAC (Mod GRF 1-29) and CJC-1295 with DAC — half-lives, pulsatile vs. continuous GH stimulation, synergy with GHRPs, published IGF-1 data, and how to choose the right GHRH analog for your research protocol.",
    category: "Compound Profiles",
    readMinutes: 9,
    publishedAt: "2026-05-29",
    ogImage: "/og-image.jpg",
    body: [
      {
        type: "paragraph",
        text: "GHRH analogs are powerful tools for studying the GH/IGF-1 axis. Two compounds dominate the research landscape: CJC-1295 No DAC (Modified GRF 1-29) and CJC-1295 with DAC. Despite sharing a name and a common receptor target, they have fundamentally different pharmacokinetic profiles — and the choice between them shapes the biology being studied.",
      },
      {
        type: "paragraph",
        text: "This article covers: what each compound is, how Drug Affinity Complex (DAC) technology works, published pharmacology, combination with GHRPs like ipamorelin, and practical protocol considerations.",
      },
      {
        type: "heading",
        text: "Background: GHRH and the GH Axis",
      },
      {
        type: "paragraph",
        text: "GHRH (Growth Hormone-Releasing Hormone) is a 44-amino acid hypothalamic peptide that stimulates GH secretion from the anterior pituitary. It binds to Gs-coupled GHRHRs on somatotroph cell membranes, triggering a cascade: Gs activation → adenylyl cyclase → cAMP → PKA → opening of voltage-gated calcium channels → calcium influx → GH-containing vesicle exocytosis.",
      },
      {
        type: "paragraph",
        text: "Endogenous GHRH is secreted in pulses from the arcuate nucleus, creating the characteristic pulsatile GH pattern seen in healthy mammals — 6-12 pulses per day, with the largest pulse occurring during slow-wave sleep. This pulsatile pattern is physiologically significant: continuous GH exposure downregulates GH receptors (GHRs). Native GHRH(1-44) has a half-life of less than 2 minutes in circulation due to rapid enzymatic degradation by dipeptidyl peptidase-4 (DPP-4), which cleaves the peptide at the Ala-Tyr bond at position 2. Both CJC-1295 variants were engineered to extend this half-life.",
      },
      {
        type: "heading",
        text: "CJC-1295 No DAC (Modified GRF 1-29): Pulsatile GHRH Analog",
      },
      {
        type: "paragraph",
        text: "CJC-1295 No DAC — also called Mod GRF 1-29 or tetrasubstituted GRF(1-29) — is based on the first 29 amino acids of GHRH with four strategic substitutions:",
      },
      {
        type: "list",
        items: [
          "Position 2: Ala → D-Ala (D-amino acid substitution confers resistance to DPP-4 cleavage)",
          "Position 8: Asn → Gln (protects against asparagine deamidation, a common degradation pathway)",
          "Position 15: Gly → Ala (enhances proteolytic stability)",
          "Position 27: Met → Nle (norleucine substitution prevents methionine oxidation, a major degradation route)",
        ],
      },
      {
        type: "paragraph",
        text: "These substitutions extend the half-life from approximately 7 minutes (native GHRH 1-29) to 25-30 minutes subcutaneous. The result is a compound that produces a defined, time-limited GH pulse.",
      },
      {
        type: "list",
        items: [
          "Molecular weight: 3367.9 g/mol",
          "Half-life: ~25-30 minutes (subcutaneous)",
          "Receptor: GHRHR (Gs-coupled; highly selective)",
          "GH kinetics: acute pulse — GH peaks at 15-30 minutes post-injection, returns to baseline within 2-3 hours",
          "Mechanism: pulsatile GHRHR stimulation preserving physiological GH pulse architecture",
          "Typical research dosing: 100-200 mcg subcutaneous, 1-3x daily",
        ],
      },
      {
        type: "heading",
        text: "The Drug Affinity Complex (DAC): How It Works",
      },
      {
        type: "paragraph",
        text: "CJC-1295 with DAC introduces a fundamentally different pharmacokinetic strategy. The DAC moiety is a maleimide linker attached to a lysine residue at position 10 of the GRF(1-29) sequence. This technology was developed by ConjuChem Biotechnologies (now acquired). After subcutaneous injection, the maleimide group reacts in vivo with the free thiol of cysteine-34 on circulating albumin — covalently binding the peptide to the most abundant plasma protein.",
      },
      {
        type: "paragraph",
        text: "This covalent albumin binding extends the half-life to approximately 6-8 days in humans (albumin itself has a half-life of approximately 19 days due to FcRn-mediated recycling). A single subcutaneous injection produces sustained GHRH receptor stimulation for 1-2 weeks.",
      },
      {
        type: "list",
        items: [
          "Molecular weight: ~3647 g/mol (DAC-modified peptide)",
          "Half-life: ~6-8 days (human); ~3-5 days in rodents due to faster albumin turnover",
          "Mechanism: in vivo covalent albumin binding via maleimide-cysteine reaction",
          "GH kinetics: sustained, non-pulsatile GHRH receptor stimulation over 7-14 days post-injection",
          "Typical research dosing: 1-2 mg subcutaneous, once weekly or every 10-14 days",
          "IGF-1 elevation: substantial and sustained — documented in published human pharmacology trials",
        ],
      },
      {
        type: "callout",
        text: "The maleimide linker in CJC-1295 DAC is reactive and will bind to any available thiol — including cysteine residues in other proteins. This makes reconstitution and storage conditions critical: do not use reducing buffers, and avoid mixing the compound with proteins containing free cysteines prior to injection.",
      },
      {
        type: "heading",
        text: "Published Pharmacology: Human Clinical Data",
      },
      {
        type: "paragraph",
        text: "CJC-1295 with DAC has clinically documented pharmacology from ConjuChem's Phase 1/2 program. Teichman et al. (2006, Journal of Clinical Endocrinology & Metabolism) enrolled healthy adult volunteers in dose-escalation studies and documented dose-dependent GH increases (measured over 24-48 hours) and sustained IGF-1 elevation lasting 14 days. At the highest dose tested (125 mcg/kg subcutaneous), mean IGF-1 increased approximately 200% from baseline and remained elevated at 28 days.",
      },
      {
        type: "paragraph",
        text: "GH was measured as area under the curve (AUC) over the first 24 hours, showing 2-10-fold increases from baseline depending on dose. The extended GH exposure produces a fundamentally different hepatic signaling pattern — continuous versus intermittent STAT5b activation. Sustained GHRHR stimulation yields a plateau in IGF-1 elevation that lasts the duration of the compound's activity.",
      },
      {
        type: "paragraph",
        text: "Key safety findings: no antibody formation was detected, no serious adverse events occurred, and the compound was well tolerated at all dose levels tested. Injection site reactions (erythema, induration) were the most common adverse event.",
      },
      {
        type: "heading",
        text: "Pulsatile vs. Continuous GH Stimulation: Why It Matters",
      },
      {
        type: "paragraph",
        text: "The choice between Mod GRF 1-29 and CJC-1295 DAC is a choice between pulsatile and continuous GH axis stimulation. These produce meaningfully different biology:",
      },
      {
        type: "list",
        items: [
          "GHRHR regulation: Continuous GHRHR agonism downregulates receptor expression via beta-arrestin recruitment and internalization. Pulsatile stimulation maintains receptor sensitivity. With CJC-1295 DAC, receptor desensitization occurs rapidly and may limit subsequent GH responses in chronic protocols.",
          "GH pulse architecture: Mod GRF 1-29 preserves the natural pulsatile GH pattern when dosed 1-2x daily. CJC-1295 DAC effectively eliminates pulsatility, substituting continuous low-amplitude GH elevation for 1-2 weeks per injection.",
          "IGF-1 kinetics: Both compounds raise IGF-1 but with different kinetics. Mod GRF 1-29 produces IGF-1 increases that track with cumulative GH pulse exposure over days to weeks. CJC-1295 DAC produces a more rapid, sustained plateau.",
          "Anabolic vs. metabolic effects: Research suggests pulsatile GH is more anabolic (muscle protein synthesis, collagen deposition) while continuous GH is more lipolytic and potentially more diabetogenic — greater peripheral GH receptor saturation drives more SOCS-mediated insulin resistance.",
          "GHRHR desensitization as an experimental tool: CJC-1295 DAC is a useful tool for studying GHRHR desensitization — it produces sustained receptor occupancy, allowing measurement of downstream effects on somatotroph function, GH reserve, and IGF-1 regulation.",
        ],
      },
      {
        type: "heading",
        text: "Synergy with GHRP/Ipamorelin Combinations",
      },
      {
        type: "paragraph",
        text: "GHRH analogs and GHRPs act through complementary mechanisms, producing markedly supra-additive GH responses. GHRHR agonism → cAMP → opens voltage-gated calcium channels; GHSR-1a agonism → Gq/PLC → IP3-mediated calcium mobilization from intracellular stores. When combined, the resulting GH pulse can be 5-15x larger than either compound alone.",
      },
      {
        type: "paragraph",
        text: "Mod GRF 1-29 is more commonly paired with GHRPs for two reasons: (1) its short half-life means the combined GH pulse is time-limited, preserving pulsatile architecture; (2) CJC-1295 DAC's continuous GHRHR stimulation partially desensitizes the GHRHR before the GHRP is administered, potentially reducing synergistic amplitude.",
      },
      {
        type: "list",
        items: [
          "Mod GRF 1-29 + ipamorelin: the most commonly used combination; produces clean GH pulses without cortisol elevation or appetite side effects; standard dosing is 100 mcg each, administered simultaneously, 1-3x daily",
          "Mod GRF 1-29 + GHRP-2: produces the highest acute GH peak; cortisol elevation occurs; useful for GH reserve testing protocols",
          "Mod GRF 1-29 + GHRP-6: produces acute GH pulse plus appetite stimulation; useful for appetite/orexigenic circuit research",
          "CJC-1295 DAC + ipamorelin: maintains elevated IGF-1 with weekly GHRH dosing plus pulsatile GHSR-1a stimulation; practical for longer-duration body composition studies",
        ],
      },
      {
        type: "heading",
        text: "IGF-1 Elevation Data",
      },
      {
        type: "paragraph",
        text: "In the Teichman 2006 trial, CJC-1295 DAC at 30 mcg/kg produced mean IGF-1 increases of 41-83% above baseline, sustained for 14 days. Multiple dosing (weekly administration) maintained this elevation without attenuation over the 4-week study period.",
      },
      {
        type: "paragraph",
        text: "Mod GRF 1-29 IGF-1 data are predominantly from combination protocols. In rodent protocols using 100-300 mcg/kg subcutaneous twice daily, mean IGF-1 increases of 30-60% from baseline over 4-12 weeks have been reported. Human clinical data for Mod GRF 1-29 alone are more limited; the compound is most effective in combination with GHRPs.",
      },
      {
        type: "heading",
        text: "Rodent Dosing Protocols",
      },
      {
        type: "list",
        items: [
          "Mod GRF 1-29 in mice/rats: 50-300 mcg/kg subcutaneous; 1-3x daily; for GH pulse studies, co-administer with GHRP of choice at similar molar dose",
          "CJC-1295 DAC in mice/rats: 500 mcg/kg - 2 mg/kg subcutaneous, once weekly; rodents clear albumin faster than humans, so weekly dosing maintains adequate exposure",
          "Combination protocols (Mod GRF + ipamorelin): 100 mcg/kg each, twice daily — well characterized in rodent body composition models",
          "Vehicle: sterile saline or bacteriostatic water; PBS is acceptable for acute studies",
          "Injection site: subcutaneous scruff (mice) or flank (rats); avoid IP — SC provides better sustained absorption",
          "Endpoints: measure IGF-1 at 2 and 4 weeks; measure GH pulse amplitude via serial blood sampling 0-120 min post-injection in acute studies",
        ],
      },
      {
        type: "callout",
        text: "For IGF-1 endpoint studies in mice, serial blood sampling is challenging due to blood volume constraints. Use tail vein sampling at defined time points or cardiac puncture terminal sampling. Plan your statistical approach for expected inter-animal IGF-1 variability — n=8-10 per group is a typical minimum for 80% power at a 30% IGF-1 change.",
      },
      {
        type: "heading",
        text: "Which to Use: Decision Framework",
      },
      {
        type: "list",
        items: [
          "Pulsatile GH axis research, physiological GH pattern → Mod GRF 1-29. Preserves pulsatility. Pair with ipamorelin for amplified clean GH pulses.",
          "Sustained IGF-1 elevation for body composition or metabolic studies → CJC-1295 DAC. Once-weekly dosing, documented 14-day IGF-1 elevation. More practical for multi-week chronic protocols.",
          "Study requires maximal GH pulse amplitude → Mod GRF 1-29 + GHRP-2. Synergy produces the highest achievable GH peaks.",
          "Minimize cortisol/HPA confounders → Mod GRF 1-29 + ipamorelin. Cleanest endocrine profile.",
          "GHRHR desensitization mechanism study → CJC-1295 DAC. Provides sustained receptor occupancy for studying receptor downregulation and resensitization kinetics.",
          "Simple, low-dosing-burden chronic protocol → CJC-1295 DAC. Weekly injection schedule reduces handling stress in chronic rodent studies.",
          "Combination with GHRPs → Mod GRF 1-29 preferred. More predictable synergy; GHRHR is not pre-desensitized when the dose is administered.",
        ],
      },
      {
        type: "heading",
        text: "Reconstitution and Handling",
      },
      {
        type: "paragraph",
        text: "Both compounds are supplied as lyophilized powder. The critical difference: CJC-1295 DAC's maleimide group is reactive, requiring careful handling to preserve it for in vivo albumin binding.",
      },
      {
        type: "list",
        items: [
          "Both compounds: allow vials to equilibrate to room temperature before opening to prevent condensation",
          "Add sterile water or bacteriostatic water slowly to the vial wall — not directly onto the powder",
          "Gently swirl or invert to dissolve; do not vortex",
          "Mod GRF 1-29: no special handling concerns; sterile water or bacteriostatic water are both suitable",
          "CJC-1295 DAC: do NOT use reducing buffers (no DTT, no TCEP, no beta-mercaptoethanol) — these react with the maleimide and inactivate albumin-binding functionality",
          "CJC-1295 DAC: do not mix with other proteins (albumin, serum proteins) prior to injection — premature albumin binding in vitro defeats the purpose of in vivo DAC delivery",
          "Typical working concentrations: Mod GRF 1-29 at 1-2 mg/mL; CJC-1295 DAC at 1-2 mg/mL",
          "Reconstituted Mod GRF 1-29: stable at 4°C for 3-4 weeks (bacteriostatic water) or 5-7 days (sterile water)",
          "Reconstituted CJC-1295 DAC: use within 2-3 weeks at 4°C; the maleimide group hydrolyzes over time in aqueous solution, reducing albumin-binding efficiency",
        ],
      },
      {
        type: "heading",
        text: "Storage Requirements",
      },
      {
        type: "list",
        items: [
          "Both compounds lyophilized: −20°C in sealed, light-protected vials for up to 24 months",
          "Short-term (up to 3 months): 4°C in sealed vial away from light",
          "Reconstituted Mod GRF 1-29: 4°C, use within 3-4 weeks (BAC water) or 5-7 days (sterile water)",
          "Reconstituted CJC-1295 DAC: 4°C, use within 2-3 weeks; maleimide hydrolysis limits shelf life of reconstituted DAC form",
          "For both: aliquot into single-use volumes before freezing at −20°C to avoid freeze-thaw cycling",
          "CJC-1295 DAC is particularly sensitive to moisture during storage — ensure vials are thoroughly desiccated before resealing if partially used",
        ],
      },
      {
        type: "heading",
        text: "Summary",
      },
      {
        type: "paragraph",
        text: "CJC-1295 No DAC and CJC-1295 with DAC are not interchangeable tools. They represent two fundamentally different approaches: one preserves the pulsatile GH axis, the other replaces it with a sustained continuous GHRH signal. Both have their place depending on the research question.",
      },
      {
        type: "paragraph",
        text: "For pulse-based GH research (especially in combination with GHRPs) — Mod GRF 1-29's short half-life is a feature, not a limitation. For protocols requiring sustained IGF-1 elevation with minimal dosing burden — CJC-1295 DAC's albumin-binding technology delivers a unique pharmacokinetic profile no other GHRH analog can match.",
      },
      {
        type: "callout",
        text: "Nexphoria supplies both CJC-1295 No DAC (Modified GRF 1-29) and CJC-1295 with DAC at ≥99% HPLC purity with identity confirmation by mass spectrometry. Each lot ships with a third-party COA. For catalog details, see the individual product pages.",
      },
      {
        type: "heading",
        text: "Regulatory Note",
      },
      {
        type: "paragraph",
        text: "CJC-1295 No DAC and CJC-1295 with DAC are sold as research chemicals for laboratory use only. Neither compound is FDA-approved for therapeutic use. This article is for scientific informational purposes only. Researchers are responsible for compliance with all applicable regulations in their jurisdiction.",
      },
    ],
  };
