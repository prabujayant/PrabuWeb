import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";
import { Providers } from "@/components/site/providers";
import { siteConfig } from "@/content/profile";
import { AnimatedBackground } from "@/components/ui/animated-background";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prabujayant.vercel.app"),
  title: {
    default: `${siteConfig.name} | ${siteConfig.role}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.description,
    type: "website",
    url: "https://prabujayant.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${manrope.variable}`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <Providers>
          <div className="relative flex min-h-screen flex-col overflow-x-hidden z-0">
            <AnimatedBackground />
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}
