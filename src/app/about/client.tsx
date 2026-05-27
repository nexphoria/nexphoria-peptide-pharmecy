"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, FlaskConical, Shield, Award, Microscope } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const principles = [
  {
    icon: FlaskConical,
    title: "Manufacturing Excellence",
    description:
      "Every compound synthesized in ISO-certified, cGMP-compliant facilities. We impose pharmaceutical-grade controls on every production batch — not because we are required to, but because anything less is insufficient for rigorous research.",
  },
  {
    icon: Shield,
    title: "Independent Verification",
    description:
      "Third-party analytical testing is non-negotiable. HPLC, mass spectrometry, and moisture analysis performed by accredited external laboratories on every lot. Certificate of Analysis available prior to shipment.",
  },
  {
    icon: Award,
    title: "Research Integrity",
    description:
      "Our compounds are designed for qualified researchers, licensed professionals, and credentialed institutions. We do not manufacture consumer products — we manufacture precision research tools.",
  },
  {
    icon: Microscope,
    title: "Scientific Transparency",
    description:
      "Full documentation accompanies every order: batch records, COA with raw chromatographic data, and MSDS sheets. We do not make claims unsupported by analytical evidence.",
  },
];

const standards = [
  { code: "cGMP", label: "Current Good Manufacturing Practice — pharmaceutical-grade production standards" },
  { code: "HPLC", label: "Reverse-phase HPLC purity analysis with UV/DAD detection" },
  { code: "ESI-MS", label: "Electrospray ionization mass spectrometry for molecular identity" },
  { code: "KF", label: "Karl Fischer titration for precise moisture content determination" },
  { code: "ICH Q3C", label: "Residual solvent testing per ICH Q3C limits" },
  { code: "ISO", label: "ISO-compliant facility infrastructure and quality systems" },
];

