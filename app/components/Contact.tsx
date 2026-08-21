"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import AnimateIn from "./AnimateIn";
import SectionHead from "./SectionHead";

const SERVICE_ID  = "service_p34was7";
const TEMPLATE_ID = "template_xeppgbu";
const PUBLIC_KEY  = "5N2azZ-GazQ_NLMIC";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus("sent");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" style={{ marginBottom: "5rem" }}>
      <AnimateIn><SectionHead num="04" title="Get in touch" /></AnimateIn>
      <AnimateIn delay={0.05}>
        <div className="contact-box">
          <span className="contact-glow" />
          <div className="contact-eyebrow">
            <span className="blink-dot" style={{ background: "var(--accent2)", boxShadow: "0 0 6px var(--accent2)" }} />
            Open to opportunities
          </div>
          <h2 className="contact-title">Let&apos;s build<br />something great.</h2>
          <p className="contact-sub">Senior full stack roles — remote, US Eastern-aligned. English C1.</p>

          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div>
                <label className="form-label">name</label>
                <input name="from_name" required placeholder="Your name" className="form-input" />
              </div>
              <div>
                <label className="form-label">email</label>
                <input name="reply_to" type="email" required placeholder="you@company.com" className="form-input" />
              </div>
            </div>
            <div>
              <label className="form-label">message</label>
              <textarea name="message" required rows={5} placeholder="Tell me about the role or project..." className="form-input" />
            </div>
            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className={`form-submit${status === "sent" ? " sent" : ""}`}
            >
              {status === "idle" && "Send message →"}
              {status === "sending" && "Sending..."}
              {status === "sent" && "✓ Message sent!"}
              {status === "error" && "Failed — try email directly"}
            </button>
            {status === "error" && (
              <p style={{ textAlign: "center", fontSize: "14px", color: "var(--pink)" }}>
                Email me at <a href="mailto:valeria.badell28@gmail.com" style={{ textDecoration: "underline" }}>valeria.badell28@gmail.com</a>
              </p>
            )}
          </form>

          <div className="contact-links">
            {[
              { icon: "✉", label: "valeria.badell28@gmail.com", href: "mailto:valeria.badell28@gmail.com" },
              { icon: "⌥", label: "github.com/ValeriaBadell", href: "https://github.com/ValeriaBadell" },
              { icon: "↗", label: "LinkedIn", href: "https://linkedin.com/in/valeria-badell-9068233b5" },
            ].map(({ icon, label, href }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="contact-item">
                {icon} {label}
              </a>
            ))}
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
