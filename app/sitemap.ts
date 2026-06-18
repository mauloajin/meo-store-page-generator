import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/seo/site-url";
import { getStores } from "@/lib/stores/normalize";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getSiteUrl();
  const stores = await getStores();
  return [
    { url: baseUrl, lastModified: new Date() },
    ...stores.map((store) => ({ url: `${baseUrl}${store.path}`, lastModified: new Date() }))
  ];
}
