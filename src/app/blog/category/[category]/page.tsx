import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/lib/blog";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleCard from "@/components/ArticleCard";
import BlogPagination from "@/components/BlogPagination";
import {
  categoryMap,
  categoryToSlug,
  ARTICLES_PER_PAGE,
  totalPagesFor,
} from "@/lib/blog-categories";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  const slugs = new Set<string>();
  for (const a of articles) {
    const slug = categoryToSlug(a.category);
    slugs.add(slug);
  }
  return Array.from(slugs).map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const displayName = categoryMap[category];
  if (!displayName) return { title: "Not Found" };

  return {
    title: `${displayName} Articles | Nexphoria Research Journal`,
    description: `Browse all ${displayName} research articles from the Nexphoria Journal. In-depth compound profiles, protocols, and scientific reviews.`,
    openGraph: {
      title: `${displayName} | Nexphoria Research`,
      description: `Browse all ${displayName} research articles from Nexphoria.`,
      url: `https://nexphoria.com/blog/category/${category}`,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
    alternates: {
      canonical: `https://nexphoria.com/blog/category/${category}`,
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

const ALL_CATEGORIES = Object.entries(categoryMap).map(([slug, name]) => ({
  slug,
  name,
}));

export default async function BlogCategoryPage({ params }: Props) {
  const { category } = await params;
  const displayName = categoryMap[category];
  if (!displayName) notFound();

  const categoryArticles = articles
    .filter((a) => a.category === displayName)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

  const totalPages = totalPagesFor(categoryArticles.length);
  const pageArticles = categoryArticles.slice(0, ARTICLES_PER_PAGE);

  // Count for each category
  const categoryCounts: Record<string, number> = {};
  for (const a of articles) {
    const slug = categoryToSlug(a.category);
    categoryCounts[slug] = (categoryCounts[slug] ?? 0) + 1;
  }

  const categorySchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${displayName} — Nexphoria Research Journal`,
    url: `https://nexphoria.com/blog/category/${category}`,
    description: `All ${displayName} articles from the Nexphoria Research Journal.`,
    publisher: {
      "@type": "Organization",
      name: "Nexphoria",
      url: "https://nexphoria.com",
    },
    // Only the articles actually on this page — describing all of them here
    // put the entire category back into the document as structured data.
    hasPart: pageArticles.map((a) => ({
      "@type": "BlogPosting",
      headline: a.title,
      url: `https://nexphoria.com/blog/${a.slug}`,
      datePublished: a.publishedAt,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(categorySchema) }}
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
                { label: displayName },
              ]}
            />
            <p className="eyebrow mb-5" style={{ color: "#B8A44C" }}>
              Category
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
              className="text-base"
              style={{ color: "#A0A0A0", fontWeight: 300 }}
            >
              {categoryArticles.length} article
              {categoryArticles.length !== 1 ? "s" : ""}
            </p>
          </div>
        </section>

        {/* Category filter pills */}
        <section
          className="px-6 py-8"
          style={{ backgroundColor: "#0e0e0e", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap gap-2 items-center">
              <Link
                href="/blog"
                className="text-xs px-4 py-2 rounded-full transition-colors"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#A0A0A0",
                }}
              >
                All Articles ({articles.length})
              </Link>
              {ALL_CATEGORIES.filter(
                (c) => (categoryCounts[c.slug] ?? 0) > 0
              ).map((c) => (
                <Link
                  key={c.slug}
                  href={`/blog/category/${c.slug}`}
                  className="text-xs px-4 py-2 rounded-full transition-colors"
                  style={
                    c.slug === category
                      ? {
                          backgroundColor: "#B8A44C",
                          border: "1px solid #B8A44C",
                          color: "#010101",
                          fontWeight: 600,
                        }
                      : {
                          backgroundColor: "transparent",
                          border: "1px solid rgba(255,255,255,0.2)",
                          color: "#A0A0A0",
                        }
                  }
                >
                  {c.name} ({categoryCounts[c.slug] ?? 0})
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Article grid */}
        <section className="px-6 py-20 md:py-28">
          <div className="max-w-5xl mx-auto">
            {categoryArticles.length === 0 ? (
              <div className="text-center py-20">
                <p style={{ color: "#666" }}>No articles in this category yet.</p>
                <Link
                  href="/blog"
                  className="mt-6 inline-block text-sm"
                  style={{ color: "#B8923A" }}
                >
                  ← Back to all articles
                </Link>
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 gap-6">
                  {pageArticles.map((article) => (
                    <ArticleCard key={article.slug} article={article} />
                  ))}
                </div>
                <BlogPagination
                  currentPage={1}
                  totalPages={totalPages}
                  basePath={`/blog/category/${category}`}
                />
              </>
            )}
          </div>
        </section>

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
            <div className="mt-8 pt-8" style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}>
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
