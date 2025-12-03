import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import AppHeader from "@/components/AppHeader";

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
          bg-[#F0F6FF]  /* Light Blue 背景 */
          text-gray-900
        `}
      >
        <div className="min-h-screen">
          <AppHeader />
          <main className="pt-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
