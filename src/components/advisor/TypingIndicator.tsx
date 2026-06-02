"use client";

import { motion } from "framer-motion";

// Three-dot "advisor is typing" pulse, styled as an advisor bubble.
export default function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="flex items-center gap-1.5 w-fit rounded-2xl rounded-tl-sm px-4 py-3.5"
      style={{ backgroundColor: "#1a1a1a", border: "1px solid rgba(184,164,76,0.18)" }}
      aria-label="Protocol Advisor is typing"
    >
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="block w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: "#B8A44C" }}
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.18, ease: "easeInOut" }}
        />
      ))}
    </motion.div>
  );
}
