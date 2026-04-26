"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MapPin, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";

interface Property {
  id: string;
  address: string;
  size: string;
  images: string[];
  tagline: string;
  description: string;
  features: string[];
}

const properties: Property[] = [
  {
    id: "ol19",
    address: "Øvre Langgate 19",
    size: "34 m²",
    images: ["/images/ol19/inne.jpg", "/images/ol19/utside.jpg"],
    tagline: "Sjel og sjarm midt i sentrum",
    description: "Koselig leilighet med stue, åpen kjøkkenløsning og soverom i hjertet av Tønsberg.",
    features: ["1 soverom", "Vannbåren gulvvarme", "Parkering", "Privat bod"],
  },
  {
    id: "ol32",
    address: "Øvre Langgate 32",
    size: "48 m²",
    images: ["/images/ol32/bilde1.jpg", "/images/ol32/bilde2.jpg"],
    tagline: "Midt i Tønsbergs eldste bydel",
    description: "Romslig leilighet under Haugar, nær sentrum – historisk beliggenhet med moderne standard.",
    features: ["1 soverom", "Privat bod", "Moderne kjøkken", "Helfliset bad"],
  },
  {
    id: "ol34",
    address: "Øvre Langgate 34",
    size: "62 m²",
    images: [
      "/images/ol34/inne1.jpg",
      "/images/ol34/inne2.jpg",
      "/images/ol34/inne3.jpg",
      "/images/ol34/soverom.jpg",
      "/images/ol34/ute.jpg",
    ],
    tagline: "Lys og romslig med balkong",
    description: "To soverom, store vinduer og ekstra god takhøyde som løfter hvert rom til noe mer.",
    features: ["1 soverom", "Felles balkong med kveldssol", "Sykkelbod", "Helfliset bad"],
  },
];

function ImageCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  return (
    <div className="relative w-full h-full min-h-[320px] overflow-hidden bg-[#2C3A2D]/20">
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`${alt} – bilde ${i + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 55vw"
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Forrige bilde"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/55 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            aria-label="Neste bilde"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/55 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Bilde ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === idx ? "w-5 h-2 bg-white" : "w-2 h-2 bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Properties() {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true, margin: "-100px" });
  const [activeIdx, setActiveIdx] = useState(0);

  const prevProperty = () =>
    setActiveIdx((i) => (i - 1 + properties.length) % properties.length);
  const nextProperty = () =>
    setActiveIdx((i) => (i + 1) % properties.length);

  const property = properties[activeIdx];

  return (
    <section id="eiendom" className="bg-[#EDE5D5] py-28 lg:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <motion.span
            ref={headerRef}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="inline-block text-[#C9A87A] text-xs font-semibold tracking-[0.4em] uppercase mb-5"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Eiendom
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[clamp(2.2rem,5vw,3.8rem)] font-light text-[#1C1C1E] leading-tight"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Leiligheter med{" "}
            <em className="italic text-[#2C3A2D]">historie</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#6B6B6B] text-base max-w-xl mx-auto mt-5 leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Tre leiligheter i Øvre Langgate – Tønsbergs mest sjarmerende adresse.
          </motion.p>
        </div>

        {/* Slideshow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="rounded-3xl overflow-hidden shadow-xl shadow-[#C9A87A]/10 bg-white"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Image – right on large screens */}
            <div className="lg:order-2 lg:w-[55%] min-h-[300px] lg:min-h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="h-full"
                >
                  <ImageCarousel images={property.images} alt={property.address} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Info – left on large screens */}
            <div className="lg:order-1 lg:w-[45%] flex flex-col justify-between p-8 lg:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={property.id + "-info"}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 16 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center gap-2 text-[#C9A87A] text-xs font-semibold tracking-wider uppercase mb-4">
                    <MapPin size={12} />
                    <span>Tønsberg sentrum</span>
                  </div>

                  <h3
                    className="text-[clamp(1.8rem,4vw,2.8rem)] font-light text-[#1C1C1E] leading-tight mb-2"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {property.address}
                  </h3>

                  <p
                    className="text-[#C9A87A] text-lg italic mb-4"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {property.tagline}
                  </p>

                  <p
                    className="text-[#6B6B6B] text-sm leading-relaxed mb-6"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {property.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <div className="inline-flex items-center gap-1.5 bg-[#2C3A2D] text-[#F5F0E8] text-xs font-semibold px-3.5 py-1.5 rounded-full">
                      <Maximize2 size={11} />
                      <span>{property.size}</span>
                    </div>
                    {property.features.map((f) => (
                      <span
                        key={f}
                        className="inline-flex items-center gap-1.5 bg-[#F5F0E8] text-[#2C3A2D] text-xs font-medium px-3.5 py-1.5 rounded-full border border-[#EDE5D5]"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="mt-12 flex items-center justify-between">
                {/* Dots */}
                <div className="flex gap-2">
                  {properties.map((p, i) => (
                    <button
                      key={p.id}
                      onClick={() => setActiveIdx(i)}
                      aria-label={`Vis ${p.address}`}
                      className={`rounded-full transition-all duration-300 ${
                        i === activeIdx
                          ? "w-6 h-2.5 bg-[#2C3A2D]"
                          : "w-2.5 h-2.5 bg-[#C9A87A]/40 hover:bg-[#C9A87A]/70"
                      }`}
                    />
                  ))}
                </div>

                {/* Arrows */}
                <div className="flex gap-2">
                  <button
                    onClick={prevProperty}
                    aria-label="Forrige leilighet"
                    className="w-10 h-10 rounded-full border border-[#EDE5D5] flex items-center justify-center text-[#6B6B6B] hover:border-[#C9A87A] hover:text-[#C9A87A] transition-all duration-200"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={nextProperty}
                    aria-label="Neste leilighet"
                    className="w-10 h-10 rounded-full border border-[#EDE5D5] flex items-center justify-center text-[#6B6B6B] hover:border-[#C9A87A] hover:text-[#C9A87A] transition-all duration-200"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
