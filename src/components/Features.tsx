import { ShieldCheck, Zap, FileText, Lock } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#0035AD]" />,
      title: "Garansi No-Repository",
      description:
        "Jaminan dokumen tidak tersimpan di database global Turnitin. Aman untuk disubmit ke kampus.",
      colSpan: "md:col-span-1",
    },
    {
      icon: <FileText className="w-8 h-8 text-[#0035AD]" />,
      title: "Hasil PDF Resmi",
      description:
        "Official Turnitin report lengkap dengan indeks kemiripan berwarna.",
      colSpan: "md:col-span-1",
    },
    {
      icon: <Zap className="w-8 h-8 text-[#0035AD]" />,
      title: "Proses Kilat 15 Menit",
      description:
        "Sistem terintegrasi, bypass antrean lama. Cek instan kapan saja diperlukan.",
      colSpan: "md:col-span-1",
    },
    {
      icon: <Lock className="w-8 h-8 text-[#0035AD]" />,
      title: "Enkripsi Privasi",
      description:
        "Dokumen langsung dihapus permanen pasca-pengecekan tanpa jejak digital tersisa.",
      colSpan: "md:col-span-1",
    },
  ];

  return (
    <section id="fitur" className="py-16 md:py-24 px-4 sm:px-6 mx-auto max-w-7xl">
      <div className="mb-12 text-center md:text-left">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#0035AD] mb-4">
          Standar Kualitas Tertinggi
        </h2>
        <p className="text-[#0035AD]/80 md:max-w-xl text-balance">
          Kami menghadirkan infrastruktur Turnitin premium dengan protokol
          keamanan ketat untuk menjamin kerahasiaan naskah akademik Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={`bg-white rounded-3xl p-8 border border-[#0035AD]/20 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start ${feature.colSpan}`}
          >
            <div className="w-16 h-16 rounded-2xl bg-[#F8FAFC] flex items-center justify-center mb-6 border border-[#0035AD]/20">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-[#0035AD] mb-3">
              {feature.title}
            </h3>
            <p className="text-[#0035AD]/80 leading-relaxed text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
