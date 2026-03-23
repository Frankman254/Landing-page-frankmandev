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
    const bars = container.querySelectorAll<HTMLElement>(".bar-animated");

    // Progressive enhancement: content stays visible unless JS successfully
    // initializes the reveal behavior on the client.
    reveals.forEach((el) => el.classList.add("reveal-init"));
    bars.forEach((el) => el.classList.add("bar-init"));

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

    const barObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("bar-play");
            barObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    reveals.forEach((el) => revealObs.observe(el));
    bars.forEach((el) => barObs.observe(el));

    return () => {
      revealObs.disconnect();
      barObs.disconnect();
      reveals.forEach((el) => el.classList.remove("reveal-init"));
      bars.forEach((el) => el.classList.remove("bar-init"));
    };
  }, []);

  return ref;
}
