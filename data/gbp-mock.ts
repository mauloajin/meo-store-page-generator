import type { GbpLocation } from "@/lib/stores/types";

export const gbpMockLocations: GbpLocation[] = [
  {
    source: "google-business-profile",
    gbpLocationId: "gbp-ochiizumibeya-osaka-sumo",
    name: "Ochiizumibeya | Osaka Sumo",
    address: {
      country: "JP",
      postalCode: "598-0047",
      prefecture: "大阪府",
      locality: "泉佐野市",
      streetAddress: "りんくう往来南3 りんくうプレジャータウン シークル 2F 泉佐野オチアリーナ",
      formatted: "〒598-0047 大阪府泉佐野市りんくう往来南3 りんくうプレジャータウン シークル 2F 泉佐野オチアリーナ"
    },
    telephone: "072-447-6711",
    openingHours: [
      { day: "木曜日", opens: "12:00", closes: "15:00" },
      { day: "木曜日", opens: "17:00", closes: "20:00" },
      { day: "金曜日", opens: "12:00", closes: "15:00" },
      { day: "金曜日", opens: "17:00", closes: "20:00" },
      { day: "土曜日", opens: "12:00", closes: "15:00" },
      { day: "土曜日", opens: "17:00", closes: "20:00" },
      { day: "日曜日", opens: "12:00", closes: "15:00" },
      { day: "日曜日", opens: "17:00", closes: "20:00" },
      { day: "月曜日", closed: true },
      { day: "火曜日", closed: true },
      { day: "水曜日", closed: true }
    ],
    categories: ["体験", "相撲", "レストラン", "観光"],
    description: "Osaka Sumo Restaurant Ochiizumibeya offers a unique cultural experience where Japanese cuisine and the tradition of sumo wrestling come together. Inside the restaurant, a sumo ring is set in the center, letting guests watch live sumo performances up close while they dine. The show is performed by former professional sumo wrestlers and includes powerful matches, cultural explanations, and interactive moments with guests. Various plans are available, including show-only options without meals, as well as dining plans featuring traditional Chanko-nabe. Halal Wagyu Sukiyaki is also available in selected plans, and premium courses may include sushi as part of the meal. Experience Japanese culture, food, and live entertainment in Osaka.",
    websiteUrl: "https://www.ochiizumi.com/",
    businessProfileUrl: "https://maps.app.goo.gl/k2BCc7bhXy66Jm3z7",
    mapUrl: "https://maps.app.goo.gl/k2BCc7bhXy66Jm3z7",
    menuUrl: "https://japanculture.info/shop/ochiizumi",
    services: ["Live sumo show", "Former professional sumo wrestlers", "Interactive sumo experience", "English-friendly cultural explanation", "Show-only plans", "Dining plans"],
    menuItems: ["Chanko-nabe", "Halal Wagyu Sukiyaki", "Sushi premium course"],
    photoUrls: [
      "https://static.wixstatic.com/media/543426_573392fa041f4490a86c190815c918ba~mv2.jpg/v1/fill/w_1248,h_936,fp_0.50_0.50,q_90,enc_avif,quality_auto/543426_573392fa041f4490a86c190815c918ba~mv2.jpg",
      "https://static.wixstatic.com/media/543426_6036ab2afc834d1a95c3283c32ed251d~mv2.jpg/v1/fill/w_1244,h_936,fp_0.50_0.50,q_90,enc_avif,quality_auto/543426_6036ab2afc834d1a95c3283c32ed251d~mv2.jpg",
      "https://static.wixstatic.com/media/543426_b59a6ca6d3934b60afc9d73cebf15ae6~mv2.jpg/v1/fill/w_1244,h_936,fp_0.50_0.50,q_90,enc_avif,quality_auto/543426_b59a6ca6d3934b60afc9d73cebf15ae6~mv2.jpg"
    ]
  }
];
