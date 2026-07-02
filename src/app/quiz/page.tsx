import type { Metadata } from "next";
import QuizClient from "./QuizClient";

export const metadata: Metadata = {
  title: "Find Your Protocol | Nexphoria",
  description:
    "Answer 10 quick questions to get a personalized peptide protocol recommendation from our physician team.",
  openGraph: {
    title: "Find Your Protocol | Nexphoria",
    description:
      "Personalized peptide protocol recommendations reviewed by board-certified physicians.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  robots: { index: false, follow: false },
};

export default function QuizPage() {
  return <QuizClient />;
}

