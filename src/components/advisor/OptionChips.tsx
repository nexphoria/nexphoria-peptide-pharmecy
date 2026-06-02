"use client";

import { motion } from "framer-motion";
import type { StepOption } from "@/lib/advisor/questions";

type OptionChipsProps = {
  options: StepOption[];
  onSelect: (option: StepOption) => void;
};

// Tappable answer chips presented under the latest advisor question.
// 44px+ touch targets, gold hover, staggered entrance.
export default function OptionChips({ options, onSelect }: OptionChipsProps) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.05 } },
      }}
      className="flex flex-col gap-2.5 pl-1"
    >
      {options.map((option) => (
        <motion.button
          key={option.id}
          type="button"
          variants={{
            hidden: { opacity: 0, y: 8 },
            show: { opacity: 1, y: 0 },
          }}
          onClick={() => onSelect(option)}
          whileTap={{ scale: 0.98 }}
          className="group flex items-center justify-between text-left rounded-xl px-4 py-3 transition-colors duration-200"
          style={{
            minHeight: "44px",
            backgroundColor: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(184,164,76,0.25)",
            color: "#F4F1E8",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(184,164,76,0.12)";
            e.currentTarget.style.borderColor = "#B8A44C";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)";
            e.currentTarget.style.borderColor = "rgba(184,164,76,0.25)";
          }}
        >
          <span className="flex flex-col">
            <span className="text-[14px] font-medium">{option.label}</span>
            {option.sublabel && (
              <span className="text-[12px] mt-0.5" style={{ color: "#9a948a" }}>
                {option.sublabel}
              </span>
            )}
          </span>
          <span
            className="ml-3 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ color: "#B8A44C" }}
            aria-hidden="true"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </motion.button>
      ))}
    </motion.div>
  );
}
