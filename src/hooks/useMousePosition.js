import { useEffect, useRef } from "react";

// Memantau posisi mouse (0..1) TANPA re-render React.
export default function useMousePosition() {
    const mouseRef = useRef({ x: 0.5, y: 0.5 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            mouseRef.current.x = event.clientX / window.innerWidth;
            mouseRef.current.y = event.clientY / window.innerHeight;
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return mouseRef;
}