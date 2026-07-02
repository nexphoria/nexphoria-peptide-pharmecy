"use client";

import { useState } from "react";
import Link from "next/link";

const foundationBiomarkers = [
  {
    category: "Hormones",
    markers: ["Total Testosterone", "Free Testosterone", "SHBG", "Estradiol (E2)", "DHEA-S", "Progesterone"],
  },
  {
    category: "Growth & IGF Axis",
    markers: ["IGF-1 (Insulin-like Growth Factor 1)", "Growth Hormone (GH) — spot value", "IGFBP-3"],
  },
  {
    category: "Thyroid",
    markers: ["TSH", "Free T3", "Free T4", "Reverse T3", "TPO Antibodies"],
  },
  {
    category: "Metabolic & Liver",
    markers: ["Comprehensive Metabolic Panel (CMP)", "Fasting Insulin", "Fasting Glucose", "HbA1c"],
  },
  {
    category: "Blood & Immunity",
    markers: ["Complete Blood Count (CBC) with Differential", "Ferritin", "Iron & TIBC"],
  },
  {
    category: "Inflammation",
    markers: ["hsCRP (high-sensitivity C-Reactive Protein)", "Homocysteine", "Fibrinogen"],
  },
  {
    category: "Lipids & Cardiovascular",
    markers: ["Lipid Panel (Total, LDL, HDL, Triglycerides)", "ApoB", "Lp(a)"],
  },
];

const panels = [
  {
    name: "Foundation Panel",
    price: "FREE",
    sub: "Included with every first prescription",
    description:
      "The baseline panel every new Nexphoria patient receives at no charge. Covers the full hormone, metabolic, and inflammatory picture your physician needs to write a safe, effective first protocol.",
    includes: [
      "Full hormone panel (testosterone, DHEA-S, estradiol, SHBG)",
      "IGF-1 and IGFBP-3",
      "Thyroid (TSH, free T3, free T4, reverse T3, TPO)",
      "CMP, CBC with differential",
      "Fasting insulin, glucose, HbA1c",
      "hsCRP, homocysteine",
      "Lipid panel + ApoB",
    ],
    badge: "Included",
    badgeColor: "bg-[#B8A44C] text-white",
    highlight: true,
  },
  {
    name: "Deep Panel",
    price: "$149",
    sub: "One-time or annual add-on",
    description:
      "For patients who want a comprehensive picture beyond hormones and metabolism — including gut health proxies, micronutrient deficiencies, and advanced cardiovascular markers.",
    includes: [
      "Everything in the Foundation Panel",
      "Lp(a) and ApoA1",
      "Vitamin D, B12, Folate",
      "Magnesium, Zinc, Copper",
      "Ferritin, Iron & TIBC",
      "SHBG with calculated free testosterone",
      "PSA (men over 40)",
      "Cortisol (morning draw)",
    ],
    badge: "Add-on",
    badgeColor: "bg-[#2A2A28] text-[#A09890]",
    highlight: false,
  },
  {
    name: "Continuous Membership",
    price: "$89/mo",
    sub: "Auto-scheduled at 90-day intervals",
    description:
      "Quarterly bloodwork built into your subscription. Your physician reviews every panel and adjusts your protocol automatically. No scheduling, no reminders — it just happens.",
    includes: [
      "Foundation Panel every 90 days",
      "Physician protocol review included",
      "Priority physician messaging (24h response)",
      "Deep Panel at 180 and 360 days",
      "Annual full-body scan referral coordination",
      "Auto-reorder of your protocol",
      "Discounted peptide pricing",
    ],
    badge: "Best Value",
    badgeColor: "bg-[#0F0F0E] text-[#B8A44C] border border-[#B8A44C]",
    highlight: false,
  },
];

const howItWorksSteps = [
  {
    n: "1",
    title: "Order is placed",
    body: "Your physician orders the appropriate panel from your patient portal after reviewing your intake. You receive an email with the lab requisition attached.",
  },
  {
    n: "2",
    title: "Draw at a local site",
    body: "We work with Quest Diagnostics and LabCorp networks — over 3,000 draw sites nationwide. You walk in, no appointment required in most locations.",
  },
  {
    n: "3",
    title: "Physician reviews results",
    body: "Results arrive in your portal within 24–72 hours of the draw. Your physician reviews them within one business day and flags any values outside clinical target ranges.",
  },
  {
    n: "4",
    title: "Protocol adjusted",
    body: "If your IGF-1 is above range, your dose is reduced. If testosterone hasn't responded, your protocol shifts. If everything is optimal, you continue. Every outcome gets a written physician note.",
  },
];

