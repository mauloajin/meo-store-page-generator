import { gbpMockLocations } from "@/data/gbp-mock";
import type { GbpLocation } from "@/lib/stores/types";

export type GbpFetchOptions = {
  useMock?: boolean;
};

export async function fetchGbpLocations(
  options: GbpFetchOptions = { useMock: true }
): Promise<GbpLocation[]> {
  if (options.useMock === false) {
    throw new Error(
      "Google Business Profile API integration is not configured yet. Do not use Google Places API or Google Maps API here."
    );
  }

  return gbpMockLocations;
}
