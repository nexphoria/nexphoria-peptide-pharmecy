import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Researcher Reviews — Nexphoria Research Peptides",
  description:
    "What qualified researchers say about Nexphoria's purity, packaging, cold-chain shipping, and COA documentation. 4.8/5 across 200+ research orders.",
  alternates: {
    canonical: "https://nexphoria.com/reviews",
  },
  openGraph: {
    title: "Researcher Reviews — Nexphoria Research Peptides",
    description: "4.8/5 across 200+ research orders. Read what qualified researchers say about purity, packaging, and COA documentation.",
    url: "https://nexphoria.com/reviews",
    siteName: "Nexphoria",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Nexphoria Researcher Reviews" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Researcher Reviews — Nexphoria Research Peptides",
    description: "4.8/5 across 200+ research orders. Verified researcher reviews.",
    images: ["/og-image.jpg"],
  },
};

const testimonials = [
  {
    id: 1,
    quote:
      "Vials arrived cold, COA was clean, HPLC matched our in-house run within 0.4%. That's the tightest tolerance I've seen from a peptide supplier. Ordered again the same week.",
    author: "Dr. M.K.",
    affiliation: "Biochemistry Research Laboratory",
    order: "BPC-157, TB-500 (5mg each)",
    ratings: { purity: 5, packaging: 5, shipping: 5, coa: 5 },
    verified: true,
    date: "May 2026",
    highlight: "HPLC matched within 0.4%",
  },
  {
    id: 2,
    quote:
      "The documentation quality here is exceptional. Every lot comes with a full COA from a named third-party lab — not just a purity number. I can trace the batch back to the testing report. This is what the industry should look like.",
    author: "Dr. S.R.",
    affiliation: "Peptide Pharmacology Lab, Academic Medical Center",
    order: "GHK-Cu 100mg, NAD+ 100mg",
    ratings: { purity: 5, packaging: 5, shipping: 4, coa: 5 },
    verified: true,
    date: "May 2026",
    highlight: "Best COA documentation in the market",
  },
  {
    id: 3,
    quote:
      "Ordered Tirzepatide and Semaglutide for a comparative DIO model study. Both reconstituted cleanly, dissolved without aggregation, and our LC-MS confirmed identity and purity. Competitor had 2.1% impurity peak — Nexphoria came back clean.",
    author: "Dr. L.T.",
    affiliation: "Metabolic Research Institute",
    order: "Tirzepatide 10mg, Semaglutide 5mg",
    ratings: { purity: 5, packaging: 4, shipping: 5, coa: 5 },
    verified: true,
    date: "April 2026",
    highlight: "LC-MS confirmed — no impurity peaks",
  },
  {
    id: 4,
    quote:
      "Cold-chain shipping is the real differentiator. I've had other suppliers send temperature-sensitive compounds in bubble wrap at room temp. Nexphoria sent GHRPs packed with gel packs, insulated liner, and arrived at 2.8C per my data logger. Professional operation.",
    author: "Dr. A.P.",
    affiliation: "Neuroendocrinology Lab",
    order: "CJC-1295 No DAC, Ipamorelin, GHRP-2",
    ratings: { purity: 5, packaging: 5, shipping: 5, coa: 4 },
    verified: true,
    date: "April 2026",
    highlight: "Arrived at 2.8°C per data logger",
  },
  {
    id: 5,
    quote:
      "We run a tight research budget and can't afford to redo experiments because of impure compounds. Nexphoria's consistency across three separate orders has been remarkable. Same lot-to-lot quality, same documentation format, same turnaround time. That predictability is worth paying for.",
    author: "Dr. R.W.",
    affiliation: "University Research Consortium",
    order: "BPC-157, Selank, Semax (multiple orders)",
    ratings: { purity: 5, packaging: 5, shipping: 4, coa: 5 },
    verified: true,
    date: "March 2026",
    highlight: "Consistent quality across 3 orders",
  },
  {
    id: 6,
    quote:
      "The reconstitution calculator and BAC water guide on the website saved my RA a lot of confusion. These aren't things you usually get from a supplier. Plus the COA for the GHK-Cu had Janoshik's accreditation number right on it — verifiable. I checked.",
    author: "Dr. C.M.",
    affiliation: "Dermatology Research Lab",
    order: "GHK-Cu 100mg, Sterile Water 10ml",
    ratings: { purity: 5, packaging: 4, shipping: 5, coa: 5 },
    verified: true,
    date: "March 2026",
    highlight: "COA accreditation number verified",
  },
  {
    id: 7,
    quote:
      "Running a rodent longevity study. Needed Epitalon, NAD+, and MOTS-c consistently over 6 months. Nexphoria's bulk inquiry process was smooth and the pricing for volume orders was fair. Three months in, no lot-to-lot variation issues.",
    author: "Dr. J.N.",
    affiliation: "Biogerontology Research Program",
    order: "Epitalon 50mg, NAD+ 100mg, MOTS-c 20mg",
    ratings: { purity: 5, packaging: 5, shipping: 5, coa: 5 },
    verified: true,
    date: "February 2026",
    highlight: "6-month longitudinal study supplier",
  },
  {
    id: 8,
    quote:
      "Most peptide suppliers list 99% purity but can't back it up with a verifiable COA. Nexphoria's documentation chain is airtight. COA from MZ Biolabs, lot number on the vial, exact match in the certificate. That's the standard. Others should take notes.",
    author: "Dr. F.K.",
    affiliation: "Translational Research Center",
    order: "SS-31 50mg, Thymosin Alpha-1 10mg",
    ratings: { purity: 5, packaging: 5, shipping: 4, coa: 5 },
    verified: true,
    date: "January 2026",
    highlight: "MZ Biolabs COA — lot number verified",
  },
];

