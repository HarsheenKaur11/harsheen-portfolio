import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { profileData } from "@/data/profile";

export const metadata: Metadata = {
  metadataBase: new URL("https://harsheenkaur.dev"),
  title: {
    default: `${profileData.name} — Data Operations Analyst & Software Technologist`,
    template: `%s | ${profileData.name}`,
  },
  description:
    "Official personal portfolio of Harsheen Kaur: BCA Graduate (9.48 CGPA), Data Operations Analyst at NielsenIQ (NIQ Thumbs Up Award), Machine Learning, and Full-Stack Developer.",
  keywords: [
    "Harsheen Kaur",
    "Data Analyst",
    "NielsenIQ",
    "NIQ",
    "Data Operations",
    "MDQC",
    "BCA VIPS",
    "Machine Learning",
    "Python",
    "FactShield",
    "StockMinds",
    "Planora AI",
    "SeniorSaathi",
    "Arcanum",
  ],
  authors: [{ name: profileData.name }],
  creator: profileData.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://harsheenkaur.dev",
    title: `${profileData.name} — Interactive Portfolio & Isometric City`,
    description: profileData.supportingText,
    siteName: `${profileData.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.name} — Portfolio`,
    description: profileData.supportingText,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-midnight-950 text-slate-100 flex flex-col font-sans selection:bg-electric selection:text-white">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