const faqs = [
  {
    q: "Do I have to get bloodwork before starting?",
    a: "Not always. For protocols focused on tissue repair (BPC-157, TB-500) or cognitive support (Semax, Selank), baseline bloodwork is optional but recommended. For growth hormone secretagogues (Ipamorelin, CJC-1295, Sermorelin) and GLP-1 compounds, your physician will require at minimum a Foundation Panel before prescribing.",
  },
  {
    q: "Where do I get my blood drawn?",
    a: "Nexphoria coordinates with Quest Diagnostics and LabCorp networks. After your physician orders your panel, you receive a requisition you can use at any Quest or LabCorp patient service center nationwide — over 3,000 locations. Walk-in is available at most. Some locations offer early morning draws before 8am.",
  },
  {
    q: "How long until I get my results?",
    a: "Most panels return within 24–72 hours of your blood draw. Specialty markers like Lp(a) and reverse T3 may take up to 5 business days. All results are delivered to your Nexphoria patient portal and reviewed by your physician within one business day of receipt.",
  },
  {
    q: "Are labs covered by insurance?",
    a: "Nexphoria lab panels are cash-pay and are not billed to insurance. The Foundation Panel is included at no cost. The Deep Panel is $149. These panels are HSA- and FSA-eligible as qualified medical expenses. We provide an itemized receipt suitable for HSA/FSA reimbursement.",
  },
  {
    q: "What if a value is out of range?",
    a: "Your physician will contact you via the portal within one business day of reviewing an out-of-range result. Depending on the marker and severity, they may adjust your protocol, recommend a follow-up draw, refer you to a specialist, or — in the case of a critical value — contact you directly by phone.",
  },
  {
    q: "Can I use labs I've had done elsewhere?",
    a: "Yes. If you've had bloodwork done within the past 60 days, you can upload the PDF to your patient portal and your physician will incorporate it into your review. We may still require specific markers if they weren't included in your prior panel.",
  },
];

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#2A2A28]">
      <button
        className="w-full text-left py-5 flex items-start justify-between gap-4 group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-sans text-[15px] font-medium text-white leading-snug group-hover:text-[#B8A44C] transition-colors">
          {q}
        </span>
        <span
          className="shrink-0 mt-0.5 text-[#B8A44C] text-xl font-light transition-transform duration-200"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>
      {open && (
        <p className="font-sans text-[14px] text-[#A09890] leading-relaxed pb-5 pr-8">
          {a}
        </p>
      )}
    </div>
  );
}

