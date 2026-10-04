import { about, profile } from "../../data/portfolio";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import useTilt from "../../hooks/useTilt";
import "../../styles/about-skills.css";

export default function About() {
    const { attach, handlers } = useTilt(6, 1.02);

    return (
        <section id="about" className="about">
            <div className="container">
                <SectionHeading
                    title="About"
                    subtitle="Sedikit tentang saya"
                />

                <div className="about-grid">
                    <Reveal delay={1} className="about-image-wrap">
                        <div
                            ref={attach}
                            className="about-image"
                            onMouseMove={handlers.onMouseMove}
                            onMouseLeave={handlers.onMouseLeave}
                        >
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

                {about.now && about.now.length > 0 && (
                    <Reveal delay={2}>
                        <div className="about-now">
                            <p className="about-now-label">
                                NOW —
                            </p>

                            <ul className="about-now-list">
                                {about.now.map((item) => (
                                    <li key={item.label}>
                                        <span className="about-now-key">
                                            {item.label}
                                        </span>
                                        <span className="about-now-value">
                                            {item.value}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                )}
            </div>
        </section>
    );
}