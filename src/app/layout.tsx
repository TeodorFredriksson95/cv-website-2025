import type { Metadata } from "next";
import { Sora, Fira_Code, DM_Serif_Display, IBM_Plex_Mono, Lato } from "next/font/google";

import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://unidevwebportfolio.com"), //
  title: "Teodor Fredriksson | Portfolio",
  description: "Showcasing web, mobile, and game development by Teodor Fredriksson.",
  icons: {
    icon: "/favicon.png"

  },
  openGraph: {
    title: "Teodor Fredriksson | Portfolio",
    description: "Projects in web, mobile, and game development. Built with React, Next.js and Tailwind",
    url: "https://cv-website-2025-i55q.vercel.app/",
    siteName: "Teodor Fredriksson Portfolio",
    images: [
      {
        url: "https://cv-website-2025-i55q.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Teodor Fredriksson Portfolio Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  manifest: "/site.webmanifest",
};


export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={`${sora.variable} ${firaCode.variable} ${lato.variable} antialiased`}>
        <Navbar/>
        <div className="min-h-screen flex flex-col">
         <main className="flex-1">
          {children}
          </main> 
        <Footer />
        </div>
      </body>
    </html>
  );
}
