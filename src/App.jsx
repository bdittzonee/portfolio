import AnimatedBackground from "./components/background/AnimatedBackground";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";

function App() {
    return (
        <>
            <AnimatedBackground />
            <Navbar />

            <main>
                <Hero />
            </main>
        </>
    );
}

export default App;