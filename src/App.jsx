import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AnimatedBackground from "./components/background/AnimatedBackground";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

// Pindah halaman → scroll otomatis ke atas
function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function App() {
    return (
        <>
            <AnimatedBackground />
            <ScrollToTop />
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project/:id" element={<ProjectDetail />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;