"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

const MESSAGES = [
  "99%+ Purity — Verified by Janoshik & Freedom Diagnostics",
  "Free Cold-Chain Shipping on Orders Over $200",
  "Certificate of Analysis Enclosed With Every Order",
  "cGMP Manufactured · Research Use Only",
];

const STORAGE_KEY = "nexphoria-bar-dismissed";

export default function AnnouncementBar() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  const [dismissed, setDismissed] = useState(false);
  const [slideUp, setSlideUp] = useState(false);

  // Check localStorage on mount
  useEffect(() => {
    try {
      if (typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY) === "true") {
        setDismissed(true);
      }
    } catch {
      // localStorage not available (e.g. SSR, privacy mode)
    }
  }, []);

  // Rotate messages
  useEffect(() => {
    if (dismissed) return;
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % MESSAGES.length);
        setVisible(true);
      }, 400);
    }, 4000);
    return () => clearInterval(interval);
  }, [dismissed]);

  const handleDismiss = () => {
    setSlideUp(true);
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // ignore
    }
    // Wait for CSS animation to complete before unmounting
    setTimeout(() => setDismissed(true), 350);
  };

  if (dismissed) return null;

  return (
    <div
      className={`w-full relative${slideUp ? " announcement-slide-up" : ""}`}
      style={{
        backgroundColor: "#F5F3EE",
        borderBottom: "1px solid #E8E5DF",
      }}
    >
      <div className="flex items-center justify-center py-2.5 px-10 overflow-hidden">
        <p
          className="text-[10px] uppercase font-medium transition-opacity whitespace-nowrap overflow-hidden text-ellipsis"
          style={{
            letterSpacing: "0.15em",
            color: "#666666",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.3s ease",
            lineHeight: 1.5,
          }}
        >
          {MESSAGES[idx]}
        </p>
      </div>
      {/* Dismiss button */}
      <button
        onClick={handleDismiss}
        aria-label="Dismiss announcement"
        className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 rounded-full transition-colors hover:bg-black/5"
        style={{ color: "#999999" }}
      >
        <X size={12} strokeWidth={2} aria-hidden="true" />
      </button>
    </div>
  );
}
