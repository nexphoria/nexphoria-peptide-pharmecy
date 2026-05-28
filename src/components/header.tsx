"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/products", label: "Products" },
    { href: "/clinical", label: "Clinical" },
    { href: "/science", label: "Science" },
    { href: "/about", label: "About" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-sm border-b border-stone"
          : "bg-transparent"
      }`}
      style={{ height: "80px" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-full flex items-center justify-between">
        {/* Logo - Inline SVG Helix */}
        <Link href="/" className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 600 500"
            className="h-10 w-10"
            aria-label="Nexphoria"
          >
            <g>
              <circle fill="#010101" cx="129.698" cy="380.792" r="71.864" />
              <path
                fill="#010101"
                d="M519.834,328.405c-17.864-16.774-41.141-22.533-62.628-18.55c-18.724,3.471-38.055-0.118-53.17-11.702l-6.86-5.257c-15.349-11.763-23.999-29.746-25.629-49.016c-1.685-19.927-11.623-39.039-29.014-51.808c-16.815-12.346-37.204-16.273-56.18-12.583c-18.19,3.537-37.03,0.099-51.739-11.173l-7.496-5.744c-15.472-11.857-24.203-29.973-25.892-49.393c-1.792-20.603-12.408-40.363-31.14-53.138c-29.987-20.451-71.799-14.725-95.228,12.998c-26.524,31.385-21.393,78.205,10.727,103.18c17.127,13.317,38.364,17.629,58.085,13.695c18.6-3.71,37.886,0.889,52.94,12.426l6.216,4.764c15.349,11.763,23.999,29.746,25.629,49.016c1.685,19.927,11.623,39.039,29.014,51.809c16.815,12.346,37.204,16.273,56.18,12.583c18.19-3.537,37.03-0.099,51.739,11.173l7.704,5.904c14.677,11.248,24.521,28.127,25.467,46.594c1.094,21.348,11.653,41.983,30.521,55.197c34.727,24.32,83.49,13.65,104.428-24.632C548.956,386.504,543.301,350.44,519.834,328.405z"
              />
              <circle fill="#010101" cx="470.305" cy="119.208" r="71.864" />
            </g>
          </svg>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-near-black hover:opacity-60 transition-opacity"
              style={{ letterSpacing: "0.05em" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link href="/products" className="btn-primary">
            Browse Compounds
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-near-black"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden bg-cream border-t border-stone"
          style={{ position: "absolute", top: "80px", left: 0, right: 0 }}
        >
          <nav className="flex flex-col px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-near-black hover:opacity-60 transition-opacity"
                style={{ letterSpacing: "0.05em" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/products"
              className="btn-primary text-center mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Browse Compounds
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
