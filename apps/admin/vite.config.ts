import { defineConfig, PluginOption, UserConfigExport } from 'vite';

import react from '@vitejs/plugin-react';
import { transformSync } from "@babel/core";

const relay: PluginOption = {
  name: "vite:relay",
  transform(src, id) {
    let code = src;

    if (/.(t|j)sx?/.test(id) && src.indexOf("graphql`") !== -1) {
      const out = transformSync(src, {
        plugins: [["babel-plugin-relay"]],
        code: true,
        filename: id,
      });

      if (!out?.code) {
        throw new Error(`vite-plugin-relay: Failed to transform ${id}`);
      }

      code = out.code;
    }

    return {
      code,
      map: null,
    };
  },
};

export default defineConfig(({ command, mode, ssrBuild }) => {
  const config: UserConfigExport = {
    esbuild: {
      format: 'esm',
    },
    resolve: {
      dedupe: ['react', 'react-dom', 'react-router-dom'],
    },
    plugins: [react(), relay],
  };

  return config;
});
