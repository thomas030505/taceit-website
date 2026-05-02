import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const BASE_URL = "https://taceit.no";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Tace IT AS – Webutvikling og IT-tjenester i Tønsberg",
    template: "%s | Tace IT AS",
  },
  description:
    "Familieeid IT-selskap i Tønsberg med over 20 års erfaring. Vi bygger nettsider og digitale løsninger for bedrifter i Vestfold – enkelt, raskt og pålitelig.",
  keywords: [
    "IT-konsulent Tønsberg",
    "webutvikling Tønsberg",
    "IT-tjenester Vestfold",
    "webutvikling Vestfold",
    "programmerer Vestfold",
    "IT-rådgivning Tønsberg",
    "digitalisering SMB",
    "webdesign Tønsberg",
    "Tace IT",
    "IT-selskap Tønsberg",
    "CMS utvikling",
    "Joomla",
  ],
  authors: [{ name: "Tace IT AS", url: BASE_URL }],
  creator: "Tace IT AS",
  publisher: "Tace IT AS",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Tace IT AS – Webutvikling og IT-tjenester i Tønsberg",
    description:
      "Familieeid IT-selskap i Tønsberg med over 20 års erfaring. Vi bygger nettsider og digitale løsninger for bedrifter i Vestfold – enkelt, raskt og pålitelig.",
    url: BASE_URL,
    siteName: "Tace IT AS",
    locale: "nb_NO",
    type: "website",
    images: [
      {
        url: "/images/ol34/ute.jpg",
        width: 1200,
        height: 630,
        alt: "Tace IT AS – Tønsberg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tace IT AS – Webutvikling og IT-tjenester i Tønsberg",
    description:
      "Familieeid IT-selskap i Tønsberg med over 20 års erfaring. Vi bygger nettsider og digitale løsninger for bedrifter i Vestfold.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
  verification: {
    // google: "legg-til-din-google-search-console-kode-her",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": BASE_URL,
  name: "Tace IT AS",
  description:
    "IT-konsulent og webutvikler i Tønsberg med over 20 års erfaring. Leverer webutvikling, systemrådgivning og digitale løsninger for bedrifter i Vestfold.",
  url: BASE_URL,
  telephone: "+4747166000",
  email: "erik@taceit.no",
  foundingDate: "2005",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kjellelia 1C",
    postalCode: "3125",
    addressLocality: "Tønsberg",
    addressRegion: "Vestfold",
    addressCountry: "NO",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 59.2672,
    longitude: 10.4078,
  },
  areaServed: [
    { "@type": "City", name: "Tønsberg" },
    { "@type": "AdministrativeArea", name: "Vestfold" },
  ],
  sameAs: ["https://www.facebook.com/taceit"],
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "16:00",
  },
  knowsAbout: [
    "Webutvikling",
    "IT-konsulent",
    "Systemarkitektur",
    "CMS-utvikling",
    "Joomla",
    "Prosjektledelse",
    "Digitalisering",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nb" className={`${cormorant.variable} ${inter.variable} h-full`}>
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Tace IT" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
