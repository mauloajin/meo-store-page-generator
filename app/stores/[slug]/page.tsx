import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StoreDetail } from "@/components/store-detail";
import { generateStoreMetadata } from "@/lib/seo/meta";
import { getStoreBySlug, getStores } from "@/lib/stores/normalize";

export async function generateStaticParams() {
  const stores = await getStores();
  return stores.map((store) => ({ slug: store.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const store = await getStoreBySlug(slug);

  if (!store) return {};
  return generateStoreMetadata(store);
}

export default async function StorePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const store = await getStoreBySlug(slug);

  if (!store) notFound();

  return <StoreDetail store={store} />;
}
