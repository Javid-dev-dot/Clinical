"use client";

import { useEffect, useState } from "react";

export default function SiteEnhancements() {
  const [progress, setProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const revealElements = Array.from(document.querySelectorAll(".reveal-on-scroll"));

    const updateScrollState = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0);
      setShowBackToTop(window.scrollY > 600);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    if (reducedMotion.matches) {
      revealElements.forEach((element) => element.classList.add("is-revealed"));
      return () => window.removeEventListener("scroll", updateScrollState);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -36px" },
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" style={{ "--scroll-progress": `${progress}%` }} aria-hidden="true" />
      <button
        type="button"
        className={`back-to-top ${showBackToTop ? "is-visible" : ""}`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
          <path d="m6 14 6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </>
  );
}
