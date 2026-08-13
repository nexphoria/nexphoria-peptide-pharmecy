import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles } from "@/lib/blog";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleCard from "@/components/ArticleCard";
import BlogPagination from "@/components/BlogPagination";
import {
  categoryMap,
  ARTICLES_PER_PAGE,
  totalPagesFor,
} from "@/lib/blog-categories";

interface Props {
  params: Promise<{ category: string; page: string }>;
}

function articlesFor(displayName: string) {
  return articles
    .filter((a) => a.category === displayName)
    .sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
}

export async function generateStaticParams() {
  const params: { category: string; page: string }[] = [];
  for (const [slug, displayName] of Object.entries(categoryMap)) {
    const total = totalPagesFor(articlesFor(displayName).length);
    // Page 1 is served by the category root.
    for (let n = 2; n <= total; n++) {
      params.push({ category: slug, page: String(n) });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, page } = await params;
  const displayName = categoryMap[category];
  if (!displayName) return { title: "Not Found" };
  const n = Number(page);
  return {
    title: `${displayName} — Page ${n} | Nexphoria Research`,
    description: `Research articles on ${displayName.toLowerCase()}.`,
    alternates: { canonical: `https://nexphoria.com/blog/category/${category}/page/${n}` },
    robots: { index: false, follow: true },
  };
}

export default async function BlogCategoryPaginated({ params }: Props) {
  const { category, page } = await params;
  const displayName = categoryMap[category];
  if (!displayName) notFound();

  const current = Number(page);
  const categoryArticles = articlesFor(displayName);
  const totalPages = totalPagesFor(categoryArticles.length);

  if (!Number.isInteger(current) || current < 2 || current > totalPages) {
    notFound();
  }

  const start = (current - 1) * ARTICLES_PER_PAGE;
  const pageArticles = categoryArticles.slice(start, start + ARTICLES_PER_PAGE);

  return (
    <div style={{ backgroundColor: "#F9F9F9" }}>
      <section
        className="relative px-6 pt-32 pb-12 md:pt-40 md:pb-16"
        style={{ backgroundColor: "#010101" }}
      >
        <div className="max-w-5xl mx-auto">
          <Breadcrumb
            variant="dark"
            className="mb-6"
            items={[
              { label: "Home", href: "/" },
              { label: "Research Journal", href: "/blog" },
              { label: displayName, href: `/blog/category/${category}` },
              { label: `Page ${current}` },
            ]}
          />
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
          <p className="text-base" style={{ fontWeight: 300, color: "#A0A0A0" }}>
            Page {current} of {totalPages} — {categoryArticles.length} articles.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {pageArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
          <BlogPagination
            currentPage={current}
            totalPages={totalPages}
            basePath={`/blog/category/${category}`}
          />
        </div>
      </section>
    </div>
  );
}
