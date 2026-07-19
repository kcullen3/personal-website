/* Contact page — email form that sends messages via EmailJS */
import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import Particle from "../Particle";
import { SUBJECTS } from "../../data/contact";

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const MAX_CHARS = 300;

const inputStyle = {
    backgroundColor: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(155, 114, 207, 0.4)",
    borderRadius: "8px",
    color: "var(--text)",
    fontFamily: "Lato, sans-serif",
    fontSize: "var(--font-base)",
};

const selectStyle = {
    ...inputStyle,
    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%239B72CF' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 12px center",
    backgroundSize: "16px",
    paddingRight: "36px",
    appearance: "none",
    WebkitAppearance: "none",
};

function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState(null); // null | "sending" | "sent" | "error"

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "message" && value.length > MAX_CHARS) return;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    from_email: form.email,
                    phone: form.phone || "Not provided",
                    title: form.subject,
                    message: form.message,
                },
                EMAILJS_PUBLIC_KEY
            );
            setStatus("sent");
            setForm({ name: "", email: "", phone: "", subject: "", message: "" });
        } catch (err) {
            setStatus("error");
        }
    };

    return (
        <Container fluid className="about-section">
            <Particle />
            <Container style={{ position: "relative", zIndex: 1 }}>
                <h1 className="project-heading" style={{ paddingTop: "40px" }}>
                    Get In <strong className="cyan">Touch</strong>
                </h1>
                <Row className="justify-content-center" style={{ paddingBottom: "60px" }}>
                    <Col md={7}>
                        <div style={{
                            border: "1px solid var(--primary)",
                            borderRadius: "16px",
                            boxShadow: "0 0 20px rgba(155, 114, 207, 0.2)",
                            backgroundColor: "var(--background)",
                            padding: "32px",
                        }}>
                            {status === "sent" ? (
                                <div style={{ textAlign: "center", padding: "40px 0" }}>
                                    <h3 style={{ color: "#00E5FF", fontFamily: "Nunito, sans-serif", marginBottom: "12px" }}>
                                        Message Sent!
                                    </h3>
                                    <p style={{ color: "var(--text)", fontFamily: "Lato, sans-serif", fontSize: "var(--font-md)" }}>
                                        Thanks for reaching out — I'll get back to you soon.
                                    </p>
                                    <Button
                                        variant="outline-light"
                                        style={{ marginTop: "16px", borderColor: "var(--primary)" }}
                                        onClick={() => setStatus(null)}
                                    >
                                        Back
                                    </Button>
                                </div>
                            ) : (
                                <Form onSubmit={handleSubmit} autoComplete="off">
                                    <Row className="g-3" style={{ marginBottom: "16px" }}>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label style={{ color: "var(--primary)", fontFamily: "Nunito, sans-serif", fontWeight: "bold" }}>
                                                    Name *
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="name"
                                                    value={form.name}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder=""
                                                    autoComplete="off"
                                                    style={inputStyle}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label style={{ color: "var(--primary)", fontFamily: "Nunito, sans-serif", fontWeight: "bold" }}>
                                                    Email *
                                                </Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    name="email"
                                                    value={form.email}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder=""
                                                    autoComplete="off"
                                                    style={inputStyle}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row className="g-3" style={{ marginBottom: "16px" }}>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label style={{ color: "var(--primary)", fontFamily: "Nunito, sans-serif", fontWeight: "bold" }}>
                                                    Phone <span style={{ color: "rgba(255,255,255,0.4)", fontWeight: "normal" }}>(optional)</span>
                                                </Form.Label>
                                                <Form.Control
                                                    type="tel"
                                                    name="phone"
                                                    value={form.phone}
                                                    onChange={handleChange}
                                                    placeholder=""
                                                    autoComplete="off"
                                                    style={inputStyle}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group>
                                                <Form.Label style={{ color: "var(--primary)", fontFamily: "Nunito, sans-serif", fontWeight: "bold" }}>
                                                    Subject *
                                                </Form.Label>
                                                <Form.Select
                                                    name="subject"
                                                    value={form.subject}
                                                    onChange={handleChange}
                                                    required
                                                    style={selectStyle}
                                                >
                                                    <option value="" disabled>Select a subject...</option>
                                                    {SUBJECTS.map((s) => (
                                                        <option key={s} value={s}>{s}</option>
                                                    ))}
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Form.Group style={{ marginBottom: "8px" }}>
                                        <Form.Label style={{ color: "var(--primary)", fontFamily: "Nunito, sans-serif", fontWeight: "bold" }}>
                                            Message *
                                        </Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            placeholder=""
                                            style={{ ...inputStyle, resize: "none" }}
                                        />
                                    </Form.Group>
                                    <div style={{
                                        textAlign: "right",
                                        fontFamily: "Lato, sans-serif",
                                        fontSize: "var(--font-sm)",
                                        color: form.message.length >= MAX_CHARS ? "#ff6b6b" : "rgba(255,255,255,0.4)",
                                        marginBottom: "20px",
                                    }}>
                                        {form.message.length} / {MAX_CHARS}
                                    </div>

                                    {status === "error" && (
                                        <p style={{ color: "#ff6b6b", fontFamily: "Lato, sans-serif", marginBottom: "12px" }}>
                                            Something went wrong — please try again or email directly at keigancullen@gmail.com.
                                        </p>
                                    )}

                                    <div style={{ textAlign: "center" }}>
                                        <Button
                                            variant="primary"
                                            type="submit"
                                            disabled={status === "sending"}
                                            style={{ minWidth: "160px" }}
                                        >
                                            {status === "sending" ? "Sending..." : "Send Message"}
                                        </Button>
                                    </div>
                                </Form>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Contact;
