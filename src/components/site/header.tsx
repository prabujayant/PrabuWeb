"use client";

import { ArrowUpRight, Menu } from "lucide-react";
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
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-full border border-border/70 bg-background/75 px-4 py-3 shadow-lg shadow-black/5 backdrop-blur sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="min-w-0">
            <div className="font-serif text-lg font-semibold tracking-tight text-foreground">
              {siteConfig.name}
            </div>
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              {siteConfig.role}
            </div>
          </Link>

          <nav className="hidden items-center gap-2 rounded-full border border-border/60 bg-muted/55 p-1 md:flex">
            {siteConfig.nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === item.href
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    active
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-expanded={open}
              aria-label="Toggle navigation menu"
              onClick={() => setOpen((value) => !value)}
            >
              <Menu className="size-4" />
            </Button>
          </div>
        </div>

        {open ? (
          <div className="mt-3 space-y-2 rounded-[1.5rem] border border-border/60 bg-muted/45 p-3 sm:mt-4 sm:space-y-3 sm:p-4 md:hidden">
            <nav className="flex flex-col gap-1 sm:gap-2">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-background hover:text-foreground sm:px-4 sm:py-3"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
