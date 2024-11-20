import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'],
  dts: true,
  clean: true,
  sourcemap: false,
  external: ['react', 'react-dom']
});
