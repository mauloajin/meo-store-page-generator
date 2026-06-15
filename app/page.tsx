import type { Metadata } from "next";
import { StoreDetail } from "@/components/store-detail";
import { generateStoreMetadata } from "@/lib/seo/meta";
import { getStores } from "@/lib/stores/normalize";

export async function generateMetadata(): Promise<Metadata> {
  const [store] = await getStores();
  return store ? generateStoreMetadata(store) : {};
}

export default async function HomePage() {
  const [store] = await getStores();
  return <StoreDetail store={store} />;
}
