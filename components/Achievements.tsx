"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BlueprintSheet from "@/components/ui/BlueprintSheet";
import { Trophy, Medal, Award, GraduationCap, CheckCircle2, Star } from "lucide-react";

const achievements = [
  {
    id: "ACH-01",
    year: "2026/2027",
    title: "Best Supporter Juara 5",
    event: "DBL Malang (Basket Terbesar)",
    level: "REGIONAL JATIM",
    authority: "DBL Indonesia & Mokleters",
    category: "Kepemimpinan Komunitas",
    accent: "var(--accent-amber)",
    rank: "TOP 5",
    icon: Trophy,
  },
  {
    id: "ACH-02",
    year: "2025",
    title: "Juara 1",
    event: "Majlis Boxing Tingkat Kota",
    level: "KOTA MALANG",
    authority: "Komisi Tinju Kota Malang",
    category: "Olahraga Atletik",
    accent: "#FBBF24",
    rank: "JUARA 1",
    icon: Medal,
  },
  {
    id: "ACH-03",
    year: "2026",
    title: "Juara 3",
    event: "O2SN Panjat Tebing Putra",
    level: "KOTA MALANG",
    authority: "Dispora & MGMP PJOK",
    category: "Olahraga Ketangkasan",
    accent: "#F97316",
    rank: "JUARA 3",
    icon: Medal,
  },
  {
    id: "ACH-04",
    year: "2025",
    title: "Finalis Nasional",
    event: "BEGIN 1.0 Business Plan",
    level: "TINGKAT NASIONAL",
    authority: "Kompetisi Siswa / Mahasiswa",
    category: "Rencana Bisnis",
    accent: "var(--accent-blue)",
    rank: "FINALIS",
    icon: Award,
  },
  {
    id: "ACH-05",
    year: "2025",
    title: "Penghargaan Peserta",
    event: "Business Model Canvas (BMC)",
    level: "TINGKAT NASIONAL",
    authority: "Universitas Negeri Surabaya (UNESA)",
    category: "Model Bisnis",
    accent: "var(--accent-indigo)",
    rank: "APRESIASI",
    icon: Star,
  },
];

const education = {
  school: "SMK Telkom Malang",
  period: "2024 – Sekarang",
  major: "Rekayasa Perangkat Lunak (RPL)",
  specialization: "Peminatan Front End Development",
  status: "Siswa Aktif",
  accreditation: "Akreditasi A // Sekolah Unggulan Vokasi Nasional",
  desc: "Menempuh pendidikan vokasi teknologi komprehensif yang mengintegrasikan fundamental algoritma komputer, rekayasa perangkat lunak, sistem basis data, arsitektur front-end modern, dan etika profesional industri.",
};

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });

  return (
    <BlueprintSheet
      id="achievements"
      sheetNumber="Sheet 05B — Prestasi & Pendidikan"
      background="paper-alt"
    >
      <div ref={ref}>
        {/* Section header */}
        <div className="section-header">
          <h2 className="section-title">Prestasi & Rekam Jejak Kualifikasi</h2>
          <p className="section-subtitle">
            Pencapaian nyata di berbagai bidang: kepemimpinan suporter, ketangkasan fisik bela diri,
            hingga kompetisi rencana bisnis skala nasional.
          </p>
        </div>

        {/* Award Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: "1.25rem",
            marginBottom: "3.5rem",
          }}
        >
          {achievements.map((ach, i) => {
            const Icon = ach.icon;
            return (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius)",
                  padding: "1.35rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "var(--shadow-sm)",
                  position: "relative",
                  overflow: "hidden",
                }}
                className="bp-card"
              >
                {/* Top: Icon + Rank Badge */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <div
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "8px",
                        background: "rgba(255, 255, 255, 0.04)",
                        border: `1px solid ${ach.accent}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: ach.accent,
                      }}
                    >
                      <Icon size={18} />
                    </div>

                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "9.5px",
                        fontWeight: 700,
                        padding: "0.2rem 0.5rem",
                        background: "rgba(255, 255, 255, 0.05)",
                        border: `1px solid ${ach.accent}`,
                        color: ach.accent,
                        borderRadius: "var(--radius-sm)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {ach.rank}
                    </span>
                  </div>

                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "var(--text-muted)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {ach.year} · {ach.category}
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "0.3rem",
                      lineHeight: 1.25,
                    }}
                  >
                    {ach.title}
                  </h3>

                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.45,
                      marginBottom: "1rem",
                    }}
                  >
                    {ach.event}
                  </div>
                </div>

                {/* Bottom Authority */}
                <div
                  style={{
                    paddingTop: "0.75rem",
                    borderTop: "1px solid var(--border-subtle)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: "var(--text-muted)",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: "140px",
                    }}
                    title={ach.authority}
                  >
                    {ach.authority}
                  </span>

                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "9px",
                      color: ach.accent,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.25rem",
                    }}
                  >
                    <CheckCircle2 size={11} />
                    <span>VERIFIED</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Education Section */}
        <div id="education">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--accent-blue)",
              letterSpacing: "0.06em",
              marginBottom: "1rem",
            }}
          >
            <GraduationCap size={15} />
            <span>PENDIDIKAN FORMAL</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35 }}
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius)",
              boxShadow: "var(--shadow-sm)",
              overflow: "hidden",
            }}
            className="bp-card"
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                borderBottom: "1px solid var(--border-subtle)",
                padding: "1.25rem 1.5rem",
                background: "rgba(255, 255, 255, 0.02)",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.35rem" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: "var(--accent-blue)",
                      fontWeight: 600,
                    }}
                  >
                    INSTITUSI RESMI
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "9.5px",
                      background: "rgba(56, 189, 248, 0.1)",
                      border: "1px solid rgba(56, 189, 248, 0.25)",
                      padding: "0.15rem 0.45rem",
                      borderRadius: "var(--radius-sm)",
                      color: "var(--accent-blue)",
                    }}
                  >
                    {education.accreditation}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "1.35rem",
                    color: "var(--text-primary)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {education.school}
                </h3>

                <div
                  style={{
                    fontSize: "0.95rem",
                    color: "var(--accent-blue)",
                    fontWeight: 600,
                    marginBottom: "0.2rem",
                  }}
                >
                  {education.major}
                </div>

                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    color: "var(--text-secondary)",
                  }}
                >
                  {education.specialization}
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    color: "var(--text-primary)",
                    fontWeight: 600,
                  }}
                >
                  {education.period}
                </span>

                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10.5px",
                    color: "var(--accent-emerald)",
                    fontWeight: 600,
                    border: "1px solid rgba(16, 185, 129, 0.3)",
                    background: "rgba(16, 185, 129, 0.08)",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "var(--radius-full)",
                  }}
                >
                  STATUS: {education.status.toUpperCase()}
                </span>
              </div>
            </div>

            <div style={{ padding: "1.5rem" }}>
              <p style={{ fontSize: "0.925rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
                {education.desc}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </BlueprintSheet>
  );
}
