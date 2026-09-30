import type { Metadata } from "next";
import { Dancing_Script, Roboto } from "next/font/google";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";
import { Providers } from "@/components/site/providers";
import { RevealSections } from "@/components/site/reveal-sections";
import { siteConfig } from "@/content/profile";
import "./globals.css";

const dancing = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
  variable: "--font-dancing",
});

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Prabu Jayant – Software Engineer | AI Systems | Portfolio",
    template: `%s | Prabu Jayant`,
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  manifest: "/manifest.json",
  icons: {
    icon: [{ url: "/pj-icon.svg", type: "image/svg+xml", sizes: "any" }],
  },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.description,
    type: "website",
    url: siteConfig.url,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Prabu Jayant — software engineer and ML researcher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.description,
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/og.png`,
    description:
      "Software engineer building AI systems, distributed systems, and scalable products",
    sameAs: siteConfig.socialLinks.map((link) => link.href),
    jobTitle: siteConfig.role,
    worksFor: {
      "@type": "Organization",
      name: "Baker Hughes",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "RV College of Engineering",
    },
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${dancing.variable} ${roboto.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <Providers>
          <div className="relative flex min-h-screen flex-col overflow-x-hidden">
            <a
              href="#home"
              className="fixed left-4 top-3 z-[60] -translate-y-24 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-[#180c10] focus:translate-y-0"
            >
              Skip to content
            </a>
            <SiteHeader />
            <RevealSections>{children}</RevealSections>
            <SiteFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}
