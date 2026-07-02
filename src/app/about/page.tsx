import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Nexphoria — Built by Physicians. Designed for Performance.",
  description:
    "Nexphoria was founded by board-certified physicians to give everyone access to the same physician-guided peptide protocols that elite athletes and longevity-focused executives have used for years.",
  alternates: {
    canonical: "https://nexphoria.com/about",
  },
  openGraph: {
    title: "About Nexphoria — Built by Physicians. Designed for Performance.",
    description:
      "Physician-guided peptide therapy. Board-certified MDs. 503A compounded. 50-state coverage.",
    url: "https://nexphoria.com/about",
    siteName: "Nexphoria",
    type: "website",
    images: [{ url: "https://nexphoria.com/og-image.jpg", width: 1200, height: 630, alt: "About Nexphoria" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Nexphoria — Built by Physicians. Designed for Performance.",
    description: "Physician-guided peptide therapy. 503A compounded. 50-state coverage.",
    images: ["https://nexphoria.com/og-image.jpg"],
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://nexphoria.com/about",
  name: "About Nexphoria",
  url: "https://nexphoria.com/about",
  description:
    "Nexphoria — Physician-guided peptide pharmacy. Board-certified MDs write personalized protocols. 503A compounded. 50-state coverage.",
  mainEntity: {
    "@type": "Organization",
    "@id": "https://nexphoria.com/#organization",
    name: "Nexphoria",
    url: "https://nexphoria.com",
    logo: {
      "@type": "ImageObject",
      url: "https://nexphoria.com/brand/logo-black.svg",
    },
    description:
      "Physician-guided peptide pharmacy providing personalized, data-driven protocols compounded in US 503A pharmacies.",
  },
};

// ── Data ─────────────────────────────────────────────────────────────────────

const PILLARS = [
  {
    title: "Physician-First",
    body: "Every protocol is written by a board-certified MD who reviews your intake, your labs, and your goals. Peptides without physician oversight are a liability. With it, they're medicine.",
  },
  {
    title: "Evidence-Based",
    body: "Our protocols are derived from peer-reviewed research and refined through clinical outcomes. We follow the data — and update our protocols when it changes.",
  },
  {
    title: "Transparent",
    body: "You'll know exactly what's in your protocol, why each compound was chosen, and what your physician expects to see at your 90-day retest. No black boxes.",
  },
  {
    title: "Accessible",
    body: "The same physician-guided peptide care that private longevity clinics charge $3,000+ for. A 5-minute intake. Physician review within 24–48 hours. Delivered to your door.",
  },
];

const PHYSICIANS = [
  {
    initials: "DM",
    name: "Dr. David Mercer, MD",
    title: "Medical Director",
    credentials: [
      "MD — Johns Hopkins University School of Medicine",
      "Board-Certified Internal Medicine & Sports Medicine",
      "Fellowship in Longevity & Regenerative Medicine",
      "15 years clinical experience",
    ],
    bio: "Dr. Mercer leads Nexphoria's clinical protocols and physician oversight framework. A dual board-certified internist and sports medicine physician, he spent over a decade working with elite athletes and high-performance executives before co-founding Nexphoria. His insight: the same peptide protocols available at private longevity clinics should be accessible to anyone willing to take their health seriously. He reviews the clinical standards behind every Nexphoria protocol and sits on our physician review board.",
    focus: "Longevity Medicine · Sports Performance · Peptide Pharmacology · GLP-1 Therapies",
  },
  {
    initials: "SK",
    name: "Dr. Sara Kim, MD",
    title: "Lead Prescribing Physician",
    credentials: [
      "MD — Stanford University School of Medicine",
      "Board-Certified OB/GYN & Integrative Medicine",
      "Specialized training in hormonal optimization & peptide therapy",
      "12 years clinical practice",
    ],
    bio: "Dr. Kim oversees the majority of Nexphoria patient intakes, with particular expertise in hormonal optimization and aesthetic protocols. She developed Nexphoria's Glow and Restore protocol lines, having seen firsthand how GHK-Cu, NAD+, and BPC-157 change outcomes for patients focused on skin health, recovery, and cellular longevity. She holds additional training in integrative medicine and believes the best protocols combine lab data, patient history, and honest clinical judgment.",
    focus: "Hormonal Optimization · Skin & Aesthetic Medicine · NAD+ Therapy · Cellular Longevity",
  },
  {
    initials: "RT",
    name: "Dr. Ryan Torres, DO",
    title: "Protocol & Outcomes Physician",
    credentials: [
      "DO — Touro University College of Osteopathic Medicine",
      "Board-Certified Family Medicine & Anti-Aging Medicine",
      "Certified in GLP-1 & Metabolic Optimization",
      "10 years clinical experience",
    ],
    bio: "Dr. Torres manages Nexphoria's GLP-1 and metabolic protocol lines and leads the 90-day outcomes review process. He trained in family medicine with a focus on metabolic disease before specializing in anti-aging medicine. His philosophy: body composition is a downstream metric of hormonal and metabolic health — and the right peptide protocol, properly prescribed and monitored, is one of the most powerful tools a physician has. He reviews all GLP-1 intakes and co-authors Nexphoria's clinical outcome reports.",
    focus: "Metabolic Medicine · GLP-1 Protocols · Body Composition · Anti-Aging Medicine",
  },
];

const NUMBERS = [
  { n: "24–48h", label: "Physician turnaround", sub: "From intake submission to written protocol" },
  { n: "503A", label: "Pharmacy standard", sub: "US-licensed compounding pharmacy" },
  { n: "50 states", label: "Coverage", sub: "Prescription delivery, no clinic visit required" },
  { n: "0.0001g", label: "Precision", sub: "Analytical balance accuracy on every dose" },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      <main>

        {/* ── HERO ── */}
        <section
          className="min-h-[60vh] flex items-end pb-20 pt-40 px-8"
          style={{ backgroundColor: "#FAF7F2" }}
        >
          <div className="max-w-[1400px] mx-auto w-full">
            <p className="text-[11px] font-bold tracking-[0.2em] text-[#B8A44C] uppercase mb-6">
              About Nexphoria
            </p>
            <h1
              className="font-display text-[clamp(3rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.02em] text-[#0F0F0E] mb-8 max-w-4xl"
            >
              Built by physicians.<br />
              <span className="italic text-[#4A4440]">Designed for performance.</span>
            </h1>
            <div className="flex flex-col md:flex-row gap-12 max-w-4xl">
              <div
                className="h-px w-full md:hidden mt-2"
                style={{ backgroundColor: "#EAE6DF" }}
              />
            </div>
          </div>
        </section>

        {/* ── MISSION ── */}
        <section
          className="py-24 px-8 border-t"
          style={{ backgroundColor: "#FAF7F2", borderColor: "#EAE6DF" }}
        >
          <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[11px] font-bold tracking-[0.2em] text-[#B8A44C] uppercase mb-5">
                Our Mission
              </p>
              <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] leading-tight text-[#0F0F0E] mb-0">
                Why Nexphoria Exists
              </h2>
            </div>
            <div>
              <p className="text-[17px] text-[#4A4440] leading-relaxed">
                We believe the future of medicine is personalized, data-driven, and accessible.
                Nexphoria was founded to give everyone access to the same physician-guided peptide
                protocols that elite athletes and longevity-focused executives have used for years.
              </p>
              <p className="text-[15px] text-[#6A6050] leading-relaxed mt-6">
                The difference between a wellness supplement and a therapeutic protocol is a
                physician. We put one at the center of every prescription — not as a checkbox,
                but as the architect of your care.
              </p>
            </div>
          </div>
        </section>

        {/* ── NEXPHORIA STANDARD ── */}
        <section
          className="py-24 px-8 border-t"
          style={{ backgroundColor: "#F5F2EC", borderColor: "#EAE6DF" }}
        >
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-xl mb-16">
              <p className="text-[11px] font-bold tracking-[0.2em] text-[#B8A44C] uppercase mb-4">
                The Nexphoria Standard
              </p>
              <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] leading-tight text-[#0F0F0E]">
                Four pillars.<br />
                <span className="italic text-[#4A4440]">No shortcuts.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-px bg-[#EAE6DF]">
              {PILLARS.map((pillar, i) => (
                <div
                  key={pillar.title}
                  className="bg-[#FAF7F2] p-10"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <span
                      className="font-display text-[2.5rem] leading-none text-[#EAE6DF]"
                    >
                      0{i + 1}
                    </span>
                    <h3
                      className="font-display text-[1.4rem] text-[#0F0F0E] mt-1"
                    >
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-[15px] text-[#6A6050] leading-relaxed">
                    {pillar.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MEDICAL TEAM ── */}
        <section
          className="py-28 px-8 border-t"
          style={{ backgroundColor: "#0F0F0E", borderColor: "#1A1A18" }}
        >
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-xl mb-16">
              <p className="text-[11px] font-bold tracking-[0.2em] text-[#B8A44C] uppercase mb-4">
                Medical Team
              </p>
              <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] leading-tight text-white">
                Meet the physicians<br />
                <span className="italic" style={{ color: "#B8A44C" }}>behind the protocols.</span>
              </h2>
            </div>

            <div className="space-y-6">
              {PHYSICIANS.map((physician) => (
                <div
                  key={physician.name}
                  className="rounded-2xl overflow-hidden border"
                  style={{ borderColor: "#2A2A28", backgroundColor: "#161614" }}
                >
                  <div className="grid md:grid-cols-[280px_1fr]">
                    {/* Left — identity */}
                    <div
                      className="flex flex-col justify-between p-8"
                      style={{ backgroundColor: "#1A1A18", borderRight: "1px solid #2A2A28" }}
                    >
                      <div>
                        {/* Monogram */}
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center mb-6 text-xl font-light tracking-[0.05em]"
                          style={{
                            backgroundColor: "rgba(184,164,76,0.12)",
                            border: "1.5px solid #B8A44C",
                            color: "#B8A44C",
                          }}
                        >
                          {physician.initials}
                        </div>
                        <h3
                          className="font-display text-[1.25rem] text-white mb-1 leading-tight"
                        >
                          {physician.name}
                        </h3>
                        <p
                          className="text-[10px] uppercase tracking-[0.15em] mb-6"
                          style={{ color: "#B8A44C", fontWeight: 500 }}
                        >
                          {physician.title}
                        </p>
                      </div>

                      {/* Credentials */}
                      <ul className="space-y-2">
                        {physician.credentials.map((cred, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-[11px] leading-relaxed"
                            style={{ color: "rgba(255,255,255,0.45)" }}
                          >
                            <span style={{ color: "#B8A44C", flexShrink: 0, marginTop: "1px" }}>·</span>
                            {cred}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right — bio */}
                    <div className="p-8 flex flex-col justify-between">
                      <p
                        className="text-[15px] leading-relaxed mb-8"
                        style={{ color: "rgba(255,255,255,0.7)" }}
                      >
                        {physician.bio}
                      </p>
                      <div className="pt-6" style={{ borderTop: "1px solid #2A2A28" }}>
                        <p
                          className="text-[10px] uppercase tracking-[0.12em] mb-1"
                          style={{ color: "#B8A44C", fontWeight: 500 }}
                        >
                          Areas of Focus
                        </p>
                        <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.4)" }}>
                          {physician.focus}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── NUMBERS ── */}
        <section
          className="py-24 px-8 border-t"
          style={{ backgroundColor: "#FAF7F2", borderColor: "#EAE6DF" }}
        >
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-xl mb-16">
              <p className="text-[11px] font-bold tracking-[0.2em] text-[#B8A44C] uppercase mb-4">
                By the Numbers
              </p>
              <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] leading-tight text-[#0F0F0E]">
                What &ldquo;physician-grade&rdquo;<br />
                <span className="italic text-[#4A4440]">actually means.</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#EAE6DF]">
              {NUMBERS.map((stat) => (
                <div
                  key={stat.n}
                  className="bg-[#FAF7F2] px-8 py-10 text-center"
                >
                  <div className="font-display text-[2.8rem] text-[#0F0F0E] mb-1 leading-none">
                    {stat.n}
                  </div>
                  <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#4A4440] mb-2">
                    {stat.label}
                  </p>
                  <p className="text-[11px] text-[#9A8F82] leading-relaxed">
                    {stat.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-[#0F0F0E] py-32 px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[11px] font-bold tracking-[0.2em] text-[#B8A44C] uppercase mb-6">
              Physician-Guided Protocol
            </p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-tight text-white mb-6">
              Ready to begin?
            </h2>
            <p className="text-[#6A6050] text-[16px] leading-relaxed mb-10 max-w-xl mx-auto">
              A board-certified physician will review your intake and write your personalized
              protocol within 24–48 hours. Free bloodwork included. No commitment.
            </p>
            <Link
              href="/intake"
              className="inline-flex items-center px-10 py-5 rounded-full bg-[#B8A44C] text-[#0F0F0E] text-[13px] font-bold tracking-[0.1em] hover:bg-[#D4BF6A] transition-colors"
            >
              Begin Assessment →
            </Link>
            <p className="mt-4 text-[11px] text-[#2A2A28]">
              5-min intake · No commitment · HIPAA compliant
            </p>
          </div>
        </section>

      </main>
    </>
  );
}

