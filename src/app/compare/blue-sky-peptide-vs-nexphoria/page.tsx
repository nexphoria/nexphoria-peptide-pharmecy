import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nexphoria vs Blue Sky Peptide: Direct Comparison 2026",
  description:
    "How does Blue Sky Peptide compare to Nexphoria? We break down purity standards, vial sizing, COA verification, cold-chain shipping, and pricing — so you can decide with complete information.",
  openGraph: {
    title: "Nexphoria vs Blue Sky Peptide: Direct Comparison 2026",
    description:
      "Blue Sky Peptide sells 5mg vials only and ships standard. Nexphoria offers 10mg vials, cold-chain every order, and publicly verifiable COAs. Full comparison.",
    url: "https://nexphoria.com/compare/blue-sky-peptide-vs-nexphoria",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://nexphoria.com/compare/blue-sky-peptide-vs-nexphoria" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Blue Sky Peptide a legitimate vendor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Blue Sky Peptide is an established US vendor with years in the market. The primary limitations are vial sizing (5mg only), limited COA transparency, and no cold-chain shipping guarantee — areas where Nexphoria specifically differentiates.",
      },
    },
    {
      "@type": "Question",
      name: "Is Nexphoria more expensive than Blue Sky Peptide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Competitive on per-dose pricing. Factor in that you're not buying 2× vials to achieve 10mg doses — the effective per-dose cost at Nexphoria is lower.",
      },
    },
    {
      "@type": "Question",
      name: "Do you carry the same compounds as Blue Sky Peptide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, plus more. Nexphoria stocks 50+ compounds including GLP-1 agonists, nootropic peptides, and longevity stacks that Blue Sky doesn't offer.",
      },
    },
    {
      "@type": "Question",
      name: "Why does vial size matter for research?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 5mg vial forces two reconstitutions to achieve a 10mg working stock. Each additional reconstitution step introduces a contamination vector and a concentration uncertainty. 10mg single vials eliminate this.",
      },
    },
  ],
};

type RowStatus = "ok" | "warn" | "bad";

const comparisonRows: Array<{ feature: string; bsp: { label: string; status: RowStatus }; nx: { label: string; status: RowStatus } }> = [
  { feature: "Purity Standard", bsp: { label: "Claimed ≥98%", status: "warn" }, nx: { label: "≥99% HPLC verified", status: "ok" } },
  { feature: "Mass Spec Identity", bsp: { label: "Not specified", status: "bad" }, nx: { label: "Every compound", status: "ok" } },
  { feature: "BPC-157 Vial Size", bsp: { label: "5mg only", status: "bad" }, nx: { label: "10mg available", status: "ok" } },
  { feature: "TB-500 Vial Size", bsp: { label: "5mg (need 2× for 10mg)", status: "bad" }, nx: { label: "10mg single vial", status: "ok" } },
  { feature: "Cold-Chain Shipping", bsp: { label: "Standard packaging", status: "bad" }, nx: { label: "Cold-pack every order", status: "ok" } },
  { feature: "COA Verification", bsp: { label: "Internal / limited public", status: "warn" }, nx: { label: "Publicly posted, lot-specific", status: "ok" } },
  { feature: "Subscription Discount", bsp: { label: "None", status: "bad" }, nx: { label: "15% recurring", status: "ok" } },
  { feature: "Research Content", bsp: { label: "Minimal", status: "bad" }, nx: { label: "300+ technical articles", status: "ok" } },
  { feature: "Free Shipping", bsp: { label: "Order threshold", status: "warn" }, nx: { label: "Cold-chain included", status: "ok" } },
  { feature: "Website / UX", bsp: { label: "Dated checkout", status: "warn" }, nx: { label: "Modern, research-focused", status: "ok" } },
];

const STATUS_COLORS: Record<RowStatus, string> = {
  ok: "#22c55e",
  warn: "#f59e0b",
  bad: "#ef4444",
};

const STATUS_ICONS: Record<RowStatus, typeof CheckCircle2> = {
  ok: CheckCircle2,
  warn: AlertCircle,
  bad: XCircle,
};

