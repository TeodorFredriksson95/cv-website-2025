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
  title: "A Unidevweb Portfolio Site",
  description: "A Unidevweb portfolio site",
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
