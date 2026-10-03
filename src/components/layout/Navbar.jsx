import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { navLinks, profile } from "../../data/portfolio";
import "../../styles/layout.css";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Kalau di halaman detail: pulang dulu, baru scroll ke section
    const goToSection = (event, href) => {
        event.preventDefault();

        setMenuOpen(false);

        const id = href.replace("#", "");

        if (location.pathname !== "/") {
            navigate("/");

            setTimeout(() => {
                document
                    .getElementById(id)
                    ?.scrollIntoView({ behavior: "smooth" });
            }, 100);
        } else {
            document
                .getElementById(id)
                ?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
            <nav className="navbar-container">
                <a
                    href="#home"
                    className="navbar-logo"
                    onClick={(event) => goToSection(event, "#home")}
                >
                    {profile.firstName}
                    <span>.</span>
                </a>

                <ul className="navbar-menu">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                onClick={(event) =>
                                    goToSection(event, link.href)
                                }
                            >
                                <span className="nav-icon">
                                    {link.icon}
                                </span>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    className={`navbar-toggle ${menuOpen ? "open" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </nav>

            <div className={`navbar-overlay ${menuOpen ? "open" : ""}`}>
                <ul>
                    {navLinks.map((link, index) => (
                        <li
                            key={link.label}
                            style={{ transitionDelay: `${index * 0.06}s` }}
                        >
                            <a
                                href={link.href}
                                onClick={(event) =>
                                    goToSection(event, link.href)
                                }
                            >
                                <span>0{index + 1}</span>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}