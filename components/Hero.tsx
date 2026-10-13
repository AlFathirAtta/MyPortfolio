"use client";

import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import profilePic from "@/public/Profle.jpg";
import { motion } from "framer-motion";

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0 0 5rem 0",
        position: "relative",
        background: "var(--bg-main)",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow top-right */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Large background number */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          right: "-2%",
          transform: "translateY(-60%)",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(12rem, 28vw, 26rem)",
          fontWeight: 900,
          fontStyle: "italic",
          color: "rgba(56,189,248,0.025)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          letterSpacing: "-0.05em",
        }}
      >
        FE
      </motion.div>

      <div className="container" style={{ width: "100%", position: "relative", zIndex: 1 }}>
        {/* Top row: status + photo */}
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "flex-end",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Status */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="status-pill">
              <span className="status-dot" />
              Terbuka untuk Magang &amp; Proyek Web
            </span>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{
              width: "clamp(80px, 12vw, 130px)",
              aspectRatio: "1/1",
              borderRadius: "50%",
              overflow: "hidden",
              border: "2px solid var(--border-subtle)",
              position: "relative",
              flexShrink: 0,
            }}
          >
            <Image
              src={profilePic}
              alt="Muhammad Al Fathir Attaullah"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              sizes="130px"
              priority
            />
          </motion.div>
        </div>

        {/* Big Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontStyle: "italic",
              fontSize: "clamp(3rem, 8.5vw, 7.5rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: "var(--cream)",
              marginBottom: "1rem",
            }}
          >
            Muhammad Al Fathir<br />
            <span style={{ color: "var(--accent)" }}>Attaullah</span>
          </h1>
        </motion.div>

        {/* Bottom row: role + description + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "2rem",
            marginTop: "1.5rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid var(--border-faint)",
          }}
        >
          {/* Left: role + desc */}
          <div style={{ maxWidth: "520px" }}>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.1em",
                color: "var(--accent)",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Front End Developer · Siswa RPL SMK Telkom Malang
            </div>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.95rem",
                lineHeight: 1.75,
                fontWeight: 300,
              }}
            >
              Fokus merancang antarmuka web yang bersih, responsif, dan mudah digunakan.
              Memadukan kode front-end rapi dengan pengalaman kepemimpinan organisasi nyata.
            </p>
          </div>

          {/* Right: CTAs + socials */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-end" }}>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "flex-end" }}>
              <a
                href="#projects"
                id="hero-cta-projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn btn-primary"
              >
                <span>Lihat Proyek</span>
                <ArrowRight size={14} />
              </a>

              <a
                href="#contact"
                id="hero-cta-contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn btn-secondary"
              >
                Hubungi Saya
              </a>
            </div>

            {/* Social icons */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              {[
                { href: "https://github.com/AlFathirAtta", label: "GitHub", icon: <GithubIcon size={16} /> },
                { href: "https://www.linkedin.com/in/al-fathir-attaullah-48891040b/", label: "LinkedIn", icon: <LinkedinIcon size={16} /> },
                { href: "mailto:muhammadattaullahh@gmail.com", label: "Email", icon: <Mail size={16} /> },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid var(--border-subtle)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-secondary)",
                    transition: "all 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--cream)";
                    e.currentTarget.style.borderColor = "var(--border-medium)";
                    e.currentTarget.style.background = "rgba(240,235,225,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-secondary)";
                    e.currentTarget.style.borderColor = "var(--border-subtle)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
