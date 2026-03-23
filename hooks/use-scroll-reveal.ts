"use client";
import { useEffect, useRef } from "react";

export function useScrollReveal(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const reveals = container.querySelectorAll<HTMLElement>(
      ".reveal, .reveal-left, .reveal-scale"
    );

    // Progressive enhancement: content stays visible unless JS successfully
    // initializes the reveal behavior on the client.
    reveals.forEach((el) => el.classList.add("reveal-init"));

    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("visible");
            revealObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, ...options }
    );

    reveals.forEach((el) => revealObs.observe(el));

    return () => {
      revealObs.disconnect();
      reveals.forEach((el) => el.classList.remove("reveal-init"));
    };
  }, []);

  return ref;
}
