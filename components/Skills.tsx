"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BlueprintSheet from "@/components/ui/BlueprintSheet";
import { Layout, Terminal, Users } from "lucide-react";

const skillGroups = [
  {
    title: "Front-End Development",
    icon: Layout,
    description: "Fondasi utama rekayasa antarmuka web modern, responsif, dan mudah diakses.",
    skills: [
      { name: "HTML5 Semantic", detail: "Struktur semantik murni, SEO, dan aksesibilitas (WCAG)" },
      { name: "CSS3 & Modern Layout", detail: "Flexbox, CSS Grid, custom properties, responsive design" },
      { name: "JavaScript (ES6+)", detail: "Async/await, event loop, manipulasi DOM, Fetch API" },
      { name: "React & Next.js", detail: "Komponen modular, hooks, routing modern, client/server rendering" },
    ],
  },
  {
    title: "Tooling & Workflow",
    icon: Terminal,
    description: "Alat kerja kolaboratif dan standar pengembangan perangkat lunak terdistribusi.",
    skills: [
      { name: "Git & GitHub", detail: "Branching workflow, commit terstruktur, resolusi konflik" },
      { name: "REST API Integration", detail: "Konsumsi endpoint backend, penanganan error, dan validasi data" },
      { name: "Web Performance", detail: "Audit DevTools, optimasi aset gambar, responsive loading" },
      { name: "Fundamental Back-End", detail: "Node.js dasar, protokol HTTP, dan alur CRUD" },
    ],
  },
  {
    title: "Kepemimpinan & Soft Skills",
    icon: Users,
    description: "Kapasitas interpersonal teruji dalam kepengurusan organisasi dan kompetisi.",
    skills: [
      { name: "Kepemimpinan Lapangan", detail: "Memimpin 90+ anggota komunitas supporter dan tim OSIS" },
      { name: "Public Speaking", detail: "Penyampaian presentasi dan koordinasi lintas pihak secara lugas" },
      { name: "Manajemen Risiko", detail: "Penyusunan SOP dan kesigapan solusi saat kendala lapangan" },
      { name: "Kolaborasi Tim", detail: "Bekerja selaras bersama tim back-end dan desainer" },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <BlueprintSheet id="skills" background="paper">
      <div ref={ref}>
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Keahlian & Kemampuan</h2>
          <p className="section-subtitle">
            Kombinasi keahlian teknis pemrograman antarmuka web dan kepemimpinan tim kolaboratif.
          </p>
        </div>

        {/* 3 Clean Category Columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {skillGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius)",
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                }}
                className="bp-card"
              >
                {/* Header */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "6px",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid var(--border-subtle)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent-blue)",
                    }}
                  >
                    <Icon size={16} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                    }}
                  >
                    {group.title}
                  </h3>
                </div>

                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.5,
                    marginBottom: "1.5rem",
                  }}
                >
                  {group.description}
                </p>

                {/* Skill items list */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {group.skills.map((s) => (
                    <div
                      key={s.name}
                      style={{
                        paddingBottom: "0.85rem",
                        borderBottom: "1px solid rgba(255, 255, 255, 0.04)",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "0.925rem",
                          fontWeight: 600,
                          color: "var(--text-primary)",
                          marginBottom: "0.2rem",
                        }}
                      >
                        {s.name}
                      </div>
                      <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: 1.4 }}>
                        {s.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </BlueprintSheet>
  );
}
