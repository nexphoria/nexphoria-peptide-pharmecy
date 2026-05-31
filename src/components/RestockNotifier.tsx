"use client";

import { useState } from "react";
import { RESTOCK_NOTIFY_URL } from "@/lib/endpoints";

interface RestockNotifierProps {
  productSlug: string;
  productName: string;
  /** When true the component renders as a full standalone section block. */
  block?: boolean;
}

type Status = "idle" | "submitting" | "success" | "error" | "already";

export default function RestockNotifier({
  productSlug,
  productName,
  block = false,
}: RestockNotifierProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch(RESTOCK_NOTIFY_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), productSlug, productName }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        const data = await res.json().catch(() => ({}));
        if (data?.error === "invalid_email") {
          setErrorMsg("Please enter a valid email address.");
        } else {
          setErrorMsg("Something went wrong. Please try again.");
        }
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className={
          block
            ? "rounded-xl border border-[#D8D4CC] bg-[#F7F4EE] p-6 text-center"
            : "text-center py-2"
        }
      >
        <p className="text-sm font-medium text-[#3A3A3A]">
          You&rsquo;re on the list.
        </p>
        <p className="mt-1 text-xs text-[#8A8075]">
          We&rsquo;ll notify you at <strong>{email || "your email"}</strong> the
          moment {productName} is back in stock.
        </p>
      </div>
    );
  }

  return (
    <div
      className={
        block
          ? "rounded-xl border border-[#D8D4CC] bg-[#F7F4EE] p-6"
          : undefined
      }
    >
      {block && (
        <div className="mb-4">
          <p className="eyebrow mb-1">Out of Stock</p>
          <h3 className="text-base font-semibold text-[#3A3A3A]">
            Notify me when available
          </h3>
          <p className="mt-1 text-xs text-[#8A8075]">
            Enter your email and we&rsquo;ll send you a one-time alert as soon
            as {productName} is restocked.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          disabled={status === "submitting"}
          className="nex-input flex-1 min-w-0 text-sm"
          aria-label="Email address for restock notification"
        />
        <button
          type="submit"
          disabled={status === "submitting" || !email.trim()}
          className="btn-acid shrink-0 px-5 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "..." : "Notify me"}
        </button>
      </form>

      {status === "error" && (
        <p className="mt-2 text-xs text-red-500">{errorMsg}</p>
      )}

      {!block && (
        <p className="mt-2 text-xs text-[#8A8075]">
          One-time alert when back in stock. No spam.
        </p>
      )}
    </div>
  );
}
