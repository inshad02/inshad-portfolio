"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle, ShieldCheck } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  type: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Omnicore Digital Solutions",
    role: "Flutter Developer",
    location: "Dubai, UAE",
    period: "2025 - 2026",
    type: "Full-Time",
    highlights: [
      "Engineered secure, production-ready fintech applications for financial institutions.",
      "Integrated complex REST APIs with Dio interceptors, error handling, and offline data caching.",
      "Architected mobile applications using Riverpod state management and Clean Architecture principles.",
      "Implemented Firebase Authentication, Cloud Messaging push notifications, and Firestore realtime sync.",
      "Collaborated in Agile cross-functional teams with UI/UX designers, backend engineers, and QA.",
      "Optimized Flutter UI rendering pipeline, achieving 60fps animations and reduced bundle sizes.",
    ],
  },
  {
    company: "Softroniics",
    role: "Flutter Intern",
    location: "India",
    period: "2024 - 2025",
    type: "Internship",
    highlights: [
      "Developed cross-platform iOS and Android mobile interfaces using Flutter & Dart.",
      "Implemented Firebase Authentication (Email/Password, Google Sign-in) and Cloud Firestore.",
      "Converted high-fidelity Figma UI mockups into responsive, accessible Flutter widgets.",
      "Integrated third-party REST APIs and JSON payload serializers for live data feeds.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-24 relative z-10 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121214] border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37] uppercase tracking-widest mb-4"
          >
            <Briefcase className="w-3.5 h-3.5 text-[#D4AF37]" />
            Career Path
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            Professional <span className="text-gold-gradient">Experience</span>
          </motion.h2>
          <div className="h-1 w-20 bg-gold-gradient rounded-full mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#996515] to-transparent transform -translate-x-1/2 shadow-[0_0_15px_#D4AF37]" />

          <div className="space-y-10 sm:space-y-16">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={exp.company}
                  className={`relative flex flex-col sm:flex-row items-start ${isEven ? "sm:flex-row-reverse" : ""
                    }`}
                >
                  {/* Glowing Node Dot */}
                  <div className="absolute left-4 sm:left-1/2 top-6 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#0B0B0B] border-2 border-[#D4AF37] shadow-[0_0_20px_#D4AF37]">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-ping" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: idx * 0.2 }}
                    className={`ml-10 sm:ml-0 w-[calc(100%-2.5rem)] sm:w-[calc(50%-2.5rem)] p-5 sm:p-8 rounded-3xl bg-[#121214]/80 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 backdrop-blur-xl transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] group ${isEven ? "sm:mr-auto" : "sm:ml-auto"
                      }`}
                  >
                    {/* Role & Period Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-xs font-bold text-[#D4AF37]">
                        {exp.type}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono">
                        <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                        {exp.period}
                      </div>
                    </div>

                    {/* Title & Company */}
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mb-1 group-hover:text-[#D4AF37] transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm text-[#D4AF37] font-medium mb-4">
                      <span className="font-semibold">{exp.company}</span>
                      <span className="hidden sm:inline">•</span>
                      <div className="flex items-center gap-1 text-neutral-400 text-xs">
                        <MapPin className="w-3 h-3 text-[#D4AF37]" />
                        {exp.location}
                      </div>
                    </div>

                    <div className="h-px w-full bg-white/10 my-4" />

                    {/* Highlights List */}
                    <ul className="space-y-2.5">
                      {exp.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                          <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

