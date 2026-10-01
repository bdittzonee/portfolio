import { profile } from "../../data/portfolio";
import "../../styles/experience-contact.css";

export default function Footer() {
    const backToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="footer">
            <p>
                © 2026 {profile.firstName} {profile.lastName} — Built with
                React
            </p>

            <button onClick={backToTop} className="footer-top">
                Back to top ↑
            </button>
        </footer>
    );
}