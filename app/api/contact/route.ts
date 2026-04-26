import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Manglende felt" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Ingen e-postkonfigurasjon" }, { status: 500 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "nettside@taceit.no",
      to: "erik@taceit.no",
      reply_to: email,
      subject: `Melding fra ${name} via TACE IT`,
      text: `Navn: ${name}\nE-post: ${email}\n\n${message}`,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Sending feilet" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
