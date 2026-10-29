"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Printer, Download, Sparkles, CheckCircle2, MapPin, Mail, Phone, ExternalLink } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#121214] border border-[#D4AF37]/40 p-6 sm:p-10 shadow-[0_0_60px_rgba(212,175,55,0.25)] text-neutral-200 print:bg-white print:text-black print:p-0 print:border-none print:shadow-none"
        >
          {/* Action Header */}
          <div className="flex items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10 print:hidden">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              <h2 className="text-xl font-bold font-heading text-white">
                Curriculum Vitae
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="/resume.pdf"
                download="Muhammed_Inshad_Resume.pdf"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gold-gradient text-[#0B0B0B] font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:opacity-95 transition-all"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#1A1A1E] border border-white/10 hover:border-[#D4AF37] text-neutral-300 hover:text-white text-xs font-semibold transition-all"
              >
                <Printer className="w-4 h-4 text-[#D4AF37]" />
                Print
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-[#1A1A1E] border border-white/10 text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Content */}
          <div id="printable-resume" className="space-y-8">
            {/* Header / Contact */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-white print:text-black">
                  Muhammed Inshad
                </h1>
                <p className="text-lg font-semibold text-[#D4AF37] print:text-amber-700">
                  Flutter Developer (Mobile Systems & FinTech Specialist)
                </p>
              </div>
              <div className="space-y-1 text-xs text-neutral-400 print:text-gray-700 font-mono">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Kerala, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <a href="mailto:inshadkorambayil@gmail.com" className="hover:text-[#D4AF37]">inshadkorambayil@gmail.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <a href="https://wa.me/919061416397" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37]">+91 9061416397</a>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-2 print:text-amber-700">
                Executive Profile
              </h3>
              <p className="text-sm text-neutral-300 print:text-gray-800 leading-relaxed font-light">
                Flutter Developer with 1.5+ years of experience building secure, scalable fintech and business applications using Flutter, Riverpod, Firebase, REST APIs, and Clean Architecture. Passionate about engineering high-performance mobile software, modular architecture, and sleek luxury user interfaces.
              </p>
            </div>

            {/* Core Competencies */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-3 print:text-amber-700">
                Core Technical Skills
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-[#1A1A1E] border border-white/5 print:border-gray-300">
                  <span className="font-bold text-white print:text-black block mb-1">Languages:</span>
                  <span className="text-neutral-400 print:text-gray-700">Dart, C Programming, HTML/CSS</span>
                </div>
                <div className="p-3 rounded-xl bg-[#1A1A1E] border border-white/5 print:border-gray-300">
                  <span className="font-bold text-white print:text-black block mb-1">Framework & Tools:</span>
                  <span className="text-neutral-400 print:text-gray-700">Flutter, FlutterFlow, Firebase</span>
                </div>
                <div className="p-3 rounded-xl bg-[#1A1A1E] border border-white/5 print:border-gray-300">
                  <span className="font-bold text-white print:text-black block mb-1">Architecture:</span>
                  <span className="text-neutral-400 print:text-gray-700">Clean Architecture, MVVM, SOLID</span>
                </div>
                <div className="p-3 rounded-xl bg-[#1A1A1E] border border-white/5 print:border-gray-300">
                  <span className="font-bold text-white print:text-black block mb-1">State Management:</span>
                  <span className="text-neutral-400 print:text-gray-700">Riverpod, Provider, GetX</span>
                </div>
                <div className="p-3 rounded-xl bg-[#1A1A1E] border border-white/5 print:border-gray-300">
                  <span className="font-bold text-white print:text-black block mb-1">Networking:</span>
                  <span className="text-neutral-400 print:text-gray-700">REST APIs, Dio, JSON Parsing</span>
                </div>
                <div className="p-3 rounded-xl bg-[#1A1A1E] border border-white/5 print:border-gray-300">
                  <span className="font-bold text-white print:text-black block mb-1">Testing & Agile:</span>
                  <span className="text-neutral-400 print:text-gray-700">Unit Testing, Git, Jira, Bitbucket</span>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-4 print:text-amber-700">
                Work Experience
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-base font-bold text-white print:text-black">
                      Flutter Developer — Omnicore Digital Solutions
                    </h4>
                    <span className="text-xs text-[#D4AF37] font-mono print:text-amber-700">
                      2025 – Present | Dubai
                    </span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-neutral-300 print:text-gray-800 space-y-1 font-light">
                    <li>Engineered secure retail banking app features for Dukhan Bank FinTech platform.</li>
                    <li>Architected application layers using Riverpod state management and Clean Architecture.</li>
                    <li>Integrated REST APIs with Dio interceptors, error handling, and local caching.</li>
                    <li>Collaborated in Agile teams for performance tuning and 60fps UI responsiveness.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-base font-bold text-white print:text-black">
                      Flutter Intern — Softroniics
                    </h4>
                    <span className="text-xs text-[#D4AF37] font-mono print:text-amber-700">
                      2024 – 2025
                    </span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-neutral-300 print:text-gray-800 space-y-1 font-light">
                    <li>Built cross-platform iOS and Android mobile app prototypes using Flutter and Firebase.</li>
                    <li>Implemented Firebase Authentication and Firestore real-time database queries.</li>
                    <li>Translated Figma designs into responsive mobile screens with smooth micro-animations.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Featured Projects */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-3 print:text-amber-700">
                Key Projects
              </h3>
              <div className="space-y-2 text-xs">
                <div>
                  <span className="font-bold text-white print:text-black">1. Dukhan Bank Retail Banking App:</span>
                  <span className="text-neutral-300 print:text-gray-800"> FinTech mobile banking platform with secure authentication, gold transaction monitoring, and REST APIs.</span>
                </div>
                <div>
                  <span className="font-bold text-white print:text-black">2. VistiQ:</span>
                  <span className="text-neutral-300 print:text-gray-800"> Residential community management app featuring digital visitor gate pass QR codes, package delivery tracking, and SOS alerts.</span>
                </div>
                <div>
                  <span className="font-bold text-white print:text-black">3. Heyo:</span>
                  <span className="text-neutral-300 print:text-gray-800"> Real-time chat app with audio voice note player, Firebase Auth, and Cloud Firestore.</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
