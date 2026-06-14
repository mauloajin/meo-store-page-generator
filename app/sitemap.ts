import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/seo/site-url";
import { getStores } from "@/lib/stores/normalize";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getSiteUrl();
  const stores = await getStores();
  const areaUrls = Array.from(
    new Set(stores.map((store) => store.areaSlug).filter((area): area is string => Boolean(area)))
  ).map((area) => ({
    url: `${baseUrl}/areas/${area}`,
    lastModified: new Date()
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/stores`,
      lastModified: new Date()
    },
    ...areaUrls,
    ...stores.map((store) => ({
      url: `${baseUrl}${store.path}`,
      lastModified: new Date()
    }))
  ];
}
