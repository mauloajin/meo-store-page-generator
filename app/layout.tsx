import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "店舗情報一覧",
    template: "%s"
  },
  description: "Googleビジネスプロフィール由来の情報をもとに整理した店舗情報一覧です。"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <div className="site-shell">
          <header className="site-header">
            <div className="header-inner">
              <Link href="/" className="brand">
                店舗情報一覧
              </Link>
              <nav className="nav" aria-label="主要ナビゲーション">
                <Link href="/stores">店舗一覧</Link>
              </nav>
            </div>
          </header>
          <main className="main">{children}</main>
        </div>
      </body>
    </html>
  );
}
