"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const methods = [
  {
    id: "hplc",
    code: "HPLC",
    title: "High-Performance Liquid Chromatography",
    subtitle: "Purity Quantification",
    body: [
      "HPLC is the gold standard for peptide purity determination. We employ reversed-phase C18 stationary phase columns with gradient elution using acetonitrile/water mobile phases buffered with 0.1% TFA or formic acid. UV detection at 214 nm (amide bond absorption) and 254 nm (aromatic amino acid absorption) provides compound-specific chromatographic profiles.",
      "Each compound is co-chromatographed against a certified reference standard under identical conditions. Purity is calculated by peak area integration using UV/DAD (diode array detection) data. Retention time matching within ±0.2 min confirms compound identity; peak area purity thresholds are set at ≥98.0% for standard catalog compounds, with ≥99.0% required for COA certification.",
      "Our chromatograms are reviewed by credentialed analytical chemists. Raw data and full chromatograms are retained on file and available upon request with order documentation.",
    ],
    specs: [
      { label: "Column", value: "C18 reversed-phase, 100 Å pore size" },
      { label: "Mobile Phase", value: "ACN/H₂O gradient, 0.1% TFA" },
      { label: "Detection", value: "UV/DAD at 214 nm & 254 nm" },
      { label: "Standard", value: "Certified reference standard comparison" },
      { label: "Threshold", value: "≥99.0% for COA certification" },
    ],
  },
  {
    id: "ms",
    code: "ESI-MS",
    title: "Electrospray Ionization Mass Spectrometry",
    subtitle: "Molecular Identity Confirmation",
    body: [
      "Mass spectrometry provides definitive molecular identity confirmation by measuring the exact mass-to-charge ratio (m/z) of analyte ions. We employ electrospray ionization (ESI), the preferred ionization method for intact peptides due to its soft, low-fragmentation ionization that preserves the complete molecular ion.",
      "Peptides are analyzed in positive ion mode, generating multiply charged ions [M+nH]ⁿ⁺ characteristic of their molecular weight. Theoretical molecular masses are calculated from the peptide sequence and cross-validated against NIST reference databases. Observed masses must match theoretical values within 5 ppm tolerance (high-resolution instruments) or 0.1 Da (unit resolution).",
      "For complex peptides and conjugates, tandem MS/MS fragmentation confirms amino acid sequence through b- and y-ion series analysis. Disulfide bond connectivity in cyclic peptides is verified by differential alkylation experiments.",
    ],
    specs: [
      { label: "Ionization", value: "Electrospray ionization (ESI)" },
      { label: "Mode", value: "Positive ion, [M+nH]ⁿ⁺" },
      { label: "Mass Accuracy", value: "≤5 ppm (HR) / ≤0.1 Da" },
      { label: "Sequencing", value: "MS/MS b-/y-ion series" },
      { label: "Reference", value: "NIST database cross-validation" },
    ],
  },
  {
    id: "cgmp",
    code: "cGMP",
    title: "Current Good Manufacturing Practice",
    subtitle: "Pharmaceutical-Grade Production",
    body: [
      "Our synthesis partners operate under current Good Manufacturing Practice (cGMP) regulations — the same regulatory framework applied to pharmaceutical drug manufacturing. cGMP compliance encompasses facility design, personnel training, documentation control, raw material qualification, process validation, and environmental monitoring.",
      "Solid-phase peptide synthesis (SPPS) is the primary production method, using Fmoc or Boc chemistry depending on compound requirements. Resin loading, coupling efficiency, and deprotection steps are monitored by UV quantification of Fmoc release. Cleavage cocktails are optimized per side chain composition to minimize aspartimide formation, oxidation, and racemization.",
      "Post-synthesis purification uses preparative HPLC with mass-directed fraction collection. Lyophilization produces stable powder with residual moisture below 5%. All manufacturing records are archived and traceable to raw material certificates of analysis.",
    ],
    specs: [
      { label: "Synthesis", value: "SPPS, Fmoc/Boc chemistry" },
      { label: "Purification", value: "Preparative HPLC, mass-directed" },
      { label: "Final Form", value: "Lyophilized powder, <5% moisture" },
      { label: "Facility", value: "cGMP-certified, ISO-compliant" },
      { label: "Records", value: "Full batch records archived" },
    ],
  },
  {
    id: "coa",
    code: "COA",
    title: "Certificate of Analysis",
    subtitle: "Third-Party Documentation",
    body: [
      "Every Nexphoria production lot is analyzed by an accredited, independent third-party laboratory. We deliberately use external analytical partners rather than in-house testing — eliminating the conflict of interest inherent in self-certifying compound quality.",
      "The COA is a legally binding document signed by the analyzing laboratory's principal investigator. It includes: compound name and lot number, HPLC purity result with full chromatogram, mass spectrum with molecular ion assignment, moisture content (Karl Fischer titration), residual solvent analysis (ICH Q3C limits), and physical appearance description.",
      "COAs are issued per production lot — not per shipment or per compound class. If a batch does not meet specification, it is rejected and not sold. COA documents accompany all orders and are available in digital form.",
    ],
    specs: [
      { label: "Testing Party", value: "Independent accredited laboratory" },
      { label: "Includes", value: "HPLC trace, MS spectrum, KF moisture" },
      { label: "Solvents", value: "Per ICH Q3C limits" },
      { label: "Validity", value: "Per production lot" },
      { label: "Access", value: "Provided with all orders" },
    ],
  },
];

