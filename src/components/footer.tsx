"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { products } from "@/lib/products";

const activeProducts = products.filter((p) => !p.comingSoon);

const popularProductSlugs = [
  "bpc-157",
  "tirzepatide",
  "ghk-cu",
  "ipamorelin",
  "retatrutide",
  "nad-plus",
  "sermorelin",
  "tb-500",
];

const footerProducts = popularProductSlugs
  .map((slug) => activeProducts.find((p) => p.slug === slug))
  .filter((p): p is NonNullable<typeof p> => Boolean(p))
  .map((p) => ({
    label: p.name,
    href: `/products/${p.slug}`,
  }));

footerProducts.push({ label: "View All", href: "/products" });

const footerNav = {
  Products: footerProducts,
  Company: [
    { label: "About", href: "/about" },
    { label: "Our Team", href: "/about/team" },
    { label: "Science Advisors", href: "/about/science-advisors" },
    { label: "Science & Testing", href: "/science" },
    { label: "Research Hub", href: "/resources" },
    { label: "Compound Index", href: "/compounds" },
    { label: "Research Blog", href: "/blog" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" },
  ],
  Support: [
    { label: "Customer Support", href: "/contact" },
    { label: "FAQs", href: "/faq" },
    { label: "Shipping & Cold-Chain", href: "/shipping" },
    { label: "Research Tools", href: "/tools" },
    { label: "BAC Water Guide", href: "/tools/bac-water-guide" },
    { label: "Storage Guide", href: "/guides/storage" },
    { label: "Reconstitution Guide", href: "/guides/reconstitution" },
    { label: "Dosing Protocols Guide", href: "/guides/dosing-protocols" },
    { label: "Biomarker Reference", href: "/tools/biomarker-reference" },
    { label: "Peptide Glossary", href: "/guides/peptide-glossary" },
    { label: "Track Your Order", href: "/account/orders" },
    { label: "Order Status", href: "/account/lookup" },
    { label: "Wholesale", href: "/wholesale" },
  ],
  Legal: [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Research Use Policy", href: "/legal/disclaimer" },
  ],
};

function EmailCapture() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setErrorMsg("Please enter a valid email.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      // Persist locally as offline-first fallback
      try {
        const existing = JSON.parse(localStorage.getItem("nex_subscribers") || "[]") as string[];
        if (!existing.includes(email)) {
          existing.push(email);
          localStorage.setItem("nex_subscribers", JSON.stringify(existing));
        }
      } catch {
        // localStorage may be unavailable in some contexts
      }
      // Fire-and-forget to Cloudflare Worker (nexphoria-checkout worker)
      const res = await fetch("https://nexphoria-checkout.chiya-b60.workers.dev/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "nexphoria-footer" }),
        signal: AbortSignal.timeout(5000),
      });
      if (!res.ok) {
        // Worker returned an error — still show success to user (local save succeeded)
        console.warn("Subscribe worker error:", res.status);
      }
      setStatus("success");
      setEmail("");
      // Redirect to confirmation page
      router.push("/subscribe/confirmed");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="w-full">
      <h4
        className="text-[11px] uppercase tracking-widest mb-2 font-medium"
        style={{ color: "#A4B08A" }}
      >
        Research Updates
      </h4>
      <p className="text-sm mb-4 leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
        New compounds, batch releases, and protocol research — delivered to your inbox.
      </p>
      {status === "success" ? (
        <p className="text-sm font-medium" style={{ color: "#A4B08A" }}>
          You&apos;re on the list. We&apos;ll be in touch.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== "idle") { setStatus("idle"); setErrorMsg(""); }
            }}
            placeholder="your@email.com"
            aria-label="Email address for research updates"
            className="flex-1 px-4 py-2.5 text-sm rounded bg-white/[0.06] border border-white/[0.12] text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors min-w-0"
            disabled={status === "loading"}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-5 py-2.5 text-sm font-medium rounded transition-all duration-200 whitespace-nowrap shrink-0"
            style={{
              backgroundColor: status === "loading" ? "rgba(164,176,138,0.5)" : "#A4B08A",
              color: "#1A1A18",
              cursor: status === "loading" ? "not-allowed" : "pointer",
            }}
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      )}
      {status === "error" && errorMsg && (
        <p className="text-xs mt-2" style={{ color: "rgba(255,100,100,0.8)" }}>
          {errorMsg}
        </p>
      )}
    </div>
  );
}

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#1A1A18" }}>
      <div className="container-nex pt-16 pb-10">

        {/* Email capture row — full width, above the nav grid */}
        <div className="mb-12 pb-12 border-b border-white/[0.08]">
          <div className="max-w-md">
            <EmailCapture />
          </div>
        </div>

        {/* Top row: brand + nav columns */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 mb-14 pb-14 border-b border-white/[0.08]">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 600 500"
                className="h-6 w-6"
              >
                <g>
                  <circle fill="#A4B08A" cx="129.698" cy="380.792" r="71.864" />
                  <path
                    fill="#A4B08A"
                    d="M519.834,328.405c-17.864-16.774-41.141-22.533-62.628-18.55c-18.724,3.471-38.055-0.118-53.17-11.702l-6.86-5.257c-15.349-11.763-23.999-29.746-25.629-49.016c-1.685-19.927-11.623-39.039-29.014-51.808c-16.815-12.346-37.204-16.273-56.18-12.583c-18.19,3.537-37.03,0.099-51.739-11.173l-7.496-5.744c-15.472-11.857-24.203-29.973-25.892-49.393c-1.792-20.603-12.408-40.363-31.14-53.138c-29.987-20.451-71.799-14.725-95.228,12.998c-26.524,31.385-21.393,78.205,10.727,103.18c17.127,13.317,38.364,17.629,58.085,13.695c18.6-3.71,37.886,0.889,52.94,12.426l6.216,4.764c15.349,11.763,23.999,29.746,25.629,49.016c1.685,19.927,11.623,39.039,29.014,51.809c16.815,12.346,37.204,16.273,56.18,12.583c18.19-3.537,37.03-0.099,51.739,11.173l7.704,5.904c14.677,11.248,24.521,28.127,25.467,46.594c1.094,21.348,11.653,41.983,30.521,55.197c34.727,24.32,83.49,13.65,104.428-24.632C548.956,386.504,543.301,350.44,519.834,328.405z"
                  />
                  <circle fill="#A4B08A" cx="470.305" cy="119.208" r="71.864" />
                </g>
              </svg>
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.6)" }}>
                Nexphoria
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
              Research-grade peptide compounds for qualified professionals.
              Manufactured under cGMP standards.
            </p>
            <div className="space-y-1">
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                Nexphoria Research · Cheyenne, WY
              </p>
              <a
                href="mailto:research@nexphoria.com"
                className="text-xs transition-colors hover:text-white"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                research@nexphoria.com
              </a>
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            {Object.entries(footerNav).map(([section, links]) => (
              <div key={section}>
                <h4
                  className="text-[11px] uppercase tracking-widest mb-4 font-medium"
                  style={{ color: "#A4B08A" }}
                >
                  {section}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm transition-colors duration-200 hover:text-white"
                        style={{ color: "rgba(255,255,255,0.4)" }}
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

        {/* Compliance Disclaimer */}
        <div className="mb-10 p-6 rounded border border-white/[0.15] bg-white/[0.03]">
          <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            <strong style={{ color: "rgba(255,255,255,0.7)" }}>FOR RESEARCH USE ONLY:</strong> All products are sold for research, laboratory, or analytical purposes only. They are not drugs, supplements, or intended for human consumption, clinical use, or veterinary applications. By purchasing, you confirm these materials will be used exclusively for in vitro testing and laboratory experimentation. Nexphoria does not condone or encourage any use outside of licensed research settings.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            2026 Nexphoria. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3" aria-label="Accepted payment methods">
            {/* Visa */}
            <div
              className="flex items-center px-2 py-1 rounded"
              style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}
              title="Visa"
            >
              <svg width="28" height="10" viewBox="0 0 28 10" fill="none" aria-hidden="true">
                <text x="0" y="9" fontFamily="system-ui,sans-serif" fontSize="9" fontWeight="800" fontStyle="italic" fill="rgba(255,255,255,0.45)" letterSpacing="-0.5">VISA</text>
              </svg>
            </div>

            {/* Mastercard */}
            <div
              className="flex items-center px-2 py-1 rounded"
              style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}
              title="Mastercard"
            >
              <svg width="20" height="12" viewBox="0 0 20 12" fill="none" aria-hidden="true">
                <circle cx="7" cy="6" r="5.5" fill="rgba(255,255,255,0.22)" stroke="rgba(255,255,255,0.18)" strokeWidth="0.5" />
                <circle cx="13" cy="6" r="5.5" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.18)" strokeWidth="0.5" />
              </svg>
            </div>

            {/* Amex */}
            <div
              className="flex items-center px-2 py-1 rounded"
              style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}
              title="American Express"
            >
              <svg width="26" height="10" viewBox="0 0 26 10" fill="none" aria-hidden="true">
                <text x="0" y="9" fontFamily="system-ui,sans-serif" fontSize="7.5" fontWeight="700" fill="rgba(255,255,255,0.45)" letterSpacing="0.3">AMEX</text>
              </svg>
            </div>

            {/* AllayPay */}
            <div
              className="flex items-center gap-1 px-2 py-1 rounded"
              style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}
              title="AllayPay"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <circle cx="7" cy="7" r="6" stroke="#A4B08A" strokeWidth="1.2" />
                <path d="M5 7h4M7 5v4" stroke="#A4B08A" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <span className="text-[9px] font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.45)" }}>AllayPay</span>
            </div>

            {/* Stripe */}
            <div
              className="flex items-center gap-1 px-2 py-1 rounded"
              style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}
              title="Stripe"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <rect x="1" y="3" width="12" height="8" rx="1.5" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
                <rect x="1" y="5.5" width="12" height="2" fill="rgba(255,255,255,0.15)" />
              </svg>
              <span className="text-[9px] font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.45)" }}>Stripe</span>
            </div>

            {/* Bitcoin */}
            <div
              className="flex items-center gap-1 px-2 py-1 rounded"
              style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}
              title="Bitcoin"
            >
              <svg width="12" height="14" viewBox="0 0 12 14" fill="none" aria-hidden="true">
                <path d="M2 2h5.5c1.4 0 2.5 1 2.5 2.25S8.9 6.5 7.5 6.5H2V2zM2 6.5h6c1.4 0 2.5 1 2.5 2.25S9.4 11 8 11H2V6.5z" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeLinejoin="round" />
                <line x1="4" y1="1" x2="4" y2="13" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeLinecap="round" />
                <line x1="7" y1="1" x2="7" y2="13" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeLinecap="round" />
              </svg>
              <span className="text-[9px] font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.45)" }}>BTC</span>
            </div>

            {/* Ethereum */}
            <div
              className="flex items-center gap-1 px-2 py-1 rounded"
              style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}
              title="Ethereum"
            >
              <svg width="10" height="14" viewBox="0 0 10 14" fill="none" aria-hidden="true">
                <path d="M5 1L1 7.5L5 9.5L9 7.5L5 1z" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeLinejoin="round" />
                <path d="M5 10.5L1 8L5 13L9 8L5 10.5z" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeLinejoin="round" />
              </svg>
              <span className="text-[9px] font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.45)" }}>ETH</span>
            </div>
          </div>

          <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            Not evaluated by the FDA. Not for diagnostic or therapeutic use.
          </p>
        </div>
      </div>
    </footer>
  );
}
