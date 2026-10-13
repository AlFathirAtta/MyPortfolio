"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionShell from "@/components/ui/BlueprintSheet";
import { GraduationCap } from "lucide-react";

const achievements = [
  {
    id: "ACH-01",
    year: "2026/27",
    title: "Best Supporter Juara 5",
    event: "DBL Malang — Kompetisi Basket Terbesar",
    level: "Regional Jawa Timur",
    rank: "Top 5",
    color: "var(--amber)",
  },
  {
    id: "ACH-02",
    year: "2025",
    title: "Juara 1 Boxing",
    event: "Majlis Boxing Tingkat Kota",
    level: "Kota Malang",
    rank: "Juara 1",
    color: "#FBBF24",
  },
  {
    id: "ACH-03",
    year: "2026",
    title: "Juara 3 Panjat Tebing",
    event: "O2SN Panjat Tebing Putra",
    level: "Kota Malang",
    rank: "Juara 3",
    color: "#F97316",
  },
  {
    id: "ACH-04",
    year: "2025",
    title: "Finalis Nasional",
    event: "BEGIN 1.0 Business Plan",
    level: "Tingkat Nasional",
    rank: "Finalis",
    color: "var(--accent)",
  },
  {
    id: "ACH-05",
    year: "2025",
    title: "Peserta Apresiasi",
    event: "Business Model Canvas (BMC) — UNESA",
    level: "Tingkat Nasional",
    rank: "Apresiasi",
    color: "#A78BFA",
  },
];

const education = {
  school: "SMK Telkom Malang",
  period: "2024 – Sekarang",
  major: "Rekayasa Perangkat Lunak (RPL)",
  specialization: "Peminatan Front End Development",
  accreditation: "Akreditasi A",
  desc: "Pendidikan vokasi teknologi yang mengintegrasikan algoritma, rekayasa perangkat lunak, sistem basis data, arsitektur front-end modern, dan etika profesional industri.",
};

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });

  return (
    <SectionShell id="achievements" alt>
      <div ref={ref}>
        <div className="section-eyebrow">Prestasi &amp; Pendidikan</div>
        <h2 className="section-title" style={{ marginBottom: "3rem" }}>
          Rekam jejak di luar kode
        </h2>

        {/* Achievements — horizontal scrollable rows */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "1px",
            background: "var(--border-faint)",
            border: "1px solid var(--border-faint)",
            borderRadius: "var(--radius)",
            overflow: "hidden",
            marginBottom: "3rem",
          }}
        >
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              style={{
                background: "var(--bg-raised)",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                transition: "background 0.15s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--bg-card)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--bg-raised)"; }}
            >
              {/* Rank badge */}
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.08em",
                  color: ach.color,
                  marginBottom: "0.25rem",
                }}
              >
                {ach.rank.toUpperCase()} · {ach.year}
              </div>

              {/* Title */}
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: "var(--cream)",
                  lineHeight: 1.2,
                }}
              >
                {ach.title}
              </div>

              {/* Event */}
              <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: 1.4, fontWeight: 300 }}>
                {ach.event}
              </div>

              {/* Level */}
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "var(--text-muted)",
                  marginTop: "auto",
                  paddingTop: "0.5rem",
                  borderTop: "1px solid var(--border-faint)",
                }}
              >
                {ach.level}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
            <GraduationCap size={14} style={{ color: "var(--accent)" }} />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.1em",
                color: "var(--accent)",
                textTransform: "uppercase",
              }}
            >
              Pendidikan Formal
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            style={{
              background: "var(--bg-main)",
              border: "1px solid var(--border-faint)",
              borderRadius: "var(--radius)",
              padding: "2rem",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "2rem",
              alignItems: "start",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontWeight: 700,
                  fontSize: "1.35rem",
                  color: "var(--cream)",
                  marginBottom: "0.3rem",
                }}
              >
                {education.school}
              </div>
              <div style={{ fontSize: "0.9rem", color: "var(--accent)", fontWeight: 500, marginBottom: "0.15rem" }}>
                {education.major}
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-muted)", marginBottom: "1rem" }}>
                {education.specialization}
              </div>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.7, fontWeight: 300 }}>
                {education.desc}
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.5rem" }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--text-muted)",
                  letterSpacing: "0.06em",
                }}
              >
                {education.period}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  padding: "0.2rem 0.6rem",
                  background: "rgba(16,185,129,0.08)",
                  border: "1px solid rgba(16,185,129,0.2)",
                  borderRadius: "var(--radius-full)",
                  color: "#10B981",
                }}
              >
                Siswa Aktif
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "var(--accent)",
                }}
              >
                {education.accreditation}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionShell>
  );
}
