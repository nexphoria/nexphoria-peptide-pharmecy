import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Brand Style Guide | Nexphoria",
  description:
    "Brand essence, visual system, typography, tone, and usage rules for Nexphoria.",
};

const TOKENS = [
  ["Brand Gold", "#B8A44C", "Accents, borders, badges"],
  ["Near Black", "#0F0F0E", "Primary dark background"],
  ["Cream", "#F9F9F9", "Default light background"],
  ["Gold Text", "#7A6B2A", "Accessible text on cream"],
];

const RULES = [
  "Precise. Every word earns its place.",
  "Honest. We state what the research shows and what it does not.",
  "Technical, not cold. Clear enough for skeptics, human enough to read.",
  "Confident without bravado. Let documentation do the work.",
];

export default function BrandStyleGuidePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Marketing Hub", href: "/marketing" }, { label: "Brand Style Guide" }]} />
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="max-w-3xl">
          <p className="eyebrow mb-3">Brand System</p>
          <h1 className="text-page-hero font-bold tracking-tight mb-5">Brand Style Guide</h1>
          <p className="body-lg text-zinc-400 max-w-2xl">
            Nexphoria should read like a research brand that earns trust through documentation, not decoration.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-8">
        <article className="rounded-3xl border border-white/8 bg-zinc-900 p-7">
          <h2 className="text-2xl font-semibold mb-4">Brand essence</h2>
          <p className="text-zinc-300 leading-7 max-w-3xl">
            Research-grade. Uncompromisingly documented. Built for the 1 percent who actually check the data.
          </p>
          <div className="grid gap-3 md:grid-cols-2 mt-6">
            {RULES.map((rule) => (
              <div key={rule} className="rounded-2xl border border-white/8 bg-zinc-950 p-4 text-sm text-zinc-300">
                {rule}
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-3xl border border-white/8 bg-zinc-900 p-7">
          <h2 className="text-2xl font-semibold mb-4">Color system</h2>
          <div className="grid gap-3">
            {TOKENS.map(([name, hex, usage]) => (
              <div key={name} className="grid gap-3 md:grid-cols-[180px_140px_1fr] items-center rounded-2xl border border-white/8 bg-zinc-950 p-4">
                <div className="font-medium">{name}</div>
                <code className="text-sm text-[#B8A44C]">{hex}</code>
                <div className="text-sm text-zinc-400">{usage}</div>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-3xl border border-white/8 bg-zinc-900 p-7">
          <h2 className="text-2xl font-semibold mb-4">Typography</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/8 bg-zinc-950 p-5">
              <h3 className="text-lg font-semibold mb-2">Display</h3>
              <p className="text-zinc-400 text-sm leading-6">Cormorant Garamond for headings and hero statements.</p>
            </div>
            <div className="rounded-2xl border border-white/8 bg-zinc-950 p-5">
              <h3 className="text-lg font-semibold mb-2">Body</h3>
              <p className="text-zinc-400 text-sm leading-6">Inter for body copy, labels, and functional UI text.</p>
            </div>
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
