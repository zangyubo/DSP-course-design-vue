import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const LIST: AppRouteRecordRaw = {
  path: '/list',
  name: 'list',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: '数据加密',
    requiresAuth: true,
    icon: 'icon-lock',
    order: 2,
  },
  children: [
    {
      path: 'search-table', // The midline path complies with SEO specifications
      name: '加密处理',
      component: () => import('@/views/list/search-table/index.vue'),
      meta: {
        locale: 'menu.list.searchTable',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    // {
    //   path: 'card',
    //   name: 'Card',
    //   component: () => import('@/views/list/card/index.vue'),
    //   meta: {
    //     locale: 'menu.list.cardList',
    //     requiresAuth: true,
    //     roles: ['*'],
    //   },
    // },
  ],
};

export default LIST;
