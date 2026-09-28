import { Github, Linkedin, Mail } from "lucide-react";

import { siteConfig } from "@/content/profile";

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
} as const;

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border bg-white/[0.02] py-8">
      <div className="page-shell flex flex-col items-center gap-6">
        <p className="text-sm text-muted-foreground">
          By {siteConfig.name}
        </p>
        <div className="flex items-center gap-8">
          {siteConfig.socialLinks.map((link) => {
            const Icon = iconMap[link.label as keyof typeof iconMap];

            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-xl text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:text-accent"
              >
                <Icon aria-hidden="true" />
              </a>
            );
          })}
          <a
            href={siteConfig.emailHref}
            aria-label="Email"
            className="text-xl text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:text-accent"
          >
            <Mail aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
