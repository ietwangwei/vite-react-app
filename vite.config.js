import { inspectorServer } from 'react-dev-inspector/plugins/vite/index.js';
import reactRefresh from '@vitejs/plugin-react-refresh';
import fs from 'fs';
import path from 'path';
import eslintPlugin from 'vite-plugin-eslint';
import { viteMockServe } from 'vite-plugin-mock';

const { TARGET } = process.env;

const resolve = dir => path.join(__dirname, dir);

/**
 * https://vitejs.dev/config/
 * @type { import('vite').UserConfig }
 */
export default {
  esbuild: {
    jsxInject: "import T from 'i18next'"
  },
  build: {
    manifest: true
  },
  server: {
    port: 8000,
    https: {
      key: fs.readFileSync(resolve('config/cert/localhost.key')),
      cert: fs.readFileSync(resolve('config/cert/localhost.crt'))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: fs.readFileSync('./src/styles/_themes.scss')
      }
    }
  },
  optimizeDeps: {
    exclude: ['config', 'mock', 'fiddler', 'tests', 'src']
  },
  plugins: [
    reactRefresh(),
    eslintPlugin({
      include: 'src/**/*.+(js|jsx)',
      fix: true
    }),
    viteMockServe({
      supportTs: false,
      mockPath: 'mock',
      prodEnabled: false
    }),
    inspectorServer()
  ],
  base: TARGET === 'github' ? '/vite-react-app' : '/',
  resolve: {
    alias: {
      constants: resolve('src/constants'),
      components: resolve('src/components'),
      styles: resolve('src/styles'),
      layout: resolve('src/layout'),
      utils: resolve('src/utils'),
      routes: resolve('src/routes'),
      stores: resolve('src/stores'),
      pages: resolve('src/pages'),
      locales: resolve('src/locales'),
      tests: resolve('tests'),
      hooks: resolve('src/hooks'),
      apis: resolve('src/apis')
    },
    extensions: ['.js', '.jsx', '.json']
  },
  define: {},
  proxy: {}
};
