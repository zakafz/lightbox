import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/app/lightbox/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  outDir: 'dist',
  clean: true
});
