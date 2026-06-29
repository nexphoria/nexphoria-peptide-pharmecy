import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Launch Week Checklist | Nexphoria",
  description:
    "Day-by-day launch operations, QA, monitoring, reporting, and escalation checklist.",
};

const PRELAUNCH_SECTIONS = [
  {
    title: "Technical verification",
    items: [
      "Run a full site audit: all product pages load, no 404s, no broken images.",
      "Verify checkout end-to-end: cart → payment → confirmation email.",
      "Test mobile checkout on iOS Safari and Android Chrome.",
      "Confirm all COA links resolve to valid documents.",
      "Verify SSL is valid and sitemap.xml is accessible.",
      "Submit sitemap to Google Search Console.",
      "Confirm analytics are firing on key pages.",
    ],
  },
  {
    title: "Inventory and fulfillment",
    items: [
      "Confirm opening inventory counts are accurate.",
      "Verify fulfillment is ready for Day 1 orders.",
      "Check cold-chain packaging materials are on hand.",
      "Confirm labels include RUO language, batch numbers, and expiration dates.",
      "Make sure every batch has a retrievable COA ready for customers.",
    ],
  },
  {
    title: "Marketing assets",
    items: [
      "Test the launch announcement email in the ESP.",
      "Prepare the hero social post for Instagram, X, and Reddit.",
      "Confirm Google Ads campaigns, budgets, and tracking.",
      "Approve Meta creatives if they are going live.",
      "Publish and index the launch blog post.",
      "Line up any planned influencer or community posts.",
    ],
  },
];

const DAILY_PLAN = [
  {
    day: "Day 1",
    title: "Launch",
    phases: [
      {
        label: "Morning",
        items: [
          "Deploy any last-minute site fixes.",
          "Send the launch announcement email.",
          "Publish hero social posts.",
          "Activate Google Ads.",
          "Go live check: place one test order end-to-end.",
        ],
      },
      {
        label: "Midday",
        items: [
          "Monitor incoming orders and fulfillment queue.",
          "Check Cloudflare uptime.",
          "Respond to support messages within 2 hours.",
        ],
      },
      {
        label: "Evening",
        items: [
          "Post secondary behind-the-scenes or lab proof content.",
          "Review sessions, bounce rate, add-to-cart rate, and conversion.",
          "Review ad CTR and CPC against target.",
        ],
      },
    ],
  },
  {
    day: "Day 2",
    title: "Stabilize",
    phases: [
      {
        label: "Operations",
        items: [
          "Fulfill Day 1 orders and confirm tracking is sent.",
          "Review support inbox for recurring questions.",
          "Flag products moving faster than expected.",
        ],
      },
      {
        label: "Marketing",
        items: [
          "Publish a second educational blog post.",
          "Re-engage abandoned carts from Day 1.",
          "Answer Reddit questions without sounding promotional.",
          "Add negative keywords from the search terms report.",
        ],
      },
    ],
  },
  {
    day: "Day 3",
    title: "Amplify",
    phases: [
      {
        label: "Growth",
        items: [
          "Publish a researcher-facing content post.",
          "Reach out to top influencers and YouTubers.",
          "Ship one long-form SEO article.",
          "Post one educational comparison thread on Reddit.",
        ],
      },
    ],
  },
  {
    day: "Day 4",
    title: "Optimize",
    phases: [
      {
        label: "Analysis",
        items: [
          "Compile 3-day revenue, conversion, and AOV data.",
          "Identify the #1 funnel drop-off and fix it.",
          "Run one headline or CTA A/B test if traffic supports it.",
          "Send a browse-abandoner follow-up email.",
        ],
      },
    ],
  },
  {
    day: "Day 5",
    title: "Expand",
    phases: [
      {
        label: "Outreach",
        items: [
          "Post a week-in-review update.",
          "Publish a testimonial or researcher spotlight if available.",
          "Pitch two relevant newsletters.",
          "Submit to three relevant directories or community resources.",
        ],
      },
    ],
  },
  {
    day: "Day 6",
    title: "Nurture",
    phases: [
      {
        label: "Email",
        items: [
          "Activate the post-purchase sequence.",
          "Publish a stack protocol article.",
          "Review social performance and replicate what worked.",
          "Answer new Reddit questions quickly.",
        ],
      },
    ],
  },
  {
    day: "Day 7",
    title: "Debrief",
    phases: [
      {
        label: "Review",
        items: [
          "Summarize orders, revenue, AOV, and conversion rate.",
          "List the top 5 products and traffic sources.",
          "Note support tickets and FAQ gaps.",
          "Set Week 2 targets and ad budget allocation.",
        ],
      },
    ],
  },
];

