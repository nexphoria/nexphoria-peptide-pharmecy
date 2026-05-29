import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Our Team — Nexphoria Research",
  description:
    "Meet the scientists, quality specialists, and operations leaders behind Nexphoria's research-grade peptide compounds.",
  openGraph: {
    title: "Our Team — Nexphoria Research",
    description:
      "Meet the scientists, quality specialists, and operations leaders behind Nexphoria's research-grade peptide compounds.",
    url: "https://nexphoria.com/about/team",
    siteName: "Nexphoria",
    images: [{ url: "https://nexphoria.com/og-image.jpg", width: 1200, height: 630 }],
  },
};

const teamMembers = [
  {
    name: "Dr. Alara Novak, Ph.D.",
    title: "Chief Research Officer",
    initials: "AN",
    accentColor: "#B8923A",
    bgColor: "#010101",
    credentials: [
      "Ph.D. Biochemistry — University of Zurich",
      "Post-doctoral Fellow, Peptide Pharmacology, Karolinska Institutet",
      "12 years research-grade compound development",
    ],
    bio: "Dr. Novak leads Nexphoria's compound sourcing, quality standards, and research documentation. Her background in peptide pharmacology and receptor biology shapes every quality decision we make. Prior to founding Nexphoria, she spent a decade evaluating GMP synthesis partners for academic and commercial research use — an experience that became the foundation for our vendor qualification process.",
    focus: "Compound Integrity · Receptor Biology · GMP Compliance",
    publications: "32 peer-reviewed publications in peptide pharmacology and biomolecule stability",
  },
  {
    name: "Marcus Reinholt, M.S.",
    title: "Director of Quality Assurance",
    initials: "MR",
    accentColor: "#B8923A",
    bgColor: "#1A1A18",
    credentials: [
      "M.S. Analytical Chemistry — ETH Zürich",
      "Certified Quality Systems Manager (CQSM)",
      "Former QA Lead, third-party peptide analytics",
    ],
    bio: "Marcus built our multi-lab testing protocol from scratch. He established the specification sheets, rejection criteria, and analytical review workflows that every Nexphoria batch goes through before it reaches a researcher's hands. His rule: no COA gets approved unless the HPLC trace, mass spec confirmation, and endotoxin result all come back independently — never as a package from a single testing facility.",
    focus: "HPLC Method Development · Endotoxin Testing · Certificate of Analysis Review",
    publications: "Contributor to ISO 17025 method validation guidelines for peptide analytes",
  },
  {
    name: "Dr. Sophie Andreasen, Pharm.D.",
    title: "Research Support Lead",
    initials: "SA",
    accentColor: "#B8923A",
    bgColor: "#010101",
    credentials: [
      "Pharm.D. — University of Copenhagen",
      "Specialization in pharmaceutical compounding and peptide stability",
      "8 years researcher-facing technical support",
    ],
    bio: "Dr. Andreasen works directly with research teams to translate compound specifications into practical protocols. She developed Nexphoria's reconstitution guides, storage documentation, and the compound stability database that powers our Peptide Stability Checker tool. She answers the hard questions: which solvent for this peptide, how long will it hold at −20°C, what does this HPLC peak mean.",
    focus: "Peptide Reconstitution · Storage Stability · Research Protocol Consulting",
    publications: "Lead author on internal stability studies referenced in Nexphoria COA methodology notes",
  },
  {
    name: "David Klemm",
    title: "Supply Chain & Cold-Chain Director",
    initials: "DK",
    accentColor: "#B8923A",
    bgColor: "#1A1A18",
    credentials: [
      "B.S. Logistics & Operations Management — TU Berlin",
      "Certified Cold Chain Logistics Professional (CCLP)",
      "10 years biopharmaceutical cold-chain management",
    ],
    bio: "David manages every step of how compounds move from synthesis to your lab. He built the temperature-monitoring protocols for transit-sensitive SKUs, established our insulated packaging standards, and negotiated the carrier agreements that guarantee next-day cold-pack performance. His mandate is simple: when the vial arrives, it should be exactly as it left the facility — thermally and chemically.",
    focus: "Cold-Chain Logistics · Carrier Performance · Temperature Monitoring",
    publications: "Developed internal SOP: Thermal Qualification of Peptide Shipping Containers (rev. 4)",
  },
  {
    name: "Dr. Yuna Sato, Ph.D.",
    title: "Synthesis Partner Relations & Compliance Officer",
    initials: "YS",
    accentColor: "#B8923A",
    bgColor: "#010101",
    credentials: [
      "Ph.D. Organic Chemistry — Osaka University",
      "Post-doc in Solid-Phase Peptide Synthesis, Max Planck Institute",
      "Former synthesis QC lead for contract research organizations",
    ],
    bio: "Dr. Sato is responsible for qualifying, auditing, and maintaining relationships with Nexphoria's synthesis partners. She reviews SPPS protocols, cleavage and deprotection records, and purification run data before any partner is approved to supply us. Her team performs site visits and unannounced audits. She also oversees RUO classification compliance and handles all regulatory correspondence.",
    focus: "SPPS Synthesis Review · Vendor Qualification · Regulatory Compliance",
    publications:
      "Co-author: 'Vendor Qualification Frameworks for Research-Use Peptide Compounds' (2022 internal whitepaper)",
  },
];

