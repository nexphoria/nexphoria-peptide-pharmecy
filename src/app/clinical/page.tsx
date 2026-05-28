import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Clinical Programs — Physician-Guided Peptide Therapy",
  description:
    "Nexphoria clinical programs: telehealth consultation, custom prescriptions, compounding pharmacy delivery. Starting at $149/month.",
};

const protocols = [
  {
    name: "Recovery Protocol",
    description: "Targeted tissue repair and accelerated recovery for active individuals.",
    includes: ["BPC-157 (injectable)", "TB-500 (injectable)", "Monthly physician check-in"],
    price: "$189/mo",
  },
  {
    name: "Longevity Protocol",
    description: "Cellular repair, NAD+ optimization, and healthy aging support.",
    includes: ["Epitalon (injectable)", "NAD+ (IV or SubQ)", "Quarterly labs included"],
    price: "$249/mo",
  },
  {
    name: "Cognitive Protocol",
    description: "Neuroprotection and cognitive performance for demanding professionals.",
    includes: ["Semax (nasal)", "Selank (nasal)", "Bi-weekly physician consult"],
    price: "$149/mo",
  },
];

const steps = [
  { num: "01", title: "Consultation", desc: "Schedule a telehealth visit with a licensed prescriber. 15-minute assessment of your goals, history, and labs." },
  { num: "02", title: "Assessment", desc: "Your physician reviews bloodwork, medical history, and determines which compounds are appropriate for your biology." },
  { num: "03", title: "Prescription", desc: "Custom prescription sent to a licensed 503A compounding pharmacy. FDA-registered facility, USP standards." },
  { num: "04", title: "Delivery", desc: "Pre-mixed, ready-to-use compounds shipped cold-chain to your door. Monthly auto-refill. Physician monitoring ongoing." },
];

export default function ClinicalPage() {
  return (
    <div style={{ backgroundColor: "#EAE7E3", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ paddingTop: "160px", paddingBottom: "80px" }} className="px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <p
            className="text-xs uppercase mb-6"
            style={{ color: "#B8923A", letterSpacing: "0.25em", fontWeight: 500 }}
          >
            Clinical Programs
          </p>
          <h1
            className="text-5xl md:text-6xl mb-8"
            style={{ fontWeight: 200, color: "#010101", letterSpacing: "-0.01em", lineHeight: 1.1 }}
          >
            Physician-Guided<br />Peptide Therapy
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "#7F7F7D", lineHeight: 1.7 }}>
            Telehealth consultation with a licensed prescriber. Custom compounded peptides from
            FDA-registered 503A pharmacies. Delivered cold-chain to your door monthly.
            Real medicine. Real oversight. No gray areas.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl mb-12" style={{ fontWeight: 200, color: "#010101" }}>
            How It Works
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-5">
                <div
                  className="text-3xl shrink-0"
                  style={{ fontWeight: 200, color: "#B8923A", fontFamily: "monospace" }}
                >
                  {step.num}
                </div>
                <div>
                  <h3 className="text-lg mb-2" style={{ fontWeight: 400, color: "#010101" }}>
                    {step.title}
                  </h3>
                  <p className="text-sm" style={{ color: "#7F7F7D", lineHeight: 1.7 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protocols */}
      <section style={{ backgroundColor: "#FFFFFF" }} className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <p
            className="text-xs uppercase mb-4"
            style={{ color: "#B8923A", letterSpacing: "0.25em" }}
          >
            Available Protocols
          </p>
          <h2 className="text-3xl mb-12" style={{ fontWeight: 200, color: "#010101" }}>
            Choose Your Path
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {protocols.map((protocol) => (
              <div
                key={protocol.name}
                className="p-8 rounded-lg"
                style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(0,0,0,0.08)", borderTop: "2px solid #B8923A" }}
              >
                <h3 className="text-xl mb-3" style={{ fontWeight: 300, color: "#010101" }}>
                  {protocol.name}
                </h3>
                <p className="text-sm mb-6" style={{ color: "#7F7F7D", lineHeight: 1.6 }}>
                  {protocol.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {protocol.includes.map((item) => (
                    <li key={item} className="text-sm flex items-start gap-2" style={{ color: "#010101" }}>
                      <span style={{ color: "#B8923A" }}>·</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="text-2xl mb-6" style={{ fontWeight: 200, color: "#010101" }}>
                  {protocol.price}
                </div>
                <Link href="#waitlist" className="btn-primary w-full text-center block">
                  Join Waitlist
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="py-24 px-6 md:px-12" style={{ backgroundColor: "#EAE7E3" }}>
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl mb-4" style={{ fontWeight: 200, color: "#010101" }}>
            Join the Waitlist
          </h2>
          <p className="text-sm mb-8" style={{ color: "#7F7F7D" }}>
            Clinical programs launching Q3 2026. Enter your email for priority access.
          </p>
          <form className="flex gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 text-sm rounded-sm"
              style={{ border: "1px solid rgba(0,0,0,0.1)", backgroundColor: "#FFFFFF", outline: "none" }}
            />
            <button type="submit" className="btn-primary">
              Join
            </button>
          </form>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="px-6 md:px-12 pb-24" style={{ backgroundColor: "#EAE7E3" }}>
        <div className="max-w-3xl mx-auto p-6 rounded-lg" style={{ border: "1px solid #B8923A", backgroundColor: "rgba(184,146,58,0.03)" }}>
          <p className="text-xs" style={{ color: "#7F7F7D", lineHeight: 1.7 }}>
            <strong style={{ color: "#B8923A" }}>Clinical Disclosure:</strong> All clinical programs require a licensed prescriber.
            Compounds are dispensed by FDA-registered 503A compounding pharmacies under individual patient prescriptions.
            These are not FDA-approved drugs. Compounded medications are prescribed at the discretion of the treating physician.
            Nexphoria does not practice medicine. Telehealth services provided by independent licensed medical professionals.
          </p>
        </div>
      </section>
    </div>
  );
}
