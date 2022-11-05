import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify/edge-functions';

export default defineConfig({
  site: import.meta.env.PUBLIC_PROD_URL,
  integrations: [tailwind()],
  output: 'server',
  adapter: netlify(),
});
