"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Mail, Phone, Calendar } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const services = [
  {
    title: "White-Label Manufacturing",
    description: "Private-label peptide compounds manufactured to your specifications under our quality standards.",
    features: [
      "Custom formulation development",
      "Your brand packaging and labeling",
      "Full batch documentation",
      "Flexible order quantities"
    ]
  },
  {
    title: "Custom Packaging Solutions",
    description: "Tailored packaging options for distributors and research institutions.",
    features: [
      "Branded vial labels and caps",
      "Custom documentation packages",
      "Cold-chain shipping materials",
      "Lot-specific COA inclusion"
    ]
  },
  {
    title: "Distributor Program",
    description: "Qualified distributors gain access to wholesale pricing and dedicated account management.",
    features: [
      "Volume pricing tiers",
      "Dedicated account manager",
      "Priority production scheduling",
      "Marketing support materials"
    ]
  }
];

const qualifications = [
  "Research institution with valid credentials",
  "Licensed pharmaceutical distributor",
  "Qualified clinical research organization",
  "GMP-certified manufacturing facility"
];

export default function WholesalePage() {
  return (
    <div className="bg-dark text-primary min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 z-10" style={{
          background: "linear-gradient(135deg, #0A0A08 0%, #1A1A18 40%, #111110 70%, #0D0D0C 100%)"
        }} />

        <div className="container-nex relative z-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-4xl"
          >
            <span className="eyebrow mb-6 block">B2B Solutions</span>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-primary"
              style={{ fontFamily: "var(--font-display)" }}>
              White-Label &{" "}
              <em className="italic text-acid-green">Custom Packaging</em>
            </h1>
            <p className="text-xl text-secondary leading-relaxed mb-8 max-w-2xl">
              We produce private-label peptide compounds for qualified distributors, research
              institutions, and pharmaceutical partners. Same quality standards, your brand.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:wholesale@nexphoria.com"
                className="btn-acid"
              >
                <Mail className="w-4 h-4" />
                Get Wholesale Pricing
              </a>
              <a
                href="#qualifications"
                className="btn-outline-gold"
              >
                View Requirements
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24" style={{ backgroundColor: "#111110" }}>
        <div className="container-nex">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-bold tracking-tight mb-4 text-primary"
              style={{ fontFamily: "var(--font-display)" }}>
              Wholesale Solutions
            </h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Comprehensive B2B services for qualified partners
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={index * 0.1}
                className="p-8 border rounded-lg"
                style={{
                  borderColor: "var(--dark-border)",
                  backgroundColor: "var(--dark-card)"
                }}
              >
                <h3 className="text-xl font-bold mb-4 text-primary"
                  style={{ fontFamily: "var(--font-display)" }}>
                  {service.title}
                </h3>
                <p className="text-secondary mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-acid-green flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section id="qualifications" className="py-24" style={{ backgroundColor: "#0D0D0C" }}>
        <div className="container-nex">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-4xl font-bold tracking-tight mb-6 text-primary"
                style={{ fontFamily: "var(--font-display)" }}>
                Partnership Qualifications
              </h2>
              <p className="text-secondary mb-8 leading-relaxed">
                We work exclusively with qualified organizations that meet our
                standards for research ethics and regulatory compliance.
              </p>

              <ul className="space-y-4 mb-8">
                {qualifications.map((qualification, index) => (
                  <motion.li
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={index * 0.1}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-acid-green flex-shrink-0 mt-0.5" />
                    <span className="text-secondary">{qualification}</span>
                  </motion.li>
                ))}
              </ul>

              <a
                href="mailto:wholesale@nexphoria.com"
                className="btn-acid"
              >
                Apply for Partnership
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0.2}
              className="p-8 border rounded-lg"
              style={{
                borderColor: "var(--dark-border)",
                backgroundColor: "var(--dark-card)"
              }}
            >
              <h3 className="text-xl font-bold mb-6 text-primary"
                style={{ fontFamily: "var(--font-display)" }}>
                Get Started
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-acid-green flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-primary mb-1">Email</div>
                    <a href="mailto:wholesale@nexphoria.com"
                      className="text-sm text-secondary hover:text-acid-green transition-colors">
                      wholesale@nexphoria.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-acid-green flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-primary mb-1">Phone</div>
                    <a href="tel:+1-555-NEXPHORIA"
                      className="text-sm text-secondary hover:text-acid-green transition-colors">
                      +1 (555) NEX-PHORIA
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Calendar className="w-5 h-5 text-acid-green flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-primary mb-1">Response Time</div>
                    <span className="text-sm text-secondary">
                      Within 24 hours for qualified inquiries
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center" style={{ backgroundColor: "#111110" }}>
        <div className="container-nex">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold tracking-tight mb-6 text-primary"
              style={{ fontFamily: "var(--font-display)" }}>
              Ready to Partner?
            </h2>
            <p className="text-secondary mb-8 leading-relaxed">
              Join our network of qualified distributors and research partners.
              Contact us to discuss your specific requirements.
            </p>
            <a
              href="mailto:wholesale@nexphoria.com"
              className="btn-acid"
            >
              Start Wholesale Application
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}