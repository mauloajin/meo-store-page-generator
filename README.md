# MEO Store Page Generator

Google Business Profile API 由来の店舗データを想定し、Next.js だけで静的な店舗情報ページを生成するサイトです。

## 方針

- 有料 API、有料 DB、有料 CMS は使いません。
- Google Places API / Google Maps API / OpenAI API は使いません。
- 最初は Google Business Profile API のモックデータで動きます。
- 確認できない情報は表示しません。
- 店舗データから SEO meta、JSON-LD、FAQ、English Guide をルールベースで生成します。

## ローカル実行

```bash
npm install
npm run dev
```

## Vercel 無料枠での公開

1. GitHub にこのプロジェクトを push します。
2. Vercel の無料アカウントで GitHub リポジトリを Import します。
3. Framework Preset は `Next.js` を選びます。
4. Build Command は `npm run build`、Output は Next.js の自動設定のままで公開します。
5. 独自ドメインは設定せず、Vercel が発行する `*.vercel.app` URL を使います。

## 将来の GBP API 接続

`lib/gbp/client.ts` の `fetchGbpLocations` を実 API 接続に差し替えます。Google Places API と Google Maps API には接続しません。
