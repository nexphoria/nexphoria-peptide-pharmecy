import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nexphoria vs. Swiss Chems: Peptide Quality & COA Comparison 2026",
  description:
    "Swiss Chems markets itself as a premium peptide vendor. But is the COA data independently verifiable? Does cold-chain shipping actually happen? We compare side by side.",
  openGraph: {
    title: "Nexphoria vs. Swiss Chems: Peptide Quality & COA Comparison 2026",
    description:
      "Swiss Chems vs Nexphoria: purity claims, COA verifiability, cold-chain shipping, and research support compared. Full breakdown for serious researchers.",
    url: "https://nexphoria.com/compare/swiss-chems-vs-nexphoria",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://nexphoria.com/compare/swiss-chems-vs-nexphoria" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Swiss Chems a legitimate peptide vendor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Swiss Chems is a functioning vendor with years in the market and some positive reviews. The concerns researchers raise are around their COA verifiability — documents are provided but the depth of independent confirmation varies — and their pricing, which sits above mid-tier without consistently superior documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Is Swiss Chems actually based in Switzerland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Swiss Chems markets with Swiss branding but is an American company. The name implies European quality standards and regulatory oversight that aren't applicable. Nexphoria is US-based and US-synthesized without implying regulatory positioning it doesn't hold.",
      },
    },
    {
      "@type": "Question",
      name: "How does Swiss Chems pricing compare to Nexphoria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Swiss Chems prices peptides at or above Nexphoria's pricing on most compounds. Given that their COA transparency is comparable or less detailed, and cold-chain shipping is not guaranteed by default, Nexphoria delivers more documentation value at similar or lower price points.",
      },
    },
    {
      "@type": "Question",
      name: "Does Swiss Chems use cold-chain shipping for peptides?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Swiss Chems does not consistently include cold packs on peptide orders. Nexphoria ships every order with cold packs in insulated mailers, regardless of order size or value.",
      },
    },
  ],
};

type RowStatus = "ok" | "warn" | "bad";

