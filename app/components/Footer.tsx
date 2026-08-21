"use client";
export default function Footer() {
  return (
    <footer>
      <span className="footer-copy">© 2026 Valeria Badell · Caracas, Venezuela</span>
      <ul className="footer-links">
        {[
          { label: "GitHub", href: "https://github.com/ValeriaBadell" },
          { label: "LinkedIn", href: "https://linkedin.com/in/valeria-badell-9068233b5" },
          { label: "Email", href: "mailto:valeria.badell28@gmail.com" },
        ].map(({ label, href }) => (
          <li key={label}>
            <a href={href} target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
