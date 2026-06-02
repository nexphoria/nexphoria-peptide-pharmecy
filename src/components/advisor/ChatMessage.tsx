"use client";

import { motion } from "framer-motion";

type ChatMessageProps = {
  role: "advisor" | "user";
  children: React.ReactNode;
};

// A single chat bubble. Advisor bubbles sit left on dark glass; user
// replies sit right with a gold fill.
export default function ChatMessage({ role, children }: ChatMessageProps) {
  const isAdvisor = role === "advisor";
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`flex ${isAdvisor ? "justify-start" : "justify-end"}`}
    >
      <div
        className={`max-w-[88%] sm:max-w-[78%] px-4 py-3 text-[15px] leading-relaxed ${
          isAdvisor ? "rounded-2xl rounded-tl-sm" : "rounded-2xl rounded-tr-sm"
        }`}
        style={
          isAdvisor
            ? {
                backgroundColor: "#1a1a1a",
                color: "#F4F1E8",
                border: "1px solid rgba(184,164,76,0.18)",
              }
            : { backgroundColor: "#B8A44C", color: "#0a0a0a", fontWeight: 500 }
        }
      >
        {children}
      </div>
    </motion.div>
  );
}
