"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface EmailCaptureProps {
  variant?: "dark" | "light";
}

export function EmailCapture({ variant = "dark" }: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setMessage("You're on the list. We'll be in touch.");
        setEmail("");
      } else {
        const data = await res.json();
        if (data.error === "already_registered") {
          setStatus("success");
          setMessage("This address is already registered.");
        } else {
          throw new Error("Registration failed");
        }
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div
        className={`text-center py-4 px-6 border rounded-sm ${
          variant === "dark"
            ? "border-brand-primary/40 text-brand-primary bg-brand-primary/5"
            : "border-near-black/20 text-near-black bg-near-black/5"
        }`}
      >
        <p className="text-sm font-medium tracking-wide">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="researcher@institution.edu"
          required
          disabled={status === "loading"}
          className={`flex-1 px-5 py-3.5 text-sm rounded-sm outline-none transition-colors ${
            variant === "dark"
              ? "bg-white/5 border border-white/10 text-white placeholder:text-stone/50 focus:border-brand-primary/50"
              : "bg-white border border-stone/20 text-near-black placeholder:text-stone/60 focus:border-near-black/40"
          }`}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="group flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-primary text-near-black text-sm font-medium rounded-sm hover:bg-brand-primary/90 transition-colors disabled:opacity-60 whitespace-nowrap"
        >
          {status === "loading" ? "Joining..." : "Join Waitlist"}
          {status !== "loading" && (
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          )}
        </button>
      </div>
      {status === "error" && (
        <p className="mt-3 text-xs text-red-400">{message}</p>
      )}
      <p
        className={`mt-3 text-xs ${
          variant === "dark" ? "text-stone/50" : "text-stone/70"
        }`}
      >
        For qualified researchers and licensed professionals only.
      </p>
    </form>
  );
}
