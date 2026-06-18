import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Store Information Pages", template: "%s" },
  description: "店舗ごとの住所、電話番号、営業時間、公式サイト、地図情報を掲載しています。"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <div className="site-shell">
          <header className="site-header">
            <div className="header-inner">
              <Link href="/" className="brand">Store Pages</Link>
              <nav className="nav" aria-label="主要ナビゲーション">
                <a href="#concept">特徴</a>
                <a href="#info">店舗情報</a>
                <a href="#access">アクセス</a>
              </nav>
            </div>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
