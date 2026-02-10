import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Pinyon_Script, Lexend } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const pinyonScript = Pinyon_Script({
  variable: "--font-pinyon-script",
  weight: "400",
  subsets: ["latin"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neeb Karori Baba – Spiritual Saint and Teacher",
  description: "Neeb Karori Baba was a famous Hindu saint known for his teachings of love, devotion, and selfless service. His spiritual guidance continues to inspire millions of devotees worldwide.",
  keywords: "Neeb Karori Baba, Maharaj-ji, Kainchi Dham, Neeb Karori Baba teachings, Hindu saint, spiritual guru India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${pinyonScript.variable} ${lexend.variable} antialiased notranslate`}
      >
        {children}
      </body>
    </html>
  );
}
