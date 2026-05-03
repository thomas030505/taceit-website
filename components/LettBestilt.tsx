"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ShoppingBag, Percent, Smartphone } from "lucide-react";

function FadeIn({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

const highlights = [
  {
    icon: ShoppingBag,
    title: "Egen bestillingsside",
    desc: "Restauranten får sin egen nettbutikk, slik at kundene kan bestille direkte — uten å gå via eksterne plattformer.",
  },
  {
    icon: Percent,
    title: "Ingen provisjon",
    desc: "Fast månedspris og ingen gebyrer per bestilling. Du beholder marginene selv.",
  },
  {
    icon: Smartphone,
    title: "Enkelt å ta i bruk",
    desc: "Laget for restauranteiere som vil komme raskt i gang, uten å måtte lære et komplisert system.",
  },
];

export default function LettBestilt() {
  return (
    <section
      id="lettbestilt"
      className="bg-[#F6F4EF] py-28 lg:py-40 px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <FadeIn>
            <span
              className="inline-block text-[#476A7C] text-xs font-semibold tracking-[0.4em] uppercase mb-5"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Produkt
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2
              className="text-[clamp(2.4rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[#1F2428] mb-6"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              LettBestilt
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p
              className="text-[#7B746C] text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Et enkelt bestillingssystem for restauranter som vil selge take-away og levering fra egen nettside — uten mellomledd og uten provisjon per ordre.
            </p>
          </FadeIn>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {highlights.map((item, i) => (
            <FadeIn key={item.title} delay={0.1 + i * 0.1} className="h-full">
              <div className="h-full bg-white rounded-3xl p-7 border border-[#1F2428]/[0.07] shadow-[0_18px_50px_rgba(31,36,40,0.06)] hover:shadow-[0_24px_70px_rgba(31,36,40,0.10)] hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-10 h-10 rounded-xl bg-[#ECE2D3] flex items-center justify-center mb-5">
                  <item.icon size={18} className="text-[#1F3A4A]" strokeWidth={1.75} />
                </div>
                <h3
                  className="text-[#1F2428] font-semibold text-base mb-2"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[#7B746C] text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.45}>
          <a
            href="https://lettbestilt.no/landing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1F3A4A] text-white text-sm font-semibold tracking-wide uppercase hover:bg-[#2B4E61] hover:-translate-y-px transition-all duration-200"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Les mer på lettbestilt.no
            <ArrowUpRight size={16} />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
