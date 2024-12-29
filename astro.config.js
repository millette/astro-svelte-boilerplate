// npm
import tailwind from '@astrojs/tailwind'
import svelte from '@astrojs/svelte'

// astro
import { defineConfig } from 'astro/config'

export default defineConfig({
  integrations: [tailwind(), svelte({ extensions: ['.svelte'] })],
})
