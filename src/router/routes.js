
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'menu', component: () => import('pages/MenuPage.vue') },
      { path: 'advertisements', component: () => import('pages/AdvertisementPage.vue') },
      { path: 'combos', component: () => import('pages/ComboPage.vue') },
      { path: 'rechages', component: () => import('pages/RechargePage.vue') },
      { path: 'news', component: () => import('pages/NewsPage.vue') },
      { path: 'shipments', component: () => import('pages/ShipmentPage.vue') }
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
