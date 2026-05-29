"use client";

import { useState, useRef } from "react";
import Link from "next/link";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
type LookupState = "idle" | "loading" | "found" | "not_found" | "error";

interface OrderSummary {
  id: string;
  status: string;
  payment_status?: string;
  created: number;
  amount_total: number;
  currency: string;
  customer_email?: string;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
const STATUS_MAP: Record<string, { label: string; dot: string; bg: string; text: string }> = {
  paid:      { label: "Payment Confirmed", dot: "#22c55e", bg: "rgba(34,197,94,0.08)",  text: "#16a34a" },
  complete:  { label: "Fulfilled",          dot: "#3b82f6", bg: "rgba(59,130,246,0.08)", text: "#1d4ed8" },
  open:      { label: "Pending Payment",    dot: "#f59e0b", bg: "rgba(245,158,11,0.08)", text: "#b45309" },
  expired:   { label: "Expired",            dot: "#9ca3af", bg: "rgba(156,163,175,0.08)", text: "#6b7280" },
  unpaid:    { label: "Unpaid",             dot: "#ef4444", bg: "rgba(239,68,68,0.08)", text: "#dc2626" },
};

function StatusBadge({ status }: { status: string }) {
  const cfg = STATUS_MAP[status] ?? { label: status, dot: "#9ca3af", bg: "rgba(156,163,175,0.08)", text: "#6b7280" };
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
      style={{ backgroundColor: cfg.bg, color: cfg.text }}
    >
      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: cfg.dot }} />
      {cfg.label}
    </span>
  );
}

function fmtDate(unix: number) {
  return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(new Date(unix * 1000));
}

