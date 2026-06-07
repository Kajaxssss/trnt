"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 mx-auto max-w-7xl">
      <div className="flex flex-col items-center text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-[#0035AD] max-w-4xl leading-tight md:leading-[1.1] text-balance mb-6"
        >
          Validasi Orisinalitas Akademik Secara Instan Tanpa Jejak.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-base md:text-lg text-[#0035AD]/80 max-w-2xl text-balance"
        >
          Layanan cek kemiripan teks menggunakan sistem Turnitin Premium dengan
          jaminan No-Repository. File aman, proses 15 menit selesai.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="w-full relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]"
      >
        <Image
          src="/assets/hero-yellow-blue.png"
          alt="High-contrast hero illustration for pintarcek.com"
          fill
          priority
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 1280px"
        />
      </motion.div>
    </section>
  );
}
