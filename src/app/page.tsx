import type { Metadata } from "next";
import Link from "next/link";
import { TypewriterHeadline } from "@/components/TypewriterHeadline";
import { MarqueeTicker } from "@/components/MarqueeTicker";
import { StackGrid } from "@/components/StackGrid";
import { StatsSection } from "@/components/StatsSection";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Nexphoria — Peptides, Prescribed.",
  description:
    "Physician-guided peptide therapy. Board-certified MDs write your protocol. 503A compounded. Free Foundation bloodwork panel with every protocol. Cold-chain shipped to all 50 states.",
  alternates: { canonical: "https://nexphoria.com" },
  openGraph: {
    title: "Nexphoria — Peptides, Prescribed.",
    description: "Physician-guided peptide therapy. Board-certified MDs. 503A compounded. Free bloodwork with every protocol.",
    url: "https://nexphoria.com",
    siteName: "Nexphoria",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Nexphoria — Peptide Pharmacy" }],
  },
};

/* ── HOW IT WORKS ── */
const HOW_STEPS = [
  {
    n: "01",
    title: "Take the intake",
    body: "Five-minute medical questionnaire. Your goal, your history, your baseline.",
  },
  {
    n: "02",
    title: "Physician writes your Rx",
    body: "A board-certified MD reviews and writes your protocol within 24–48 hours.",
  },
  {
    n: "03",
    title: "Delivered to your door",
    body: "Compounded in a licensed US 503A pharmacy. Cold-chain shipped. Discreet.",
  },
];

