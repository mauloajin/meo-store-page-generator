import type { Metadata } from "next";
import { StoreCard } from "@/components/store-card";
import { getStores } from "@/lib/stores/normalize";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Store Information Pages",
    description: "店舗ごとの住所、電話番号、営業時間、予約リンク、公式サイト、地図情報を掲載しています。"
  };
}

export default async function HomePage() {
  const stores = await getStores();

  return (
    <div className="page-wrap listing-page">
      <section className="section">
        <p className="eyebrow">Store Pages</p>
        <h1>店舗情報ページ一覧</h1>
        <p className="large-text">店舗ごとに作成したSEO向け情報ページです。</p>
        <div className="grid">
          {stores.map((store) => <StoreCard key={store.id} store={store} />)}
        </div>
      </section>
    </div>
  );
}
