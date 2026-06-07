"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Fitur", href: "#fitur" },
    { name: "Harga", href: "#harga" },
    { name: "Kemitraan", href: "#kemitraan" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 md:top-4 md:mx-auto md:max-w-4xl ${
          scrolled || isOpen ? "bg-white/80" : "bg-white/60"
        } backdrop-blur-md md:rounded-full border-b md:border border-[#0035AD]/20 px-6 py-3`}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 z-50">
            <CheckCircle2 className="w-6 h-6 text-[#0035AD]" />
            <span className="font-serif text-xl font-bold text-[#0035AD] tracking-tight">
              pintarcek
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#0035AD]/80 hover:text-[#0035AD] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#form"
              className="bg-[#0035AD] text-[#F4E11B] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#0035AD]/80 transition-colors"
            >
              Cek Sekarang
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white flex flex-col justify-center items-center md:hidden"
          >
            <div className="flex flex-col items-center gap-8 w-full px-6">
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="text-3xl font-serif text-[#0035AD] hover:text-[#0035AD]/70 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#form"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 bg-[#0035AD] text-[#F4E11B] w-full max-w-sm text-center py-4 rounded-full text-lg font-medium active:scale-95 transition-transform"
              >
                Cek Sekarang
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
