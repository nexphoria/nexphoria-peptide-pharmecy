import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/lib/blog";
import Breadcrumb from "@/components/Breadcrumb";
import { categoryToSlug } from "./category/[category]/page";

export const metadata: Metadata = {
  title: "Research Blog | Nexphoria",
  description:
    "Research-focused articles on peptide biochemistry, quality testing, handling protocols, and sourcing standards. Written for researchers, by researchers.",
  openGraph: {
    title: "Research Blog | Nexphoria",
    description:
      "Research-focused articles on peptide biochemistry, quality testing, handling protocols, and sourcing standards.",
    url: "https://nexphoria.com/blog",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Nexphoria Research Blog",
  url: "https://nexphoria.com/blog",
  description:
    "Research-focused articles on peptide biochemistry, quality testing, cold-chain logistics, and compound handling.",
  publisher: {
    "@type": "Organization",
    name: "Nexphoria",
    url: "https://nexphoria.com",
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const categoryColors: Record<string, string> = {
  "Research Fundamentals": "#B8A44C",
  "Quality & Testing": "#B8A44C",
  "Handling & Storage": "#B8A44C",
  "Compound Profiles": "#B8A44C",
};

// Derive unique categories with counts for the filter bar
function getCategoryStats(articleList: typeof articles) {
  const counts: Record<string, number> = {};
  for (const a of articleList) {
    counts[a.category] = (counts[a.category] ?? 0) + 1;
  }
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(([name, count]) => ({ name, count, slug: categoryToSlug(name) }));
}

export default function BlogIndexPage() {
  const sorted = [...articles].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const [featured, ...rest] = sorted;
  const categoryStats = getCategoryStats(articles);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <div style={{ backgroundColor: "#F9F9F9" }}>
        {/* Hero */}
        <section
          className="relative px-6 pt-32 pb-16 md:pt-40 md:pb-20"
          style={{ backgroundColor: "#010101" }}
        >
          <div className="max-w-5xl mx-auto">
            <Breadcrumb
              variant="dark"
              className="mb-6"
              items={[
                { label: "Home", href: "/" },
                { label: "Research Journal" },
              ]}
            />
            <p
              className="eyebrow mb-5"
              style={{ color: "#B8A44C" }}
            >
              Nexphoria Research
            </p>
            <h1
              className="text-4xl md:text-5xl mb-6"
              style={{
                fontWeight: 500,
                color: "#F9F9F9",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              The research journal.
            </h1>
            <p
              className="text-lg max-w-2xl"
              style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}
            >
              Technical articles on peptide biochemistry, quality standards,
              handling protocols, and the science behind the compounds we
              supply.
            </p>
          </div>
        </section>

        {/* Category filter nav */}
        <section
          className="px-6 py-5"
          style={{ backgroundColor: "#0e0e0e", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap gap-2 items-center">
              <span
                className="text-xs px-4 py-2 rounded-full"
                style={{
                  backgroundColor: "#B8A44C",
                  border: "1px solid #B8A44C",
                  color: "#010101",
                  fontWeight: 600,
                }}
              >
                All ({articles.length})
              </span>
              {categoryStats.map((c) => (
                <Link
                  key={c.slug}
                  href={`/blog/category/${c.slug}`}
                  className="text-xs px-4 py-2 rounded-full transition-colors hover:border-white/40 hover:text-white"
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "#A0A0A0",
                  }}
                >
                  {c.name} ({c.count})
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured article */}
        <section className="px-6 py-20 md:py-28" style={{ backgroundColor: "#EAE7E3" }}>
          <div className="max-w-5xl mx-auto">
            <p
              className="text-xs uppercase tracking-widest mb-6"
              style={{ color: "#B8A44C" }}
            >
              Featured Article
            </p>
            <div
              className="rounded-lg overflow-hidden group"
              style={{
                border: "1px solid rgba(0,0,0,0.06)",
                borderTop: `3px solid ${categoryColors[featured.category] || "#C9DD69"}`,
                backgroundColor: "#F9F9F9",
              }}
            >
              <div className="p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <Link
                    href={`/blog/category/${categoryToSlug(featured.category)}`}
                    className="text-xs uppercase tracking-widest px-3 py-1 rounded-full hover:opacity-80 transition-opacity"
                    style={{
                      backgroundColor:
                        categoryColors[featured.category] || "#C9DD69",
                      color: "#010101",
                    }}
                  >
                    {featured.category}
                  </Link>
                  <span className="text-xs" style={{ color: "#A0A0A0" }}>
                    {formatDate(featured.publishedAt)}
                  </span>
                  <span className="text-xs" style={{ color: "#A0A0A0" }}>
                    {featured.readMinutes} min read
                  </span>
                </div>
                <h2
                  className="text-2xl md:text-3xl mb-4"
                  style={{
                    fontWeight: 500,
                    color: "#010101",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.2,
                  }}
                >
                  <Link
                    href={`/blog/${featured.slug}`}
                    className="hover:opacity-80 transition-opacity"
                    style={{ color: "inherit" }}
                  >
                    {featured.title}
                  </Link>
                </h2>
                <p
                  className="text-base mb-6 max-w-2xl"
                  style={{ color: "#555", lineHeight: 1.7, fontWeight: 300 }}
                >
                  {featured.description}
                </p>
                <Link
                  href={`/blog/${featured.slug}`}
                  className="text-sm inline-flex items-center gap-2"
                  style={{ color: "#B8923A", fontWeight: 500 }}
                >
                  Read article
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Article grid */}
        <section className="px-6 py-20 md:py-28">
          <div className="max-w-5xl mx-auto">
            {rest.length > 0 && (
              <>
                <p
                  className="text-xs uppercase tracking-widest mb-8"
                  style={{ color: "#B8A44C" }}
                >
                  More Articles
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {rest.map((article) => (
                    <div
                      key={article.slug}
                      className="group"
                    >
                      <div
                        className="rounded-lg h-full"
                        style={{
                          border: "1px solid rgba(0,0,0,0.06)",
                          borderTop: `2px solid ${
                            categoryColors[article.category] || "#C9DD69"
                          }`,
                          backgroundColor: "#fff",
                        }}
                      >
                        <div className="p-7">
                          <div className="flex flex-wrap items-center gap-3 mb-4">
                            <Link
                              href={`/blog/category/${categoryToSlug(article.category)}`}
                              className="text-xs uppercase tracking-widest px-2 py-0.5 rounded-full hover:opacity-80 transition-opacity"
                              style={{
                                backgroundColor:
                                  categoryColors[article.category] || "#C9DD69",
                                color: "#010101",
                              }}
                            >
                              {article.category}
                            </Link>
                            <span
                              className="text-xs"
                              style={{ color: "#A0A0A0" }}
                            >
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
                            style={{
                              color: "#666",
                              lineHeight: 1.65,
                              fontWeight: 300,
                            }}
                          >
                            {article.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span
                              className="text-xs"
                              style={{ color: "#A0A0A0" }}
                            >
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
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* Bottom CTA */}
        <section
          className="px-6 py-20 md:py-28"
          style={{ backgroundColor: "#EAE7E3" }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <p
              className="text-xs uppercase tracking-widest mb-4"
              style={{ color: "#B8A44C" }}
            >
              Research Catalog
            </p>
            <h2
              className="text-3xl md:text-4xl mb-5 font-medium tracking-tight"
              style={{
                color: "#010101",
              }}
            >
              Ready to source?
            </h2>
            <p
              className="text-base mb-8 max-w-xl mx-auto"
              style={{ color: "#555", lineHeight: 1.7, fontWeight: 300 }}
            >
              Every compound in our catalog ships with lot-specific COAs from
              independent laboratories. ≥99% HPLC purity, verified identity,
              cold-chain handled.
            </p>
            <Link
              href="/products"
              className="btn-primary"
            >
              Browse the Catalog
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
