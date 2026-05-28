"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  Stethoscope,
  FileText,
  FlaskConical,
  Package,
  Shield,
  ChevronDown,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const steps = [
  {
    number: "01",
    icon: Stethoscope,
    title: "Telehealth Consultation",
    description:
      "Schedule a secure virtual consultation with a licensed prescriber. Your health history, goals, and eligibility are reviewed before any prescription is written.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Personalized Prescription",
    description:
      "Your prescriber writes a customized protocol based on your individual profile. No generic plans — every prescription is tailored to the patient.",
  },
  {
    number: "03",
    icon: FlaskConical,
    title: "Pharmacy Compounds",
    description:
      "Your prescription is routed to our licensed 503A compounding pharmacy partner. Compounds are prepared as pre-mixed liquids, ready to use.",
  },
  {
    number: "04",
    icon: Package,
    title: "Ships to You",
    description:
      "Your compounded medications ship directly to your door in cold-chain compliant packaging. Refills are managed automatically each cycle.",
  },
];

const plans = [
  {
    name: "Foundation",
    price: 149,
    period: "/month",
    tag: "Entry Tier",
    tagColor: "#A8C97F",
    features: [
      "Initial telehealth consultation",
      "Single-compound prescription",
      "Licensed 503A pharmacy",
      "Monthly shipment",
      "Secure patient portal",
      "Refill management",
    ],
    cta: "Join Waitlist",
    featured: false,
  },
  {
    name: "Protocol",
    price: 199,
    period: "/month",
    tag: "Most Selected",
    tagColor: "#C9A24B",
    features: [
      "Initial + quarterly consultations",
      "Multi-compound protocol",
      "Licensed 503A pharmacy",
      "Monthly shipment",
      "Secure patient portal",
      "Priority refill management",
      "Lab work coordination",
    ],
    cta: "Join Waitlist",
    featured: true,
  },
  {
    name: "Comprehensive",
    price: 299,
    period: "/month",
    tag: "Full Program",
    tagColor: "#8B5CF6",
    features: [
      "Monthly consultations",
      "Full compound protocol",
      "Licensed 503A pharmacy",
      "Monthly shipment",
      "Dedicated care coordinator",
      "Lab work coordination",
      "Priority support",
      "Quarterly protocol reviews",
    ],
    cta: "Join Waitlist",
    featured: false,
  },
];

const faqs = [
  {
    q: "What is a 503A compounding pharmacy?",
    a: "A 503A compounding pharmacy is a state-licensed facility that prepares customized medications based on individual patient prescriptions. Unlike mass-manufactured drugs, compounded medications are made to order for specific patients by a licensed prescriber. Our pharmacy partner operates under strict state board oversight and USP standards.",
  },
  {
    q: "Do I need to be an existing patient?",
    a: "No. The process begins with an initial telehealth consultation where a licensed prescriber evaluates your eligibility. If appropriate, a prescription is written at that time. You do not need a prior relationship with the prescriber.",
  },
  {
    q: "How long does the process take from consultation to delivery?",
    a: "After your telehealth consultation and prescription issuance, compounding typically takes 5-7 business days. Shipping adds an additional 2-3 business days depending on your location. Most patients receive their first shipment within 10-14 days of their consultation.",
  },
  {
    q: "What compounds are available through the clinical program?",
    a: "The clinical program is currently in development. Compounds will be determined by the prescriber based on clinical appropriateness for each patient. Join the waitlist to be notified when the program launches and to receive details on available protocols.",
  },
  {
    q: "How is this different from the research catalog?",
    a: "The research catalog offers lyophilized peptide powders for qualified in vitro and preclinical research use only. The clinical program is an entirely separate offering: physician-prescribed, compounded, patient-specific medications prepared by a licensed pharmacy — intended for human therapeutic use under prescriber supervision.",
  },
  {
    q: "What states will this be available in?",
    a: "We are initially targeting availability in most US states. Certain states have specific regulations around telehealth prescribing and compounding. Join the waitlist and indicate your state — we will notify you when your state is confirmed.",
  },
];

function FAQItem({ item, index }: { item: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b last:border-0" style={{ borderColor: "#D8D4CC" }}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="text-sm font-medium leading-snug text-near-black">
          {item.q}
        </span>
        <ChevronDown
          className="w-4 h-4 flex-shrink-0 transition-transform duration-300"
          style={{ color: "#B8923A", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p className="pb-5 text-sm leading-relaxed text-stone">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setState("loading");
    try {
      await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "clinical" }),
      });
      setState("success");
      setEmail("");
    } catch {
      setState("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      {state === "success" ? (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 px-6 py-4 border bg-white"
          style={{ borderColor: "#D8D4CC", borderRadius: "8px" }}
        >
          <Check className="w-5 h-5 flex-shrink-0" style={{ color: "#C9DD69" }} />
          <div>
            <p className="text-sm font-semibold text-near-black">You are on the list.</p>
            <p className="text-xs mt-0.5 text-stone">
              We will contact you when clinical launches in your area.
            </p>
          </div>
        </motion.div>
      ) : (
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 px-4 py-3 text-sm border outline-none transition-colors bg-white text-near-black"
            style={{
              borderColor: "#D8D4CC",
              borderRadius: "8px",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#B8923A")}
            onBlur={(e) => (e.target.style.borderColor = "#D8D4CC")}
          />
          <button
            type="submit"
            disabled={state === "loading"}
            className="btn-primary whitespace-nowrap"
            style={{ opacity: state === "loading" ? 0.7 : 1 }}
          >
            {state === "loading" ? "Submitting..." : "Join Waitlist"}
          </button>
        </div>
      )}
      {state === "error" && (
        <p className="text-xs mt-2" style={{ color: "#EF4444" }}>
          Something went wrong. Please try again or email research@nexphoria.com
        </p>
      )}
    </form>
  );
}