export default function BloodworkPage() {
  return (
    <div className="bg-[#0F0F0E] min-h-screen">
      {/* Hero */}
      <section className="pt-28 pb-24 px-6 text-center border-b border-[#2A2A28]">
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#B8A44C] mb-6">
          Nexphoria Bloodwork Program
        </p>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white leading-[0.95] mb-8 max-w-4xl mx-auto">
          The panel is the protocol.
        </h1>
        <p className="font-sans text-base text-[#A09890] max-w-xl mx-auto leading-relaxed">
          Peptide therapy without biomarker monitoring is guesswork. Every Nexphoria protocol is built on data — and adjusted every 90 days to match what your body is actually doing.
        </p>
      </section>

      {/* Foundation Panel */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#B8A44C] mb-4">
              The Foundation Panel
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-white leading-tight mb-6">
              What we measure. What it means.
            </h2>
            <p className="font-sans text-[15px] text-[#A09890] leading-relaxed">
              The Foundation Panel covers 40+ biomarkers across seven clinical categories. It's the same panel used by longevity physicians and functional medicine practitioners — not a stripped-down consumer lab kit. Every marker was chosen because it directly informs peptide selection, dosing, or safety.
            </p>
          </div>
          <div className="lg:w-1/2 space-y-4">
            {foundationBiomarkers.map((cat) => (
              <div key={cat.category} className="bg-[#1A1A18] border border-[#2A2A28] rounded-xl p-5">
                <p className="font-sans text-xs tracking-wider uppercase text-[#B8A44C] mb-3">
                  {cat.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.markers.map((m) => (
                    <span
                      key={m}
                      className="font-sans text-xs text-[#A09890] bg-[#2A2A28] px-3 py-1.5 rounded-full"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why bloodwork matters */}
      <section className="border-t border-[#2A2A28] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#B8A44C] mb-4">
              Why It Matters
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-white">
              Blind therapy is bad therapy.
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                title: "Dosing precision",
                body: "IGF-1 levels determine whether your growth hormone secretagogue dose is working, underdosing, or pushing above range. Without this number, dose adjustments are pure guesswork.",
              },
              {
                title: "Safety monitoring",
                body: "CMP monitors liver and kidney function, which matter when adding any compound to your system. CBC flags CBC abnormalities early, before they become clinical problems.",
              },
              {
                title: "Outcome validation",
                body: "Inflammation markers (hsCRP, homocysteine) quantify whether BPC-157 or TB-500 is delivering systemic anti-inflammatory benefit — not just subjective feeling.",
              },
            ].map((card) => (
              <div key={card.title} className="bg-[#1A1A18] border border-[#2A2A28] rounded-2xl p-7">
                <div className="w-1 h-8 bg-[#B8A44C] mb-5 rounded-full" />
                <h3 className="font-display text-xl font-light text-white mb-3">{card.title}</h3>
                <p className="font-sans text-sm text-[#A09890] leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-[#2A2A28] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#B8A44C] mb-4">
              The Flow
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-white">
              Four steps. Zero friction.
            </h2>
          </div>
          <div className="relative">
            <div className="hidden sm:block absolute left-[22px] top-6 bottom-6 w-px bg-[#2A2A28]" />
            <div className="space-y-8">
              {howItWorksSteps.map((step) => (
                <div key={step.n} className="flex gap-8 items-start">
                  <div className="shrink-0 w-11 h-11 rounded-full bg-[#B8A44C] flex items-center justify-center font-sans text-sm font-medium text-white z-10">
                    {step.n}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="font-display text-xl font-light text-white mb-2">{step.title}</h3>
                    <p className="font-sans text-sm text-[#A09890] leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Panels */}
      <section className="border-t border-[#2A2A28] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#B8A44C] mb-4">
              Lab Panels
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-white">
              Choose your depth.
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {panels.map((panel) => (
              <div
                key={panel.name}
                className={`rounded-2xl border p-7 flex flex-col ${
                  panel.highlight
                    ? "border-[#B8A44C] bg-[#1A1A18]"
                    : "border-[#2A2A28] bg-[#1A1A18]"
                }`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <h3 className="font-display text-xl font-light text-white">{panel.name}</h3>
                    <p className="font-sans text-xs text-[#A09890] mt-1">{panel.sub}</p>
                  </div>
                  <span className={`font-sans text-xs px-3 py-1 rounded-full ${panel.badgeColor}`}>
                    {panel.badge}
                  </span>
                </div>
                <p className="font-display text-4xl font-light text-white mb-2">{panel.price}</p>
                <p className="font-sans text-sm text-[#A09890] leading-relaxed mb-6">
                  {panel.description}
                </p>
                <ul className="space-y-2 mt-auto">
                  {panel.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[#B8A44C] mt-0.5 shrink-0">✓</span>
                      <span className="font-sans text-xs text-[#A09890]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nationwide + HSA/FSA */}
      <section className="border-t border-[#2A2A28] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-px bg-[#2A2A28] rounded-2xl overflow-hidden">
            <div className="bg-[#1A1A18] p-10">
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#B8A44C] mb-4">
                Draw Sites
              </p>
              <h3 className="font-display text-3xl font-light text-white mb-4">
                Nationwide coverage. No scheduling required.
              </h3>
              <p className="font-sans text-sm text-[#A09890] leading-relaxed">
                Nexphoria partners with Quest Diagnostics and LabCorp — together covering over 3,000 patient service centers across all 50 states. Most locations offer walk-in availability and early morning draws. Your lab requisition is generated automatically and sent to your portal after your physician orders the panel.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  { label: "Draw sites", value: "3,000+" },
                  { label: "States covered", value: "All 50" },
                  { label: "Result turnaround", value: "24–72 hrs" },
                  { label: "Appointment required", value: "Usually no" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-2xl font-light text-white">{stat.value}</p>
                    <p className="font-sans text-xs text-[#A09890]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#1A1A18] p-10">
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#B8A44C] mb-4">
                HSA / FSA
              </p>
              <h3 className="font-display text-3xl font-light text-white mb-4">
                Use pre-tax dollars for your labs.
              </h3>
              <p className="font-sans text-sm text-[#A09890] leading-relaxed mb-6">
                Nexphoria lab panels are qualified medical expenses eligible for reimbursement through Health Savings Accounts (HSA) and Flexible Spending Accounts (FSA). We provide an itemized receipt with every order — formatted for HSA/FSA submission with the appropriate expense codes.
              </p>
              <div className="space-y-3">
                {[
                  "Foundation Panel — HSA/FSA eligible",
                  "Deep Panel — HSA/FSA eligible",
                  "Continuous Membership panels — eligible",
                  "Itemized receipt provided automatically",
                  "No claims to file — you submit directly",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-[#B8A44C] shrink-0">✓</span>
                    <span className="font-sans text-sm text-[#A09890]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[#2A2A28] py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#B8A44C] mb-4">
              Questions
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-white">
              Bloodwork FAQ.
            </h2>
          </div>
          <div>
            {faqs.map((faq) => (
              <AccordionItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#2A2A28] py-24 px-6 text-center">
        <h2 className="font-display text-5xl sm:text-6xl font-light text-white mb-6">
          Start with data.
        </h2>
        <p className="font-sans text-[15px] text-[#A09890] mb-10 max-w-md mx-auto">
          Your Foundation Panel is included with your first protocol at no charge. Begin your assessment and your physician will order labs as part of your intake review.
        </p>
        <Link
          href="/intake"
          className="inline-block bg-[#B8A44C] text-white font-sans text-sm font-medium tracking-wide px-10 py-4 rounded-full hover:bg-[#A8943C] transition-colors"
        >
          Begin Assessment
        </Link>
      </section>
    </div>
  );
}

