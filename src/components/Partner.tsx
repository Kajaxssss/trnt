import { BadgeCheck, BriefcaseBusiness, Layers } from "lucide-react";

export default function Partner() {
  const plans = [
    {
      name: "Mitra Silver",
      deposit: "140.000",
      kuota: 20,
      hpp: "7.000",
    },
    {
      name: "Mitra Gold",
      deposit: "325.000",
      kuota: 50,
      hpp: "6.500",
    },
    {
      name: "Mitra Platinum",
      deposit: "600.000",
      kuota: 100,
      hpp: "6.000",
    },
  ];

  return (
    <section id="kemitraan" className="py-16 md:py-24 px-4 sm:px-6 mx-auto w-full max-w-none bg-gradient-to-br from-[#0035AD] to-[#002270] border-y border-[#0035AD]/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-5">
          <BadgeCheck className="w-12 h-12 text-[#F4E11B] mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#F4E11B] mb-6">
            Program Drop-Servicing White-Label
          </h2>
          <p className="text-white/90 mb-6 text-balance leading-relaxed">
            Kembangkan bisnis layanan cek plagiasi Anda secara mandiri. Kami menyediakan infrastruktur di belakang layar dengan sistem <strong>Blind Drop-Servicing</strong>.
          </p>
          
          <ul className="space-y-5">
            <li className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white border border-[#0035AD]/20 flex items-center justify-center shrink-0">
                <Layers className="w-5 h-5 text-slate-700" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm">Autonomous Branding</h4>
                <p className="text-sm text-white/70 mt-1">Kami tidak akan pernah menghubungi klien Anda. Seluruh transaksi dan komunikasi tetap berada di bawah kendali brand Anda.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white border border-[#0035AD]/20 flex items-center justify-center shrink-0">
                <BriefcaseBusiness className="w-5 h-5 text-slate-700" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm">Neutral PDF Logs</h4>
                <p className="text-sm text-white/70 mt-1">Laporan resmi (PDF) dari sistem Turnitin disajikan tanpa watermark agen pihak ketiga, murni log standar.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#0035AD]/20 shadow-lg">
            <h3 className="text-xl font-semibold text-[#0035AD] mb-6 border-b border-[#0035AD]/20 pb-4">
              Paket Deposit Reseller
            </h3>
            <div className="space-y-4">
              {plans.map((plan, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-2xl bg-[#F8FAFC] border border-[#0035AD]/20 hover:border-slate-300 transition-colors gap-4">
                  <div>
                    <h4 className="font-semibold text-[#0035AD] text-lg">{plan.name}</h4>
                    <p className="text-sm text-[#0035AD]/70 mt-0.5">Deposit Rp{plan.deposit}</p>
                  </div>
                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center">
                    <span className="text-sm font-medium text-slate-700 bg-white px-3 py-1 rounded-full border border-[#0035AD]/20">
                      Kuota {plan.kuota}x
                    </span>
                    <span className="text-xs font-semibold text-[#0035AD]/70 sm:mt-2">
                      HPP Rp{plan.hpp}/file
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-[#0035AD]/20">
              <a href="https://wa.me/628000000000" target="_blank" rel="noreferrer" className="block w-full py-3.5 bg-[#0035AD] text-[#F4E11B] rounded-xl text-center font-medium hover:bg-[#0035AD]/80 transition-colors">
                Daftar Sebagai Mitra
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
