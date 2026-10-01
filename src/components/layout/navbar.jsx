import { useEffect, useState } from "react";
import { navLinks, profile } from "../../data/portfolio";
import "../../styles/layout.css";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

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

    return (
        <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
            <nav className="navbar-container">
                <a
                    href="#home"
                    className="navbar-logo"
                    onClick={() => setMenuOpen(false)}
                >
                    {profile.firstName}
                    <span>.</span>
                </a>

                <ul className="navbar-menu">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a href={link.href}>{link.label}</a>
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
                                onClick={() => setMenuOpen(false)}
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