import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const body = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const utility = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-utility",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Old Dominion Dispatch — Virginia News & Commonwealth Affairs",
  description:
    "Independent reporting on education, healthcare, business, finance, and wellness across the Commonwealth of Virginia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${utility.variable}`}>
      <body className="font-body bg-cream-100 min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
