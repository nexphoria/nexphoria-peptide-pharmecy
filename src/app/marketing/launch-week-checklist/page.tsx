import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Launch Week Checklist | Nexphoria",
  description: "Day-by-day launch operations, QA, monitoring, and reporting checklist.",
};

const DAYS = [
  ["Day 0", "Go/No-Go", ["Site audit", "Checkout test", "Sitemap submitted", "Tracking verified"]],
  ["Day 1", "Launch", ["Publish announcement", "Activate ads", "Monitor orders", "Respond within 2 hours"]],
  ["Day 2", "Stabilize", ["Fulfill orders", "Review search terms", "Re-engage carts", "Check indexing"]],
  ["Day 7", "Debrief", ["Review revenue", "Note friction points", "Set Week 2 targets", "Plan next content"]],
];

export default function LaunchWeekChecklistPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Marketing Hub", href: "/marketing" }, { label: "Launch Week Checklist" }]} />
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="max-w-3xl">
          <p className="eyebrow mb-3">Launch Ops</p>
          <h1 className="text-page-hero font-bold tracking-tight mb-5">Launch Week Checklist</h1>
          <p className="body-lg text-zinc-400 max-w-2xl">
            The launch week should be treated like an operations sprint, not a marketing hope.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-6">
        {DAYS.map(([day, title, items]) => (
          <article key={day as string} className="rounded-3xl border border-white/8 bg-zinc-900 p-7">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between mb-5">
              <h2 className="text-2xl font-semibold">{day as string}</h2>
              <span className="text-xs uppercase tracking-[0.18em] text-zinc-500 bg-zinc-800 px-3 py-1 rounded-full w-fit">
                {title as string}
              </span>
            </div>
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {(items as string[]).map((item) => (
                <div key={item} className="rounded-2xl border border-white/8 bg-zinc-950 p-4 text-sm text-zinc-300">
                  {item}
                </div>
              ))}
            </div>
          </article>
        ))}

        <div className="flex flex-wrap gap-3">
          <Link href="/marketing" className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 hover:border-[#B8A44C]/40">
            Back to hub
          </Link>
        </div>
      </section>
    </main>
  );
}
