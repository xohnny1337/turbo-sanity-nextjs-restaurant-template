const withTM = require("next-transpile-modules")(["ui"]);

module.exports = withTM({
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },

  //TODO: Fix typings then remove this
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
});
