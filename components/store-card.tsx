import Link from "next/link";
import type { NormalizedStore } from "@/lib/stores/types";

export function StoreCard({ store }: { store: NormalizedStore }) {
  return (
    <article className="store-card">
      <div className="meta-row">
        {store.areaName ? <span className="pill">{store.areaName}</span> : null}
        {store.businessType ? <span className="pill">{store.businessType}</span> : null}
      </div>
      <h3>{store.name}</h3>
      {store.address ? <p>{store.address}</p> : <p className="empty">住所は未確認です。</p>}
      <Link href={store.path} className="button-link secondary">
        詳細を見る
      </Link>
    </article>
  );
}
