// npm
import tailwind from '@astrojs/tailwind'

// astro
import { defineConfig } from 'astro/config'

import svelte from '@astrojs/svelte';

export default defineConfig({
  integrations: [tailwind(), svelte()],
})