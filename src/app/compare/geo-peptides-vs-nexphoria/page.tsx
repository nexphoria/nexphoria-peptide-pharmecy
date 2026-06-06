import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nexphoria vs. Geo Peptides: Purity, COAs & Cold-Chain Compared 2026",
  description:
    "Geo Peptides is a budget-tier vendor with limited transparency. Here's a full side-by-side comparison with Nexphoria on purity standards, COA verifiability, and cold-chain shipping.",
  openGraph: {
    title: "Nexphoria vs. Geo Peptides: Purity, COAs & Cold-Chain Compared 2026",
    description:
      "Geo Peptides vs Nexphoria: HPLC purity, COA data chain, cold-chain shipping defaults, and US manufacturing — full comparison for research peptide buyers.",
    url: "https://nexphoria.com/compare/geo-peptides-vs-nexphoria",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://nexphoria.com/compare/geo-peptides-vs-nexphoria" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Geo Peptides a legitimate vendor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Geo Peptides operates in the research peptide space with competitive pricing, but its COA documentation is limited in transparency. Independent verification of batch identifiers, testing lab names, and mass spec data is not consistently available from their product pages.",
      },
    },
    {
      "@type": "Question",
      name: "How does Geo Peptides' purity compare to Nexphoria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Geo Peptides states purity claims on product pages, but the supporting COA data is not always independently verifiable with named labs or lot-specific identifiers. Nexphoria posts lot-specific COAs with HPLC and mass spec data, naming the testing lab and batch number on every compound.",
      },
    },
    {
      "@type": "Question",
      name: "Does Geo Peptides ship with cold packs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Geo Peptides does not include cold-chain shipping by default. Nexphoria ships every order with cold packs in insulated mailers to protect peptide integrity from warehouse to delivery.",
      },
    },
    {
      "@type": "Question",
      name: "Is Nexphoria more expensive than Geo Peptides?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nexphoria's pricing reflects HPLC + MS testing, lot-specific COA posting, and cold-chain shipping included on every order. Geo Peptides is priced lower, but the documentation chain and shipping standards are not equivalent. For researchers prioritizing data integrity, the price difference is covered by the testing infrastructure.",
      },
    },
  ],
};

type RowStatus = "ok" | "warn" | "bad";

