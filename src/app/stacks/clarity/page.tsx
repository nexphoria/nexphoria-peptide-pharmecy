
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "The Clarity Stack — Semax + Selank Cognitive Protocol | Nexphoria",
  description:
    "Semax + Selank — the physician-guided nootropic peptide stack for cognitive enhancement, laser focus, and anxiety reduction. $249/mo.",
  alternates: { canonical: "https://nexphoria.com/stacks/clarity" },
  openGraph: {
    title: "The Clarity Stack — Semax + Selank | Nexphoria",
    description: "Sharper cognition, deeper focus, calmer mind. The Clarity Stack protocol.",
    url: "https://nexphoria.com/stacks/clarity",
    siteName: "Nexphoria",
    type: "website",
    images: [{ url: "https://nexphoria.com/og-image.jpg", width: 1200, height: 630 }],
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const COMPOUNDS = [
  {
    name: "Semax",
    full: "ACTH(4-7)PGP — Synthetic ACTH Fragment",
    badge: "COGNITIVE ENHANCEMENT",
    mechanism:
      "A synthetic heptapeptide analogue of the ACTH(4-7) fragment, developed by the Institute of Molecular Genetics of the Russian Academy of Sciences. Semax upregulates BDNF (brain-derived neurotrophic factor) and NGF (nerve growth factor) expression, enhances dopaminergic and serotonergic transmission, increases cerebral blood flow, and has neuroprotective effects against oxidative stress and ischaemia. Clinical use spans stroke recovery to cognitive optimisation.",
    dose: "300–600 mcg intranasal 1–2× daily. Nasal drops allow direct CNS absorption via the olfactory pathway, bypassing the blood-brain barrier.",
    benefits: [
      "Upregulates BDNF — the brain's growth hormone",
      "Enhances working memory and processing speed",
      "Improves attention, focus, and executive function",
      "Neuroprotective against oxidative damage",
      "Increases cerebral blood flow",
      "Clinically studied in stroke rehabilitation",
    ],
    color: "#B8A44C",
  },
  {
    name: "Selank",
    full: "Thr-Lys-Pro-Arg-Pro-Gly-Pro (Anxiolytic Heptapeptide)",
    badge: "ANXIETY & RESILIENCE",
    mechanism:
      "A synthetic analogue of the endogenous human tetrapeptide tuftsin (Thr-Lys-Pro-Arg) with a Pro-Gly-Pro stabilising sequence. Selank modulates the GABAergic system without receptor downregulation, stimulates enkephalin degradation inhibition (increasing endogenous opioid tone), and upregulates expression of IL-6 and interferon-related immune modulators. Its anxiolytic effect is comparable to benzodiazepines without sedation, dependence, or withdrawal.",
    dose: "250–500 mcg intranasal 1–2× daily. Can be cycled 2 weeks on / 1 week off for sustained anxiolytic effect without tolerance.",
    benefits: [
      "Reduces generalised anxiety without sedation",
      "No dependence, withdrawal, or cognitive impairment",
      "Enhances emotional resilience under stress",
      "Modulates serotonin and dopamine balance",
      "Improves memory consolidation",
      "Immune-modulatory and anti-inflammatory",
    ],
    color: "#1A1A18",
  },
];

const WHO_FOR = [
  {
    icon: "🧠",
    title: "High-Performers",
    desc: "Executives, founders, and knowledge workers who need sustained peak cognitive output — sharper analysis, faster decisions, and deeper work states.",
  },
  {
    icon: "😰",
    title: "Anxiety & Stress",
    desc: "Those experiencing chronic anxiety, social anxiety, or performance anxiety who want pharmacological relief without the downsides of benzodiazepines.",
  },
  {
    icon: "🎓",
    title: "Students & Creatives",
    desc: "Anyone in demanding academic or creative environments needing to maintain focus, retain information, and stay mentally agile under pressure.",
  },
  {
    icon: "🔄",
    title: "Burnout Recovery",
    desc: "Individuals recovering from cognitive burnout or long-COVID brain fog who need to systematically rebuild mental clarity and working memory.",
  },
];

const TIMELINE = [
  {
    period: "Day 1–3",
    heading: "Immediate effect",
    body: "Both Semax and Selank have fast-onset mechanisms. Many users report noticeable anxiety reduction and a subtle sharpening of focus within 1–3 days of starting the protocol.",
  },
  {
    period: "Week 2–4",
    heading: "Neuroplasticity builds",
    body: "BDNF upregulation begins driving structural changes in the prefrontal cortex. Working memory capacity, verbal fluency, and mental endurance measurably improve. Anxiety baseline drops further.",
  },
  {
    period: "Month 2–3",
    heading: "Sustained transformation",
    body: "By month 3, users report a fundamentally transformed relationship with cognitive work — tasks that required effort become fluid. Anxiety is managed without dependency. Sleep quality and mood are stabilised.",
  },
];

const BLOODWORK = [
  { marker: "BDNF (Serum)", direction: "↑", note: "Brain-derived neurotrophic factor — neuroplasticity and cognition" },
  { marker: "Cortisol (AM)", direction: "↓", note: "Chronic stress hormone — elevated in burnout and anxiety" },
  { marker: "Serotonin", direction: "↑", note: "Mood, anxiety, and memory consolidation neurotransmitter" },
  { marker: "Homocysteine", direction: "↓", note: "Neurotoxic metabolite linked to cognitive decline" },
  { marker: "hsCRP", direction: "↓", note: "Neuroinflammation — a key driver of brain fog" },
];

const FAQS = [
  {
    q: "Can I use Semax and Selank together, or do they interfere with each other?",
    a: "Semax and Selank are designed to work synergistically. Semax drives upward cognitive pressure — BDNF, dopaminergic tone, processing speed — while Selank modulates the GABAergic system to reduce anxiety-mediated cognitive interference. Used together, the anxiolytic effect of Selank prevents the overstimulation some patients experience with Semax alone, and Semax amplifies the memory-consolidation benefits of Selank. Our physicians have consistently observed this combination outperform either compound individually for sustained cognitive enhancement.",
  },
  {
    q: "How is the Clarity Stack delivered — do I need to inject it?",
    a: "No. Both Semax and Selank are formulated as intranasal solutions — nasal drops or spray. Intranasal delivery allows the peptides to reach the CNS via the olfactory pathway, partially bypassing the blood-brain barrier and achieving rapid central uptake. This is the clinically preferred and validated route for both compounds. It is non-invasive, simple to self-administer, and produces onset within 30–60 minutes.",
  },
  {
    q: "Is this similar to a nootropic supplement or a stimulant like Adderall?",
    a: "Neither. Semax and Selank are peptides — short amino acid chains — that work through endogenous neurological pathways rather than flooding the synapse with neurotransmitters or blocking reuptake. They do not produce classical pharmacological tolerance, carry no schedule classification, and do not cause the crash, insomnia, or appetite suppression associated with stimulants. The cognitive improvement is more akin to restoring optimal neurological function than to pharmacological override.",
  },
  {
    q: "How long do I need to stay on the Clarity Stack to see lasting benefit?",
    a: "Initial effects — particularly Selank's anxiolytic action — are often noticeable within 1–3 days. The deeper neuroplasticity benefits of Semax (BDNF-driven structural changes in the prefrontal cortex) build cumulatively over 8–12 weeks. Our standard protocol is a 3-month cycle with a follow-up physician assessment. Many patients continue, or cycle 5 weeks on / 2 weeks off for maintenance. Unlike pharmaceutical anxiolytics, these compounds do not require gradual tapering.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ClarityStackPage() {
  return (
    <div className="bg-[#FAF7F2]">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://d8j0ntlcm91z4.cloudfront.net/user_3Ft13W9B0KpsVCGoTUaXE6wshlh/hf_20260701_235307_9fbda3d5-bd1b-4a10-a75b-8111b5b0b436.png"
            alt="The Clarity Stack — Semax + Selank"
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
              { label: "Clarity" },
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
              Cognitive Protocol · Semax + Selank
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] mb-6"
              style={{ color: "#FAF7F2", letterSpacing: "-0.02em" }}
            >
              The Clarity<br />Stack
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl font-light max-w-xl mb-10"
              style={{ color: "rgba(250,247,242,0.72)", lineHeight: 1.55 }}
            >
              Semax + Selank — Sharpen cognition, achieve laser focus, and silence
              anxiety with the nootropic peptide protocol designed for elite mental performance.
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
                $249 / mo
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[10px] tracking-[0.18em] uppercase text-white">Scroll</span>
          <div className="w-px h-8 bg-white/40" />
        </div>
      </section>

      {/* ── COMPOUNDS ──���─────────────────────────────────────────────────── */}
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
                  Clarity Stack — Physician Protocol
                </p>
              </div>

              <div className="px-8 md:px-12 py-12 md:py-16" style={{ backgroundColor: "#1C1C1A" }}>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="font-display text-6xl md:text-7xl font-light" style={{ color: "#FAF7F2" }}>
                        $249
                      </span>
                      <span className="text-lg" style={{ color: "#6A6050" }}>/mo</span>
                    </div>
                    <p className="text-sm mb-8" style={{ color: "rgba(250,247,242,0.55)" }}>
                      Includes physician consultation, compounded Semax + Selank nasal solution, and free foundation bloodwork panel.
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
                      { label: "Compounds", value: "Semax + Selank" },
                      { label: "Manufacturing", value: "503A cGMP" },
                      { label: "Tested", value: "HPLC + CoA" },
                      { label: "Protocol", value: "2–3 months" },
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
                { label: "The Restore Stack", href: "/stacks/restore" },
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




