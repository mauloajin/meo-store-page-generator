import Script from "next/script";
import type { ReactNode } from "react";
import type { NormalizedStore } from "@/lib/stores/types";
import { generateStoreContent } from "@/lib/generation/content";
import { generateLocalBusinessJsonLd } from "@/lib/seo/structured-data";

function formatOpeningHours(store: NormalizedStore): string | undefined {
  if (!store.openingHours?.length) return undefined;
  const weekday = store.openingHours.slice(0, 5);
  const weekend = store.openingHours.slice(5);
  if (weekday.length === 5 && weekend.length >= 2 && store.openingHours.every((period) => period.opens === "17:30" && period.closes === "23:00")) {
    return "月・火・水・木・金\n土・日・祝日・祝前日・祝後日\n17:30～23:00（L.O.22:00）";
  }
  return store.openingHours.map((period) => {
    if (period.closed) return `${period.day}: 定休日`;
    if (period.opens && period.closes) return `${period.day}: ${period.opens}～${period.closes}`;
    return undefined;
  }).filter(Boolean).join("\n");
}

function infoRows(store: NormalizedStore): Array<{ label: string; value: ReactNode }> {
  const openingHours = formatOpeningHours(store);
  return [
    { label: "店舗名", value: store.name },
    store.areaName ? { label: "エリア", value: store.areaName } : undefined,
    store.businessType ? { label: "業態", value: store.businessType } : undefined,
    store.address ? { label: "住所", value: store.address } : undefined,
    store.telephone ? { label: "電話番号", value: <a href={`tel:${store.telephone}`}>{store.telephone}</a> } : undefined,
    openingHours ? { label: "営業時間", value: <span className="pre-line">{openingHours}</span> } : undefined,
    store.websiteUrl ? { label: "公式サイト", value: <a href={store.websiteUrl} target="_blank" rel="noreferrer">{store.websiteUrl}</a> } : undefined,
    store.menuUrl ? { label: "メニュー", value: <a href={store.menuUrl} target="_blank" rel="noreferrer">メニューを見る</a> } : undefined,
    store.reservationUrl ? { label: "予約URL", value: <a href={store.reservationUrl} target="_blank" rel="noreferrer">予約ページを見る</a> } : undefined,
    store.mapUrl ? { label: "地図", value: <a href={store.mapUrl} target="_blank" rel="noreferrer">Googleマップで見る</a> } : undefined,
    typeof store.rating === "number" && typeof store.reviewCount === "number" ? { label: "Google評価", value: `${store.rating}（口コミ ${store.reviewCount}件）` } : undefined
  ].filter(Boolean) as Array<{ label: string; value: ReactNode }>;
}

export function StoreDetail({ store }: { store: NormalizedStore }) {
  const content = generateStoreContent(store);
  const rows = infoRows(store);
  const jsonLd = generateLocalBusinessJsonLd(store);
  const heroImage = store.photoUrls[0] ?? "/images/akasaka-kyosuke-hero.jpg";
  const openingHours = formatOpeningHours(store);
  return (
    <>
      <Script id={`json-ld-${store.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="hero-home" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-shade"><div className="hero-content">
          <p className="eyebrow">{[store.areaName, store.businessType].filter(Boolean).join(" / ")}</p>
          <h1>{store.name}</h1>
          <p className="hero-lead">赤坂で蕎麦会席と黒毛和牛しゃぶしゃぶを楽しめる、完全予約制の和食・日本料理店。</p>
          <div className="hero-actions">
            {store.websiteUrl ? <a className="button-link" href={store.websiteUrl} target="_blank" rel="noreferrer">公式サイト</a> : null}
            {store.telephone ? <a className="button-link secondary" href={`tel:${store.telephone}`}>電話する</a> : null}
            {store.mapUrl ? <a className="button-link secondary" href={store.mapUrl} target="_blank" rel="noreferrer">地図を見る</a> : null}
          </div>
        </div></div>
      </section>
      <section className="quick-info" aria-label="店舗概要">
        <div><span>住所</span><strong>{store.address}</strong></div>
        <div><span>電話番号</span><strong>{store.telephone}</strong></div>
        <div><span>営業時間</span><strong>{openingHours ? "17:30～23:00（L.O.22:00）" : "確認中"}</strong></div>
      </section>
      <div className="page-wrap">
        <section className="section intro-section" id="concept"><div><p className="eyebrow">Concept</p><h2 className="section-title">赤坂で味わう蕎麦会席と黒毛和牛しゃぶしゃぶ</h2></div><p className="large-text">{content.intro}</p></section>
        {content.features.length ? <section className="section"><p className="eyebrow">Features</p><h2 className="section-title">店舗の特徴</h2><div className="feature-grid">{content.features.map((feature) => <article className="feature-card" key={feature}><span>{feature}</span></article>)}</div></section> : null}
        <section className="section split-section" id="access"><div><p className="eyebrow">Access</p><h2 className="section-title">アクセス</h2><p>{content.access}</p><div className="inline-actions">{store.mapUrl ? <a className="button-link" href={store.mapUrl} target="_blank" rel="noreferrer">Googleマップを開く</a> : null}{store.menuUrl ? <a className="button-link secondary" href={store.menuUrl} target="_blank" rel="noreferrer">メニューを見る</a> : null}</div></div><div className="address-panel"><span>Address</span><strong>{store.address}</strong></div></section>
        {content.faqs.length ? <section className="section"><p className="eyebrow">FAQ</p><h2 className="section-title">よくある質問</h2><div className="faq-list">{content.faqs.map((faq) => <article className="faq-item" key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></article>)}</div></section> : null}
        <section className="section english-section"><p className="eyebrow">English Guide</p><h2 className="section-title">English Guide</h2><p>{content.englishGuide.body}</p></section>
        <section className="section" id="info"><p className="eyebrow">Information</p><h2 className="section-title">店舗基本情報</h2><table className="info-table"><tbody>{rows.map((row) => <tr key={row.label}><th>{row.label}</th><td>{row.value}</td></tr>)}</tbody></table></section>
        {content.keywords.length ? <section className="section compact-section"><h2 className="section-title">関連キーワード</h2><div className="keyword-list">{content.keywords.map((keyword) => <span className="pill" key={keyword}>{keyword}</span>)}</div></section> : null}
      </div>
    </>
  );
}
