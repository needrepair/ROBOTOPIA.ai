import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "ROBOTOPIA.ai";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  ...(isGithubPages && {
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
    trailingSlash: true,
  }),
};

export default nextConfig;
