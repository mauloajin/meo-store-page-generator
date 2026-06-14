import type { NormalizedStore, OpeningPeriod } from "@/lib/stores/types";

function toOpeningHours(periods?: OpeningPeriod[]): string[] | undefined {
  if (!periods?.length) return undefined;

  const values = periods
    .filter((period) => !period.closed && period.opens && period.closes)
    .map((period) => `${period.day} ${period.opens}-${period.closes}`);

  return values.length ? values : undefined;
}

export function generateLocalBusinessJsonLd(store: NormalizedStore): Record<string, unknown> {
  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": [store.businessType, ...store.categories].some(
      (value) => value?.includes("食") || value?.includes("蕎麦") || value?.includes("しゃぶ")
    )
      ? "Restaurant"
      : "LocalBusiness",
    name: store.name
  };

  if (store.address) jsonLd.address = store.address;
  if (store.telephone) jsonLd.telephone = store.telephone;
  if (store.description) jsonLd.description = store.description;
  if (store.websiteUrl) jsonLd.url = store.websiteUrl;
  if (store.mapUrl) jsonLd.hasMap = store.mapUrl;
  if (store.businessType) jsonLd.servesCuisine = store.businessType;

  const openingHours = toOpeningHours(store.openingHours);
  if (openingHours) jsonLd.openingHours = openingHours;

  const sameAs = [store.businessProfileUrl, store.instagramUrl].filter(Boolean);
  if (sameAs.length) jsonLd.sameAs = sameAs;

  if (typeof store.latitude === "number" && typeof store.longitude === "number") {
    jsonLd.geo = {
      "@type": "GeoCoordinates",
      latitude: store.latitude,
      longitude: store.longitude
    };
  }

  if (typeof store.rating === "number" && typeof store.reviewCount === "number") {
    jsonLd.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: store.rating,
      reviewCount: store.reviewCount
    };
  }

  return jsonLd;
}
