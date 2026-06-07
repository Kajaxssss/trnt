"use client";

import { useState, useRef } from "react";
import { Loader2, CheckCircle2, AlertCircle, UploadCloud } from "lucide-react";

interface FormDataState {
  name: string;
  whatsapp: string;
  title: string;
  paket: string;
  fileName: string;
  fileMimeType: string;
  fileBase64: string;
}

export default function IntakeForm() {
  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    whatsapp: "",
    title: "",
    paket: "Paket Standard",
    fileName: "",
    fileMimeType: "",
    fileBase64: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Filter valid extensions
    const validExtensions = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!validExtensions.includes(file.type) && !file.name.match(/\.(pdf|doc|docx)$/i)) {
      setErrorMessage("Format file tidak didukung. Harap unggah PDF, DOC, atau DOCX.");
      return;
    }

    // Size limit e.g. 20MB
    if (file.size > 20 * 1024 * 1024) {
      setErrorMessage("Ukuran file maksimal 20MB.");
      return;
    }

    setErrorMessage("");
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64String = (event.target?.result as string).split(",")[1];
      setFormData((prev) => ({
        ...prev,
        fileName: file.name,
        fileMimeType: file.type || "application/octet-stream",
        fileBase64: base64String,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fileBase64) {
      setErrorMessage("Harap unggah dokumen yang ingin dicek.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const scriptUrl = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL || "https://script.google.com/macros/s/AKfycbzVdfQ1xlQWSNyYdX-KbAaBKtwblyrUdI4bgnu-qwPZND2PoEJA6yhUiqP7hUDxSxdyBA/exec";

      const response = await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors", // Required for typical unauthenticated App Script endpoints
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Because mode: "no-cors" results in an opaque response, we assume success if it didn't throw network error.
      // In a real-world scenario, you may proxy this via Next.js API to read the response.
      setStatus("success");
      
      // Build WhatsApp URL
      const waNumber = "628000000000"; // Replace with actual number
      const waMessage = `Halo Pintarcek, saya ingin memproses cek Turnitin.%0A%0A*Nama*: ${formData.name}%0A*Paket*: ${formData.paket}%0A*Judul*: ${formData.title}%0A%0ADokumen telah berhasil diunggah melalui website. Mohon info pembayarannya.`;
      const waUrl = `https://wa.me/${waNumber}?text=${waMessage}`;
      
      // Auto-redirect to WhatsApp
      window.open(waUrl, "_blank");

      setFormData({
        name: "",
        whatsapp: "",
        title: "",
        paket: "Paket Standard",
        fileName: "",
        fileMimeType: "",
        fileBase64: "",
      });
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      setStatus("error");
      setErrorMessage("Terjadi kesalahan jaringan. Silakan coba lagi.");
    }
  };

  return (
    <section id="form" className="py-16 md:py-24 px-4 sm:px-6 mx-auto max-w-4xl">
      <div className="bg-white rounded-[2rem] border border-[#0035AD]/20 shadow-xl overflow-hidden">
        <div className="bg-[#0035AD] p-8 md:p-12 text-center">
          <h2 className="font-serif text-3xl font-semibold text-white mb-3">
            Kirim Naskah Anda
          </h2>
          <p className="text-[#F4E11B]/80 max-w-lg mx-auto text-sm md:text-base">
            Isi formulir di bawah ini dengan lengkap. Dokumen Anda dijamin aman 100% dan akan diproses dalam waktu 15 menit.
          </p>
        </div>

        <div className="p-8 md:p-12">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center text-center py-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-[#0035AD] mb-2">Dokumen Berhasil Terkirim!</h3>
              <p className="text-[#0035AD]/80 max-w-md">
                Tim kami sedang memproses permintaan Anda. Kami akan segera menghubungi Anda melalui WhatsApp yang terdaftar.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                <button
                  onClick={() => {
                    const waNumber = "628000000000";
                    const waUrl = `https://wa.me/${waNumber}`;
                    window.open(waUrl, "_blank");
                  }}
                  className="px-6 py-3 w-full sm:w-auto bg-[#25D366] hover:bg-[#1EBE5C] text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
                >
                  Konfirmasi via WhatsApp
                </button>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-6 py-3 w-full sm:w-auto bg-[#0035AD]/10 hover:bg-[#0035AD]/20 text-[#0035AD] rounded-xl font-medium transition-colors"
                >
                  Kirim Dokumen Lain
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">Nama Lengkap</label>
                  <input
                    id="name"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#0035AD]/20 focus:outline-none focus:ring-2 focus:ring-[#0035AD]/20 focus:border-[#0035AD] transition-all bg-[#F8FAFC] text-base"
                    placeholder="Contoh: Budi Santoso"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-slate-700">Nomor WhatsApp Aktif</label>
                  <input
                    id="whatsapp"
                    required
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#0035AD]/20 focus:outline-none focus:ring-2 focus:ring-[#0035AD]/20 focus:border-[#0035AD] transition-all bg-[#F8FAFC] text-base"
                    placeholder="Contoh: 08123456789"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="title" className="block text-sm font-medium text-slate-700">Judul Dokumen</label>
                  <input
                    id="title"
                    required
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#0035AD]/20 focus:outline-none focus:ring-2 focus:ring-[#0035AD]/20 focus:border-[#0035AD] transition-all bg-[#F8FAFC] text-base"
                    placeholder="Judul Skripsi / Jurnal / Tugas Akhir"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="paket" className="block text-sm font-medium text-slate-700">Pilihan Paket</label>
                  <select
                    id="paket"
                    required
                    value={formData.paket}
                    onChange={(e) => setFormData({ ...formData, paket: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#0035AD]/20 focus:outline-none focus:ring-2 focus:ring-[#0035AD]/20 focus:border-[#0035AD] transition-all bg-[#F8FAFC] text-base"
                  >
                    <option value="Paket Lite">Paket Lite (Rp10.000)</option>
                    <option value="Paket Standard">Paket Standard (Rp25.000)</option>
                    <option value="Paket Ultima">Paket Ultima (Rp40.000)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">Upload File (PDF / DOC / DOCX)</label>
                <div className="relative border-2 border-dashed border-[#0035AD]/20 rounded-xl p-8 hover:bg-[#F8FAFC] hover:border-slate-300 transition-colors text-center group cursor-pointer">
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <UploadCloud className="w-8 h-8 mx-auto text-[#0035AD]/60 group-hover:text-[#0035AD] transition-colors mb-3" />
                  {formData.fileName ? (
                    <div className="text-sm font-medium text-[#0035AD]">
                      {formData.fileName}
                    </div>
                  ) : (
                    <>
                      <div className="text-sm font-medium text-[#0035AD] mb-1">
                        Klik untuk upload atau drag & drop
                      </div>
                      <div className="text-xs text-[#0035AD]/70">
                        Maksimal 20MB. Format Word atau PDF.
                      </div>
                    </>
                  )}
                </div>
              </div>

              {errorMessage && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 bg-[#0035AD] text-[#F4E11B] rounded-xl font-medium text-lg hover:bg-[#0035AD]/80 transition-colors disabled:opacity-70 flex items-center justify-center"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin mr-2" />
                    Memproses...
                  </>
                ) : (
                  "Submit & Cek Sekarang"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
