import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Restore Stack — NAD+ + Epitalon Longevity Protocol | Nexphoria",
  description:
    "NAD+ + Epitalon — the physician-guided longevity stack for cellular energy restoration, telomere protection, and deep biological renewal. $329/mo.",
  alternates: { canonical: "https://nexphoria.com/stacks/restore" },
  openGraph: {
    title: "The Restore Stack — NAD+ + Epitalon | Nexphoria",
    description: "Cellular energy, telomere length, longevity — the Restore Stack protocol.",
    url: "https://nexphoria.com/stacks/restore",
    siteName: "Nexphoria",
    type: "website",
    images: [{ url: "https://nexphoria.com/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
