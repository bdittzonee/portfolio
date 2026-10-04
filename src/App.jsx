import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AnimatedBackground from "./components/background/AnimatedBackground";
import ScrollProgress from "./components/ui/ScrollProgress";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import CustomCursor from "./components/ui/CustomCursor";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

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
            <CustomCursor />
            <ScrollProgress />
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