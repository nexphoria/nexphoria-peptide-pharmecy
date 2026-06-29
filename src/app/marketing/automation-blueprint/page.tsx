import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Automation Blueprint | Nexphoria",
  description:
    "A practical 24/7 operating blueprint for email, SEO, social, influencer, and wholesale automation.",
};

const SYSTEMS = [
  {
    title: "Email automation",
    tag: "Always-on",
    items: [
      "Welcome flow for new subscribers",
      "Browse and cart abandonment recovery",
      "Post-purchase education and reorder prompts",
    ],
  },
  {
    title: "SEO content machine",
    tag: "Weekly",
    items: [
      "Publish research-led articles on a fixed cadence",
      "Refresh internal links from blog to products and guides",
      "Track rankings, CTR, and high-intent query coverage",
    ],
  },
  {
    title: "Social distribution",
    tag: "Semi-automated",
    items: [
      "Repurpose blog insights into short-form hooks",
      "Batch approvals for Instagram, X, and TikTok",
      "Keep community answers educational and non-promotional",
    ],
  },
  {
    title: "Influencer pipeline",
    tag: "Outreach",
    items: [
      "Identify creators and coaches with relevant audiences",
      "Send personalized outreach in batches",
      "Ship samples, track UTM links, and monitor content live",
    ],
  },
  {
    title: "Wholesale outreach",
    tag: "B2B",
    items: [
      "Target longevity clinics and functional medicine practices",
      "Use proof-based cold email and follow-up sequences",
      "Hand off only the final approval steps to Chiya",
    ],
  },
];

const OWNER_TASKS = [
  "Review the daily brief and approve pending sends.",
  "Spot-check ad spend, orders, and email metrics.",
  "Handle exceptions, partnerships, and high-stakes decisions.",
];

const TRIGGERS = [
  ["Email list", "1,000+ subscribers", "Add more segmentation and remarketing."],
  ["Organic traffic", "$5K MRR equivalent", "Scale content production and paid search."],
  ["ROAS", "2x+ sustained", "Increase budget on winning campaigns."],
  ["Influencer replies", "5+ qualified per month", "Add sample fulfillment and tracking."],
];

export default function AutomationBlueprintPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Marketing Hub", href: "/marketing" }, { label: "Automation Blueprint" }]} />
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="max-w-3xl">
          <p className="eyebrow mb-3">Operating System</p>
          <h1 className="text-page-hero font-bold tracking-tight mb-5">Automation Blueprint</h1>
          <p className="body-lg text-zinc-400 max-w-2xl">
            The goal is simple: let Nexphoria run on repeatable systems, not memory. The site should keep learning,
            emailing, posting, and following up even when nobody is at the keyboard.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-8">
        <article className="rounded-3xl border border-white/8 bg-zinc-900 p-7">
          <h2 className="text-2xl font-semibold mb-4">The machine</h2>
          <div className="grid gap-4 lg:grid-cols-2">
            {SYSTEMS.map((system) => (
              <div key={system.title} className="rounded-2xl border border-white/8 bg-zinc-950 p-5">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-lg font-semibold">{system.title}</h3>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-zinc-500 bg-zinc-800 px-2 py-1 rounded-full">
                    {system.tag}
                  </span>
                </div>
                <ul className="space-y-2 text-sm leading-6 text-zinc-300 list-disc list-inside">
                  {system.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-3xl border border-white/8 bg-zinc-900 p-7">
          <h2 className="text-2xl font-semibold mb-4">What Chiya does</h2>
          <ul className="space-y-3 text-zinc-300 leading-7 list-disc list-inside">
            {OWNER_TASKS.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-3xl border border-white/8 bg-zinc-900 p-7">
          <h2 className="text-2xl font-semibold mb-4">Growth triggers</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-zinc-500 uppercase tracking-[0.16em] text-[11px]">
                  <th className="py-3 pr-4">Signal</th>
                  <th className="py-3 pr-4">Threshold</th>
                  <th className="py-3 pr-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {TRIGGERS.map(([signal, threshold, action]) => (
                  <tr key={signal} className="border-t border-white/8">
                    <td className="py-3 pr-4 text-zinc-200">{signal}</td>
                    <td className="py-3 pr-4 text-zinc-400">{threshold}</td>
                    <td className="py-3 pr-4 text-zinc-300">{action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="rounded-3xl border border-white/8 bg-zinc-900 p-7">
          <h2 className="text-2xl font-semibold mb-4">Core principle</h2>
          <p className="text-zinc-300 leading-7 max-w-3xl">
            Automate the repeatable, document the rest, and keep human approval where trust, money, or public reputation
            are on the line.
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
