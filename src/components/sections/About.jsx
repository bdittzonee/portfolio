import { about, profile } from "../../data/portfolio";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import "../../styles/about-skills.css";

export default function About() {
    return (
        <section id="about" className="about">
            <div className="container">
                    <SectionHeading
                        number="01"
                        title="About Me"
                        subtitle="A little about myself"
                    />

                <div className="about-grid">
                    <Reveal delay={1} className="about-image-wrap">
                        <div className="about-image">
                            {about.photo ? (
                                <img
                                    src={about.photo}
                                    alt={profile.firstName}
                                />
                            ) : (
                                <div className="about-photo-placeholder">
                                    Photo
                                </div>
                            )}
                        </div>
                    </Reveal>

                    <div className="about-text">
                        <Reveal delay={1}>
                            <p className="about-intro">{about.intro}</p>
                        </Reveal>

                        <Reveal delay={2}>
                            <p className="about-desc">{about.description}</p>
                        </Reveal>

                        <Reveal delay={3}>
                            <div className="about-details">
                                {about.details.map((detail) => (
                                    <div
                                        className="about-detail"
                                        key={detail.label}
                                    >
                                        <span>{detail.label}</span>
                                        <strong>{detail.value}</strong>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}