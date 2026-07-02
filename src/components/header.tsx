"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useCart } from "@/lib/cart";

// ── Data ──────────────────────────────────────────────────────────────────────

const PROTOCOLS = [
  {
    label: "Wolverine Stack",
    sub: "Recovery",
    href: "/stacks/wolverine",
    // Unsplash lifestyle image — tiny 40px circle, loads instantly
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=80&q=70&fit=crop",
  },
  {
    label: "Glow Stack",
    sub: "Beauty",
    href: "/stacks/glow",
    img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=80&q=70&fit=crop",
  },
  {
    label: "Restore Stack",
    sub: "Longevity",
    href: "/stacks/restore",
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=80&q=70&fit=crop",
  },
  {
    label: "Clarity Stack",
    sub: "Focus",
    href: "/stacks/clarity",
    img: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?w=80&q=70&fit=crop",
  },
  {
    label: "GLP-1 Protocol",
    sub: "Body Comp",
    href: "/stacks/glp1",
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=80&q=70&fit=crop",
  },
  {
    label: "Growth Protocol",
    sub: "Sleep & HGH",
    href: "/stacks/growth",
    img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=80&q=70&fit=crop",
  },
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

// ── Dropdown animation (Hims-spec: opacity 0→1, translateY -8px→0, 200ms ease) ──

const dropdownVariants: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number] },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.15 },
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

  // Hims spec: scroll threshold is 50px
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
      className="fixed top-0 left-0 right-0 transition-all duration-300 border-b"
      style={{
        height: "72px",
        zIndex: 100,
        backgroundColor: scrolled ? "rgba(250,247,242,0.97)" : "transparent",
        borderColor: scrolled ? "#EAE6DF" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div
        className="max-w-7xl mx-auto px-6 md:px-10 h-full flex items-center justify-between"
        ref={dropdownRef}
      >
        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0" aria-label="Nexphoria home">
          <LogoMark className="h-7 w-7" />
          {/* Hims spec: NEXPHORIA (display font) + inline '— PEPTIDE PHARMACY' muted */}
          <div className="flex items-baseline gap-1.5 leading-none">
            <span
              className="font-display text-[#0F0F0E] uppercase"
              style={{ fontWeight: 600, letterSpacing: "0.12em", fontSize: "14px" }}
            >
              NEXPHORIA
            </span>
            <span
              className="text-[#9A8F82] hidden sm:inline"
              style={{ fontSize: "9px", fontWeight: 400, letterSpacing: "0.06em" }}
            >
              — PEPTIDE PHARMACY
            </span>
          </div>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav
          className="hidden md:flex items-center gap-0.5"
          aria-label="Main navigation"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {/* Protocols mega menu */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("protocols")}
              aria-haspopup="true"
              aria-expanded={activeDropdown === "protocols"}
              className="flex items-center gap-1 px-3 py-2 rounded-md transition-colors duration-150"
              style={{
                fontSize: "13px",
                fontWeight: 500,
                color: activeDropdown === "protocols" ? "#B8A44C" : "#392e25",
                letterSpacing: "0.01em",
              }}
            >
              Protocols
              <ChevronDown
                size={12}
                aria-hidden="true"
                style={{
                  transition: "transform 200ms ease",
                  transform: activeDropdown === "protocols" ? "rotate(180deg)" : "rotate(0deg)",
                  color: "#B8A44C",
                }}
              />
            </button>

            <AnimatePresence>
              {activeDropdown === "protocols" && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full left-1/2 mt-3 rounded-2xl shadow-xl overflow-hidden"
                  style={{
                    background: "#ffffff",
                    minWidth: "480px",
                    zIndex: 200,
                    transform: "translateX(-50%)",
                    border: "1px solid rgba(234,230,223,0.6)",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)",
                  }}
                >
                  {/* Mega menu header */}
                  <div
                    className="px-5 pt-4 pb-3 border-b"
                    style={{ borderColor: "#F0EDE8" }}
                  >
                    <p
                      className="uppercase tracking-[0.08em]"
                      style={{ fontSize: "10px", fontWeight: 600, color: "#9A8F82" }}
                    >
                      Treatment Protocols
                    </p>
                  </div>

                  {/* 3×2 grid of protocol tiles */}
                  <div className="p-4 grid grid-cols-3 gap-2">
                    {PROTOCOLS.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="group flex items-center gap-3 p-2.5 rounded-xl transition-all duration-150 hover:bg-[#FAF7F2]"
                      >
                        {/* 40px circle lifestyle image */}
                        <div
                          className="flex-shrink-0 rounded-full overflow-hidden"
                          style={{ width: "40px", height: "40px", background: "#F0EDE8" }}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={item.img}
                            alt=""
                            aria-hidden="true"
                            style={{ width: "40px", height: "40px", objectFit: "cover" }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p
                            className="truncate leading-tight group-hover:text-[#0F0F0E]"
                            style={{ fontSize: "12px", fontWeight: 600, color: "#1A1A18" }}
                          >
                            {item.label}
                          </p>
                          <p
                            className="truncate leading-tight"
                            style={{ fontSize: "11px", fontWeight: 400, color: "#9A8F82" }}
                          >
                            {item.sub}
                          </p>
                        </div>
                        <ArrowRight
                          size={12}
                          className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                          style={{ color: "#B8A44C" }}
                        />
                      </Link>
                    ))}
                  </div>

                  {/* Footer CTA */}
                  <div className="px-4 pb-4">
                    <Link
                      href="/protocols"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl border transition-all duration-150 hover:bg-[#FAF7F2]"
                      style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#B8A44C",
                        borderColor: "#D4CFC8",
                        letterSpacing: "0.03em",
                      }}
                    >
                      View all protocols
                      <ArrowRight size={12} />
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
              className="flex items-center gap-1 px-3 py-2 rounded-md transition-colors duration-150"
              style={{
                fontSize: "13px",
                fontWeight: 500,
                color: activeDropdown === "peptides" ? "#B8A44C" : "#392e25",
                letterSpacing: "0.01em",
              }}
            >
              Peptides
              <ChevronDown
                size={12}
                aria-hidden="true"
                style={{
                  transition: "transform 200ms ease",
                  transform: activeDropdown === "peptides" ? "rotate(180deg)" : "rotate(0deg)",
                  color: "#B8A44C",
                }}
              />
            </button>

            <AnimatePresence>
              {activeDropdown === "peptides" && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full left-1/2 mt-3 rounded-2xl shadow-xl overflow-hidden"
                  style={{
                    background: "#ffffff",
                    minWidth: "220px",
                    zIndex: 200,
                    transform: "translateX(-50%)",
                    border: "1px solid rgba(234,230,223,0.6)",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)",
                  }}
                >
                  {/* Dropdown header */}
                  <div className="px-4 pt-4 pb-2.5 border-b" style={{ borderColor: "#F0EDE8" }}>
                    <p
                      className="uppercase tracking-[0.08em]"
                      style={{ fontSize: "10px", fontWeight: 600, color: "#9A8F82" }}
                    >
                      Compounds
                    </p>
                  </div>

                  {/* Simple compound list */}
                  <div className="p-2">
                    {PEPTIDES.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-150 hover:bg-[#FAF7F2] group"
                      >
                        <span
                          className="group-hover:text-[#0F0F0E] transition-colors"
                          style={{ fontSize: "13px", fontWeight: 500, color: "#392e25" }}
                        >
                          {item.label}
                        </span>
                        <ArrowRight
                          size={11}
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                          style={{ color: "#B8A44C" }}
                        />
                      </Link>
                    ))}
                  </div>

                  {/* Footer CTA */}
                  <div className="px-3 pb-3">
                    <Link
                      href="/products"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl border transition-all duration-150 hover:bg-[#FAF7F2]"
                      style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#B8A44C",
                        borderColor: "#D4CFC8",
                        letterSpacing: "0.03em",
                      }}
                    >
                      All compounds
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Simple nav links — Hims spec: 13px Inter 500, #392e25, hover #B8A44C */}
          {[
            { href: "/how-it-works", label: "How It Works" },
            { href: "/about", label: "About" },
            { href: "/bloodwork", label: "Bloodwork" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 rounded-md transition-colors duration-150"
              style={{
                fontSize: "13px",
                fontWeight: 500,
                color: "#392e25",
                letterSpacing: "0.01em",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#B8A44C"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#392e25"; }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ── Right: Auth + Cart ── */}
        <div className="hidden md:flex items-center gap-2">
          {/* Ghost pill — 34px height, border #D4CFC8 */}
          <Link
            href="/account/login"
            className="flex items-center rounded-full border transition-all duration-150"
            style={{
              height: "34px",
              paddingLeft: "16px",
              paddingRight: "16px",
              fontSize: "13px",
              fontWeight: 500,
              color: "#392e25",
              borderColor: "#D4CFC8",
              letterSpacing: "0.01em",
              textDecoration: "none",
              fontFamily: "Inter, sans-serif",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "#B8A44C";
              el.style.color = "#B8A44C";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "#D4CFC8";
              el.style.color = "#392e25";
            }}
          >
            Log in
          </Link>

          {/* Solid black pill — 34px height */}
          <Link
            href="/intake"
            className="flex items-center rounded-full transition-all duration-150"
            style={{
              height: "34px",
              paddingLeft: "16px",
              paddingRight: "16px",
              fontSize: "13px",
              fontWeight: 600,
              backgroundColor: "#0F0F0E",
              color: "#ffffff",
              letterSpacing: "0.01em",
              textDecoration: "none",
              fontFamily: "Inter, sans-serif",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#2A2A28"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#0F0F0E"; }}
          >
            Get Started
          </Link>

          {/* Cart icon */}
          <button
            onClick={openDrawer}
            className="relative p-2 ml-1 transition-colors group"
            aria-label="Open cart"
          >
            <ShoppingBag
              className="w-5 h-5 transition-colors group-hover:text-[#7A6B2A]"
              style={{ color: "#392e25" }}
              strokeWidth={1.5}
            />
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
            <ShoppingBag
              className="w-5 h-5 transition-colors group-hover:text-[#7A6B2A]"
              style={{ color: "#392e25" }}
              strokeWidth={1.5}
            />
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
              ? <X size={22} strokeWidth={1.5} style={{ color: "#392e25" }} aria-hidden="true" />
              : <Menu size={22} strokeWidth={1.5} style={{ color: "#392e25" }} aria-hidden="true" />
            }
          </button>
        </div>
      </div>

      {/* ── Mobile Menu — Full-Screen Overlay, cream background (Hims-spec) ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="md:hidden fixed inset-0 overflow-y-auto flex flex-col"
            style={{ backgroundColor: "#FAF7F2", zIndex: 99 }}
            aria-label="Mobile navigation"
          >
            {/* Header row — mirrors main nav */}
            <div
              className="flex items-center justify-between px-6 flex-shrink-0 border-b"
              style={{ height: "72px", borderColor: "#EAE6DF" }}
            >
              <Link
                href="/"
                className="flex items-center gap-2.5"
                onClick={closeAll}
                aria-label="Nexphoria home"
              >
                <LogoMark className="h-7 w-7" />
                <div className="flex flex-col leading-none">
                  <span
                    className="font-display text-[#0F0F0E] uppercase"
                    style={{ fontWeight: 600, letterSpacing: "0.12em", fontSize: "14px" }}
                  >
                    NEXPHORIA
                  </span>
                  <span
                    className="text-[#9A8F82]"
                    style={{ fontSize: "9px", fontWeight: 400, letterSpacing: "0.06em" }}
                  >
                    — PEPTIDE PHARMACY
                  </span>
                </div>
              </Link>
              <button
                onClick={closeAll}
                className="flex items-center justify-center w-10 h-10 rounded-full transition-colors hover:bg-black/5"
                aria-label="Close menu"
              >
                <X size={22} strokeWidth={1.5} style={{ color: "#392e25" }} aria-hidden="true" />
              </button>
            </div>

            {/* Nav items — staggered entrance */}
            <motion.nav
              className="flex flex-col px-6 pt-4 pb-6 flex-1"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.06 } },
              }}
              aria-label="Mobile main navigation"
            >
              {/* Protocols accordion */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.28 } } }}
              >
                <button
                  className="flex items-center justify-between w-full py-5 transition-colors"
                  style={{
                    fontSize: "22px",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    color: mobileSection === "protocols" ? "#B8A44C" : "#1A1A18",
                    letterSpacing: "0.02em",
                    textDecoration: "none",
                  }}
                  onClick={() => setMobileSection(mobileSection === "protocols" ? null : "protocols")}
                  aria-expanded={mobileSection === "protocols"}
                >
                  Protocols
                  <ChevronDown
                    size={20}
                    aria-hidden="true"
                    style={{
                      transition: "transform 200ms ease",
                      transform: mobileSection === "protocols" ? "rotate(180deg)" : "rotate(0deg)",
                      color: "#B8A44C",
                    }}
                  />
                </button>
                <div style={{ height: "1px", backgroundColor: "#EAE6DF" }} />
                <AnimatePresence>
                  {mobileSection === "protocols" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="py-3 space-y-0.5">
                        {PROTOCOLS.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center gap-3 py-2.5 px-2 rounded-xl transition-colors hover:bg-white/60"
                            onClick={closeAll}
                          >
                            <div
                              className="flex-shrink-0 rounded-full overflow-hidden"
                              style={{ width: "36px", height: "36px", background: "#EAE6DF" }}
                            >
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={item.img}
                                alt=""
                                aria-hidden="true"
                                style={{ width: "36px", height: "36px", objectFit: "cover" }}
                              />
                            </div>
                            <div>
                              <p style={{ fontSize: "14px", fontWeight: 600, color: "#1A1A18" }}>{item.label}</p>
                              <p style={{ fontSize: "11px", fontWeight: 400, color: "#9A8F82" }}>{item.sub}</p>
                            </div>
                          </Link>
                        ))}
                        <Link
                          href="/protocols"
                          className="flex items-center gap-1 py-2 px-2 mt-1"
                          style={{ fontSize: "13px", fontWeight: 600, color: "#B8A44C" }}
                          onClick={closeAll}
                        >
                          View all protocols <ArrowRight size={12} />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Peptides accordion */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.28 } } }}
              >
                <button
                  className="flex items-center justify-between w-full py-5 transition-colors"
                  style={{
                    fontSize: "22px",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    color: mobileSection === "peptides" ? "#B8A44C" : "#1A1A18",
                    letterSpacing: "0.02em",
                  }}
                  onClick={() => setMobileSection(mobileSection === "peptides" ? null : "peptides")}
                  aria-expanded={mobileSection === "peptides"}
                >
                  Peptides
                  <ChevronDown
                    size={20}
                    aria-hidden="true"
                    style={{
                      transition: "transform 200ms ease",
                      transform: mobileSection === "peptides" ? "rotate(180deg)" : "rotate(0deg)",
                      color: "#B8A44C",
                    }}
                  />
                </button>
                <div style={{ height: "1px", backgroundColor: "#EAE6DF" }} />
                <AnimatePresence>
                  {mobileSection === "peptides" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="py-3 grid grid-cols-2 gap-0.5">
                        {PEPTIDES.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="py-2.5 px-3 rounded-xl transition-colors hover:bg-white/60"
                            style={{ fontSize: "14px", fontWeight: 500, color: "#392e25" }}
                            onClick={closeAll}
                          >
                            {item.label}
                          </Link>
                        ))}
                        <Link
                          href="/products"
                          className="col-span-2 flex items-center gap-1 py-2 px-3 mt-1"
                          style={{ fontSize: "13px", fontWeight: 600, color: "#B8A44C" }}
                          onClick={closeAll}
                        >
                          All compounds <ArrowRight size={12} />
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
                { href: "/bloodwork", label: "Bloodwork" },
              ].map((link) => (
                <motion.div
                  key={link.href}
                  variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.28 } } }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center w-full py-5 transition-colors hover:text-[#B8A44C]"
                    style={{
                      fontSize: "22px",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 400,
                      color: "#1A1A18",
                      letterSpacing: "0.02em",
                    }}
                    onClick={closeAll}
                  >
                    {link.label}
                  </Link>
                  <div style={{ height: "1px", backgroundColor: "#EAE6DF" }} />
                </motion.div>
              ))}

              {/* Bottom CTAs — Hims spec: full-width pills, black + ghost */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.28 } } }}
                className="mt-auto pt-8 flex flex-col gap-3"
              >
                <Link
                  href="/intake"
                  className="w-full flex items-center justify-center rounded-full transition-colors"
                  style={{
                    height: "52px",
                    backgroundColor: "#0F0F0E",
                    color: "#ffffff",
                    fontSize: "14px",
                    fontWeight: 600,
                    fontFamily: "Inter, sans-serif",
                    letterSpacing: "0.02em",
                    textDecoration: "none",
                  }}
                  onClick={closeAll}
                >
                  Get Started
                </Link>
                <Link
                  href="/account/login"
                  className="w-full flex items-center justify-center rounded-full border transition-colors hover:border-[#B8A44C] hover:text-[#B8A44C]"
                  style={{
                    height: "52px",
                    borderColor: "#D4CFC8",
                    color: "#392e25",
                    fontSize: "14px",
                    fontWeight: 500,
                    fontFamily: "Inter, sans-serif",
                    textDecoration: "none",
                  }}
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



