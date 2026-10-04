import { profile } from "../../data/portfolio";
import useMagnetic from "../../hooks/useMagnetic";
import "../../styles/sections.css";

function MagneticButton({ href, className, children }) {
    const { attach, handlers } = useMagnetic(0.25, 90);

    return (
        <a
            href={href}
            ref={attach}
            className={className}
            onMouseMove={handlers.onMouseMove}
            onMouseLeave={handlers.onMouseLeave}
        >
            {children}
        </a>
    );
}

export default function Hero() {
    const firstName = profile.firstName.split("");
    const lastName = profile.lastName.split("");

    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <p className="hero-meta">
                    PORTFOLIO — 2026
                </p>

                <h1 className="hero-title">
                    <span className="hero-line">
                        {firstName.map((letter, index) => (
                            <span
                                className="hero-letter"
                                key={`f-${index}`}
                                style={{
                                    transitionDelay: `${index * 0.02}s`,
                                }}
                            >
                                {letter}
                            </span>
                        ))}
                    </span>

                    <span className="hero-line">
                        {lastName.map((letter, index) => (
                            <span
                                className="hero-letter"
                                key={`l-${index}`}
                                style={{
                                    transitionDelay: `${index * 0.02}s`,
                                }}
                            >
                                {letter}
                            </span>
                        ))}
                    </span>
                </h1>

                <p className="hero-role">{profile.role}</p>

                <p className="hero-tagline">{profile.tagline}</p>

                <div className="hero-buttons">
                    <MagneticButton
                        href="#projects"
                        className="btn btn-solid"
                    >
                        Explore My Work
                    </MagneticButton>

                    <MagneticButton
                        href="#about"
                        className="btn btn-ghost"
                    >
                        About Me →
                    </MagneticButton>
                </div>
            </div>

            <div className="hero-scroll">
                <span>↓</span>
                <p>Scroll</p>
            </div>
        </section>
    );
}