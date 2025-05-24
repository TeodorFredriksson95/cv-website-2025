import type { Metadata } from "next";
import { Sora, Fira_Code } from "next/font/google";

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


export const metadata: Metadata = {
  themeColor: "fffff",
  metadataBase: new URL("https://unidevwebportfolio.com"), //
  title: "Unidevweb | Portfolio",
  description: "Showcasing web, mobile, and game development by Teodor Fredriksson.",
  icons: {
    icon: "/favicon.png"
    // icon: [
    //   { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    //   { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    //   { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    // ]
  },
  openGraph: {
    title: "Unidevweb | Portfolio",
    description: "Projects in web, mobile, and game development. Built with React, Next.js and Tailwind",
    url: "https://unidevweb.com",
    siteName: "Unidevweb",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Unidevweb Portfolio Cover",
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
      <body className={`${sora.variable} ${firaCode.variable} antialiased`}>
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
