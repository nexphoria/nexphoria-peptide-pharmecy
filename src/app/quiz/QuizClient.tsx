"use client";

import { useState, useCallback } from "react";
import Link from "next/link";

// ─── Types ──────────────────────────────────────────────────────────────────

type Answer = string;

type Answers = {
  goal?: string;
  age?: string;
  gender?: string;
  health?: string;
  experience?: string;
  medications?: string;
  bloodwork?: string;
  budget?: string;
  referral?: string;
};

// ─── Quiz Data ───────────────────────────────────────────────────────────────

const QUESTIONS = [
  {
    id: "goal",
    question: "What's your primary goal?",
    subtext: "We'll tailor your protocol around this.",
    columns: 2,
    options: [
      { id: "weight-loss", label: "Weight Loss", icon: "◎" },
      { id: "recovery", label: "Recovery & Healing", icon: "◈" },
      { id: "skin-hair", label: "Skin & Hair", icon: "◇" },
      { id: "cognitive", label: "Cognitive Performance", icon: "◆" },
      { id: "sleep-growth", label: "Sleep & Growth", icon: "○" },
      { id: "hormonal", label: "Hormonal Balance", icon: "◉" },
    ],
  },
  {
    id: "age",
    question: "How old are you?",
    subtext: "Age helps us calibrate dosing and compound selection.",
    columns: 2,
    options: [
      { id: "25-34", label: "25–34" },
      { id: "35-44", label: "35–44" },
      { id: "45-54", label: "45–54" },
      { id: "55+", label: "55+" },
    ],
  },
  {
    id: "gender",
    question: "Which best describes you?",
    subtext: "Hormonal profiles vary — this helps personalize your stack.",
    columns: 3,
    options: [
      { id: "male", label: "Male" },
      { id: "female", label: "Female" },
      { id: "other", label: "Other" },
    ],
  },
  {
    id: "health",
    question: "Current health status?",
    subtext: "Be honest — your physician needs accurate context.",
    columns: 2,
    options: [
      { id: "healthy", label: "Generally healthy" },
      { id: "managing", label: "Managing a condition" },
      { id: "post-injury", label: "Post-injury / surgery" },
      { id: "athlete", label: "Athlete or high performer" },
    ],
  },
  {
    id: "experience",
    question: "Have you tried peptide therapy before?",
    subtext: "Experience level shapes the protocol we design for you.",
    columns: 3,
    options: [
      { id: "yes", label: "Yes" },
      { id: "no", label: "No" },
      { id: "not-sure", label: "Not sure" },
    ],
  },
  {
    id: "medications",
    question: "Any current medications?",
    subtext: "Our physicians check for interactions before prescribing.",
    columns: 3,
    options: [
      { id: "several", label: "Yes, several" },
      { id: "one-two", label: "One or two" },
      { id: "none", label: "No medications" },
    ],
  },
  {
    id: "bloodwork",
    question: "How important is bloodwork tracking to you?",
    subtext: "Lab monitoring is available with all Nexphoria protocols.",
    columns: 3,
    options: [
      { id: "critical", label: "Critical" },
      { id: "somewhat", label: "Somewhat important" },
      { id: "not-important", label: "Not important" },
    ],
  },
  {
    id: "budget",
    question: "What's your monthly budget for optimization?",
    subtext: "We have protocols at every investment level.",
    columns: 2,
    options: [
      { id: "under-200", label: "Under $200" },
      { id: "200-400", label: "$200–$400" },
      { id: "400-600", label: "$400–$600" },
      { id: "600-plus", label: "$600+" },
    ],
  },
  {
    id: "referral",
    question: "How did you hear about us?",
    subtext: "Helps us understand where our community comes from.",
    columns: 2,
    options: [
      { id: "social", label: "Social media" },
      { id: "friend", label: "Friend referral" },
      { id: "doctor", label: "Doctor recommendation" },
      { id: "search", label: "Search" },
      { id: "other", label: "Other" },
    ],
  },
];

const TOTAL_STEPS = QUESTIONS.length; // 9 question steps + 1 results = 10

// ─── Stack Recommendation Engine ─────────────────────────────────────────────

type StackRec = {
  name: string;
  tagline: string;
  compounds: string[];
  description: string;
  timeframe: string;
  priceRange: string;
};

