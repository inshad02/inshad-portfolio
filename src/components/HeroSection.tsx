"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Mail, Sparkles, Smartphone, ShieldCheck, Zap } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

interface HeroSectionProps {
  onOpenResume: () => void;
}

export default function HeroSection({ onOpenResume }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Intro */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#121214] border border-[#D4AF37]/30 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(212,175,55,0.15)]"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-ping" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                Available for New Opportunities
              </span>
            </motion.div>

            {/* Main Greeting & Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading tracking-tight leading-[1.1] mb-4 text-white"
            >
              Hi, I&apos;m{" "}
              <span className="text-gold-gradient block sm:inline">
                Muhammed Inshad
              </span>
            </motion.h1>

            {/* Title / Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[2px] w-12 bg-gold-gradient" />
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#D4AF37] tracking-wide">
                Flutter Developer
              </h2>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-lg sm:text-xl font-medium text-neutral-200 mb-4 max-w-2xl leading-relaxed"
            >
              &ldquo;Building premium cross-platform mobile applications with Flutter.&rdquo;
            </motion.p>

            {/* Short Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="text-sm sm:text-base text-neutral-400 mb-8 max-w-2xl leading-relaxed font-light"
            >
              Flutter Developer with 2+ years of experience building secure, scalable fintech and business applications using Flutter, Riverpod, Firebase, REST APIs, and Clean Architecture.
            </motion.p>

            {/* Feature Highlights Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#121214]/80 border border-white/10 text-xs text-neutral-300">
                <Smartphone className="w-3.5 h-3.5 text-[#D4AF37]" />
                Cross-Platform Mobile
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#121214]/80 border border-white/10 text-xs text-neutral-300">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                Fintech & Banking Security
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#121214]/80 border border-white/10 text-xs text-neutral-300">
                <Zap className="w-3.5 h-3.5 text-[#D4AF37]" />
                Riverpod & Clean Arch
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10"
            >
              <a
                href="#projects"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gold-gradient text-[#0B0B0B] font-bold font-heading text-sm uppercase tracking-wider hover:opacity-95 transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.35)] transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2"
              >
                View Projects
                <ArrowDown className="w-4 h-4 text-[#0B0B0B]" />
              </a>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#121214] text-[#D4AF37] font-bold font-heading text-sm uppercase tracking-wider border border-[#D4AF37]/40 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.1)] text-center flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                Download Resume
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="flex items-center gap-6"
            >
              <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">
                Connect
              </span>
              <div className="h-px w-8 bg-neutral-800" />
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#121214] border border-[#D4AF37]/20 hover:border-[#D4AF37] text-neutral-400 hover:text-[#D4AF37] transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] transform hover:-translate-y-1"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#121214] border border-[#D4AF37]/20 hover:border-[#D4AF37] text-neutral-400 hover:text-[#D4AF37] transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] transform hover:-translate-y-1"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:inshad.dev@gmail.com"
                  className="p-2.5 rounded-xl bg-[#121214] border border-[#D4AF37]/20 hover:border-[#D4AF37] text-neutral-400 hover:text-[#D4AF37] transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] transform hover:-translate-y-1"
                  aria-label="Email Contact"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Premium Visual & Avatar Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Outer Glowing Rings */}
              <div className="absolute inset-0 rounded-3xl bg-gold-gradient opacity-20 blur-2xl animate-pulse-glow" />
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#D4AF37]/40 via-transparent to-[#996515]/40 opacity-70 blur-sm" />

              {/* Glass Card Container */}
              <div className="relative w-full h-full rounded-3xl bg-[#121214] border border-[#D4AF37]/30 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden group">
                <Image
                  src="/avatar.png"
                  alt="Muhammed Inshad - Flutter Developer"
                  fill
                  priority
                  className="object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                />

                {/* Glassmorphic Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-80" />

                {/* Floating Tech Badges on Image */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0B0B0B]/85 backdrop-blur-md border border-[#D4AF37]/30 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold font-heading text-white">
                        Muhammed Inshad
                      </h3>
                      <p className="text-xs text-[#D4AF37] font-medium">
                        Flutter & Mobile Specialist
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[10px] font-bold text-[#D4AF37] tracking-wider uppercase">
                      Dubai, UAE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
