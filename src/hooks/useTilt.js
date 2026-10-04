import { useRef } from "react";

// Tilt 3D halus mengikuti posisi mouse di atas elemen.
export default function useTilt(maxTilt = 6, scale = 1.02) {
    const ref = useRef(null);

    const attach = (element) => {
        ref.current = element;
    };

    const handlers = {
        onMouseMove: (event) => {
            const el = ref.current;

            if (!el) return;

            const rect = el.getBoundingClientRect();

            const px = (event.clientX - rect.left) / rect.width - 0.5;
            const py = (event.clientY - rect.top) / rect.height - 0.5;

            el.style.transform = `
                perspective(800px)
                rotateY(${px * maxTilt}deg)
                rotateX(${-py * maxTilt}deg)
                scale(${scale})
            `;
        },
        onMouseLeave: () => {
            const el = ref.current;

            if (el) {
                el.style.transform =
                    "perspective(800px) rotateY(0) rotateX(0) scale(1)";
            }
        },
    };

    return { attach, handlers };
}