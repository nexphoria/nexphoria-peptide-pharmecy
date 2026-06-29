import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Marketing Content Hub | Nexphoria",
  description:
    "Customer personas, crisis comms, brand style, launch checklist, ads structure, and social scripts for Nexphoria's go-to-market playbook.",
  openGraph: {
    title: "Marketing Content Hub — Nexphoria",
    description:
      "The internal marketing reference center for Nexphoria: personas, positioning, launch ops, paid search structure, and content scripts.",
    url: "https://nexphoria.com/marketing",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const PAGES = [
  {
    href: "/marketing/customer-personas",
    title: "Customer Personas",
    desc: "Three core buyer archetypes and the messaging/channel map for each.",
    tag: "Ready",
  },
  {
    href: "/marketing/brand-style-guide",
    title: "Brand Style Guide",
    desc: "Voice, typography, visual system, and creative rules.",
    tag: "Source doc",
  },
  {
    href: "/marketing/competitor-comparison-pages",
    title: "Competitor Comparison Pages",
    desc: "SEO deployment plan for vendor-comparison landing pages.",
    tag: "New",
  },
  {
    href: "/marketing/crisis-comms-playbook",
    title: "Crisis Comms Playbook",
    desc: "Response framework, escalation ladder, and holding statements.",
    tag: "Source doc",
  },
  {
    href: "/marketing/launch-week-checklist",
    title: "Launch Week Checklist",
    desc: "Day-by-day launch ops, QA, and monitoring checklist.",
    tag: "Source doc",
  },
  {
    href: "/marketing/google-ads-structure",
    title: "Google Ads Structure",
    desc: "Campaign, ad group, keyword, and negative keyword framework.",
    tag: "Source doc",
  },
  {
    href: "/marketing/instagram-reels-scripts",
    title: "30 Instagram Reels Scripts",
    desc: "Short-form content angles and hooks for the first campaign wave.",
    tag: "Source doc",
  },
];

export default function MarketingHubPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Marketing Hub" }]} />
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="max-w-3xl">
          <p className="eyebrow mb-3">Internal Reference</p>
          <h1 className="text-page-hero font-bold tracking-tight mb-5">Marketing Content Hub</h1>
          <p className="body-lg text-zinc-400 max-w-2xl">
            The launch-side playbook for Nexphoria. Start with customer personas, then use the source docs to
            align brand voice, crisis response, launch operations, paid search, and short-form content.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {PAGES.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group rounded-2xl border border-white/8 bg-zinc-900 p-6 hover:border-[#B8A44C]/40 hover:bg-zinc-800/70 transition"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h2 className="text-lg font-semibold group-hover:text-[#B8A44C] transition-colors">
                  {page.title}
                </h2>
                <span className="text-[11px] uppercase tracking-[0.18em] text-zinc-500 bg-zinc-800 px-2 py-1 rounded-full">
                  {page.tag}
                </span>
              </div>
              <p className="text-sm leading-6 text-zinc-400">{page.desc}</p>
              <div className="mt-5 text-sm text-[#B8A44C] font-medium">Open →</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
