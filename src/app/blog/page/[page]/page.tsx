import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles } from "@/lib/blog";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleCard from "@/components/ArticleCard";
import BlogPagination from "@/components/BlogPagination";
import { ARTICLES_PER_PAGE, totalPagesFor } from "@/lib/blog-categories";

interface Props {
  params: Promise<{ page: string }>;
}

/** Newest first, minus the featured article that heads /blog. */
function listing() {
  const sorted = [...articles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
  return sorted.slice(1);
}

export async function generateStaticParams() {
  const total = totalPagesFor(listing().length);
  // Page 1 is served by /blog itself.
  return Array.from({ length: Math.max(0, total - 1) }, (_, i) => ({
    page: String(i + 2),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { page } = await params;
  const n = Number(page);
  return {
    title: `Research Blog — Page ${n} | Nexphoria`,
    description:
      "Research-focused articles on peptide biochemistry, quality testing, handling protocols, and sourcing standards.",
    alternates: { canonical: `https://nexphoria.com/blog/page/${n}` },
    robots: { index: false, follow: true },
  };
}

export default async function BlogIndexPaginated({ params }: Props) {
  const { page } = await params;
  const current = Number(page);
  const rest = listing();
  const totalPages = totalPagesFor(rest.length);

  if (!Number.isInteger(current) || current < 2 || current > totalPages) {
    notFound();
  }

  const start = (current - 1) * ARTICLES_PER_PAGE;
  const pageArticles = rest.slice(start, start + ARTICLES_PER_PAGE);

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
              { label: `Page ${current}` },
            ]}
          />
          <p className="eyebrow mb-5" style={{ color: "#B8A44C" }}>
            Nexphoria Research
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
            The research journal.
          </h1>
          <p className="text-base" style={{ fontWeight: 300, color: "#A0A0A0" }}>
            Page {current} of {totalPages} — {rest.length + 1} articles in total.
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
            basePath="/blog"
          />
        </div>
      </section>
    </div>
  );
}
