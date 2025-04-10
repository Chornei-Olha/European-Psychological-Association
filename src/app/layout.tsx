import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

// Импортируем шрифты
import { DM_Sans, Inter, Reem_Kufi, Prosto_One } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const reemKufi = Reem_Kufi({
  subsets: ["latin", "arabic"],
  variable: "--font-reem",
  display: "swap",
});

const prostoOne = Prosto_One({
  weight: "400",
  subsets: ["latin", "cyrillic"],
  variable: "--font-prosto",
  display: "swap",
});
const SITE_NAME = "EPA";
const SITE_DESCRIPTION = "Європейська асоциація психологів";

export const metadata: Metadata = {
  title: "EPA",
  description: "Європейська асоциація психологів",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uk"
      className={`${dmSans.variable} ${inter.variable} ${reemKufi.variable} ${prostoOne.variable}`}
    >
      <Head>
        {/* HTML Meta Tags */}
        <title>{SITE_NAME}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        {/* Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={SITE_NAME} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
      </Head>
      <body>{children}</body>
    </html>
  );
}
