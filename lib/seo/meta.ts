import type { Metadata } from "next";
import type { NormalizedStore } from "@/lib/stores/types";
export function generateStoreMetadata(store: NormalizedStore): Metadata {
  const area = store.areaName ? `${store.areaName} ` : "";
  const type = store.businessType ?? store.categories[0] ?? "店舗";
  const title = store.id === "gbp-ochiizumibeya-osaka-sumo"
    ? "Ochiizumibeya | Osaka Sumo Restaurant - 大阪 相撲 / osaka sumo"
    : `${store.name}｜${area}${type}`;
  const description = store.id === "gbp-ochiizumibeya-osaka-sumo"
    ? "Ochiizumibeya in Izumisano, Osaka offers live sumo performances, Chanko-nabe dining, show-only plans, and Japanese cultural entertainment near Kansai Airport."
    : `${store.name}は${area}${type}の店舗です。住所、電話番号、営業時間、公式サイト、メニュー情報、Googleマップへのリンクを掲載しています。`;
  return { title, description, openGraph: { title, description, type: "website" } };
}
export const siteMetadata: Metadata = { title: "MEO Store Page Generator", description: "店舗情報、営業時間、公式サイト、地図、予約リンクを掲載する店舗情報ページです。" };
