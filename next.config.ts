import type { NextConfig } from "next";
const nextConfig: NextConfig = { output: "standalone", async redirects() { return [{ source: "/stores/akasaka-sobasuke", destination: "/tokyo/akasaka/akasaka-kyosuke", permanent: true }, { source: "/stores/akasaka-kyosuke", destination: "/tokyo/akasaka/akasaka-kyosuke", permanent: true }]; } };
export default nextConfig;
