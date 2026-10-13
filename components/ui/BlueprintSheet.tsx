"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface BlueprintSheetProps {
  id: string;
  sheetNumber?: string;
  children: React.ReactNode;
  background?: "paper" | "paper-alt";
  className?: string;
  style?: React.CSSProperties;
}

export default function BlueprintSheet({
  id,
  children,
  background = "paper",
  className = "",
  style = {},
}: BlueprintSheetProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-10% 0px -10% 0px" });

  const bgStyle = background === "paper-alt" ? "var(--bg-surface)" : "var(--bg-main)";

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`section-padding ${className}`}
      style={{
        background: bgStyle,
        position: "relative",
        borderTop: "1px solid var(--border-subtle)",
        ...style,
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
