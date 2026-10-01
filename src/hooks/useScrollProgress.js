import { useEffect, useRef } from "react";

// Memantau scroll: posisi mentah (y) + progres 0..1.
export default function useScrollProgress() {
    const scrollRef = useRef({ y: 0, progress: 0 });

    useEffect(() => {
        const handleScroll = () => {
            const max =
                document.documentElement.scrollHeight -
                window.innerHeight;

            scrollRef.current.y = window.scrollY;
            scrollRef.current.progress = max > 0 ? window.scrollY / max : 0;
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return scrollRef;
}