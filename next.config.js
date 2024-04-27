/** @type {import('next').NextConfig} */
const nextIntlPlugin = require("next-intl/plugin");
const withNextIntl = nextIntlPlugin("./i18n.ts");
const nextConfig = {
  output: "standalone",
  reactStrictMode: false,
  // images: {
  //   remotePatterns: [""],
  // },
};

module.exports = withNextIntl(nextConfig);
