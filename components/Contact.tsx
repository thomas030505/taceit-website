"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Share2, Loader2 } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-[#F5F0E8] border border-[#EDE5D5] focus:border-[#C9A87A] focus:ring-1 focus:ring-[#C9A87A]/30 rounded-xl px-5 py-3.5 text-sm text-[#1C1C1E] placeholder:text-[#6B6B6B]/50 outline-none transition-all";

  return (
    <section id="kontakt" className="bg-[#F5F0E8] py-28 lg:py-36 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left – Info */}
          <div ref={ref}>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="inline-block text-[#C9A87A] text-xs font-semibold tracking-[0.4em] uppercase mb-5"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Kontakt
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[clamp(2.2rem,5vw,3.5rem)] font-light text-[#1C1C1E] leading-tight mb-6"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              La oss ta en{" "}
              <em className="italic text-[#C9A87A]">prat</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#6B6B6B] text-base leading-relaxed mb-12"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Trenger du en ny nettside, eller vil du vite mer om det vi gjør?
              Ta gjerne kontakt – vi svarer gjerne.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-5"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#2C3A2D] flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-[#C9A87A]" />
                </div>
                <div>
                  <p className="text-[#1C1C1E] font-medium text-sm" style={{ fontFamily: "var(--font-inter)" }}>
                    TACE IT AS
                  </p>
                  <p className="text-[#6B6B6B] text-sm" style={{ fontFamily: "var(--font-inter)" }}>
                    Kjellelia 1C, 3125 Tønsberg
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#2C3A2D] flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-[#C9A87A]" />
                </div>
                <div>
                  <p className="text-[#1C1C1E] font-medium text-sm" style={{ fontFamily: "var(--font-inter)" }}>
                    Erik Schlytter-Henrichsen
                  </p>
                  <a
                    href="tel:+4747166000"
                    className="text-[#C9A87A] text-sm hover:text-[#D4B88A] transition-colors"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    +47 471 66 000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#2C3A2D] flex items-center justify-center shrink-0">
                  <Share2 size={16} className="text-[#C9A87A]" />
                </div>
                <div>
                  <p className="text-[#1C1C1E] font-medium text-sm" style={{ fontFamily: "var(--font-inter)" }}>
                    Facebook
                  </p>
                  <a
                    href="https://www.facebook.com/taceit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C9A87A] text-sm hover:text-[#D4B88A] transition-colors"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    facebook.com/taceit
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right – Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.25 }}
          >
            {status === "sent" ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-16">
                <div className="w-16 h-16 rounded-full bg-[#2C3A2D] flex items-center justify-center text-[#C9A87A] text-3xl">
                  ✓
                </div>
                <h3
                  className="text-2xl font-medium text-[#1C1C1E]"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Takk for meldingen!
                </h3>
                <p className="text-[#6B6B6B] text-sm" style={{ fontFamily: "var(--font-inter)" }}>
                  Vi kommer tilbake til deg så snart vi kan.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label
                    className="block text-xs font-semibold text-[#6B6B6B] tracking-wider uppercase mb-2"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Navn
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ditt fulle navn"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                    style={{ fontFamily: "var(--font-inter)" }}
                  />
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold text-[#6B6B6B] tracking-wider uppercase mb-2"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    E-post
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="din@epost.no"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                    style={{ fontFamily: "var(--font-inter)" }}
                  />
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold text-[#6B6B6B] tracking-wider uppercase mb-2"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Melding
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Hva kan vi hjelpe deg med?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                    style={{ fontFamily: "var(--font-inter)" }}
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm" style={{ fontFamily: "var(--font-inter)" }}>
                    Noe gikk galt. Prøv igjen eller ring oss direkte.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 rounded-xl bg-[#2C3A2D] text-[#F5F0E8] text-sm font-semibold tracking-wider uppercase hover:bg-[#C9A87A] hover:text-[#111512] transition-all duration-300 mt-2 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sender…
                    </>
                  ) : (
                    "Send melding"
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
