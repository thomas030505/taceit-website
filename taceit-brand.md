# Tace IT AS — Brand Design Guide

> **Formål:** Denne filen er laget for å kunne gis direkte til designere, utviklere eller andre LLM-er som skal lage digitale produkter, nettsider, komponenter, presentasjoner eller innhold i en stil som matcher Tace IT AS.

> **Kildegrunnlag:** Guiden bygger på visuelle og tekstlige signaler fra https://www.taceit.no/, inkludert merkevareposisjonering, innhold, navigasjon, prosjektoversikt, tone of voice og synlige logo-/stiltrekk.

---

## 1. Brandkjerne

Tace IT AS er en familieeid IT- og eiendomsbedrift fra Tønsberg. Brandet kombinerer lokal forankring, historiske eiendommer og praktisk digital kompetanse.

Merket skal oppleves som:

- trygt
- ryddig
- personlig
- lokalt
- kompetent
- voksent
- praktisk
- jordnært
- moderne, men ikke kaldt

Kjernen i brandet:

> **Pålitelig digitalt håndverk fra Tønsberg — der eiendom, teknologi og familiehistorie møtes.**

Tace IT skal ikke føles som en aggressiv startup, et stort konsulenthus eller en generisk SaaS-mal. Det skal føles som en solid, lokal og kompetent aktør som bygger løsninger som fungerer i praksis.

---

## 2. Brandpersonlighet

### Primære merkeord

| Merkeord | Betydning for design |
|---|---|
| Ryddig | Enkle flater, tydelig hierarki, lite støy |
| Pålitelig | Solid typografi, god kontrast, nøktern UI |
| Lokal | Bruk Tønsberg, Øvre Langgate og Vestfold som identitetsmarkører |
| Familieeid | Varm tone, menneskelig språk, personlig preg |
| Praktisk | Fokuser på fungerende løsninger, ikke buzzwords |
| Historisk | Varme materialfarger, bilder av treverk, mur, gamle bygg |
| Teknisk | Moderne struktur, systematikk, kode-/webreferanser |

### Brandarketype

Tace IT bør kommunisere som en blanding av:

- **The Caregiver:** trygg, hjelpsom, personlig
- **The Craftsman:** presis, praktisk, gjennomarbeidet
- **The Sage:** kompetent, erfaren, forklarende
- **The Local Steward:** forankret i sted, historie og relasjoner

---

## 3. Visuell retning

Designet skal kombinere:

1. **Moderne IT**
   - rene grid
   - tydelig typografi
   - ryddige kort
   - tabeller og strukturerte lister
   - digitale komponenter

2. **Historisk eiendom**
   - varme jordtoner
   - detaljer fra tre, mur, gamle vinduer og bygårder
   - naturlig lys
   - lokal byfølelse

3. **Familiebedrift**
   - lav terskel
   - varm, direkte tekst
   - ekte bilder fremfor stock
   - tydelig kontaktpunkt

Overordnet uttrykk:

> **Skandinavisk, nøkternt, varmt og presist.**

---

## 4. Fargepalett

Fargepaletten er utledet fra logoens grå/hvite uttrykk, nettsidens nøkterne digitale preg og innholdets kobling til historiske eiendommer i Tønsberg.

### 4.1 Primærpalett

Bruk disse fargene som hovedbase.

| Token | Hex | Rolle |
|---|---:|---|
| `--color-graphite` | `#1F2428` | Primær tekst, mørke seksjoner, footer |
| `--color-charcoal` | `#2E3338` | Mørke kort, sekundær mørk bakgrunn |
| `--color-logo-gray` | `#A8A8A8` | Logo-inspirert grå, ikoner, linjer |
| `--color-silver` | `#B8B8B8` | Sekundær tekst på mørk bakgrunn |
| `--color-off-white` | `#F6F4EF` | Hovedbakgrunn, varme lyse flater |
| `--color-white` | `#FFFFFF` | Kort, modaler, inputfelt |

### 4.2 Varm støttepalett

Brukes for å hente inn eiendom, tømmervegger, gamle bygater og historisk varme.

| Token | Hex | Rolle |
|---|---:|---|
| `--color-timber` | `#8A6042` | Treverk, varme aksenter, eiendom |
| `--color-brick` | `#9B4F3F` | Murstein, historiske detaljer |
| `--color-sand` | `#D8C7AE` | Subtile bakgrunner, badges |
| `--color-warm-beige` | `#ECE2D3` | Seksjonsbakgrunner |
| `--color-stone` | `#7B746C` | Metadata, sekundær tekst |

