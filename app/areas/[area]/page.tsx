import { redirect } from "next/navigation";
import { getStoresByArea } from "@/lib/stores/normalize";

export async function generateStaticParams() {
  return [{ area: "akasaka" }];
}

export default async function AreaPage({ params }: { params: Promise<{ area: string }> }) {
  const { area } = await params;
  const [store] = await getStoresByArea(area);
  redirect(store?.path ?? "/");
}
