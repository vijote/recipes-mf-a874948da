import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'recipes',
      filename: "remoteEntry.js",
      exposes: {
        "./RecipeList": "./src/components/RecipeList.tsx",
      },
      shared: ["react", "react/"]
    }),
  ],
  // Do you need to support build targets lower than chrome89?
  // You can use 'vite-plugin-top-level-await' plugin for that.
  build: {
    target: 'chrome89',
  },
});