### 4.3 Teknologisk aksentpalett

Brukes sparsomt for IT, web, integrasjon, sanntidsdata og CTA-er.

| Token | Hex | Rolle |
|---|---:|---|
| `--color-deep-blue` | `#1F3A4A` | Primær CTA, tekniske flater |
| `--color-steel-blue` | `#476A7C` | Sekundær CTA, diagrammer, ikoner |
| `--color-code-green` | `#5F7F68` | Live data, integrasjoner, status |

### 4.4 Fargefordeling

Anbefalt forhold:

- **70 % nøytrale farger**
- **20 % varme historiske toner**
- **10 % teknologiske aksenter**

Ikke bruk neonfarger, sterke gradienter eller generisk SaaS-blå som dominerende uttrykk.

---

## 5. Typografi

Tace IT bør bruke en moderne, lettlest sans-serif.

### Anbefalt font-stack

```css
font-family: Inter, Manrope, "Helvetica Neue", Arial, sans-serif;
```

### Typografiske prinsipper

- Store, rolige overskrifter
- Tett, moderne tracking i displaytekst
- God linjehøyde i brødtekst
- Tydelige labels og badges
- Ingen dekorative skrifter
- Ingen overdreven typografisk lek

### H1

```css
h1 {
  font-size: clamp(48px, 8vw, 96px);
  line-height: 0.95;
  letter-spacing: -0.04em;
  font-weight: 700;
}
```

### H2

```css
h2 {
  font-size: clamp(32px, 5vw, 56px);
  line-height: 1.05;
  letter-spacing: -0.03em;
  font-weight: 650;
}
```

### H3

```css
h3 {
  font-size: clamp(24px, 3vw, 36px);
  line-height: 1.15;
  letter-spacing: -0.02em;
  font-weight: 650;
}
```

### Body

```css
body {
  font-size: 17px;
  line-height: 1.65;
  font-weight: 400;
  color: #1F2428;
}
```

### Labels

```css
.label {
  font-size: 12px;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 600;
}
```

---

## 6. Logo og merkeelementer

Logoen bør behandles som et nøkternt, monokromt merkeelement.

### Logo-bruk

Bruk helst:

- lys grå/hvit logo på mørk grafittbakgrunn
- mørk grafittlogo på lys off-white bakgrunn
- god luft rundt logoen
- enkel plassering i toppmeny eller hero

Unngå:

- fargede logoeffekter
- gradient på logo
- skygge på logo
- logo over rotete bilde uten overlay
- deformering eller beskjæring

### Clearspace

Bruk minimum clearspace tilsvarende høyden på bokstaven **T** i logoen rundt alle sider.

### Symbolbruk

Det abstrakte logosymbolet kan brukes som:

- subtilt vannmerke
- app-ikon
- favicon
- loader
- monokromt bakgrunnselement
- dekorativ maskering, men svært sparsomt

---

## 7. Bildestil

Bildene skal knytte sammen eiendom, Tønsberg og teknologi.

### Motiver

Bruk bilder av:

- Tønsberg sentrum
- Øvre Langgate
- gamle bygårder
- tømmervegger
- murstein
- vinduer med naturlig lys
- interiørdetaljer
- laptop på arbeidsbord
- kode, CMS eller webgrensesnitt
- marina, værdata eller lokale miljøer
- praktiske arbeidsflater

### Bildeuttrykk

Bildene bør ha:

- naturlig lys
- varm temperatur
- lav til moderat kontrast
- ekte miljø
- lite metning
- ingen tydelig stock-photo-følelse

### Overlay for tekst på bilde

```css
.image-overlay {
  background: linear-gradient(
    90deg,
    rgba(31, 36, 40, 0.82),
    rgba(31, 36, 40, 0.35)
  );
}
```

---

## 8. Layoutsystem

Layouten skal være rolig, romslig og strukturert.

### Container

```css
.container {
  max-width: 1180px;
  margin-inline: auto;
  padding-inline: 24px;
}
```

### Seksjoner

```css
.section {
  padding-block: clamp(72px, 10vw, 140px);
}
```

### Grid

```css
.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(32px, 6vw, 80px);
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
```

På mobil skal grid kollapse til én kolonne.

### Layoutprinsipper

Bruk:

- venstrestilt tekst
- stor hero
- tydelige seksjonsskiller
- kort med god luft
- tynne linjer
- store bilder med avrundede hjørner
- enkle tabeller for prosjekter

Unngå:

