"use client";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{ background: scrolled ? "rgba(16,16,26,0.97)" : "rgba(16,16,26,0.88)" }}>
      <div className="nav-inner">
        <div className="nav-logo">
          <span className="nav-dot" />
          <span>vb</span>
          <span style={{ color: "var(--text3)" }}>.dev</span>
        </div>
        <ul className="nav-links">
          {["Experience", "Stack", "About", "Contact"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
        <a href="mailto:valeria.badell28@gmail.com" className="nav-cta">hire me →</a>
      </div>
    </nav>
  );
}
