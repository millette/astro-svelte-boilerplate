// npm
import solid from '@astrojs/solid-js'
import tailwind from '@astrojs/tailwind'

// astro
import { defineConfig } from 'astro/config'

export default defineConfig({
  integrations: [
    tailwind(),
    solid({
      include: ['**/solid/*'],
    }),
  ],
})
