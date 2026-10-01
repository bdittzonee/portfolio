import { profile, marqueeSkills } from "../../data/portfolio";
import "../../styles/sections.css";

export default function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <div className="hero-badge">
                    <span className="hero-badge-dot" />
                    Available for work
                </div>

                <p className="hero-greeting">Hi, I'm —</p>

                <h1 className="hero-title">
                    {profile.firstName}
                    <span className="hero-title-gradient">
                        {profile.lastName}
                    </span>
                </h1>

                <p className="hero-role">{profile.role}</p>

                <p className="hero-tagline">{profile.tagline}</p>

                <div className="hero-buttons">
                    <a href="#projects" className="btn btn-solid">
                        Explore My Work
                    </a>
                    <a href="#about" className="btn btn-ghost">
                        About Me →
                    </a>
                </div>
            </div>

            <div className="hero-marquee" aria-hidden="true">
                <div className="hero-marquee-track">
                    {[...marqueeSkills, ...marqueeSkills].map(
                        (skill, index) => (
                            <span key={index}>
                                {skill}
                                <em>✦</em>
                            </span>
                        )
                    )}
                </div>
            </div>

            <div className="hero-scroll">
                <span>↓</span>
                <p>Scroll</p>
            </div>
        </section>
    );
}