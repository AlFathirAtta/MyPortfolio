"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, X, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import SectionShell from "@/components/ui/BlueprintSheet";

const GithubIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const projects = [
  {
    id: "situ",
    num: "01",
    title: "SITU",
    fullTitle: "Sistem Informasi Tata Usaha",
    role: "Front End Developer",
    period: "2025",
    type: "Web Administrasi Sekolah",
    description:
      "Platform administrasi internal sekolah untuk digitalisasi berkas, arsip tata usaha, dan pengelolaan data siswa di SMK Telkom Malang.",
    contributions: [
      "Antarmuka responsif untuk staf tata usaha",
      "Tabel data siswa terstruktur dengan pencarian cepat",
      "Integrasi formulir dengan REST API sistem sekolah",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "REST API", "Git"],
    github: "https://github.com/AlFathirAtta",
    images: [] as string[],
    isDashboard: true,
  },
  {
    id: "neonrent",
    num: "02",
    title: "NeonRent",
    fullTitle: "Aplikasi Rental Mobil",
    role: "Front End Developer",
    period: "2025",
    type: "Platform Reservasi",
    description:
      "Aplikasi rental mobil modern dengan katalog terfilter dinamis, booking instan, dan pembayaran QRIS otomatis.",
    contributions: [
      "Dark mode UI dengan navigasi katalog intuitif",
      "Filter multi-kategori: transmisi, kapasitas, harga",
      "Sinkronisasi stok kendaraan real-time bersama tim",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "REST API", "Git"],
    github: "https://github.com/AlFathirAtta",
    images: ["/neonrent-home.jpg", "/neonrent-catalog.jpg"],
    isDashboard: false,
  },
];

