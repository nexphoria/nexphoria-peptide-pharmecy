// ─── Testimonial Review Workflow ─────────────────────────────────────────────
//
// All customer reviews and influencer testimonials pass through this workflow
// before being published anywhere. The primary compliance concern for a RUO
// peptide brand is that no published testimonial implies personal therapeutic
// use, makes health claims, or violates FTC disclosure requirements.
//
// Workflow states:
//   pending       → newly submitted, awaiting assignment
//   under_review  → reviewer actively screening
//   approved      → passed all compliance checks, ready to publish
//   rejected      → failed one or more compliance checks, will not be published
//   flagged       → escalated to legal / compliance team for human review
//   published     → live on site

// ─── Enums & Constants ───────────────────────────────────────────────────────

export type TestimonialStatus =
  | "pending"
  | "under_review"
  | "approved"
  | "rejected"
  | "flagged"
  | "published";

export type TestimonialSource = "customer_review" | "influencer" | "researcher" | "press";

export type ComplianceCheckId =
  | "no_health_claim"         // Quote does not promise personal health outcomes
  | "no_therapeutic_implication" // Does not imply personal use / treatment / cure
  | "no_human_dosing"         // No dosing information framed for human consumption
  | "research_context_clear"  // Clearly describes lab / in-vitro / research context
  | "author_verified"         // Submitter has a verified order or institutional affiliation
  | "ftc_disclosure"          // Material relationship disclosed (influencer/paid only)
  | "no_false_competitor_claim" // No unsubstantiated competitor disparagement
  | "no_availability_promise"; // No promise of stock, pricing lock, or delivery guarantee

export type ComplianceOutcome = "pass" | "fail" | "na" | "needs_review";

// ─── Compliance Check Definition ─────────────────────────────────────────────

export interface ComplianceCheck {
  id: ComplianceCheckId;
  label: string;
  description: string;
  /** Which source types this check applies to. undefined = applies to all. */
  appliesTo?: TestimonialSource[];
  severity: "critical" | "high" | "medium";
  /** If true, a single fail on this check triggers auto-reject */
  autoRejectOnFail: boolean;
  /** If true, a fail escalates to flagged rather than rejected (needs human) */
  escalateOnFail?: boolean;
}

export const COMPLIANCE_CHECKS: ComplianceCheck[] = [
  {
    id: "no_health_claim",
    label: "No personal health outcome claims",
    description:
      "The quote must not state or imply that a Nexphoria compound produced a personal health outcome (e.g. 'healed my injury', 'cured my X', 'I lost weight with…'). Research observations are acceptable; first-person therapeutic outcomes are not.",
    severity: "critical",
    autoRejectOnFail: true,
  },
  {
    id: "no_therapeutic_implication",
    label: "No therapeutic implication",
    description:
      "The quote must not imply that the compound was used to diagnose, treat, mitigate, cure, or prevent any disease or condition in a human or animal. Language like 'for my recovery', 'helped my inflammation', or 'I use it to…' is prohibited.",
    severity: "critical",
    autoRejectOnFail: true,
  },
  {
    id: "no_human_dosing",
    label: "No human dosing information",
    description:
      "The quote must not include dosing information framed for personal human use (e.g. 'I take 250mcg daily'). Published research dosing references in a clearly academic context are permissible only with reviewer approval.",
    severity: "critical",
    autoRejectOnFail: true,
  },
  {
    id: "research_context_clear",
    label: "Research context is clear",
    description:
      "The quote should make it clear that the compound was used in a laboratory, in-vitro, or in-vivo research context — or should be neutral enough that no therapeutic context is implied. Ambiguous testimonials must be flagged.",
    severity: "high",
    autoRejectOnFail: false,
    escalateOnFail: true,
  },
  {
    id: "author_verified",
    label: "Author identity / order verified",
    description:
      "The reviewer's order number, institutional email domain, or affiliation must be on file. Anonymous submissions without any verification marker must be escalated. Pseudonymous reviews with a verified order number are acceptable.",
    severity: "high",
    autoRejectOnFail: false,
    escalateOnFail: true,
  },
  {
    id: "ftc_disclosure",
    label: "FTC material relationship disclosed",
    description:
      "For influencer or paid testimonials, the reviewer must have disclosed any material relationship (free product, affiliate arrangement, sponsorship). The published version must include a visible disclosure label. Applies to influencer source only.",
    appliesTo: ["influencer"],
    severity: "high",
    autoRejectOnFail: true,
  },
  {
    id: "no_false_competitor_claim",
    label: "No false competitor disparagement",
    description:
      "The quote must not make unsubstantiated or potentially false claims about named competitors. General comparisons framed as personal research experience are permissible; specific factual allegations about other brands require legal review.",
    severity: "medium",
    autoRejectOnFail: false,
    escalateOnFail: true,
  },
  {
    id: "no_availability_promise",
    label: "No stock or pricing promise",
    description:
      "The quote must not promise specific pricing, guaranteed availability, or delivery commitments that Nexphoria cannot consistently honor. Reviewer mentions of a personal order experience are fine; forward-looking promises are not.",
    severity: "medium",
    autoRejectOnFail: false,
  },
];

