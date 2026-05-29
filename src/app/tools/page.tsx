import type { Metadata } from "next";
import Link from "next/link";

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
