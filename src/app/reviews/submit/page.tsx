"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, AlertTriangle, Star } from "lucide-react";

// ─── Products list for multi-select ──────────────────────────────────────────

const PRODUCT_OPTIONS = [
  "BPC-157", "TB-500", "GHK-Cu", "Semaglutide", "Tirzepatide", "Retatrutide",
  "Ipamorelin", "Sermorelin", "MK-677", "CJC-1295 No DAC", "CJC-1295/Ipamorelin Blend",
  "Selank", "Semax", "NAD+", "Epitalon", "Thymosin Alpha-1", "LL-37",
  "MOTS-c", "SS-31", "GHRP-2", "GHRP-6", "Hexarelin", "PT-141",
  "Melanotan II", "AOD-9604", "Follistatin 344", "IGF-1 LR3",
];

type RatingCategory = "purity" | "packaging" | "shipping" | "coa";

const RATING_LABELS: Record<RatingCategory, string> = {
  purity: "Purity / COA accuracy",
  packaging: "Packaging quality",
  shipping: "Cold-chain / shipping",
  coa: "COA documentation",
};

// ─── Star picker ──────────────────────────────────────────────────────────────

function StarPicker({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => onChange(star)}
          aria-label={`Rate ${star} out of 5`}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 2 }}
        >
          <Star
            size={22}
            style={{
              fill: star <= (hovered || value) ? "#B8923A" : "transparent",
              stroke: star <= (hovered || value) ? "#B8923A" : "#D0C9BF",
              transition: "fill 0.1s, stroke 0.1s",
            }}
          />
        </button>
      ))}
    </div>
  );
}

// ─── Compliance Guidance ──────────────────────────────────────────────────────

