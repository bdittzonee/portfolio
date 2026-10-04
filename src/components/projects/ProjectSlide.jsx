import { Link } from "react-router-dom";

function ProjectImage({ image, title }) {
    if (image) {
        return <img src={image} alt={title} loading="lazy" />;
    }

    return (
        <div className="project-slide-placeholder">
            <span>{title}</span>
        </div>
    );
}

export default function ProjectSlide({ project }) {
    return (
        <Link
            to={`/project/${project.id}`}
            className="project-slide"
        >
            <span className="project-bracket project-bracket--tl" />
            <span className="project-bracket project-bracket--tr" />
            <span className="project-bracket project-bracket--bl" />
            <span className="project-bracket project-bracket--br" />

            <div className="project-slide-image">
                <ProjectImage image={project.image} title={project.title} />
            </div>

            <div className="project-slide-info">
                <div className="project-slide-meta">
                    <span>
                        {project.number} / {project.category}
                    </span>
                </div>

                <div className="project-slide-title">
                    <h3>{project.title}</h3>
                    <span className="project-slide-arrow">↗</span>
                </div>

                <p>{project.description}</p>

                <div className="project-slide-tags">
                    {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                    ))}
                </div>
            </div>
        </Link>
    );
}