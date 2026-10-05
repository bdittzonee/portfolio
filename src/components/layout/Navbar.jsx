import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { navLinks, profile } from "../../data/portfolio";
import useJakartaTime from "../../hooks/useJakartaTime";
import useTheme from "../../hooks/useTheme";
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
    const { theme, toggle } = useTheme();

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

        const goTo = () => {
            const element = document.getElementById(id);

            if (element) {
                if (window.__lenis) {
                    window.__lenis.scrollTo(element, { offset: -80 });
                } else {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }
        };

        if (location.pathname !== "/") {
            navigate("/");

            setTimeout(goTo, 100);
        } else {
            goTo();
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
                    className="theme-toggle"
                    onClick={toggle}
                    aria-label="Toggle theme"
                >
                    {theme === "dark" ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <circle cx="12" cy="12" r="4" />
                            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                        </svg>
                    ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                        </svg>
                    )}
                </button>

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