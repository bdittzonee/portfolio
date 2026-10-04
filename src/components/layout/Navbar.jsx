import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { navLinks, profile } from "../../data/portfolio";
import useJakartaTime from "../../hooks/useJakartaTime";
import "../../styles/layout.css";

function NavLinkItem({ link, onClick }) {
    return (
        <a href={link.href} onClick={onClick} className="nav-roll">
            <span className="nav-roll-track">
                <span className="nav-roll-label">{link.label}</span>
                <span className="nav-roll-label nav-roll-label--clone">
                    {link.label}
                </span>
            </span>
        </a>
    );
}

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const jakartaTime = useJakartaTime();

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
                            <NavLinkItem
                                link={link}
                                onClick={(event) =>
                                    goToSection(event, link.href)
                                }
                            />
                        </li>
                    ))}
                </ul>

                <span className="navbar-time">
                    JKT {jakartaTime}
                </span>

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
                            <NavLinkItem
                                link={link}
                                onClick={(event) =>
                                    goToSection(event, link.href)
                                }
                            />
                        </li>
                    ))}
                </ul>

                <span className="navbar-overlay-time">
                    JAKARTA — {jakartaTime} WIB
                </span>
            </div>
        </header>
    );
}