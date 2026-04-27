"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const familyMembers = [
  { initial: "T", name: "Thomas" },
  { initial: "A", name: "André" },
  { initial: "C", name: "Catharina" },
  { initial: "E", name: "Erik" },
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="om-oss" className="relative bg-[#F5F0E8] py-28 lg:py-40 px-6 overflow-hidden">
      {/* TACE icon watermark */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-[0.08] pointer-events-none"
        style={{ backgroundImage: "url('/images/tace-icon.png')" }}
      />
      <div className="max-w-4xl mx-auto text-center relative">
        <FadeIn>
          <span
            className="inline-block text-[#C9A87A] text-xs font-semibold tracking-[0.4em] uppercase mb-6"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Hvem er vi
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="text-[clamp(2.2rem,6vw,4.5rem)] font-light leading-tight text-[#1C1C1E] mb-8"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            En familiebedrift hvor{" "}
            <em className="italic text-[#C9A87A]">eiendom</em>
            {" "}møter{" "}
            <em className="italic text-[#3D5A80]">teknologi</em>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p
            className="text-[#6B6B6B] text-lg leading-relaxed max-w-2xl mx-auto mb-6"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            TACE IT AS er et familieeid IT-selskap i Tønsberg med over 20 års
            erfaring. Vi leverer webutvikling, systemrådgivning og digitale
            løsninger til bedrifter i Vestfold – og forvalter historiske
            eiendommer i Tønsbergs eldste gater.
          </p>
          <p
            className="text-[#6B6B6B] text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Fra tømmervegger fra et annet århundre til kodelinjer som løser
            morgendagens utfordringer – vi setter vår signatur på alt vi leverer.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex items-center gap-4 my-14 max-w-xs mx-auto">
            <div className="flex-1 h-px bg-[#C9A87A]/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#C9A87A]" />
            <div className="flex-1 h-px bg-[#C9A87A]/30" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {familyMembers.map((m, i) => (
            <FadeIn key={m.name} delay={0.35 + i * 0.08}>
              <div className="flex flex-col items-center gap-3 group">
                <div className="w-14 h-14 rounded-full bg-[#2C3A2D] flex items-center justify-center group-hover:bg-[#C9A87A] transition-colors duration-400">
                  <span
                    className="text-[#C9A87A] group-hover:text-[#111512] text-2xl font-light transition-colors duration-400"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {m.initial}
                  </span>
                </div>
                <p
                  className="text-[#1C1C1E] font-medium text-sm"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {m.name}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
