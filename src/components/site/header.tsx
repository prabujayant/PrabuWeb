"use client";

import { ExternalLink, Menu } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/profile";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const headerRef = useRef<HTMLDivElement>(null);

  // Close the mobile menu on Escape or on an outside click.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  // Highlight the last navigation section whose heading has passed the fixed
  // header. Measuring section positions avoids tall sections winning or
  // losing based on their intersection ratio.
  useEffect(() => {
    const sections = siteConfig.nav
      .map((item) => ({ href: item.href, element: document.querySelector(item.href) }))
      .filter((item): item is { href: string; element: Element } => item.element !== null);

    if (sections.length === 0) return;

    // An anchored section settles at `scroll-padding-top` + its own
    // `scroll-margin-top` below the viewport top, so the activation line must
    // sit *past* that resting position. A hardcoded 120px was smaller than the
    // real 144px resting offset, which left the nav permanently one section
    // behind. Deriving it keeps the two from drifting apart again.
    const rootStyles = getComputedStyle(document.documentElement);
    const rootPadding = Number.parseFloat(rootStyles.scrollPaddingTop) || 0;
    const sectionMargin = Math.max(
      ...sections.map((section) =>
        Number.parseFloat(getComputedStyle(section.element).scrollMarginTop) || 0,
      ),
    );
    const activationOffset = rootPadding + sectionMargin + 16;

    let frame = 0;
    const updateActiveSection = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const activationLine = window.scrollY + activationOffset;
        let current = sections[0].href;

        for (const section of sections) {
          const sectionTop =
            section.element.getBoundingClientRect().top + window.scrollY;
          if (sectionTop <= activationLine) {
            current = section.href;
          } else {
            break;
          }
        }

        if (window.scrollY < 40) current = "#home";

        const atPageEnd =
          window.scrollY + window.innerHeight >=
          document.documentElement.scrollHeight - 2;
        if (atPageEnd) current = sections[sections.length - 1].href;

        setActive((previous) => (previous === current ? previous : current));
      });
    };

    updateActiveSection();
    document.addEventListener("scroll", updateActiveSection, {
      capture: true,
      passive: true,
    });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("scroll", updateActiveSection, true);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 h-14 border-b border-border bg-background/85 backdrop-blur-md"
    >
      <div className="page-shell flex h-full items-center justify-between gap-6">
        <a
          href="#home"
          className="flex items-center gap-2.5 rounded-lg"
          aria-label={`${siteConfig.name} — home`}
        >
          <Image
            src="/pj-icon.svg"
            alt=""
            width={32}
            height={32}
            className="size-8"
            unoptimized
          />
          <span className="text-sm font-semibold text-foreground">
            {siteConfig.name}
          </span>
        </a>

        <div className="hidden h-full items-center gap-8 lg:flex">
          <nav className="flex h-full items-center gap-7" aria-label="Primary">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={active === item.href ? "true" : undefined}
                className={cn(
                  "relative flex h-full items-center text-sm transition-colors duration-200 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-accent after:transition-transform after:duration-200",
                  active === item.href
                    ? "font-medium text-accent after:scale-x-100"
                    : "text-zinc-300 after:scale-x-0 hover:text-foreground",
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <Button asChild size="sm" variant="outline">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="site-nav-mobile"
          aria-label="Toggle navigation menu"
          className="inline-flex size-11 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:border-accent/40 hover:text-accent lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          <Menu className="size-5" aria-hidden="true" />
        </button>
      </div>

      {open ? (
        <nav
          id="site-nav-mobile"
          aria-label="Mobile"
          className="page-shell absolute inset-x-0 top-14 flex flex-col gap-1 border-b border-border bg-background py-3 lg:hidden"
        >
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "flex min-h-11 items-center rounded-lg px-3 text-sm transition-colors",
                active === item.href
                  ? "bg-accent/10 font-medium text-accent"
                  : "text-foreground hover:bg-white/5 hover:text-accent",
              )}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-2 border-t border-border pt-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center gap-2 rounded-lg px-3 text-sm text-foreground transition-colors hover:bg-white/5 hover:text-accent"
            >
              Resume
              <ExternalLink className="size-4" aria-hidden="true" />
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