function StatusCell({ label, status }: { label: string; status: RowStatus }) {
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

const differentiators = [
  {
    title: "The 5mg vial problem",
    body:
      "Blue Sky Peptide's most documented customer frustration — visible across r/Peptides and research community forums — is their insistence on 5mg vials for compounds researchers typically work with at 10mg doses. This means purchasing two vials for what should be a single-vial protocol, doubling reconstitution steps and introducing unnecessary concentration uncertainty.\n\nNexphoria offers 10mg vials as standard on BPC-157, TB-500, and other high-demand compounds. One vial. One reconstitution. Clean lot tracking.",
  },
  {
    title: "COA transparency gap",
    body:
      "Blue Sky Peptide provides certificates of analysis, but making direct, independent verification of the testing lab difficult. When researchers can't trace a COA to a verifiable lab batch and lot number, the entire quality assurance chain is undermined.\n\nEvery Nexphoria COA includes the testing lab name, lot number, methodology, and analyst details — published publicly on our product pages so you can verify independently before ordering.",
  },
  {
    title: "Cold-chain or cold luck",
    body:
      "Lyophilized peptides are stable at ambient temperature for limited windows, but thermal stress during shipping accelerates degradation — especially in summer months. Blue Sky ships standard packaging. Nexphoria ships with cold packs in insulated mailers on every order, regardless of season or order size.",
  },
];

const faqs = [
  {
    q: "Is Blue Sky Peptide a legitimate vendor?",
    a: "Blue Sky Peptide is an established US vendor with years in the market. The primary limitations are vial sizing (5mg only), limited COA transparency, and no cold-chain shipping guarantee — areas where Nexphoria specifically differentiates.",
  },
  {
    q: "Is Nexphoria more expensive than Blue Sky?",
    a: "Competitive on per-dose pricing. Factor in that you're not buying 2× vials to achieve 10mg doses — the effective per-dose cost at Nexphoria is lower.",
  },
  {
    q: "Do you carry the same compounds as Blue Sky Peptide?",
    a: "Yes, plus more. Nexphoria stocks 50+ compounds including GLP-1 agonists, nootropic peptides, and longevity stacks that Blue Sky doesn't offer.",
  },
  {
    q: "Why does vial size matter for research?",
    a: "A 5mg vial forces two reconstitutions to achieve a 10mg working stock. Each additional reconstitution step introduces a contamination vector and a concentration uncertainty. 10mg single vials eliminate this.",
  },
];

export default function BlueSkyPeptideVsNexporiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
                { label: "vs Blue Sky Peptide" },
              ]}
            />
            <p className="eyebrow mb-5" style={{ color: "#B8A44C" }}>
              Vendor Comparison
            </p>
            <h1
              className="text-4xl md:text-5xl mb-6"
              style={{
                fontWeight: 500,
                color: "#F9F9F9",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Nexphoria vs. Blue Sky Peptide.
            </h1>
            <p
              className="text-lg max-w-2xl mb-8"
              style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}
            >
              A direct comparison on purity standards, vial sizing, COA verification, cold-chain
              shipping, and pricing — the criteria that matter for research procurement.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#B8A44C", color: "#010101" }}
            >
              Browse the Catalog <ArrowRight size={16} />
            </Link>
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
              style={{ fontWeight: 500, color: "#010101", letterSpacing: "-0.01em" }}
            >
              Blue Sky Peptide vs. Nexphoria
            </h2>

            <div className="rounded-lg overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
              {/* Header */}
              <div className="grid grid-cols-3" style={{ backgroundColor: "#010101" }}>
                <div className="px-5 py-4">
                  <span className="text-xs uppercase tracking-widest" style={{ color: "#666" }}>Feature</span>
                </div>
                <div className="px-5 py-4" style={{ borderLeft: "1px solid rgba(255,255,255,0.06)" }}>
                  <span className="text-xs font-medium" style={{ color: "#f9f9f9" }}>Blue Sky Peptide</span>
                </div>
                <div className="px-5 py-4" style={{ borderLeft: "1px solid rgba(255,255,255,0.06)", backgroundColor: "rgba(184,164,76,0.08)" }}>
                  <span className="text-xs font-medium" style={{ color: "#B8A44C" }}>Nexphoria</span>
                </div>
              </div>

              {comparisonRows.map((row, i) => (
                <div
                  key={row.feature}
                  className="grid grid-cols-3"
                  style={{ borderTop: "1px solid rgba(0,0,0,0.06)", backgroundColor: i % 2 === 0 ? "#fff" : "#fafafa" }}
                >
                  <div className="px-5 py-4">
                    <span className="text-sm" style={{ color: "#010101", fontWeight: 500 }}>{row.feature}</span>
                  </div>
                  <div className="px-5 py-4" style={{ borderLeft: "1px solid rgba(0,0,0,0.06)" }}>
                    <StatusCell label={row.bsp.label} status={row.bsp.status} />
                  </div>
                  <div className="px-5 py-4" style={{ borderLeft: "1px solid rgba(0,0,0,0.06)", backgroundColor: "rgba(184,164,76,0.03)" }}>
                    <StatusCell label={row.nx.label} status={row.nx.status} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key differentiators */}
        <section className="px-6 py-20 md:py-28" style={{ backgroundColor: "#EAE7E3" }}>
          <div className="max-w-4xl mx-auto">
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#B8A44C" }}>
              The Details That Matter
            </p>
            <h2
              className="text-2xl md:text-3xl mb-10"
              style={{ fontWeight: 500, color: "#010101", letterSpacing: "-0.01em" }}
            >
              Where the gap shows up
            </h2>
            <div className="space-y-8">
              {differentiators.map((d) => (
                <div
                  key={d.title}
                  className="rounded-lg p-8"
                  style={{ backgroundColor: "#F9F9F9", border: "1px solid rgba(0,0,0,0.07)", borderLeft: "3px solid #B8A44C" }}
                >
                  <h3
                    className="text-lg mb-4"
                    style={{ fontWeight: 500, color: "#010101", letterSpacing: "-0.01em" }}
                  >
                    {d.title}
                  </h3>
                  {d.body.split("\n\n").map((para, i) => (
                    <p
                      key={i}
                      className="text-base mb-3 last:mb-0"
                      style={{ color: "#444", lineHeight: 1.8, fontWeight: 300 }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-20 md:py-28">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#B8A44C" }}>FAQ</p>
            <h2 className="text-2xl md:text-3xl mb-10" style={{ fontWeight: 500, color: "#010101", letterSpacing: "-0.01em" }}>
              Common questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-lg p-6" style={{ backgroundColor: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}>
                  <p className="text-base font-medium mb-2" style={{ color: "#010101" }}>{faq.q}</p>
                  <p className="text-sm" style={{ color: "#555", lineHeight: 1.75, fontWeight: 300 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20 md:py-28" style={{ backgroundColor: "#EAE7E3" }}>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#B8A44C" }}>Research Catalog</p>
            <h2 className="text-3xl md:text-4xl mb-5 font-medium tracking-tight" style={{ color: "#010101" }}>
              Compare the full catalog.
            </h2>
            <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "#555", lineHeight: 1.7, fontWeight: 300 }}>
              50+ compounds. 10mg vials. Cold-chain shipping. Publicly verifiable COAs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/products" className="btn-primary">Browse the Catalog</Link>
              <Link
                href="/coa"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm"
                style={{ backgroundColor: "transparent", border: "1px solid rgba(0,0,0,0.15)", color: "#555" }}
              >
                View COAs First
              </Link>
            </div>
          </div>
        </section>

        <div
          className="mx-6 mb-6 max-w-3xl md:mx-auto px-5 py-4 rounded-lg text-xs"
          style={{ background: "rgba(0,0,0,0.04)", borderLeft: "3px solid #B8A44C", color: "#777", lineHeight: 1.7 }}
        >
          <strong style={{ color: "#010101" }}>Research Use Only: </strong>
          All Nexphoria compounds are sold exclusively for qualified research purposes and are not intended for human consumption, therapeutic use, or diagnostic purposes.
        </div>
      </div>
    </>
  );
}
