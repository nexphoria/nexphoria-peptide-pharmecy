"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield } from "lucide-react";

export default function AgeVerificationModal() {
  const [showModal, setShowModal] = useState(false);
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [researchConfirmed, setResearchConfirmed] = useState(false);

  useEffect(() => {
    const EXPIRY_MS = 86400000; // 24 hours
    let verified = false;
    try {
      const ts = localStorage.getItem("age_verified");
      if (ts && Date.now() - parseInt(ts, 10) < EXPIRY_MS) {
        verified = true;
      }
    } catch {
      // localStorage unavailable — try sessionStorage
      try {
        verified = sessionStorage.getItem("age_verified_session") === "true";
      } catch {
        // both unavailable — show modal
      }
    }
    if (!verified) {
      setShowModal(true);
    }
  }, []);

  const handleEnter = () => {
    if (ageConfirmed && researchConfirmed) {
      try {
        localStorage.setItem("age_verified", Date.now().toString());
      } catch {
        // localStorage unavailable — fall back to sessionStorage
        try {
          sessionStorage.setItem("age_verified_session", "true");
        } catch {
          // ignore — modal closes regardless
        }
      }
      setShowModal(false);
    }
  };

  const handleDecline = () => {
    window.location.href = "https://google.com";
  };

  if (!showModal) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.92)" }}
      >
        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="relative w-full max-w-md rounded-xl border p-8"
          style={{
            backgroundColor: "#111110",
            borderColor: "rgba(168, 201, 127, 0.2)",
          }}
        >
          {/* Icon */}
          <div className="mb-6 flex justify-center">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-full"
              style={{
                backgroundColor: "rgba(168, 201, 127, 0.12)",
                border: "1px solid rgba(168, 201, 127, 0.3)",
              }}
            >
              <Shield className="h-8 w-8" strokeWidth={1.2} style={{ color: "#C9A24B" }} />
            </div>
          </div>

          {/* Title */}
          <h2
            className="mb-3 text-center text-2xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-display)", color: "#FDFCF8" }}
          >
            Age Verification Required
          </h2>

          {/* Message */}
          <p
            className="mb-6 text-center text-sm leading-relaxed"
            style={{ color: "rgba(253, 252, 248, 0.7)" }}
          >
            You must be 21 years or older and a qualified researcher to access
            this site.
          </p>

          {/* Checkboxes */}
          <div className="mb-6 space-y-4">
            {/* Age checkbox */}
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={ageConfirmed}
                onChange={(e) => setAgeConfirmed(e.target.checked)}
                className="mt-0.5 h-5 w-5 flex-shrink-0 cursor-pointer rounded border-2 transition-all"
                style={{
                  borderColor: ageConfirmed ? "#A8C97F" : "rgba(253, 252, 248, 0.2)",
                  backgroundColor: ageConfirmed ? "#A8C97F" : "transparent",
                  accentColor: "#A8C97F",
                }}
              />
              <span
                className="text-sm leading-relaxed"
                style={{ color: "rgba(253, 252, 248, 0.85)" }}
              >
                I confirm I am 21 years of age or older
              </span>
            </label>

            {/* Research purposes checkbox */}
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={researchConfirmed}
                onChange={(e) => setResearchConfirmed(e.target.checked)}
                className="mt-0.5 h-5 w-5 flex-shrink-0 cursor-pointer rounded border-2 transition-all"
                style={{
                  borderColor: researchConfirmed
                    ? "#A8C97F"
                    : "rgba(253, 252, 248, 0.2)",
                  backgroundColor: researchConfirmed ? "#A8C97F" : "transparent",
                  accentColor: "#A8C97F",
                }}
              />
              <span
                className="text-sm leading-relaxed"
                style={{ color: "rgba(253, 252, 248, 0.85)" }}
              >
                I understand all products are sold for research purposes only
                and are not intended for human consumption
              </span>
            </label>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <button
              onClick={handleEnter}
              disabled={!ageConfirmed || !researchConfirmed}
              className="flex h-12 items-center justify-center rounded-lg text-sm font-semibold uppercase tracking-wider transition-all duration-200"
              style={{
                backgroundColor:
                  ageConfirmed && researchConfirmed ? "#A8C97F" : "transparent",
                color:
                  ageConfirmed && researchConfirmed ? "#0A0A08" : "rgba(253,252,248,0.35)",
                border: ageConfirmed && researchConfirmed ? "none" : "1px solid rgba(253,252,248,0.12)",
                cursor:
                  ageConfirmed && researchConfirmed ? "pointer" : "default",
                letterSpacing: "0.18em",
              }}
            >
              {ageConfirmed && researchConfirmed ? "Enter Site →" : "Confirm above to continue"}
            </button>
            <button
              onClick={handleDecline}
              className="text-sm transition-colors"
              style={{ color: "rgba(253, 252, 248, 0.5)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "rgba(253, 252, 248, 0.8)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(253, 252, 248, 0.5)")
              }
            >
              Exit Site
            </button>
          </div>

          {/* Footer note */}
          <p
            className="mt-6 text-center text-xs"
            style={{ color: "rgba(253, 252, 248, 0.4)" }}
          >
            By entering, you confirm you meet all legal requirements to
            purchase research compounds in your jurisdiction.
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
