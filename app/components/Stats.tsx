"use client";
import AnimateIn from "./AnimateIn";

const stats = [
  { n: "6+", l: "Years shipping" },
  { n: "2×", l: "Promoted on merit" },
  { n: "3",  l: "Companies" },
  { n: "US/ET", l: "Full overlap" },
];

export default function Stats() {
  return (
    <AnimateIn style={{ marginBottom: "7rem" }}>
      <div className="stats-row">
        {stats.map(({ n, l }) => (
          <div key={l} className="stat">
            <span className="stat-n">{n}</span>
            <span className="stat-l">{l}</span>
            <span className="stat-underline" />
          </div>
        ))}
      </div>
    </AnimateIn>
  );
}
