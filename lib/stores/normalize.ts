import { storeSupplements } from "@/data/store-supplements";
import { fetchGbpLocations } from "@/lib/gbp/client";
import type { GbpLocation, NormalizedStore } from "@/lib/stores/types";
import { buildStorePath, prefectureToSlug, slugify } from "@/lib/stores/slug";

function formatAddress(location: GbpLocation): string | undefined {
  if (location.address?.formatted) return location.address.formatted;

  const parts = [
    location.address?.postalCode ? `〒${location.address.postalCode}` : undefined,
    location.address?.prefecture,
    location.address?.locality,
    location.address?.streetAddress
  ].filter(Boolean);

  return parts.length ? parts.join(" ") : undefined;
}

export async function getStores(): Promise<NormalizedStore[]> {
  const gbpLocations = await fetchGbpLocations({ useMock: true });

  return gbpLocations.map((location) => {
    const supplement = storeSupplements.find(
      (item) => item.gbpLocationId === location.gbpLocationId
    );
    const prefectureName = location.address?.prefecture ?? supplement?.prefectureName;
    const prefectureSlug =
      supplement?.prefectureSlug ?? prefectureToSlug(location.address?.prefecture);
    const slug = supplement?.preferredSlug ?? slugify(location.name);

    const store: NormalizedStore = {
      id: location.gbpLocationId,
      name: location.name,
      slug,
      path: "",
      areaName: supplement?.areaName ?? location.address?.locality,
      areaSlug: supplement?.areaSlug,
      prefectureName,
      prefectureSlug,
      businessType: supplement?.businessType ?? location.categories?.[0],
      address: formatAddress(location),
      telephone: location.telephone,
      openingHours: location.openingHours,
      categories: location.categories ?? [],
      description: location.description,
      websiteUrl: location.websiteUrl,
      businessProfileUrl: location.businessProfileUrl,
      reservationUrl: supplement?.reservationUrl,
      instagramUrl: supplement?.instagramUrl,
      mapUrl: location.mapUrl,
      latitude: location.latitude,
      longitude: location.longitude,
      services: location.services ?? [],
      products: location.products ?? [],
      menuItems: location.menuItems ?? [],
      photoUrls: location.photoUrls ?? [],
      rating: location.rating,
      reviewCount: location.reviewCount,
      keywords: [...(supplement?.keywords ?? []), ...(location.categories ?? [])]
    };

    store.path = buildStorePath(store);
    return store;
  });
}

export async function getStoreBySlug(slug: string): Promise<NormalizedStore | undefined> {
  const stores = await getStores();
  return stores.find((store) => store.slug === slug);
}

export async function getStoresByArea(area: string): Promise<NormalizedStore[]> {
  const stores = await getStores();
  return stores.filter((store) => store.areaSlug === area);
}
