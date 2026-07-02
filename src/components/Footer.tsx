"use client";

import { useState } from "react";
import Link from "next/link";

const columns = [
  {
    heading: "Protocols",
    links: [
      { label: "Wolverine", href: "/protocols/wolverine" },
      { label: "Glow", href: "/protocols/glow" },
      { label: "Restore", href: "/protocols/restore" },
      { label: "Clarity", href: "/protocols/clarity" },
      { label: "GLP-1", href: "/protocols/glp1" },
      { label: "Growth", href: "/protocols/growth" },
    ],
  },
  {
    heading: "Science",
    links: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Bloodwork", href: "/bloodwork" },
      { label: "The Pharmacy", href: "/pharmacy" },
      { label: "Research", href: "/research" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Physicians", href: "/physicians" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "HIPAA Notice", href: "/hipaa" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <footer className="bg-[#0F0F0E] border-t-2 border-[#B8A44C]">
      {/* Email signup */}
      <div className="border-b border-[#2A2A28]">
        <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-light text-white mb-2">
              Stay optimized.
            </h2>
            <p className="font-sans text-sm text-[#6A6460]">
              Protocol updates, physician insights, and longevity research — delivered monthly.
            </p>
          </div>
          {submitted ? (
            <div className="shrink-0">
              <p className="font-sans text-sm text-[#B8A44C]">
                ✓ You're on the list.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex gap-2 shrink-0 w-full sm:w-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 sm:w-64 bg-[#1A1A18] border border-[#2A2A28] rounded-full px-5 py-3 font-sans text-sm text-white placeholder-[#4A4A48] focus:outline-none focus:border-[#B8A44C] transition-colors"
              />
              <button
                type="submit"
                className="bg-[#B8A44C] hover:bg-[#A8943C] text-white font-sans text-sm font-medium px-6 py-3 rounded-full transition-colors shrink-0"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Nav columns */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
          {columns.map((col) => (
            <div key={col.heading}>
              <p className="font-sans text-xs tracking-[0.18em] uppercase text-[#B8A44C] mb-5">
                {col.heading}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-sans text-sm text-[#6A6460] hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#2A2A28]">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Wordmark */}
          <span className="font-display text-xl font-light tracking-[0.15em] text-white uppercase">
            NEXPHORIA
          </span>

          {/* Copyright */}
          <p className="font-sans text-xs text-[#4A4A48] text-center order-3 sm:order-2">
            © {new Date().getFullYear()} Nexphoria Health, Inc. All rights reserved.
            <br className="sm:hidden" />{" "}
            <span className="hidden sm:inline">· </span>
            Prescriptions written by licensed physicians. Compounded at a 503A-licensed pharmacy.
          </p>

          {/* Compliance badges */}
          <div className="flex items-center gap-3 order-2 sm:order-3 flex-wrap justify-center sm:justify-end">
            <span className="font-sans text-[10px] tracking-wider uppercase text-[#4A4A48] border border-[#2A2A28] px-3 py-1.5 rounded-full">
              HIPAA
            </span>
            <span className="font-sans text-[10px] tracking-wider uppercase text-[#4A4A48] border border-[#2A2A28] px-3 py-1.5 rounded-full">
              503A Pharmacy
            </span>
            <span className="font-sans text-[10px] tracking-wider uppercase text-[#4A4A48] border border-[#2A2A28] px-3 py-1.5 rounded-full">
              LegitScript
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

