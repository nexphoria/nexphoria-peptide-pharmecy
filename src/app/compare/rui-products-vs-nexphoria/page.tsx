import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nexphoria vs. RUI Products: Research Peptide Vendor Comparison 2026",
  description:
    "RUI Products (Research University Inc.) was a pioneering US research compound supplier. We compare their historical standards to Nexphoria on COA depth, cold-chain logistics, and peptide infrastructure.",
  openGraph: {
    title: "Nexphoria vs. RUI Products: Research Peptide Vendor Comparison 2026",
    description:
      "RUI Products vs Nexphoria: purity documentation, cold-chain, lyophilized format, and endotoxin testing compared.",
    url: "https://nexphoria.com/compare/rui-products-vs-nexphoria",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://nexphoria.com/compare/rui-products-vs-nexphoria" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is RUI Products still operating?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RUI Products (Research University Inc.) is no longer actively operating. Researchers who relied on their catalog have been transitioning to vendors with more current quality infrastructure.",
      },
    },
    {
      "@type": "Question",
      name: "What is a good RUI Products alternative for peptide research?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nexphoria provides the full spectrum of research peptides with US-based third-party COAs, HPLC+MS purity documentation, LAL endotoxin testing, and cold-pack default shipping on every order.",
      },
    },
    {
      "@type": "Question",
      name: "Did RUI Products supply lyophilized peptides?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RUI Products supplied many compounds in liquid solution format. Nexphoria supplies exclusively in lyophilized vial format — the research-standard format used in published preclinical studies.",
      },
    },
    {
      "@type": "Question",
      name: "How does Nexphoria's COA system compare to RUI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nexphoria posts lot-specific COAs with HPLC chromatograms, mass spec molecular weight confirmation, LAL endotoxin results, and named US testing labs for every peptide compound — a substantially more rigorous documentation standard than RUI historically provided.",
      },
    },
  ],
};

type RowStatus = "ok" | "warn" | "bad";

