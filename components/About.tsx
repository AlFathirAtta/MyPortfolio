"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionShell from "@/components/ui/BlueprintSheet";
import { Code2, Users2, Award } from "lucide-react";

const stats = [
  {
    icon: Code2,
    num: "02",
    label: "Proyek Web Nyata",
    desc: "SITU (admin sekolah) & NeonRent (rental mobil)",
  },
  {
    icon: Users2,
    num: "90+",
    label: "Anggota Dipimpin",
    desc: "Komunitas Mokleters & Koordinator OSIS",
  },
  {
    icon: Award,
    num: "05",
    label: "Prestasi Resmi",
    desc: "DBL, Juara Boxing, Panjat Tebing, BMC",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <SectionShell id="about" alt>
      <div ref={ref}>
        {/* Eyebrow */}
        <div className="section-eyebrow">Tentang Saya</div>

        {/* 2-col layout */}
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          {/* Left: narrative */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontStyle: "italic",
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                color: "var(--cream)",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                marginBottom: "1.5rem",
              }}
            >
              Membangun antarmuka yang rapi,<br />
              cepat, dan berdaya guna.
            </h2>

            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                marginBottom: "1.25rem",
                fontWeight: 300,
              }}
            >
              Saya adalah siswa tingkat akhir jurusan Rekayasa Perangkat Lunak (RPL) SMK Telkom Malang,
              dengan peminatan khusus Front End Web Development. Bagi saya, menulis kode berarti
              memastikan antarmuka mudah digunakan, aksesibel, dan strukturnya mudah dipelihara.
            </p>

            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                marginBottom: "2rem",
                fontWeight: 300,
              }}
            >
              Pengalaman memimpin komunitas 90+ orang dan mengorganisasi rekrutmen OSIS membentuk
              kemampuan komunikasi yang lugas dan kolaborasi solid bersama tim back-end maupun desainer.
            </p>

            {/* Badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {["SMK Telkom Malang", "Front End Development", "Clean Code", "Leadership"].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          {/* Right: 3 stat cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "var(--border-faint)", border: "1px solid var(--border-faint)", borderRadius: "var(--radius)" }}>
            {stats.map((s, idx) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, x: 12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  style={{
                    background: "var(--bg-raised)",
                    padding: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1.25rem",
                    borderRadius: idx === 0 ? "var(--radius) var(--radius) 0 0" : idx === stats.length - 1 ? "0 0 var(--radius) var(--radius)" : "0",
                    transition: "background 0.2s ease",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--bg-card)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--bg-raised)"; }}
                >
                  {/* Number */}
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontStyle: "italic",
                      fontSize: "2.25rem",
                      fontWeight: 900,
                      color: "var(--accent)",
                      lineHeight: 1,
                      minWidth: "56px",
                    }}
                  >
                    {s.num}
                  </div>

                  <div>
                    <div
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        color: "var(--cream)",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {s.label}
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.4 }}>
                      {s.desc}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
