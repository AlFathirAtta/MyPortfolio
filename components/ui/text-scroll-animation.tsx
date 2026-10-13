"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import ReactLenis from "lenis/react";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";

export type CharacterProps = {
  char: string;
  index: number;
  centerIndex: number;
  scrollYProgress: MotionValue<number>;
  accentColor?: string;
};

export const CharacterV1 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
  accentColor = "var(--blue-bright)",
}: CharacterProps) => {
  const isSpace = char === " ";
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(scrollYProgress, [0, 0.45], [distanceFromCenter * 28, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 0.45], [distanceFromCenter * 15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.1, 1]);

  return (
    <motion.span
      className={cn("inline-block will-change-transform", isSpace && "w-3 md:w-4")}
      style={{
        x,
        rotateX,
        opacity,
        color: index % 3 === 0 ? accentColor : "inherit",
      }}
    >
      {char}
    </motion.span>
  );
};

export const CharacterV2 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}: CharacterProps) => {
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 40, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.85, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [Math.abs(distanceFromCenter) * 30, 0]);

  return (
    <motion.div
      className="shrink-0 will-change-transform"
      style={{ x, scale, y, transformOrigin: "center" }}
    >
      {char}
    </motion.div>
  );
};

export const CharacterV3 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}: CharacterProps) => {
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 60, 0]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 30, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [-Math.abs(distanceFromCenter) * 15, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.85, 1]);

  return (
    <motion.div
      className="shrink-0 will-change-transform"
      style={{ x, rotate, y, scale, transformOrigin: "center" }}
    >
      {char}
    </motion.div>
  );
};

/**
 * ScrollHeading:
 * Menerapkan animasi split karakter berbasis scroll progress ke judul-judul seksi
 * sesuai tema blueprint portfolio.
 */
export function ScrollHeading({
  text,
  className,
  accentColor = "var(--blue-bright)",
  as: Component = "h2",
}: {
  text: string;
  className?: string;
  accentColor?: string;
  as?: "h1" | "h2" | "h3" | "span" | "div";
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "center 55%"],
  });

  const characters = text.split("");
  const centerIndex = Math.floor(characters.length / 2);

  return (
    <div ref={ref} className="overflow-hidden inline-block" style={{ perspective: "600px" }}>
      <Component className={className}>
        {characters.map((char, index) => (
          <CharacterV1
            key={index}
            char={char}
            index={index}
            centerIndex={centerIndex}
            scrollYProgress={scrollYProgress}
            accentColor={accentColor}
          />
        ))}
      </Component>
    </div>
  );
}

/**
 * ScrollBadgeList:
 * Menerapkan animasi transformasi scroll (CharacterV2/V3) ke daftar alat/teknologi
 */
export function ScrollBadgeList({
  items,
}: {
  items: string[];
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "center 60%"],
  });

  const centerIndex = Math.floor(items.length / 2);

  return (
    <div
      ref={ref}
      className="flex flex-wrap gap-2.5 items-center"
      style={{ perspective: "600px" }}
    >
      {items.map((item, index) => {
        const distanceFromCenter = index - centerIndex;
        return (
          <ScrollBadgeItem
            key={item}
            name={item}
            distanceFromCenter={distanceFromCenter}
            scrollYProgress={scrollYProgress}
          />
        );
      })}
    </div>
  );
}

function ScrollBadgeItem({
  name,
  distanceFromCenter,
  scrollYProgress,
}: {
  name: string;
  distanceFromCenter: number;
  scrollYProgress: MotionValue<number>;
}) {
  const x = useTransform(scrollYProgress, [0, 0.6], [distanceFromCenter * 35, 0]);
  const y = useTransform(scrollYProgress, [0, 0.6], [Math.abs(distanceFromCenter) * 15, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0.2, 1]);

  return (
    <motion.span
      className="mono-tag cursor-default"
      style={{
        x,
        y,
        scale,
        opacity,
        display: "inline-block",
        willChange: "transform, opacity",
      }}
    >
      {name}
    </motion.span>
  );
}

/**
 * ScrollParallaxCard:
 * Memberikan efek parallax mengambang & skala saat kartu di-scroll
 */
export function ScrollParallaxCard({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.9, 1], [0.8, 1, 1, 0.8]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        ...style,
        y,
        opacity,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </motion.div>
  );
}

const Bracket = ({ className }: { className: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 27 78" className={className}>
      <path
        fill="currentColor"
        d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
      />
    </svg>
  );
};

export { Bracket };
export default ScrollHeading;
