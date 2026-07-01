import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Crisis Comms Playbook | Nexphoria",
  description:
    "Fast-response protocols for shipping issues, COA disputes, negative community posts, payment outages, and data incidents.",
  openGraph: {
    title: "Crisis Comms Playbook — Nexphoria",
    description:
      "A practical internal response guide for brand, quality, platform, and security incidents.",
    url: "https://nexphoria.com/marketing/crisis-comms-playbook",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const TIERS = [
  {
    tier: "Tier 1",
    name: "Routine issue",
    timing: "Respond within 4 hours",
    examples: ["Single customer dispute", "Minor shipping delay", "Out-of-stock notice", "Site downtime <2h"],
  },
  {
    tier: "Tier 2",
    name: "Brand threat",
    timing: "Respond within 2 hours",
    examples: ["Negative Reddit post", "COA question", "Carrier failure affecting 10+ orders", "Review attack"],
  },
  {
    tier: "Tier 3",
    name: "Existential crisis",
    timing: "Respond within 1 hour",
    examples: ["Third-party test failure", "Contamination report", "Payment shutdown", "Data breach"],
  },
];

const PRINCIPLES = [
  "Be the most transparent company in the category.",
  "Verify the claim before you answer publicly.",
  "Post one clear statement, then disengage.",
  "Never threaten legal action in public threads.",
];

const MONITORING = [
  "r/Peptides, r/researchchemicals, r/Peptide — search Nexphoria daily",
  "Google Alerts for Nexphoria, Nexphoria review, Nexphoria scam, Nexphoria legit",
  "X/Twitter search for brand mentions and screenshots",
  "Trustpilot and Google Reviews for new public complaints",
];

const CHECKLIST = [
  "All COAs organized by lot and publicly accessible at /coas",
  "Backup copies of COAs in Google Drive and offline storage",
  "Testing lab contact info saved for every lot",
  "Retained samples from every lot (minimum 3 months)",
  "Backup payment processor tested and ready",
  "Backup email system and monthly customer export",
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
            Fast, factual, defensible response protocols for shipping issues, COA disputes, community backlash, platform outages, and security incidents.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-8">
        <article className="grid gap-3 md:grid-cols-3 rounded-3xl border border-white/8 bg-zinc-900 p-7">
          {TIERS.map((item) => (
            <div key={item.tier} className="rounded-2xl border border-white/8 bg-zinc-950 p-5">
              <div className="text-[#B8A44C] text-sm uppercase tracking-[0.2em] mb-2">{item.tier}</div>
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-zinc-400 text-sm mb-4">{item.timing}</p>
              <ul className="space-y-2 text-sm text-zinc-300 list-disc list-inside">
                {item.examples.map((example) => <li key={example}>{example}</li>)}
              </ul>
            </div>
          ))}
        </article>

        <article className="rounded-3xl border border-white/8 bg-zinc-900 p-7 space-y-4">
          <h2 className="text-2xl font-semibold">Core principles</h2>
          <ul className="list-disc list-inside space-y-2 text-zinc-300 leading-7">
            {PRINCIPLES.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>

        <article className="rounded-3xl border border-white/8 bg-zinc-900 p-7 space-y-4">
          <h2 className="text-2xl font-semibold">Holding statement</h2>
          <p className="text-zinc-300 leading-7 rounded-2xl border border-white/8 bg-zinc-950 p-5">
            We are reviewing the issue now and will update this thread with specific facts as soon as we verify them.
            If the concern affects a customer order or batch, we will say so directly.
          </p>
        </article>

        <article className="rounded-3xl border border-white/8 bg-zinc-900 p-7 space-y-4">
          <h2 className="text-2xl font-semibold">What to do first</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/8 bg-zinc-950 p-5">
              <h3 className="text-sm uppercase tracking-[0.18em] text-zinc-500 mb-3">Public issue</h3>
              <ul className="space-y-2 text-sm text-zinc-300 list-disc list-inside">
                <li>Read every comment before responding.</li>
                <li>Pull the relevant lot COA immediately.</li>
                <li>Draft one factual response and post once.</li>
                <li>Do not argue, brigade, or over-explain.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/8 bg-zinc-950 p-5">
              <h3 className="text-sm uppercase tracking-[0.18em] text-zinc-500 mb-3">Customer impact</h3>
              <ul className="space-y-2 text-sm text-zinc-300 list-disc list-inside">
                <li>Identify the affected orders or lot.</li>
                <li>Reach customers before they email.</li>
                <li>Offer a replacement, refund, or credit.</li>
                <li>Fix the process, then publish the update.</li>
              </ul>
            </div>
          </div>
        </article>

        <article className="rounded-3xl border border-white/8 bg-zinc-900 p-7 space-y-4">
          <h2 className="text-2xl font-semibold">Monitoring protocol</h2>
          <ul className="list-disc list-inside space-y-2 text-zinc-300 leading-7">
            {MONITORING.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>

        <article className="rounded-3xl border border-white/8 bg-zinc-900 p-7 space-y-4">
          <h2 className="text-2xl font-semibold">Pre-crisis checklist</h2>
          <ul className="list-disc list-inside space-y-2 text-zinc-300 leading-7">
            {CHECKLIST.map((item) => <li key={item}>{item}</li>)}
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
