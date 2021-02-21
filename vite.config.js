import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';

import env from './env';

const { ENV_TARGET, TARGET } = process.env;

const resolve = dir => path.join(__dirname, dir);

/**
 * https://vitejs.dev/config/
 * @type { import('vite').UserConfig }
 */
export default {
  plugins: [reactRefresh()],
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
    },
  },
  define: {
    BASE_URL: JSON.stringify(env[ENV_TARGET]),
  },
  proxy: {},
};
