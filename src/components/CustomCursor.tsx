"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function checkIsMobile() {
  if (typeof window === "undefined") return false;
  // Mobile viewport width (< 768px)
  if (window.innerWidth < 768) return true;
  // Touch-primary devices without fine pointer
  const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
  const hasCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
  if (!hasFinePointer && hasCoarsePointer) return true;
  return false;
}

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleCheck = () => {
      const mobile = checkIsMobile();
      setIsMobile(mobile);
      if (mobile) {
        setIsVisible(false);
      }
    };

    handleCheck();
    window.addEventListener("resize", handleCheck);

    const mqlFine = window.matchMedia("(pointer: fine)");
    const mqlCoarse = window.matchMedia("(pointer: coarse)");
    mqlFine.addEventListener?.("change", handleCheck);
    mqlCoarse.addEventListener?.("change", handleCheck);

    return () => {
      window.removeEventListener("resize", handleCheck);
      mqlFine.removeEventListener?.("change", handleCheck);
      mqlCoarse.removeEventListener?.("change", handleCheck);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest?.("button") ||
        target.closest?.("a") ||
        target.dataset?.cursor === "hover"
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isMobile, isVisible]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Small dot cursor */}
      <motion.div
        className="hidden md:block custom-cursor fixed top-0 left-0 w-2.5 h-2.5 bg-[#D4AF37] rounded-full pointer-events-none z-50 mix-blend-difference shadow-[0_0_10px_#D4AF37]"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          scale: isHovered ? 0.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 50, mass: 0.1 }}
      />
      {/* Outer ring cursor glow */}
      <motion.div
        className="hidden md:block custom-cursor fixed top-0 left-0 w-8 h-8 rounded-full border border-[#D4AF37]/50 pointer-events-none z-50 shadow-[0_0_15px_rgba(212,175,55,0.25)]"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovered ? 1.8 : 1,
          borderColor: isHovered ? "rgba(212, 175, 55, 0.9)" : "rgba(212, 175, 55, 0.4)",
          backgroundColor: isHovered ? "rgba(212, 175, 55, 0.08)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
      />
    </>
  );
}
