import { RouteRecordRaw } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import EmptyLayout from '@/layouts/EmptyLayout.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
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
        name: 'addDebts',
        component: () => import('@/pages/AddPage.vue'),
        children: [
          {
            path: ':id',
            name: 'updateDebts',
            component: () => import('@/pages/AddPage.vue'),
          },
        ],
      },
      {
        path: 'loan',
        name: 'addLoan',
        component: () => import('@/pages/AddPage.vue'),
        children: [
          {
            path: ':id',
            name: 'updateLoan',
            component: () => import('@/pages/AddPage.vue'),
          },
        ],
      },
    ],
  },
]
