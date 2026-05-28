import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Standards — Science & Testing",
  description:
    "Nexphoria's commitment to purity: cGMP manufacturing, independent HPLC testing, mass spectrometry verification, and Certificate of Analysis with every order.",
};

const qualityCards = [
  {
    stat: "≥99%",
    label: "HPLC Purity",
    desc: "Every lot independently verified via High-Performance Liquid Chromatography. We reject anything below 99%.",
  },
  {
    stat: "100%",
    label: "Third-Party Tested",
    desc: "No in-house testing claims. Every batch goes to an independent analytical lab. Full transparency.",
  },
  {
    stat: "Lot #",
    label: "Full Traceability",
    desc: "Every vial traces back to its manufacturing lot, testing date, analyst, and raw material source.",
  },
];

export default function SciencePage() {
  return (
    <div style={{ backgroundColor: "#EAE7E3", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ paddingTop: "160px", paddingBottom: "80px" }} className="px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <p
            className="text-xs uppercase mb-6"
            style={{ color: "#B8923A", letterSpacing: "0.25em", fontWeight: 500 }}
          >
            Quality & Standards
          </p>
          <h1
            className="text-5xl md:text-6xl mb-8"
            style={{ fontWeight: 200, color: "#010101", letterSpacing: "-0.01em", lineHeight: 1.1 }}
          >
            The Standards Behind<br />Every Compound
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "#7F7F7D", lineHeight: 1.7 }}>
            We manufacture under pharmaceutical-grade conditions and verify independently.
            No shortcuts. No self-testing. No batch ships without third-party confirmation.
          </p>
        </div>
      </section>

      {/* Manufacturing */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl mb-6" style={{ fontWeight: 300, color: "#010101" }}>
              cGMP Manufacturing
            </h2>
            <p className="text-sm mb-4" style={{ color: "#7F7F7D", lineHeight: 1.8 }}>
              All peptide compounds are synthesized in facilities certified under current Good
              Manufacturing Practice (cGMP) regulations. This means documented Standard Operating
              Procedures, environmental controls, equipment calibration records, and trained personnel
              at every step of production.
            </p>
            <p className="text-sm" style={{ color: "#7F7F7D", lineHeight: 1.8 }}>
              Raw materials are sourced from qualified vendors with full documentation chains.
              Every synthesis run is logged, reviewed, and approved by quality assurance before
              any product enters the testing pipeline.
            </p>
          </div>
          <div>
            <h2 className="text-2xl mb-6" style={{ fontWeight: 300, color: "#010101" }}>
              Analytical Testing
            </h2>
            <p className="text-sm mb-4" style={{ color: "#7F7F7D", lineHeight: 1.8 }}>
              Every production lot undergoes comprehensive third-party analytical testing:
            </p>
            <ul className="space-y-3">
              {[
                "HPLC (High-Performance Liquid Chromatography) — purity determination",
                "Mass Spectrometry — molecular identity confirmation",
                "Endotoxin Testing (LAL) — safety for injectable compounds",
                "Residual Solvent Analysis — confirms removal of synthesis byproducts",
                "Water Content (Karl Fischer) — stability assurance",
              ].map((test) => (
                <li key={test} className="text-sm flex items-start gap-2" style={{ color: "#010101" }}>
                  <span style={{ color: "#C9DD69", fontWeight: 600 }}>→</span>
                  {test}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* COA Section */}
      <section style={{ backgroundColor: "#FFFFFF" }} className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl mb-8" style={{ fontWeight: 200, color: "#010101" }}>
            Certificate of Analysis
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-sm mb-4" style={{ color: "#7F7F7D", lineHeight: 1.8 }}>
                Every order ships with a Certificate of Analysis (COA) documenting:
              </p>
              <ul className="space-y-2">
                {[
                  "Compound identity (name, CAS number, molecular formula)",
                  "Purity percentage (HPLC peak area)",
                  "Appearance and physical characteristics",
                  "Lot number and manufacturing date",
                  "Testing laboratory name and analyst",
                  "Storage conditions and expiry date",
                ].map((item) => (
                  <li key={item} className="text-sm" style={{ color: "#010101" }}>
                    <span style={{ color: "#B8923A", marginRight: "8px" }}>·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="p-8 rounded-lg"
              style={{ backgroundColor: "#EAE7E3", border: "1px solid rgba(0,0,0,0.05)" }}
            >
              <p className="text-xs uppercase mb-4" style={{ color: "#B8923A", letterSpacing: "0.2em" }}>
                Sample COA Data
              </p>
              <div className="space-y-3 font-mono text-xs" style={{ color: "#010101" }}>
                <div className="flex justify-between">
                  <span style={{ color: "#7F7F7D" }}>Compound:</span>
                  <span>BPC-157</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: "#7F7F7D" }}>CAS:</span>
                  <span>137525-51-0</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: "#7F7F7D" }}>Purity (HPLC):</span>
                  <span style={{ color: "#C9DD69" }}>99.47%</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: "#7F7F7D" }}>Endotoxin:</span>
                  <span>&lt;0.5 EU/mg</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: "#7F7F7D" }}>Lab:</span>
                  <span>Janoshik Analytical</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: "#7F7F7D" }}>Lot:</span>
                  <span>NXP-BPC-240601</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Cards */}
      <section className="py-24 px-6 md:px-12" style={{ backgroundColor: "#EAE7E3" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {qualityCards.map((card) => (
              <div
                key={card.label}
                className="p-8 rounded-lg text-center"
                style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(0,0,0,0.06)" }}
              >
                <div className="text-4xl mb-3" style={{ fontWeight: 200, color: "#C9DD69" }}>
                  {card.stat}
                </div>
                <div
                  className="text-xs uppercase mb-4"
                  style={{ color: "#010101", letterSpacing: "0.15em", fontWeight: 500 }}
                >
                  {card.label}
                </div>
                <p className="text-sm" style={{ color: "#7F7F7D", lineHeight: 1.6 }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