const comparisonRows: Array<{
  feature: string;
  gp: { label: string; status: RowStatus };
  nx: { label: string; status: RowStatus };
}> = [
  {
    feature: "Pricing",
    gp: { label: "Budget tier — low price point", status: "warn" },
    nx: { label: "Competitive mid-tier with testing included", status: "ok" },
  },
  {
    feature: "COA Verifiability",
    gp: { label: "COAs present; lab names often unspecified", status: "bad" },
    nx: { label: "Named lab, lot-specific, mass spec, verifiable", status: "ok" },
  },
  {
    feature: "Purity Standard",
    gp: { label: "≥98% stated; verification limited", status: "warn" },
    nx: { label: "≥99% HPLC + MS confirmed, publicly posted", status: "ok" },
  },
  {
    feature: "Cold-Chain Shipping",
    gp: { label: "Not included by default", status: "bad" },
    nx: { label: "Cold-pack every order, included", status: "ok" },
  },
  {
    feature: "US Manufacturing",
    gp: { label: "Origin not clearly disclosed", status: "bad" },
    nx: { label: "Confirmed US synthesis", status: "ok" },
  },
  {
    feature: "Delivery Format",
    gp: { label: "Lyophilized and liquid formats", status: "warn" },
    nx: { label: "Lyophilized only (research standard)", status: "ok" },
  },
  {
    feature: "Research Content",
    gp: { label: "Minimal — basic product descriptions", status: "bad" },
    nx: { label: "500+ technical research articles", status: "ok" },
  },
  {
    feature: "Subscription Discount",
    gp: { label: "None", status: "bad" },
    nx: { label: "15% recurring subscription discount", status: "ok" },
  },
  {
    feature: "Loyalty Program",
    gp: { label: "None documented", status: "bad" },
    nx: { label: "Points on every order", status: "ok" },
  },
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
    title: "The COA problem: stated purity vs. verified purity",
    body: "Geo Peptides lists purity percentages on product pages. But a number on a page isn't verification — it's a claim. What matters to researchers is whether that purity figure is backed by an independent third-party HPLC test, from a named laboratory, with a lot-specific batch identifier you can cross-reference.\n\nNexphoria's COA system provides all of that. Every compound has a lot number, a named testing facility, HPLC chromatogram data, and mass spec confirmation. The difference between 'stated purity' and 'independently verified purity' matters when your research depends on knowing what's actually in the vial.",
  },
  {
    title: "Budget pricing and what it reflects",
    body: "Geo Peptides competes primarily on price. That pricing is sustainable only if somewhere in the chain, costs are being cut. In the peptide vendor space, cuts typically appear in testing frequency, COA depth, synthesis sourcing, or shipping infrastructure.\n\nNexphoria's pricing includes third-party HPLC and MS testing on every compound, lot-specific COA documentation, US synthesis, and cold-chain shipping on every order. The price difference between a budget vendor and a fully-documented vendor is the cost of the testing and infrastructure — not margin.",
  },
  {
    title: "Cold-chain: the detail budget vendors skip",
    body: "Lyophilized peptides are temperature-sensitive. A vial that sits in a hot mail truck for an afternoon, or a package left at a door on a 90°F day, accumulates degradation risk with each thermal excursion.\n\nGeo Peptides does not ship with cold packs by default. Nexphoria includes cold packs and insulated mailers on every order regardless of order size or delivery destination. This isn't a premium service — it's the minimum that research-grade handling requires.",
  },
  {
    title: "Manufacturing origin and what transparency requires",
    body: "Where a peptide is synthesized affects its regulatory environment, GMP compliance, and the standards applied during production. Geo Peptides does not clearly disclose the synthesis origin of their compounds.\n\nNexphoria manufactures in the US, with US-based GMP-aligned synthesis facilities. This isn't just about nationalism — it's about the documentation chain. US-synthesized compounds can be more easily audited, tested, and traced than compounds with undisclosed international origins.",
  },
];

const faqs = [
  {
    q: "Is Geo Peptides a legitimate vendor?",
    a: "Geo Peptides operates in the research peptide space with competitive pricing, but its COA documentation is limited in transparency. Independent verification of batch identifiers, testing lab names, and mass spec data is not consistently available from their product pages.",
  },
  {
    q: "How does Geo Peptides' purity compare to Nexphoria?",
    a: "Geo Peptides states purity claims on product pages, but the supporting COA data is not always independently verifiable with named labs or lot-specific identifiers. Nexphoria posts lot-specific COAs with HPLC and mass spec data, naming the testing lab and batch number on every compound.",
  },
  {
    q: "Does Geo Peptides ship with cold packs?",
    a: "Geo Peptides does not include cold-chain shipping by default. Nexphoria ships every order with cold packs in insulated mailers to protect peptide integrity from warehouse to delivery.",
  },
  {
    q: "Is Nexphoria more expensive than Geo Peptides?",
    a: "Nexphoria's pricing reflects HPLC + MS testing, lot-specific COA posting, and cold-chain shipping included on every order. Geo Peptides is priced lower, but the documentation chain and shipping standards are not equivalent. For researchers prioritizing data integrity, the price difference is covered by the testing infrastructure.",
  },
];

export default function GeoPeptidesVsNexphoriaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
        {/* Hero */}
        <section
          className="px-6 pt-20 pb-24 md:pt-28 md:pb-32"
          style={{ backgroundColor: "#010101" }}
        >
          <div className="max-w-4xl mx-auto">
            <Breadcrumb
              variant="dark"
              className="mb-6"
              items={[
                { label: "Home", href: "/" },
                { label: "Compare", href: "/compare" },
                { label: "vs Geo Peptides" },
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
              Nexphoria vs. Geo Peptides.
            </h1>
            <p
              className="text-lg max-w-2xl mb-8"
              style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}
            >
              Geo Peptides competes on price. When you examine what the price difference actually
              buys — COA depth, manufacturing origin, cold-chain defaults — the value comparison
              looks different.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/coa"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#B8A44C", color: "#010101" }}
              >
                Verify Our COAs <ArrowRight size={16} />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#A0A0A0",
                }}
              >
                Browse Catalog
              </Link>
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
              style={{ fontWeight: 500, color: "#010101", letterSpacing: "-0.01em" }}
            >
              Geo Peptides vs. Nexphoria
            </h2>

            <div
              className="rounded-lg overflow-hidden"
              style={{ border: "1px solid rgba(0,0,0,0.08)" }}
            >
              <div className="grid grid-cols-3" style={{ backgroundColor: "#010101" }}>
                <div className="px-5 py-4">
                  <span className="text-xs uppercase tracking-widest" style={{ color: "#666" }}>
                    Feature
                  </span>
                </div>
                <div
                  className="px-5 py-4"
                  style={{ borderLeft: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <span className="text-xs font-medium" style={{ color: "#f9f9f9" }}>
                    Geo Peptides
                  </span>
                </div>
                <div
                  className="px-5 py-4"
                  style={{
                    borderLeft: "1px solid rgba(255,255,255,0.06)",
                    backgroundColor: "rgba(184,164,76,0.08)",
                  }}
                >
                  <span className="text-xs font-medium" style={{ color: "#B8A44C" }}>
                    Nexphoria
                  </span>
                </div>
              </div>

              {comparisonRows.map((row, i) => (
                <div
                  key={row.feature}
                  className="grid grid-cols-3"
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
                  <div
                    className="px-5 py-4"
                    style={{ borderLeft: "1px solid rgba(0,0,0,0.06)" }}
                  >
                    <StatusCell label={row.gp.label} status={row.gp.status} />
                  </div>
                  <div
                    className="px-5 py-4"
                    style={{
                      borderLeft: "1px solid rgba(0,0,0,0.06)",
                      backgroundColor: "rgba(184,164,76,0.03)",
                    }}
                  >
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
                  style={{
                    backgroundColor: "#F9F9F9",
                    border: "1px solid rgba(0,0,0,0.07)",
                    borderLeft: "3px solid #B8A44C",
                  }}
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
                  <p
                    className="text-sm"
                    style={{ color: "#555", lineHeight: 1.75, fontWeight: 300 }}
                  >
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20 md:py-28" style={{ backgroundColor: "#EAE7E3" }}>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#B8A44C" }}>
              Verify Before You Order
            </p>
            <h2
              className="text-3xl md:text-4xl mb-5 font-medium tracking-tight"
              style={{ color: "#010101" }}
            >
              See the COAs first.
            </h2>
            <p
              className="text-base mb-8 max-w-xl mx-auto"
              style={{ color: "#555", lineHeight: 1.7, fontWeight: 300 }}
            >
              Every Nexphoria lot is posted publicly. Check the testing lab, batch number, and
              methodology before placing an order.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/coa" className="btn-primary">
                View COAs
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid rgba(0,0,0,0.15)",
                  color: "#555",
                }}
              >
                Browse Catalog
              </Link>
            </div>
          </div>
        </section>

        <div
          className="mx-6 mb-6 max-w-3xl md:mx-auto px-5 py-4 rounded-lg text-xs"
          style={{
            background: "rgba(0,0,0,0.04)",
            borderLeft: "3px solid #B8A44C",
            color: "#777",
            lineHeight: 1.7,
          }}
        >
          <strong style={{ color: "#010101" }}>Research Use Only: </strong>
          All Nexphoria compounds are sold exclusively for qualified research purposes and are not
          intended for human consumption, therapeutic use, or diagnostic purposes.
        </div>
      </div>
    </>
  );
}
