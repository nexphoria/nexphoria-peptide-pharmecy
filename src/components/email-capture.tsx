"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface EmailCaptureProps {
  variant?: "dark" | "light";
}

export function EmailCapture({ variant = "dark" }: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 600));
    setStatus("success");
    setEmail("");
  };

  if (status === "success") {
    return (
      <div
        className={`py-4 px-5 border ${
          variant === "dark"
            ? "border-acid-green/30 text-acid-green bg-acid-green/5"
            : "border-black/20 text-black bg-black/5"
        }`}
      >
        <p className="text-sm font-medium tracking-wide">
          You&apos;re on the list. We&apos;ll be in touch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="researcher@institution.edu"
          required
          disabled={status === "loading"}
          className={variant === "dark" ? "nex-input-dark flex-1" : "nex-input flex-1"}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-acid group whitespace-nowrap disabled:opacity-60"
        >
          {status === "loading" ? "Joining..." : "Join Waitlist"}
          {status !== "loading" && (
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          )}
        </button>
      </div>
      <p
        className={`mt-3 text-xs ${
          variant === "dark" ? "text-grey-olive/60" : "text-grey-olive"
        }`}
      >
        For qualified researchers and licensed professionals only.
      </p>
    </form>
  );
}