const EVERGREEN_RHYTHM = [
  ["Daily", "Fulfill orders, reply to support, monitor ad spend."],
  ["3x/week", "Publish blog content."],
  ["Daily", "Post on Instagram, X, and Reddit."],
  ["Weekly", "Review analytics, traffic, and top keywords."],
  ["Weekly", "Send the email newsletter."],
  ["Bi-weekly", "Optimize Google Ads search terms and bids."],
  ["Monthly", "Full SEO audit and inventory review."],
  ["Quarterly", "Vendor and quality audit."],
];

const EMERGENCIES = [
  {
    title: "Site goes down",
    items: [
      "Check Cloudflare Pages status.",
      "Check GitHub for failed deploys.",
      "Roll back to the last stable deployment.",
      "Post a maintenance notice if needed.",
    ],
  },
  {
    title: "Payment failure",
    items: [
      "Check Stripe error details and webhook status.",
      "Manually process affected orders if needed.",
      "Communicate with affected customers within 1 hour.",
    ],
  },
  {
    title: "Inventory stockout",
    items: [
      "Mark the product out of stock instead of deleting it.",
      "Add a back-in-stock capture.",
      "Notify cart abandoners.",
      "Push a public restock estimate.",
    ],
  },
  {
    title: "COA / quality concern",
    items: [
      "Pull the batch COA immediately.",
      "Verify against the lab report.",
      "If matched, provide the documentation.",
      "If not, halt sales and investigate.",
    ],
  },
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
            Treat launch week like an operations sprint: verify the site, protect fulfillment, watch the data, and
            escalate fast when anything slips.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-6">
        {PRELAUNCH_SECTIONS.map((section) => (
          <article key={section.title} className="rounded-3xl border border-white/8 bg-zinc-900 p-7">
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            <ul className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {section.items.map((item) => (
                <li key={item} className="rounded-2xl border border-white/8 bg-zinc-950 p-4 text-sm text-zinc-300 leading-6">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-6">
        {DAILY_PLAN.map((day) => (
          <article key={day.day} className="rounded-3xl border border-white/8 bg-zinc-900 p-7">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between mb-5">
              <h2 className="text-2xl font-semibold">{day.day}</h2>
              <span className="text-xs uppercase tracking-[0.18em] text-zinc-500 bg-zinc-800 px-3 py-1 rounded-full w-fit">
                {day.title}
              </span>
            </div>
            <div className="grid gap-4">
              {day.phases.map((phase) => (
                <div key={phase.label} className="rounded-2xl border border-white/8 bg-zinc-950 p-5">
                  <div className="text-sm uppercase tracking-[0.18em] text-zinc-500 mb-3">{phase.label}</div>
                  <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                    {phase.items.map((item) => (
                      <div key={item} className="rounded-xl border border-white/8 bg-zinc-900 p-4 text-sm text-zinc-300 leading-6">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-6">
        <article className="rounded-3xl border border-white/8 bg-zinc-900 p-7">
          <h2 className="text-2xl font-semibold mb-4">Evergreen operating rhythm</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-zinc-500 uppercase tracking-[0.16em] text-[11px]">
                  <th className="py-3 pr-4">Frequency</th>
                  <th className="py-3 pr-4">Task</th>
                </tr>
              </thead>
              <tbody>
                {EVERGREEN_RHYTHM.map(([frequency, task]) => (
                  <tr key={`${frequency}-${task}`} className="border-t border-white/8">
                    <td className="py-3 pr-4 text-zinc-400 w-32">{frequency}</td>
                    <td className="py-3 pr-4 text-zinc-200">{task}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="rounded-3xl border border-white/8 bg-zinc-900 p-7">
          <h2 className="text-2xl font-semibold mb-4">Emergency protocols</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {EMERGENCIES.map((block) => (
              <div key={block.title} className="rounded-2xl border border-white/8 bg-zinc-950 p-5">
                <h3 className="text-lg font-semibold mb-3">{block.title}</h3>
                <ul className="space-y-2 text-sm leading-6 text-zinc-300 list-disc list-inside">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-wrap gap-3">
          <Link href="/marketing" className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 hover:border-[#B8A44C]/40">
            Back to hub
          </Link>
        </div>
      </section>
    </main>
  );
}
