import Script from "next/script";
import type { ReactNode } from "react";
import type { NormalizedStore } from "@/lib/stores/types";
import { generateStoreContent } from "@/lib/generation/content";
import { generateLocalBusinessJsonLd } from "@/lib/seo/structured-data";

function formatOpeningHours(store: NormalizedStore): string | undefined {
  if (!store.openingHours?.length) return undefined;

  return store.openingHours
    .map((period) => {
      if (period.closed) return `${period.day}: 定休日`;
      if (period.opens && period.closes) return `${period.day}: ${period.opens}-${period.closes}`;
      return undefined;
    })
    .filter(Boolean)
    .join("\n");
}

function infoRows(store: NormalizedStore): Array<{ label: string; value: ReactNode }> {
  const openingHours = formatOpeningHours(store);

  return [
    { label: "店舗名", value: store.name },
    store.areaName ? { label: "エリア", value: store.areaName } : undefined,
    store.businessType ? { label: "業態", value: store.businessType } : undefined,
    store.address ? { label: "住所", value: store.address } : undefined,
    store.telephone ? { label: "電話番号", value: <a href={`tel:${store.telephone}`}>{store.telephone}</a> } : undefined,
    openingHours ? { label: "営業時間", value: <span style={{ whiteSpace: "pre-line" }}>{openingHours}</span> } : undefined,
    store.websiteUrl
      ? {
          label: "公式サイト",
          value: (
            <a href={store.websiteUrl} target="_blank" rel="noreferrer">
              {store.websiteUrl}
            </a>
          )
        }
      : undefined,
    store.businessProfileUrl
      ? {
          label: "Googleビジネスプロフィール",
          value: (
            <a href={store.businessProfileUrl} target="_blank" rel="noreferrer">
              表示する
            </a>
          )
        }
      : undefined,
    store.reservationUrl
      ? {
          label: "予約URL",
          value: (
            <a href={store.reservationUrl} target="_blank" rel="noreferrer">
              予約ページ
            </a>
          )
        }
      : undefined,
    store.instagramUrl
      ? {
          label: "Instagram",
          value: (
            <a href={store.instagramUrl} target="_blank" rel="noreferrer">
              Instagram
            </a>
          )
        }
      : undefined,
    store.mapUrl
      ? {
          label: "地図",
          value: (
            <a href={store.mapUrl} target="_blank" rel="noreferrer">
              Googleマップで見る
            </a>
          )
        }
      : undefined
  ].filter(Boolean) as Array<{ label: string; value: ReactNode }>;
}

export function StoreDetail({ store }: { store: NormalizedStore }) {
  const content = generateStoreContent(store);
  const rows = infoRows(store);
  const jsonLd = generateLocalBusinessJsonLd(store);

  return (
    <>
      <Script
        id={`json-ld-${store.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="hero">
        <p className="eyebrow">{[store.areaName, store.businessType].filter(Boolean).join(" / ")}</p>
        <h1>{store.name}</h1>
        <p className="lead">{content.intro}</p>
      </section>

      {content.features.length ? (
        <section className="section">
          <h2 className="section-title">店舗の特徴</h2>
          <div className="list">
            {content.features.map((feature) => (
              <p key={feature}>{feature}</p>
            ))}
          </div>
        </section>
      ) : null}

      {content.access ? (
        <section className="section">
          <h2 className="section-title">アクセス</h2>
          <p>{content.access}</p>
        </section>
      ) : null}

      {content.keywords.length ? (
        <section className="section">
          <h2 className="section-title">関連キーワード</h2>
          <div className="keyword-list">
            {content.keywords.map((keyword) => (
              <span className="pill" key={keyword}>
                {keyword}
              </span>
            ))}
          </div>
        </section>
      ) : null}

      {content.faqs.length ? (
        <section className="section">
          <h2 className="section-title">FAQ</h2>
          <div className="faq-list">
            {content.faqs.map((faq) => (
              <article className="faq-item" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="section">
        <h2 className="section-title">English Guide</h2>
        <p>{content.englishGuide.body}</p>
        {content.englishGuide.basicInfo.length ? (
          <table className="info-table" style={{ marginTop: 16 }}>
            <tbody>
              {content.englishGuide.basicInfo.map((item) => (
                <tr key={item.label}>
                  <th>{item.label}</th>
                  <td>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </section>

      <section className="section">
        <h2 className="section-title">店舗基本情報</h2>
        <table className="info-table">
          <tbody>
            {rows.map((row) => (
              <tr key={row.label}>
                <th>{row.label}</th>
                <td>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
