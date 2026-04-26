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

export const metadata: Metadata = {
  title: "TACE IT AS – Eiendom og IT",
  description:
    "Familieeid selskap i Tønsberg med to hjerter: historiske eiendommer i Øvre Langgate og moderne IT-utvikling.",
  keywords: ["Tønsberg", "eiendom", "utleie", "IT", "webdesign", "TACE"],
  openGraph: {
    title: "TACE IT AS – Eiendom og IT",
    description: "Familieeid selskap i Tønsberg. Eiendom og IT under ett tak.",
    locale: "nb_NO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nb" className={`${cormorant.variable} ${inter.variable} h-full`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
