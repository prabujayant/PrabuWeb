"use client";

import { useEffect, useRef } from "react";

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

const LINK_DIST = 130;
const MAX_DOTS = 44;

export function HeroField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let dots: Dot[] = [];
    let raf = 0;
    let running = false;
    let rgb = "242,239,234"; // dark foreground, matches default theme

    const updatePalette = () => {
      const dark = document.documentElement.classList.contains("dark");
      rgb = dark ? "242,239,234" : "24,26,32";
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(
        MAX_DOTS,
        Math.max(0, Math.round((width * height) / 28000)),
      );
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.16 - 0.05,
        r: Math.random() * 1.3 + 0.7,
      }));
    };

    const step = () => {
      if (!width || !height) return;
      ctx.clearRect(0, 0, width, height);

      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < -20) d.x = width + 20;
        else if (d.x > width + 20) d.x = -20;
        if (d.y < -20) d.y = height + 20;
        else if (d.y > height + 20) d.y = -20;
      }

      ctx.lineWidth = 1;
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const a = dots[i];
          const b = dots[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DIST) {
            ctx.strokeStyle = `rgba(${rgb},${((1 - dist / LINK_DIST) * 0.1).toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const d of dots) {
        ctx.fillStyle = `rgba(${rgb},0.5)`;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = () => {
      step();
      if (running) raf = requestAnimationFrame(loop);
    };

    const start = () => {
      running = true;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(loop);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    resize();
    if (reduce) {
      step(); // one static frame for reduced-motion users
    } else {
      start();
    }

    // Tracks whether the hero canvas is currently on-screen.
    let inView = true;

    const onVisibility = () => {
      if (document.hidden) stop();
      else if (!reduce && inView) start();
    };
    const onResize = () => {
      resize();
      if (reduce) step();
    };

    // Recolor when the light/dark theme class changes on <html>.
    const observer = new MutationObserver(updatePalette);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    updatePalette();

    // Pause the animation while the hero is off-screen. It is a fixed
    // decorative layer, so nothing about the effect changes for the viewer.
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          inView = entry.isIntersecting;
        }
        if (document.hidden || reduce) {
          stop();
        } else if (inView) {
          start();
        } else {
          stop();
        }
      },
      { threshold: 0 },
    );
    io.observe(canvas);

    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("resize", onResize);

    return () => {
      stop();
      observer.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      tabIndex={-1}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.45]"
    />
  );
}
