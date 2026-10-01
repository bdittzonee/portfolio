import { contact, profile, socials } from "../../data/portfolio";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import "../../styles/experience-contact.css";

export default function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <Reveal>
                    <SectionHeading
                        number="05"
                        title={contact.heading1}
                        subtitle={contact.heading2}
                    />
                </Reveal>

                <div className="contact-grid">
                    <Reveal delay={1}>
                        <div className="contact-info">
                            <p>{contact.message}</p>

                            <a
                                className="contact-email"
                                href={`mailto:${profile.email}`}
                            >
                                {profile.email}
                            </a>

                            <div className="contact-socials">
                                {socials.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {social.label} ↗
                                    </a>
                                ))}
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={2}>
                        <form
                            className="contact-form"
                            onSubmit={(event) => {
                                event.preventDefault();
                                // Step berikutnya: sambungkan ke Formspree
                                alert("Form akan segera terhubung!");
                            }}
                        >
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Your name"
                                required
                            />

                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Your email"
                                required
                            />

                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Your message"
                                required
                            />

                            <button type="submit" className="btn btn-ghost">
                                Send Message →
                            </button>
                        </form>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}