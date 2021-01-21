
const routes = [
  /* {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  }, */
  { path: '/login', component: () => import('pages/Login.vue') },
  { path: '/sex', component: () => import('pages/Sex.vue') },
  { path: '/birthday', component: () => import('pages/Birthday.vue') },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