export default function ClinicalClient() {
  return (
    <div className="min-h-screen bg-cream">

      {/* ========== HERO ========== */}
      <section
        className="relative flex items-center overflow-hidden bg-cream"
        style={{ minHeight: "90vh", paddingTop: "80px" }}
      >
        <div className="container-nex relative z-10 py-32">
          <div className="max-w-2xl">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
              {/* Tier badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 border"
                style={{
                  borderColor: "rgba(184,146,58,0.25)",
                  backgroundColor: "rgba(184,146,58,0.06)",
                  borderRadius: "6px",
                }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#B8923A" }} />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em]" style={{ color: "#B8923A" }}>
                  Clinical Tier — Coming Soon
                </span>
              </div>

              <h1
                className="font-bold tracking-tight mb-6 leading-tight text-near-black"
                style={{
                  fontWeight: 200,
                  fontSize: "clamp(2.8rem, 6vw, 5rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em"
                }}
              >
                Physician-Guided
                <br />
                <span style={{ color: "#B8923A" }}>Peptide Therapy.</span>
              </h1>

              <p className="text-base md:text-lg mb-4 leading-relaxed max-w-xl text-stone">
                Compounded. Clinical-grade. Delivered.
              </p>

              <p className="text-sm mb-10 leading-relaxed max-w-lg text-stone">
                Telehealth consultation with a licensed prescriber. Compounded at our 503A pharmacy partner.
                Shipped cold-chain direct to you. Programs starting at $149/month.
              </p>

              {/* Waitlist CTA */}
              <WaitlistForm />

              <p className="mt-4 text-xs text-stone opacity-60">
                No commitment. We will notify you when clinical launches in your area.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section className="py-24 md:py-32 border-t" style={{ backgroundColor: "#F7F4EE", borderColor: "#D8D4CC" }}>
        <div className="container-nex">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mb-16"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-4 block"
              style={{ color: "#B8923A" }}>
              The Process
            </span>
            <h2
              className="font-bold tracking-tight max-w-xl text-near-black"
              style={{
                fontWeight: 200,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                letterSpacing: "-0.01em"
              }}
            >
              From Consultation to{" "}
              <em className="italic" style={{ color: "#B8923A" }}>Your Door.</em>
            </h2>
          </motion.div>

          {/* Steps grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.1}
                  className="relative p-7 border bg-white"
                  style={{
                    borderColor: "#D8D4CC",
                    borderRadius: "12px",
                  }}
                >
                  {/* Step number */}
                  <div
                    className="absolute top-5 right-5 text-[10px] font-mono font-bold"
                    style={{ color: "rgba(184,146,58,0.4)" }}
                  >
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-12 h-12 flex items-center justify-center mb-5"
                    style={{
                      backgroundColor: "rgba(184,146,58,0.08)",
                      border: "1px solid rgba(184,146,58,0.2)",
                      borderRadius: "10px",
                    }}
                  >
                    <Icon className="w-6 h-6" strokeWidth={1.4} style={{ color: "#B8923A" }} />
                  </div>

                  <h3
                    className="font-bold mb-3 text-near-black"
                    style={{
                      fontSize: "1rem",
                      fontWeight: 600
                    }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-stone">
                    {step.description}
                  </p>

                  {/* Connector arrow (not on last) */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <ArrowRight className="w-5 h-5" style={{ color: "rgba(184,146,58,0.3)" }} />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== PROGRAMS ========== */}
      <section className="py-24 md:py-32 bg-cream border-t" style={{ borderColor: "#D8D4CC" }}>
        <div className="container-nex">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mb-16 text-center"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-4 block"
              style={{ color: "#B8923A" }}>
              Programs
            </span>
            <h2
              className="font-bold tracking-tight mb-4 text-near-black"
              style={{
                fontWeight: 200,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                letterSpacing: "-0.01em"
              }}
            >
              Physician-Guided Programs
            </h2>
            <p className="text-sm max-w-lg mx-auto leading-relaxed text-stone">
              All programs include telehealth consultation, licensed prescriber oversight, and 503A compounded medications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.1}
                className="relative flex flex-col p-8 border bg-white"
                style={{
                  borderColor: plan.featured ? "rgba(184,146,58,0.4)" : "#D8D4CC",
                  borderRadius: "14px",
                  boxShadow: plan.featured ? "0 4px 20px rgba(184,146,58,0.1)" : "none",
                }}
              >
                {/* Tag */}
                <div className="mb-4">
                  <span
                    className="text-[9px] font-semibold uppercase tracking-[0.18em] px-2.5 py-1"
                    style={{
                      color: plan.tagColor,
                      backgroundColor: `${plan.tagColor}14`,
                      border: `1px solid ${plan.tagColor}30`,
                      borderRadius: "4px",
                    }}
                  >
                    {plan.tag}
                  </span>
                </div>

                <h3
                  className="text-xl font-bold mb-1 text-near-black"
                  style={{ fontWeight: 600 }}
                >
                  {plan.name}
                </h3>

                <div className="flex items-baseline gap-1 mb-6">
                  <span
                    className="text-4xl font-bold"
                    style={{ color: plan.featured ? "#B8923A" : "#010101", fontWeight: 200 }}
                  >
                    ${plan.price}
                  </span>
                  <span className="text-sm text-stone">
                    {plan.period}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className="w-4 h-4 flex-shrink-0 mt-0.5"
                        style={{ color: plan.tagColor }}
                      />
                      <span className="text-sm leading-relaxed text-stone">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#waitlist"
                  className={plan.featured ? "btn-primary justify-center w-full" : "btn-outline justify-center w-full"}
                >
                  {plan.cta} <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-xs mt-8 text-stone opacity-60">
            All programs are waitlist-only during the launch phase. Final pricing confirmed at consultation.
          </p>
        </div>
      </section>

      {/* ========== WAITLIST SECTION ========== */}
      <section
        id="waitlist"
        className="relative py-24 md:py-32 overflow-hidden border-t"
        style={{ backgroundColor: "#F7F4EE", borderColor: "#D8D4CC" }}
      >
        <div className="container-nex relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
              className="mb-10"
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-5 block"
                style={{ color: "#B8923A" }}>
                Early Access
              </span>
              <h2
                className="font-bold tracking-tight mb-6 text-near-black"
                style={{
                  fontWeight: 200,
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  letterSpacing: "-0.01em"
                }}
              >
                Join the{" "}
                <em className="italic" style={{ color: "#B8923A" }}>Clinical Waitlist.</em>
              </h2>
              <p className="text-sm leading-relaxed mb-2 text-stone">
                Nexphoria Clinical is launching in select states. Waitlist members receive priority access,
                program details, and provider availability before the public launch.
              </p>
              <p className="text-sm leading-relaxed text-stone">
                Questions? Contact us at{" "}
                <a href="mailto:research@nexphoria.com" className="underline underline-offset-2"
                  style={{ color: "#B8923A" }}>
                  research@nexphoria.com
                </a>
              </p>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
            >
              <WaitlistForm />
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
              className="mt-10 flex flex-wrap justify-center gap-6"
            >
              {[
                { icon: Shield, label: "Licensed Prescribers" },
                { icon: FlaskConical, label: "503A Pharmacy Partner" },
                { icon: Package, label: "Cold-Chain Delivery" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="w-4 h-4" style={{ color: "rgba(184,146,58,0.7)" }} strokeWidth={1.5} />
                  <span className="text-xs font-medium uppercase tracking-[0.12em] text-stone opacity-75">
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="py-24 md:py-28 bg-cream border-t" style={{ borderColor: "#D8D4CC" }}>
        <div className="container-nex">
          <div className="grid lg:grid-cols-[2fr_3fr] gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-5 block"
                style={{ color: "#B8923A" }}>
                FAQ
              </span>
              <h2
                className="font-bold tracking-tight mb-6 text-near-black"
                style={{
                  fontWeight: 200,
                  fontSize: "clamp(2rem, 4vw, 2.8rem)",
                  letterSpacing: "-0.01em"
                }}
              >
                Common{" "}
                <em className="italic" style={{ color: "#B8923A" }}>Questions</em>
              </h2>
              <p className="text-sm leading-relaxed mb-8 text-stone">
                Everything you need to know about Nexphoria Clinical — the process, pharmacy, and program structure.
              </p>
              <Link href="/contact" className="btn-outline">
                Ask a Question <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <div className="border-t" style={{ borderColor: "#D8D4CC" }}>
              {faqs.map((item, i) => (
                <FAQItem key={item.q} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== BOTTOM CTA ========== */}
      <section className="py-16 border-t" style={{ backgroundColor: "#F7F4EE", borderColor: "#D8D4CC" }}>
        <div className="container-nex flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3
              className="font-bold mb-1 text-near-black"
              style={{ fontSize: "1.25rem", fontWeight: 600 }}
            >
              Looking for the research catalog?
            </h3>
            <p className="text-sm text-stone">
              Research-grade lyophilized compounds for qualified in vitro use.
            </p>
          </div>
          <Link href="/products" className="btn-primary whitespace-nowrap">
            Browse Research Catalog <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
