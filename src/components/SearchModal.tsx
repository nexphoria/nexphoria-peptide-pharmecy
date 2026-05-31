"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight } from "lucide-react";
import { products } from "@/lib/products";
import { articles } from "@/lib/blog";
import Link from "next/link";
import { trackSearch } from "@/lib/analytics";

interface SearchResult {
  type: "product" | "article" | "page";
  title: string;
  subtitle?: string;
  href: string;
}

const STATIC_PAGES: SearchResult[] = [
  { type: "page", title: "About", href: "/about" },
  { type: "page", title: "Science & Testing", href: "/science" },
  { type: "page", title: "Contact", href: "/contact" },
  { type: "page", title: "Research Hub", href: "/resources" },
  { type: "page", title: "Research Blog", href: "/blog" },
  { type: "page", title: "Compound Index", href: "/compounds" },
  { type: "page", title: "FAQs", href: "/faq" },
  { type: "page", title: "Shipping & Cold-Chain", href: "/shipping" },
  { type: "page", title: "Tools", href: "/tools" },
];

export default function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Open with Cmd+K or Ctrl+K, or custom event
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    const handleOpenSearch = () => {
      setIsOpen(true);
    };
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-search", handleOpenSearch);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-search", handleOpenSearch);
    };
  }, [isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Fire search event after 600ms idle (debounced)
  useEffect(() => {
    if (!query.trim()) return;
    const timer = setTimeout(() => {
      trackSearch(query.trim());
    }, 600);
    return () => clearTimeout(timer);
  }, [query]);

  // Search logic
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setSelectedIndex(0);
      return;
    }

    const q = query.toLowerCase();
    const found: SearchResult[] = [];

    // Search products
    products
      .filter((p) => !p.comingSoon)
      .forEach((p) => {
        if (
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.tagline?.toLowerCase().includes(q)
        ) {
          found.push({
            type: "product",
            title: p.name,
            subtitle: p.category,
            href: `/products/${p.slug}`,
          });
        }
      });

    // Search articles
    articles.forEach((a) => {
      if (
        a.title.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q)
      ) {
        found.push({
          type: "article",
          title: a.title,
          subtitle: a.category,
          href: `/blog/${a.slug}`,
        });
      }
    });

    // Search static pages
    STATIC_PAGES.forEach((page) => {
      if (page.title.toLowerCase().includes(q)) {
        found.push(page);
      }
    });

    setResults(found.slice(0, 8));
    setSelectedIndex(0);
  }, [query]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || results.length === 0) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % results.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
      } else if (e.key === "Enter" && results[selectedIndex]) {
        e.preventDefault();
        handleNavigate(results[selectedIndex].href);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, results, selectedIndex]);

  const handleNavigate = (href: string) => {
    setIsOpen(false);
    setQuery("");
    router.push(href);
  };

  const handleClose = () => {
    setIsOpen(false);
    setQuery("");
  };

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 z-[60]"
            onClick={handleClose}
          />
        )}
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 sm:w-full sm:max-w-2xl sm:mx-4 z-[60] rounded-xl border shadow-2xl overflow-hidden"
            style={{ backgroundColor: "#FFFFFF", borderColor: "#E5E5E5" }}
          >
            {/* Search Input */}
            <div className="flex items-center gap-3 p-4 border-b" style={{ borderColor: "#E5E5E5" }}>
              <Search className="w-5 h-5 flex-shrink-0" style={{ color: "#666666" }} />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, articles, pages..."
                className="flex-1 bg-transparent text-base outline-none placeholder:text-[#666666]"
                style={{ color: "#1A1A1A" }}
              />
              <button
                onClick={handleClose}
                className="p-1 hover:opacity-70 transition-opacity flex-shrink-0"
                aria-label="Close search"
              >
                <X className="w-5 h-5" style={{ color: "#666666" }} />
              </button>
            </div>

            {/* Results */}
            <div className="max-h-96 overflow-y-auto">
              {query && results.length === 0 && (
                <div className="px-4 py-8 text-center text-sm" style={{ color: "#666666" }}>
                  No results found for &quot;{query}&quot;
                </div>
              )}
              {results.length > 0 && (
                <div className="py-2">
                  {results.map((result, index) => (
                    <button
                      key={`${result.type}-${result.href}`}
                      onClick={() => handleNavigate(result.href)}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className="w-full flex items-center gap-3 px-4 py-3 text-left transition-colors"
                      style={{
                        backgroundColor: index === selectedIndex ? "#F5F5F5" : "transparent",
                      }}
                    >
                      <div
                        className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0 text-xs font-medium uppercase"
                        style={{
                          backgroundColor:
                            result.type === "product"
                              ? "#B8A44C20"
                              : result.type === "article"
                              ? "#88888820"
                              : "#B8A44C10",
                          color:
                            result.type === "product"
                              ? "#B8A44C"
                              : result.type === "article"
                              ? "#666"
                              : "#B8A44C",
                        }}
                      >
                        {result.type === "product" ? "P" : result.type === "article" ? "A" : "Pg"}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate" style={{ color: "#1A1A1A" }}>
                          {result.title}
                        </div>
                        {result.subtitle && (
                          <div className="text-xs truncate" style={{ color: "#666666" }}>
                            {result.subtitle}
                          </div>
                        )}
                      </div>
                      {index === selectedIndex && (
                        <ArrowRight className="w-4 h-4 flex-shrink-0" style={{ color: "#B8A44C" }} />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Footer hint */}
            <div className="px-4 py-2 border-t text-xs" style={{ borderColor: "#E5E5E5", color: "#666666" }}>
              <div className="flex items-center gap-4">
                <span>↑↓ Navigate</span>
                <span>↵ Select</span>
                <span>Esc Close</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}

// Trigger button component to be used in header
export function SearchTrigger() {
  const handleClick = () => {
    // Dispatch custom event to open search
    window.dispatchEvent(new CustomEvent("open-search"));
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 px-3 py-1.5 text-xs rounded-md border transition-colors hover:bg-[#F5F5F5]"
      style={{ borderColor: "#E5E5E5", color: "#666666" }}
      aria-label="Open search"
    >
      <Search className="w-3.5 h-3.5" />
      <span className="hidden lg:inline">Search</span>
    </button>
  );
}
