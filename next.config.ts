import { type NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const isAnalyze = process.env.ANALYZE === "true";

const withAnalyzer = withBundleAnalyzer({
  enabled: isAnalyze,
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // your other existing Next.js config here
};

export default withAnalyzer(nextConfig);
