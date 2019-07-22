const withOffline = require("next-offline");
const withSass = require("@zeit/next-sass");
const withPlugins = require("next-compose-plugins");
const axios = require("axios");

const config = require("./config");

const _axios = axios.create({
  baseURL: config.api
});

const nextConfig = {
  async exportPathMap() {
    const { data: todos } = await _axios("/todos");
    const todoPages = todos.map(todo => {
      return {
        [`/todo/${todo.id}`]: { page: "/todo", query: { id: todo.id } }
      };
    });

    return {
      "/": { page: "/" },
      "/todo": { page: "/todo" },
      ...todoPages,
      "/counter": { page: "/counter" }
    };
  },

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
