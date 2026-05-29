import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/lib/blog";

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
  "Research Fundamentals": "#C9DD69",
  "Quality & Testing": "#B8923A",
  "Handling & Storage": "#7AA2C8",
  "Compound Profiles": "#C8A97A",
};

export default function BlogIndexPage() {
  const sorted = [...articles].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const [featured, ...rest] = sorted;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <div style={{ backgroundColor: "#FFFFF3" }}>
        {/* Hero */}
        <section
          className="relative px-6 pt-32 pb-16 md:pt-40 md:pb-20"
          style={{ backgroundColor: "#010101" }}
        >
          <div className="max-w-5xl mx-auto">
            <p
              className="text-xs uppercase tracking-widest mb-5"
              style={{ color: "#C9DD69" }}
            >
              Nexphoria Research
            </p>
            <h1
              className="text-4xl md:text-6xl mb-6"
              style={{
                fontWeight: 200,
                color: "#FFFFF3",
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

        {/* Featured article */}
        <section className="px-6 py-14 md:py-16" style={{ backgroundColor: "#EAE7E3" }}>
          <div className="max-w-5xl mx-auto">
            <p
              className="text-xs uppercase tracking-widest mb-6"
              style={{ color: "#B8923A" }}
            >
              Featured Article
            </p>
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div
                className="rounded-sm overflow-hidden"
                style={{
                  border: "1px solid rgba(0,0,0,0.06)",
                  borderTop: `3px solid ${categoryColors[featured.category] || "#C9DD69"}`,
                  backgroundColor: "#FFFFF3",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
              >
                <div className="p-8 md:p-12">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span
                      className="text-xs uppercase tracking-widest px-3 py-1 rounded-full"
                      style={{
                        backgroundColor:
                          categoryColors[featured.category] || "#C9DD69",
                        color: "#010101",
                      }}
                    >
                      {featured.category}
                    </span>
                    <span className="text-xs" style={{ color: "#A0A0A0" }}>
                      {formatDate(featured.publishedAt)}
                    </span>
                    <span className="text-xs" style={{ color: "#A0A0A0" }}>
                      {featured.readMinutes} min read
                    </span>
                  </div>
                  <h2
                    className="text-2xl md:text-3xl mb-4 group-hover:opacity-80 transition-opacity"
                    style={{
                      fontWeight: 300,
                      color: "#010101",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.2,
                    }}
                  >
                    {featured.title}
                  </h2>
                  <p
                    className="text-base mb-6 max-w-2xl"
                    style={{ color: "#555", lineHeight: 1.7, fontWeight: 300 }}
                  >
                    {featured.description}
                  </p>
                  <span
                    className="text-sm inline-flex items-center gap-2"
                    style={{ color: "#B8923A", fontWeight: 500 }}
                  >
                    Read article
                    <span aria-hidden>→</span>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Article grid */}
        <section className="px-6 py-14 md:py-16">
          <div className="max-w-5xl mx-auto">
            {rest.length > 0 && (
              <>
                <p
                  className="text-xs uppercase tracking-widest mb-8"
                  style={{ color: "#B8923A" }}
                >
                  More Articles
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {rest.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/blog/${article.slug}`}
                      className="group block"
                    >
                      <div
                        className="rounded-sm h-full"
                        style={{
                          border: "1px solid rgba(0,0,0,0.06)",
                          borderTop: `2px solid ${
                            categoryColors[article.category] || "#C9DD69"
                          }`,
                          backgroundColor: "#fff",
                          transition: "transform 0.2s, box-shadow 0.2s",
                        }}
                      >
                        <div className="p-7">
                          <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span
                              className="text-xs uppercase tracking-widest px-2 py-0.5 rounded-full"
                              style={{
                                backgroundColor:
                                  categoryColors[article.category] || "#C9DD69",
                                color: "#010101",
                              }}
                            >
                              {article.category}
                            </span>
                            <span
                              className="text-xs"
                              style={{ color: "#A0A0A0" }}
                            >
                              {article.readMinutes} min
                            </span>
                          </div>
                          <h3
                            className="text-lg mb-3 group-hover:opacity-80 transition-opacity"
                            style={{
                              fontWeight: 400,
                              color: "#010101",
                              lineHeight: 1.3,
                              letterSpacing: "-0.01em",
                            }}
                          >
                            {article.title}
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
              </>
            )}
          </div>
        </section>

        {/* Bottom CTA */}
        <section
          className="px-6 py-14 md:py-16"
          style={{ backgroundColor: "#EAE7E3" }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <p
              className="text-xs uppercase tracking-widest mb-4"
              style={{ color: "#B8923A" }}
            >
              Research Catalog
            </p>
            <h2
              className="text-3xl md:text-4xl mb-5"
              style={{
                fontWeight: 200,
                color: "#010101",
                letterSpacing: "-0.02em",
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
              className="inline-flex items-center gap-3 px-7 py-3.5 text-sm font-medium rounded-sm transition-opacity hover:opacity-85"
              style={{ backgroundColor: "#010101", color: "#FFFFF3" }}
            >
              Browse the catalog
              <span aria-hidden>→</span>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
