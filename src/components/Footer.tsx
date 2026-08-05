"use client";

import { ArrowUp, Sparkles } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 bg-[#070708] border-t border-[#D4AF37]/20 py-12 text-neutral-400">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Branding */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#121214] border border-[#D4AF37]/40 flex items-center justify-center font-heading font-extrabold text-[#D4AF37] text-sm">
            MI
          </div>
          <div>
            <p className="text-sm font-semibold text-white">
              Muhammed Inshad
            </p>
            <p className="text-xs text-neutral-500">
              Flutter Developer • FinTech Specialist
            </p>
          </div>
        </div>

        {/* Center: Copyright */}
        <div className="text-xs text-center text-neutral-500 font-light">
          <p>© {new Date().getFullYear()} Muhammed Inshad. All rights reserved.</p>
          <p className="mt-1 text-neutral-400 font-medium">
            Designed & Developed by <span className="text-[#D4AF37]">Muhammed Inshad</span>
          </p>
        </div>

        {/* Right: Scroll to top */}
        <button
          onClick={scrollToTop}
          className="group p-3 rounded-full bg-[#121214] border border-[#D4AF37]/30 hover:border-[#D4AF37] text-[#D4AF37] transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:bg-[#D4AF37] hover:text-[#0B0B0B]"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
        </button>
      </div>
    </footer>
  );
}
