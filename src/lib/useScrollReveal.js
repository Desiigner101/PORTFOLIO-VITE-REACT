import { useEffect } from "react";

/**
 * Observes every element with the `.reveal` class and adds `.reveal-visible`
 * the first time it scrolls into view. Call once near the top of a page.
 */
export const useScrollReveal = () => {
    useEffect(() => {
        const elements = document.querySelectorAll(".reveal");

        // Fallback: if IntersectionObserver is unavailable, just show everything.
        if (!("IntersectionObserver" in window)) {
            elements.forEach((el) => el.classList.add("reveal-visible"));
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("reveal-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);
};
