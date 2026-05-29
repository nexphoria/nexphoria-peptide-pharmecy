"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

// ─── Types ───────────────────────────────────────────────────────────────────

type CompoundEntry = {
  slug: string;
  name: string;
  category: string;
  halfLifeHours: number;
  receptors: string[];
  mechanisms: string[];
  tags: string[];
};

type InteractionResult = {
  compoundA: string;
  compoundB: string;
  type: "synergy" | "caution" | "warning" | "neutral";
  title: string;
  detail: string;
  halfLifeConflict?: string;
};

// ─── Compound Database ────────────────────────────────────────────────────────

const COMPOUNDS: CompoundEntry[] = [
  {
    slug: "bpc-157",
    name: "BPC-157",
    category: "Recovery",
    halfLifeHours: 4,
    receptors: ["GH-R", "VEGFR2", "eNOS"],
    mechanisms: ["angiogenesis", "NO-system", "VEGF", "FAK"],
    tags: ["repair", "anti-inflammatory", "healing"],
  },
  {
    slug: "tb-500",
    name: "TB-500",
    category: "Recovery",
    halfLifeHours: 300,
    receptors: ["ILK", "actin-G"],
    mechanisms: ["actin-sequestration", "ILK", "NF-κB", "VEGF"],
    tags: ["repair", "anti-inflammatory", "angiogenesis"],
  },
  {
    slug: "ghk-cu",
    name: "GHK-Cu",
    category: "Recovery",
    halfLifeHours: 2,
    receptors: ["TGF-βR", "Nrf2"],
    mechanisms: ["collagen-synthesis", "Nrf2-antioxidant", "TGF-β"],
    tags: ["collagen", "antioxidant", "wound-healing"],
  },
  {
    slug: "semaglutide",
    name: "Semaglutide",
    category: "Metabolic",
    halfLifeHours: 168,
    receptors: ["GLP-1R"],
    mechanisms: ["incretin", "cAMP", "insulin-secretion", "appetite-suppression"],
    tags: ["GLP-1", "weight-loss", "glucose"],
  },
  {
    slug: "tirzepatide",
    name: "Tirzepatide",
    category: "Metabolic",
    halfLifeHours: 120,
    receptors: ["GLP-1R", "GIPR"],
    mechanisms: ["incretin", "cAMP", "GIP", "appetite-suppression"],
    tags: ["GLP-1", "GIP", "weight-loss", "glucose"],
  },
  {
    slug: "retatrutide",
    name: "Retatrutide",
    category: "Metabolic",
    halfLifeHours: 144,
    receptors: ["GLP-1R", "GIPR", "GCGR"],
    mechanisms: ["incretin", "GIP", "glucagon", "hepatic-fat", "appetite-suppression"],
    tags: ["GLP-1", "GIP", "glucagon", "triple-agonist", "weight-loss"],
  },
  {
    slug: "mk-677",
    name: "MK-677 (Ibutamoren)",
    category: "GH Axis",
    halfLifeHours: 24,
    receptors: ["GHSR-1a"],
    mechanisms: ["GH-secretion", "IGF-1", "ghrelin-mimetic"],
    tags: ["GH", "IGF-1", "oral", "ghrelin"],
  },
  {
    slug: "ipamorelin",
    name: "Ipamorelin",
    category: "GH Axis",
    halfLifeHours: 2,
    receptors: ["GHSR-1a"],
    mechanisms: ["GH-secretion", "IGF-1", "selective-GHRP"],
    tags: ["GH", "GHRP", "selective", "IGF-1"],
  },
  {
    slug: "cjc-1295-ipamorelin",
    name: "CJC-1295 No DAC",
    category: "GH Axis",
    halfLifeHours: 0.5,
    receptors: ["GHRHr"],
    mechanisms: ["GHRH", "GH-secretion", "IGF-1", "pulsatile"],
    tags: ["GHRH", "GH", "pulsatile", "IGF-1"],
  },
  {
    slug: "sermorelin",
    name: "Sermorelin",
    category: "GH Axis",
    halfLifeHours: 0.2,
    receptors: ["GHRHr"],
    mechanisms: ["GHRH", "GH-secretion", "pulsatile"],
    tags: ["GHRH", "GH", "pulsatile"],
  },
  {
    slug: "tesamorelin",
    name: "Tesamorelin",
    category: "GH Axis",
    halfLifeHours: 0.5,
    receptors: ["GHRHr"],
    mechanisms: ["GHRH", "GH-secretion", "IGF-1", "visceral-fat"],
    tags: ["GHRH", "GH", "visceral-fat"],
  },
  {
    slug: "nad-plus",
    name: "NAD+",
    category: "Longevity",
    halfLifeHours: 1,
    receptors: ["SIRT1", "PARP1", "CD38"],
    mechanisms: ["NAD-redox", "sirtuin", "mitochondria", "PGC-1α"],
    tags: ["longevity", "mitochondria", "energy", "sirtuin"],
  },
  {
    slug: "epitalon",
    name: "Epitalon",
    category: "Longevity",
    halfLifeHours: 1,
    receptors: ["TERT", "pineal"],
    mechanisms: ["telomerase", "telomere", "melatonin", "antioxidant"],
    tags: ["longevity", "telomere", "anti-aging"],
  },
  {
    slug: "mots-c",
    name: "MOTS-c",
    category: "Longevity",
    halfLifeHours: 2,
    receptors: ["AMPK", "GLUT4"],
    mechanisms: ["AMPK", "GLUT4", "folate-cycle", "mitochondria"],
    tags: ["longevity", "metabolic", "AMPK", "mitochondria"],
  },
  {
    slug: "ss-31",
    name: "SS-31 (Elamipretide)",
    category: "Longevity",
    halfLifeHours: 2,
    receptors: ["cardiolipin"],
    mechanisms: ["cardiolipin-binding", "ETC", "mitochondria", "mPTP"],
    tags: ["longevity", "mitochondria", "cardiac"],
  },
  {
    slug: "pt-141",
    name: "PT-141 (Bremelanotide)",
    category: "Melanocortin",
    halfLifeHours: 2.7,
    receptors: ["MC1R", "MC3R", "MC4R"],
    mechanisms: ["melanocortin", "PVN-oxytocin", "arousal"],
    tags: ["melanocortin", "arousal", "PVN"],
  },
  {
    slug: "melanotan-2",
    name: "Melanotan II",
    category: "Melanocortin",
    halfLifeHours: 1.5,
    receptors: ["MC1R", "MC3R", "MC4R"],
    mechanisms: ["melanocortin", "melanogenesis", "arousal", "MC4R-PVN"],
    tags: ["melanocortin", "tanning", "arousal", "MC4R"],
  },
  {
    slug: "semax",
    name: "Semax",
    category: "Nootropic",
    halfLifeHours: 0.3,
    receptors: ["MC4R", "MC5R", "VEGFR"],
    mechanisms: ["BDNF", "VEGF", "melanocortin", "neuroprotection"],
    tags: ["nootropic", "BDNF", "cognitive", "intranasal"],
  },
  {
    slug: "selank",
    name: "Selank",
    category: "Nootropic",
    halfLifeHours: 0.3,
    receptors: ["GABA-A", "serotonin"],
    mechanisms: ["anxiolytic", "BDNF", "IL-6", "non-GABAergic"],
    tags: ["nootropic", "anxiolytic", "BDNF", "intranasal"],
  },
  {
    slug: "dsip",
    name: "DSIP",
    category: "Nootropic",
    halfLifeHours: 1,
    receptors: ["HPA-axis", "ACTH-R"],
    mechanisms: ["delta-wave-EEG", "HPA-modulation", "SWS"],
    tags: ["nootropic", "sleep", "HPA-axis"],
  },
  {
    slug: "oxytocin",
    name: "Oxytocin",
    category: "Nootropic",
    halfLifeHours: 0.08,
    receptors: ["OTR"],
    mechanisms: ["OTR-Gq-PKC", "VTA-dopamine", "HPA-dampening", "anti-inflammatory"],
    tags: ["nootropic", "social", "HPA-axis", "cortisol-blunting"],
  },
  {
    slug: "kisspeptin",
    name: "Kisspeptin",
    category: "Reproductive",
    halfLifeHours: 0.3,
    receptors: ["GPR54", "KISS1R"],
    mechanisms: ["GnRH-pulse", "LH-surge", "HPG-axis", "sex-steroid-feedback"],
    tags: ["reproductive", "LH", "GnRH", "HPG-axis"],
  },
  {
    slug: "aod-9604",
    name: "AOD-9604",
    category: "Metabolic",
    halfLifeHours: 0.5,
    receptors: ["β3-AR"],
    mechanisms: ["lipolysis", "β3-adrenergic", "HSL", "adipogenesis-inhibition"],
    tags: ["lipolysis", "fat-loss", "β3-AR"],
  },
  {
    slug: "kpv",
    name: "KPV",
    category: "Immunology",
    halfLifeHours: 0.5,
    receptors: ["MC1R", "MC3R"],
    mechanisms: ["NF-κB-inhibition", "IL-6", "TNF-α", "anti-inflammatory"],
    tags: ["immune", "anti-inflammatory", "NF-κB", "MC1R"],
  },
  {
    slug: "thymosin-alpha-1",
    name: "Thymosin Alpha-1",
    category: "Immunology",
    halfLifeHours: 2,
    receptors: ["TLR2", "TLR4", "TLR9"],
    mechanisms: ["TLR-signaling", "Th1-polarization", "NK-activation", "IFN-γ"],
    tags: ["immune", "Th1", "NK-cell", "antiviral"],
  },
  {
    slug: "hexarelin",
    name: "Hexarelin",
    category: "GH Axis",
    halfLifeHours: 1.5,
    receptors: ["GHSR-1a", "CD36"],
    mechanisms: ["GH-secretion", "GHSR", "cardiac-CD36", "IGF-1"],
    tags: ["GH", "GHRP", "cardiac", "CD36"],
  },
  {
    slug: "ghrp-2",
    name: "GHRP-2",
    category: "GH Axis",
    halfLifeHours: 0.5,
    receptors: ["GHSR-1a"],
    mechanisms: ["GH-secretion", "GHSR", "IGF-1", "cortisol-elevation"],
    tags: ["GH", "GHRP", "IGF-1", "cortisol"],
  },
  {
    slug: "snap-8",
    name: "Snap-8",
    category: "Cosmetic",
    halfLifeHours: 8,
    receptors: ["SNARE", "SNAP-25"],
    mechanisms: ["SNARE-inhibition", "vesicle-fusion", "NMJ"],
    tags: ["cosmetic", "SNARE", "neuromuscular", "topical"],
  },
  {
    slug: "tb-500-wolverine",
    name: "Wolverine Blend",
    category: "Recovery",
    halfLifeHours: 72,
    receptors: ["GH-R", "VEGFR2", "ILK", "TGF-βR", "Nrf2", "eNOS"],
    mechanisms: ["angiogenesis", "actin-sequestration", "collagen-synthesis", "VEGF", "NF-κB"],
    tags: ["repair", "anti-inflammatory", "angiogenesis", "collagen"],
  },
  {
    slug: "cjc-1295-dac",
    name: "CJC-1295 (DAC)",
    category: "GH Axis",
    halfLifeHours: 192,
    receptors: ["GHRHr"],
    mechanisms: ["GHRH", "GH-secretion", "IGF-1", "continuous"],
    tags: ["GHRH", "GH", "long-acting", "IGF-1"],
  },
];

