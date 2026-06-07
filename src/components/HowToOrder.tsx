"use client";

import { motion } from "framer-motion";
import { 
  UploadCloud, 
  ClipboardEdit, 
  Send, 
  MessageSquare, 
  Clock, 
  FileText 
} from "lucide-react";

export default function HowToOrder() {
  const steps = [
    {
      id: 1,
      title: "Upload Dokumen",
      desc: "Upload 1 file dokumen yang ingin diperiksa.",
      icon: UploadCloud,
    },
    {
      id: 2,
      title: "Isi Data Diri",
      desc: "Isi data diri berupa nama lengkap, nomor WhatsApp aktif, dan judul dokumen.",
      icon: ClipboardEdit,
    },
    {
      id: 3,
      title: "Submit Formulir",
      desc: "Klik tombol Submit Sekarang untuk mengirim pesanan.",
      icon: Send,
    },
    {
      id: 4,
      title: "Konfirmasi WhatsApp",
      desc: "Lakukan konfirmasi pesanan melalui WhatsApp Admin yang akan terbuka secara otomatis.",
      icon: MessageSquare,
    },
    {
      id: 5,
      title: "Proses Pengecekan",
      desc: "Tim kami akan segera memproses dokumen Anda.",
      icon: Clock,
    },
    {
      id: 6,
      title: "Laporan Dikirim",
      desc: "Hasil laporan pengecekan akan dikirim langsung ke WhatsApp yang Anda daftarkan.",
      icon: FileText,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 mx-auto w-full max-w-none bg-[#F8FAFC] border-y border-[#0035AD]/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-5xl font-bold text-[#0035AD] mb-4"
          >
            Cara Order Pengecekan
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1.5 w-24 bg-[#F4E11B] mx-auto rounded-full"
          />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {steps.map((step) => (
            <motion.div 
              key={step.id} 
              variants={itemVariants}
              className="bg-white rounded-3xl p-8 border border-[#0035AD]/10 shadow-sm relative hover:shadow-md hover:border-[#0035AD]/30 transition-all group"
            >
              <div className="absolute top-6 right-6 text-[5rem] font-black text-[#F8FAFC] group-hover:text-[#F4E11B]/10 transition-colors pointer-events-none select-none z-0">
                {step.id}
              </div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#0035AD]/5 flex items-center justify-center mb-6 group-hover:bg-[#0035AD] transition-colors">
                  <step.icon className="w-7 h-7 text-[#0035AD] group-hover:text-[#F4E11B] transition-colors" />
                </div>
                
                <h3 className="text-xl font-semibold text-[#0035AD] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#0035AD]/70 leading-relaxed text-balance">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 w-full max-w-3xl mx-auto rounded-2xl bg-[#0035AD] p-6 md:p-8 text-center shadow-xl border border-[#0035AD]/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#F4E11B] rounded-full blur-3xl opacity-20 pointer-events-none"></div>
          <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-white rounded-full blur-3xl opacity-10 pointer-events-none"></div>
          
          <h4 className="text-xl md:text-2xl font-serif font-bold text-[#F4E11B] relative z-10 leading-snug">
            "Proses mudah, cepat, dan tanpa perlu membuat akun."
          </h4>
        </motion.div>
      </div>
    </section>
  );
}
