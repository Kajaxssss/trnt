"use client";

import { ShieldCheck, UserCheck } from "lucide-react";
import React from "react";

const track1 = [
  "Budi: Gila sih, aman beneran gak masuk repo pas cek ulang di kampus.",
  "Siti: Deg-degan revisi bab 4, untung hasilnya cepet banget keluar.",
  "Rian: Sempat trauma tempat lain masuk repo, di pintarcek asli aman pol!",
  "Dewi: Rekomen buat yang lagi ngejar tenggat sidang, adminnya responsif.",
  "Agus: Simple bgt ga perlu bikin akun ribet, tinggal upload kelar.",
  "Mega: Skor turun drastis setelah pake filter exclude quotes, mantap!",
  "Nizam: Hasil pdf-nya resmi mirip punya dosen, ga abal-abal.",
  "Indah: Recommended, privasi aman ga takut draf skripsi bocor.",
];

const track2 = [
  "Fajar: Pas cek ulang di perpusnas skor tetep sama, trusted No-Repo!",
  "Laras: Penyelamat di kala dosen killer minta revisi malem ini juga.",
  "Reno: Ga pake lama, 10 menit pdf langsung masuk WA.",
  "Anisa: Murah banget buat kantong mahasiswa tingkat akhir.",
  "Gilang: Langsung langganan paket standard buat revisi bab per bab.",
  "Putri: Awalnya skeptis, pas coba sendiri langsung percaya.",
  "Eko: Valid bgt, coretan warna plagiasinya detail dan akurat.",
  "Dita: Amanah pol, data skripsi langsung diapus dari server mereka.",
];

const TestimonialCard = ({ text }: { text: string }) => {
  const [name, ...messageParts] = text.split(":");
  const message = messageParts.join(":");

  return (
    <div className="flex-shrink-0 w-[280px] sm:w-[350px] bg-white/5 border border-[#F4E11B]/20 rounded-2xl p-5 mx-3 backdrop-blur-sm shadow-sm transition-colors hover:bg-white/10">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 rounded-full bg-[#F4E11B] flex items-center justify-center shrink-0">
          <UserCheck className="w-4 h-4 text-[#0035AD]" />
        </div>
        <h4 className="font-bold text-[#F4E11B]">{name}</h4>
      </div>
      <p className="text-white/90 text-sm leading-relaxed">{message}</p>
    </div>
  );
};

export default function TestimonialMarquee() {
  return (
    <section className="py-16 md:py-24 bg-[#0035AD] overflow-hidden border-y border-[#F4E11B]/20">
      <div className="px-4 sm:px-6 mx-auto max-w-7xl text-center mb-12">
        <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#F4E11B]/10 border border-[#F4E11B]/30 rounded-full text-[#F4E11B] text-sm font-semibold mb-6">
          <ShieldCheck className="w-4 h-4" />
          <span>Garansi Aman 100%</span>
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-4">
          Telah dipercayai oleh ribuan mahasiswa untuk kelulusan mereka
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto text-lg">
          Privasi 100% aman, tanpa re-upload, dan hasil keluar hitungan menit.
        </p>
      </div>

      <div className="relative flex flex-col gap-6 w-full max-w-[100vw]">
        {/* Track 1 - Scrolls Left */}
        <div className="flex w-fit animate-marquee hover:[animation-play-state:paused]">
          {[...track1, ...track1, ...track1].map((text, idx) => (
            <TestimonialCard key={`t1-${idx}`} text={text} />
          ))}
        </div>

        {/* Track 2 - Scrolls Right */}
        <div className="flex w-fit animate-marquee-reverse hover:[animation-play-state:paused]">
          {[...track2, ...track2, ...track2].map((text, idx) => (
            <TestimonialCard key={`t2-${idx}`} text={text} />
          ))}
        </div>

        {/* Gradients to fade edges */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#0035AD] to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#0035AD] to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}
