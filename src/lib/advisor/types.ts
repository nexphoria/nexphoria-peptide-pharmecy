// Shared types for the Protocol Advisor consultation flow.

export type GoalId =
  | "recovery-muscle"
  | "anti-aging"
  | "cognitive"
  | "weight"
  | "injury"
  | "wellness";

export type ExperienceId = "first-time" | "some-research" | "experienced";
export type TimelineId = "quick" | "long-term";
export type BudgetId = "entry" | "standard" | "premium";

export type Level = "beginner" | "intermediate" | "advanced";
export type Tier = "entry" | "standard" | "premium";

// Per-product metadata the advisor layers on top of the real catalog entry.
export type AdvisorProduct = {
  slug: string;
  why: string;
  dose: string;
  level: Level;
  tier: Tier;
  concernTags: string[];
};

export type AdvisorAnswers = {
  goal: GoalId;
  experience: ExperienceId;
  concern: string; // concern option id, or "none"
  timeline: TimelineId;
  budget: BudgetId;
};

// A resolved recommendation line — merges advisor metadata with live catalog data.
export type ProtocolItem = {
  slug: string;
  name: string;
  category: string;
  size: string;
  accentColor: string;
  msrp: number; // catalog base price for the chosen dosage
  why: string;
  dose: string;
};

export type Protocol = {
  items: ProtocolItem[];
  recommendedCycle: 3 | 6;
  cycleReason: string;
  goalLabel: string;
  timeline: { week: string; description: string }[];
};
