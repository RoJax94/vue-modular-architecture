import NotFoundPage from './pages/NotFoundPage.vue';

export default [
  {
    path: '/404',
    name: 'not-found',
    component: NotFoundPage,
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404',
  },
];
