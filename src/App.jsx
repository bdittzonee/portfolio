import { useEffect, useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import AnimatedBackground from "./components/background/AnimatedBackground";
import CustomCursor from "./components/ui/CustomCursor";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import PageTransition from "./components/ui/PageTransition";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

function ScrollToTop() {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        const target = window.__scrollTarget;

        if (target) {
            window.__scrollTarget = null;

            const element = document.getElementById(target);

            if (element && window.__lenis) {
                // KUNCI: hitung ulang tinggi halaman dulu,
                // limit Lenis masih ukuran halaman detail (pendek)
                window.__lenis.resize();

                window.__lenis.scrollTo(element, {
                    immediate: true,
                    force: true,
                    offset: -80,
                });

                return;
            }
        }

        if (window.__lenis) {
            window.__lenis.scrollTo(0, { immediate: true });
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    return null;
}
export default function App() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        window.__lenis = lenis;

        let rafId;

        const raf = (time) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };

        rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, []);

    return (
        <>
            <AnimatedBackground />
            <CustomCursor />
            <ScrollToTop />
            <Navbar />

            <PageTransition>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/project/:id"
                        element={<ProjectDetail />}
                    />
                </Routes>
            </PageTransition>

            <Footer />
        </>
    );
}