import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { articles, getArticleBySlug, type BlogSection } from "@/lib/blog";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return { title: "Not Found" };

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://nexphoria.com/blog/${article.slug}`,
      type: "article",
      publishedTime: article.publishedAt,
      images: article.ogImage
        ? [{ url: article.ogImage, width: 1200, height: 630 }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: article.ogImage ? [article.ogImage] : undefined,
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

function RenderSection({ section }: { section: BlogSection }) {
  switch (section.type) {
    case "paragraph":
      return (
        <p
          className="text-base md:text-[17px] mb-6"
          style={{ color: "#2a2a2a", lineHeight: 1.8, fontWeight: 300 }}
        >
          {section.text}
        </p>
      );

    case "heading":
      return (
        <h2
          className="text-xl md:text-2xl mt-10 mb-4"
          style={{
            fontWeight: 500,
            color: "#010101",
            letterSpacing: "-0.01em",
            lineHeight: 1.25,
          }}
        >
          {section.text}
        </h2>
      );

    case "subheading":
      return (
        <h3
          className="text-base md:text-lg mt-7 mb-3"
          style={{ fontWeight: 500, color: "#010101", lineHeight: 1.3 }}
        >
          {section.text}
        </h3>
      );

    case "list":
      return (
        <ul className="mb-7 space-y-2 pl-5">
          {(section.items || []).map((item, i) => (
            <li
              key={i}
              className="text-base relative"
              style={{ color: "#2a2a2a", lineHeight: 1.75, fontWeight: 300 }}
            >
              <span
                className="absolute -left-4 top-2.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: "#A4B08A" }}
              />
              {item}
            </li>
          ))}
        </ul>
      );

    case "callout":
      return (
        <div
          className="rounded-lg px-6 py-5 my-8"
          style={{
            backgroundColor: "#F5F3EE",
            borderLeft: "3px solid #A4B08A",
          }}
        >
          <p
            className="text-sm md:text-base"
            style={{ color: "#333", lineHeight: 1.75, fontWeight: 300 }}
          >
            {section.text}
          </p>
        </div>
      );

    case "divider":
      return (
        <hr
          className="my-10"
          style={{ borderColor: "rgba(0,0,0,0.08)" }}
        />
      );

    default:
      return null;
  }
}

export default function BlogArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const canonicalUrl = `https://nexphoria.com/blog/${article.slug}`;
  const imageUrl = article.ogImage
    ? article.ogImage.startsWith("http")
      ? article.ogImage
      : `https://nexphoria.com${article.ogImage}`
    : "https://nexphoria.com/og-image.jpg";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    headline: article.title,
    description: article.description,
    image: {
      "@type": "ImageObject",
      url: imageUrl,
      width: 1200,
      height: 630,
    },
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      "@type": "Organization",
      name: "Nexphoria Research Team",
      url: "https://nexphoria.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Nexphoria",
      url: "https://nexphoria.com",
      logo: {
        "@type": "ImageObject",
        url: "https://nexphoria.com/logo.png",
        width: 200,
        height: 60,
      },
    },
    url: canonicalUrl,
    articleSection: article.category,
    keywords: article.category,
    wordCount: article.readMinutes * 200,
    timeRequired: `PT${article.readMinutes}M`,
    inLanguage: "en-US",
    isAccessibleForFree: true,
    isPartOf: {
      "@type": "Blog",
      name: "Nexphoria Research Journal",
      url: "https://nexphoria.com/blog",
    },
  };

  // Related articles: same category first, then fill with others — up to 3
  const sameCategory = articles.filter(
    (a) => a.slug !== article.slug && a.category === article.category
  );
  const otherCategory = articles.filter(
    (a) => a.slug !== article.slug && a.category !== article.category
  );
  const related = [...sameCategory, ...otherCategory].slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div style={{ backgroundColor: "#FFFFF3" }}>
        {/* Hero */}
        <section
          className="relative px-6 pt-32 pb-14 md:pt-40 md:pb-16"
          style={{ backgroundColor: "#010101" }}
        >
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm mb-8 hover:opacity-70 transition-opacity"
              style={{ color: "#A4B08A", letterSpacing: "0.06em" }}
            >
              <span aria-hidden>←</span> Research Journal
            </Link>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span
                className="text-xs uppercase tracking-widest px-3 py-1 rounded-full"
                style={{ backgroundColor: "#A4B08A", color: "#010101" }}
              >
                {article.category}
              </span>
              <span className="text-xs" style={{ color: "#666" }}>
                {formatDate(article.publishedAt)}
              </span>
              <span className="text-xs" style={{ color: "#666" }}>
                {article.readMinutes} min read
              </span>
            </div>

            <h1
              className="text-3xl md:text-5xl mb-6"
              style={{
                fontWeight: 500,
                color: "#FFFFF3",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              {article.title}
            </h1>
            <p
              className="text-base md:text-lg max-w-2xl"
              style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}
            >
              {article.description}
            </p>
          </div>
        </section>

        {/* Article body */}
        <section className="px-6 py-20 md:py-28">
          <div className="max-w-3xl mx-auto">
            <article>
              {article.body.map((section, i) => (
                <RenderSection key={i} section={section} />
              ))}
            </article>

            {/* Research disclaimer */}
            <div
              className="mt-12 rounded-lg px-6 py-5"
              style={{
                backgroundColor: "#F0EDE8",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#A4B08A" }}>
                Research Use Only
              </p>
              <p className="text-xs" style={{ color: "#777", lineHeight: 1.7 }}>
                All content on this site is for educational and research
                purposes only. Nexphoria compounds are sold exclusively for
                qualified research use. They are not intended for human
                consumption, therapeutic use, or diagnostic purposes. Nothing on
                this site constitutes medical advice.
              </p>
            </div>
          </div>
        </section>

        {/* Related articles */}
        {related.length > 0 && (
          <section
            className="px-6 py-20 md:py-28"
            style={{ backgroundColor: "#EAE7E3" }}
          >
            <div className="max-w-3xl mx-auto">
              <div className="flex items-baseline justify-between mb-7">
              <p
                className="text-xs uppercase tracking-widest"
                style={{ color: "#A4B08A" }}
              >
                Related Articles
              </p>
              <Link
                href="/blog"
                className="text-xs hover:opacity-70 transition-opacity"
                style={{ color: "#A4B08A" }}
              >
                All articles →
              </Link>
            </div>
              <div className={`grid gap-5 ${
                related.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"
              }`}>
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="group block rounded-lg p-6"
                    style={{
                      backgroundColor: "#FFFFF3",
                      border: "1px solid rgba(0,0,0,0.06)",
                    }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <p
                        className="text-xs uppercase tracking-widest"
                        style={{ color: "#A4B08A" }}
                      >
                        {rel.category}
                      </p>
                      {rel.category === article.category && (
                        <span
                          className="text-xs px-1.5 py-0.5 rounded-full"
                          style={{ backgroundColor: "#A4B08A", color: "#010101", fontSize: "0.6rem", letterSpacing: "0.05em" }}
                        >
                          RELATED
                        </span>
                      )}
                    </div>
                    <h3
                      className="text-base mb-2 group-hover:opacity-70 transition-opacity"
                      style={{
                        fontWeight: 400,
                        color: "#010101",
                        lineHeight: 1.3,
                      }}
                    >
                      {rel.title}
                    </h3>
                    <p
                      className="text-xs mb-3 line-clamp-2"
                      style={{ color: "#777", lineHeight: 1.6 }}
                    >
                      {rel.description}
                    </p>
                    <span
                      className="text-xs inline-flex items-center gap-1"
                      style={{ color: "#A4B08A" }}
                    >
                      {rel.readMinutes} min read <span aria-hidden>→</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="px-6 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <p
              className="text-xs uppercase tracking-widest mb-4"
              style={{ color: "#A4B08A" }}
            >
              Research Catalog
            </p>
            <h2
              className="text-3xl md:text-4xl mb-5 font-medium tracking-tight"
              style={{
                color: "#010101",
              }}
            >
              Browse the compounds.
            </h2>
            <Link
              href="/products"
              className="btn-primary"
            >
              View Catalog
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
