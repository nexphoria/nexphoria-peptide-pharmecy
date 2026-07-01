import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TypewriterHeadline } from "@/components/TypewriterHeadline";

export const metadata: Metadata = {
  title: "Nexphoria — Peptides, Prescribed.",
  description:
    "Physician-guided peptide therapy. Board-certified MDs write your protocol. 503A compounded. Free Foundation bloodwork panel with every protocol.",
  alternates: { canonical: "https://nexphoria.com" },
};

// ── MARQUEE ──────────────────────────────────────────────
function Marquee() {
  const items = [
    "LICENSED PROVIDERS",
    "PRESCRIPTION REQUIRED",
    "CLINICAL-GRADE PEPTIDES",
    "THIRD-PARTY TESTED",
    "DISCREET SHIPPING",
    "HIPAA COMPLIANT",
    "503A COMPOUNDED",
    "FREE BLOODWORK PANEL",
  ];
  const doubled = [...items, ...items];
  return (
    <div className="bg-[#0F0F0E] overflow-hidden py-3 border-y border-[#1A1A18]">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "marquee 30s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 mx-5">
            <span className="text-[10px] font-bold tracking-[0.18em] text-[#9A9080]">
              {item}
            </span>
            <span className="text-[#B8A44C] text-[6px]">●</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

// ── STACK TILES ───────────────────────────────────────────
const STACKS = [
  {
    slug: "wolverine",
    category: "WEIGHT",
    name: "Wolverine",
    tagline: "Advanced weight optimization.",
    href: "/products/wolverine",
    img: "/images/stacks/wolverine.jpg",
  },
  {
    slug: "glow",
    category: "BEAUTY",
    name: "Glow",
    tagline: "Radiant skin. From within.",
    href: "/products/ghk-cu",
    img: "/images/stacks/glow.jpg",
  },
  {
    slug: "restore",
    category: "LONGEVITY",
    name: "Restore",
    tagline: "Support recovery. Extend vitality.",
    href: "/products/nad-plus",
    img: "/images/stacks/restore.jpg",
  },
  {
    slug: "clarity",
    category: "FOCUS",
    name: "Clarity",
    tagline: "Sharpen mind. Improve focus.",
    href: "/products/semax",
    img: "/images/stacks/clarity.jpg",
  },
  {
    slug: "prime",
    category: "PERFORMANCE",
    name: "Prime",
    tagline: "Elevate training. Boost performance.",
    href: "/products/ipamorelin",
    img: "/images/stacks/prime.jpg",
  },
  {
    slug: "balance",
    category: "WELLNESS",
    name: "Balance",
    tagline: "Hormonal balance. Total wellness.",
    href: "/products/sermorelin",
    img: "/images/stacks/balance.jpg",
  },
];

// ── HOW IT WORKS ─────────────────────────────────────────
const STEPS = [
  {
    n: "01",
    title: "Complete your intake",
    body: "Answer a few questions about your health goals and history. Takes under 5 minutes.",
  },
  {
    n: "02",
    title: "Physician review",
    body: "A board-certified MD reviews your intake and writes your personalized protocol within 24–48 hours.",
  },
  {
    n: "03",
    title: "Delivered to your door",
    body: "Your protocol is compounded in a licensed US 503A pharmacy and cold-chain shipped discreetly.",
  },
];

// ── TRUST BADGES ─────────────────────────────────────────
const BADGES = [
  { label: "Board-Certified Physicians", icon: "⚕" },
  { label: "503A US Pharmacy", icon: "🏛" },
  { label: "HIPAA Compliant", icon: "🔒" },
  { label: "Free Bloodwork Panel", icon: "🧬" },
  { label: "HSA / FSA Eligible", icon: "✓" },
  { label: "50-State Coverage", icon: "🇺🇸" },
];

export default function HomePage() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className="bg-[#FAF7F2] min-h-[88vh] flex items-center relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 w-full grid md:grid-cols-2 gap-8 items-center py-20 md:py-0">

          {/* Left — copy */}
          <div className="relative z-10">
            {/* Nav eyebrow */}
            <p className="text-[11px] font-bold tracking-[0.2em] text-[#B8A44C] uppercase mb-8">
              NEXPHORIA — PEPTIDE PHARMACY
            </p>

            {/* Headline */}
            <h1 className="font-display text-[clamp(3.5rem,7vw,6rem)] leading-[0.95] tracking-[-0.02em] text-[#0F0F0E] mb-6">
              Peptides,<br />prescribed.
            </h1>

            <p className="text-[#4A4440] text-[17px] leading-relaxed mb-10 max-w-md">
              Personalized peptide protocols, prescribed by licensed
              providers and delivered to your door.
            </p>

            {/* CTAs — Hims style */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/quiz"
                className="inline-flex items-center px-8 py-4 rounded-full bg-[#0F0F0E] text-white text-[13px] font-semibold tracking-[0.04em] hover:bg-[#2A2A28] transition-colors"
              >
                Start Assessment
              </Link>
              <Link
                href="/stacks"
                className="inline-flex items-center px-8 py-4 rounded-full border border-[#0F0F0E] text-[#0F0F0E] text-[13px] font-semibold tracking-[0.04em] hover:bg-[#0F0F0E] hover:text-white transition-all"
              >
                See Protocols
              </Link>
            </div>

            {/* Micro trust */}
            <p className="mt-6 text-[12px] text-[#9A8F82]">
              No commitment · Physician-reviewed in 24–48h · 5-min intake
            </p>
          </div>

          {/* Right — vial hero image */}
          <div className="relative flex items-end justify-center md:justify-end h-full min-h-[500px]">
            <div className="relative w-full max-w-[680px] h-[500px] md:h-[600px]">
              <Image
                src="/images/hero-vials.jpg"
                alt="Nexphoria peptide vials — TIRZEPATIDE, BPC-157, CJC-1295, IPAMORELIN, SEMAGLUTIDE"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── MARQUEE ── */}
      <Marquee />

      {/* ── STACK TILES ── */}
      <section className="bg-[#F5F2EC] py-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 px-4 md:px-6 max-w-[1400px] mx-auto">
          {STACKS.map((stack) => (
            <Link
              key={stack.slug}
              href={stack.href}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-[#1A1A18] hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Photo */}
              <div className="absolute inset-0">
                <Image
                  src={stack.img}
                  alt={stack.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-[9px] font-bold tracking-[0.18em] text-white/60 uppercase mb-1">
                  {stack.category}
                </p>
                <h3 className="font-display text-[1.6rem] leading-none text-white mb-2">
                  {stack.name}
                </h3>
                <p className="text-[11px] text-white/70 leading-tight mb-4">
                  {stack.tagline}
                </p>

                {/* Arrow button */}
                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                  <span className="text-white group-hover:text-[#0F0F0E] text-sm transition-colors">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── TRUST BADGES ── */}
      <section className="bg-[#FAF7F2] py-14 border-t border-[#EAE6DF]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {BADGES.map((badge) => (
              <div key={badge.label} className="flex flex-col items-center text-center gap-2">
                <span className="text-2xl">{badge.icon}</span>
                <span className="text-[11px] font-semibold tracking-[0.08em] text-[#4A4440] uppercase leading-tight">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-[#FAF7F2] py-24 px-8 border-t border-[#EAE6DF]">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-xl mb-16">
            <p className="text-[11px] font-bold tracking-[0.2em] text-[#B8A44C] uppercase mb-4">
              How It Works
            </p>
            <h2 className="font-display text-[clamp(2.2rem,4vw,3.5rem)] leading-tight text-[#0F0F0E]">
              Three steps.<br />
              <span className="italic text-[#4A4440]">No clinic visit.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {STEPS.map((step) => (
              <div key={step.n} className="flex flex-col gap-4">
                <span className="font-display text-[4rem] text-[#EAE6DF] leading-none">
                  {step.n}
                </span>
                <h3 className="font-display text-[1.4rem] text-[#0F0F0E]">
                  {step.title}
                </h3>
                <p className="text-[15px] text-[#6A6050] leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <Link
              href="/quiz"
              className="inline-flex items-center px-8 py-4 rounded-full bg-[#0F0F0E] text-white text-[13px] font-semibold tracking-[0.04em] hover:bg-[#2A2A28] transition-colors"
            >
              Begin Assessment →
            </Link>
            <p className="mt-3 text-[12px] text-[#9A8F82]">
              5-min intake · No commitment · HIPAA compliant
            </p>
          </div>
        </div>
      </section>

      {/* ── BLOODWORK — DARK SECTION ── */}
      <section className="bg-[#0F0F0E] py-28 px-8">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] text-[#B8A44C] uppercase mb-5">
              The Bloodwork Pillar
            </p>
            <h2 className="font-display text-[clamp(2.2rem,4vw,3.5rem)] leading-tight text-white mb-6">
              The panel is<br />
              <span className="italic text-[#B8A44C]">the protocol.</span>
            </h2>
            <p className="text-[#6A6050] text-[15px] leading-relaxed mb-8 max-w-lg">
              Peptides move labs. Without a baseline panel and a 90-day retest,
              you're guessing. We run the labs, a physician reads them, and your
              protocol adjusts to the data.
            </p>
            <p className="text-[#4A4440] text-[14px] leading-relaxed mb-10 max-w-lg">
              Foundation Panel free with any active protocol. HSA/FSA eligible.
              Superbill for out-of-network reimbursement.
            </p>
            <Link
              href="/bloodwork"
              className="inline-flex items-center px-8 py-4 rounded-full bg-[#B8A44C] text-[#0F0F0E] text-[13px] font-bold tracking-[0.06em] hover:bg-[#D4BF6A] transition-colors"
            >
              See the bloodwork program →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { n: "Free", label: "Foundation Panel with every active protocol" },
              { n: "90-day", label: "Retest cadence to track your biomarkers" },
              { n: "HSA/FSA", label: "Eligible — superbill for reimbursement" },
              { n: "50 states", label: "Draw sites — no clinic visit required" },
            ].map((s) => (
              <div key={s.n} className="bg-[#161614] rounded-2xl p-6 border border-[#2A2A28]">
                <div className="font-display text-[2.2rem] text-[#B8A44C] mb-2 leading-none">
                  {s.n}
                </div>
                <p className="text-[12px] text-[#4A4440] leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE PHARMACY ── */}
      <section className="bg-[#FAF7F2] py-28 px-8 border-t border-[#EAE6DF]">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] text-[#B8A44C] uppercase mb-5">
              The Pharmacy
            </p>
            <h2 className="font-display text-[clamp(2.2rem,4vw,3.5rem)] leading-tight text-[#0F0F0E] mb-6">
              Weighed to the<br />
              <span className="italic">thousandth of a gram.</span>
            </h2>
            <p className="text-[#6A6050] text-[15px] leading-relaxed mb-8">
              Every dose compounded in a US 503A pharmacy on Sartorius analytical
              balances accurate to 0.0001g. Third-party sterility and identity
              tested. Cold-chain shipped.
            </p>
            <div className="flex flex-wrap gap-2">
              {["503A US Pharmacy", "USP-797 Sterile", "3rd-Party Tested", "Cold-Chain Shipped"].map((b) => (
                <span
                  key={b}
                  className="text-[10px] font-semibold tracking-[0.08em] uppercase px-3 py-1.5 rounded-full border border-[#D4CFC8] text-[#6A6050]"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Right — stats */}
          <div className="grid grid-cols-3 gap-px bg-[#EAE6DF]">
            {[
              { n: "24–48h", label: "Physician Rx turnaround" },
              { n: "0.0001g", label: "Analytical precision" },
              { n: "503A", label: "US pharmacy standard" },
            ].map((s) => (
              <div key={s.n} className="bg-[#FAF7F2] px-6 py-8 text-center">
                <div className="font-display text-[2rem] text-[#0F0F0E] mb-1">{s.n}</div>
                <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-[#9A8F82]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-[#0F0F0E] py-32 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[11px] font-bold tracking-[0.2em] text-[#B8A44C] uppercase mb-6">
            Physician-Guided Protocol
          </p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-tight text-white mb-6">
            Your biology is<br />
            <span className="italic text-[#B8A44C]">speaking.</span>
          </h2>
          <p className="text-[#6A6050] text-[16px] leading-relaxed mb-10 max-w-xl mx-auto">
            A board-certified physician will review your intake and write your
            protocol within 24–48 hours. Free bloodwork included. No commitment.
          </p>
          <Link
            href="/quiz"
            className="inline-flex items-center px-10 py-5 rounded-full bg-[#B8A44C] text-[#0F0F0E] text-[13px] font-bold tracking-[0.1em] hover:bg-[#D4BF6A] transition-colors"
          >
            Begin Assessment →
          </Link>
          <p className="mt-4 text-[11px] text-[#2A2A28]">
            5-min intake · No commitment · HIPAA compliant
          </p>
        </div>
      </section>

    </main>
  );
}

