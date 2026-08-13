import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Growth Protocol — CJC-1295 + Ipamorelin HGH Stack | Nexphoria",
  description:
    "CJC-1295 + Ipamorelin — the physician-guided growth hormone secretagogue protocol for deeper sleep, elevated HGH, faster recovery, and lean muscle. $279/mo.",
  alternates: { canonical: "https://nexphoria.com/stacks/growth" },
  openGraph: {
    title: "The Growth Protocol — CJC-1295 + Ipamorelin | Nexphoria",
    description: "Sleep, HGH, recovery, muscle. The Growth Protocol stack.",
    url: "https://nexphoria.com/stacks/growth",
    siteName: "Nexphoria",
    type: "website",
    images: [{ url: "https://nexphoria.com/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
