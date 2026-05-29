import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Research Tools | Nexphoria",
  description:
    "Free research tools for peptide scientists: reconstitution calculator, protocol guides, compound index, FAQ, and more. Built for qualified researchers.",
  openGraph: {
    title: "Research Tools — Nexphoria",
    description:
      "Reconstitution calculator, protocol guides, compound index, and more research utilities.",
    url: "https://nexphoria.com/tools",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const TOOLS = [
  {
    href: "/tools/reconstitution-calculator",
    title: "Reconstitution Calculator",
    desc: "Calculate BAC water volume, dose volume (mL + syringe units), and doses per vial for any lyophilized peptide.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18"/>
      </svg>
    ),
    badge: "Tool",
  },
  {
    href: "/tools/half-life-calculator",
    title: "Half-Life & Dosing Calculator",
    desc: "Calculate plasma half-life, clearance milestones, dosing frequency, and decay curve for 30+ research peptides.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    badge: "Tool",
  },
  {
    href: "/protocols",
    title: "Research Cycle Protocols",
    desc: "Understand 3-Month and 6-Month research cycles — supply alignment, reconstitution guidance, and storage requirements.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    badge: "Guide",
  },
  {
    href: "/compounds",
    title: "Compound Index",
    desc: "Wikipedia-style index of all 32 compounds in the catalog — mechanisms, CAS numbers, MW, storage, and related literature.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      </svg>
    ),
    badge: "Reference",
  },
  {
    href: "/faq",
    title: "Research FAQ",
    desc: "18 Q&As covering what research peptides are, ordering, cold-chain shipping, COA verification, reconstitution, and returns.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
        <line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
    badge: "FAQ",
  },
  {
    href: "/blog",
    title: "Research Journal",
    desc: "Peer-referenced articles on peptide biochemistry, compound profiles, quality testing, and cold-chain logistics.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    badge: "Articles",
  },
  {
    href: "/tools/bac-water-guide",
    title: "Bacteriostatic Water Guide",
    desc: "What BAC water is, why 0.9% benzyl alcohol matters, how to mix peptide vials, storage after opening, multi-use technique, and common mistakes.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 2v6l-2 2v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-8l-2-2V2"/>
        <line x1="9" y1="2" x2="15" y2="2"/>
        <path d="M12 11v6"/>
        <path d="M9 14h6"/>
      </svg>
    ),
    badge: "Guide",
  },
  {
    href: "/guides/storage",
    title: "Peptide Storage Guide",
    desc: "Complete storage reference for all catalog compounds: lyophilized vs reconstituted stability, temperature classes, freeze-thaw limits, light sensitivity, and aliquoting protocol.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8"/>
        <path d="M12 17v4"/>
        <path d="M7 8h2"/>
        <path d="M7 12h10"/>
        <path d="M13 8h4"/>
      </svg>
    ),
    badge: "Guide",
  },
  {
    href: "/guides/reconstitution",
    title: "Reconstitution Guide",
    desc: "Complete written guide to reconstituting research peptides: solvent selection (BAC water, sterile water, acetic acid, DMSO), injection technique, concentration math with worked examples, multi-use strategy, labeling, and disposal.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/>
        <path d="M8.5 2h7"/>
        <path d="M7 16h10"/>
      </svg>
    ),
    badge: "Guide",
  },
  {
    href: "/guides/peptide-glossary",
    title: "Peptide Glossary",
    desc: "50+ research terms defined: lyophilization, reconstitution, HPLC, COA, half-life, GHSR-1a, GLP-1R, pharmacokinetics, and more. Alphabetically indexed with cross-references.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
        <path d="M8 7h8"/>
        <path d="M8 11h8"/>
        <path d="M8 15h5"/>
      </svg>
    ),
    badge: "Reference",
  },
  {
    href: "/tools/unit-converter",
    title: "Unit Converter",
    desc: "Convert mcg/mg/g/IU, mL to insulin syringe units, nmol/L to ng/mL, and dilution factor (C₁V₁=C₂V₂) calculations for any compound.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 3H5a2 2 0 0 0-2 2v3"/>
        <path d="M21 8V5a2 2 0 0 0-2-2h-3"/>
        <path d="M3 16v3a2 2 0 0 0 2 2h3"/>
        <path d="M16 21h3a2 2 0 0 0 2-2v-3"/>
        <path d="M9 12h6"/>
        <path d="M12 9v6"/>
      </svg>
    ),
    badge: "Tool",
  },
  {
    href: "/tools/stack-builder",
    title: "Research Stack Builder",
    desc: "Select a research goal (recovery, GH axis, metabolic, longevity, cognitive) and get a synergistic compound stack with mechanistic rationale, weekly schedule, and monthly cost estimate.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/>
        <polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
    badge: "Tool",
  },
  {
    href: "/tools/dosing-frequency-planner",
    title: "Dosing Frequency Planner",
    desc: "Plan your weekly injection schedule across multiple compounds with auto-distribute, stacking warnings, and exportable protocol summary.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
        <line x1="8" y1="14" x2="16" y2="14"/>
        <line x1="8" y1="18" x2="16" y2="18"/>
      </svg>
    ),
    badge: "Tool",
  },
  {
    href: "/tools/purity-checker",
    title: "Purity Checker & COA Guide",
    desc: "Look up HPLC purity specs for 28+ research compounds. Learn how to read a Certificate of Analysis, what to verify, and the red flags that signal a fraudulent COA.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4"/>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
    badge: "Tool",
  },
  {
    href: "/tools/cost-per-dose-calculator",
    title: "Cost Per Dose Calculator",
    desc: "Enter a compound, vial size, dose, and frequency to instantly calculate cost per dose, doses per vial, weekly spend, and monthly research budget.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    badge: "Tool",
  },
  {
    href: "/tools/igf-1-calculator",
    title: "IGF-1 Response Estimator",
    desc: "Estimate IGF-1 % elevation from GHRH analog + GHRP stacking based on published clinical data. Includes synergy multipliers, duration modifiers, and dosing frequency adjustments.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"/>
        <path d="M7 16l4-8 4 4 4-6"/>
        <circle cx="7" cy="16" r="1.5" fill="currentColor" stroke="none"/>
        <circle cx="11" cy="8" r="1.5" fill="currentColor" stroke="none"/>
        <circle cx="15" cy="12" r="1.5" fill="currentColor" stroke="none"/>
        <circle cx="19" cy="6" r="1.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
    badge: "Tool",
  },
];

