"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BlueprintSheet from "@/components/ui/BlueprintSheet";
import { Code2, Users2, Award } from "lucide-react";

const stats = [
  {
    icon: Code2,
    num: "02",
    label: "Proyek Web Nyata",
    desc: "Sistem Informasi Tata Usaha (SITU) & NeonRent Live",
  },
  {
    icon: Users2,
    num: "90+",
    label: "Anggota Dipimpin",
    desc: "Ketua Komunitas Mokleters & Koordinator Sie 5 OSIS",
  },
  {
    icon: Award,
    num: "05",
    label: "Prestasi Resmi",
    desc: "Best Supporter DBL, Juara Boxing, Panjat Tebing, BMC",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <BlueprintSheet id="about" background="paper-alt">
      <div ref={ref}>
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Tentang Saya</h2>
          <p className="section-subtitle">
            Latar belakang, filosofi pembuatan perangkat lunak, dan rekam jejak kepemimpinan.
          </p>
        </div>

        {/* 2-Column Clean Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "3rem",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Left: Bio Narrative */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.35rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "1rem",
                lineHeight: 1.35,
              }}
            >
              Membangun pengalaman web yang rapi, cepat, dan berdaya guna bagi pengguna nyata.
            </h3>

            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.95rem",
                lineHeight: 1.75,
                marginBottom: "1.25rem",
              }}
            >
              Saya adalah siswa tingkat akhir di jurusan Rekayasa Perangkat Lunak (RPL) SMK Telkom Malang,
              dengan peminatan khusus pada Front End Web Development. Bagi saya, menulis kode bukan sekadar
              membuat halaman tampil di layar, melainkan memastikan antarmuka mudah digunakan, memiliki aksesibilitas
              yang baik, dan struktur kode yang mudah dipelihara.
            </p>

            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.95rem",
                lineHeight: 1.75,
                marginBottom: "1.5rem",
              }}
            >
              Selain di bidang teknis, pengalaman memimpin komunitas 90+ orang dan mengorganisasi rekrutmen OSIS
              membentuk kemampuan komunikasi yang lugas, pemecahan masalah yang tenang, serta sinergi yang solid
              saat berkolaborasi dengan tim back-end maupun desainer.
            </p>

            {/* Quick Badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {["SMK Telkom Malang", "Front End Development", "Clean Code", "Leadership & Public Speaking"].map((t) => (
                <span key={t} className="mono-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: 3 Clean Highlight Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {stats.map((s, idx) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, x: 12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  style={{
                    background: "var(--bg-surface)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius)",
                    padding: "1.25rem 1.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1.25rem",
                  }}
                  className="bp-card"
                >
                  <div
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "2rem",
                      fontWeight: 700,
                      color: "var(--accent-blue)",
                      lineHeight: 1,
                      minWidth: "60px",
                    }}
                  >
                    {s.num}
                  </div>

                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {s.label}
                    </div>
                    <div style={{ fontSize: "12.5px", color: "var(--text-muted)", lineHeight: 1.4 }}>
                      {s.desc}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </BlueprintSheet>
  );
}