// ─── Interaction Rules Database ───────────────────────────────────────────────

type PairRule = {
  slugs: [string, string];
  type: "synergy" | "caution" | "warning" | "neutral";
  title: string;
  detail: string;
};

const PAIR_RULES: PairRule[] = [
  // ── Synergies ─────────────────────────────────────────────────────────────
  {
    slugs: ["bpc-157", "tb-500"],
    type: "synergy",
    title: "Complementary Repair Mechanisms",
    detail:
      "BPC-157 (NO/VEGFR2/FAK angiogenesis) and TB-500 (G-actin sequestration/ILK/anti-inflammatory) target distinct phases of tissue repair — early anti-inflammatory (TB-500) and later angiogenic/proliferative (BPC-157). Non-competing receptors; published rodent models confirm additive healing outcomes.",
  },
  {
    slugs: ["bpc-157", "ghk-cu"],
    type: "synergy",
    title: "Angiogenesis + Collagen Synthesis Synergy",
    detail:
      "BPC-157 upregulates VEGF/VEGFR2 for angiogenesis while GHK-Cu stimulates collagen and elastin via TGF-β/lysyl oxidase. These act at different points in the wound-healing cascade — vascular supply (BPC-157) and matrix remodeling (GHK-Cu). Complementary, not competing.",
  },
  {
    slugs: ["tb-500", "ghk-cu"],
    type: "synergy",
    title: "Anti-inflammatory + Matrix Remodeling",
    detail:
      "TB-500's NF-κB suppression reduces inflammatory burden during the early phase while GHK-Cu's Nrf2 antioxidant activation and collagen synthesis support the remodeling phase. Temporal synergy across repair phases.",
  },
  {
    slugs: ["cjc-1295-ipamorelin", "ipamorelin"],
    type: "synergy",
    title: "GHRH + GHRP Pulse Amplification",
    detail:
      "CJC-1295 No DAC (GHRHr agonist) and Ipamorelin (GHSR-1a agonist) act at different receptors in the somatotroph. Co-administration produces 8–12× GH amplification vs either alone (Bowers 1998). Classic GHRH + GHRP synergy, one of the strongest in GH-axis research.",
  },
  {
    slugs: ["sermorelin", "ipamorelin"],
    type: "synergy",
    title: "GHRH + GHRP Pulsatile Synergy",
    detail:
      "Sermorelin (GHRHr, 29aa) paired with Ipamorelin (GHSR-1a) reproduces the same dual-receptor amplification as CJC/Ipamorelin with very short half-lives, ensuring tight pulsatile GH pattern. Well-established research combination.",
  },
  {
    slugs: ["cjc-1295-ipamorelin", "mk-677"],
    type: "synergy",
    title: "Pulsatile GHRH + Sustained Oral GHS",
    detail:
      "CJC-1295 No DAC creates acute GH pulses via GHRHr while MK-677 provides sustained tonic GHSR-1a stimulation over 24h. Different temporal profiles create complementary IGF-1 elevation. GHSR-1a shared but different pharmacokinetic windows reduce receptor competition.",
  },
  {
    slugs: ["nad-plus", "mots-c"],
    type: "synergy",
    title: "NAD+ Replenishment + AMPK Activation",
    detail:
      "NAD+ supports SIRT1/SIRT3 and mitochondrial biogenesis via PGC-1α, while MOTS-c activates AMPK through the folate/AICAR cycle independently. Distinct mitochondrial entry points — metabolic substrate (NAD+) + signaling activator (MOTS-c) with documented additive effects in metabolic models.",
  },
  {
    slugs: ["nad-plus", "ss-31"],
    type: "synergy",
    title: "Mitochondrial Bioenergetics + Structural Protection",
    detail:
      "SS-31 protects cardiolipin and stabilizes ETC supercomplexes, while NAD+ replenishes the electron acceptor pool. Complementary targets within the same mitochondrial pathway — structural integrity (SS-31) + fuel substrate (NAD+).",
  },
  {
    slugs: ["semax", "selank"],
    type: "synergy",
    title: "Cognitive Enhancement + Anxiolytic Balance",
    detail:
      "Semax (BDNF/VEGF upregulation, MC4R) and Selank (non-GABAergic anxiolytic, BDNF, IL-6 modulation) act via different mechanisms. Semax provides cognitive activation; Selank provides anxiolytic counterbalance. Commonly co-used in nootropic research protocols with intranasal delivery for both.",
  },
  {
    slugs: ["cjc-1295-dac", "ipamorelin"],
    type: "synergy",
    title: "Long-Acting GHRH + GHRP Amplification",
    detail:
      "CJC-1295 DAC (8-day half-life, albumin bound) maintains elevated GHRHr stimulation while Ipamorelin provides GHSR-1a activation. Bowers 1998 synergy data applies here as well, though the continuous GHRH profile vs pulsatile differs from No DAC variant.",
  },

  // ── Cautions ──────────────────────────────────────────────────────────────
  {
    slugs: ["semaglutide", "tirzepatide"],
    type: "caution",
    title: "GLP-1R Receptor Saturation Risk",
    detail:
      "Both semaglutide and tirzepatide bind GLP-1R as primary agonists. Co-administration risks receptor saturation at the GLP-1R, producing no additional efficacy over monotherapy while increasing GI adverse events (nausea, vomiting). Research designs combining them should include receptor-occupancy controls.",
  },
  {
    slugs: ["semaglutide", "retatrutide"],
    type: "caution",
    title: "GLP-1R Overlap — Diminishing Returns",
    detail:
      "Retatrutide (GLP-1R/GIPR/GCGR) includes full GLP-1R agonism. Adding semaglutide alongside provides marginal or no additional GLP-1R stimulation. The GCGR and GIPR arms of retatrutide are unaffected, but researchers should design controls to isolate contributions.",
  },
  {
    slugs: ["tirzepatide", "retatrutide"],
    type: "caution",
    title: "GLP-1R + GIPR Dual Overlap",
    detail:
      "Tirzepatide (GLP-1R/GIPR) and retatrutide (GLP-1R/GIPR/GCGR) share both GLP-1R and GIPR targets. Combining them saturates two of three receptors and provides only marginal GCGR arm benefit over retatrutide monotherapy. Use receptor-null knockout controls to disambiguate GCGR contributions.",
  },
  {
    slugs: ["pt-141", "melanotan-2"],
    type: "caution",
    title: "MC1R/MC3R/MC4R Receptor Overlap",
    detail:
      "PT-141 (Bremelanotide) and Melanotan II share identical receptor targets: MC1R, MC3R, MC4R. Combining them risks receptor saturation, additive cardiovascular effects (BP elevation), and compounding nausea via area postrema MC3R. No research rationale supports co-use; pick one compound per protocol.",
  },
  {
    slugs: ["pt-141", "kpv"],
    type: "caution",
    title: "Partial Melanocortin Receptor Overlap",
    detail:
      "KPV (MSH fragment) binds MC1R and MC3R without MC4R activity. PT-141 is a full MC1R/MC3R/MC4R agonist. There is partial MC1R/MC3R overlap; however, KPV's dominant action is NF-κB inhibition at MC1R, not arousal signaling. Co-use is mechanistically distinct but researchers should monitor for additive MC3R GI effects.",
  },
  {
    slugs: ["melanotan-2", "kpv"],
    type: "caution",
    title: "MC1R/MC3R Receptor Competition",
    detail:
      "Both Melanotan II and KPV engage MC1R and MC3R. KPV's anti-inflammatory MC1R signaling and MT-II's melanogenic/arousal MC1R stimulation may compete for receptor occupancy. In inflammatory research models, MT-II co-administration could confound KPV's NF-κB endpoint data.",
  },
  {
    slugs: ["ipamorelin", "ghrp-2"],
    type: "caution",
    title: "GHSR-1a Receptor Competition",
    detail:
      "Both Ipamorelin and GHRP-2 are GHSR-1a agonists with overlapping binding sites. Co-administration may produce competitive receptor occupancy rather than additive GH secretion. Additionally, GHRP-2 elevates cortisol/ACTH while ipamorelin is selective; combining them partially negates ipamorelin's selectivity advantage.",
  },
  {
    slugs: ["hexarelin", "ipamorelin"],
    type: "caution",
    title: "GHSR-1a Competition + Tachyphylaxis Risk",
    detail:
      "Hexarelin and Ipamorelin both bind GHSR-1a. Hexarelin is more potent (higher GH peaks) but causes faster tachyphylaxis (75–80% attenuation at 4 weeks). Co-use risks accelerated receptor desensitization while gaining no receptor-coverage advantage over monotherapy.",
  },
  {
    slugs: ["hexarelin", "ghrp-2"],
    type: "caution",
    title: "GHSR-1a Overlap + Additive Cortisol Elevation",
    detail:
      "Both are potent GHSR-1a agonists that elevate cortisol and ACTH. Combining them risks additive HPA activation and faster tachyphylaxis. Research protocol should justify dual GHRP use with clear endpoint rationale; consider single GHRP + GHRH combination instead.",
  },
  {
    slugs: ["semax", "oxytocin"],
    type: "caution",
    title: "Overlapping Hypothalamic Signaling",
    detail:
      "Semax (MC4R, hypothalamic) and Oxytocin (OTR, PVN/hypothalamic) both act at hypothalamic circuits. Semax's MC4R stimulation and oxytocin's OTR-mediated PVN dopamine modulation intersect in overlapping neural circuits. Researchers should design controls that can isolate individual compound contributions.",
  },
  {
    slugs: ["kisspeptin", "semaglutide"],
    type: "caution",
    title: "HPG + Energy Balance Interaction",
    detail:
      "Kisspeptin (ARC neurons) and GLP-1 agonists both modulate hypothalamic energy sensing circuits. GLP-1R activation can suppress kisspeptin neuron activity via metabolic status signals in the ARC. Semaglutide-induced caloric restriction may attenuate kisspeptin-driven LH pulsatility. Monitor LH/FSH endpoints closely in combination studies.",
  },

  // ── Warnings ──────────────────────────────────────────────────────────────
  {
    slugs: ["pt-141", "oxytocin"],
    type: "warning",
    title: "Additive PVN Arousal Pathway Activation",
    detail:
      "PT-141 (MC4R → PVN oxytocinergic arousal) and exogenous Oxytocin (OTR, PVN) act at the same hypothalamic arousal node via overlapping mechanisms. Combining them risks excessive PVN activation, potential cardiovascular effects (BP elevation from both compounds), and confounded endpoint data. Research designs should use one compound per arm.",
  },
  {
    slugs: ["melanotan-2", "oxytocin"],
    type: "warning",
    title: "Converging PVN Arousal + BP Risk",
    detail:
      "Melanotan II activates MC4R → PVN oxytocinergic pathways, and exogenous oxytocin directly activates the same OTR. This represents additive stimulation of the same neural circuit. Both compounds also carry blood pressure considerations. Co-administration not supported by published protocols; study designs should separate arms.",
  },
  {
    slugs: ["dsip", "selank"],
    type: "caution",
    title: "Overlapping HPA Axis Modulation",
    detail:
      "DSIP suppresses HPA axis activity (ACTH/cortisol blunting) and Selank has anxiolytic effects partly through HPA axis dampening. While receptor targets differ (DSIP → hypothalamic circuits; Selank → GABA-A/serotonin), both modulate stress response. Additive HPA suppression may complicate cortisol endpoint interpretation.",
  },
  {
    slugs: ["dsip", "oxytocin"],
    type: "caution",
    title: "Dual HPA Suppression Overlap",
    detail:
      "DSIP and Oxytocin both attenuate HPA axis activity (DSIP directly; oxytocin via PVN OTR-mediated cortisol blunting). In combination, HPA suppression may be additive, complicating cortisol, ACTH, and stress-response endpoints. Include HPA-intact controls when combining.",
  },
  {
    slugs: ["aod-9604", "semaglutide"],
    type: "caution",
    title: "Dual Lipolytic Mechanisms — Additive Risk",
    detail:
      "AOD-9604 promotes lipolysis via β3-AR/cAMP/HSL while semaglutide suppresses appetite and reduces adipose via GLP-1R. Both reduce fat mass through different pathways. While non-competing, the combination may produce additive lean mass / energy deficit stress in calorie-restricted research models. Monitor lean mass endpoints.",
  },
  {
    slugs: ["aod-9604", "tirzepatide"],
    type: "caution",
    title: "Additive Fat-Loss Mechanisms",
    detail:
      "AOD-9604 (β3-AR lipolysis) and tirzepatide (GLP-1R/GIPR appetite/fat) target fat reduction via distinct but complementary pathways. Similar caution as AOD-9604 + semaglutide regarding energy balance. Lean mass and energy intake endpoints should be carefully controlled.",
  },
  {
    slugs: ["nad-plus", "epitalon"],
    type: "synergy",
    title: "Longevity Multi-Target Stack",
    detail:
      "NAD+ supports sirtuin activity and mitochondrial biogenesis while Epitalon activates telomerase (TERT) and restores pineal melatonin. Different hallmarks-of-aging targets — bioenergetics (NAD+) and telomere integrity (Epitalon) — make this a complementary longevity research stack with non-overlapping mechanisms.",
  },
  {
    slugs: ["snap-8", "pt-141"],
    type: "neutral",
    title: "No Receptor Overlap — Independent Action",
    detail:
      "Snap-8 (SNARE/NMJ topical peptide) and PT-141 (MC1R/MC3R/MC4R central) operate via completely independent mechanisms in different tissue compartments. No known interaction concerns in published research literature.",
  },
];

