"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/lib/cart";

// ── Data ─────────────────────────────────────────────────────────────────────

const PROTOCOLS = [
  { label: "Wolverine Stack", sub: "Recovery", href: "/stacks/wolverine" },
  { label: "Glow Stack", sub: "Beauty", href: "/stacks/glow" },
  { label: "Restore Stack", sub: "Longevity", href: "/stacks/restore" },
  { label: "Clarity Stack", sub: "Focus", href: "/stacks/clarity" },
  { label: "GLP-1 Protocol", sub: "Body Comp", href: "/stacks/glp1" },
  { label: "Growth Protocol", sub: "Sleep & HGH", href: "/stacks/growth" },
];

const PEPTIDES = [
  { label: "BPC-157", href: "/products/bpc-157" },
  { label: "Semaglutide", href: "/products/semaglutide" },
  { label: "Tirzepatide", href: "/products/tirzepatide" },
  { label: "GHK-Cu", href: "/products/ghk-cu" },
  { label: "NAD+", href: "/products/nad-plus" },
  { label: "Ipamorelin", href: "/products/ipamorelin" },
  { label: "CJC-1295", href: "/products/cjc-1295" },
  { label: "Semax", href: "/products/semax" },
];

type DropdownKey = "protocols" | "peptides" | null;

// ── Dropdown animation variants ───────────────────────────────────────────────

const dropdownVariants = {
  hidden: { opacity: 0, y: -6, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.18, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
  exit: {
    opacity: 0,
    y: -4,
    scale: 0.98,
    transition: { duration: 0.12, ease: "easeIn" },
  },
};

// ── Logo SVG ──────────────────────────────────────────────────────────────────

function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 500"
      className={className}
      aria-hidden="true"
    >
      <g>
        <circle fill="#000" cx="129.698" cy="380.792" r="71.864" />
        <path
          fill="#000"
          d="M519.834,328.405c-17.864-16.774-41.141-22.533-62.628-18.55c-18.724,3.471-38.055-0.118-53.17-11.702l-6.86-5.257c-15.349-11.763-23.999-29.746-25.629-49.016c-1.685-19.927-11.623-39.039-29.014-51.808c-16.815-12.346-37.204-16.273-56.18-12.583c-18.19,3.537-37.03,0.099-51.739-11.173l-7.496-5.744c-15.472-11.857-24.203-29.973-25.892-49.393c-1.792-20.603-12.408-40.363-31.14-53.138c-29.987-20.451-71.799-14.725-95.228,12.998c-26.524,31.385-21.393,78.205,10.727,103.18c17.127,13.317,38.364,17.629,58.085,13.695c18.6-3.71,37.886,0.889,52.94,12.426l6.216,4.764c15.349,11.763,23.999,29.746,25.629,49.016c1.685,19.927,11.623,39.039,29.014,51.809c16.815,12.346,37.204,16.273,56.18,12.583c18.19-3.537,37.03-0.099,51.739,11.173l7.704,5.904c14.677,11.248,24.521,28.127,25.467,46.594c1.094,21.348,11.653,41.983,30.521,55.197c34.727,24.32,83.49,13.65,104.428-24.632C548.956,386.504,543.301,350.44,519.834,328.405z"
        />
        <circle fill="#000" cx="470.305" cy="119.208" r="71.864" />
      </g>
    </svg>
  );
}

function LogoMarkGold({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 500"
      className={className}
      aria-hidden="true"
    >
      <g>
        <circle fill="#C4A265" cx="129.698" cy="380.792" r="71.864" />
        <path
          fill="#C4A265"
          d="M519.834,328.405c-17.864-16.774-41.141-22.533-62.628-18.55c-18.724,3.471-38.055-0.118-53.17-11.702l-6.86-5.257c-15.349-11.763-23.999-29.746-25.629-49.016c-1.685-19.927-11.623-39.039-29.014-51.808c-16.815-12.346-37.204-16.273-56.18-12.583c-18.19,3.537-37.03,0.099-51.739-11.173l-7.496-5.744c-15.472-11.857-24.203-29.973-25.892-49.393c-1.792-20.603-12.408-40.363-31.14-53.138c-29.987-20.451-71.799-14.725-95.228,12.998c-26.524,31.385-21.393,78.205,10.727,103.18c17.127,13.317,38.364,17.629,58.085,13.695c18.6-3.71,37.886,0.889,52.94,12.426l6.216,4.764c15.349,11.763,23.999,29.746,25.629,49.016c1.685,19.927,11.623,39.039,29.014,51.809c16.815,12.346,37.204,16.273,56.18,12.583c18.19-3.537,37.03-0.099,51.739,11.173l7.704,5.904c14.677,11.248,24.521,28.127,25.467,46.594c1.094,21.348,11.653,41.983,30.521,55.197c34.727,24.32,83.49,13.65,104.428-24.632C548.956,386.504,543.301,350.44,519.834,328.405z"
        />
        <circle fill="#C4A265" cx="470.305" cy="119.208" r="71.864" />
      </g>
    </svg>
  );
}

