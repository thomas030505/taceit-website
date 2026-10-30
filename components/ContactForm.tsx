"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type State = "idle" | "sending" | "sent" | "error";

const field =
  "h-12 rounded-[2px] border-input bg-light/5 px-4 text-[0.9375rem] text-ink placeholder:text-muted focus-visible:ring-offset-0";

export function ContactForm() {
  const [state, setState] = useState<State>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") ?? "").trim(),
          email: String(data.get("email") ?? "").trim(),
          message: String(data.get("message") ?? "").trim(),
        }),
      });
      setState(res.ok ? "sent" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div role="status" className="grid gap-2 py-6">
        <p className="font-display text-3xl font-light">Takk for meldingen.</p>
        <p className="text-ink-2">Erik svarer så snart han kan.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid gap-2">
        <label htmlFor="kontakt-navn" className="text-sm font-medium">
          Navn
        </label>
        <Input id="kontakt-navn" name="name" required autoComplete="name" placeholder="Kari Nordmann" className={field} />
      </div>
      <div className="grid gap-2">
        <label htmlFor="kontakt-epost" className="text-sm font-medium">
          E-post
        </label>
        <Input
          id="kontakt-epost"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="kari@bedrift.no"
          className={field}
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="kontakt-melding" className="text-sm font-medium">
          Melding
        </label>
        <textarea
          id="kontakt-melding"
          name="message"
          required
          rows={4}
          placeholder="Hva kan vi hjelpe deg med?"
          className="min-h-28 w-full rounded-[2px] border border-input bg-light/5 px-4 py-3 text-[0.9375rem] text-ink placeholder:text-muted focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-focus"
        />
      </div>
      <Button
        type="submit"
        size="lg"
        disabled={state === "sending"}
        className="h-12 w-fit rounded-[2px] px-7 text-[0.75rem] font-semibold uppercase tracking-[0.16em] hover:bg-accent-hi"
      >
        {state === "sending" ? "Sender …" : "Send melding"}
      </Button>
      {state === "error" && (
        <p role="alert" className="text-sm text-ink-2">
          Det gikk ikke å sende. Ring Erik på 471 66 000 eller skriv til erik@taceit.no.
        </p>
      )}
    </form>
  );
}
