import { Container } from "./Container";

const family = ["Thomas", "André", "Catharina", "Erik"];

export default function Familien() {
  return (
    <section id="familien" aria-labelledby="familien-title" className="py-24 lg:py-36">
      <Container className="text-center">
        <h2
          id="familien-title"
          className="font-display text-[clamp(3rem,5vw+1.25rem,5.75rem)] font-light leading-none"
        >
          Familien
        </h2>
        <p className="mx-auto mt-6 max-w-[38rem] font-display text-[clamp(1.375rem,0.6vw+1.1rem,1.75rem)] font-light italic leading-snug text-ink-2">
          Tace IT AS er eid og drevet av familien. Ved siden av nettsidene tar vi vare på noen gamle
          trehus i Øvre Langgate, Tønsbergs eldste gate.
        </p>

        <div aria-hidden className="mx-auto my-14 flex max-w-xs items-center gap-4">
          <span className="h-px flex-1 bg-accent/30" />
          <span className="size-1.5 rounded-full bg-accent" />
          <span className="h-px flex-1 bg-accent/30" />
        </div>

        <ul className="mx-auto grid max-w-3xl grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          {family.map((name) => (
            <li key={name} className="group flex flex-col items-center gap-4">
              <span
                aria-hidden
                className="grid size-24 place-items-center rounded-full bg-forest transition-colors duration-500 group-hover:bg-accent sm:size-28"
              >
                <span className="font-display text-[2.75rem] font-light leading-none text-accent transition-colors duration-500 group-hover:text-accent-ink">
                  {name[0]}
                </span>
              </span>
              <span className="font-medium">{name}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