// ── Header ────────────────────────────────────────────────────────────────────

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { openDrawer, getTotalItems } = useCart();
  const totalItems = getTotalItems();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  function toggleDropdown(key: DropdownKey) {
    setActiveDropdown((prev) => (prev === key ? null : key));
  }

  function closeAll() {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    setMobileSection(null);
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b"
      style={{
        height: "72px",
        backgroundColor: scrolled ? "rgba(250,247,242,0.97)" : "transparent",
        borderColor: scrolled ? "#EAE6DF" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div
        className="max-w-7xl mx-auto px-6 md:px-10 h-full flex items-center justify-between"
        ref={dropdownRef}
      >
        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0" aria-label="Nexphoria home">
          <LogoMark className="h-7 w-7" />
          <div className="flex flex-col leading-none">
            <span
              className="font-display text-[#0F0F0E] tracking-[0.1em] text-[13px] uppercase"
              style={{ fontWeight: 600, letterSpacing: "0.1em" }}
            >
              NEXPHORIA
            </span>
            <span
              className="text-[9px] text-[#9A8F82] tracking-[0.06em] uppercase mt-[1px]"
              style={{ fontWeight: 400 }}
            >
              — PEPTIDE PHARMACY
            </span>
          </div>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav
          className="hidden md:flex items-center gap-0.5"
          aria-label="Main navigation"
          style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", letterSpacing: "0.01em" }}
        >
          {/* Protocols dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("protocols")}
              aria-haspopup="true"
              aria-expanded={activeDropdown === "protocols"}
              className="flex items-center gap-1 px-3 py-2 text-[13px] text-[#1A1A18] hover:text-[#B8A44C] rounded-md transition-colors"
              style={{ fontWeight: 500 }}
            >
              Protocols
              <ChevronDown
                size={13}
                aria-hidden="true"
                className="transition-transform duration-200"
                style={{ transform: activeDropdown === "protocols" ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </button>

            <AnimatePresence>
              {activeDropdown === "protocols" && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full left-0 mt-2 rounded-xl shadow-xl border border-[#EAE6DF] overflow-hidden"
                  style={{
                    backgroundColor: "#FAF7F2",
                    minWidth: "280px",
                    zIndex: 60,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
                  }}
                >
                  <div className="p-3">
                    {PROTOCOLS.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-[#F0EDE7] transition-colors group"
                      >
                        <span className="text-[13px] font-medium text-[#1A1A18] group-hover:text-[#0F0F0E]">
                          {item.label}
                        </span>
                        <span className="text-[11px] text-[#9A8F82]">{item.sub}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="px-3 pb-3">
                    <Link
                      href="/protocols"
                      onClick={() => setActiveDropdown(null)}
                      className="block text-center text-[11px] font-semibold tracking-[0.04em] text-[#B8A44C] hover:text-[#8A7430] py-2 rounded-lg border border-[#D4CFC8] hover:bg-[#F0EDE7] transition-colors"
                    >
                      View all protocols →
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Peptides dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("peptides")}
              aria-haspopup="true"
              aria-expanded={activeDropdown === "peptides"}
              className="flex items-center gap-1 px-3 py-2 text-[13px] text-[#1A1A18] hover:text-[#B8A44C] rounded-md transition-colors"
              style={{ fontWeight: 500 }}
            >
              Peptides
              <ChevronDown
                size={13}
                aria-hidden="true"
                className="transition-transform duration-200"
                style={{ transform: activeDropdown === "peptides" ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </button>

            <AnimatePresence>
              {activeDropdown === "peptides" && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full left-0 mt-2 rounded-xl shadow-xl border border-[#EAE6DF] overflow-hidden"
                  style={{
                    backgroundColor: "#FAF7F2",
                    minWidth: "220px",
                    zIndex: 60,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
                  }}
                >
                  <div className="p-3 grid grid-cols-2 gap-0.5">
                    {PEPTIDES.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="px-3 py-2 rounded-lg hover:bg-[#F0EDE7] transition-colors text-[13px] font-medium text-[#1A1A18] hover:text-[#0F0F0E]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                  <div className="px-3 pb-3">
                    <Link
                      href="/products"
                      onClick={() => setActiveDropdown(null)}
                      className="block text-center text-[11px] font-semibold tracking-[0.04em] text-[#B8A44C] hover:text-[#8A7430] py-2 rounded-lg border border-[#D4CFC8] hover:bg-[#F0EDE7] transition-colors"
                    >
                      All compounds →
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Simple nav links */}
          {[
            { href: "/how-it-works", label: "How It Works" },
            { href: "/about", label: "About" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-[13px] text-[#1A1A18] hover:text-[#B8A44C] rounded-md transition-colors"
              style={{ fontWeight: 500 }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ── Right: Auth + Cart ── */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/account/login"
            className="px-4 py-2 rounded-full text-[13px] font-medium text-[#1A1A18] border border-[#D4CFC8] hover:border-[#B8A44C] hover:text-[#B8A44C] transition-all"
            style={{ letterSpacing: "0.01em" }}
          >
            Log in
          </Link>
          <Link
            href="/intake"
            className="px-4 py-2 rounded-full text-[13px] font-semibold bg-[#0F0F0E] text-white hover:bg-[#2A2A28] transition-colors"
            style={{ letterSpacing: "0.01em" }}
          >
            Get Started
          </Link>
          <button
            onClick={openDrawer}
            className="relative p-2 ml-1 transition-colors group"
            aria-label="Open cart"
          >
            <ShoppingBag className="w-5 h-5 text-[#1A1A18] group-hover:text-[#7A6B2A] transition-colors" strokeWidth={1.5} />
            {totalItems > 0 && (
              <span
                className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center text-[#1A1A18]"
                style={{ backgroundColor: "#C9A96E" }}
              >
                {totalItems}
              </span>
            )}
          </button>
        </div>

        {/* ── Mobile: Cart + Hamburger ── */}
        <div className="flex md:hidden items-center gap-1">
          <button
            onClick={openDrawer}
            className="relative flex items-center justify-center w-10 h-10 group"
            aria-label="Open cart"
          >
            <ShoppingBag className="w-5 h-5 text-[#1A1A18] group-hover:text-[#7A6B2A] transition-colors" strokeWidth={1.5} />
            {totalItems > 0 && (
              <span
                className="absolute top-1 right-0.5 w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center text-[#1A1A18]"
                style={{ backgroundColor: "#C9A96E" }}
              >
                {totalItems}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-center w-10 h-10"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
          >
            {mobileMenuOpen
              ? <X size={22} strokeWidth={1.5} aria-hidden="true" />
              : <Menu size={22} strokeWidth={1.5} aria-hidden="true" />
            }
          </button>
        </div>
      </div>

      {/* ── Mobile Menu — Full-Screen Overlay ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 z-[55] overflow-y-auto"
            style={{ backgroundColor: "#1A1A18" }}
            aria-label="Mobile navigation"
          >
            {/* Header row */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4" style={{ height: "72px" }}>
              <Link
                href="/"
                className="flex items-center gap-2.5"
                onClick={closeAll}
                aria-label="Nexphoria home"
              >
                <LogoMarkGold className="h-7 w-7" />
                <div className="flex flex-col leading-none">
                  <span className="font-display text-[#C4A265] tracking-[0.1em] text-[13px] uppercase" style={{ fontWeight: 600 }}>
                    NEXPHORIA
                  </span>
                  <span className="text-[9px] text-[#7A6B50] tracking-[0.06em] uppercase mt-[1px]">
                    — PEPTIDE PHARMACY
                  </span>
                </div>
              </Link>
              <button
                onClick={closeAll}
                className="flex items-center justify-center w-10 h-10 rounded-full transition-colors hover:bg-white/10"
                aria-label="Close menu"
              >
                <X size={22} strokeWidth={1.5} className="text-white/70" aria-hidden="true" />
              </button>
            </div>

            {/* Nav items */}
            <motion.nav
              className="flex flex-col px-6 pb-10"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } },
              }}
              aria-label="Mobile main navigation"
            >
              {/* Protocols accordion */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.3 } } }}
              >
                <button
                  className="flex items-center justify-between w-full py-5 text-2xl uppercase font-light tracking-widest transition-colors"
                  style={{
                    color: mobileSection === "protocols" ? "#C4A265" : "rgba(255,255,255,0.85)",
                    letterSpacing: "0.15em",
                  }}
                  onClick={() => setMobileSection(mobileSection === "protocols" ? null : "protocols")}
                  aria-expanded={mobileSection === "protocols"}
                >
                  Protocols
                  <ChevronDown
                    size={20}
                    aria-hidden="true"
                    className="transition-transform"
                    style={{
                      transform: mobileSection === "protocols" ? "rotate(180deg)" : "rotate(0deg)",
                      color: "#C4A265",
                    }}
                  />
                </button>
                <div style={{ height: "1px", backgroundColor: "rgba(196,162,101,0.2)" }} />
                <AnimatePresence>
                  {mobileSection === "protocols" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="py-4 space-y-1">
                        {PROTOCOLS.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center justify-between py-2.5 px-2 rounded-lg transition-colors"
                            style={{ color: "rgba(255,255,255,0.7)" }}
                            onClick={closeAll}
                          >
                            <span className="text-sm">{item.label}</span>
                            <span className="text-[11px] text-[#7A6B50]">{item.sub}</span>
                          </Link>
                        ))}
                        <Link
                          href="/protocols"
                          className="block py-2 px-2 text-sm font-medium mt-2"
                          style={{ color: "#C4A265" }}
                          onClick={closeAll}
                        >
                          View all protocols →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Peptides accordion */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.3 } } }}
              >
                <button
                  className="flex items-center justify-between w-full py-5 text-2xl uppercase font-light tracking-widest transition-colors"
                  style={{
                    color: mobileSection === "peptides" ? "#C4A265" : "rgba(255,255,255,0.85)",
                    letterSpacing: "0.15em",
                  }}
                  onClick={() => setMobileSection(mobileSection === "peptides" ? null : "peptides")}
                  aria-expanded={mobileSection === "peptides"}
                >
                  Peptides
                  <ChevronDown
                    size={20}
                    aria-hidden="true"
                    className="transition-transform"
                    style={{
                      transform: mobileSection === "peptides" ? "rotate(180deg)" : "rotate(0deg)",
                      color: "#C4A265",
                    }}
                  />
                </button>
                <div style={{ height: "1px", backgroundColor: "rgba(196,162,101,0.2)" }} />
                <AnimatePresence>
                  {mobileSection === "peptides" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="py-4 grid grid-cols-2 gap-1">
                        {PEPTIDES.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="py-2.5 px-2 text-sm rounded-lg transition-colors"
                            style={{ color: "rgba(255,255,255,0.7)" }}
                            onClick={closeAll}
                          >
                            {item.label}
                          </Link>
                        ))}
                        <Link
                          href="/products"
                          className="col-span-2 py-2 px-2 text-sm font-medium mt-1"
                          style={{ color: "#C4A265" }}
                          onClick={closeAll}
                        >
                          All compounds →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Simple links */}
              {[
                { href: "/how-it-works", label: "How It Works" },
                { href: "/about", label: "About" },
              ].map((link) => (
                <motion.div
                  key={link.href}
                  variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.3 } } }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center justify-between w-full py-5 text-2xl uppercase font-light tracking-widest transition-colors hover:text-[#C4A265]"
                    style={{ color: "rgba(255,255,255,0.85)", letterSpacing: "0.15em" }}
                    onClick={closeAll}
                  >
                    {link.label}
                  </Link>
                  <div style={{ height: "1px", backgroundColor: "rgba(196,162,101,0.2)" }} />
                </motion.div>
              ))}

              {/* CTA buttons */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.3 } } }}
                className="mt-8 flex flex-col gap-3"
              >
                <Link
                  href="/intake"
                  className="w-full text-center py-4 rounded-full bg-[#B8A44C] text-[#0F0F0E] text-[13px] font-bold tracking-[0.06em] hover:bg-[#D4BF6A] transition-colors"
                  onClick={closeAll}
                >
                  Get Started
                </Link>
                <Link
                  href="/account/login"
                  className="w-full text-center py-4 rounded-full border border-white/20 text-white text-[13px] font-medium hover:border-white/40 transition-colors"
                  onClick={closeAll}
                >
                  Log in
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

