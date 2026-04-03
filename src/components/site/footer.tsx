import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

import { siteConfig } from "@/content/profile";

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Portfolio: ArrowUpRight,
} as const;

export function SiteFooter() {
  return (
    <footer className="px-4 pb-8 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 rounded-[2rem] border border-border/70 bg-card/70 px-6 py-6 shadow-lg shadow-black/5 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="font-serif text-lg font-semibold text-foreground">
            {siteConfig.name}
          </div>
          <p className="mt-1 max-w-2xl text-sm leading-7 text-muted-foreground">
            Crafted for thoughtful teams, practical AI, and reliable systems.
          </p>
        </div>
        <div className="flex items-center gap-3">
          {siteConfig.socialLinks.map((link) => {
            const Icon =
              iconMap[link.label as keyof typeof iconMap] ?? ArrowUpRight;

            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex size-10 items-center justify-center rounded-full border border-border/70 bg-background/70 text-muted-foreground transition hover:-translate-y-0.5 hover:text-foreground"
                aria-label={link.label}
              >
                <Icon className="size-4" />
              </a>
            );
          })}
          <a
            href={siteConfig.emailHref}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border/70 bg-background/70 text-muted-foreground transition hover:-translate-y-0.5 hover:text-foreground"
            aria-label="Email"
          >
            <Mail className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
