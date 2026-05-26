import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

interface ContactEntry {
  name: string;
  email: string;
  institution: string;
  inquiryType: string;
  message: string;
  timestamp: string;
}

const DATA_FILE = path.join(process.cwd(), "data", "contacts.json");

async function readContacts(): Promise<ContactEntry[]> {
  try {
    const content = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(content);
  } catch {
    return [];
  }
}

async function writeContacts(entries: ContactEntry[]): Promise<void> {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(entries, null, 2), "utf-8");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, institution, inquiryType, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "missing_fields" }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "invalid_email" }, { status: 400 });
    }

    const entry: ContactEntry = {
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      institution: String(institution || "").trim(),
      inquiryType: String(inquiryType || "").trim(),
      message: String(message).trim(),
      timestamp: new Date().toISOString(),
    };

    const entries = await readContacts();
    entries.push(entry);
    await writeContacts(entries);

    // Optional webhook
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(entry),
        });
      } catch {
        // Non-blocking
      }
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}