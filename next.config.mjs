import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
  images: {
    domains: ['portfolio-chen-zhu.vercel.app'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'portfolio-chen-zhu.vercel.app',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

export default withMDX(nextConfig);
