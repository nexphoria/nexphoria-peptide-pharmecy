import type { AdvisorProduct, GoalId } from "./types";

// Goal definitions surfaced as the first question.
export const GOALS: { id: GoalId; label: string; description: string }[] = [
  { id: "recovery-muscle", label: "Muscle & Recovery", description: "Lean mass, training recovery, GH axis" },
  { id: "anti-aging", label: "Anti-Aging & Longevity", description: "Cellular health, skin, telomeres" },
  { id: "cognitive", label: "Cognitive & Mood", description: "Focus, memory, stress, sleep" },
  { id: "weight", label: "Weight Management", description: "Metabolic, appetite, body composition" },
  { id: "injury", label: "Injury Healing", description: "Tendon, joint, gut, tissue repair" },
  { id: "wellness", label: "General Wellness", description: "Immune, energy, foundational longevity" },
];

export const GOAL_LABELS: Record<GoalId, string> = GOALS.reduce(
  (acc, g) => ({ ...acc, [g.id]: g.label }),
  {} as Record<GoalId, string>,
);

// Concern options are contextual to the chosen goal. Each carries a `tag`
// that boosts products whose concernTags include it.
export const CONCERNS: Record<GoalId, { id: string; label: string; tag: string }[]> = {
  "recovery-muscle": [
    { id: "lean-mass", label: "Building lean mass", tag: "lean-mass" },
    { id: "training-recovery", label: "Faster training recovery", tag: "training-recovery" },
    { id: "sleep-gh", label: "Sleep & GH optimization", tag: "sleep-gh" },
    { id: "muscle-loss", label: "Age-related muscle loss", tag: "muscle-loss" },
  ],
  "anti-aging": [
    { id: "skin", label: "Skin & collagen", tag: "skin-collagen" },
    { id: "energy", label: "Cellular energy", tag: "cellular-energy" },
    { id: "telomere", label: "Telomere & longevity", tag: "telomere" },
    { id: "mito", label: "Mitochondrial health", tag: "mito" },
  ],
  cognitive: [
    { id: "anxiety", label: "Anxiety & stress", tag: "anxiety" },
    { id: "focus", label: "Focus & memory", tag: "focus-memory" },
    { id: "sleep", label: "Sleep quality", tag: "sleep" },
    { id: "mood", label: "Mood & motivation", tag: "mood" },
  ],
  weight: [
    { id: "appetite", label: "Appetite regulation", tag: "appetite" },
    { id: "stubborn-fat", label: "Stubborn fat", tag: "stubborn-fat" },
    { id: "metabolic", label: "Metabolic / insulin", tag: "metabolic" },
    { id: "max-results", label: "Maximal results", tag: "max-results" },
  ],
  injury: [
    { id: "tendon", label: "Tendon & ligament", tag: "tendon" },
    { id: "joint", label: "Joint & cartilage", tag: "joint" },
    { id: "gut", label: "Gut & GI repair", tag: "gut" },
    { id: "wound", label: "Skin & wound healing", tag: "wound" },
  ],
  wellness: [
    { id: "immune", label: "Immune support", tag: "immune" },
    { id: "energy", label: "Energy & vitality", tag: "cellular-energy" },
    { id: "longevity", label: "Foundational longevity", tag: "longevity" },
    { id: "gut", label: "Gut health", tag: "gut" },
  ],
};

