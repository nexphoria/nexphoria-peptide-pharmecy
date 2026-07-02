// Server Component — no 'use client'

export default function HomePage() {
  const protocols = [
    {
      image: "https://d8j0ntlcm91z4.cloudfront.net/user_3Ft13W9B0KpsVCGoTUaXE6wshlh/hf_20260701_235305_87c698c0-5514-4d95-9a3e-77506448d97a.png",
      category: "PERFORMANCE",
      name: "Wolverine",
      tagline: "Accelerated recovery & lean mass retention",
      href: "/protocols/wolverine",
    },
    {
      image: "https://d8j0ntlcm91z4.cloudfront.net/user_3Ft13W9B0KpsVCGoTUaXE6wshlh/hf_20260701_235305_8ef9c39b-f75c-4da8-98f1-2e1f6b3c6468.png",
      category: "SKIN",
      name: "Glow",
      tagline: "Collagen synthesis & cellular renewal",
      href: "/protocols/glow",
    },
    {
      image: "https://d8j0ntlcm91z4.cloudfront.net/user_3Ft13W9B0KpsVCGoTUaXE6wshlh/hf_20260701_235307_7632a08d-f6a6-432d-90bc-658d1451d272.png",
      category: "LONGEVITY",
      name: "Restore",
      tagline: "Cellular repair & mitochondrial function",
      href: "/protocols/restore",
    },
    {
      image: "https://d8j0ntlcm91z4.cloudfront.net/user_3Ft13W9B0KpsVCGoTUaXE6wshlh/hf_20260701_235307_9fbda3d5-bd1b-4a10-a75b-8111b5b0b436.png",
      category: "COGNITION",
      name: "Clarity",
      tagline: "Neuroplasticity & focus optimization",
      href: "/protocols/clarity",
    },
    {
      image: "https://d8j0ntlcm91z4.cloudfront.net/user_3Ft13W9B0KpsVCGoTUaXE6wshlh/hf_20260701_235308_d530785b-f136-4a31-97f8-40dad3e6f306.png",
      category: "VITALITY",
      name: "Prime",
      tagline: "Hormonal balance & peak energy",
      href: "/protocols/prime",
    },
    {
      image: "https://d8j0ntlcm91z4.cloudfront.net/user_3Ft13W9B0KpsVCGoTUaXE6wshlh/hf_20260701_235309_1807427d-3929-419f-824b-32b633515dc9.png",
      category: "METABOLIC",
      name: "Balance",
      tagline: "Insulin sensitivity & body composition",
      href: "/protocols/balance",
    },
  ];

  const physicians = [
    {
      image: "https://d8j0ntlcm91z4.cloudfront.net/user_3Ft13W9B0KpsVCGoTUaXE6wshlh/hf_20260702_000320_8c406fcc-dfe8-42db-aeb5-07e2543972cf.png",
      name: "Dr. Marcus Webb",
      credentials: "MD, FACP",
      specialty: "Internal Medicine & Longevity",
    },
    {
      image: "https://d8j0ntlcm91z4.cloudfront.net/user_3Ft13W9B0KpsVCGoTUaXE6wshlh/hf_20260702_000320_76d25c6b-7c17-46b5-948f-0a7a5f2466c7.png",
      name: "Dr. Sarah Chen",
      credentials: "MD, PhD",
      specialty: "Endocrinology & Metabolic Health",
    },
    {
      image: "https://d8j0ntlcm91z4.cloudfront.net/user_3Ft13W9B0KpsVCGoTUaXE6wshlh/hf_20260702_000321_9c493a63-2886-4504-ba54-2882a82a19d8.png",
      name: "Dr. James Okafor",
      credentials: "MD, CISSN",
      specialty: "Sports Medicine & Performance",
    },
  ];

  const testimonials = [
    {
      image: "https://d8j0ntlcm91z4.cloudfront.net/user_3Ft13W9B0KpsVCGoTUaXE6wshlh/hf_20260702_000321_93b46058-2e2f-4e68-b863-26ed13ab461e.png",
      quote: "My IGF-1 went from 142 to 218 in 90 days. I've tried every protocol out there — nothing moved the needle like Nexphoria's Wolverine stack.",
      name: "Daniel R.",
      protocol: "Wolverine Protocol",
      result: "↑ 53% IGF-1 in 90 days",
    },
    {
      image: "https://d8j0ntlcm91z4.cloudfront.net/user_3Ft13W9B0KpsVCGoTUaXE6wshlh/hf_20260702_000323_2ca4d85d-6943-415f-96e6-625f27d88f01.png",
      quote: "My physician reviewed my labs and had a personalized protocol ready in under 24 hours. The process felt like concierge medicine.",
      name: "Priya M.",
      protocol: "Clarity Protocol",
      result: "↑ BDNF levels confirmed on follow-up panel",
    },
    {
      image: "https://d8j0ntlcm91z4.cloudfront.net/user_3Ft13W9B0KpsVCGoTUaXE6wshlh/hf_20260702_000321_93b46058-2e2f-4e68-b863-26ed13ab461e.png",
      quote: "The bloodwork panel alone was worth it. I had no idea my cortisol and testosterone were this far off. The Balance protocol fixed what I didn't know was broken.",
      name: "Trevor K.",
      protocol: "Balance Protocol",
      result: "↓ 28% fasting insulin, ↑ T 38%",
    },
  ];

  const faqs = [
    {
      q: "Do I need a prescription?",
      a: "Yes. Every Nexphoria protocol requires a prescription from one of our board-certified physicians. After your 5-minute intake and bloodwork review, your provider will issue a prescription if clinically appropriate.",
    },
    {
      q: "What's included in the free bloodwork panel?",
      a: "The Foundation Panel covers IGF-1, testosterone (total & free), cortisol, insulin, fasting glucose, metabolic panel, CBC, and thyroid (TSH, Free T3, Free T4). Lab orders are fulfilled at any major draw site.",
    },
    {
      q: "How long until I receive my protocol?",
      a: "Physician review is typically completed within 24–48 hours of your intake. Once prescribed, compounds are compounded and cold-chain shipped within 2–3 business days.",
    },
    {
      q: "Are the compounds FDA-approved?",
      a: "Nexphoria compounds are prepared by a 503A-licensed compounding pharmacy under FDA oversight. Compounded peptides are prescribed for individual patients and are not FDA-approved finished drug products.",
    },
    {
      q: "Can I use my HSA or FSA?",
      a: "Yes. Prescription peptide protocols qualify as eligible medical expenses under most HSA and FSA plans. We provide itemized receipts suitable for reimbursement.",
    },
    {
      q: "What if the protocol isn't right for me?",
      a: "Your physician may adjust or discontinue your protocol at any follow-up visit. We offer a satisfaction guarantee — if your physician doesn't prescribe, you pay nothing for the consultation.",
    },
  ];

  const marqueeItems = [
    "LICENSED PROVIDERS",
    "PRESCRIPTION REQUIRED",
    "CLINICAL-GRADE PEPTIDES",
    "THIRD-PARTY TESTED",
    "DISCREET SHIPPING",
    "HIPAA COMPLIANT",
    "503A COMPOUNDED",
    "FREE BLOODWORK PANEL",
    "50 STATE COVERAGE",
    "HSA/FSA ELIGIBLE",
  ];

  return (
    <>
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .marquee-track { animation: marquee 40s linear infinite; }
        details summary { cursor: pointer; }
        details summary::-webkit-details-marker { display: none; }
        details[open] summary .faq-icon { transform: rotate(45deg); }
        .faq-icon { transition: transform 0.2s ease; display: inline-block; }
        .tile-arrow {
          width: 44px; height: 44px; border-radius: 9999px;
          background: rgba(255,255,255,0.95);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .protocol-tile:hover .tile-arrow { background: #B8A44C; transform: translateX(4px); }
        .protocol-tile:hover .tile-img { transform: scale(1.04); }
        .tile-img { transition: transform 0.6s ease; }
        .press-name {
          font-family: var(--font-inter, sans-serif);
          font-weight: 600;
          font-size: 0.95rem;
          letter-spacing: 0.08em;
          color: #6B6560;
          transition: color 0.2s;
        }
        .press-name:hover { color: #0F0F0E; }
      `}</style>

      {/* ─── 1. PROMO BAR ─────────────────────────────────────────────── */}
      <div
        id="promo-bar"
        style={{ backgroundColor: "#0F0F0E", position: "relative", zIndex: 50 }}
        className="w-full py-2.5 px-4"
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-center gap-2 relative">
          <p className="text-white text-xs sm:text-sm text-center leading-snug" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
            Free Foundation bloodwork panel with every protocol.&nbsp;·&nbsp;Board-certified MDs&nbsp;·&nbsp;503A compounded&nbsp;
            <a href="/quiz" style={{ color: "#B8A44C", fontWeight: 600, textDecoration: "none" }}>
              Start now →
            </a>
          </p>
          <button
            aria-label="Dismiss promotion"
            style={{
              position: "absolute", right: 0,
              background: "none", border: "none",
              color: "rgba(255,255,255,0.5)",
              fontSize: "1.1rem", lineHeight: 1,
              cursor: "pointer", padding: "2px 6px",
            }}
            onClick={() => {
              const bar = document.getElementById("promo-bar");
              if (bar) bar.style.display = "none";
            }}
          >
            ×
          </button>
        </div>
      </div>

      {/* ─── 2. HERO ──────────────────────────────────────────────────── */}
      <section
        style={{ backgroundColor: "#FAF7F2", minHeight: "100vh" }}
        className="w-full flex items-center"
      >
        <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-end py-24 lg:py-0">
          {/* Left */}
          <div className="flex flex-col justify-center py-24 lg:py-32 lg:pr-16">
            <p
              style={{
                color: "#B8A44C",
                fontFamily: "var(--font-inter, sans-serif)",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                marginBottom: "1.5rem",
              }}
            >
              PHYSICIAN-GUIDED PEPTIDE THERAPY
            </p>

            <h1
              style={{
                fontFamily: "var(--font-cormorant, Georgia, serif)",
                fontSize: "clamp(3.5rem, 6vw, 6.5rem)",
                fontWeight: 300,
                letterSpacing: "-0.025em",
                lineHeight: 1.02,
                color: "#0F0F0E",
                marginBottom: "1.75rem",
              }}
            >
              Peptides,
              <br />
              prescribed.
            </h1>

            <p
              style={{
                fontFamily: "var(--font-inter, sans-serif)",
                fontSize: "1.0625rem",
                lineHeight: 1.65,
                color: "#4A4542",
                maxWidth: "460px",
                marginBottom: "2.5rem",
              }}
            >
              Personalized peptide protocols, prescribed by licensed providers
              and delivered to your door.
            </p>

            <div className="flex flex-wrap gap-3 mb-5">
              <a
                href="/quiz"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "48px",
                  paddingLeft: "28px",
                  paddingRight: "28px",
                  borderRadius: "9999px",
                  backgroundColor: "#0F0F0E",
                  color: "#FAF7F2",
                  fontFamily: "var(--font-inter, sans-serif)",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  letterSpacing: "0.01em",
                  textDecoration: "none",
                  transition: "background 0.2s ease, transform 0.15s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1e1e1c";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#0F0F0E";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                }}
              >
                Start Assessment
              </a>
              <a
                href="/protocols"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "48px",
                  paddingLeft: "28px",
                  paddingRight: "28px",
                  borderRadius: "9999px",
                  backgroundColor: "transparent",
                  color: "#0F0F0E",
                  border: "1.5px solid #0F0F0E",
                  fontFamily: "var(--font-inter, sans-serif)",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  letterSpacing: "0.01em",
                  textDecoration: "none",
                  transition: "background 0.2s ease, color 0.2s ease, transform 0.15s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#0F0F0E";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#FAF7F2";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#0F0F0E";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                }}
              >
                See Protocols
              </a>
            </div>

            <p
              style={{
                fontFamily: "var(--font-inter, sans-serif)",
                fontSize: "0.78rem",
                color: "#9A948E",
                letterSpacing: "0.01em",
              }}
            >
              No commitment&nbsp;·&nbsp;Physician-reviewed in 24–48h&nbsp;·&nbsp;5-min intake
            </p>
          </div>

          {/* Right — Hero Image */}
          <div
            className="relative hidden lg:flex items-end justify-end"
            style={{ minHeight: "100vh" }}
          >
            <img
              src="https://d8j0ntlcm91z4.cloudfront.net/user_3Ft13W9B0KpsVCGoTUaXE6wshlh/hf_20260701_235309_3affa3ba-7aac-4379-8e97-b9ef947aafb7.png"
              alt="Nexphoria peptide vials"
              loading="eager"
              style={{
                width: "100%",
                maxWidth: "620px",
                height: "auto",
                objectFit: "contain",
                objectPosition: "bottom right",
              }}
            />
          </div>
        </div>
      </section>

      {/* ─── 3. MARQUEE TICKER ────────────────────────────────────────── */}
      <div
        style={{ backgroundColor: "#0F0F0E", overflow: "hidden" }}
        className="w-full py-4"
        aria-hidden="true"
      >
        <div className="marquee-track flex whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              style={{
                fontFamily: "var(--font-inter, sans-serif)",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                color: "rgba(255,255,255,0.55)",
                paddingRight: "3rem",
                flexShrink: 0,
              }}
            >
              {item}
              <span style={{ color: "#B8A44C", marginLeft: "3rem" }}>•</span>
            </span>
          ))}
        </div>
      </div>

      {/* ─── 4. PROTOCOL TILES ────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#FAF7F2" }} className="w-full py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2
            style={{
              fontFamily: "var(--font-cormorant, Georgia, serif)",
              fontSize: "clamp(2.4rem, 3.5vw, 3.5rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              color: "#0F0F0E",
              marginBottom: "3rem",
            }}
          >
            Choose what to optimize.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
            {protocols.map((p) => (
              <a
                key={p.name}
                href={p.href}
                className="protocol-tile"
                style={{
                  position: "relative",
                  display: "block",
                  borderRadius: "20px",
                  overflow: "hidden",
                  aspectRatio: "3/4",
                  textDecoration: "none",
                  flexShrink: 0,
                }}
              >
                {/* Background image */}
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="tile-img"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                  }}
                />
                {/* Gradient overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.72) 100%)",
                  }}
                />
                {/* Bottom content */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "1.25rem 1rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.35rem",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-inter, sans-serif)",
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      color: "#B8A44C",
                      textTransform: "uppercase",
                    }}
                  >
                    {p.category}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-cormorant, Georgia, serif)",
                      fontSize: "1.5rem",
                      fontWeight: 400,
                      letterSpacing: "-0.01em",
                      color: "#FFFFFF",
                      lineHeight: 1.1,
                    }}
                  >
                    {p.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-inter, sans-serif)",
                      fontSize: "0.7rem",
                      color: "rgba(255,255,255,0.72)",
                      lineHeight: 1.4,
                    }}
                  >
                    {p.tagline}
                  </p>
                  <div style={{ marginTop: "0.6rem" }}>
                    <div className="tile-arrow">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="#0F0F0E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. TRUST BAR ─────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#F0EDE7", borderTop: "1px solid #E4E0D8", borderBottom: "1px solid #E4E0D8" }} className="w-full py-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
            {[
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.5C16.5 22.15 20 17.25 20 12V6l-8-4z" stroke="#B8A44C" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M9 12l2 2 4-4" stroke="#B8A44C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
                label: "Board-Certified Physicians",
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="3" stroke="#B8A44C" strokeWidth="1.5" />
                    <path d="M7 12h10M12 7v10" stroke="#B8A44C" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ),
                label: "503A US Pharmacy",
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="5" y="3" width="14" height="18" rx="2" stroke="#B8A44C" strokeWidth="1.5" />
                    <path d="M9 8h6M9 12h6M9 16h4" stroke="#B8A44C" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ),
                label: "HIPAA Compliant",
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="#B8A44C" strokeWidth="1.5" />
                    <path d="M12 7v5l3 3" stroke="#B8A44C" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ),
                label: "Free Bloodwork",
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="6" width="16" height="12" rx="2" stroke="#B8A44C" strokeWidth="1.5" />
                    <path d="M8 10h2l2 4 2-6 2 2h2" stroke="#B8A44C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
                label: "HSA/FSA Eligible",
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#B8A44C" strokeWidth="1.5" />
                    <circle cx="12" cy="9" r="2.5" stroke="#B8A44C" strokeWidth="1.5" />
                  </svg>
                ),
                label: "Cold-Chain 50 States",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2.5">
                {item.icon}
                <p
                  style={{
                    fontFamily: "var(--font-inter, sans-serif)",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    color: "#4A4542",
                    letterSpacing: "0.01em",
                    lineHeight: 1.35,
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. HOW IT WORKS ──────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#FAF7F2" }} className="w-full py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-cormorant, Georgia, serif)",
                fontSize: "clamp(2.4rem, 3.5vw, 3.75rem)",
                fontWeight: 300,
                letterSpacing: "-0.02em",
                color: "#0F0F0E",
                lineHeight: 1.08,
              }}
            >
              Three steps.
              <br />
              No clinic visit.
            </h2>
            <a
              href="/quiz"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: "48px",
                paddingLeft: "28px",
                paddingRight: "28px",
                borderRadius: "9999px",
                backgroundColor: "#B8A44C",
                color: "#0F0F0E",
                fontFamily: "var(--font-inter, sans-serif)",
                fontSize: "0.875rem",
                fontWeight: 700,
                letterSpacing: "0.01em",
                textDecoration: "none",
                marginTop: "2.5rem",
                transition: "opacity 0.2s ease, transform 0.15s ease",
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.opacity = "0.88";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              }}
            >
              Begin My Assessment
            </a>
          </div>

          {/* Right — steps */}
          <div className="flex flex-col gap-0">
            {[
              {
                n: "01",
                title: "Complete your intake",
                body: "A 5-minute health history form. No awkward waiting rooms, no referrals needed.",
              },
              {
                n: "02",
                title: "Get your bloodwork done",
                body: "We send a lab order to the nearest draw site. Your Foundation Panel is included free.",
              },
              {
                n: "03",
                title: "Receive your prescription",
                body: "A board-certified physician reviews your labs and prescribes a personalized protocol. Cold-chain delivered in 48–72h.",
              },
            ].map((step, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "2rem",
                  paddingTop: "2rem",
                  paddingBottom: "2rem",
                  borderBottom: i < 2 ? "1px solid #E4E0D8" : "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-cormorant, Georgia, serif)",
                    fontSize: "2.5rem",
                    fontWeight: 300,
                    color: "#B8A44C",
                    lineHeight: 1,
                    minWidth: "3rem",
                    flexShrink: 0,
                  }}
                >
                  {step.n}
                </span>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-inter, sans-serif)",
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "#0F0F0E",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {step.title}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-inter, sans-serif)",
                      fontSize: "0.9rem",
                      color: "#6B6560",
                      lineHeight: 1.6,
                    }}
                  >
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. BLOODWORK DARK SECTION ────────────────────────────────── */}
      <section style={{ backgroundColor: "#0F0F0E" }} className="w-full py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <p
            style={{
              fontFamily: "var(--font-inter, sans-serif)",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.14em",
              color: "#B8A44C",
              marginBottom: "1.25rem",
            }}
          >
            FOUNDATION BLOODWORK
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant, Georgia, serif)",
              fontSize: "clamp(2.6rem, 4vw, 4.5rem)",
              fontWeight: 300,
              letterSpacing: "-0.025em",
              color: "#FAF7F2",
              marginBottom: "3.5rem",
              maxWidth: "700px",
              lineHeight: 1.06,
            }}
          >
            The panel is the protocol.
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              { value: "Free", label: "Foundation bloodwork panel with every protocol" },
              { value: "90-day", label: "Follow-up panel included to confirm results" },
              { value: "HSA/FSA", label: "Eligible — we provide itemized receipts" },
              { value: "50 States", label: "Lab network & cold-chain delivery coverage" },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  borderRadius: "16px",
                  padding: "2rem 1.75rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-cormorant, Georgia, serif)",
                    fontSize: "2.4rem",
                    fontWeight: 300,
                    color: "#B8A44C",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                    marginBottom: "0.75rem",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-inter, sans-serif)",
                    fontSize: "0.82rem",
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.5,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <a
            href="/quiz"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              height: "52px",
              paddingLeft: "36px",
              paddingRight: "36px",
              borderRadius: "9999px",
              backgroundColor: "#B8A44C",
              color: "#0F0F0E",
              fontFamily: "var(--font-inter, sans-serif)",
              fontSize: "0.9rem",
              fontWeight: 700,
              letterSpacing: "0.01em",
              textDecoration: "none",
              transition: "opacity 0.2s ease",
            }}
            onMouseOver={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.88"; }}
            onMouseOut={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
          >
            Claim Free Panel →
          </a>
        </div>
      </section>

      {/* ─── 8. PHYSICIAN SECTION ─────────────────────────────────────── */}
      <section style={{ backgroundColor: "#FAF7F2" }} className="w-full py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <p
            style={{
              fontFamily: "var(--font-inter, sans-serif)",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.14em",
              color: "#B8A44C",
              marginBottom: "1rem",
            }}
          >
            OUR PROVIDERS
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant, Georgia, serif)",
              fontSize: "clamp(2.4rem, 3.5vw, 3.75rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              color: "#0F0F0E",
              marginBottom: "3.5rem",
              lineHeight: 1.08,
            }}
          >
            Board-certified doctors.
            <br />
            Real protocols.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {physicians.map((doc, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div
                  style={{
                    width: "160px",
                    height: "160px",
                    borderRadius: "9999px",
                    overflow: "hidden",
                    marginBottom: "1.5rem",
                    border: "3px solid #E4E0D8",
                  }}
                >
                  <img
                    src={doc.image}
                    alt={doc.name}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-cormorant, Georgia, serif)",
                    fontSize: "1.5rem",
                    fontWeight: 400,
                    color: "#0F0F0E",
                    letterSpacing: "-0.01em",
                    marginBottom: "0.25rem",
                  }}
                >
                  {doc.name}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-inter, sans-serif)",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    color: "#B8A44C",
                    letterSpacing: "0.06em",
                    marginBottom: "0.4rem",
                  }}
                >
                  {doc.credentials}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-inter, sans-serif)",
                    fontSize: "0.85rem",
                    color: "#6B6560",
                  }}
                >
                  {doc.specialty}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 9. TESTIMONIALS ──────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#FFFFFF" }} className="w-full py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <p
            style={{
              fontFamily: "var(--font-inter, sans-serif)",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.14em",
              color: "#B8A44C",
              marginBottom: "1rem",
            }}
          >
            PATIENT OUTCOMES
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant, Georgia, serif)",
              fontSize: "clamp(2.4rem, 3.5vw, 3.75rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              color: "#0F0F0E",
              marginBottom: "3.5rem",
              lineHeight: 1.08,
            }}
          >
            Real people.
            <br />
            Real biomarkers.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#FAF7F2",
                  borderRadius: "20px",
                  padding: "2rem 1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                {/* Stars */}
                <div style={{ display: "flex", gap: "4px" }}>
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg key={j} width="14" height="14" viewBox="0 0 14 14" fill="#B8A44C">
                      <path d="M7 1l1.73 3.51L12.5 5.07l-2.75 2.68.65 3.78L7 9.74l-3.4 1.79.65-3.78L1.5 5.07l3.77-.56L7 1z" />
                    </svg>
                  ))}
                </div>
                {/* Quote */}
                <p
                  style={{
                    fontFamily: "var(--font-cormorant, Georgia, serif)",
                    fontSize: "1.15rem",
                    fontStyle: "italic",
                    color: "#2C2A27",
                    lineHeight: 1.6,
                    flexGrow: 1,
                  }}
                >
                  "{t.quote}"
                </p>
                {/* Patient */}
                <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                  <img
                    src={t.image}
                    alt={t.name}
                    loading="lazy"
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "9999px",
                      objectFit: "cover",
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-inter, sans-serif)",
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        color: "#0F0F0E",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {t.name} · {t.protocol}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-inter, sans-serif)",
                        fontSize: "0.75rem",
                        color: "#B8A44C",
                        fontWeight: 600,
                      }}
                    >
                      {t.result}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 10. THE PHARMACY DARK ────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          backgroundColor: "#0F0F0E",
          overflow: "hidden",
        }}
        className="w-full py-24 lg:py-36"
      >
        {/* Background lab image at 40% opacity */}
        <img
          src="https://d8j0ntlcm91z4.cloudfront.net/user_3Ft13W9B0KpsVCGoTUaXE6wshlh/hf_20260702_000324_e60c0546-0aee-457b-b1be-47fd47ff60e8.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.4,
          }}
        />
        {/* Dark vignette on top of image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(15,15,14,0.85) 45%, rgba(15,15,14,0.3) 100%)",
          }}
        />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <p
            style={{
              fontFamily: "var(--font-inter, sans-serif)",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.14em",
              color: "#B8A44C",
              marginBottom: "1.25rem",
            }}
          >
            503A COMPOUNDING
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant, Georgia, serif)",
              fontSize: "clamp(2.6rem, 4vw, 5rem)",
              fontWeight: 300,
              letterSpacing: "-0.025em",
              color: "#FAF7F2",
              lineHeight: 1.04,
              maxWidth: "620px",
              marginBottom: "3.5rem",
            }}
          >
            Weighed to the thousandth of a gram.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-16" style={{ maxWidth: "600px" }}>
            {[
              { value: "24–48h", label: "Compounding & dispatch time" },
              { value: "0.0001g", label: "Precision tolerance per dose" },
              { value: "503A", label: "FDA-registered pharmacy" },
            ].map((stat, i) => (
              <div key={i}>
                <p
                  style={{
                    fontFamily: "var(--font-cormorant, Georgia, serif)",
                    fontSize: "2.8rem",
                    fontWeight: 300,
                    color: "#B8A44C",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-inter, sans-serif)",
                    fontSize: "0.8rem",
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.45,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 11. FAQ ──────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#FAF7F2" }} className="w-full py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-inter, sans-serif)",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                color: "#B8A44C",
                marginBottom: "1rem",
              }}
            >
              FAQ
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant, Georgia, serif)",
                fontSize: "clamp(2.4rem, 3.5vw, 3.75rem)",
                fontWeight: 300,
                letterSpacing: "-0.02em",
                color: "#0F0F0E",
                lineHeight: 1.08,
                marginBottom: "2rem",
              }}
            >
              Common
              <br />
              questions.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-inter, sans-serif)",
                fontSize: "0.9rem",
                color: "#6B6560",
                lineHeight: 1.6,
                maxWidth: "340px",
              }}
            >
              Still have questions? Our patient care team is available 7 days a week.
            </p>
            <a
              href="/faq"
              style={{
                display: "inline-flex",
                alignItems: "center",
                marginTop: "2rem",
                fontFamily: "var(--font-inter, sans-serif)",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "#0F0F0E",
                textDecoration: "none",
                borderBottom: "1px solid #0F0F0E",
                paddingBottom: "2px",
                letterSpacing: "0.01em",
              }}
            >
              View all FAQs →
            </a>
          </div>

          {/* Right — accordion */}
          <div>
            {faqs.map((faq, i) => (
              <details
                key={i}
                style={{ borderBottom: "1px solid #E4E0D8" }}
              >
                <summary
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1.25rem 0",
                    fontFamily: "var(--font-inter, sans-serif)",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "#0F0F0E",
                    listStyle: "none",
                  }}
                >
                  {faq.q}
                  <span
                    className="faq-icon"
                    style={{
                      marginLeft: "1.5rem",
                      flexShrink: 0,
                      width: "24px",
                      height: "24px",
                      borderRadius: "9999px",
                      border: "1.5px solid #B8A44C",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#B8A44C",
                      fontWeight: 400,
                      fontSize: "1.1rem",
                      lineHeight: 1,
                    }}
                  >
                    +
                  </span>
                </summary>
                <p
                  style={{
                    fontFamily: "var(--font-inter, sans-serif)",
                    fontSize: "0.875rem",
                    color: "#6B6560",
                    lineHeight: 1.7,
                    paddingBottom: "1.25rem",
                    paddingRight: "2.5rem",
                  }}
                >
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 12. PRESS LOGOS ──────────────────────────────────────────── */}
      <section
        style={{ backgroundColor: "#F0EDE7", borderTop: "1px solid #E4E0D8" }}
        className="w-full py-8"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-wrap items-center gap-6 lg:gap-10">
          <p
            style={{
              fontFamily: "var(--font-inter, sans-serif)",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: "#9A948E",
              textTransform: "uppercase",
              flexShrink: 0,
            }}
          >
            As seen in
          </p>
          <div
            style={{
              width: "1px",
              height: "20px",
              backgroundColor: "#D8D4CE",
              flexShrink: 0,
            }}
            className="hidden sm:block"
          />
          {["Men's Health", "Forbes", "Healthline", "WebMD", "Longevity"].map((press, i) => (
            <span key={i} className="press-name">
              {press}
            </span>
          ))}
        </div>
      </section>

      {/* ─── 13. FINAL CTA DARK ───────────────────────────────────────── */}
      <section
        style={{ backgroundColor: "#0F0F0E" }}
        className="w-full py-24 lg:py-36"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
          <p
            style={{
              fontFamily: "var(--font-cormorant, Georgia, serif)",
              fontSize: "clamp(2.8rem, 5vw, 5.5rem)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "#B8A44C",
              letterSpacing: "-0.025em",
              lineHeight: 1.06,
              marginBottom: "2.5rem",
            }}
          >
            Your biology is speaking.
          </p>
          <a
            href="/quiz"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              height: "56px",
              paddingLeft: "44px",
              paddingRight: "44px",
              borderRadius: "9999px",
              backgroundColor: "#B8A44C",
              color: "#0F0F0E",
              fontFamily: "var(--font-inter, sans-serif)",
              fontSize: "0.95rem",
              fontWeight: 700,
              letterSpacing: "0.01em",
              textDecoration: "none",
              marginBottom: "1.75rem",
              transition: "opacity 0.2s ease, transform 0.15s ease",
            }}
            onMouseOver={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = "0.88";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            }}
            onMouseOut={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            Begin Assessment →
          </a>
          <p
            style={{
              fontFamily: "var(--font-inter, sans-serif)",
              fontSize: "0.78rem",
              color: "rgba(255,255,255,0.35)",
              letterSpacing: "0.02em",
            }}
          >
            No commitment&nbsp;·&nbsp;Free bloodwork panel&nbsp;·&nbsp;Physician-reviewed in 24–48h
          </p>
        </div>
      </section>

      {/* ─── MOBILE STICKY CTA BAR ────────────────────────────────────── */}
      <div
        className="lg:hidden"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          backgroundColor: "#0F0F0E",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "0.875rem 1.25rem",
          display: "flex",
          gap: "0.75rem",
          alignItems: "center",
        }}
      >
        <a
          href="/quiz"
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "46px",
            borderRadius: "9999px",
            backgroundColor: "#B8A44C",
            color: "#0F0F0E",
            fontFamily: "var(--font-inter, sans-serif)",
            fontSize: "0.875rem",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          Start Assessment
        </a>
        <a
          href="/protocols"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "46px",
            paddingLeft: "20px",
            paddingRight: "20px",
            borderRadius: "9999px",
            border: "1.5px solid rgba(255,255,255,0.25)",
            color: "rgba(255,255,255,0.8)",
            fontFamily: "var(--font-inter, sans-serif)",
            fontSize: "0.875rem",
            fontWeight: 600,
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Protocols
        </a>
      </div>
    </>
  );
}

