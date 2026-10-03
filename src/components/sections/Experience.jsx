import { timeline } from "../../data/portfolio";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import "../../styles/experience-contact.css";

export default function Experience() {
    return (
        <section id="experience" className="experience">
            <div className="container">
                    <SectionHeading
                        title="My Journey"
                        subtitle="Experience and milestones"
                    />

                <div className="timeline">
                    {timeline.map((item, index) => (
                        <Reveal key={item.year} delay={index}>
                            <div className="timeline-item">
                                <div className="timeline-year">
                                    <span>{item.year}</span>

                                    <i
                                        className={`timeline-dot ${
                                            item.isNow
                                                ? "timeline-dot--now"
                                                : ""
                                        }`}
                                    />
                                </div>

                                <div className="timeline-content">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}