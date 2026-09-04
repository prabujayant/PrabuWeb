"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { ThemeToggle } from "@/components/site/theme-toggle";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/profile";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex min-w-0 items-baseline gap-2"
          aria-label={`${siteConfig.name} — home`}
        >
          <span className="truncate font-serif text-lg font-semibold tracking-tight text-foreground">
            {siteConfig.name}
          </span>
          <span className="hidden text-xs uppercase tracking-[0.2em] text-muted-foreground sm:inline">
            {siteConfig.role}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === item.href
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-expanded={open}
            aria-controls="site-nav-mobile"
            aria-label="Toggle navigation menu"
            className="md:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            <Menu className="size-5" />
          </Button>
        </div>
      </div>

      {open ? (
        <nav
          id="site-nav-mobile"
          aria-label="Mobile"
          className="border-t border-border/60 bg-background/95 px-4 pb-4 pt-2 md:hidden"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
