import type { GeneratedStoreContent, NormalizedStore } from "@/lib/stores/types";

function unique(values: string[]): string[] {
  return Array.from(new Set(values.filter(Boolean)));
}

export function generateStoreContent(store: NormalizedStore): GeneratedStoreContent {
  const area = store.areaName ? `${store.areaName}エリア` : "該当エリア";
  const businessType = store.businessType ?? store.categories[0] ?? "店舗";
  const description = store.description ? `${store.description}` : undefined;

  const introParts = [
    `${store.name}は、${area}の${businessType}です。`,
    description,
    store.categories.length
      ? `Googleビジネスプロフィール上のカテゴリには${store.categories.join("、")}が含まれます。`
      : undefined
  ].filter(Boolean);

  const features = unique([
    store.businessType ? `${store.businessType}として登録されています。` : "",
    ...store.categories.map((category) => `${category}カテゴリの店舗情報として整理しています。`),
    store.websiteUrl ? "公式サイトURLが確認できます。" : "",
    store.address ? "住所情報が確認できます。" : "",
    store.telephone ? "電話番号が確認できます。" : "",
    store.openingHours?.length ? "営業時間情報が確認できます。" : ""
  ]);

  const keywords = unique([
    ...store.keywords,
    store.areaName && store.businessType ? `${store.areaName} ${store.businessType}` : "",
    store.areaName ? `${store.areaName} 店舗情報` : "",
    store.businessType ?? ""
  ]);

  const faqs = [
    {
      question: `${store.name}はどのような店舗ですか？`,
      answer: `${store.name}は${store.areaName ? `${store.areaName}エリアの` : ""}${businessType}です。このページでは、確認できる店舗情報だけを掲載しています。`
    },
    store.address
      ? {
          question: `${store.name}の住所はどこですか？`,
          answer: `${store.name}の住所は${store.address}です。`
        }
      : undefined,
    store.telephone
      ? {
          question: `${store.name}の電話番号は？`,
          answer: `電話番号は${store.telephone}です。`
        }
      : undefined,
    store.openingHours?.length
      ? {
          question: `${store.name}の営業時間は？`,
          answer: "営業時間は店舗基本情報に掲載しています。最新情報は公式サイトやGoogleビジネスプロフィールも確認してください。"
        }
      : undefined,
    store.websiteUrl
      ? {
          question: `${store.name}の公式サイトはありますか？`,
          answer: "公式サイトURLが確認できるため、店舗基本情報からアクセスできます。"
        }
      : undefined
  ].filter(Boolean) as Array<{ question: string; answer: string }>;

  const englishBasicInfo = [
    { label: "Name", value: store.name },
    store.areaName ? { label: "Area", value: store.areaName } : undefined,
    store.businessType ? { label: "Category", value: store.businessType } : undefined,
    store.address ? { label: "Address", value: store.address } : undefined,
    store.telephone ? { label: "Phone", value: store.telephone } : undefined,
    store.websiteUrl ? { label: "Official Website", value: store.websiteUrl } : undefined
  ].filter(Boolean) as Array<{ label: string; value: string }>;

  return {
    intro: introParts.join(""),
    access: store.address
      ? `${store.name}は${store.address}にあります。地図情報が確認できる場合は、店舗基本情報の地図リンクから確認できます。`
      : undefined,
    features,
    keywords,
    faqs,
    englishGuide: {
      title: `English Guide for ${store.name}`,
      body: `${store.name} is listed as ${businessType}${store.areaName ? ` in ${store.areaName}` : ""}. This page only shows information confirmed from the available business profile data.`,
      basicInfo: englishBasicInfo
    }
  };
}
