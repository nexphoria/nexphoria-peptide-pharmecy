import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Competitor Comparison Pages | Nexphoria",
  description:
    "SEO comparison-page blueprint for Nexphoria's competitor-displacement strategy, including priority URLs, page structure, and conversion notes.",
  openGraph: {
    title: "Competitor Comparison Pages — Nexphoria",
    description:
      "A practical framework for comparison pages that convert vendor-comparison traffic into catalog visits.",
    url: "https://nexphoria.com/marketing/competitor-comparison-pages",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const PRIORITY_PAGES = [
  ["/compare/peptide-sciences-alternative", "Peptide Sciences Alternative", "Highest intent — orphaned customers after the March 2026 shutdown"],
  ["/compare/blue-sky-peptide-vs-nexphoria", "Blue Sky Peptide vs Nexphoria", "High-volume comparison shoppers"],
  ["/compare/limitless-life-vs-nexphoria", "Limitless Life vs Nexphoria", "Rebrand / trust-gap audience"],
  ["/compare/amino-asylum-vs-nexphoria", "Amino Asylum vs Nexphoria", "Reddit-heavy, COA-sensitive buyers"],
  ["/compare/biotech-peptides-vs-nexphoria", "Biotech Peptides vs Nexphoria", "Quality-first search traffic"],
  ["/compare/core-peptides-vs-nexphoria", "Core Peptides vs Nexphoria", "Mid-volume vendor comparison"],
  ["/compare/best-peptide-vendors-2026", "Best Peptide Vendors 2026", "Roundup page for broad comparison traffic"],
];

const ON_PAGE_RULES = [
  "Lead with a direct H1 that names the competitor.",
  "Use a side-by-side table above the fold.",
  "Call out purity, COAs, shipping, vial size, and support.",
  "End with a single primary CTA to the catalog.",
  "Link internally from blog posts and product pages where the competitor is mentioned.",
];

const PAGE_TEMPLATE = [
  ["Hero", "Name the competitor and answer the switch question immediately."],
  ["Comparison table", "Put the most important buying variables in one scan-friendly table."],
  ["Why switch", "Explain the market gap without sounding defensive."],
  ["Trust proof", "COAs, cold-chain handling, and quality standards."],
  ["FAQ", "Use short answers to remove remaining objections."],
  ["CTA", "Drive to the catalog or a product page — only one primary action."],
];

export default function CompetitorComparisonPages() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Marketing Hub", href: "/marketing" }, { label: "Competitor Comparison Pages" }]} />
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="max-w-3xl">
          <p className="eyebrow mb-3">SEO Landing Pages</p>
          <h1 className="text-page-hero font-bold tracking-tight mb-5">Competitor Comparison Pages</h1>
          <p className="body-lg text-zinc-400 max-w-2xl">
            These pages capture high-intent researchers comparing vendors. Each page should answer the buying
            question quickly, prove trust with documentation, and route the visitor to the catalog.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-8">
        <article className="rounded-3xl border border-white/8 bg-zinc-900 p-7">
          <h2 className="text-2xl font-semibold mb-4">Priority deployment order</h2>
          <div className="grid gap-4">
            {PRIORITY_PAGES.map(([href, title, desc]) => (
              <Link
                key={href}
                href={href}
                className="rounded-2xl border border-white/8 bg-zinc-950 p-5 hover:border-[#B8A44C]/40 transition"
              >
                <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <span className="text-xs uppercase tracking-[0.18em] text-zinc-500">Open page</span>
                </div>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{desc}</p>
                <div className="mt-3 text-sm text-[#B8A44C]">{href}</div>
              </Link>
            ))}
          </div>
        </article>

        <article className="rounded-3xl border border-white/8 bg-zinc-900 p-7 space-y-4">
          <h2 className="text-2xl font-semibold">On-page rules</h2>
          <ul className="list-disc list-inside space-y-2 text-zinc-300 leading-7">
            {ON_PAGE_RULES.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-3xl border border-white/8 bg-zinc-900 p-7 space-y-4">
          <h2 className="text-2xl font-semibold">Recommended page template</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {PAGE_TEMPLATE.map(([section, purpose]) => (
              <div key={section} className="rounded-2xl border border-white/8 bg-zinc-950 p-4">
                <div className="text-sm uppercase tracking-[0.18em] text-zinc-500 mb-2">{section}</div>
                <p className="text-sm text-zinc-300 leading-6">{purpose}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-3xl border border-white/8 bg-zinc-900 p-7 space-y-4">
          <h2 className="text-2xl font-semibold">Internal linking plan</h2>
          <p className="text-zinc-300 leading-7">
            Link these pages from relevant blog articles, product pages, and the marketing hub. The goal is to turn
            comparison traffic into catalog traffic without making the visitor hunt for the next step.
          </p>
          <p className="text-zinc-300 leading-7">
            Use comparison pages as the bridge for buyers who already know the category and are choosing the vendor.
          </p>
        </article>

        <div className="flex flex-wrap gap-3">
          <Link href="/marketing" className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 hover:border-[#B8A44C]/40">
            Back to hub
          </Link>
        </div>
      </section>
    </main>
  );
}