function getRecommendation(answers: Answers): StackRec {
  const { goal, budget } = answers;
  const premium = budget === "600-plus" || budget === "400-600";

  switch (goal) {
    case "weight-loss":
      return {
        name: premium ? "Metabolic Prime+" : "Metabolic Prime",
        tagline: "GLP-1 Weight Optimization",
        compounds: premium
          ? ["Tirzepatide", "NAD+", "GHK-Cu"]
          : ["Semaglutide", "NAD+"],
        description:
          "A physician-supervised GLP-1 protocol clinically shown to reduce body weight 14–21% over 16–24 weeks, combined with metabolic support compounds.",
        timeframe: "16–24 weeks",
        priceRange: premium ? "$420–$620/mo" : "$220–$380/mo",
      };

    case "recovery":
      return {
        name: "Wolverine Recovery",
        tagline: "Full-Spectrum Tissue Repair",
        compounds:
          premium
            ? ["BPC-157", "TB-500", "GHK-Cu", "Sermorelin"]
            : ["BPC-157", "TB-500"],
        description:
          "A triple-phase recovery stack targeting anti-inflammatory, angiogenic, and ECM remodeling pathways — the most researched peptide combination for accelerated healing.",
        timeframe: "8–16 weeks",
        priceRange: premium ? "$380–$520/mo" : "$180–$280/mo",
      };

    case "skin-hair":
      return {
        name: "Glow Protocol",
        tagline: "Skin, Hair & Collagen Restoration",
        compounds: premium
          ? ["GHK-Cu", "Epitalon", "NAD+", "BPC-157"]
          : ["GHK-Cu", "Epitalon"],
        description:
          "GHK-Cu activates 4,000+ genes involved in collagen synthesis and ECM remodeling. Paired with Epitalon for telomere-level rejuvenation.",
        timeframe: "12–20 weeks",
        priceRange: premium ? "$340–$480/mo" : "$180–$260/mo",
      };

    case "cognitive":
      return {
        name: "Clarity Stack",
        tagline: "Cognitive & Neural Optimization",
        compounds: premium
          ? ["Semax", "Selank", "NAD+", "Epitalon"]
          : ["Semax", "NAD+"],
        description:
          "Neuropeptide compounds that cross the blood-brain barrier, modulating BDNF, dopamine, and serotonin pathways for focus, recall, and mood stability.",
        timeframe: "8–12 weeks",
        priceRange: premium ? "$320–$460/mo" : "$180–$260/mo",
      };

    case "sleep-growth":
      return {
        name: "Growth Restore",
        tagline: "GH Axis & Deep Sleep Optimization",
        compounds: premium
          ? ["CJC-1295 / Ipamorelin", "Sermorelin", "MK-677", "NAD+"]
          : ["CJC-1295 / Ipamorelin", "MK-677"],
        description:
          "A GHRH + GHRP combination producing 8–12× greater GH pulse amplitude vs either compound alone — restoring youthful sleep architecture and lean mass.",
        timeframe: "12–24 weeks",
        priceRange: premium ? "$360–$500/mo" : "$160–$280/mo",
      };

    case "hormonal":
    default:
      return {
        name: "Hormonal Restore",
        tagline: "Endocrine Balance Protocol",
        compounds: premium
          ? ["Sermorelin", "MOTS-c", "NAD+", "Epitalon"]
          : ["Sermorelin", "NAD+"],
        description:
          "A physician-designed protocol addressing the HPA and HPG axes — restoring IGF-1, insulin sensitivity, and cellular energy production.",
        timeframe: "16–24 weeks",
        priceRange: premium ? "$380–$540/mo" : "$220–$340/mo",
      };
  }
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function QuizClient() {
  const [step, setStep] = useState(0); // 0 = Q1, 9 = Results
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const [isAnimating, setIsAnimating] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const [pending, setPending] = useState<Answer | null>(null); // selected but not yet continued
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = QUESTIONS[step];
  const progress = showResults
    ? 100
    : Math.round(((step + 1) / (TOTAL_STEPS + 1)) * 100);

  const selectedForStep = (): string | undefined => {
    if (!currentQuestion) return undefined;
    return (answers as Record<string, string>)[currentQuestion.id];
  };

  const handleSelect = useCallback((optionId: string) => {
    setPending(optionId);
  }, []);

  const animateTransition = useCallback(
    (dir: "forward" | "back", after: () => void) => {
      if (isAnimating) return;
      setDirection(dir);
      setIsAnimating(true);
      setTimeout(() => {
        after();
        setIsAnimating(false);
        setPending(null);
      }, 320);
    },
    [isAnimating]
  );

  const handleContinue = useCallback(() => {
    if (!pending && !selectedForStep()) return;
    const value = pending ?? selectedForStep()!;

    const newAnswers = {
      ...answers,
      [currentQuestion.id]: value,
    } as Answers;
    setAnswers(newAnswers);

    if (step >= QUESTIONS.length - 1) {
      animateTransition("forward", () => setShowResults(true));
    } else {
      animateTransition("forward", () => {
        setStep((s) => s + 1);
      });
    }
  }, [pending, answers, currentQuestion, step, animateTransition, selectedForStep]);

  const handleBack = useCallback(() => {
    if (showResults) {
      animateTransition("back", () => {
        setShowResults(false);
        setStep(QUESTIONS.length - 1);
      });
      return;
    }
    if (step === 0) return;
    animateTransition("back", () => setStep((s) => s - 1));
  }, [showResults, step, animateTransition]);

  const activeSelection = pending ?? selectedForStep();
  const canContinue = !!activeSelection;

  const rec = showResults ? getRecommendation(answers) : null;

  return (
    <div
      className="quiz-shell"
      style={{
        position: "fixed",
        inset: 0,
        background: "#FAF7F2",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        zIndex: 50,
      }}
    >
      {/* ── Progress Bar ── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "#EDE8E0",
          zIndex: 10,
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            background: "#B8A44C",
            transition: "width 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </div>

      {/* ── Top Chrome ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 28px 0",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Back */}
        <button
          onClick={handleBack}
          disabled={step === 0 && !showResults}
          style={{
            background: "none",
            border: "none",
            fontSize: "14px",
            fontFamily: "var(--font-inter, sans-serif)",
            color: step === 0 && !showResults ? "transparent" : "#888",
            cursor: step === 0 && !showResults ? "default" : "pointer",
            letterSpacing: "0.02em",
            padding: "4px 0",
            transition: "color 0.2s",
          }}
        >
          ← Back
        </button>

        {/* Logo */}
        <span
          style={{
            fontFamily: "var(--font-cormorant, Georgia, serif)",
            fontSize: "18px",
            fontWeight: 400,
            letterSpacing: "0.12em",
            color: "#1A1A1A",
            textTransform: "uppercase",
          }}
        >
          Nexphoria
        </span>

        {/* Step counter */}
        <span
          style={{
            fontSize: "13px",
            fontFamily: "var(--font-inter, sans-serif)",
            color: "#AAA",
            letterSpacing: "0.03em",
          }}
        >
          {showResults ? "Results" : `${step + 1} / ${TOTAL_STEPS}`}
        </span>
      </div>

      {/* ── Slide Area ── */}
      <div
        style={{
          flex: 1,
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className={`quiz-slide ${isAnimating ? (direction === "forward" ? "slide-exit-left" : "slide-exit-right") : "slide-enter"}`}
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            padding: "0 28px",
            maxWidth: "680px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          {showResults && rec ? (
            <ResultsScreen rec={rec} />
          ) : (
            <QuestionScreen
              question={currentQuestion}
              activeSelection={activeSelection}
              onSelect={handleSelect}
            />
          )}
        </div>
      </div>

      {/* ── Bottom Chrome ── */}
      <div
        style={{
          padding: "16px 28px 32px",
          maxWidth: "680px",
          margin: "0 auto",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        {/* Sign in link */}
        <Link
          href="/account/login"
          style={{
            fontSize: "13px",
            fontFamily: "var(--font-inter, sans-serif)",
            color: "#999",
            textDecoration: "none",
            letterSpacing: "0.02em",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          Already have an account?{" "}
          <span style={{ color: "#555", textDecoration: "underline" }}>
            Sign in
          </span>
        </Link>

        {/* Continue button */}
        {!showResults && (
          <button
            onClick={handleContinue}
            disabled={!canContinue}
            style={{
              background: canContinue ? "#1A1A1A" : "#D4D0C8",
              color: canContinue ? "#FAF7F2" : "#AAA",
              border: "none",
              borderRadius: "999px",
              padding: "14px 40px",
              fontSize: "15px",
              fontFamily: "var(--font-inter, sans-serif)",
              fontWeight: 500,
              letterSpacing: "0.04em",
              cursor: canContinue ? "pointer" : "not-allowed",
              transition:
                "background 0.2s, color 0.2s, transform 0.15s",
              transform: canContinue ? "scale(1)" : "scale(0.98)",
              flexShrink: 0,
            }}
          >
            Continue
          </button>
        )}

        {showResults && (
          <a
            href="/intake"
            style={{
              background: "#B8A44C",
              color: "#FAF7F2",
              border: "none",
              borderRadius: "999px",
              padding: "14px 40px",
              fontSize: "15px",
              fontFamily: "var(--font-inter, sans-serif)",
              fontWeight: 500,
              letterSpacing: "0.04em",
              cursor: "pointer",
              textDecoration: "none",
              display: "inline-block",
              flexShrink: 0,
            }}
          >
            Start Physician Assessment →
          </a>
        )}
      </div>

      {/* ── CSS ── */}
      <style>{`
        .quiz-slide {
          will-change: transform, opacity;
        }
        .slide-enter {
          animation: slideIn 0.32s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
        .slide-exit-left {
          animation: slideOutLeft 0.32s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
        .slide-exit-right {
          animation: slideOutRight 0.32s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0);    }
        }
        @keyframes slideOutLeft {
          from { opacity: 1; transform: translateX(0);     }
          to   { opacity: 0; transform: translateX(-40px); }
        }
        @keyframes slideOutRight {
          from { opacity: 1; transform: translateX(0);    }
          to   { opacity: 0; transform: translateX(40px); }
        }
        .answer-card {
          transition: border-color 0.18s, background 0.18s, transform 0.12s;
        }
        .answer-card:hover {
          border-color: #B8A44C !important;
          transform: translateY(-1px);
        }
        .answer-card:active {
          transform: translateY(0) scale(0.99);
        }
      `}</style>
    </div>
  );
}

// ─── Question Screen ──────────────────────────────────────────────────────────

function QuestionScreen({
  question,
  activeSelection,
  onSelect,
}: {
  question: (typeof QUESTIONS)[0];
  activeSelection?: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        paddingTop: "48px",
        paddingBottom: "8px",
      }}
    >
      {/* Question text */}
      <h1
        style={{
          fontFamily: "var(--font-cormorant, Georgia, serif)",
          fontSize: "clamp(28px, 5vw, 42px)",
          fontWeight: 300,
          lineHeight: 1.2,
          color: "#1A1A1A",
          margin: "0 0 10px",
          letterSpacing: "-0.01em",
        }}
      >
        {question.question}
      </h1>

      {question.subtext && (
        <p
          style={{
            fontFamily: "var(--font-inter, sans-serif)",
            fontSize: "15px",
            color: "#888",
            margin: "0 0 36px",
            fontWeight: 400,
            letterSpacing: "0.01em",
          }}
        >
          {question.subtext}
        </p>
      )}

      {/* Cards grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${question.columns}, 1fr)`,
          gap: "12px",
          flex: 1,
          alignContent: "start",
        }}
      >
        {question.options.map((opt) => {
          const isSelected = activeSelection === opt.id;
          return (
            <button
              key={opt.id}
              className="answer-card"
              onClick={() => onSelect(opt.id)}
              style={{
                background: isSelected ? "#1A1A1A" : "#FFFFFF",
                border: `1.5px solid ${isSelected ? "#1A1A1A" : "#E2DDD4"}`,
                borderRadius: "14px",
                padding: "20px 18px",
                cursor: "pointer",
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                minHeight: "80px",
              }}
            >
              {opt.icon && (
                <span
                  style={{
                    fontSize: "18px",
                    color: isSelected ? "#B8A44C" : "#C4BFB3",
                    lineHeight: 1,
                  }}
                >
                  {opt.icon}
                </span>
              )}
              <span
                style={{
                  fontFamily: "var(--font-inter, sans-serif)",
                  fontSize: "15px",
                  fontWeight: 500,
                  color: isSelected ? "#FAF7F2" : "#1A1A1A",
                  letterSpacing: "0.01em",
                  lineHeight: 1.3,
                }}
              >
                {opt.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Results Screen ───────────────────────────────────────────────────────────

function ResultsScreen({ rec }: { rec: StackRec }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        paddingTop: "48px",
        paddingBottom: "8px",
      }}
    >
      {/* Eyebrow */}
      <p
        style={{
          fontFamily: "var(--font-inter, sans-serif)",
          fontSize: "12px",
          fontWeight: 600,
          letterSpacing: "0.14em",
          color: "#B8A44C",
          textTransform: "uppercase",
          margin: "0 0 14px",
        }}
      >
        Your Personalized Protocol
      </p>

      {/* Headline */}
      <h1
        style={{
          fontFamily: "var(--font-cormorant, Georgia, serif)",
          fontSize: "clamp(30px, 5.5vw, 46px)",
          fontWeight: 300,
          lineHeight: 1.15,
          color: "#1A1A1A",
          margin: "0 0 6px",
          letterSpacing: "-0.01em",
        }}
      >
        We recommend the{" "}
        <span style={{ fontWeight: 600 }}>{rec.name}</span> protocol
      </h1>

      <p
        style={{
          fontFamily: "var(--font-cormorant, Georgia, serif)",
          fontSize: "20px",
          fontWeight: 300,
          color: "#888",
          margin: "0 0 32px",
          letterSpacing: "0.02em",
          fontStyle: "italic",
        }}
      >
        {rec.tagline}
      </p>

      {/* Protocol card */}
      <div
        style={{
          background: "#FFFFFF",
          border: "1.5px solid #E2DDD4",
          borderRadius: "18px",
          padding: "28px 24px",
          marginBottom: "20px",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-inter, sans-serif)",
            fontSize: "14px",
            color: "#555",
            lineHeight: 1.65,
            margin: "0 0 24px",
          }}
        >
          {rec.description}
        </p>

        {/* Compounds */}
        <div style={{ marginBottom: "20px" }}>
          <p
            style={{
              fontFamily: "var(--font-inter, sans-serif)",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: "#AAA",
              textTransform: "uppercase",
              margin: "0 0 10px",
            }}
          >
            Protocol Compounds
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {rec.compounds.map((c) => (
              <span
                key={c}
                style={{
                  background: "#FAF7F2",
                  border: "1px solid #E2DDD4",
                  borderRadius: "999px",
                  padding: "5px 14px",
                  fontSize: "13px",
                  fontFamily: "var(--font-inter, sans-serif)",
                  color: "#1A1A1A",
                  fontWeight: 500,
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Meta row */}
        <div
          style={{
            display: "flex",
            gap: "32px",
            paddingTop: "18px",
            borderTop: "1px solid #F0EBE3",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-inter, sans-serif)",
                fontSize: "11px",
                letterSpacing: "0.10em",
                color: "#AAA",
                textTransform: "uppercase",
                margin: "0 0 4px",
              }}
            >
              Timeframe
            </p>
            <p
              style={{
                fontFamily: "var(--font-inter, sans-serif)",
                fontSize: "14px",
                fontWeight: 500,
                color: "#1A1A1A",
                margin: 0,
              }}
            >
              {rec.timeframe}
            </p>
          </div>
          <div>
            <p
              style={{
                fontFamily: "var(--font-inter, sans-serif)",
                fontSize: "11px",
                letterSpacing: "0.10em",
                color: "#AAA",
                textTransform: "uppercase",
                margin: "0 0 4px",
              }}
            >
              Est. Monthly Cost
            </p>
            <p
              style={{
                fontFamily: "var(--font-inter, sans-serif)",
                fontSize: "14px",
                fontWeight: 500,
                color: "#1A1A1A",
                margin: 0,
              }}
            >
              {rec.priceRange}
            </p>
          </div>
        </div>
      </div>

      {/* Physician note */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "12px",
          padding: "16px 18px",
          background: "#F5F0E8",
          borderRadius: "12px",
          marginBottom: "8px",
        }}
      >
        <span style={{ fontSize: "18px", lineHeight: 1.2 }}>◆</span>
        <p
          style={{
            fontFamily: "var(--font-inter, sans-serif)",
            fontSize: "13px",
            color: "#666",
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          A board-certified physician will review your answers and confirm or
          adjust this protocol before anything is prescribed. Your safety is our
          first priority.
        </p>
      </div>
    </div>
  );
}

