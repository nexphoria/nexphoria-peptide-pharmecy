import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/lib/blog";
import {
  getAllTagSlugs,
  getArticlesByTag,
  getTagDisplayName,
  TAG_DISPLAY_NAMES,
} from "@/lib/article-tags";
import { getProduct } from "@/lib/products";
import Breadcrumb from "@/components/Breadcrumb";

interface Props {
  params: Promise<{ tag: string }>;
}

export async function generateStaticParams() {
  return getAllTagSlugs().map((tag) => ({ tag }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  const displayName = getTagDisplayName(tag);
  const tagArticles = getArticlesByTag(tag);
  if (tagArticles.length === 0) return { title: "Not Found" };

  const product = getProduct(tag);
  const description = product
    ? `Browse ${tagArticles.length} research article${tagArticles.length !== 1 ? "s" : ""} on ${displayName} — covering mechanism of action, dosing protocols, study design, and more.`
    : `All research articles tagged ${displayName} — in-depth guides and protocol reviews from the Nexphoria Research Journal.`;

  return {
    title: `${displayName} Research Articles | Nexphoria Journal`,
    description,
    openGraph: {
      title: `${displayName} Research Articles — Nexphoria Journal`,
      description,
      url: `https://nexphoria.com/blog/tag/${tag}`,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
    alternates: {
      canonical: `https://nexphoria.com/blog/tag/${tag}`,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Category color map (matches blog index)
const CATEGORY_COLORS: Record<string, string> = {
  "Compound Profiles": "#B8A44C",
  "GH Axis": "#5B8A5E",
  "Longevity": "#7B5EA7",
  "Nootropics": "#3A7DC9",
  "Handling & Storage": "#C97A3A",
  "Immunology": "#C93A3A",
  "Quality & Testing": "#3A8FC9",
  "Research Fundamentals": "#4A9B8C",
  "Cosmetic": "#C93A7A",
  "Metabolic": "#8FC93A",
};

const DEFAULT_COLOR = "#B8A44C";

export default async function BlogTagPage({ params }: Props) {
  const { tag } = await params;
  const tagArticles = getArticlesByTag(tag);

  if (tagArticles.length === 0) notFound();

  const displayName = getTagDisplayName(tag);
  const product = getProduct(tag);

  // Build tag cloud — all tags with ≥1 article, sorted by article count
  const allTags = Object.keys(TAG_DISPLAY_NAMES)
    .map((slug) => ({
      slug,
      displayName: getTagDisplayName(slug),
      count: getArticlesByTag(slug).length,
    }))
    .filter((t) => t.count > 0)
    .sort((a, b) => b.count - a.count)
    .slice(0, 30); // top 30 by article count

  const tagSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${displayName} Research Articles — Nexphoria Journal`,
    url: `https://nexphoria.com/blog/tag/${tag}`,
    description: `Research articles tagged ${displayName} from the Nexphoria Research Journal.`,
    publisher: {
      "@type": "Organization",
      name: "Nexphoria",
      url: "https://nexphoria.com",
    },
    hasPart: tagArticles.map((a) => ({
      "@type": "BlogPosting",
      headline: a!.title,
      url: `https://nexphoria.com/blog/${a!.slug}`,
      datePublished: a!.publishedAt,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tagSchema) }}
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
                { label: "Research Journal", href: "/blog" },
                { label: `${displayName} Articles` },
              ]}
            />
            <p className="eyebrow mb-5" style={{ color: "#B8A44C" }}>
              Compound Tag
            </p>
            <h1
              className="text-4xl md:text-5xl mb-4"
              style={{
                fontWeight: 500,
                color: "#F9F9F9",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              {displayName}
            </h1>
            <p
              className="text-base mb-6"
              style={{ color: "#A0A0A0", fontWeight: 300 }}
            >
              {tagArticles.length} research article
              {tagArticles.length !== 1 ? "s" : ""} in this compound library
            </p>

            {/* Product CTA if compound has a product page */}
            {product && (
              <Link
                href={`/products/${tag}`}
                className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full transition-colors"
                style={{
                  backgroundColor: "rgba(184, 164, 76, 0.15)",
                  border: "1px solid rgba(184, 164, 76, 0.4)",
                  color: "#B8A44C",
                }}
              >
                <span>View {displayName} in Catalog</span>
                <span aria-hidden>→</span>
              </Link>
            )}
          </div>
        </section>

        {/* Tag cloud strip */}
        <section
          className="px-6 py-8 overflow-x-auto"
          style={{
            backgroundColor: "#0e0e0e",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <div className="max-w-5xl mx-auto">
            <p
              className="text-xs uppercase tracking-widest mb-4"
              style={{ color: "#666" }}
            >
              Compound Index
            </p>
            <div className="flex flex-wrap gap-2">
              {allTags.map((t) => (
                <Link
                  key={t.slug}
                  href={`/blog/tag/${t.slug}`}
                  className="text-xs px-3 py-1.5 rounded-full transition-colors whitespace-nowrap"
                  style={
                    t.slug === tag
                      ? {
                          backgroundColor: "#B8A44C",
                          border: "1px solid #B8A44C",
                          color: "#010101",
                          fontWeight: 600,
                        }
                      : {
                          backgroundColor: "transparent",
                          border: "1px solid rgba(255,255,255,0.15)",
                          color: "#888",
                        }
                  }
                >
                  {t.displayName}
                  <span
                    className="ml-1.5 opacity-60"
                    style={{ fontSize: "0.65rem" }}
                  >
                    {t.count}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Article grid */}
        <section className="px-6 py-20 md:py-28">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {tagArticles.map((article) => {
                if (!article) return null;
                const catColor =
                  CATEGORY_COLORS[article.category] ?? DEFAULT_COLOR;
                return (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="group block"
                  >
                    <div
                      className="rounded-lg h-full"
                      style={{
                        border: "1px solid rgba(0,0,0,0.06)",
                        borderTop: `2px solid ${catColor}`,
                        backgroundColor: "#fff",
                        transition: "transform 0.2s, box-shadow 0.2s",
                      }}
                    >
                      <div className="p-7">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span
                            className="text-xs uppercase tracking-widest px-2 py-0.5 rounded-full"
                            style={{
                              backgroundColor: catColor,
                              color:
                                catColor === "#B8A44C" ? "#010101" : "#fff",
                            }}
                          >
                            {article.category}
                          </span>
                          <span
                            className="text-xs"
                            style={{ color: "#A0A0A0" }}
                          >
                            {article.readMinutes} min read
                          </span>
                        </div>
                        <h2
                          className="text-lg mb-3 group-hover:opacity-80 transition-opacity"
                          style={{
                            fontWeight: 500,
                            color: "#010101",
                            lineHeight: 1.3,
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {article.title}
                        </h2>
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
                          <span
                            className="text-xs inline-flex items-center gap-1"
                            style={{ color: "#B8923A", fontWeight: 500 }}
                          >
                            Read <span aria-hidden>→</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Related Resources */}
        {product && (
          <section
            className="px-6 py-16"
            style={{
              backgroundColor: "#0e0e0e",
              borderTop: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div className="max-w-5xl mx-auto">
              <p className="eyebrow mb-6" style={{ color: "#B8A44C" }}>
                Research Resources
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link
                  href={`/products/${tag}`}
                  className="group block rounded-lg p-5"
                  style={{
                    border: "1px solid rgba(255,255,255,0.1)",
                    backgroundColor: "rgba(255,255,255,0.03)",
                  }}
                >
                  <p
                    className="text-xs uppercase tracking-widest mb-2"
                    style={{ color: "#B8A44C" }}
                  >
                    Catalog
                  </p>
                  <p
                    className="text-sm font-medium mb-1"
                    style={{ color: "#F9F9F9" }}
                  >
                    {displayName} Product Page
                  </p>
                  <p className="text-xs" style={{ color: "#666" }}>
                    Specifications, COA, dosages, pricing
                  </p>
                </Link>
                <Link
                  href="/tools/reconstitution-calculator"
                  className="group block rounded-lg p-5"
                  style={{
                    border: "1px solid rgba(255,255,255,0.1)",
                    backgroundColor: "rgba(255,255,255,0.03)",
                  }}
                >
                  <p
                    className="text-xs uppercase tracking-widest mb-2"
                    style={{ color: "#B8A44C" }}
                  >
                    Tool
                  </p>
                  <p
                    className="text-sm font-medium mb-1"
                    style={{ color: "#F9F9F9" }}
                  >
                    Reconstitution Calculator
                  </p>
                  <p className="text-xs" style={{ color: "#666" }}>
                    Calculate BAC water volume and doses per vial
                  </p>
                </Link>
                <Link
                  href="/tools/peptide-interaction-checker"
                  className="group block rounded-lg p-5"
                  style={{
                    border: "1px solid rgba(255,255,255,0.1)",
                    backgroundColor: "rgba(255,255,255,0.03)",
                  }}
                >
                  <p
                    className="text-xs uppercase tracking-widest mb-2"
                    style={{ color: "#B8A44C" }}
                  >
                    Tool
                  </p>
                  <p
                    className="text-sm font-medium mb-1"
                    style={{ color: "#F9F9F9" }}
                  >
                    Interaction Checker
                  </p>
                  <p className="text-xs" style={{ color: "#666" }}>
                    Check compatibility with other compounds
                  </p>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Back to journal CTA */}
        <section
          className="px-6 py-16"
          style={{ backgroundColor: "#EAE7E3" }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <Link
              href="/blog"
              className="text-sm inline-flex items-center gap-2"
              style={{ color: "#B8923A", fontWeight: 500 }}
            >
              <span aria-hidden>←</span> All Research Articles
            </Link>
            <div
              className="mt-8 pt-8"
              style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}
            >
              <p
                className="text-xs uppercase tracking-widest mb-4"
                style={{ color: "#B8A44C" }}
              >
                Research Catalog
              </p>
              <h2
                className="text-2xl md:text-3xl mb-5 font-medium tracking-tight"
                style={{ color: "#010101" }}
              >
                Ready to source?
              </h2>
              <Link href="/products" className="btn-primary">
                Browse the Catalog
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
