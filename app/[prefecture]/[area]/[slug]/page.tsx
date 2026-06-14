import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StoreDetail } from "@/components/store-detail";
import { generateStoreMetadata } from "@/lib/seo/meta";
import { getStoreBySlug, getStores } from "@/lib/stores/normalize";

type RouteParams = {
  prefecture: string;
  area: string;
  slug: string;
};

export async function generateStaticParams() {
  const stores = await getStores();

  return stores
    .filter((store) => store.prefectureSlug && store.areaSlug)
    .map((store) => ({
      prefecture: store.prefectureSlug,
      area: store.areaSlug,
      slug: store.slug
    }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const store = await getStoreBySlug(slug);

  if (!store) return {};
  return generateStoreMetadata(store);
}

export default async function RegionalStorePage({
  params
}: {
  params: Promise<RouteParams>;
}) {
  const { prefecture, area, slug } = await params;
  const store = await getStoreBySlug(slug);

  if (!store || store.prefectureSlug !== prefecture || store.areaSlug !== area) {
    notFound();
  }

  return <StoreDetail store={store} />;
}
