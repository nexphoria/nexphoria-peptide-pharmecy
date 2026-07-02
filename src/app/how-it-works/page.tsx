"use client";

import { useState } from "react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    label: "The Intake",
    title: "Five minutes. Comprehensive answers.",
    body: "Our intake questionnaire was designed by board-certified physicians to capture the full clinical picture — not just your symptoms. You'll answer questions about your health history, current medications, lifestyle, primary goals, and any prior hormone or peptide therapy. We ask about sleep quality, body composition, energy levels, libido, cognitive sharpness, and recovery. Nothing is extraneous. Every question informs the physician's review and the protocol that follows.",
    details: [
      { label: "Time to complete", value: "≈ 5 minutes" },
      { label: "Questions covered", value: "Health history, medications, goals, sleep, energy, body composition, recovery, cognition" },
      { label: "Format", value: "HIPAA-encrypted intake portal" },
      { label: "Access", value: "Saved to your secure patient file" },
    ],
    accent: "Step one of six",
  },
  {
    number: "02",
    label: "Physician Review",
    title: "A real physician. A real decision.",
    body: "Every intake is reviewed by a licensed, board-certified physician — not a nurse practitioner, not an algorithm. Our physician network holds certifications in Internal Medicine, Endocrinology, and Functional Medicine. They review your full intake, cross-reference your stated goals against any contraindications, and evaluate whether peptide therapy is clinically appropriate for you. If it is, they write your protocol. If it isn't, they tell you why.",
    details: [
      { label: "Reviewer", value: "Board-certified MD or DO" },
      { label: "Credentials", value: "Internal Medicine, Endocrinology, Functional Medicine" },
      { label: "Review SLA", value: "24–48 hours" },
      { label: "Outcome", value: "Approval + protocol, or clinical decline with explanation" },
    ],
    accent: "Step two of six",
  },
  {
    number: "03",
    label: "Your Protocol Written",
    title: "Not a template. A prescription.",
    body: "Once approved, your physician writes a personalized protocol specifying the exact peptide(s), concentration, injection volume, frequency, cycle length, and any adjunct therapies. Dosing is calibrated to your body weight, health status, and primary goals. A 190 lb man seeking body recomposition receives a materially different protocol than a 140 lb woman focused on recovery and sleep quality. The protocol is reviewed again before compounding begins.",
    details: [
      { label: "Customization", value: "Peptide selection, dose, volume, frequency, cycle length" },
      { label: "Based on", value: "Body weight, goals, health history, biomarkers if available" },
      { label: "Written by", value: "The reviewing physician — not a template engine" },
      { label: "Review cycle", value: "Adjusted at 90-day bloodwork checkpoint" },
    ],
    accent: "Step three of six",
  },
  {
    number: "04",
    label: "Compounding",
    title: "503A pharmacy. Certificate of analysis. Every vial.",
    body: "Your prescription is filled by our partner 503A-licensed compounding pharmacy — not a large-scale manufacturer, not an overseas supplier. 503A pharmacies compound patient-specific prescriptions under state board oversight and FDA guidelines. Every batch undergoes sterility testing, potency verification, and endotoxin screening. You receive a Certificate of Analysis (COA) with your order, so you can verify exactly what's in the vial before you use it.",
    details: [
      { label: "Pharmacy type", value: "503A licensed compounding pharmacy" },
      { label: "Oversight", value: "State pharmacy board + FDA guidelines" },
      { label: "Testing", value: "Sterility, potency, endotoxin — every batch" },
      { label: "Documentation", value: "Certificate of Analysis included with every shipment" },
    ],
    accent: "Step four of six",
  },
  {
    number: "05",
    label: "Cold-Chain Delivery",
    title: "Temperature-controlled from bench to door.",
    body: "Peptides are fragile. Heat, light, and rough handling degrade them. Every Nexphoria shipment leaves the pharmacy in insulated packaging with pharmaceutical-grade cold packs engineered for a 72-hour transit window. Orders are shipped Monday through Wednesday to prevent weekend warehouse delays. We ship to all 50 states. Delivery takes 3–5 business days from the date your prescription is filled. Tracking and temperature logs are available in your patient portal.",
    details: [
      { label: "Packaging", value: "Insulated box with pharmaceutical-grade cold packs" },
      { label: "Transit window", value: "72-hour temperature stability" },
      { label: "Ship days", value: "Monday – Wednesday (prevents weekend delays)" },
      { label: "Delivery", value: "3–5 business days" },
      { label: "Coverage", value: "All 50 states" },
    ],
    accent: "Step five of six",
  },
  {
    number: "06",
    label: "The Reorder Loop",
    title: "90 days. Bloodwork. Adjust. Repeat.",
    body: "A peptide protocol is not a one-time prescription. It's a living document. At the 90-day mark, we order a targeted biomarker panel to measure how your body has responded — IGF-1, testosterone, inflammatory markers, liver enzymes, and more. Your physician reviews the results and adjusts your protocol accordingly: dose, compound, cycle structure, or all three. Subscribers on the Continuous Plan receive automatic reorders, priority physician access, and discounted lab panels.",
    details: [
      { label: "Checkpoint", value: "90-day bloodwork panel" },
      { label: "Biomarkers reviewed", value: "IGF-1, testosterone, CMP, CBC, thyroid, inflammation" },
      { label: "Outcome", value: "Protocol adjustment or continuation" },
      { label: "Subscription", value: "Continuous Plan with auto-reorder + priority access" },
    ],
    accent: "Step six of six",
  },
];

