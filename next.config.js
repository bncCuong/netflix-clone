const whitTM = require('next-transpile-modules')([
  '@stripe/firestore-stripe-payments',
]);

/** @type {import('next').NextConfig} */
<<<<<<< HEAD
=======
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org', 'assets.nflxext.com'],
  },
};
>>>>>>> d42c155564485414f45f0dc87c05945910090296

const withVideos = require('next-videos');

module.exports = withVideos();

module.exports = whitTM({
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org'],
  },
});
