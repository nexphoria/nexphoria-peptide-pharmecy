import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nexphoria vs. Rats Army: Research Peptide Vendor Comparison 2026",
  description:
    "Rats Army has ceased operations. Researchers switching suppliers need a vendor with verified COAs, cold-chain defaults, and a peptide-dedicated catalog. Here's how Nexphoria compares.",
  openGraph: {
    title: "Nexphoria vs. Rats Army: Research Peptide Vendor Comparison 2026",
    description:
      "Rats Army vs Nexphoria: purity documentation, cold-chain, catalog depth, and post-shutdown alternatives compared.",
    url: "https://nexphoria.com/compare/rats-army-vs-nexphoria",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://nexphoria.com/compare/rats-army-vs-nexphoria" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Rats Army still operating?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rats Army has ceased operations. Researchers who relied on their catalog are evaluating alternatives with stronger purity documentation and cold-chain infrastructure.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best Rats Army alternative for peptide research?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nexphoria is a peptide-dedicated supplier with US-based third-party HPLC+MS COAs, LAL endotoxin testing, cold-pack default shipping, and a catalog covering the full spectrum of research peptides.",
      },
    },
    {
      "@type": "Question",
      name: "Did Rats Army have good COA documentation for peptides?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rats Army's testing documentation was inconsistent, particularly for peptides. Nexphoria provides batch-specific COAs from independent US labs with HPLC, mass spectrometry, and endotoxin data for every compound.",
      },
    },
    {
      "@type": "Question",
      name: "Does Nexphoria ship with cold packs like Rats Army used to?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nexphoria includes ice packs in insulated mailers on every peptide order as a default, year-round. Cold-chain shipping is standard — not an add-on.",
      },
    },
  ],
};

type RowStatus = "ok" | "warn" | "bad";

