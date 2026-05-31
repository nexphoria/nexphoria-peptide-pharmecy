"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AgeVerificationModal() {
  const [showModal, setShowModal] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    const EXPIRY_MS = 86400000; // 24 hours
    let verified = false;
    try {
      const ts = localStorage.getItem("age_verified");
      if (ts && Date.now() - parseInt(ts, 10) < EXPIRY_MS) {
        verified = true;
      }
    } catch {
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
    if (!confirmed) return;
    try {
      localStorage.setItem("age_verified", Date.now().toString());
    } catch {
      try {
        sessionStorage.setItem("age_verified_session", "true");
      } catch {
        // ignore
      }
    }
    setShowModal(false);
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
        style={{ backgroundColor: "rgba(26, 26, 26, 0.92)" }}
      >
        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="relative w-full max-w-sm rounded-xl border p-8"
          style={{
            backgroundColor: "#F9F9F9",
            borderColor: "#E5E5E5",
          }}
        >
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 500" className="h-10 w-10" aria-label="Nexphoria">
              <g>
                <circle fill="#B8A44C" cx="129.698" cy="380.792" r="71.864" />
                <path
                  fill="#B8A44C"
                  d="M519.834,328.405c-17.864-16.774-41.141-22.533-62.628-18.55c-18.724,3.471-38.055-0.118-53.17-11.702l-6.86-5.257c-15.349-11.763-23.999-29.746-25.629-49.016c-1.685-19.927-11.623-39.039-29.014-51.808c-16.815-12.346-37.204-16.273-56.18-12.583c-18.19,3.537-37.03,0.099-51.739-11.173l-7.496-5.744c-15.472-11.857-24.203-29.973-25.892-49.393c-1.792-20.603-12.408-40.363-31.14-53.138c-29.987-20.451-71.799-14.725-95.228,12.998c-26.524,31.385-21.393,78.205,10.727,103.18c17.127,13.317,38.364,17.629,58.085,13.695c18.6-3.71,37.886,0.889,52.94,12.426l6.216,4.764c15.349,11.763,23.999,29.746,25.629,49.016c1.685,19.927,11.623,39.039,29.014,51.809c16.815,12.346,37.204,16.273,56.18,12.583c18.19-3.537,37.03-0.099,51.739,11.173l7.704,5.904c14.677,11.248,24.521,28.127,25.467,46.594c1.094,21.348,11.653,41.983,30.521,55.197c34.727,24.32,83.49,13.65,104.428-24.632C548.956,386.504,543.301,350.44,519.834,328.405z"
                />
                <circle fill="#B8A44C" cx="470.305" cy="119.208" r="71.864" />
              </g>
            </svg>
          </div>

          <p
            className="text-[10px] uppercase tracking-widest text-center font-semibold mb-2"
            style={{ color: "#7A6B2A" }}
          >
            Nexphoria
          </p>

          {/* Title */}
          <h2
            className="mb-3 text-center text-2xl font-light tracking-tight"
            style={{
              color: "#1A1A1A",
              fontFamily: "var(--font-cormorant), Georgia, serif",
              letterSpacing: "-0.01em"
            }}
          >
            Research Access Only
          </h2>

          {/* Message */}
          <p
            className="mb-6 text-center text-sm leading-relaxed"
            style={{ color: "#666" }}
          >
            This site contains research compounds sold exclusively for laboratory and analytical use.
          </p>

          {/* Single checkbox */}
          <label className="flex cursor-pointer items-start gap-3 mb-6">
            <input
              type="checkbox"
              checked={confirmed}
              onChange={(e) => setConfirmed(e.target.checked)}
              className="mt-0.5 h-5 w-5 flex-shrink-0 cursor-pointer rounded border-2 transition-all"
              style={{
                borderColor: confirmed ? "#B8A44C" : "#D0D0D0",
                backgroundColor: confirmed ? "#B8A44C" : "transparent",
                accentColor: "#7A6B2A",
              }}
            />
            <span
              className="text-sm leading-relaxed"
              style={{ color: "#1A1A1A" }}
            >
              I confirm I am 21 years or older and a qualified researcher
            </span>
          </label>

          {/* Buttons */}
          <div className="flex flex-col gap-4">
            <button
              onClick={handleEnter}
              disabled={!confirmed}
              className="flex h-12 items-center justify-center rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300"
              style={{
                backgroundColor: confirmed ? "#1A1A1A" : "transparent",
                color: confirmed ? "#B8A44C" : "#CCC",
                border: confirmed ? "1px solid #1A1A1A" : "1px solid #E5E5E5",
                cursor: confirmed ? "pointer" : "not-allowed",
                letterSpacing: "0.16em",
              }}
              onMouseEnter={(e) => {
                if (confirmed) {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#333";
                }
              }}
              onMouseLeave={(e) => {
                if (confirmed) {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#1A1A1A";
                }
              }}
            >
              Enter Site
            </button>
            <button
              onClick={handleDecline}
              className="text-center transition-colors"
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#737373",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontWeight: 500,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#666")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#AAA")
              }
            >
              Exit Site
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
