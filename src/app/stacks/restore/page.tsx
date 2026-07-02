"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "The Restore Stack — NAD+ + Epitalon Longevity Protocol | Nexphoria",
  description:
    "NAD+ + Epitalon — the physician-guided longevity stack for cellular energy restoration, telomere protection, and deep biological renewal. $329/mo.",
  alternates: { canonical: "https://nexphoria.com/stacks/restore" },
  openGraph: {
    title: "The Restore Stack — NAD+ + Epitalon | Nexphoria",
    description: "Cellular energy, telomere length, longevity — the Restore Stack protocol.",
    url: "https://nexphoria.com/stacks/restore",
    siteName: "Nexphoria",
    type: "website",
    images: [{ url: "https://nexphoria.com/og-image.jpg", width: 1200, height: 630 }],
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const COMPOUNDS = [
  {
    name: "NAD+",
    full: "Nicotinamide Adenine Dinucleotide",
    badge: "CELLULAR ENERGY",
    mechanism:
      "NAD+ is a fundamental coenzyme present in every living cell, serving as the primary electron carrier in mitochondrial oxidative phosphorylation. It acts as a substrate for sirtuins (SIRT1–7), PARP-1 for DNA repair, and CD38/CD157 signalling. NAD+ levels decline 50%+ by age 60, driving mitochondrial dysfunction, impaired DNA repair, and metabolic decline. IV or subcutaneous NAD+ repletion rapidly restores cellular energy metabolism.",
    dose: "100–500 mg IV infusion 1–2× per month, or 50–100 mg subcutaneous injection 3–5× per week. Protocol individualised based on goals and baseline levels.",
    benefits: [
      "Restores mitochondrial ATP production",
      "Activates longevity sirtuins (SIRT1, SIRT3)",
      "Enhances DNA damage repair via PARP-1",
      "Improves cognitive clarity and mental energy",
      "Supports healthy body weight and metabolism",
      "Reduces neuroinflammation",
    ],
    color: "#B8A44C",
  },
  {
    name: "Epitalon",
    full: "Epithalamin Tetrapeptide (Ala-Glu-Asp-Gly)",
    badge: "TELOMERE PROTECTION",
    mechanism:
      "A synthetic tetrapeptide derived from the pineal gland peptide epithalamin. Epitalon has been shown in multiple Russian longitudinal studies to activate telomerase enzyme expression, elongate telomeres in somatic cells, normalise circadian melatonin production by the pineal gland, and reduce oxidative stress markers. It is the only known peptide with clinical evidence of direct telomere length modulation.",
    dose: "10 mg/day subcutaneous injection for 10–20 days, repeated 2–4× per year. Cyclical protocol preserves telomerase sensitivity.",
    benefits: [
      "Activates telomerase and lengthens telomeres",
      "Normalises pineal melatonin secretion",
      "Profound antioxidant and anti-tumour effects",
      "Extends healthy lifespan in animal models",
      "Improves sleep architecture and depth",
      "Modulates neuroendocrine axis",
    ],
    color: "#1A1A18",
  },
];

const WHO_FOR = [
  {
    icon: "⏳",
    title: "Longevity Optimisers",
    desc: "Individuals committed to extending their health-span — not just lifespan — through evidence-based biological interventions and regular biomarker tracking.",
  },
  {
    icon: "⚡",
    title: "Chronic Fatigue",
    desc: "Those experiencing persistent energy deficits, brain fog, or mitochondrial dysfunction that hasn't resolved with sleep, nutrition, or conventional supplements.",
  },
  {
    icon: "🧬",
    title: "Biological Age Reduction",
    desc: "Anyone whose DNA methylation or telomere testing shows accelerated ageing relative to chronological age who wants to reverse the trajectory.",
  },
  {
    icon: "🧠",
    title: "Cognitive Decline Prevention",
    desc: "High-performers and older adults seeking to maintain and restore working memory, processing speed, and neurological resilience.",
  },
];

const TIMELINE = [
  {
    period: "Days 1–10",
    heading: "Energy surge",
    body: "The Epitalon loading cycle runs first. Most patients report improved sleep within days 3–5 and a notable increase in morning energy and alertness. NAD+ repletion begins simultaneously.",
  },
  {
    period: "Month 1–2",
    heading: "Cellular restoration",
    body: "Mitochondrial function measurably improves — reflected in cognitive sharpness, reduced fatigue, and better exercise recovery. Oxidative stress markers begin falling. Sleep quality reaches new baseline.",
  },
  {
    period: "Month 3–6",
    heading: "Longevity markers shift",
    body: "By the 6-month mark, biological age markers (telomere length, NAD+ levels, inflammatory panel) show measurable improvement. Subjective vitality, mental clarity, and resilience are markedly transformed.",
  },
];

const BLOODWORK = [
  { marker: "NAD+ (Intracellular)", direction: "↑", note: "Direct measurement of cellular NAD+ repletion" },
  { marker: "Telomere Length (T/S ratio)", direction: "↑", note: "Telomere-to-single-copy-gene ratio — primary longevity biomarker" },
  { marker: "8-OHdG", direction: "↓", note: "8-hydroxy-2-deoxyguanosine — DNA oxidative damage marker" },
  { marker: "hsCRP", direction: "↓", note: "Systemic inflammatory burden" },
  { marker: "Melatonin (AM/PM rhythm)", direction: "normalised", note: "Circadian melatonin secretion restored by Epitalon" },
  { marker: "IGF-1", direction: "↑", note: "Anabolic signalling supporting tissue maintenance" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function RestoreStackPage() {
  return (
    <div className="bg-[#FAF7F2]">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/stacks/restore.jpg"
            alt="The Restore Stack — NAD+ + Epitalon"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0E] via-[#0F0F0E]/55 to-transparent" />
        </div>

        <div className="absolute top-28 left-0 right-0 px-6 md:px-12 z-10">
          <Breadcrumb
            variant="dark"
            items={[
              { label: "Home", href: "/" },
              { label: "Stacks", href: "/stacks" },
              { label: "Restore" },
            ]}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 pb-20 md:pb-28">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p
              variants={fadeUp}
              className="text-xs font-bold tracking-[0.22em] uppercase mb-6"
              style={{ color: "#B8A44C" }}
            >
              Longevity Protocol · NAD+ + Epitalon
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] mb-6"
              style={{ color: "#FAF7F2", letterSpacing: "-0.02em" }}
            >
              The Restore<br />Stack
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl font-light max-w-xl mb-10"
              style={{ color: "rgba(250,247,242,0.72)", lineHeight: 1.55 }}
            >
              NAD+ + Epitalon — Restore cellular energy, protect your telomeres,
              and dial back your biological clock with the longevity protocol.
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
                $329 / mo
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[10px] tracking-[0.18em] uppercase text-white">Scroll</span>
          <div className="w-px h-8 bg-white/40" />
        </div>
      </section>

      {/* ── COMPOUNDS ────────────────────────────────────────────────────── */}
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

      {/* ── TIMELINE ─────────────────────────────────────────────────────── */}
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

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {TIMELINE.map((t, i) => (
              <motion.div key={t.period} variants={fadeUp} className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#B8A44C" }}
                  >
                    <span className="text-[10px] font-bold text-[#0F0F0E]">{i + 1}</span>
                  </div>
                  <span className="text-xs font-bold tracking-[0.18em] uppercase" style={{ color: "#B8A44C" }}>
                    {t.period}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-light" style={{ color: "#FAF7F2" }}>
                  {t.heading}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(250,247,242,0.6)" }}>
                  {t.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── BLOODWORK ────────────────────────────────────────────────────── */}
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
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-base font-bold"
                  style={{
                    backgroundColor:
                      bw.direction === "↓"
                        ? "rgba(220,80,60,0.1)"
                        : bw.direction === "↑"
                        ? "rgba(60,180,120,0.1)"
                        : "rgba(184,164,76,0.1)",
                    color:
                      bw.direction === "↓"
                        ? "#C0392B"
                        : bw.direction === "↑"
                        ? "#27AE60"
                        : "#B8A44C",
                  }}
                >
                  {bw.direction === "normalised" ? "◎" : bw.direction}
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

      {/* ── PRICING ──────────────────────────────────────────────────────── */}
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
              <div className="px-8 md:px-12 py-6" style={{ backgroundColor: "#B8A44C" }}>
                <p className="text-xs font-bold tracking-[0.22em] uppercase" style={{ color: "#0F0F0E" }}>
                  Restore Stack — Physician Protocol
                </p>
              </div>

              <div className="px-8 md:px-12 py-12 md:py-16" style={{ backgroundColor: "#1C1C1A" }}>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="font-display text-6xl md:text-7xl font-light" style={{ color: "#FAF7F2" }}>
                        $329
                      </span>
                      <span className="text-lg" style={{ color: "#6A6050" }}>/mo</span>
                    </div>
                    <p className="text-sm mb-8" style={{ color: "rgba(250,247,242,0.55)" }}>
                      Includes physician consultation, compounded NAD+ + Epitalon, and free foundation bloodwork panel.
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

                  <div
                    className="md:w-56 rounded-2xl p-6 shrink-0"
                    style={{ backgroundColor: "#0F0F0E", border: "1px solid #2A2A28" }}
                  >
                    {[
                      { label: "Physician consult", value: "Included" },
                      { label: "Compounds", value: "NAD+ + Epitalon" },
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
                { label: "The Wolverine Stack", href: "/stacks/wolverine" },
                { label: "The Glow Stack", href: "/stacks/glow" },
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

