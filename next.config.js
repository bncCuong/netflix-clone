/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org', 'assets.nflxext.com'],
  },
};

const withVideos = require('next-videos');

module.exports = withVideos();

module.exports = nextConfig;
