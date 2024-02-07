const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public", // Destination directory for the PWA files
  cacheOnFrontEndNav: true,
  register: true, // Register the PWA service worker
  skipWaiting: true, // Skip waiting for service worker activation
  reloadOnOnline: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: true
  }
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["placehold.co"],
  },
};

module.exports = withPWA(nextConfig);
