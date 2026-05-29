import type { Metadata } from "next";
import QuizClient from "./QuizClient";

export const metadata: Metadata = {
  title: "Find Your Research Protocol | Nexphoria",
  description:
    "Answer 5 quick questions to get a personalized research protocol recommendation. Discover which peptides match your research focus, experience level, and budget.",
  openGraph: {
    title: "Find Your Research Protocol | Nexphoria",
    description: "Personalized peptide research protocol recommendations in 60 seconds.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function QuizPage() {
  return <QuizClient />;
}
