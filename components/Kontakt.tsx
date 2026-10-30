import Image from "next/image";
import { Container } from "./Container";
import { ContactForm } from "./ContactForm";

const bigLink =
  "font-display text-2xl font-light underline decoration-accent/60 decoration-1 underline-offset-[8px] transition-colors duration-150 hover:text-accent sm:text-4xl lg:text-3xl xl:text-4xl motion-reduce:transition-none";

export default function Kontakt() {
  return (
    <section id="kontakt" aria-labelledby="kontakt-title" className="relative isolate overflow-hidden py-24 lg:py-36">
      {/* The second painting: a storm over the sea, behind the way in */}
      <div className="absolute inset-0 -z-10 bg-shade">
        <Image
          src="/images/maleri/britt-schlytter-henrichsen-storm.webp"
          alt=""
          fill
          unoptimized
          sizes="100vw"
          className="object-cover object-[50%_82%] brightness-[0.85] saturate-[0.85]"
        />
        <div className="scrim-contact absolute inset-0" />
      </div>

      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col gap-8 lg:col-span-6">
          <h2
            id="kontakt-title"
            className="font-display text-[clamp(3.5rem,7vw,7rem)] font-light leading-[0.95]"
          >
            Ta kontakt.
          </h2>
          <p className="max-w-sm font-display text-[1.625rem] font-light italic leading-snug text-ink-2">
            Trenger du en ny nettside, eller vil du vite mer om det vi gjør? Erik svarer.
          </p>
          <ul className="flex flex-col gap-3">
            <li>
              <a href="mailto:erik@taceit.no" className={bigLink}>
                erik@taceit.no
              </a>
            </li>
            <li>
              <a href="tel:+4747166000" className={bigLink}>
                471 66 000
              </a>
            </li>
          </ul>
        </div>
        <div className="glass p-6 sm:p-8 lg:col-span-5 lg:col-start-8">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