// ─── Utility Functions ─────────────────────────────────────────────────────────

function getInteractions(selected: CompoundEntry[]): InteractionResult[] {
  const results: InteractionResult[] = [];

  for (let i = 0; i < selected.length; i++) {
    for (let j = i + 1; j < selected.length; j++) {
      const a = selected[i];
      const b = selected[j];

      // Check explicit pair rules first
      const rule = PAIR_RULES.find(
        (r) =>
          (r.slugs[0] === a.slug && r.slugs[1] === b.slug) ||
          (r.slugs[0] === b.slug && r.slugs[1] === a.slug)
      );

      if (rule) {
        // Check half-life conflict
        let halfLifeConflict: string | undefined;
        const ratio = Math.max(a.halfLifeHours, b.halfLifeHours) / Math.min(a.halfLifeHours, b.halfLifeHours);
        if (ratio > 20) {
          const long = a.halfLifeHours > b.halfLifeHours ? a : b;
          const short = a.halfLifeHours > b.halfLifeHours ? b : a;
          halfLifeConflict = `${long.name} (${long.halfLifeHours}h half-life) vs ${short.name} (${short.halfLifeHours}h): large pharmacokinetic difference — synchronize dosing timing carefully.`;
        }
        results.push({
          compoundA: a.name,
          compoundB: b.name,
          type: rule.type,
          title: rule.title,
          detail: rule.detail,
          halfLifeConflict,
        });
        continue;
      }

      // Auto-detect receptor overlap
      const receptorOverlap = a.receptors.filter((r) => b.receptors.includes(r));
      const mechanismOverlap = a.mechanisms.filter((m) => b.mechanisms.includes(m));

      if (receptorOverlap.length > 0) {
        const type = receptorOverlap.length >= 2 ? "caution" : "neutral";
        results.push({
          compoundA: a.name,
          compoundB: b.name,
          type,
          title: `Shared Receptor${receptorOverlap.length > 1 ? "s" : ""}: ${receptorOverlap.join(", ")}`,
          detail: `${a.name} and ${b.name} both engage ${receptorOverlap.join(" and ")}. ${receptorOverlap.length >= 2 ? "Multiple shared receptors may produce competitive binding or additive effects. " : ""}${mechanismOverlap.length > 0 ? `Shared downstream mechanisms: ${mechanismOverlap.join(", ")}. ` : ""}Review endpoint design to isolate individual compound contributions.`,
        });
      } else {
        // Check for mechanism overlap without receptor overlap
        const tagOverlap = a.tags.filter((t) => b.tags.includes(t));
        if (tagOverlap.includes("GH") || tagOverlap.includes("GHRP") || tagOverlap.includes("GHRH")) {
          results.push({
            compoundA: a.name,
            compoundB: b.name,
            type: "synergy",
            title: "GH Axis Combination",
            detail: `${a.name} and ${b.name} both target the GH/IGF-1 axis through complementary mechanisms. ${mechanismOverlap.length > 0 ? `Shared downstream pathways: ${mechanismOverlap.join(", ")}.` : "Different receptor entry points may allow synergistic GH pulse amplification."} Standard GHRH+GHRP combination principles apply.`,
          });
        } else if (tagOverlap.includes("repair") || tagOverlap.includes("anti-inflammatory")) {
          results.push({
            compoundA: a.name,
            compoundB: b.name,
            type: "synergy",
            title: "Complementary Repair Pathways",
            detail: `${a.name} and ${b.name} share tissue repair and anti-inflammatory research applications through different molecular mechanisms. Additive effects are plausible in preclinical repair models; full factorial study design recommended to quantify individual contributions.`,
          });
        } else if (tagOverlap.includes("longevity") || tagOverlap.includes("mitochondria")) {
          results.push({
            compoundA: a.name,
            compoundB: b.name,
            type: "synergy",
            title: "Multi-Target Longevity Stack",
            detail: `${a.name} and ${b.name} target distinct longevity mechanisms (${a.mechanisms.slice(0, 2).join("/")} vs ${b.mechanisms.slice(0, 2).join("/")}). No receptor overlap. Combine with independent biomarker endpoints per compound.`,
          });
        } else {
          results.push({
            compoundA: a.name,
            compoundB: b.name,
            type: "neutral",
            title: "No Known Receptor Interaction",
            detail: `${a.name} (${a.mechanisms.slice(0, 2).join(", ")}) and ${b.name} (${b.mechanisms.slice(0, 2).join(", ")}) operate through distinct receptors and mechanisms. No documented interactions in research literature. Use independent endpoints per compound.`,
          });
        }
      }
    }
  }

  return results;
}

