"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Blueprint grid lines that animate in
function GridLines() {
  return (
    <svg
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
      aria-hidden="true"
    >
      <defs>
        <pattern id="splash-grid-minor" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
        </pattern>
        <pattern id="splash-grid-major" width="120" height="120" patternUnits="userSpaceOnUse">
          <path d="M 120 0 L 0 0 0 120" fill="none" stroke="rgba(56,189,248,0.15)" strokeWidth="1" />
        </pattern>
      </defs>
      <motion.rect
        width="100%" height="100%"
        fill="url(#splash-grid-minor)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
      <motion.rect
        width="100%" height="100%"
        fill="url(#splash-grid-major)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      />
    </svg>
  );
}

// Corner registration marks
function CornerMarks() {
  const corners = [
    { style: { top: "2rem", left: "2rem" } },
    { style: { top: "2rem", right: "2rem" } },
    { style: { bottom: "2rem", left: "2rem" } },
    { style: { bottom: "2rem", right: "2rem" } },
  ];
  return (
    <>
      {corners.map((corner, i) => (
        <motion.div
          key={i}
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.4 + i * 0.06, ease: "backOut" }}
          style={{
            position: "absolute",
            width: "20px",
            height: "20px",
            ...corner.style,
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <line x1="10" y1="0" x2="10" y2="20" stroke="var(--blue-primary)" strokeWidth="1" opacity="0.7" />
            <line x1="0" y1="10" x2="20" y2="10" stroke="var(--blue-primary)" strokeWidth="1" opacity="0.7" />
          </svg>
        </motion.div>
      ))}
    </>
  );
}

// Animated blueprint border that draws itself
function BlueprintBorder({ delay = 0 }: { delay?: number }) {
  return (
    <svg
      style={{ position: "absolute", inset: "3rem", pointerEvents: "none" }}
      aria-hidden="true"
    >
      <motion.rect
        x="1" y="1"
        width="calc(100% - 2px)" height="calc(100% - 2px)"
        rx="2"
        fill="none"
        stroke="var(--grid-line)"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: { duration: 1.4, ease: [0.4, 0, 0.2, 1], delay },
          opacity: { duration: 0.1, delay },
        }}
      />
    </svg>
  );
}

// Horizontal scan line that sweeps once
function ScanLine() {
  return (
    <motion.div
      aria-hidden="true"
      initial={{ top: "-2px", opacity: 0.6 }}
      animate={{ top: "100%", opacity: 0 }}
      transition={{ duration: 1.8, ease: "easeIn", delay: 0.5 }}
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        height: "2px",
        background: "linear-gradient(90deg, transparent 0%, var(--blue-bright) 30%, var(--blue-primary) 50%, var(--blue-bright) 70%, transparent 100%)",
        pointerEvents: "none",
        zIndex: 10,
      }}
    />
  );
}

