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
    path: '/add-debts',
    component: EmptyLayout,
    children: [
      {
        path: '',
        name: 'addDebts',
        component: () => import('@/pages/AddPage.vue'),
      },
    ],
  },
  {
    path: '/add-loan',
    component: EmptyLayout,
    children: [
      {
        path: '',
        name: 'addLoan',
        component: () => import('@/pages/AddPage.vue'),
      },
    ],
  },
]
