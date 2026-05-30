"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { WAITLIST_URL } from "@/lib/endpoints";

/**
 * NewsletterPopup
 *
 * Exit-intent newsletter modal for Nexphoria.
 *
 * Triggers:
 *  - Desktop: mouseleave at top of viewport (clientY <= 0).
 *  - Mobile/touch: scroll-up burst after >=40% scroll depth, OR
 *    visibilitychange to "hidden" after >=15s of session time.
 *
 * Suppression rules:
 *  - Never shows before the age-verification modal is dismissed
 *    (we read the `age_verified` key the same way that modal sets it).
 *  - Never shows on /checkout, /account, /quiz, or /subscribe routes,
 *    where it would interrupt a conversion flow.
 *  - Dismissal (close/submit) suppresses for 30 days via localStorage.
 *  - Successful subscribe suppresses for 365 days.
 *  - Minimum 5s of session time before any trigger is allowed.
 *  - Only fires once per page load.
 */

const STORAGE_KEY = "nex_newsletter_popup";
const AGE_KEY = "age_verified";
const AGE_EXPIRY_MS = 86400000; // matches AgeVerificationModal
const DISMISS_DAYS = 30;
const SUCCESS_DAYS = 365;
const MIN_SESSION_MS = 5000;
const MOBILE_HIDDEN_MS = 15000;
const MOBILE_SCROLL_THRESHOLD = 0.4;

const SUPPRESSED_PATHS = [
  "/checkout",
  "/account",
  "/quiz",
  "/subscribe",
];

type StoredState = {
  dismissedAt?: number;
  subscribedAt?: number;
};

function readState(): StoredState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as StoredState;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function writeState(next: StoredState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Storage unavailable — fail silent.
  }
}

function isAgeVerified(): boolean {
  try {
    const ts = localStorage.getItem(AGE_KEY);
    if (ts && Date.now() - parseInt(ts, 10) < AGE_EXPIRY_MS) {
      return true;
    }
  } catch {
    // ignore
  }
  try {
    return sessionStorage.getItem("age_verified_session") === "true";
  } catch {
    return false;
  }
}

function isSuppressedByCooldown(state: StoredState): boolean {
  const now = Date.now();
  if (
    state.subscribedAt &&
    now - state.subscribedAt < SUCCESS_DAYS * 86400000
  ) {
    return true;
  }
  if (
    state.dismissedAt &&
    now - state.dismissedAt < DISMISS_DAYS * 86400000
  ) {
    return true;
  }
  return false;
}

function isSuppressedByRoute(): boolean {
  if (typeof window === "undefined") return false;
  const path = window.location.pathname || "/";
  return SUPPRESSED_PATHS.some(
    (prefix) => path === prefix || path.startsWith(`${prefix}/`)
  );
}

