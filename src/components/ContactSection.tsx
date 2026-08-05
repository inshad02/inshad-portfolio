"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa6";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger gold confetti celebration
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#D4AF37", "#F3E5AB", "#996515", "#FFFFFF"],
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-[#0B0B0B]">
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
            <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
            Get In Touch
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight"
          >
            Let&apos;s Build Something <span className="text-gold-gradient">Exceptional</span>
          </motion.h2>
          <div className="h-1 w-20 bg-gold-gradient rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="p-8 rounded-3xl bg-[#121214]/80 border border-[#D4AF37]/20 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
              <h3 className="text-2xl font-bold font-heading text-white mb-4">
                Contact Information
              </h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed mb-8">
                Have a mobile project in mind or interested in hiring a senior Flutter engineer? Feel free to send a message or connect directly via social networks.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4 group">
                  <div className="p-3.5 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0B0B0B] transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-neutral-500 font-semibold">
                      Email
                    </span>
                    <a
                      href="mailto:inshad.dev@gmail.com"
                      className="text-sm font-semibold text-white hover:text-[#D4AF37] transition-colors"
                    >
                      inshadkorambayil@gmail.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp & Phone */}
                <div className="flex items-center gap-4 group">
                  <div className="p-3.5 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0B0B0B] transition-colors">
                    <FaWhatsapp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-neutral-500 font-semibold">
                      WhatsApp / Phone
                    </span>
                    <a
                      href="https://wa.me/919061416397"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white hover:text-[#D4AF37] transition-colors"
                    >
                      +91 9061416397
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 group">
                  <div className="p-3.5 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0B0B0B] transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-neutral-500 font-semibold">
                      Location
                    </span>
                    <span className="text-sm font-semibold text-white">
                      Kerala, India
                    </span>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-center gap-4 group">
                  <div className="p-3.5 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0B0B0B] transition-colors">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-neutral-500 font-semibold">
                      Work Availability
                    </span>
                    <span className="text-sm font-semibold text-[#D4AF37]">
                      Full-Time & High-Impact Contracts
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10 pt-6 border-t border-white/10">
                <span className="block text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-4">
                  Connect Online
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://github.com/inshad02"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#1A1A1E] border border-white/10 hover:border-[#D4AF37] text-xs font-semibold text-white transition-all hover:bg-[#D4AF37]/10"
                  >
                    <FaGithub className="w-4 h-4 text-[#D4AF37]" />
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#1A1A1E] border border-white/10 hover:border-[#D4AF37] text-xs font-semibold text-white transition-all hover:bg-[#D4AF37]/10"
                  >
                    <FaLinkedin className="w-4 h-4 text-[#D4AF37]" />
                    LinkedIn
                  </a>
                  <a
                    href="https://www.instagram.com/inshad.k_?igsh=MTd5bWNyYmp1eWdnYQ%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#1A1A1E] border border-white/10 hover:border-[#D4AF37] text-xs font-semibold text-white transition-all hover:bg-[#D4AF37]/10"
                  >
                    <FaInstagram className="w-4 h-4 text-[#D4AF37]" />
                    Instagram
                  </a>
                  <a
                    href="https://wa.me/919061416397"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#1A1A1E] border border-white/10 hover:border-[#D4AF37] text-xs font-semibold text-white transition-all hover:bg-[#D4AF37]/10"
                  >
                    <FaWhatsapp className="w-4 h-4 text-[#D4AF37]" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-[#121214]/80 border border-[#D4AF37]/20 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] text-[#D4AF37]">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-neutral-300 max-w-md font-light">
                    Thank you for reaching out. Muhammed Inshad will get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-gold-gradient text-[#0B0B0B] font-bold text-xs uppercase tracking-wider"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Doe"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#1A1A1E] border border-white/10 focus:border-[#D4AF37] text-white text-sm focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@company.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#1A1A1E] border border-white/10 focus:border-[#D4AF37] text-white text-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="Flutter Project Inquiry / Mobile Role"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#1A1A1E] border border-white/10 focus:border-[#D4AF37] text-white text-sm focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Describe your project, timeline, or open opportunity..."
                      className="w-full px-4 py-3.5 rounded-xl bg-[#1A1A1E] border border-white/10 focus:border-[#D4AF37] text-white text-sm focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gold-gradient text-[#0B0B0B] font-bold font-heading text-sm uppercase tracking-wider hover:opacity-95 transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Sending Message...</span>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 text-[#0B0B0B]" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
