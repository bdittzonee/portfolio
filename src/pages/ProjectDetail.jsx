import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/portfolio";
import "../styles/detail.css";

export default function ProjectDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const project = projects.find((item) => item.id === id);

    const handleBack = (event) => {
        event.preventDefault();

        window.__scrollTarget = "projects";

        navigate("/");
    };

    if (!project) {
        return (
            <main className="project-detail">
                <a href="/" className="detail-back" onClick={handleBack}>
                    ← Back to Projects
                </a>

                <h1 className="detail-notfound">
                    Project not found 🔍
                </h1>
            </main>
        );
    }

    return (
        <main className="project-detail">
            <a href="/" className="detail-back" onClick={handleBack}>
                ← Back to Projects
            </a>

            <header className="detail-header">
                <p>
                    {project.number} / {project.category}
                </p>

                <h1>{project.title}</h1>
            </header>

            <div className="detail-image">
                {project.image ? (
                    <img src={project.image} alt={project.title} />
                ) : (
                    <div className="detail-placeholder">
                        <span>{project.title}</span>
                    </div>
                )}
            </div>

            <div className="detail-section">
                <p className="detail-label">About the project</p>

                <p className="detail-desc">{project.description}</p>
            </div>

            <div className="detail-section">
                <p className="detail-label">Technologies</p>

                <div className="detail-tags">
                    {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                    ))}
                </div>
            </div>

            <div className="detail-links">
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="detail-link"
                    >
                        GitHub ↗
                    </a>
                )}

                {project.live && (
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="detail-link"
                    >
                        Live Preview ↗
                    </a>
                )}

                {!project.github && !project.live && (
                    <p className="detail-no-links">
                        Links coming soon
                    </p>
                )}
            </div>
        </main>
    );
}