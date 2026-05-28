"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/lib/cart";
import CartDrawer from "@/components/cart/CartDrawer";

const navLinks = [
  { href: "/clinical", label: "Clinical" },
  { href: "/products", label: "Compounds" },
  { href: "/science", label: "Science" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openDrawer, getTotalItems } = useCart();
  const totalItems = getTotalItems();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgColor = scrolled ? "#FFFFFF" : "#EAE7E3";

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: bgColor,
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "none"
        }}
      >
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "64px"
          }}>
            {/* Logo + Wordmark */}
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
              <Image
                src="/brand/logo-green.svg"
                alt="Nexphoria"
                width={24}
                height={24}
                priority
              />
              <span style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 200,
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.25em",
                color: "#010101"
              }}>
                NEXPHORIA
              </span>
            </Link>

            {/* Nav — center desktop */}
            <nav style={{
              display: "none",
              alignItems: "center",
              gap: "2rem",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)"
            }} className="md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: "11px",
                    fontWeight: 400,
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "#010101",
                    transition: "color 0.2s"
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#B8923A"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#010101"; }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right: Sign In + Cart + Mobile Menu */}
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
              <Link
                href="/account/login"
                style={{
                  fontSize: "11px",
                  fontWeight: 400,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "#010101",
                  transition: "color 0.2s",
                  display: "none"
                }}
                className="md:block"
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#B8923A"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#010101"; }}
              >
                Sign In
              </Link>
              <button
                onClick={openDrawer}
                aria-label="Open cart"
                style={{
                  position: "relative",
                  padding: "0.5rem",
                  color: "#010101",
                  cursor: "pointer",
                  background: "none",
                  border: "none"
                }}
              >
                <ShoppingCart style={{ width: "20px", height: "20px", strokeWidth: 1.5 }} />
                {totalItems > 0 && (
                  <span style={{
                    position: "absolute",
                    top: "-2px",
                    right: "-2px",
                    width: "18px",
                    height: "18px",
                    backgroundColor: "#C9DD69",
                    color: "#010101",
                    fontSize: "10px",
                    fontWeight: 700,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                style={{
                  padding: "0.5rem",
                  color: "#010101",
                  cursor: "pointer",
                  background: "none",
                  border: "none"
                }}
                className="md:hidden"
              >
                {mobileMenuOpen ? (
                  <X style={{ width: "24px", height: "24px" }} />
                ) : (
                  <Menu style={{ width: "24px", height: "24px" }} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div
            style={{
              backgroundColor: bgColor,
              borderTop: "1px solid rgba(0,0,0,0.06)",
              padding: "1.5rem"
            }}
            className="md:hidden"
          >
            <nav style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: "11px",
                    fontWeight: 400,
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "#010101",
                    padding: "0.5rem 0"
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/account/login"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: "11px",
                  fontWeight: 400,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "#010101",
                  padding: "0.5rem 0",
                  borderTop: "1px solid rgba(0,0,0,0.06)",
                  marginTop: "0.5rem",
                  paddingTop: "1rem"
                }}
              >
                Sign In
              </Link>
            </nav>
          </div>
        )}
      </header>

      <CartDrawer />
    </>
  );
}
