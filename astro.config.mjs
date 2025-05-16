// @ts-check
import { defineConfig } from 'astro/config';

import solidJs from '@astrojs/solid-js';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs()],
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()]
  }
});