const comparisonRows: Array<{
  feature: string;
  sc: { label: string; status: RowStatus };
  nx: { label: string; status: RowStatus };
}> = [
  {
    feature: "Pricing",
    sc: { label: "Premium pricing tier", status: "warn" },
    nx: { label: "Competitive mid-tier", status: "ok" },
  },
  {
    feature: "Brand Origin",
    sc: { label: "Swiss branding, US-based operation", status: "warn" },
    nx: { label: "US-based, US-synthesized, no misdirection", status: "ok" },
  },
  {
    feature: "COA Verifiability",
    sc: { label: "COAs provided; independent verification limited", status: "warn" },
    nx: { label: "Named lab, lot-specific, mass spec, verifiable", status: "ok" },
  },
  {
    feature: "Purity Standard",
    sc: { label: "≥98% stated", status: "warn" },
    nx: { label: "≥99% HPLC + MS confirmed, publicly posted", status: "ok" },
  },
  {
    feature: "Cold-Chain Shipping",
    sc: { label: "Not included by default", status: "bad" },
    nx: { label: "Cold-pack every order, included", status: "ok" },
  },
  {
    feature: "Delivery Format",
    sc: { label: "Lyophilized and some liquid formats", status: "warn" },
    nx: { label: "Lyophilized only (research standard)", status: "ok" },
  },
  {
    feature: "US Manufacturing",
    sc: { label: "Not clearly documented", status: "warn" },
    nx: { label: "Confirmed US synthesis", status: "ok" },
  },
  {
    feature: "Research Content",
    sc: { label: "Limited; primarily catalog-focused", status: "bad" },
    nx: { label: "350+ technical research articles", status: "ok" },
  },
  {
    feature: "Subscription Discount",
    sc: { label: "Coupon-based only", status: "warn" },
    nx: { label: "15% recurring subscription discount", status: "ok" },
  },
  {
    feature: "Loyalty Program",
    sc: { label: "None", status: "bad" },
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
    title: "The Swiss branding question",
    body: "Swiss Chems positions itself with implied European precision and regulatory rigor. The company is US-based. Switzerland's pharmaceutical standards — the Swissmedic framework, the GMP oversight, the quality culture that gives 'Swiss' its connotation — don't apply.\n\nThis isn't necessarily a red flag. But it's worth noting that branding decisions matter when you're evaluating a vendor's commitment to documentation accuracy. Nexphoria's positioning is straightforward: US-synthesized, HPLC and MS tested, lot-specific COAs, cold-chain on every order.",
  },
  {
    title: "Premium pricing without premium documentation",
    body: "Swiss Chems prices peptides at or above the market mid-tier — in some cases above Nexphoria. For a premium price to be justified in a research context, the documentation chain needs to be superior: independently verifiable COAs, lot-specific mass spec data, and named testing labs.\n\nSwiss Chems' COA system doesn't consistently deliver that level of verification. You're paying for the brand positioning more than the documentation depth. With Nexphoria, you're paying for the testing and getting the full data chain.",
  },
  {
    title: "Cold-chain on every order — not by exception",
    body: "Lyophilized peptides are stable at ambient temperatures over short windows but degrade with repeated heat exposure. A package that sits in a hot vehicle or a summer mailbox for two hours loses that stability buffer.\n\nSwiss Chems does not ship peptides with cold packs by default. Nexphoria does — on every order, every compound, regardless of order value. The cold chain isn't a premium service. It's the baseline we built the shipping protocol around.",
  },
  {
    title: "Research depth: catalog vs. library",
    body: "Swiss Chems provides product pages with basic specifications. There's no deep research content — no mechanistic literature reviews, no protocol design resources, no compound comparison guides.\n\nNexphoria's 350+ article research library exists because peptide researchers need more than a product description. Understanding BPC-157's NO-pathway mechanism, designing a dosing protocol around ipamorelin's GH pulse timing, or interpreting HPLC purity data requires context. We built that context into the site.",
  },
];

const faqs = [
  {
    q: "Is Swiss Chems a legitimate peptide vendor?",
    a: "Swiss Chems is a functioning vendor with years in the market and some positive reviews. The concerns researchers raise are around their COA verifiability — documents are provided but the depth of independent confirmation varies — and their pricing, which sits above mid-tier without consistently superior documentation.",
  },
  {
    q: "Is Swiss Chems actually based in Switzerland?",
    a: "Swiss Chems markets with Swiss branding but is an American company. The name implies European quality standards and regulatory oversight that aren't applicable. Nexphoria is US-based and US-synthesized without implying regulatory positioning it doesn't hold.",
  },
  {
    q: "How does Swiss Chems pricing compare to Nexphoria?",
    a: "Swiss Chems prices peptides at or above Nexphoria's pricing on most compounds. Given that their COA transparency is comparable or less detailed, and cold-chain shipping is not guaranteed by default, Nexphoria delivers more documentation value at similar or lower price points.",
  },
  {
    q: "Does Swiss Chems use cold-chain shipping for peptides?",
    a: "Swiss Chems does not consistently include cold packs on peptide orders. Nexphoria ships every order with cold packs in insulated mailers, regardless of order size or value.",
  },
];

export default function SwissChemsVsNexphoriaPage() {
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
                { label: "vs Swiss Chems" },
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
              Nexphoria vs. Swiss Chems.
            </h1>
            <p
              className="text-lg max-w-2xl mb-8"
              style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}
            >
              Swiss Chems markets with premium branding and prices to match. But when you
              examine COA verifiability, cold-chain defaults, and what the Swiss name actually
              means, the value equation shifts.
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
              Swiss Chems vs. Nexphoria
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
                    Swiss Chems
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
                    <StatusCell label={row.sc.label} status={row.sc.status} />
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
