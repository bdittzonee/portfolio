import { useState } from "react";
import { skills } from "../../data/portfolio";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import "../../styles/about-skills.css";

function SkillIcon({ skill }) {
    const [failed, setFailed] = useState(false);

    if (!skill.icon || failed) {
        return (
            <span className="skills-item-icon skills-item-icon--text">
                {skill.name.charAt(0)}
            </span>
        );
    }

    const isUrl = skill.icon.startsWith("http");

    return (
        <img
            className="skills-item-icon"
            src={
                isUrl
                    ? skill.icon
                    : `https://cdn.simpleicons.org/${skill.icon}/${skill.color}`
            }
            alt={skill.name}
            loading="lazy"
            onError={() => setFailed(true)}
        />
    );
}

export default function Skills() {
    const [activeIndex, setActiveIndex] = useState(0);

    const active = skills[activeIndex];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <SectionHeading
                    title="Skills"
                    subtitle="What I work with"
                />

                <Reveal delay={1}>
                    <div className="skills-layout">
                        <div className="skills-folders">
                            {skills.map((group, index) => (
                                <button
                                    key={group.category}
                                    className={`skills-folder ${
                                        index === activeIndex ? "active" : ""
                                    }`}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <span className="skills-folder-icon">
                                        📁
                                    </span>

                                    <span className="skills-folder-name">
                                        {group.category}
                                    </span>

                                    <span className="skills-folder-count">
                                        {group.items.length}
                                    </span>
                                </button>
                            ))}
                        </div>

                        <div
                            className="skills-panel"
                            key={active.category}
                        >
                            <div
                                className="skills-panel-corners"
                                aria-hidden="true"
                            >
                                <span />
                                <span />
                                <span />
                                <span />
                            </div>

                            <div className="skills-items">
                                {active.items.map((skill) => (
                                    <div
                                        className="skills-item"
                                        key={skill.name}
                                    >
                                        <SkillIcon skill={skill}/>

                                        <span className="skills-item-name">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}