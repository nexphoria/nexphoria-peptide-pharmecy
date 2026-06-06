import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Pure Rawz vs. Nexphoria: Peptide Quality, COAs & Cold-Chain 2026",
  description:
    "Pure Rawz is one of the most searched peptide vendors — but how does it hold up on purity verification, cold-chain shipping, and US manufacturing? Full 2026 comparison with Nexphoria.",
  openGraph: {
    title: "Pure Rawz vs. Nexphoria: Peptide Quality, COAs & Cold-Chain 2026",
    description:
      "Pure Rawz vs Nexphoria: HPLC purity verification, COA data chain, cold-chain shipping defaults, US manufacturing, and research depth compared side by side.",
    url: "https://nexphoria.com/compare/pure-rawz-vs-nexphoria",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://nexphoria.com/compare/pure-rawz-vs-nexphoria" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Pure Rawz a legitimate research compound vendor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pure Rawz is a well-known vendor in the research compound space, particularly for SARMs. They also carry peptides. The concerns researchers raise include: COA depth (documents exist but mass spec and named-lab data are not always present), liquid compound formats which carry stability risks, and cold-chain shipping that is not included by default on peptide orders.",
      },
    },
    {
      "@type": "Question",
      name: "Does Pure Rawz have good COAs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pure Rawz provides COA documents on their products. However, the depth of documentation varies — mass spectrometry confirmation and named third-party testing labs are not consistently published. Nexphoria posts lot-specific HPLC and MS data with the testing lab named on every compound.",
      },
    },
    {
      "@type": "Question",
      name: "Does Pure Rawz sell peptides in liquid form?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Pure Rawz offers peptides in liquid format. Liquid peptide formulations have shorter shelf life, higher contamination risk, and reduced stability compared to lyophilized formats. Nexphoria sells exclusively lyophilized compounds — the research-standard format for maximum stability and shelf life.",
      },
    },
    {
      "@type": "Question",
      name: "How does Pure Rawz compare to Nexphoria on purity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pure Rawz states ≥98% purity on most products. Nexphoria verifies ≥99% purity via HPLC and mass spectrometry, with results publicly posted per lot. The difference is verification depth: Pure Rawz has COAs, Nexphoria has independently verifiable COAs with named labs and full data chains.",
      },
    },
  ],
};

type RowStatus = "ok" | "warn" | "bad";

