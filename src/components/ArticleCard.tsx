import Link from "next/link";
import type { BlogArticle } from "@/lib/blog-types";
import { categoryToSlug, categoryColors } from "@/lib/blog-categories";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * ArticleCard — one article tile in a blog listing grid.
 *
 * Extracted from the blog index so the paginated index and category routes
 * render identical markup instead of duplicating it three times.
 */
export default function ArticleCard({ article }: { article: BlogArticle }) {
  return (
    <div className="group">
      <div
        className="rounded-lg h-full"
        style={{
          border: "1px solid rgba(0,0,0,0.06)",
          borderTop: `2px solid ${categoryColors[article.category] || "#C9DD69"}`,
          backgroundColor: "#fff",
        }}
      >
        <div className="p-7">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Link
              href={`/blog/category/${categoryToSlug(article.category)}`}
              className="text-xs uppercase tracking-widest px-2 py-0.5 rounded-full hover:opacity-80 transition-opacity"
              style={{
                backgroundColor: categoryColors[article.category] || "#C9DD69",
                color: "#010101",
              }}
            >
              {article.category}
            </Link>
            <span className="text-xs" style={{ color: "#A0A0A0" }}>
              {article.readMinutes} min
            </span>
          </div>
          <h3
            className="text-lg mb-3"
            style={{
              fontWeight: 500,
              color: "#010101",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            <Link
              href={`/blog/${article.slug}`}
              className="hover:opacity-80 transition-opacity"
              style={{ color: "inherit" }}
            >
              {article.title}
            </Link>
          </h3>
          <p
            className="text-sm mb-5"
            style={{ color: "#666", lineHeight: 1.65, fontWeight: 300 }}
          >
            {article.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xs" style={{ color: "#A0A0A0" }}>
              {formatDate(article.publishedAt)}
            </span>
            <Link
              href={`/blog/${article.slug}`}
              className="text-xs inline-flex items-center gap-1"
              style={{ color: "#B8923A", fontWeight: 500 }}
            >
              Read <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
