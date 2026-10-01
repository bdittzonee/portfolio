export default function CarouselControls({
    onPrev,
    onNext,
    current,
    total,
}) {
    return (
        <div className="carousel-controls">
            <div className="carousel-progress">
                <div
                    className="carousel-progress-fill"
                    style={{
                        width: `${((current + 1) / total) * 100}%`,
                    }}
                />
            </div>

            <div className="carousel-counter">
                <span className="carousel-counter-current">
                    0{current + 1}
                </span>
                <span className="carousel-counter-sep">—</span>
                <span>0{total}</span>
            </div>

            <div className="carousel-buttons">
                <button
                    className="carousel-btn"
                    onClick={onPrev}
                    aria-label="Previous project"
                >
                    ←
                </button>

                <button
                    className="carousel-btn"
                    onClick={onNext}
                    aria-label="Next project"
                >
                    →
                </button>
            </div>
        </div>
    );
}