- for mange dekorative elementer
- tung parallax
- rotete dashboards
- mange konkurrerende CTA-er
- generiske illustrasjoner

---

## 9. UI-komponenter

### 9.1 Knapper

#### Primærknapp

```css
.button-primary {
  background: #1F3A4A;
  color: #FFFFFF;
  border-radius: 999px;
  padding: 14px 22px;
  font-weight: 600;
  border: 1px solid transparent;
  transition: all 180ms ease-out;
}
```

Hover:

```css
.button-primary:hover {
  background: #2B4E61;
  transform: translateY(-1px);
}
```

#### Sekundærknapp

```css
.button-secondary {
  background: transparent;
  color: #1F2428;
  border: 1px solid rgba(31, 36, 40, 0.18);
  border-radius: 999px;
  padding: 14px 22px;
  font-weight: 600;
  transition: all 180ms ease-out;
}
```

Hover:

```css
.button-secondary:hover {
  background: rgba(31, 36, 40, 0.05);
  transform: translateY(-1px);
}
```

### 9.2 Kort

```css
.card {
  background: #FFFFFF;
  border: 1px solid rgba(31, 36, 40, 0.08);
  border-radius: 24px;
  box-shadow: 0 18px 50px rgba(31, 36, 40, 0.08);
  padding: 28px;
}
```

Hover:

```css
.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 24px 70px rgba(31, 36, 40, 0.12);
}
```

### 9.3 Badges

```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #ECE2D3;
  color: #2E3338;
  border-radius: 999px;
  padding: 7px 10px;
  font-size: 12px;
  font-weight: 600;
}
```

Bruk badges for:

- HTML
- CSS
- JavaScript
- Joomla
- Live Vær-API
- Livestream
- Custom Design
- Nyhetsbrev
- Integrasjon
- CMS

### 9.4 Prosjekttabell

Prosjektoversikten bør ha et ryddig tabell-/radformat med år, prosjekt, beskrivelse og teknologi.

```css
.project-row {
  display: grid;
  grid-template-columns: 90px 1.2fr 2fr 1fr;
  gap: 24px;
  padding-block: 24px;
  border-top: 1px solid rgba(31, 36, 40, 0.12);
}
```

Mobil:

```css
@media (max-width: 760px) {
  .project-row {
    grid-template-columns: 1fr;
    gap: 10px;
  }
}
```

### 9.5 Inputfelt

```css
.input {
  width: 100%;
  background: #FFFFFF;
  border: 1px solid rgba(31, 36, 40, 0.16);
  border-radius: 16px;
  padding: 14px 16px;
  font-size: 16px;
  color: #1F2428;
}
```

Focus:

```css
.input:focus {
  outline: none;
  border-color: #476A7C;
  box-shadow: 0 0 0 4px rgba(71, 106, 124, 0.16);
}
```

---

## 10. Ikonstil

Bruk enkle monoline-ikoner.

### Ikonregler

- Stroke: 1.5–2 px
- Runde ender
- Ingen 3D
- Ingen cartoon-stil
- Ikke bruk for mange ikoner samtidig
- Ikoner skal støtte innholdet, ikke dominere

### Anbefalte ikontemaer

- bygning
- nøkkel
- kartnål
- skjerm
- kode
- server
- nettverk
- vær
- video/livestream
- familie/personer, svært subtilt

---

## 11. Bevegelse og interaksjon

Animasjon skal være diskret og presis.

### Standard transition

```css
transition: all 180ms ease-out;
```

### Bruk animasjon til

- hover-løft på kort
- myk knapprespons
- fade-in på seksjoner
- subtil bildezoom
- enkel accordion/interaksjon

### Unngå

- lange animasjoner
- tunge parallaxeffekter
- flashy scroll-jacking
- overdrevne loading-effekter

Bevegelse skal signalisere kontroll og kvalitet, ikke show.

---

## 12. Tone of voice

Tace IT skal skrive som en kompetent lokal fagperson.

### Språket skal være

- direkte
- varmt
- ryddig
- praktisk
- jordnært
- hjelpsomt
- uten hype

### Bruk formuleringer som

- “ryddige, raske og pålitelige nettløsninger”
- “digitalt håndverk”
- “fra hjertet av Tønsberg”
- “la oss ta en prat”
- “vi svarer gjerne”
- “med fokus på det som faktisk fungerer”
- “eiendom møter teknologi”
- “sjel og sjarm midt i sentrum”

### Unngå formuleringer som

