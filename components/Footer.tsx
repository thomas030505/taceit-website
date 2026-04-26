import Image from "next/image";
import { Share2 } from "lucide-react";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-[#111512] py-14 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo */}
        <a href="#topp" className="flex items-center">
          <Image
            src="/images/tace-logo.png"
            alt="TACE IT AS"
            width={120}
            height={24}
            className="h-6 w-auto brightness-0 invert opacity-40 hover:opacity-70 transition-opacity"
          />
        </a>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-6">
          {["Eiendom", "IT", "Om oss", "Kontakt"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase().replace(" ", "-")}`}
              className="text-[#F5F0E8]/25 hover:text-[#C9A87A]/70 text-xs font-medium tracking-widest uppercase transition-colors"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Social + copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <a
            href="https://www.facebook.com/taceit"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-[#C9A87A] hover:border-[#C9A87A]/40 transition-all"
          >
            <Share2 size={14} />
          </a>
          <p
            className="text-[#F5F0E8]/20 text-xs"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            © {currentYear} TACE IT AS · Tønsberg
          </p>
        </div>
      </div>
    </footer>
  );
}
