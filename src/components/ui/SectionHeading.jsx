// Heading standar semua section: nomor mono + judul besar + subtitle
export default function SectionHeading({ number, title, subtitle }) {
    return (
        <div className="section-heading">
            <p className="section-heading-number">
                {number} /
            </p>

            <h2>{title}</h2>

            {subtitle && <span>{subtitle}</span>}
        </div>
    );
}