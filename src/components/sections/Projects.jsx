import { projects } from "../../data/portfolio";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import ProjectCarousel from "../projects/ProjectCarousel";
import "../../styles/projects.css";

export default function Projects() {
    return (
        <section id="projects" className="projects">
            <div className="container">
                    <div className="projects-heading-row">
                        <SectionHeading
                            number="03"
                            title="Projects"
                            subtitle="Selected works"
                        />
                    </div>
            </div>

            <Reveal delay={1}>
                <ProjectCarousel projects={projects} />
            </Reveal>
        </section>
    );
}