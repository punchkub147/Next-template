const withOffline = require("next-offline");
const withSass = require("@zeit/next-sass");
const withPlugins = require("next-compose-plugins");

const nextConfig = {
  // cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]"
  },
  webpack(config, options) {
    return config;
  },

  target: "serverless",
  transformManifest: manifest => ["/"].concat(manifest), // add the homepage to the cache
  workboxOpts: {
    swDest: "static/service-worker.js",
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: "NetworkFirst",
        options: {
          cacheName: "https-calls",
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }
    ]
  }
};

module.exports = withPlugins([withSass, withOffline], nextConfig);
