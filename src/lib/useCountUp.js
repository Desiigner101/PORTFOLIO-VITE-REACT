import { useEffect, useRef, useState } from "react";

/**
 * useCountUp — animates a number from 0 up to its target when the element
 * scrolls into view. Preserves any non-numeric prefix/suffix in the value
 * (e.g. "10+" counts to 10 and keeps the "+", "4th" keeps "th").
 *
 * Usage:
 *   const { ref, display } = useCountUp("10+");
 *   <p ref={ref}>{display}</p>
 */
export function useCountUp(value, duration = 1400) {
    const ref = useRef(null);
    const [display, setDisplay] = useState(value);
    const started = useRef(false);

    useEffect(() => {
        // Parse the leading number out of the value; keep the rest as suffix.
        const match = String(value).match(/^(\d+)(.*)$/);
        if (!match) {
            // No leading number (e.g. "∞") — just show it as-is.
            setDisplay(value);
            return;
        }
        const target = parseInt(match[1], 10);
        const suffix = match[2] || "";
        setDisplay(`0${suffix}`);

        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !started.current) {
                        started.current = true;
                        const startTime = performance.now();
                        const tick = (now) => {
                            const progress = Math.min((now - startTime) / duration, 1);
                            // easeOutCubic for a smooth finish
                            const eased = 1 - Math.pow(1 - progress, 3);
                            const current = Math.round(eased * target);
                            setDisplay(`${current}${suffix}`);
                            if (progress < 1) requestAnimationFrame(tick);
                        };
                        requestAnimationFrame(tick);
                    }
                });
            },
            { threshold: 0.4 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [value, duration]);

    return { ref, display };
}
