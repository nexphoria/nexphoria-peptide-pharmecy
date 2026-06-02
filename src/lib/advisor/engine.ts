import { products } from "@/lib/products";
import { GOAL_POOLS, GOAL_LABELS, CONCERNS } from "./catalog";
import type {
  AdvisorAnswers,
  AdvisorProduct,
  BudgetId,
  Protocol,
  ProtocolItem,
} from "./types";

const STACK_SIZE: Record<BudgetId, number> = {
  entry: 1,
  standard: 2,
  premium: 3,
};

// Resolve the concern option id (e.g. "skin") to its scoring tag (e.g. "skin-collagen").
function concernTagFor(answers: AdvisorAnswers): string | null {
  if (!answers.concern || answers.concern === "none") return null;
  const list = CONCERNS[answers.goal] ?? [];
  return list.find((c) => c.id === answers.concern)?.tag ?? null;
}

function tierBonus(tier: AdvisorProduct["tier"], budget: BudgetId): number {
  if (budget === "entry" && tier === "entry") return 3;
  if (budget === "standard" && tier === "standard") return 2;
  if (budget === "premium" && tier === "premium") return 3;
  return 0;
}

function selectSlugs(answers: AdvisorAnswers): string[] {
  const pool = GOAL_POOLS[answers.goal] ?? [];
  const concernTag = concernTagFor(answers);

  const filtered =
    answers.experience === "first-time"
      ? pool.filter((p) => p.level !== "advanced")
      : pool;

  const scored = filtered.map((p, i) => {
    let score = filtered.length - i; // priority by pool order (anchor highest)
    if (concernTag && p.concernTags.includes(concernTag)) score += 5;
    score += tierBonus(p.tier, answers.budget);
    return { slug: p.slug, score };
  });

  scored.sort((a, b) => b.score - a.score);

  const n = Math.min(STACK_SIZE[answers.budget], scored.length);
  return scored.slice(0, n).map((s) => s.slug);
}

function chooseCycle(answers: AdvisorAnswers): { cycle: 3 | 6; reason: string } {
  if (answers.experience === "first-time") {
    return {
      cycle: 3,
      reason:
        "Because this is an early protocol, a 3-month cycle keeps your first commitment measured while giving compounds time to reach steady state.",
    };
  }
  if (answers.experience === "experienced" && answers.timeline === "long-term") {
    return {
      cycle: 6,
      reason:
        "For an established, long-term study, a 6-month cycle widens the observation window and produces more reliable endpoint data.",
    };
  }
  if (answers.timeline === "long-term") {
    return {
      cycle: 6,
      reason:
        "Your long-term focus is best served by a 6-month cycle — sustained exposure yields cleaner data than short runs.",
    };
  }
  return {
    cycle: 3,
    reason:
      "A focused 3-month cycle matches your nearer-term timeline and reaches steady state within the observation window.",
  };
}

const GENERIC_TIMELINE = [
  {
    week: "Weeks 1–2",
    description:
      "Baseline and integration. Early signaling activity is typically observed in preclinical models.",
  },
  {
    week: "Weeks 3–6",
    description:
      "Primary observation window. Most models show measurable divergence from controls in this phase.",
  },
  {
    week: "Weeks 8–12",
    description:
      "Steady-state accumulation. The fullest expression of the studied endpoints appears here.",
  },
];

export function buildProtocol(answers: AdvisorAnswers): Protocol {
  const slugs = selectSlugs(answers);

  const items: ProtocolItem[] = slugs
    .map((slug): ProtocolItem | null => {
      const product = products.find((p) => p.slug === slug);
      const meta = (GOAL_POOLS[answers.goal] ?? []).find((p) => p.slug === slug);
      if (!product || !meta) return null;
      const dosage = product.dosages?.[0];
      return {
        slug: product.slug,
        name: product.name,
        category: product.category,
        size: dosage?.size ?? product.size,
        accentColor: product.accentColor,
        msrp: dosage?.price ?? product.price,
        why: meta.why,
        dose: meta.dose,
      };
    })
    .filter((x): x is ProtocolItem => x !== null);

  const { cycle, reason } = chooseCycle(answers);

  const anchor = items[0] ? products.find((p) => p.slug === items[0].slug) : undefined;
  const timeline =
    anchor?.whatToExpect && anchor.whatToExpect.length >= 3
      ? anchor.whatToExpect.slice(0, 3)
      : GENERIC_TIMELINE;

  return {
    items,
    recommendedCycle: cycle,
    cycleReason: reason,
    goalLabel: GOAL_LABELS[answers.goal],
    timeline,
  };
}
