import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    core: 'packages/core/index.ts',
    react: 'packages/react/index.tsx',
    vue: 'packages/vue/index.ts',
  },
  outDir: 'dist',
  format: ['esm', 'cjs'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  treeshake: true,
  minify: false,
  external: ['react', 'vue', '@joycostudio/marquee'],
})
