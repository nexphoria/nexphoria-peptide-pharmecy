import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Subscription Confirmed | Nexphoria",
  description: "You're on the Nexphoria research updates list. Expect new compounds, batch releases, and protocol research in your inbox.",
  robots: { index: false, follow: false },
};

export default function SubscribeConfirmedPage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{ backgroundColor: "#111110", color: "#fff" }}
    >
      {/* Check icon */}
      <div
        className="flex items-center justify-center w-20 h-20 rounded-full mb-8"
        style={{ backgroundColor: "rgba(164,176,138,0.12)", border: "1.5px solid rgba(164,176,138,0.3)" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#B8A44C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-9 h-9"
          aria-hidden="true"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      {/* Heading */}
      <h1
        className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-3"
        style={{ color: "#fff" }}
      >
        You&apos;re on the list.
      </h1>
      <p
        className="text-base sm:text-lg text-center max-w-md mb-10 leading-relaxed"
        style={{ color: "rgba(255,255,255,0.5)" }}
      >
        New compounds, batch releases, and protocol research — delivered to your
        inbox. We keep it signal-only, no noise.
      </p>

      {/* CTA cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg mb-12">
        <Link
          href="/blog"
          className="group flex flex-col gap-2 p-5 rounded-xl border transition-all duration-200"
          style={{
            backgroundColor: "rgba(255,255,255,0.04)",
            borderColor: "rgba(255,255,255,0.1)",
          }}
        >
          <span
            className="text-[11px] uppercase tracking-widest font-medium"
            style={{ color: "#B8A44C" }}
          >
            Research Journal
          </span>
          <span className="text-sm font-semibold text-white">
            Read the latest articles
          </span>
          <span className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
            Compound profiles, protocol guides, and literature reviews.
          </span>
          <span
            className="text-xs font-medium mt-1 group-hover:underline"
            style={{ color: "#B8A44C" }}
          >
            Visit Blog &rarr;
          </span>
        </Link>

        <Link
          href="/tools"
          className="group flex flex-col gap-2 p-5 rounded-xl border transition-all duration-200"
          style={{
            backgroundColor: "rgba(255,255,255,0.04)",
            borderColor: "rgba(255,255,255,0.1)",
          }}
        >
          <span
            className="text-[11px] uppercase tracking-widest font-medium"
            style={{ color: "#B8A44C" }}
          >
            Research Tools
          </span>
          <span className="text-sm font-semibold text-white">
            Calculators &amp; guides
          </span>
          <span className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
            Reconstitution calculator, half-life tool, BAC water guide.
          </span>
          <span
            className="text-xs font-medium mt-1 group-hover:underline"
            style={{ color: "#B8A44C" }}
          >
            Open Tools &rarr;
          </span>
        </Link>
      </div>

      {/* Browse products CTA */}
      <Link
        href="/products"
        className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90"
        style={{ backgroundColor: "#B8A44C", color: "#1A1A18" }}
      >
        Browse the Catalog
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-4 h-4"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
            clipRule="evenodd"
          />
        </svg>
      </Link>

      {/* Fine print */}
      <p
        className="text-xs mt-12 text-center max-w-sm"
        style={{ color: "rgba(255,255,255,0.2)" }}
      >
        Nexphoria research updates. Unsubscribe any time by replying &ldquo;unsubscribe&rdquo;
        to any email. No human consumption content.
      </p>
    </main>
  );
}