function fmtCurrency(amount: number, currency: string) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: currency.toUpperCase(), minimumFractionDigits: 2 }).format(amount / 100);
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function OrderLookupPage() {
  const [sessionId, setSessionId] = useState("");
  const [state, setState] = useState<LookupState>("idle");
  const [order, setOrder] = useState<OrderSummary | null>(null);
  const [errorMsg, setErrorMsg] = useState("");
  const resultRef = useRef<HTMLDivElement>(null);

  async function handleLookup(e: React.FormEvent) {
    e.preventDefault();
    const id = sessionId.trim();
    if (!id) return;

    setState("loading");
    setOrder(null);
    setErrorMsg("");

    try {
      const res = await fetch(
        `https://nexphoria-checkout.chiya-b60.workers.dev/order-status?session_id=${encodeURIComponent(id)}`,
        { method: "GET", headers: { "Content-Type": "application/json" } }
      );

      if (res.status === 404) {
        setState("not_found");
        setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
        return;
      }

      if (!res.ok) {
        setErrorMsg(`Server returned ${res.status}`);
        setState("error");
        setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
        return;
      }

      const data = await res.json();
      if (!data || !data.id) {
        setState("not_found");
      } else {
        setOrder(data);
        setState("found");
      }
      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
    } catch {
      setErrorMsg("Network error. Please try again.");
      setState("error");
      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
    }
  }

  return (
    // robots noindex handled via metadata export below — this is a client component
    // so we use a separate metadata file or handle via robots.txt
    <div className="min-h-screen" style={{ backgroundColor: "#0A0A0A" }}>
      <div className="max-w-lg mx-auto px-5 py-20">

        {/* ------------------------------------------------------------------ */}
        {/* Header                                                               */}
        {/* ------------------------------------------------------------------ */}
        <div className="text-center mb-12">
          {/* Icon */}
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.2)" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </div>

          <h1 className="text-2xl font-bold tracking-tight mb-2" style={{ color: "#F5F5F0" }}>
            Order Status
          </h1>
          <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
            Paste your Stripe session ID to retrieve your order summary.
          </p>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Lookup form                                                          */}
        {/* ------------------------------------------------------------------ */}
        <form onSubmit={handleLookup}>
          <div className="mb-4">
            <label
              htmlFor="session-id"
              className="block text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "#9ca3af", letterSpacing: "0.1em" }}
            >
              Session ID
            </label>
            <input
              id="session-id"
              type="text"
              value={sessionId}
              onChange={(e) => setSessionId(e.target.value)}
              placeholder="cs_live_..."
              autoComplete="off"
              spellCheck={false}
              className="w-full px-4 py-3 rounded-xl text-sm font-mono transition-all"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#F5F5F0",
                outline: "none",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(212,175,55,0.5)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
            />
            <p className="text-xs mt-2" style={{ color: "#4b5563" }}>
              Your session ID starts with <span className="font-mono" style={{ color: "#6b7280" }}>cs_live_</span> and was included in your order confirmation email.
            </p>
          </div>

          <button
            type="submit"
            disabled={!sessionId.trim() || state === "loading"}
            className="w-full py-3 rounded-xl text-sm font-semibold transition-all"
            style={{
              backgroundColor: sessionId.trim() && state !== "loading" ? "#d4af37" : "rgba(212,175,55,0.25)",
              color: sessionId.trim() && state !== "loading" ? "#000" : "rgba(212,175,55,0.4)",
              cursor: sessionId.trim() && state !== "loading" ? "pointer" : "not-allowed",
            }}
          >
            {state === "loading" ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                  <path d="M12 2a10 10 0 0 1 10 10" />
                </svg>
                Looking up…
              </span>
            ) : (
              "Look Up Order"
            )}
          </button>
        </form>

        {/* ------------------------------------------------------------------ */}
        {/* Result                                                               */}
        {/* ------------------------------------------------------------------ */}
        <div ref={resultRef} className="mt-8">

          {/* NOT FOUND */}
          {state === "not_found" && (
            <div
              className="rounded-2xl p-6 text-center"
              style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3"
                style={{ backgroundColor: "rgba(245,158,11,0.1)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 9v4M12 17h.01" />
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold mb-1" style={{ color: "#F5F5F0" }}>Not Found</h3>
              <p className="text-xs leading-relaxed mb-4" style={{ color: "#6b7280" }}>
                No order matched that session ID. Check your confirmation email and try again.
              </p>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => { setState("idle"); setSessionId(""); }}
                  className="px-4 py-2 text-xs rounded-lg font-medium"
                  style={{ backgroundColor: "rgba(255,255,255,0.06)", color: "#9ca3af" }}
                >
                  Try Again
                </button>
                <Link
                  href="/contact"
                  className="px-4 py-2 text-xs rounded-lg font-medium"
                  style={{ backgroundColor: "rgba(212,175,55,0.15)", color: "#d4af37" }}
                >
                  Contact Support
                </Link>
              </div>
            </div>
          )}

          {/* ERROR */}
          {state === "error" && (
            <div
              className="rounded-2xl p-5"
              style={{ backgroundColor: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.15)" }}
            >
              <p className="text-xs font-medium mb-3" style={{ color: "#f87171" }}>
                {errorMsg || "Something went wrong."}
              </p>
              <button
                onClick={() => setState("idle")}
                className="text-xs underline"
                style={{ color: "#6b7280" }}
              >
                Try again
              </button>
            </div>
          )}

          {/* FOUND */}
          {state === "found" && order && (
            <div
              className="rounded-2xl overflow-hidden"
              style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              {/* Top row */}
              <div
                className="px-6 py-4 flex flex-wrap items-center justify-between gap-3"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div>
                  <p className="text-xs uppercase tracking-widest font-medium mb-0.5" style={{ color: "#4b5563", letterSpacing: "0.1em" }}>
                    Session ID
                  </p>
                  <p className="text-xs font-mono" style={{ color: "#F5F5F0" }}>
                    {order.id.length > 32 ? `${order.id.slice(0, 32)}…` : order.id}
                  </p>
                </div>
                <StatusBadge status={order.payment_status ?? order.status ?? "open"} />
              </div>

              {/* Details grid */}
              <div className="px-6 py-5 grid grid-cols-2 gap-5">
                <div>
                  <p className="text-xs uppercase tracking-widest font-medium mb-1" style={{ color: "#4b5563", letterSpacing: "0.1em" }}>
                    Date
                  </p>
                  <p className="text-sm font-medium" style={{ color: "#F5F5F0" }}>
                    {fmtDate(order.created)}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-medium mb-1" style={{ color: "#4b5563", letterSpacing: "0.1em" }}>
                    Total
                  </p>
                  <p className="text-sm font-medium" style={{ color: "#F5F5F0" }}>
                    {order.amount_total != null
                      ? fmtCurrency(order.amount_total, order.currency || "usd")
                      : "—"}
                  </p>
                </div>
                {order.customer_email && (
                  <div className="col-span-2">
                    <p className="text-xs uppercase tracking-widest font-medium mb-1" style={{ color: "#4b5563", letterSpacing: "0.1em" }}>
                      Email
                    </p>
                    <p className="text-sm" style={{ color: "#9ca3af" }}>
                      {order.customer_email}
                    </p>
                  </div>
                )}
              </div>

              {/* Footer note */}
              <div
                className="px-6 py-4"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
              >
                <p className="text-xs leading-relaxed" style={{ color: "#4b5563" }}>
                  Shipping updates are emailed directly to you. Need help?{" "}
                  <Link href="/contact" className="underline" style={{ color: "#6b7280" }}>
                    Contact support
                  </Link>
                  .
                </p>
              </div>
            </div>
          )}
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Footer links                                                         */}
        {/* ------------------------------------------------------------------ */}
        <div className="mt-12 pt-8 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-xs mb-4" style={{ color: "#4b5563" }}>
            Looking for full order history?
          </p>
          <div className="flex items-center justify-center gap-6">
            <Link href="/account/orders" className="text-xs transition-colors" style={{ color: "#6b7280" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#d4af37")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
            >
              Full Order Lookup →
            </Link>
            <Link href="/contact" className="text-xs transition-colors" style={{ color: "#6b7280" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#d4af37")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
            >
              Contact Support →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
