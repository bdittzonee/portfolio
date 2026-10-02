import { skills } from "../../data/portfolio";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import useInView from "../../hooks/useInView";
import "../../styles/about-skills.css";

function SkillCard({ category, items, index }) {
    const [ref, inView] = useInView();

    return (
        <div
            ref={ref}
            className={`skill-card ${inView ? "skill-card--active" : ""}`}
        >
            <div className="skill-card-header">
                <span className="skill-card-number">
                    0{index + 1}
                </span>

                <h3>{category}</h3>

                <span className="skill-card-arrow">↗</span>
            </div>

            <ul className="skill-list">
                {items.map((skill) => (
                    <li className="skill-item" key={skill.name}>
                        <span className="skill-name">{skill.name}</span>

                        <div className="skill-bar">
                            <div
                                className="skill-bar-fill"
                                style={{ "--skill": `${skill.level}%` }}
                            />
                        </div>

                        <small>{skill.level}%</small>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function Skills() {
    return (
        <section id="skills" className="skills">
            <div className="container">
                    <SectionHeading
                        number="02"
                        title="Skills"
                        subtitle="What I work with"
                    />

                <div className="skills-grid">
                    {skills.map((group, index) => (
                        <SkillCard
                            key={group.category}
                            category={group.category}
                            items={group.items}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}