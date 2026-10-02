import { useEffect, useRef } from "react";

// Garis progress di paling atas layar — mengisi seiring scroll.
export default function ScrollProgress() {
    const fillRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const max =
                document.documentElement.scrollHeight -
                window.innerHeight;

            const progress = max > 0 ? window.scrollY / max : 0;

            if (fillRef.current) {
                fillRef.current.style.transform =
                    `scaleX(${progress})`;
            }
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    return (
        <div className="scroll-progress" aria-hidden="true">
            <div ref={fillRef} className="scroll-progress-fill" />
        </div>
    );
}