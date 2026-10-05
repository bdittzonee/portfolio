import { timeline } from "../../data/portfolio";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import useInView from "../../hooks/useInView";
import "../../styles/experience-contact.css";

function TimelineLine() {
    const [ref, inView] = useInView();

    return (
        <>
            <div className="timeline-line-base" aria-hidden="true" />

            <div
                ref={ref}
                className={`timeline-line-fill ${
                    inView ? "in" : ""
                }`}
                aria-hidden="true"
            />
        </>
    );
}

export default function Experience() {
    return (
        <section id="experience" className="experience">
            <div className="container">
                <SectionHeading
                    title="My Journey"
                    subtitle="Experience and milestones"
                />

                <div className="timeline">
                    <TimelineLine />

                    {timeline.map((item, index) => (
                        <Reveal key={`${item.year}-${item.title}`} delay={index}>
                            <div className="timeline-item">
                                <i
                                    className={`timeline-dot ${
                                        item.isNow ? "timeline-dot--now" : ""
                                    }`}
                                    aria-hidden="true"
                                />

                                <div className="timeline-year">
                                    {item.year}
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