"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BlueprintSheet from "@/components/ui/BlueprintSheet";
import { Users, Award, Calendar, ShieldCheck, ChevronRight } from "lucide-react";

const organizations = [
  {
    period: "2026 – 2027",
    role: "Ketua Komunitas",
    org: "Mokleters (Pengurus Supporter SMK Telkom Malang)",
    badge: "KEPALA KOMUNITAS 90+ ANGGOTA",
    badgeColor: "var(--accent-emerald)",
    trophy: "Meraih Best Supporter Juara 5 pada event DBL Malang 2026/2027",
    summary:
      "Memimpin dan mengoordinasikan lebih dari 90 anggota dalam menjalankan kegiatan dan program komunitas supporter sekolah. Merencanakan, mengorganisir, dan mengawasi pelaksanaan berbagai kegiatan untuk memastikan tujuan organisasi tercapai secara efektif dan aman.",
    points: [
      "Memimpin 90+ anggota dalam koordinasi koreografi, logistik, dan keamanan suporter di arena DBL",
      "Mengambil keputusan taktis di lapangan saat dinamika suporter berlangsung",
      "Membina regenerasi anggota serta komunikasi intensif dengan pihak sekolah dan panitia eksternal",
    ],
    skills: ["Community Leadership", "Decision Making", "Team Coordination", "Crisis Management", "Public Relations"],
  },
  {
    period: "2024 – 2026",
    role: "Koordinator Sie 5",
    org: "OSIS SMK Telkom Malang",
    badge: "KETUA OPEN RECRUITMENT",
    badgeColor: "var(--accent-blue)",
    trophy: "Sukses menjaring 100+ pendaftar & memilih 17 pengurus baru",
    summary:
      "Memegang tanggung jawab sebagai Ketua Pelaksana Open Recruitment OSIS Periode 2025–2026. Menyusun rancangan teknis perlengkapan, alur seleksi bertahap, dan manajemen risiko lapangan untuk memastikan seleksi berjalan objektif dan tepat sasaran.",
    points: [
      "Memimpin proses kurasi calon pengurus OSIS dari 100+ pendaftar hingga terpilih 17 pengurus terbaik",
      "Menyusun rundown operasional teknis serta SOP penanggulangan risiko kendala acara",
      "Mengkoordinasikan kebutuhan lintas seksi agar seluruh agenda sekolah terlaksana tanpa kendala",
    ],
    skills: ["Event Management", "Recruitment Strategy", "Risk Mitigation", "Cross-Team Synergy", "Operational Rundown"],
  },
];

export default function Organization() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });

  return (
    <BlueprintSheet
      id="organization"
      sheetNumber="Sheet 05 — Jejak Kepemimpinan"
      background="paper"
    >
      <div ref={ref}>
        {/* Section header */}
        <div className="section-header">
          <h2 className="section-title">Pengalaman Organisasi & Kepemimpinan</h2>
          <p className="section-subtitle">
            Bukti nyata kemampuan memimpin ratusan orang, mengeksekusi rekrutmen berskala besar,
            dan mengambil keputusan strategis di lapangan.
          </p>
        </div>

        {/* Timeline cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {organizations.map((org, i) => (
            <motion.div
              key={org.role + org.period}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.12 }}
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius)",
                padding: "1.75rem",
                boxShadow: "var(--shadow-sm)",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
              className="bp-card"
            >
              {/* Card Header: Role, Org, and Period */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "1rem",
                  borderBottom: "1px solid var(--border-subtle)",
                  paddingBottom: "1.25rem",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.35rem" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "10px",
                        padding: "0.2rem 0.5rem",
                        background: "rgba(255, 255, 255, 0.05)",
                        border: `1px solid ${org.badgeColor}`,
                        color: org.badgeColor,
                        borderRadius: "var(--radius-sm)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {org.badge}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.35rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {org.role}
                  </h3>

                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.95rem",
                      color: "var(--accent-blue)",
                      fontWeight: 500,
                    }}
                  >
                    {org.org}
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    color: "var(--text-muted)",
                    background: "rgba(255, 255, 255, 0.03)",
                    padding: "0.4rem 0.75rem",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-sm)",
                  }}
                >
                  <Calendar size={13} style={{ color: "var(--accent-blue)" }} />
                  <span>{org.period}</span>
                </div>
              </div>

              {/* Trophy / Major Highlight Banner */}
              {org.trophy && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    padding: "0.75rem 1rem",
                    background: "rgba(245, 158, 11, 0.08)",
                    border: "1px solid rgba(245, 158, 11, 0.3)",
                    borderRadius: "var(--radius-sm)",
                    color: "var(--accent-amber)",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                  }}
                >
                  <Award size={18} style={{ flexShrink: 0 }} />
                  <span>{org.trophy}</span>
                </div>
              )}

              {/* Narrative Summary */}
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.925rem",
                  lineHeight: 1.7,
                }}
              >
                {org.summary}
              </p>

              {/* Key Contribution Points */}
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10.5px",
                    color: "var(--accent-blue)",
                    letterSpacing: "0.06em",
                    marginBottom: "0.6rem",
                  }}
                >
                  KONTRIBUSI UTAMA:
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                  {org.points.map((pt) => (
                    <div
                      key={pt}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.6rem",
                        fontSize: "0.875rem",
                        color: "var(--text-primary)",
                        lineHeight: 1.55,
                      }}
                    >
                      <ChevronRight size={15} style={{ color: "var(--accent-blue)", flexShrink: 0, marginTop: "0.15rem" }} />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Competencies Badges */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.4rem",
                  paddingTop: "0.5rem",
                  borderTop: "1px solid var(--border-subtle)",
                }}
              >
                {org.skills.map((skill) => (
                  <span key={skill} className="mono-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </BlueprintSheet>
  );
}
