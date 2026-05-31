import type { Metadata } from "next";
import WholesaleClient from "./client";

export const metadata: Metadata = {
  title: "Wholesale & White-Label Peptides | Nexphoria",
  description:
    "Wholesale pricing, white-label manufacturing, and distributor programs for research institutions and qualified distributors. Custom synthesis and private-label peptide compounds.",
  alternates: {
    canonical: "https://nexphoria.com/wholesale",
  },
  openGraph: {
    title: "Wholesale & White-Label Peptides | Nexphoria",
    description:
      "Wholesale pricing, white-label manufacturing, and distributor programs for research institutions and qualified distributors.",
    url: "https://nexphoria.com/wholesale",
    siteName: "Nexphoria",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nexphoria Wholesale Programs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wholesale & White-Label Peptides | Nexphoria",
    description: "Wholesale pricing, white-label manufacturing, and distributor programs.",
    images: ["/og-image.jpg"],
  },
};

export default function WholesalePage() {
  return <WholesaleClient />;
}