const faqs = [
  {
    q: "Do I need to have bloodwork done before starting?",
    a: "Bloodwork is not required to complete your intake or receive physician review. However, if your physician determines that baseline labs are necessary for your specific protocol — for example, if you're seeking hormone-adjacent peptides like Ipamorelin or CJC-1295 — they may request a Foundation Panel before writing your prescription. In that case, we coordinate the lab order and a local draw site on your behalf.",
  },
  {
    q: "What happens if the physician doesn't approve me?",
    a: "If a physician determines that peptide therapy is not appropriate for you at this time, you will receive a written explanation of the clinical reasoning. You will not be charged. Common reasons for non-approval include contraindicated medications, active malignancy history, uncontrolled thyroid conditions, or intake responses that suggest a different clinical pathway would better serve you.",
  },
  {
    q: "How long does the entire process take?",
    a: "From completing your intake to having your prescription shipped, the typical timeline is 72 hours. Physician review takes 24–48 hours. Once approved, your prescription is transmitted to the pharmacy for same-day compounding and ships the following shipping window (Monday–Wednesday). You should have your order in hand within 5–7 calendar days of completing intake.",
  },
  {
    q: "Can I speak with my physician directly?",
    a: "Yes. Every Nexphoria patient has access to asynchronous messaging with their reviewing physician through the secure patient portal. For subscribers on the Continuous Plan, a synchronous telehealth visit is included at each 90-day protocol review checkpoint.",
  },
  {
    q: "Is this a subscription or a one-time order?",
    a: "Both options are available. You can place a single-cycle order or enroll in the Continuous Plan, which includes automatic protocol refills, discounted lab panels, and priority physician access. The Continuous Plan does not lock you in — you can pause or cancel before your next billing cycle with no penalty.",
  },
  {
    q: "What is a 503A compounding pharmacy and why does it matter?",
    a: "A 503A pharmacy compounds medications for specific patients under a valid prescription. Unlike 503B outsourcing facilities (which produce bulk drug products), 503A pharmacies operate under individual state board oversight and are subject to USP <797> sterile compounding standards. This means your peptide is compounded to your prescription, tested for your batch, and documented with a COA tied to your order — not a generic lot number.",
  },
  {
    q: "How do I store my peptides when they arrive?",
    a: "Lyophilized (powder) peptides should be stored in the refrigerator (2–8°C) until reconstituted. Once reconstituted with bacteriostatic water, they should remain refrigerated and used within 28 days. Detailed storage and reconstitution instructions are included with every shipment and available in your patient portal.",
  },
  {
    q: "What peptides are available through Nexphoria?",
    a: "Nexphoria currently offers physician-prescribed protocols built around: BPC-157, TB-500, Ipamorelin, CJC-1295, Sermorelin, Tirzepatide, Semaglutide, PT-141, Melanotan II, and Epithalon, among others. The specific compound(s) in your protocol are determined by your physician based on your intake and goals — not selected from a catalog by you.",
  },
  {
    q: "Is my intake information kept private?",
    a: "Yes. Your intake, physician review, prescription, and all communications are protected under HIPAA and stored on HIPAA-compliant infrastructure. We do not sell, share, or license patient data to third parties. Your health information is used solely to deliver your care.",
  },
  {
    q: "What if I want to change my protocol or goals after I've started?",
    a: "You can update your health goals and any relevant status changes through your patient portal at any time. Major goal changes or health updates will trigger a physician re-review, which typically takes 24–48 hours. If your change requires a new prescription, your updated protocol will be compounded and shipped in the next shipping window.",
  },
];

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#E8E0D5]">
      <button
        className="w-full text-left py-5 flex items-start justify-between gap-4 group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-sans text-[15px] font-medium text-[#0F0F0E] leading-snug group-hover:text-[#B8A44C] transition-colors">
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
        <p className="font-sans text-[14px] text-[#5A5550] leading-relaxed pb-5 pr-8">
          {a}
        </p>
      )}
    </div>
  );
}

