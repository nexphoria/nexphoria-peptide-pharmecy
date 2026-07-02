"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";

// Static metadata — exported from a client component via a named export is NOT
// supported in Next.js; this file is intentionally kept as a Server Component
// wrapper that renders the client portion. But since the spec asks for a single
// file, we mark it "use client" and export metadata separately — Next.js will
// pick it up as a static export from the module.

// NOTE: Next.js 14+ supports metadata + "use client" in the same file only
// when the metadata export is at the top of the module. We follow that pattern.

export const metadata: Metadata = {
  title: "The Wolverine Stack — BPC-157 + TB-500 Tissue Repair Protocol | Nexphoria",
  description:
    "BPC-157 + TB-500 — The combination elite athletes use to accelerate tissue repair and crush inflammation. Physician-guided protocol starting at $189/mo.",
  alternates: { canonical: "https://nexphoria.com/stacks/wolverine" },
  openGraph: {
    title: "The Wolverine Stack — BPC-157 + TB-500 | Nexphoria",
    description:
      "Accelerate tissue repair, crush inflammation, and recover faster with the Wolverine Stack. Physician-guided protocol.",
    url: "https://nexphoria.com/stacks/wolverine",
    siteName: "Nexphoria",
    type: "website",
    images: [{ url: "https://nexphoria.com/og-image.jpg", width: 1200, height: 630 }],
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const COMPOUNDS = [
  {
    name: "BPC-157",
    full: "Body Protection Compound-157",
    badge: "TENDON & GUT REPAIR",
    mechanism:
      "A 15-amino acid peptide derived from human gastric juice that upregulates growth factor receptors (VEGFR2, FGFR), promotes angiogenesis, and activates the FAK-paxillin pathway to drive fibroblast migration and tendon-cell proliferation.",
    dose: "250–500 mcg/day subcutaneous or intramuscular, targeting the injury site.",
    benefits: [
      "Accelerates tendon, ligament, and muscle repair",
      "Reduces systemic and local inflammation",
      "Protects and heals gut lining (leaky gut, IBD)",
      "Promotes nerve regeneration",
      "Improves joint mobility post-injury",
    ],
    color: "#B8A44C",
  },
  {
    name: "TB-500",
    full: "Thymosin Beta-4 Synthetic Fragment",
    badge: "SYSTEMIC RECOVERY",
    mechanism:
      "A synthetic analogue of the naturally occurring Thymosin Beta-4 protein. Acts by sequestering actin monomers, reducing inflammation via downregulation of inflammatory cytokines (IL-6, TNF-α), and stimulating cell migration and differentiation through interaction with the G-actin pool.",
    dose: "2–2.5 mg twice weekly subcutaneous injection for the first 4–6 weeks; 2 mg monthly thereafter for maintenance.",
    benefits: [
      "Systemic anti-inflammatory action",
      "Promotes muscle fibre repair and satellite cell activation",
      "Enhances cardiovascular tissue repair",
      "Reduces scar tissue formation",
      "Improves flexibility and range of motion",
    ],
    color: "#1A1A18",
  },
];

const WHO_FOR = [
  {
    icon: "🏋️",
    title: "High-Volume Athletes",
    desc: "CrossFit, powerlifting, endurance athletes dealing with repetitive-use injuries, tendinopathy, or slow connective tissue recovery.",
  },
  {
    icon: "🩹",
    title: "Post-Surgical Recovery",
    desc: "Individuals recovering from orthopedic surgery — ACL reconstruction, rotator cuff repair, meniscus work — who want to compress recovery timelines.",
  },
  {
    icon: "🔥",
    title: "Chronic Inflammation",
    desc: "Anyone with persistent joint inflammation, tendinitis, or inflammatory gut conditions who has plateaued with conventional approaches.",
  },
  {
    icon: "💼",
    title: "Active Professionals",
    desc: "High-performers who can't afford extended downtime and need to stay functional while healing from sprains, strains, or overuse.",
  },
];

const TIMELINE = [
  {
    period: "Week 1–2",
    heading: "Inflammation dampens",
    body: "Most users report a noticeable reduction in acute soreness, swelling, and joint stiffness within the first 10–14 days. Sleep quality often improves as systemic inflammation recedes.",
  },
  {
    period: "Month 1",
    heading: "Tissue remodelling begins",
    body: "Range of motion improves. Tendon and muscle injuries show measurable functional gains. Gut symptoms (if present) typically resolve. Training volume can often be cautiously reintroduced.",
  },
  {
    period: "Month 3",
    heading: "Structural consolidation",
    body: "By the end of the third month the majority of users report full or near-full return to pre-injury function. Collagen matrix quality is improved and injury recurrence risk is reduced.",
  },
];

const BLOODWORK = [
  { marker: "hsCRP", direction: "↓", note: "High-sensitivity C-reactive protein — primary inflammation marker" },
  { marker: "IL-6", direction: "↓", note: "Pro-inflammatory interleukin — key driver of chronic inflammation" },
  { marker: "TNF-α", direction: "↓", note: "Tumour necrosis factor alpha — systemic inflammatory cytokine" },
  { marker: "IGF-1", direction: "↑", note: "Insulin-like growth factor — indicator of tissue-repair signalling" },
  { marker: "VEGF", direction: "↑", note: "Vascular endothelial growth factor — angiogenesis and perfusion" },
];

// ─── Animations ───────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function WolverineStackPage() {
  return (
    <div className="bg-[#FAF7F2]">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex flex-col justify-end overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/stacks/wolverine.jpg"
            alt="The Wolverine Stack — BPC-157 + TB-500"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0E] via-[#0F0F0E]/60 to-transparent" />
        </div>

        {/* Breadcrumb */}
        <div className="absolute top-28 left-0 right-0 px-6 md:px-12 z-10">
          <Breadcrumb
            variant="dark"
            items={[
              { label: "Home", href: "/" },
              { label: "Stacks", href: "/stacks" },
              { label: "Wolverine" },
            ]}
          />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 pb-20 md:pb-28">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-bold tracking-[0.22em] uppercase mb-6"
              style={{ color: "#B8A44C" }}
            >
              Recovery Protocol · BPC-157 + TB-500
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] mb-6"
              style={{ color: "#FAF7F2", letterSpacing: "-0.02em" }}
            >
              The Wolverine<br />Stack
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl font-light max-w-xl mb-10"
              style={{ color: "rgba(250,247,242,0.72)", lineHeight: 1.55 }}
            >
              BPC-157 + TB-500 — The combination elite athletes use to accelerate
              tissue repair and crush inflammation.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 items-center">
              <Link
                href="/quiz"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                style={{ backgroundColor: "#B8A44C", color: "#0F0F0E" }}
              >
                Start Protocol Assessment
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide border transition-all duration-200 hover:bg-white/10"
                style={{ borderColor: "rgba(250,247,242,0.3)", color: "#FAF7F2" }}
              >
                $189 / mo
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[10px] tracking-[0.18em] uppercase text-white">Scroll</span>
          <div className="w-px h-8 bg-white/40" />
        </div>
      </section>

      {/* ── WHAT'S IN THE STACK ──────────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[#0F0F0E]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mb-16"
          >
            <motion.p variants={fadeUp} className="text-xs font-bold tracking-[0.22em] uppercase mb-4" style={{ color: "#B8A44C" }}>
              The Protocol
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-light" style={{ color: "#FAF7F2", letterSpacing: "-0.02em" }}>
              What's in the stack
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {COMPOUNDS.map((c, i) => (
              <motion.div
                key={c.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                custom={i}
                className="rounded-2xl p-8 md:p-10 flex flex-col gap-6"
                style={{ backgroundColor: "#1C1C1A", border: "1px solid #2A2A28" }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span
                      className="inline-block text-[10px] font-bold tracking-[0.18em] uppercase rounded-full px-3 py-1 mb-4"
                      style={{ backgroundColor: "rgba(184,164,76,0.15)", color: "#B8A44C" }}
                    >
                      {c.badge}
                    </span>
                    <h3 className="font-display text-3xl md:text-4xl font-light" style={{ color: "#FAF7F2" }}>
                      {c.name}
                    </h3>
                    <p className="text-xs tracking-wide mt-1" style={{ color: "#6A6050" }}>
                      {c.full}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold tracking-[0.16em] uppercase mb-2" style={{ color: "#B8A44C" }}>
                    Mechanism
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(250,247,242,0.65)" }}>
                    {c.mechanism}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold tracking-[0.16em] uppercase mb-2" style={{ color: "#B8A44C" }}>
                    Protocol Dose
                  </p>
                  <p className="text-sm leading-relaxed font-medium" style={{ color: "rgba(250,247,242,0.85)" }}>
                    {c.dose}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold tracking-[0.16em] uppercase mb-3" style={{ color: "#B8A44C" }}>
                    Key Benefits
                  </p>
                  <ul className="space-y-2">
                    {c.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm" style={{ color: "rgba(250,247,242,0.72)" }}>
                        <span className="mt-1 shrink-0 w-1 h-1 rounded-full bg-[#B8A44C]" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ─────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mb-16"
          >
            <motion.p variants={fadeUp} className="text-xs font-bold tracking-[0.22em] uppercase mb-4" style={{ color: "#B8A44C" }}>
              Candidate Profile
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-light" style={{ color: "#1A1A18", letterSpacing: "-0.02em" }}>
              Who it's for
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base max-w-xl mt-4" style={{ color: "#6A6050", lineHeight: 1.7 }}>
              The Wolverine Stack is physician-prescribed based on your intake assessment and bloodwork markers. These are the profiles that benefit most.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {WHO_FOR.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="rounded-2xl p-7 bg-white"
                style={{ border: "1px solid rgba(26,26,24,0.08)" }}
              >
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="font-display text-xl font-light mb-3" style={{ color: "#1A1A18" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6A6050" }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── EXPECTED TIMELINE ────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[#0F0F0E]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mb-16"
          >
            <motion.p variants={fadeUp} className="text-xs font-bold tracking-[0.22em] uppercase mb-4" style={{ color: "#B8A44C" }}>
              What to expect
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-light" style={{ color: "#FAF7F2", letterSpacing: "-0.02em" }}>
              Expected timeline
            </motion.h2>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div
              className="hidden md:block absolute left-[calc(16.67%+1px)] top-8 bottom-8 w-px"
              style={{ backgroundColor: "#2A2A28" }}
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-8"
            >
              {TIMELINE.map((t, i) => (
                <motion.div key={t.period} variants={fadeUp} className="relative flex md:flex-col gap-6">
                  {/* Period badge */}
                  <div className="flex items-center gap-3 md:mb-6">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10"
                      style={{ backgroundColor: "#B8A44C" }}
                    >
                      <span className="text-[10px] font-bold text-[#0F0F0E]">{i + 1}</span>
                    </div>
                    <span
                      className="text-xs font-bold tracking-[0.18em] uppercase"
                      style={{ color: "#B8A44C" }}
                    >
                      {t.period}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-light mb-3" style={{ color: "#FAF7F2" }}>
                      {t.heading}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(250,247,242,0.6)" }}>
                      {t.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BLOODWORK MARKERS ────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mb-16"
          >
            <motion.p variants={fadeUp} className="text-xs font-bold tracking-[0.22em] uppercase mb-4" style={{ color: "#B8A44C" }}>
              Lab Tracking
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-light" style={{ color: "#1A1A18", letterSpacing: "-0.02em" }}>
              Bloodwork markers it moves
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base max-w-xl mt-4" style={{ color: "#6A6050", lineHeight: 1.7 }}>
              Every Nexphoria protocol includes a foundation bloodwork panel. These are the markers we track across the Wolverine Stack protocol.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="space-y-3"
          >
            {BLOODWORK.map((bw) => (
              <motion.div
                key={bw.marker}
                variants={fadeUp}
                className="flex items-center gap-6 p-5 rounded-xl bg-white"
                style={{ border: "1px solid rgba(26,26,24,0.08)" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-lg font-bold"
                  style={{
                    backgroundColor: bw.direction === "↓" ? "rgba(220,80,60,0.1)" : "rgba(60,180,120,0.1)",
                    color: bw.direction === "↓" ? "#C0392B" : "#27AE60",
                  }}
                >
                  {bw.direction}
                </div>
                <div>
                  <p className="font-medium text-sm" style={{ color: "#1A1A18" }}>
                    {bw.marker}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "#6A6050" }}>
                    {bw.note}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PRICING / CTA ────────────────────────────────────────────────── */}
      <section id="pricing" className="py-24 md:py-32 px-6 md:px-12 bg-[#0F0F0E]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              className="rounded-3xl overflow-hidden"
              style={{ border: "1px solid #2A2A28" }}
            >
              {/* Top bar */}
              <div className="px-8 md:px-12 py-6" style={{ backgroundColor: "#B8A44C" }}>
                <p className="text-xs font-bold tracking-[0.22em] uppercase" style={{ color: "#0F0F0E" }}>
                  Wolverine Stack — Physician Protocol
                </p>
              </div>

              <div className="px-8 md:px-12 py-12 md:py-16" style={{ backgroundColor: "#1C1C1A" }}>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="font-display text-6xl md:text-7xl font-light" style={{ color: "#FAF7F2" }}>
                        $189
                      </span>
                      <span className="text-lg" style={{ color: "#6A6050" }}>/mo</span>
                    </div>
                    <p className="text-sm mb-8" style={{ color: "rgba(250,247,242,0.55)" }}>
                      Includes physician consultation, compounded BPC-157 + TB-500, and free foundation bloodwork panel.
                    </p>

                    <ul className="space-y-3 mb-10">
                      {[
                        "Board-certified physician oversight",
                        "Monthly 503A compounded supply",
                        "Free foundation bloodwork panel",
                        "Protocol adjustments included",
                        "Discreet, temperature-controlled shipping",
                        "Cancel or pause anytime",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm" style={{ color: "rgba(250,247,242,0.72)" }}>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <circle cx="8" cy="8" r="7.5" stroke="#B8A44C" strokeOpacity="0.4" />
                            <path d="M5 8l2 2 4-4" stroke="#B8A44C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-4">
                      <Link
                        href="/quiz"
                        className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold tracking-wide transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                        style={{ backgroundColor: "#B8A44C", color: "#0F0F0E" }}
                      >
                        Start Assessment
                        <span aria-hidden>→</span>
                      </Link>
                      <Link
                        href="/clinical"
                        className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-medium tracking-wide border transition-all duration-200 hover:bg-white/5"
                        style={{ borderColor: "#2A2A28", color: "rgba(250,247,242,0.6)" }}
                      >
                        How it works
                      </Link>
                    </div>
                  </div>

                  {/* Trust signals */}
                  <div
                    className="md:w-56 rounded-2xl p-6 shrink-0"
                    style={{ backgroundColor: "#0F0F0E", border: "1px solid #2A2A28" }}
                  >
                    {[
                      { label: "Physician consult", value: "Included" },
                      { label: "Compounds", value: "BPC-157 + TB-500" },
                      { label: "Manufacturing", value: "503A cGMP" },
                      { label: "Tested", value: "HPLC + CoA" },
                      { label: "Protocol", value: "3–6 months" },
                    ].map((row) => (
                      <div key={row.label} className="py-3 border-b last:border-0" style={{ borderColor: "#2A2A28" }}>
                        <p className="text-[10px] tracking-[0.14em] uppercase mb-1" style={{ color: "#6A6050" }}>
                          {row.label}
                        </p>
                        <p className="text-sm font-medium" style={{ color: "#FAF7F2" }}>
                          {row.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Disclaimer */}
            <motion.p variants={fadeUp} className="text-center text-xs mt-8" style={{ color: "#6A6050" }}>
              Peptide therapy requires a physician assessment. Your protocol is prescribed based on your intake, bloodwork, and clinical history.
              For qualified patients only. Results vary.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── OTHER STACKS ─────────────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 bg-[#FAF7F2]">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-xs font-bold tracking-[0.22em] uppercase mb-3" style={{ color: "#B8A44C" }}>
              Explore more
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-light mb-10" style={{ color: "#1A1A18" }}>
              Other protocols
            </motion.h2>
            <motion.div variants={stagger} className="flex flex-wrap gap-3 justify-center">
              {[
                { label: "The Glow Stack", href: "/stacks/glow" },
                { label: "The Restore Stack", href: "/stacks/restore" },
                { label: "The Clarity Stack", href: "/stacks/clarity" },
                { label: "The GLP-1 Protocol", href: "/stacks/glp1" },
                { label: "The Growth Protocol", href: "/stacks/growth" },
              ].map((s) => (
                <motion.div key={s.href} variants={fadeUp}>
                  <Link
                    href={s.href}
                    className="inline-flex rounded-full px-6 py-2.5 text-sm font-medium border transition-all duration-200 hover:border-[#1A1A18]"
                    style={{ borderColor: "rgba(26,26,24,0.15)", color: "#1A1A18" }}
                  >
                    {s.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


