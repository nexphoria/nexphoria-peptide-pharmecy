"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "nexphoria_recently_viewed";
const MAX_ITEMS = 8;

export function useRecentlyViewed(currentSlug?: string) {
  const [recentSlugs, setRecentSlugs] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Read existing
    let stored: string[] = [];
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) stored = JSON.parse(raw) as string[];
    } catch {
      stored = [];
    }

    // Add current slug to front, dedupe, cap
    if (currentSlug) {
      const updated = [
        currentSlug,
        ...stored.filter((s) => s !== currentSlug),
      ].slice(0, MAX_ITEMS);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch {}
      // Show all except current
      setRecentSlugs(updated.filter((s) => s !== currentSlug));
    } else {
      setRecentSlugs(stored);
    }
  }, [currentSlug]);

  return recentSlugs;
}