/* ── BLOODWORK SECTION ── */
function BloodworkSection() {
  return (
    <section className="bg-[#0F0F0E] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl border border-[#B8A44C]/20 bg-[#111110] overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left */}
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <p className="text-[10px] font-bold tracking-[0.25em] text-[#B8A44C] uppercase mb-4">
                The Bloodwork Pillar
              </p>
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-tight text-white mb-6">
                The panel is<br />
                <span className="italic text-[#B8A44C]">the protocol.</span>
              </h2>
              <p className="text-[#6A6050] text-[15px] leading-relaxed mb-8 max-w-lg">
                Peptides move labs. Every dose, every week. Without a baseline panel and a 90-day retest,
                you're guessing. We run the labs, a physician reads them, and your protocol adjusts to the data.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/bloodwork"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#B8A44C] text-[#0F0F0E] text-[12px] font-bold tracking-[0.1em] uppercase hover:bg-[#D4BF6A] transition-colors"
                >
                  See the bloodwork program →
                </Link>
                <Link
                  href="/stacks"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#2A2A28] text-[#6A6050] text-[12px] font-semibold tracking-[0.08em] uppercase hover:border-[#B8A44C]/40 hover:text-[#B8A44C] transition-all"
                >
                  View protocols
                </Link>
              </div>
            </div>
            {/* Right — stats */}
            <div className="border-t lg:border-t-0 lg:border-l border-[#1E1E1C] p-12 lg:p-16 grid grid-cols-2 gap-8 content-center">
              {[
                { n: "Free", label: "Foundation Panel with every active protocol" },
                { n: "90-day", label: "Retest cadence to track your biomarkers" },
                { n: "HSA/FSA", label: "Eligible — superbill for reimbursement" },
                { n: "Nationwide", label: "Draw sites — no clinic visit required" },
              ].map((s) => (
                <div key={s.n}>
                  <div className="font-display text-[2rem] text-[#B8A44C] mb-1">{s.n}</div>
                  <p className="text-[11px] text-[#4A4440] leading-relaxed">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── HOW IT WORKS SECTION ── */
function HowItWorksSection() {
  return (
    <section className="bg-[#080807] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <p className="text-[10px] font-bold tracking-[0.25em] text-[#B8A44C] uppercase mb-4">
            How It Works
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-tight text-white mb-16">
            Three steps.<br />
            <span className="italic text-[#6A6050]">No clinic visit.</span>
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-px bg-[#1A1A18]">
          {HOW_STEPS.map((step) => (
            <div key={step.n} className="bg-[#080807] p-10 flex flex-col gap-4">
              <span className="font-display text-[3rem] text-[#1E1E1C] leading-none">
                {step.n}
              </span>
              <h3 className="font-display text-[1.3rem] text-white">{step.title}</h3>
              <p className="text-[14px] text-[#4A4440] leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#B8A44C] text-[#0F0F0E] text-[12px] font-bold tracking-[0.12em] uppercase hover:bg-[#D4BF6A] transition-colors"
          >
            Begin your assessment
          </Link>
          <p className="mt-3 text-[11px] text-[#3A3830]">
            No commitment · Physician-reviewed in 24–48h · 5-min intake
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── THE PHARMACY SECTION ── */
function PharmacySection() {
  return (
    <section className="bg-[#0F0F0E] py-24 px-4 border-t border-[#1A1A18]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <SectionReveal>
          <p className="text-[10px] font-bold tracking-[0.25em] text-[#B8A44C] uppercase mb-4">
            The Pharmacy
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-tight text-white mb-6">
            Weighed to the<br />
            <span className="italic text-[#B8A44C]">thousandth of a gram.</span>
          </h2>
          <p className="text-[#6A6050] text-[15px] leading-relaxed mb-8">
            Every dose is compounded in a US 503A pharmacy on Sartorius analytical balances
            accurate to 0.0001g. Third-party sterility and identity tested. Cold-chain shipped.
          </p>
          <div className="flex flex-wrap gap-3">
            {["503A US Pharmacy", "USP-797 Sterile", "3rd-Party Tested", "HIPAA Compliant"].map((b) => (
              <span
                key={b}
                className="text-[10px] font-semibold tracking-[0.1em] uppercase px-3 py-1.5 rounded border border-[#2A2A28] text-[#4A4440]"
              >
                {b}
              </span>
            ))}
          </div>
        </SectionReveal>

        {/* Visual placeholder — replaced with actual vial photo once approved */}
        <div className="relative rounded-2xl border border-[#2A2A28] bg-[#111110] aspect-square overflow-hidden flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-24 mx-auto mb-4 rounded-full border-2 border-[#B8A44C]/30 flex items-center justify-center">
              <div className="w-2 h-12 bg-gradient-to-b from-[#B8A44C] to-[#B8A44C]/20 rounded-full" />
            </div>
            <p className="text-[10px] tracking-[0.2em] text-[#2A2A28] uppercase">Vial photography coming</p>
          </div>
          {/* Diagonal tile pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 20px, #B8A44C 20px, #B8A44C 21px)`,
            }}
          />
        </div>
      </div>
    </section>
  );
}

/* ── FINAL CTA SECTION ── */
function FinalCTA() {
  return (
    <section className="bg-[#080807] py-32 px-4 border-t border-[#1A1A18]">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[10px] font-bold tracking-[0.25em] text-[#B8A44C] uppercase mb-6">
          Physician-Guided Protocol
        </p>
        <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-tight text-white mb-6">
          Your biology is<br />
          <span className="italic text-[#B8A44C]">speaking.</span>
        </h2>
        <p className="text-[#6A6050] text-[16px] leading-relaxed mb-10 max-w-xl mx-auto">
          A board-certified physician will review your intake and write your protocol within 24–48 hours.
          Free bloodwork panel included. No commitment required.
        </p>
        <Link
          href="/quiz"
          className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-[#B8A44C] text-[#0F0F0E] text-[13px] font-bold tracking-[0.12em] uppercase hover:bg-[#D4BF6A] transition-colors"
        >
          Begin Assessment →
        </Link>
        <p className="mt-4 text-[11px] text-[#2A2A28]">
          5-min intake · No commitment · HIPAA compliant
        </p>
      </div>
    </section>
  );
}

/* ── MAIN PAGE ── */
export default function HomePage() {
  return (
    <main className="bg-[#0F0F0E] min-h-screen">

      {/* ── HERO ── */}
      <section className="relative min-h-[100svh] flex flex-col justify-end bg-[#0F0F0E] overflow-hidden">

        {/* Diagonal tile texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `repeating-linear-gradient(-55deg, transparent, transparent 24px, #B8A44C 24px, #B8A44C 25px)`,
          }}
        />

        {/* Radial amber glow — center */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-[600px] h-[600px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #B8A44C 0%, transparent 70%)" }}
          />
        </div>

        {/* Video placeholder — swap for actual hero video once chosen */}
        <div className="absolute inset-0 z-0">
          {/* Hero video slot — uncomment when video is finalized:
          <video
            autoPlay muted loop playsInline
            className="w-full h-full object-cover opacity-30"
            src="/hero-loop.mp4"
          /> */}
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-40 w-full">
          <div className="max-w-3xl">

            {/* Eyebrow */}
            <p className="text-[10px] font-bold tracking-[0.25em] text-[#B8A44C] uppercase mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-[#B8A44C]" />
              Physician-Guided Peptide Therapy
            </p>

            {/* Typewriter headline */}
            <TypewriterHeadline />

            {/* Subline */}
            <p className="text-[#6A6050] text-[16px] leading-relaxed mb-10 max-w-xl">
              Board-certified MDs write your protocol in 24–48h.
              503A compounded. Free Foundation bloodwork panel with every Rx.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/quiz"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#B8A44C] text-[#0F0F0E] text-[12px] font-bold tracking-[0.12em] uppercase hover:bg-[#D4BF6A] transition-colors"
              >
                Begin Assessment
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#2A2A28] text-[#6A6050] text-[12px] font-semibold tracking-[0.08em] uppercase hover:border-[#B8A44C]/40 hover:text-[#B8A44C] transition-all"
              >
                How it works →
              </Link>
            </div>

            {/* Micro trust */}
            <p className="mt-6 text-[11px] text-[#2A2A28]">
              No commitment · Physician-reviewed in 24–48h · 5-min intake
            </p>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <MarqueeTicker />

      {/* ── STACK GRID ── */}
      <StackGrid />

      {/* ── STATS ── */}
      <StatsSection />

      {/* ── HOW IT WORKS ── */}
      <HowItWorksSection />

      {/* ── BLOODWORK ── */}
      <BloodworkSection />

      {/* ── THE PHARMACY ── */}
      <PharmacySection />

      {/* ── FINAL CTA ── */}
      <FinalCTA />

    </main>
  );
}