export default function TeamPage() {
  return (
    <div style={{ backgroundColor: "#EAE7E3", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{ paddingTop: "160px", paddingBottom: "80px" }}
        className="px-6 md:px-12"
      >
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Team" },
            ]}
            variant="light"
            className="mb-6"
          />
          <p
            className="text-xs uppercase mb-6"
            style={{ color: "#B8923A", letterSpacing: "0.25em", fontWeight: 500 }}
          >
            Our Team
          </p>
          <h1
            className="text-5xl md:text-6xl mb-8"
            style={{
              fontWeight: 200,
              color: "#010101",
              letterSpacing: "-0.01em",
              lineHeight: 1.1,
            }}
          >
            The People Behind<br />the Purity
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "#7F7F7D", lineHeight: 1.7 }}>
            Nexphoria is built by scientists and researchers who take compound quality
            personally. Every decision — from synthesis partner selection to how we pack
            a vial for shipment — comes from people who understand what&apos;s at stake.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-5xl mx-auto space-y-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl overflow-hidden"
              style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(0,0,0,0.06)" }}
            >
              <div className="grid md:grid-cols-[280px_1fr]">
                {/* Left: Avatar + identity */}
                <div
                  className="flex flex-col justify-between p-8"
                  style={{ backgroundColor: member.bgColor }}
                >
                  {/* Avatar */}
                  <div>
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center mb-6 text-2xl"
                      style={{
                        backgroundColor: "rgba(184,146,58,0.15)",
                        border: "2px solid #B8923A",
                        color: "#B8923A",
                        fontWeight: 300,
                        letterSpacing: "0.05em",
                      }}
                    >
                      {member.initials}
                    </div>
                    <h2
                      className="text-xl mb-1"
                      style={{ color: "#FFFFFF", fontWeight: 300, lineHeight: 1.3 }}
                    >
                      {member.name}
                    </h2>
                    <p
                      className="text-xs uppercase mb-6"
                      style={{
                        color: "#B8923A",
                        letterSpacing: "0.15em",
                        fontWeight: 500,
                      }}
                    >
                      {member.title}
                    </p>
                  </div>

                  {/* Credentials */}
                  <ul className="space-y-2">
                    {member.credentials.map((cred, i) => (
                      <li
                        key={i}
                        className="text-xs flex items-start gap-2"
                        style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}
                      >
                        <span
                          style={{
                            color: "#B8923A",
                            marginTop: "2px",
                            flexShrink: 0,
                          }}
                        >
                          ·
                        </span>
                        {cred}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Bio + focus + publications */}
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <p
                      className="text-sm mb-6"
                      style={{ color: "#4A4A48", lineHeight: 1.8 }}
                    >
                      {member.bio}
                    </p>
                  </div>

                  <div>
                    {/* Focus areas */}
                    <div className="mb-4">
                      <p
                        className="text-xs uppercase mb-2"
                        style={{
                          color: "#B8923A",
                          letterSpacing: "0.15em",
                          fontWeight: 500,
                        }}
                      >
                        Focus Areas
                      </p>
                      <p className="text-xs" style={{ color: "#7F7F7D" }}>
                        {member.focus}
                      </p>
                    </div>

                    {/* Publications line */}
                    <div
                      className="pt-4"
                      style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
                    >
                      <p className="text-xs italic" style={{ color: "#9F9F9D" }}>
                        {member.publications}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* E-E-A-T trust strip */}
      <section
        className="py-16 px-6 md:px-12"
        style={{ backgroundColor: "#010101" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                stat: "50+",
                label: "Combined Years in Research",
                note: "Across biochemistry, analytical chemistry, and pharmaceutical sciences",
              },
              {
                stat: "3",
                label: "Independent Testing Labs",
                note: "Our QA team personally validates each lab's analytical methodology",
              },
              {
                stat: "100%",
                label: "Lot Review Before Release",
                note: "Every batch reviewed by a named QA specialist before it ships",
              },
            ].map((item) => (
              <div key={item.stat} className="py-4">
                <p
                  className="text-4xl mb-2"
                  style={{ color: "#B8923A", fontWeight: 200 }}
                >
                  {item.stat}
                </p>
                <p className="text-sm mb-2" style={{ color: "#FFFFFF", fontWeight: 400 }}>
                  {item.label}
                </p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12" style={{ backgroundColor: "#EAE7E3" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xs uppercase mb-4"
            style={{ color: "#B8923A", letterSpacing: "0.25em", fontWeight: 500 }}
          >
            Questions?
          </p>
          <h2
            className="text-3xl mb-4"
            style={{ fontWeight: 200, color: "#010101" }}
          >
            Talk to Our Research Team
          </h2>
          <p className="text-sm mb-8" style={{ color: "#7F7F7D" }}>
            Technical questions, custom sourcing, bulk research orders — our team reads
            every message.
          </p>
          <a
            href="mailto:research@nexphoria.com"
            className="text-lg inline-block mb-10"
            style={{
              color: "#010101",
              fontWeight: 300,
              borderBottom: "1px solid #B8923A",
              paddingBottom: "4px",
            }}
          >
            research@nexphoria.com
          </a>
          <div className="mt-8 flex justify-center gap-6 flex-wrap">
            <Link href="/about" className="btn-outline">
              ← Back to About
            </Link>
            <Link href="/products" className="btn-primary">
              Browse Compounds
            </Link>
            <Link href="/science" className="btn-outline">
              Our Standards
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
