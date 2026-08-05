"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenResume: () => void;
}

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Section intersection detection
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B0B0B]/80 backdrop-blur-md border-b border-[#D4AF37]/20 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo: MI */}
        <a
          href="#home"
          className="group flex items-center gap-2 text-2xl font-bold font-heading tracking-tight"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-[#121214] border border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
            <span className="text-gold-gradient font-heading font-extrabold text-xl">
              MI
            </span>
            <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
          </div>
          <span className="hidden sm:inline-block text-sm font-medium tracking-widest uppercase text-neutral-400 group-hover:text-white transition-colors">
            Inshad<span className="text-[#D4AF37]">.dev</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-[#121214]/60 p-1.5 rounded-full border border-[#D4AF37]/15 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                  isActive
                    ? "text-[#0B0B0B] font-semibold"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gold-gradient rounded-full shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/resume.pdf"
            download="Muhammed_Inshad_Resume.pdf"
            onClick={onOpenResume}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] border border-[#D4AF37]/30 hover:border-[#D4AF37] rounded-full bg-[#121214]/60 hover:bg-[#D4AF37]/10 transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.1)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            Resume
          </a>
          <a
            href="#contact"
            className="group flex items-center gap-1.5 px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#0B0B0B] bg-gold-gradient hover:opacity-95 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300 transform hover:scale-[1.03]"
          >
            Hire Me
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="md:hidden p-2.5 rounded-xl bg-[#121214] border border-[#D4AF37]/30 text-white focus:outline-none"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-[#D4AF37]" />
          ) : (
            <Menu className="w-6 h-6 text-[#D4AF37]" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0B0B0B]/95 border-b border-[#D4AF37]/20 backdrop-blur-xl px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-heading font-medium py-2 border-b border-white/5 flex items-center justify-between ${
                    activeSection === item.href.substring(1)
                      ? "text-[#D4AF37] font-bold"
                      : "text-neutral-300"
                  }`}
                >
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                  )}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="/resume.pdf"
                  download="Muhammed_Inshad_Resume.pdf"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full py-3 text-center text-sm font-semibold text-[#D4AF37] border border-[#D4AF37]/40 rounded-xl bg-[#121214] block"
                >
                  Download Resume
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 text-center text-sm font-bold text-[#0B0B0B] bg-gold-gradient rounded-xl shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
