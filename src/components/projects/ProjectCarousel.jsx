import { useEffect, useRef, useState } from "react";
import ProjectSlide from "./ProjectSlide";
import CarouselControls from "./CarouselControls";

export default function ProjectCarousel({ projects }) {
    const trackRef = useRef(null);
    const [current, setCurrent] = useState(0);

    const updateCurrent = () => {
        const track = trackRef.current;

        if (!track) return;

        const slideWidth = track.scrollWidth / projects.length;

        setCurrent(Math.round(track.scrollLeft / slideWidth));
    };

    const scrollToSlide = (index) => {
        const track = trackRef.current;

        if (!track) return;

        const slideWidth = track.scrollWidth / projects.length;

        track.scrollTo({
            left: slideWidth * index,
            behavior: "smooth",
        });
    };

    const handlePrev = () => {
        scrollToSlide(Math.max(current - 1, 0));
    };

    const handleNext = () => {
        scrollToSlide(Math.min(current + 1, projects.length - 1));
    };

    useEffect(() => {
        const track = trackRef.current;

        if (!track) return;

        const handleKey = (event) => {
            if (event.key === "ArrowLeft") handlePrev();
            if (event.key === "ArrowRight") handleNext();

            if (event.key === "Enter") {
                const project = projects[current];

                if (project) {
                    window.location.hash = `#/project/${project.id}`;
                }
            }
        };

        window.addEventListener("keydown", handleKey);

        return () => {
            window.removeEventListener("keydown", handleKey);
        };
    });

    return (
        <>
            <div className="carousel-track" ref={trackRef}>
                {projects.map((project) => (
                    <div className="carousel-cell" key={project.id}>
                        <ProjectSlide project={project} />
                    </div>
                ))}
            </div>

            <CarouselControls
                onPrev={handlePrev}
                onNext={handleNext}
                current={current}
                total={projects.length}
            />
        </>
    );
}