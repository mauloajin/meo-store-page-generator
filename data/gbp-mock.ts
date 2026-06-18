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
  },
  {
    source: "google-business-profile",
    gbpLocationId: "gbp-akasaka-sobasuke",
    name: "赤坂 蕎介｜蕎麦会席・黒毛和牛しゃぶしゃぶ",
    address: { country: "JP", postalCode: "107-0052", prefecture: "東京都", locality: "港区赤坂", streetAddress: "3丁目10-7", formatted: "〒107-0052 東京都港区赤坂3丁目10-7" },
    telephone: "03-3505-5338",
    openingHours: [
      { day: "月曜日", opens: "17:30", closes: "23:00" }, { day: "火曜日", opens: "17:30", closes: "23:00" }, { day: "水曜日", opens: "17:30", closes: "23:00" }, { day: "木曜日", opens: "17:30", closes: "23:00" }, { day: "金曜日", opens: "17:30", closes: "23:00" }, { day: "土曜日", opens: "17:30", closes: "23:00" }, { day: "日曜日", opens: "17:30", closes: "23:00" }, { day: "祝日", opens: "17:30", closes: "23:00" }, { day: "祝前日", opens: "17:30", closes: "23:00" }, { day: "祝後日", opens: "17:30", closes: "23:00" }
    ],
    categories: ["和食店", "蕎麦店", "日本料理店"],
    description: "【ご接待・ご宴会等に】【完全予約制】赤坂 蕎介は、赤坂で個室を備えた落ち着きある和食・日本料理のお店です。香り高い蕎麦を中心に、季節の食材を生かした蕎麦懐石、黒毛和牛のしゃぶしゃぶなど、上質な味わいをゆっくりお楽しみいただけます。接待や会食、記念日、デートなど、大切なひとときにもおすすめです。夜は日本料理とお酒を楽しむディナーとして、幅広いシーンでご利用いただけます。赤坂で個室のある蕎麦店、蕎麦懐石、和食、黒毛和牛しゃぶしゃぶをお探しの方は、ぜひ赤坂 蕎介へお越しください。落ち着いた空間で、素材の持ち味を生かした料理と丁寧なおもてなしを大切にしています。大人の食事や特別な日にもふさわしい時間をお過ごしください。",
    websiteUrl: "https://www.akasaka-kyosuke.com/",
    rating: 4.3,
    reviewCount: 46,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=%E8%B5%A4%E5%9D%82%20%E8%95%8E%E4%BB%8B%EF%BD%9C%E8%95%8E%E9%BA%A6%E4%BC%9A%E5%B8%AD%E3%83%BB%E9%BB%92%E6%AF%9B%E5%92%8C%E7%89%9B%E3%81%97%E3%82%83%E3%81%B6%E3%81%97%E3%82%83%E3%81%B6",
    menuUrl: "https://tabelog.com/tokyo/A1308/A130801/13024654/party/",
    services: ["完全予約制", "個室あり"],
    menuItems: ["蕎麦会席", "黒毛和牛しゃぶしゃぶ"],
    photoUrls: ["/images/akasaka-kyosuke-hero.jpg"]
  }
];
