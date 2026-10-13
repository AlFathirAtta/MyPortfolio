"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import Image from "next/image";
import profilePic from "@/public/profile.jpg";

const navLinks = [
  { href: "#about",        label: "Tentang" },
  { href: "#skills",       label: "Keahlian" },
  { href: "#projects",     label: "Proyek" },
  { href: "#organization", label: "Organisasi" },
  { href: "#achievements", label: "Prestasi" },
  { href: "#contact",      label: "Kontak" },
];

export default function Navbar() {
  const [scrolled,      setScrolled]      = useState(false);
  const [mobileOpen,    setMobileOpen]    = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Scroll progress for the thin bar below nav
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection("#" + entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const sheetLabels: Record<string, string> = {
    "#about":        "Sheet 02",
    "#skills":       "Sheet 03",
    "#projects":     "Sheet 04",
    "#organization": "Sheet 05",
    "#achievements": "Sheet 05B",
    "#contact":      "Sheet 06",
  };
  const currentSheet = sheetLabels[activeSection] ?? "Sheet 01";

  return (
    <>
      <nav
        className={`navbar${scrolled ? " scrolled" : ""}`}
        role="navigation"
        aria-label="Navigasi utama"
      >
        {/* Scroll progress bar */}
        <motion.div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "var(--blue-bright)",
            transformOrigin: "left",
            scaleX,
            zIndex: 101,
            opacity: scrolled ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "64px",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              fontSize: "1.05rem",
              color: "var(--blue-primary)",
              letterSpacing: "-0.01em",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
            aria-label="Ke atas — Muhammad Al Fathir Attaullah"
          >
            {/* Profile avatar */}
            <div
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                overflow: "hidden",
                position: "relative",
                border: "1.5px solid var(--grid-line)",
                flexShrink: 0,
              }}
            >
              <Image
                src={profilePic}
                alt="Al Fathir Attaullah"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                sizes="28px"
                priority
              />
            </div>
            PortAtta
          </a>

          {/* Desktop Nav */}
          <div
            className="desktop-nav"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.1rem",
            }}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <button
                  key={link.href}
                  id={`nav-${link.href.replace("#", "")}`}
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    background: "none",
                    border: "none",
                    borderBottom: isActive ? "2px solid var(--blue-bright)" : "2px solid transparent",
                    cursor: "pointer",
                    padding: "0.4rem 0.85rem",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9rem",
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? "var(--blue-primary)" : "var(--ink-muted)",
                    transition: "all var(--transition-fast)",
                    marginBottom: "-1px",  /* align to navbar border */
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.currentTarget).style.color = "var(--ink)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.currentTarget).style.color = "var(--ink-muted)";
                    }
                  }}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </button>
              );
            })}

            <a
              href="/cv.pdf"
              download
              id="nav-download-cv"
              className="btn btn-secondary"
              style={{ marginLeft: "0.75rem", padding: "0.45rem 1rem", fontSize: "0.875rem" }}
            >
              <Download size={14} />
              Unduh CV
            </a>

            {/* Section 6.5: Nomor Sheet sebagai Progress — animated transition */}
            <div
              id="nav-sheet-progress"
              style={{
                marginLeft: "0.5rem",
                padding: "0.3rem 0.65rem",
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--blue-primary)",
                border: "1px solid var(--grid-line)",
                borderRadius: "var(--radius)",
                background: "var(--paper-alt)",
                letterSpacing: "0.06em",
                fontWeight: 500,
                position: "relative",
                overflow: "hidden",
                minWidth: "72px",
                textAlign: "center",
              }}
              aria-label="Nomor sheet aktif"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentSheet}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  style={{ display: "block" }}
                >
                  {currentSheet}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-menu-btn"
            id="nav-mobile-toggle"
            style={{
              display: "none",
              background: "none",
              border: "1px solid var(--grid-line)",
              borderRadius: "var(--radius)",
              cursor: "pointer",
              color: "var(--ink)",
              padding: "0.35rem 0.5rem",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Buka/tutup menu navigasi"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              style={{
                background: "var(--paper-alt)",
                borderTop: "1px solid var(--grid-line)",
                overflow: "hidden",
              }}
            >
              <div
                className="container"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.1rem",
                  padding: "0.75rem var(--container-padding) 1rem",
                }}
              >
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href;
                  return (
                    <button
                      key={link.href}
                      onClick={() => handleNavClick(link.href)}
                      style={{
                        background: isActive ? "rgba(79,166,232,0.08)" : "none",
                        border: "none",
                        borderLeft: isActive ? "2px solid var(--blue-bright)" : "2px solid transparent",
                        cursor: "pointer",
                        padding: "0.7rem 0.85rem",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.95rem",
                        fontWeight: isActive ? 600 : 400,
                        color: isActive ? "var(--blue-primary)" : "var(--ink-muted)",
                        textAlign: "left",
                        transition: "all var(--transition-fast)",
                      }}
                    >
                      {link.label}
                    </button>
                  );
                })}
                <a
                  href="/cv.pdf"
                  download
                  className="btn btn-primary"
                  style={{ marginTop: "0.5rem", justifyContent: "center" }}
                >
                  <Download size={14} />
                  Unduh CV
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
