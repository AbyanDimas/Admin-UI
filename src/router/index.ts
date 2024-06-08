import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import AuthLayout from '../layouts/AuthLayout.vue'
import AppLayout from '../layouts/AppLayout.vue'

import RouteViewComponent from '../layouts/RouterBypass.vue'
import { isAuthenticated } from '../pages/auth/Auth'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'dashboard' },
  },
  {
    name: 'admin',
    path: '/',
    component: AppLayout,
    redirect: { name: 'login' },
    children: [
      {
        name: 'dashboard',
        path: 'dashboard',
        component: () => import('../pages/admin/dashboard/Dashboard.vue'),
        beforeEnter: (to, from, next) => {
          if (isAuthenticated()) {
            next()
          } else {
            next({ name: 'login' })
          }
        },
      },
      {
        name: 'settings',
        path: 'settings',
        component: () => import('../pages/settings/Settings.vue'),
        beforeEnter: (to, from, next) => {
          if (isAuthenticated()) {
            next()
          } else {
            next({ name: 'login' })
          }
        },
      },
      {
        name: 'preferences',
        path: 'preferences',
        component: () => import('../pages/preferences/Preferences.vue'),
        beforeEnter: (to, from, next) => {
          if (isAuthenticated()) {
            next()
          } else {
            next({ name: 'login' })
          }
        },
      },
      {
        name: 'users',
        path: 'users',
        component: () => import('../pages/users/UsersPage.vue'),
        beforeEnter: (to, from, next) => {
          if (isAuthenticated()) {
            next()
          } else {
            next({ name: 'login' })
          }
        },
      },
      {
        name: 'forms',
        path: 'forms',
        component: () => import('../pages/blogs/forms.vue'),
        beforeEnter: (to, from, next) => {
          if (isAuthenticated()) {
            next()
          } else {
            next({ name: 'login' })
          }
        },
      },
      {
        name: 'peringatan',
        path: 'peringatan',
        component: () => import('../pages/blogs/peringatan.vue'),
        beforeEnter: (to, from, next) => {
          if (isAuthenticated()) {
            next()
          } else {
            next({ name: 'login' })
          }
        },
      },
      {
        name: 'berita',
        path: 'berita',
        component: () => import('../pages/blogs/berita.vue'),
        beforeEnter: (to, from, next) => {
          if (isAuthenticated()) {
            next()
          } else {
            next({ name: 'login' })
          }
        },
      },
      {
        name: 'projects',
        path: 'projects',
        component: () => import('../pages/projects/ProjectsPage.vue'),
        beforeEnter: (to, from, next) => {
          if (isAuthenticated()) {
            next()
          } else {
            next({ name: 'login' })
          }
        },
      },
      {
        name: 'pengunjung',
        path: 'pengunjung',
        component: () => import('../pages/visitor/pengunjung.vue'),
        beforeEnter: (to, from, next) => {
          if (isAuthenticated()) {
            next()
          } else {
            next({ name: 'login' })
          }
        },
      },
      {
        name: 'payments',
        path: '/payments',
        component: RouteViewComponent,
        children: [
          {
            name: 'payment-methods',
            path: 'payment-methods',
            component: () => import('../pages/payments/PaymentsPage.vue'),
            beforeEnter: (to, from, next) => {
              if (isAuthenticated()) {
                next()
              } else {
                next({ name: 'login' })
              }
            },
          },
          {
            name: 'billing',
            path: 'billing',
            component: () => import('../pages/billing/BillingPage.vue'),
            beforeEnter: (to, from, next) => {
              if (isAuthenticated()) {
                next()
              } else {
                next({ name: 'login' })
              }
            },
          },
          {
            name: 'pricing-plans',
            path: 'pricing-plans',
            component: () => import('../pages/pricing-plans/PricingPlans.vue'),
            beforeEnter: (to, from, next) => {
              if (isAuthenticated()) {
                next()
              } else {
                next({ name: 'login' })
              }
            },
          },
        ],
      },
      {
        name: 'faq',
        path: '/faq',
        component: () => import('../pages/faq/FaqPage.vue'),
        beforeEnter: (to, from, next) => {
          if (isAuthenticated()) {
            next()
          } else {
            next({ name: 'login' })
          }
        },
      },
    ],
  },
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        name: 'login',
        path: 'login',
        component: () => import('../pages/auth/Login.vue'),
      },
      {
        name: 'signup',
        path: 'signup',
        component: () => import('../pages/auth/Signup.vue'),
      },
      {
        name: 'recover-password',
        path: 'recover-password',
        component: () => import('../pages/auth/RecoverPassword.vue'),
      },
      {
        name: 'recover-password-email',
        path: 'recover-password-email',
        component: () => import('../pages/auth/CheckTheEmail.vue'),
      },
      {
        path: '',
        redirect: { name: 'login' },
      },
    ],
  },
  {
    name: '404',
    path: '/404',
    component: () => import('../pages/404.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    } else {
      window.scrollTo(0, 0)
    }
  },
  routes,
})

export default router
