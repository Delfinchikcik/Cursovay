const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'HotelsPage', component: () => import('pages/HotelsPage.vue') },
      { path: 'HistoryPage', component: () => import('pages/HistoryPage.vue') },
      { path: 'BeachPage', component: () => import('pages/BeachPage.vue') },
      { path: 'SightsPage', component: () => import('pages/SightsPage.vue') },
      { path: 'EntertainmentPage', component: () => import('pages/EntertainmentPage.vue') },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
