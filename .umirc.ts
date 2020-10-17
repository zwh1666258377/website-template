import { defineConfig } from 'umi';

export default defineConfig({
  ssr: {},
  targets: false,
  autoprefixer: false,
  nodeModulesTransform: {
    type: 'none',
  },
  proxy: {
    '/api': {
      target: 'http://localhost:8080',
    },
    '/static': {
      target: 'http://localhost:8080',
    },
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
    },
  ],
});
