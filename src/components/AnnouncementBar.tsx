"use client";

import { useState, useEffect } from "react";

const MESSAGES = [
  "99%+ Purity — Verified by Janoshik & Freedom Diagnostics",
  "Free Cold-Chain Shipping on Orders Over $200",
  "Certificate of Analysis Enclosed With Every Order",
  "cGMP Manufactured · Research Use Only",
];

export default function AnnouncementBar() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % MESSAGES.length);
        setVisible(true);
      }, 400);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full text-center py-2.5 px-4"
      style={{
        backgroundColor: "#F5F3EE",
        borderBottom: "1px solid #E8E5DF",
      }}
    >
      <p
        className="text-[10px] uppercase font-medium transition-opacity truncate"
        style={{
          letterSpacing: "0.15em",
          color: "#666666",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.3s ease",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {MESSAGES[idx]}
      </p>
    </div>
  );
}
