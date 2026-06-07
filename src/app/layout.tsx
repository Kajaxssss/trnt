import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "pintarcek | Validasi Orisinalitas Akademik",
  description: "Layanan cek kemiripan teks menggunakan sistem Turnitin Premium dengan jaminan No-Repository.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`scroll-smooth ${playfair.variable} ${jakarta.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[var(--color-background)] text-[var(--color-foreground)]">{children}</body>
    </html>
  );
}
