import loadable from '@loadable/component';
import MainLayout from 'layout/MainLayout';

import { redirect } from './utils.jsx';

const routes = [
  {
    path: '/',
    component: MainLayout,
    routes: [
      {
        path: '/',
        exact: true,
        component: redirect('/page1')
      },
      {
        path: '/page1',
        component: loadable(() => import('../pages/Page1/index'))
      },
      {
        path: '/page2',
        component: loadable(() => import('../pages/Page2/index'))
      }
    ]
  }
];

export default routes;
