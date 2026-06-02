import type { AdvisorAnswers, GoalId } from "./types";
import { GOALS, CONCERNS } from "./catalog";

// Each step is a conversational beat: the advisor's line + the options the
// researcher can tap. Concern options are derived from the chosen goal.

export type StepId = keyof AdvisorAnswers; // "goal" | "experience" | "concern" | "timeline" | "budget"

export type StepOption = { id: string; label: string; sublabel?: string };

export type Step = {
  id: StepId;
  prompt: (answers: Partial<AdvisorAnswers>) => string;
  options: (answers: Partial<AdvisorAnswers>) => StepOption[];
};

export const STEPS: Step[] = [
  {
    id: "goal",
    prompt: () =>
      "Let's design your protocol. First — what's the primary outcome you're researching?",
    options: () =>
      GOALS.map((g) => ({ id: g.id, label: g.label, sublabel: g.description })),
  },
  {
    id: "experience",
    prompt: () => "How would you describe your experience with peptide research?",
    options: () => [
      { id: "first-time", label: "First time", sublabel: "New to reconstitution and protocols" },
      { id: "some-research", label: "Some research", sublabel: "Comfortable with the basics" },
      { id: "experienced", label: "Experienced", sublabel: "Running multi-compound studies" },
    ],
  },
  {
    id: "concern",
    prompt: (a) => {
      const goal = GOALS.find((g) => g.id === a.goal);
      return goal
        ? `Within ${goal.label.toLowerCase()}, which area is most relevant to your work?`
        : "Which specific area is most relevant to your work?";
    },
    options: (a) => {
      const goal = a.goal as GoalId | undefined;
      const list = goal ? CONCERNS[goal] : [];
      return [
        ...list.map((c) => ({ id: c.id, label: c.label })),
        { id: "none", label: "No single focus", sublabel: "Recommend broadly" },
      ];
    },
  },
  {
    id: "timeline",
    prompt: () => "What's your timeline?",
    options: () => [
      { id: "quick", label: "Nearer-term", sublabel: "Focused, faster-reading protocol" },
      { id: "long-term", label: "Long-term optimization", sublabel: "Sustained, multi-cycle study" },
    ],
  },
  {
    id: "budget",
    prompt: () => "Last one — what monthly range fits your protocol?",
    options: () => [
      { id: "entry", label: "Entry", sublabel: "Single focused compound" },
      { id: "standard", label: "Standard", sublabel: "Two complementary compounds" },
      { id: "premium", label: "Comprehensive", sublabel: "Full multi-compound protocol" },
    ],
  },
];
