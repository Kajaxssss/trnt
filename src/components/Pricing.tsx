import { Check, QrCode, Wallet, Landmark } from "lucide-react";

export default function Pricing() {
  const tiers = [
    {
      name: "Paket Lite",
      price: "10.000",
      description: "Ideal untuk pengecekan dokumen tunggal yang cepat.",
      features: ["1x Cek Turnitin", "Hasil PDF Full Report"],
      popular: false,
    },
    {
      name: "Paket Standard",
      price: "25.000",
      description: "Paling populer untuk mahasiswa tingkat akhir.",
      features: [
        "3x Cek Turnitin",
        "Hasil PDF Full Report",
        "Bebas Atur Filter Exclude",
      ],
      popular: true,
    },
    {
      name: "Paket Ultima",
      price: "40.000",
      description: "Prioritas maksimal untuk tenggat waktu mendesak.",
      features: [
        "5x Cek Turnitin",
        "Hasil PDF Full Report",
        "Bebas Atur Filter Exclude",
        "Prioritas Antrean Kilat",
      ],
      popular: false,
    },
  ];

  return (
    <section id="harga" className="py-16 md:py-24 bg-white border-y border-[#0035AD]/20">
      <div className="px-4 sm:px-6 mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#0035AD] mb-4">
            Investasi Transparan
          </h2>
          <p className="text-[#0035AD]/80 max-w-xl mx-auto text-balance">
            Pilih paket yang sesuai dengan kebutuhan Anda. Tanpa biaya tersembunyi.
          </p>
        </div>

        <div className="flex overflow-x-auto md:overflow-visible snap-x snap-mandatory md:grid md:grid-cols-3 gap-6 md:gap-8 pb-8 md:pb-0 pt-4 hide-scrollbar">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`snap-center shrink-0 w-[85vw] md:w-auto rounded-3xl p-8 border ${tier.popular
                  ? "border-[#0035AD] bg-[#F8FAFC] shadow-lg relative"
                  : "border-[#0035AD]/20 bg-white"
                } flex flex-col`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0035AD] text-[#F4E11B] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                  Paling Populer
                </div>
              )}
              <h3 className="text-xl font-semibold text-[#0035AD] mb-2">
                {tier.name}
              </h3>
              <p className="text-[#0035AD]/70 text-sm mb-6 min-h-[40px]">
                {tier.description}
              </p>
              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-sm font-semibold text-[#0035AD]/70">Rp</span>
                <span className="text-4xl font-serif font-bold text-[#0035AD]">
                  {tier.price}
                </span>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-700 stroke-[3]" />
                    </div>
                    <span className="text-sm text-slate-700">{feat}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#form"
                className={`w-full py-3.5 rounded-xl font-medium text-center transition-colors ${tier.popular
                    ? "bg-[#0035AD] text-[#F4E11B] hover:bg-[#0035AD]/80"
                    : "bg-[#0035AD]/10 text-[#0035AD] hover:bg-[#C4BCB0]/40"
                  }`}
              >
                Pilih {tier.name}
              </a>
            </div>
          ))}
        </div>

        {/* <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 text-[#0035AD]/60">
          <p className="text-sm font-medium text-[#0035AD]/70 uppercase tracking-wider text-center">
            Pembayaran Tersedia:
          </p>
          <div className="flex gap-8">
            <div className="flex items-center gap-2">
              <QrCode className="w-5 h-5" />
              <span className="text-sm font-medium">QRIS</span>
            </div>
            <div className="flex items-center gap-2">
              <Wallet className="w-5 h-5" />
              <span className="text-sm font-medium">E-Wallet</span>
            </div>
            <div className="flex items-center gap-2">
              <Landmark className="w-5 h-5" />
              <span className="text-sm font-medium">Bank Transfer</span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
