import { NextRequest, NextResponse } from "next/server";

/**
 * Webhook receiver for monitoring services (UptimeRobot, Better Stack, etc.)
 *
 * Set WEBHOOK_SECRET in Vercel env vars and pass it as
 * ?secret=<value> or in the Authorization header when configuring
 * your monitoring tool's alert webhook.
 *
 * Better Stack alert payload example:
 * POST /api/webhook?secret=xxx
 * { "monitor_url": "...", "reason": "...", "incident_id": "..." }
 *
 * UptimeRobot alert payload example:
 * POST /api/webhook?secret=xxx
 * { "monitorURL": "...", "alertType": "2" (down) | "1" (up), ... }
 *
 * This endpoint logs the event and returns 200. Wire up a Vercel KV
 * or external database write here to persist incidents automatically.
 */
export async function POST(req: NextRequest) {
  const secret = process.env.WEBHOOK_SECRET;

  if (secret) {
    const querySecret = req.nextUrl.searchParams.get("secret");
    const authHeader = req.headers.get("authorization");
    const bearerSecret = authHeader?.replace("Bearer ", "");
    if (querySecret !== secret && bearerSecret !== secret) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  console.log("[status-webhook] received alert:", JSON.stringify(body));

  return NextResponse.json({ received: true, timestamp: new Date().toISOString() });
}

export async function GET() {
  return NextResponse.json({ status: "webhook endpoint active" });
}
