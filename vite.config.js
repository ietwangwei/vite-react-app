import reactRefresh from '@vitejs/plugin-react-refresh';
import fs from 'fs';
import path from 'path';
import eslintPlugin from 'vite-plugin-eslint';

import env from './env.js';

const { ENV_TARGET, TARGET } = process.env;

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
    port: 8000
    // TODO: support http2
    // https: {
    //   ServerOptions: {
    //     ca: fs.readFileSync(resolve('config/rootCA.pem')),
    //     key: fs.readFileSync(resolve('config/privatekey.pem')),
    //     cert: fs.readFileSync(resolve('config/certificate.pem')),
    //   },
    // },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: fs.readFileSync('./src/styles/colors.scss')
      }
    }
  },

  plugins: [
    reactRefresh(),
    eslintPlugin({
      include: 'src/**/*.+(js|jsx)',
      fix: true
    })
  ],
  base: TARGET === 'github' ? '/vite-react-app' : '/',
  resolve: {
    alias: {
      components: resolve('src/components'),
      styles: resolve('src/styles'),
      layout: resolve('src/layout'),
      utils: resolve('src/utils'),
      routes: resolve('src/routes'),
      stores: resolve('src/stores'),
      pages: resolve('src/pages'),
      locales: resolve('src/locales'),
      tests: resolve('tests')
    },
    extensions: ['.js', '.jsx', '.json']
  },
  define: {
    BASE_URL: JSON.stringify(env[ENV_TARGET])
  },
  proxy: {}
};
