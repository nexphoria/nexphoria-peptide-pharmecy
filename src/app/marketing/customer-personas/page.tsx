import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Customer Personas | Nexphoria",
  description:
    "Three Nexphoria buyer archetypes: the methodical researcher, longevity optimizer, and recovery-focused researcher.",
  openGraph: {
    title: "Customer Personas — Nexphoria",
    description:
      "The three core Nexphoria buyer archetypes and how to market to each.",
    url: "https://nexphoria.com/marketing/customer-personas",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const PERSONAS = [
  {
    name: "Marcus — The Methodical Researcher",
    tagline: "I need documentation I can actually cite.",
    audience: "Research-first buyers",
    bullets: [
      "35–55, academic literacy, highly skeptical of vendor hype",
      "Reads studies, compares COAs, and buys after a longer evaluation cycle",
      "Best reached with deep-dive guides, quality proof, and honest limitations",
    ],
    channels: ["Google Search", "Blog SEO", "Reddit", "Email"],
    products: ["Mechanism guides", "COA walkthroughs", "Compound comparisons"],
  },
  {
    name: "Elena — The Longevity Optimizer",
    tagline: "I want the real science, not the supplement hype.",
    audience: "High-income biohackers",
    bullets: [
      "40–65, optimization-minded, already doing sleep/fitness/biomarker work",
      "Responds to longevity stacks, protocol guides, and premium quality signals",
      "Best reached with Instagram, search, podcasts, and email",
    ],
    channels: ["Instagram", "Google Search", "YouTube", "Email"],
    products: ["Longevity stack guides", "Comparisons", "Starter protocols"],
  },
  {
    name: "Jake — The Recovery-Focused Researcher",
    tagline: "I want what actually works, with real purity data behind it.",
    audience: "Athletes and recovery buyers",
    bullets: [
      "28–45, pragmatic, community-driven, wants fast answers",
      "Cares about shipping speed, product clarity, and recovery results",
      "Best reached with product-led search, Reddit, and Instagram",
    ],
    channels: ["Google Search", "Reddit", "Instagram", "Email"],
    products: ["BPC-157 / TB-500", "Recovery stacks", "Storage/reconstitution guides"],
  },
];

export default function CustomerPersonasPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Marketing Hub", href: "/marketing" }, { label: "Customer Personas" }]} />
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="max-w-3xl">
          <p className="eyebrow mb-3">Marketing Strategy</p>
          <h1 className="text-page-hero font-bold tracking-tight mb-5">Customer Personas</h1>
          <p className="body-lg text-zinc-400 max-w-2xl">
            Nexphoria&apos;s audience clusters into three clear buyer archetypes. Use this page to match messaging,
            channel, and offer structure to the person on the other side of the click.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-6">
        {PERSONAS.map((persona) => (
          <article key={persona.name} className="rounded-3xl border border-white/8 bg-zinc-900 p-7">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between mb-5">
              <div>
                <h2 className="text-2xl font-semibold">{persona.name}</h2>
                <p className="text-zinc-400 mt-1">{persona.tagline}</p>
              </div>
              <span className="text-xs uppercase tracking-[0.18em] text-zinc-500 bg-zinc-800 px-3 py-1 rounded-full w-fit">
                {persona.audience}
              </span>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-3">Profile</h3>
                <ul className="space-y-2 text-sm leading-6 text-zinc-300 list-disc list-inside">
                  {persona.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-3">Channels</h3>
                <div className="flex flex-wrap gap-2">
                  {persona.channels.map((channel) => (
                    <span key={channel} className="rounded-full border border-white/10 bg-zinc-800 px-3 py-1 text-sm text-zinc-200">
                      {channel}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-3">Best Content</h3>
                <ul className="space-y-2 text-sm leading-6 text-zinc-300 list-disc list-inside">
                  {persona.products.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}

        <div className="rounded-3xl border border-[#B8A44C]/30 bg-[#B8A44C]/8 p-7">
          <h2 className="text-xl font-semibold mb-3">How to use this</h2>
          <p className="text-zinc-300 leading-7">
            Build Google Ads, email sequences, blog topics, and Instagram hooks around the persona you want to
            move. Marcus wants proof, Elena wants premium science, and Jake wants direct utility.
          </p>
        </div>
      </section>
    </main>
  );
}
