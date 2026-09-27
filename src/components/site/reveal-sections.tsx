"use client";

import { useEffect, useState, type ReactNode } from "react";

/**
 * Wraps the page <main> and fades sections in as they enter the viewport.
 *
 * The reveal classes are tracked in React state and applied to the wrapper,
 * rather than toggled on individual <section> elements. React owns the
 * rendered output, so mutating `classList` on server-rendered nodes
 * directly would desync the DOM from the tree during hydration.
 *
 * No-op for reduced-motion users and when JS or IntersectionObserver is
 * unavailable, so content is never hidden.
 */
export function RevealSections({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setReady(true);
  }, []);

  return (
    <main className="flex-1" data-reveal={ready ? "on" : "off"}>
      {children}
    </main>
  );
}
