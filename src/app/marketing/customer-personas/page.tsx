import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Customer Personas | Nexphoria",
  description:
    "Three Nexphoria buyer archetypes: the methodical researcher, the longevity optimizer, and the recovery-focused researcher.",
  openGraph: {
    title: "Customer Personas — Nexphoria",
    description:
      "The three core Nexphoria buyer archetypes and how to market to each.",
    url: "https://nexphoria.com/marketing/customer-personas",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

type Persona = {
  name: string;
  tagline: string;
  demographics: string[];
  psychographics: string[];
  focus: string[];
  purchase: string[];
  painPoints: string[];
  content: string[];
  channels: string[];
  message: string;
};

const PERSONAS: Persona[] = [
  {
    name: "Marcus — The Methodical Researcher",
    tagline: "I need documentation I can actually cite.",
    demographics: [
      "Age: 35–55",
      "Background: biomedical researcher, physician, PhD scientist, or sophisticated self-researcher",
      "Income: $80K–$200K",
      "Location: US metros, university towns, research hubs",
    ],
    psychographics: [
      "High skepticism toward vendor marketing; responds to evidence",
      "Reads actual studies, not summaries",
      "Values intellectual honesty over enthusiasm",
      "Cross-checks COAs and batch documentation",
    ],
    focus: [
      "Mechanism validation for specific compounds",
      "Protocol design: dosing, timing, route",
      "Purity verification for data integrity",
      "Stack and combination comparisons",
    ],
    purchase: [
      "High-value orders, often $200–$500+",
      "Researches 2–4 weeks before first purchase",
      "Becomes loyal once trust is established",
      "Likely to refer colleagues",
    ],
    painPoints: [
      "COAs from most vendors fail verification",
      "Vendor blogs are written for consumers, not researchers",
      "Purity swings between batches corrupt studies",
      "Hard to find honest limitations of the evidence",
    ],
    content: [
      "Deep-dive mechanism articles with citations",
      "Third-party COA walkthroughs",
      "Batch consistency documentation",
      "Evidence-tier comparison guides",
    ],
    channels: ["Google Search", "Blog SEO", "Reddit", "Email"],
    message:
      "Every COA third-party tested. Every lot publicly posted. Because your data is only as good as your compound.",
  },
  {
    name: "Elena — The Longevity Optimizer",
    tagline: "I want the real science, not the supplement hype.",
    demographics: [
      "Age: 40–65",
      "Background: high-achieving professional, entrepreneur, or early retiree",
      "Income: $150K–$500K+",
      "Location: major metros and affluent suburbs",
    ],
    psychographics: [
      "Tracks biomarkers, HRV, and biological age tests",
      "Follows longevity voices like Attia, Sinclair, and Johnson",
      "Has already done sleep, fasting, and fitness optimization",
      "Wants evidence-based interventions without hype",
    ],
    focus: [
      "Longevity and anti-aging compounds",
      "GH axis optimization",
      "Cognitive maintenance",
      "Stack protocols combining multiple targets",
    ],
    purchase: [
      "First order often $150–$300",
      "High LTV if the first experience is positive",
      "May buy multiple compounds for one protocol",
      "Responsive to subscriptions or auto-ship",
    ],
    painPoints: [
      "Can’t tell real research from vendor hype",
      "Doesn’t want 30 sites with conflicting claims",
      "Needs to understand the stack rationale",
      "Worries about fake or low-purity product",
    ],
    content: [
      "2026 longevity stack guides",
      "Compound comparison articles",
      "Starter protocol recommendations",
      "Evidence quality ratings",
    ],
    channels: ["Instagram", "Google Search", "YouTube", "Email"],
    message:
      "The 2026 longevity stack researchers are studying. HPLC-verified, US-manufactured, evidence-referenced. nexphoria.com",
  },
  {
    name: "Jake — The Recovery-Focused Researcher",
    tagline: "I want what actually works, with real purity data behind it.",
    demographics: [
      "Age: 28–45",
      "Background: athlete, coach, PT, sports-medicine pro, former military, or serious recreational lifter",
      "Income: $60K–$150K",
      "Location: nationwide, strong in fitness-dense metros",
    ],
    psychographics: [
      "Pragmatic: wants results, not theory",
      "Comfortable with nuance and research-only framing",
      "Active in Reddit, Discord, and fitness Instagram",
      "Values community proof plus real documentation",
    ],
    focus: [
      "Injury recovery and tissue repair",
      "GH axis and body-composition support",
      "Connective tissue health",
      "Recovery optimization stacks",
    ],
    purchase: [
      "Initial purchase often one compound, $80–$150",
      "Usually finds the brand through search or community referral",
      "Second purchase often within 30 days",
      "Responds to bundles and stack kits",
    ],
    painPoints: [
      "Hard to find trustworthy sources",
      "Needs a real COA, not a PDF prop",
      "Shipping speed matters in injury contexts",
      "Wants basic protocol guidance with the product",
    ],
    content: [
      "BPC-157 vs TB-500 comparison guides",
      "Reconstitution and storage guides",
      "Community-proof messaging",
      "Fast-shipping callouts",
    ],
    channels: ["Google Search", "Reddit", "Instagram", "Email"],
    message:
      "BPC-157, TB-500, and the full recovery stack — HPLC-verified, ships cold, COA included. nexphoria.com",
  },
];

const COMPARISON_ROWS = [
  ["Age", "35–55", "40–65", "28–45"],
  ["Income", "$80K–$200K", "$150K–$500K+", "$60K–$150K"],
  ["Avg first order", "$250–$500", "$200–$350", "$100–$200"],
  ["LTV potential", "Very high", "Very high", "Medium–high"],
  ["Decision speed", "Slow (weeks)", "Medium (days–week)", "Fast (hours–days)"],
  ["Primary channel", "Search + Email", "Instagram + Search", "Search + Reddit"],
  ["Key motivator", "Data integrity", "Longevity optimization", "Performance / repair"],
  ["Top products", "Varied", "Epithalon, GHK-Cu, NAD+, CJC", "BPC-157, TB-500, MK-677"],
  ["Trust signal", "Third-party COA", "Research citations + credibility", "Community endorsement + COA"],
  ["Content style", "Dense, cited, honest", "Accessible, aspirational, science-backed", "Practical, direct, community-voiced"],
];

const TARGETING_NOTES = [
  [
    "Google Ads",
    "Marcus → informational research queries; Elena → longevity and competitor terms; Jake → high-intent product queries.",
  ],
  [
    "Instagram",
    "Marcus → deprioritize; Elena → primary audience; Jake → secondary fitness/recovery targeting.",
  ],
  [
    "Email segmentation",
    "Marcus → deep research content; Elena → protocol guides and longevity updates; Jake → product guides and bundle offers.",
  ],
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
            Nexphoria&apos;s audience clusters into three clear buyer archetypes. Match message, channel, and offer structure to the person on the other side of the click.
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
                {persona.channels.join(" • ")}
              </span>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-3">Demographics</h3>
                <ul className="space-y-2 text-sm leading-6 text-zinc-300 list-disc list-inside">
                  {persona.demographics.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-3">Psychographics</h3>
                <ul className="space-y-2 text-sm leading-6 text-zinc-300 list-disc list-inside">
                  {persona.psychographics.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-3">Research focus</h3>
                <ul className="space-y-2 text-sm leading-6 text-zinc-300 list-disc list-inside">
                  {persona.focus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-3">Purchase behavior</h3>
                <ul className="space-y-2 text-sm leading-6 text-zinc-300 list-disc list-inside">
                  {persona.purchase.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mt-6">
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-3">Pain points</h3>
                <ul className="space-y-2 text-sm leading-6 text-zinc-300 list-disc list-inside">
                  {persona.painPoints.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-3">Content that converts</h3>
                <ul className="space-y-2 text-sm leading-6 text-zinc-300 list-disc list-inside">
                  {persona.content.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-[160px_1fr] mt-6 items-start">
              <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">Message</div>
              <p className="text-sm leading-7 text-zinc-200 rounded-2xl border border-white/8 bg-zinc-950 p-4">
                {persona.message}
              </p>
            </div>
          </article>
        ))}

        <article className="rounded-3xl border border-white/8 bg-zinc-900 p-7">
          <h2 className="text-2xl font-semibold mb-4">Persona comparison table</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-zinc-500 uppercase tracking-[0.16em] text-[11px]">
                  <th className="py-3 pr-4">Attribute</th>
                  <th className="py-3 pr-4">Marcus</th>
                  <th className="py-3 pr-4">Elena</th>
                  <th className="py-3 pr-4">Jake</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map(([label, marcus, elena, jake]) => (
                  <tr key={label} className="border-t border-white/8">
                    <td className="py-3 pr-4 text-zinc-400">{label}</td>
                    <td className="py-3 pr-4 text-zinc-200">{marcus}</td>
                    <td className="py-3 pr-4 text-zinc-200">{elena}</td>
                    <td className="py-3 pr-4 text-zinc-200">{jake}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="rounded-3xl border border-white/8 bg-zinc-900 p-7">
          <h2 className="text-2xl font-semibold mb-4">Targeting notes</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {TARGETING_NOTES.map(([channel, note]) => (
              <div key={channel} className="rounded-2xl border border-white/8 bg-zinc-950 p-5">
                <div className="text-xs uppercase tracking-[0.18em] text-zinc-500 mb-2">{channel}</div>
                <p className="text-sm text-zinc-300 leading-6">{note}</p>
              </div>
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
