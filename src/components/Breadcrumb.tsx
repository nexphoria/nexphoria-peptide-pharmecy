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
        className={`flex items-center flex-wrap gap-1 ${className}`}
        style={{ fontSize: "0.6875rem", letterSpacing: "0.14em", textTransform: "uppercase" }}
      >
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <span key={idx} className="flex items-center gap-1">
              {idx > 0 && (
                <span
                  aria-hidden="true"
                  style={{ color: "#8E6C2F", fontSize: "0.75rem" }}
                >
                  ·
                </span>
              )}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={
                    isDark
                      ? "hover:text-white/80 transition-colors text-white/40"
                      : "hover:text-black transition-colors"
                  }
                  style={{ color: isDark ? undefined : "#AAA" }}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  style={{
                    color: isDark
                      ? isLast ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.4)"
                      : isLast ? "#555" : "#AAA",
                  }}
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
