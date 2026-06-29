import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Google Ads Structure | Nexphoria",
  description:
    "Campaign architecture, keyword strategy, landing page mapping, and launch priorities for Nexphoria search ads.",
  openGraph: {
    title: "Google Ads Structure — Nexphoria",
    description:
      "The paid search architecture behind Nexphoria's launch-phase acquisition plan.",
    url: "https://nexphoria.com/marketing/google-ads-structure",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const CAMPAIGNS = [
  {
    name: "Brand — Nexphoria branded terms",
    budget: "$10–15/day",
    match: "Exact only",
    landing: "/",
    note: "Protects brand demand and keeps CPCs cheap.",
  },
  {
    name: "Competitor displacement — Peptide Sciences alternative",
    budget: "$50–75/day",
    match: "Exact + phrase",
    landing: "/compare/peptide-sciences-alternative",
    note: "Highest-intent query cluster in the account.",
  },
  {
    name: "Competitor displacement — active vendors",
    budget: "$30–50/day",
    match: "Exact + phrase",
    landing: "/compare",
    note: "Blue Sky, Limitless Life, Amino Asylum, Core Peptides.",
  },
  {
    name: "High-intent product campaigns",
    budget: "$40–60/day each",
    match: "Exact + phrase",
    landing: "/products",
    note: "BPC-157, Semaglutide, TB-500, CJC-1295 + Ipamorelin, NAD+.",
  },
  {
    name: "Informational / research content",
    budget: "$15–25/day",
    match: "Broad test only in controlled ad groups",
    landing: "/blog",
    note: "Capture researchers before they are ready to buy.",
  },
  {
    name: "Remarketing / RLSA",
    budget: "$10–20/day",
    match: "Audience-based",
    landing: "/cart or product pages",
    note: "Brings back browse abandoners and comparison shoppers.",
  },
];

const RULES = [
  "Use exact and phrase match by default; broad match only in isolated tests.",
  "Keep competitor terms in separate campaigns so budgets do not blur.",
  "Map each intent cluster to one matching landing page.",
  "Track checkout complete as the primary conversion; treat add-to-cart and email capture as secondary.",
  "Write ads to the query, not to the brand.",
];

const KEYWORDS = [
  "[buy bpc 157]",
  "[peptide sciences alternative]",
  "[semaglutide for sale]",
  "[tb 500 for sale]",
  "[nexphoria]",
  "[bpc 157 research]",
  "[cjc 1295 ipamorelin]",
  "[best peptide vendors 2026]",
];

const LANDING_MAP = [
  ["Peptide Sciences alternative", "/compare/peptide-sciences-alternative"],
  ["Blue Sky / Limitless / Amino Asylum", "/compare"],
  ["BPC-157 product page", "/products/bpc-157"],
  ["Semaglutide product page", "/products/semaglutide"],
  ["Blog education hub", "/blog"],
];

export default function GoogleAdsStructurePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Marketing Hub", href: "/marketing" }, { label: "Google Ads Structure" }]} />
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="max-w-3xl">
          <p className="eyebrow mb-3">Paid Search</p>
          <h1 className="text-page-hero font-bold tracking-tight mb-5">Google Ads Structure</h1>
          <p className="body-lg text-zinc-400 max-w-2xl">
            Launch search ads around intent clusters, not random keywords. Every campaign should have a matching
            landing page, a clear conversion goal, and a budget that reflects actual buying intent.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-8">
        <article className="rounded-3xl border border-white/8 bg-zinc-900 p-7">
          <h2 className="text-2xl font-semibold mb-4">Account overview</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[
              ["Account", "OCID 8084671368"],
              ["Primary conversion", "Checkout complete"],
              ["Secondary conversions", "Add to cart, 2+ min blog view, email subscribe"],
              ["Landing domain", "nexphoria.com"],
              ["Match type philosophy", "Exact + phrase majority"],
              ["Broad match", "Only in isolated tests"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/8 bg-zinc-950 p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-zinc-500 mb-2">{label}</div>
                <div className="text-sm text-zinc-200 leading-6">{value}</div>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-3xl border border-white/8 bg-zinc-900 p-7">
          <h2 className="text-2xl font-semibold mb-4">Campaign architecture</h2>
          <div className="grid gap-4">
            {CAMPAIGNS.map((campaign) => (
              <div key={campaign.name} className="rounded-2xl border border-white/8 bg-zinc-950 p-5">
                <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{campaign.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-400 max-w-3xl">{campaign.note}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-zinc-300">
                    <span className="rounded-full border border-white/10 px-3 py-1">{campaign.budget}</span>
                    <span className="rounded-full border border-white/10 px-3 py-1">{campaign.match}</span>
                  </div>
                </div>
                <div className="mt-4 text-sm text-[#B8A44C]">Landing page: {campaign.landing}</div>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-3xl border border-white/8 bg-zinc-900 p-7 space-y-4">
          <h2 className="text-2xl font-semibold">Operating rules</h2>
          <ul className="list-disc list-inside space-y-2 text-zinc-300 leading-7">
            {RULES.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-3xl border border-white/8 bg-zinc-900 p-7 space-y-4">
          <h2 className="text-2xl font-semibold">Keyword spine</h2>
          <div className="flex flex-wrap gap-2">
            {KEYWORDS.map((keyword) => (
              <span key={keyword} className="rounded-full border border-white/10 bg-zinc-800 px-3 py-1 text-sm text-zinc-200">
                {keyword}
              </span>
            ))}
          </div>
        </article>

        <article className="rounded-3xl border border-white/8 bg-zinc-900 p-7 space-y-4">
          <h2 className="text-2xl font-semibold">Landing page map</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {LANDING_MAP.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-2xl border border-white/8 bg-zinc-950 p-4 hover:border-[#B8A44C]/40 transition"
              >
                <div className="text-sm font-medium text-white">{label}</div>
                <div className="mt-1 text-sm text-[#B8A44C]">{href}</div>
              </Link>
            ))}
          </div>
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