const peptideClasses = [
  {
    title: "Tissue Repair Peptides",
    body: "Peptides in this class modulate angiogenesis, growth factor expression, and extracellular matrix synthesis. Key examples include BPC-157 (pentadecapeptide, gastric cytoprotection) and TB-500 (thymosin beta-4 fragment, actin polymerization). Research focuses on connective tissue healing, muscle repair, and gastrointestinal integrity.",
    compounds: ["BPC-157", "TB-500"],
  },
  {
    title: "GH Axis Modulators",
    body: "Growth hormone-related peptides act on the somatotropic axis through GHRHR agonism (GHRH analogs) or GHS-R1a agonism (ghrelin mimetics). CJC-1295 DAC extends GH release duration via albumin conjugation; Ipamorelin provides selective GH secretion without cortisol or prolactin co-secretion.",
    compounds: ["CJC-1295", "Ipamorelin", "Sermorelin"],
  },
  {
    title: "Cognitive Research Peptides",
    body: "CNS-active peptides with established neuroprotective and cognitive-modulating profiles for research applications. Semax (ACTH 4-10 analog) upregulates BDNF and promotes neuroprotection; Selank (tuftsin analog) modulates GABAergic transmission and enkephalinase activity, producing anxiolytic effects without sedation. For qualified research use only.",
    compounds: ["Semax", "Selank"],
  },
  {
    title: "Longevity & Metabolic",
    body: "Epigenetic regulators and metabolic compounds studied in aging and weight management contexts. Epitalon activates telomerase and modulates circadian melatonin rhythms. NAD⁺ is the foundational coenzyme for sirtuin-mediated DNA repair. GLP-1/GIP receptor agonists represent the frontier of metabolic research.",
    compounds: ["Epitalon", "NAD+", "Semaglutide"],
  },
];

const coaFields = [
  { field: "Lot Number", desc: "Unique production identifier. Use this to request raw data files for the specific batch." },
  { field: "HPLC Purity", desc: "Percentage of the stated compound relative to all detected UV-absorbing species. Values ≥99% indicate high-purity material." },
  { field: "Molecular Ion [M+H]⁺", desc: "Observed mass from ESI-MS. Should match theoretical MW ± 5 ppm. Confirms identity, not purity." },
  { field: "Water Content (KF)", desc: "Karl Fischer moisture value. Affects accurate weighing. Factor into solution preparation. Typical: 1–8%." },
  { field: "Residual Solvents", desc: "ICH Q3C Class 1/2/3 solvent limits. Confirms acceptable solvent removal. Typically <100 ppm for Class 2." },
  { field: "Appearance", desc: "Physical description of the lyophilized powder. Deviations from expected color may indicate degradation." },
];

