"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function WolverineRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/products/wolverine-blend");
  }, [router]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <p className="text-white/60 text-sm">Redirecting to Wolverine Blend…</p>
    </div>
  );
}
