"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import BlueprintSheet from "@/components/ui/BlueprintSheet";

const GithubIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const projects = [
  {
    id: "situ",
    title: "SITU (Sistem Informasi Tata Usaha)",
    role: "Front End Developer",
    period: "2025",
    type: "Web Administrasi Sekolah",
    description:
      "Platform web administrasi internal sekolah untuk mempermudah digitalisasi berkas, arsip tata usaha, serta pengelolaan data siswa di SMK Telkom Malang.",
    contributions: [
      "Mengembangkan antarmuka web responsif dan ramah pengguna bagi staf tata usaha",
      "Merancang tabel data kesiswaan terstruktur untuk pencarian dan pembaruan berkas cepat",
      "Mengintegrasikan formulir administrasi dengan endpoint REST API sistem sekolah",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "REST API", "Git"],
    github: "https://github.com/AlFathirAtta",
    images: [] as string[],
    isDashboard: true,
  },
  {
    id: "neonrent",
    title: "NeonRent (Aplikasi Rental Mobil)",
    role: "Front End Developer",
    period: "2025",
    type: "Platform Reservasi Mobil",
    description:
      "Aplikasi rental armada mobil modern dengan katalog armada terfilter dinamis, proses booking instan, dan alur pembayaran QRIS otomatis.",
    contributions: [
      "Membangun antarmuka modern bertema dark mode dengan navigasi katalog yang intuitif",
      "Mengimplementasikan filter dinamis multi-kategori (transmisi, kapasitas, rentang harga)",
      "Sinkronisasi data stok unit kendaraan bersama tim Back End secara real-time",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "REST API", "Git"],
    github: "https://github.com/AlFathirAtta",
    images: ["/neonrent-home.jpg", "/neonrent-catalog.jpg"],
    isDashboard: false,
  },
];