- “banebrytende digital transformasjon”
- “hyper-skalerbare økosystemer”
- “revolusjonerende plattform”
- “AI-drevet disruptiv innovasjon”
- “verdensledende teknologi”
- “next-gen enterprise solution”

### Eksempel: god brandtekst

> Vi bygger ryddige, raske og pålitelige nettløsninger for bedrifter og organisasjoner som trenger noe som fungerer i hverdagen.

### Eksempel: mindre god brandtekst

> Vi leverer banebrytende digitale økosystemer for fremtidens hyper-skalerbare virksomheter.

---

## 13. Innholdsstruktur for nettsider og digitale produkter

### 13.1 Hero

Hero bør inneholde:

- logo
- enkel navigasjon
- stor overskrift
- kort undertekst
- én primær CTA
- én sekundær CTA eller lenke
- eventuelt bilde fra Tønsberg, eiendom eller arbeidsmiljø

Eksempel:

> **Tace IT**  
> Webutvikling, IT-rådgivning og digitale løsninger fra Tønsberg.

CTA:

- “Kontakt oss”
- “Snakk med oss”
- “Se prosjekter”
- “La oss ta en prat”

### 13.2 Om oss

Fokuser på:

- familiebedrift
- Tønsberg
- 20+ års erfaring
- eiendom og IT
- praktiske løsninger

### 13.3 Tjenester

Del gjerne i kort:

1. Webutvikling
2. IT-rådgivning
3. CMS og vedlikehold
4. Integrasjoner og sanntidsdata
5. Design og innholdsstyring

### 13.4 Prosjekter

Bruk tabell eller kort med:

- år
- prosjekt
- beskrivelse
- teknologi
- lenke

Eksempel på teknologi-badges:

- HTML
- CSS
- JavaScript
- Joomla 5.0
- Livestream
- Live Vær-API
- Custom Design

### 13.5 Eiendom

Bruk varmere visuell stil:

- større bilder
- varme beige/sand-flater
- tekst om historie, sjel og beliggenhet
- detaljer om areal, soverom, fasiliteter

### 13.6 Kontakt

Kontaktseksjonen skal være enkel og lavterskel.

Eksempel:

> Trenger du en ny nettside, eller vil du vite mer om det vi gjør? Ta gjerne kontakt — vi svarer gjerne.

---

## 14. Accessibility

Digitale produkter i Tace IT-stil skal være tilgjengelige og ryddige.

### Krav

- God kontrast mellom tekst og bakgrunn
- Tydelige focus states
- Knapper som kan brukes med tastatur
- Ikke bruk farge alene som status
- Alt-tekst på bilder
- Lesbare fontstørrelser
- Ikke tekst over bilder uten overlay
- Respekter `prefers-reduced-motion`

Eksempel:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

---

## 15. Design tokens

```json
{
  "brand": {
    "name": "Tace IT AS",
    "essence": "Pålitelig digitalt håndverk fra Tønsberg",
    "personality": [
      "ryddig",
      "pålitelig",
      "lokal",
      "familieeid",
      "praktisk",
      "moderne",
      "historisk varm"
    ]
  },
  "colors": {
    "graphite": "#1F2428",
    "charcoal": "#2E3338",
    "logoGray": "#A8A8A8",
    "silver": "#B8B8B8",
    "offWhite": "#F6F4EF",
    "white": "#FFFFFF",
    "timber": "#8A6042",
    "brick": "#9B4F3F",
    "sand": "#D8C7AE",
    "warmBeige": "#ECE2D3",
    "stone": "#7B746C",
    "deepBlue": "#1F3A4A",
    "steelBlue": "#476A7C",
    "codeGreen": "#5F7F68"
  },
  "typography": {
    "fontStack": "Inter, Manrope, Helvetica Neue, Arial, sans-serif",
    "h1": {
      "fontSize": "clamp(48px, 8vw, 96px)",
      "lineHeight": "0.95",
      "letterSpacing": "-0.04em",
      "fontWeight": 700
    },
    "h2": {
      "fontSize": "clamp(32px, 5vw, 56px)",
      "lineHeight": "1.05",
      "letterSpacing": "-0.03em",
      "fontWeight": 650
    },
    "body": {
      "fontSize": "17px",
      "lineHeight": "1.65",
      "fontWeight": 400
    }
  },
  "radius": {
    "small": "10px",
    "medium": "16px",
    "large": "24px",
    "pill": "999px"
  },
  "shadow": {
    "card": "0 18px 50px rgba(31, 36, 40, 0.08)",
    "hover": "0 24px 70px rgba(31, 36, 40, 0.12)"
  },
  "spacing": {
    "containerMaxWidth": "1180px",
    "containerPadding": "24px",
    "sectionY": "clamp(72px, 10vw, 140px)"
  },
  "motion": {
    "duration": "180ms",
    "easing": "ease-out",
    "hoverLift": "translateY(-2px)"
  }
}
```

