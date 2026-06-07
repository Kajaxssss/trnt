"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Apa itu fitur Non-Repo (No-Repository) di pintarcek?",
    answer:
      "Non-Repo atau No-Repository adalah jaminan bahwa dokumen yang Anda upload tidak akan tersimpan ke dalam database global Turnitin. Dengan fitur ini, dokumen Anda aman untuk diperiksa berulang kali di sini, dan skor kemiripan (similarity index) tidak akan melonjak menjadi 100% ketika nanti diperiksa ulang oleh pihak kampus atau dosen Anda.",
  },
  {
    question: "Apakah dokumen saya aman dan apakah privasi saya terjaga?",
    answer:
      "Kami menjamin 100% keamanan dan privasi data Anda. Dokumen yang Anda kirimkan diproses melalui jalur enkripsi aman dan akan langsung dihapus secara permanen dari sistem kami begitu laporan pengecekan selesai diserahkan ke WhatsApp Anda. Dokumen Anda tidak akan pernah disebarluaskan atau disalahgunakan.",
  },
  {
    question: "Apakah ada batasan kata atau jumlah halaman untuk setiap file?",
    answer:
      "Tidak ada batasan jumlah kata ataupun jumlah halaman. Penghitungan kuota berbasis per file dokumen yang di-upload, selama ukuran file tidak melebihi batas maksimal standar sistem sebesar 40 Megabytes.",
  },
  {
    question: "Apa yang dimaksud dengan fitur Filter Exclude (Quotes & Bibliography)?",
    answer:
      "Fitur ini memungkinkan sistem untuk mengabaikan bagian kutipan langsung (quotes) dan daftar pustaka (bibliography) saat pengecekan berlangsung. Pengaturan ini sangat membantu agar hasil skor similarity dokumen Anda menjadi lebih akurat dan fokus pada isi karya tulis asli Anda.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 px-4 sm:px-6 mx-auto w-full max-w-3xl">
      <div className="mb-12 text-center">
        <div className="w-16 h-16 bg-[#F8FAFC] rounded-2xl flex items-center justify-center mx-auto mb-6 border border-[#C4BCB0]/40">
          <HelpCircle className="w-8 h-8 text-[#0035AD]" />
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#0035AD] mb-4">
          Pertanyaan Seputar Layanan
        </h2>
        <p className="text-[#0035AD]/80 text-lg">
          Panduan ringkas tentang keamanan dan fitur sistem kami.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden transition-all duration-300 border ${
                isActive ? "border-[#C4BCB0]/60 bg-[#F8FAFC] shadow-sm" : "border-[#C4BCB0]/40 bg-white hover:border-[#C4BCB0]/60"
              }`}
            >
              <button
                className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none min-h-[4rem]"
                onClick={() => toggleAccordion(index)}
                aria-expanded={isActive}
              >
                <span className={`font-semibold pr-4 leading-snug transition-colors ${isActive ? "text-[#0035AD]" : "text-[#0035AD]"}`}>
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: isActive ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isActive ? "bg-[#0035AD] text-[#F4E11B]" : "bg-[#F8FAFC] text-[#0035AD]/60"}`}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-[#0035AD]/80 text-[15px] leading-relaxed border-t border-[#C4BCB0]/40 pt-5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
