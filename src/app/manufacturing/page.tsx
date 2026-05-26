"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

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
    step: "01",
    title: "Raw Material Qualification",
    desc: "All amino acid building blocks and reagents sourced from qualified, GMP-certified suppliers. Identity, purity, and endotoxin levels verified on receipt before use in synthesis.",
  },
  {
    step: "02",
    title: "Solid-Phase Peptide Synthesis",
    desc: "Fmoc or Boc SPPS chemistry depending on compound requirements. Resin loading, coupling efficiency, and deprotection monitored at every step. Automated platform with real-time UV quantification.",
  },
  {
    step: "03",
    title: "Preparative HPLC Purification",
    desc: "Mass-directed preparative HPLC achieves final purity ≥98–99%+. Fractions collected and pooled by purity threshold. Multiple UV and MS checkpoints throughout purification.",
  },
  {
    step: "04",
    title: "Lyophilization",
    desc: "Purified peptide solution freeze-dried to stable lyophilized powder. Residual moisture below 5% by Karl Fischer titration. Batch sealed under inert atmosphere to prevent oxidation.",
  },
  {
    step: "05",
    title: "Third-Party Analytical Testing",
    desc: "Every production lot submitted to an accredited, independent analytical laboratory. HPLC purity, ESI-MS identity, moisture, and residual solvent analysis performed and documented.",
  },
  {
    step: "06",
    title: "Certificate of Analysis Release",
    desc: "Signed COA issued by the testing laboratory. Batch released for sale only after all specifications are met. COA accompanies every order.",
  },
];

const standards = [
  { code: "cGMP", label: "Current Good Manufacturing Practice", sub: "Pharmaceutical-grade production controls on every batch" },
  { code: "ISO", label: "ISO-Compliant Facility", sub: "Certified infrastructure and quality management systems" },
  { code: "HPLC", label: "Reverse-Phase HPLC", sub: "C18 column, UV/DAD detection, certified reference standards" },
  { code: "ESI-MS", label: "Electrospray Ionization MS", sub: "Molecular identity confirmation ≤5 ppm mass accuracy" },
  { code: "KF", label: "Karl Fischer Titration", sub: "Precise moisture content determination on every lot" },
  { code: "ICH Q3C", label: "Residual Solvent Testing", sub: "Class 1/2/3 limits per ICH Q3C guidelines" },
];

