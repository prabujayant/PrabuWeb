"use client";

import { useEffect, useRef } from "react";

interface Splash {
  x: number;
  y: number;
  opacity: number;
  scale: number;
  hue: number;
  el: HTMLDivElement;
}

export function AnimatedBackground() {
  const glow1 = useRef<HTMLDivElement>(null);
  const glow2 = useRef<HTMLDivElement>(null);
  const splashContainer = useRef<HTMLDivElement>(null);
  const rafId = useRef(0);
  const mouse = useRef({ x: 0, y: 0 });
  const pos1 = useRef({ x: 0, y: 0 });
  const pos2 = useRef({ x: 0, y: 0 });
  const prevMouse = useRef({ x: 0, y: 0 });
  const splashes = useRef<Splash[]>([]);
  const hueRef = useRef(0);
  const isMobileRef = useRef(false);

  useEffect(() => {
    // Detect mobile device
    isMobileRef.current =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      ) || window.innerWidth < 768;

    // Skip all effects on mobile
    if (isMobileRef.current) {
      return;
    }

    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    mouse.current = { x: cx, y: cy };
    prevMouse.current = { x: cx, y: cy };
    pos1.current = { x: cx, y: cy };
    pos2.current = { x: cx, y: cy };

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    let frameCount = 0;

    const tick = () => {
      frameCount++;

      // Smooth responsive follow
      pos1.current.x += (mouse.current.x - pos1.current.x) * 0.18;
      pos1.current.y += (mouse.current.y - pos1.current.y) * 0.18;

      // Dreamy trail
      pos2.current.x += (mouse.current.x - pos2.current.x) * 0.06;
      pos2.current.y += (mouse.current.y - pos2.current.y) * 0.06;

      if (glow1.current) {
        glow1.current.style.transform = `translate3d(${pos1.current.x - 300}px, ${pos1.current.y - 300}px, 0)`;
      }
      if (glow2.current) {
        glow2.current.style.transform = `translate3d(${pos2.current.x - 350}px, ${pos2.current.y - 350}px, 0)`;
      }

      // Cursor speed
      const dx = mouse.current.x - prevMouse.current.x;
      const dy = mouse.current.y - prevMouse.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);

      // Spawn splashes — triggers easily, spawns multiple for rich color
      if (speed > 3 && frameCount % 2 === 0 && splashContainer.current) {
        // Spawn 2 splashes per tick with slight offset for color density
        for (let j = 0; j < 2; j++) {
          hueRef.current = (hueRef.current + 25) % 360;
          const el = document.createElement("div");
          const size = 220 + Math.random() * 250;
          const offsetX = (Math.random() - 0.5) * 80;
          const offsetY = (Math.random() - 0.5) * 80;
          el.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            top: 0;
            left: 0;
            transform: translate3d(${mouse.current.x - size / 2 + offsetX}px, ${mouse.current.y - size / 2 + offsetY}px, 0) scale(0.6);
            background: radial-gradient(circle, hsla(${hueRef.current}, 100%, 55%, 1) 0%, hsla(${hueRef.current + 35}, 95%, 45%, 0.8) 35%, transparent 70%);
            filter: blur(35px);
            mix-blend-mode: screen;
            pointer-events: none;
            will-change: transform, opacity;
          `;
          splashContainer.current.appendChild(el);
          splashes.current.push({
            x: mouse.current.x + offsetX,
            y: mouse.current.y + offsetY,
            opacity: 1,
            scale: 0.6,
            hue: hueRef.current,
            el,
          });
        }

        // Cap splash count so performance stays smooth
        while (splashes.current.length > 80) {
          const old = splashes.current.shift();
          if (old) old.el.remove();
        }
      }

      // Animate splashes — slow fade for smooth feel
      for (let i = splashes.current.length - 1; i >= 0; i--) {
        const s = splashes.current[i];
        s.opacity -= 0.012;
        s.scale += 0.006;

        if (s.opacity <= 0) {
          s.el.remove();
          splashes.current.splice(i, 1);
        } else {
          s.el.style.opacity = String(s.opacity);
          s.el.style.transform = `translate3d(${s.x - 225}px, ${s.y - 225}px, 0) scale(${s.scale})`;
        }
      }

      prevMouse.current.x = mouse.current.x;
      prevMouse.current.y = mouse.current.y;

      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId.current);
      splashes.current.forEach((s) => s.el.remove());
    };
  }, []);

  return (
        <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ maxHeight: "100vh", width: "100vw" }}
    >
      {/* Base background */}
      <div className="absolute inset-0 bg-background dark:bg-[#050505]" />

      {/* Ambient floating blobs — deep, rich tones (hidden on mobile) */}
      <div className="absolute inset-0 hidden md:block" style={{ overflow: "hidden" }}>
        <div
          className="absolute top-[-10%] left-[-5%] w-[55vw] h-[55vw] rounded-full blur-[120px] will-change-transform animate-blob1"
          style={{ background: "rgba(88, 28, 135, 0.55)" }}
        />
        <div
          className="absolute top-[0%] right-[-10%] w-[50vw] h-[50vw] rounded-full blur-[130px] will-change-transform animate-blob2"
          style={{ background: "rgba(157, 23, 77, 0.5)" }}
        />
        <div
          className="absolute bottom-[-15%] left-[10%] w-[55vw] h-[55vw] rounded-full blur-[130px] will-change-transform animate-blob3"
          style={{ background: "rgba(180, 60, 0, 0.5)" }}
        />
        <div
          className="absolute bottom-[0%] right-[5%] w-[45vw] h-[45vw] rounded-full blur-[110px] will-change-transform animate-blob4"
          style={{ background: "rgba(161, 98, 7, 0.4)" }}
        />
      </div>

      {/* Splash container */}
      <div ref={splashContainer} className="absolute inset-0" />

      {/* Primary cursor glow — deep rich colors (only on desktop) */}
      {!isMobileRef.current && (
        <div
          ref={glow1}
          className="absolute top-0 left-0 will-change-transform"
          style={{
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at center, rgba(190,0,80,1) 0%, rgba(200,60,0,0.9) 20%, rgba(100,40,180,0.8) 40%, rgba(180,120,0,0.5) 60%, transparent 75%)",
            filter: "blur(40px)",
            mixBlendMode: "screen",
          }}
        />
      )}

      {/* Secondary trail — deeper purple (only on desktop) */}
      {!isMobileRef.current && (
        <div
          ref={glow2}
          className="absolute top-0 left-0 will-change-transform"
          style={{
            width: 700,
            height: 700,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at center, rgba(80,20,160,1) 0%, rgba(150,30,80,0.8) 25%, rgba(180,60,0,0.6) 50%, transparent 70%)",
            filter: "blur(70px)",
            mixBlendMode: "screen",
          }}
        />
      )}
    </div>
  );
}
