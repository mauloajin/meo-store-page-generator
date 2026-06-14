import { StoreCard } from "@/components/store-card";
import { getStores } from "@/lib/stores/normalize";

export const metadata = {
  title: "店舗一覧",
  description: "掲載店舗の一覧です。店舗名、エリア、業態、住所、詳細ページを確認できます。"
};

export default async function StoresPage() {
  const stores = await getStores();

  return (
    <>
      <section className="hero">
        <p className="eyebrow">All Stores</p>
        <h1>店舗一覧</h1>
        <p className="lead">店舗名、エリア、業態、住所、詳細ページを一覧で確認できます。</p>
      </section>

      <section className="section">
        <div className="grid">
          {stores.map((store) => (
            <StoreCard store={store} key={store.id} />
          ))}
        </div>
      </section>
    </>
  );
}