function SituCleanPreview() {
  return (
    <div
      style={{
        position: "relative",
        aspectRatio: "16/9",
        background: "#0E1524",
        borderBottom: "1px solid var(--border-subtle)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        fontFamily: "var(--font-mono)",
      }}
    >
      {/* Chrome header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 12px",
          background: "rgba(255, 255, 255, 0.03)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#EF4444", display: "inline-block" }} />
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#F59E0B", display: "inline-block" }} />
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10B981", display: "inline-block" }} />
          <span style={{ fontSize: "10px", color: "var(--text-muted)", marginLeft: "8px" }}>
            situ.internal.smktelkom-mlg.sch.id
          </span>
        </div>
        <span style={{ fontSize: "9px", color: "var(--accent-blue)" }}>SISTEM TATA USAHA</span>
      </div>

      {/* Mock Table Layout */}
      <div style={{ flex: 1, padding: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "11px", fontWeight: 600, color: "var(--text-primary)" }}>
            DATABASE BERKAS SISWA · AKTIF
          </span>
          <span style={{ fontSize: "9px", color: "var(--accent-emerald)" }}>● 1,420 SISWA TERDATA</span>
        </div>

        <div style={{ border: "1px solid var(--border-subtle)", borderRadius: "4px", overflow: "hidden" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "30px 2fr 1fr 1fr",
              fontSize: "8.5px",
              color: "var(--text-muted)",
              background: "rgba(255, 255, 255, 0.04)",
              padding: "4px 8px",
              borderBottom: "1px solid var(--border-subtle)",
            }}
          >
            <span>NO</span>
            <span>NAMA & NIS</span>
            <span>KELAS</span>
            <span>STATUS</span>
          </div>

          {[
            { no: "01", name: "Al Fathir Attaullah (541/23)", class: "XII RPL 1", status: "VERIFIED" },
            { no: "02", name: "Aditya Pratama (542/23)", class: "XII RPL 2", status: "VERIFIED" },
            { no: "03", name: "Devina Kusuma (543/23)", class: "XI RPL 1", status: "PROSES" },
          ].map((row, idx) => (
            <div
              key={idx}
              style={{
                display: "grid",
                gridTemplateColumns: "30px 2fr 1fr 1fr",
                fontSize: "8.5px",
                color: "var(--text-secondary)",
                padding: "5px 8px",
                borderBottom: idx < 2 ? "1px solid rgba(255, 255, 255, 0.03)" : "none",
                alignItems: "center",
              }}
            >
              <span style={{ color: "var(--text-muted)" }}>{row.no}</span>
              <span style={{ color: "#FFFFFF", fontWeight: 500 }}>{row.name}</span>
              <span>{row.class}</span>
              <span style={{ color: row.status === "VERIFIED" ? "#10B981" : "#F59E0B", fontWeight: 600 }}>
                {row.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  if (images.length === 0) return null;

  return (
    <>
      <div style={{ position: "relative" }}>
        <div
          style={{
            overflow: "hidden",
            position: "relative",
            aspectRatio: "16/9",
            cursor: "pointer",
            background: "#080C14",
          }}
          onClick={() => setLightbox(true)}
          role="button"
          tabIndex={0}
          aria-label={`Lihat screenshot ${title}`}
        >
          <Image
            src={images[current]}
            alt={`${title} screenshot`}
            fill
            style={{ objectFit: "cover" }}
          />

          <div
            style={{
              position: "absolute",
              bottom: "8px",
              right: "8px",
              background: "rgba(0, 0, 0, 0.75)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "4px",
              padding: "0.2rem 0.5rem",
              fontSize: "10px",
              fontFamily: "var(--font-mono)",
              color: "#FFFFFF",
            }}
          >
            {current + 1} / {images.length}
          </div>
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrent((c) => (c - 1 + images.length) % images.length);
              }}
              style={{
                position: "absolute",
                left: "8px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(0, 0, 0, 0.65)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "4px",
                padding: "0.35rem",
                color: "#FFFFFF",
                cursor: "pointer",
              }}
              aria-label="Sebelumnya"
            >
              <ChevronLeft size={14} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrent((c) => (c + 1) % images.length);
              }}
              style={{
                position: "absolute",
                right: "8px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(0, 0, 0, 0.65)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "4px",
                padding: "0.35rem",
                color: "#FFFFFF",
                cursor: "pointer",
              }}
              aria-label="Berikutnya"
            >
              <ChevronRight size={14} />
            </button>
          </>
        )}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0, 0, 0, 0.9)",
              zIndex: 1000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
            }}
          >
            <button
              onClick={() => setLightbox(false)}
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                background: "rgba(255, 255, 255, 0.1)",
                border: "none",
                borderRadius: "4px",
                padding: "0.4rem",
                color: "#FFFFFF",
                cursor: "pointer",
              }}
            >
              <X size={20} />
            </button>
            <div
              style={{ maxWidth: "900px", width: "100%", position: "relative", aspectRatio: "16/9" }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={images[current]} alt={title} fill style={{ objectFit: "contain" }} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <BlueprintSheet id="projects" background="paper-alt">
      <div ref={ref}>
        {/* Section header */}
        <div className="section-header">
          <h2 className="section-title">Karya Proyek</h2>
          <p className="section-subtitle">
            Implementasi antarmuka web nyata dengan fokus pada kejelasan alur pengguna,
            kinerja rendering, dan integrasi data backend.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
            gap: "2rem",
          }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                boxShadow: "var(--shadow-sm)",
              }}
              className="bp-card"
            >
              {/* Preview */}
              {project.isDashboard ? (
                <SituCleanPreview />
              ) : (
                <div style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  <ImageCarousel images={project.images} title={project.title} />
                </div>
              )}

              {/* Card Body */}
              <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "1.2rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {project.title}
                    </h3>
                    <div style={{ fontSize: "12px", color: "var(--accent-blue)" }}>
                      {project.role} · {project.period}
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: "10.5px",
                      fontFamily: "var(--font-mono)",
                      color: "var(--text-muted)",
                      background: "rgba(255, 255, 255, 0.04)",
                      padding: "0.2rem 0.5rem",
                      borderRadius: "4px",
                    }}
                  >
                    {project.type}
                  </span>
                </div>

                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                    margin: "0.75rem 0 1rem 0",
                  }}
                >
                  {project.description}
                </p>

                {/* Contributions */}
                <div style={{ marginBottom: "1.25rem" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10.5px",
                      color: "var(--text-muted)",
                      marginBottom: "0.45rem",
                    }}
                  >
                    KONTRIBUSI UTAMA:
                  </div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                    {project.contributions.map((c) => (
                      <li
                        key={c}
                        style={{
                          display: "flex",
                          gap: "0.5rem",
                          fontSize: "0.825rem",
                          color: "var(--text-primary)",
                          lineHeight: 1.45,
                        }}
                      >
                        <span style={{ color: "var(--accent-blue)" }}>↳</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack & GitHub CTA */}
                <div
                  style={{
                    marginTop: "auto",
                    paddingTop: "1rem",
                    borderTop: "1px solid var(--border-subtle)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "0.75rem",
                  }}
                >
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                    {project.tech.map((t) => (
                      <span key={t} className="mono-tag" style={{ fontSize: "10px", padding: "0.15rem 0.45rem" }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                    style={{ fontSize: "0.8rem", padding: "0.4rem 0.75rem" }}
                  >
                    <GithubIcon size={14} />
                    <span>Lihat di GitHub</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </BlueprintSheet>
  );
}
