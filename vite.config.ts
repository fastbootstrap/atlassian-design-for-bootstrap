import { resolve } from 'path';
import { defineConfig } from 'vite';
import { name, version, homepage } from './package.json';

const NAME = 'bootstrap';

const getBanner = () => {
  return `/*! FastBootstrap v${version} (${homepage}) */`;
};

export default defineConfig({
  base: './',
  build: {
    minify: true,
    emptyOutDir: true,
    outDir: 'dist/js',
    lib: {
      entry: resolve(__dirname, 'src/ts/index.ts'),
      name: NAME,
      formats: ['es', 'iife'],
      fileName: (format: string) => {
        if (format === 'es') return `${name}.mjs`;
        else if (format === 'iife') return `${name}.min.js`;
        else throw new Error(`${format} format is not defined.`);
      },
    },
    rollupOptions: {
      output: {
        banner: getBanner(),
      },
    },
    sourcemap: true,
  },
});