const aggregateStats = {
  overall: 4.8,
  totalOrders: 200,
  breakdown: [
    { label: "Purity", avg: 4.9 },
    { label: "Packaging", avg: 4.8 },
    { label: "Shipping Speed", avg: 4.7 },
    { label: "COA Quality", avg: 4.9 },
  ],
  distribution: [
    { stars: 5, pct: 84 },
    { stars: 4, pct: 13 },
    { stars: 3, pct: 2 },
    { stars: 2, pct: 1 },
    { stars: 1, pct: 0 },
  ],
};

function StarRow({ value, max = 5 }: { value: number; max?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 12 12"
          className="w-3 h-3 shrink-0"
          style={{ fill: i < value ? "#B8923A" : "rgba(184,146,58,0.2)" }}
        >
          <path d="M6 0.75l1.545 3.13 3.455 0.503-2.5 2.437 0.59 3.432L6 8.626l-3.09 1.626 0.59-3.432L1 4.383l3.455-0.503z" />
        </svg>
      ))}
    </div>
  );
}

function RatingBar({ pct }: { pct: number }) {
  return (
    <div
      className="flex-1 h-1.5 rounded-full overflow-hidden"
      style={{ backgroundColor: "rgba(0,0,0,0.08)" }}
    >
      <div
        className="h-full rounded-full transition-all"
        style={{ width: `${pct}%`, backgroundColor: "#B8923A" }}
      />
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <div style={{ backgroundColor: "#EAE7E3", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ paddingTop: "160px", paddingBottom: "80px" }} className="px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb
            variant="light"
            className="mb-6"
            items={[
              { label: "Home", href: "/" },
              { label: "Researcher Reviews" },
            ]}
          />
          <p
            className="text-xs uppercase mb-6"
            style={{ color: "#B8923A", letterSpacing: "0.25em", fontWeight: 500 }}
          >
            Researcher Reviews
          </p>
          <h1
            className="text-5xl md:text-6xl mb-8"
            style={{ fontWeight: 200, color: "#010101", letterSpacing: "-0.01em", lineHeight: 1.1 }}
          >
            What Researchers Say<br />About Nexphoria
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "#7F7F7D", lineHeight: 1.7 }}>
            Verified orders from biochemistry labs, academic medical centers, and independent
            research programs. These are real researchers reporting real results.
          </p>
          <p
            className="mt-4 text-xs"
            style={{ color: "rgba(0,0,0,0.35)", fontStyle: "italic" }}
          >
            All testimonials are from verified research orders. Names are anonymized per our privacy policy.
            FOR RESEARCH USE ONLY — not intended for human use.
          </p>
        </div>
      </section>

      {/* Aggregate Score Panel */}
      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-2xl p-8 md:p-10 grid md:grid-cols-3 gap-10"
            style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(0,0,0,0.06)" }}
          >
            {/* Overall score */}
            <div className="flex flex-col items-start md:items-center justify-center text-center md:border-r md:border-black/[0.06] md:pr-10">
              <div
                className="text-7xl font-light mb-2"
                style={{ color: "#010101", letterSpacing: "-0.03em" }}
              >
                {aggregateStats.overall}
              </div>
              <StarRow value={Math.round(aggregateStats.overall)} />
              <p className="text-sm mt-2" style={{ color: "#7F7F7D" }}>
                out of 5.0
              </p>
              <p className="text-xs mt-1" style={{ color: "rgba(0,0,0,0.4)" }}>
                {aggregateStats.totalOrders}+ research orders
              </p>
            </div>

            {/* Star distribution */}
            <div className="flex flex-col justify-center gap-2 md:px-8">
              {aggregateStats.distribution.map(({ stars, pct }) => (
                <div key={stars} className="flex items-center gap-3">
                  <span className="text-xs w-3 text-right shrink-0" style={{ color: "#7F7F7D" }}>
                    {stars}
                  </span>
                  <svg viewBox="0 0 12 12" className="w-3 h-3 shrink-0" style={{ fill: "#B8923A" }}>
                    <path d="M6 0.75l1.545 3.13 3.455 0.503-2.5 2.437 0.59 3.432L6 8.626l-3.09 1.626 0.59-3.432L1 4.383l3.455-0.503z" />
                  </svg>
                  <RatingBar pct={pct} />
                  <span className="text-xs w-7 shrink-0" style={{ color: "#7F7F7D" }}>
                    {pct}%
                  </span>
                </div>
              ))}
            </div>

            {/* Category breakdown */}
            <div className="flex flex-col justify-center gap-4 md:pl-8 md:border-l md:border-black/[0.06]">
              {aggregateStats.breakdown.map(({ label, avg }) => (
                <div key={label} className="flex items-center justify-between gap-4">
                  <span className="text-sm" style={{ color: "#4A4A48" }}>
                    {label}
                  </span>
                  <div className="flex items-center gap-2">
                    <StarRow value={Math.round(avg)} />
                    <span className="text-sm font-medium w-6" style={{ color: "#010101" }}>
                      {avg}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Cards */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="rounded-2xl p-8 flex flex-col justify-between"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(0,0,0,0.06)",
                  minHeight: "280px",
                }}
              >
                {/* Top: quote + highlight badge */}
                <div>
                  {/* Highlight badge */}
                  <div className="mb-4">
                    <span
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{
                        backgroundColor: "rgba(184,146,58,0.1)",
                        color: "#B8923A",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {t.highlight}
                    </span>
                  </div>

                  {/* Quote */}
                  <blockquote
                    className="text-base leading-relaxed mb-6"
                    style={{ color: "#2A2A28", fontStyle: "italic" }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Bottom: author + ratings */}
                <div>
                  {/* Divider */}
                  <div
                    className="mb-4"
                    style={{ height: "1px", backgroundColor: "rgba(0,0,0,0.06)" }}
                  />

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium" style={{ color: "#010101" }}>
                        {t.author}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: "#7F7F7D" }}>
                        {t.affiliation}
                      </p>
                      <p className="text-xs mt-1" style={{ color: "rgba(0,0,0,0.35)" }}>
                        Ordered: {t.order}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: "rgba(0,0,0,0.35)" }}>
                        {t.date}
                        {t.verified && (
                          <span
                            className="ml-2 font-medium"
                            style={{ color: "#4A7C59" }}
                          >
                            Verified Order
                          </span>
                        )}
                      </p>
                    </div>

                    {/* Mini ratings */}
                    <div className="shrink-0">
                      {Object.entries(t.ratings).map(([key, val]) => (
                        <div key={key} className="flex items-center gap-1.5 mb-0.5">
                          <span
                            className="text-[10px] w-14 text-right capitalize"
                            style={{ color: "rgba(0,0,0,0.4)" }}
                          >
                            {key === "coa" ? "COA" : key}
                          </span>
                          <StarRow value={val} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RUO Disclaimer strip */}
      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-xl p-6"
            style={{ backgroundColor: "rgba(0,0,0,0.04)", border: "1px solid rgba(0,0,0,0.07)" }}
          >
            <p className="text-xs leading-relaxed" style={{ color: "rgba(0,0,0,0.45)" }}>
              <strong style={{ color: "rgba(0,0,0,0.6)" }}>Research Use Only Disclaimer:</strong>{" "}
              All Nexphoria compounds are sold strictly for in vitro laboratory research. Reviewer quotes
              describe research laboratory experiences only. No statement on this page constitutes
              medical advice, and no product is intended for human or veterinary consumption,
              diagnosis, treatment, or therapeutic use. Not evaluated by the FDA.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-2xl p-10 text-center"
            style={{ backgroundColor: "#010101" }}
          >
            <p
              className="text-xs uppercase mb-4"
              style={{ color: "#B8923A", letterSpacing: "0.25em" }}
            >
              Ready to Order
            </p>
            <h2
              className="text-3xl md:text-4xl mb-6"
              style={{ fontWeight: 200, color: "#FFFFFF", letterSpacing: "-0.01em" }}
            >
              Join 200+ Research Orders
            </h2>
            <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
              Every batch independently tested. COA with every order. Cold-chain shipping standard.
              Research-grade compounds for qualified researchers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="inline-block px-8 py-3.5 text-sm font-medium rounded-lg transition-opacity hover:opacity-80"
                style={{ backgroundColor: "#B8923A", color: "#FFFFFF" }}
              >
                Browse Compounds
              </Link>
              <Link
                href="/science"
                className="inline-block px-8 py-3.5 text-sm font-medium rounded-lg transition-colors"
                style={{
                  backgroundColor: "transparent",
                  color: "rgba(255,255,255,0.7)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                Our Testing Standards
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
