import { StoreCard } from "@/components/store-card";
import { getStores } from "@/lib/stores/normalize";

export default async function StoresPage() {
  const stores = await getStores();

  return (
    <div className="page-wrap listing-page">
      <section className="section">
        <p className="eyebrow">Stores</p>
        <h1>店舗一覧</h1>
        <p className="large-text">各店舗の詳細ページへ移動できます。</p>
        <div className="grid">
          {stores.map((store) => <StoreCard key={store.id} store={store} />)}
        </div>
      </section>
    </div>
  );
}