const comparisonRows: Array<{
  feature: string;
  pr: { label: string; status: RowStatus };
  nx: { label: string; status: RowStatus };
}> = [
  {
    feature: "Pricing",
    pr: { label: "Mid-tier; competitive on SARMs, higher on peptides", status: "warn" },
    nx: { label: "Competitive mid-tier; testing included in price", status: "ok" },
  },
  {
    feature: "COA Verifiability",
    pr: { label: "COAs present; named labs and MS data inconsistent", status: "warn" },
    nx: { label: "Named lab, lot-specific, HPLC + mass spec, verifiable", status: "ok" },
  },
  {
    feature: "Purity Standard",
    pr: { label: "≥98% stated; MS confirmation not standard", status: "warn" },
    nx: { label: "≥99% HPLC + MS confirmed, publicly posted", status: "ok" },
  },
  {
    feature: "Cold-Chain Shipping",
    pr: { label: "Not included by default on peptide orders", status: "bad" },
    nx: { label: "Cold-pack every order, included", status: "ok" },
  },
  {
    feature: "Delivery Format",
    pr: { label: "Liquid and lyophilized — liquid raises stability concerns", status: "bad" },
    nx: { label: "Lyophilized only (research standard)", status: "ok" },
  },
  {
    feature: "US Manufacturing",
    pr: { label: "Not clearly disclosed for all compounds", status: "warn" },
    nx: { label: "Confirmed US synthesis, documented", status: "ok" },
  },
  {
    feature: "Research Content",
    pr: { label: "Basic product pages; limited technical depth", status: "bad" },
    nx: { label: "500+ technical research articles", status: "ok" },
  },
  {
    feature: "Catalog Focus",
    pr: { label: "Primarily SARMs; peptides secondary", status: "warn" },
    nx: { label: "Peptide-specialist; 60+ compounds in catalog", status: "ok" },
  },
  {
    feature: "Subscription Discount",
    pr: { label: "Coupon codes and occasional promos", status: "warn" },
    nx: { label: "15% recurring subscription discount", status: "ok" },
  },
  {
    feature: "Loyalty Program",
    pr: { label: "Rewards program available", status: "warn" },
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
    title: "Pure Rawz is a SARMs company that also sells peptides",
    body: "Pure Rawz built its reputation primarily on SARMs — selective androgen receptor modulators — and expanded into peptides as the market grew. This matters because peptides require different handling infrastructure than small-molecule research compounds: lyophilization over liquid format, cold-chain shipping, and HPLC + mass spec testing rather than basic purity assays.\n\nNexphoria was built specifically for peptides from the ground up. The testing protocols, shipping infrastructure, and catalog depth reflect that specialization. Pure Rawz's peptide offering exists alongside — and behind — their core SARM business.",
  },
  {
    title: "Liquid peptide format: the stability problem researchers need to know",
    body: "Pure Rawz sells peptides in liquid format alongside lyophilized options. Liquid peptide formulations are convenient — no reconstitution required. But the stability tradeoffs are significant: liquid peptides have shorter shelf life, degrade faster with temperature fluctuations, carry higher contamination risk from the solvent carrier, and are harder to verify for purity than lyophilized powder.\n\nLyophilized (freeze-dried) peptides are the research standard for a reason. They remain stable over longer periods, resist thermal degradation better during transit, and are easier to accurately dose from a known starting concentration. Nexphoria sells exclusively lyophilized compounds.",
  },
  {
    title: "COA depth: the difference between a document and verified data",
    body: "Pure Rawz provides COA documentation. The question isn't whether COAs exist — it's whether the data in them is independently verifiable. A verifiable COA includes the name of the testing laboratory (so you can confirm they're accredited), a lot-specific batch number that matches your order, HPLC chromatogram output, and mass spectrometry molecular identity confirmation.\n\nPure Rawz's COA system doesn't consistently deliver all of those elements — particularly the named lab and mass spec data. Nexphoria posts every one of those data points, publicly, per lot, for every compound in the catalog.",
  },
  {
    title: "Cold-chain shipping: non-negotiable for peptide integrity",
    body: "Peptides are temperature-sensitive proteins. A summer delivery, a package left outside, a warehouse without climate control — each thermal excursion degrades the compound in ways that aren't visible when you open the vial.\n\nPure Rawz does not include cold-chain packaging by default on peptide orders. This creates an integrity gap between leaving the warehouse and arriving at the researcher's lab. Nexphoria ships every order — regardless of value, size, or season — with cold packs in insulated mailers. The cold chain starts when the vial is packed and the goal is continuity through to the researcher's freezer.",
  },
];

const faqs = [
  {
    q: "Is Pure Rawz a legitimate research compound vendor?",
    a: "Pure Rawz is a well-known vendor in the research compound space, particularly for SARMs. They also carry peptides. The concerns researchers raise include: COA depth (documents exist but mass spec and named-lab data are not always present), liquid compound formats which carry stability risks, and cold-chain shipping that is not included by default on peptide orders.",
  },
  {
    q: "Does Pure Rawz have good COAs?",
    a: "Pure Rawz provides COA documents on their products. However, the depth of documentation varies — mass spectrometry confirmation and named third-party testing labs are not consistently published. Nexphoria posts lot-specific HPLC and MS data with the testing lab named on every compound.",
  },
  {
    q: "Does Pure Rawz sell peptides in liquid form?",
    a: "Yes, Pure Rawz offers peptides in liquid format. Liquid peptide formulations have shorter shelf life, higher contamination risk, and reduced stability compared to lyophilized formats. Nexphoria sells exclusively lyophilized compounds — the research-standard format for maximum stability and shelf life.",
  },
  {
    q: "How does Pure Rawz compare to Nexphoria on purity?",
    a: "Pure Rawz states ≥98% purity on most products. Nexphoria verifies ≥99% purity via HPLC and mass spectrometry, with results publicly posted per lot. The difference is verification depth: Pure Rawz has COAs, Nexphoria has independently verifiable COAs with named labs and full data chains.",
  },
];

export default function PureRawzVsNexphoriaPage() {
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
                { label: "vs Pure Rawz" },
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
              Pure Rawz vs. Nexphoria.
            </h1>
            <p
              className="text-lg max-w-2xl mb-8"
              style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}
            >
              Pure Rawz is well-known in the research compound market. When you examine their
              peptide-specific documentation, delivery formats, and cold-chain standards, the
              comparison points directly at what a peptide-specialist vendor does differently.
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
              Pure Rawz vs. Nexphoria
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
                    Pure Rawz
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
                    <StatusCell label={row.pr.label} status={row.pr.status} />
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
