"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cart";
import CartDrawer from "@/components/cart/CartDrawer";

const navLinks = [
  { href: "/clinical", label: "Clinical" },
  { href: "/products", label: "Research" },
  { href: "/science", label: "Science" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const announcementItems = [
  "COA with every order — independent third-party lab",
  "99.7%+ average purity",
  "cGMP manufacturing",
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openDrawer, getTotalItems } = useCart();
  const totalItems = getTotalItems();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Announcement bar — single quiet trust signal */}
      <div
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center bg-dark"
        style={{ height: "32px" }}
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.22em]" style={{ color: "rgba(253,252,248,0.45)" }}>
          <span className="inline-block w-1 h-1 rounded-full bg-acid-green mr-3 align-middle" />
          COA with every order &nbsp;·&nbsp; 99.7%+ purity &nbsp;·&nbsp; cGMP manufacturing
        </span>
      </div>

      {/* Main header */}
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-300 header-sticky ${
          scrolled ? "header-solid backdrop-blur-md" : "header-transparent"
        }`}
        style={{ top: "32px" }}
      >
        <div className="container-nex">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo + Wordmark */}
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
              <Image
                src="/logo-green.svg"
                alt="Nexphoria"
                width={28}
                height={28}
                className="h-6 md:h-7 w-auto"
                priority
              />
              <span
                className="text-[13px] uppercase"
                style={{ color: "rgba(253,252,248,0.85)", fontWeight: 300, letterSpacing: "0.25em" }}
              >
                Nexphoria
              </span>
            </Link>

            {/* Nav — center */}
            <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[11px] font-medium uppercase tracking-[0.14em] text-secondary hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right: sign in + cart + CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/account/login"
                className="text-[11px] font-medium uppercase tracking-[0.14em] text-secondary hover:text-primary transition-colors duration-200"
              >
                Sign In
              </Link>
              <button
                onClick={openDrawer}
                aria-label="Open cart"
                className="relative p-2 text-secondary hover:text-primary transition-colors"
              >
                <ShoppingCart className="w-5 h-5" strokeWidth={1.5} />
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-acid-green text-dark text-[10px] font-bold rounded-full flex items-center justify-center"
                  >
                    {totalItems > 99 ? '99+' : totalItems}
                  </motion.span>
                )}
              </button>
              <Link
                href="/products"
                className="btn-acid"
                style={{ height: "38px", fontSize: "0.6rem", letterSpacing: "0.18em", padding: "0 1.25rem" }}
              >
                View Catalog
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={openDrawer}
                className="relative p-2 text-primary"
                aria-label="Open cart"
              >
                <ShoppingCart className="w-5 h-5" strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-acid-green text-dark text-[10px] font-bold rounded-full flex items-center justify-center">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </button>
              <button
                onClick={() => setMenuOpen(v => !v)}
                className="p-2 text-primary"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex flex-col bg-dark-panel"
            style={{ top: "32px" }}
          >
            <div className="flex items-center justify-between h-16 px-6 border-b border-dark-border">
              <Link href="/" onClick={() => setMenuOpen(false)}>
                <Image
                  src="/logo-green.svg"
                  alt="Nexphoria"
                  width={120}
                  height={40}
                  className="h-7 w-auto"
                />
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 text-primary"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col px-6 pt-10 gap-0 flex-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.25 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-5 text-2xl font-bold border-b border-dark-border text-primary hover:text-acid-green transition-colors"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="px-6 pb-12 space-y-4">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  openDrawer();
                }}
                className="btn-outline w-full justify-center"
              >
                View Cart ({totalItems})
              </button>
              <Link
                href="/products"
                onClick={() => setMenuOpen(false)}
                className="btn-acid w-full justify-center"
              >
                View Catalog
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Drawer */}
      <CartDrawer />
    </>
  );
}
