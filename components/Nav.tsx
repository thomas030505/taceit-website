"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#eiendom", label: "Eiendom" },
  { href: "#it",      label: "IT" },
  { href: "#om-oss",  label: "Om oss" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#111512]/90 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="#topp" className="flex items-center gap-3 group">
          <Image
            src="/images/tace-logo.png"
            alt="TACE IT AS"
            width={140}
            height={28}
            className="h-7 w-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
            priority
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[#F5F0E8]/70 hover:text-[#C9A87A] text-sm font-medium tracking-widest uppercase transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#kontakt"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#C9A87A]/50 text-[#C9A87A] hover:bg-[#C9A87A] hover:text-[#111512] transition-all duration-300"
        >
          Kontakt oss
        </a>

        {/* Mobile burger */}
        <button
          className="md:hidden text-[#F5F0E8]/80 hover:text-[#C9A87A] transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Meny"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-[#111512]/95 backdrop-blur-md border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[#F5F0E8]/70 hover:text-[#C9A87A] text-lg font-medium tracking-wider transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
