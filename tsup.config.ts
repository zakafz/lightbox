import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'],
  dts: true,
  clean: true,
  minify: true,
  sourcemap: false,
  external: ['react', 'react-dom'],
  treeshake: true,
  esbuildOptions: (options) => {
    options.target = "esnext";
  },
});
