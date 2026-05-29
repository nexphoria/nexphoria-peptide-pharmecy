import type { Metadata } from "next";
import VialInventoryTracker from "./VialInventoryTracker";

export const metadata: Metadata = {
  title: "Vial Inventory Tracker | Nexphoria Research Tools",
  description:
    "Track your research peptide vial inventory: compound, lot number, quantity, reconstitution date, and expiry. Get low-stock alerts and days-until-expiry tracking. Stored locally in your browser.",
  keywords: [
    "peptide vial inventory",
    "research peptide tracker",
    "peptide storage tracker",
    "vial expiry tracker",
    "peptide reconstitution date",
    "research compound inventory",
    "peptide stock management",
    "BAC water vial tracker",
  ],
  openGraph: {
    title: "Vial Inventory Tracker — Nexphoria",
    description:
      "Manage your peptide vial inventory: track lot numbers, reconstitution dates, expiry timelines, and get low-stock alerts. All stored in your browser.",
    url: "https://nexphoria.com/tools/vial-inventory-tracker",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vial Inventory Tracker — Nexphoria",
    description:
      "Track peptide vial stock, reconstitution dates, and expiry. Low-stock alerts. Export to CSV.",
  },
};

export default function VialInventoryTrackerPage() {
  return <VialInventoryTracker />;
}
