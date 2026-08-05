"use client";

import { motion } from "framer-motion";
import { Award, Smartphone, CheckCircle, Flame } from "lucide-react";

const stats = [
  {
    icon: Flame,
    value: "2+",
    label: "Years Experience",
    subtext: "Commercial Flutter engineering",
  },
  {
    icon: Award,
    value: "3+",
    label: "Major Projects",
    subtext: "Fintech, Chat & Management apps",
  },
  {
    icon: CheckCircle,
    value: "20+",
    label: "Features Delivered",
    subtext: "Auth, APIs, FCM & Payments",
  },
  {
    icon: Smartphone,
    value: "100%",
    label: "Responsive UI",
    subtext: "Pixel-perfect iOS & Android",
  },
];

export default function AchievementsSection() {
  return (
    <section className="py-20 relative z-10 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#121214] to-[#0B0B0B] border border-[#D4AF37]/30 backdrop-blur-xl shadow-[0_0_50px_rgba(212,175,55,0.1)] relative overflow-hidden">
          {/* Ambient Corner Glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#D4AF37]/15 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#996515]/15 blur-3xl" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {stats.map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#0B0B0B]/60 border border-white/5 hover:border-[#D4AF37]/40 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] mb-4 border border-[#D4AF37]/30 group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="text-4xl sm:text-5xl font-extrabold font-heading text-gold-gradient mb-2 tracking-tight">
                    {stat.value}
                  </span>
                  <h4 className="text-base font-bold font-heading text-white mb-1">
                    {stat.label}
                  </h4>
                  <p className="text-xs text-neutral-400 font-light">
                    {stat.subtext}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
