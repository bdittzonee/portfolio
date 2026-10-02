import { useEffect, useState } from "react";
import useInView from "../../hooks/useInView";

// Heading efek mesin ketik: judul diketik karakter demi karakter
// saat masuk viewport, dengan kursor berkedip.
export default function SectionHeading({ number, title, subtitle }) {
    const [ref, inView] = useInView();

    const [typedCount, setTypedCount] = useState(0);

    const isDone = typedCount >= title.length;

    useEffect(() => {
        if (!inView) return;

        if (typedCount >= title.length) return;

        const timeout = setTimeout(() => {
            setTypedCount((count) => count + 1);
        }, 110);

        return () => {
            clearTimeout(timeout);
        };
    }, [inView, typedCount, title]);

    return (
        <div
            ref={ref}
            className={`section-heading ${
                inView ? "section-heading--in" : ""
            }`}
        >
            <p className="section-heading-number">
                {number} /
            </p>

            <h2>
                <span className="typing-text">
                    {title.slice(0, typedCount)}
                </span>

                <span
                    className={`typing-caret ${
                        isDone ? "typing-caret--idle" : ""
                    }`}
                />
            </h2>

            {subtitle && (
                <span className="section-heading-sub">
                    {subtitle}
                </span>
            )}
        </div>
    );
}