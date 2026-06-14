import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StoreCard } from "@/components/store-card";
import { getStores, getStoresByArea } from "@/lib/stores/normalize";

export async function generateStaticParams() {
  const stores = await getStores();
  const areas = stores
    .map((store) => store.areaSlug)
    .filter((area): area is string => Boolean(area));

  return Array.from(new Set(areas)).map((area) => ({ area }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ area: string }>;
}): Promise<Metadata> {
  const { area } = await params;
  const stores = await getStoresByArea(area);
  const areaName = stores[0]?.areaName ?? area;

  return {
    title: `${areaName}の店舗一覧`,
    description: `${areaName}エリアの店舗情報一覧です。`
  };
}

export default async function AreaPage({ params }: { params: Promise<{ area: string }> }) {
  const { area } = await params;
  const stores = await getStoresByArea(area);

  if (!stores.length) notFound();

  const areaName = stores[0]?.areaName ?? area;

  return (
    <>
      <section className="hero">
        <p className="eyebrow">Area</p>
        <h1>{areaName}の店舗一覧</h1>
        <p className="lead">{areaName}エリアの店舗情報を掲載しています。</p>
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
