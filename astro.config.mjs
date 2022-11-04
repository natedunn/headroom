import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify/edge-functions';

export default defineConfig({
  site: 'https://headroom.dev',
  integrations: [tailwind()],
  output: 'server',
  adapter: netlify(),
});
