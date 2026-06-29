import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "30 Instagram Reels Scripts | Nexphoria",
  description: "Short-form video angles, hooks, and content directions for launch content.",
};

const ANGLES = [
  "COA walkthrough",
  "Storage mistake",
  "Reconstitution demo",
  "Vendor comparison",
  "Myth vs fact",
  "Protocol checklist",
];

export default function InstagramReelsScriptsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Marketing Hub", href: "/marketing" }, { label: "30 Instagram Reels Scripts" }]} />
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="max-w-3xl">
          <p className="eyebrow mb-3">Short Form</p>
          <h1 className="text-page-hero font-bold tracking-tight mb-5">30 Instagram Reels Scripts</h1>
          <p className="body-lg text-zinc-400 max-w-2xl">
            Use short hooks, clear utility, and no hype. The goal is education first.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-8">
        <article className="rounded-3xl border border-white/8 bg-zinc-900 p-7">
          <h2 className="text-2xl font-semibold mb-4">Core angles</h2>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {ANGLES.map((angle) => (
              <div key={angle} className="rounded-2xl border border-white/8 bg-zinc-950 p-4 text-sm text-zinc-300">
                {angle}
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-3xl border border-white/8 bg-zinc-900 p-7 space-y-4">
          <h2 className="text-2xl font-semibold">Script pattern</h2>
          <p className="text-zinc-300 leading-7 rounded-2xl border border-white/8 bg-zinc-950 p-5">
            Hook → one useful claim → one visual proof point → one clear next step. Keep the tone scientific and
            avoid discount language.
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
