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

  metadataBase: new URL("https://www.prabujayant.com"),
  title: {
    default: "Prabu Jayant – Software Engineer | AI Systems | Portfolio",
    template: `%s | Prabu Jayant`,
  },
  description:
    "Prabu Jayant is a software engineer building AI systems, distributed systems, and scalable products. View portfolio, projects, and experience.",
    icons: {
    icon: [
      { url: "/pj-icon.svg", type: "image/svg+xml", sizes: "any" },
    ],
  },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.description,
    type: "website",

    url: "https://www.prabujayant.com",
    images: [
      {
        url: "/pj-icon.svg",
        width: 200,
        height: 200,
        alt: "Prabu Jayant - PJ",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.description,
    images: ["/pj-icon.svg"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,


    url: "https://www.prabujayant.com",
    image: "https://www.prabujayant.com/pj-icon.svg",
    description:
      "Software engineer building AI systems, distributed systems, and scalable products",
    sameAs: [
      "https://github.com/prabujayant",
      "https://www.linkedin.com/in/prabu-jayant-6b316b251/",
    ],
    jobTitle: siteConfig.role,
    worksFor: {
      "@type": "Organization",
      name: "Baker Hughes",
    },
    alumniOf: "RV College of Engineering",
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${manrope.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
