"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Globe } from "lucide-react";

interface Project {
  year: number;
  client: string;
  description: string;
  tech: string[];
  url?: string;
}

const projects: Project[] = [
  {
    year: 2026,
    client: "PASTE",
    description:
      "Moderne nettsted for start-up bedrift levert i HTML, CSS og Javascript. Inkluderer påmelding til nyhetsbrev via e-post.",
    tech: ["HTML", "CSS", "JavaScript", "Nyhetsbrev"],
    url: "https://www.pasteco.no",
  },
  {
    year: 2025,
    client: "Vallø Båtforening",
    description:
      "Komplett webside på Joomla 5.0 med integrert livestream-video og live væroppdateringer for marinaen.",
    tech: ["Joomla 5.0", "Livestream", "Live Vær-API"],
    url: "https://www.vallobaatforening.no",
  },
  {
    year: 2024,
    client: "KAD44",
    description:
      "Moderne nettsted levert på Joomla 4.0 med tilpasset design og innholdsstyring.",
    tech: ["Joomla 4.0", "Custom Design"],
    url: "https://kad44.com",
  },
  {
    year: 2023,
    client: "Vallø Båtforening",
    description:
      "Oppgradert webside med live væroppdateringer og annen sanntidsfunksjonalitet.",
    tech: ["Joomla 4.0", "Live Integrasjon"],
    url: "https://www.vallobaatforening.no",
  },
  {
    year: 2022,
    client: "Bod.as",
    description:
      "Nettsted bygget i Webnode CMS med fokus på brukervennlighet og klar struktur.",
    tech: ["Webnode CMS"],
    url: "https://bod.as",
  },
  {
    year: 2021,
    client: "MMP9",
    description:
      "Webside laget i Webnode CMS, samt redesign og modernisering av Vallø Båtforening fra Joomla 3.",
    tech: ["Webnode CMS", "Joomla 3", "Redesign"],
    url: "https://mmp9.no",
  },
];

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group border-b border-white/5 last:border-0"
    >
      <div className="flex flex-col sm:flex-row gap-5 py-8 hover:bg-white/[0.02] transition-colors rounded-xl px-4 -mx-4">
        {/* Year */}
        <div className="sm:w-20 shrink-0">
          <span className="text-[#C9A87A]/50 text-sm font-mono group-hover:text-[#C9A87A]/80 transition-colors">
            {project.year}
          </span>
        </div>

        {/* Icon + client */}
        <div className="sm:w-52 shrink-0 flex items-start gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#3D5A80]/20 border border-[#3D5A80]/30 flex items-center justify-center text-[#5B7FA6] shrink-0 group-hover:bg-[#3D5A80]/30 transition-colors mt-0.5">
            <Globe size={20} />
          </div>
          <div>
            <h3
              className="text-[#F5F0E8]/90 font-medium text-base leading-snug"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {project.client}
            </h3>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#5B7FA6]/60 text-xs mt-0.5 hover:text-[#5B7FA6] transition-colors"
              >
                <ExternalLink size={10} />
                {project.url.replace(/^https?:\/\//, "")}
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="flex-1">
          <p
            className="text-[#F5F0E8]/50 text-sm leading-relaxed group-hover:text-[#F5F0E8]/70 transition-colors"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {project.description}
          </p>
        </div>

        {/* Tech tags */}
        <div className="sm:w-52 shrink-0 flex flex-wrap gap-2 items-start">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] font-mono font-semibold tracking-wider px-2.5 py-1 rounded-md border border-[#3D5A80]/30 text-[#5B7FA6]/70 bg-[#3D5A80]/10 group-hover:border-[#3D5A80]/50 group-hover:text-[#5B7FA6] transition-all"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ITPortfolio() {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="it" className="bg-[#111512] py-28 lg:py-36 px-6 relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #C9A87A 1px, transparent 1px),
            linear-gradient(to bottom, #C9A87A 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-[#3D5A80]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full bg-[#C9A87A]/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        {/* Section header */}
        <div className="mb-16">
          <motion.span
            ref={headerRef}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="inline-block text-[#5B7FA6] text-xs font-semibold tracking-[0.4em] uppercase mb-5"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            IT &amp; Webdesign
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[clamp(2.2rem,5vw,3.8rem)] font-light text-[#F5F0E8] leading-tight"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Digitalt{" "}
            <em className="italic text-[#5B7FA6]">håndtverk</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#F5F0E8]/40 text-base max-w-xl mt-5 leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Vi bygger nettløsninger som er ryddige, raske og pålitelige –
            alltid med fokus på det som faktisk fungerer for kunden.
          </motion.p>
        </div>

        {/* Horizontal line */}
        <div className="h-px bg-gradient-to-r from-[#3D5A80]/40 via-[#5B7FA6]/20 to-transparent mb-2" />

        {/* Column headers */}
        <div className="flex flex-col sm:flex-row gap-5 py-4 px-4 -mx-4">
          <div className="sm:w-20 text-[#F5F0E8]/20 text-xs font-mono uppercase tracking-widest">År</div>
          <div className="sm:w-52 text-[#F5F0E8]/20 text-xs font-mono uppercase tracking-widest">Prosjekt</div>
          <div className="flex-1 text-[#F5F0E8]/20 text-xs font-mono uppercase tracking-widest">Beskrivelse</div>
          <div className="sm:w-52 text-[#F5F0E8]/20 text-xs font-mono uppercase tracking-widest">Teknologi</div>
        </div>

        {/* Projects */}
        <div>
          {projects.map((p, i) => (
            <ProjectRow key={`${p.year}-${p.client}`} project={p} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 flex flex-col sm:flex-row items-center gap-4 sm:gap-8 p-8 rounded-2xl border border-[#3D5A80]/20 bg-[#3D5A80]/5"
        >
          <div className="flex-1">
            <h3
              className="text-[#F5F0E8]/90 text-xl font-medium mb-1"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Trenger du en ny nettside?
            </h3>
            <p
              className="text-[#F5F0E8]/40 text-sm"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Vi tar oppdrag innen webdesign og IT-løsninger for bedrifter og organisasjoner.
            </p>
          </div>
          <a
            href="#kontakt"
            className="shrink-0 px-7 py-3 rounded-full bg-[#3D5A80] text-[#F5F0E8] text-sm font-semibold tracking-wider uppercase hover:bg-[#5B7FA6] transition-all duration-300"
          >
            Snakk med oss
          </a>
        </motion.div>
      </div>
    </section>
  );
}
