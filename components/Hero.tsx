import Image from "next/image";
import { Container } from "./Container";

export default function Hero() {
  return (
    <section id="topp" aria-labelledby="hero-title" className="relative isolate flex min-h-svh flex-col overflow-hidden">
      {/* The painting fills the first screen, dimmed; it fades into black at the foot, where the words stand */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-shade">
        <Image
          src="/images/maleri/britt-schlytter-henrichsen.webp"
          alt=""
          fill
          preload
          unoptimized
          sizes="100vw"
          className="painting-soft animate-drift origin-[50%_35%] object-cover object-[50%_32%]"
        />
        <div className="scrim-hero absolute inset-0" />
      </div>

      <header>
        <Container className="flex items-center justify-between gap-6 py-5">
          <a href="#topp" aria-label="Tace IT, til toppen">
            <Image
              src="/images/tace-logo.png"
              alt="Tace IT AS"
              width={140}
              height={28}
              className="h-7 w-auto brightness-0 invert sm:h-8"
              preload
            />
          </a>
          <a href="#kontakt" className="btn">
            Ta kontakt
          </a>
        </Container>
      </header>

      <Container className="mt-auto grid gap-8 pb-16 pt-24 sm:pb-20 lg:grid-cols-12 lg:items-end lg:gap-10">
        <h1
          id="hero-title"
          className="animate-rise font-display text-[clamp(4.25rem,13vw,12rem)] font-light leading-[0.88] tracking-[0.005em] text-ink [animation-delay:100ms] lg:col-span-8"
        >
          TACE IT
        </h1>
        <div className="animate-rise flex flex-col items-start gap-6 [animation-delay:220ms] lg:col-span-4 lg:pb-4">
          <p className="max-w-sm font-display text-[1.625rem] font-light italic leading-snug text-ink-2">
            En familiebedrift i Tønsberg. Vi lager nettsider og digitale løsninger for bedrifter i
            Vestfold, og har gjort det siden 2005.
          </p>
          <a href="#prosjekter" className="btn btn-outline">
            Se prosjektene
          </a>
        </div>
      </Container>

      {/* Who built the site: a quiet mark in the corner that lights up on hover */}
      <a
        href="https://schlytterconsult.no"
        target="_blank"
        rel="noopener"
        aria-label="Utviklet av Schlytter Consult"
        title="Utviklet av Schlytter Consult"
        className="absolute bottom-5 right-4 opacity-30 transition-[opacity,filter] duration-300 hover:opacity-100 hover:drop-shadow-[0_0_14px_oklch(100%_0_0/0.6)] focus-visible:opacity-100 sm:right-6 lg:right-16"
      >
        <Image
          src="/images/schlytter-consult/icon-white.webp"
          alt=""
          width={227}
          height={256}
          className="h-7 w-auto"
        />
      </a>
    </section>
  );
}
