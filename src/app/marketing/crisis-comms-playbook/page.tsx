import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Crisis Comms Playbook | Nexphoria",
  description: "Response tiers, holding statements, and escalation rules for brand, shipping, and quality issues.",
};

const TIERS = [
  ["Tier 1", "Routine issue", "Respond within 4 hours"],
  ["Tier 2", "Brand threat", "Respond within 2 hours"],
  ["Tier 3", "Existential crisis", "Respond within 1 hour"],
];

export default function CrisisCommsPlaybookPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Marketing Hub", href: "/marketing" }, { label: "Crisis Comms Playbook" }]} />
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="max-w-3xl">
          <p className="eyebrow mb-3">Risk Response</p>
          <h1 className="text-page-hero font-bold tracking-tight mb-5">Crisis Comms Playbook</h1>
          <p className="body-lg text-zinc-400 max-w-2xl">
            When something goes wrong, respond fast, stay factual, and avoid defensiveness.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-8">
        <article className="grid gap-3 md:grid-cols-3 rounded-3xl border border-white/8 bg-zinc-900 p-7">
          {TIERS.map(([tier, name, timing]) => (
            <div key={tier} className="rounded-2xl border border-white/8 bg-zinc-950 p-5">
              <div className="text-[#B8A44C] text-sm uppercase tracking-[0.2em] mb-2">{tier}</div>
              <h2 className="text-xl font-semibold mb-2">{name}</h2>
              <p className="text-zinc-400 text-sm">{timing}</p>
            </div>
          ))}
        </article>

        <article className="rounded-3xl border border-white/8 bg-zinc-900 p-7 space-y-4">
          <h2 className="text-2xl font-semibold">Core principles</h2>
          <ul className="list-disc list-inside space-y-2 text-zinc-300 leading-7">
            <li>Be the most transparent company in the category.</li>
            <li>Verify the claim before you answer publicly.</li>
            <li>Post one clear statement, then disengage.</li>
            <li>Never threaten legal action in public threads.</li>
          </ul>
        </article>

        <article className="rounded-3xl border border-white/8 bg-zinc-900 p-7 space-y-4">
          <h2 className="text-2xl font-semibold">Holding statement</h2>
          <p className="text-zinc-300 leading-7 rounded-2xl border border-white/8 bg-zinc-950 p-5">
            We are reviewing the issue now and will update this thread with specific facts as soon as we verify them.
            If the concern affects a customer order or batch, we will say so directly.
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
