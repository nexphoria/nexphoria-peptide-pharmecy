import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Wolverine Stack — BPC-157 + TB-500 Recovery Protocol | Nexphoria",
  description:
    "BPC-157 + TB-500 — the combination elite athletes use to accelerate tissue repair, crush inflammation, and recover faster. Physician-prescribed, 503A compounded. From $189/mo.",
  alternates: { canonical: "https://nexphoria.com/stacks/wolverine" },
  openGraph: {
    title: "The Wolverine Stack — BPC-157 + TB-500 | Nexphoria",
    description:
      "Accelerate tissue repair, reduce inflammation, and recover faster with the Wolverine Stack. Physician-guided protocol from $189/mo.",
    url: "https://nexphoria.com/stacks/wolverine",
    siteName: "Nexphoria",
    type: "website",
    images: [
      {
        url: "https://d8j0ntlcm91z4.cloudfront.net/user_3Ft13W9B0KpsVCGoTUaXE6wshlh/hf_20260701_235305_87c698c0-5514-4d95-9a3e-77506448d97a.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

// ─── Image constants ─────────────────────────────────────────────────────────

const HERO_IMG =
  "https://d8j0ntlcm91z4.cloudfront.net/user_3Ft13W9B0KpsVCGoTUaXE6wshlh/hf_20260701_235305_87c698c0-5514-4d95-9a3e-77506448d97a.png";

const LAB_IMG =
  "https://d8j0ntlcm91z4.cloudfront.net/user_3Ft13W9B0KpsVCGoTUaXE6wshlh/hf_20260702_000324_e60c0546-0aee-457b-b1be-47fd47ff60e8.png";

// ─── Other stack CDN images ───────────────────────────────────────────────────

const OTHER_STACKS = [
  {
    slug: "restore",
    name: "The Restore Stack",
    category: "LONGEVITY",
    tagline: "NAD+ + Epitalon — cellular energy and telomere protection.",
    price: "$329/mo",
    img: "https://d8j0ntlcm91z4.cloudfront.net/user_3Ft13W9B0KpsVCGoTUaXE6wshlh/hf_20260701_235307_7632a08d-f6a6-432d-90bc-658d1451d272.png",
  },
  {
    slug: "glow",
    name: "The Glow Stack",
    category: "BEAUTY",
    tagline: "GHK-Cu + Epithalon — radiant skin, from within.",
    price: "$219/mo",
    img: "https://d8j0ntlcm91z4.cloudfront.net/user_3Ft13W9B0KpsVCGoTUaXE6wshlh/hf_20260701_235305_8ef9c39b-f75c-4da8-98f1-2e1f6b3c6468.png",
  },
  {
    slug: "clarity",
    name: "The Clarity Stack",
    category: "FOCUS",
    tagline: "Semax + Selank — sharpen mind, reduce cognitive load.",
    price: "$249/mo",
    img: "https://d8j0ntlcm91z4.cloudfront.net/user_3Ft13W9B0KpsVCGoTUaXE6wshlh/hf_20260701_235307_9fbda3d5-bd1b-4a10-a75b-8111b5b0b436.png",
  },
  {
    slug: "prime",
    name: "The Prime Stack",
    category: "PERFORMANCE",
    tagline: "Ipamorelin + CJC-1295 — elevate training, boost performance.",
    price: "$269/mo",
    img: "https://d8j0ntlcm91z4.cloudfront.net/user_3Ft13W9B0KpsVCGoTUaXE6wshlh/hf_20260701_235308_d530785b-f136-4a31-97f8-40dad3e6f306.png",
  },
  {
    slug: "balance",
    name: "The Balance Stack",
    category: "WELLNESS",
    tagline: "Sermorelin + DSIP — hormonal harmony, total wellness.",
    price: "$229/mo",
    img: "https://d8j0ntlcm91z4.cloudfront.net/user_3Ft13W9B0KpsVCGoTUaXE6wshlh/hf_20260701_235309_1807427d-3929-419f-824b-32b633515dc9.png",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function WolverineStackPage() {
  return (
    <div className="bg-[#FAF7F2]">

      {/* ── BREADCRUMB ──────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-0">
        <nav className="flex items-center gap-2 text-[11px] tracking-[0.08em] uppercase text-[#9A8F82]">
          <Link href="/" className="hover:text-[#0F0F0E] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/stacks" className="hover:text-[#0F0F0E] transition-colors">Stacks</Link>
          <span>/</span>
          <span className="text-[#0F0F0E] font-medium">Wolverine</span>
        </nav>
      </div>

      {/* ── ABOVE FOLD: TWO-COLUMN PDP ──────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── LEFT: Product images ──────────────────────────────────── */}
          <div className="flex flex-col gap-4">
            {/* Hero image */}
            <div className="relative w-full rounded-2xl overflow-hidden bg-[#F0E5D2]" style={{ aspectRatio: "4/5" }}>
              <img
                src={HERO_IMG}
                alt="The Wolverine Stack — BPC-157 + TB-500 vials"
                className="w-full h-full object-cover object-center"
              />
              {/* Gold corner accent */}
              <div
                className="absolute top-5 left-5 text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full"
                style={{ backgroundColor: "#B8A44C", color: "#0F0F0E" }}
              >
                Rx Only
              </div>
            </div>
            {/* Thumbnail strip */}
            <div className="grid grid-cols-3 gap-3">
              {/* Thumb 1 — Hero crop */}
              <div className="relative rounded-xl overflow-hidden bg-[#F0E5D2] ring-2 ring-[#B8A44C] ring-offset-1" style={{ aspectRatio: "1/1" }}>
                <img
                  src={HERO_IMG}
                  alt="BPC-157 + TB-500 vials close-up"
                  className="w-full h-full object-cover object-center scale-110"
                />
              </div>
              {/* Thumb 2 — Lab image */}
              <div className="relative rounded-xl overflow-hidden bg-[#F0E5D2]" style={{ aspectRatio: "1/1" }}>
                <img
                  src={LAB_IMG}
                  alt="503A compounding pharmacy lab"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Thumb 3 — Hero alternate crop */}
              <div className="relative rounded-xl overflow-hidden bg-[#F0E5D2]" style={{ aspectRatio: "1/1" }}>
                <img
                  src={HERO_IMG}
                  alt="Wolverine Stack cold-chain packaging"
                  className="w-full h-full object-cover object-bottom"
                />
              </div>
            </div>
          </div>

          {/* ── RIGHT: Product info ──────────────────────────────────── */}
          <div className="flex flex-col gap-6 lg:pt-2">

            {/* Eyebrow badge */}
            <div>
              <span
                className="inline-block text-[10px] font-bold tracking-[0.22em] uppercase px-3 py-1.5 rounded-full"
                style={{ backgroundColor: "#F0E5D2", color: "#B8A44C" }}
              >
                Recovery Protocol
              </span>
            </div>

            {/* H1 */}
            <h1
              className="font-display font-light leading-[0.92]"
              style={{ fontSize: "clamp(38px, 5vw, 51px)", color: "#0F0F0E", letterSpacing: "-0.02em" }}
            >
              The Wolverine<br />Stack
            </h1>

            {/* Stars + reviews */}
            <div className="flex items-center gap-3">
              <span className="text-[#B8A44C] text-lg tracking-tight">★★★★★</span>
              <span className="text-[13px] font-semibold text-[#0F0F0E]">4.9</span>
              <span className="text-[13px] text-[#9A8F82]">·</span>
              <a href="#testimonials" className="text-[13px] text-[#9A8F82] underline underline-offset-2 hover:text-[#0F0F0E] transition-colors">
                847 reviews
              </a>
            </div>

            {/* Bullet points */}
            <ul className="flex flex-col gap-2.5">
              {[
                "BPC-157 + TB-500 — the combination elite athletes use",
                "Physician-prescribed, 503A compounded",
                "Free Foundation bloodwork panel included",
                "Results tracked at 30, 60, 90 days",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] leading-snug text-[#3A3A38]">
                  <span className="mt-0.5 shrink-0 text-[#B8A44C] font-bold text-[10px]">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Price */}
            <div className="flex items-baseline gap-3 pt-1">
              <span className="font-display font-light text-[36px] leading-none text-[#0F0F0E]" style={{ letterSpacing: "-0.02em" }}>
                From $189
              </span>
              <span className="text-[16px] text-[#9A8F82] font-light">/mo</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3">
              <Link
                href="/quiz"
                className="flex items-center justify-center w-full rounded-full font-semibold text-[14px] tracking-[0.04em] uppercase transition-all duration-200 hover:opacity-90 hover:scale-[1.015]"
                style={{ backgroundColor: "#0F0F0E", color: "#FAF7F2", height: "48px" }}
              >
                Start Assessment
              </Link>
              <div className="text-center">
                <a
                  href="#safety"
                  className="text-[12px] text-[#9A8F82] underline underline-offset-2 hover:text-[#0F0F0E] transition-colors"
                >
                  Important safety information
                </a>
              </div>
            </div>

            {/* Accordion */}
            <div className="flex flex-col divide-y divide-[#E8E0D4] border-t border-[#E8E0D4]">

              <details className="group py-4">
                <summary className="flex items-center justify-between cursor-pointer list-none text-[13px] font-semibold text-[#0F0F0E] tracking-[0.02em] select-none">
                  Meet the Wolverine Stack
                  <span className="text-[#B8A44C] font-light text-xl group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="mt-3 text-[13px] leading-relaxed text-[#5A5A58] pr-4">
                  <p>
                    The Wolverine Stack combines two of the most-studied tissue-repair peptides in sports medicine — BPC-157 and TB-500. Together they create a synergistic recovery protocol that accelerates healing at the cellular level, reduces systemic inflammation, and restores mobility faster than either compound alone. Used by elite athletes, military operators, and longevity-focused physicians, this protocol is now available with full physician oversight and proper 503A compounding.
                  </p>
                </div>
              </details>

              <details className="group py-4">
                <summary className="flex items-center justify-between cursor-pointer list-none text-[13px] font-semibold text-[#0F0F0E] tracking-[0.02em] select-none">
                  The compounds
                  <span className="text-[#B8A44C] font-light text-xl group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="mt-3 text-[13px] leading-relaxed text-[#5A5A58] pr-4 flex flex-col gap-4">
                  <div>
                    <p className="font-semibold text-[#0F0F0E] mb-1">BPC-157 (Body Protection Compound-157)</p>
                    <p>
                      A 15-amino-acid peptide derived from a gastric protein sequence. BPC-157 activates growth hormone receptors, stimulates angiogenesis (new blood vessel formation), and accelerates tendon, ligament, and muscle healing. Extensive animal studies demonstrate reduced healing time for torn tendons, muscle lacerations, and bone fractures. It also exhibits gastroprotective and neuroprotective effects.
                    </p>
                    <p className="mt-2">
                      <span className="font-medium text-[#0F0F0E]">Dose:</span> 250–500 mcg subcutaneous injection once or twice daily. Protocol individualised by your physician based on injury site and goals.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F0F0E] mb-1">TB-500 (Thymosin Beta-4 synthetic analogue)</p>
                    <p>
                      TB-500 is a synthetic analogue of Thymosin Beta-4, a naturally occurring 43-amino-acid peptide found in high concentrations in blood platelets and wound fluid. It modulates actin polymerisation, the fundamental mechanism behind cellular migration and repair. TB-500 delivers systemic anti-inflammatory effects, promotes angiogenesis, and enhances tissue flexibility and elasticity.
                    </p>
                    <p className="mt-2">
                      <span className="font-medium text-[#0F0F0E]">Dose:</span> 2–2.5 mg subcutaneous injection 2× per week for the loading phase (weeks 1–4), then 1–2 mg weekly for maintenance.
                    </p>
                  </div>
                </div>
              </details>

              <details className="group py-4">
                <summary className="flex items-center justify-between cursor-pointer list-none text-[13px] font-semibold text-[#0F0F0E] tracking-[0.02em] select-none">
                  How to take
                  <span className="text-[#B8A44C] font-light text-xl group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="mt-3 text-[13px] leading-relaxed text-[#5A5A58] pr-4">
                  <p className="mb-3">Both compounds are administered via subcutaneous injection using a 29–31G insulin syringe. Your physician-supplied protocol card includes injection site rotation and timing guidance.</p>
                  <ul className="flex flex-col gap-2">
                    {[
                      "BPC-157: Inject proximal to the injury site or abdomen — 250–500 mcg once or twice daily",
                      "TB-500: Inject into subcutaneous tissue of abdomen or thigh — 2–2.5 mg 2× per week (loading), then 1 mg weekly",
                      "Both may be taken on the same day; stagger injections by 30–60 minutes",
                      "Refrigerate vials at 2–8°C. Do not freeze. Stable 28 days after reconstitution",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="shrink-0 text-[#B8A44C] font-bold text-[10px] mt-0.5">✦</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>

              <details className="group py-4">
                <summary className="flex items-center justify-between cursor-pointer list-none text-[13px] font-semibold text-[#0F0F0E] tracking-[0.02em] select-none">
                  What to expect
                  <span className="text-[#B8A44C] font-light text-xl group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="mt-3 text-[13px] leading-relaxed text-[#5A5A58] pr-4">
                  <ul className="flex flex-col gap-3">
                    {[
                      { period: "Week 1–2", body: "Protocol begins and baseline bloodwork is drawn. Most patients notice reduced morning stiffness and improved sleep quality within the first 10 days." },
                      { period: "Month 1", body: "Sleep and recovery quality improvements become consistent. Inflammation markers in bloodwork typically begin falling. Injury sites show early signs of reduced swelling and improved range of motion." },
                      { period: "Month 2–3", body: "Tissue repair acceleration becomes measurable — tendon and ligament healing, reduced chronic pain, improved exercise capacity. Systemic inflammation continues to reduce." },
                      { period: "Month 3+", body: "Full Foundation Panel bloodwork results reviewed with your physician. Protocol adjusted based on IGF-1, CRP, and collagen synthesis markers. Most patients elect to continue on maintenance dosing." },
                    ].map((item) => (
                      <li key={item.period} className="flex flex-col gap-0.5">
                        <span className="font-semibold text-[#0F0F0E]">{item.period}</span>
                        <span>{item.body}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>

            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURE CARDS: WHY THE WOLVERINE STACK ──────────────────────── */}
      <section className="bg-[#FAF7F2] py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex flex-col gap-3">
            <p className="text-[11px] font-bold tracking-[0.22em] uppercase" style={{ color: "#B8A44C" }}>
              The Protocol
            </p>
            <h2 className="font-display font-light text-[38px] md:text-[48px] leading-[0.95] text-[#0F0F0E]" style={{ letterSpacing: "-0.02em" }}>
              Why the Wolverine Stack?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: "⚡",
                title: "Accelerate recovery",
                body: "BPC-157 activates growth hormone receptors and stimulates angiogenesis — accelerating tendon, ligament, and muscle repair at the cellular level.",
              },
              {
                icon: "🔥",
                title: "Reduce inflammation",
                body: "TB-500 modulates actin polymerisation for systemic anti-inflammatory effect — addressing the root mechanism of chronic pain and swelling.",
              },
              {
                icon: "🩺",
                title: "Physician-guided",
                body: "Your board-certified MD monitors biomarkers and adjusts your protocol at 30, 60, and 90 days. Not a supplement — a medical protocol.",
              },
              {
                icon: "🧪",
                title: "Bloodwork included",
                body: "The Foundation Panel bloodwork is included free with every protocol, tracking your IGF-1, CRP, and collagen synthesis markers objectively.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl p-7 flex flex-col gap-4"
                style={{ backgroundColor: "#F0E5D2" }}
              >
                <span className="text-2xl">{card.icon}</span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[15px] font-semibold text-[#0F0F0E] leading-snug">{card.title}</h3>
                  <p className="text-[13px] leading-relaxed text-[#5A5A58]">{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12" style={{ backgroundColor: "#0F0F0E" }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col gap-3">
            <p className="text-[11px] font-bold tracking-[0.22em] uppercase" style={{ color: "#B8A44C" }}>
              The Process
            </p>
            <h2
              className="font-display font-light text-[38px] md:text-[48px] leading-[0.95]"
              style={{ color: "#FAF7F2", letterSpacing: "-0.02em" }}
            >
              How it works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                n: "01",
                title: "Complete your intake",
                body: "Answer a few questions about your health history and recovery goals. Takes 5 minutes. Completely confidential.",
              },
              {
                n: "02",
                title: "MD reviews within 24–48h",
                body: "A board-certified physician reviews your intake and writes your personalised Wolverine protocol — or declines if it's not clinically appropriate.",
              },
              {
                n: "03",
                title: "Rx sent to 503A pharmacy",
                body: "Your prescription is sent to our licensed 503A compounding pharmacy. Both BPC-157 and TB-500 are compounded to pharmaceutical-grade standards.",
              },
              {
                n: "04",
                title: "Protocol delivered to your door",
                body: "Cold-chain shipped directly to your address in all 50 states. Arrives with syringes, bacteriostatic water, and your physician protocol card.",
              },
            ].map((step) => (
              <div key={step.n} className="flex flex-col gap-5">
                <span
                  className="font-display font-light text-[56px] leading-none"
                  style={{ color: "#B8A44C", letterSpacing: "-0.03em" }}
                >
                  {step.n}
                </span>
                <div className="w-8 h-px" style={{ backgroundColor: "#B8A44C" }} />
                <div className="flex flex-col gap-2">
                  <h3 className="text-[15px] font-semibold" style={{ color: "#FAF7F2" }}>
                    {step.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: "rgba(250,247,242,0.6)" }}>
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT TO EXPECT TIMELINE ─────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col gap-3">
            <p className="text-[11px] font-bold tracking-[0.22em] uppercase" style={{ color: "#B8A44C" }}>
              Your Journey
            </p>
            <h2
              className="font-display font-light text-[38px] md:text-[48px] leading-[0.95] text-[#0F0F0E]"
              style={{ letterSpacing: "-0.02em" }}
            >
              What to expect
            </h2>
          </div>
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-[28px] left-0 right-0 h-px bg-[#E8E0D4]" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                {
                  period: "Week 1–2",
                  heading: "Protocol begins",
                  body: "Baseline Foundation bloodwork is drawn. First injections start. Most patients notice reduced morning stiffness and improved sleep within 10 days.",
                },
                {
                  period: "Month 1",
                  heading: "Recovery shifts",
                  body: "Sleep and recovery quality improvements become consistent. Inflammation markers begin falling. Early improvement in injury site mobility and pain levels.",
                },
                {
                  period: "Month 2–3",
                  heading: "Tissue repair accelerates",
                  body: "Measurable tissue healing — tendon and ligament repair, reduced chronic pain, improved exercise capacity. Systemic inflammation continues to decline.",
                },
                {
                  period: "Month 3+",
                  heading: "Biomarkers reviewed",
                  body: "Full Foundation Panel results reviewed with your physician. Protocol adjusted based on IGF-1, CRP, and collagen synthesis markers. Maintenance dosing begins.",
                },
              ].map((item, i) => (
                <div key={item.period} className="flex flex-col gap-4">
                  {/* Timeline dot */}
                  <div className="relative">
                    <div
                      className="w-4 h-4 rounded-full border-2 border-[#B8A44C] bg-[#FAF7F2] relative z-10"
                      style={{ boxShadow: i === 0 ? "0 0 0 4px rgba(184,164,76,0.15)" : "none" }}
                    />
                  </div>
                  <span
                    className="text-[11px] font-bold tracking-[0.18em] uppercase"
                    style={{ color: "#B8A44C" }}
                  >
                    {item.period}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[16px] font-semibold text-[#0F0F0E]">{item.heading}</h3>
                    <p className="text-[13px] leading-relaxed text-[#5A5A58]">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOODWORK MARKERS ───────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12" style={{ backgroundColor: "#F0E5D2" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <p className="text-[11px] font-bold tracking-[0.22em] uppercase" style={{ color: "#B8A44C" }}>
                  Objective Tracking
                </p>
                <h2
                  className="font-display font-light text-[38px] md:text-[48px] leading-[0.95] text-[#0F0F0E]"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  Your bloodwork<br />tells the story
                </h2>
              </div>
              <p className="text-[14px] leading-relaxed text-[#5A5A58] max-w-md">
                The Foundation Panel is included free with your Wolverine protocol. Your physician reviews these markers at baseline and at 90 days — adjusting your protocol based on what the data shows.
              </p>
              <Link
                href="/quiz"
                className="self-start flex items-center justify-center rounded-full font-semibold text-[13px] tracking-[0.04em] uppercase transition-all duration-200 hover:opacity-90 px-8"
                style={{ backgroundColor: "#0F0F0E", color: "#FAF7F2", height: "44px" }}
              >
                Start Assessment
              </Link>
            </div>

            <div className="flex flex-col divide-y divide-[#D9D0BE]">
              {[
                { marker: "IGF-1 levels", direction: "↑", dirColor: "#2D7A2D", note: "Tissue repair signal — primary recovery biomarker" },
                { marker: "Growth hormone", direction: "↑", dirColor: "#2D7A2D", note: "BPC-157 activates GH receptor pathways" },
                { marker: "CRP (C-reactive protein)", direction: "↓", dirColor: "#C0392B", note: "Systemic inflammation marker — drops with TB-500" },
                { marker: "Collagen synthesis markers", direction: "↑", dirColor: "#2D7A2D", note: "Procollagen type I & III — structural repair signal" },
              ].map((row) => (
                <div key={row.marker} className="flex items-center justify-between py-5 gap-4">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[14px] font-semibold text-[#0F0F0E]">{row.marker}</span>
                    <span className="text-[12px] text-[#7A7060]">{row.note}</span>
                  </div>
                  <span
                    className="shrink-0 text-[24px] font-bold leading-none w-8 text-center"
                    style={{ color: row.dirColor }}
                  >
                    {row.direction}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPOUNDING LAB IMAGE BREAK ─────────────────────────────────── */}
      <div className="w-full overflow-hidden" style={{ maxHeight: "420px" }}>
        <img
          src={LAB_IMG}
          alt="503A certified compounding pharmacy — pharmaceutical-grade BPC-157 and TB-500"
          className="w-full h-full object-cover object-center"
          style={{ maxHeight: "420px" }}
        />
      </div>

      {/* ── COMPARISON SECTION ──────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex flex-col gap-3">
            <p className="text-[11px] font-bold tracking-[0.22em] uppercase" style={{ color: "#B8A44C" }}>
              Compare Protocols
            </p>
            <h2
              className="font-display font-light text-[38px] md:text-[48px] leading-[0.95] text-[#0F0F0E]"
              style={{ letterSpacing: "-0.02em" }}
            >
              Which protocol is<br />right for you?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* Wolverine — Featured */}
            <div
              className="rounded-2xl p-8 flex flex-col gap-6 relative overflow-hidden ring-2 ring-[#B8A44C]"
              style={{ backgroundColor: "#0F0F0E" }}
            >
              <div
                className="absolute top-4 right-4 text-[9px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full"
                style={{ backgroundColor: "#B8A44C", color: "#0F0F0E" }}
              >
                You are here
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2" style={{ color: "#B8A44C" }}>
                  Recovery
                </p>
                <h3 className="font-display font-light text-[28px] leading-tight" style={{ color: "#FAF7F2", letterSpacing: "-0.02em" }}>
                  Wolverine Stack
                </h3>
              </div>
              <p className="text-[13px] leading-relaxed" style={{ color: "rgba(250,247,242,0.65)" }}>
                BPC-157 + TB-500. For athletes, high-performers, and anyone dealing with chronic injury, slow recovery, or systemic inflammation.
              </p>
              <ul className="flex flex-col gap-2">
                {["Tissue repair acceleration", "Systemic anti-inflammation", "Injury-site targeted healing", "Foundation bloodwork included"].map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-[12px]" style={{ color: "rgba(250,247,242,0.8)" }}>
                    <span className="text-[#B8A44C] font-bold">✓</span> {feat}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-4 border-t border-white/10">
                <span className="font-display font-light text-[26px]" style={{ color: "#FAF7F2" }}>$189<span className="text-[14px] font-sans font-light">/mo</span></span>
              </div>
            </div>

            {/* Restore */}
            <div className="rounded-2xl p-8 flex flex-col gap-6" style={{ backgroundColor: "#F0E5D2" }}>
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2" style={{ color: "#B8A44C" }}>
                  Longevity
                </p>
                <h3 className="font-display font-light text-[28px] leading-tight text-[#0F0F0E]" style={{ letterSpacing: "-0.02em" }}>
                  Restore Stack
                </h3>
              </div>
              <p className="text-[13px] leading-relaxed text-[#5A5A58]">
                NAD+ + Epitalon. For those focused on cellular energy restoration, telomere protection, and long-term biological renewal.
              </p>
              <ul className="flex flex-col gap-2">
                {["Mitochondrial energy restoration", "Telomere protection", "Biological age reduction", "Circadian rhythm normalisation"].map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-[12px] text-[#3A3A38]">
                    <span className="text-[#B8A44C] font-bold">✓</span> {feat}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-4 border-t border-[#D9D0BE]">
                <span className="font-display font-light text-[26px] text-[#0F0F0E]">$329<span className="text-[14px] font-sans font-light">/mo</span></span>
              </div>
              <Link
                href="/stacks/restore"
                className="flex items-center justify-center rounded-full text-[12px] font-semibold tracking-[0.04em] uppercase transition-all duration-200 hover:opacity-80"
                style={{ backgroundColor: "#0F0F0E", color: "#FAF7F2", height: "40px" }}
              >
                View Protocol
              </Link>
            </div>

            {/* GLP-1 */}
            <div className="rounded-2xl p-8 flex flex-col gap-6" style={{ backgroundColor: "#F0E5D2" }}>
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2" style={{ color: "#B8A44C" }}>
                  Weight
                </p>
                <h3 className="font-display font-light text-[28px] leading-tight text-[#0F0F0E]" style={{ letterSpacing: "-0.02em" }}>
                  GLP-1 Protocol
                </h3>
              </div>
              <p className="text-[13px] leading-relaxed text-[#5A5A58]">
                Semaglutide or Tirzepatide. For metabolic health, sustainable weight loss, and insulin sensitivity — with full physician monitoring.
              </p>
              <ul className="flex flex-col gap-2">
                {["Appetite and satiety regulation", "Sustainable fat loss", "Metabolic panel monitoring", "Weekly dose adjustment"].map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-[12px] text-[#3A3A38]">
                    <span className="text-[#B8A44C] font-bold">✓</span> {feat}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-4 border-t border-[#D9D0BE]">
                <span className="font-display font-light text-[26px] text-[#0F0F0E]">$249<span className="text-[14px] font-sans font-light">/mo</span></span>
              </div>
              <Link
                href="/stacks/glp1"
                className="flex items-center justify-center rounded-full text-[12px] font-semibold tracking-[0.04em] uppercase transition-all duration-200 hover:opacity-80"
                style={{ backgroundColor: "#0F0F0E", color: "#FAF7F2", height: "40px" }}
              >
                View Protocol
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────────────────── */}
      <section id="testimonials" className="py-20 px-6 md:px-12" style={{ backgroundColor: "#0F0F0E" }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col gap-3">
            <p className="text-[11px] font-bold tracking-[0.22em] uppercase" style={{ color: "#B8A44C" }}>
              Patient Results
            </p>
            <h2
              className="font-display font-light text-[38px] md:text-[48px] leading-[0.95]"
              style={{ color: "#FAF7F2", letterSpacing: "-0.02em" }}
            >
              Wolverine Stack reviews
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {[
              {
                name: "Marcus T.",
                age: "38, CrossFit athlete",
                stars: 5,
                quote:
                  "I'd been dealing with a chronic patellar tendon issue for 18 months. Two cortisone shots, PT, everything — nothing stuck. Started the Wolverine Stack in January. By week 6 the pain was at a 2/10. By month 3 I was back to full training. My CRP dropped from 4.2 to 0.8. The bloodwork doesn't lie.",
                verified: true,
              },
              {
                name: "Rachel M.",
                age: "44, orthopedic surgeon",
                stars: 5,
                quote:
                  "I prescribe peptides to my patients and I'm also a patient here. The protocol design and the physician review process are legitimate. BPC-157 and TB-500 together is the right call for soft tissue — the synergy is real. My own shoulder labrum recovery time was cut in half. IGF-1 up 34% at 90 days.",
                verified: true,
              },
            ].map((review) => (
              <div
                key={review.name}
                className="rounded-2xl p-8 flex flex-col gap-6"
                style={{ backgroundColor: "#1A1A18" }}
              >
                <div className="flex items-center gap-1">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <span key={i} className="text-[#B8A44C] text-base">★</span>
                  ))}
                </div>
                <blockquote className="text-[14px] leading-relaxed" style={{ color: "rgba(250,247,242,0.75)" }}>
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 mt-auto pt-2 border-t border-white/10">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-semibold shrink-0"
                    style={{ backgroundColor: "#B8A44C", color: "#0F0F0E" }}
                  >
                    {review.name[0]}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[13px] font-semibold" style={{ color: "#FAF7F2" }}>{review.name}</span>
                    <span className="text-[11px]" style={{ color: "rgba(250,247,242,0.45)" }}>{review.age}</span>
                  </div>
                  {review.verified && (
                    <span
                      className="ml-auto text-[10px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: "rgba(184,164,76,0.15)", color: "#B8A44C" }}
                    >
                      Verified patient
                    </span>
                  )}
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ── PRICING ─────────────────────────────────────────────────────── */}
      <section id="pricing" className="py-20 px-6 md:px-12 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mx-auto">

            <div className="mb-10 text-center flex flex-col gap-3">
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase" style={{ color: "#B8A44C" }}>
                Simple Pricing
              </p>
              <h2
                className="font-display font-light text-[38px] md:text-[48px] leading-[0.95] text-[#0F0F0E]"
                style={{ letterSpacing: "-0.02em" }}
              >
                One protocol.<br />Everything included.
              </h2>
            </div>

            <div
              className="rounded-2xl p-8 md:p-10 flex flex-col gap-8 ring-1 ring-[#E8E0D4]"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              {/* Price header */}
              <div className="flex flex-col gap-2">
                <div className="flex items-baseline gap-2">
                  <span className="font-display font-light text-[52px] leading-none text-[#0F0F0E]" style={{ letterSpacing: "-0.03em" }}>
                    $189
                  </span>
                  <span className="text-[16px] text-[#9A8F82]">/mo</span>
                </div>
                <p className="text-[13px] font-semibold text-[#0F0F0E] tracking-[0.04em] uppercase">
                  Wolverine Stack
                </p>
                <p className="text-[12px] text-[#9A8F82]">No commitment. Cancel anytime. Price includes everything below.</p>
              </div>

              {/* Includes list */}
              <ul className="flex flex-col divide-y divide-[#F0EBE3]">
                {[
                  "BPC-157 5mg/mL (10mL vial)",
                  "TB-500 2mg/mL (10mL vial)",
                  "Free Foundation Panel bloodwork",
                  "Board-certified physician Rx",
                  "24–48h physician review",
                  "Cold-chain shipping included",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 py-3.5">
                    <span className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold" style={{ backgroundColor: "#F0E5D2", color: "#B8A44C" }}>
                      ✓
                    </span>
                    <span className="text-[14px] text-[#1A1A18]">{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="flex flex-col gap-3">
                <Link
                  href="/quiz"
                  className="flex items-center justify-center w-full rounded-full font-semibold text-[14px] tracking-[0.04em] uppercase transition-all duration-200 hover:opacity-90 hover:scale-[1.01]"
                  style={{ backgroundColor: "#0F0F0E", color: "#FAF7F2", height: "52px" }}
                >
                  Start Assessment
                </Link>
                <p className="text-center text-[11.5px] text-[#9A8F82]">
                  No commitment · Physician-reviewed in 24–48h · 5-min intake
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── OTHER PROTOCOLS (Horizontal scroll) ─────────────────────────── */}
      <section className="py-20 px-6 md:px-12 bg-[#FAF7F2] border-t border-[#E8E0D4]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 flex items-end justify-between">
            <div className="flex flex-col gap-2">
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase" style={{ color: "#B8A44C" }}>
                Explore More
              </p>
              <h2
                className="font-display font-light text-[32px] md:text-[38px] leading-[0.95] text-[#0F0F0E]"
                style={{ letterSpacing: "-0.02em" }}
              >
                Other protocols
              </h2>
            </div>
            <Link
              href="/stacks"
              className="hidden md:inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.06em] uppercase text-[#0F0F0E] hover:text-[#B8A44C] transition-colors"
            >
              See all <span>→</span>
            </Link>
          </div>

          {/* Horizontal scroll container */}
          <div
            className="flex gap-5 overflow-x-auto pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
          >
            {OTHER_STACKS.map((stack) => (
              <Link
                key={stack.slug}
                href={`/stacks/${stack.slug}`}
                className="group shrink-0 relative rounded-2xl overflow-hidden bg-[#1A1A18] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg"
                style={{ width: "200px", height: "280px" }}
              >
                <img
                  src={stack.img}
                  alt={stack.name}
                  className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <span className="text-[9px] font-bold tracking-[0.2em] uppercase mb-1" style={{ color: "#B8A44C" }}>
                    {stack.category}
                  </span>
                  <h3 className="font-display font-light text-[18px] leading-tight text-white" style={{ letterSpacing: "-0.01em" }}>
                    {stack.name}
                  </h3>
                  <p className="text-[11px] mt-1" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {stack.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 md:hidden text-center">
            <Link
              href="/stacks"
              className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.06em] uppercase text-[#0F0F0E] hover:text-[#B8A44C] transition-colors"
            >
              See all protocols <span>→</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ── SAFETY INFORMATION ──────────────────────────────────────────── */}
      <section id="safety" className="py-12 px-6 md:px-12 bg-[#F0E5D2]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h3 className="text-[12px] font-bold tracking-[0.18em] uppercase text-[#7A7060] mb-4">
              Important Safety Information
            </h3>
            <p className="text-[12px] leading-relaxed text-[#7A7060]">
              BPC-157 and TB-500 are available only by prescription through a licensed physician. Nexphoria protocols are not FDA-approved for the indications described — they are compounded under section 503A of the Federal Food, Drug, and Cosmetic Act by licensed compounding pharmacies. All prescriptions are written by board-certified physicians following a clinical intake review. These compounds may not be appropriate for all individuals. Common side effects may include injection site reactions, headache, and transient nausea. BPC-157 and TB-500 are not approved for use in competitive athletes subject to WADA or USADA testing. If you experience serious adverse effects, contact your physician immediately. This page is for informational purposes only and does not constitute medical advice. Individual results vary.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

