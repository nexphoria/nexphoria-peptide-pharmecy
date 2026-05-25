"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Clock } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

const inquiryTypes = [
  "Compound Inquiry",
  "Custom Synthesis Request",
  "Bulk Order",
  "COA / MSDS Request",
  "Documentation",
  "Other",
];

export default function ContactClient() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution: "",
    inquiryType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        throw new Error("Failed");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-cream text-near-black">
      {/* Hero */}
      <section className="relative pt-36 pb-20">
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
                Get In Touch
              </span>
            </div>
            <h1
              className="text-6xl md:text-7xl font-medium leading-[0.9] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Contact
            </h1>
            <p className="text-xl text-charcoal max-w-xl leading-relaxed">
              Compound inquiries, custom synthesis requests, bulk orders,
              and documentation questions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-16">
            {/* Info column */}
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3
                  className="text-sm uppercase tracking-widest text-stone mb-6 font-medium"
                >
                  Contact Details
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-4 h-4 text-brand-primary mt-0.5 shrink-0" strokeWidth={1.5} />
                    <div>
                      <div className="text-xs uppercase tracking-wider text-stone/60 mb-1">Email</div>
                      <a
                        href="mailto:research@nexphoria.com"
                        className="text-sm hover:text-brand-primary transition-colors"
                      >
                        research@nexphoria.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-4 h-4 text-brand-primary mt-0.5 shrink-0" strokeWidth={1.5} />
                    <div>
                      <div className="text-xs uppercase tracking-wider text-stone/60 mb-1">Response Time</div>
                      <p className="text-sm">1–2 business days</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-4 h-4 text-brand-primary mt-0.5 shrink-0" strokeWidth={1.5} />
                    <div>
                      <div className="text-xs uppercase tracking-wider text-stone/60 mb-1">Shipping</div>
                      <p className="text-sm">United States only<br />See shipping policy for details</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-6 border border-stone/20 bg-white"
              >
                <div className="text-xs uppercase tracking-widest text-stone/60 mb-4 font-medium">
                  Research Verification
                </div>
                <p className="text-sm text-charcoal leading-relaxed">
                  All orders require verification of researcher or institutional
                  credentials. Please include your institution or license
                  information when submitting an inquiry.
                </p>
              </motion.div>
            </div>

            {/* Form */}
            <div className="md:col-span-2">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-16 text-center border border-brand-primary/30 bg-brand-primary/5"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center mx-auto mb-6">
                    <ArrowRight className="w-5 h-5 text-brand-primary rotate-[-45deg]" />
                  </div>
                  <h3
                    className="text-2xl font-medium mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Inquiry Received
                  </h3>
                  <p className="text-charcoal text-sm max-w-sm mx-auto">
                    We'll review your request and respond within 1–2 business
                    days. Research verification may be required prior to order
                    processing.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-stone/70 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-stone/20 bg-white text-near-black text-sm outline-none focus:border-near-black/40 transition-colors"
                        placeholder="Dr. Jane Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-stone/70 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-stone/20 bg-white text-near-black text-sm outline-none focus:border-near-black/40 transition-colors"
                        placeholder="researcher@university.edu"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-stone/70 mb-2">
                        Institution / Organization
                      </label>
                      <input
                        type="text"
                        name="institution"
                        value={formData.institution}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-stone/20 bg-white text-near-black text-sm outline-none focus:border-near-black/40 transition-colors"
                        placeholder="University / Lab / Company"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-stone/70 mb-2">
                        Inquiry Type
                      </label>
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-stone/20 bg-white text-near-black text-sm outline-none focus:border-near-black/40 transition-colors appearance-none"
                      >
                        <option value="">Select type...</option>
                        {inquiryTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone/70 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-stone/20 bg-white text-near-black text-sm outline-none focus:border-near-black/40 transition-colors resize-none"
                      placeholder="Describe your compound needs, quantities, required specifications, or any questions..."
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-600">
                      Something went wrong. Please try again or email us directly at research@nexphoria.com.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group flex items-center gap-2 px-8 py-4 bg-near-black text-cream font-medium rounded-sm hover:bg-charcoal transition-colors disabled:opacity-60"
                  >
                    {status === "loading" ? "Sending..." : "Submit Inquiry"}
                    {status !== "loading" && (
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    )}
                  </button>

                  <p className="text-xs text-stone/50">
                    By submitting, you confirm you are a qualified researcher
                    or licensed professional. See our{" "}
                    <a href="/legal/disclaimer" className="underline hover:text-charcoal">
                      disclaimer
                    </a>{" "}
                    for terms.
                  </p>
                </motion.form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