export default function ToolsPage() {
  return (
    <div style={{ backgroundColor: "#FFFFF3", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        className="relative px-6 pt-32 pb-16 md:pt-40 md:pb-20"
        style={{ backgroundColor: "#010101" }}
      >
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            variant="dark"
            className="mb-6"
            items={[
              { label: "Home", href: "/" },
              { label: "Research Tools" },
            ]}
          />
          <p
            className="text-xs uppercase tracking-widest mb-5"
            style={{ color: "#C9DD69" }}
          >
            Resources
          </p>
          <h1
            className="text-4xl md:text-5xl mb-5 tracking-tight"
            style={{ fontWeight: 200, color: "#FFFFF3", lineHeight: 1.05 }}
          >
            Research Tools
          </h1>
          <p
            className="text-base md:text-lg max-w-xl"
            style={{ fontWeight: 300, color: "#A0A0A0", lineHeight: 1.65 }}
          >
            Utilities, reference materials, and guides for researchers working with peptide compounds. Free to use.
          </p>
        </div>
      </section>

      {/* Tools grid */}
      <section className="px-6 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-5">
            {TOOLS.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group block rounded-sm p-7 transition-all hover:-translate-y-0.5"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #ECEAE4",
                  textDecoration: "none",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: "#A4B08A" }}
                  >
                    {tool.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h2
                        className="text-base font-medium group-hover:opacity-70 transition-opacity"
                        style={{ color: "#000" }}
                      >
                        {tool.title}
                      </h2>
                      <span
                        className="text-xs px-2 py-0.5 rounded-sm"
                        style={{
                          backgroundColor: "#A4B08A22",
                          color: "#7A8A60",
                          border: "1px solid #A4B08A44",
                          fontWeight: 500,
                        }}
                      >
                        {tool.badge}
                      </span>
                    </div>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#555555" }}
                    >
                      {tool.desc}
                    </p>
                    <p
                      className="text-xs mt-3 font-medium"
                      style={{ color: "#A4B08A" }}
                    >
                      Open →
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA to catalog */}
          <div
            className="mt-12 rounded-sm p-8 text-center"
            style={{
              backgroundColor: "#010101",
              border: "1px solid #2A2A28",
            }}
          >
            <p
              className="text-xs uppercase tracking-widest mb-4"
              style={{ color: "#C9DD69" }}
            >
              Ready to Order?
            </p>
            <h3
              className="text-2xl mb-3 tracking-tight"
              style={{ fontWeight: 200, color: "#FFFFF3" }}
            >
              Research-grade compounds, independently verified.
            </h3>
            <p className="text-sm mb-6" style={{ color: "#A0A0A0" }}>
              Every lot tested by independent laboratories. COA ships with every order.
            </p>
            <Link href="/products" className="btn-primary inline-block">
              Browse Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
