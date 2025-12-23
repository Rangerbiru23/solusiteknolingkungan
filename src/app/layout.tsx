import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PT SOLUSI TEKNO LINGKUNGAN - Konsultansi Transportasi Profesional",
  description: "Solusi teknologi dan lingkungan untuk konsultansi transportasi. Profesional, berpengalaman, dan terpercaya di Indonesia.",
  keywords: ["PT SOLUSI TEKNO LINGKUNGAN", "konsultansi transportasi", "teknologi lingkungan", "transportasi", "konsultan", "Bandung"],
  authors: [{ name: "PT SOLUSI TEKNO LINGKUNGAN" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "PT SOLUSI TEKNO LINGKUNGAN - Konsultansi Transportasi",
    description: "Solusi teknologi dan lingkungan untuk konsultansi transportasi profesional",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT SOLUSI TEKNO LINGKUNGAN",
    description: "Konsultansi transportasi profesional dengan solusi teknologi dan lingkungan",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <hea>
        <meta name="facebook-domain-verification" content="ncr44nbytq11zyhhm3q0zorpdj35k1" />
      </hea>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
