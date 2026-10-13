"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionShell from "@/components/ui/BlueprintSheet";

const skillGroups = [
  {
    num: "01",
    title: "Front-End Development",
    skills: [
      { name: "HTML5 Semantic", detail: "Struktur semantik, SEO, aksesibilitas (WCAG)" },
      { name: "CSS3 & Layout Modern", detail: "Flexbox, Grid, custom properties, responsive" },
      { name: "JavaScript (ES6+)", detail: "Async/await, event loop, manipulasi DOM" },
      { name: "React & Next.js", detail: "Hooks, routing modern, client/server rendering" },
    ],
  },
  {
    num: "02",
    title: "Tooling & Workflow",
    skills: [
      { name: "Git & GitHub", detail: "Branching workflow, commit terstruktur" },
      { name: "REST API Integration", detail: "Konsumsi endpoint, penanganan error, validasi" },
      { name: "Web Performance", detail: "Audit DevTools, optimasi aset, lazy loading" },
      { name: "Node.js Dasar", detail: "Protokol HTTP, alur CRUD, backend fundamental" },
    ],
  },
  {
    num: "03",
    title: "Kepemimpinan & Soft Skills",
    skills: [
      { name: "Kepemimpinan Lapangan", detail: "Memimpin 90+ anggota komunitas & OSIS" },
      { name: "Public Speaking", detail: "Presentasi & koordinasi lintas pihak" },
      { name: "Manajemen Risiko", detail: "SOP & kesigapan solusi lapangan" },
      { name: "Kolaborasi Tim", detail: "Sinergi dengan back-end & desainer" },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <SectionShell id="skills">
      <div ref={ref}>
        <div className="section-eyebrow">Keahlian &amp; Kemampuan</div>

        <h2 className="section-title" style={{ marginBottom: "3rem" }}>
          Stack yang saya kuasai
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.num}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--border-faint)",
                borderRadius: "var(--radius)",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                transition: "border-color 0.2s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-faint)"; }}
            >
              {/* Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "var(--cream)",
                    lineHeight: 1.3,
                  }}
                >
                  {group.title}
                </h3>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "var(--accent)",
                    letterSpacing: "0.06em",
                    fontWeight: 500,
                  }}
                >
                  {group.num}
                </span>
              </div>

              {/* Skills list */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                {group.skills.map((s, i) => (
                  <div
                    key={s.name}
                    style={{
                      padding: "0.85rem 0",
                      borderBottom: i < group.skills.length - 1 ? "1px solid var(--border-faint)" : "none",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        color: "var(--text-primary)",
                      }}
                    >
                      {s.name}
                    </div>
                    <div
                      style={{
                        fontSize: "0.775rem",
                        color: "var(--text-muted)",
                        textAlign: "right",
                        flexShrink: 0,
                        maxWidth: "50%",
                        lineHeight: 1.3,
                      }}
                    >
                      {s.detail}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