// ─── Submission Types ─────────────────────────────────────────────────────────

export interface ComplianceCheckResult {
  checkId: ComplianceCheckId;
  outcome: ComplianceOutcome;
  /** Reviewer note explaining the outcome decision */
  note?: string;
}

export interface TestimonialSubmission {
  id: string;
  source: TestimonialSource;
  submittedAt: string; // ISO 8601
  submitterName: string;
  submitterEmail: string;
  /** Institutional affiliation or platform handle for influencers */
  submitterAffiliation?: string;
  verifiedOrderId?: string;
  /** The raw quote text as submitted */
  rawQuote: string;
  /** Optional edited version for compliance (reviewer can redact / trim) */
  editedQuote?: string;
  productNames: string[];
  /** Star rating 1–5 submitted alongside the review, if applicable */
  overallRating?: number;
  categoryRatings?: Record<string, number>;
  /** Highlight phrase the reviewer highlighted (optional) */
  highlight?: string;
  status: TestimonialStatus;
  /** Reviewer agent/user assigned to screen this submission */
  assignedTo?: string;
  /** When review was completed */
  reviewedAt?: string;
  /** Final compliance check results */
  complianceResults: ComplianceCheckResult[];
  /** Overall reviewer note summarising the decision */
  reviewerNote?: string;
  /** If rejected or flagged, the primary reason code */
  rejectionReason?: ComplianceCheckId | "other";
  /** If published, where it appears */
  publishedTo?: Array<"reviews_page" | "homepage" | "product_page" | "social">;
  publishedAt?: string;
}

// ─── Status Transitions ───────────────────────────────────────────────────────
//
// Valid transitions:
//   pending        → under_review
//   under_review   → approved | rejected | flagged
//   flagged        → approved | rejected            (legal resolves)
//   approved       → published
//   rejected       → (terminal — no further transitions)
//   published      → (terminal — contact admin to unpublish)

export const VALID_TRANSITIONS: Record<TestimonialStatus, TestimonialStatus[]> = {
  pending: ["under_review"],
  under_review: ["approved", "rejected", "flagged"],
  flagged: ["approved", "rejected"],
  approved: ["published"],
  rejected: [],
  published: [],
};

export function canTransition(from: TestimonialStatus, to: TestimonialStatus): boolean {
  return VALID_TRANSITIONS[from].includes(to);
}

// ─── Auto-decision Logic ─────────────────────────────────────────────────────

/**
 * Given a set of compliance check results, derive the recommended status.
 * The reviewer can override this recommendation.
 */
