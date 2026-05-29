import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  /** "dark" = white text on dark bg (blog/tools hero sections), "light" = dark text on light bg (products) */
  variant?: "dark" | "light";
  className?: string;
}

/**
 * Reusable breadcrumb component. Renders both visual nav + BreadcrumbList JSON-LD.
 * Usage:
 *   <Breadcrumb items={[
 *     { label: "Home", href: "/" },
 *     { label: "Blog", href: "/blog" },
 *     { label: "Article Title" },
 *   ]} variant="dark" />
 */
export default function Breadcrumb({
  items,
  variant = "light",
  className = "",
}: BreadcrumbProps) {
  const isDark = variant === "dark";

  // Build JSON-LD BreadcrumbList schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.label,
      ...(item.href
        ? { item: `https://nexphoria.com${item.href}` }
        : {}),
    })),
  };

  return (
    <>
      {/* JSON-LD BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Visual breadcrumb nav */}
      <nav
        aria-label="Breadcrumb"
        className={`flex items-center flex-wrap gap-1 text-xs ${className}`}
      >
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <span key={idx} className="flex items-center gap-1">
              {idx > 0 && (
                <span
                  aria-hidden="true"
                  className={isDark ? "text-white/30" : "text-black/25"}
                >
                  /
                </span>
              )}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={
                    isDark
                      ? "hover:text-white/80 transition-colors text-white/50"
                      : "hover:text-black transition-colors text-black/50"
                  }
                  style={{ letterSpacing: "0.04em" }}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={
                    isDark
                      ? isLast
                        ? "text-white/80"
                        : "text-white/50"
                      : isLast
                      ? "text-black/70"
                      : "text-black/50"
                  }
                  style={{ letterSpacing: "0.04em" }}
                >
                  {item.label}
                </span>
              )}
            </span>
          );
        })}
      </nav>
    </>
  );
}
