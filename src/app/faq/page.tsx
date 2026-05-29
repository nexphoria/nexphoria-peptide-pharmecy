"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const faqs: { category: string; items: { q: string; a: string | ReactNode }[] }[] = [
  {
    category: "What Are Research Peptides?",
    items: [
      {
        q: "What are research peptides?",
        a: "Research peptides are short chains of amino acids synthesized in a laboratory setting for use in scientific research. They are not intended for human consumption, therapeutic use, or diagnostic purposes. Researchers study them to understand biological mechanisms, receptor interactions, and cellular signaling pathways.",
      },
      {
        q: "Who are your compounds intended for?",
        a: "Our compounds are sold exclusively for qualified research use only — academic institutions, licensed researchers, biotech firms, and similar professional contexts. By purchasing from Nexphoria, you confirm that you are a qualified researcher and that all compounds will be used strictly for laboratory research.",
      },
      {
        q: "Are your compounds FDA-approved?",
        a: "No. Research peptides are not FDA-approved drugs and are not sold for human use. They are not intended to diagnose, treat, cure, or prevent any disease or condition. Nexphoria products are research reagents only.",
      },
      {
        q: "What is a Certificate of Analysis (COA)?",
        a: "A Certificate of Analysis is a document issued by an independent analytical laboratory confirming the identity, purity, and quality of a compound. Every Nexphoria lot is independently tested and ships with its COA. The COA includes HPLC purity data, compound identity confirmation (usually via mass spectrometry), lot number, testing date, and the name of the testing laboratory. You should always request and review the COA before using any research compound.",
      },
    ],
  },
  {
    category: "Purity & Quality",
    items: [
      {
        q: "What purity standards do you require?",
        a: "We require ≥99% HPLC purity for all compounds in our catalog. Many vendors accept 95% or below; we do not. The additional 4% matters significantly when compound integrity is critical to your research outcomes.",
      },
      {
        q: "Who tests your compounds?",
        a: "We never self-test. Every production lot is sent to an independent third-party analytical laboratory. Testing includes HPLC for purity, mass spectrometry for identity confirmation, and endotoxin testing where applicable. Lab names and lot numbers are documented on every COA.",
      },
      {
        q: "What is lyophilization and why does it matter?",
        a: "Lyophilization (freeze-drying) removes water content from peptides under vacuum conditions, converting them to a stable powder form. Lyophilized peptides are significantly more stable than liquid solutions — they can be stored at −20°C for 24+ months without degradation. This is why our compounds ship as lyophilized powder and require reconstitution before research use.",
      },
      {
        q: "How do I verify a COA is authentic?",
        a: "Legitimate COAs include the testing lab's name and contact information, a lot number that traces to your order, a testing date, and the analyst's signature or accreditation number. You can often contact the testing lab directly to verify the report. If a vendor cannot provide a COA with a named, verifiable laboratory, do not use their compounds.",
      },
    ],
  },
  {
    category: "Ordering & Shipping",
    items: [
      {
        q: "What countries do you ship to?",
        a: "We currently ship within the United States. International shipping is available to select countries where research peptides are legal for import. It is the buyer's responsibility to verify that receipt of research compounds is lawful in their jurisdiction. Contact us for international shipping inquiries.",
      },
      {
        q: "How do you ship temperature-sensitive compounds?",
        a: "We ship all compounds in insulated packaging with cold packs. Temperature-sensitive SKUs are packed with gel packs rated for 48–72 hours of transit. We recommend refrigerating your compounds immediately upon receipt. Lyophilized peptides at room temperature for short transit windows (under 72 hours) typically do not degrade, but cold storage is always preferred.",
      },
      {
        q: "What are your shipping timeframes?",
        a: "Standard orders typically ship within 1–2 business days. Delivery is 2–5 business days depending on your location. Expedited shipping options are available at checkout. Custom synthesis orders have separate lead times — typically 2–3 weeks from order confirmation.",
      },
      {
        q: "Can I track my order?",
        a: (
          <>
            Yes. Once your order ships, you will receive a tracking number by email. You can also visit{" "}
            <Link href="/account/orders" className="underline">
              your account orders page
            </Link>{" "}
            and enter your email and order ID to look up status.
          </>
        ),
      },
    ],
  },
  {
    category: "Storage & Handling",
    items: [
      {
        q: "How should I store lyophilized peptides?",
        a: "Lyophilized (freeze-dried) peptides should be stored at −20°C in a desiccated environment, protected from light. Under these conditions, most peptides remain stable for 24 months. Avoid repeated freeze-thaw cycles after reconstitution. Store reconstituted solutions at 4°C for short-term (1–2 weeks) or at −80°C for longer storage.",
      },
      {
        q: "How do I reconstitute a lyophilized peptide?",
        a: "Reconstitution requires bacteriostatic water or sterile water, depending on the compound and intended research use. The standard approach: (1) Allow the vial to reach room temperature before opening. (2) Add diluent slowly down the side of the vial — do not inject directly onto the peptide cake. (3) Gently swirl; do not shake vigorously. (4) Allow 5–10 minutes for complete dissolution. Specific reconstitution guidance is listed on each product page.",
      },
      {
        q: "Can I order bacteriostatic or sterile water from you?",
        a: "Yes. We carry Sterile Water (3mL and 10mL vials) in our catalog, suitable for research reconstitution. These are pharmaceutical-grade, endotoxin-tested, and sealed under aseptic conditions.",
      },
    ],
  },
  {
    category: "Returns & Policies",
    items: [
      {
        q: "What is your return policy?",
        a: "Due to the nature of research compounds and cold-chain logistics, we accept returns only for items that arrive damaged, with a compromised seal, or if the wrong product was shipped. Returns must be initiated within 7 days of delivery. We do not accept returns on opened vials. Contact our support team with your order number and a photo of the issue.",
      },
      {
        q: "What if my shipment arrives warm or damaged?",
        a: "Contact us within 48 hours of delivery with a photo of the packaging and the product. If the cold chain was compromised during shipping, we will work with you on a replacement or refund. We stand behind our logistics; if we made an error, we make it right.",
      },
    ],
  },
  {
    category: "Wholesale & Bulk",
    items: [
      {
        q: "Do you offer wholesale or bulk pricing?",
        a: (
          <>
            Yes. Wholesale accounts are available for institutions, research labs, and qualified
            businesses ordering regularly. Pricing tiers are available for bulk quantities.{" "}
            <Link href="/wholesale" className="underline">
              Visit our wholesale page
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="underline">
              contact us directly
            </Link>{" "}
            to discuss your needs.
          </>
        ),
      },
      {
        q: "Can you synthesize custom peptide sequences?",
        a: (
          <>
            Yes. We accept custom synthesis inquiries for defined peptide sequences not currently in
            our catalog. Lead times are typically 2–3 weeks depending on complexity and quantity.{" "}
            <Link href="/contact" className="underline">
              Submit a custom synthesis inquiry here.
            </Link>
          </>
        ),
      },
    ],
  },
];

