"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle, Download, CheckCircle, Copy, Check, ExternalLink } from "lucide-react";
import Image from "next/image";
import profilePic from "@/public/Profle.jpg";
import BlueprintSheet from "@/components/ui/BlueprintSheet";

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
  { icon: Mail, label: "Email", value: "muhammadattaullahh@gmail.com", href: "mailto:muhammadattaullahh@gmail.com", note: "Respon < 24 jam" },
  { icon: MessageCircle, label: "WhatsApp", value: "+62 878-3130-5958", href: "https://wa.me/6287831305958", note: "Chat langsung" },
  { icon: Phone, label: "Telepon", value: "+62 878-3130-5958", href: "tel:+6287831305958", note: "Jam kerja" },
  { icon: MapPin, label: "Lokasi", value: "Malang, Jawa Timur", href: "https://maps.google.com/?q=Malang+Jawa+Timur", note: "SMK Telkom" },
];

const socials = [
  { icon: GithubIcon, label: "GitHub", value: "AlFathirAtta", href: "https://github.com/AlFathirAtta", desc: "Repositori kode & eksperimen open-source" },
  { icon: LinkedinIcon, label: "LinkedIn", value: "al-fathir-attaullah", href: "https://www.linkedin.com/in/al-fathir-attaullah-48891040b/", desc: "Profil profesional & koneksi karier" },
];

type FormStatus = "idle" | "sending" | "success";

