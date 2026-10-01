import { useState } from "react";
import { contact, profile, socials } from "../../data/portfolio";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import "../../styles/experience-contact.css";

export default function Contact() {
    const [status, setStatus] = useState("idle"); // idle | sending | sent | error

    const handleSubmit = async (event) => {
        event.preventDefault();

        setStatus("sending");

        const formData = new FormData(event.target);

        try {
            const response = await fetch(contact.formspree, {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" },
            });

            if (response.ok) {
                setStatus("sent");
                event.target.reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

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
                            onSubmit={handleSubmit}
                        >
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Your name"
                                required
                                disabled={status === "sending"}
                            />

                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Your email"
                                required
                                disabled={status === "sending"}
                            />

                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Your message"
                                required
                                disabled={status === "sending"}
                            />

                            <button
                                type="submit"
                                className="btn btn-ghost"
                                disabled={status === "sending"}
                            >
                                {status === "sending"
                                    ? "Sending..."
                                    : "Send Message →"}
                            </button>

                            {status === "sent" && (
                                <p className="form-status form-status--ok">
                                    ✓ Message sent! I'll reply soon.
                                </p>
                            )}

                            {status === "error" && (
                                <p className="form-status form-status--err">
                                    ✕ Failed to send — try email me directly.
                                </p>
                            )}
                        </form>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}