"use client";
import { motion } from "framer-motion";

const f = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <motion.div {...f(0)}>
              <div className="hero-status">
                <span className="blink-dot" />
                Available for remote roles
              </div>
            </motion.div>

            <motion.h1 className="hero-name" {...f(0.08)}>
              <span className="first">Valeria</span>
              <span className="last">Badell</span>
            </motion.h1>

            <motion.div className="hero-role" {...f(0.14)}>
              <span className="slash">//</span> Senior Full Stack Engineer
            </motion.div>

            <motion.p className="hero-desc" {...f(0.2)}>
              I build <strong>production-grade web apps</strong> end-to-end —{" "}
              <strong>React, Next.js & TypeScript</strong> on the front,{" "}
              <strong>Node.js REST APIs</strong> behind it. 6+ years shipping real
              software. Promoted twice. Full US Eastern overlap.
            </motion.p>

            <motion.div className="hero-cta" {...f(0.26)}>
              <a href="mailto:valeria.badell28@gmail.com" className="btn btn-accent">
                Get in touch
              </a>
              <a href="https://github.com/ValeriaBadell" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                GitHub ↗
              </a>
              <a href="https://linkedin.com/in/valeria-badell-9068233b5" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                LinkedIn ↗
              </a>
            </motion.div>
          </div>

          <motion.div
            className="terminal"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="term-bar">
              <span className="tdot tdot-r" />
              <span className="tdot tdot-y" />
              <span className="tdot tdot-g" />
              <span className="term-title">valeria.json</span>
            </div>
            <div className="term-body">
              <div><span className="term-prompt">$</span> <span className="term-cmd">cat valeria.json</span></div>
              <div className="term-out">{"{"}</div>
              {[
                ['"name"', '"Valeria Badell"', "str"],
                ['"role"', '"Sr Full Stack Engineer"', "str"],
                ['"years"', "6", "num"],
                ['"promoted"', "2", "num"],
                ['"remote"', "true", "bool"],
                ['"overlap"', '"US Eastern"', "str"],
              ].map(([k, v, t]) => (
                <div className="term-out" key={k} style={{ paddingLeft: "28px" }}>
                  <span className="term-key">{k}</span>:{" "}
                  <span className={t === "str" ? "term-str" : t === "num" ? "term-num" : "term-bool"}>{v}</span>,
                </div>
              ))}
              <div className="term-out" style={{ paddingLeft: "28px" }}>
                <span className="term-key">"stack"</span>: [
              </div>
              <div className="term-out" style={{ paddingLeft: "44px" }}>
                <span className="term-str">"React"</span>, <span className="term-str">"Next.js"</span>,
              </div>
              <div className="term-out" style={{ paddingLeft: "44px" }}>
                <span className="term-str">"TypeScript"</span>, <span className="term-str">"Node.js"</span>
              </div>
              <div className="term-out" style={{ paddingLeft: "28px" }}>],</div>
              <div className="term-out" style={{ paddingLeft: "28px" }}>
                <span className="term-key">"available"</span>: <span className="term-bool">true</span>
              </div>
              <div className="term-out">{"}"}</div>
              <div style={{ marginTop: "0.5rem" }}>
                <span className="term-prompt">$</span> <span className="term-cursor" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
