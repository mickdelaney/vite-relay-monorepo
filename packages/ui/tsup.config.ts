import { defineConfig } from 'tsup';
import relay from 'esbuild-plugin-relay';

export default defineConfig(options => {
  return {
    entry: ['src/index.tsx'],
    dts: true,
    esbuildPlugins: [relay()],
    watch: options.watch,
    sourcemap: true,
    bundle: true,
    format: ['esm'],
    external: ['react'],
  };
});
