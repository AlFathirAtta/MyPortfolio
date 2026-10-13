"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

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

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection("#" + entry.target.id);
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
            height: "1px",
            background: "var(--accent)",
            transformOrigin: "left",
            scaleX,
            zIndex: 101,
            opacity: scrolled ? 0.7 : 0,
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
          {/* Wordmark */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontStyle: "italic",
              fontSize: "1.2rem",
              color: "var(--cream)",
              letterSpacing: "-0.02em",
            }}
            aria-label="Ke atas — Muhammad Al Fathir Attaullah"
          >
            Atta<span style={{ color: "var(--accent)" }}>.</span>
          </a>

          {/* Desktop Nav */}
          <div
            className="desktop-nav"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
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
                    cursor: "pointer",
                    padding: "0.45rem 0.9rem",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    fontWeight: isActive ? 500 : 400,
                    color: isActive ? "var(--cream)" : "var(--text-secondary)",
                    transition: "color 0.15s ease",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) (e.currentTarget).style.color = "var(--cream)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) (e.currentTarget).style.color = "var(--text-secondary)";
                  }}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      style={{
                        position: "absolute",
                        bottom: "4px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: "var(--accent)",
                        display: "block",
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                </button>
              );
            })}

            <a
              href="/cv.pdf"
              download
              id="nav-download-cv"
              className="btn btn-primary"
              style={{ marginLeft: "0.75rem", padding: "0.5rem 1.1rem", fontSize: "0.83rem" }}
            >
              <Download size={13} />
              Unduh CV
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-menu-btn"
            id="nav-mobile-toggle"
            style={{
              display: "none",
              background: "none",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius)",
              cursor: "pointer",
              color: "var(--cream)",
              padding: "0.4rem 0.55rem",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Buka/tutup menu navigasi"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
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
                background: "rgba(8, 13, 24, 0.97)",
                borderTop: "1px solid var(--border-faint)",
                overflow: "hidden",
                backdropFilter: "blur(20px)",
              }}
            >
              <div
                className="container"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.1rem",
                  padding: "1rem var(--container-padding) 1.25rem",
                }}
              >
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href;
                  return (
                    <button
                      key={link.href}
                      onClick={() => handleNavClick(link.href)}
                      style={{
                        background: "none",
                        border: "none",
                        borderLeft: isActive ? "2px solid var(--accent)" : "2px solid transparent",
                        cursor: "pointer",
                        padding: "0.75rem 0.85rem",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.95rem",
                        fontWeight: isActive ? 500 : 400,
                        color: isActive ? "var(--cream)" : "var(--text-secondary)",
                        textAlign: "left",
                        transition: "all 0.15s ease",
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
                  style={{ marginTop: "0.75rem", justifyContent: "center" }}
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