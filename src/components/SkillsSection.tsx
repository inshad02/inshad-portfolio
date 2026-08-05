"use client";

import { motion } from "framer-motion";
import {
  Code,
  Layers,
  Cpu,
  Server,
  Wrench,
  Sparkles,
  Zap,
  Globe,
  Database,
  CheckCircle2,
} from "lucide-react";

interface SkillGroup {
  category: string;
  icon: typeof Code;
  description: string;
  skills: { name: string; level: string; isPrimary?: boolean }[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Languages & Frameworks",
    icon: Code,
    description: "Core technologies for cross-platform app engineering",
    skills: [
      { name: "Dart", level: "Expert", isPrimary: true },
      { name: "Flutter", level: "Expert", isPrimary: true },
      { name: "Firebase", level: "Advanced", isPrimary: true },
      { name: "C Programming", level: "Intermediate" },
    ],
  },
  {
    category: "Architecture & Design",
    icon: Layers,
    description: "Structuring clean, testable, enterprise-scale codebases",
    skills: [
      { name: "Clean Architecture", level: "Expert", isPrimary: true },
      { name: "MVVM", level: "Expert", isPrimary: true },
      { name: "SOLID Principles", level: "Advanced" },
      { name: "Modular Architecture", level: "Advanced" },
    ],
  },
  {
    category: "State Management",
    icon: Cpu,
    description: "Predictable data flow & reactive application state",
    skills: [
      { name: "Riverpod", level: "Expert", isPrimary: true },
      { name: "Provider", level: "Advanced", isPrimary: true },
      { name: "GetX", level: "Advanced" },
    ],
  },
  {
    category: "Backend & Data",
    icon: Server,
    description: "Data sync, network protocols & authentication",
    skills: [
      { name: "REST APIs", level: "Expert", isPrimary: true },
      { name: "Firebase Auth & Firestore", level: "Advanced", isPrimary: true },
      { name: "JSON Parsing & Serialization", level: "Expert" },
      { name: "WebSockets & Realtime", level: "Intermediate" },
    ],
  },
  {
    category: "Development Tools",
    icon: Wrench,
    description: "Version control, agile management & UI prototyping",
    skills: [
      { name: "Git & GitHub", level: "Expert" },
      { name: "Jira & Confluence", level: "Advanced" },
      { name: "Bitbucket", level: "Advanced" },
      { name: "Trello", level: "Advanced" },
      { name: "Figma to Flutter", level: "Advanced" },
      { name: "FlutterFlow", level: "Advanced" },
    ],
  },
  {
    category: "Packages & Ecosystem",
    icon: Zap,
    description: "Networking, routing, code gen & UI performance",
    skills: [
      { name: "Dio Interceptors", level: "Expert", isPrimary: true },
      { name: "HTTP Client", level: "Expert" },
      { name: "AutoRoute", level: "Advanced" },
      { name: "Code Generation (Freezed)", level: "Advanced" },
      { name: "Responsive UI", level: "Expert" },
      { name: "Unit & Widget Testing", level: "Advanced" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative z-10 bg-[#0B0B0B]">
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
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            Technical Stack
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            Skills & <span className="text-gold-gradient">Expertise</span>
          </motion.h2>
          <div className="h-1 w-20 bg-gold-gradient rounded-full mt-4" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, groupIdx) => {
            const GroupIcon = group.icon;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: groupIdx * 0.1 }}
                className="p-8 rounded-3xl bg-[#121214]/70 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 backdrop-blur-xl transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_0_30px_rgba(212,175,55,0.18)] flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 group-hover:bg-[#D4AF37] group-hover:text-[#0B0B0B] transition-colors duration-300">
                      <GroupIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-heading text-white group-hover:text-[#D4AF37] transition-colors">
                        {group.category}
                      </h3>
                      <p className="text-xs text-neutral-400 font-light">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <div className="h-px w-full bg-white/10 my-4" />

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.05 }}
                        className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-default ${
                          skill.isPrimary
                            ? "bg-[#D4AF37]/15 text-[#FFF1B0] border border-[#D4AF37]/40 shadow-[0_0_10px_rgba(212,175,55,0.1)]"
                            : "bg-[#1A1A1E] text-neutral-300 border border-white/10 hover:border-[#D4AF37]/30"
                        }`}
                      >
                        <CheckCircle2
                          className={`w-3.5 h-3.5 ${
                            skill.isPrimary ? "text-[#D4AF37]" : "text-neutral-500"
                          }`}
                        />
                        <span>{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
