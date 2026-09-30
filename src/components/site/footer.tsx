import { Github, Linkedin, Mail } from "lucide-react";

import { siteConfig } from "@/content/profile";

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
} as const;

export function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-border py-8 sm:mt-16 sm:py-10">
      <div className="page-shell flex flex-col items-center gap-5">
        <p className="text-sm text-muted-foreground">
          By {siteConfig.name}
        </p>
        <div className="flex items-center gap-3">
          {siteConfig.socialLinks.map((link) => {
            const Icon = iconMap[link.label as keyof typeof iconMap];

            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="inline-flex size-11 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
              >
                <Icon className="size-5" aria-hidden="true" />
              </a>
            );
          })}
          <a
            href={siteConfig.emailHref}
            aria-label="Email"
            className="inline-flex size-11 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
          >
            <Mail className="size-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
