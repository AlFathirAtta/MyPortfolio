"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionShell from "@/components/ui/BlueprintSheet";
import { Award } from "lucide-react";

const organizations = [
  {
    period: "2026 – 2027",
    role: "Ketua Komunitas",
    org: "Mokleters",
    orgFull: "Pengurus Supporter SMK Telkom Malang",
    highlight: "Best Supporter Juara 5 — DBL Malang 2026/2027",
    summary:
      "Memimpin dan mengoordinasikan lebih dari 90 anggota dalam menjalankan kegiatan supporter sekolah. Merencanakan, mengorganisir, dan mengawasi berbagai kegiatan untuk memastikan tujuan organisasi tercapai efektif dan aman.",
    points: [
      "Koordinasi koreografi, logistik, dan keamanan suporter di arena DBL",
      "Pengambilan keputusan taktis saat dinamika suporter berlangsung",
      "Pembinaan regenerasi anggota & komunikasi dengan pihak sekolah",
    ],
    skills: ["Community Leadership", "Decision Making", "Team Coordination", "Crisis Management"],
  },
  {
    period: "2024 – 2026",
    role: "Koordinator Sie 5",
    org: "OSIS",
    orgFull: "SMK Telkom Malang",
    highlight: "100+ pendaftar — terpilih 17 pengurus baru",
    summary:
      "Ketua Pelaksana Open Recruitment OSIS 2025–2026. Menyusun rancangan teknis, alur seleksi bertahap, dan manajemen risiko untuk memastikan seleksi berjalan objektif dan tepat sasaran.",
    points: [
      "Kurasi dari 100+ pendaftar hingga terpilih 17 pengurus terbaik",
      "Rundown operasional & SOP penanggulangan risiko acara",
      "Koordinasi lintas seksi agar agenda sekolah berjalan tanpa kendala",
    ],
    skills: ["Event Management", "Recruitment", "Risk Mitigation", "Cross-Team Synergy"],
  },
];

export default function Organization() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });

  return (
    <SectionShell id="organization">
      <div ref={ref}>
        <div className="section-eyebrow">Organisasi &amp; Kepemimpinan</div>
        <h2 className="section-title" style={{ marginBottom: "3rem" }}>
          Pengalaman lapangan nyata
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {organizations.map((org, i) => (
            <motion.div
              key={org.role + org.period}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--border-faint)",
                borderRadius: "var(--radius)",
                padding: "2rem",
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "2rem",
                alignItems: "start",
                transition: "border-color 0.2s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-faint)"; }}
            >
              {/* Left: period */}
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--text-muted)",
                  letterSpacing: "0.06em",
                  paddingTop: "0.2rem",
                  minWidth: "80px",
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  userSelect: "none",
                }}
              >
                {org.period}
              </div>

              {/* Right: content */}
              <div>
                {/* Role + org */}
                <div style={{ marginBottom: "1rem" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontStyle: "italic",
                      fontWeight: 700,
                      fontSize: "1.4rem",
                      color: "var(--cream)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {org.role}
                  </h3>
                  <div style={{ fontSize: "0.9rem", color: "var(--accent)", fontWeight: 500 }}>
                    {org.org}
                    <span style={{ color: "var(--text-muted)", fontWeight: 400 }}> — {org.orgFull}</span>
                  </div>
                </div>

                {/* Highlight */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    padding: "0.65rem 1rem",
                    background: "rgba(129, 140, 248, 0.08)",
                    border: "1px solid rgba(129, 140, 248, 0.22)",
                    borderRadius: "var(--radius-sm)",
                    marginBottom: "1.25rem",
                    fontSize: "0.85rem",
                    color: "var(--amber)",
                    fontWeight: 500,
                  }}
                >
                  <Award size={15} style={{ flexShrink: 0 }} />
                  {org.highlight}
                </div>

                {/* Summary */}
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.75, fontWeight: 300, marginBottom: "1.25rem" }}>
                  {org.summary}
                </p>

                {/* Points */}
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem", marginBottom: "1.25rem" }}>
                  {org.points.map((pt) => (
                    <li
                      key={pt}
                      style={{
                        display: "flex",
                        gap: "0.5rem",
                        fontSize: "0.85rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.55,
                      }}
                    >
                      <span style={{ color: "var(--accent)", flexShrink: 0 }}>→</span>
                      {pt}
                    </li>
                  ))}
                </ul>

                {/* Skill tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {org.skills.map((skill) => (
                    <span key={skill} className="tag">{skill}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