function ComplianceGuidance() {
  return (
    <div
      style={{
        background: "#FFFBEB",
        border: "1px solid #FDE68A",
        borderRadius: 12,
        padding: "20px 24px",
      }}
    >
      <div className="flex items-center gap-2 mb-3">
        <AlertTriangle size={14} color="#D97706" />
        <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#92400E", textTransform: "uppercase", letterSpacing: "0.1em" }}>
          Compliance Guidelines
        </span>
      </div>
      <p style={{ fontSize: "0.75rem", color: "#78350F", lineHeight: 1.6, marginBottom: 12 }}>
        All testimonials undergo compliance screening before publication. Nexphoria compounds are
        sold strictly for <strong>in vitro research use</strong>. Your review must reflect that context.
      </p>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p style={{ fontSize: "0.65rem", fontWeight: 700, color: "#16A34A", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>
            ✓ Acceptable
          </p>
          <ul style={{ fontSize: "0.72rem", color: "#555", lineHeight: 1.7, listStyle: "none", padding: 0, margin: 0 }}>
            <li>Observations about purity, COA, packaging</li>
            <li>Cold-chain / shipping temperature data</li>
            <li>In-house analytical results (HPLC, LC-MS)</li>
            <li>Lab workflow or reconstitution notes</li>
            <li>Lot-to-lot consistency across orders</li>
          </ul>
        </div>
        <div>
          <p style={{ fontSize: "0.65rem", fontWeight: 700, color: "#DC2626", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>
            ✗ Not Accepted
          </p>
          <ul style={{ fontSize: "0.72rem", color: "#555", lineHeight: 1.7, listStyle: "none", padding: 0, margin: 0 }}>
            <li>Personal health or therapeutic outcomes</li>
            <li>Statements implying human/veterinary use</li>
            <li>Dosing information framed for human use</li>
            <li>Unsubstantiated competitor claims</li>
            <li>Pricing or stock availability promises</li>
          </ul>
        </div>
      </div>

      <p style={{ fontSize: "0.68rem", color: "#92400E", marginTop: 12, fontStyle: "italic" }}>
        Reviews failing critical compliance checks will be rejected. You will receive notification.
        Influencer submissions require written FTC disclosure on file.
      </p>
    </div>
  );
}

// ─── Success State ────────────────────────────────────────────────────────────

function SuccessPanel() {
  return (
    <div className="max-w-2xl mx-auto text-center py-24 px-6">
      <div
        className="flex items-center justify-center w-16 h-16 rounded-full mx-auto mb-6"
        style={{ backgroundColor: "#F0FDF4", border: "1px solid #BBF7D0" }}
      >
        <CheckCircle size={32} color="#16A34A" />
      </div>
      <h2
        className="text-3xl mb-4"
        style={{ fontWeight: 200, color: "#010101", letterSpacing: "-0.01em" }}
      >
        Review Submitted
      </h2>
      <p className="text-base mb-2" style={{ color: "#7F7F7D", lineHeight: 1.7 }}>
        Thank you. Your submission has entered the compliance review queue.
        You will receive an email once it has been screened.
      </p>
      <p className="text-sm mb-8" style={{ color: "rgba(0,0,0,0.35)" }}>
        Typical review time: 2–5 business days.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/reviews"
          className="inline-block px-6 py-3 rounded-lg text-sm font-medium transition-opacity hover:opacity-80"
          style={{ backgroundColor: "#010101", color: "#FFFFFF" }}
        >
          View Published Reviews
        </Link>
        <Link
          href="/products"
          className="inline-block px-6 py-3 rounded-lg text-sm font-medium transition-colors"
          style={{
            backgroundColor: "transparent",
            color: "#7F7F7D",
            border: "1px solid rgba(0,0,0,0.15)",
          }}
        >
          Browse Compounds
        </Link>
      </div>
    </div>
  );
}

// ─── Main Form ────────────────────────────────────────────────────────────────

export default function SubmitReviewPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [orderId, setOrderId] = useState("");
  const [source, setSource] = useState<"customer_review" | "researcher" | "influencer">("researcher");
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [quote, setQuote] = useState("");
  const [highlight, setHighlight] = useState("");
  const [overallRating, setOverallRating] = useState(0);
  const [categoryRatings, setCategoryRatings] = useState<Record<RatingCategory, number>>({
    purity: 0, packaging: 0, shipping: 0, coa: 0,
  });
  const [errors, setErrors] = useState<string[]>([]);

  function toggleProduct(p: string) {
    setSelectedProducts((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
    );
  }

  function validate(): boolean {
    const errs: string[] = [];
    if (!name.trim()) errs.push("Name is required.");
    if (!email.trim() || !email.includes("@")) errs.push("Valid email is required.");
    if (selectedProducts.length === 0) errs.push("Select at least one compound.");
    if (!quote.trim() || quote.trim().length < 40) errs.push("Review must be at least 40 characters.");
    if (overallRating === 0) errs.push("Overall rating is required.");
    setErrors(errs);
    return errs.length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    // Simulate async submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "11px 14px",
    borderRadius: 8,
    border: "1px solid #E0DCDA",
    fontSize: "0.875rem",
    color: "#111",
    background: "#FAFAF9",
    outline: "none",
    fontFamily: "inherit",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.72rem",
    fontWeight: 600,
    color: "#555",
    marginBottom: 6,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
  };

  if (submitted) {
    return (
      <div style={{ backgroundColor: "#EAE7E3", minHeight: "100vh", paddingTop: "80px" }}>
        <SuccessPanel />
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#EAE7E3", minHeight: "100vh" }}>
      {/* Header */}
      <section style={{ paddingTop: "140px", paddingBottom: "60px" }} className="px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="text-xs hover:underline" style={{ color: "rgba(0,0,0,0.4)" }}>Home</Link>
            <span className="text-xs" style={{ color: "rgba(0,0,0,0.25)" }}>/</span>
            <Link href="/reviews" className="text-xs hover:underline" style={{ color: "rgba(0,0,0,0.4)" }}>Researcher Reviews</Link>
            <span className="text-xs" style={{ color: "rgba(0,0,0,0.25)" }}>/</span>
            <span className="text-xs" style={{ color: "#010101" }}>Submit a Review</span>
          </nav>

          <p
            className="text-xs uppercase mb-5"
            style={{ color: "#B8923A", letterSpacing: "0.25em", fontWeight: 500 }}
          >
            Researcher Reviews
          </p>
          <h1
            className="text-4xl md:text-5xl mb-5"
            style={{ fontWeight: 200, color: "#010101", letterSpacing: "-0.01em", lineHeight: 1.1 }}
          >
            Submit a Review
          </h1>
          <p className="text-base max-w-xl" style={{ color: "#7F7F7D", lineHeight: 1.7 }}>
            Share your lab experience with Nexphoria compounds. All reviews undergo compliance
            screening and are published only in a research context.
          </p>
        </div>
      </section>

      {/* Form + Guidance */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-start">
            {/* Form */}
            <div
              className="rounded-2xl p-8 md:p-10"
              style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(0,0,0,0.06)" }}
            >
              <form onSubmit={handleSubmit} noValidate>
                {errors.length > 0 && (
                  <div
                    className="mb-6 p-4 rounded-lg"
                    style={{ background: "#FEF2F2", border: "1px solid #FECACA" }}
                  >
                    <p style={{ fontSize: "0.78rem", fontWeight: 600, color: "#DC2626", marginBottom: 4 }}>
                      Please correct the following:
                    </p>
                    <ul style={{ fontSize: "0.75rem", color: "#B91C1C", lineHeight: 1.6, paddingLeft: 16 }}>
                      {errors.map((e) => <li key={e}>{e}</li>)}
                    </ul>
                  </div>
                )}

                {/* Submitter info */}
                <fieldset style={{ border: "none", padding: 0, margin: "0 0 28px 0" }}>
                  <legend
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      color: "#999",
                      marginBottom: 16,
                      display: "block",
                    }}
                  >
                    Your Information
                  </legend>

                  <div className="grid md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label style={labelStyle}>Name or Initials *</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Dr. J. Smith"
                        required
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Email Address *</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@institution.edu"
                        required
                        style={inputStyle}
                      />
                      <p style={{ fontSize: "0.65rem", color: "#AAA", marginTop: 4 }}>
                        Used for verification only. Not published.
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label style={labelStyle}>Institution / Affiliation</label>
                      <input
                        type="text"
                        value={affiliation}
                        onChange={(e) => setAffiliation(e.target.value)}
                        placeholder="University Research Lab"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Order ID (if available)</label>
                      <input
                        type="text"
                        value={orderId}
                        onChange={(e) => setOrderId(e.target.value)}
                        placeholder="NEX-2026-00000"
                        style={inputStyle}
                      />
                      <p style={{ fontSize: "0.65rem", color: "#AAA", marginTop: 4 }}>
                        Verified orders are marked on published reviews.
                      </p>
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Reviewer Type</label>
                    <div className="flex gap-3 flex-wrap">
                      {(
                        [
                          { value: "researcher", label: "Researcher" },
                          { value: "customer_review", label: "Customer" },
                          { value: "influencer", label: "Influencer / Content Creator" },
                        ] as const
                      ).map(({ value, label }) => (
                        <label
                          key={value}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 7,
                            cursor: "pointer",
                            fontSize: "0.82rem",
                            color: source === value ? "#010101" : "#777",
                            fontWeight: source === value ? 500 : 400,
                          }}
                        >
                          <input
                            type="radio"
                            name="source"
                            value={value}
                            checked={source === value}
                            onChange={() => setSource(value)}
                            style={{ accentColor: "#B8923A" }}
                          />
                          {label}
                        </label>
                      ))}
                    </div>
                    {source === "influencer" && (
                      <p
                        className="mt-2 px-3 py-2 rounded-lg text-xs"
                        style={{ background: "#FFFBEB", color: "#92400E", border: "1px solid #FDE68A" }}
                      >
                        Influencer submissions require a written FTC disclosure confirming any material
                        relationship (free product, affiliate arrangement, or sponsorship). You will be
                        contacted to provide this before your review is published.
                      </p>
                    )}
                  </div>
                </fieldset>

                {/* Products */}
                <fieldset style={{ border: "none", padding: 0, margin: "0 0 28px 0" }}>
                  <legend
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      color: "#999",
                      marginBottom: 12,
                      display: "block",
                    }}
                  >
                    Compounds Reviewed *
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {PRODUCT_OPTIONS.map((p) => {
                      const active = selectedProducts.includes(p);
                      return (
                        <button
                          key={p}
                          type="button"
                          onClick={() => toggleProduct(p)}
                          style={{
                            padding: "5px 12px",
                            borderRadius: 99,
                            border: "1px solid",
                            borderColor: active ? "#B8923A" : "#E0DCDA",
                            background: active ? "#FBF4E9" : "transparent",
                            color: active ? "#7A5C1E" : "#888",
                            fontSize: "0.72rem",
                            fontWeight: active ? 600 : 400,
                            cursor: "pointer",
                            transition: "all 0.12s",
                          }}
                        >
                          {p}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                {/* Ratings */}
                <fieldset style={{ border: "none", padding: 0, margin: "0 0 28px 0" }}>
                  <legend
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      color: "#999",
                      marginBottom: 16,
                      display: "block",
                    }}
                  >
                    Ratings *
                  </legend>

                  <div className="mb-5">
                    <label style={labelStyle}>Overall Rating</label>
                    <StarPicker value={overallRating} onChange={setOverallRating} />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {(Object.keys(RATING_LABELS) as RatingCategory[]).map((cat) => (
                      <div key={cat}>
                        <label style={labelStyle}>{RATING_LABELS[cat]}</label>
                        <StarPicker
                          value={categoryRatings[cat]}
                          onChange={(v) =>
                            setCategoryRatings((prev) => ({ ...prev, [cat]: v }))
                          }
                        />
                      </div>
                    ))}
                  </div>
                </fieldset>

                {/* Review text */}
                <fieldset style={{ border: "none", padding: 0, margin: "0 0 28px 0" }}>
                  <legend
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      color: "#999",
                      marginBottom: 16,
                      display: "block",
                    }}
                  >
                    Your Review
                  </legend>

                  <div className="mb-5">
                    <label style={labelStyle}>Review Text * (40 char minimum)</label>
                    <textarea
                      value={quote}
                      onChange={(e) => setQuote(e.target.value)}
                      rows={5}
                      placeholder="Describe your research experience — purity results, cold-chain performance, COA documentation, reconstitution quality, or lot-to-lot consistency…"
                      style={{ ...inputStyle, resize: "vertical" }}
                    />
                    <p style={{ fontSize: "0.65rem", color: "#CCC", marginTop: 4 }}>
                      {quote.length} characters
                    </p>
                  </div>

                  <div>
                    <label style={labelStyle}>Headline / Key Takeaway (optional)</label>
                    <input
                      type="text"
                      value={highlight}
                      onChange={(e) => setHighlight(e.target.value)}
                      placeholder="e.g. HPLC matched within 0.4%"
                      maxLength={80}
                      style={inputStyle}
                    />
                    <p style={{ fontSize: "0.65rem", color: "#AAA", marginTop: 4 }}>
                      A short phrase that captures the most important data point. Max 80 characters.
                    </p>
                  </div>
                </fieldset>

                {/* RUO consent */}
                <div
                  className="mb-6 p-4 rounded-lg"
                  style={{ background: "#F7F5F2", border: "1px solid #E0DCDA" }}
                >
                  <p style={{ fontSize: "0.72rem", color: "#555", lineHeight: 1.6 }}>
                    By submitting this review, I confirm that my experience with these compounds was
                    strictly within a <strong>laboratory research context</strong> and that my review
                    does not describe personal health outcomes, therapeutic use, or human dosing.
                    I understand that submissions failing compliance checks will not be published.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    width: "100%",
                    padding: "14px 24px",
                    borderRadius: 10,
                    border: "none",
                    background: submitting ? "#D0C9BF" : "#010101",
                    color: "#FFFFFF",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    cursor: submitting ? "not-allowed" : "pointer",
                    letterSpacing: "0.05em",
                    transition: "background 0.15s",
                  }}
                >
                  {submitting ? "Submitting…" : "Submit for Compliance Review"}
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-6">
              <ComplianceGuidance />

              {/* Privacy note */}
              <div
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(0,0,0,0.06)",
                  borderRadius: 12,
                  padding: "18px 22px",
                }}
              >
                <p
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    color: "#999",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: 8,
                  }}
                >
                  Privacy
                </p>
                <p style={{ fontSize: "0.75rem", color: "#666", lineHeight: 1.65 }}>
                  Full names are never published. All reviews appear with anonymized initials and
                  institutional affiliation only. Email addresses are used solely for order verification
                  and compliance correspondence.
                </p>
              </div>

              {/* Link to published reviews */}
              <Link
                href="/reviews"
                className="block text-center py-3 rounded-xl text-sm font-medium transition-opacity hover:opacity-80"
                style={{
                  backgroundColor: "transparent",
                  color: "#B8923A",
                  border: "1px solid #B8923A",
                }}
              >
                View Published Reviews &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
