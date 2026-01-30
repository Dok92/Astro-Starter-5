// @ts-nocheck
import { defineConfig } from 'astro/config';

import solidJs from '@astrojs/solid-js';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs()],
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  devToolbar: {
    enabled: false,
  },
});
