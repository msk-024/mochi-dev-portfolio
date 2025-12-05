import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import "keen-slider/keen-slider.min.css";
import AppHeader from "@/app/_components/AppHeader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mocchi Portfolio | Nurse × Developer",
  description:
    "看護 × 開発 をテーマにした App Store 風ポートフォリオサイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`
          ${inter.variable} 
          ${notoSansJp.variable} 
          antialiased
          bg-[#F0F6FF]
          text-gray-900
        `}
      >
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-blue-300/90 blur-xl animate-blob" />
          <div className="absolute top-40 right-10 h-64 w-64 rounded-full bg-emerald-300/90 blur-xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-20 left-1/2 h-64 w-64 rounded-full bg-indigo-300/90 blur-xl animate-blob animation-delay-4000" />
        </div>
        <div className="min-h-screen">
          <AppHeader />
          <main className="pt-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