export default function NewsletterPopup() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const trigger = useCallback(() => {
    setOpen((wasOpen) => {
      if (wasOpen) return wasOpen;
      // Re-check suppression at trigger time in case state changed
      // (e.g. user just dismissed age modal, or storage got written).
      if (!isAgeVerified()) return wasOpen;
      if (isSuppressedByRoute()) return wasOpen;
      if (isSuppressedByCooldown(readState())) return wasOpen;
      return true;
    });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Hard suppression checks that don't change during the page lifetime.
    if (isSuppressedByRoute()) return;
    if (isSuppressedByCooldown(readState())) return;

    const mountedAt = Date.now();
    let armed = false;
    let lastScrollY = window.scrollY;
    let hiddenAt: number | null = null;

    const arm = () => {
      armed = true;
    };

    const armTimer = window.setTimeout(arm, MIN_SESSION_MS);

    const onMouseLeave = (e: MouseEvent) => {
      if (!armed) return;
      if (!isAgeVerified()) return;
      // Top-of-viewport exit on desktop. Many libraries also check
      // relatedTarget=null; we keep it simple and robust.
      if (e.clientY <= 0) {
        trigger();
      }
    };

    const onScroll = () => {
      if (!armed) return;
      if (!isAgeVerified()) return;
      const doc = document.documentElement;
      const max = Math.max(
        1,
        (doc.scrollHeight || 0) - (window.innerHeight || 0)
      );
      const depth = Math.min(1, Math.max(0, window.scrollY / max));
      const delta = window.scrollY - lastScrollY;
      lastScrollY = window.scrollY;
      // Fast scroll-up on mobile after meaningful engagement
      if (depth >= MOBILE_SCROLL_THRESHOLD && delta < -120) {
        trigger();
      }
    };

    const onVisibility = () => {
      if (!armed) return;
      if (!isAgeVerified()) return;
      if (document.visibilityState === "hidden") {
        hiddenAt = Date.now();
      } else if (document.visibilityState === "visible" && hiddenAt) {
        // User came back. If they were gone briefly after spending real
        // time on the page, treat as a soft exit signal.
        const sessionMs = Date.now() - mountedAt;
        if (sessionMs >= MOBILE_HIDDEN_MS) {
          trigger();
        }
        hiddenAt = null;
      }
    };

    document.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      window.clearTimeout(armTimer);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [trigger]);

  // Lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // ESC to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const handleClose = () => {
    setOpen(false);
    const prev = readState();
    writeState({ ...prev, dismissedAt: Date.now() });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "loading") return;
    setStatus("loading");

    try {
      const response = await fetch(WAITLIST_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "exit_intent_popup" }),
      });

      if (response.ok) {
        const prev = readState();
        writeState({ ...prev, subscribedAt: Date.now() });
        setStatus("success");
        setEmail("");
        return;
      }

      let alreadyRegistered = false;
      try {
        const data = await response.json();
        alreadyRegistered = data?.error === "already_registered";
      } catch {
        // ignore JSON parse failure
      }

      if (alreadyRegistered) {
        const prev = readState();
        writeState({ ...prev, subscribedAt: Date.now() });
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      if (process.env.NODE_ENV === "development") {
        console.error("Newsletter popup error:", err);
      }
      setStatus("error");
    }
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="nex-newsletter-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[90] flex items-center justify-center p-4"
        style={{ backgroundColor: "rgba(26, 26, 26, 0.85)" }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="nex-newsletter-title"
        aria-describedby="nex-newsletter-desc"
        onClick={(e) => {
          // Click outside content closes
          if (e.target === e.currentTarget) handleClose();
        }}
      >
        <motion.div
          key="nex-newsletter-panel"
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.98 }}
          transition={{ type: "spring", stiffness: 260, damping: 26 }}
          className="relative w-full max-w-lg border border-black/10 shadow-2xl"
          style={{ backgroundColor: "#FAF8F5" }}
        >
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close newsletter signup"
            className="absolute top-3 right-3 p-2 text-black/60 hover:text-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="px-8 pt-10 pb-8 sm:px-10 sm:pt-12 sm:pb-10">
            {status === "success" ? (
              <div className="text-center">
                <p
                  id="nex-newsletter-title"
                  className="font-cormorant text-3xl sm:text-4xl text-black leading-tight"
                >
                  You&apos;re on the list.
                </p>
                <p className="mt-4 text-sm text-grey-olive">
                  We&apos;ll send research updates, new compound briefings, and
                  early-access invitations to your inbox.
                </p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="mt-8 btn-acid group inline-flex items-center gap-2"
                >
                  Continue researching
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            ) : (
              <>
                <p
                  className="text-xs tracking-[0.2em] uppercase text-grey-olive"
                  id="nex-newsletter-eyebrow"
                >
                  Before you go
                </p>
                <h2
                  id="nex-newsletter-title"
                  className="mt-3 font-cormorant text-3xl sm:text-4xl text-black leading-tight"
                >
                  Research briefings, direct from the lab.
                </h2>
                <p
                  id="nex-newsletter-desc"
                  className="mt-4 text-sm sm:text-base text-grey-olive leading-relaxed"
                >
                  Join the Nexphoria research list for new compound launches,
                  protocol guides, and third-party COA releases. No marketing
                  noise. For qualified researchers and licensed professionals.
                </p>

                <form onSubmit={handleSubmit} className="mt-6">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <label htmlFor="nex-newsletter-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="nex-newsletter-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="researcher@institution.edu"
                      required
                      autoComplete="email"
                      disabled={status === "loading"}
                      className="nex-input flex-1"
                    />
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="btn-acid group whitespace-nowrap disabled:opacity-60"
                    >
                      {status === "loading" ? "Joining..." : "Join the list"}
                      {status !== "loading" && (
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      )}
                    </button>
                  </div>

                  {status === "error" && (
                    <p className="mt-3 text-xs text-red-600">
                      Something went wrong. Please try again in a moment.
                    </p>
                  )}

                  <p className="mt-4 text-[11px] tracking-wide text-grey-olive">
                    By subscribing, you confirm you are a qualified researcher
                    or licensed professional. Unsubscribe anytime.
                  </p>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
