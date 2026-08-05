"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#AA7C11] via-[#D4AF37] to-[#FFF1B0] z-50 transform-origin-left shadow-[0_0_12px_#D4AF37]"
      style={{ scaleX }}
    />
  );
}
