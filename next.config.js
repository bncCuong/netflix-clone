const whitTM = require('next-transpile-modules')([
  '@stripe/firestore-stripe-payments',
]);

/** @type {import('next').NextConfig} */

const withVideos = require('next-videos');

module.exports = withVideos();

module.exports = whitTM({
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org'],
  },
});
