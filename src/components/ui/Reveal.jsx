import useInView from "../../hooks/useInView";

// Wrapper: anak elemennya muncul dengan fade-up saat discroll.
// Pakai: <Reveal delay={1}> ... </Reveal>   (delay 0-3)
export default function Reveal({ children, delay = 0, className = "" }) {
    const [ref, inView] = useInView();

    return (
        <div
            ref={ref}
            className={`reveal ${inView ? "reveal--active" : ""} ${className}`}
            style={{ transitionDelay: `${delay * 0.15}s` }}
        >
            {children}
        </div>
    );
}