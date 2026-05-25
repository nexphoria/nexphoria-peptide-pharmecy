"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const researchApplications = [
  {
    title: "Receptor Binding Studies",
    description:
      "Peptide compounds are widely used to investigate receptor-ligand interactions, providing mechanistic data on binding affinities, selectivity profiles, and signal transduction pathways.",
  },
  {
    title: "Cell Signaling Research",
    description:
      "Short peptide sequences serve as pharmacological tools to probe intracellular signaling cascades, including kinase activation, second messenger systems, and transcription factor modulation.",
  },
  {
    title: "Pharmacokinetic Studies",
    description:
      "Absorption, distribution, metabolism, and excretion studies utilize defined-purity peptide compounds to establish pharmacokinetic parameters under controlled in vitro and in vivo conditions.",
  },
  {
    title: "Structural Biology",
    description:
      "X-ray crystallography, cryo-EM, and NMR structural studies require compounds of defined sequence and high analytical purity to produce interpretable structural data.",
  },
];

const analyticalMethods = [
  {
    code: "HPLC",
    name: "High-Performance Liquid Chromatography",
    detail:
      "Reverse-phase HPLC with UV detection at 214 nm and 254 nm provides quantitative purity assessment. Each lot is analyzed against verified reference standards. Results are expressed as area percent purity.",
    cite: "[1]",
  },
  {
    code: "MS",
    name: "Mass Spectrometry",
    detail:
      "Electrospray ionization mass spectrometry (ESI-MS) confirms molecular identity via accurate mass determination. Expected versus observed [M+H]⁺ ions are compared against calculated values with ≤5 ppm mass accuracy.",
    cite: "[2]",
  },
  {
    code: "NMR",
    name: "Nuclear Magnetic Resonance",
    detail:
      "¹H-NMR spectroscopy provides structural confirmation of compound identity and detects structural isomers or degradation products not readily identifiable by chromatographic methods alone.",
    cite: "[3]",
  },
];

const references = [
  "[1] ICH Harmonised Guideline Q2(R1): Validation of Analytical Procedures. International Council for Harmonisation, 2005.",
  "[2] Bruni R, et al. 'Mass spectrometric characterization of synthetic peptides.' J. Am. Soc. Mass Spectrom. 2012.",
  "[3] Claridge TDW. High-Resolution NMR Techniques in Organic Chemistry. 3rd ed. Elsevier, 2016.",
  "[4] USP <1058> Analytical Instrument Qualification. United States Pharmacopeia.",
  "[5] FDA Guidance for Industry: cGMP for Phase 1 Investigational Drugs. 2008.",
];

