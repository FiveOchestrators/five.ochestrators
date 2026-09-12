"use client";

import { useEffect, useRef } from "react";

export function AmbientBackground() {
  const layer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = layer.current;
    if (!element) return;
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let previousFrame = 0;
    let x = 0, y = 0, targetX = 0, targetY = 0;
    let energy = 0, intensity = 0;
    let previous: { x: number; y: number; time: number; vx: number; vy: number } | null = null;

    const animate = (now: number) => {
      const dt = Math.min(now - previousFrame, 50);
      previousFrame = now;
      const follow = 1 - Math.exp(-dt / 650);
      const ease = 1 - Math.exp(-dt / 350);
      x += (targetX - x) * follow;
      y += (targetY - y) * follow;
      energy *= Math.exp(-dt / 550);
      intensity += (energy - intensity) * ease;
      element.style.setProperty("--ambient-x", `${(x * 16).toFixed(3)}%`);
      element.style.setProperty("--ambient-y", `${(y * 12).toFixed(3)}%`);
      element.style.setProperty("--grain-scale", (1 + intensity * .65).toFixed(4));
      element.style.setProperty("--grain-opacity", (.24 + intensity * .2).toFixed(4));
      element.style.setProperty("--ambient-brightness", (1 + intensity * .22).toFixed(4));
      if (Math.abs(targetX - x) + Math.abs(targetY - y) > .001 || intensity > .001 || energy > .001) {
        frame = requestAnimationFrame(animate);
      } else {
        frame = 0;
      }
    };

    const start = () => {
      if (!frame && !reducedMotion.matches && !document.hidden) {
        previousFrame = performance.now();
        frame = requestAnimationFrame(animate);
      }
    };

    const move = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || reducedMotion.matches || document.hidden) return;
      const now = performance.now();
      targetX = Math.max(-1, Math.min(1, event.clientX / innerWidth * 2 - 1));
      targetY = Math.max(-1, Math.min(1, event.clientY / innerHeight * 2 - 1));
      let vx = 0, vy = 0;
      if (previous && now - previous.time < 180) {
        const seconds = Math.max(8, now - previous.time) / 1000;
        vx = (event.clientX - previous.x) / seconds;
        vy = (event.clientY - previous.y) / seconds;
        // Vector acceleration also responds to a change of direction.
        const acceleration = Math.hypot(vx - previous.vx, vy - previous.vy) / seconds;
        energy = Math.max(energy, Math.min(1, acceleration / 45000));
      }
      previous = { x: event.clientX, y: event.clientY, time: now, vx, vy };
      start();
    };

    const settle = () => {
      previous = null;
      targetX = targetY = energy = 0;
      start();
    };
    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      previous = null;
      x = y = targetX = targetY = energy = intensity = 0;
      element.removeAttribute("style");
    };
    const preferenceChanged = () => { if (reducedMotion.matches) reset(); };
    const visibilityChanged = () => { if (document.hidden) reset(); };
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("blur", settle);
    document.documentElement.addEventListener("pointerleave", settle);
    document.addEventListener("visibilitychange", visibilityChanged);
    reducedMotion.addEventListener("change", preferenceChanged);
    return () => {
      reset();
      window.removeEventListener("pointermove", move);
      window.removeEventListener("blur", settle);
      document.documentElement.removeEventListener("pointerleave", settle);
      document.removeEventListener("visibilitychange", visibilityChanged);
      reducedMotion.removeEventListener("change", preferenceChanged);
    };
  }, []);

  return <div ref={layer} className="ambient-background" aria-hidden="true"><div className="ambient-gradient" /><div className="ambient-grain" /></div>;
}