const comparisonRows: Array<{
  feature: string;
  rui: { label: string; status: RowStatus };
  nx: { label: string; status: RowStatus };
}> = [
  {
    feature: "Operational Status",
    rui: { label: "No longer actively operating", status: "bad" },
    nx: { label: "Active — shipping daily", status: "ok" },
  },
  {
    feature: "Product Format",
    rui: { label: "Liquid solutions (primary format)", status: "bad" },
    nx: { label: "Lyophilized only (research standard)", status: "ok" },
  },
  {
    feature: "COA Documentation",
    rui: { label: "Basic; limited analytical depth", status: "warn" },
    nx: { label: "Named US lab, lot-specific, MS + HPLC", status: "ok" },
  },
  {
    feature: "Purity Standard",
    rui: { label: "Stated purity; limited third-party verification", status: "warn" },
    nx: { label: "≥99% HPLC + mass spec confirmed", status: "ok" },
  },
  {
    feature: "Cold-Chain Shipping",
    rui: { label: "Not documented as standard for peptides", status: "bad" },
    nx: { label: "Cold-pack every order, included", status: "ok" },
  },
  {
    feature: "Endotoxin Testing",
    rui: { label: "Not provided", status: "bad" },
    nx: { label: "LAL endotoxin screen on all peptides", status: "ok" },
  },
  {
    feature: "US-Based Testing Lab",
    rui: { label: "Not independently verified", status: "warn" },
    nx: { label: "Independent US laboratory", status: "ok" },
  },
  {
    feature: "Catalog Scope",
    rui: { label: "Mixed research chemicals catalog", status: "warn" },
    nx: { label: "Peptide-dedicated, 80+ compounds", status: "ok" },
  },
  {
    feature: "Peptide Research Content",
    rui: { label: "Minimal technical resources", status: "bad" },
    nx: { label: "550+ technical peptide articles", status: "ok" },
  },
  {
    feature: "Subscription Discount",
    rui: { label: "N/A", status: "bad" },
    nx: { label: "15% recurring subscription discount", status: "ok" },
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
    title: "The liquid format problem in peptide research",
    body: "RUI Products built its reputation supplying research compounds in liquid solution format — a convenient format that dominated the early US research compound market. The peptide research community has largely moved away from liquid peptides for a documented reason: aqueous peptide solutions degrade significantly faster than lyophilized powder.\n\nOnce in solution, peptides are vulnerable to oxidation, hydrolysis, and microbial contamination. Shelf life drops from years to months — and in warm conditions, to weeks. Every peer-reviewed preclinical peptide study uses lyophilized powder reconstituted immediately before use. Nexphoria ships exclusively in that format because integrity is the product, not convenience.",
  },
  {
    title: "Third-party COA documentation: depth matters",
    body: "RUI Products provided basic compound documentation, but independent verification of their testing claims — particularly for peptides — was not straightforward. For researchers whose experimental records need to withstand institutional review or publication disclosure, documentation quality is not a secondary concern.\n\nNexphoria publishes batch-specific COAs for every compound issued by an independent US-based analytical laboratory. Each COA includes HPLC purity analysis (≥99% standard), mass spectrometry molecular identity confirmation, LAL endotoxin results, and a laboratory contact verifiable through the lab's own portal. That level of documentation provenance is what differentiates a research-grade supplier from a legacy market participant.",
  },
  {
    title: "Cold-chain defaults: protecting compound integrity from warehouse to delivery",
    body: "Peptide stability during transit is a genuine quality variable. Multi-day ground shipping in summer months — or any shipping without thermal protection — exposes lyophilized peptides to temperature excursions that accelerate degradation and introduce batch variability.\n\nRUI Products did not document cold-chain shipping as a default standard for peptide orders. Nexphoria includes ice packs in insulated mailers on every peptide order, year-round, at no additional charge. For researchers where compound integrity is a controlled variable in their experimental design, cold-chain shipping documentation is part of the provenance chain — not an afterthought.",
  },
  {
    title: "Endotoxin testing: the missing metric most vendors skip",
    body: "HPLC purity measures compound identity and concentration. It does not detect bacterial endotoxins — lipopolysaccharides that can persist even in compounds showing >99% purity by HPLC and that produce significant pro-inflammatory responses in both in vitro cell culture and in vivo animal models.\n\nVirtually no legacy research compound suppliers — including RUI Products — ran LAL endotoxin screening on peptides as a standard part of their quality documentation. Nexphoria runs LAL endotoxin tests on all peptide compounds in addition to HPLC and mass spectrometry. For researchers where inflammatory baseline is a controlled experimental variable, this is not optional documentation.",
  },
];

const faqs = [
  {
    q: "Is RUI Products still operating?",
    a: "RUI Products (Research University Inc.) is no longer actively operating. Researchers who relied on their catalog have been transitioning to vendors with more current quality infrastructure.",
  },
  {
    q: "What is a good RUI Products alternative for peptide research?",
    a: "Nexphoria provides the full spectrum of research peptides with US-based third-party COAs, HPLC+MS purity documentation, LAL endotoxin testing, and cold-pack default shipping on every order.",
  },
  {
    q: "Did RUI Products supply lyophilized peptides?",
    a: "RUI Products supplied many compounds in liquid solution format. Nexphoria supplies exclusively in lyophilized vial format — the research-standard format used in published preclinical studies.",
  },
  {
    q: "How does Nexphoria's COA system compare to RUI?",
    a: "Nexphoria posts lot-specific COAs with HPLC chromatograms, mass spec molecular weight confirmation, LAL endotoxin results, and named US testing labs for every peptide compound — a substantially more rigorous documentation standard than RUI historically provided.",
  },
];

export default function RuiProductsVsNexphoriaPage() {
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
                { label: "vs RUI Products" },
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
              Nexphoria vs. RUI Products.
            </h1>
            <p
              className="text-lg max-w-2xl mb-8"
              style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}
            >
              RUI Products was a pioneering US research compound supplier. The standard has evolved.
              Here's how Nexphoria compares on the metrics that matter for peptide research today.
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
              RUI Products vs. Nexphoria
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
                    RUI Products
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
                    <StatusCell label={row.rui.label} status={row.rui.status} />
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