export function deriveRecommendedStatus(
  results: ComplianceCheckResult[],
  source: TestimonialSource,
): TestimonialStatus {
  const checks = COMPLIANCE_CHECKS.filter(
    (c) => !c.appliesTo || c.appliesTo.includes(source),
  );

  for (const check of checks) {
    const result = results.find((r) => r.checkId === check.id);
    if (!result || result.outcome === "na") continue;

    if (result.outcome === "fail") {
      if (check.autoRejectOnFail) return "rejected";
      if (check.escalateOnFail) return "flagged";
    }
    if (result.outcome === "needs_review") return "flagged";
  }

  const allApplicableChecked = checks.every((c) =>
    results.find((r) => r.checkId === c.id && r.outcome !== undefined),
  );

  return allApplicableChecked ? "approved" : "under_review";
}

// ─── Mock Submission Queue ────────────────────────────────────────────────────
// Seed data representing a realistic incoming review queue.

export const MOCK_QUEUE: TestimonialSubmission[] = [
  {
    id: "tsm-001",
    source: "researcher",
    submittedAt: "2026-05-29T14:22:00Z",
    submitterName: "Dr. A. Patel",
    submitterEmail: "a.patel@neuroendo-lab.edu",
    submitterAffiliation: "Neuroendocrinology Research Lab",
    verifiedOrderId: "NEX-2026-00412",
    rawQuote:
      "Cold-chain shipping is the real differentiator. Nexphoria sent GHRPs packed with gel packs, insulated liner, and my data logger read 2.8°C on arrival. That kind of temperature discipline is what professional research operations require.",
    productNames: ["CJC-1295 No DAC", "Ipamorelin", "GHRP-2"],
    overallRating: 5,
    categoryRatings: { purity: 5, packaging: 5, shipping: 5, coa: 4 },
    highlight: "Arrived at 2.8°C per data logger",
    status: "pending",
    complianceResults: [],
  },
  {
    id: "tsm-002",
    source: "influencer",
    submittedAt: "2026-05-29T09:05:00Z",
    submitterName: "Jordan K.",
    submitterEmail: "jordan@peptideresearchpodcast.com",
    submitterAffiliation: "Peptide Research Podcast",
    rawQuote:
      "I've been using BPC-157 for the past six months and my injury healed completely. I swear by this compound — every gym-goer should have it.",
    productNames: ["BPC-157"],
    overallRating: 5,
    status: "pending",
    complianceResults: [],
  },
  {
    id: "tsm-003",
    source: "researcher",
    submittedAt: "2026-05-28T16:45:00Z",
    submitterName: "Dr. F. Kowalski",
    submitterEmail: "f.kowalski@translational-ctr.org",
    submitterAffiliation: "Translational Research Center",
    verifiedOrderId: "NEX-2026-00389",
    rawQuote:
      "Most peptide suppliers list 99% purity but can't back it up with a verifiable COA. Nexphoria's documentation chain is airtight — MZ Biolabs COA, lot number on the vial, exact match in the certificate. That's the standard others should follow.",
    productNames: ["SS-31 50mg", "Thymosin Alpha-1 10mg"],
    overallRating: 5,
    categoryRatings: { purity: 5, packaging: 5, shipping: 4, coa: 5 },
    highlight: "MZ Biolabs COA — lot number verified",
    status: "under_review",
    assignedTo: "compliance-reviewer-1",
    complianceResults: [
      { checkId: "no_health_claim", outcome: "pass" },
      { checkId: "no_therapeutic_implication", outcome: "pass" },
      { checkId: "no_human_dosing", outcome: "pass" },
      { checkId: "research_context_clear", outcome: "pass" },
      { checkId: "author_verified", outcome: "pass", note: "Order NEX-2026-00389 confirmed" },
      { checkId: "no_false_competitor_claim", outcome: "needs_review", note: "Mentions 'others should follow' — ambiguous but non-specific. Legal to confirm." },
      { checkId: "no_availability_promise", outcome: "pass" },
    ],
  },
  {
    id: "tsm-004",
    source: "customer_review",
    submittedAt: "2026-05-27T11:30:00Z",
    submitterName: "M.K. (anonymous verified)",
    submitterEmail: "m.k-research@gmail.com",
    verifiedOrderId: "NEX-2026-00371",
    rawQuote:
      "Vials arrived cold, COA was clean, HPLC matched our in-house run within 0.4%. That's the tightest tolerance I've seen from a peptide supplier. Ordered again the same week.",
    productNames: ["BPC-157", "TB-500"],
    overallRating: 5,
    categoryRatings: { purity: 5, packaging: 5, shipping: 5, coa: 5 },
    highlight: "HPLC matched within 0.4%",
    status: "approved",
    assignedTo: "compliance-reviewer-1",
    reviewedAt: "2026-05-27T14:00:00Z",
    reviewerNote: "All checks pass. Research context is unambiguous (HPLC, COA). Author verified via order.",
    complianceResults: [
      { checkId: "no_health_claim", outcome: "pass" },
      { checkId: "no_therapeutic_implication", outcome: "pass" },
      { checkId: "no_human_dosing", outcome: "pass" },
      { checkId: "research_context_clear", outcome: "pass", note: "HPLC comparison confirms lab context" },
      { checkId: "author_verified", outcome: "pass", note: "Order NEX-2026-00371 confirmed" },
      { checkId: "no_false_competitor_claim", outcome: "pass" },
      { checkId: "no_availability_promise", outcome: "pass" },
    ],
  },
  {
    id: "tsm-005",
    source: "influencer",
    submittedAt: "2026-05-26T08:20:00Z",
    submitterName: "Casey L.",
    submitterEmail: "casey@longevitylabs.io",
    submitterAffiliation: "@longevitylabs (87k followers)",
    rawQuote:
      "Running an 8-week protocol with Epitalon and NAD+ from Nexphoria — tracking telomere markers with our lab partner. Early data is clean. COA transparency is best-in-class.",
    productNames: ["Epitalon", "NAD+"],
    overallRating: 5,
    status: "flagged",
    assignedTo: "compliance-reviewer-2",
    reviewedAt: "2026-05-27T10:00:00Z",
    reviewerNote: "FTC disclosure not confirmed in original submission — awaiting written disclosure. Also: 'protocol' language is borderline; legal to review 'tracking telomere markers' phrasing.",
    complianceResults: [
      { checkId: "no_health_claim", outcome: "pass" },
      { checkId: "no_therapeutic_implication", outcome: "needs_review", note: "'Protocol' and personal use language ambiguous — not explicit health claim but borderline." },
      { checkId: "no_human_dosing", outcome: "pass" },
      { checkId: "research_context_clear", outcome: "pass", note: "'lab partner' provides some research context" },
      { checkId: "author_verified", outcome: "pass", note: "Public account identity verified" },
      { checkId: "ftc_disclosure", outcome: "fail", note: "No written disclosure of free product / affiliate arrangement on file." },
      { checkId: "no_false_competitor_claim", outcome: "pass" },
      { checkId: "no_availability_promise", outcome: "pass" },
    ],
  },
  {
    id: "tsm-006",
    source: "customer_review",
    submittedAt: "2026-05-25T19:00:00Z",
    submitterName: "R.W.",
    submitterEmail: "rw@uni-consortium.edu",
    submitterAffiliation: "University Research Consortium",
    verifiedOrderId: "NEX-2026-00340",
    rawQuote:
      "Nexphoria's consistency across three separate orders has been remarkable. Same lot-to-lot quality, same documentation format, same turnaround. That predictability is worth paying for.",
    productNames: ["BPC-157", "Selank", "Semax"],
    overallRating: 5,
    categoryRatings: { purity: 5, packaging: 5, shipping: 4, coa: 5 },
    highlight: "Consistent quality across 3 orders",
    status: "published",
    assignedTo: "compliance-reviewer-1",
    reviewedAt: "2026-05-26T09:00:00Z",
    reviewerNote: "Clean. Neutral comparative review from a verified institutional researcher. No compliance concerns.",
    complianceResults: [
      { checkId: "no_health_claim", outcome: "pass" },
      { checkId: "no_therapeutic_implication", outcome: "pass" },
      { checkId: "no_human_dosing", outcome: "pass" },
      { checkId: "research_context_clear", outcome: "pass" },
      { checkId: "author_verified", outcome: "pass", note: "Order NEX-2026-00340 confirmed, .edu email" },
      { checkId: "no_false_competitor_claim", outcome: "pass" },
      { checkId: "no_availability_promise", outcome: "pass" },
    ],
    publishedTo: ["reviews_page"],
    publishedAt: "2026-05-26T11:00:00Z",
  },
  {
    id: "tsm-007",
    source: "influencer",
    submittedAt: "2026-05-24T12:00:00Z",
    submitterName: "Jordan K.",
    submitterEmail: "jordan@peptideresearchpodcast.com",
    submitterAffiliation: "Peptide Research Podcast",
    rawQuote:
      "I've been using BPC-157 for the past six months and my injury healed completely. Every gym-goer should use this compound.",
    productNames: ["BPC-157"],
    overallRating: 5,
    status: "rejected",
    assignedTo: "compliance-reviewer-2",
    reviewedAt: "2026-05-24T15:00:00Z",
    reviewerNote: "Critical failures: explicit personal health outcome ('my injury healed completely') and implied non-research use ('every gym-goer'). Auto-rejected. Submitter notified.",
    rejectionReason: "no_health_claim",
    complianceResults: [
      { checkId: "no_health_claim", outcome: "fail", note: "'My injury healed completely' is a direct personal health outcome claim." },
      { checkId: "no_therapeutic_implication", outcome: "fail", note: "'Every gym-goer should use this' implies therapeutic/personal use." },
      { checkId: "no_human_dosing", outcome: "pass" },
      { checkId: "research_context_clear", outcome: "fail", note: "No research context whatsoever." },
      { checkId: "author_verified", outcome: "na", note: "Review terminated before verification due to critical failures." },
      { checkId: "ftc_disclosure", outcome: "na" },
      { checkId: "no_false_competitor_claim", outcome: "pass" },
      { checkId: "no_availability_promise", outcome: "pass" },
    ],
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

export const STATUS_LABELS: Record<TestimonialStatus, string> = {
  pending: "Pending",
  under_review: "Under Review",
  approved: "Approved",
  rejected: "Rejected",
  flagged: "Flagged",
  published: "Published",
};

export const STATUS_COLORS: Record<TestimonialStatus, { bg: string; text: string; border: string }> = {
  pending:      { bg: "#F5F5F5",  text: "#666",    border: "#E0E0E0" },
  under_review: { bg: "#EFF6FF",  text: "#2563EB", border: "#BFDBFE" },
  approved:     { bg: "#F0FDF4",  text: "#16A34A", border: "#BBF7D0" },
  rejected:     { bg: "#FEF2F2",  text: "#DC2626", border: "#FECACA" },
  flagged:      { bg: "#FFFBEB",  text: "#D97706", border: "#FDE68A" },
  published:    { bg: "#F0F9FF",  text: "#0284C7", border: "#BAE6FD" },
};

export const OUTCOME_COLORS: Record<ComplianceOutcome, { icon: string; text: string }> = {
  pass:         { icon: "✓", text: "#16A34A" },
  fail:         { icon: "✗", text: "#DC2626" },
  na:           { icon: "—", text: "#9CA3AF" },
  needs_review: { icon: "?", text: "#D97706" },
};

export const SOURCE_LABELS: Record<TestimonialSource, string> = {
  customer_review: "Customer Review",
  influencer: "Influencer",
  researcher: "Researcher",
  press: "Press",
};

/** Checks applicable to a given source */
export function checksForSource(source: TestimonialSource): ComplianceCheck[] {
  return COMPLIANCE_CHECKS.filter((c) => !c.appliesTo || c.appliesTo.includes(source));
}

/** Count of pending + under_review items */
export function queueDepth(queue: TestimonialSubmission[]): number {
  return queue.filter((s) => s.status === "pending" || s.status === "under_review").length;
}
