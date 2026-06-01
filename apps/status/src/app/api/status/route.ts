import { NextResponse } from "next/server";
import { checkAllServices, overallStatus } from "@/lib/services";

export const dynamic = "force-dynamic";

export async function GET() {
  const results = await checkAllServices();
  const status = overallStatus(results);

  return NextResponse.json(
    {
      status,
      services: results,
      generatedAt: new Date().toISOString(),
    },
    {
      headers: {
        "Cache-Control": "no-store",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
}
