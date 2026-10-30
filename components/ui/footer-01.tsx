// Built on footer-01 (shadcn style), adapted the way Schlytter Consult adapts it: no newsletter form,
// no social icons, no status dot, only real links. The big wordmark that fades out at the foot stays.
import Image from "next/image";

import { cn } from "@/lib/utils";

/* Layout primitive (Container), flattened from the shared `section` helper. */
const containerWidths = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-[1440px]",
};

interface ContainerProps extends React.ComponentProps<"div"> {
  width?: keyof typeof containerWidths;
}

function Container({ width = "default", className, ...props }: ContainerProps) {
  return (
    <div
      data-slot="container"
      className={cn("mx-auto w-full px-4 sm:px-6 lg:px-16", containerWidths[width], className)}
      {...props}
    />
  );
}

type FooterLink = { label: string; href: string };

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Siden",
    links: [
      { label: "Familien", href: "#familien" },
      { label: "Prosjekter", href: "#prosjekter" },
      { label: "Kontakt", href: "#kontakt" },
    ],
  },
  {
    title: "Prosjekter",
    links: [
      { label: "KAD44", href: "https://kad44.com" },
      { label: "Vallø Båtforening", href: "https://www.vallobaatforening.no" },
    ],
  },
];

const linkClass =
  "text-[15px] text-muted-foreground transition-colors duration-150 hover:text-foreground motion-reduce:transition-none";

export default function Footer01() {
  return (
    <footer className="relative overflow-hidden border-t border-rule bg-paper">
      <Container width="wide" className="pt-16 sm:pt-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-5">
            <a href="#topp" className="self-start" aria-label="Tace IT, til toppen">
              <Image
                src="/images/tace-logo.png"
                alt="Tace IT AS"
                width={140}
                height={28}
                className="h-8 w-auto brightness-0 invert"
              />
            </a>
            <p className="max-w-xs text-muted">Familiebedrift i Tønsberg. Nettsider og digitale løsninger siden 2005.</p>
            <div className="flex flex-col gap-1">
              <a href="mailto:erik@taceit.no" className="w-fit hover:text-accent">
                erik@taceit.no
              </a>
              <a href="tel:+4747166000" className="w-fit hover:text-accent">
                471 66 000
              </a>
              <a href="https://www.facebook.com/taceit" target="_blank" rel="noopener noreferrer" className="w-fit hover:text-accent">
                Facebook
              </a>
            </div>
          </div>

          <nav aria-label="Bunnmeny" className="grid grid-cols-2 gap-8 lg:col-span-6 lg:col-start-7 lg:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h2 className="font-sans text-[15px] font-medium tracking-normal text-ink">{column.title}</h2>
                <ul className="mt-4 flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className={cn("whitespace-nowrap", linkClass)}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h2 className="font-sans text-[15px] font-medium tracking-normal text-ink">Selskapet</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">
                Tace IT AS
                <br />
                Kjellelia 1C
                <br />
                3125 Tønsberg
              </p>
            </div>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-rule py-8 text-sm text-muted sm:flex-row sm:justify-between sm:gap-8">
          <p>© {new Date().getFullYear()} Tace IT AS</p>
          <p className="sm:text-right">Malerier: Britt Schlytter-Henrichsen</p>
        </div>
      </Container>

      <Container width="wide" aria-hidden className="pointer-events-none select-none">
        <p className="-mb-[0.22em] bg-gradient-to-b from-accent/25 to-transparent bg-clip-text text-center font-display text-[clamp(5rem,22vw,20rem)] leading-none font-light text-transparent">
          TACE IT
        </p>
      </Container>
    </footer>
  );
}
