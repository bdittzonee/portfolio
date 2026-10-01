import { useEffect, useRef } from "react";
import useScrollProgress from "../../hooks/useScrollProgress";

// Warna aurora bergeser mengikuti scroll:
// atas = ungu/teal → tengah = teal/sky → bawah = gold/rose
const STOPS = [
    { at: 0.0, a: [129, 140, 248], b: [94, 234, 212] },
    { at: 0.35, a: [94, 234, 212], b: [125, 211, 252] },
    { at: 0.7, a: [167, 139, 250], b: [129, 140, 248] },
    { at: 1.0, a: [251, 191, 36], b: [244, 114, 182] },
];

const lerp = (a, b, t) => a + (b - a) * t;

const lerpColor = (c1, c2, t) =>
    `rgb(${Math.round(lerp(c1[0], c2[0], t))}, ${Math.round(
        lerp(c1[1], c2[1], t)
    )}, ${Math.round(lerp(c1[2], c2[2], t))})`;

export default function AuroraGlow() {
    const auroraRef = useRef(null);
    const scrollRef = useScrollProgress();

    useEffect(() => {
        const apply = () => {
            const el = auroraRef.current;
            if (!el) return;

            const p = scrollRef.current.progress;

            let prev = STOPS[0];
            let next = STOPS[STOPS.length - 1];

            for (let i = 0; i < STOPS.length - 1; i++) {
                if (p >= STOPS[i].at && p <= STOPS[i + 1].at) {
                    prev = STOPS[i];
                    next = STOPS[i + 1];
                    break;
                }
            }

            const t =
                next.at === prev.at
                    ? 0
                    : (p - prev.at) / (next.at - prev.at);

            el.style.setProperty("--blob-a", lerpColor(prev.a, next.a, t));
            el.style.setProperty("--blob-b", lerpColor(prev.b, next.b, t));
        };

        apply();

        window.addEventListener("scroll", apply, { passive: true });

        return () => {
            window.removeEventListener("scroll", apply);
        };
    }, [scrollRef]);

    return (
        <div ref={auroraRef} className="aurora" aria-hidden="true">
            <div className="aurora-blob aurora-blob--1" />
            <div className="aurora-blob aurora-blob--2" />
            <div className="aurora-blob aurora-blob--3" />
        </div>
    );
}