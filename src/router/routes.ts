import { RouteRecordRaw } from 'vue-router'
import ROUTES_NAMES from './routesNames'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import EmptyLayout from '@/layouts/EmptyLayout.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: ROUTES_NAMES.HOME,
        component: () => import('@/pages/HomePage.vue'),
      },
    ],
  },
  {
    path: '/add',
    component: EmptyLayout,
    children: [
      {
        path: 'debts',
        name: ROUTES_NAMES.ADD_DEBTS,
        component: () => import('@/pages/AddPage.vue'),
        children: [
          {
            path: ':id',
            name: ROUTES_NAMES.UPDATE_DEBTS,
            component: () => import('@/pages/AddPage.vue'),
          },
        ],
      },
      {
        path: 'loan',
        name: ROUTES_NAMES.ADD_LOAN,
        component: () => import('@/pages/AddPage.vue'),
        children: [
          {
            path: ':id',
            name: ROUTES_NAMES.UPDATE_LOAN,
            component: () => import('@/pages/AddPage.vue'),
          },
        ],
      },
    ],
  },
]
