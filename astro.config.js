// npm
import tailwind from '@astrojs/tailwind'

// astro
import { defineConfig } from 'astro/config'

export default defineConfig({
  integrations: [
    tailwind(),
  ],
})
