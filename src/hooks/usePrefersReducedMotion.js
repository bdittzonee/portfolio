import { useEffect, useState } from "react";

// Deteksi setting "reduce motion" di OS user (aksesibilitas).
export default function usePrefersReducedMotion() {
    const [reduced, setReduced] = useState(false);

    useEffect(() => {
        const query = window.matchMedia("(prefers-reduced-motion: reduce)");

        setReduced(query.matches);

        const handleChange = (event) => setReduced(event.matches);

        query.addEventListener("change", handleChange);

        return () => {
            query.removeEventListener("change", handleChange);
        };
    }, []);

    return reduced;
}