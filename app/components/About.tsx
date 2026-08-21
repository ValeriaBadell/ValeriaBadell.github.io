"use client";
import AnimateIn from "./AnimateIn";
import SectionHead from "./SectionHead";

const strengths = [
  { icon: "⇄", title: "Full ownership, both sides", desc: "I've owned REST APIs end-to-end — service architecture, data modeling, transaction handling — and led the React frontends consuming them. No handoff gaps, no blind spots." },
  { icon: "↑", title: "Promoted twice on merit", desc: "Junior → mid → senior across two companies. Each step came from shipping work that mattered, not from waiting out a tenure clock." },
  { icon: "⟳", title: "Led real migrations", desc: "Spring → Node.js backend. Angular → React frontend. Both on production codebases with real customers. Migration is hard — I've done it and know the landmines." },
  { icon: "◈", title: "AI-native workflow", desc: "Built an AI support agent chat interface. Integrated AI coding agents into team PR workflows — not just a user of AI tools, but someone who builds systems around them." },
];

export default function About() {
  return (
    <section id="about" style={{ marginBottom: "7rem" }}>
      <AnimateIn><SectionHead num="03" title="What I bring" /></AnimateIn>
      <AnimateIn delay={0.05}>
        <div className="strengths-grid">
          {strengths.map(({ icon, title, desc }) => (
            <div key={title} className="strength-card">
              <div className="strength-icon">{icon}</div>
              <div className="strength-title">{title}</div>
              <div className="strength-desc">{desc}</div>
            </div>
          ))}
        </div>
      </AnimateIn>
    </section>
  );
}
