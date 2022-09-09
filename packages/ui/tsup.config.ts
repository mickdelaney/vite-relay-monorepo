import { defineConfig } from 'tsup';

export default defineConfig(options => {
  return {
    entry: ['src/index.tsx'],
    dts: true,
    watch: options.watch,
    sourcemap: true,
    bundle: true,
    format: ['esm'],
    external: ['react'],
  };
});
