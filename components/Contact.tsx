"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle, Download, CheckCircle, Copy, Check, ExternalLink } from "lucide-react";
import Image from "next/image";
import profilePic from "@/public/Profle.jpg";
import SectionShell from "@/components/ui/BlueprintSheet";

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

const contactInfo = [
  { icon: Mail, label: "Email", value: "muhammadattaullahh@gmail.com", href: "mailto:muhammadattaullahh@gmail.com", note: "< 24 jam" },
  { icon: MessageCircle, label: "WhatsApp", value: "+62 878-3130-5958", href: "https://wa.me/6287831305958", note: "Chat langsung" },
  { icon: MapPin, label: "Lokasi", value: "Malang, Jawa Timur", href: "https://maps.google.com/?q=Malang+Jawa+Timur", note: "SMK Telkom" },
];

const socials = [
  { Icon: GithubIcon, label: "GitHub", value: "AlFathirAtta", href: "https://github.com/AlFathirAtta" },
  { Icon: LinkedinIcon, label: "LinkedIn", value: "al-fathir-attaullah", href: "https://www.linkedin.com/in/al-fathir-attaullah-48891040b/" },
];

type FormStatus = "idle" | "sending" | "success";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.8rem 1rem",
  borderRadius: "var(--radius-sm)",
  background: "rgba(240,235,225,0.04)",
  border: "1px solid var(--border-subtle)",
  color: "var(--text-primary)",
  fontFamily: "var(--font-body)",
  fontSize: "0.9rem",
  outline: "none",
  transition: "border-color 0.15s ease",
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("muhammadattaullahh@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    const subject = encodeURIComponent(`[KOLABORASI] Pesan dari ${form.name}`);
    const body = encodeURIComponent(
      `Halo Fathir,\n\nNama: ${form.name}\nEmail: ${form.email}\n\nPesan:\n${form.message}\n\n---\nDikirim melalui Portofolio`
    );
    window.open(`mailto:muhammadattaullahh@gmail.com?subject=${subject}&body=${body}`);
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    }, 600);
  };

  return (
    <SectionShell id="contact">
      <div ref={ref} style={{ width: "100%" }}>
        <div className="section-eyebrow">Kontak</div>

        {/* Large CTA headline */}
        <div style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 900,
              fontSize: "clamp(2rem, 5vw, 4rem)",
              color: "var(--cream)",
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              marginBottom: "1rem",
            }}
          >
            Mari terhubung<br />
            <span style={{ color: "var(--accent)" }}>&amp; berdiskusi.</span>
          </h2>
          <p className="section-subtitle">
            Terbuka untuk peluang magang, proyek antarmuka web, kolaborasi kompetisi,
            maupun diskusi seputar front-end development.
          </p>
        </div>

        {/* 2-col grid */}
        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.1fr",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            {/* Profile mini */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1.25rem",
                background: "var(--bg-surface)",
                border: "1px solid var(--border-faint)",
                borderRadius: "var(--radius)",
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  position: "relative",
                  border: "2px solid var(--accent)",
                  flexShrink: 0,
                }}
              >
                <Image src={profilePic} alt="Al Fathir" fill style={{ objectFit: "cover", objectPosition: "center top" }} sizes="52px" />
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--accent)", letterSpacing: "0.08em", marginBottom: "0.2rem" }}>FRONT END DEVELOPER</div>
                <div style={{ fontWeight: 600, fontSize: "0.95rem", color: "var(--cream)" }}>Muhammad Al Fathir Attaullah</div>
                <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>SMK Telkom Malang</div>
              </div>
            </div>

            {/* Quick actions */}
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="btn btn-secondary"
                style={{ flex: 1, justifyContent: "center", fontSize: "0.83rem" }}
              >
                {copied ? <Check size={14} style={{ color: "#10B981" }} /> : <Copy size={14} />}
                {copied ? "Disalin!" : "Salin Email"}
              </button>
              <a
                href="https://wa.me/6287831305958"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ flex: 1, justifyContent: "center", fontSize: "0.83rem" }}
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
            </div>

            <a
              href="/cv.pdf"
              download
              id="contact-download-cv"
              className="btn btn-ghost"
              style={{ justifyContent: "center", fontSize: "0.875rem" }}
            >
              <Download size={14} />
              Unduh CV Lengkap (PDF)
            </a>

            {/* Contact channels */}
            <div
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--border-faint)",
                borderRadius: "var(--radius)",
                overflow: "hidden",
              }}
            >
              {contactInfo.map((info, i) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "0.9rem 1.25rem",
                    borderBottom: i < contactInfo.length - 1 ? "1px solid var(--border-faint)" : "none",
                    color: "inherit",
                    transition: "background 0.15s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(240,235,225,0.03)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <info.icon size={15} style={{ color: "var(--accent)", flexShrink: 0 }} />
                    <div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "9.5px", color: "var(--text-muted)", letterSpacing: "0.08em" }}>
                        {info.label.toUpperCase()}
                      </div>
                      <div style={{ fontSize: "0.85rem", color: "var(--cream)", fontWeight: 500 }}>
                        {info.value}
                      </div>
                    </div>
                  </div>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "9.5px", color: "var(--text-muted)" }}>
                    {info.note}
                  </span>
                </a>
              ))}
            </div>

            {/* Socials */}
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                  style={{ flex: 1, justifyContent: "center", fontSize: "0.83rem", gap: "0.5rem" }}
                >
                  <s.Icon size={15} />
                  {s.label}
                  <ExternalLink size={11} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--border-faint)",
              borderRadius: "var(--radius)",
              overflow: "hidden",
            }}
          >
            {/* Form header */}
            <div
              style={{
                padding: "1.25rem 1.5rem",
                borderBottom: "1px solid var(--border-faint)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <div style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.95rem", color: "var(--cream)" }}>
                  Kirim Pesan
                </div>
                <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>Langsung ke inbox email</div>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  padding: "0.2rem 0.5rem",
                  background: "rgba(16,185,129,0.08)",
                  border: "1px solid rgba(16,185,129,0.25)",
                  borderRadius: "var(--radius-sm)",
                  color: "#10B981",
                }}
              >
                ONLINE
              </span>
            </div>

            <div style={{ padding: "1.5rem" }}>
              <form onSubmit={handleSubmit}>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "10.5px", color: "var(--text-muted)", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>
                      NAMA *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Nama Anda"
                      required
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = "var(--accent)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "var(--border-subtle)"; }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "10.5px", color: "var(--text-muted)", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>
                      EMAIL *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="email@perusahaan.com"
                      required
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = "var(--accent)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "var(--border-subtle)"; }}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "10.5px", color: "var(--text-muted)", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>
                      PESAN *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Proyek, peluang magang, atau diskusi teknis..."
                      required
                      rows={5}
                      style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                      onFocus={(e) => { e.target.style.borderColor = "var(--accent)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "var(--border-subtle)"; }}
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-submit"
                    disabled={status === "sending"}
                    className="btn btn-primary"
                    style={{ justifyContent: "center", width: "100%", padding: "0.85rem" }}
                  >
                    {status === "sending" ? (
                      "Mengirim..."
                    ) : (
                      <>
                        <Send size={14} />
                        Kirim Pesan
                      </>
                    )}
                  </button>

                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.75rem 1rem",
                        borderRadius: "var(--radius-sm)",
                        border: "1px solid rgba(16,185,129,0.3)",
                        background: "rgba(16,185,129,0.07)",
                        color: "#34D399",
                        fontSize: "0.875rem",
                      }}
                    >
                      <CheckCircle size={15} />
                      Aplikasi email terbuka. Pesan siap dikirim ke Fathir.
                    </motion.div>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: "5rem",
            paddingTop: "2rem",
            borderTop: "1px solid var(--border-faint)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 700, fontSize: "1.1rem", color: "var(--cream)" }}>
              Muhammad Al Fathir Attaullah
            </div>
            <div style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>
              © 2026 · SMK Telkom Malang · Front End Development
            </div>
          </div>

          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10.5px",
              color: "var(--text-muted)",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <span>Built with Next.js</span>
            <span style={{ color: "var(--border-subtle)" }}>·</span>
            <span style={{ color: "var(--accent)" }}>Malang, Indonesia</span>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
