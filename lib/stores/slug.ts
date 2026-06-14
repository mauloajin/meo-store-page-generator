const prefectureSlugMap: Record<string, string> = {
  東京都: "tokyo",
  大阪府: "osaka",
  京都府: "kyoto",
  北海道: "hokkaido",
  神奈川県: "kanagawa",
  愛知県: "aichi",
  福岡県: "fukuoka"
};

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function prefectureToSlug(prefecture?: string): string | undefined {
  if (!prefecture) return undefined;
  return prefectureSlugMap[prefecture] ?? slugify(prefecture);
}

export function buildStorePath(store: {
  slug: string;
  prefectureSlug?: string;
  areaSlug?: string;
}): string {
  if (store.prefectureSlug && store.areaSlug) {
    return `/${store.prefectureSlug}/${store.areaSlug}/${store.slug}`;
  }

  return `/stores/${store.slug}`;
}
