import useInView from "../../hooks/useInView";

// Garis tipis antar section — tumbuh dari tengah saat terlihat.
export default function SectionDivider() {
    const [ref, inView] = useInView();

    return (
        <div className="section-divider" aria-hidden="true">
            <div
                ref={ref}
                className={`section-divider-line ${
                    inView ? "in" : ""
                }`}
            />
        </div>
    );
}