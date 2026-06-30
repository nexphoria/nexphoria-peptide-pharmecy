import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Brand Style Guide | Nexphoria",
  description:
    "Version 1.0 of the Nexphoria brand system: essence, logo rules, color tokens, typography, spacing, and usage standards.",
  openGraph: {
    title: "Brand Style Guide — Nexphoria",
    description:
      "The definitive reference for how Nexphoria looks, sounds, and feels across all touchpoints.",
    url: "https://nexphoria.com/marketing/brand-style-guide",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const TONE_PILLARS = [
  ["Precise", "Every word earns its place. Numbers over adjectives."],
  ["Honest", "We say what the research shows — and what it does not."],
  ["Technical, not cold", "Clear enough for skeptics, human enough to read."],
  ["Confident without bravado", "Documentation does the work."],
];

const LOGO_VARIANTS = [
  ["Full wordmark, dark", "Default for white/cream backgrounds"],
  ["Full wordmark, light", "Use on dark/black backgrounds"],
  ["Wordmark + tagline", "Marketing materials and social headers"],
  ["Mark only (N glyph)", "Favicon, app icon, 32×32 minimum"],
];

const PALETTE = [
  ["Brand Gold", "#B8A44C", "Eyebrows, badges, borders, accents"],
  ["Near Black", "#0F0F0E", "Primary dark background"],
  ["Cream", "#F9F9F9", "Default light background"],
  ["Near Black Text", "#1A1A1A", "Body text on light backgrounds"],
  ["Accessible Gold", "#7A6B2A", "Gold text on cream backgrounds"],
  ["Dark Panel", "#161614", "Secondary dark sections"],
  ["Dark Card", "#1C1C1A", "Cards within dark sections"],
  ["Light Border", "#E5E5E5", "Light backgrounds and dividers"],
];

const TYPOGRAPHY = [
  ["Display / headings", "Cormorant Garamond", "Refined, editorial, slightly formal"],
  ["Body / UI", "Inter", "Clean, readable, scientific precision"],
  ["Eyebrow", "Inter 500", "11px, uppercase, +0.1em tracking"],
  ["Body large", "Inter 300", "17–18px, 1.8 line height"],
  ["Body default", "Inter 300–400", "15–16px, 1.7 line height"],
  ["Button / nav", "Inter 400–500", "Functional, compact, clear"],
];

const RULES = [
  "Use gold for accents, not body copy on cream backgrounds.",
  "Never stretch, rotate, or shadow the logo.",
  "Do not use gradients in core brand marks.",
  "Avoid busy photographic backgrounds without a dark overlay.",
  "Keep copy precise, documented, and free of hype.",
];

const DONTS = [
  "No discount language in brand-forward areas.",
  "No exclamation marks in standard brand copy.",
  "No competitive trash talk.",
  "No decorative clutter that competes with the data.",
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
            Research-grade. Uncompromisingly documented. Built for the 1% who actually check the data.
          </p>
          <div className="grid gap-3 md:grid-cols-2 mt-6">
            {TONE_PILLARS.map(([label, copy]) => (
              <div key={label} className="rounded-2xl border border-white/8 bg-zinc-950 p-4">
                <div className="text-sm font-medium text-white mb-1">{label}</div>
                <div className="text-sm text-zinc-400 leading-6">{copy}</div>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-3xl border border-white/8 bg-zinc-900 p-7">
          <h2 className="text-2xl font-semibold mb-4">Logo</h2>
          <p className="text-zinc-400 max-w-3xl leading-7">
            Wordmark first. Keep it clean, quiet, and legible. The logo should feel like an instrument label, not a lifestyle brand.
          </p>
          <div className="grid gap-3 md:grid-cols-2 mt-6">
            {LOGO_VARIANTS.map(([variant, use]) => (
              <div key={variant} className="rounded-2xl border border-white/8 bg-zinc-950 p-4">
                <div className="text-sm font-medium text-white">{variant}</div>
                <div className="mt-1 text-sm text-zinc-400 leading-6">{use}</div>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-3xl border border-white/8 bg-zinc-900 p-7">
          <h2 className="text-2xl font-semibold mb-4">Color system</h2>
          <div className="grid gap-3">
            {PALETTE.map(([name, hex, usage]) => (
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
            {TYPOGRAPHY.map(([label, font, usage]) => (
              <div key={label} className="rounded-2xl border border-white/8 bg-zinc-950 p-5">
                <h3 className="text-lg font-semibold mb-2">{label}</h3>
                <p className="text-[#B8A44C] text-sm mb-2">{font}</p>
                <p className="text-zinc-400 text-sm leading-6">{usage}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-3xl border border-white/8 bg-zinc-900 p-7">
          <h2 className="text-2xl font-semibold mb-4">Usage rules</h2>
          <ul className="list-disc list-inside space-y-2 text-zinc-300 leading-7">
            {RULES.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-3xl border border-white/8 bg-zinc-900 p-7">
          <h2 className="text-2xl font-semibold mb-4">Do not</h2>
          <ul className="list-disc list-inside space-y-2 text-zinc-300 leading-7">
            {DONTS.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
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
