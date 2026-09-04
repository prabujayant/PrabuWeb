"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Wraps the page <main> and adds a gentle fade-up reveal to <section>s
 * as they enter the viewport. No-op for reduced-motion users and when JS
 * or IntersectionObserver is unavailable, so content is never hidden.
 */
export function RevealSections({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const host = ref.current;
    if (!host) return;
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const reveal = (el: HTMLElement) => {
      el.classList.add("reveal-in");
      el.classList.remove("reveal");
    };

    const pending = new Set<HTMLElement>();
    const inViewport = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            reveal(el);
            pending.delete(el);
            io.unobserve(el);
          }
        }
      },
      { rootMargin: "0px 0px -4% 0px", threshold: 0.05 },
    );

    const sections = Array.from(
      host.querySelectorAll<HTMLElement>("section"),
    );
    for (const el of sections) {
      if (inViewport(el)) continue; // already visible on load — leave it alone
      el.classList.add("reveal");
      pending.add(el);
      io.observe(el);
    }

    // Watchdog: reveal anything that ends up on screen (handles jump-scrolls).
    const watchdog = window.setInterval(() => {
      for (const el of pending) {
        if (inViewport(el)) {
          reveal(el);
          pending.delete(el);
          io.unobserve(el);
        }
      }
      if (pending.size === 0) window.clearInterval(watchdog);
    }, 500);

    return () => {
      io.disconnect();
      window.clearInterval(watchdog);
    };
  }, []);

  return (
    <main ref={ref} className="flex-1">
      {children}
    </main>
  );
}
