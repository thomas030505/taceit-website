"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.background = `radial-gradient(700px circle at ${e.clientX}px ${e.clientY}px, rgba(61,90,128,0.18) 0%, rgba(201,168,122,0.06) 40%, transparent 70%)`;
      }
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return (
    <section
      id="topp"
      className="relative h-screen min-h-[640px] flex flex-col overflow-hidden bg-[#0C1210]"
    >
      {/* Background image – very dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.08]"
        style={{ backgroundImage: "url('/images/ol34/ute.jpg')" }}
      />

      {/* Static ambient glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#3D5A80]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[5%] w-[400px] h-[400px] rounded-full bg-[#C9A87A]/6 blur-[100px] pointer-events-none" />

      {/* Mouse-following glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 transition-[background] duration-75"
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #C9A87A 1px, transparent 1px), linear-gradient(to bottom, #C9A87A 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Content */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6"
        >
          <h1
            className="text-[clamp(5rem,14vw,14rem)] font-light leading-none tracking-tight text-white"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            TACE IT
          </h1>
         
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-[#F5F0E8]/55 text-base sm:text-lg max-w-lg leading-relaxed"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          En familiebedrift med røtter i eiendom og IT-løsninger –<br />
          alt fra hjertet av Tønsberg.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: "easeOut" }}
          className="flex gap-4 mt-10"
        >
          <a
            href="#eiendom"
            className="px-7 py-3 rounded-full bg-[#C9A87A] text-[#0C1210] text-sm font-semibold tracking-wider uppercase hover:bg-[#D4B88A] transition-all duration-300 shadow-lg shadow-[#C9A87A]/20"
          >
            Eiendom
          </a>
          <a
            href="#it"
            className="px-7 py-3 rounded-full border border-[#3D5A80]/70 text-[#F5F0E8]/80 text-sm font-semibold tracking-wider uppercase hover:bg-[#3D5A80]/30 hover:border-[#3D5A80] transition-all duration-300"
          >
            IT
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#om-oss"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="relative mb-8 flex flex-col items-center gap-1 text-white/25 hover:text-[#C9A87A]/60 transition-colors"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  );
}
