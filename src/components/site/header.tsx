"use client";

import { Home, Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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

    let frame = 0;
    const updateActiveSection = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const activationLine = window.scrollY + 120;
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
      className="fixed inset-x-0 top-0 z-50 h-10 bg-background/95 backdrop-blur-md"
    >
      <div className="page-shell relative flex h-full items-center justify-center">
        <a
          href="#home"
          className="absolute left-3 flex items-center transition-transform duration-300 hover:scale-110 md:left-[3.75rem] lg:hidden"
          aria-label={`${siteConfig.name} — home`}
        >
          <Home className="size-4 text-foreground" aria-hidden="true" />
        </a>

        <nav
          className="hidden h-full items-center gap-8 lg:flex xl:gap-10"
          aria-label="Primary"
        >
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? "true" : undefined}
              className={cn(
                "relative flex h-full items-center px-1 text-sm transition-colors duration-300",
                active === item.href
                  ? "font-semibold text-accent after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-accent"
                  : "text-foreground after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:text-accent hover:after:w-full",
              )}
            >
              {item.href === "#home" ? (
                <Home className="mr-2 size-4" aria-hidden="true" />
              ) : null}
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="site-nav-mobile"
          aria-label="Toggle navigation menu"
          className="ml-auto inline-flex size-8 items-center justify-center rounded-md text-foreground transition-colors hover:text-accent lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          <Menu className="size-4" />
        </button>
      </div>

      {open ? (
        <nav
          id="site-nav-mobile"
          aria-label="Mobile"
          className="page-shell absolute inset-x-0 top-10 flex flex-col gap-1 border-y border-border bg-background/98 py-3 backdrop-blur-md lg:hidden"
        >
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-lg px-3 py-2.5 text-sm transition-colors",
                active === item.href
                  ? "font-semibold text-accent"
                  : "text-foreground hover:text-accent",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
