import WebModule from './WebModule.vue';
import HomePage from './pages/HomePage.vue';

export default [
  {
    path: '/',
    name: 'web',
    component: WebModule,
    children: [
      {
        path: '',
        name: 'web.homepage',
        component: HomePage,
      },
    ],
  },
];
