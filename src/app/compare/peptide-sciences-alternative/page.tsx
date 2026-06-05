import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Peptide Sciences Alternative 2026 | Nexphoria",
  description:
    "Peptide Sciences closed in March 2026. Here's why thousands of researchers have switched to Nexphoria — same HPLC-verified purity standards, US-manufactured, cold-chain shipping, and COAs you can actually verify.",
  openGraph: {
    title: "Best Peptide Sciences Alternative 2026 | Nexphoria",
    description:
      "Peptide Sciences shut down March 2026. Nexphoria offers the same ≥99% HPLC purity, lot-specific COAs, US manufacturing, and cold-chain shipping. Use code PS2026 for 10% off.",
    url: "https://nexphoria.com/compare/peptide-sciences-alternative",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://nexphoria.com/compare/peptide-sciences-alternative" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Nexphoria purity comparable to Peptide Sciences?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Both held ≥99% HPLC minimums. Nexphoria additionally runs mass spectrometry on every compound for identity verification — not just HPLC.",
      },
    },
    {
      "@type": "Question",
      name: "Can I verify Nexphoria COAs myself?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every COA is publicly posted on our website with lot numbers. You can cross-reference the testing lab directly.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer the same compounds Peptide Sciences carried?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We carry BPC-157, TB-500, Semaglutide, Tirzepatide, Retatrutide, CJC-1295, Ipamorelin, Epithalon, NAD+, GHK-Cu, and 50+ additional compounds.",
      },
    },
    {
      "@type": "Question",
      name: "Is Nexphoria US-based?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. US-synthesized, US-fulfilled, cold-chain shipping on every order.",
      },
    },
    {
      "@type": "Question",
      name: "Why did Peptide Sciences shut down?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In March 2026, Peptide Sciences voluntarily ceased operations. No acquisition, no successor, no public explanation beyond a brief notice on their website.",
      },
    },
  ],
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nexphoria",
  url: "https://nexphoria.com",
  description: "US-based research peptide supplier. ≥99% HPLC purity, lot-specific third-party COAs, cold-chain shipping on every order.",
  sameAs: ["https://nexphoria.com"],
};

const comparisonRows = [
  { feature: "HPLC Purity Standard", ps: { label: "≥99%", status: "ok" }, nx: { label: "≥99% HPLC verified", status: "ok" } },
  { feature: "Third-Party COAs", ps: { label: "Per lot", status: "ok" }, nx: { label: "Per lot, publicly posted", status: "ok" } },
  { feature: "COA Independent Verification", ps: { label: "Limited", status: "warn" }, nx: { label: "Full lab traceability", status: "ok" } },
  { feature: "Mass Spec (MS) Identity", ps: { label: "Select products", status: "warn" }, nx: { label: "Every compound", status: "ok" } },
  { feature: "US Manufacturing", ps: { label: "Yes", status: "ok" }, nx: { label: "Yes — US synthesized", status: "ok" } },
  { feature: "Cold-Chain Shipping", ps: { label: "Standard packaging", status: "warn" }, nx: { label: "Cold-pack + insulated, every order", status: "ok" } },
  { feature: "Ordering Status", ps: { label: "CLOSED — site down", status: "bad" }, nx: { label: "In stock", status: "ok" } },
  { feature: "Subscription Discount", ps: { label: "None", status: "bad" }, nx: { label: "15% recurring", status: "ok" } },
  { feature: "Loyalty Program", ps: { label: "None", status: "bad" }, nx: { label: "Points on every order", status: "ok" } },
  { feature: "Research Blog", ps: { label: "Moderate content", status: "warn" }, nx: { label: "300+ technical articles", status: "ok" } },
];

const STATUS_COLORS = {
  ok: "#22c55e",
  warn: "#f59e0b",
  bad: "#ef4444",
};

const STATUS_ICONS = {
  ok: CheckCircle2,
  warn: AlertCircle,
  bad: XCircle,
};

