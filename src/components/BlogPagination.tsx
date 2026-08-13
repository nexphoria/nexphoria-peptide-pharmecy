import Link from "next/link";

interface Props {
  currentPage: number;
  totalPages: number;
  /** Listing root, e.g. "/blog" or "/blog/category/longevity". No trailing slash. */
  basePath: string;
}

/** Page 1 lives at basePath; later pages at basePath/page/N. */
function hrefFor(basePath: string, page: number) {
  return page === 1 ? basePath : `${basePath}/page/${page}`;
}

/**
 * Window of page numbers around the current page, always including the first
 * and last, with nulls marking gaps that render as an ellipsis. Keeps the
 * control to a fixed width across a 100+ page listing.
 */
function pageWindow(current: number, total: number): (number | null)[] {
  const pages = new Set<number>([1, total, current]);
  for (const p of [current - 1, current + 1]) {
    if (p >= 1 && p <= total) pages.add(p);
  }
  const sorted = [...pages].sort((a, b) => a - b);

  const out: (number | null)[] = [];
  let prev = 0;
  for (const p of sorted) {
    if (prev && p - prev > 1) out.push(null);
    out.push(p);
    prev = p;
  }
  return out;
}

export default function BlogPagination({ currentPage, totalPages, basePath }: Props) {
  if (totalPages <= 1) return null;

  const linkStyle = {
    border: "1px solid rgba(0,0,0,0.12)",
    color: "#010101",
    backgroundColor: "#fff",
  };
  const currentStyle = {
    border: "1px solid #B8A44C",
    backgroundColor: "#B8A44C",
    color: "#010101",
    fontWeight: 600,
  };

  return (
    <nav
      aria-label="Blog pagination"
      className="flex flex-wrap items-center justify-center gap-2 mt-14"
    >
      {currentPage > 1 && (
        <Link
          href={hrefFor(basePath, currentPage - 1)}
          rel="prev"
          className="text-sm px-4 py-2 rounded-full hover:opacity-80 transition-opacity"
          style={linkStyle}
        >
          ← Previous
        </Link>
      )}

      {pageWindow(currentPage, totalPages).map((p, i) =>
        p === null ? (
          <span key={`gap-${i}`} className="text-sm px-1" style={{ color: "#A0A0A0" }}>
            …
          </span>
        ) : p === currentPage ? (
          <span
            key={p}
            aria-current="page"
            className="text-sm px-4 py-2 rounded-full"
            style={currentStyle}
          >
            {p}
          </span>
        ) : (
          <Link
            key={p}
            href={hrefFor(basePath, p)}
            className="text-sm px-4 py-2 rounded-full hover:opacity-80 transition-opacity"
            style={linkStyle}
          >
            {p}
          </Link>
        ),
      )}

      {currentPage < totalPages && (
        <Link
          href={hrefFor(basePath, currentPage + 1)}
          rel="next"
          className="text-sm px-4 py-2 rounded-full hover:opacity-80 transition-opacity"
          style={linkStyle}
        >
          Next →
        </Link>
      )}
    </nav>
  );
}
