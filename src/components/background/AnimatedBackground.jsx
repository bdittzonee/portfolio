import { useEffect, useRef } from "react";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";
import { profile } from "../../data/portfolio";
import "../../styles/background.css";

// Background minimal: spotlight mengikuti mouse + vignette + grain.
export default function AnimatedBackground() {
    const bgRef = useRef(null);
    const reducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (reducedMotion) return;

        const handleMove = (event) => {
            const el = bgRef.current;

            if (!el) return;

            el.style.setProperty(
                "--spot-x",
                `${(event.clientX / window.innerWidth) * 100}%`
            );
            el.style.setProperty(
                "--spot-y",
                `${(event.clientY / window.innerHeight) * 100}%`
            );
        };

        window.addEventListener("mousemove", handleMove);

        return () => {
            window.removeEventListener("mousemove", handleMove);
        };
    }, [reducedMotion]);

        return (
        <div ref={bgRef} className="animated-background" aria-hidden="true">
            <div className="bg-guides">
                <span />
                <span />
                <span />
                <span />
                <span />
            </div>

            <div className="bg-orb bg-orb--1" />
            <div className="bg-orb bg-orb--2" />

            <div className="bg-ghost">
                {profile.firstName.charAt(0)}
            </div>

            <div className="spotlight" />
            <div className="vignette" />
            <div className="grain" />
        </div>
    );
}