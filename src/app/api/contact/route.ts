import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  consent: boolean;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function readString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatLine(label: string, value: string): string {
  const safeValue = value ? escapeHtml(value) : "-";
  return `<p><strong>${label}:</strong> ${safeValue}</p>`;
}

function parsePayload(value: unknown): ContactPayload | null {
  if (!isRecord(value)) return null;

  const payload: ContactPayload = {
    name: readString(value.name),
    email: readString(value.email),
    phone: readString(value.phone),
    service: readString(value.service),
    message: readString(value.message),
    consent: value.consent === true,
  };

  if (!payload.name || !emailPattern.test(payload.email) || !payload.consent) {
    return null;
  }

  return payload;
}

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const contactToEmail = process.env.CONTACT_TO_EMAIL;
  const contactFromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!resendApiKey || !contactToEmail || !contactFromEmail) {
    return NextResponse.json(
      { error: "Contact email service is not configured." },
      { status: 500 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const payload = parsePayload(body);
  if (!payload) {
    return NextResponse.json(
      { error: "Invalid contact form submission." },
      { status: 400 },
    );
  }

  const to = contactToEmail
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);

  if (to.length === 0) {
    return NextResponse.json(
      { error: "Contact recipient is not configured." },
      { status: 500 },
    );
  }

  const subject = `New contact form message from ${payload.name}`;
  const text = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || "-"}`,
    `Service Interest: ${payload.service || "-"}`,
    "",
    "Message:",
    payload.message || "-",
  ].join("\n");

  const html = [
    "<h2>New contact form submission</h2>",
    formatLine("Name", payload.name),
    formatLine("Email", payload.email),
    formatLine("Phone", payload.phone),
    formatLine("Service Interest", payload.service),
    "<p><strong>Message:</strong></p>",
    `<p>${escapeHtml(payload.message || "-").replaceAll("\n", "<br />")}</p>`,
  ].join("");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: contactFromEmail,
      to,
      subject,
      html,
      text,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Email provider rejected the request." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