export default function ManufacturingPage() {
  return (
    <div className="min-h-screen bg-dark">

      {/* Hero */}
      <section className="relative pt-36 pb-24 border-b overflow-hidden" style={{ borderColor: "var(--dark-border)" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url(/dna-pattern.png)",
            backgroundSize: "600px auto",
            backgroundRepeat: "repeat",
            opacity: 0.03,
          }}
        />
        <div className="container-nex relative">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="eyebrow mb-5 block">Manufacturing</span>
            <h1
              className="font-bold tracking-tight mb-6 max-w-3xl"
              style={{
                fontFamily: "var(--font-playfair, Georgia, serif)",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                lineHeight: 1.1,
                color: "#FDFCF8",
              }}
            >
              Built to{" "}
              <em className="italic" style={{ color: "var(--acid-green)" }}>Pharmaceutical</em>
              <br />
              Standards
            </h1>
            <p className="text-lg max-w-2xl leading-relaxed text-secondary">
              Every Nexphoria compound is synthesized, purified, and released through a rigorous
              cGMP-aligned manufacturing process. No batch reaches your lab without passing our
              six-stage quality framework.
            </p>
          </motion.div>
        </div>
      </section>

      {/* cGMP commitment — dark pullout */}
      <section className="py-20" style={{ backgroundColor: "#1A1A18" }}>
        <div className="container-nex">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="max-w-4xl"
          >
            <p
              className="text-2xl md:text-3xl text-ceramic leading-relaxed"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontWeight: 400 }}
            >
              We impose pharmaceutical-grade manufacturing controls on research compounds because{" "}
              <em className="italic" style={{ color: "var(--acid-green)" }}>
                the integrity of your research depends on the integrity of your reagents.
              </em>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process steps */}
      <section className="py-28 border-b" style={{ borderColor: "var(--dark-border)" }}>
        <div className="container-nex">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mb-14"
          >
            <span className="eyebrow mb-4 block">Production Process</span>
            <h2
              className="font-bold tracking-tight max-w-2xl"
              style={{
                fontFamily: "var(--font-playfair, Georgia, serif)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                color: "#FDFCF8",
              }}
            >
              From Synthesis to{" "}
              <em className="italic" style={{ color: "var(--acid-green)" }}>Your Lab</em>
            </h2>
          </motion.div>

          <div className="space-y-0 border-t" style={{ borderColor: "var(--dark-border)" }}>
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.07}
                className="grid md:grid-cols-[120px_1fr] gap-8 py-10 border-b items-start"
                style={{ borderColor: "var(--dark-border)" }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="text-xs font-mono font-medium px-3 py-1.5"
                    style={{ backgroundColor: "#1A1A18", color: "var(--acid-green)" }}
                  >
                    {step.step}
                  </div>
                </div>
                <div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ fontFamily: "var(--font-playfair, Georgia, serif)", color: "#FDFCF8" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed max-w-2xl text-secondary">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality standards grid */}
      <section className="py-24 border-b" style={{ backgroundColor: "var(--dark-panel)", borderColor: "var(--dark-border)" }}>
        <div className="container-nex">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mb-12"
          >
            <span className="eyebrow mb-4 block">Quality Framework</span>
            <h2
              className="font-bold tracking-tight"
              style={{
                fontFamily: "var(--font-playfair, Georgia, serif)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                color: "#FDFCF8",
              }}
            >
              Our Standards
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {standards.map((s, i) => (
              <motion.div
                key={s.code}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.07}
                className="flex items-start gap-4 p-6 border"
                style={{ borderColor: "var(--dark-border)", backgroundColor: "var(--dark-card)" }}
              >
                <div
                  className="text-xs font-mono font-medium px-2 py-1 whitespace-nowrap mt-0.5 flex-shrink-0"
                  style={{ backgroundColor: "#1A1A18", color: "var(--acid-green)" }}
                >
                  {s.code}
                </div>
                <div>
                  <div className="text-sm font-medium mb-1" style={{ color: "#FDFCF8" }}>{s.label}</div>
                  <p className="text-xs leading-relaxed text-secondary">{s.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* White label section */}
      <section className="py-24" style={{ backgroundColor: "#1A1A18" }}>
        <div className="container-nex">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="max-w-3xl"
          >
            <span className="eyebrow mb-5 block">Partners</span>
            <h2
              className="font-bold tracking-tight text-ceramic mb-6"
              style={{
                fontFamily: "var(--font-playfair, Georgia, serif)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              }}
            >
              White-Label &{" "}
              <em className="italic" style={{ color: "var(--acid-green)" }}>Custom Packaging</em>
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-secondary">
              We produce private-label peptide compounds for qualified distributors, research
              institutions, and branded product lines. Same cGMP standards, your branding.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                "Full COA transfer for your brand documentation",
                "Custom vial labeling and packaging",
                "Bulk synthesis for defined peptide sequences",
                "Minimum quantities from 100mg — scalable to gram-scale",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "var(--acid-green)" }} />
                  <span className="text-sm text-secondary">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn-acid">
              Inquire About Partnership
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "var(--dark-panel)" }}>
        <div className="container-nex flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2
              className="font-bold tracking-tight mb-2"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: "var(--text-h3)", color: "#FDFCF8" }}
            >
              View the full compound catalog
            </h2>
            <p className="text-sm text-secondary">
              Every compound includes HPLC data, MS confirmation, and third-party COA.
            </p>
          </div>
          <Link href="/products" className="btn-acid whitespace-nowrap">
            Browse Compounds <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
