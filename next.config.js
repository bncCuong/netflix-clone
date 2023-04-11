const whitTM = require('next-transpile-modules')([
  '@stripe/firestore-stripe-payments',
]);

const withVideos = require('next-videos');

module.exports = withVideos();

module.exports = whitTM({
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org', 'assets.nflxext.com'],
  },
});