// Per-product advisor metadata. `slug` must match a real entry in lib/products.
const P: Record<string, AdvisorProduct> = {
  "bpc-157": {
    slug: "bpc-157",
    why: "Pentadecapeptide central to angiogenesis and connective-tissue repair models.",
    dose: "Research models: 250–500 mcg, once daily, subcutaneous.",
    level: "beginner",
    tier: "entry",
    concernTags: ["training-recovery", "tendon", "joint", "gut"],
  },
  "tb-500": {
    slug: "tb-500",
    why: "Actin-binding fragment that complements BPC-157 across the repair cascade.",
    dose: "Research models: 2–2.5 mg, twice weekly, subcutaneous.",
    level: "intermediate",
    tier: "standard",
    concernTags: ["tendon", "joint", "wound"],
  },
  "ghk-cu": {
    slug: "ghk-cu",
    why: "Copper peptide studied for ECM remodeling, collagen synthesis, and skin.",
    dose: "Research models: 1–2 mg, once daily, subcutaneous.",
    level: "beginner",
    tier: "entry",
    concernTags: ["skin-collagen", "wound"],
  },
  "cjc-1295-ipamorelin": {
    slug: "cjc-1295-ipamorelin",
    why: "GHRH + selective GHRP pairing for amplified GH-pulse research.",
    dose: "Research models: 100 mcg of each, before sleep, 5 days/week.",
    level: "intermediate",
    tier: "standard",
    concernTags: ["lean-mass", "training-recovery", "muscle-loss"],
  },
  ipamorelin: {
    slug: "ipamorelin",
    why: "The cleanest GHRP studied — GH release without cortisol co-secretion.",
    dose: "Research models: 200–300 mcg, once or twice daily, subcutaneous.",
    level: "beginner",
    tier: "entry",
    concernTags: ["lean-mass"],
  },
  sermorelin: {
    slug: "sermorelin",
    why: "GHRH(1-29) analog for physiologic, pulsatile GH-axis research.",
    dose: "Research models: 100–300 mcg, before sleep, subcutaneous.",
    level: "intermediate",
    tier: "standard",
    concernTags: ["muscle-loss", "sleep-gh"],
  },
  "mk-677": {
    slug: "mk-677",
    why: "Oral ghrelin mimetic — sustained GH/IGF-1 signaling without injections.",
    dose: "Research models: 10–25 mg, oral, once daily.",
    level: "beginner",
    tier: "standard",
    concernTags: ["sleep-gh", "lean-mass", "muscle-loss"],
  },
  semaglutide: {
    slug: "semaglutide",
    why: "The most validated GLP-1 agonist in metabolic and appetite research.",
    dose: "Research models: 0.25 mg weekly, titrated upward.",
    level: "beginner",
    tier: "entry",
    concernTags: ["appetite", "metabolic"],
  },
  tirzepatide: {
    slug: "tirzepatide",
    why: "Dual GIP/GLP-1 agonist with best-in-class metabolic research data.",
    dose: "Research models: 2.5 mg weekly, titrated upward.",
    level: "intermediate",
    tier: "premium",
    concernTags: ["appetite", "metabolic", "max-results"],
  },
  retatrutide: {
    slug: "retatrutide",
    why: "Triple-agonist frontier compound for advanced metabolic protocols.",
    dose: "Research models: 2 mg weekly, titrated upward.",
    level: "advanced",
    tier: "premium",
    concernTags: ["max-results", "metabolic"],
  },
  "aod-9604": {
    slug: "aod-9604",
    why: "HGH fragment studied for lipolysis without glycemic disruption.",
    dose: "Research models: 250–300 mcg, once daily, subcutaneous.",
    level: "beginner",
    tier: "entry",
    concernTags: ["stubborn-fat"],
  },
  epitalon: {
    slug: "epitalon",
    why: "Pineal tetrapeptide central to telomerase and longevity research.",
    dose: "Research models: 5–10 mg/day in 10–20 day cycles.",
    level: "intermediate",
    tier: "entry",
    concernTags: ["telomere", "longevity"],
  },
  "nad-plus": {
    slug: "nad-plus",
    why: "Foundational coenzyme for sirtuin, DNA-repair, and energy research.",
    dose: "Research models: 50–100 mg, several times weekly.",
    level: "beginner",
    tier: "entry",
    concernTags: ["cellular-energy", "longevity"],
  },
  "ss-31": {
    slug: "ss-31",
    why: "Cardiolipin-targeting peptide for mitochondrial protection research.",
    dose: "Research models: 1–5 mg, once daily, subcutaneous.",
    level: "intermediate",
    tier: "premium",
    concernTags: ["mito"],
  },
  "mots-c": {
    slug: "mots-c",
    why: "Mitochondrial-derived exercise-mimetic for metabolic-aging research.",
    dose: "Research models: 5–10 mg, 2–3× weekly, subcutaneous.",
    level: "advanced",
    tier: "premium",
    concernTags: ["mito", "stubborn-fat", "metabolic"],
  },
  selank: {
    slug: "selank",
    why: "Non-sedating anxiolytic tuftsin analog with BDNF research data.",
    dose: "Research models: 250–500 mcg, intranasal or SC, daily.",
    level: "beginner",
    tier: "entry",
    concernTags: ["anxiety", "mood"],
  },
  semax: {
    slug: "semax",
    why: "ACTH(4-10) analog studied for BDNF, focus, and neuroprotection.",
    dose: "Research models: 300–600 mcg, intranasal, daily.",
    level: "intermediate",
    tier: "standard",
    concernTags: ["focus-memory"],
  },
  dsip: {
    slug: "dsip",
    why: "Delta-sleep peptide studied for sleep architecture and HPA modulation.",
    dose: "Research models: 100–300 mcg, before sleep, subcutaneous.",
    level: "intermediate",
    tier: "standard",
    concernTags: ["sleep"],
  },
  oxytocin: {
    slug: "oxytocin",
    why: "Hypothalamic nonapeptide for social, mood, and stress-axis research.",
    dose: "Research models: 10–40 IU, intranasal.",
    level: "beginner",
    tier: "entry",
    concernTags: ["anxiety", "mood"],
  },
  "thymosin-alpha-1": {
    slug: "thymosin-alpha-1",
    why: "Thymic peptide central to T-cell and immune-balance research.",
    dose: "Research models: 1.6 mg, twice weekly, subcutaneous.",
    level: "intermediate",
    tier: "standard",
    concernTags: ["immune"],
  },
  "ll-37": {
    slug: "ll-37",
    why: "Cathelicidin host-defense peptide for innate-immunity research.",
    dose: "Research models: 100–500 mcg, subcutaneous.",
    level: "intermediate",
    tier: "standard",
    concernTags: ["immune"],
  },
  kpv: {
    slug: "kpv",
    why: "Alpha-MSH tripeptide studied for anti-inflammatory and gut research.",
    dose: "Research models: 200–500 mcg, once daily.",
    level: "intermediate",
    tier: "standard",
    concernTags: ["gut"],
  },
};

// Ordered candidate pools per goal (anchor / highest priority first).
export const GOAL_POOLS: Record<GoalId, AdvisorProduct[]> = {
  "recovery-muscle": [
    P["cjc-1295-ipamorelin"],
    P["bpc-157"],
    P["mk-677"],
    P["ipamorelin"],
    P["sermorelin"],
  ],
  "anti-aging": [P["epitalon"], P["nad-plus"], P["ghk-cu"], P["ss-31"], P["mots-c"]],
  cognitive: [P["selank"], P["semax"], P["dsip"], P["oxytocin"], P["nad-plus"]],
  weight: [P["semaglutide"], P["aod-9604"], P["tirzepatide"], P["mots-c"], P["retatrutide"]],
  injury: [P["bpc-157"], P["tb-500"], P["ghk-cu"], P["kpv"]],
  wellness: [P["nad-plus"], P["thymosin-alpha-1"], P["ghk-cu"], P["ll-37"], P["kpv"]],
};