function FaqItem({ q, a }: { q: string; a: string | ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border-b"
      style={{ borderColor: "rgba(0,0,0,0.07)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-6 py-5 text-left"
        aria-expanded={open}
      >
        <span
          className="text-sm md:text-base leading-snug"
          style={{ fontWeight: 500, color: "#010101", maxWidth: "85%" }}
        >
          {q}
        </span>
        <span
          className="shrink-0 mt-0.5 text-lg transition-transform duration-200"
          style={{
            color: "#A4B08A",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            display: "inline-block",
          }}
        >
          +
        </span>
      </button>
      {open && (
        <div
          className="pb-5 text-sm leading-relaxed"
          style={{ color: "#555", maxWidth: "85%" }}
        >
          {a}
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const visibleFaqs =
    activeCategory === null
      ? faqs
      : faqs.filter((f) => f.category === activeCategory);

  return (
    <div style={{ backgroundColor: "#EAE7E3", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ paddingTop: "160px", paddingBottom: "64px" }} className="px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            variant="light"
            className="mb-6"
            items={[
              { label: "Home", href: "/" },
              { label: "FAQ" },
            ]}
          />
          <p
            className="eyebrow mb-6"
            style={{ color: "#A4B08A" }}
          >
            Support
          </p>
          <h1
            className="text-4xl md:text-5xl mb-6 font-medium tracking-tight"
            style={{ color: "#010101", lineHeight: 1.1 }}
          >
            Frequently Asked<br />Questions
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "#7F7F7D", lineHeight: 1.7 }}>
            Answers to the most common questions about our compounds, quality standards,
            ordering process, and research use policies.
          </p>
        </div>
      </section>

      {/* Category filter pills */}
      <div className="px-6 md:px-12 pb-10">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory(null)}
            className="px-4 py-1.5 text-xs uppercase rounded-full transition-all"
            style={{
              letterSpacing: "0.08em",
              backgroundColor: activeCategory === null ? "#010101" : "transparent",
              color: activeCategory === null ? "#fff" : "#555",
              border: "1px solid",
              borderColor: activeCategory === null ? "#010101" : "rgba(0,0,0,0.15)",
            }}
          >
            All Topics
          </button>
          {faqs.map((section) => (
            <button
              key={section.category}
              onClick={() =>
                setActiveCategory(
                  activeCategory === section.category ? null : section.category
                )
              }
              className="px-4 py-1.5 text-xs rounded-full transition-all"
              style={{
                letterSpacing: "0.04em",
                backgroundColor:
                  activeCategory === section.category ? "#010101" : "transparent",
                color: activeCategory === section.category ? "#fff" : "#555",
                border: "1px solid",
                borderColor:
                  activeCategory === section.category
                    ? "#010101"
                    : "rgba(0,0,0,0.15)",
              }}
            >
              {section.category}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ sections */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-4xl mx-auto space-y-14">
          {visibleFaqs.map((section) => (
            <div key={section.category}>
              <h2
                className="text-xs uppercase mb-6 pb-3 border-b"
                style={{
                  color: "#A4B08A",
                  letterSpacing: "0.2em",
                  fontWeight: 600,
                  borderColor: "rgba(0,0,0,0.1)",
                }}
              >
                {section.category}
              </h2>
              <div>
                {section.items.map((item) => (
                  <FaqItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA: Still have questions? */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-xl p-10 text-center"
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            <p
              className="text-xs uppercase mb-4"
              style={{ color: "#A4B08A", letterSpacing: "0.2em" }}
            >
              Still Have Questions?
            </p>
            <h3
              className="text-2xl mb-3 font-medium"
              style={{ color: "#010101" }}
            >
              Our research team is here to help.
            </h3>
            <p
              className="text-sm mb-8 max-w-lg mx-auto"
              style={{ color: "#7F7F7D", lineHeight: 1.7 }}
            >
              For questions about specific compounds, protocols, wholesale pricing, or
              custom synthesis — reach out directly.
            </p>
            <Link href="/contact" className="btn-primary">
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
