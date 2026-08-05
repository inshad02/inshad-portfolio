"use client";

import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa6";

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

        {/* Center: Social Links & Copyright */}
        <div className="flex flex-col items-center gap-3 text-xs text-center text-neutral-500 font-light">
          <div className="flex items-center gap-4 text-neutral-400">
            <a
              href="https://github.com/inshad02"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#121214] border border-[#D4AF37]/20 hover:border-[#D4AF37] text-neutral-400 hover:text-[#D4AF37] transition-all"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#121214] border border-[#D4AF37]/20 hover:border-[#D4AF37] text-neutral-400 hover:text-[#D4AF37] transition-all"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/inshad.k_?igsh=MTd5bWNyYmp1eWdnYQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#121214] border border-[#D4AF37]/20 hover:border-[#D4AF37] text-neutral-400 hover:text-[#D4AF37] transition-all"
              aria-label="Instagram Profile"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/919061416397"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#121214] border border-[#D4AF37]/20 hover:border-[#D4AF37] text-neutral-400 hover:text-[#D4AF37] transition-all"
              aria-label="WhatsApp Contact"
            >
              <FaWhatsapp className="w-4 h-4" />
            </a>
            <a
              href="mailto:inshadkorambayil@gmail.com"
              className="p-2 rounded-lg bg-[#121214] border border-[#D4AF37]/20 hover:border-[#D4AF37] text-neutral-400 hover:text-[#D4AF37] transition-all"
              aria-label="Email Contact"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
          <p>© {new Date().getFullYear()} Muhammed Inshad. All rights reserved.</p>
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
