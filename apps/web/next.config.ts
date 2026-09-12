import type { NextConfig } from "next";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserOrOrganizationPage = repository?.endsWith(".github.io");
const basePath = repository && !isUserOrOrganizationPage ? `/${repository}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  transpilePackages: ["@five-orchestrators/ui"],
  images: {
    unoptimized: true
  }
};

export default nextConfig;
