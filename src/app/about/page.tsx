import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Nexphoria — Research-Grade Peptide Compounds",
  description:
    "Who we are, what we stand for, and why we exist. Premium research peptides, independently verified, for qualified researchers.",
};

const differentiators = [
  {
    title: "Purity Standards",
    desc: "We reject anything below 99% HPLC purity. Most competitors accept 95%. That 4% matters when your research depends on compound integrity.",
  },
  {
    title: "Independent Testing",
    desc: "We never self-test. Every lot goes to an independent third-party lab (Janoshik Analytical, MZ Biolabs). You get the COA, not our word.",
  },
  {
    title: "Documentation",
    desc: "Every order ships with a full Certificate of Analysis: compound identity, purity, endotoxin levels, lot number, and testing lab name.",
  },
  {
    title: "Cold-Chain Logistics",
    desc: "Temperature-sensitive compounds ship with cold packs and insulated packaging. We monitor transit temperatures on sensitive SKUs.",
  },
];

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "#EAE7E3", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ paddingTop: "160px", paddingBottom: "80px" }} className="px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <p
            className="text-xs uppercase mb-6"
            style={{ color: "#B8923A", letterSpacing: "0.25em", fontWeight: 500 }}
          >
            About
          </p>
          <h1
            className="text-5xl md:text-6xl mb-8"
            style={{ fontWeight: 200, color: "#010101", letterSpacing: "-0.01em", lineHeight: 1.1 }}
          >
            Built for Researchers<br />Who Read the COA
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "#7F7F7D", lineHeight: 1.7 }}>
            Nexphoria exists because the peptide market needed higher standards.
            Too many vendors sell untested compounds with recycled COAs. We do the opposite.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="p-10 rounded-lg" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(0,0,0,0.06)" }}>
            <p className="text-xs uppercase mb-4" style={{ color: "#B8923A", letterSpacing: "0.2em" }}>
              Our Mission
            </p>
            <p className="text-xl" style={{ fontWeight: 300, color: "#010101", lineHeight: 1.7 }}>
              Provide research-grade peptide compounds with full analytical verification,
              clear documentation, and uncompromising quality standards — at a price point
              that doesn&apos;t require institutional procurement budgets.
            </p>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section style={{ backgroundColor: "#FFFFFF" }} className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl mb-12" style={{ fontWeight: 200, color: "#010101" }}>
            What Sets Us Apart
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((item) => (
              <div key={item.title} className="pb-8" style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                <h3 className="text-lg mb-3" style={{ fontWeight: 400, color: "#010101" }}>
                  {item.title}
                </h3>
                <p className="text-sm" style={{ color: "#7F7F7D", lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 px-6 md:px-12" style={{ backgroundColor: "#EAE7E3" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl mb-4" style={{ fontWeight: 200, color: "#010101" }}>
            Get in Touch
          </h2>
          <p className="text-sm mb-8" style={{ color: "#7F7F7D" }}>
            Questions about our compounds, testing methodology, or bulk research orders.
          </p>
          <a
            href="mailto:research@nexphoria.com"
            className="text-lg inline-block"
            style={{ color: "#010101", fontWeight: 300, borderBottom: "1px solid #B8923A", paddingBottom: "4px" }}
          >
            research@nexphoria.com
          </a>
          <div className="mt-12 flex justify-center gap-8">
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
