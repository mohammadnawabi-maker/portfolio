import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nazir Nawabi — IT-Systemadministrator & Cloud Engineer",
  description:
    "Portfolio of Nazir Nawabi — IT expert specializing in cloud engineering, systems & networks, automation and full-stack development.",
  keywords: [
    "IT-Systemadministrator",
    "Cloud Engineering",
    "DevOps",
    "Full-Stack Developer",
    "Networks",
    "Windows Server",
    "Active Directory",
  ],
  authors: [{ name: "Nazir Nawabi" }],
  openGraph: {
    title: "Nazir Nawabi — IT-Systemadministrator",
    description:
      "Cloud Engineering · Systems & Networks · Automation · Full-Stack Development",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrains.variable} antialiased bg-night-900 text-slate-100`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
