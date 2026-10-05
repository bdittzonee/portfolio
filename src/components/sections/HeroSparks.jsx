import { useEffect, useRef } from "react";

const NEON_COLORS = [
    "124, 58, 237",   // violet
    "0, 245, 212",    // cyan
    "255, 0, 127",    // magenta
];

// Percik neon melintasi nama saat hover.
// Loop berjalan permanen — active dibaca via ref di dalam frame.
export default function HeroSparks({ active }) {
    const canvasRef = useRef(null);
    const activeRef = useRef(active);

    // Mirror nilai terbaru ke ref, dibaca loop tiap frame
    activeRef.current = active;

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        let width = window.innerWidth;
        let height = window.innerHeight;
        let sparks = [];
        let rafId;
        let lastSpawn = 0;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;

            canvas.width = width;
            canvas.height = height;
        };

        const spawn = () => {
            const fromLeft = Math.random() > 0.5;
            const hue =
                NEON_COLORS[
                    Math.floor(Math.random() * NEON_COLORS.length)
                ];

            sparks.push({
                x: fromLeft ? -30 : width + 30,
                y: height * (0.15 + Math.random() * 0.45),
                vx: (fromLeft ? 1 : -1) * (6 + Math.random() * 8),
                vy: (Math.random() - 0.5) * 2,
                length: 25 + Math.random() * 45,
                life: 1,
                decay: 0.005 + Math.random() * 0.007,
                hue,
            });
        };

        const drawFrame = (time) => {
            ctx.clearRect(0, 0, width, height);

            const isActive = activeRef.current;

            // Spawn hanya saat hover
            if (isActive && time - lastSpawn > 80 + Math.random() * 120) {
                lastSpawn = time;

                spawn();

                if (Math.random() > 0.6) {
                    spawn();
                }
            }

            // Cursor keluar → dorong percik keluar + cepat padam
            if (!isActive) {
                for (const s of sparks) {
                    s.vx *= 1.08;
                    s.vy *= 1.04;
                    s.life -= 0.02;
                }
            }

            sparks = sparks.filter(
                (s) => s.life > 0 && s.x > -100 && s.x < width + 100
            );

            for (const s of sparks) {
                s.x += s.vx;
                s.y += s.vy;
                s.vy += (Math.random() - 0.5) * 0.15;
                s.life -= s.decay;

                const alpha = Math.max(s.life, 0) * 0.95;

                ctx.strokeStyle = `rgba(${s.hue}, ${alpha})`;
                ctx.lineWidth = 1.8;

                ctx.shadowBlur = 10;
                ctx.shadowColor = `rgba(${s.hue}, 0.9)`;

                ctx.beginPath();
                ctx.moveTo(s.x, s.y);
                ctx.lineTo(
                    s.x - s.vx * (s.length / 10),
                    s.y - s.vy * (s.length / 10)
                );
                ctx.stroke();

                ctx.fillStyle = `rgba(${s.hue}, ${alpha})`;
                ctx.beginPath();
                ctx.arc(s.x, s.y, 2, 0, Math.PI * 2);
                ctx.fill();
            }

            ctx.shadowBlur = 0;

            rafId = requestAnimationFrame(drawFrame);
        };

        resize();

        window.addEventListener("resize", resize);

        rafId = requestAnimationFrame(drawFrame);

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(rafId);
        };
    }, []); // ← SEKALI SAJA. Jangan bergantung ke active!

    return (
        <canvas
            ref={canvasRef}
            className="hero-sparks"
            aria-hidden="true"
        />
    );
}