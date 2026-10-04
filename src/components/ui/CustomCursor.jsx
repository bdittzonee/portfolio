import { useEffect, useRef, useState } from "react";
import "../../styles/cursor.css";

// Dot + ring cursor — hanya desktop (hover-capable device).
export default function CustomCursor() {
    const dotRef = useRef(null);
    const ringRef = useRef(null);

    const [enabled] = useState(() =>
        typeof window !== "undefined" &&
        window.matchMedia("(hover: hover) and (pointer: fine)").matches
    );

    useEffect(() => {
        if (!enabled) return;

        let mouseX = -100;
        let mouseY = -100;
        let ringX = -100;
        let ringY = -100;
        let hoveringLink = false;
        let rafId;

        const onMove = (event) => {
            mouseX = event.clientX;
            mouseY = event.clientY;

            hoveringLink = !!event.target.closest(
                "a, button, input, textarea"
            );
        };

        const loop = () => {
            ringX += (mouseX - ringX) * 0.16;
            ringY += (mouseY - ringY) * 0.16;

            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
            }

            if (ringRef.current) {
                ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) scale(${
                    hoveringLink ? 1.8 : 1
                })`;
                ringRef.current.classList.toggle("is-active", hoveringLink);
            }

            rafId = requestAnimationFrame(loop);
        };

        window.addEventListener("mousemove", onMove, { passive: true });

        rafId = requestAnimationFrame(loop);

        return () => {
            window.removeEventListener("mousemove", onMove);
            cancelAnimationFrame(rafId);
        };
    }, [enabled]);

    if (!enabled) return null;

    return (
        <>
            <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
            <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
        </>
    );
}