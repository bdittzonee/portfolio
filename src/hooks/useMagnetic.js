import { useRef } from "react";

// Elemen "tertarik" ke kursor dalam radius mendekat.
export default function useMagnetic(strength = 0.3, radius = 80) {
    const ref = useRef(null);

    const attach = (element) => {
        ref.current = element;
    };

    const handlers = {
        onMouseMove: (event) => {
            const el = ref.current;

            if (!el) return;

            const rect = el.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const deltaX = event.clientX - centerX;
            const deltaY = event.clientY - centerY;

            const distance = Math.hypot(deltaX, deltaY);

            if (distance < radius) {
                el.style.transform = `translate(${deltaX * strength}px, ${
                    deltaY * strength
                }px)`;
            } else {
                el.style.transform = "";
            }
        },
        onMouseLeave: () => {
            const el = ref.current;

            if (el) {
                el.style.transform = "";
            }
        },
    };

    return { attach, handlers };
}