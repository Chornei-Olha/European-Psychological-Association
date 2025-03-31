import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import Head from "next/head";

// Импортируем шрифты
const instrumentSans = Instrument_Sans({ subsets: ["latin"] });

const SITE_NAME = "Solterra";
const SITE_DESCRIPTION =
  "Suchen Sie nette, fleißige, erfahrene Betreuerinnen für Ihre Eltern? Wir bieten häusliche 24 Stunden Seniorenbetreuung und Haushalte in Österreich und Deutschland.";

export const metadata: Metadata = {
  title: "Solterra",
  description:
    "Suchen Sie nette, fleißige, erfahrene Betreuerinnen für Ihre Eltern? Wir bieten häusliche 24 Stunden Seniorenbetreuung und Haushalte in Österreich und Deutschland.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* HTML Meta Tags */}
        <title>{SITE_NAME}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        {/* Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={SITE_NAME} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
      </Head>
      <body className={`${instrumentSans.className}`}>{children}</body>
    </html>
  );
}
