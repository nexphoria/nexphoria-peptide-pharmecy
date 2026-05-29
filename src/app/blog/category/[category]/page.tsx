import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/lib/blog";
import Breadcrumb from "@/components/Breadcrumb";

interface Props {
  params: Promise<{ category: string }>;
}

// All valid categories — slug → display name
const categoryMap: Record<string, string> = {
  "compound-profiles": "Compound Profiles",
  "gh-axis": "GH Axis",
  "handling-storage": "Handling & Storage",
  "immunology": "Immunology",
  "longevity": "Longevity",
  "nootropics": "Nootropics",
  "quality-testing": "Quality & Testing",
  "research-fundamentals": "Research Fundamentals",
  "cosmetic": "Cosmetic",
};

// Inverse: display name → slug
const categorySlugMap: Record<string, string> = Object.fromEntries(
  Object.entries(categoryMap).map(([slug, name]) => [name, slug])
);

export function categoryToSlug(name: string): string {
  return categorySlugMap[name] ?? name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
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
    hasPart: categoryArticles.map((a) => ({
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

      <div style={{ backgroundColor: "#FFFFF3" }}>
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
            <p className="eyebrow mb-5" style={{ color: "#A4B08A" }}>
              Category
            </p>
            <h1
              className="text-4xl md:text-5xl mb-4"
              style={{
                fontWeight: 500,
                color: "#FFFFF3",
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
                          backgroundColor: "#A4B08A",
                          border: "1px solid #A4B08A",
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
              <div className="grid md:grid-cols-2 gap-6">
                {categoryArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="group block"
                  >
                    <div
                      className="rounded-lg h-full"
                      style={{
                        border: "1px solid rgba(0,0,0,0.06)",
                        borderTop: "2px solid #A4B08A",
                        backgroundColor: "#fff",
                        transition: "transform 0.2s, box-shadow 0.2s",
                      }}
                    >
                      <div className="p-7">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span
                            className="text-xs uppercase tracking-widest px-2 py-0.5 rounded-full"
                            style={{
                              backgroundColor: "#A4B08A",
                              color: "#010101",
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
                ))}
              </div>
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
                style={{ color: "#A4B08A" }}
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
