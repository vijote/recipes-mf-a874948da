import { federation } from '@module-federation/vite';
module.exports = {
  server: {
    origin: 'http://localhost:2000',
    port: 2000,
  },
  base: "http://localhost:2000",
  plugins: [
    federation({
      name: 'vite_provider',
      manifest: true,
      remotes: {
        esm_remote: {
          type: "module",
          name: "esm_remote",
          entry: "https://[...]/remoteEntry.js",
        },
        var_remote: "var_remote@https://[...]/remoteEntry.js",
      },
      shared: {
        react: {
          singleton: true,
        },
        'react/': {
          singleton: true,
        },
      },
    }),
  ],
  // Do you need to support build targets lower than chrome89?
  // You can use 'vite-plugin-top-level-await' plugin for that.
  build: {
    target: 'chrome89',
  },
};