function SituPreview() {
  return (
    <div
      style={{
        position: "relative",
        aspectRatio: "16/9",
        background: "#0A0A0A",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        fontFamily: "var(--font-mono)",
      }}
    >
      {/* Browser chrome */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "8px 12px",
          background: "rgba(255,255,255,0.03)",
          borderBottom: "1px solid var(--border-faint)",
        }}
      >
        <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#EF4444", display: "inline-block" }} />
        <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#F59E0B", display: "inline-block" }} />
        <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#10B981", display: "inline-block" }} />
        <span style={{ fontSize: "9px", color: "var(--text-muted)", marginLeft: "8px" }}>
          situ.internal.smktelkom-mlg.sch.id
        </span>
      </div>

      {/* Mock content */}
      <div style={{ flex: 1, padding: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "10px", fontWeight: 600, color: "var(--cream)" }}>DATABASE BERKAS SISWA</span>
          <span style={{ fontSize: "9px", color: "#10B981" }}>● 1,420 SISWA</span>
        </div>

        <div style={{ border: "1px solid var(--border-faint)", borderRadius: "3px", overflow: "hidden" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "28px 2fr 1fr 1fr",
              fontSize: "8px",
              color: "var(--text-muted)",
              background: "rgba(255,255,255,0.03)",
              padding: "4px 8px",
              borderBottom: "1px solid var(--border-faint)",
            }}
          >
            <span>NO</span><span>NAMA & NIS</span><span>KELAS</span><span>STATUS</span>
          </div>

          {[
            { no: "01", name: "Al Fathir Attaullah (541/23)", class: "XII RPL 1", status: "VERIFIED", ok: true },
            { no: "02", name: "Aditya Pratama (542/23)", class: "XII RPL 2", status: "VERIFIED", ok: true },
            { no: "03", name: "Devina Kusuma (543/23)", class: "XI RPL 1", status: "PROSES", ok: false },
          ].map((row, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "28px 2fr 1fr 1fr",
                fontSize: "8px",
                color: "var(--text-secondary)",
                padding: "5px 8px",
                borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.02)" : "none",
                alignItems: "center",
              }}
            >
              <span style={{ color: "var(--text-muted)" }}>{row.no}</span>
              <span style={{ color: "var(--cream)", fontWeight: 500 }}>{row.name}</span>
              <span>{row.class}</span>
              <span style={{ color: row.ok ? "#10B981" : "#F59E0B", fontWeight: 600 }}>{row.status}</span>
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
            cursor: "zoom-in",
            background: "#080808",
          }}
          onClick={() => setLightbox(true)}
          role="button"
          tabIndex={0}
          aria-label={`Lihat screenshot ${title}`}
        >
          <Image src={images[current]} alt={`${title} screenshot`} fill style={{ objectFit: "cover" }} />
          <div
            style={{
              position: "absolute",
              bottom: "8px",
              right: "8px",
              background: "rgba(0,0,0,0.8)",
              borderRadius: "3px",
              padding: "0.2rem 0.5rem",
              fontSize: "10px",
              fontFamily: "var(--font-mono)",
              color: "var(--cream)",
            }}
          >
            {current + 1}/{images.length}
          </div>
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); setCurrent((c) => (c - 1 + images.length) % images.length); }}
              style={{ position: "absolute", left: "8px", top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.7)", border: "none", borderRadius: "3px", padding: "0.35rem", color: "#fff", cursor: "pointer" }}
              aria-label="Sebelumnya"
            >
              <ChevronLeft size={14} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setCurrent((c) => (c + 1) % images.length); }}
              style={{ position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.7)", border: "none", borderRadius: "3px", padding: "0.35rem", color: "#fff", cursor: "pointer" }}
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
              background: "rgba(0,0,0,0.95)",
              zIndex: 1000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
            }}
          >
            <button
              onClick={() => setLightbox(false)}
              style={{ position: "absolute", top: "1.5rem", right: "1.5rem", background: "rgba(255,255,255,0.08)", border: "none", borderRadius: "4px", padding: "0.4rem", color: "#fff", cursor: "pointer" }}
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
    <SectionShell id="projects" alt>
      <div ref={ref}>
        <div className="section-eyebrow">Karya Proyek</div>
        <h2 className="section-title" style={{ marginBottom: "3rem" }}>
          Yang sudah saya bangun
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              style={{
                background: "var(--bg-main)",
                border: "1px solid var(--border-faint)",
                borderRadius: "var(--radius)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "border-color 0.2s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-faint)"; }}
            >
              {/* Preview */}
              {project.isDashboard ? <SituPreview /> : (
                <ImageCarousel images={project.images} title={project.title} />
              )}

              {/* Body */}
              <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column", gap: "1rem" }}>
                {/* Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "10.5px",
                        color: "var(--accent)",
                        letterSpacing: "0.08em",
                        marginBottom: "0.3rem",
                      }}
                    >
                      {project.num} — {project.type}
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontStyle: "italic",
                        fontWeight: 700,
                        fontSize: "1.35rem",
                        color: "var(--cream)",
                        lineHeight: 1.2,
                      }}
                    >
                      {project.title}
                    </h3>
                    <div style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "0.15rem" }}>
                      {project.fullTitle} · {project.period}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.875rem",
                    lineHeight: 1.7,
                    fontWeight: 300,
                  }}
                >
                  {project.description}
                </p>

                {/* Contributions */}
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                  {project.contributions.map((c) => (
                    <li
                      key={c}
                      style={{
                        display: "flex",
                        gap: "0.5rem",
                        fontSize: "0.825rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.5,
                      }}
                    >
                      <span style={{ color: "var(--accent)", marginTop: "1px", flexShrink: 0 }}>—</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div
                  style={{
                    marginTop: "auto",
                    paddingTop: "1rem",
                    borderTop: "1px solid var(--border-faint)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "0.75rem",
                    flexWrap: "wrap",
                  }}
                >
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                    {project.tech.map((t) => (
                      <span key={t} className="tag" style={{ fontSize: "10px" }}>{t}</span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                    style={{ fontSize: "0.8rem", padding: "0.35rem 0.75rem", gap: "0.4rem" }}
                  >
                    <GithubIcon size={13} />
                    GitHub
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
