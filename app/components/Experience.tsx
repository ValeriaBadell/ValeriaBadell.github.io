"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHead from "./SectionHead";
import AnimateIn from "./AnimateIn";

const jobs = [
  {
    role: "Senior Software Engineer",
    company: "Dev Technology Group, Inc. — Reston, VA",
    period: "Mar 2024 – Jun 2026",
    pill: "Remote · Contract", pillStyle: "pill-green",
    highlights: [
      "Owned a Node.js + TypeScript REST API for a production commerce platform — service architecture, API contracts, business logic, and DB integration across catalog, cart, order, and auth.",
      "Built clean service/repository layers to decouple business logic from the HTTP layer, with transaction handling across multi-write operations.",
      "Led frontend architecture in React, Next.js & TypeScript — built reusable component libraries and design systems that cut delivery time on new work.",
      "Built the chat interface for an AI support agent; integrated AI coding agents into PR workflows.",
      "Containerized services with Docker, wired into CI; improved performance via code splitting and lazy loading.",
    ],
    tags: ["Node.js","TypeScript","React","Next.js","PostgreSQL","Docker","GitHub Actions","Jest","AI agents"],
  },
  {
    role: "Senior Technology Consultant",
    company: "BIGWISE Corp — Miami, FL",
    period: "Jan 2021 – Feb 2024",
    pill: "Remote · Part-time", pillStyle: "pill-purple",
    highlights: [
      "Promoted from Technology Consultant to Senior on merit.",
      "Led Spring → Node.js backend migration, unifying the stack onto one language across front and back.",
      "Led Angular → React frontend migration for an enterprise client, modernising the codebase end-to-end.",
      "Mentored engineers, set code-quality standards across projects, managed client relationships across Central America and the US.",
    ],
    tags: ["React","Next.js","Node.js","TypeScript","Tailwind CSS","Angular","Mentorship"],
  },
  {
    role: "Software Engineer",
    company: "BINWUS — Táchira, Venezuela",
    period: "Nov 2019 – Jan 2021",
    pill: "On-site", pillStyle: "pill-gray",
    highlights: [
      "Promoted from Junior Software Engineer to Software Engineer.",
      "Owned Node.js + TypeScript API services on NexTrade, integrated against existing Java and .NET services.",
      "Built responsive Angular frontends; handled testing and debugging end to end.",
    ],
    tags: ["Node.js","TypeScript","Angular","Java",".NET","MongoDB"],
  },
];

function ExpCard({ job, index }: { job: typeof jobs[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className="exp-card"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1 }}
    >
      <span className="exp-left-bar" />
      <div className="exp-top">
        <div>
          <div className="exp-role">{job.role}</div>
          <div className="exp-company">{job.company}</div>
        </div>
        <div className="exp-right">
          <div className="exp-period">{job.period}</div>
          <span className={`pill ${job.pillStyle}`}>{job.pill}</span>
        </div>
      </div>
      <ul className="exp-highlights">
        {job.highlights.map((h, i) => (
          <li key={i}>
            <span className="exp-bullet">▸</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>
      <div className="exp-tags">
        {job.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" style={{ marginBottom: "7rem" }}>
      <AnimateIn><SectionHead num="01" title="Experience" /></AnimateIn>
      {jobs.map((job, i) => <ExpCard key={job.company} job={job} index={i} />)}
    </section>
  );
}
