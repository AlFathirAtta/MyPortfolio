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
        minHeight: "88vh",
        display: "flex",
        alignItems: "center",
        padding: "7.5rem 0 4rem 0",
        position: "relative",
        background: "var(--bg-main)",
      }}
    >
      <div className="container" style={{ width: "100%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.25fr 0.75fr",
            gap: "3.5rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left Column: Clean Typography & Presentation */}
          <div>
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{ marginBottom: "1.25rem" }}
            >
              <span className="status-pill">
                <span className="status-dot" />
                <span>Terbuka untuk Magang & Proyek Web</span>
              </span>
            </motion.div>

            {/* Name Headline */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
            >
              <h1
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "clamp(2.5rem, 5vw, 3.65rem)",
                  lineHeight: 1.1,
                  color: "#FFFFFF",
                  letterSpacing: "-0.03em",
                  marginBottom: "0.85rem",
                }}
              >
                Muhammad Al Fathir Attaullah
              </h1>

              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1.15rem",
                  color: "var(--accent-blue)",
                  fontWeight: 500,
                  marginBottom: "1.25rem",
                }}
              >
                Front End Developer · Siswa RPL SMK Telkom Malang
              </div>
            </motion.div>

            {/* Clean Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.16 }}
              style={{
                color: "var(--text-secondary)",
                fontSize: "1rem",
                lineHeight: 1.7,
                maxWidth: "54ch",
                marginBottom: "2rem",
              }}
            >
              Fokus merancang dan membangun antarmuka web yang bersih, responsif, dan mudah digunakan.
              Memadukan kerapian kode front-end dengan pengalaman kepemimpinan organisasi nyata.
            </motion.p>

            {/* Action Buttons & Socials */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.24 }}
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "2.5rem",
              }}
            >
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
                <ArrowRight size={15} />
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
                <span>Hubungi Saya</span>
              </a>

              {/* Social icons */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginLeft: "0.5rem" }}>
                <a
                  href="https://github.com/AlFathirAtta"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "6px",
                    border: "1px solid var(--border-subtle)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-secondary)",
                    transition: "all 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#FFFFFF";
                    e.currentTarget.style.borderColor = "var(--border-medium)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-secondary)";
                    e.currentTarget.style.borderColor = "var(--border-subtle)";
                  }}
                >
                  <GithubIcon size={17} />
                </a>

                <a
                  href="https://www.linkedin.com/in/al-fathir-attaullah-48891040b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "6px",
                    border: "1px solid var(--border-subtle)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-secondary)",
                    transition: "all 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#FFFFFF";
                    e.currentTarget.style.borderColor = "var(--border-medium)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-secondary)";
                    e.currentTarget.style.borderColor = "var(--border-subtle)";
                  }}
                >
                  <LinkedinIcon size={17} />
                </a>

                <a
                  href="mailto:muhammadattaullahh@gmail.com"
                  aria-label="Email"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "6px",
                    border: "1px solid var(--border-subtle)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-secondary)",
                    transition: "all 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#FFFFFF";
                    e.currentTarget.style.borderColor = "var(--border-medium)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-secondary)";
                    e.currentTarget.style.borderColor = "var(--border-subtle)";
                  }}
                >
                  <Mail size={17} />
                </a>
              </div>
            </motion.div>

            {/* Simple Tech Stack Footnote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                color: "var(--text-muted)",
              }}
            >
              <span>STACK:</span>
              <span style={{ color: "var(--text-secondary)" }}>
                HTML5 · CSS3 · JavaScript (ES6+) · React · Next.js · Git
              </span>
            </motion.div>
          </div>

          {/* Right Column: Clean, Dignified Photo Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "340px",
                aspectRatio: "3/4",
                borderRadius: "var(--radius)",
                overflow: "hidden",
                border: "1px solid var(--border-medium)",
                background: "var(--bg-surface)",
                position: "relative",
              }}
            >
              <Image
                src={profilePic}
                alt="Muhammad Al Fathir Attaullah"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                sizes="(max-width: 768px) 80vw, 340px"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
