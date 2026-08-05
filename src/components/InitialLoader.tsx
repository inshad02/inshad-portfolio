"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InitialLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B0B0B]"
        >
          <div className="relative flex flex-col items-center">
            {/* Glowing Logo Circle */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative flex items-center justify-center w-24 h-24 rounded-2xl bg-[#121214] border-2 border-[#D4AF37] shadow-[0_0_50px_rgba(212,175,55,0.4)] mb-6"
            >
              <span className="text-4xl font-extrabold font-heading text-gold-gradient">
                MI
              </span>
              <div className="absolute inset-0 rounded-2xl border border-[#FFF1B0]/30 animate-pulse" />
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl font-bold font-heading text-white tracking-wider uppercase mb-1"
            >
              Muhammed Inshad
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xs text-[#D4AF37] tracking-widest font-mono uppercase mb-8"
            >
              Flutter Developer
            </motion.p>

            {/* Gold Loading Line */}
            <div className="w-48 h-1 bg-[#1A1A1E] rounded-full overflow-hidden relative">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="w-full h-full bg-gold-gradient shadow-[0_0_10px_#D4AF37]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
