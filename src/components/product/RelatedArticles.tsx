"use client";

import Link from "next/link";
import { articles } from "@/lib/blog";

interface RelatedArticlesProps {
  articleSlugs: string[];
  productSlug?: string;
}

const CATEGORY_COLORS: Record<string, string> = {
  "Compound Profiles": "bg-amber-900/40 text-amber-200",
  "GH Axis": "bg-blue-900/40 text-blue-200",
  "Longevity": "bg-emerald-900/40 text-emerald-200",
  "Nootropics": "bg-violet-900/40 text-violet-200",
  "Immunology": "bg-red-900/40 text-red-200",
  "Quality & Testing": "bg-zinc-700/60 text-zinc-200",
  "Research Fundamentals": "bg-zinc-700/60 text-zinc-200",
  "Handling & Storage": "bg-teal-900/40 text-teal-200",
  "Cosmetic": "bg-pink-900/40 text-pink-200",
};

export default function RelatedArticles({ articleSlugs, productSlug }: RelatedArticlesProps) {
  const relatedArticles = articleSlugs
    .map((slug) => articles.find((a) => a.slug === slug))
    .filter(Boolean) as typeof articles;

  if (relatedArticles.length === 0) return null;

  return (
    <section
      className="py-14 border-t"
      style={{ borderColor: "rgba(255,255,255,0.08)", backgroundColor: "#0c0c0c" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-1"
              style={{ color: "#d4af37" }}
            >
              Research Journal
            </p>
            <h2 className="text-xl font-semibold text-white tracking-tight">
              Related Research Articles
            </h2>
          </div>
          <Link
            href={productSlug ? `/blog/tag/${productSlug}` : "/blog"}
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
            style={{ color: "#d4af37" }}
          >
            {productSlug ? `All ${productSlug.replace(/-/g, ' ').toUpperCase()} articles` : 'All articles'}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="opacity-70">
              <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Article cards */}
        <div
          className={`grid gap-4 ${
            relatedArticles.length === 1
              ? "grid-cols-1 max-w-lg"
              : relatedArticles.length === 2
              ? "grid-cols-1 sm:grid-cols-2 max-w-2xl"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {relatedArticles.map((article) => {
            const categoryClass =
              CATEGORY_COLORS[article.category] ?? "bg-zinc-700/60 text-zinc-200";
            return (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group block rounded-xl p-5 transition-all duration-200 border hover:border-white/20"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                {/* Category + read time */}
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`inline-block text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full ${categoryClass}`}
                  >
                    {article.category}
                  </span>
                  <span className="text-xs text-zinc-500">{article.readMinutes} min read</span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-semibold text-white leading-snug group-hover:text-amber-200 transition-colors line-clamp-2 mb-2">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                  {article.description}
                </p>

                {/* Read link */}
                <div
                  className="mt-4 flex items-center gap-1 text-xs font-medium group-hover:gap-2 transition-all"
                  style={{ color: "#d4af37" }}
                >
                  Read article
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2.5 6h7M6.5 3L9.5 6l-3 3"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Mobile: View all link */}
        <div className="mt-6 sm:hidden text-center">
          <Link
            href={productSlug ? `/blog/tag/${productSlug}` : "/blog"}
            className="text-sm font-medium underline underline-offset-4"
            style={{ color: "#d4af37" }}
          >
            View all research articles →
          </Link>
        </div>
      </div>
    </section>
  );
}