---

## 16. LLM-instruks: design i Tace IT-stil

Bruk denne instruksen direkte i andre LLM-er:

```text
Design a digital product in the visual style of Tace IT AS.

Tace IT AS is a small family-owned IT and property company from Tønsberg, Norway. The brand combines reliable web development, IT consulting, historic properties, local roots and practical digital craftsmanship.

The design should feel trustworthy, calm, local, warm, precise and technically competent. It should not feel like a generic SaaS startup, a flashy tech company or a large corporate consultancy.

Use a Scandinavian visual language with generous whitespace, dark graphite typography, warm off-white backgrounds, subtle gray logo-inspired neutrals, and restrained warm accents inspired by timber, brick, sand and old buildings.

Use these colors:
- Graphite: #1F2428
- Charcoal: #2E3338
- Logo Gray: #A8A8A8
- Silver: #B8B8B8
- Off White: #F6F4EF
- White: #FFFFFF
- Timber: #8A6042
- Brick: #9B4F3F
- Sand: #D8C7AE
- Warm Beige: #ECE2D3
- Stone: #7B746C
- Deep Blue: #1F3A4A
- Steel Blue: #476A7C
- Code Green: #5F7F68

Typography:
Use Inter or Manrope. Use large, calm, bold headlines with slightly tight tracking. Body copy should be readable, spacious and practical.

UI:
Use rounded cards, subtle borders, soft shadows, pill-shaped buttons, compact badges and structured project tables. Buttons should be calm and solid, not flashy. Use Deep Blue for primary CTAs and warm neutrals for background sections.

Imagery:
Use warm, natural images of Tønsberg, historic buildings, timber walls, brick, windows, interiors, laptops, code, CMS interfaces, marina/weather data and practical work environments. Avoid generic corporate stock photos.

Tone:
Write in Norwegian unless otherwise specified. Be direct, warm and practical. Use language such as “ryddige, raske og pålitelige løsninger”, “digitalt håndverk”, “fra Tønsberg”, “la oss ta en prat”, and “med fokus på det som faktisk fungerer”. Avoid hype and buzzwords.

Layout:
Use a spacious hero, clear navigation, short intro text, one primary CTA, service cards, a project table, an optional property section, and a simple contact section. Make the information architecture obvious and easy to scan.

Do not:
- use neon gradients
- overuse blue
- make it look like a generic SaaS template
- use aggressive sales language
- add excessive animation
- create cluttered dashboards
- use overly corporate language
```

---

## 17. Eksempelkomponenter

### Hero-komponent

```html
<section class="hero">
  <div class="container">
    <p class="label">Tace IT AS · Tønsberg</p>
    <h1>Digitalt håndverk fra hjertet av Tønsberg.</h1>
    <p>
      Vi bygger ryddige, raske og pålitelige nettløsninger
      for bedrifter og organisasjoner som trenger noe som fungerer.
    </p>
    <div class="actions">
      <a class="button-primary" href="/kontakt">Kontakt oss</a>
      <a class="button-secondary" href="/it">Se prosjekter</a>
    </div>
  </div>
</section>
```

### Servicekort

```html
<article class="card">
  <span class="badge">Webutvikling</span>
  <h3>Ryddige nettløsninger</h3>
  <p>
    Vi bygger raske og pålitelige nettsider med fokus på det som faktisk
    fungerer for kunden.
  </p>
</article>
```

### Prosjektrad

```html
<div class="project-row">
  <div>2026</div>
  <div>
    <h3>PASTE</h3>
    <a href="#">www.pasteco.no</a>
  </div>
  <p>
    Moderne nettsted for start-up bedrift levert i HTML, CSS og JavaScript.
  </p>
  <div>
    <span class="badge">HTML</span>
    <span class="badge">CSS</span>
    <span class="badge">JavaScript</span>
  </div>
</div>
```

---

## 18. Oppsummering

Tace IT-brandet skal føles som:

> **Et ryddig og pålitelig IT-miljø fra Tønsberg, med varme fra historiske eiendommer og presisjon fra godt digitalt håndverk.**

Designet skal være moderne, men ikke kaldt. Teknisk, men ikke upersonlig. Lokalt, men ikke gammeldags. Personlig, men fortsatt profesjonelt.
