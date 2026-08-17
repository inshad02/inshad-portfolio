"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Sparkles, Layers, ShieldCheck, CheckCircle2, X } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  tech: string[];
  image: string;
  githubUrl: string;
  demoUrl: string;
  features: string[];
}

const projects: Project[] = [
  {
    id: "dukhan-bank",
    title: "Dukhan Bank Retail Banking App",
    category: "FinTech",
    description:
      "Developed secure banking features with scalable architecture and seamless mobile experience in associate with Omnicore digital solutions.",
    longDescription:
      "A flagship enterprise retail mobile banking application built for Dukhan Bank. Features biometrically secured user authentication, real-time account balances, international wire transfers, gold trading updates, and interactive transaction analytics.",
    tech: ["Flutter", "Riverpod", "Clean Architecture", "REST APIs", "Dio", "Biometrics"],
    image: "/dukhan-bank.png",
    githubUrl: "",
    demoUrl: "",
    features: [
      "Biometric FaceID / TouchID authentication flow",
      "Real-time gold transaction monitoring & charts",
      "Riverpod global state & clean data repositories",
      "Encrypted payload transport with Dio interceptors",
    ],
  },
  {
    id: "vistiq",
    title: "VistiQ",
    category: "Community Management",
    description:
      "Residential community management application featuring visitor management, package tracking, announcements, and emergency access.",
    longDescription:
      "A comprehensive smart residence and gated community management platform. Allows homeowners and tenants to generate digital gate access QR passes for visitors, receive instant push notifications for package deliveries, submit maintenance tickets, and trigger instant SOS emergency alerts.",
    tech: ["Flutter", "Firebase", "GetX", "Cloud Firestore", "FCM Push Notifications"],
    image: "/vistiq.png",
    githubUrl: "https://github.com/inshad02/VistiQ-Main-Project-",
    demoUrl: "",
    features: [
      "Dynamic QR code generator for guest gate pass validation",
      "Package locker tracking with instant delivery alerts",
      "Community notice board & rooftop event bookings",
      "One-tap panic button for emergency building security",
    ],
  },
  {
    id: "heyo",
    title: "Heyo",
    category: "Social Chat",
    description:
      "Real-time chat application using Firebase Authentication and Cloud Firestore.",
    longDescription:
      "A sleek modern mobile social chat application engineered with FlutterFlow and Firebase backend services. Supports real-time 1-on-1 instant messaging, voice note waveform player, online presence indicators, and group chat channels.",
    tech: ["FlutterFlow", "Firebase Auth", "Cloud Firestore", "Audio Waveforms"],
    image: "/heyo-chat.png",
    githubUrl: "",
    demoUrl: "",
    features: [
      "Instant messaging powered by Cloud Firestore listeners",
      "Voice note recording & glowing waveform audio playback",
      "Real-time online/offline user status tracking",
      "Secure user profile management and media sharing",
    ],
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative z-10 bg-[#0B0B0B]">
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
            <Layers className="w-3.5 h-3.5 text-[#D4AF37]" />
            Featured Work
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            Major Mobile <span className="text-gold-gradient">Projects</span>
          </motion.h2>
          <div className="h-1 w-20 bg-gold-gradient rounded-full mt-4" />
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="group relative flex flex-col justify-between rounded-3xl bg-[#121214]/80 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 backdrop-blur-xl overflow-hidden transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_0_40px_rgba(212,175,55,0.25)] transform hover:-translate-y-2"
            >
              {/* Top Image Preview Container */}
              <div className="relative w-full aspect-[4/3] bg-[#1A1A1E] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent opacity-90" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0B0B0B]/80 backdrop-blur-md border border-[#D4AF37]/40 text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                  {project.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-2xl font-bold font-heading text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg bg-[#1A1A1E] border border-white/10 text-[11px] font-semibold text-neutral-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 py-2.5 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 hover:border-[#D4AF37] text-xs font-bold text-[#D4AF37] uppercase tracking-wider transition-all duration-300 text-center flex items-center justify-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    Details
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#1A1A1E] border border-white/10 hover:border-[#D4AF37] text-neutral-400 hover:text-[#D4AF37] transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <FaGithub className="w-4 h-4" />
                  </a>

                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-gold-gradient text-[#0B0B0B] hover:opacity-90 font-bold transition-all shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#121214] border border-[#D4AF37]/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(212,175,55,0.2)]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[#1A1A1E] border border-white/10 text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-xs font-bold text-[#D4AF37] uppercase">
                  {selectedProject.category}
                </span>
                <span className="text-xs text-neutral-400">Featured Mobile App</span>
              </div>

              <h2 className="text-3xl font-bold font-heading text-white mb-4">
                {selectedProject.title}
              </h2>

              {/* Modal Image */}
              <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-6 border border-white/10">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover object-top"
                />
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed font-light mb-6">
                {selectedProject.longDescription}
              </p>

              <h4 className="text-sm font-bold uppercase tracking-wider text-[#D4AF37] mb-3">
                Key Technical Highlights:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {selectedProject.features.map((feat, fIdx) => (
                  <div
                    key={fIdx}
                    className="flex items-start gap-2 text-xs text-neutral-300 p-3 rounded-xl bg-[#1A1A1E] border border-white/5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-gold-gradient text-[#0B0B0B] font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                >
                  Visit Application
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-[#1A1A1E] text-white border border-white/10 hover:border-[#D4AF37] font-bold text-xs uppercase tracking-wider"
                >
                  GitHub Code
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
