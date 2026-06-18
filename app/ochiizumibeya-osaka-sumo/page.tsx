import type { Metadata } from "next";
import { StoreDetail } from "@/components/store-detail";
import { generateStoreMetadata } from "@/lib/seo/meta";
import { getStoreBySlug } from "@/lib/stores/normalize";

export async function generateMetadata(): Promise<Metadata> {
  const store = await getStoreBySlug("ochiizumibeya-osaka-sumo");
  return store ? generateStoreMetadata(store) : {};
}

export default async function OchiizumibeyaPage() {
  const store = await getStoreBySlug("ochiizumibeya-osaka-sumo");
  return store ? <StoreDetail store={store} /> : null;
}
