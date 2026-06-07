import { CheckCircle2, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#0035AD]/20 pt-16 pb-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <CheckCircle2 className="w-6 h-6 text-[#0035AD]" />
              <span className="font-serif text-xl font-bold text-[#0035AD] tracking-tight">
                pintarcek
              </span>
            </Link>
            <p className="text-[#0035AD]/70 text-sm leading-relaxed mb-6">
              Platform validasi orisinalitas naskah akademik premium untuk mahasiswa, 
              akademisi, dan profesional. Menggunakan infrastruktur terbaik untuk 
              hasil instan dan privasi terjamin.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <h4 className="font-semibold text-[#0035AD] mb-5">Layanan</h4>
            <ul className="space-y-3">
              <li><a href="#fitur" className="text-sm text-[#0035AD]/70 hover:text-[#0035AD] transition-colors">Fitur Keamanan</a></li>
              <li><a href="#harga" className="text-sm text-[#0035AD]/70 hover:text-[#0035AD] transition-colors">Paket & Harga</a></li>
              <li><a href="#kemitraan" className="text-sm text-[#0035AD]/70 hover:text-[#0035AD] transition-colors">Program Reseller</a></li>
              <li><a href="#faq" className="text-sm text-[#0035AD]/70 hover:text-[#0035AD] transition-colors">Bantuan FAQ</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-semibold text-[#0035AD] mb-5">Informasi Operasional</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F8FAFC] border border-[#0035AD]/20 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-[#0035AD]">WIB</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#0035AD]">Jam Operasional</p>
                  <p className="text-sm text-[#0035AD]/70 mt-0.5">Senin - Minggu: 08.00 - 23.00 WIB</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F8FAFC] border border-[#0035AD]/20 flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5 text-[#0035AD]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#0035AD]">WhatsApp Center</p>
                  <a href="https://wa.me/628000000000" className="text-sm text-[#0035AD]/70 mt-0.5 hover:text-[#0035AD] transition-colors">
                    +62 800 0000 0000
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F8FAFC] border border-[#0035AD]/20 flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5 text-[#0035AD]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#0035AD]">Email Layanan</p>
                  <a href="mailto:support@pintarcek.com" className="text-sm text-[#0035AD]/70 mt-0.5 hover:text-[#0035AD] transition-colors">
                    support@pintarcek.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#0035AD]/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#0035AD]/60">
            &copy; {new Date().getFullYear()} pintarcek. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-[#0035AD]/60 hover:text-[#0035AD] transition-colors">Kebijakan Privasi</a>
            <a href="#" className="text-sm text-[#0035AD]/60 hover:text-[#0035AD] transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