function getOverallRisk(results: InteractionResult[]): "clear" | "review" | "caution" | "warning" {
  if (results.some((r) => r.type === "warning")) return "warning";
  if (results.some((r) => r.type === "caution")) return "caution";
  if (results.some((r) => r.type === "synergy")) return "review";
  return "clear";
}

const TYPE_CONFIG = {
  synergy: {
    label: "Synergy",
    color: "#4A9B8E",
    bg: "#4A9B8E15",
    border: "#4A9B8E40",
    icon: "↑",
  },
  caution: {
    label: "Caution",
    color: "#d4af37",
    bg: "#d4af3715",
    border: "#d4af3740",
    icon: "⚠",
  },
  warning: {
    label: "Warning",
    color: "#E05252",
    bg: "#E0525215",
    border: "#E0525240",
    icon: "✕",
  },
  neutral: {
    label: "Independent",
    color: "#A0A0A0",
    bg: "#A0A0A010",
    border: "#A0A0A030",
    icon: "–",
  },
};

const CATEGORIES = [
  "All",
  "Recovery",
  "Metabolic",
  "GH Axis",
  "Longevity",
  "Nootropic",
  "Melanocortin",
  "Reproductive",
  "Immunology",
  "Cosmetic",
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function PeptideInteractionChecker() {
  const [selected, setSelected] = useState<string[]>([]);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [expandedPair, setExpandedPair] = useState<string | null>(null);

  const filteredCompounds = useMemo(() => {
    let list = COMPOUNDS;
    if (categoryFilter !== "All") list = list.filter((c) => c.category === categoryFilter);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q) ||
          c.mechanisms.some((m) => m.toLowerCase().includes(q))
      );
    }
    return list;
  }, [categoryFilter, search]);

  const selectedCompounds = useMemo(
    () => COMPOUNDS.filter((c) => selected.includes(c.slug)),
    [selected]
  );

  const interactions = useMemo(
    () => getInteractions(selectedCompounds),
    [selectedCompounds]
  );

  const overallRisk = useMemo(() => getOverallRisk(interactions), [interactions]);

  function toggleCompound(slug: string) {
    if (selected.includes(slug)) {
      setSelected((prev) => prev.filter((s) => s !== slug));
    } else if (selected.length < 5) {
      setSelected((prev) => [...prev, slug]);
    }
  }

  const synergies = interactions.filter((r) => r.type === "synergy");
  const cautions = interactions.filter((r) => r.type === "caution");
  const warnings = interactions.filter((r) => r.type === "warning");
  const neutrals = interactions.filter((r) => r.type === "neutral");

  return (
    <div style={{ backgroundColor: "#FFFFF3", minHeight: "100vh" }}>
      {/* Hero */}
      <section className="relative px-6 pt-32 pb-16 md:pt-40 md:pb-20" style={{ backgroundColor: "#010101" }}>
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            variant="dark"
            className="mb-6"
            items={[
              { label: "Home", href: "/" },
              { label: "Research Tools", href: "/tools" },
              { label: "Peptide Interaction Checker" },
            ]}
          />
          <p className="text-xs uppercase tracking-widest mb-5" style={{ color: "#C9DD69" }}>
            Research Tools
          </p>
          <h1
            className="text-4xl md:text-5xl mb-5 tracking-tight"
            style={{ fontWeight: 200, color: "#FFFFF3", lineHeight: 1.05 }}
          >
            Peptide Interaction Checker
          </h1>
          <p className="text-base md:text-lg max-w-2xl" style={{ fontWeight: 300, color: "#A0A0A0", lineHeight: 1.65 }}>
            Select 2–5 compounds to analyze receptor overlap risks, mechanism synergies,
            timing conflicts, and research compatibility. 30-compound database with published interaction data.
          </p>

          {/* Stats strip */}
          <div className="flex flex-wrap gap-8 mt-10">
            {[
              { val: "30+", label: "Compounds" },
              { val: `${PAIR_RULES.length}`, label: "Explicit pair rules" },
              { val: "4", label: "Interaction types" },
              { val: "Free", label: "No login required" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-light" style={{ color: "#FFFFF3" }}>
                  {stat.val}
                </div>
                <div className="text-xs uppercase tracking-widest mt-0.5" style={{ color: "#555" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="px-6 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">

            {/* Left: Compound Selector */}
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                {/* Selected chips */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-sm font-medium uppercase tracking-widest" style={{ color: "#000" }}>
                      Selected ({selected.length}/5)
                    </h2>
                    {selected.length > 0 && (
                      <button
                        onClick={() => setSelected([])}
                        className="text-xs"
                        style={{ color: "#888" }}
                      >
                        Clear all
                      </button>
                    )}
                  </div>
                  {selected.length === 0 ? (
                    <div
                      className="rounded-sm p-4 text-center text-sm"
                      style={{ border: "2px dashed #DDD", color: "#999" }}
                    >
                      Select 2–5 compounds below
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {selectedCompounds.map((c) => (
                        <button
                          key={c.slug}
                          onClick={() => toggleCompound(c.slug)}
                          className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-sm"
                          style={{
                            backgroundColor: "#010101",
                            color: "#FFFFF3",
                            border: "1px solid #333",
                          }}
                        >
                          {c.name}
                          <span style={{ color: "#888" }}>×</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Search */}
                <div className="relative mb-4">
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search compounds..."
                    className="w-full text-sm px-4 py-2.5 rounded-sm outline-none"
                    style={{
                      backgroundColor: "#FFF",
                      border: "1px solid #DDD",
                      color: "#000",
                    }}
                  />
                  {search && (
                    <button
                      onClick={() => setSearch("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-sm"
                      style={{ color: "#999" }}
                    >
                      ×
                    </button>
                  )}
                </div>

                {/* Category filter */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setCategoryFilter(cat)}
                      className="text-xs px-2.5 py-1 rounded-sm transition-all"
                      style={{
                        backgroundColor: categoryFilter === cat ? "#010101" : "#F5F4EE",
                        color: categoryFilter === cat ? "#FFFFF3" : "#666",
                        border: "1px solid " + (categoryFilter === cat ? "#010101" : "#DDD"),
                        fontWeight: categoryFilter === cat ? 500 : 400,
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Compound list */}
                <div className="space-y-1.5 max-h-96 overflow-y-auto pr-1">
                  {filteredCompounds.length === 0 ? (
                    <p className="text-sm py-4 text-center" style={{ color: "#999" }}>
                      No compounds found
                    </p>
                  ) : (
                    filteredCompounds.map((compound) => {
                      const isSelected = selected.includes(compound.slug);
                      const atMax = selected.length >= 5 && !isSelected;
                      return (
                        <button
                          key={compound.slug}
                          onClick={() => !atMax && toggleCompound(compound.slug)}
                          className="w-full text-left px-4 py-3 rounded-sm transition-all"
                          disabled={atMax}
                          style={{
                            backgroundColor: isSelected ? "#010101" : atMax ? "#F9F8F4" : "#FFF",
                            border: "1px solid " + (isSelected ? "#333" : "#E8E6E0"),
                            opacity: atMax ? 0.4 : 1,
                            cursor: atMax ? "not-allowed" : "pointer",
                          }}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <div>
                              <div
                                className="text-sm font-medium"
                                style={{ color: isSelected ? "#FFFFF3" : "#000" }}
                              >
                                {compound.name}
                              </div>
                              <div
                                className="text-xs mt-0.5"
                                style={{ color: isSelected ? "#888" : "#999" }}
                              >
                                {compound.category} · t½ {compound.halfLifeHours < 1 ? `${Math.round(compound.halfLifeHours * 60)}min` : `${compound.halfLifeHours}h`}
                              </div>
                            </div>
                            {isSelected && (
                              <div
                                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs"
                                style={{ backgroundColor: "#d4af37", color: "#000" }}
                              >
                                ✓
                              </div>
                            )}
                          </div>
                        </button>
                      );
                    })
                  )}
                </div>
              </div>
            </div>

            {/* Right: Results Panel */}
            <div className="lg:col-span-3">
              {selected.length < 2 ? (
                <div
                  className="rounded-sm p-12 text-center"
                  style={{ backgroundColor: "#FFF", border: "1px solid #E8E6E0" }}
                >
                  <div className="text-4xl mb-4">🧪</div>
                  <h2 className="text-xl font-light mb-3" style={{ color: "#000" }}>
                    Select at least 2 compounds
                  </h2>
                  <p className="text-sm" style={{ color: "#888" }}>
                    Choose compounds from the list to analyze their interactions, receptor overlaps, and compatibility.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Overall Summary Bar */}
                  <div
                    className="rounded-sm p-5"
                    style={{
                      backgroundColor:
                        overallRisk === "warning" ? "#E0525215" :
                        overallRisk === "caution" ? "#d4af3715" :
                        overallRisk === "review" ? "#4A9B8E15" :
                        "#F0F4EE",
                      border: "1px solid " +
                        (overallRisk === "warning" ? "#E0525240" :
                         overallRisk === "caution" ? "#d4af3740" :
                         overallRisk === "review" ? "#4A9B8E40" :
                         "#A4B08A40"),
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="text-2xl w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor:
                            overallRisk === "warning" ? "#E05252" :
                            overallRisk === "caution" ? "#d4af37" :
                            overallRisk === "review" ? "#4A9B8E" : "#A4B08A",
                          color: "#FFF",
                          fontSize: 16,
                          fontWeight: 600,
                        }}
                      >
                        {overallRisk === "warning" ? "!" :
                         overallRisk === "caution" ? "⚠" :
                         overallRisk === "review" ? "↑" : "✓"}
                      </div>
                      <div>
                        <div className="font-medium" style={{ color: "#000" }}>
                          {overallRisk === "warning" ? "Research Warnings Present" :
                           overallRisk === "caution" ? "Review Cautions Before Proceeding" :
                           overallRisk === "review" ? "Synergistic Combinations Detected" :
                           "No Known Conflicts"}
                        </div>
                        <div className="text-sm mt-1" style={{ color: "#666" }}>
                          {interactions.length} pair interaction{interactions.length !== 1 ? "s" : ""} analyzed
                          {warnings.length > 0 ? ` · ${warnings.length} warning${warnings.length !== 1 ? "s" : ""}` : ""}
                          {cautions.length > 0 ? ` · ${cautions.length} caution${cautions.length !== 1 ? "s" : ""}` : ""}
                          {synergies.length > 0 ? ` · ${synergies.length} synerg${synergies.length !== 1 ? "ies" : "y"}` : ""}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Compatibility Matrix */}
                  <div
                    className="rounded-sm overflow-hidden"
                    style={{ border: "1px solid #E8E6E0" }}
                  >
                    <div
                      className="px-5 py-3.5 border-b"
                      style={{ backgroundColor: "#010101", borderColor: "#1A1A18" }}
                    >
                      <h2 className="text-sm font-medium uppercase tracking-widest" style={{ color: "#FFFFF3" }}>
                        Compatibility Matrix
                      </h2>
                    </div>
                    <div className="overflow-x-auto" style={{ backgroundColor: "#FFF" }}>
                      <table className="w-full text-xs">
                        <thead>
                          <tr style={{ borderBottom: "1px solid #E8E6E0" }}>
                            <th className="px-4 py-3 text-left" style={{ color: "#999", fontWeight: 400, minWidth: 120 }}>
                              Compound
                            </th>
                            {selectedCompounds.map((c) => (
                              <th
                                key={c.slug}
                                className="px-3 py-3 text-center"
                                style={{ color: "#000", fontWeight: 500, minWidth: 100 }}
                              >
                                {c.name.length > 12 ? c.name.split(" ")[0] : c.name}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {selectedCompounds.map((rowCompound, rowIdx) => (
                            <tr
                              key={rowCompound.slug}
                              style={{ borderBottom: "1px solid #F0EEE8" }}
                            >
                              <td className="px-4 py-3 font-medium" style={{ color: "#000" }}>
                                {rowCompound.name.length > 14 ? rowCompound.name.split(" ")[0] : rowCompound.name}
                              </td>
                              {selectedCompounds.map((colCompound, colIdx) => {
                                if (rowIdx === colIdx) {
                                  return (
                                    <td key={colCompound.slug} className="px-3 py-3 text-center">
                                      <span style={{ color: "#DDD" }}>—</span>
                                    </td>
                                  );
                                }
                                const interaction = interactions.find(
                                  (r) =>
                                    (r.compoundA === rowCompound.name && r.compoundB === colCompound.name) ||
                                    (r.compoundA === colCompound.name && r.compoundB === rowCompound.name)
                                );
                                if (!interaction) {
                                  return (
                                    <td key={colCompound.slug} className="px-3 py-3 text-center">
                                      <span style={{ color: "#DDD" }}>?</span>
                                    </td>
                                  );
                                }
                                const cfg = TYPE_CONFIG[interaction.type];
                                return (
                                  <td key={colCompound.slug} className="px-3 py-3 text-center">
                                    <span
                                      className="inline-flex items-center justify-center w-7 h-7 rounded-sm text-xs font-bold"
                                      style={{
                                        backgroundColor: cfg.bg,
                                        color: cfg.color,
                                        border: `1px solid ${cfg.border}`,
                                      }}
                                      title={`${interaction.type}: ${interaction.title}`}
                                    >
                                      {cfg.icon}
                                    </span>
                                  </td>
                                );
                              })}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div
                      className="px-5 py-3 flex flex-wrap gap-4 border-t"
                      style={{ backgroundColor: "#FAFAF8", borderColor: "#E8E6E0" }}
                    >
                      {Object.entries(TYPE_CONFIG).map(([key, cfg]) => (
                        <div key={key} className="flex items-center gap-1.5 text-xs" style={{ color: "#666" }}>
                          <span
                            className="inline-flex items-center justify-center w-5 h-5 rounded-sm font-bold text-xs"
                            style={{ backgroundColor: cfg.bg, color: cfg.color, border: `1px solid ${cfg.border}` }}
                          >
                            {cfg.icon}
                          </span>
                          {cfg.label}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Interaction Cards */}
                  {[
                    { label: "Warnings", items: warnings, emptyMsg: null },
                    { label: "Cautions", items: cautions, emptyMsg: null },
                    { label: "Synergies", items: synergies, emptyMsg: null },
                    { label: "Independent Pairs", items: neutrals, emptyMsg: null },
                  ]
                    .filter(({ items }) => items.length > 0)
                    .map(({ label, items }) => (
                      <div key={label}>
                        <h3 className="text-sm font-medium uppercase tracking-widest mb-3" style={{ color: "#000" }}>
                          {label} ({items.length})
                        </h3>
                        <div className="space-y-3">
                          {items.map((interaction) => {
                            const cfg = TYPE_CONFIG[interaction.type];
                            const pairKey = `${interaction.compoundA}–${interaction.compoundB}`;
                            const isExpanded = expandedPair === pairKey;
                            return (
                              <div
                                key={pairKey}
                                className="rounded-sm overflow-hidden"
                                style={{
                                  border: `1px solid ${cfg.border}`,
                                  backgroundColor: cfg.bg,
                                }}
                              >
                                <button
                                  onClick={() => setExpandedPair(isExpanded ? null : pairKey)}
                                  className="w-full text-left px-5 py-4"
                                >
                                  <div className="flex items-start justify-between gap-3">
                                    <div className="flex items-start gap-3">
                                      <span
                                        className="inline-flex items-center justify-center w-6 h-6 rounded-sm text-xs font-bold flex-shrink-0 mt-0.5"
                                        style={{
                                          backgroundColor: cfg.color,
                                          color: "#FFF",
                                        }}
                                      >
                                        {cfg.icon}
                                      </span>
                                      <div>
                                        <div className="text-xs mb-1" style={{ color: cfg.color, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                                          {interaction.compoundA} × {interaction.compoundB}
                                        </div>
                                        <div className="text-sm font-medium" style={{ color: "#000" }}>
                                          {interaction.title}
                                        </div>
                                      </div>
                                    </div>
                                    <span
                                      className="text-xs flex-shrink-0 mt-1"
                                      style={{ color: "#999" }}
                                    >
                                      {isExpanded ? "▲" : "▼"}
                                    </span>
                                  </div>
                                </button>
                                {isExpanded && (
                                  <div
                                    className="px-5 pb-5 pt-1"
                                    style={{ borderTop: `1px solid ${cfg.border}` }}
                                  >
                                    <p className="text-sm leading-relaxed" style={{ color: "#333" }}>
                                      {interaction.detail}
                                    </p>
                                    {interaction.halfLifeConflict && (
                                      <div
                                        className="mt-3 px-4 py-3 rounded-sm text-xs"
                                        style={{
                                          backgroundColor: "#d4af3710",
                                          border: "1px solid #d4af3730",
                                          color: "#7a6020",
                                        }}
                                      >
                                        <strong>Timing note:</strong> {interaction.halfLifeConflict}
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}

                  {/* Half-Life Comparison */}
                  <div
                    className="rounded-sm overflow-hidden"
                    style={{ border: "1px solid #E8E6E0" }}
                  >
                    <div
                      className="px-5 py-3.5 border-b"
                      style={{ backgroundColor: "#F5F4EE", borderColor: "#E8E6E0" }}
                    >
                      <h2 className="text-sm font-medium uppercase tracking-widest" style={{ color: "#000" }}>
                        Half-Life Comparison
                      </h2>
                    </div>
                    <div className="p-5 space-y-4" style={{ backgroundColor: "#FFF" }}>
                      {selectedCompounds
                        .slice()
                        .sort((a, b) => b.halfLifeHours - a.halfLifeHours)
                        .map((c) => {
                          const maxHl = Math.max(...selectedCompounds.map((x) => x.halfLifeHours));
                          const pct = Math.max(4, (c.halfLifeHours / maxHl) * 100);
                          const label =
                            c.halfLifeHours < 1
                              ? `${Math.round(c.halfLifeHours * 60)} min`
                              : c.halfLifeHours < 24
                              ? `${c.halfLifeHours}h`
                              : `${Math.round(c.halfLifeHours / 24)} days`;
                          return (
                            <div key={c.slug}>
                              <div className="flex justify-between text-xs mb-1.5">
                                <span style={{ color: "#000" }}>{c.name}</span>
                                <span style={{ color: "#666" }}>{label}</span>
                              </div>
                              <div className="h-2 rounded-full" style={{ backgroundColor: "#F0EEE8" }}>
                                <div
                                  className="h-2 rounded-full"
                                  style={{
                                    width: `${pct}%`,
                                    backgroundColor: "#d4af37",
                                  }}
                                />
                              </div>
                            </div>
                          );
                        })}
                      {(() => {
                        const sortedHl = selectedCompounds
                          .slice()
                          .sort((a, b) => b.halfLifeHours - a.halfLifeHours);
                        const ratio =
                          sortedHl[0].halfLifeHours /
                          sortedHl[sortedHl.length - 1].halfLifeHours;
                        if (ratio > 10) {
                          return (
                            <p className="text-xs pt-2" style={{ color: "#888" }}>
                              ⚠ Large half-life spread ({Math.round(ratio)}×). Synchronize dosing schedules carefully to avoid unpaired trough/peak plasma levels.
                            </p>
                          );
                        }
                        return null;
                      })()}
                    </div>
                  </div>

                  {/* Disclaimer */}
                  <div
                    className="rounded-sm p-5 text-xs leading-relaxed"
                    style={{
                      backgroundColor: "#F5F4EE",
                      border: "1px solid #E0DED8",
                      color: "#888",
                    }}
                  >
                    <strong style={{ color: "#666" }}>Research Use Only.</strong> This interaction checker is provided as a reference tool for researchers. Interaction data is based on published preclinical and pharmacological literature. This tool does not constitute medical advice and does not replace expert review of research protocols. Nexphoria compounds are for research purposes only and are not approved for human therapeutic use.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="px-6 py-12" style={{ backgroundColor: "#F5F4EE" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-medium uppercase tracking-widest mb-6" style={{ color: "#000" }}>
            Related Tools
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                href: "/tools/stack-builder",
                title: "Research Stack Builder",
                desc: "Pre-built stacks for 5 research goals with synergy rationale and dosing tables.",
              },
              {
                href: "/tools/half-life-calculator",
                title: "Half-Life Calculator",
                desc: "Visualize compound clearance curves and plan dosing frequency.",
              },
              {
                href: "/tools/dosing-frequency-planner",
                title: "Dosing Frequency Planner",
                desc: "Build a weekly injection schedule for multi-compound research protocols.",
              },
            ].map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="block rounded-sm p-5 transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: "#FFF", border: "1px solid #E8E6E0", textDecoration: "none" }}
              >
                <div className="font-medium text-sm mb-1" style={{ color: "#000" }}>{tool.title}</div>
                <div className="text-xs leading-relaxed" style={{ color: "#888" }}>{tool.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#999" }}>
            Ready to Order?
          </p>
          <h2 className="text-2xl font-light mb-4" style={{ color: "#000" }}>
            Research-grade peptides, COA with every lot.
          </h2>
          <Link href="/products" className="btn-primary inline-block">
            Browse Catalog
          </Link>
        </div>
      </section>
    </div>
  );
}
