
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "The GLP-1 Protocol — Semaglutide & Tirzepatide Body Composition | Nexphoria",
  description:
    "Physician-guided Semaglutide and Tirzepatide protocol for body composition, appetite control, and metabolic health. The most clinically validated weight intervention available. $399/mo.",
  alternates: { canonical: "https://nexphoria.com/stacks/glp1" },
  openGraph: {
    title: "The GLP-1 Protocol — Semaglutide & Tirzepatide | Nexphoria",
    description: "Body composition, appetite, metabolism. The most clinically validated weight protocol available.",
    url: "https://nexphoria.com/stacks/glp1",
    siteName: "Nexphoria",
    type: "website",
    images: [{ url: "https://nexphoria.com/og-image.jpg", width: 1200, height: 630 }],
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const COMPOUNDS = [
  {
    name: "Semaglutide",
    full: "GLP-1 Receptor Agonist (Ozempic / Wegovy active compound)",
    badge: "APPETITE & METABOLISM",
    mechanism:
      "A long-acting GLP-1 receptor agonist with 94% sequence homology to human GLP-1. Semaglutide binds GLP-1 receptors in the hypothalamus and brainstem, reducing appetite and food intake. It slows gastric emptying, improves insulin secretion, suppresses glucagon, and has direct cardiovascular and hepatoprotective effects. SUSTAIN and STEP trial data show 10–15% mean body weight reduction over 68 weeks.",
    dose: "0.25 mg weekly subcutaneous injection, titrated over 4–16 weeks to 1.0–2.4 mg/week based on response and tolerability. Physician-determined titration schedule.",
    benefits: [
      "10–15% mean body weight reduction (STEP trials)",
      "Reduces appetite and food cravings significantly",
      "Improves insulin sensitivity and glucose control",
      "Reduces cardiovascular risk (SUSTAIN-6 trial)",
      "Decreases visceral adipose tissue preferentially",
      "Hepatoprotective and anti-inflammatory effects",
    ],
    color: "#B8A44C",
  },
  {
    name: "Tirzepatide",
    full: "Dual GLP-1/GIP Receptor Agonist (Mounjaro active compound)",
    badge: "NEXT-GEN DUAL AGONIST",
    mechanism:
      "The first and only dual GIP (glucose-dependent insulinotropic polypeptide) and GLP-1 receptor agonist. Tirzepatide's dual mechanism amplifies metabolic effects beyond semaglutide — the GIP component reduces GLP-1-associated nausea, enhances adipose tissue insulin sensitivity, and activates additional hypothalamic energy-balance pathways. SURMOUNT-1 trial showed 20.9% mean body weight reduction — the highest ever recorded for a pharmacological intervention.",
    dose: "2.5 mg weekly subcutaneous injection, titrated over 20 weeks to 5–15 mg/week. Physician-prescribed based on starting weight, metabolic panel, and tolerability.",
    benefits: [
      "20.9% mean body weight reduction (SURMOUNT-1 trial)",
      "Superior efficacy vs. semaglutide in head-to-head",
      "Reduced nausea vs. GLP-1-only agonists",
      "Dramatically improves A1c and insulin resistance",
      "Preferentially targets visceral and hepatic fat",
      "Reduces triglycerides and improves lipid profile",
    ],
    color: "#1A1A18",
  },
];

const WHO_FOR = [
  {
    icon: "⚖️",
    title: "Significant Weight Loss",
    desc: "Individuals with BMI ≥27 with a weight-related comorbidity, or BMI ≥30, who want the most clinically validated pharmacological intervention available.",
  },
  {
    icon: "🩸",
    title: "Metabolic Dysfunction",
    desc: "Those with prediabetes, insulin resistance, metabolic syndrome, or elevated fasting glucose who need to reset their metabolic baseline.",
  },
  {
    icon: "🏃",
    title: "Plateau Breakers",
    desc: "Athletes and active individuals who've optimised training and nutrition but remain stuck at a body composition plateau driven by appetite and hormonal dysregulation.",
  },
  {
    icon: "❤️",
    title: "Cardiovascular Risk Reduction",
    desc: "Patients with elevated cardiovascular risk markers — hypertension, dyslipidaemia, or early atherosclerosis — who benefit from GLP-1's proven CV protection.",
  },
];

const TIMELINE = [
  {
    period: "Week 1–4",
    heading: "Appetite reset",
    body: "The titration phase begins. Appetite decreases noticeably within the first 1–2 weeks. Food noise — the constant mental preoccupation with eating — typically diminishes significantly. Some patients experience mild nausea during dose escalation.",
  },
  {
    period: "Month 2–3",
    heading: "Visible body composition shift",
    body: "Weight loss of 5–8% is typical by month 3. Waist circumference decreases, energy improves, and metabolic markers (fasting glucose, insulin, triglycerides) begin normalising. Dose reaches therapeutic range.",
  },
  {
    period: "Month 4–6",
    heading: "Sustained transformation",
    body: "By month 6, most patients have achieved 12–20%+ body weight reduction. Visceral fat is markedly reduced. Metabolic panels are transformed. The protocol shifts to maintenance dosing.",
  },
];

const BLOODWORK = [
  { marker: "Fasting Insulin", direction: "↓", note: "Primary marker of insulin resistance — dramatically improved" },
  { marker: "HbA1c", direction: "↓", note: "3-month average blood glucose — key metabolic health marker" },
  { marker: "Triglycerides", direction: "↓", note: "Cardiovascular risk lipid — significantly reduced by GLP-1" },
  { marker: "LDL (Small Dense)", direction: "↓", note: "Atherogenic LDL particle — preferentially reduced" },
  { marker: "hsCRP", direction: "↓", note: "Inflammatory marker — GLP-1 has direct anti-inflammatory effects" },
  { marker: "HOMA-IR", direction: "↓", note: "Homeostatic model of insulin resistance — the definitive IR score" },
];

const CLINICAL_EVIDENCE = [
  { trial: "STEP 1", finding: "14.9% mean weight reduction", compound: "Semaglutide 2.4 mg" },
  { trial: "STEP 2", finding: "9.6% mean weight reduction", compound: "Semaglutide vs. placebo in T2D" },
  { trial: "SURMOUNT-1", finding: "20.9% mean weight reduction", compound: "Tirzepatide 15 mg" },
  { trial: "SUSTAIN-6", finding: "26% reduction in CV events", compound: "Semaglutide 0.5–1.0 mg" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function GLP1ProtocolPage() {
  return (
    <div className="bg-[#FAF7F2]">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://d8j0ntlcm91z4.cloudfront.net/user_3Ft13W9B0KpsVCGoTUaXE6wshlh/hf_20260701_235308_d530785b-f136-4a31-97f8-40dad3e6f306.png"
            alt="The GLP-1 Protocol — Semaglutide + Tirzepatide"
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
              { label: "GLP-1 Protocol" },
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
              Body Composition Protocol · Semaglutide · Tirzepatide
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] mb-6"
              style={{ color: "#FAF7F2", letterSpacing: "-0.02em" }}
            >
              The GLP-1<br />Protocol
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl font-light max-w-xl mb-10"
              style={{ color: "rgba(250,247,242,0.72)", lineHeight: 1.55 }}
            >
              Physician-prescribed Semaglutide or Tirzepatide — the most
              clinically validated body composition intervention in the history
              of medicine. Up to 20.9% body weight reduction.
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
                $399 / mo
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[10px] tracking-[0.18em] uppercase text-white">Scroll</span>
          <div className="w-px h-8 bg-white/40" />
        </div>
      </section>

      {/* ── CLINICAL EVIDENCE BANNER ─────────────────────────────────────── */}
      <section className="py-12 px-6 md:px-12 bg-[#B8A44C]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {CLINICAL_EVIDENCE.map((ev) => (
              <div key={ev.trial} className="text-center">
                <p className="font-display text-3xl md:text-4xl font-light mb-1" style={{ color: "#0F0F0E" }}>
                  {ev.finding.split(" ")[0]}
                </p>
                <p className="text-xs font-bold tracking-[0.14em] uppercase mb-1" style={{ color: "rgba(15,15,14,0.7)" }}>
                  {ev.finding.split(" ").slice(1).join(" ")}
                </p>
                <p className="text-[10px] tracking-wide" style={{ color: "rgba(15,15,14,0.55)" }}>
                  {ev.trial} — {ev.compound}
                </p>
              </div>
            ))}
          </div>
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
              Your Options
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-light" style={{ color: "#FAF7F2", letterSpacing: "-0.02em" }}>
              Choose your compound
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base max-w-xl mt-4" style={{ color: "rgba(250,247,242,0.55)", lineHeight: 1.7 }}>
              Your physician will determine the appropriate compound, starting dose, and titration schedule based on your health history, goals, and metabolic panel.
            </motion.p>
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
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-lg font-bold"
                  style={{
                    backgroundColor: "rgba(220,80,60,0.1)",
                    color: "#C0392B",
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


      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[#FAF7F2]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mb-16"
          >
            <motion.p variants={fadeUp} className="text-xs font-bold tracking-[0.22em] uppercase mb-4" style={{ color: "#B8A44C" }}>
              Common Questions
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-light" style={{ color: "#1A1A18", letterSpacing: "-0.02em" }}>
              Frequently asked questions
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="space-y-4"
          >
            {FAQS.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="rounded-2xl p-8 bg-white"
                style={{ border: "1px solid rgba(26,26,24,0.08)" }}
              >
                <h3 className="font-display text-xl md:text-2xl font-light mb-3" style={{ color: "#1A1A18" }}>
                  {item.q}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6A6050" }}>
                  {item.a}
                </p>
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
                  GLP-1 Protocol — Physician-Prescribed
                </p>
              </div>

              <div className="px-8 md:px-12 py-12 md:py-16" style={{ backgroundColor: "#1C1C1A" }}>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="font-display text-6xl md:text-7xl font-light" style={{ color: "#FAF7F2" }}>
                        $399
                      </span>
                      <span className="text-lg" style={{ color: "#6A6050" }}>/mo</span>
                    </div>
                    <p className="text-sm mb-8" style={{ color: "rgba(250,247,242,0.55)" }}>
                      Includes physician consultation, physician-prescribed and compounded Semaglutide or Tirzepatide, and monthly monitoring.
                    </p>

                    <ul className="space-y-3 mb-10">
                      {[
                        "Board-certified physician oversight & titration",
                        "Monthly 503A compounded GLP-1 supply",
                        "Free metabolic bloodwork panel",
                        "Regular check-ins & dose adjustments",
                        "Discreet, temperature-controlled shipping",
                        "Compound switch available (Sema ↔ Tirz)",
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
                      { label: "Options", value: "Semaglutide / Tirzepatide" },
                      { label: "Manufacturing", value: "503A cGMP" },
                      { label: "Tested", value: "HPLC + CoA" },
                      { label: "Protocol", value: "6–12 months" },
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
              GLP-1 therapy is prescription-only and requires a physician assessment. Not appropriate for patients with personal or family history of MEN2, medullary thyroid carcinoma, or pancreatitis.
              Physician prescribes the appropriate compound. Results vary.
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
                { label: "The Restore Stack", href: "/stacks/restore" },
                { label: "The Clarity Stack", href: "/stacks/clarity" },
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


