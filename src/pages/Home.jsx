import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Experience from "../components/sections/Experience";
import Contact from "../components/sections/Contact";
import SectionDivider from "../components/ui/SectionDivider";

export default function Home() {
    return (
        <main>
            <Hero />

            <SectionDivider />
            <About />

            <SectionDivider />
            <Skills />

            <SectionDivider />
            <Projects />

            <SectionDivider />
            <Experience />

            <SectionDivider />
            <Contact />
        </main>
    );
}