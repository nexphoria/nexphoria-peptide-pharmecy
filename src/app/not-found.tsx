import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#f5f0e8] flex flex-col items-center justify-center px-6 py-24">
      {/* Gold accent line */}
      <div className="w-16 h-px bg-[#c9a84c] mb-10" />

      {/* 404 */}
      <p className="text-[#c9a84c] text-sm tracking-[0.3em] uppercase font-light mb-4">
        Error 404
      </p>

      <h1 className="text-4xl md:text-6xl font-light tracking-tight text-center mb-6">
        Page Not Found
      </h1>

      <p className="text-[#a09880] text-base md:text-lg text-center max-w-md leading-relaxed mb-12">
        The compound you&apos;re looking for doesn&apos;t exist in our catalog —
        or it may have been moved. Try browsing our full product library.
      </p>

      {/* CTA buttons */}
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <Link
          href="/products"
          className="inline-block px-8 py-3 bg-[#c9a84c] text-[#0d0d0d] text-sm font-semibold tracking-widest uppercase hover:bg-[#b8963f] transition-colors"
        >
          Browse Products
        </Link>
        <Link
          href="/"
          className="inline-block px-8 py-3 border border-[#c9a84c]/40 text-[#c9a84c] text-sm font-light tracking-widest uppercase hover:border-[#c9a84c] transition-colors"
        >
          Return Home
        </Link>
      </div>

      {/* Bottom gold line */}
      <div className="w-16 h-px bg-[#c9a84c]/30 mt-16" />
    </div>
  );
}