export default function ScienceClient() {
  return (
    <div className="min-h-screen bg-dark">

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: "60vh" }}>
        <Image
          src="/brand/science-hero.jpg"
          alt="Nexphoria analytical science — researcher in lab"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 70%, transparent 100%)" }} />
        <div className="relative z-10 flex items-center container-nex py-40">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0} className="max-w-2xl">
            <span className="eyebrow mb-5 block" style={{ color: "var(--acid-green)" }}>Analytical Science</span>
            <h1
              className="font-bold tracking-tight mb-6 max-w-3xl"
              style={{
                fontFamily: "var(--font-playfair, Georgia, serif)",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                lineHeight: 1.1,
                color: "#FDFCF8",
              }}
            >
              How We{" "}
              <em className="italic" style={{ color: "var(--acid-green)" }}>Verify</em>
              <br />
              Every Compound
            </h1>
            <p className="text-lg max-w-xl leading-relaxed" style={{ color: "rgba(253,252,248,0.8)" }}>
              Every Nexphoria production lot passes a defined battery of analytical tests before
              release. HPLC purity, mass spectrometry identity, moisture analysis, and residual
              solvent testing — documented by independent third-party laboratories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Methods */}
      {methods.map((method, i) => (
        <section
          key={method.id}
          id={method.id}
          className="relative py-20 border-b overflow-hidden"
          style={{
            borderColor: "var(--dark-border)",
            backgroundColor: i % 2 === 1 ? "var(--dark-panel)" : undefined,
          }}
        >
          {/* Molecular pattern background */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: "url(/brand/molecular-pattern.png)",
            backgroundSize: "600px auto",
            backgroundRepeat: "repeat",
            filter: "invert(1)",
            opacity: 0.12
          }} />
          <div className="container-nex relative z-10">
            <div className="grid lg:grid-cols-3 gap-12">
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
              >
                <div
                  className="inline-flex items-center justify-center font-mono text-sm font-medium px-3 py-1.5 mb-4"
                  style={{ backgroundColor: "#1A1A18", color: "var(--acid-green)" }}
                >
                  {method.code}
                </div>
                <h2
                  className="font-bold tracking-tight mb-2"
                  style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: "var(--text-h4)", color: "#FDFCF8" }}
                >
                  {method.title}
                </h2>
                <p className="text-sm mb-8 text-secondary">{method.subtitle}</p>

                <div className="border" style={{ borderColor: "var(--dark-border)" }}>
                  {method.specs.map(({ label, value }) => (
                    <div
                      key={label}
                      className="flex gap-4 p-4 border-b last:border-0"
                      style={{ borderColor: "var(--dark-border)" }}
                    >
                      <span className="text-xs uppercase tracking-wider w-24 flex-shrink-0 pt-0.5 font-medium text-secondary">
                        {label}
                      </span>
                      <span className="text-xs font-mono flex-1" style={{ color: "#FDFCF8" }}>{value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
                className="lg:col-span-2"
              >
                {method.body.map((para, j) => (
                  <p key={j} className="leading-relaxed mb-5 last:mb-0 text-secondary">
                    {para}
                  </p>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Peptide classes — dark section */}
      <section className="relative py-24 text-ceramic border-b border-white/[0.06] overflow-hidden" style={{ backgroundColor: "#1A1A18" }}>
        {/* Cell pattern background */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "url(/brand/cell-pattern-2.png)",
          backgroundSize: "500px auto",
          backgroundRepeat: "repeat",
          opacity: 0.08
        }} />
        <div className="container-nex relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mb-14"
          >
            <span className="eyebrow mb-4 block">Compound Classes</span>
            <h2
              className="font-bold tracking-tight text-ceramic max-w-2xl"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
            >
              Understanding Peptide{" "}
              <em className="italic" style={{ color: "var(--acid-green)" }}>Research Areas</em>
            </h2>
          </motion.div>

          <div
            className="grid md:grid-cols-2 gap-px border"
            style={{ backgroundColor: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.06)" }}
          >
            {peptideClasses.map((cls, i) => (
              <motion.div
                key={cls.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.1}
                className="p-8"
                style={{ backgroundColor: "#1A1A18" }}
              >
                <div className="flex flex-wrap gap-2 mb-5">
                  {cls.compounds.map((c) => (
                    <span
                      key={c}
                      className="inline-flex items-center px-2.5 py-1 text-xs font-mono border"
                      style={{ borderColor: "rgba(201,162,75,0.35)", color: "var(--acid-green)" }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <h3
                  className="text-lg font-bold text-ceramic mb-3"
                  style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
                >
                  {cls.title}
                </h3>
                <p className="text-sm leading-relaxed text-secondary">{cls.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COA guide */}
      <section id="coa" className="py-24 border-b" style={{ borderColor: "var(--dark-border)" }}>
        <div className="container-nex">
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <span className="eyebrow mb-4 block">Documentation</span>
              <h2
                className="font-bold tracking-tight mb-4"
                style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: "var(--text-h3)", color: "#FDFCF8" }}
              >
                Reading a COA
              </h2>
              <p className="text-sm leading-relaxed text-secondary">
                A Certificate of Analysis is the primary quality document for research compounds.
                Understanding each field ensures you can verify the compound meets your research
                specifications.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="grid sm:grid-cols-2 gap-4">
                {coaFields.map((item) => (
                  <div key={item.field} className="border p-5" style={{ borderColor: "var(--dark-border)" }}>
                    <div
                      className="font-mono text-xs font-semibold mb-2"
                      style={{ color: "#FDFCF8" }}
                    >
                      {item.field}
                    </div>
                    <p className="text-xs leading-relaxed text-secondary">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lab equipment banner */}
      <section className="relative overflow-hidden" style={{ height: "55vh", minHeight: "380px" }}>
        <Image
          src="/images/stock/pharma-production.jpg"
          alt="Laboratory equipment — HPLC and analytical instruments"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)" }}
        />
        <div className="relative z-10 h-full flex items-center container-nex">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="max-w-lg"
          >
            <p className="eyebrow mb-4" style={{ color: "var(--acid-green)" }}>Precision Equipment</p>
            <h2
              className="font-bold tracking-tight leading-tight mb-5"
              style={{
                fontFamily: "var(--font-playfair, Georgia, serif)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "#FDFCF8",
              }}
            >
              Instruments You Can{" "}
              <em className="italic" style={{ color: "var(--acid-green)" }}>Trust</em>
            </h2>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: "rgba(253,252,248,0.75)" }}>
              The same analytical instruments used in pharmaceutical drug development verify every
              Nexphoria production lot before release.
            </p>
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
