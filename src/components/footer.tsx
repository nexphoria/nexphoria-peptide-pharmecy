"use client";

import Link from "next/link";
import Image from "next/image";
import { EmailCapture } from "./email-capture";

const footerNav = {
  Products: [
    { label: "All Compounds", href: "/products" },
    { label: "Peptide Library", href: "/products" },
    { label: "Custom Synthesis", href: "/contact" },
    { label: "Bulk Orders", href: "/contact" },
  ],
  Science: [
    { label: "How Peptides Work", href: "/science" },
    { label: "Research Methods", href: "/science" },
    { label: "COA Reports", href: "/products" },
    { label: "MSDS Sheets", href: "/products" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Quality Standards", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/contact" },
  ],
  Legal: [
    { label: "Disclaimer", href: "/legal/disclaimer" },
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms of Use", href: "/legal/terms" },
    { label: "Shipping & Returns", href: "/legal/shipping-returns" },
  ],
};

export function Footer() {
  return (
    <footer className="relative">
      {/* Email capture strip */}
      <div className="bg-charcoal py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-sm">
              <h3
                className="text-xl font-medium text-white mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Stay Informed on New Compounds
              </h3>
              <p className="text-sm text-stone leading-relaxed">
                Receive compound announcements, COA publications, and research
                documentation updates.
              </p>
            </div>
            <div className="w-full md:max-w-md">
              <EmailCapture variant="dark" />
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-near-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-16 mb-16">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Image
                src="/brand/logo-primary.svg"
                alt="Nexphoria"
                width={140}
                height={48}
                className="h-9 w-auto mb-5"
              />
              <p className="text-sm text-stone leading-relaxed mb-6">
                Research-grade compounds
                <br />
                for qualified professionals.
              </p>
              {/* Social */}
              <div className="flex gap-4">
                <a
                  href="#"
                  aria-label="Twitter / X"
                  className="w-8 h-8 border border-white/10 flex items-center justify-center text-stone hover:text-white hover:border-white/30 transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-8 h-8 border border-white/10 flex items-center justify-center text-stone hover:text-white hover:border-white/30 transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-8 h-8 border border-white/10 flex items-center justify-center text-stone hover:text-white hover:border-white/30 transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zm2-3a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Nav columns */}
            {Object.entries(footerNav).map(([section, links]) => (
              <div key={section}>
                <h4 className="text-xs font-medium uppercase tracking-[0.15em] mb-6 text-brand-primary">
                  {section}
                </h4>
                <ul className="space-y-3 text-sm text-stone">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="hover:text-white transition-colors"
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
      </div>

      {/* Legal bar */}
      <div className="bg-white py-6 border-t border-stone/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-stone">
          <p>© {new Date().getFullYear()} Nexphoria. Research compounds only. Not for human consumption.</p>
          <p className="font-mono text-center">
            These statements have not been evaluated by the FDA. Not for diagnostic or therapeutic use.
          </p>
        </div>
      </div>
    </footer>
  );
}
