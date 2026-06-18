import { redirect } from "next/navigation";
import { getStores, getStoresByArea } from "@/lib/stores/normalize";

export async function generateStaticParams() {
  const stores = await getStores();
  return Array.from(new Set(stores.map((store) => store.areaSlug).filter(Boolean))).map((area) => ({ area }));
}

export default async function AreaPage({ params }: { params: Promise<{ area: string }> }) {
  const { area } = await params;
  const [store] = await getStoresByArea(area);
  redirect(store?.path ?? "/");
}