const inputBase: React.CSSProperties = {
  width: "100%",
  padding: "0.85rem 1rem",
  borderRadius: "var(--radius-sm)",
  background: "rgba(255, 255, 255, 0.03)",
  border: "1px solid var(--border-subtle)",
  color: "var(--text-primary)",
  fontFamily: "var(--font-body)",
  fontSize: "0.925rem",
  outline: "none",
  transition: "border-color 0.15s ease, box-shadow 0.15s ease",
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
      `Halo Fathir,\n\nNama: ${form.name}\nEmail: ${form.email}\n\nPesan:\n${form.message}\n\n---\nDikirim melalui Formulir Portofolio Pribadi`
    );
    window.open(`mailto:muhammadattaullahh@gmail.com?subject=${subject}&body=${body}`);
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    }, 600);
  };

  return (
    <BlueprintSheet
      id="contact"
      sheetNumber="Sheet 06 — Kanal Komunikasi"
      background="paper"
    >
      <div ref={ref} style={{ width: "100%" }}>
        {/* Section header */}
        <div className="section-header">
          <h2 className="section-title">Mari Terhubung & Berdiskusi</h2>
          <p className="section-subtitle">
            Terbuka untuk peluang magang vokasi, proyek antarmuka web, kolaborasi kompetisi,
            maupun diskusi seputar rekayasa front-end.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.15fr",
            gap: "2.25rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Info & Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.45 }}
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            {/* Engineer Profile Card */}
            <div
              className="bp-card"
              style={{
                padding: "1.35rem",
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
                background: "var(--bg-surface)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius)",
              }}
            >
              <div
                style={{
                  width: "68px",
                  height: "68px",
                  borderRadius: "var(--radius-sm)",
                  overflow: "hidden",
                  position: "relative",
                  border: "2px solid var(--accent-blue)",
                  flexShrink: 0,
                }}
              >
                <Image
                  src={profilePic}
                  alt="Muhammad Al Fathir Attaullah"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  sizes="68px"
                />
              </div>

              <div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "var(--accent-blue)",
                    letterSpacing: "0.05em",
                    marginBottom: "0.2rem",
                  }}
                >
                  FRONT END DEVELOPER
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "1.15rem",
                    color: "var(--text-primary)",
                    marginBottom: "0.2rem",
                  }}
                >
                  Muhammad Al Fathir Attaullah
                </div>
                <div style={{ fontSize: "12px", color: "var(--text-secondary)" }}>
                  SMK Telkom Malang · Rekayasa Perangkat Lunak
                </div>
              </div>
            </div>

            {/* Quick 1-Click Copy Email & Direct WhatsApp CTA */}
            <div
              className="bp-card"
              style={{
                padding: "1.35rem",
                background: "var(--bg-surface)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius)",
                display: "flex",
                flexDirection: "column",
                gap: "0.85rem",
              }}
            >
              <div style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-muted)" }}>
                AKSI CEPAT:
              </div>

              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn btn-secondary"
                  style={{ flex: 1, justifyContent: "center", fontSize: "0.875rem", gap: "0.45rem" }}
                >
                  {copied ? <Check size={15} style={{ color: "var(--accent-emerald)" }} /> : <Copy size={15} />}
                  <span>{copied ? "Email Disalin!" : "Salin Email"}</span>
                </button>

                <a
                  href="https://wa.me/6287831305958"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ flex: 1, justifyContent: "center", fontSize: "0.875rem", gap: "0.45rem" }}
                >
                  <MessageCircle size={15} />
                  <span>Kirim WhatsApp</span>
                </a>
              </div>

              <a
                href="/cv.pdf"
                download
                id="contact-download-cv"
                className="btn btn-ghost"
                style={{ width: "100%", justifyContent: "center", fontSize: "0.875rem", gap: "0.5rem" }}
              >
                <Download size={15} />
                <span>Unduh CV Lengkap (PDF)</span>
              </a>
            </div>

            {/* Contact Channels List */}
            <div
              className="bp-card"
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  padding: "0.75rem 1.25rem",
                  borderBottom: "1px solid var(--border-subtle)",
                  background: "rgba(255, 255, 255, 0.02)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "var(--accent-blue)",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>SALURAN LANGSUNG</span>
                <span style={{ color: "var(--text-muted)" }}>RESPONS CEPAT</span>
              </div>

              {contactInfo.map((info, i) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "32px 1fr auto",
                    gap: "0.85rem",
                    alignItems: "center",
                    padding: "0.85rem 1.25rem",
                    borderBottom: i < contactInfo.length - 1 ? "1px solid var(--border-subtle)" : "none",
                    color: "inherit",
                    transition: "background 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <info.icon size={16} style={{ color: "var(--accent-blue)" }} />
                  <div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-muted)" }}>
                      {info.label.toUpperCase()}
                    </div>
                    <div style={{ fontSize: "0.875rem", color: "var(--text-primary)", fontWeight: 500 }}>
                      {info.value}
                    </div>
                  </div>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--accent-emerald)" }}>
                    {info.note}
                  </span>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div
              className="bp-card"
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  padding: "0.75rem 1.25rem",
                  borderBottom: "1px solid var(--border-subtle)",
                  background: "rgba(255, 255, 255, 0.02)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "var(--accent-blue)",
                }}
              >
                JEJARING SOSIAL & KODE
              </div>

              {socials.map((social, i) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.85rem 1.25rem",
                    borderBottom: i < socials.length - 1 ? "1px solid var(--border-subtle)" : "none",
                    color: "inherit",
                    transition: "background 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                    <social.icon size={17} />
                    <div>
                      <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--text-primary)" }}>
                        {social.label}
                      </div>
                      <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>
                        {social.desc}
                      </div>
                    </div>
                  </div>
                  <ExternalLink size={13} style={{ color: "var(--text-muted)" }} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Direct Message Form */}
          <motion.div
            className="bp-card"
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.1 }}
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius)",
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: "1.1rem 1.5rem",
                borderBottom: "1px solid var(--border-subtle)",
                background: "rgba(255, 255, 255, 0.02)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)" }}>
                  Kirim Pesan Langsung
                </div>
                <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>
                  Terkirim langsung ke inbox email resmi
                </div>
              </div>

              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  padding: "0.2rem 0.5rem",
                  background: "rgba(16, 185, 129, 0.1)",
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                  borderRadius: "var(--radius-sm)",
                  color: "var(--accent-emerald)",
                }}
              >
                ONLINE
              </span>
            </div>

            <div style={{ padding: "1.5rem" }}>
              <form onSubmit={handleSubmit}>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      style={{
                        display: "block",
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        color: "var(--text-secondary)",
                        marginBottom: "0.4rem",
                      }}
                    >
                      NAMA LENGKAP *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Contoh: Bpk. Hendra / HRD Tim"
                      required
                      style={inputBase}
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--accent-blue)";
                        e.target.style.boxShadow = "0 0 0 2px rgba(56, 189, 248, 0.15)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "var(--border-subtle)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      style={{
                        display: "block",
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        color: "var(--text-secondary)",
                        marginBottom: "0.4rem",
                      }}
                    >
                      ALAMAT EMAIL *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="nama@perusahaan.com"
                      required
                      style={inputBase}
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--accent-blue)";
                        e.target.style.boxShadow = "0 0 0 2px rgba(56, 189, 248, 0.15)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "var(--border-subtle)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      style={{
                        display: "block",
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        color: "var(--text-secondary)",
                        marginBottom: "0.4rem",
                      }}
                    >
                      ISI PESAN ATAU PENAWARAN PROYEK *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Jelaskan kebutuhan proyek, posisi magang, atau ajakan diskusi teknis..."
                      required
                      rows={5}
                      style={{ ...inputBase, resize: "vertical", minHeight: "130px" }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--accent-blue)";
                        e.target.style.boxShadow = "0 0 0 2px rgba(56, 189, 248, 0.15)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "var(--border-subtle)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="contact-submit"
                    disabled={status === "sending"}
                    className="btn btn-primary"
                    style={{
                      justifyContent: "center",
                      width: "100%",
                      padding: "0.8rem 1rem",
                      fontSize: "0.925rem",
                    }}
                  >
                    {status === "sending" ? (
                      <>Mengirim Pesan...</>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Kirim Pesan Sekarang</span>
                      </>
                    )}
                  </button>

                  {/* Success Feedback */}
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.6rem",
                        padding: "0.75rem 1rem",
                        borderRadius: "var(--radius-sm)",
                        border: "1px solid rgba(16, 185, 129, 0.4)",
                        background: "rgba(16, 185, 129, 0.1)",
                        color: "#34D399",
                        fontSize: "0.875rem",
                      }}
                    >
                      <CheckCircle size={16} />
                      <span>Aplikasi email dibuka! Pesan Anda siap dikirimkan ke Fathir.</span>
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
            marginTop: "4.5rem",
            paddingTop: "2rem",
            borderTop: "1px solid var(--border-subtle)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <div style={{ color: "var(--text-primary)", fontSize: "0.9rem", fontWeight: 700 }}>
              © 2026 Muhammad Al Fathir Attaullah
            </div>
            <div style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginTop: "0.2rem" }}>
              SMK Telkom Malang · Rekayasa Perangkat Lunak · Front End Development
            </div>
          </div>

          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--text-muted)",
              display: "flex",
              alignItems: "center",
              gap: "1.25rem",
            }}
          >
            <span>HAND-CRAFTED WITH REACT & NEXT.JS</span>
            <span>//</span>
            <span style={{ color: "var(--accent-blue)" }}>MALANG, INDONESIA</span>
          </div>
        </div>
      </div>
    </BlueprintSheet>
  );
}