// Dimension lines that appear around the title
function DimensionLines({ show }: { show: boolean }) {
  return (
    <>
      {/* Horizontal line left */}
      <motion.div
        aria-hidden="true"
        initial={{ width: 0, opacity: 0 }}
        animate={show ? { width: "80px", opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
        style={{
          position: "absolute",
          top: "50%",
          right: "calc(100% + 1.5rem)",
          height: "1px",
          background: "var(--blue-primary)",
          transformOrigin: "right",
          opacity: 0.5,
        }}
      />
      {/* Horizontal line right */}
      <motion.div
        aria-hidden="true"
        initial={{ width: 0, opacity: 0 }}
        animate={show ? { width: "80px", opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
        style={{
          position: "absolute",
          top: "50%",
          left: "calc(100% + 1.5rem)",
          height: "1px",
          background: "var(--blue-primary)",
          transformOrigin: "left",
          opacity: 0.5,
        }}
      />
    </>
  );
}

// Loading dots — blueprint style
function LoadingDots({ show }: { show: boolean }) {
  return (
    <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={show ? {
            opacity: [0, 1, 0.3, 1],
            scale: [0, 1, 0.8, 1],
          } : {}}
          transition={{
            duration: 0.8,
            delay: 1.4 + i * 0.15,
            repeat: Infinity,
            repeatDelay: 0.8,
            ease: "easeInOut",
          }}
          style={{
            width: "4px",
            height: "4px",
            borderRadius: "50%",
            background: "var(--blue-primary)",
          }}
        />
      ))}
    </div>
  );
}

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [phase, setPhase] = useState<"loading" | "exiting">("loading");
  const [statusText, setStatusText] = useState("Inisialisasi sistem...");

  const statusSequence = [
    { text: "Inisialisasi sistem...",     delay: 800 },
    { text: "Memuat blueprint...",         delay: 500 },
    { text: "Rendering komponen...",       delay: 500 },
    { text: "Menyusun keahlian...",        delay: 450 },
    { text: "Memverifikasi portofolio...", delay: 400 },
    { text: "Siap.",                       delay: 350 },
  ];

  useEffect(() => {
    let t = 0;
    const timers: NodeJS.Timeout[] = [];

    statusSequence.forEach(({ text, delay }, i) => {
      t += i === 0 ? 400 : statusSequence[i - 1].delay;
      timers.push(setTimeout(() => setStatusText(text), t));
    });

    // Total duration before exit
    const totalDuration = t + 700;
    timers.push(
      setTimeout(() => {
        setPhase("exiting");
        setTimeout(onComplete, 900);
      }, totalDuration)
    );

    return () => timers.forEach(clearTimeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {phase === "loading" && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02, filter: "blur(8px)" }}
          transition={{ duration: 0.85, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            background: "var(--paper)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {/* Blueprint grid background */}
          <GridLines />

          {/* Corner registration marks */}
          <CornerMarks />

          {/* Outer blueprint border — draws itself */}
          <BlueprintBorder delay={0.3} />

          {/* Blueprint scan line sweeping once */}
          <ScanLine />

          {/* Meta labels — top-left & top-right */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{
              position: "absolute",
              top: "4.5rem",
              left: "4.5rem",
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--ink-subtle)",
              letterSpacing: "0.08em",
              lineHeight: 1.8,
            }}
          >
            <div>PROJECT: Portfolio v2.0</div>
            <div>AUTHOR: Muhammad Al Fathir Attaullah</div>
            <div>DATE: {new Date().toLocaleDateString("id-ID", { year: "numeric", month: "2-digit", day: "2-digit" })}</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            style={{
              position: "absolute",
              top: "4.5rem",
              right: "4.5rem",
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--ink-subtle)",
              letterSpacing: "0.08em",
              lineHeight: 1.8,
              textAlign: "right",
            }}
          >
            <div>SHEET 01 / 06</div>
            <div>SCALE: 1:1</div>
            <div>STATUS: LOADING</div>
          </motion.div>

          {/* Center content */}
          <div style={{ position: "relative", textAlign: "center" }}>
            {/* Dimension lines around name */}
            <div style={{ position: "relative", display: "inline-block" }}>
              <DimensionLines show={true} />

              {/* "Dokumen teknik" label above name */}
              <motion.div
                initial={{ opacity: 0, letterSpacing: "0.5em" }}
                animate={{ opacity: 1, letterSpacing: "0.18em" }}
                transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--blue-primary)",
                  letterSpacing: "0.18em",
                  marginBottom: "1.5rem",
                  display: "block",
                }}
              >
                ── PORTOFOLIO ──
              </motion.div>

              {/* Main name — word by word */}
              <h1
                aria-label="Muhammad Al Fathir Attaullah"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 500,
                  fontSize: "clamp(2rem, 6vw, 4rem)",
                  color: "var(--ink)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  marginBottom: "0.5rem",
                  overflow: "hidden",
                }}
              >
                {["Muhammad", "Al Fathir"].map((word, i) => (
                  <motion.span
                    key={i}
                    aria-hidden="true"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.85 + i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                    style={{ display: "inline-block", marginRight: "0.35em" }}
                  >
                    {word}
                  </motion.span>
                ))}
                <br />
                <motion.span
                  aria-hidden="true"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 1.09, ease: [0.25, 0.46, 0.45, 0.94] }}
                  style={{ display: "inline-block", color: "var(--blue-primary)" }}
                >
                  Attaullah
                </motion.span>
              </h1>

              {/* Animated underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                style={{
                  height: "1.5px",
                  background: "linear-gradient(90deg, transparent 0%, var(--blue-primary) 20%, var(--blue-bright) 50%, var(--blue-primary) 80%, transparent 100%)",
                  marginTop: "0.5rem",
                  marginBottom: "1.5rem",
                  transformOrigin: "center",
                }}
              />

              {/* Role */}
              <motion.p
                initial={{ opacity: 0, filter: "blur(6px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.5, delay: 1.3, ease: "easeOut" }}
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 500,
                  fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                  color: "var(--blue-primary)",
                  letterSpacing: "0.01em",
                }}
              >
                Front End Developer
              </motion.p>
            </div>

            {/* Status bar below name */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4, ease: "easeOut" }}
              style={{
                marginTop: "3rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.85rem",
              }}
            >
              {/* Progress track */}
              <div
                style={{
                  width: "240px",
                  height: "2px",
                  background: "var(--grid-line)",
                  borderRadius: "1px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 2.6, delay: 1.45, ease: [0.4, 0, 0.2, 1] }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(90deg, var(--blue-primary), var(--blue-bright))",
                    borderRadius: "1px",
                  }}
                />
              </div>

              {/* Status text + loading dots */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={statusText}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "var(--ink-subtle)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {statusText}
                  </motion.span>
                </AnimatePresence>
                <LoadingDots show={statusText !== "Siap."} />
              </div>
            </motion.div>
          </div>

          {/* Bottom meta */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            style={{
              position: "absolute",
              bottom: "4.5rem",
              left: "50%",
              transform: "translateX(-50%)",
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--ink-subtle)",
              letterSpacing: "0.06em",
              textAlign: "center",
              lineHeight: 1.8,
            }}
          >
            <div>SMK TELKOM MALANG · REKAYASA PERANGKAT LUNAK</div>
          </motion.div>

          {/* Bottom left: version */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            style={{
              position: "absolute",
              bottom: "4.5rem",
              left: "4.5rem",
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--ink-subtle)",
              letterSpacing: "0.06em",
            }}
          >
            v2.0 — BLUEPRINT
          </motion.div>

          {/* Bottom right: sheet */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            style={{
              position: "absolute",
              bottom: "4.5rem",
              right: "4.5rem",
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--ink-subtle)",
              letterSpacing: "0.06em",
            }}
          >
            APPROVED ✓
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