const comparisonRows: Array<{
  feature: string;
  ra: { label: string; status: RowStatus };
  nx: { label: string; status: RowStatus };
}> = [
  {
    feature: "Operational Status",
    ra: { label: "Ceased operations", status: "bad" },
    nx: { label: "Active — shipping daily", status: "ok" },
  },
  {
    feature: "Primary Focus",
    ra: { label: "SARMs + peptides (mixed catalog)", status: "warn" },
    nx: { label: "Peptide-dedicated catalog", status: "ok" },
  },
  {
    feature: "COA Documentation",
    ra: { label: "Inconsistent; limited peptide depth", status: "bad" },
    nx: { label: "Named US lab, lot-specific, MS + HPLC", status: "ok" },
  },
  {
    feature: "Purity Standard",
    ra: { label: "Variable; not consistently verified", status: "bad" },
    nx: { label: "≥99% HPLC + mass spec confirmed", status: "ok" },
  },
  {
    feature: "Cold-Chain Shipping",
    ra: { label: "Not documented as default", status: "bad" },
    nx: { label: "Cold-pack every order, included", status: "ok" },
  },
  {
    feature: "Endotoxin Testing",
    ra: { label: "Not provided", status: "bad" },
    nx: { label: "LAL endotoxin screen on all peptides", status: "ok" },
  },
  {
    feature: "US-Based Testing",
    ra: { label: "Not confirmed", status: "bad" },
    nx: { label: "Independent US laboratory", status: "ok" },
  },
  {
    feature: "Delivery Format",
    ra: { label: "Liquid and lyophilized mixed", status: "warn" },
    nx: { label: "Lyophilized only (research standard)", status: "ok" },
  },
  {
    feature: "Peptide Research Content",
    ra: { label: "Minimal technical resources", status: "bad" },
    nx: { label: "550+ technical peptide articles", status: "ok" },
  },
  {
    feature: "Subscription Discount",
    ra: { label: "N/A (offline)", status: "bad" },
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
    title: "Rats Army is no longer available — what researchers need to know",
    body: "Rats Army ceased operations, leaving a segment of the research community looking for a replacement with comparable or better quality infrastructure. For researchers who were sourcing peptides from Rats Army, the transition question isn't just about finding a vendor — it's about finding one that meets the documentation and integrity standards that legitimate research requires.\n\nNexphoria was designed from the ground up for peptide researchers: third-party COAs, cold-chain defaults, lyophilized-only format, and a catalog that covers the compounds most active in published preclinical research.",
  },
  {
    title: "COA rigor: what Rats Army lacked and what Nexphoria provides",
    body: "Rats Army's purity documentation was inconsistent, particularly for peptides. COA depth varied by product, and independent verification of testing claims was not straightforward for most compounds.\n\nNexphoria publishes batch-specific COAs for every compound in its catalog. Each COA is issued by an independent US-based third-party analytical laboratory and includes HPLC purity analysis (≥99% standard), mass spectrometry molecular identity confirmation, and direct lab contact for independent verification. For researchers who need documentation that holds up in publication disclosure or institutional review, that level of verifiability is non-negotiable.",
  },
  {
    title: "The endotoxin testing gap in the research compound market",
    body: "The vast majority of research compound vendors — including Rats Army — do not provide LAL endotoxin testing as a standard part of their quality documentation. HPLC purity confirms compound identity and concentration. It does not detect bacterial endotoxins, which can be present even in compounds showing 99%+ purity by HPLC and which produce measurable inflammatory responses in both in vitro and in vivo research models.\n\nNexphoria runs LAL endotoxin screening on every peptide compound in addition to HPLC and mass spectrometry. For researchers running animal models where inflammatory baseline is a controlled variable, endotoxin levels aren't a secondary concern — they're a confound.",
  },
  {
    title: "Cold-chain defaults: the shipping standard that protects compound integrity",
    body: "Peptides are thermally sensitive compounds. Lyophilized peptides are more stable than aqueous solutions but are still vulnerable to degradation if exposed to elevated temperatures during multi-day transit — particularly in summer months or to warm-climate destinations.\n\nRats Army's cold-chain shipping practices were not documented as a default standard. Nexphoria includes ice packs in insulated mailers on every peptide order, year-round, at no additional charge. Cold-chain shipping is not a premium add-on — it's the minimum standard for a peptide supplier that takes compound integrity seriously.",
  },
];

const faqs = [
  {
    q: "Is Rats Army still operating?",
    a: "Rats Army has ceased operations. Researchers who relied on their catalog are evaluating alternatives with stronger purity documentation and cold-chain infrastructure.",
  },
  {
    q: "What is the best Rats Army alternative for peptide research?",
    a: "Nexphoria is a peptide-dedicated supplier with US-based third-party HPLC+MS COAs, LAL endotoxin testing, cold-pack default shipping, and a catalog covering the full spectrum of research peptides.",
  },
  {
    q: "Did Rats Army have good COA documentation for peptides?",
    a: "Rats Army's testing documentation was inconsistent, particularly for peptides. Nexphoria provides batch-specific COAs from independent US labs with HPLC, mass spectrometry, and endotoxin data for every compound.",
  },
  {
    q: "Does Nexphoria ship with cold packs?",
    a: "Nexphoria includes ice packs in insulated mailers on every peptide order as a default, year-round. Cold-chain shipping is standard — not an add-on.",
  },
];

export default function RatsArmyVsNexphoriaPage() {
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
                { label: "vs Rats Army" },
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
              Nexphoria vs. Rats Army.
            </h1>
            <p
              className="text-lg max-w-2xl mb-8"
              style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}
            >
              Rats Army has ceased operations. For researchers who need a reliable replacement with
              verified COAs, cold-chain defaults, and a peptide-dedicated catalog — here's what
              Nexphoria provides.
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
              Rats Army vs. Nexphoria
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
                    Rats Army
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
                    <StatusCell label={row.ra.label} status={row.ra.status} />
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
