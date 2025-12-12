import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';
import vercel from '@astrojs/vercel';


export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: vercel(),
  site: 'https://your-domain.com',
  markdown: {
    syntaxHighlight: 'prism',
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
});