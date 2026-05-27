"use client";

import { useEffect } from "react";

export default function HydrationMarker() {
  useEffect(() => {
    document.body.classList.add("hydrated");
  }, []);
  return null;
}
