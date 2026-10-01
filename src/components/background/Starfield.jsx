import { useEffect, useRef } from "react";
import useMousePosition from "../../hooks/useMousePosition";
import useScrollProgress from "../../hooks/useScrollProgress";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";

const STAR_COUNT = 150;

// 3 lapis kedalaman: makin besar = makin dekat & responsif
const DEPTHS = [
    { size: [0.4, 0.9], parallax: 6, drift: 0.02, alpha: 0.35 },
    { size: [0.8, 1.4], parallax: 14, drift: 0.05, alpha: 0.6 },
    { size: [1.2, 2.0], parallax: 26, drift: 0.09, alpha: 0.95 },
];

export default function Starfield() {
    const canvasRef = useRef(null);
    const mouseRef = useMousePosition();
    const scrollRef = useScrollProgress();
    const reducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        let width = window.innerWidth;
        let height = window.innerHeight;
        let stars = [];
        let shootingStars = [];
        let nextShootingAt = performance.now() + 4000;
        let rafId = null;

        const createStars = () => {
            stars = Array.from({ length: STAR_COUNT }, () => {
                const depthIndex = Math.floor(Math.random() * DEPTHS.length);
                const [min, max] = DEPTHS[depthIndex].size;

                return {
                    x: Math.random(),
                    y: Math.random(),
                    depthIndex,
                    size: min + Math.random() * (max - min),
                    twinkleOffset: Math.random() * Math.PI * 2,
                    twinkleSpeed: 0.5 + Math.random() * 1.5,
                };
            });
        };

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;

            canvas.width = width * window.devicePixelRatio;
            canvas.height = height * window.devicePixelRatio;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            ctx.setTransform(
                window.devicePixelRatio,
                0,
                0,
                window.devicePixelRatio,
                0,
                0
            );
        };

        const spawnShootingStar = () => {
            shootingStars.push({
                x: width * (0.3 + Math.random() * 0.6),
                y: height * Math.random() * 0.4,
                vx: -(6 + Math.random() * 4),
                vy: 3 + Math.random() * 2,
                life: 1,
            });

            nextShootingAt =
                performance.now() + 6000 + Math.random() * 6000;
        };

        const drawFrame = (time) => {
            ctx.clearRect(0, 0, width, height);

            const mouseX = (mouseRef.current.x - 0.5) * 2;
            const mouseY = (mouseRef.current.y - 0.5) * 2;
            const scrollY = scrollRef.current.y;

            for (const star of stars) {
                const depth = DEPTHS[star.depthIndex];

                const px = star.x * width - mouseX * depth.parallax;
                const py =
                    (((star.y * height - scrollY * depth.drift) % height) +
                        height) %
                        height -
                    mouseY * depth.parallax;

                const twinkle =
                    0.5 +
                    0.5 *
                        Math.sin(
                            time * 0.001 * star.twinkleSpeed +
                                star.twinkleOffset
                        );

                ctx.globalAlpha = depth.alpha * (0.4 + 0.6 * twinkle);
                ctx.fillStyle = "#ffffff";
                ctx.beginPath();
                ctx.arc(px, py, star.size, 0, Math.PI * 2);
                ctx.fill();
            }

            ctx.globalAlpha = 1;

            if (time > nextShootingAt && shootingStars.length === 0) {
                spawnShootingStar();
            }

            shootingStars = shootingStars.filter((s) => s.life > 0);

            for (const s of shootingStars) {
                s.x += s.vx;
                s.y += s.vy;
                s.life -= 0.015;

                const gradient = ctx.createLinearGradient(
                    s.x,
                    s.y,
                    s.x - s.vx * 12,
                    s.y - s.vy * 12
                );

                gradient.addColorStop(
                    0,
                    `rgba(255, 255, 255, ${0.9 * s.life})`
                );
                gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

                ctx.strokeStyle = gradient;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(s.x, s.y);
                ctx.lineTo(s.x - s.vx * 12, s.y - s.vy * 12);
                ctx.stroke();
            }

            rafId = requestAnimationFrame(drawFrame);
        };

        const drawStatic = () => {
            ctx.clearRect(0, 0, width, height);

            for (const star of stars) {
                const depth = DEPTHS[star.depthIndex];

                ctx.globalAlpha = depth.alpha;
                ctx.fillStyle = "#ffffff";
                ctx.beginPath();
                ctx.arc(star.x * width, star.y * height, star.size, 0, Math.PI * 2);
                ctx.fill();
            }

            ctx.globalAlpha = 1;
        };

        const handleResize = () => {
            resize();

            if (reducedMotion) {
                drawStatic();
            }
        };

        createStars();
        resize();

        window.addEventListener("resize", handleResize);

        if (reducedMotion) {
            drawStatic();
        } else {
            rafId = requestAnimationFrame(drawFrame);
        }

        return () => {
            window.removeEventListener("resize", handleResize);

            if (rafId) {
                cancelAnimationFrame(rafId);
            }
        };
    }, [mouseRef, scrollRef, reducedMotion]);

    return <canvas ref={canvasRef} className="starfield" aria-hidden="true" />;
}