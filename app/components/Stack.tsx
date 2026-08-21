"use client";
import AnimateIn from "./AnimateIn";
import SectionHead from "./SectionHead";

const stack = [
  { icon: "⟨/⟩", cat: "Languages", name: "TypeScript first", items: "TypeScript · JavaScript · SQL · HTML5 · CSS3 · Python" },
  { icon: "◈", cat: "Frontend", name: "React ecosystem", items: "React · Next.js · Angular · Redux · Tailwind CSS · Design systems" },
  { icon: "⬡", cat: "Backend", name: "Node.js APIs", items: "Node.js · Express · REST design · Auth & authorization · Service/repo arch" },
  { icon: "◻", cat: "Data", name: "SQL & NoSQL", items: "PostgreSQL · MongoDB · Schema design · Query optimization · Transactions" },
  { icon: "☁", cat: "Cloud & DevOps", name: "AWS · Docker", items: "AWS · Docker · CI/CD · GitHub Actions · Git · Containerization" },
  { icon: "✓", cat: "Testing", name: "Full coverage", items: "Jest · React Testing Library · Cypress · Code review · Agile/Scrum" },
];

export default function Stack() {
  return (
    <section id="stack" style={{ marginBottom: "7rem" }}>
      <AnimateIn><SectionHead num="02" title="Tech stack" /></AnimateIn>
      <AnimateIn delay={0.05}>
        <div className="stack-grid">
          {stack.map(({ icon, cat, name, items }) => (
            <div key={cat} className="stack-card">
              <div className="stack-icon">{icon}</div>
              <div className="stack-cat">{cat}</div>
              <div className="stack-name">{name}</div>
              <div className="stack-items">{items}</div>
            </div>
          ))}
        </div>
      </AnimateIn>
    </section>
  );
}
