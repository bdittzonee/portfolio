import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "../../styles/page-transition.css";

// Iris wipe otomatis setiap URL berubah.
export default function PageTransition({ children }) {
    const location = useLocation();

    const [displayLocation, setDisplayLocation] = useState(location);
    const [phase, setPhase] = useState("idle"); // idle | reveal

    const isFirst = useRef(true);

    useEffect(() => {
        // Kunjungan pertama: tanpa transisi
        if (isFirst.current) {
            isFirst.current = false;
            return;
        }

        if (location !== displayLocation) {
            setDisplayLocation(location);
            setPhase("reveal");

        }
    }, [location, displayLocation]);

    useEffect(() => {
        if (phase === "reveal") {
            const timeout = setTimeout(() => setPhase("idle"), 550);

            return () => clearTimeout(timeout);
        }
    }, [phase]);

    return (
        <>
            <div
                className={`page-transition ${
                    phase === "reveal" ? "is-reveal" : ""
                }`}
                aria-hidden="true"
            >
                <span className="page-transition-label">
                    RADITYA®
                </span>
            </div>

            <div
                className={`page-content ${
                    phase === "reveal" ? "is-revealing" : ""
                }`}
            >
                {children}
            </div>
        </>
    );
}