export default function ScienceClient() {
  return (
    <div className="bg-cream text-near-black">
      {/* Hero */}
      <section className="relative pt-36 pb-24">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "url(/brand/chemical-pattern.svg)",
            backgroundSize: "500px",
            backgroundRepeat: "repeat",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-10 h-[2px] bg-brand-primary" />
              <span className="text-xs uppercase tracking-[0.2em] text-charcoal font-medium">
                Scientific Background
              </span>
            </div>
            <h1
              className="text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.9] tracking-tight mb-8 max-w-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The Science
              <br />
              <span className="text-stone">of Peptides</span>
            </h1>
            <p className="text-xl text-charcoal max-w-2xl leading-relaxed">
              An overview of peptide biochemistry, analytical characterization
              methods, and the quality standards that govern research compound
              manufacture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What are peptides */}
      <section className="py-24 bg-near-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="w-10 h-[2px] bg-brand-primary" />
                <span className="text-xs uppercase tracking-[0.2em] text-brand-primary font-medium">
                  Fundamentals
                </span>
              </div>
              <h2
                className="text-4xl md:text-5xl font-medium text-white mb-8 leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                What Are Peptides?
              </h2>
              <p className="text-stone leading-relaxed mb-6">
                Peptides are short chains of amino acids — the molecular building
                blocks of proteins. Ranging from 2 to 50 amino acid residues,
                peptides occupy a unique space in biochemistry: too small to be
                proteins, yet large enough to exhibit specific biological
                activities through receptor binding and cellular signaling
                pathways.
              </p>
              <p className="text-stone leading-relaxed mb-6">
                The sequence of amino acids within a peptide chain — its primary
                structure — determines its three-dimensional conformation and,
                consequently, its pharmacological properties. Minor sequence
                modifications can produce dramatic changes in binding selectivity
                and biological activity.
              </p>
              <p className="text-stone leading-relaxed">
                Solid-phase peptide synthesis (SPPS), developed by Merrifield
                (Nobel Prize, 1984), allows the production of defined-sequence
                peptides with high purity and reproducibility — the foundation
                of modern research-grade peptide manufacture.
              </p>
            </motion.div>

            {/* Data panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="border border-white/10 p-8"
            >
              <div className="text-xs uppercase tracking-widest text-brand-primary mb-6 font-medium">
                Key Properties
              </div>
              <div className="space-y-6">
                {[
                  { label: "Chain Length", value: "2–50 amino acid residues" },
                  { label: "Molecular Weight", value: "200–6,000 Da (typical)" },
                  { label: "Synthesis Method", value: "Solid-Phase Peptide Synthesis (SPPS)" },
                  { label: "Characterization", value: "HPLC, MS, NMR" },
                  { label: "Purity Standard", value: "≥95–99% by HPLC area" },
                  { label: "Storage", value: "Lyophilized, −20°C to −80°C" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start justify-between gap-4 py-3 border-b border-white/10 last:border-0">
                    <span className="text-xs uppercase tracking-wider text-stone/70">
                      {item.label}
                    </span>
                    <span className="text-sm text-white font-mono text-right">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research applications */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-brand-primary" />
              <span className="text-xs uppercase tracking-[0.2em] text-charcoal font-medium">
                Research Applications
              </span>
            </div>
            <h2
              className="text-5xl md:text-6xl font-medium leading-tight max-w-2xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              How Peptides Are Used in Research
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8">
            {researchApplications.map((app, i) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 border border-stone/20 bg-white"
              >
                <div className="text-xs font-mono text-brand-primary mb-4 uppercase tracking-wider">
                  Application {String(i + 1).padStart(2, "0")}
                </div>
                <h3
                  className="text-xl font-medium mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {app.title}
                </h3>
                <p className="text-sm text-charcoal leading-relaxed">
                  {app.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytical methods */}
      <section className="py-32 bg-near-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-brand-primary" />
              <span className="text-xs uppercase tracking-[0.2em] text-brand-primary font-medium">
                Analytical Methods
              </span>
            </div>
            <h2
              className="text-5xl md:text-6xl font-medium text-white leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              How We Verify Purity
            </h2>
          </motion.div>

          <div className="space-y-8">
            {analyticalMethods.map((method, i) => (
              <motion.div
                key={method.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="border border-white/10 p-8 grid md:grid-cols-4 gap-6 items-start"
              >
                <div>
                  <div className="text-3xl font-medium text-brand-primary font-mono mb-1">
                    {method.code}
                  </div>
                  <div className="text-xs text-stone/70 uppercase tracking-wider">
                    {method.name}
                  </div>
                </div>
                <div className="md:col-span-3">
                  <p className="text-stone leading-relaxed">
                    {method.detail}{" "}
                    <span className="text-brand-primary/60 text-xs font-mono">
                      {method.cite}
                    </span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* cGMP explained */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="w-10 h-[2px] bg-brand-primary" />
                <span className="text-xs uppercase tracking-[0.2em] text-charcoal font-medium">
                  Manufacturing Standards
                </span>
              </div>
              <h2
                className="text-4xl md:text-5xl font-medium leading-tight mb-8"
                style={{ fontFamily: "var(--font-display)" }}
              >
                What cGMP Means
              </h2>
              <p className="text-charcoal leading-relaxed mb-6">
                Current Good Manufacturing Practice (cGMP) regulations are
                enforced by the FDA and equivalent regulatory bodies worldwide.
                They establish minimum requirements for the methods, facilities,
                and controls used in manufacturing, processing, and packing of
                drug products.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                For research compounds, adherence to cGMP principles — even
                absent a regulatory requirement — provides systematic assurance
                that quality is built into every step of the synthesis and
                purification process, rather than tested in at the end.
              </p>
              <p className="text-charcoal leading-relaxed">
                Nexphoria holds its manufacturing partners to cGMP-aligned
                standards as a matter of policy. Facility audits, batch records,
                and analytical documentation are maintained and available upon
                request.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                { title: "Facility Controls", desc: "Controlled environments, HVAC, cleanroom classifications, contamination prevention protocols." },
                { title: "Raw Material Testing", desc: "Incoming amino acid reagents tested for identity and purity before use in synthesis." },
                { title: "In-Process Controls", desc: "Monitoring at defined synthesis checkpoints to detect deviations before final product." },
                { title: "Finished Product Testing", desc: "HPLC purity, MS identity confirmation, and NMR structural verification on every lot." },
                { title: "Batch Records", desc: "Complete documentation of synthesis, purification, and testing maintained per lot." },
                { title: "CoA Issuance", desc: "Certificate of Analysis issued only upon passing all acceptance criteria." },
              ].map((item, i) => (
                <div key={item.title} className="flex gap-4 p-5 border border-stone/20 bg-white">
                  <div className="text-xs font-mono text-brand-primary mt-0.5 whitespace-nowrap">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-1">{item.title}</div>
                    <div className="text-xs text-stone leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* References */}
      <section className="py-16 bg-white border-t border-stone/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h3
            className="text-sm uppercase tracking-widest text-stone mb-6 font-medium"
          >
            References
          </h3>
          <ol className="space-y-2">
            {references.map((ref, i) => (
              <li key={i} className="text-xs text-stone/70 leading-relaxed font-mono">
                {ref}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-near-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2
              className="text-3xl md:text-4xl font-medium text-white mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Browse our compound catalog
            </h2>
            <p className="text-stone text-sm">Full CoA and MSDS available for each lot.</p>
          </div>
          <Link
            href="/products"
            className="group flex items-center gap-2 px-8 py-4 bg-brand-primary text-near-black font-medium rounded-sm hover:bg-brand-primary/90 transition-colors whitespace-nowrap"
          >
            View Catalog
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
