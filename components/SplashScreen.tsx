"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phrases = [
  "Memuat portofolio...",
  "Menyusun antarmuka...",
  "Mempersiapkan karya...",
  "Sebentar lagi...",
  "Siap.",
];

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [phase, setPhase] = useState<"loading" | "exiting">("loading");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    const total = 3000;
    const steps = phrases.length;

    phrases.forEach((_, i) => {
      timers.push(
        setTimeout(() => setPhraseIndex(i), (total / steps) * i + 300)
      );
    });

    // Progress bar
    const interval = setInterval(() => {
      setProgress((p) => Math.min(p + 2, 100));
    }, total / 50);
    timers.push(interval as unknown as NodeJS.Timeout);

    timers.push(
      setTimeout(() => {
        setPhase("exiting");
        setTimeout(onComplete, 700);
      }, total + 500)
    );

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {phase === "loading" && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)", scale: 1.02 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            background: "var(--bg-void)",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {/* Ambient glow */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "20%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "600px",
              height: "400px",
              background: "radial-gradient(ellipse, rgba(56,189,248,0.1) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* Center content */}
          <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.15em",
                color: "var(--accent)",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
              }}
            >
              Portofolio
            </motion.div>

            {/* Name */}
            <h1
              aria-label="Muhammad Al Fathir Attaullah"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontStyle: "italic",
                fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
                color: "var(--cream)",
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
                marginBottom: "0.25rem",
                overflow: "hidden",
              }}
            >
              {["Muhammad Al Fathir", "Attaullah"].map((word, i) => (
                <motion.span
                  key={i}
                  aria-hidden="true"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.35 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{
                    display: "block",
                    color: i === 1 ? "var(--accent)" : "var(--cream)",
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
                color: "var(--text-secondary)",
                marginTop: "1rem",
              }}
            >
              Front End Developer
            </motion.p>
          </div>

          {/* Bottom: progress + status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            style={{
              position: "absolute",
              bottom: "4rem",
              left: "50%",
              transform: "translateX(-50%)",
              width: "min(280px, 70vw)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            {/* Status text */}
            <AnimatePresence mode="wait">
              <motion.span
                key={phraseIndex}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10.5px",
                  color: "var(--text-muted)",
                  letterSpacing: "0.06em",
                }}
              >
                {phrases[phraseIndex]}
              </motion.span>
            </AnimatePresence>

            {/* Progress bar */}
            <div
              style={{
                width: "100%",
                height: "1px",
                background: "var(--border-faint)",
                borderRadius: "1px",
                overflow: "hidden",
              }}
            >
              <motion.div
                style={{
                  height: "100%",
                  background: "var(--accent)",
                  borderRadius: "1px",
                  width: `${progress}%`,
                  transition: "width 0.05s linear",
                }}
              />
            </div>
          </motion.div>

          {/* Bottom corners */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              position: "absolute",
              bottom: "3rem",
              left: "2.5rem",
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--border-subtle)",
              letterSpacing: "0.06em",
            }}
          >
            SMK Telkom Malang
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              position: "absolute",
              bottom: "3rem",
              right: "2.5rem",
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--border-subtle)",
              letterSpacing: "0.06em",
            }}
          >
            v3.0
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
