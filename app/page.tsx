import Link from "next/link";
import { StoreCard } from "@/components/store-card";
import { getStores } from "@/lib/stores/normalize";
import { siteMetadata } from "@/lib/seo/meta";

export const metadata = siteMetadata;

export default async function HomePage() {
  const stores = await getStores();
  const areas = Array.from(
    new Map(
      stores
        .filter((store) => store.areaName && store.areaSlug)
        .map((store) => [store.areaSlug, store.areaName])
    )
  );

  return (
    <>
      <section className="hero">
        <p className="eyebrow">店舗情報</p>
        <h1>掲載店舗一覧</h1>
        <p className="lead">
          Googleビジネスプロフィール由来の情報をもとに、確認できる店舗情報だけを整理して掲載しています。
        </p>
      </section>

      {areas.length ? (
        <section className="section">
          <h2 className="section-title">エリア別</h2>
          <div className="keyword-list">
            {areas.map(([areaSlug, areaName]) => (
              <Link className="pill" href={`/areas/${areaSlug}`} key={areaSlug}>
                {areaName}
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <section className="section">
        <h2 className="section-title">店舗一覧</h2>
        <div className="grid">
          {stores.map((store) => (
            <StoreCard store={store} key={store.id} />
          ))}
        </div>
      </section>
    </>
  );
}
