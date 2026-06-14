import type { Metadata } from "next";
import type { NormalizedStore } from "@/lib/stores/types";

export function generateStoreMetadata(store: NormalizedStore): Metadata {
  const area = store.areaName ? `${store.areaName} ` : "";
  const type = store.businessType ?? store.categories[0] ?? "店舗";
  const title = `${store.name}｜${area}${type}の店舗情報`;
  const description = `${store.name}の店舗情報ページです。${area}${type}として、Googleビジネスプロフィール由来の確認済み情報をもとに基本情報を整理しています。`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website"
    }
  };
}

export const siteMetadata: Metadata = {
  title: "店舗情報一覧",
  description: "Googleビジネスプロフィール由来の情報をもとに整理した店舗情報一覧です。"
};