export default function AboutClient() {
  return (
    <div className="min-h-screen bg-dark">

      {/* Hero — scientist-2.jpg or lab-dark.jpg */}
      <section className="relative overflow-hidden" style={{ minHeight: "70vh" }}>
        <Image
          src="/brand/brand-suite.jpg"
          alt="Precision. Purity. Purpose. — Nexphoria"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.15) 100%)" }}
        />
        <div className="relative z-10 h-full flex items-center container-nex py-40">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0} className="max-w-2xl">
            <span className="eyebrow mb-5 block" style={{ color: "var(--acid-green)" }}>Our Mission</span>
            <h1
              className="font-bold tracking-tight mb-6 leading-tight"
              style={{
                fontFamily: "var(--font-playfair, Georgia, serif)",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                lineHeight: 1.1,
                color: "#FDFCF8",
              }}
            >
              Precision.
              <br />
              Purity.
              <br />
              <em className="italic" style={{ color: "var(--acid-green)" }}>Purpose.</em>
            </h1>
            <p className="text-lg max-w-xl leading-relaxed" style={{ color: "rgba(253,252,248,0.8)" }}>
              Nexphoria was founded on a singular conviction: that research compounds should meet
              the same standards as pharmaceutical drugs. We manufacture to that standard on every
              single batch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission statement — dark pull quote */}
      <section className="py-24" style={{ backgroundColor: "#F5F3F0" }}>
        <div className="container-nex">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="max-w-4xl"
          >
            <p
              className="text-2xl md:text-3xl leading-relaxed"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontWeight: 400, color: "#FDFCF8" }}
            >
              We manufacture exclusively in cGMP-certified facilities, subject every batch to
              independent third-party analytical testing, and provide complete documentation with
              each order.{" "}
              <em className="italic" style={{ color: "var(--acid-green)" }}>No exceptions. No shortcuts.</em>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Precision — editorial split */}
      <section className="relative overflow-hidden" style={{ minHeight: "70vh" }}>
        <div className="grid md:grid-cols-2" style={{ minHeight: "70vh" }}>
          <div className="relative min-h-[45vh] md:min-h-full overflow-hidden">
            <Image
              src="/images/stock/peptide-research.jpg"
              alt="Research laboratory"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div
            className="flex flex-col justify-center px-10 py-20 md:px-16 xl:px-24"
            style={{ backgroundColor: "var(--dark-panel)" }}
          >
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <span className="eyebrow mb-6 block">For Qualified Researchers</span>
              <h2
                className="font-bold tracking-tight mb-7 leading-tight"
                style={{
                  fontFamily: "var(--font-playfair, Georgia, serif)",
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  color: "#FDFCF8",
                }}
              >
                Research Without{" "}
                <em className="italic" style={{ color: "var(--acid-green)" }}>Compromise.</em>
              </h2>
              <p className="text-base leading-relaxed mb-8 max-w-md text-secondary">
                Every Nexphoria compound arrives with full analytical documentation. We believe
                transparency is not optional — it is the foundation of trustworthy science.
              </p>
              <Link href="/science" className="btn-outline-gold">
                Our Testing Methodology <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-28 border-b" id="standards" style={{ borderColor: "var(--dark-border)" }}>
        <div className="container-nex">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mb-14"
          >
            <span className="eyebrow mb-4 block">Core Principles</span>
            <h2
              className="font-bold tracking-tight max-w-2xl"
              style={{
                fontFamily: "var(--font-playfair, Georgia, serif)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                color: "#FDFCF8",
              }}
            >
              What We Stand For
            </h2>
          </motion.div>

          <div
            className="grid md:grid-cols-2 gap-px border"
            style={{ backgroundColor: "var(--dark-border)", borderColor: "var(--dark-border)" }}
          >
            {principles.map((v, i) => (
              <motion.div
                key={v.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.1}
                className="p-8"
                style={{ backgroundColor: "var(--dark-card)" }}
              >
                <div className="w-10 h-10 mb-6 flex items-center justify-center border"
                  style={{ borderColor: "var(--dark-border)" }}>
                  <v.icon className="w-5 h-5 text-secondary" strokeWidth={1.5} />
                </div>
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ fontFamily: "var(--font-playfair, Georgia, serif)", color: "#FDFCF8" }}
                >
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed text-secondary">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder quote */}
      <section className="py-24 border-b" style={{ backgroundColor: "var(--dark-panel)", borderColor: "var(--dark-border)" }}>
        <div className="container-nex">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="max-w-3xl"
          >
            <div className="w-8 h-px mb-8" style={{ backgroundColor: "var(--gold)" }} />
            <blockquote>
              <p
                className="text-2xl md:text-3xl leading-relaxed mb-8"
                style={{
                  fontFamily: "var(--font-playfair, Georgia, serif)",
                  fontWeight: 400,
                  color: "#FDFCF8",
                }}
              >
                &ldquo;We built Nexphoria because we believed researchers deserve the same quality
                standards that pharmaceutical manufacturers apply to clinical drugs. Every compound
                we produce is a commitment to that belief.&rdquo;
              </p>
              <footer className="text-label text-secondary">
                — Nexphoria Founding Team
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Brand story with 05-copy.jpg accent — "Dare to Defy" */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{backgroundImage:"url(/brand/cell-pattern-1.png)",backgroundSize:"400px 400px",backgroundRepeat:"repeat",opacity:0.05}} />
        <div className="container-nex">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            >
              <span className="eyebrow mb-6 block">The Standard</span>
              <h2
                className="font-bold tracking-tight mb-7 leading-tight"
                style={{
                  fontFamily: "var(--font-playfair, Georgia, serif)",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  color: "#FDFCF8",
                }}
              >
                Dare to{" "}
                <em className="italic" style={{ color: "var(--acid-green)" }}>Defy</em>
              </h2>
              <p className="text-base leading-relaxed mb-5 text-secondary">
                The peptide research industry has too long tolerated inconsistency — compounds sold
                without proper analytical verification, documentation that cannot withstand scientific
                scrutiny.
              </p>
              <p className="text-base leading-relaxed mb-10 text-secondary">
                We set a different standard. Every compound, every batch, every order arrives with
                the full analytical and documentary infrastructure of a pharmaceutical product.
              </p>
              <Link href="/products" className="btn-acid">
                Browse Our Catalogue <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 1.04 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden group"
              style={{ aspectRatio: "4/5", borderRadius: "12px", boxShadow: "0 8px 40px rgba(0,0,0,0.12)" }}
            >
              <Image
                src="/images/stock/lab-precision.jpg"
                alt="Dare to Defy — Nexphoria"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality standards grid */}
      <section className="py-24 border-t" style={{ borderColor: "var(--dark-border)" }}>
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
                  style={{ backgroundColor: "#F5F3F0", color: "var(--acid-green)" }}
                >
                  {s.code}
                </div>
                <p className="text-sm leading-relaxed text-secondary">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "#F5F3F0" }}>
        <div className="container-nex flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2
              className="font-bold tracking-tight mb-2"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: "var(--text-h3)", color: "#FDFCF8" }}
            >
              Ready to browse our catalog?
            </h2>
            <p className="text-sm text-secondary">
              Every compound ships with full COA and technical documentation.
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
