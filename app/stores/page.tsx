import { redirect } from "next/navigation";
import { getStores } from "@/lib/stores/normalize";

export default async function StoresPage() {
  const [store] = await getStores();
  redirect(store.path);
}