function StatusCell({ label, status }: { label: string; status: "ok" | "warn" | "bad" }) {
  const Icon = STATUS_ICONS[status];
  const color = STATUS_COLORS[status];
  return (
    <div className="flex items-start gap-2">
      <Icon size={16} style={{ color, flexShrink: 0, marginTop: 2 }} />
      <span className="text-sm" style={{ color: "#2a2a2a", fontWeight: 300, lineHeight: 1.5 }}>
        {label}
      </span>
    </div>
  );
}

const faqs = [
  {
    q: "Is Nexphoria purity comparable to Peptide Sciences?",
    a: "Yes. Both held ≥99% HPLC minimums. We additionally run mass spectrometry on every compound for identity verification — not just HPLC.",
  },
  {
    q: "Can I verify Nexphoria COAs myself?",
    a: "Yes. Every COA is publicly posted on our website with lot numbers. You can cross-reference the testing lab directly.",
  },
  {
    q: "Do you offer the same compounds Peptide Sciences carried?",
    a: "We carry BPC-157, TB-500, Semaglutide, Tirzepatide, Retatrutide, CJC-1295, Ipamorelin, Epithalon, NAD+, GHK-Cu, and 50+ additional compounds.",
  },
  {
    q: "Is Nexphoria US-based?",
    a: "Yes. US-synthesized, US-fulfilled, cold-chain every order.",
  },
  {
    q: "Why did Peptide Sciences shut down?",
    a: "In March 2026, Peptide Sciences voluntarily ceased operations. No acquisition, no successor, no public statement beyond a brief notice on their website.",
  },
];

export default function PeptideSciencesAlternativePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      <div style={{ backgroundColor: "#F9F9F9" }}>
        {/* Hero */}
        <section
          className="relative px-6 pt-32 pb-16 md:pt-40 md:pb-20"
          style={{ backgroundColor: "#010101" }}
        >
          <div className="max-w-4xl mx-auto">
            <Breadcrumb
              variant="dark"
              className="mb-6"
              items={[
                { label: "Home", href: "/" },
                { label: "Compare", href: "/compare" },
                { label: "Peptide Sciences Alternative" },
              ]}
            />
            <div
              className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full mb-6"
              style={{ backgroundColor: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.3)", color: "#f87171" }}
            >
              <XCircle size={12} />
              Peptide Sciences closed March 2026
            </div>
            <h1
              className="text-4xl md:text-5xl mb-6"
              style={{
                fontWeight: 500,
                color: "#F9F9F9",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              The best Peptide Sciences alternative in 2026.
            </h1>
            <p
              className="text-lg max-w-2xl mb-8"
              style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}
            >
              Peptide Sciences was the gold standard — HPLC-verified, US-manufactured, COAs on every lot. Then they shut down. Here's the replacement that holds the same bar.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#B8A44C", color: "#010101" }}
              >
                Browse the Catalog <ArrowRight size={16} />
              </Link>
              <div
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-sm"
                style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: "#A0A0A0" }}
              >
                Use code <strong style={{ color: "#B8A44C" }}>PS2026</strong> for 10% off your first order
              </div>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section
          className="px-6 py-5"
          style={{ backgroundColor: "#0e0e0e", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-x-8 gap-y-3 items-center">
              {[
                "≥99% HPLC Purity",
                "Mass Spec on Every Lot",
                "Publicly Verifiable COAs",
                "US-Synthesized",
                "Cold-Chain Every Order",
                "50+ Compounds",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={13} style={{ color: "#B8A44C" }} />
                  <span className="text-xs" style={{ color: "#A0A0A0" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What happened section */}
        <section className="px-6 py-20 md:py-28" style={{ backgroundColor: "#EAE7E3" }}>
          <div className="max-w-4xl mx-auto">
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#B8A44C" }}>
              What Happened
            </p>
            <h2
              className="text-2xl md:text-3xl mb-6"
              style={{ fontWeight: 500, color: "#010101", letterSpacing: "-0.01em", lineHeight: 1.2 }}
            >
              Why Peptide Sciences shut down
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p
                  className="text-base mb-4"
                  style={{ color: "#444", lineHeight: 1.8, fontWeight: 300 }}
                >
                  In March 2026, Peptide Sciences voluntarily ceased operations. No acquisition. No
                  successor. No public statement beyond a brief notice on their website.
                  Researchers who had relied on them for years were left without a vetted source.
                </p>
                <p
                  className="text-base"
                  style={{ color: "#444", lineHeight: 1.8, fontWeight: 300 }}
                >
                  The core problem with the alternatives: most don't hold the same quality bar.
                  Many vendors sell 5mg vials instead of 10mg. Some use third-party testing from
                  labs with unverifiable COA codes. Others cut corners on cold-chain, shipping
                  lyophilized peptides in standard packaging that compromises integrity in transit.
                </p>
              </div>
              <div
                className="rounded-lg p-6"
                style={{ backgroundColor: "#F9F9F9", border: "1px solid rgba(0,0,0,0.07)" }}
              >
                <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#B8A44C" }}>
                  The gap we fill
                </p>
                <ul className="space-y-3">
                  {[
                    "Same ≥99% HPLC purity minimums",
                    "Mass spectrometry identity confirmation on every compound",
                    "Lot-specific COAs — publicly posted for independent verification",
                    "US-synthesized, cold-chain fulfilled every order",
                    "50+ compounds — the full peptide spectrum",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} style={{ color: "#22c55e", flexShrink: 0, marginTop: 2 }} />
                      <span className="text-sm" style={{ color: "#333", fontWeight: 300, lineHeight: 1.6 }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="px-6 py-20 md:py-28">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#B8A44C" }}>
              Side-by-Side
            </p>
            <h2
              className="text-2xl md:text-3xl mb-10"
              style={{ fontWeight: 500, color: "#010101", letterSpacing: "-0.01em", lineHeight: 1.2 }}
            >
              Peptide Sciences vs. Nexphoria
            </h2>
            <div
              className="rounded-lg overflow-hidden"
              style={{ border: "1px solid rgba(0,0,0,0.08)" }}
            >
              {/* Table header */}
              <div
                className="grid grid-cols-3 gap-0"
                style={{ backgroundColor: "#010101" }}
              >
                <div className="px-5 py-4">
                  <span className="text-xs uppercase tracking-widest" style={{ color: "#666" }}>
                    Feature
                  </span>
                </div>
                <div className="px-5 py-4" style={{ borderLeft: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="flex items-center gap-2">
                    <XCircle size={14} style={{ color: "#ef4444" }} />
                    <span className="text-xs font-medium" style={{ color: "#f9f9f9" }}>
                      Peptide Sciences
                    </span>
                  </div>
                  <span className="text-xs" style={{ color: "#ef4444" }}>Closed March 2026</span>
                </div>
                <div className="px-5 py-4" style={{ borderLeft: "1px solid rgba(255,255,255,0.06)", backgroundColor: "rgba(184,164,76,0.08)" }}>
                  <span className="text-xs font-medium" style={{ color: "#B8A44C" }}>
                    Nexphoria
                  </span>
                  <div className="text-xs" style={{ color: "#666" }}>In stock now</div>
                </div>
              </div>

              {/* Rows */}
              {comparisonRows.map((row, i) => (
                <div
                  key={row.feature}
                  className="grid grid-cols-3 gap-0"
                  style={{
                    borderTop: "1px solid rgba(0,0,0,0.06)",
                    backgroundColor: i % 2 === 0 ? "#fff" : "#fafafa",
                  }}
                >
                  <div className="px-5 py-4">
                    <span className="text-sm" style={{ color: "#010101", fontWeight: 500 }}>
                      {row.feature}
                    </span>
                  </div>
                  <div className="px-5 py-4" style={{ borderLeft: "1px solid rgba(0,0,0,0.06)" }}>
                    <StatusCell label={row.ps.label} status={row.ps.status as "ok" | "warn" | "bad"} />
                  </div>
                  <div className="px-5 py-4" style={{ borderLeft: "1px solid rgba(0,0,0,0.06)", backgroundColor: "rgba(184,164,76,0.03)" }}>
                    <StatusCell label={row.nx.label} status={row.nx.status as "ok" | "warn" | "bad"} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Switching CTA */}
        <section className="px-6 py-20 md:py-28" style={{ backgroundColor: "#010101" }}>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#B8A44C" }}>
                  For Former PS Customers
                </p>
                <h2
                  className="text-2xl md:text-3xl mb-6"
                  style={{ fontWeight: 500, color: "#F9F9F9", letterSpacing: "-0.01em", lineHeight: 1.2 }}
                >
                  The switching process is straightforward.
                </h2>
                <ol className="space-y-5">
                  {[
                    {
                      n: "1",
                      title: "Browse our catalog",
                      desc: "We stock the full peptide spectrum — everything PS carried, plus 20+ compounds they didn't.",
                    },
                    {
                      n: "2",
                      title: "Your protocols work identically",
                      desc: "Same purity standards, same lyophilized format, same reconstitution process. No adjustments needed.",
                    },
                    {
                      n: "3",
                      title: "10% off your first order",
                      desc: "Use code PS2026 at checkout. No minimum.",
                    },
                  ].map((step) => (
                    <li key={step.n} className="flex items-start gap-4">
                      <div
                        className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold"
                        style={{ backgroundColor: "#B8A44C", color: "#010101" }}
                      >
                        {step.n}
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-1" style={{ color: "#F9F9F9" }}>
                          {step.title}
                        </p>
                        <p className="text-sm" style={{ color: "#A0A0A0", fontWeight: 300, lineHeight: 1.6 }}>
                          {step.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div
                className="rounded-xl p-8"
                style={{ backgroundColor: "rgba(184,164,76,0.08)", border: "1px solid rgba(184,164,76,0.2)" }}
              >
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#B8A44C" }}>
                  Former Peptide Sciences Customers
                </p>
                <p
                  className="text-3xl font-semibold mb-2"
                  style={{ color: "#B8A44C", letterSpacing: "-0.02em" }}
                >
                  PS2026
                </p>
                <p className="text-sm mb-6" style={{ color: "#A0A0A0", fontWeight: 300 }}>
                  10% off your first Nexphoria order. No minimum order required.
                </p>
                <Link
                  href="/products"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-medium transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#B8A44C", color: "#010101" }}
                >
                  Browse the Compound Catalog <ArrowRight size={16} />
                </Link>
                <Link
                  href="/coa"
                  className="w-full inline-flex items-center justify-center gap-2 mt-3 px-6 py-3.5 rounded-lg text-sm transition-opacity hover:opacity-80"
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "#A0A0A0",
                  }}
                >
                  View COAs Before You Order
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-20 md:py-28">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#B8A44C" }}>
              FAQ
            </p>
            <h2
              className="text-2xl md:text-3xl mb-10"
              style={{ fontWeight: 500, color: "#010101", letterSpacing: "-0.01em" }}
            >
              Common questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-lg p-6"
                  style={{ backgroundColor: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}
                >
                  <p className="text-base font-medium mb-2" style={{ color: "#010101" }}>
                    {faq.q}
                  </p>
                  <p className="text-sm" style={{ color: "#555", lineHeight: 1.75, fontWeight: 300 }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research note */}
        <div
          className="mx-6 mb-6 max-w-3xl md:mx-auto px-5 py-4 rounded-lg text-xs"
          style={{ background: "rgba(0,0,0,0.04)", borderLeft: "3px solid #B8A44C", color: "#777", lineHeight: 1.7 }}
        >
          <strong style={{ color: "#010101" }}>Research Use Only: </strong>
          All Nexphoria compounds are sold exclusively for qualified research purposes. They are not intended for human consumption, therapeutic use, or diagnostic purposes.
        </div>
      </div>
    </>
  );
}
