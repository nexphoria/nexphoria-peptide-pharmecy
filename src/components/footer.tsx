"use client";

import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";

const activeProducts = products.filter((p) => !p.comingSoon);

const footerNav = {
  Products: activeProducts.map((p) => ({
    label: p.name,
    href: `/products/${p.slug}`,
  })),
  Company: [
    { label: "About Nexphoria", href: "/about" },
    { label: "Quality Standards", href: "/science#cgmp" },
    { label: "Science & Testing", href: "/science" },
    { label: "Contact Us", href: "/contact" },
  ],
  Support: [
    { label: "Wholesale", href: "/wholesale" },
    { label: "Customer Support", href: "/contact" },
    { label: "FAQs", href: "/contact#faq" },
    { label: "Contact Us", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms of Use", href: "/legal/terms" },
    { label: "Shipping & Returns", href: "/legal/shipping-returns" },
    { label: "Disclaimer", href: "/legal/disclaimer" },
  ],
};

export function Footer() {
  return (
    <footer className="relative text-ceramic" style={{ backgroundColor: "#1A1A18" }}>
      {/* Gold top accent */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, rgba(201,162,75,0.45) 25%, rgba(201,162,75,0.45) 75%, transparent 100%)",
        }}
      />

      <div className="container-nex pt-16 pb-10">
        {/* Top row — logo + tagline */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 mb-14 pb-14 border-b border-white/[0.07]">
          <div className="max-w-xs">
            <Image
              src="/logo-black.svg"
              alt="Nexphoria"
              width={130}
              height={42}
              className="h-7 w-auto mb-5 brightness-0 invert opacity-85"
            />
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(138,128,117,0.9)" }}>
              Research-grade peptide compounds for qualified professionals. Manufactured under cGMP
              standards. Third-party tested every batch.
            </p>
            <div className="flex gap-2.5">
              {/* X / Twitter */}
              <a
                href="#"
                aria-label="X / Twitter"
                className="w-8 h-8 flex items-center justify-center transition-colors"
                style={{
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(138,128,117,0.9)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--gold)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,162,75,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "rgba(138,128,117,0.9)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                }}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 flex items-center justify-center transition-colors"
                style={{
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(138,128,117,0.9)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--gold)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,162,75,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "rgba(138,128,117,0.9)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                }}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            {Object.entries(footerNav).map(([section, links]) => (
              <div key={section}>
                <h4
                  className="text-label mb-5"
                  style={{ color: "var(--gold)", letterSpacing: "0.2em", fontSize: "0.65rem" }}
                >
                  {section}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm transition-colors duration-200"
                        style={{ color: "rgba(138,128,117,0.85)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "rgba(138,128,117,0.85)")
                        }
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
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <p className="text-xs" style={{ color: "rgba(138,128,117,0.55)" }}>
            © {new Date().getFullYear()} Nexphoria. All products for research use only.{" "}
            <span style={{ color: "rgba(201,162,75,0.5)" }}>·</span> Not for human consumption.
          </p>
          <p
            className="text-xs text-right max-w-sm"
            style={{ fontFamily: "var(--font-mono, monospace)", color: "rgba(138,128,117,0.45)" }}
          >
            Not evaluated by the FDA. Not for diagnostic or therapeutic use.
          </p>
        </div>
      </div>
    </footer>
  );
}
