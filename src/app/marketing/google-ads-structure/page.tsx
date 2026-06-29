import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Google Ads Structure | Nexphoria",
  description: "Campaign architecture, keyword strategy, and landing page map for launch-phase search ads.",
};

const CAMPAIGNS = [
  "Brand terms",
  "Competitor displacement",
  "High-intent product campaigns",
  "Informational research content",
  "Remarketing and RLSA",
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
            Search ads should map cleanly to high-intent intent clusters and a matching landing page.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-8">
        <article className="rounded-3xl border border-white/8 bg-zinc-900 p-7">
          <h2 className="text-2xl font-semibold mb-4">Campaign map</h2>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {CAMPAIGNS.map((campaign) => (
              <div key={campaign} className="rounded-2xl border border-white/8 bg-zinc-950 p-4 text-sm text-zinc-300">
                {campaign}
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-3xl border border-white/8 bg-zinc-900 p-7 space-y-4">
          <h2 className="text-2xl font-semibold">Operating rules</h2>
          <ul className="list-disc list-inside space-y-2 text-zinc-300 leading-7">
            <li>Use exact and phrase match as the default.</li>
            <li>Send each intent cluster to a matching landing page.</li>
            <li>Keep competitor terms isolated.</li>
            <li>Track checkout complete as the primary conversion.</li>
          </ul>
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