export default function HowItWorksPage() {
  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* Hero */}
      <section className="pt-28 pb-20 px-6 text-center border-b border-[#E8E0D5]">
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#B8A44C] mb-6">
          The Process
        </p>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#0F0F0E] leading-[0.95] mb-8 max-w-4xl mx-auto">
          From intake to doorstep in 72 hours.
        </h1>
        <p className="font-sans text-base text-[#5A5550] max-w-xl mx-auto leading-relaxed">
          Six steps. One physician. One pharmacy. A protocol written for you, compounded for you, and delivered to you — cold-chain intact.
        </p>
      </section>

      {/* Steps */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="space-y-24">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-20 items-start`}
            >
              {/* Number + label */}
              <div className="lg:w-1/3 shrink-0">
                <div className="sticky top-28">
                  <span className="font-display text-[72px] leading-none text-[#E8E0D5] font-light block mb-2">
                    {step.number}
                  </span>
                  <span className="font-sans text-xs tracking-[0.2em] uppercase text-[#B8A44C] block mb-3">
                    {step.label}
                  </span>
                  <p className="font-sans text-xs text-[#A09890] tracking-wide">
                    {step.accent}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h2 className="font-display text-3xl sm:text-4xl font-light text-[#0F0F0E] leading-tight mb-6">
                  {step.title}
                </h2>
                <p className="font-sans text-[15px] text-[#5A5550] leading-relaxed mb-8">
                  {step.body}
                </p>
                <div className="bg-white border border-[#E8E0D5] rounded-2xl p-6 space-y-4">
                  {step.details.map((d) => (
                    <div key={d.label} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                      <span className="font-sans text-xs tracking-wider uppercase text-[#A09890] shrink-0 min-w-[160px]">
                        {d.label}
                      </span>
                      <span className="font-sans text-[14px] text-[#0F0F0E] font-medium">
                        {d.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline bar */}
      <section className="bg-[#0F0F0E] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#B8A44C] mb-4">
            Timeline
          </p>
          <h2 className="font-display text-4xl font-light text-white mb-10">
            What to expect, day by day.
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#2A2A28] rounded-2xl overflow-hidden">
            {[
              { day: "Day 1", event: "Complete intake questionnaire" },
              { day: "Day 1–2", event: "Physician reviews and writes protocol" },
              { day: "Day 2–3", event: "Pharmacy compounds your prescription" },
              { day: "Day 5–7", event: "Cold-chain delivery to your door" },
            ].map((item) => (
              <div key={item.day} className="bg-[#1A1A18] p-6 text-center">
                <span className="font-sans text-xs tracking-wider text-[#B8A44C] uppercase block mb-2">
                  {item.day}
                </span>
                <span className="font-sans text-sm text-[#A09890]">{item.event}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#B8A44C] mb-4">
            Questions
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-[#0F0F0E]">
            Frequently asked.
          </h2>
        </div>
        <div>
          {faqs.map((faq) => (
            <AccordionItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center border-t border-[#E8E0D5]">
        <h2 className="font-display text-5xl sm:text-6xl font-light text-[#0F0F0E] mb-6">
          Ready to begin?
        </h2>
        <p className="font-sans text-[15px] text-[#5A5550] mb-10 max-w-md mx-auto">
          Complete your intake in five minutes. A physician will review your case within 24–48 hours.
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

