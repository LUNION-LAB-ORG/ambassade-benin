import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig = withNextIntl({
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "api.lorem.space" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "a0.muscache.com" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "i.pravatar.cc" },
      { protocol: "https", hostname: "placehold.co" },
    ],
  },
});

export default nextConfig;
