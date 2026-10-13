"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionShellProps {
  id: string;
  children: React.ReactNode;
  alt?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function SectionShell({
  id,
  children,
  alt = false,
  className = "",
  style = {},
}: SectionShellProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-8% 0px -8% 0px" });

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`section-padding ${className}`}
      style={{
        background: alt ? "var(--bg-surface)" : "var(--bg-main)",
        position: "relative",
        borderTop: "1px solid var(--border-faint)",
        ...style,
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
