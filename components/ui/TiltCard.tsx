"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  maxTilt?: number;
}

/**
 * TiltCard v2:
 * - Tilt 3D ringan ±6° sesuai designsystem.md 6.3
 * - Shimmer/specular highlight mengikuti arah tilt
 * - Spring physics untuk feel yang lebih alami
 * - Touch: tilt dinonaktifkan, hanya reveal statis
 */
export default function TiltCard({
  children,
  className = "",
  style = {},
  maxTilt = 6,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isTouch, setIsTouch] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window);
  }, []);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 22, stiffness: 200, mass: 0.4 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [0, 1], [maxTilt, -maxTilt]);
  const rotateY = useTransform(smoothMouseX, [0, 1], [-maxTilt, maxTilt]);

  // Shimmer gradient position follows cursor
  const shimmerX = useTransform(smoothMouseX, [0, 1], ["-30%", "130%"]);
  const shimmerY = useTransform(smoothMouseY, [0, 1], ["-30%", "130%"]);
  const shimmerOpacity = useTransform(smoothMouseX, [0, 0.5, 1], [0.08, 0.04, 0.08]);

  // Border highlight intensity follows hover state
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseEnter = () => { if (!isTouch) setIsHovered(true); };
  const handleMouseLeave = () => {
    if (!isTouch) {
      setIsHovered(false);
      mouseX.set(0.5);
      mouseY.set(0.5);
    }
  };

  if (isTouch) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 800, transformStyle: "preserve-3d" }}
    >
      <motion.div
        className={className}
        style={{
          ...style,
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          position: "relative",
          willChange: "transform",
          transition: "box-shadow 0.2s ease",
          boxShadow: isHovered
            ? "0 12px 40px rgba(29, 93, 155, 0.08), 0 4px 16px rgba(29, 93, 155, 0.05)"
            : "none",
        }}
      >
        {children}
        {/* Specular shimmer overlay */}
        <motion.div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "var(--radius)",
            background: "radial-gradient(circle 80px at var(--shimmer-x, 50%) var(--shimmer-y, 50%), rgba(255,255,255,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 10,
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.2s ease",
            // We use CSS custom property workaround via inline style update
          }}
          // Manually bind shimmer position to avoid complex framer-motion CSS var
        />
      </motion.div>
    </div>
  );
}
