import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

import { siteConfig } from "@/content/profile";

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Portfolio: ArrowUpRight,
} as const;

export function SiteFooter() {
  return (
    <footer className="px-4 pb-10 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 border-t border-border/70 pt-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-1.5">
          <p className="font-serif text-lg font-semibold text-foreground">
            {siteConfig.name}
          </p>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">
            Crafted for thoughtful teams, practical AI, and reliable systems.
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          {siteConfig.socialLinks.map((link) => {
            const Icon =
              iconMap[link.label as keyof typeof iconMap] ?? ArrowUpRight;

            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="inline-flex size-10 items-center justify-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-foreground"
              >
                <Icon className="size-4" />
              </a>
            );
          })}
          <a
            href={siteConfig.emailHref}
            aria-label="Email"
            className="inline-flex size-10 items-center justify-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            <Mail className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
