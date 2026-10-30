import Image from "next/image";
import { Container } from "./Container";

type Project = { year: string; title: string; line: string; href?: string; domain?: string };

const more: Project[] = [
  {
    year: "2026",
    title: "PASTE",
    line: "Nettsted for et oppstartsselskap i HTML, CSS og JavaScript, med påmelding til nyhetsbrev.",
  },
  {
    year: "2025",
    title: "Vallø Båtforening",
    line: "Ny side på Joomla 5 med direktesendt video og vær i sanntid fra marinaen.",
    href: "https://www.vallobaatforening.no",
    domain: "vallobaatforening.no",
  },
  {
    year: "2023",
    title: "Vallø Båtforening",
    line: "Oppgradert side med værdata og annen sanntidsinformasjon.",
    href: "https://www.vallobaatforening.no",
    domain: "vallobaatforening.no",
  },
];

const link =
  "underline decoration-accent decoration-1 underline-offset-4 transition-colors duration-150 hover:text-accent-deep motion-reduce:transition-none";

function Caption({ title, line, meta, href, domain }: { title: string; line: string; meta: string; href?: string; domain?: string }) {
  return (
    <figcaption className="mt-5 grid gap-1">
      <div className="flex items-baseline justify-between gap-6">
        <h3 className="font-display text-[clamp(1.625rem,0.75vw+1.25rem,2rem)] font-normal">
          {title}
        </h3>
        <span className="shrink-0 text-sm tabular-nums text-well-muted">{meta}</span>
      </div>
      <p className="max-w-[46ch] text-[0.9375rem] text-well-muted">{line}</p>
      {href && (
        <a href={href} target="_blank" rel="noopener noreferrer" className={`mt-1 w-fit text-[0.9375rem] ${link}`}>
          {domain}
        </a>
      )}
    </figcaption>
  );
}

export default function Prosjekter() {
  return (
    <section id="prosjekter" aria-labelledby="prosjekter-title" className="on-light bg-well py-24 text-well-ink lg:py-36">
      <Container>
        <div className="grid gap-5 lg:grid-cols-12 lg:items-end lg:gap-10">
          <h2
            id="prosjekter-title"
            className="font-display text-[clamp(3rem,5vw+1.25rem,5.75rem)] font-light leading-none lg:col-span-7"
          >
            Prosjekter
          </h2>
          <p className="max-w-md font-display text-[clamp(1.375rem,0.6vw+1.1rem,1.75rem)] font-light italic leading-snug text-well-muted lg:col-span-5 lg:pb-2">
            Nettsider vi har laget for andre, og husene vi tar vare på.
          </p>
        </div>

        <div className="mt-14 grid gap-16 md:grid-cols-2 md:gap-8">
          <figure>
            {/* the delivered site, framed on a quiet surface and cut at its foot */}
            <div className="relative aspect-[5/4] overflow-hidden rounded-[4px] bg-well-2 px-[7%] pt-[7%]">
              <div className="relative h-full overflow-hidden rounded-t-[2px] bg-card shadow-[0_30px_60px_-30px_oklch(20%_0.01_75/0.45),0_0_0_1px_var(--color-well-rule)]">
                <Image
                  src="/images/prosjekter/kad44.jpg"
                  alt="Forsiden til kad44.com: kjølvannet bak en båt, med knapper for problemet, løsningen og butikken."
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
            <Caption
              title="KAD44"
              line="Nettsted på Joomla 4 med eget design og innholdsstyring."
              meta="2024"
              href="https://kad44.com"
              domain="kad44.com"
            />
          </figure>

          <figure>
            <div className="relative aspect-[5/4] overflow-hidden rounded-[4px]">
              <Image
                src="/images/ol34/ute.jpg"
                alt="Hvitt trehus på hjørnet av Øvre Langgate 34 i Tønsberg, en solrik dag."
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <Caption title="Øvre Langgate" line="To utleieleiligheter i gamle trehus i Tønsbergs eldste gate." meta="Eiendom" />
          </figure>
        </div>

        <ul className="mt-20 border-b border-well-rule">
          {more.map((p) => (
            <li
              key={`${p.year}-${p.title}`}
              className="grid grid-cols-[3.5rem_1fr] gap-x-4 gap-y-1 border-t border-well-rule py-5 sm:grid-cols-[5rem_14rem_1fr_auto] sm:items-baseline sm:gap-x-6"
            >
              <span className="text-sm tabular-nums text-well-muted">{p.year}</span>
              <span className="font-display text-xl font-normal">{p.title}</span>
              <span className="col-start-2 text-[0.9375rem] text-well-muted sm:col-start-3 sm:row-start-1">
                {p.line}
              </span>
              {p.href ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`col-start-2 w-fit text-[0.9375rem] sm:col-start-4 sm:row-start-1 ${link}`}
                >
                  {p.domain}
                </a>
              ) : (
                <span className="hidden sm:block" />
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
