import type { Metadata } from "next";
import type { NormalizedStore } from "@/lib/stores/types";
export function generateStoreMetadata(store: NormalizedStore): Metadata {
  const area = store.areaName ? `${store.areaName} ` : "";
  const type = store.businessType ?? store.categories[0] ?? "店舗";
  const title = `${store.name}｜${area}${type}`;
  const description = `${store.name}は${area}${type}の店舗です。住所、電話番号、営業時間、公式サイト、メニュー情報、Googleマップへのリンクを掲載しています。`;
  return { title, description, openGraph: { title, description, type: "website" } };
}
export const siteMetadata: Metadata = { title: "赤坂 蕎介｜蕎麦会席・黒毛和牛しゃぶしゃぶ", description: "赤坂 蕎介は、赤坂で蕎麦会席と黒毛和牛しゃぶしゃぶを楽しめる和食・日本料理店です。住所、電話番号、公式サイトなどの店舗情報を掲載しています。" };
