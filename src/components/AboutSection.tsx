"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Layers, Shield, Sparkles, Terminal } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "2+ Years Experience",
    description: "Hands-on expertise engineering robust cross-platform mobile apps for production.",
  },
  {
    icon: Sparkles,
    title: "Flutter Specialist",
    description: "Deep mastery of Dart, custom UI rendering, high performance, and smooth animations.",
  },
  {
    icon: Shield,
    title: "Fintech Development",
    description: "Built secure banking and payment features following strict financial security compliance.",
  },
  {
    icon: Layers,
    title: "Clean Architecture",
    description: "Structuring maintainable codebases using solid principles, MVVM, and modular design.",
  },
  {
    icon: Cpu,
    title: "REST API Integration",
    description: "Seamless JSON parsing, caching, Dio/HTTP interceptors, and real-time socket connections.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative z-10 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121214] border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37] uppercase tracking-widest mb-4"
          >
            <Terminal className="w-3.5 h-3.5 text-[#D4AF37]" />
            About Me
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            Engineering <span className="text-gold-gradient">Flawless Mobile</span> Experiences
          </motion.h2>
          <div className="h-1 w-20 bg-gold-gradient rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Biography & Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-between p-8 rounded-3xl bg-[#121214]/80 border border-[#D4AF37]/20 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-[#D4AF37]/40 transition-all duration-300"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="p-3 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30">
                  <Sparkles className="w-6 h-6" />
                </span>
                <div>
                  <h3 className="text-2xl font-bold font-heading text-white">
                    Muhammed Inshad
                  </h3>
                  <p className="text-sm text-[#D4AF37] font-medium">
                    Flutter & Mobile Engineer
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-neutral-300 leading-relaxed font-light text-base">
                <p>
                  I am a passionate <strong className="text-white font-medium">Flutter Developer</strong> with over 2 years of commercial software engineering experience based in Dubai. My core focus lies in crafting sleek, pixel-perfect, and ultra-responsive mobile applications for iOS and Android.
                </p>
                <p>
                  Having engineered production-grade mobile platforms for major organizations like <strong className="text-[#D4AF37]">Dukhan Bank</strong> (FinTech) and <strong className="text-[#D4AF37]">Omnicore Digital Solutions</strong>, I specialize in combining scalable <strong className="text-white">Clean Architecture</strong> with intuitive state management like <strong className="text-[#D4AF37]">Riverpod</strong>.
                </p>
                <p>
                  My development philosophy is simple: write maintainable, testable code, optimize frame rates for 60fps animations, and construct user interfaces that leave a lasting luxury impression.
                </p>
              </div>
            </div>

            {/* Quick Specs */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
              <div>
                <span className="block text-xs uppercase tracking-wider text-neutral-500 font-semibold">
                  Location
                </span>
                <span className="text-sm font-semibold text-white">
                  Dubai, United Arab Emirates
                </span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-neutral-500 font-semibold">
                  Specialization
                </span>
                <span className="text-sm font-semibold text-[#D4AF37]">
                  FinTech & Cross-Platform
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Key Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-[#121214]/60 border border-[#D4AF37]/15 hover:border-[#D4AF37]/40 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] transform hover:-translate-y-1 flex flex-col justify-between group"
                >
                  <div>
                    <div className="p-3 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] w-fit mb-4 border border-[#D4AF37]/20 group-hover:bg-[#D4AF37] group-hover:text-[#0B0B0B] transition-colors duration-300">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold font-heading text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
