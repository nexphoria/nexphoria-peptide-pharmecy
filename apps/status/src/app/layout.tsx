import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexphoria Status",
  description: "Real-time status and incident history for Nexphoria services.",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
